// Server-only: reads the public Allstate agent page and extracts the
// aggregate rating that page publishes in its schema.org microdata.
// - Cached with ISR-style revalidation (weekly), so at most one request per
//   week per deployment; pages that render the badge stay static + ISR.
// - Never throws. Any network error, block, markup change or implausible value
//   returns the checked-in fallback from data/reviews.json.
// - We only DISPLAY the number (with a link to the source). We deliberately do
//   not emit AggregateRating/Review structured data on our own site
//   (Google treats that as self-serving review markup).
import 'server-only';
import fallbackData from '@/data/reviews.json';

export type Rating = {
  rating: number; // rounded to one decimal
  count: number;
  source: string;
  url: string;
  checked: string; // YYYY-MM-DD of the fallback, or ISO time of the live fetch
  live: boolean; // true = parsed from the Allstate page, false = fallback
  note?: string; // short reason when the fallback was used (rendered as a data attribute)
};

export const RATING_FALLBACK: Rating = {
  rating: Math.round(Number(fallbackData.rating) * 10) / 10,
  count: Number(fallbackData.count),
  source: fallbackData.source,
  url: fallbackData.url,
  checked: fallbackData.checked,
  live: false,
};

const REVALIDATE_SECONDS = 604800; // 7 days (data cache). Pages re-render daily, so a failed fetch is retried within a day.
const TIMEOUT_MS = 5000;
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

/** Pulls ratingValue / reviewCount out of the AggregateRating microdata block. */
export function parseAggregateRating(html: string): { rating: number; count: number } | null {
  if (!html) return null;
  // Prefer the block inside the reviews section, else the first AggregateRating on the page.
  const reviewsIdx = html.indexOf('id="js-Reviews"');
  let idx = reviewsIdx >= 0 ? html.indexOf('schema.org/AggregateRating', reviewsIdx) : -1;
  if (idx < 0) idx = html.indexOf('schema.org/AggregateRating');
  if (idx < 0) return null;
  const block = html.slice(idx, idx + 4000);
  const rv =
    block.match(/itemprop=["']ratingValue["'][^>]*content=["']([\d.]+)["']/i) ||
    block.match(/itemprop=["']ratingValue["'][^>]*>\s*([\d.]+)\s*</i);
  const rc =
    block.match(/itemprop=["']reviewCount["'][^>]*content=["'](\d[\d,]*)["']/i) ||
    block.match(/itemprop=["']reviewCount["'][^>]*>\s*(\d[\d,]*)\s*</i);
  if (!rv || !rc) return null;
  const rating = parseFloat(rv[1]);
  const count = parseInt(rc[1].replace(/,/g, ''), 10);
  if (!Number.isFinite(rating) || !Number.isFinite(count)) return null;
  return { rating, count };
}

export function isPlausible(r: { rating: number; count: number } | null): boolean {
  if (!r) return false;
  if (!(r.rating >= 1 && r.rating <= 5)) return false;
  if (!Number.isInteger(r.count) || r.count < 100) return false;
  if (r.count < RATING_FALLBACK.count * 0.9) return false;
  return true;
}

// If the source just failed in this process (e.g. during a build that renders
// dozens of pages), don't hit it again for a few minutes; serve the fallback.
let lastFailure = 0;
let lastReason = '';
const FAILURE_BACKOFF_MS = 10 * 60 * 1000;
function fail(msg: string): Rating {
  lastFailure = Date.now();
  lastReason = msg.slice(0, 120);
  console.warn(`[reviews] ${msg}; using fallback`);
  return { ...RATING_FALLBACK, note: lastReason };
}

export async function getRating(): Promise<Rating> {
  if (lastFailure && Date.now() - lastFailure < FAILURE_BACKOFF_MS) return { ...RATING_FALLBACK, note: `backoff: ${lastReason}` };
  try {
    const res = await fetch(RATING_FALLBACK.url, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ['allstate-rating'] },
      headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml', 'Accept-Language': 'en-US,en;q=0.9' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return fail(`Allstate page HTTP ${res.status}`);
    const parsed = parseAggregateRating(await res.text());
    if (!isPlausible(parsed)) return fail(`implausible or missing rating (${JSON.stringify(parsed)})`);
    return {
      rating: Math.round(parsed!.rating * 10) / 10,
      count: parsed!.count,
      source: RATING_FALLBACK.source,
      url: RATING_FALLBACK.url,
      checked: res.headers.get('date') || new Date().toISOString(),
      live: true,
    };
  } catch (e) {
    const err = e as { message?: string; name?: string; cause?: { code?: string; message?: string } };
    const cause = err?.cause ? ` (${err.cause.code || err.cause.message || ''})` : '';
    return fail(`fetch failed: ${err?.name || ''} ${err?.message || String(e)}${cause}`);
  }
}
