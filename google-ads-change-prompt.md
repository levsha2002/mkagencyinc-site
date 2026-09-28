# Prompt: apply the Google Ads + Business Profile change plan (M&K Agency, account 336-907-4576)

Use this in a session that can drive Firefox (or any browser where you are signed in as the account owner). Work through the phases in order. Every phase ends with a read-back that proves the change landed — never report a change as done from the fact that you clicked Save.

## Ground rules

1. **Compliance first.** This is an Allstate Exclusive Agent. Never write, in any language: a price, rate, discount, percentage or "save money"; any carrier name other than Allstate; "independent" or "broker"; availability beyond Mon–Fri 9am–6pm ET; any guarantee of coverage; scare framing. If a headline, keyword or reply you're about to save fails any of these, stop and change it.
2. **Money decisions are the owner's.** Do not change budgets, bidding strategy, or pause/enable campaigns. Adding keywords and swapping a headline is in scope; everything else, ask.
3. **Read before you write.** Budget, geo-targeting, negatives and auto-apply settings drift between sessions (auto-apply is ON and has changed things on its own). Re-read the live state; do not trust any number in this file as current.
4. **Google Ads UI quirks** (all confirmed): tables don't appear in page text — read `[role="row"]`; pages take 30–40 s; panels reflow after screenshots, so re-locate an element right before every click; type into fields, never set `.value`; `Ctrl+A` in an empty field types a literal "a"; "Select a campaign" dialogs silently block Save; Save buttons are named inconsistently. If a "Confirm it's you" identity prompt appears, stop and hand it to the owner.
5. **Don't accept Google's suggestions.** Creation wizards pre-fill AI headlines (one produced "Cheap Full Coverage Insurance"). Recommendations pages push "Create a Performance Max campaign" — PMax was removed on purpose; don't recreate it.

## Phase 1 — Baseline read (no changes)

Campaign: `MK Agency — Auto + Home — Florida City` (id 24047278982). Ad groups: Auto (id 203689506132), Home, `Espanol - Auto y Casa`, `Russkiy - Auto i Dom` (paused).

Record, for the last 7 and last 30 days: impressions, clicks, CTR, avg CPC, cost, conversions, cost/conv — per ad group. Record the daily budget, the Locations list (count of entries; whether ZIP codes are still present alongside "Florida"), and Recommendations → Auto-apply settings (which categories are on). Report this before touching anything.

Reference point from 2026-09-17..23: 193 impr / 26 clicks / 13.5% CTR / $12.46 CPC / $324 / 6 conv / $54 per conv; Home had only 39 impressions.

## Phase 2 — Verify the Auto ad's headline fix

Ad group Auto → Ads → the single responsive search ad (adId 817525955929) → open the editor. Confirm:
- "Coverage Gaps Exposed" is **gone**.
- "Local Agents Who Answer" is present exactly once (it replaced it; "Protect What Matters Most" was rejected as a duplicate).
- Final URL is `https://www.mkagencyinc.com/auto-quote.html`.
- Status after save is Eligible/Approved, not "Pending" or disapproved.

If any of this is off, fix it and read it back. Do not touch the other 14 headlines without asking — several are not from the approved library ("Get Your Quote Now", "We Are Here to Help", "Drive Confident, Be Covered", "Clear And Transparent"…). They were added by auto-apply; list them for the owner and stop.

## Phase 3 — Home ad group keywords (the main change)

Home gets ~39 impressions/week while home is half the business. Ad group **Home** → Keywords → add, phrase match:

```
"homeowners insurance quote florida"
"home insurance quote florida"
"home insurance homestead fl"
"home insurance florida city"
"florida home insurance agent"
"homeowners insurance agent near me"
"condo insurance florida"
"ho6 insurance florida"
"renters insurance florida"
"hurricane insurance florida"
"windstorm insurance florida"
```

Read back the keyword list after saving and confirm all 11 are there with phrase match. Then check the Home ad's Final URL: it currently points at the homepage. Leave it — a home landing page does not exist yet — but note it in the report.

**Policy caveat:** Google disapproved a Spanish housing headline under "Housing in personalized advertising" because Locations still contains ~32 ZIP codes next to the statewide "Florida" entry. More housing keywords raise the odds of that hitting the Home ads. The clean fix is removing the ZIP entries and keeping only "Florida" — coverage is unchanged. **Propose it to the owner; do not do it unasked.**

## Phase 4 — Auto-apply settings

Recommendations → Auto-apply. Report what is on. Recommend to the owner turning OFF anything that adds or rewrites ad text or expands targeting ("Add responsive search ad assets/headlines", "Improve your responsive search ads", "Expand your reach with Google search partners", anything AI Max / asset optimization). Keeping "Remove redundant keywords" is fine. Change nothing without a yes.

Also confirm campaign settings → "AI Max" / asset optimization is OFF. If it is on, that is a compliance incident (it caused Allstate-brand query matching before) — turn it off and report.

## Phase 5 — Search terms → negatives

Campaign → Search terms, last 7 days. Any competitor or third-party brand (carriers, local agencies, "allstate" brand queries, tag agencies) → add as campaign-level negative keywords. Expect 5–15 new ones; this is weekly maintenance. Read back the negatives list after saving.

## Phase 6 — Google Business Profile

In Google Search, signed in as the owner, open the agency card → **Edit profile**.

1. **Services**: add `Home insurance`, `Condo insurance`, `Renters insurance`, `Umbrella insurance`. Home is missing today even though it is one of two main products.
2. **Contact → Website**: set to
   `https://mkagencyinc.com/?utm_source=google&utm_medium=gbp&utm_campaign=profile`
   If there is a separate quote/appointment link:
   `https://mkagencyinc.com/en/quote?utm_source=google&utm_medium=gbp&utm_campaign=quote`
   (the site stores utm_* with every lead, so profile leads become visible in the database).
3. Read both back after saving.
4. Do **not** reply to reviews. The owner writes replies weekly; Claude only checks them. Do not touch review settings.
5. Ignore "Complete your Business Profile" — it is an upsell funnel (Smart campaign + Workspace trial), not a gap list.

## Phase 7 — Report

One table: what was changed, what was read back, what was proposed and is waiting on the owner (ZIP removal, auto-apply categories, non-library headlines), and anything that could not be verified. Never say "clean" for a table that returned zero rows — that means it did not load.
