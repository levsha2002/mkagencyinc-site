import type { MetadataRoute } from 'next';

// /studio is an internal tool (also noindex in app/studio/layout.jsx).
// /*/hero-preview is the noindex test route for the daily hero rotation.
// Repeated on every user-agent group: a crawler that matches a specific
// group does not also apply the `*` group.
const DISALLOW = ['/studio', '/en/hero-preview', '/es/hero-preview', '/ru/hero-preview'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      // ChatGPT search citations (OAI-SearchBot), plus Perplexity and Claude
      // search. GPTBot is left to the `*` rule above (Allow /), not blocked.
      {
        userAgent: ['OAI-SearchBot', 'PerplexityBot', 'ClaudeBot'],
        allow: '/',
        disallow: DISALLOW,
      },
    ],
    sitemap: 'https://mkagencyinc.com/sitemap.xml',
  };
}
