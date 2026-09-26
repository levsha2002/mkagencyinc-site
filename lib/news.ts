// News data access. Editions are registered in content/news/index.ts.
import { editions } from '@/content/news';
import type { EditionTranslation, NewsEdition, NewsSource } from '@/content/news/types';
import type { Lang } from '@/content/types';
import { asLang } from '@/lib/blog';

export { asLang, formatDate } from '@/lib/blog';

export const NEWS_LANGS: Lang[] = ['en', 'es', 'ru'];

const DATE = /^\d{4}-\d{2}-\d{2}$/;

// Fail the build on obvious data mistakes instead of shipping a broken page.
const seen = new Set<string>();
for (const e of editions) {
  if (!/^\d{4}-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.slug)) throw new Error(`news: bad slug "${e.slug}" (use yyyy-mm-dd-short-slug)`);
  if (seen.has(e.slug)) throw new Error(`news: duplicate slug "${e.slug}"`);
  seen.add(e.slug);
  if (!DATE.test(e.datePublished)) throw new Error(`news: bad datePublished on "${e.slug}"`);
  if (!e.slug.startsWith(`${e.datePublished}-`)) throw new Error(`news: slug "${e.slug}" must start with datePublished ${e.datePublished}`);
  if (e.dateModified && !DATE.test(e.dateModified)) throw new Error(`news: bad dateModified on "${e.slug}"`);
  const langs = Object.keys(e.translations);
  if (langs.length === 0) throw new Error(`news: "${e.slug}" has no translations`);
  for (const l of langs) {
    const t = e.translations[l as Lang]!;
    if (!t.items.length) throw new Error(`news: "${e.slug}" (${l}) has no items`);
    for (const it of t.items) {
      if (!it.sources.length) throw new Error(`news: item "${it.headline}" in "${e.slug}" (${l}) has no source`);
      for (const s of it.sources) {
        if (!DATE.test(s.date)) throw new Error(`news: bad source date "${s.date}" in "${e.slug}" (${l})`);
        if (!/^https:\/\//.test(s.url)) throw new Error(`news: source URL must be https in "${e.slug}" (${l}): ${s.url}`);
      }
    }
  }
}

/** Newest first. */
export function allEditions(): NewsEdition[] {
  return [...editions].sort((a, b) => (a.datePublished < b.datePublished ? 1 : a.datePublished > b.datePublished ? -1 : b.slug.localeCompare(a.slug)));
}

export function editionsForLang(lang: string): { edition: NewsEdition; t: EditionTranslation }[] {
  const l = asLang(lang);
  return allEditions()
    .filter((e) => e.translations[l])
    .map((edition) => ({ edition, t: edition.translations[l] as EditionTranslation }));
}

export function getEdition(slug: string): NewsEdition | undefined {
  return editions.find((e) => e.slug === slug);
}

export function editionLangs(edition: NewsEdition): Lang[] {
  return NEWS_LANGS.filter((l) => edition.translations[l]);
}

export function newsHasLang(lang: string): boolean {
  const l = asLang(lang);
  return editions.some((e) => e.translations[l]);
}

/** Every source cited in an edition translation (items + extra), deduplicated. */
export function editionSources(t: EditionTranslation): NewsSource[] {
  const all = [...t.items.flatMap((i) => i.sources), ...(t.extraSources ?? [])];
  return all.filter((s, i) => all.findIndex((x) => x.url === s.url) === i);
}
