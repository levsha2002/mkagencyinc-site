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

Review count drifts fast (67 in July, 72 by September) — re-read it rather than
quoting this table. The same applies to the rest of this section; treat it as
"last confirmed", not current truth, same as the account-shape table in
`ads-audit`.

**"Reviews from the web" shows a separate, bad number next to the good one.**
The Search card has a block below the main 4.5-star Google rating that
aggregates third-party review sources — it was showing **Facebook: 1/5 (1
vote)** right next to the Google 4.5/5, on the same card a searcher sees before
calling. This isn't editable from the GBP dashboard (it's pulled from Facebook
itself), but it's a real, visible reason the profile might convert worse than
the primary rating suggests — check it, don't only check the primary rating.

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

**"Complete your Business Profile" is a Google upsell funnel, not a gap
checklist.** Clicking it walks through cards for a Google Ads "Smart campaign"
built from the profile (a second, uncoordinated ad account outside
`ads-audit`'s campaign — don't let it create one) and a Google Workspace trial,
not a list of missing profile fields. Skip it; check the actual tabs (`About`,
`Contact`, `Location`, `Hours`, `More`) directly for real gaps instead.

**Don't source Google Ads image assets from this gallery.** Two separate
reasons, not one: most photos here are Allstate-branded (storefront signage,
office graphics with the Allstate logo) which violates the same "no Allstate
branding in ads" rule as everything else in `compliance-sweep`; and the
non-branded ones are candid photos of identifiable staff taken for the profile,
not posed for advertising — using someone's likeness in paid ads without their
knowledge is a separate problem from compliance. The one exception is a clean,
non-text, non-branded headshot of the owner/agent themself, who obviously
consents to being used in their own agency's marketing. Real, brand-safe images
for ads have instead been pulled from the website's own `/public/images`
(hero and category photos) — see `ads-audit`.

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
