import Link from 'next/link';
import { PHONE_TEL } from '@/lib/dictionaries';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { ArticleBody, Byline, FaqList, SourceList, articleStyles as a } from '@/components/article/ArticleParts';
import { stripInline } from '@/components/article/RichText';
import { DEFAULT_AUTHOR } from '@/content/authors';
import { personLd } from '@/lib/author';
import {
  HUB, TOPICS, FIGURES, figureSrc, sourceList, PROTECT_PATH, topicPath, type Lang,
} from '@/content/pages/protect';
import ProtectTabsNav from './ProtectTabsNav';
import ProtectFinalCta from './ProtectFinalCta';
import HubTabs, { type HubTabItem } from './HubTabs';
import { PROTECT_UI } from './ui';
import s from './Protect.module.css';

const asLang = (l: string): Lang => (l === 'es' || l === 'ru' ? l : 'en');
const MODIFIED = '2026-10-03';

export function hubMetadata(lang: string) {
  const l = asLang(lang);
  return pageMetadata({ lang: l, path: PROTECT_PATH, title: HUB[l].metaTitle, description: HUB[l].metaDesc });
}

export default function HubPageView({ lang }: { lang: string }) {
  const l = asLang(lang);
  const h = HUB[l];
  const ui = PROTECT_UI[l];
  const url = `${SITE_URL}/${l}${PROTECT_PATH}`;
  const person = personLd(DEFAULT_AUTHOR, l);

  const items: HubTabItem[] = h.panels.map((p) => {
    const topic = TOPICS.find((t) => t.slug === p.slug)!;
    return {
      slug: p.slug.replace('-insurance', ''),
      label: topic.t[l].tab,
      icon: ui.tabIcons[p.slug],
      title: p.title,
      points: p.points,
      more: p.more,
      href: `/${l}${topicPath(p.slug)}`,
      img: { ...figureSrc(p.figure, l), alt: FIGURES[p.figure].alt[l] },
    };
  });

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': url,
      url,
      name: h.metaTitle,
      description: h.metaDesc,
      inLanguage: l,
      dateModified: MODIFIED,
      author: person,
      publisher: { '@type': 'Organization', name: 'M&K Agency', url: SITE_URL },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: TOPICS.map((t, i) => ({
          '@type': 'ListItem', position: i + 1, name: t.t[l].h1, url: `${SITE_URL}/${l}${topicPath(t.slug)}`,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: h.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripInline(f.a) } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: ui.home, item: `${SITE_URL}/${l}` },
        { '@type': 'ListItem', position: 2, name: ui.guide, item: url },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ProtectTabsNav lang={l} current="overview" />

      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <nav className={a.crumbs} aria-label="Breadcrumb">
            <Link href={`/${l}`}>{ui.home}</Link><span aria-hidden>›</span><span>{ui.guide}</span>
          </nav>
          <span className="badge gold">{h.kicker}</span>
          <h1 style={{ maxWidth: '52rem' }}>{h.h1}</h1>
          <p className={a.meta} style={{ margin: '0 0 16px' }}><Byline lang={l} /></p>
          <p className="sub" style={{ maxWidth: '46rem' }}>{h.sub}</p>
          <div className={s.heroBtns}>
            <a className="cta" href={`tel:${PHONE_TEL}`}>📞 {ui.call}</a>
            <a className={`cta ${s.ctaAlt}`} href="#quote">{ui.cta}</a>
          </div>
          <div className="rated rated-stack">
            <span>{ui.langLine}</span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="protect-topics" style={{ paddingTop: 30 }}>
        <div className="container">
          <h2 id="protect-topics" style={{ textAlign: 'left', marginBottom: 6 }}>{h.tabsTitle}</h2>
          <p style={{ color: 'var(--muted)', marginBottom: 14 }}>{h.tabsIntro}</p>
          <HubTabs items={items} label={h.tabsTitle} />
        </div>
      </section>

      <section style={{ padding: '10px 0 20px' }}>
        <div className="container">
          <div className={`${a.wrap} ${a.body}`}>
            <ArticleBody blocks={[{ type: 'h2', text: h.whyTitle }, ...h.why]} />
            <h2>{h.toolsTitle}</h2>
            <div className={s.tools}>
              {h.tools.map((t) => (
                <Link key={t.href} href={t.href} className={s.relCard}>
                  <strong>{t.label} →</strong>
                  <span>{t.text}</span>
                </Link>
              ))}
            </div>
            <FaqList lang={l} faq={h.faq} title={ui.faqTitle} />
          </div>
        </div>
      </section>

      <ProtectFinalCta lang={l} title={h.ctaTitle} text={h.ctaText} leadType="Auto" source="learn-hub" />

      <section style={{ padding: '10px 0 40px' }}>
        <div className="container">
          <div className={a.wrap}>
            <p className={a.disclaimer}>{h.disclaimer}</p>
            <SourceList lang={l} sources={sourceList(h.sources, l)} updatedLine={ui.checked} />
          </div>
        </div>
      </section>
    </main>
  );
}
