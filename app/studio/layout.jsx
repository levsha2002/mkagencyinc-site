import '../globals.css';

// Internal image generator for the owner. Kept out of nav, sitemap and search:
// noindex here + Disallow: /studio in app/robots.ts. Generation itself is gated
// server-side by STUDIO_KEY (app/api/generate-image/route.js).
export const metadata = {
  title: 'Studio',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ '--line': '#e3e9f2', '--shadow': '0 10px 30px rgba(7,39,79,.08)', '--ice': '#f2f7ff' }}>{children}</body>
    </html>
  );
}
