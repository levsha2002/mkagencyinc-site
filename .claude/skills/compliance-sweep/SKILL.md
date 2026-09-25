---
name: compliance-sweep
description: Audit mkagencyinc.com and the live Google Ads account against Allstate Agency Standards. Use when asked to check compliance, verify nothing has regressed, or before sending anything to Allstate compliance.
---

# Compliance sweep — Agency R3001

This agency is an **Allstate Exclusive Agent**, not a broker and not independent.
Every check below exists because the violation was actually found live at least
once. Treat the list as a floor, not a ceiling.

## The six violation classes

| # | Class | Why it matters |
|---|---|---|
| 1 | AI / automated / prerecorded calls | Standards p.12 prohibits artificial, prerecorded and AI voice contact **regardless of consent**. Zero tolerance — never restore, whatever a form or vendor says. |
| 2 | "Independent" agency positioning | Contradicts Exclusive Agent status. Replacement: EN "Family-Owned Insurance Agency", ES "Agencia de seguros familiar", RU "Семейное страховое агентство". |
| 3 | Multi-carrier comparison | No "compare 15+ carriers", no "shop the market", no naming other carriers, no "the open market". |
| 4 | Availability claims | The office runs Mon–Fri 9am–6pm ET. No "24/7", no "we're here when you need us", no "quote in 30 seconds". |
| 5 | Price / savings claims | No "cheapest", "lowest rate", "competitive rates", "save you money", "más barato", "самый дешёвый". |
| 6 | Advice beyond general information | No price, no "you're covered", no "approved", no needs analysis by the AI assistant. |

## Step 1 — the live site

Scan **rendered HTML, never source**. A stale deploy or a build can reintroduce
what the repo no longer contains.

Fetch every route × 3 locales (en/es/ru). Routes live under `app/[lang]/`.
Strip `<script>` and `<style>` before matching or analytics blobs create noise.

```js
const CHECKS = [
  ['AI/automated calls', /automated\s+(or\s+)?(ai\s+)?calls?|ai\s+calls?|prerecorded|artificial voice|llamadas\s+automatizadas|автоматическ\w*\s+звонк/i],
  ['"independent"',      /\bindependent\s+(insurance\s+)?agen(cy|t)|agencia\s+independiente|независим\w*\s+(страхов\w*\s+)?агентств/i],
  ['24/7 availability',  /24\s*[\/\-]\s*7|24 hours a day|круглосуточн/i],
  ['carrier comparison', /compare\s+(quotes|rates|carriers|\d+\+?\s*a-rated)|shop the market|multiple carriers|15\+/i],
  ['competitor names',   /\b(Geico|Progressive|State Farm|USAA|Liberty Mutual|Citizens Property|Tower Hill|Universal Property|Ocean Harbor|Infinity Insurance)\b/i],
  ['price claims',       /\b(cheapest|lowest rates?|best rates?|guaranteed savings|save up to|competitive rates?|competitive pricing|affordable rates?)\b|precio competitivo|tarifas competitivas|конкурентн\w*\s+цен/i],
];
```

**"Competitive rate" is a price claim.** The singular form was missing from this
pattern for a long time and three landing-page meta descriptions carried it in
all three languages — "at a competitive rate", "a un precio competitivo",
"по конкурентной цене" — while the sweep reported the site clean. When adding a
term here, add every language and both singular and plural.

**Known false positive:** `/en/classic-car-insurance-florida-city` contains
"not the cheapest aftermarket substitute" — that is about repair parts, not
premiums. Do not flag it.

## Step 2 — Google Ads (account 336-907-4576)

Google's data tables **do not render into `document.body.innerText`**. Reading
page text returns nothing and a naive check will report "clean" while looking at
an empty table. This has produced a false all-clear before. Always read rows:

```js
[...document.querySelectorAll('[role="row"]')].map(r => (r.innerText||'').replace(/\n/g,' | '))
```

Check, in order:

1. **Every ad in every ad group** — headlines and descriptions against all six classes.
2. ~~Performance Max asset groups~~ — PMax was removed by the owner (~Aug 2026, overspend). Skip unless it has been recreated; if it has, re-add this check, since its asset-group text is separate from Search and was previously found running "Independent insurance agency in Florida City" for weeks after the website was clean.
3. **Asset optimization / "AI Max"** — campaign settings → Asset optimization ("Optimize your campaign with AI Max" toggle). Text customization and final URL expansion must be **off**. With it on, Google doesn't just rewrite ad copy from the website — it also expands *query matching* beyond your keywords, and has been the direct cause of the account showing ads on searches for "allstate phone number", "allstate insurance phone number" and similar Allstate-brand queries. Confirm it's off; if it's back on, that's a compliance incident, not just a spend one.
4. **Auto-generated assets** — anything with "Added by: Google AI". Video assets cannot be reviewed programmatically; list them for a human.
5. **Negative keywords** — competitor brands must stay excluded. The Search campaign uses individual keywords set to broad match (the campaign-wide "Broad match keywords" toggle itself is off), and broad match keywords reliably surface new brand names in the search terms report roughly every week — this is an ongoing job, not a checklist item you clear once. Confirmed real competitors found live and added as negatives so far (beyond the original ~10 major carriers): Allstate itself, Chubb, UAIC/United Automobile, National General, Monarch, AMCO, Otto, Allure, Direct General, Security First, Peoples Trust, Kemper, Estrella, Del Toro, Coverwhale, Hagerty, Assurant, Universal North America, AAA Insurance, Lemonade, Heritage Insurance, Sterling MGA, "The General" — plus several named local competitor agencies (e.g. Ted Todd Insurance, American Integrity, Frank Furman, Skylake, Manhattan Insurance Group, Coral Springs Auto Tag, FCI Auto Tag, Annette Willis, Mangrove, MSI). Re-read the account's actual negative keyword list rather than checking against this list — it will already be longer by the time you read this.
6. **Google Ads policy ≠ Allstate compliance — check both.** A headline can pass every Allstate rule and still get rejected by Google itself. Confirmed case: the Spanish headline "Seguro de Casa y Condominio" (approved in `ad-copy`) was disapproved under Google's "Housing in personalized advertising" policy, because this campaign uses ZIP-code-level geo-targeting and Google restricts ZIP-level targeting for anything it classifies as housing-related. See `ad-copy` for the current status of that headline. The geo-targeting list still includes the original ~32 ZIP codes alongside the statewide Florida entry added later (the state entry was added *in addition to*, not instead of, the ZIPs) — so this restriction is still live today. It would only stop applying if the ZIP-level entries were removed from Locations entirely, leaving only the state-level target; don't assume that from the state entry's presence alone, check the actual location list.

## Step 3 — Google Business Profile

Description, categories, services, hours, phone. Verify the trilingual claim is
accurate and no carrier-comparison language has returned.

## Reporting

State what was checked, what was found, and what was **not** verifiable. If a
check could not be completed, say so plainly rather than implying coverage.
Never report "clean" on the basis of a scan that returned zero rows — confirm
the scan actually read data first.
