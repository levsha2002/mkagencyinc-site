import type { Block, Faq, Lang, Source } from '../../types';

// Florida landing pages for recreational vehicles, boats and life insurance
// (components/rec/RecPage.tsx). Pure data, no JSX. Same EN slug under /en, /es, /ru.
//
// Owner rules (Mikhail, 2026-10-03), enforced at build time in ./index.ts:
// - Never name a carrier. No prices, rates, discounts, "cheap", "best",
//   "lowest" or "guaranteed". No dealers, lenders or finance companies.
// - Selling points: coverage gaps, protecting family and income, a personal
//   agent who helps at claim time. Approved offer: "Send us your policy and
//   we'll check your coverage."
// - Coverage descriptions stay generic and say availability depends on the policy.
// - Every legal fact or statistic links to an official source in `sources`.

export type RecLine = 'motorcycle' | 'jet-ski' | 'boat' | 'off-road' | 'golf-cart' | 'autocycle' | 'life';

export interface RecFact {
  value: string;
  text: string;
  /** URL of the source (must also be listed in `sources`). */
  source: string;
}

export interface RecCard {
  h: string;
  p: string;
}

export interface RecLink {
  /** Path without the language prefix, e.g. '/boat-insurance-florida'. */
  path: string;
  label: string;
}

export interface RecCopy {
  metaTitle: string; // <= 60 characters
  metaDesc: string; // <= 160 characters
  breadcrumb: string;
  kicker: string;
  h1a: string;
  h1b: string;
  /** Short "quick answer" in the hero. */
  answer: string;
  serviceType: string;
  /** Label of the preselected option in the callback form, e.g. "Boat". */
  leadLabel: string;
  intro: Block[];
  factsTitle: string;
  facts: RecFact[];
  figureAlt: string;
  figureCaption: string;
  gapsTitle: string;
  gaps: RecCard[];
  coverageTitle: string;
  coverage: RecCard[];
  coverageNote: string;
  body: Block[];
  checklistTitle: string;
  checklist: string[];
  agentTitle: string;
  agent: Block[];
  faqTitle: string;
  faq: Faq[];
  related: RecLink[];
  sources: Source[];
}

export interface RecPage {
  line: RecLine;
  path: string;
  /** insurance_type value sent with the callback form (shown in the lead email). */
  leadValue: string;
  /** Lead source tag, always `rec-<line>`. */
  leadSource: `rec-${RecLine}`;
  /** Blog article for this line (content/blog/posts/<slug>.ts). */
  articleSlug: string;
  /** Existing catalog product page for the same line, if any (/insurance/<slug>). */
  productSlug?: string;
  published: string;
  modified: string;
  copy: Record<Lang, RecCopy>;
}
