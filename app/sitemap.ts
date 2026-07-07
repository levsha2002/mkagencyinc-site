import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mkagencyinc.com';
  const pages = ['', '/services', '/about', '/contact'];
  const langs = ['en', 'es', 'ru'];
  return langs.flatMap((l) =>
    pages.map((p) => ({
      url: `${base}/${l}${p}`,
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.8,
    }))
  );
}
