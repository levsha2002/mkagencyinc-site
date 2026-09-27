// Pages with the daily hero rotation (path after /[lang]). Used by middleware.ts
// to route ?day=N / ?date=YYYY-MM-DD test previews to /[lang]/hero-preview.
// Edge-safe (no imports). Keep in sync with app/[lang]/hero-preview/page.tsx.
export const HERO_PREVIEW_PATH = 'hero-preview';

export const ROTATING_PATHS = [
  '',
  'car-insurance-florida-city',
  'homeowners-insurance-florida-city',
  'condo-insurance-florida-city',
  'coverage-check',
  'insurance/general-liability',
  'insurance/business-owners-policy',
  'insurance/commercial-auto',
  'insurance/errors-omissions',
  'insurance/life-insurance',
] as const;
