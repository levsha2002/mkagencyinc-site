# Prompt 05 — what only the owner can do in the old account (copy-paste texts)

Claude Code in the cloud cannot open claude.ai Settings, read the account memory, cancel
a subscription or write to Anthropic support. These four texts are for the owner to paste.

**Status 25 Oct 2026:** A done, B done (recovered from the official export instead), D in
progress. C: the message below was sent from inside the old account; support replied that
the request must come by e-mail from the new personal address with the work address in CC.
The current e-mail text is in `docs/migration/README.md`, step 1.1.

## A. Memory export (claude.ai → new chat → paste)

```
Please write out, verbatim and in full, everything you currently remember about me,
my business (M&K Agency Inc), my preferences, my projects and my ongoing work — as a
plain bulleted list that I can paste into the memory import of another Claude account.
Do not summarize or shorten; include every fact, number, name and preference you have
stored. If the list is long, continue in a second message.
```

Done 24 Oct 2026: raw answer in the Drive document `memory-export`, cleaned version in `memory-import-ready` (import that one).

## B. Projects inventory (claude.ai → new chat → paste)

Project knowledge files and project instructions are NOT included in the data export.

```
List every Project in this account with its name, its custom instructions (verbatim)
and the names of the knowledge files attached to it.
```

Done 25 Oct 2026 without opening the projects: instructions, text files and project
memory for all five projects were extracted from the official export (`projects-000.zip`,
`memories-000.zip`) into Drive → `projects/<n> <name>/` as documents titled «ГОТОВО — …».
The 26 knowledge files of «Leads» were uploaded by the owner. The 21 PDFs of «How to use
Claude» are optional and not uploaded.

## C. Message to Anthropic support (sent 25 Oct 2026 via Get help; superseded by README step 1.1)

```
Subject: Unlink phone number from this account (account being retired)

Hello. My employer no longer allows me to use this work email (mikhailkozlov@allstate.com)
for Claude, so I am creating a new personal Claude account and will delete this one
afterwards. My mobile number is currently verified on this account and I need to use the
same number for the new account. Please unlink the phone number from this account so the
new account can pass SMS verification. I have already exported my data. I will cancel the
subscription before deleting this account. Thank you.
```

## D. Order of operations (do not skip ahead)

1. ✅ A and B above, plus Settings → Privacy → Export data.
2. ⬜ C above. Wait for support to confirm the number is unlinked.
3. ⬜ Create the new account and check it (`docs/migration/README.md`, Parts 2 and 3).
4. ⬜ Only then: Settings → Billing → cancel the old subscription, and Settings → Account →
   Delete account (`README.md`, Part 5).
