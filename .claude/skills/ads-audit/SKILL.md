---
name: ads-audit
description: Review or edit the M&K Agency Google Ads account — campaigns, keywords, negatives, budgets, Performance Max. Use when asked to check the ads, fix ad copy, add keywords or ad groups, or diagnose spend.
---

# Google Ads — account 336-907-4576 (M&K Agency Inc)

## Account shape

| | |
|---|---|
| Search campaign | `MK Agency — Auto + Home — Florida City`, id `24047278982`, budget **owner-controlled, currently $90/day — always re-read live, never assume a fixed figure** |
| Performance Max | **Removed by the owner (~Aug 2026), overspend.** No PMax campaign exists in the account. Do not propose recreating it without being asked — "Create a Performance Max campaign" will keep appearing as Google's top recommendation; that is Google upselling, not a gap. |
| Ad groups | Auto, Home, `Espanol - Auto y Casa`, `Russkiy - Auto i Dom` |
| Geo | **Statewide Florida** (expanded from a 32-ZIP South Miami-Dade list, ~Sep 2026) — justified by the site's own "Serving all of Florida" claim and the agent's statewide license. Don't propose re-narrowing without being asked. |
| Languages | English, Spanish, Russian |
| Bidding | Maximize conversions |
| Auto-apply recommendations | **Owner has turned this ON.** Google can change budget, keywords and assets on its own between sessions — 14 changes applied automatically in one week once. Always check Recommendations → Auto-apply settings as part of the baseline read; don't assume the account only changes when you change it. |

Base URL pattern: append
`?ocid=8403773683&euid=1357895236&__u=5532035364&uscid=8403773683&__c=4623171867&authuser=0`

This table drifts fast — the owner adjusts budget and targeting directly between
sessions, and auto-apply changes things without anyone touching the UI. Treat
every row above as "last confirmed", not current truth; re-read the live account
before relying on any of it, especially before hard-coding a number (like a
budget) into a "do not change" rule.

## Interface behaviour that will waste your time

These are all confirmed by failure, not guesswork.

**Tables do not appear in page text.** `document.body.innerText` returns
navigation only. Read `[role="row"]` elements. A check that returns zero rows
means the table has not loaded — not that the account is clean.

**Pages load slowly.** Budget 30–40 seconds after navigation before reading.
Retry rather than concluding "empty".

**Screenshot coordinates are scaled.** The screenshot canvas and the CSS
viewport differ (e.g. 1550px canvas vs 1680px viewport). Clicking a rect from
`getBoundingClientRect()` misses. Prefer `element.click()` via JS — it works for
buttons, links and checkboxes here.

**Panels reflow between screenshot and click, not just scale.** Settings pages
in particular re-render async sections (AI Max, asset optimization) after the
screenshot was taken, so a coordinate click that matched the screenshot lands
on whatever moved into that spot instead — repeatedly opening the wrong panel
(e.g. clicking what was "Locations" and getting "Asset optimization" or being
bounced to Recommendations). Re-resolving the element right before every click
rather than reusing a screenshot's coordinates avoids this; a coordinate is
only as fresh as the screenshot it came from.

**Typed input only.** Setting `input.value` programmatically does not register
with Google's framework. Focus the element, then type with the keyboard.

**`Ctrl+A` in an empty field emits a literal "a".** Use
`setSelectionRange(0, value.length)` instead when the field may be empty.

**"Select a campaign" silently blocks Save.** No error is shown; the button
simply does nothing until a campaign is chosen.

**Save buttons are inconsistently named:** "Save", "Save ad", "Save and continue".

**Use direct creation URLs to avoid Google's asset generator.** Going through
the in-app wizard pre-fills English AI-written headlines — observed producing
`Cheap Full Coverage Insurance` and the keyword `car insurance broker`, both
violations. This URL opens a clean form:

```
https://ads.google.com/aw/adgroups/new/search?campaignId=24047278982&ocid=8403773683&...
```

**Identity re-confirmation** can appear on save. It opens a native Google auth
prompt. Do not attempt it — hand it to the user, and warn them that closing the
dialog discards the draft.

## Before changing anything

Pull the last 7 days as well as 30. They tell different stories: back when
Performance Max was still active it showed $64 spent over 30 days but **zero
impressions over 7** — it had stopped delivering entirely, which the 30-day
view hid. The lesson generalizes past that one campaign: always pull both
windows for whatever's currently active, not just the one that looks healthier.

## Recurring checks

1. Ad copy in every ad group against the six classes in `compliance-sweep`.
2. Asset optimization off (text customization, final URL expansion, video generation) — labelled "AI Max" in the campaign settings UI. It has been switched on by auto-apply before and is the mechanism that reintroduced Allstate-brand and competitor-brand query matching; always confirm it's still off.
3. **Search terms report, weekly if any broad-match keywords are active.** Individual keywords set to broad match (not the campaign-wide "Broad match keywords" toggle, which is off) reliably surface new competitor and third-party agency names every single week — this has produced two separate rounds of 11–13 new negatives so far. Treat this as an ongoing maintenance job, not a one-time cleanup.
4. Negative keywords still cover competitor brands — see the expanded list in `compliance-sweep`. The list has grown well past the original ~10 major carriers to include regional insurers and named local competitor agencies found via the search terms report; don't treat the short historical list as complete.
5. Search partners off.
6. Auto-apply settings (Recommendations → Auto-apply settings) — confirm what's enabled and cross-check the last-14-days activity log before assuming any setting (especially budget) is where you last left it.

**Sourcing Image assets:** don't pull from the Google Business Profile photo
gallery — see `gbp-check` for why (Allstate branding on most of it, consent on
the rest). The website's own `/public/images` (hero and per-category photos
already live on the site) has worked as a brand-safe, already-vetted source
instead; download the files and upload them directly rather than using the
in-flow "Website or social" tab, which pulls from the rendered page and can
grab the wrong crop.

*(If Performance Max is ever reintroduced, restore checks for its asset group text and search themes/audience signals separately from Search — those were previously on this list and were real, recurring gaps.)*

## Judgement notes

- Search was **demand-constrained, not budget-constrained** at the ~$74/day/12-municipality baseline (~$33/day actually spent, ~81 impressions/day across 2M reach) — adding budget achieved nothing there, only coverage or geography did. That specific math is now stale since budget and geography have both changed; re-derive the spend-vs-impressions ratio from the live account before repeating this judgement rather than quoting the old numbers.
- Cost-per-conversion and cost-per-call should be re-pulled each session rather than assumed — they move with budget, geography and the negative-keyword list, all of which change frequently here.
- Do not pause or unpause campaigns, or change budgets, without asking. Those are money decisions — but note the owner has since authorized budget increases and geography expansion directly in conversation more than once, so "without asking" means without asking in that session, not "never even with explicit instruction."
