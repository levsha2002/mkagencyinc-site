// Ad-click attribution: which Google Ads click produced which lead.
//
// Without this, a lead in Neon cannot be tied back to the ad click that
// produced it, so Google Ads only ever learns "a form was submitted" — never
// "that lead bought a policy". Storing the click id (gclid / gbraid / wbraid)
// with each lead is what makes offline conversion import possible: upload the
// click ids of leads that became customers and Smart Bidding starts optimising
// for sold policies instead of form fills and phone-link taps.
//
// Capture runs on every page load (inline script in the layout and in
// public/auto-quote.html). It only overwrites the stored value when the URL
// carries a click id or UTM tag, so browsing to a second page does not wipe
// the ad click that brought the visitor in. Kept for 90 days, matching the
// Google Ads click-through conversion window.

export const ATTR_KEY = 'mk_attr';
const FIELDS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

export type Attribution = Partial<Record<(typeof FIELDS)[number] | 'landing_page', string>> & { ts?: number };

/** Inline script body. Plain ES5 so it can be pasted into static HTML too. */
export function attributionCaptureScript() {
  return `
(function(){
  try {
    var q=new URLSearchParams(location.search), F=${JSON.stringify(FIELDS)}, a={}, hit=false;
    for(var i=0;i<F.length;i++){ var v=q.get(F[i]); if(v){ a[F[i]]=v.slice(0,200); hit=true; } }
    if(!hit) return;
    a.landing_page=location.pathname.slice(0,200); a.ts=Date.now();
    localStorage.setItem('${ATTR_KEY}', JSON.stringify(a));
  } catch(e){}
})();`.trim();
}

/** Client side: the stored attribution, or {} when absent or expired. */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {};
  try {
    const a = JSON.parse(localStorage.getItem(ATTR_KEY) || '{}') as Attribution;
    if (!a.ts || Date.now() - a.ts > MAX_AGE_MS) return {};
    return a;
  } catch {
    return {};
  }
}

/** Server side: keep only known string fields, bounded in length. The body is
 *  untrusted input, so nothing else passes through. */
export function cleanAttribution(raw: unknown): { gclid: string | null; utm: string | null } {
  if (!raw || typeof raw !== 'object') return { gclid: null, utm: null };
  const r = raw as Record<string, unknown>;
  const out: Record<string, string> = {};
  for (const k of [...FIELDS, 'landing_page'] as const) {
    const v = r[k];
    if (typeof v === 'string' && v) out[k] = v.slice(0, 200);
  }
  const gclid = out.gclid || out.gbraid || out.wbraid || null;
  return { gclid, utm: Object.keys(out).length ? JSON.stringify(out) : null };
}

/** One line for the notification email, so the agent can see a lead came from an ad. */
export function attributionEmailRow(a: { gclid: string | null; utm: string | null }) {
  if (!a.utm) return '';
  const esc = (s: string) => s.replace(/[<>&"]/g, (c) => `&#${c.charCodeAt(0)};`);
  return `<p><b>Ad attribution:</b> ${a.gclid ? 'Google Ads click' : 'tagged link'} — ${esc(a.utm)}</p>`;
}
