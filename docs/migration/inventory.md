# Inventory — what the old Claude account holds (snapshot 23 Oct 2026, updated 25 Oct 2026)

Everything in this file is account-bound and must be re-created in the new account.
Repository-bound assets are not listed: they move with `git clone`.

## Scheduled tasks (2)

Full definitions, ready to paste: `prompts/03-scheduled-tasks.md`.

| Name | Schedule (UTC) | Model used | Notes |
|---|---|---|---|
| M&K Agency — Weekly Google Ads check-in reminder | `0 13 * * 1` (Mon 9am EDT) | Sonnet | Writes a 2–3 sentence Russian reminder; no live data. |
| Refresh M&K Owner's Cockpit (Mondays 7am ET) | `CRON_TZ=America/New_York 0 7 * * 1` (Mon 7am New York, set 24 Oct 2026) | Opus | Reads Drive statements, republishes the Cockpit artifact, push notification on. The full prompt with baseline figures is in Drive (`cockpit-trigger-prompt-full.txt`), not in this public repo. |

## claude.ai Projects (5) — all backed up to Drive

Drive → «Claude Account Migration — M&K Agency» → `projects/`. Each folder holds
«ГОТОВО — instructions» and «ГОТОВО — project-memory», extracted verbatim on 25 Oct 2026
from the official export (`projects-000.zip`, `memories-000.zip`).

| # | Project | Instructions | Text files | Knowledge files | Re-create in new account? |
|---|---|---|---|---|---|
| 1 | How to use Claude | yes (416 chars) | Anthropic starter guide only | 41 PDFs (21 unique), not in export, optional | No — archive |
| 2 | Leads | none | none | 26 bank/card/personal statements, uploaded to Drive `projects/2 Leads/files` | No — archive; statements stay in Drive |
| 3 | M&K Insurance Agency Strategics growth | yes (1,601 chars) | 2 docs saved to Drive | — | **Yes** |
| 4 | M&K Employment | none | none | none (playbooks were chat outputs) | No — archive |
| 5 | Team Management June 2026 | yes (369 chars) | none | none | **Yes** |

Chat history of all projects is in `conversations-000.zip` (archive only; it cannot be
imported into another personal account).

## Artifacts (11)

HTML copies are in Google Drive → «Claude Account Migration — M&K Agency» → `artifacts/`
(exported 23 Oct 2026, 11 files, byte sizes verified against the source). The new account
republishes each one it still needs; the old URLs die with the old account.

Two things to know before republishing:

- **Cockpit** (`01-mk-agency-cockpit.html`) has live cells that read Google Drive and
  Google Calendar. Capabilities are not stored in the HTML, so the first publish in the
  new account must declare them (later refreshes then omit the parameter):

  ```json
  {"mcp":{"servers":[{"server":"Google Drive","tools":["list_recent_files"]},{"server":"Google Calendar","tools":["list_events"]}]}}
  ```

- **Coverage Proposal – Velocity Exterior Cleaning** was a Claude Docs document, not an
  HTML page. The export (`02-coverage-proposal-velocity-exterior-cleaning.html`) is the
  document body as an HTML fragment: all text is preserved, but it is re-created as a new
  Claude Docs document (paste the content), not republished as a page.

| Title | Last updated | Role |
|---|---|---|
| M&K Agency Cockpit | 2026-09-07 (refreshed weekly by the scheduled task) | Owner's weekly cost-plan and lead-spend dashboard |
| Coverage Proposal – Velocity Exterior Cleaning | 2026-10-07 | Client proposal, Claude Docs document (contains client data) |
| The Transfer Chain | 2026-09-23 | Operations memo |
| M&K Agency — Fast Auto Quote Landing Page | 2026-09-23 | Landing page prototype |
| Weekly Agent Review | 2026-09-17 | Team review template |
| Ricochet Operating Plan | 2026-09-17 | Dialer operating plan |
| Branded Calling Cadence | 2026-09-17 | Calling cadence |
| The Phone Is the Business | 2026-08-31 | Operations memo |
| First Orion Number Selection | 2026-08-31 | Vendor analysis |
| Producer Scouting Report — M&K Agency | 2026-08-10 | Hiring report (contains personal data) |
| M&K Agency — 8 дизайн-концептов | 2026-07-13 | Early site design concepts |

## Connectors

| Connector | State in old account | New account |
|---|---|---|
| Google Drive (`Levsha2002@hotmail.com`) | connected | reconnect, same Google login |
| Google Calendar | connected | reconnect |
| Slack | connected | reconnect |
| Netlify | connected | reconnect |
| Apollo.io | connected | reconnect |
| Zapier | not connected | optional |
| Microsoft 365 | incomplete | do not connect (Allstate tenant) |
| Verisk Underwriting Intelligence | incomplete | optional |
| Adspirer Ads agent | incomplete | optional |

## Claude Code cloud

- Environment: «Default», trusted network access, Anthropic cloud. Re-create one.
- GitHub App installed for `levsha2002/mkagencyinc-site`. Re-install from the new account.
- Sessions were opened from the desktop app with permission mode `auto`, draft PRs created automatically.

## Local-only files on the old computer (not in git)

- `.env.local` — rotate every key, then re-enter. Names: `DATABASE_URL`, `RESEND_API_KEY`,
  `XAI_API_KEY`, `STUDIO_KEY`, `NEXT_PUBLIC_ADS_LABEL_PHONE_CALL`, `..._SMS_CLICK`,
  `..._CALLBACK`, `..._CHAT_LEAD`, `..._TALKNOW`, `..._QUOTE`.
- `/media/`, `/ads-plan.md` — copy by hand.
- `%APPDATA%\Claude\claude_desktop_config.json` — copy by hand (`launchPreviewAllowedOrigins`
  must include `ads.google.com`, `business.google.com`, `www.google.com`).

## External accounts that survive unchanged

Google Ads `336-907-4576` (campaign `MK Agency — Auto + Home — Florida City`, id `24047278982`),
Google Business Profile «Mikhail Kozlov: Allstate Insurance», Neon, Resend, xAI, hosting
provider, GitHub `levsha2002`.
