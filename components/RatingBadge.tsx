// Server component (no client JS): "4.5 ★ · 627 reviews on Allstate.com",
// stars drawn proportionally to the real value, linking to the source page.
// Numbers come from lib/reviews.ts (live Allstate page, weekly; fallback file).
// Intentionally NO AggregateRating/Review structured data here.
import { getRating } from '@/lib/reviews';
import { getDict } from '@/lib/dictionaries';

function plural(lang: string, n: number, rb: { one: string; few: string; many: string }) {
  if (lang === 'ru') {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return rb.one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return rb.few;
    return rb.many;
  }
  return n === 1 ? rb.one : rb.many;
}

export default async function RatingBadge({
  lang,
  variant = 'inline',
  className = '',
}: {
  lang: string;
  variant?: 'hero' | 'inline' | 'card';
  className?: string;
}) {
  const r = await getRating();
  const rb = getDict(lang).ratingBadge;
  const ratingText = r.rating.toFixed(1);
  const countText = r.count.toLocaleString('en-US');
  const reviewsWord = plural(lang, r.count, rb);
  const pct = Math.max(0, Math.min(100, (r.rating / 5) * 100));
  const aria = rb.aria.replace('{r}', ratingText).replace('{n}', countText).replace('{reviews}', reviewsWord);
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener"
      className={`rating-badge rating-badge--${variant} ${className}`.trim()}
      aria-label={aria}
      data-rating-source={r.live ? 'live' : 'fallback'}
      data-rating-checked={r.checked}
    >
      <span className="rating-badge-num">{ratingText}</span>
      <span className="rating-stars" aria-hidden="true">
        <span className="rating-stars-bg">★★★★★</span>
        <span className="rating-stars-fg" style={{ width: `${pct}%` }}>★★★★★</span>
      </span>
      <span className="rating-badge-text">
        · {countText} {reviewsWord} {rb.on} Allstate.com
      </span>
    </a>
  );
}
