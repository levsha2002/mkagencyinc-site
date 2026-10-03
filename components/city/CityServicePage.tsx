import Link from 'next/link';
import { notFound } from 'next/navigation';
import HeroBackdrop from '@/components/hero/HeroBackdrop';
import { HERO_IMAGES } from '@/content/hero/images';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import RatingBadge from '@/components/RatingBadge';
import LeadForm from '@/components/LeadForm';
import SendPolicyCta from '@/components/SendPolicyCta';
import WhatsAppLink, { WhatsAppIcon } from '@/components/WhatsAppLink';
import RelatedCoverage from '@/components/RelatedCoverage';
import GapCallout from '@/components/GapCallout';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { ArticleBody, Byline, FaqList, SourceList, Disclaimer, articleStyles as a } from '@/components/article/ArticleParts';
import { RichText, stripInline } from '@/components/article/RichText';
import { DEFAULT_AUTHOR } from '@/content/authors';
import { personLd } from '@/lib/author';
import { formatDate } from '@/lib/blog';
import { CITY_PAGES, getCityPage } from '@/content/pages/city';
import AreasWeServe from './AreasWeServe';
import s from './City.module.css';

// Shared template for the local SEO pages: city pages (car/homeowners ×
// Homestead, Cutler Bay, Kendall) and county hubs (Miami-Dade, Broward).
// Each route folder is a thin wrapper; content lives in content/pages/city/.
// Layout mirrors the Florida City product pages (photo hero, LeadForm,
// RatingBadge) and the JSON-LD of the business-type pages.

type Lang = 'en' | 'es' | 'ru';

// Links to the plain-language protection guide (/[lang]/protect).
const GUIDE_LABEL: Record<Lang, { auto: string; home: string }> = {
  en: { auto: 'Guide: hit by a driver with no insurance? (uninsured motorist coverage)', home: 'Guide: if someone gets hurt at your home (liability and umbrella)' },
  es: { auto: 'Guía: ¿lo chocó alguien sin seguro? (cobertura UM)', home: 'Guía: si alguien se lesiona en su casa (responsabilidad y umbrella)' },
  ru: { auto: 'Гид: в вас врезался водитель без страховки? (покрытие UM)', home: 'Гид: если кто-то пострадал у вас дома (ответственность и umbrella)' },
};

const UI: Record<Lang, {
  home: string; updated: string; call: string; cta: string; whatsapp: string; langLine: string; checked: string;
  servedTitle: (county: string) => string; servedText: Record<'miami-dade' | 'broward', string>; hub: string;
  related: string; flood: string; quoteTitle: string; quoteText: string;
}> = {
  en: {
    home: 'Home', updated: 'Updated', call: 'Call', cta: 'Have an agent call me', whatsapp: 'WhatsApp us', langLine: 'English · Español · По-русски',
    checked: 'Facts on this page were checked against these sources on October 3, 2026.',
    servedTitle: (c) => `Communities we serve in ${c}`,
    servedText: {
      'miami-dade': 'We work with clients all over the county from our Florida City office. Communities with their own page are linked.',
      broward: 'We serve Broward clients from our Florida City office, mainly by phone, WhatsApp, text and email, including these communities and the rest of the county.',
    },
    hub: 'Miami-Dade County', related: 'More for this area',
    flood: 'Flood insurance in Homestead',
    quoteTitle: 'Ready for a second opinion on your coverage?',
    quoteText: 'Leave your number and a licensed agent will call you back, within an hour during business hours.',
  },
  es: {
    home: 'Inicio', updated: 'Actualizado el', call: 'Llame al', cta: 'Quiero que me llame un agente', whatsapp: 'Escríbanos por WhatsApp', langLine: 'English · Español · По-русски',
    checked: 'Los datos de esta página se verificaron con estas fuentes el 3 de octubre de 2026.',
    servedTitle: (c) => `Comunidades que atendemos en el ${c}`,
    servedText: {
      'miami-dade': 'Trabajamos con clientes de todo el condado desde nuestra oficina en Florida City. Las comunidades que tienen su propia página aparecen con enlace.',
      broward: 'Atendemos a los clientes de Broward desde nuestra oficina en Florida City, sobre todo por teléfono, WhatsApp, texto y correo, en estas comunidades y en el resto del condado.',
    },
    hub: 'Condado Miami-Dade', related: 'Más para esta zona',
    flood: 'Seguro de inundación en Homestead',
    quoteTitle: '¿Quiere una segunda opinión sobre su cobertura?',
    quoteText: 'Déjenos su número y un agente licenciado le llama, en menos de una hora en horario de oficina.',
  },
  ru: {
    home: 'Главная', updated: 'Обновлено', call: 'Звоните', cta: 'Пусть агент мне перезвонит', whatsapp: 'Написать в WhatsApp', langLine: 'English · Español · По-русски',
    checked: 'Факты на этой странице проверены по этим источникам 3 октября 2026 года.',
    servedTitle: (c) => `Где мы работаем: ${c}`,
    servedText: {
      'miami-dade': 'Мы работаем с клиентами по всему округу из офиса во Florida City. Населённые пункты, у которых есть своя страница, даны ссылками.',
      broward: 'Клиентов из Broward мы обслуживаем из офиса во Florida City — в основном по телефону, в WhatsApp, по SMS и почте: в этих городах и по всему округу.',
    },
    hub: 'Округ Miami-Dade', related: 'Ещё по этому району',
    flood: 'Страховка от наводнения в Homestead',
    quoteTitle: 'Нужен второй взгляд на ваше покрытие?',
    quoteText: 'Оставьте номер — лицензированный агент перезвонит, в рабочее время в течение часа.',
  },
};

function asLang(lang: string): Lang | null {
  return lang === 'en' || lang === 'es' || lang === 'ru' ? lang : null;
}

export function cityMetadata(path: string, lang: string) {
  const l = asLang(lang);
  const page = CITY_PAGES.find((p) => p.path === path);
  if (!page || !l) return {};
  const t = page.copy[l];
  return pageMetadata({ lang: l, path, title: t.metaTitle, description: t.metaDesc });
}

export default function CityServicePage({ path, lang }: { path: string; lang: string }) {
  const l = asLang(lang);
  if (!l) notFound();
  const page = getCityPage(path);
  const t = page.copy[l];
  const ui = UI[l];
  const url = `${SITE_URL}/${l}${path}`;
  const person = personLd(DEFAULT_AUTHOR, l);
  const image = HERO_IMAGES[page.heroImage];
  const parent = page.parent ? getCityPage(page.parent) : null;
  const source = `city-${path.replace(/^\//, '')}`;

  // Same area, other line (car <-> home), for the "more for this area" links.
  const sibling = CITY_PAGES.find((p) => p.area === page.area && p.line !== page.line);
  const extraLinks: { href: string; label: string }[] = [];
  if (sibling) extraLinks.push({ href: `/${l}${sibling.path}`, label: sibling.copy[l].h1a.replace(/[,—–\s]+$/, '') });
  if (parent) extraLinks.push({ href: `/${l}${parent.path}`, label: parent.copy[l].h1a.replace(/[,—–\s]+$/, '') });
  extraLinks.push(page.line === 'auto'
    ? { href: `/${l}/protect/car-insurance`, label: GUIDE_LABEL[l].auto }
    : { href: `/${l}/protect/home-insurance`, label: GUIDE_LABEL[l].home });
  if (page.area === 'homestead' && page.line === 'home' && l !== 'ru') extraLinks.push({ href: `/${l}/flood-insurance-homestead-fl`, label: ui.flood });

  const crumbs = [
    { name: ui.home, item: `${SITE_URL}/${l}` },
    ...(parent ? [{ name: parent.copy[l].breadcrumb, item: `${SITE_URL}/${l}${parent.path}` }] : []),
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
      areaServed: page.served
        ? [...page.areaServed, ...page.served.map((c) => ({ '@type': 'Place', name: `${c.name}, FL` }))]
        : page.areaServed,
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
              {parent && (<><Link href={`/${l}${parent.path}`}>{parent.copy[l].breadcrumb}</Link><span aria-hidden>›</span></>)}
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
            <p className="sub">{t.sub}</p>
            <div className={s.heroBtns}>
              <a className="cta" href="#quote">{ui.cta}</a>
              <div className="rated rated-stack">
                <span>{ui.langLine}</span>
                <RatingBadge lang={l} />
              </div>
            </div>
            <SendPolicyCta lang={l} placement="hero" />
          </div>
          <LeadForm lang={l} defaultType={page.line === 'auto' ? 'Auto' : 'Home'} source={source} />
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
          {page.line === 'auto' && <GapCallout lang={l} />}
        </div>
      </section>

      <section style={{ padding: '44px 0 10px' }}>
        <div className="container">
          <div className={a.wrap}>
            <ArticleBody blocks={t.body} />
            <p className={s.ctaRow}>
              <a className="cta" href="#quote">{ui.cta}</a>
              <a className={`cta ${s.ctaAlt}`} href={`tel:${PHONE_TEL}`}>{ui.call} {PHONE_DISPLAY}</a>
              <WhatsAppLink lang={l} placement="city_body" className={`cta ${s.ctaWa}`}>
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

      {page.served && (page.area === 'miami-dade' || page.area === 'broward') && (
        <section className="section" aria-labelledby="communities">
          <div className={`container ${s.served}`}>
            <h2 id="communities">{ui.servedTitle(t.breadcrumb)}</h2>
            <p>{ui.servedText[page.area]}</p>
            <ul className={s.pills}>
              {page.served.map((c) => (
                <li key={c.name}>
                  {c.path ? <Link className={s.pill} href={`/${l}${c.path}`}>{c.name}</Link> : <span className={s.pill}>{c.name}</span>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section style={{ padding: '44px 0 20px' }}>
        <div className="container">
          <div className={a.wrap}>
            <FaqList lang={l} faq={t.faq} title={t.faqTitle} />
            {extraLinks.length > 0 && (
              <ArticleBody blocks={[
                { type: 'h2', text: ui.related },
                { type: 'ul', items: extraLinks.map((x) => `[${x.label}](${x.href})`) },
              ]} />
            )}
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

      <AreasWeServe lang={l} current={path} />
      <RelatedCoverage lang={l} />
    </main>
  );
}
