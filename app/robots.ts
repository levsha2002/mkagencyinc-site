import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    // /studio is an internal tool (also noindex in app/studio/layout.jsx).
    rules: { userAgent: '*', allow: '/', disallow: '/studio' },
    sitemap: 'https://mkagencyinc.com/sitemap.xml',
  };
}
