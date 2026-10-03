import type { Block, Faq, Source } from '@/content/types';

export type Lang = 'en' | 'es' | 'ru';
export const PROTECT_LANGS: Lang[] = ['en', 'es', 'ru'];

/** Topic slugs under /[lang]/protect/<slug>. Same English path in every language (site convention). */
import type { TopicSlug } from './types-paths';
export type { TopicSlug };
export const TOPIC_SLUGS: TopicSlug[] = ['car-insurance', 'home-insurance', 'life-insurance', 'umbrella-insurance'];

export type FigureKey =
  | 'car-shortfall'
  | 'paycheck-timeline'
  | 'two-kinds-of-losses'
  | 'umbrella-layers'
  | 'limit-vs-verdict'
  | 'home-liability'
  | 'family-paycheck'
  | 'future-paychecks';

export type SourceKey =
  | 'iiiUninsured'
  | 'flhsmvInsurance'
  | 'statPip'
  | 'statUm'
  | 'dfsAuto'
  | 'dfsToolkit'
  | 'nhtsaCost'
  | 'flhsmvHitRun'
  | 'ssaDisability'
  | 'limra2026'
  | 'iiiDogBite'
  | 'fdohDrowning'
  | 'case4dca2020'
  | 'caseSc1785'
  | 'caseSc012846';

/** "Example" story (made up, clearly labeled) told as short steps. */
export interface Story {
  title: string;
  steps: string[];
  /** Short closing line, e.g. what UM changes. */
  ending?: string;
}

/** A real, public court case. Described neutrally; no carrier or private names. */
export interface RealCase {
  title: string;
  where: string;
  happened: string;
  decided: string;
  shows: string;
  source: SourceKey;
}

export interface Stat {
  value: string;
  text: string;
  source: SourceKey;
}

export interface Section {
  id?: string;
  h2: string;
  blocks: Block[];
  figure?: FigureKey;
  stories?: Story[];
}

export interface TopicCopy {
  metaTitle: string;
  metaDesc: string;
  tab: string;
  kicker: string;
  h1: string;
  sub: string;
  heroFigure: FigureKey;
  keyTitle: string;
  key: string[];
  sections: Section[];
  casesTitle?: string;
  casesIntro?: string;
  cases?: RealCase[];
  statsTitle: string;
  stats: Stat[];
  checklistTitle: string;
  checklist: string[];
  relatedTitle: string;
  related: { href: string; label: string; text: string }[];
  faq: Faq[];
  ctaTitle: string;
  ctaText: string;
  disclaimer: string;
  sources: SourceKey[];
}

export interface TopicPage {
  slug: TopicSlug;
  leadSource: string;
  leadType: 'Auto' | 'Home' | 'Commercial' | 'Life';
  published: string;
  modified: string;
  t: Record<Lang, TopicCopy>;
}

export interface HubPanel {
  slug: TopicSlug;
  figure: FigureKey;
  title: string;
  points: string[];
  more: string;
}

export interface HubCopy {
  metaTitle: string;
  metaDesc: string;
  kicker: string;
  h1: string;
  sub: string;
  tabsTitle: string;
  tabsIntro: string;
  panels: HubPanel[];
  whyTitle: string;
  why: Block[];
  toolsTitle: string;
  tools: { href: string; label: string; text: string }[];
  faq: Faq[];
  ctaTitle: string;
  ctaText: string;
  disclaimer: string;
  sources: SourceKey[];
}

export type { Block, Faq, Source };
