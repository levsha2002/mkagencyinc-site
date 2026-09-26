import type { Lang } from './types';

// Authors shown in the visible byline and in Article/WebPage JSON-LD.
// Pure data (no JSX). DEFAULT_AUTHOR is used by every blog post and by the
// flood service page unless a post sets its own `author` (see content/blog/README.md).
//
// Rules from the owner: credentials are only "licensed insurance agent". Do not
// add a license number, carrier names or any other credential here.

/** Visible byline for one language. The name is linked to the team page when
 *  `teamSlug` is set: `${prefix}<a>${name}</a>${suffix}`. */
export interface Byline {
  prefix: string;
  name: string;
  suffix: string;
}

export interface Author {
  /** schema.org Person name. */
  name: string;
  /** schema.org Person jobTitle. */
  jobTitle: string;
  /** Anchor id of the person on /[lang]/team (the `slug` in lib/team-data.ts).
   *  Links the byline name and becomes the Person `url`. Omit if not on the team page. */
  teamSlug?: string;
  /** Visible byline text per language. */
  byline: Record<Lang, Byline>;
}

export const DEFAULT_AUTHOR: Author = {
  name: 'Mikhail Kozlov',
  jobTitle: 'Licensed Insurance Agent',
  teamSlug: 'mikhail-kozlov',
  byline: {
    en: { prefix: 'Written and reviewed by ', name: 'Mikhail Kozlov', suffix: ', licensed insurance agent, M&K Agency' },
    es: { prefix: 'Escrito y revisado por ', name: 'Mikhail Kozlov', suffix: ', agente de seguros con licencia, M&K Agency' },
    ru: { prefix: 'Автор и проверка: ', name: 'Михаил Козлов', suffix: ', лицензированный страховой агент, M&K Agency' },
  },
};
