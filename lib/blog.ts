// Blog data access. Posts are registered in content/blog/index.ts.
import { posts } from '@/content/blog';
import type { BlogPost, PostTranslation } from '@/content/blog/types';
import type { Lang } from '@/content/types';

export const BLOG_LANGS: Lang[] = ['en', 'es', 'ru'];

// Fail the build on obvious data mistakes instead of shipping a broken page.
const seen = new Set<string>();
for (const p of posts) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) throw new Error(`blog: bad slug "${p.slug}"`);
  if (seen.has(p.slug)) throw new Error(`blog: duplicate slug "${p.slug}"`);
  seen.add(p.slug);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.datePublished)) throw new Error(`blog: bad datePublished on "${p.slug}"`);
  if (Object.keys(p.translations).length === 0) throw new Error(`blog: "${p.slug}" has no translations`);
}

export function asLang(lang: string): Lang {
  return lang === 'es' || lang === 'ru' ? lang : 'en';
}

/** Newest first. */
export function allPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : a.datePublished > b.datePublished ? -1 : a.slug.localeCompare(b.slug)));
}

export function postsForLang(lang: string): { post: BlogPost; t: PostTranslation }[] {
  const l = asLang(lang);
  return allPosts()
    .filter((p) => p.translations[l])
    .map((post) => ({ post, t: post.translations[l] as PostTranslation }));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postLangs(post: BlogPost): Lang[] {
  return BLOG_LANGS.filter((l) => post.translations[l]);
}

export function blogHasLang(lang: string): boolean {
  const l = asLang(lang);
  return posts.some((p) => p.translations[l]);
}

export function formatDate(iso: string, lang: string): string {
  const locale = { en: 'en-US', es: 'es-US', ru: 'ru-RU' }[asLang(lang)];
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

/** Rough reading time from the article body (≈200 words/min). */
export function readingMinutes(t: PostTranslation): number {
  const words = t.body
    .flatMap((b) => ('items' in b ? b.items : [b.text]))
    .concat((t.faq ?? []).flatMap((f) => [f.q, f.a]))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
