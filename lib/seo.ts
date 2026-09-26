// lib/seo.ts — единая точка для canonical + hreflang.
// Использование: alternates: buildAlternates(params.lang, '/contact')
// Пути относительные — абсолютными их делает metadataBase в app/[lang]/layout.tsx.

export const SITE_URL = 'https://mkagencyinc.com';

const ALL_LANGS = ['en', 'es', 'ru'];

/** `langs` limits hreflang to the languages that actually exist for a page
 *  (e.g. a blog post published only in EN + ES). Default: all three. */
export function buildAlternates(lang: string, path: string = '', langs: string[] = ALL_LANGS) {
  const available = ALL_LANGS.filter((l) => langs.includes(l));
  const languages: Record<string, string> = {};
  for (const l of available) languages[l] = `/${l}${path}`;
  const xDefault = available.includes('en') ? 'en' : available[0] ?? lang;
  languages['x-default'] = `/${xDefault}${path}`;
  return { canonical: `/${lang}${path}`, languages };
}

const OG_LOCALE: Record<string, string> = { en: 'en_US', es: 'es_US', ru: 'ru_RU' };

/** Per-page metadata with its own Open Graph title/description and og:url.
 *  Next.js replaces (does not merge) the layout's openGraph object when a page
 *  sets one, so the shared fields (image, site name, locale) are repeated here.
 *  Before this, every inner page shared the homepage's OG title/description. */
export function pageMetadata({
  lang,
  path = '',
  title,
  description,
  langs,
  article,
}: {
  lang: string;
  path?: string;
  title: string;
  description?: string;
  /** Languages this page exists in (hreflang). Default: en, es, ru. */
  langs?: string[];
  /** Set for blog articles: og:type=article plus published/modified times. */
  article?: { publishedTime: string; modifiedTime?: string };
}) {
  const url = `/${lang}${path}`;
  return {
    title,
    ...(description ? { description } : {}),
    alternates: buildAlternates(lang, path, langs),
    openGraph: {
      title,
      ...(description ? { description } : {}),
      url,
      ...(article
        ? { type: 'article', publishedTime: article.publishedTime, modifiedTime: article.modifiedTime ?? article.publishedTime }
        : { type: 'website' }),
      siteName: 'M&K Agency Inc.',
      locale: OG_LOCALE[lang] ?? 'en_US',
      images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'M&K Agency — Florida Insurance: Auto, Home, Commercial' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      ...(description ? { description } : {}),
      images: ['/og.jpg'],
    },
  };
}

/** Trims long intro copy to a meta-description length at a word boundary. */
export function clipDescription(text: string, max = 158): string {
  const t = (text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ') > 80 ? cut.lastIndexOf(' ') : cut.length).replace(/[,;:—–-]+$/, '')}…`;
}
