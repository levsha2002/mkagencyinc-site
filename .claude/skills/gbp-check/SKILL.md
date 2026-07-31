---
name: gbp-check
description: Review the M&K Agency Google Business Profile — description, categories, services, hours, photos, reviews. Use when asked to check or improve the Google listing, or to find why the profile is not producing calls.
---

# Google Business Profile — Mikhail Kozlov: Allstate Insurance

For a single-location local agency this is usually the highest-yield channel and
it costs nothing. Calls from the map pack do not appear in Google Ads reporting,
so it is easy to under-rate.

## Access

`https://business.google.com/dashboard` redirects to the profile card inside
Google Search. The panel opens from **Edit profile**, and each section
(`About`, `Contact`, `Location`, `Hours`, `More`) is a separate tab.

Coordinates drift badly here — the window is often smaller than the screenshot
canvas, and a click computed from a screenshot lands on the wrong control. Click
via `element.click()` on a text match instead.

## Verified state (checked 31 July 2026)

| Field | State |
|---|---|
| Reviews | 67, rating 4.5 |
| Description | Correct — family-owned, trilingual, no carrier comparison |
| Categories | 6 — Insurance agency (primary), Commercial, Auto, Home, Life, Motorcycle |
| Services | Populated — Auto, Boat & watercraft, Commercial, Employee, General liability, Life, Motorcycle, Pet |
| Hours / phone | Mon–Fri 9am–6pm, (305) 859-3953 |
| Photos | Present, but see below |
| Activity | ~685 views/month, 474 interactions |

Do not assume fields are empty. Check before reporting a gap — an earlier review
claimed missing photos, services and reviews, and all three were wrong.

## Known issues

**Most photos are marketing flyers, not photographs.** The gallery is full of
graphics with text baked in ("LOOKING FOR AN AGENT?", "Insurance Solutions Made
Just for You"). Google discourages these and removes them periodically; they do
not rank or convert like real photos of the business. The gap is authenticity,
not quantity.

**Google's own summary calls the business a "Chain agency."** This is generated
by Google from the categories, not from the description, and cannot be edited
directly — only via "Suggest an edit".

**Photo upload cannot be automated.** The Add photos control opens a native OS
file picker with no `input[type=file]` anywhere in the DOM, shadow roots or
iframes. Prepare and hand off the files; do not attempt to click through it,
because a native dialog blocks the whole browser session.

## Preparing photos

Google accepts JPG and PNG only, 10 KB – 5 MB, 720×720 recommended, 250×250
minimum. Check the actual file header rather than the extension — one agency
headshot was a WebP named `.jpg` and would have been rejected.

Wanted, in priority order: exterior with readable signage in daylight, entrance
with hours, reception and desk area, team group shot, an agent on the phone,
parking. No customer screens, documents or faces without permission.

## Compliance

Profile text is subject to the same six violation classes as the website — see
`compliance-sweep`. Whether the agency may solicit or display customer reviews
is an open question with Allstate compliance; do not set up review requests
until that is answered in writing.
