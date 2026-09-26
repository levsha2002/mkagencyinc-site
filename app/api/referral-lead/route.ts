import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import { guardSubmission } from '@/lib/form-guard';
import { cleanAttribution, attributionEmailRow } from '@/lib/attribution';
import { sendTelegramLeadAlert } from '@/lib/telegram';
import { validateReferralBody } from '@/lib/referral-validate';

// Leads from the two forms on /[lang]/referral ("Refer a friend" and "Become a
// referral partner"). Same pipeline as /api/lead (the quote/contact form):
//   1. honeypot + per-IP rate limit (lib/form-guard)
//   2. row in the shared Neon `leads` table, with source = 'referral' | 'partner'
//      and the TCPA evidence columns (consent text + version, IP, UA, page URL)
//   3. Telegram alert (lib/telegram) and email via Resend to the agency inbox
// With no DATABASE_URL / RESEND_API_KEY / TELEGRAM_* set (local dev), steps 2
// and 3 are skipped, so the route can be exercised without side effects.

// Same recipient and sender as the other lead routes (server-side only, never rendered).
const AGENCY_EMAIL = 'mikhailkozlov@allstate.com';
const FROM_ADDRESS = 'M&K Agency Website <leads@mkagencyinc.com>';

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

    const v = validateReferralBody(body);
    if (!v.ok || !v.lead) return NextResponse.json({ error: v.error || 'invalid' }, { status: 400 });
    const lead = v.lead;

    const attr = cleanAttribution(body.attribution);
    const consentText = str(body.consent_text, 3000);
    const consentTextVersion = str(body.consent_text_version, 50) || 'unknown';
    const consentUserAgent = str(body.consent_user_agent, 500);
    const consentIp = clientIp(req);
    const pageUrl = str(body.page_url, 500);
    const clientTxnId = str(body.transaction_id, 100);

    // 1) Save to Neon, same table and columns as /api/lead.
    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      await sql`CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )`;
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
        VALUES (${lead.insuranceType}, ${''}, ${lead.name}, ${lead.phone}, ${lead.email}, ${lead.message}, ${true}, ${lead.lang}, ${lead.source}, ${attr.gclid}, ${attr.utm},
          ${consentText}, ${consentTextVersion}, ${consentIp}, ${consentUserAgent}, ${pageUrl}, ${clientTxnId})`;
    }

    // 2) Telegram alert, started with the email and awaited after it. Never throws.
    const telegramAlert = sendTelegramLeadAlert({
      type: lead.kind === 'referral' ? 'Referral' : 'Referral partner',
      lang: lead.lang,
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      pageUrl,
      extra: [...lead.details, ['Source', lead.source]],
    });

    // 3) Email the agency.
    let emailOk = true;
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const subject =
        lead.kind === 'referral'
          ? `🤝 New referral: ${lead.name} (from ${lead.details[0][1]})`
          : `🤝 New partner inquiry: ${lead.details[0][1]}`;
      const { error: resendError } = await resend.emails.send({
        from: FROM_ADDRESS,
        ...(lead.email ? { reply_to: lead.email } : {}),
        to: AGENCY_EMAIL,
        subject: subject.slice(0, 200),
        html: `
          <h2>${lead.kind === 'referral' ? 'New referral from the website' : 'New referral partner inquiry'}</h2>
          <table cellpadding="6" style="border-collapse:collapse">
            <tr><td><b>Type</b></td><td>${esc(lead.insuranceType)}</td></tr>
            <tr><td><b>${lead.kind === 'referral' ? 'Friend' : 'Contact'}</b></td><td>${esc(lead.name)}</td></tr>
            <tr><td><b>Phone</b></td><td><a href="tel:${esc(lead.phone.replace(/\D/g, ''))}">${esc(lead.phone)}</a></td></tr>
            <tr><td><b>Email</b></td><td>${lead.email ? esc(lead.email) : '—'}</td></tr>
            ${lead.details.map(([k, val]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(val)}</td></tr>`).join('')}
            <tr><td><b>Language</b></td><td>${esc(lead.lang)}</td></tr>
            <tr><td><b>Source</b></td><td>${esc(lead.source)}</td></tr>
            <tr><td><b>Consent</b></td><td>YES ✅ (${esc(consentTextVersion)})</td></tr>
            ${pageUrl ? `<tr><td><b>Page</b></td><td>${esc(pageUrl)}</td></tr>` : ''}
            <tr><td><b>Time</b></td><td>${new Date().toISOString()}</td></tr>
          </table>
          ${attributionEmailRow(attr)}`,
      });
      if (resendError) {
        emailOk = false;
        console.error('Referral lead API: Resend email failed:', JSON.stringify(resendError));
      }
    } else {
      emailOk = false;
      console.error('Referral lead API: RESEND_API_KEY is not set — email notification skipped');
    }

    await telegramAlert;
    return NextResponse.json({ ok: true, emailOk });
  } catch (err) {
    console.error('Referral lead API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
