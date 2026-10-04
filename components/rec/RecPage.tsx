import Link from 'next/link';
import { notFound } from 'next/navigation';
import HeroBackdrop from '@/components/hero/HeroBackdrop';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge';
import SendPolicyCta from '@/components/SendPolicyCta';
import WhatsAppLink, { WhatsAppIcon } from '@/components/WhatsAppLink';
import RelatedCoverage from '@/components/RelatedCoverage';
import AreasWeServe from '@/components/city/AreasWeServe';
import HumanLifeValueCalculator from '@/components/HumanLifeValueCalculator';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { ArticleBody, Byline, FaqList, SourceList, Disclaimer, articleStyles as a } from '@/components/article/ArticleParts';
import { RichText, stripInline } from '@/components/article/RichText';
import { DEFAULT_AUTHOR } from '@/content/authors';
import { personLd } from '@/lib/author';
import { formatDate } from '@/lib/blog';
import { getRecPage, recHero, recFigure, recOg, REC_PAGES } from '@/content/pages/rec';
import { topicPath } from '@/content/pages/protect/types-paths';
import s from '@/components/city/City.module.css';
import r from './Rec.module.css';

// Shared template for the Florida recreational-vehicle, boat and life landing
// pages (content/pages/rec/). Same building blocks and JSON-LD pattern as
// GuidePage (WebPage + Service with InsuranceAgency provider + FAQPage +
// BreadcrumbList), plus a key-facts block with a localized infographic,
// coverage-gap and coverage cards. The callback form is tagged `rec-<line>`.

type Lang = 'en' | 'es' | 'ru';

const UI: Record<Lang, {
  home: string; updated: string; call: string; cta: string; whatsapp: string; langLine: string; checked: string;
  answer: string; related: string; quoteTitle: string; quoteText: string; source: string; article: string;
  product: string; protect: string; lifeTab: string; illus: string;
}> = {
  en: {
    home: 'Home', updated: 'Updated', call: 'Call', cta: 'Have an agent call me', whatsapp: 'WhatsApp us', langLine: 'English · Español · По-русски',
    checked: 'Facts on this page were checked against these sources on October 3, 2026.',
    answer: 'Quick answer:', related: 'Keep reading', source: 'Source',
    quoteTitle: 'Send us your policy and we’ll check your coverage',
    quoteText: 'A licensed agent reads your current policy, shows you the gaps in plain words and helps you fix them. Call us, or leave your number and we’ll contact you within an hour during business hours.',
    article: 'Our guide', product: 'Quote form with all the details', protect: 'Protection guide', lifeTab: 'Life insurance, in plain words', illus: 'Illustration',
  },
  es: {
    home: 'Inicio', updated: 'Actualizado el', call: 'Llame al', cta: 'Quiero que me llame un agente', whatsapp: 'Escríbanos por WhatsApp', langLine: 'English · Español · По-русски',
    checked: 'Los datos de esta página se verificaron con estas fuentes el 3 de octubre de 2026.',
    answer: 'Respuesta rápida:', related: 'Siga leyendo', source: 'Fuente',
    quoteTitle: 'Envíenos su póliza y revisamos su cobertura',
    quoteText: 'Un agente licenciado lee su póliza actual, le muestra los huecos en palabras sencillas y le ayuda a cerrarlos. Llámenos, o déjenos su número y lo contactamos en menos de una hora en horario de oficina.',
    article: 'Nuestra guía', product: 'Formulario de cotización con todos los datos', protect: 'Guía de protección', lifeTab: 'Seguro de vida, en palabras sencillas', illus: 'Ilustración',
  },
  ru: {
    home: 'Главная', updated: 'Обновлено', call: 'Звоните', cta: 'Пусть агент мне перезвонит', whatsapp: 'Написать в WhatsApp', langLine: 'English · Español · По-русски',
    checked: 'Факты на этой странице проверены по этим источникам 3 октября 2026 года.',
    answer: 'Коротко:', related: 'Читайте также', source: 'Источник',
    quoteTitle: 'Пришлите полис — мы проверим ваше покрытие',
    quoteText: 'Лицензированный агент прочитает ваш действующий полис, простыми словами покажет, где дыры, и поможет их закрыть. Позвоните нам или оставьте номер — мы свяжемся с вами в течение часа в рабочее время.',
    article: 'Наш разбор', product: 'Подробная форма запроса', protect: 'Гид по защите', lifeTab: 'Страхование жизни простыми словами', illus: 'Иллюстрация',
  },
};

function asLang(lang: string): Lang | null {
  return lang === 'en' || lang === 'es' || lang === 'ru' ? lang : null;
}

export function recMetadata(path: string, lang: string) {
  const l = asLang(lang);
  const page = REC_PAGES.find((p) => p.path === path);
  if (!page || !l) return {};
  const t = page.copy[l];
  return pageMetadata({
    lang: l, path, title: t.metaTitle, description: t.metaDesc,
    image: { src: recOg(page.line), alt: `${UI[l].illus}: ${t.breadcrumb}` },
  });
}

export default function RecPage({ path, lang }: { path: string; lang: string }) {
  const l = asLang(lang);
  if (!l) notFound();
  const page = getRecPage(path);
  const t = page.copy[l];
  const ui = UI[l];
  const url = `${SITE_URL}/${l}${path}`;
  const person = personLd(DEFAULT_AUTHOR, l);
  const hero = recHero(page.line, l, `${ui.illus}: ${t.breadcrumb}`);
  const fig = recFigure(page.line, l);
  const isLife = page.line === 'life';

  const crumbs = [
    { name: ui.home, item: `${SITE_URL}/${l}` },
    { name: t.breadcrumb, item: url },
  ];

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
      primaryImageOfPage: `${SITE_URL}${hero.src}`,
      mainEntity: { '@id': `${url}#service` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: stripInline(`${t.h1a} ${t.h1b}`).replace(/\s+[—–]\s+/, ' '),
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
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
    },
  ];

  const related = [
    ...t.related.map((x) => `[${x.label}](/${l}${x.path})`),
    `[${ui.article}: ${t.breadcrumb}](/${l}/blog/${page.articleSlug})`,
    ...(isLife ? [`[${ui.lifeTab}](/${l}${topicPath('life-insurance')})`] : [`[${ui.protect}](/${l}/protect)`]),
    ...(page.productSlug ? [`[${ui.product}](/${l}/insurance/${page.productSlug})`] : []),
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="hero hero--photo">
        <HeroBackdrop image={hero} alt="" />
        <div className="container hero-grid">
          <div>
            <nav className={a.crumbs} aria-label="Breadcrumb">
              <Link href={`/${l}`}>{ui.home}</Link><span aria-hidden>›</span>
              {t.breadcrumb}
            </nav>
            <span className="badge gold">{t.kicker}</span>
            <h1>
              {t.h1a} <span className="accent">{t.h1b}</span>
            </h1>
            <p className={a.meta} style={{ margin: '0 0 16px' }}>
              <Byline lang={l} />
              <span>{ui.updated} <time dateTime={page.modified}>{formatDate(page.modified, l)}</time></span>
            </p>
            <p className="sub"><strong>{ui.answer}</strong> <RichText text={t.answer} /></p>
            <div className={s.heroBtns}>
              <a className="cta" href="#quote">{ui.cta}</a>
              <div className="rated rated-stack">
                <span>{ui.langLine}</span>
                <GoogleReviewsBadge lang={l} />
              </div>
            </div>
            <SendPolicyCta lang={l} placement="hero" />
          </div>
          <LeadForm
            lang={l}
            defaultType={isLife ? 'Life' : 'Auto'}
            source={page.leadSource}
            {...(isLife ? {} : { extraType: { value: page.leadValue, label: t.leadLabel } })}
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
          <h2 className={r.sectionTitle}>{t.factsTitle}</h2>
          <div className={r.factsGrid}>
            <ul className={r.facts}>
              {t.facts.map((f) => (
                <li key={f.text} className={r.fact}>
                  <span className={r.factValue}>{f.value}</span>
                  <span className={r.factText}><RichText text={f.text} /></span>
                  <span className={r.factSrc}>
                    <a href={f.source} target="_blank" rel="noopener noreferrer">{ui.source}</a>
                  </span>
                </li>
              ))}
            </ul>
            <figure className={r.figure}>
              {/* Localized SVG infographic (text inside); plain <img> keeps it crisp. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={fig.src} width={fig.width} height={fig.height} alt={t.figureAlt} loading="lazy" decoding="async" />
              <figcaption>{t.figureCaption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className={r.sectionTitle}>{t.gapsTitle}</h2>
          <div className={r.cards}>
            {t.gaps.map((c) => (
              <div key={c.h} className={`${r.card} ${r.gap}`}>
                <h3>{c.h}</h3>
                <p><RichText text={c.p} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container">
          <h2 className={r.sectionTitle}>{t.coverageTitle}</h2>
          <div className={r.cards}>
            {t.coverage.map((c) => (
              <div key={c.h} className={`${r.card} ${r.cov}`}>
                <h3>{c.h}</h3>
                <p><RichText text={c.p} /></p>
              </div>
            ))}
          </div>
          <p className={r.note}>{t.coverageNote}</p>
        </div>
      </section>

      <section style={{ padding: '44px 0 10px' }}>
        <div className="container">
          <div className={a.wrap}>
            <ArticleBody blocks={t.body} />
            <p className={s.ctaRow}>
              <a className="cta" href="#quote">{ui.cta}</a>
              <a className={`cta ${s.ctaAlt}`} href={`tel:${PHONE_TEL}`}>{ui.call} {PHONE_DISPLAY}</a>
              <WhatsAppLink lang={l} placement="rec_body" className={`cta ${s.ctaWa}`}>
                <WhatsAppIcon size={18} /> {ui.whatsapp}
              </WhatsAppLink>
            </p>
          </div>
        </div>
      </section>

      {isLife && (
        <section className="section" style={{ paddingTop: 10 }}>
          <div className="container" style={{ maxWidth: '46rem' }}>
            <HumanLifeValueCalculator lang={l} />
          </div>
        </section>
      )}

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container">
          <div className={s.check}>
            <h2>{t.checklistTitle}</h2>
            <ul>
              {t.checklist.map((c) => <li key={c}><RichText text={c} /></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className={s.officeText}>
            <h2 style={{ textAlign: 'left' }}>{t.agentTitle}</h2>
            <ArticleBody blocks={t.agent} />
            <p style={{ marginTop: 16 }}>
              <a className="cta" href={`tel:${PHONE_TEL}`}>{ui.call} {PHONE_DISPLAY}</a>
            </p>
          </div>
          <div className="office">
            <strong>M&K Agency Inc.</strong>
            <p>33550 S Dixie Hwy, Suite 102<br />Florida City, FL 33034</p>
            <p style={{ marginTop: 8 }}>{ui.langLine}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '10px 0 44px' }}>
        <div className="container">
          <div className={a.wrap}>
            <FaqList lang={l} faq={t.faq} title={t.faqTitle} />
            <ArticleBody blocks={[
              { type: 'h2', text: ui.related },
              { type: 'ul', items: related },
            ]} />
            <ArticleBody blocks={[{ type: 'h2', text: ui.quoteTitle }, { type: 'p', text: ui.quoteText }]} />
            <p className={s.ctaRow}>
              <a className="cta" href="#quote">{ui.cta}</a>
              <a className={`cta ${s.ctaAlt}`} href={`tel:${PHONE_TEL}`}>{ui.call} {PHONE_DISPLAY}</a>
            </p>
            <SendPolicyCta lang={l} placement="final" />
            <Disclaimer lang={l} />
            <SourceList lang={l} sources={t.sources} updatedLine={ui.checked} />
          </div>
        </div>
      </section>

      <AreasWeServe lang={l} />
      <RelatedCoverage lang={l} current={path} />
    </main>
  );
}
