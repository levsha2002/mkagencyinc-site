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
    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      await sql`CREATE TABLE IF NOT EXISTS callbacks (
        id SERIAL PRIMARY KEY, name TEXT, phone TEXT, lang TEXT,
        created_at TIMESTAMPTZ DEFAULT now()
      )`;
      await sql`INSERT INTO callbacks (name, phone, lang) VALUES (${b.name}, ${b.phone}, ${b.lang})`;
    }
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'M&K Website <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        subject: `📞 Callback request — ${b.name}`,
        html: `<h2>Callback request (${b.lang})</h2>
          <p><b>Name:</b> ${b.name}</p><p><b>Phone:</b> ${b.phone}</p>`,
      });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('callback error', e);
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}
