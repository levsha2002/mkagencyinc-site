import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import RelatedGuides from '@/components/RelatedGuides';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { ArticleBody, Byline, FaqList, SourceList, Disclaimer, articleStyles as a } from '@/components/article/ArticleParts';
import { stripInline } from '@/components/article/RichText';
import { DEFAULT_AUTHOR } from '@/content/authors';
import { personLd } from '@/lib/author';
import { formatDate } from '@/lib/blog';
import { team } from '@/lib/team-data';
import { getBusinessPage } from '@/content/pages/business';
import BusinessTypeLinks from './BusinessTypeLinks';
import s from './Business.module.css';

// Shared template for the business-type service pages (contractors, window
// cleaning, work trucks, builders risk, ...). Each route folder is a thin
// wrapper; content lives in content/pages/business/<slug>.ts.

type Lang = 'en' | 'es' | 'ru';

const UI: Record<Lang, {
  home: string; updated: string; call: string; cta: string; langLine: string; checked: string;
  teamTitle: string; teamText: string; owner: string; agent: string; formNote: string;
}> = {
  en: {
    home: 'Home', updated: 'Updated', call: 'Call', cta: 'Have an agent call me', langLine: 'English · Español · По-русски',
    checked: 'Legal facts on this page were checked against these official sources on September 26, 2026.',
    teamTitle: 'Talk to our team', owner: 'Owner & Founder', agent: 'Licensed Insurance Agent',
    teamText: 'M&K Agency is a family-owned agency in Florida City serving business owners across Florida by phone, text and email. When you call, you talk to one of us, in English, Spanish or Russian.',
    formNote: 'Get a quote',
  },
  es: {
    home: 'Inicio', updated: 'Actualizado el', call: 'Llame al', cta: 'Quiero que me llame un agente', langLine: 'English · Español · По-русски',
    checked: 'Los datos legales de esta página se verificaron con estas fuentes oficiales el 26 de septiembre de 2026.',
    teamTitle: 'Hable con nuestro equipo', owner: 'Propietario y fundador', agent: 'Agente de seguros con licencia',
    teamText: 'M&K Agency es una agencia familiar en Florida City que atiende a dueños de negocio en toda Florida por teléfono, mensaje de texto y correo. Cuando llama, habla con uno de nosotros, en español, inglés o ruso.',
    formNote: 'Pida su cotización',
  },
  ru: {
    home: 'Главная', updated: 'Обновлено', call: 'Звоните', cta: 'Пусть агент мне перезвонит', langLine: 'English · Español · По-русски',
    checked: 'Юридические факты на этой странице проверены по этим официальным источникам 26 сентября 2026 года.',
    teamTitle: 'Наша команда', owner: 'Владелец и основатель', agent: 'Лицензированный страховой агент',
    teamText: 'M&K Agency — семейное агентство во Florida City. Работаем с владельцами бизнеса по всей Флориде: по телефону, SMS и email. Звоните — ответит живой агент, по-русски, по-английски или по-испански.',
    formNote: 'Запросить расчёт',
  },
};

function asLang(lang: string): Lang | null {
  return lang === 'en' || lang === 'es' || lang === 'ru' ? lang : null;
}

export function businessMetadata(path: string, lang: string) {
  const page = getBusinessPage(path);
  const l = asLang(lang);
  if (!page || !l) return {};
  const t = page.copy[l];
  return pageMetadata({ lang: l, path, title: t.metaTitle, description: t.metaDesc });
}

export default function BusinessServicePage({ path, lang }: { path: string; lang: string }) {
  const page = getBusinessPage(path);
  const l = asLang(lang);
  if (!page || !l) notFound();
  const t = page.copy[l];
  const ui = UI[l];
  const url = `${SITE_URL}/${l}${path}`;
  const person = personLd(DEFAULT_AUTHOR, l);
  const people = page.team
    .map((slug) => team.find((m) => m.slug === slug))
    .filter((m): m is (typeof team)[number] => Boolean(m));

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': url,
      url,
      name: t.metaTitle,
      description: t.metaDesc,
      inLanguage: l,
      datePublished: page.published,
      dateModified: page.modified,
      lastReviewed: page.modified,
      author: person,
      reviewedBy: person,
      publisher: { '@type': 'Organization', name: 'M&K Agency', url: SITE_URL },
      mainEntity: { '@id': `${url}#service` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: stripInline(`${t.h1a} ${t.h1b}`),
      serviceType: t.serviceType,
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
      areaServed: { '@type': 'State', name: 'Florida' },
      dateModified: page.modified,
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
        { '@type': 'ListItem', position: 1, name: ui.home, item: `${SITE_URL}/${l}` },
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
            <nav className={a.crumbs} aria-label="Breadcrumb">
              <Link href={`/${l}`}>{ui.home}</Link><span aria-hidden>›</span>{t.breadcrumb}
            </nav>
            <span className="badge gold">{t.kicker}</span>
            <h1>
              {t.h1a} <span className="accent">{t.h1b}</span>
            </h1>
            <p className={a.meta} style={{ margin: '0 0 16px' }}>
              <Byline lang={l} />
              <span>{ui.updated} <time dateTime={page.modified}>{formatDate(page.modified, l)}</time></span>
            </p>
            <p className="sub">{t.sub}</p>
            <a className="cta" href={`tel:${PHONE_TEL}`}>{ui.call} {PHONE_DISPLAY}</a>
            {/* No third-party rating badge: these pages must not name any insurer. */}
            <div className="rated" style={{ marginLeft: 12 }}>
              <span>{ui.langLine}</span>
            </div>
          </div>
          <LeadForm
            lang={l}
            defaultType="Commercial"
            lockType
            extraType={{ value: t.linkLabel, label: t.linkLabel }}
          />
        </div>
      </section>

      <section style={{ padding: '44px 0 10px' }}>
        <div className="container">
          <div className={a.wrap}>
            <ArticleBody blocks={t.intro} />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container">
          <h2>{t.covTitle}</h2>
          <div className="cards4 cards3">
            {t.cov.map((c) => (
              <div className="svc" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '44px 0 10px' }}>
        <div className="container">
          <div className={a.wrap}>
            <ArticleBody blocks={t.body} />
            <p className={s.ctaRow}>
              <Link className="cta" href={`/${l}/quote`}>{ui.cta}</Link>
              <a className={`cta ${s.ctaAlt}`} href={`tel:${PHONE_TEL}`}>{ui.call} {PHONE_DISPLAY}</a>
            </p>
          </div>
        </div>
      </section>

      {people.length > 0 && (
        <section className="section" style={{ background: '#f2f7ff' }} aria-labelledby="our-team">
          <div className="container">
            <h2 id="our-team">{ui.teamTitle}</h2>
            <p className={s.teamText}>{ui.teamText}</p>
            <div className={s.team}>
              {people.map((m) => (
                <Link key={m.slug} href={`/${l}/team#${m.slug}`} className={s.person}>
                  <Image src={m.photo} alt={`${m.name}, M&K Agency`} width={264} height={264} sizes="132px" />
                  <strong>{m.name}</strong>
                  <span>{m.slug === 'mikhail-kozlov' ? ui.owner : ui.agent}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: '44px 0 20px' }}>
        <div className="container">
          <div className={a.wrap}>
            <FaqList lang={l} faq={t.faq} title={t.faqTitle} />
            <Disclaimer lang={l} />
            <SourceList lang={l} sources={t.sources} updatedLine={ui.checked} />
          </div>
        </div>
      </section>

      <RelatedGuides lang={l} page={path} />
      <BusinessTypeLinks lang={l} current={path} />
    </main>
  );
}
