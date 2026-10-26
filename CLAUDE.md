# M&K Agency Inc — project guide for Claude

Read this first in every session. It is the stable context that used to live only in
chat history and account memory; it travels with the repository so a fresh Claude
account on a fresh computer starts with the same picture.

## Who this is for

- Owner: Mikhail (Mike) Kozlov, M&K Agency Inc, an **Allstate Exclusive Agent** in
  Florida City, FL. Agency code R3001. Office hours Mon–Fri 9am–6pm ET,
  phone (305) 859-3953. Agency mailbox: mkagency2020@hotmail.com.
- The owner reads on mobile and wants a Big-Four / investment-bank register:
  direct, quantified, no filler, recommendation first. Act as a professional
  analyst (Goldman Sachs, PwC, Deloitte) on business topics.
- Languages: English, Spanish and Russian. Every customer-facing page, post and
  ad has all three; the owner is comfortable being addressed in Russian.

## What this repository is

The public website mkagencyinc.com (Next.js, App Router, `/en`, `/es`, `/ru`).
Deploys happen from `main` (see `README.md`). Work on a feature branch, open a
pull request, never push to `main` directly. `npm run build` must pass before a PR.

Content is data-driven; publishing never touches page code:

| Task | Where | How-to |
|---|---|---|
| Daily Insurance News edition | `content/news/posts/<yyyy-mm-dd-slug>.ts` | `content/news/README.md` |
| Blog article | `content/blog/posts/<slug>.ts` | `content/blog/README.md` |
| Hero copy / photo rotation | `content/hero/` | `content/hero/README.md` |
| Google review rating badge | `npm run update-reviews` | `scripts/update-reviews.mjs` |

## Compliance is non-negotiable

Allstate Agency Standards apply to the site, the ads and the Google Business
Profile. The full rule set and the approved copy library are project skills in
`.claude/skills/`:

- `compliance-sweep` — the six violation classes and how to audit for them.
- `ad-copy` — approved EN/ES/RU copy that has already passed review.
- `ads-audit` — the Google Ads account, its history and browser quirks.
- `gbp-check` — the Google Business Profile.

Never write: prices, discounts or savings claims; carrier comparisons or other
carrier names; "independent" agent or agency; availability beyond Mon–Fri
9am–6pm ET; any guarantee of coverage; AI or prerecorded voice contact.

## Recurring operating rhythm

- Daily: one news edition (EN/ES/RU) as its own PR.
- Every few days: one blog article or one refreshed guide page.
- Weekly (Mondays): Google Ads cost/effectiveness check-in and the owner's
  cockpit refresh. Ready-to-paste prompts: `docs/migration/prompts/`.

## Secrets

Never commit `.env.local`, statements, client files or anything under `/media`.
API keys live in the hosting provider's environment variables, not in git.
