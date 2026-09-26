# Blog: how to add an article

The blog is data-driven. Routes, hreflang, JSON-LD, the sitemap and the index
page all come from `content/blog/index.ts`. You never touch page code to publish.

- Index: `/[lang]/blog` (`app/[lang]/blog/page.tsx`)
- Article: `/[lang]/blog/[slug]` (`app/[lang]/blog/[slug]/page.tsx`)
- Data model: `content/blog/types.ts` (post) and `content/types.ts` (blocks)

## Add a post (2 steps)

1. Create `content/blog/posts/<slug>.ts`:

```ts
import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: 'hurricane-deductible-florida',   // lowercase-hyphen; same slug for every language
  datePublished: '2026-10-21',            // YYYY-MM-DD; add dateModified when you update facts
  translations: {
    en: {
      title: 'Hurricane Deductibles in Florida Explained',          // the only H1
      metaTitle: 'Hurricane Deductibles in Florida | M&K Agency',   // optional, <= ~65 chars
      description: '120–160 character unique meta description.',
      excerpt: 'Optional teaser for the index card.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'Text with a [link](/en/quote) and **bold**.' },
        { type: 'h2', text: 'Section heading' },
        { type: 'ul', items: ['One', 'Two'] },
        { type: 'ol', items: ['Step one', 'Step two'] },
        { type: 'callout', title: 'Tip', text: 'Short highlighted note.' },
      ],
      faq: [{ q: 'Question?', a: 'Answer.' }],          // optional; also emitted as FAQPage JSON-LD
      sources: [{ label: 'Citizens: …', url: 'https://www.citizensfla.com/…' }],
    },
    // es: { … }  ru: { … }  Add only languages that really exist.
  },
};
```

2. Register it in `content/blog/index.ts`: import it and add it to `posts`.

Then run `npm run build`. The build fails on a bad or duplicate slug or a bad date.

## What you get automatically

- Pages are generated only for the languages present in `translations`. Other
  languages return a real 404.
- hreflang and `x-default` list only the existing languages (`buildAlternates(..., langs)` in `lib/seo.ts`).
- Sitemap entries for each post/language, plus `/[lang]/blog` once a language has a post.
- A visible byline under the H1, next to the date (see "Author byline" below).
- Article + BreadcrumbList JSON-LD (+ FAQPage if `faq` is set). Article `author` (and `reviewedBy` on the
  page) is the byline author as a `Person` with `worksFor` M&K Agency; the `publisher` is "M&K Agency".
- A CTA box linking to `/[lang]/quote` and the office phone, a disclaimer, the source list, "also available in"
  links to the translations, and related posts.
- The header language switcher sends blog-article visitors to `/[lang]/blog`
  (the article links its own translations). The footer shows a Blog link for languages that have posts.

## Author byline (default)

Every post gets this byline automatically. You don't add anything to the post file:

- EN: "Written and reviewed by Mikhail Kozlov, licensed insurance agent, M&K Agency"
- ES: "Escrito y revisado por Mikhail Kozlov, agente de seguros con licencia, M&K Agency"
- RU: "Автор и проверка: Михаил Козлов, лицензированный страховой агент, M&K Agency"

The name links to `/[lang]/team#mikhail-kozlov` (Mikhail's card on the team page; the anchor is his
`slug` in `lib/team-data.ts`). The same URL is the `Person.url` in the JSON-LD:

```json
"author": { "@type": "Person", "name": "Mikhail Kozlov", "jobTitle": "Licensed Insurance Agent",
            "url": "https://mkagencyinc.com/en/team#mikhail-kozlov",
            "worksFor": { "@type": "InsuranceAgency", "name": "M&K Agency", "url": "https://mkagencyinc.com" } }
```

The default lives in one place, `DEFAULT_AUTHOR` in `content/authors.ts`, and is also used by the flood
service page (`/[lang]/flood-insurance-homestead-fl`, WebPage `author` + `reviewedBy`). Change it there and
every page follows.

Per-post override (only if someone else really wrote and reviewed the post): set `author` on the post.

```ts
import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: '…',
  datePublished: '2026-10-21',
  author: {
    name: 'Jane Doe',                  // schema.org Person name
    jobTitle: 'Licensed Insurance Agent',
    teamSlug: 'jane-doe',              // optional: her slug in lib/team-data.ts (links the name); omit if not on /team
    byline: {                          // all three languages are required by the type
      en: { prefix: 'Written and reviewed by ', name: 'Jane Doe', suffix: ', licensed insurance agent, M&K Agency' },
      es: { prefix: 'Escrito y revisado por ', name: 'Jane Doe', suffix: ', agente de seguros con licencia, M&K Agency' },
      ru: { prefix: 'Автор и проверка: ', name: 'Джейн Доу', suffix: ', лицензированный страховой агент, M&K Agency' },
    },
  },
  translations: { … },
};
```

Byline rules: credentials are only "licensed insurance agent". No license numbers, no designations,
and no insurance company names in the byline.

## Content rules (from the owner)

- Never mention Allstate, and never name a private insurance company. Citizens Property Insurance
  Corporation and government sources (FEMA/NFIP, FLOIR, FLHSMV, Florida Statutes, My Safe Florida Home) are fine.
- Call the business "M&K Agency".
- No prices, discounts, savings percentages, "cheapest" or guarantees. Include a line saying that
  coverage depends on the policy and readers should talk with a licensed agent.
- Verify every fact against the current official source and list it in `sources`.
- Spanish and Russian must be natural, native-quality writing, not literal translation.

## Other limited-language pages

Fixed pages that exist in only some languages (e.g. `/flood-insurance-homestead-fl`, EN+ES) are listed in
`lib/page-langs.ts`. That list drives the header switcher fallback and the sitemap.
