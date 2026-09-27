import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    // /studio is an internal tool (also noindex in app/studio/layout.jsx).
    // /*/hero-preview is the noindex test route for the daily hero rotation.
    rules: { userAgent: '*', allow: '/', disallow: ['/studio', '/en/hero-preview', '/es/hero-preview', '/ru/hero-preview'] },
    sitemap: 'https://mkagencyinc.com/sitemap.xml',
  };
}
