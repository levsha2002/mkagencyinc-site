import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const NOTIFY_EMAIL = 'mkagency2020@hotmail.com';

export async function POST(req: Request) {
  try {
    const b = await req.json();
    if (!b.name || !b.phone) {
      return NextResponse.json({ error: 'missing fields' }, { status: 400 });
    }

    // 1) Save to Neon (TCPA paper trail: verbatim consent text + timestamp)
    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      await sql`CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        insurance_type TEXT, zip_code TEXT, name TEXT, phone TEXT,
        email TEXT, message TEXT, consent_text TEXT, lang TEXT,
        created_at TIMESTAMPTZ DEFAULT now()
      )`;
      await sql`INSERT INTO leads (insurance_type, zip_code, name, phone, email, message, consent_text, lang)
        VALUES (${b.insurance_type}, ${b.zip_code}, ${b.name}, ${b.phone}, ${b.email}, ${b.message}, ${b.consent_text}, ${b.lang})`;
    }

    // 2) Email notification to the agency
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'M&K Website <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        subject: `🔥 New lead: ${b.insurance_type} — ${b.name}`,
        html: `<h2>New quote request (${b.lang})</h2>
          <p><b>Type:</b> ${b.insurance_type}</p>
          <p><b>Name:</b> ${b.name}</p>
          <p><b>Phone:</b> ${b.phone}</p>
          <p><b>Email:</b> ${b.email || '—'}</p>
          <p><b>ZIP:</b> ${b.zip_code || '—'}</p>
          <p><b>Message:</b> ${b.message || '—'}</p>
          <hr /><p style="font-size:12px;color:#777">TCPA consent given. Verbatim text stored in Neon.</p>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('lead error', e);
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}
