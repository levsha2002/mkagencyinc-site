// JSON-LD helpers for the byline author. Data lives in content/authors.ts.
import { DEFAULT_AUTHOR, type Author } from '@/content/authors';
import type { Lang } from '@/content/types';
import { SITE_URL } from '@/lib/seo';

/** The business, as referenced from Person.worksFor and as Article publisher. */
export const AGENCY_LD = { '@type': 'InsuranceAgency', name: 'M&K Agency', url: SITE_URL } as const;

/** Team-page URL of the author for this language, or undefined. */
export function authorPath(author: Author, lang: Lang): string | undefined {
  return author.teamSlug ? `/${lang}/team#${author.teamSlug}` : undefined;
}

/** schema.org Person for an author. */
export function personLd(author: Author = DEFAULT_AUTHOR, lang: Lang = 'en') {
  const path = authorPath(author, lang);
  return {
    '@type': 'Person',
    name: author.name,
    jobTitle: author.jobTitle,
    ...(path ? { url: `${SITE_URL}${path}` } : {}),
    worksFor: AGENCY_LD,
  };
}
