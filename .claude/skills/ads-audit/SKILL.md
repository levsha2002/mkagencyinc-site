---
name: ads-audit
description: Review or edit the M&K Agency Google Ads account — campaigns, keywords, negatives, budgets, Performance Max. Use when asked to check the ads, fix ad copy, add keywords or ad groups, or diagnose spend.
---

# Google Ads — account 336-907-4576 (M&K Agency Inc)

## Account shape

| | |
|---|---|
| Search campaign | `MK Agency — Auto + Home — Florida City`, id `24047278982`, $74/day |
| Performance Max | `Campaign #1`, id `24037027426`, $25/day, asset group `Auto&Home` id `6730757589` |
| Ad groups | Auto, Home, `Espanol - Auto y Casa`, `Russkiy - Auto i Dom` |
| Geo | 12 municipalities, South Miami-Dade + Keys, ~2.0M reach |
| Languages | English, Spanish, Russian |
| Bidding | Maximize conversions, both campaigns |

Base URL pattern: append
`?ocid=8403773683&euid=1357895236&__u=5532035364&uscid=8403773683&__c=4623171867&authuser=0`

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

Pull the last 7 days as well as 30. They tell different stories: Performance Max
showed $64 spent over 30 days but **zero impressions over 7** — it had stopped
delivering entirely, which the 30-day view hid.

## Recurring checks

1. Ad copy in every ad group against the six classes in `compliance-sweep`.
2. Performance Max asset group text — separate from Search, easily missed.
3. Asset optimization off (text customization, final URL expansion, video generation).
4. Search themes and audience signals present on the PMax asset group; "No audience signals provided" means it will not deliver.
5. Negative keywords still cover competitor brands.
6. Search partners off.

## Judgement notes

- Search is **demand-constrained, not budget-constrained**: ~$33/day spent against a $74/day budget, ~81 impressions/day across 2M reach. Adding budget achieves nothing; adding coverage or geography does.
- At ~$78 per conversion, a 10–20 calls/day target implies roughly $23k/month in paid search. Say so rather than implying the goal is a tuning problem.
- Do not pause or unpause campaigns, or change budgets, without asking. Those are money decisions.
