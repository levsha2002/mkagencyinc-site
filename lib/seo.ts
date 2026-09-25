// lib/seo.ts — единая точка для canonical + hreflang.
// Использование: alternates: buildAlternates(params.lang, '/contact')
// Пути относительные — абсолютными их делает metadataBase в app/[lang]/layout.tsx.

export const SITE_URL = 'https://mkagencyinc.com';

export function buildAlternates(lang: string, path: string = '') {
  return {
    canonical: `/${lang}${path}`,
    languages: {
      en: `/en${path}`,
      es: `/es${path}`,
      ru: `/ru${path}`,
      'x-default': `/en${path}`,
    },
  };
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
}: {
  lang: string;
  path?: string;
  title: string;
  description?: string;
}) {
  const url = `/${lang}${path}`;
  return {
    title,
    ...(description ? { description } : {}),
    alternates: buildAlternates(lang, path),
    openGraph: {
      title,
      ...(description ? { description } : {}),
      url,
      type: 'website',
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
