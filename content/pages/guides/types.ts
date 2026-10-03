import type { Block, Faq, Lang, Source } from '../../types';
import type { HeroImageKey } from '../../hero/images';

// Local "agent" hubs and plain-language guides (components/guides/GuidePage.tsx).
// Pure data, no JSX. Same EN slug under /en, /es and /ru.
//
// Owner rules (Mikhail, 2026-10-03):
// - No carrier names (Citizens Property Insurance is allowed), no rates, savings,
//   "best/cheapest/lowest/guaranteed", no coverage promises, no testimonials.
// - Staff may be named only where the text is about language help, and only:
//   Mikhail (Mike) Kozlov (Russian); Jose Chalela, Carolina Silva,
//   Elena De Oña (Spanish).
// - "Policy documents are issued in English; we explain them in your language."
// - Callback wording: "Call us, or we'll contact you within an hour" (business hours).
// - Commercial: general liability for eligible small businesses and contractors
//   only; other lines case by case. No workers' comp / inland marine / commercial
//   property / carrier names.
// - License line: the site footer already shows the agency license, so pages
//   carry no separate placeholder.

export interface GuideLink {
  /** Path without the language prefix, e.g. '/car-insurance-homestead-fl'. */
  path: string;
  label: string;
}

export interface GuidePageCopy {
  metaTitle: string; // <= 60 characters
  metaDesc: string; // <= 160 characters
  breadcrumb: string;
  kicker: string;
  h1a: string;
  h1b: string;
  /** The short "quick answer" shown in the hero. */
  answer: string;
  serviceType: string;
  intro: Block[];
  checklistTitle: string;
  checklist: string[];
  body: Block[];
  officeTitle: string;
  office: Block[];
  faqTitle: string;
  faq: Faq[];
  related: GuideLink[];
  sources: Source[];
}

export interface GuidePage {
  path: string;
  /** Preselected product on the callback form. */
  leadType: 'Auto' | 'Home' | 'Commercial';
  heroImage: HeroImageKey;
  published: string;
  modified: string;
  /** schema.org areaServed for the Service. */
  areaServed: object[];
  copy: Record<Lang, GuidePageCopy>;
}
