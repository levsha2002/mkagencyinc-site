// "Related guides" links from landing pages to supporting articles and guides.
// Pure data, rendered by components/RelatedGuides.tsx. To link a new article,
// add `{ blog: '<slug>' }` to the right group: the block shows only the
// languages the post really has (title comes from the post), so it never links
// to a 404. `page` items are fixed guide pages; list their languages if they
// don't exist in all three.
type Lang = 'en' | 'es' | 'ru';

export type RelatedGuideLink =
  | { blog: string }
  | { page: string; label: Record<Lang, string>; langs?: Lang[] };

export interface RelatedGuideGroup {
  /** Landing-page paths (no language prefix) that show this block. */
  pages: string[];
  links: RelatedGuideLink[];
}

export const RELATED_GUIDES: RelatedGuideGroup[] = [
  {
    // Car insurance page and its 5 city variants.
    pages: [
      '/car-insurance-florida-city',
      '/car-insurance-homestead-fl',
      '/car-insurance-cutler-bay-fl',
      '/car-insurance-kendall-fl',
      '/car-insurance-miami-dade-county-fl',
      '/car-insurance-broward-county-fl',
    ],
    links: [
      { blog: 'florida-minimum-car-insurance-requirements' },
      { blog: 'uninsured-motorist-coverage-florida' },
      { blog: 'seguro-auto-licencia-extranjera-florida' },
    ],
  },
  {
    // Homeowners page and its 5 city variants.
    pages: [
      '/homeowners-insurance-florida-city',
      '/homeowners-insurance-homestead-fl',
      '/homeowners-insurance-cutler-bay-fl',
      '/homeowners-insurance-kendall-fl',
      '/homeowners-insurance-miami-dade-county-fl',
      '/homeowners-insurance-broward-county-fl',
    ],
    links: [
      { blog: 'roof-age-home-insurance-florida' },
      { blog: 'wind-mitigation-inspection-florida' },
      { blog: 'my-safe-florida-home-2026' },
      { blog: 'citizens-takeout-offer' },
      {
        page: '/florida-home-insurance-wind-deductible',
        label: {
          en: 'Florida hurricane (wind) deductible explained',
          es: 'Deducible de huracán (viento) en Florida',
          ru: 'Ураганная (ветровая) франшиза во Флориде',
        },
      },
    ],
  },
  {
    pages: ['/sr22-insurance-florida-city'],
    links: [{ blog: 'non-owner-sr22-florida' }, { blog: 'sr22-florida-guia' }],
  },
  {
    pages: ['/flood-insurance-homestead-fl'],
    links: [{ blog: 'citizens-flood-insurance-requirement-2027' }],
  },
  // Condo page (supporting article from the gap-articles batches).
  {
    pages: ['/condo-insurance-florida-city'],
    links: [{ blog: 'condo-milestone-inspection-sirs-florida' }],
  },
  {
    pages: ['/florida-home-insurance-wind-deductible'],
    links: [{ blog: 'hurricane-claim-timeline-florida' }],
  },
  {
    pages: ['/new-construction-home-insurance-florida'],
    links: [
      { blog: 'builder-warranty-vs-homeowners-insurance-florida' },
      { blog: 'roof-age-home-insurance-florida' },
    ],
  },
  {
    pages: ['/classic-car-insurance-florida-city'],
    links: [{ blog: 'antique-license-plates-florida' }],
  },
  {
    pages: ['/umbrella-insurance-florida-city'],
    links: [{ blog: 'lending-your-car-florida-owner-liability' }],
  },
  {
    pages: ['/commercial-insurance-florida-city'],
    links: [{ blog: 'start-small-business-miami-dade-licenses' }],
  },
  // Trade pages (components/business/BusinessServicePage).
  {
    pages: ['/contractor-insurance-florida'],
    links: [{ blog: 'chapter-558-notice-contractors-florida' }],
  },
  {
    pages: ['/landscaping-insurance-florida'],
    links: [{ blog: 'fertilizer-rules-landscapers-miami-dade' }],
  },
  {
    pages: ['/handyman-insurance-florida'],
    links: [{ blog: 'helper-employee-or-1099-florida-workers-comp' }],
  },
  {
    pages: ['/window-cleaning-insurance-florida'],
    links: [{ blog: 'osha-fall-protection-window-cleaners' }],
  },
  {
    pages: ['/painting-contractor-insurance-florida'],
    links: [{ blog: 'epa-lead-safe-rrp-painters-florida' }],
  },
  {
    pages: ['/pressure-washing-insurance-florida'],
    links: [{ blog: 'pressure-washing-runoff-storm-drains-miami-dade' }],
  },
  {
    pages: ['/work-truck-insurance-florida'],
    links: [{ blog: 'usdot-number-florida-work-trucks' }],
  },
  {
    pages: ['/builders-risk-insurance-florida'],
    links: [{ blog: 'construction-stalls-builders-risk-florida' }],
  },
];
