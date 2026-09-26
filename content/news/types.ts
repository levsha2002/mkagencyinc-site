import type { Block, Lang } from '../types';
import type { Author } from '../authors';

// Data model for the daily "Insurance News" editions (/[lang]/news/<slug>).
// Pure data, no JSX. See content/news/README.md.

/** The original report an item is based on. Always link the original. */
export interface NewsSource {
  /** Publisher shown to readers, e.g. "Florida Office of Insurance Regulation". */
  name: string;
  /** Publication date of the original (YYYY-MM-DD). */
  date: string;
  /** Link to the original page. */
  url: string;
  /** Optional title of the original page (used as the link's title attribute). */
  title?: string;
}

/** One news item inside an edition. Summaries are written in our own words. */
export interface NewsItem {
  headline: string;
  /** 2–4 sentences, own words. Inline [links](/en/quote) and **bold** allowed. */
  summary: string;
  /** One line, shown after "Why it matters for you:". */
  why: string;
  /** The first source is the primary one. Add a second only if it adds a fact. */
  sources: NewsSource[];
}

export interface EditionTranslation {
  /** The only H1. */
  title: string;
  /** Optional <title>, <= ~65 chars. Defaults to "<title> | M&K Agency". */
  metaTitle?: string;
  /** 120–160 character meta description. */
  description: string;
  /** Optional teaser for the index card. Defaults to the description. */
  excerpt?: string;
  /** Short lead paragraph above the items. */
  intro?: string;
  items: NewsItem[];
  /** Optional closing blocks after the items (e.g. a short "Tropics check"). */
  extra?: Block[];
  /** Sources used only in `extra` (items carry their own). */
  extraSources?: NewsSource[];
}

export interface NewsEdition {
  /** "yyyy-mm-dd-short-slug"; must start with datePublished. Same for every language. */
  slug: string;
  /** YYYY-MM-DD (Eastern). */
  datePublished: string;
  /** YYYY-MM-DD, set when you correct or update an edition. */
  dateModified?: string;
  /** Omit to use DEFAULT_AUTHOR (content/authors.ts). Don't override without a reason. */
  author?: Author;
  /** Only the languages present here are built, linked, put in hreflang and the sitemap. */
  translations: Partial<Record<Lang, EditionTranslation>>;
}

export type { Lang };
