# Prompt 01 — first session in the new Claude account

Paste the whole block below as the first message in a Claude Code session opened on
the `mkagencyinc-site` folder (desktop app or cloud). It assumes GitHub, Google Drive
and the other connectors from `docs/migration/README.md`, step 4, are already connected.

---

This is the first session of a new Claude account. The previous account (an @allstate.com
login) is being retired. Everything you need to know is in this repository:
`CLAUDE.md` (who we are, compliance rules, operating rhythm), `docs/migration/README.md`
(the migration plan), `docs/migration/inventory.md` (what the old account held) and
`docs/migration/prompts/` (the recurring prompts). Read all four before doing anything.

Then work through this list and report each item as done, blocked, or not needed:

1. **Repository health.** Confirm `.claude/skills/` has ad-copy, ads-audit,
   compliance-sweep and gbp-check; `content/news/README.md`, `content/blog/README.md`
   and `content/hero/README.md` exist; `npm install` and `npm run build` pass. Tell me
   the current `main` commit and the latest news edition date in `content/news/posts/`.
2. **Connectors.** List which connectors you can actually call right now (Google Drive,
   Google Calendar, Slack, Netlify, Apollo.io, GitHub). For Drive, open the folder
   «Claude Account Migration — M&K Agency» and list its contents.
3. **Cockpit.** From that Drive folder, download `artifacts/01-mk-agency-cockpit.html`
   and publish it as a new artifact with the title «M&K Agency Cockpit», unchanged.
   Give me the new URL.
4. **Scheduled tasks.** Create the two scheduled tasks exactly as written in
   `docs/migration/prompts/03-scheduled-tasks.md`, substituting the new Cockpit URL.
   For the Cockpit task, the full original prompt with baseline figures is in Drive
   (`cockpit-trigger-prompt-full.txt`); use that version, with the wording fix noted
   at the bottom of the file. Show me the list of scheduled tasks afterwards.
5. **Compliance.** Run the `compliance-sweep` skill against the live site and report
   findings in the six-class table from the skill.
6. **Gap check.** Compare what the migration plan says should exist with what you
   actually found. List anything missing or any instruction you would have needed
   that is not written down anywhere in the repository, so I can add it while the
   old account is still open.

Register: professional analyst (Goldman Sachs / PwC / Deloitte). Lead with the
result, quantify, no filler. Russian is fine for the summary; keep file names,
commands and URLs exact.
