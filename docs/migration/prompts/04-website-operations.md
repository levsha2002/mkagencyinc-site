# Prompt 04 — the website operating prompts

These are the recurring jobs that kept the site moving in the old account. Each one is
a complete message for a Claude Code session opened on `mkagencyinc-site`. They rely
on `CLAUDE.md`, the content READMEs and the skills, all of which are in the repository.

## Daily news edition

```
Publish today's Insurance News edition (EN/ES/RU) following content/news/README.md.
Start from the latest file in content/news/posts/ as the template. Pick 3–5 Florida
insurance items from the last 24–48 hours that matter to a personal-lines and small
commercial client in South Florida (OIR, DFS/CFO, Citizens, NFIP/FEMA, legislature,
courts, hurricane/flood events). Every item: our own words, one "why it matters" line,
https source with the original publication date. Check every fact against the linked
source. Keep compliance (CLAUDE.md): no prices, no carrier comparisons, no guarantees.
Run npm run build, open a draft PR titled "Add <Mon D, YYYY> Insurance News edition
(EN/ES/RU)", and give me the PR link plus a two-line summary in Russian.
```

## Blog article

```
Write and publish a new blog article following content/blog/README.md on the topic:
<TOPIC>. Audience: Florida personal-lines or small-business clients. All three
languages, same slug, unique meta description 120–160 characters, FAQ block if the
topic has common questions, internal links to the relevant /quote and service pages.
Facts must be current for 2026 and sourced; no prices, no carrier comparisons, no
guarantees, no "independent". Run npm run build, open a draft PR titled
"Add blog post: <title> (EN/ES/RU)", and give me the link.
```

## Refresh an existing guide or city page

```
Refresh <PAGE PATH or SLUG> for 2026: verify every fact and statute reference against
a current source, update dates and figures, add dateModified, keep all three
languages in sync, and keep the compliance rules in CLAUDE.md. Do not change the URL.
npm run build, draft PR "Refresh <page> (EN/ES/RU): <what changed>", link please.
```

## Google review badge

```
Run npm run update-reviews, check the diff in data/reviews.json, and if the rating or
count changed commit it as "Update Allstate rating: <stars> · <count> reviews
(checked <YYYY-MM-DD>)" in a draft PR.
```

## Compliance sweep (before anything goes to Allstate, and monthly)

```
Use the compliance-sweep skill. Audit the live site (rendered HTML, all three
languages, including /news and /blog), the Google Ads account and the Google Business
Profile against the six violation classes. Report a table: class, where found, exact
text, fix. Fix anything in the repository via a draft PR; list what needs my hand in
Google Ads or the Business Profile.
```

## Weekly Google Ads check-in (Mondays)

```
Use the ads-audit skill. Read the live account first (budget, spend, cost per call,
calls answered/missed for the last 7 days, "Limited by budget" status, auto-applied
recommendations since last week). Then: what changed, what it cost, one recommendation
with the expected effect. Table first, two paragraphs max. Do not propose Performance
Max.
```

## Google Business Profile check

```
Use the gbp-check skill. Compare the live profile with the verified state in the
skill, list drift (description, categories, services, hours, photos, reviews without
replies), and draft replies to unanswered reviews in the reviewer's language using the
ad-copy rules.
```

## Ad copy

```
Use the ad-copy skill. I need <N> headlines and <M> descriptions for <ad group> in
<language>. Reuse approved lines first; mark anything new as "needs compliance
judgement" and explain which rule it was checked against.
```
