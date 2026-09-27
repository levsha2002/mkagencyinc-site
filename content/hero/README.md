# Daily hero rotation

The home pages and the main service pages change their hero (headline, sub-headline and photo)
once a day. Every visitor sees the same variant on a given day, in every language.

## How the day is chosen

- `lib/rotation.ts` computes today's date in **America/New_York** (`easternDate()`), converts it
  to a day number (days since 1970-01-01) and picks `pool[day % pool.length]` (`pickDaily`).
- The pick happens on the server only. Pages use ISR (`export const revalidate = 3600`), so HTML
  and the client hydrate from the same markup (no hydration mismatch). The new variant appears
  on the first request after midnight ET, at the latest about an hour later.
- Copy and image pools have different lengths (14 copy variants; 15–18 images), so the
  headline/photo combination doesn't repeat on a short cycle.

## Where things live

| What | File |
|---|---|
| Copy variants (EN/ES/RU, 14 per page type) | `content/hero/copy/<type>.ts` |
| Image registry + localized alt text | `content/hero/images.ts` |
| Image pools per page type + build-time checks | `content/hero/index.ts` |
| Day math, preview override | `lib/rotation.ts` |
| Paths that accept `?day=` / `?date=` preview | `lib/rotation-paths.ts` |
| Background photo component | `components/hero/HeroBackdrop.tsx` |
| "Today's article" block (home pages) | `components/TodaysArticle.tsx`, `lib/latest-article.ts` |

Page types: `home`, `auto`, `homeowners`, `condo`, `commercial` (general liability, BOP,
commercial auto, E&O pages), `life`, `coverage` (coverage check).

On the auto/homeowners/condo landing pages the first half of the H1 (city + product keyword)
stays fixed for SEO; only the accent part and the sub-headline rotate. On `/insurance/<slug>`
product pages the H1 stays fixed and a rotating line + sub-headline sit under it.

## Rules for new copy

- Keep the EN/ES/RU versions saying the same thing, and keep the array length ≥ 14.
- No prices, percentages, "cheapest/lowest/discount" claims, carrier names or staff names.
  `content/hero/index.ts` fails the build if a variant breaks these rules.
- Variant 0 is the original page copy. Append new variants at the end. Reordering changes which
  variant shows today.

## Adding an image

1. Use a photo with a license that allows commercial use (Unsplash License or owned). Avoid visible
   text, logos and recognizable brands.
2. Resize to 1440×900 WebP (quality ~68, under ~320 KB) into `public/images/hero/`.
3. Register it in `content/hero/images.ts` with alt text in all three languages, add it to the
   right pools in `content/hero/index.ts`, and add a line to `CREDITS.md`.

## Previewing another day

Add `?day=N` (used as the day number, so it picks `pool[N % length]`; 0–13 walks through the copy variants) or `?date=YYYY-MM-DD` to any rotating page, e.g.
`/en?day=3`, `/es/coverage-check?date=2026-10-04`, `/ru/insurance/life-insurance?day=2`.
The middleware rewrites these to `/[lang]/hero-preview`, which renders the real page with that
day. It's marked `noindex, nofollow` (meta tag + `X-Robots-Tag`), isn't cached, and is blocked in
`robots.txt`. A small "Hero preview" flag shows on the page.
