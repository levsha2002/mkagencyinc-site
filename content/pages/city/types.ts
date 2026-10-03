import type { Block, Faq, Lang, Source } from '../../types';
import type { HeroImageKey } from '../../hero/images';

// Data model for the local SEO pages (city pages such as
// /[lang]/car-insurance-homestead-fl and county hubs such as
// /[lang]/homeowners-insurance-miami-dade-county-fl). Pure data, no JSX.
//
// Content rules (owner, Oct 2026):
// - Every page has its own local content. No copy-paste between cities.
// - Facts must be verifiable; the sources used are listed in `sources`.
// - No carrier names, no "cheapest/lowest price" claims, no staff names other
//   than the default author. We serve these areas from the Florida City office;
//   never imply an office in the city itself.

export type Line = 'auto' | 'home';

export interface CityPageCopy {
  metaTitle: string;
  metaDesc: string;
  /** Last breadcrumb item. */
  breadcrumb: string;
  kicker: string;
  h1a: string;
  h1b: string;
  sub: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  /** Local context, rendered right after the hero. */
  intro: Block[];
  checklistTitle: string;
  /** Coverage-gaps checklist (inline markup allowed). */
  checklist: string[];
  /** Florida rules, local risks, how we help. */
  body: Block[];
  officeTitle: string;
  /** Distance / drive to the Florida City office and how we work with clients there. */
  office: Block[];
  faqTitle: string;
  faq: Faq[];
  sources: Source[];
}

export interface CityPage {
  /** URL path without language, e.g. '/car-insurance-homestead-fl'. */
  path: string;
  line: Line;
  kind: 'city' | 'county';
  /** Short area key used for link lists and the lead `source`. */
  area: 'homestead' | 'cutler-bay' | 'kendall' | 'miami-dade' | 'broward';
  /** Parent county hub path (city pages only), for the breadcrumb. */
  parent?: string;
  heroImage: HeroImageKey;
  published: string;
  modified: string;
  /** County hubs: communities served. `path` only when a page for it exists. */
  served?: { name: string; path?: string }[];
  /** schema.org areaServed entries. */
  areaServed: { '@type': string; name: string }[];
  copy: Record<Lang, CityPageCopy>;
}
