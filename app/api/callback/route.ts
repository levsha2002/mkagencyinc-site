import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const NOTIFY_EMAIL = process.env.AGENCY_EMAIL || 'mikhailkozlov@allstate.com';

export async function POST(req: Request) {
  try {
    const b = await req.json();

    if (!b.name || !b.phone) {
      return NextResponse.json({ error: 'missing fields' }, { status: 400 });
    }
    // Server-side consent guard — never trust the frontend alone for TCPA compliance.
    if (!b.consent) {
      return NextResponse.json({ error: 'consent required' }, { status: 400 });
    }

    const urgent: boolean = b.urgent === true;
    const contactMethod: 'call' | 'text' =
      b.contact_method === 'text' ? 'text' : 'call';
    const agentName: string = (b.agent_name || 'agent').trim() || 'agent';

    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      await sql`CREATE TABLE IF NOT EXISTS callbacks (
        id SERIAL PRIMARY KEY,
        name TEXT,
        phone TEXT,
        lang TEXT,
        urgent BOOLEAN DEFAULT false,
        contact_method TEXT DEFAULT 'call',
        consent BOOLEAN DEFAULT false,
        agent_name TEXT DEFAULT 'agent',
        created_at TIMESTAMPTZ DEFAULT now()
      )`;
      // Adds the new columns if this table already existed before this update.
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS urgent BOOLEAN DEFAULT false`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS contact_method TEXT DEFAULT 'call'`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS consent BOOLEAN DEFAULT false`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS agent_name TEXT DEFAULT 'agent'`;

      await sql`INSERT INTO callbacks (name, phone, lang, urgent, contact_method, consent, agent_name)
        VALUES (${b.name}, ${b.phone}, ${b.lang}, ${urgent}, ${contactMethod}, ${b.consent}, ${agentName})`;
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const urgentTag = urgent ? '🔴 URGENT — ' : '';
      const methodLabel = contactMethod === 'text' ? 'TEXT' : 'CALL';

      await resend.emails.send({
        from: process.env.RESEND_FROM || 'M&K Website <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        subject: `${urgentTag}${methodLabel} request — ${b.name} (wants: ${agentName})`,
        html: `<h2>${urgent ? 'Urgent c' : 'C'}allback request (${b.lang})</h2>
          <p><b>Name:</b> ${b.name}</p>
          <p><b>Phone:</b> ${b.phone}</p>
          <p><b>Preferred contact method:</b> ${methodLabel}</p>
          <p><b>Requested agent:</b> ${agentName}</p>
          <p><b>TCPA consent given:</b> Yes</p>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('callback error', e);
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}
