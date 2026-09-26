import Link from 'next/link';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { allEditions, asLang, editionLangs, editionsForLang, formatDate, newsHasLang } from '@/lib/news';
import { ArticleCta, articleStyles as s } from '@/components/article/ArticleParts';
import n from '@/components/news/News.module.css';
import type { Lang } from '@/content/types';

// News index: /[lang]/news. Fully data-driven from content/news/index.ts.
const T: Record<Lang, { crumb: string; metaTitle: string; desc: string; h1: string; intro: string; read: string; home: string; empty: string }> = {
  en: {
    crumb: 'News',
    metaTitle: 'Florida Insurance News for South Miami-Dade | M&K Agency',
    desc: 'Short, source-linked updates on Citizens, Florida insurance rules, flood insurance, hurricanes and driving laws for Homestead, Florida City and South Miami-Dade.',
    h1: 'Insurance News',
    intro: 'Short daily roundups of the insurance news that matters to South Miami-Dade homeowners, drivers and small businesses. Every item is summarized in our own words and links to the original source.',
    read: 'Read this edition →',
    home: 'Home',
    empty: 'No news editions in English yet. Here are the latest editions in other languages:',
  },
  es: {
    crumb: 'Noticias',
    metaTitle: 'Noticias de seguros en Florida para el sur de Miami-Dade | M&K Agency',
    desc: 'Resúmenes breves con enlace a la fuente sobre Citizens, reglas de seguros en Florida, inundaciones, huracanes y leyes de tránsito para Homestead y Florida City.',
    h1: 'Noticias de seguros',
    intro: 'Resúmenes diarios y breves de las noticias de seguros que importan a propietarios, conductores y pequeños negocios del sur de Miami-Dade. Cada noticia está contada con nuestras propias palabras y enlaza a la fuente original.',
    read: 'Leer esta edición →',
    home: 'Inicio',
    empty: 'Todavía no hay ediciones en español. Estas son las más recientes en otros idiomas:',
  },
  ru: {
    crumb: 'Новости',
    metaTitle: 'Новости страхования во Флориде для юга Miami-Dade | M&K Agency',
    desc: 'Короткие новости со ссылками на источники: Citizens, правила страхования во Флориде, наводнения, ураганы и правила для водителей на юге Miami-Dade.',
    h1: 'Новости страхования',
    intro: 'Короткие ежедневные обзоры новостей страхования, важных для домовладельцев, водителей и малого бизнеса на юге Miami-Dade. Каждая новость пересказана своими словами и со ссылкой на первоисточник.',
    read: 'Читать выпуск →',
    home: 'Главная',
    empty: 'Выпусков на русском пока нет. Последние выпуски на других языках:',
  },
};

const LANG_NAME: Record<Lang, string> = { en: 'English', es: 'Español', ru: 'Русский' };

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const l = asLang(params.lang);
  const t = T[l];
  const langs = (['en', 'es', 'ru'] as Lang[]).filter((x) => newsHasLang(x));
  const meta = pageMetadata({
    lang: l,
    path: '/news',
    title: t.metaTitle,
    description: t.desc,
    langs: langs.length ? langs : ['en'],
  });
  // A language with no editions yet still gets a working page (the nav links
  // to it), but it stays out of the index and the sitemap until it has one.
  return newsHasLang(l) ? meta : { ...meta, robots: { index: false, follow: true } };
}

export default function NewsIndex({ params }: { params: { lang: string } }) {
  const l = asLang(params.lang);
  const t = T[l];
  const items = editionsForLang(l);
  const others = items.length
    ? []
    : allEditions().slice(0, 5).flatMap((e) => editionLangs(e).filter((x) => x !== l).slice(0, 1).map((x) => ({ e, x })));

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: `${SITE_URL}/${l}` },
      { '@type': 'ListItem', position: 2, name: t.crumb, item: `${SITE_URL}/${l}/news` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section style={{ padding: '40px 0 60px' }}>
        <div className="container">
          <nav className={s.crumbs} aria-label="Breadcrumb">
            <Link href={`/${l}`}>{t.home}</Link><span aria-hidden>›</span>{t.crumb}
          </nav>
          <h1 className={s.h1}>{t.h1}</h1>
          <p className={s.intro}>{t.intro}</p>

          {items.length > 0 ? (
            <div className={s.list}>
              {items.map(({ edition, t: et }) => (
                <article key={edition.slug} className={s.card}>
                  <p className={s.cardMeta}>
                    <time dateTime={edition.datePublished}>{formatDate(edition.datePublished, l)}</time>
                  </p>
                  <h2><Link href={`/${l}/news/${edition.slug}`}>{et.title}</Link></h2>
                  <ul className={n.headlines}>
                    {et.items.map((it) => <li key={it.headline}>{it.headline}</li>)}
                  </ul>
                  <Link className={s.more} href={`/${l}/news/${edition.slug}`} aria-label={`${t.read} ${et.title}`}>{t.read}</Link>
                </article>
              ))}
            </div>
          ) : (
            <>
              <p style={{ marginTop: 20 }}>{t.empty}</p>
              {others.length > 0 && (
                <div className={s.list}>
                  {others.map(({ e, x }) => (
                    <article key={e.slug} className={s.card}>
                      <p className={s.cardMeta}>{LANG_NAME[x]} · {formatDate(e.datePublished, x)}</p>
                      <h2><Link href={`/${x}/news/${e.slug}`} hrefLang={x}>{e.translations[x]!.title}</Link></h2>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
          <div className={s.wrap}>
            <ArticleCta lang={l} />
          </div>
        </div>
      </section>
    </main>
  );
}
