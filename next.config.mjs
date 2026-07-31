/** @type {import('next').NextConfig} */
const nextConfig = {
  // Three pages were merged into others, and each was handled by calling
  // redirect() from inside a statically generated Server Component. On Vercel
  // that produced a malformed response: HTTP 307 with a full HTML body but no
  // Location header at all. A browser renders the body so a person never
  // notices, but anything that follows redirects properly — crawlers, link
  // checkers, and Google Ads destination validation — sees a redirect that
  // points nowhere. That is what gets a sitelink disapproved as
  // "destination not working".
  //
  // Declaring them here instead emits a real 308 with a Location header,
  // resolved at the edge before routing, and tells search engines the move is
  // permanent so the old URLs' ranking transfers to the merged pages.
  async redirects() {
    return [
      { source: '/:lang(en|es|ru)/contact', destination: '/:lang/quote', permanent: true },
      { source: '/:lang(en|es|ru)/about', destination: '/:lang/team', permanent: true },
      { source: '/:lang(en|es|ru)/services', destination: '/:lang/insurance', permanent: true },
      // Bare paths, for anyone arriving without a locale prefix.
      { source: '/contact', destination: '/en/quote', permanent: true },
      { source: '/about', destination: '/en/team', permanent: true },
      { source: '/services', destination: '/en/insurance', permanent: true },
    ];
  },
};

export default nextConfig;
