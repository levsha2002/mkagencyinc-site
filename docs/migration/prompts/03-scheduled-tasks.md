# Prompt 03 — the two scheduled tasks to re-create

Both existed in the old account and fire a fresh session each time. In the new
account, either ask Claude Code in a cloud session to create them (it has the
scheduled-task tools) or create them from the claude.ai interface. Keep the names,
schedules and prompts; pick the current Sonnet / Opus models.

## Task A — M&K Agency — Weekly Google Ads check-in reminder

- Schedule: `0 13 * * 1` UTC (Monday 9:00am EDT, 8:00am EST)
- Model: Sonnet (cheapest is fine: this task writes a reminder, nothing more)
- Fresh session each firing; no connectors required
- Prompt (verbatim from the old account):

```
This is a scheduled WEEKLY reminder session, not a live check — this cloud sandbox has no browser access and no MCP connector to Google Ads, so it CANNOT log into ads.google.com or pull real cost/performance data. Do not attempt to check the account or fabricate any numbers.

Context: Mikhail (Mike) Kozlov owns M&K Agency Inc, an Allstate agency in Florida City, FL. His Google Ads Search campaign ('MK Agency — Auto + Home — Florida City', ocid=8403773683) is actively being optimized in an ongoing Claude Code session (with live browser access to Google Ads) — recent work included budget changes, negative keywords, ad copy, broad match keywords, and image assets. He asked for a recurring weekly check of cost and effectiveness.

Your only job: write a short weekly reminder message in Russian addressed to Mikhail, telling him it's time for the weekly Google Ads cost/effectiveness check-in, and that he should message Claude in his ongoing Claude Code session to run it. Ask Claude (when he does) to report: current daily budget vs. actual spend, cost per call, calls answered/missed for the past 7 days, and whether the campaign is 'Limited by budget'. Keep the reminder itself to 2-3 sentences. Do not fabricate or guess any numbers — this message is purely a prompt to start the real conversation.
```

## Task B — Refresh M&K Owner's Cockpit (Mondays 7am ET)

- Schedule: `0 11 * * 1` UTC (Monday 7:00am EDT, 6:00am EST)
- Model: Opus
- Notifications: push on
- Fresh session each firing; connectors: Google Drive, Google Calendar (others optional)
- **Prerequisite:** the Cockpit must first be republished in the new account from
  `artifacts/01-mk-agency-cockpit.html` in the Drive migration folder. Put the new URL
  where `<NEW-COCKPIT-URL>` appears.
- The full prompt with the August 2026 baseline figures is **not** in this public
  repository. It is in Google Drive → «Claude Account Migration — M&K Agency» →
  `cockpit-trigger-prompt-full.txt`. Use that file. The skeleton below is only so the
  structure is visible here:

```
Refresh Mike's "M&K Agency Cockpit" artifact for the weekly Monday review.

Artifact: <NEW-COCKPIT-URL> — belongs to Mike, owner of M&K Agency Inc., an Allstate
exclusive agency in Florida City, FL. He reads on mobile and wants a Deloitte/PwC
register: direct, quantified, no filler.

BASELINE: <paste the BASELINE block from cockpit-trigger-prompt-full.txt>

STEPS:
1. Artifact tool, action "read", that url. Build the update on what comes back — never publish without reading first.
2. Look for a NEW statement Mike has supplied since the last run: check the conversation for uploads, then Google Drive search (title/fullText contains 'Chase', 'Activity', 'statement', a month name). Also re-read MK_Analytics_TM_Leads_CostReduction and MK_KPI_Dashboard in Drive for refreshed planning numbers.
3. If a newer statement exists, redo the reconciliation the same way: per-vendor spend by month, verified-vs-planned status for each cost action, lead spend and blended cost per bound policy using the close rates in the full prompt. Update every figure, chart geometry and callout, and recompute the SVG bar widths.
4. Keep the page to exactly TWO blocks: 01 cost-plan execution and cash, 02 lead spend by cost per bound policy. Do not add a third.
5. Anything not traceable to a posted transaction gets a <span class="sample">Sample</span> marker. Never turn a placeholder into a real-looking number.
6. Update the masthead stamp (element id "stamp") to today's date and the statement coverage date.
7. Republish to that same url without passing the capabilities parameter. Label it "refresh-<date>".

Then send Mike two or three sentences: what moved since last week, and the most time-critical open item. If no new statement has arrived, say so, name the standing action, and skip the republish.
```
