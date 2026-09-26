import type { Block, Faq, Lang, Source } from '../types';
import type { Author } from '../authors';

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
  /** Optional byline/schema author override. Omit it to use DEFAULT_AUTHOR from
   *  content/authors.ts ("Written and reviewed by Mikhail Kozlov, licensed insurance agent, M&K Agency"). */
  author?: Author;
  /** Only the languages present here are built, linked, put in hreflang and the sitemap. */
  translations: Partial<Record<Lang, PostTranslation>>;
}
