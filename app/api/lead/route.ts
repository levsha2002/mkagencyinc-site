import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import { guardSubmission } from '@/lib/form-guard';
import { cleanAttribution, attributionEmailRow } from '@/lib/attribution';
import { sendTelegramLeadAlert } from '@/lib/telegram';

// Hardcoded so email works regardless of Vercel env-var state.
// mkagencyinc.com is a verified sending domain in Resend, so leads@ sends
// authenticated (good deliverability). Recipient is the agency's allstate.com box.
const AGENCY_EMAIL = 'mikhailkozlov@allstate.com';
const FROM_ADDRESS = 'M&K Agency Website <leads@mkagencyinc.com>';

// Minimal HTML escaping for visitor-supplied values placed in lead emails.
function esc(v: unknown): string {
  return String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}
const str = (v: unknown, max = 500) => (typeof v === 'string' ? v.slice(0, max) : '');

function clientIp(req: Request): string {
  const h = req.headers;
  const fwd = h.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return h.get('x-real-ip') || h.get('x-vercel-forwarded-for') || 'unknown';
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const guard = guardSubmission(req, body);
    if (!guard.ok) {
      // Honeypot returns a success shape so bots learn nothing; nothing is stored.
      return guard.reason === 'honeypot'
        ? NextResponse.json({ ok: true })
        : NextResponse.json({ error: 'Too many requests' }, { status: guard.status });
    }
    const { insurance_type, zip_code, name, phone, email, message, consent, lang, source } = body;
    const attr = cleanAttribution(body.attribution);

    // Email is optional since Sep 2026 (phone is how the agency follows up).
    if (!name || !phone || !zip_code) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const consentText = str(body.consent_text, 2000);
    const consentTextVersion = str(body.consent_text_version, 50) || (consentText ? 'legacy' : 'unknown');
    const consentUserAgent = str(body.consent_user_agent, 500);
    const consentIp = clientIp(req);
    const pageUrl = str(body.page_url, 500);
    const clientTxnId = str(body.transaction_id, 100);

    // 1) Save to Neon (TCPA compliance backup: consent + timestamp + source)
    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);

      await sql`CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )`;

      // Self-healing schema: add any missing columns (safe if table pre-existed with old schema)
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS insurance_type TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS zip_code TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS name TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS phone TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS email TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS message TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent BOOLEAN`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS lang TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS source TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS gclid TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_text TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_text_version TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_ip TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_user_agent TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS page_url TEXT`;
      await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS client_txn_id TEXT`;

      await sql`
        INSERT INTO leads (insurance_type, zip_code, name, phone, email, message, consent, lang, source, gclid, utm,
          consent_text, consent_text_version, consent_ip, consent_user_agent, page_url, client_txn_id)
        VALUES (${insurance_type}, ${zip_code}, ${name}, ${phone}, ${email || ''}, ${message || ''}, ${!!consent}, ${lang || 'en'}, ${source || 'website'}, ${attr.gclid}, ${attr.utm},
          ${consentText}, ${consentTextVersion}, ${consentIp}, ${consentUserAgent}, ${pageUrl}, ${clientTxnId})`;
    }

    // 2) Telegram alert, started together with the email below (never before
    //    it) and awaited after it. Never throws; 5s cap; skipped if unset.
    const telegramAlert = sendTelegramLeadAlert({
      type: /\/quote(\/|\?|#|$)/.test(pageUrl) ? 'Quote form' : 'Contact form',
      lang: lang || 'en',
      name: str(name, 200),
      phone: str(phone, 50),
      email: str(email, 200),
      zip: str(zip_code, 20),
      coverage: str(insurance_type, 200),
      message: str(message, 1500),
      pageUrl,
      extra: [['Source', str(source, 100) || 'website']],
    });

    // 3) Email the agency
    let emailOk = true;
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error: resendError } = await resend.emails.send({
        from: FROM_ADDRESS,
        ...(email ? { reply_to: email } : {}),
        to: AGENCY_EMAIL,
        subject: `🔥 New ${insurance_type} lead: ${name} (${zip_code})`,
        html: `
          <h2>New website lead</h2>
          <table cellpadding="6" style="border-collapse:collapse">
            <tr><td><b>Type</b></td><td>${insurance_type}</td></tr>
            <tr><td><b>Name</b></td><td>${name}</td></tr>
            <tr><td><b>Phone</b></td><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td><b>Email</b></td><td>${email ? esc(email) : '—'}</td></tr>
            <tr><td><b>ZIP</b></td><td>${zip_code}</td></tr>
            <tr><td><b>Message</b></td><td>${message || '—'}</td></tr>
            <tr><td><b>Language</b></td><td>${lang || 'en'}</td></tr>
            <tr><td><b>Source</b></td><td>${source || 'website'}</td></tr>
            <tr><td><b>TCPA consent</b></td><td>${consent ? `YES ✅ (v${esc(consentTextVersion)})` : 'NO'}</td></tr>
            ${pageUrl ? `<tr><td><b>Page</b></td><td>${esc(pageUrl)}</td></tr>` : ''}
            <tr><td><b>Time</b></td><td>${new Date().toISOString()}</td></tr>
          </table>
          ${attributionEmailRow(attr)}`,
      });
      if (resendError) {
        emailOk = false;
        // Surfaced in Netlify function logs (Site -> Logs -> Functions) so a
        // silent Resend failure (bad/missing API key, unverified from-domain,
        // etc.) is no longer invisible. The lead is still saved to the DB
        // above regardless, so no lead data is lost even if this fails.
        console.error('Lead API: Resend email failed:', JSON.stringify(resendError));
      }
    } else {
      emailOk = false;
      console.error('Lead API: RESEND_API_KEY is not set — email notification skipped');
    }

    await telegramAlert;

    return NextResponse.json({ ok: true, emailOk });
  } catch (err) {
    console.error('Lead API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}