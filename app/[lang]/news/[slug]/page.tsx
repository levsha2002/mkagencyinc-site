import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { asLang, editionLangs, editionSources, editionsForLang, formatDate, getEdition } from '@/lib/news';
import { ArticleBody, ArticleCta, Byline, articleStyles as s } from '@/components/article/ArticleParts';
import { RichText, stripInline } from '@/components/article/RichText';
import { DEFAULT_AUTHOR } from '@/content/authors';
import { personLd } from '@/lib/author';
import n from '@/components/news/News.module.css';
import type { Lang } from '@/content/types';

// Daily edition template: /[lang]/news/[slug]. Only (lang, slug) pairs that
// exist in content/news are generated; everything else is a real 404.
export const dynamicParams = false;

export async function generateStaticParams({ params }: { params: { lang: string } }) {
  return editionsForLang(params.lang).map(({ edition }) => ({ slug: edition.slug }));
}

const LANG_NAME: Record<Lang, string> = { en: 'English', es: 'Español', ru: 'Русский' };
const UI: Record<Lang, { home: string; news: string; kicker: string; alsoIn: string; updated: string; published: string; why: string; source: string; more: string; all: string; disclaimer: string }> = {
  en: {
    home: 'Home', news: 'News', kicker: 'Daily insurance news', alsoIn: 'Also available in:', updated: 'Updated', published: 'Published',
    why: 'Why it matters for you:', source: 'Source:', more: 'Earlier editions', all: 'All news editions →',
    disclaimer: 'This roundup is general information, not legal advice or policy language. Each item is our own short summary of the linked original report; details can change after publication, so check the source for the full story. Coverage depends on the terms, limits and exclusions of your policy. Talk with a licensed agent about your situation.',
  },
  es: {
    home: 'Inicio', news: 'Noticias', kicker: 'Noticias de seguros del día', alsoIn: 'También disponible en:', updated: 'Actualizado', published: 'Publicado',
    why: 'Por qué le importa:', source: 'Fuente:', more: 'Ediciones anteriores', all: 'Todas las ediciones →',
    disclaimer: 'Este resumen es información general, no asesoría legal ni lenguaje de póliza. Cada noticia es un breve resumen propio del reporte original enlazado; los detalles pueden cambiar después de publicarse, así que consulte la fuente para ver la información completa. La cobertura depende de los términos, límites y exclusiones de su póliza. Consulte su caso con un agente licenciado.',
  },
  ru: {
    home: 'Главная', news: 'Новости', kicker: 'Новости страхования за день', alsoIn: 'Также на:', updated: 'Обновлено', published: 'Опубликовано',
    why: 'Почему это важно для вас:', source: 'Источник:', more: 'Предыдущие выпуски', all: 'Все выпуски →',
    disclaimer: 'Этот обзор — общая информация, а не юридическая консультация и не текст полиса. Каждая новость — наш краткий пересказ оригинального материала по ссылке; после публикации детали могут измениться, поэтому подробности смотрите в источнике. Покрытие зависит от условий, лимитов и исключений вашего полиса. Обсудите свою ситуацию с лицензированным агентом.',
  },
};

function load(params: { lang: string; slug: string }) {
  const l = asLang(params.lang);
  const edition = getEdition(params.slug);
  const t = edition?.translations[l];
  return edition && t && l === params.lang ? { l, edition, t } : null;
}

export async function generateMetadata({ params }: { params: { lang: string; slug: string } }) {
  const d = load(params);
  if (!d) return {};
  return pageMetadata({
    lang: d.l,
    path: `/news/${d.edition.slug}`,
    title: d.t.metaTitle ?? `${d.t.title} | M&K Agency`,
    description: d.t.description,
    langs: editionLangs(d.edition),
    article: { publishedTime: d.edition.datePublished, modifiedTime: d.edition.dateModified },
  });
}

export default function NewsEditionPage({ params }: { params: { lang: string; slug: string } }) {
  const d = load(params);
  if (!d) notFound();
  const { l, edition, t } = d;
  const ui = UI[l];
  const url = `${SITE_URL}/${l}/news/${edition.slug}`;
  const translations = editionLangs(edition).filter((x) => x !== l);
  const modified = edition.dateModified ?? edition.datePublished;
  const earlier = editionsForLang(l).filter((x) => x.edition.slug !== edition.slug).slice(0, 5);

  const author = edition.author ?? DEFAULT_AUTHOR;
  const person = personLd(author, l);
  const ld: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: t.title.length > 110 ? `${t.title.slice(0, 107)}…` : t.title,
      description: t.description,
      inLanguage: l,
      datePublished: edition.datePublished,
      dateModified: modified,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
      image: `${SITE_URL}/og.jpg`,
      author: person,
      publisher: { '@type': 'Organization', name: 'M&K Agency', url: SITE_URL },
      isAccessibleForFree: true,
      about: t.items.map((it) => stripInline(it.headline)),
      citation: editionSources(t).map((x) => x.url),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: ui.home, item: `${SITE_URL}/${l}` },
        { '@type': 'ListItem', position: 2, name: ui.news, item: `${SITE_URL}/${l}/news` },
        { '@type': 'ListItem', position: 3, name: t.title, item: url },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section style={{ padding: '36px 0 56px' }}>
        <div className="container">
          <article className={s.wrap}>
            <nav className={s.crumbs} aria-label="Breadcrumb">
              <Link href={`/${l}`}>{ui.home}</Link><span aria-hidden>›</span>
              <Link href={`/${l}/news`}>{ui.news}</Link>
            </nav>
            <span className={s.kicker}>{ui.kicker}</span>
            <h1 className={s.h1}>{t.title}</h1>
            <p className={s.meta}>
              <Byline lang={l} author={author} />
              <span>{ui.published} <time dateTime={edition.datePublished}>{formatDate(edition.datePublished, l)}</time></span>
              {edition.dateModified && edition.dateModified !== edition.datePublished && (
                <span>{ui.updated} <time dateTime={edition.dateModified}>{formatDate(edition.dateModified, l)}</time></span>
              )}
            </p>
            {translations.length > 0 && (
              <p className={s.langs}>
                {ui.alsoIn}{' '}
                {translations.map((x, i) => (
                  <span key={x}>
                    {i > 0 && ' · '}
                    <Link href={`/${x}/news/${edition.slug}`} hrefLang={x} lang={x}>{LANG_NAME[x]}</Link>
                  </span>
                ))}
              </p>
            )}
            {t.intro && <p className={n.lead}><RichText text={t.intro} /></p>}

            <div className={n.items}>
              {t.items.map((it, i) => (
                <section key={it.headline} className={n.item} aria-labelledby={`item-${i + 1}`}>
                  <h2 id={`item-${i + 1}`}><span className={n.num}>{i + 1}.</span>{it.headline}</h2>
                  <p className={n.summary}><RichText text={it.summary} /></p>
                  <p className={n.why}><strong>{ui.why}</strong> <RichText text={it.why} /></p>
                  {it.sources.map((src) => (
                    <p key={src.url} className={n.src}>
                      {ui.source}{' '}
                      <a href={src.url} target="_blank" rel="noopener noreferrer" title={src.title}>{src.name}</a>
                      {', '}<time dateTime={src.date}>{formatDate(src.date, l)}</time>
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {t.extra && t.extra.length > 0 && <ArticleBody blocks={t.extra} />}

            <ArticleCta lang={l} />
            <p className={s.disclaimer}>{ui.disclaimer}</p>

            <nav className={s.related} aria-label={ui.more}>
              {earlier.length > 0 && (
                <>
                  <h2>{ui.more}</h2>
                  <ul>
                    {earlier.map(({ edition: e, t: et }) => (
                      <li key={e.slug}><Link href={`/${l}/news/${e.slug}`}>{et.title}</Link></li>
                    ))}
                  </ul>
                </>
              )}
              <p style={{ marginTop: 10 }}><Link href={`/${l}/news`}>{ui.all}</Link></p>
            </nav>
          </article>
        </div>
      </section>
    </main>
  );
}
