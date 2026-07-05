# M&K Agency — Next.js site + Grok image studio

Your trilingual (EN/ES/RU) insurance site, converted to **Next.js (App Router)**, plus a
private **Personalize Studio** that generates on-brand images with **Grok (xAI)**.

```
mk-agency-next/
├─ app/
│  ├─ page.jsx                 # homepage (renders the converted site)
│  ├─ layout.jsx               # fonts + metadata
│  ├─ globals.css              # the full site styling
│  ├─ studio/page.jsx          # /studio — Grok image generator (private)
│  └─ api/generate-image/route.js   # server-side call to xAI (key stays secret)
├─ content/siteBody.js         # the site markup (trilingual)
├─ public/
│  ├─ site.js                  # site interactivity (language toggle, form, video…)
│  └─ images/                  # mikhail.jpg, mikhail-avatar.jpg — drop new images here
├─ .env.local.example
└─ package.json
```

## 1. Run it locally

```bash
npm install
cp .env.local.example .env.local      # then edit .env.local
npm run dev
```

Open **http://localhost:3000** (the site) and **http://localhost:3000/studio** (the generator).

In `.env.local` set:
- `XAI_API_KEY` — from https://x.ai/api
- `STUDIO_KEY` — any password you choose (the studio asks for it)

## 2. The Personalize Studio (`/studio`)

Pick a **Person** (Man / Woman / Couple), **Age**, and **Scene** (professional agent,
happy client, hurricane/storm, car accident, family, business owner). It auto-writes a
prompt you can edit, then generates 1–4 images with Grok. Click **Download** on any image.

The xAI key never reaches the browser — generation runs in the API route. The studio is
gated by `STUDIO_KEY` so visitors can't spend your credits. Keep `/studio` unlinked (and
ideally behind Vercel password protection).

## 3. Add / manage images

The site looks for images in **`/public/images`**. To swap or add one:

1. Get the image (download from the Studio, or use your own / free stock).
2. Optimize it (https://squoosh.app, aim < 300 KB, ~1200px wide).
3. Put it in `public/images/` (e.g. `hurricane.jpg`).
4. On the homepage markup (`content/siteBody.js`), point the matching `<img>` /
   replace the SVG scene with:
   ```html
   <img class="art" src="/images/hurricane.jpg"
        style="width:100%;height:100%;object-fit:cover" alt="Hurricane damage">
   ```

The agent photo and hero avatar already use `/images/mikhail.jpg` and
`/images/mikhail-avatar.jpg` — replace those files to update them.

> Note: on Vercel, `/public` is read-only at runtime, so new images are added by
> committing files (above), not uploaded live. For live uploads later, add
> [Vercel Blob](https://vercel.com/docs/storage/vercel-blob).

## 4. Configure the site

Edit the config block at the top of `public/site.js`:
- `PHONE_DISPLAY`, `PHONE_TEL` — your office line (call + text via Hearsay)
- `WEBHOOK_URL` — your Zapier/Make webhook for new leads
- `VIDEO_EMBED` — your YouTube/Vimeo embed URL

## 5. Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it at https://vercel.com → New Project.
3. Add environment variables `XAI_API_KEY` and `STUDIO_KEY` in the Vercel project settings.
4. Deploy. Attach your domain.

## Honest note on AI imagery

Use AI-generated people as **illustrative / ambiance** only — never as a fake named
testimonial, and never to represent Mikhail. Mikhail's real photo stays as the agent.
