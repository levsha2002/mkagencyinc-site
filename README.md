# M&K Agency — Next.js site + Grok image studio

Trilingual (EN/ES/RU) insurance site for M&K Agency Inc. See `INSTRUCTIONS_RU.md`
in this same folder for a full Russian-language, beginner-friendly setup guide —
that file explains everything a non-developer needs to launch this correctly.

```
mk-agency-next/
├─ app/
│  ├─ page.jsx                    # THE homepage — single source of truth
│  ├─ layout.jsx                  # fonts + metadata
│  ├─ globals.css                 # all site styling (design tokens at top)
│  ├─ studio/page.jsx             # /studio — private Grok image generator
│  └─ api/
│     ├─ lead/route.ts            # quote form → Neon DB + Resend email
│     ├─ callback/route.ts        # "request a callback" → Neon DB + Resend email
│     ├─ chat/route.js            # AI chat widget → xAI Grok (no Ricochet)
│     └─ generate-image/route.js  # server-side call to xAI for /studio
├─ public/images/                 # drop hero + agent photos here
├─ _legacy/                       # OLD unused files, kept for reference only
├─ .env.local.example
└─ package.json
```

## Quick start

```bash
npm install
cp .env.local.example .env.local      # then fill in real values
npm run dev
```

Open http://localhost:3000 (site) and http://localhost:3000/studio (image generator).

## Environment variables (also set these in Vercel → Settings → Environment Variables)

- `DATABASE_URL` — Neon Postgres connection string
- `RESEND_API_KEY` — Resend.com API key (email notifications)
- `XAI_API_KEY` — xAI (Grok) key, used by BOTH /studio image generation AND the new AI chat widget
- `STUDIO_KEY` — any password you choose, protects /studio from strangers

## Deploy

Push to the `main` branch of the GitHub repo connected to your **mkagencyinc**
Vercel project. Do not deploy via `vercel --prod` from a different local folder —
that creates a second, unrelated Vercel project.
