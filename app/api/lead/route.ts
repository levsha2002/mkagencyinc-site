import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

// Hardcoded so email works regardless of Vercel env-var state.
// mkagencyinc.com is a verified sending domain in Resend, so leads@ sends
// authenticated (good deliverability). Recipient is the agency's allstate.com box.
const AGENCY_EMAIL = 'mikhailkozlov@allstate.com';
const FROM_ADDRESS = 'M&K Agency Website <leads@mkagencyinc.com>';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { insurance_type, zip_code, name, phone, email, message, consent, lang, source } = body;

    if (!name || !phone || !email || !zip_code) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

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

      await sql`
        INSERT INTO leads (insurance_type, zip_code, name, phone, email, message, consent, lang, source)
        VALUES (${insurance_type}, ${zip_code}, ${name}, ${phone}, ${email}, ${message || ''}, ${!!consent}, ${lang || 'en'}, ${source || 'website'})`;
    }

    // 2) Email the agency
    let emailOk = true;
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error: resendError } = await resend.emails.send({
        from: FROM_ADDRESS,
        reply_to: email,
        to: AGENCY_EMAIL,
        subject: `🔥 New ${insurance_type} lead: ${name} (${zip_code})`,
        html: `
          <h2>New website lead</h2>
          <table cellpadding="6" style="border-collapse:collapse">
            <tr><td><b>Type</b></td><td>${insurance_type}</td></tr>
            <tr><td><b>Name</b></td><td>${name}</td></tr>
            <tr><td><b>Phone</b></td><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td><b>Email</b></td><td>${email}</td></tr>
            <tr><td><b>ZIP</b></td><td>${zip_code}</td></tr>
            <tr><td><b>Message</b></td><td>${message || '—'}</td></tr>
            <tr><td><b>Language</b></td><td>${lang || 'en'}</td></tr>
            <tr><td><b>Source</b></td><td>${source || 'website'}</td></tr>
            <tr><td><b>TCPA consent</b></td><td>${consent ? 'YES ✅' : 'NO'}</td></tr>
            <tr><td><b>Time</b></td><td>${new Date().toISOString()}</td></tr>
          </table>`,
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

    return NextResponse.json({ ok: true, emailOk });
  } catch (err) {
    console.error('Lead API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}