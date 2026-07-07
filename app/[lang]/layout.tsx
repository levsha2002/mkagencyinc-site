import '../globals.css';
import { getDict, locales, PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

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
    alternates: {
      canonical: `/${params.lang}`,
      languages: { en: '/en', es: '/es', ru: '/ru', 'x-default': '/en' },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.desc,
      type: 'website',
      locale: params.lang,
    },
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
    <html lang={params.lang}>
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
      </body>
    </html>
  );
}
