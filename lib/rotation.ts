// Daily content rotation (hero images + headlines).
//
// The variant is picked from the CALENDAR DATE IN AMERICA/NEW_YORK, so every
// visitor sees the same variant all day and it flips at midnight Eastern.
// Pages that rotate export `revalidate = 3600` (ISR): Vercel re-renders them at
// most once an hour, so the new day's variant is live within about an hour of
// midnight ET without a deploy. The choice is made on the server during the ISR
// render (no client-side swap), so there is no hydration mismatch or flash.
//
// Testing: `?day=N` (variant index) or `?date=YYYY-MM-DD` on a rotating page is
// rewritten by middleware.ts to /[lang]/hero-preview/..., a dynamic, noindex
// route that sets an override for that single request (see setRotationOverride).
import { cache } from 'react';

export const ROTATION_TZ = 'America/New_York';

const DAY_MS = 86400000;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Today's date in America/New_York as YYYY-MM-DD. */
export function easternDate(now: Date = new Date()): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: ROTATION_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

/** Days since 1970-01-01 for a YYYY-MM-DD calendar date. */
export function dayNumberOf(isoDate: string): number {
  const [y, m, d] = isoDate.split('-').map(Number);
  return Math.floor(Date.UTC(y, m - 1, d) / DAY_MS);
}

// Per-request override used only by the hero-preview route. React's cache()
// is scoped to a single server request, so this never leaks into ISR pages.
const overrideStore = cache((): { day?: number } => ({}));

/** Preview only: force the variant index (?day=N) or the date (?date=YYYY-MM-DD) for this request. */
export function setRotationOverride(opts: { day?: number; date?: string }) {
  const store = overrideStore();
  if (typeof opts.day === 'number' && Number.isFinite(opts.day) && opts.day >= 0) store.day = Math.floor(opts.day);
  else if (opts.date && ISO_DATE.test(opts.date)) store.day = dayNumberOf(opts.date);
}

export function isRotationPreview(): boolean {
  return overrideStore().day !== undefined;
}

/** The rotation counter: advances by 1 every Eastern calendar day. */
export function rotationDay(): number {
  const o = overrideStore().day;
  return o !== undefined ? o : dayNumberOf(easternDate());
}

/** Pick today's item. Different pool sizes just cycle at their own length. */
export function pickDaily<T>(arr: readonly T[]): T {
  const n = rotationDay();
  return arr[((n % arr.length) + arr.length) % arr.length];
}

// ---- Back-compat (older callers) ----
export type Period = 'day' | 'week';
export function rotationIndex(period: Period = 'day'): number {
  const n = rotationDay();
  return period === 'week' ? Math.floor(n / 7) : n;
}
export function pickRotating<T>(arr: readonly T[], period: Period = 'day'): T {
  return arr[rotationIndex(period) % arr.length];
}
