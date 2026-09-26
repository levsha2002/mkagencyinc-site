import type { MetadataRoute } from 'next';
import { insuranceProducts } from '@/lib/insurance-products';
import { allPosts, postLangs, blogHasLang } from '@/lib/blog';
import { LIMITED_LANG_PAGES } from '@/lib/page-langs';
import { allEditions, editionLangs, newsHasLang } from '@/lib/news';

// Полная карта сайта: реальные страницы (без /services и /about — это редиректы)
// + все страницы страховых продуктов. Обновляется автоматически при
// добавлении продукта в lib/insurance-products.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mkagencyinc.com';
  const langs = ['en', 'es', 'ru'];

  const staticPages: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/insurance', priority: 0.9 },
    { path: '/quote', priority: 0.9 },
    { path: '/car-insurance-florida-city', priority: 0.9 },
    { path: '/condo-insurance-florida-city', priority: 0.9 },
    { path: '/motorcycle-insurance-florida-city', priority: 0.9 },
    { path: '/classic-car-insurance-florida-city', priority: 0.9 },
    { path: '/homeowners-insurance-florida-city', priority: 0.9 },
    { path: '/new-construction-home-insurance-florida', priority: 0.9 },
    { path: '/sr22-insurance-florida-city', priority: 0.9 },
    { path: '/umbrella-insurance-florida-city', priority: 0.9 },
    { path: '/agents', priority: 0.8 },
    { path: '/team', priority: 0.7 },
    { path: '/life', priority: 0.5 },
    { path: '/protection-check', priority: 0.8 },
    { path: '/referral', priority: 0.6 },
    { path: '/referral/rules', priority: 0.3 },
    { path: '/privacy', priority: 0.2 },
    { path: '/terms', priority: 0.2 },
    { path: '/disclosures', priority: 0.2 },
  ];

  const productPages = insuranceProducts.map((p) => ({
    path: `/insurance/${p.slug}`,
    priority: 0.8,
  }));

  const everyLang = langs.flatMap((l) =>
    [...staticPages, ...productPages].map(({ path, priority }) => ({
      url: `${base}/${l}${path}`,
      changeFrequency: 'weekly' as const,
      priority,
    }))
  );

  // Pages that exist only in some languages (see lib/page-langs.ts).
  const limitedPages = Object.entries(LIMITED_LANG_PAGES).flatMap(([path, { langs: ls }]) =>
    ls.map((l) => ({ url: `${base}/${l}${path}`, changeFrequency: 'weekly' as const, priority: 0.9 }))
  );

  // Blog: the index only for languages that have posts, and each post only in
  // the languages it was published in. New posts appear here automatically.
  const blogIndex = langs
    .filter((l) => blogHasLang(l))
    .map((l) => ({ url: `${base}/${l}/blog`, changeFrequency: 'daily' as const, priority: 0.7 }));
  const blogPosts = allPosts().flatMap((p) =>
    postLangs(p).map((l) => ({
      url: `${base}/${l}/blog/${p.slug}`,
      lastModified: p.dateModified ?? p.datePublished,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // News: same rules as the blog. The index only for languages that have at
  // least one edition, and each edition only in the languages it exists in.
  const newsIndex = langs
    .filter((l) => newsHasLang(l))
    .map((l) => ({ url: `${base}/${l}/news`, changeFrequency: 'daily' as const, priority: 0.7 }));
  const newsEditions = allEditions().flatMap((e) =>
    editionLangs(e).map((l) => ({
      url: `${base}/${l}/news/${e.slug}`,
      lastModified: e.dateModified ?? e.datePublished,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [...everyLang, ...limitedPages, ...blogIndex, ...blogPosts, ...newsIndex, ...newsEditions];
}
