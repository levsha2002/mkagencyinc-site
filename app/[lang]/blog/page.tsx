import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { asLang, blogHasLang, formatDate, postsForLang, allPosts, postLangs } from '@/lib/blog';
import { ArticleCta, articleStyles as s } from '@/components/article/ArticleParts';

// Blog index: /[lang]/blog. Fully data-driven from content/blog/index.ts.
type Lang = 'en' | 'es' | 'ru';

const T: Record<Lang, { title: string; metaTitle: string; desc: string; h1: string; intro: string; read: string; home: string; empty: string; other: string }> = {
  en: {
    title: 'Insurance Guides for Florida City & Homestead',
    metaTitle: 'Insurance Guides & News for South Miami-Dade | M&K Agency Blog',
    desc: 'Plain-English guides to Florida flood, home and auto insurance rules for Florida City, Homestead and South Miami-Dade, from a local licensed agency.',
    h1: 'Insurance guides for Florida City & Homestead',
    intro: 'Practical, source-checked explanations of the Florida insurance rules that affect South Miami-Dade households: flood zones, Citizens requirements, hurricane season and more.',
    read: 'Read article →',
    home: 'Home',
    empty: 'No articles in this language yet.',
    other: 'Articles in other languages',
  },
  es: {
    title: 'Guías de seguros para Florida City y Homestead',
    metaTitle: 'Guías de seguros en el sur de Miami-Dade | Blog de M&K Agency',
    desc: 'Guías claras sobre seguros de inundación, casa y auto en Florida para Florida City, Homestead y el sur de Miami-Dade, de una agencia local licenciada.',
    h1: 'Guías de seguros para Florida City y Homestead',
    intro: 'Explicaciones prácticas y verificadas con fuentes oficiales sobre las reglas de seguros de Florida que afectan a las familias del sur de Miami-Dade: zonas de inundación, requisitos de Citizens, temporada de huracanes y más.',
    read: 'Leer artículo →',
    home: 'Inicio',
    empty: 'Todavía no hay artículos en este idioma.',
    other: 'Artículos en otros idiomas',
  },
  ru: {
    title: 'Статьи о страховании во Florida City и Homestead',
    metaTitle: 'Статьи о страховании на юге Miami-Dade | Блог M&K Agency',
    desc: 'Понятные статьи о страховании жилья, авто и от наводнений во Флориде для жителей Florida City, Homestead и юга Miami-Dade.',
    h1: 'Статьи о страховании во Florida City и Homestead',
    intro: 'Практичные объяснения правил страхования во Флориде, проверенные по официальным источникам.',
    read: 'Читать статью →',
    home: 'Главная',
    empty: 'Статей на русском пока нет — они скоро появятся. Ниже — статьи на других языках.',
    other: 'Статьи на других языках',
  },
};

const LANG_NAME: Record<Lang, string> = { en: 'English', es: 'Español', ru: 'Русский' };

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const l = asLang(params.lang);
  const t = T[l];
  const langs = (['en', 'es', 'ru'] as Lang[]).filter((x) => blogHasLang(x));
  const meta = pageMetadata({
    lang: l,
    path: '/blog',
    title: t.metaTitle,
    description: t.desc,
    langs: langs.length ? langs : ['en'],
  });
  // A language with no posts yet still gets a working page (the header links
  // to it), but it is kept out of the index until it has content.
  return blogHasLang(l) ? meta : { ...meta, robots: { index: false, follow: true } };
}

export default function BlogIndex({ params }: { params: { lang: string } }) {
  const l = asLang(params.lang);
  const t = T[l];
  const items = postsForLang(l);
  const others = items.length
    ? []
    : allPosts().flatMap((p) => postLangs(p).filter((x) => x !== l).slice(0, 1).map((x) => ({ p, x })));

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: `https://mkagencyinc.com/${l}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://mkagencyinc.com/${l}/blog` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section style={{ padding: '40px 0 60px' }}>
        <div className="container">
          <nav className={s.crumbs} aria-label="Breadcrumb">
            <Link href={`/${l}`}>{t.home}</Link><span aria-hidden>›</span>Blog
          </nav>
          <h1 className={s.h1}>{t.h1}</h1>
          <p className={s.intro}>{t.intro}</p>

          {items.length > 0 ? (
            <div className={s.list}>
              {items.map(({ post, t: pt }) => (
                <article key={post.slug} className={s.card}>
                  <p className={s.cardMeta}>
                    {pt.category ? `${pt.category} · ` : ''}
                    <time dateTime={post.datePublished}>{formatDate(post.datePublished, l)}</time>
                  </p>
                  <h2><Link href={`/${l}/blog/${post.slug}`}>{pt.title}</Link></h2>
                  <p className={s.cardExcerpt}>{pt.excerpt ?? pt.description}</p>
                  <Link className={s.more} href={`/${l}/blog/${post.slug}`} aria-label={`${t.read} ${pt.title}`}>{t.read}</Link>
                </article>
              ))}
            </div>
          ) : (
            <>
              <p style={{ marginTop: 20 }}>{t.empty}</p>
              {others.length > 0 && (
                <div className={s.list}>
                  {others.map(({ p, x }) => (
                    <article key={p.slug} className={s.card}>
                      <p className={s.cardMeta}>{LANG_NAME[x]}</p>
                      <h2><Link href={`/${x}/blog/${p.slug}`} hrefLang={x}>{p.translations[x]!.title}</Link></h2>
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
