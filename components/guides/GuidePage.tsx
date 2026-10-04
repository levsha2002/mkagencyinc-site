import Link from 'next/link';
import { notFound } from 'next/navigation';
import HeroBackdrop from '@/components/hero/HeroBackdrop';
import { HERO_IMAGES } from '@/content/hero/images';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import GoogleReviewsBadge from '@/components/GoogleReviewsBadge';
import SendPolicyCta from '@/components/SendPolicyCta';
import WhatsAppLink, { WhatsAppIcon } from '@/components/WhatsAppLink';
import RelatedCoverage from '@/components/RelatedCoverage';
import RelatedGuides from '@/components/RelatedGuides';
import AreasWeServe from '@/components/city/AreasWeServe';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { ArticleBody, Byline, FaqList, SourceList, Disclaimer, articleStyles as a } from '@/components/article/ArticleParts';
import { RichText, stripInline } from '@/components/article/RichText';
import { DEFAULT_AUTHOR } from '@/content/authors';
import { personLd } from '@/lib/author';
import { formatDate } from '@/lib/blog';
import { GUIDE_PAGES, getGuidePage } from '@/content/pages/guides';
import s from '@/components/city/City.module.css';

// Shared template for the local agent hubs and plain-language guides
// (content/pages/guides/). Mirrors CityServicePage: photo hero with the callback
// LeadForm, checklist, body, office block, FAQ, related links, sources, and the
// same JSON-LD pattern (WebPage + Service with InsuranceAgency provider +
// FAQPage + BreadcrumbList). The agency license line comes from the site footer.

type Lang = 'en' | 'es' | 'ru';

const UI: Record<Lang, {
  home: string; updated: string; call: string; cta: string; whatsapp: string; langLine: string; checked: string;
  answer: string; related: string; quoteTitle: string; quoteText: string;
}> = {
  en: {
    home: 'Home', updated: 'Updated', call: 'Call', cta: 'Have an agent call me', whatsapp: 'WhatsApp us', langLine: 'English · Español · По-русски',
    checked: 'Facts on this page were checked against these sources on October 3, 2026.',
    answer: 'Quick answer:', related: 'Related pages',
    quoteTitle: 'Questions about your coverage?',
    quoteText: 'Call us, or leave your number and we’ll contact you within an hour during business hours.',
  },
  es: {
    home: 'Inicio', updated: 'Actualizado el', call: 'Llame al', cta: 'Quiero que me llame un agente', whatsapp: 'Escríbanos por WhatsApp', langLine: 'English · Español · По-русски',
    checked: 'Los datos de esta página se verificaron con estas fuentes el 3 de octubre de 2026.',
    answer: 'Respuesta rápida:', related: 'Páginas relacionadas',
    quoteTitle: '¿Tiene preguntas sobre su cobertura?',
    quoteText: 'Llámenos, o déjenos su número y lo contactamos en menos de una hora en horario de oficina.',
  },
  ru: {
    home: 'Главная', updated: 'Обновлено', call: 'Звоните', cta: 'Пусть агент мне перезвонит', whatsapp: 'Написать в WhatsApp', langLine: 'English · Español · По-русски',
    checked: 'Факты на этой странице проверены по этим источникам 3 октября 2026 года.',
    answer: 'Коротко:', related: 'Связанные страницы',
    quoteTitle: 'Есть вопросы о вашем покрытии?',
    quoteText: 'Позвоните нам или оставьте номер — мы свяжемся с вами в течение часа в рабочее время.',
  },
};

function asLang(lang: string): Lang | null {
  return lang === 'en' || lang === 'es' || lang === 'ru' ? lang : null;
}

export function guideMetadata(path: string, lang: string) {
  const l = asLang(lang);
  const page = GUIDE_PAGES.find((p) => p.path === path);
  if (!page || !l) return {};
  const t = page.copy[l];
  return pageMetadata({
    lang: l, path, title: t.metaTitle, description: t.metaDesc,
    ...(page.ogImage ? { image: { src: page.ogImage.src, alt: page.ogImage.alt[l] } } : {}),
  });
}

export default function GuidePage({ path, lang }: { path: string; lang: string }) {
  const l = asLang(lang);
  if (!l) notFound();
  const page = getGuidePage(path);
  const t = page.copy[l];
  const ui = UI[l];
  const url = `${SITE_URL}/${l}${path}`;
  const person = personLd(DEFAULT_AUTHOR, l);
  const image = HERO_IMAGES[page.heroImage];
  const source = `guide-${path.replace(/^\//, '')}`;

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
      primaryImageOfPage: `${SITE_URL}${image.src}`,
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
      areaServed: page.areaServed,
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

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="hero hero--photo">
        <HeroBackdrop image={image} alt={image.alt[l]} />
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
          <LeadForm lang={l} defaultType={page.leadType} source={source} />
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
          <div className={s.check}>
            <h2>{t.checklistTitle}</h2>
            <ul>
              {t.checklist.map((c) => <li key={c}><RichText text={c} /></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '44px 0 10px' }}>
        <div className="container">
          <div className={a.wrap}>
            <ArticleBody blocks={t.body} />
            <p className={s.ctaRow}>
              <a className="cta" href="#quote">{ui.cta}</a>
              <a className={`cta ${s.ctaAlt}`} href={`tel:${PHONE_TEL}`}>{ui.call} {PHONE_DISPLAY}</a>
              <WhatsAppLink lang={l} placement="guide_body" className={`cta ${s.ctaWa}`}>
                <WhatsAppIcon size={18} /> {ui.whatsapp}
              </WhatsAppLink>
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container about-grid">
          <div className={s.officeText}>
            <h2 style={{ textAlign: 'left' }}>{t.officeTitle}</h2>
            <ArticleBody blocks={t.office} />
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

      <section style={{ padding: '44px 0 20px' }}>
        <div className="container">
          <div className={a.wrap}>
            <FaqList lang={l} faq={t.faq} title={t.faqTitle} />
            {t.related.length > 0 && (
              <ArticleBody blocks={[
                { type: 'h2', text: ui.related },
                { type: 'ul', items: t.related.map((x) => `[${x.label}](/${l}${x.path})`) },
              ]} />
            )}
            <ArticleBody blocks={[{ type: 'h2', text: ui.quoteTitle }, { type: 'p', text: ui.quoteText }]} />
            <p className={s.ctaRow}>
              <a className="cta" href="#quote">{ui.cta}</a>
              <a className={`cta ${s.ctaAlt}`} href={`tel:${PHONE_TEL}`}>{ui.call} {PHONE_DISPLAY}</a>
            </p>
            <SendPolicyCta lang={l} placement="final" />
            <Disclaimer lang={l} />
            {t.sources.length > 0 && <SourceList lang={l} sources={t.sources} updatedLine={ui.checked} />}
          </div>
        </div>
      </section>

      <AreasWeServe lang={l} />
      <RelatedGuides lang={l} page={path} />
      <RelatedCoverage lang={l} current={path} />
    </main>
  );
}
