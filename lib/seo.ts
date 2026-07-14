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
