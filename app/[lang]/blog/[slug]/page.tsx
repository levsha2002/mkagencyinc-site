import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import { asLang, formatDate, getPost, postLangs, postsForLang, readingMinutes } from '@/lib/blog';
import { ArticleBody, ArticleCta, Byline, Disclaimer, FaqList, SourceList, articleStyles as s } from '@/components/article/ArticleParts';
import { DEFAULT_AUTHOR } from '@/content/authors';
import { personLd } from '@/lib/author';
import { stripInline } from '@/components/article/RichText';
import type { Lang } from '@/content/types';

// Article template: /[lang]/blog/[slug]. Only (lang, slug) pairs that exist in
// content/blog are generated; everything else is a real 404.
export const dynamicParams = false;

export async function generateStaticParams({ params }: { params: { lang: string } }) {
  return postsForLang(params.lang).map(({ post }) => ({ slug: post.slug }));
}

const LANG_NAME: Record<Lang, string> = { en: 'English', es: 'Español', ru: 'Русский' };
const UI: Record<Lang, { home: string; min: string; alsoIn: string; updated: string; published: string; more: string; checked: string }> = {
  en: { home: 'Home', min: 'min read', alsoIn: 'Also available in:', updated: 'Updated', published: 'Published', more: 'More articles', checked: 'Facts checked against these official sources on' },
  es: { home: 'Inicio', min: 'min de lectura', alsoIn: 'También disponible en:', updated: 'Actualizado', published: 'Publicado', more: 'Más artículos', checked: 'Datos verificados con estas fuentes oficiales el' },
  ru: { home: 'Главная', min: 'мин чтения', alsoIn: 'Также на:', updated: 'Обновлено', published: 'Опубликовано', more: 'Другие статьи', checked: 'Факты проверены по официальным источникам' },
};

function load(params: { lang: string; slug: string }) {
  const l = asLang(params.lang);
  const post = getPost(params.slug);
  const t = post?.translations[l];
  return post && t && l === params.lang ? { l, post, t } : null;
}

export async function generateMetadata({ params }: { params: { lang: string; slug: string } }) {
  const d = load(params);
  if (!d) return {};
  return pageMetadata({
    lang: d.l,
    path: `/blog/${d.post.slug}`,
    title: d.t.metaTitle ?? `${d.t.title} | M&K Agency`,
    description: d.t.description,
    langs: postLangs(d.post),
    article: { publishedTime: d.post.datePublished, modifiedTime: d.post.dateModified },
  });
}

export default function BlogArticle({ params }: { params: { lang: string; slug: string } }) {
  const d = load(params);
  if (!d) notFound();
  const { l, post, t } = d;
  const ui = UI[l];
  const url = `${SITE_URL}/${l}/blog/${post.slug}`;
  const translations = postLangs(post).filter((x) => x !== l);
  const modified = post.dateModified ?? post.datePublished;
  const related = postsForLang(l).filter((x) => x.post.slug !== post.slug).slice(0, 3);

  const author = post.author ?? DEFAULT_AUTHOR;
  const person = personLd(author, l);
  const org = { '@type': 'Organization', name: 'M&K Agency', url: SITE_URL };
  const ld: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: t.title,
      description: t.description,
      inLanguage: l,
      datePublished: post.datePublished,
      dateModified: modified,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url, reviewedBy: person },
      url,
      image: `${SITE_URL}/og.jpg`,
      author: person,
      publisher: org,
      isAccessibleForFree: true,
      citation: t.sources.map((x) => x.url),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: ui.home, item: `${SITE_URL}/${l}` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/${l}/blog` },
        { '@type': 'ListItem', position: 3, name: t.title, item: url },
      ],
    },
  ];
  if (t.faq?.length) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: stripInline(f.a) } })),
    });
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section style={{ padding: '36px 0 56px' }}>
        <div className="container">
          <article className={s.wrap}>
            <nav className={s.crumbs} aria-label="Breadcrumb">
              <Link href={`/${l}`}>{ui.home}</Link><span aria-hidden>›</span>
              <Link href={`/${l}/blog`}>Blog</Link>
            </nav>
            {t.category && <span className={s.kicker}>{t.category}</span>}
            <h1 className={s.h1}>{t.title}</h1>
            <p className={s.meta}>
              <Byline lang={l} author={author} />
              <span>{ui.published} <time dateTime={post.datePublished}>{formatDate(post.datePublished, l)}</time></span>
              {post.dateModified && post.dateModified !== post.datePublished && (
                <span>{ui.updated} <time dateTime={post.dateModified}>{formatDate(post.dateModified, l)}</time></span>
              )}
              <span>{readingMinutes(t)} {ui.min}</span>
            </p>
            {translations.length > 0 && (
              <p className={s.langs}>
                {ui.alsoIn}{' '}
                {translations.map((x, i) => (
                  <span key={x}>
                    {i > 0 && ' · '}
                    <Link href={`/${x}/blog/${post.slug}`} hrefLang={x} lang={x}>{LANG_NAME[x]}</Link>
                  </span>
                ))}
              </p>
            )}

            <ArticleBody blocks={t.body} />
            <ArticleCta lang={l} />
            {t.faq && <FaqList lang={l} faq={t.faq} />}
            <Disclaimer lang={l} />
            <SourceList lang={l} sources={t.sources} updatedLine={`${ui.checked} ${formatDate(modified, l)}.`} />

            {related.length > 0 && (
              <nav className={s.related} aria-label={ui.more}>
                <h2>{ui.more}</h2>
                <ul>
                  {related.map(({ post: p, t: rt }) => (
                    <li key={p.slug}><Link href={`/${l}/blog/${p.slug}`}>{rt.title}</Link></li>
                  ))}
                </ul>
              </nav>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
