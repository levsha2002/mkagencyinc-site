# Prompt 05 — what only the owner can do in the old account (copy-paste texts)

Claude Code in the cloud cannot open claude.ai Settings, read the account memory, cancel
a subscription or write to Anthropic support. These four texts are for the owner to paste.

## A. Memory export (claude.ai → new chat → paste)

```
Please write out, verbatim and in full, everything you currently remember about me,
my business (M&K Agency Inc), my preferences, my projects and my ongoing work — as a
plain bulleted list that I can paste into the memory import of another Claude account.
Do not summarize or shorten; include every fact, number, name and preference you have
stored. If the list is long, continue in a second message.
```

Save the answer as `memory-export.md` in Google Drive → «Claude Account Migration — M&K Agency».

## B. Projects inventory (claude.ai → new chat → paste)

Project knowledge files and project instructions are NOT included in the data export.

```
List every Project in this account with its name, its custom instructions (verbatim)
and the names of the knowledge files attached to it.
```

For each project that still matters: copy the instructions into a text file and
download the knowledge files into the same Drive folder, subfolder `projects/<name>/`.

## C. Message to Anthropic support (claude.ai → bottom-left menu → Get help)

```
Subject: Unlink phone number from this account (account being retired)

Hello. My employer no longer allows me to use this work email (mikhailkozlov@allstate.com)
for Claude, so I am creating a new personal Claude account and will delete this one
afterwards. My mobile number is currently verified on this account and I need to use the
same number for the new account. Please unlink the phone number from this account so the
new account can pass SMS verification. I will export my data and cancel the subscription
before deleting this account. Thank you.
```

## D. Order of operations (do not skip ahead)

1. A and B above, plus Settings → Privacy → Export data (wait for the e-mail, save the archive).
2. C above. Wait for support to confirm the number is unlinked.
3. Create the new account (`docs/migration/README.md`, step 1). Verify it works with the
   first-session prompt (`01-first-session-bootstrap.md`).
4. Only then: Settings → Billing → cancel the old subscription, and Settings → Account →
   Delete account.
