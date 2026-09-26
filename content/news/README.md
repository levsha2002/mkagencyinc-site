# Insurance News: how to publish a daily edition

The news section is data-driven, like the blog (`content/blog/README.md`). Routes, hreflang,
NewsArticle JSON-LD, the sitemap and the index page all come from `content/news/index.ts`.
You never touch page code to publish.

- Index: `/[lang]/news` (`app/[lang]/news/page.tsx`), newest edition first
- Edition: `/[lang]/news/<yyyy-mm-dd-slug>` (`app/[lang]/news/[slug]/page.tsx`)
- Data model: `content/news/types.ts`; data access and build-time checks: `lib/news.ts`
- Styles: `components/news/News.module.css` (plus the shared article styles)

## Add an edition (2 steps)

1. Create `content/news/posts/<yyyy-mm-dd-slug>.ts` (copy the latest edition as a template):

```ts
import type { NewsEdition, NewsSource } from '../types';

const OIR: NewsSource = {
  name: 'Florida Office of Insurance Regulation',  // publisher shown to readers
  date: '2026-10-01',                               // publication date of the ORIGINAL (YYYY-MM-DD)
  url: 'https://floir.gov/newsroom/…',              // https only
  title: 'Original headline',                       // optional (link title attribute)
};

export const edition: NewsEdition = {
  slug: '2026-10-01-short-topic-words',   // must start with datePublished; same slug for every language
  datePublished: '2026-10-01',            // Eastern date; add dateModified (YYYY-MM-DD) when you correct facts
  translations: {
    en: {
      title: 'Florida insurance news, Oct. 1, 2026: …',   // the only H1
      metaTitle: 'Insurance News Oct. 1, 2026: … | M&K Agency', // optional, <= ~65 chars
      description: '120–160 character meta description.',
      intro: 'One or two sentences above the items.',            // optional
      items: [
        {
          headline: 'Headline in our own words',
          summary: '2–4 sentences in OUR OWN WORDS. Inline [links](/en/quote) and **bold** allowed.',
          why: 'One line: what the reader should do or know.',   // shown after "Why it matters for you:"
          sources: [OIR],                                         // first = primary; add a 2nd only if it adds a fact
        },
      ],
      extra: [{ type: 'callout', title: 'Tropics check', text: '…' }], // optional closing blocks
      extraSources: [/* sources used only in `extra` */],
    },
    // es: { … }  ru: { … }  Add only languages that really exist.
  },
};
```

2. Register it in `content/news/index.ts`: import it and add it to `editions`.

Then run `npx tsc --noEmit && npm run build`. The build fails on a bad or duplicate slug, a slug that doesn't
start with its date, a bad date, an item without a source, or a non-https source URL.

## What you get automatically

- Pages only for the languages present in `translations`; other languages return a real 404.
- hreflang + `x-default` list only the existing languages.
- Sitemap entries for each edition/language, plus `/[lang]/news` once that language has an edition.
  A language with no editions keeps a working index page (the nav links to it) that is `noindex, follow`
  and is not in the sitemap.
- Byline: the blog default (`DEFAULT_AUTHOR` in `content/authors.ts`): "Written and reviewed by Mikhail Kozlov,
  licensed insurance agent, M&K Agency". Don't set `author` unless someone else really wrote it.
- NewsArticle JSON-LD (headline, datePublished, dateModified, author Person Mikhail Kozlov, publisher M&K Agency,
  citation = every source URL) and BreadcrumbList.
- "Why it matters for you" box and a source line (name + date, linked) under every item, the quote/phone CTA box
  (`/[lang]/quote`, (305) 859-3953), a news disclaimer, "also available in" links and earlier editions.
- The header language switcher sends edition visitors to `/[lang]/news` (the edition links its own translations).
- Header nav (desktop + mobile menu) and footer link: News / Noticias / Новости.

## Editorial rules (from the owner)

- 3–5 genuinely recent items (last few days) for South Florida homeowners, drivers and small businesses.
  Prefer official sources (citizensfla.com, floir.gov, flsenate.gov, myfloridahouse.gov, fema.gov, floodsmart.gov,
  congress.gov, nhc.noaa.gov, flhsmv.gov, miamidade.gov); reputable outlets are fine as links.
- Summaries in our own words. Never copy article text; at most one short quoted sentence.
- Verify every fact against the source, include the source's publication date, invent nothing. If there
  aren't at least 3 real, recent items, don't publish filler.
- Never repeat an old item as new: check `/workspace/articles/news_log.md` first and log every item after publishing.
- Name no private insurance companies at all, including any carrier brand the agency works with (same rule as the blog).
  Citizens and government bodies are fine. When a source names companies, say "four home insurers", not their names.
- No prices, premiums, discounts, savings or guarantees. Dollar thresholds in a law (e.g. a crash-report limit) are fine.
- EN always; ES in natural, native-quality Spanish; RU when the items matter to the Russian-speaking community.
