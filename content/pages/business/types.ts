import type { Block, Faq, Lang, Source } from '../../types';

// Data model for the "business type" service pages (one per trade), e.g.
// /[lang]/window-cleaning-insurance-florida. Pure data, no JSX. Every legal or
// numeric fact must come from an official source listed in `sources`.

export interface BusinessPageCopy {
  metaTitle: string;
  metaDesc: string;
  breadcrumb: string;
  kicker: string;
  h1a: string;
  h1b: string;
  sub: string;
  /** Short label for this business type in link lists ("Window cleaning"). */
  linkLabel: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  /** Intro + risks section (rendered before the coverage cards). */
  intro: Block[];
  covTitle: string;
  cov: { h: string; p: string }[];
  /** Florida rules, quote checklist, etc. (rendered after the coverage cards). */
  body: Block[];
  faqTitle: string;
  faq: Faq[];
  sources: Source[];
}

export interface BusinessPage {
  /** URL path without language, e.g. '/window-cleaning-insurance-florida'. */
  path: string;
  icon: string;
  published: string;
  modified: string;
  /** Team members shown on the page (slugs from lib/team-data.ts). */
  team: string[];
  copy: Record<Lang, BusinessPageCopy>;
}
