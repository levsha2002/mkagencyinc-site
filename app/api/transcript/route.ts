import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

// Hardcoded so email works regardless of Vercel env-var state (verified domain).
const NOTIFY_EMAIL = 'mikhailkozlov@allstate.com';
const FROM_ADDRESS = 'M&K Agency Website <leads@mkagencyinc.com>';

// Called ONLY when the visitor checked the consent box in the chat widget.
// 1) Saves the transcript to Neon, 2) emails a copy to the agency,
// 3) if the visitor left their email — sends them a copy too.
export async function POST(req: Request) {
  try {
    const { messages, visitorEmail, lang } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'empty' }, { status: 400 });
    }

    const html = messages
      .map((m: any) => `<p><b>${m.role === 'user' ? 'Visitor' : 'Mike (AI)'}:</b> ${String(m.content).slice(0, 2000)}</p>`)
      .join('');

    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      await sql`CREATE TABLE IF NOT EXISTS chat_transcripts (
        id SERIAL PRIMARY KEY, transcript JSONB, visitor_email TEXT, lang TEXT,
        created_at TIMESTAMPTZ DEFAULT now()
      )`;
      await sql`INSERT INTO chat_transcripts (transcript, visitor_email, lang)
        VALUES (${JSON.stringify(messages)}, ${visitorEmail || null}, ${lang || null})`;
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromAddress = FROM_ADDRESS;

      // Copy to the agency
      await resend.emails.send({
        from: fromAddress,
        to: NOTIFY_EMAIL,
        subject: `💬 Chat transcript${visitorEmail ? ` — ${visitorEmail}` : ''}`,
        html: `<h2>Chat with Mike — transcript (${lang})</h2>${html}`,
      });

      // Copy to the visitor — we send from a verified domain (mkagencyinc.com),
      // so Resend can deliver to any recipient.
      if (visitorEmail) {
        await resend.emails.send({
          from: fromAddress,
          to: visitorEmail,
          subject: 'Your chat with M&K Agency',
          html: `<h2>Copy of your chat with M&K Agency</h2>${html}<p>Questions? Call or text us: (305) 247-8877</p>`,
        }).catch((err) => console.error('Visitor copy email error:', err));
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('transcript error', e);
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}