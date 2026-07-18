import '../globals.css';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { Inter, Playfair_Display } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getDict, locales, PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// These three are floating widgets that sit on top of every page but aren't
// part of the initial content the user is reading — loading + hydrating them
// isn't needed before first paint. ssr:false pulls their JS out of the
// server-rendered HTML/initial bundle and defers it to right after hydration,
// freeing the main thread sooner so the actual page content (headline, body
// text — usually the LCP element on mobile) can paint without waiting on them.
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false });
const TalkNowWidget = dynamic(() => import('@/components/TalkNowWidget'), { ssr: false });
const StickyCallBar = dynamic(() => import('@/components/StickyCallBar'), { ssr: false });

// Self-hosted via next/font (downloaded + inlined at build time) instead of
// a Google Fonts <link> — removes the external render-blocking request and
// the fonts.googleapis.com/fonts.gstatic.com network hop entirely.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

// Google Ads conversion tracking (gtag.js). Base site-wide tag — the specific
// per-lead "conversion" event fires from LeadForm.tsx once the form is
// successfully submitted. See components/LeadForm.tsx for the event call.
const GOOGLE_ADS_ID = 'AW-18321801016';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang);
  const base = 'https://mkagencyinc.com';
  return {
    metadataBase: new URL(base),
    title: t.meta.title,
    description: t.meta.desc,
    verification: {
      google: 'staOoPCHQsMrcss7DijPAzbyaZXmepRi4eTf62-zvQI',
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.desc,
      type: 'website',
      siteName: 'M&K Agency Inc.',
      locale: ({ en: 'en_US', es: 'es_US', ru: 'ru_RU' } as Record<string, string>)[params.lang] ?? 'en_US',
      images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'M&K Agency — Florida Insurance: Auto, Home, Commercial' }],
    },
    twitter: { card: 'summary_large_image', images: ['/og.jpg'] },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const t = getDict(params.lang);
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'M&K Agency Inc.',
    telephone: PHONE_DISPLAY,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '33550 S Dixie Hwy, Suite 102',
      addressLocality: 'Florida City',
      addressRegion: 'FL',
      postalCode: '33034',
      addressCountry: 'US',
    },
    areaServed: 'Florida',
    url: 'https://mkagencyinc.com',
  };
  return (
    <html lang={params.lang} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <div className="ribbon">✦ {t.tagline} ✦</div>
        <Header lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
        <ChatWidget lang={params.lang} />
        <TalkNowWidget lang={params.lang} />
        <StickyCallBar lang={params.lang} />
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}