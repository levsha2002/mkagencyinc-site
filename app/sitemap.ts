import type { MetadataRoute } from 'next';
import { insuranceProducts } from '@/lib/insurance-products';

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
    { path: '/team', priority: 0.7 },
    { path: '/life', priority: 0.5 },
    { path: '/referral', priority: 0.6 },
    { path: '/referral/rules', priority: 0.3 },
    { path: '/privacy', priority: 0.2 },
    { path: '/terms', priority: 0.2 },
  ];

  const productPages = insuranceProducts.map((p) => ({
    path: `/insurance/${p.slug}`,
    priority: 0.8,
  }));

  return langs.flatMap((l) =>
    [...staticPages, ...productPages].map(({ path, priority }) => ({
      url: `${base}/${l}${path}`,
      changeFrequency: 'weekly' as const,
      priority,
    }))
  );
}
