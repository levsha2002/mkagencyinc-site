import Link from 'next/link';
import { getPost } from '@/lib/blog';
import { RELATED_GUIDES } from '@/content/related-guides';
import s from '@/components/business/Business.module.css';

// "Related guides" block for landing pages (data: content/related-guides.ts).
// Renders nothing on pages without a group. Blog links appear only in the
// languages the post exists in, so the block never links to a 404.
type Lang = 'en' | 'es' | 'ru';

const HEADING: Record<Lang, string> = {
  en: 'Related guides',
  es: 'Guías relacionadas',
  ru: 'Полезные статьи',
};

export default function RelatedGuides({ lang, page }: { lang: string; page: string }) {
  const l: Lang = lang === 'es' || lang === 'ru' ? (lang as Lang) : 'en';
  const group = RELATED_GUIDES.find((g) => g.pages.includes(page));
  if (!group) return null;
  const items = group.links.flatMap((x) => {
    if ('blog' in x) {
      const post = getPost(x.blog);
      // A typo in the data should fail the build, not silently drop the link.
      if (!post) throw new Error(`RelatedGuides: unknown blog slug "${x.blog}"`);
      const t = post.translations[l];
      return t ? [{ href: `/${l}/blog/${x.blog}`, label: t.title }] : [];
    }
    if (x.langs && !x.langs.includes(l)) return [];
    return [{ href: `/${l}${x.page}`, label: x.label[l] }];
  });
  if (items.length === 0) return null;
  return (
    <section className="section" aria-labelledby="related-guides">
      <div className="container">
        <h2 id="related-guides" style={{ fontSize: '1.4rem' }}>{HEADING[l]}</h2>
        <div className={s.links}>
          {items.map((x) => (
            <Link key={x.href} href={x.href} className={s.pill}>
              <span aria-hidden>📖</span> {x.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
