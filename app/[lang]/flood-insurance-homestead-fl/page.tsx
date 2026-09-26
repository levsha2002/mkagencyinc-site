import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import RelatedCoverage from '@/components/RelatedCoverage';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { LIMITED_LANG_PAGES } from '@/lib/page-langs';
import { FLOOD_PAGE, FLOOD_PAGE_DATE } from '@/content/pages/flood-insurance-homestead-fl';
import { ArticleBody, Byline, FaqList, SourceList, Disclaimer, articleStyles as s } from '@/components/article/ArticleParts';
import { DEFAULT_AUTHOR } from '@/content/authors';
import { personLd } from '@/lib/author';
import { formatDate } from '@/lib/blog';
import { stripInline } from '@/components/article/RichText';

// Service page: flood insurance for Florida City & Homestead. Content lives in
// content/pages/flood-insurance-homestead-fl.ts. EN + ES only for now: /ru/...
// returns 404 and hreflang lists only en/es (see lib/page-langs.ts).
export const revalidate = 86400;

const PATH = '/flood-insurance-homestead-fl';
const LANGS = LIMITED_LANG_PAGES[PATH].langs;

function pick(lang: string) {
  if (lang === 'en' || lang === 'es') return { l: lang as 'en' | 'es', t: FLOOD_PAGE[lang as 'en' | 'es'] };
  return null;
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const d = pick(params.lang);
  if (!d) return {};
  return pageMetadata({ lang: d.l, path: PATH, title: d.t.metaTitle, description: d.t.metaDesc, langs: LANGS });
}

export default function FloodInsurancePage({ params }: { params: { lang: string } }) {
  const d = pick(params.lang);
  if (!d) notFound();
  const { l, t } = d;
  const url = `${SITE_URL}/${l}${PATH}`;
  const home = l === 'es' ? 'Inicio' : 'Home';
  const checked = l === 'es' ? 'Datos verificados con estas fuentes oficiales el 26 de septiembre de 2026.' : 'Facts checked against these official sources on September 26, 2026.';

  const updated = l === 'es' ? 'Actualizado el' : 'Updated';
  const person = personLd(DEFAULT_AUTHOR, l);

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': url,
      url,
      name: t.metaTitle,
      description: t.metaDesc,
      inLanguage: l,
      datePublished: FLOOD_PAGE_DATE.published,
      dateModified: FLOOD_PAGE_DATE.modified,
      lastReviewed: FLOOD_PAGE_DATE.modified,
      author: person,
      reviewedBy: person,
      publisher: { '@type': 'Organization', name: 'M&K Agency', url: SITE_URL },
      mainEntity: { '@id': `${url}#service` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: stripInline(`${t.h1a} ${t.h1b}`).replace(/,\s*/, ' – '),
      serviceType: l === 'es' ? 'Seguro de inundación' : 'Flood insurance',
      description: t.metaDesc,
      url,
      inLanguage: l,
      provider: {
        '@type': 'InsuranceAgency',
        name: 'M&K Agency',
        url: SITE_URL,
        telephone: PHONE_DISPLAY,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '33550 S Dixie Hwy, Suite 102',
          addressLocality: 'Florida City',
          addressRegion: 'FL',
          postalCode: '33034',
          addressCountry: 'US',
        },
      },
      areaServed: [
        { '@type': 'City', name: 'Florida City, FL' },
        { '@type': 'City', name: 'Homestead, FL' },
        { '@type': 'AdministrativeArea', name: 'Miami-Dade County, FL' },
      ],
      dateModified: FLOOD_PAGE_DATE.modified,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripInline(f.a) } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: home, item: `${SITE_URL}/${l}` },
        { '@type': 'ListItem', position: 2, name: t.breadcrumb, item: url },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <nav className={s.crumbs} aria-label="Breadcrumb">
              <Link href={`/${l}`}>{home}</Link><span aria-hidden>›</span>{t.breadcrumb}
            </nav>
            <span className="badge gold">{t.kicker}</span>
            <h1>
              {t.h1a} <span className="accent">{t.h1b}</span>
            </h1>
            <p className={s.meta} style={{ margin: '0 0 16px' }}>
              <Byline lang={l} />
              <span>{updated} <time dateTime={FLOOD_PAGE_DATE.modified}>{formatDate(FLOOD_PAGE_DATE.modified, l)}</time></span>
            </p>
            <p className="sub">{t.sub}</p>
            <a className="cta" href={`tel:${PHONE_TEL}`}>{t.call} {PHONE_DISPLAY}</a>
            {/* No third-party rating badge here: the article area must not name any insurer. */}
            <div className="rated" style={{ marginLeft: 12 }}>
              <span>{t.langLine}</span>
            </div>
          </div>
          <LeadForm lang={l} defaultType="Home" />
        </div>
      </section>

      <section style={{ padding: '44px 0 20px' }}>
        <div className="container">
          <div className={s.wrap}>
            <ArticleBody blocks={t.body} />
            <p style={{ margin: '8px 0 26px', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Link className="cta" href={`/${l}/quote`}>{t.cta}</Link>
              <a className="cta" style={{ background: '#fff', color: 'var(--navy)', border: '1.5px solid #d9e2ec', boxShadow: 'none' }} href={`tel:${PHONE_TEL}`}>
                {t.call} {PHONE_DISPLAY}
              </a>
            </p>
            <FaqList lang={l} faq={t.faq} title={t.faqTitle} />
            <Disclaimer lang={l} />
            <SourceList lang={l} sources={t.sources} updatedLine={checked} />
          </div>
        </div>
      </section>
      <RelatedCoverage lang={l} current={PATH} />
    </main>
  );
}
