import '../globals.css';
import Script from 'next/script';
import { Inter, Playfair_Display } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getDict, locales, PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import TalkNowWidget from '@/components/TalkNowWidget';
import StickyCallBar from '@/components/StickyCallBar';

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
import { GOOGLE_ADS_ID, phoneClickTrackingScript } from '@/lib/analytics';

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
    email: 'mikhailkozlov@allstate.com',
    // og.jpg is the existing share image; there is no separate logo file, so
    // no `logo` property rather than a link to a 404.
    image: 'https://mkagencyinc.com/og.jpg',
    // Coordinates match the office map embed on the team page.
    geo: { '@type': 'GeoCoordinates', latitude: 25.4567, longitude: -80.4746 },
    // Stated hours, so Google can show open/closed instead of guessing. These
    // must stay in step with the Business Profile and the site footer — if the
    // office hours change, all three change together.
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    // The three languages are the agency's main differentiator and were not
    // machine-readable anywhere until now.
    knowsLanguage: ['en', 'es', 'ru'],
    // Profiles already linked in the footer; sameAs lets Google tie them to
    // this business rather than treating them as unrelated pages.
    sameAs: [
      'https://agents.allstate.com/mikhail-kozlov-florida-city-fl.html',
      'https://www.experience.com/reviews/mikhail-7323351',
      'https://www.chamberofcommerce.com/business-directory/florida/florida-city/insurance-agency/2012178838-mikhail-kozlov-allstate-insurance',
    ],
    // Deliberately no aggregateRating. Self-declared review markup without the
    // reviews themselves on the page breaks Google's guidelines, and whether we
    // may display customer reviews at all is still an open question with
    // Allstate compliance.
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
            <Script id="phone-click-tracking" strategy="afterInteractive">
              {phoneClickTrackingScript()}
            </Script>
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