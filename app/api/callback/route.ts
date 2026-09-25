import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import { guardSubmission } from '@/lib/form-guard';
import { cleanAttribution, attributionEmailRow } from '@/lib/attribution';

// Hardcoded so email works regardless of Vercel env-var state (verified domain).
const NOTIFY_EMAIL = 'mikhailkozlov@allstate.com';
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
    const b = await req.json();

    const guard = guardSubmission(req, b);
    if (!guard.ok) {
      // Honeypot returns a success shape so bots learn nothing; nothing is stored.
      return guard.reason === 'honeypot'
        ? NextResponse.json({ ok: true })
        : NextResponse.json({ error: 'Too many requests' }, { status: guard.status });
    }

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
    const attr = cleanAttribution(b.attribution);
    // TCPA / FTSA evidence (optional fields, sent by forms since Sep 2026).
    const consentText = str(b.consent_text, 2000);
    const consentTextVersion = str(b.consent_text_version, 50) || 'unknown';
    const consentUserAgent = str(b.consent_user_agent, 500);
    const consentIp = clientIp(req);
    const pageUrl = str(b.page_url, 500);
    const clientTxnId = str(b.transaction_id, 100);

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
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS gclid TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS utm TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS consent_text TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS consent_text_version TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS consent_ip TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS consent_user_agent TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS page_url TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS client_txn_id TEXT`;

      await sql`INSERT INTO callbacks (name, phone, lang, urgent, contact_method, consent, agent_name, gclid, utm,
        consent_text, consent_text_version, consent_ip, consent_user_agent, page_url, client_txn_id)
        VALUES (${b.name}, ${b.phone}, ${b.lang}, ${urgent}, ${contactMethod}, ${b.consent}, ${agentName}, ${attr.gclid}, ${attr.utm},
        ${consentText}, ${consentTextVersion}, ${consentIp}, ${consentUserAgent}, ${pageUrl}, ${clientTxnId})`;
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const urgentTag = urgent ? '🔴 URGENT — ' : '';
      const methodLabel = contactMethod === 'text' ? 'TEXT' : 'CALL';

      await resend.emails.send({
        from: FROM_ADDRESS,
        to: NOTIFY_EMAIL,
        subject: `${urgentTag}${methodLabel} request — ${b.name} (wants: ${agentName})`,
        html: `<h2>${urgent ? 'Urgent c' : 'C'}allback request (${b.lang})</h2>
          <p><b>Name:</b> ${b.name}</p>
          <p><b>Phone:</b> ${b.phone}</p>
          <p><b>Preferred contact method:</b> ${methodLabel}</p>
          <p><b>Requested agent:</b> ${agentName}</p>
          <p><b>TCPA consent given:</b> Yes (v${esc(consentTextVersion)})</p>
          ${pageUrl ? `<p style="font-size:12px;color:#555"><b>Page:</b> ${esc(pageUrl)}</p>` : ''}
          ${attributionEmailRow(attr)}`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('callback error', e);
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}
