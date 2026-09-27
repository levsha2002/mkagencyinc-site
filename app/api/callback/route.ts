import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import { guardSubmission } from '@/lib/form-guard';
import { cleanAttribution, attributionEmailRow } from '@/lib/attribution';
import { sendTelegramLeadAlert } from '@/lib/telegram';

// Hardcoded so email works regardless of Vercel env-var state (verified domain).
const NOTIFY_EMAIL = 'mikhailkozlov@allstate.com';
const FROM_ADDRESS = 'M&K Agency Website <leads@mkagencyinc.com>';

// Minimal HTML escaping for visitor-supplied values placed in lead emails.
function esc(v: unknown): string {
  return String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}
const str = (v: unknown, max = 500) => (typeof v === 'string' ? v.slice(0, max) : '');

// Optional fields sent by the /coverage-check form (Sep 2026). Whitelisted so
// visitor input never reaches the email/alert as free text.
const POLICY_TYPES = ['Auto', 'Home', 'Condo (HO-6)', 'Business', 'Life', 'Other'];
const LANG_NAMES: Record<string, string> = { en: 'English', es: 'Español', ru: 'Русский' };
// Landing pages that post here with a `source`; each gets its own email
// subject / heading and Telegram type. `note` (e.g. "Gap insurance") is a
// fixed label per page, so it is whitelisted the same way.
const LANDINGS: Record<string, { type: 'Coverage check' | 'Gap insurance'; icon: string; heading: string }> = {
  'coverage-check': { type: 'Coverage check', icon: '🛡️', heading: 'Free coverage check request' },
  'gap-insurance': { type: 'Gap insurance', icon: '🚗', heading: 'Gap insurance request' },
};
const NOTES = ['Gap insurance'];

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
    const source = str(b.source, 50).replace(/[^a-z0-9_-]/gi, '');
    const policyType = POLICY_TYPES.includes(b.policy_type) ? (b.policy_type as string) : '';
    const preferredLang = LANG_NAMES[b.preferred_lang] ? (b.preferred_lang as string) : '';
    const landing = LANDINGS[source];
    const note = NOTES.includes(b.note) ? (b.note as string) : '';

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
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS source TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS policy_type TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS preferred_lang TEXT`;
      await sql`ALTER TABLE callbacks ADD COLUMN IF NOT EXISTS note TEXT`;

      await sql`INSERT INTO callbacks (name, phone, lang, urgent, contact_method, consent, agent_name, gclid, utm,
        consent_text, consent_text_version, consent_ip, consent_user_agent, page_url, client_txn_id,
        source, policy_type, preferred_lang, note)
        VALUES (${b.name}, ${b.phone}, ${b.lang}, ${urgent}, ${contactMethod}, ${b.consent}, ${agentName}, ${attr.gclid}, ${attr.utm},
        ${consentText}, ${consentTextVersion}, ${consentIp}, ${consentUserAgent}, ${pageUrl}, ${clientTxnId},
        ${source || null}, ${policyType || null}, ${preferredLang || null}, ${note || null})`;
    }

    // Telegram alert, started together with the email below and awaited after
    // it. Never throws; 5s cap; skipped silently when not configured.
    // Callers: "Talk to Agent Now" modal (urgent), chat widget callback tab,
    // the /protection-check planner (sends a `message` summary) and the
    // landing-page forms (/coverage-check, /gap-insurance: source + policy +
    // call language, see LANDINGS).
    const cbMessage = str(b.message, 1500);
    const telegramAlert = sendTelegramLeadAlert({
      type: urgent
        ? 'Talk to Agent Now'
        : landing
          ? landing.type
          : /^Protection check/.test(cbMessage) ? 'Protection check' : 'Chat callback',
      lang: str(b.lang, 10),
      name: str(b.name, 200),
      phone: str(b.phone, 50),
      coverage: policyType,
      message: landing ? '' : cbMessage,
      pageUrl,
      extra: [
        ['Note', note],
        ['Call in', preferredLang ? LANG_NAMES[preferredLang] : ''],
        ['Preferred contact', contactMethod === 'text' ? 'TEXT' : 'CALL'],
        ['Requested agent', agentName !== 'agent' ? agentName : ''],
        ['Source', source],
      ],
    });

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const urgentTag = urgent ? '🔴 URGENT — ' : '';
      const methodLabel = contactMethod === 'text' ? 'TEXT' : 'CALL';

      await resend.emails.send({
        from: FROM_ADDRESS,
        to: NOTIFY_EMAIL,
        subject: landing
          ? `${landing.icon} ${landing.type} — ${str(b.name, 200)} (${policyType || 'policy not chosen'}${preferredLang ? `, call in ${LANG_NAMES[preferredLang]}` : ''})`
          : `${urgentTag}${methodLabel} request — ${b.name} (wants: ${agentName})`,
        html: `<h2>${landing ? landing.heading : `${urgent ? 'Urgent c' : 'C'}allback request`} (${esc(b.lang)})</h2>
          <p><b>Name:</b> ${esc(b.name)}</p>
          <p><b>Phone:</b> ${esc(b.phone)}</p>
          ${note ? `<p><b>Note:</b> ${esc(note)}</p>` : ''}
          ${policyType ? `<p><b>Policy:</b> ${esc(policyType)}</p>` : ''}
          ${preferredLang ? `<p><b>Call in (preferred language):</b> ${esc(LANG_NAMES[preferredLang])}</p>` : ''}
          ${source ? `<p><b>Source:</b> ${esc(source)}</p>` : ''}
          <p><b>Preferred contact method:</b> ${methodLabel}</p>
          <p><b>Requested agent:</b> ${agentName}</p>
          <p><b>TCPA consent given:</b> Yes (v${esc(consentTextVersion)})</p>
          ${pageUrl ? `<p style="font-size:12px;color:#555"><b>Page:</b> ${esc(pageUrl)}</p>` : ''}
          ${attributionEmailRow(attr)}`,
      });
    }

    await telegramAlert;

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('callback error', e);
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}
