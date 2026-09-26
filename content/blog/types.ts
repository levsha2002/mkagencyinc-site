import type { Block, Faq, Lang, Source } from '../types';

export interface PostTranslation {
  /** Visible H1 and default <title>. */
  title: string;
  /** Optional shorter <title> (keep under ~65 chars incl. " | M&K Agency"). */
  metaTitle?: string;
  /** Meta description, 120–160 characters. Unique per page. */
  description: string;
  /** 1–2 sentence teaser for the blog index card. Defaults to description. */
  excerpt?: string;
  /** Small label above the H1, e.g. "Flood insurance". */
  category?: string;
  body: Block[];
  faq?: Faq[];
  /** Official sources actually used for the facts in this article. */
  sources: Source[];
}

export interface BlogPost {
  /** URL slug, shared by every translation: /[lang]/blog/<slug>. */
  slug: string;
  /** ISO date (YYYY-MM-DD). */
  datePublished: string;
  dateModified?: string;
  /** Only the languages present here are built, linked, put in hreflang and the sitemap. */
  translations: Partial<Record<Lang, PostTranslation>>;
}
