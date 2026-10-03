import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PHONE_TEL } from '@/lib/dictionaries';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { ArticleBody, Byline, FaqList, SourceList, articleStyles as a } from '@/components/article/ArticleParts';
import { RichText, stripInline } from '@/components/article/RichText';
import { DEFAULT_AUTHOR } from '@/content/authors';
import { personLd } from '@/lib/author';
import { formatDate } from '@/lib/blog';
import {
  getTopic, sourceList, SOURCES, figureSrc, PROTECT_PATH, topicPath, HUB, type Lang, type TopicPage,
} from '@/content/pages/protect';
import ProtectTabsNav from './ProtectTabsNav';
import ProtectFigure from './ProtectFigure';
import ProtectFinalCta from './ProtectFinalCta';
import { PROTECT_UI } from './ui';
import s from './Protect.module.css';

const asLang = (l: string): Lang => (l === 'es' || l === 'ru' ? l : 'en');

export function topicMetadata(lang: string, slug: string) {
  const page = getTopic(slug);
  if (!page) return {};
  const l = asLang(lang);
  const t = page.t[l];
  return pageMetadata({
    lang: l,
    path: topicPath(page.slug),
    title: t.metaTitle,
    description: t.metaDesc,
    article: { publishedTime: page.published, modifiedTime: page.modified },
  });
}

function jsonLd(page: TopicPage, l: Lang) {
  const t = page.t[l];
  const url = `${SITE_URL}/${l}${topicPath(page.slug)}`;
  const person = personLd(DEFAULT_AUTHOR, l);
  const ui = PROTECT_UI[l];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: t.h1,
      description: t.metaDesc,
      inLanguage: l,
      url,
      mainEntityOfPage: url,
      image: `${SITE_URL}${figureSrc(t.heroFigure, l).src}`,
      datePublished: page.published,
      dateModified: page.modified,
      author: person,
      reviewedBy: person,
      publisher: { '@type': 'Organization', name: 'M&K Agency', url: SITE_URL },
      isPartOf: { '@type': 'CollectionPage', '@id': `${SITE_URL}/${l}${PROTECT_PATH}`, name: HUB[l].metaTitle },
      citation: t.sources.map((k) => SOURCES[k].url),
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
        { '@type': 'ListItem', position: 2, name: ui.guide, item: `${SITE_URL}/${l}${PROTECT_PATH}` },
        { '@type': 'ListItem', position: 3, name: t.tab, item: url },
      ],
    },
  ];
}

export default function TopicPageView({ lang, slug }: { lang: string; slug: string }) {
  const page = getTopic(slug);
  if (!page) notFound();
  const l = asLang(lang);
  const t = page.t[l];
  const ui = PROTECT_UI[l];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(page, l)) }} />

      <ProtectTabsNav lang={l} current={page.slug} />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <nav className={a.crumbs} aria-label="Breadcrumb">
              <Link href={`/${l}`}>{ui.home}</Link><span aria-hidden>›</span>
              <Link href={`/${l}${PROTECT_PATH}`}>{ui.guide}</Link><span aria-hidden>›</span>
              <span>{t.tab}</span>
            </nav>
            <span className="badge gold">{t.kicker}</span>
            <h1>{t.h1}</h1>
            <p className={a.meta} style={{ margin: '0 0 16px' }}>
              <Byline lang={l} />
              <span>{ui.updated} <time dateTime={page.modified}>{formatDate(page.modified, l)}</time></span>
            </p>
            <p className="sub">{t.sub}</p>
            <div className={s.heroBtns}>
              <a className="cta" href={`tel:${PHONE_TEL}`}>📞 {ui.call}</a>
              <a className={`cta ${s.ctaAlt}`} href="#quote">{ui.cta}</a>
            </div>
            <div className="rated rated-stack">
              <span>{ui.langLine}</span>
            </div>
          </div>
          <ProtectFigure lang={l} name={t.heroFigure} hero priority />
        </div>
      </section>

      <section style={{ padding: '40px 0 10px' }}>
        <div className="container">
          <div className={`${a.wrap} ${a.body}`}>
            <div className={s.key}>
              <h2>{t.keyTitle}</h2>
              <ul>{t.key.map((k) => <li key={k}><RichText text={k} /></li>)}</ul>
            </div>

            {t.sections.map((sec) => (
              <div key={sec.h2} id={sec.id}>
                <ArticleBody blocks={[{ type: 'h2', text: sec.h2 }, ...sec.blocks]} />
                {sec.stories?.map((st) => (
                  <aside key={st.title} className={s.story} aria-label={st.title}>
                    <span className={s.storyTag}>{ui.example}</span>
                    <h3>{st.title}</h3>
                    <ol>{st.steps.map((x) => <li key={x}><RichText text={x} /></li>)}</ol>
                    {st.ending && <p><RichText text={st.ending} /></p>}
                  </aside>
                ))}
                {sec.figure && sec.figure !== t.heroFigure && <ProtectFigure lang={l} name={sec.figure} />}
              </div>
            ))}

            {t.cases && t.cases.length > 0 && (
              <div id="real-cases">
                <h2>{t.casesTitle}</h2>
                {t.casesIntro && <p>{t.casesIntro}</p>}
                <div className={s.cases}>
                  {t.cases.map((c) => (
                    <article key={c.title} className={s.case}>
                      <span className={s.caseTag}>{ui.realCase}</span>
                      <h3>{c.title}</h3>
                      <p className={s.caseWhere}>{c.where}</p>
                      <dl>
                        <dt>{ui.happened}</dt><dd>{c.happened}</dd>
                        <dt>{ui.decided}</dt><dd>{c.decided}</dd>
                        <dt>{ui.shows}</dt><dd><RichText text={c.shows} /></dd>
                      </dl>
                      <p className={s.caseSrc}>
                        {ui.source}: <a href={SOURCES[c.source].url} target="_blank" rel="noopener noreferrer">{SOURCES[c.source].label[l]}</a>
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            <div id="numbers">
              <h2>{t.statsTitle}</h2>
              <div className={s.stats}>
                {t.stats.map((st) => (
                  <div key={st.value + st.text} className={s.stat}>
                    <span className={s.statValue}>{st.value}</span>
                    <span className={s.statText}>{st.text}</span>
                    <span className={s.statSrc}>
                      {ui.source}: <a href={SOURCES[st.source].url} target="_blank" rel="noopener noreferrer">{SOURCES[st.source].label[l].split(':')[0]}</a>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={s.check} id="check">
              <h2>{t.checklistTitle}</h2>
              <ul>{t.checklist.map((x) => <li key={x}><RichText text={x} /></li>)}</ul>
            </div>

            <h2>{t.relatedTitle}</h2>
            <div className={s.related}>
              {t.related.map((r) => (
                <Link key={r.href} href={r.href} className={s.relCard}>
                  <strong>{r.label} →</strong>
                  <span>{r.text}</span>
                </Link>
              ))}
            </div>

            <FaqList lang={l} faq={t.faq} title={ui.faqTitle} />
          </div>
        </div>
      </section>

      <ProtectFinalCta lang={l} title={t.ctaTitle} text={t.ctaText} leadType={page.leadType} source={page.leadSource} />

      <section style={{ padding: '10px 0 40px' }}>
        <div className="container">
          <div className={a.wrap}>
            <p className={a.disclaimer}>{t.disclaimer}</p>
            <SourceList lang={l} sources={sourceList(t.sources, l)} updatedLine={ui.checked} />
          </div>
        </div>
      </section>
    </main>
  );
}
