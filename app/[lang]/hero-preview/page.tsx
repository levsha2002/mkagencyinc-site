import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRotationOverride, rotationDay } from '@/lib/rotation';
import { ROTATING_PATHS } from '@/lib/rotation-paths';
import Home, { generateMetadata as homeMeta } from '../page';
import CarPage, { generateMetadata as carMeta } from '../car-insurance-florida-city/page';
import HomeownersPage, { generateMetadata as homeownersMeta } from '../homeowners-insurance-florida-city/page';
import CondoPage, { generateMetadata as condoMeta } from '../condo-insurance-florida-city/page';
import CoverageCheckPage, { generateMetadata as coverageMeta } from '../coverage-check/page';
import ProductPage, { generateMetadata as productMeta } from '../insurance/[slug]/page';

// TESTING ONLY: preview any day's hero variant on a rotating page.
//   /en?day=3                        -> variant #3 (0-based) of every pool
//   /es/coverage-check?date=2026-10-04 -> what that page shows on Oct 4 (ET)
// middleware.ts rewrites those URLs here (the address bar keeps the real URL);
// /[lang]/hero-preview?path=<page>&day=N also works directly.
// Always dynamic, `noindex, nofollow` (meta + X-Robots-Tag from middleware),
// canonical stays on the real page, and the preview route is disallowed in
// robots.txt. Normal visitors never hit this: the real pages stay static/ISR.
export const dynamic = 'force-dynamic';

type SP = { path?: string; day?: string; date?: string };

function resolve(lang: string, sp: SP) {
  const path = (sp.path ?? '').replace(/^\/+|\/+$/g, '');
  if (!(ROTATING_PATHS as readonly string[]).includes(path)) return null;
  const day = sp.day !== undefined && /^\d{1,6}$/.test(sp.day) ? Number(sp.day) : undefined;
  const date = sp.date && /^\d{4}-\d{2}-\d{2}$/.test(sp.date) ? sp.date : undefined;
  if (day === undefined && !date) return null;
  const params = { lang };
  if (path === '') return { path, day, date, render: () => <Home params={params} />, meta: () => homeMeta({ params }) };
  if (path === 'car-insurance-florida-city') return { path, day, date, render: () => <CarPage params={params} />, meta: () => carMeta({ params }) };
  if (path === 'homeowners-insurance-florida-city') return { path, day, date, render: () => <HomeownersPage params={params} />, meta: () => homeownersMeta({ params }) };
  if (path === 'condo-insurance-florida-city') return { path, day, date, render: () => <CondoPage params={params} />, meta: () => condoMeta({ params }) };
  if (path === 'coverage-check') return { path, day, date, render: () => <CoverageCheckPage params={params} />, meta: () => coverageMeta({ params }) };
  const slug = path.replace(/^insurance\//, '');
  const p = { lang, slug };
  return { path, day, date, render: () => <ProductPage params={p} />, meta: () => productMeta({ params: p }) };
}

export async function generateMetadata({ params, searchParams }: { params: { lang: string }; searchParams: SP }): Promise<Metadata> {
  const r = resolve(params.lang, searchParams);
  const base = r ? ((await r.meta()) as Metadata) : {};
  return { ...base, robots: { index: false, follow: false } };
}

export default function HeroPreview({ params, searchParams }: { params: { lang: string }; searchParams: SP }) {
  const r = resolve(params.lang, searchParams);
  if (!r) notFound();
  // Per-request override (React cache), read by pickDaily() in the page below.
  setRotationOverride({ day: r.day, date: r.date });
  const n = rotationDay();
  return (
    <>
      <div className="rot-preview-flag" role="note">
        Hero preview · {r.date ? `date ${r.date}` : `day ${r.day}`} · rotation #{n} · /{params.lang}
        {r.path ? `/${r.path}` : ''}
      </div>
      {r.render()}
    </>
  );
}
