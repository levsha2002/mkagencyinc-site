import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import { guardSubmission } from '@/lib/form-guard';
import { cleanAttribution, attributionEmailRow } from '@/lib/attribution';

const NOTIFY_EMAIL = 'mikhailkozlov@allstate.com';
const FROM_ADDRESS = 'M&K Agency Website <leads@mkagencyinc.com>';

// Minimal HTML escaping for visitor-supplied values placed in lead emails.
function esc(v: unknown): string {
  return String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}
const str = (v: unknown, max = 500) => (typeof v === 'string' ? v.slice(0, max) : '');

// Same header-based lookup as lib/form-guard.ts clientIp(), duplicated locally
// so this route has no new cross-file dependency for a single call site.
function clientIp(req: NextRequest): string {
  const h = req.headers;
  const fwd = h.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return h.get('x-real-ip') || h.get('x-vercel-forwarded-for') || 'unknown';
}

async function notifyAgent(b) {
  const tasks = [];
  let emailOk = true;

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    tasks.push(
      resend.emails
        .send({
          from: FROM_ADDRESS,
          to: NOTIFY_EMAIL,
          subject: `New quote request: ${b.product_title} — ${b.name}`,
          html: `<h2>${b.product_title} quote request (${b.lang})</h2>
<p><b>Name:</b> ${b.name}</p>
<p><b>Phone:</b> ${b.phone}</p>
${b.email ? `<p><b>Email:</b> ${esc(b.email)}</p>` : ''}
${b.business_name ? `<p><b>Business name:</b> ${esc(b.business_name)}</p>` : ''}
${b.business_type ? `<p><b>Type of business:</b> ${esc(b.business_type)}</p>` : ''}
${b.vehicles ? `<p><b>Number of vehicles:</b> ${esc(b.vehicles)}</p>` : ''}
${b.address ? `<p><b>Address:</b> ${b.address}</p>` : ''}
${b.vin ? `<p><b>VIN:</b> ${b.vin}</p>` : ''}
${b.drivers ? `<p><b>Number of drivers:</b> ${b.drivers}</p>` : ''}
${b.comments ? `<p><b>Additional comments / coverages:</b> ${b.comments}</p>` : ''}
<p><b>TCPA consent given:</b> Yes (v${b.consent_text_version || 'unknown'})</p>
${b.consent_text ? `<p style="font-size:12px;color:#555"><b>Consent text shown:</b> ${esc(b.consent_text)}</p>` : ''}
${b.page_url ? `<p style="font-size:12px;color:#555"><b>Page:</b> ${esc(b.page_url)}</p>` : ''}
${attributionEmailRow(cleanAttribution(b.attribution))}`,
        })
        .catch((err) => {
          emailOk = false;
          console.error('Insurance-quote API: Resend email failed:', JSON.stringify(err));
        })
    );
  } else {
    emailOk = false;
    console.error('Insurance-quote API: RESEND_API_KEY is not set — email notification skipped');
  }

  if (process.env.HEARSAY_WEBHOOK_URL && process.env.HEARSAY_API_KEY) {
    tasks.push(
      fetch(process.env.HEARSAY_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.HEARSAY_API_KEY}`,
        },
        body: JSON.stringify({
          channel: 'text_message',
          name: b.name,
          phone: b.phone,
          address: b.address,
          vin: b.vin || '',
          drivers: b.drivers || '',
          comments: b.comments || '',
          product_slug: b.product_slug,
          product_title: b.product_title,
          lang: b.lang,
          consent: true,
          source: 'mkagencyinc.com insurance-quote form',
        }),
      }).catch((err) => console.error('Insurance-quote API: Hearsay webhook error:', err))
    );
  } else {
    console.log('Insurance-quote API: Hearsay webhook not configured — skipping. Set HEARSAY_WEBHOOK_URL and HEARSAY_API_KEY to enable.');
  }

  await Promise.allSettled(tasks);
  return emailOk;
}

export async function POST(req: NextRequest) {
  try {
    const b = await req.json();

    const guard = guardSubmission(req, b);
    if (!guard.ok) {
      return guard.reason === 'honeypot'
        ? NextResponse.json({ ok: true })
        : NextResponse.json({ error: 'Too many requests' }, { status: guard.status });
    }

    if (!b.name || !b.phone || !b.consent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // TCPA evidence: capture IP, user agent and the exact consent copy version
    // shown to the visitor at submission time, in addition to the boolean flag.
    // This is what you would produce if a consent dispute or TCPA claim came in.
    const consentIp = clientIp(req);
    const consentUserAgent = typeof b.consent_user_agent === 'string' ? b.consent_user_agent.slice(0, 500) : '';
    const consentTextVersion = typeof b.consent_text_version === 'string' ? b.consent_text_version : 'unknown';
    const attr = cleanAttribution(b.attribution);
    // Added with the Sep 2026 form update; all optional, older clients
    // (e.g. a cached auto-quote.html) simply don't send them.
    const email = str(b.email, 200);
    const businessName = str(b.business_name, 200);
    const businessType = str(b.business_type, 200);
    const vehicles = str(b.vehicles, 20);
    const consentText = str(b.consent_text, 2000);
    const pageUrl = str(b.page_url, 500);
    const clientTxnId = str(b.transaction_id, 100);

    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      await sql`CREATE TABLE IF NOT EXISTS insurance_quotes (
        id SERIAL PRIMARY KEY,
        name TEXT,
        phone TEXT,
        address TEXT,
        vin TEXT,
        drivers TEXT,
        comments TEXT,
        product_slug TEXT,
        product_title TEXT,
        lang TEXT,
        consent BOOLEAN DEFAULT false,
        created_at TIMESTAMPTZ DEFAULT now()
      )`;

      // Migration-safe: adds the new TCPA evidence columns if this table
      // already existed from before this change (it does — the very first
      // test submission ran against the old schema).
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS consent_ip TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS consent_user_agent TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS consent_text_version TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS gclid TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS utm TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS email TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS business_name TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS business_type TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS vehicles TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS consent_text TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS page_url TEXT`;
      await sql`ALTER TABLE insurance_quotes ADD COLUMN IF NOT EXISTS client_txn_id TEXT`;

      await sql`INSERT INTO insurance_quotes
        (name, phone, address, vin, drivers, comments, product_slug, product_title, lang, consent,
         consent_ip, consent_user_agent, consent_text_version, gclid, utm,
         email, business_name, business_type, vehicles, consent_text, page_url, client_txn_id)
        VALUES (${b.name}, ${b.phone}, ${b.address || ''}, ${b.vin || ''}, ${b.drivers || ''},
        ${b.comments || ''}, ${b.product_slug}, ${b.product_title}, ${b.lang}, ${b.consent},
        ${consentIp}, ${consentUserAgent}, ${consentTextVersion}, ${attr.gclid}, ${attr.utm},
        ${email}, ${businessName}, ${businessType}, ${vehicles}, ${consentText}, ${pageUrl}, ${clientTxnId})`;
    }

    const emailOk = await notifyAgent({ ...b, consent_text_version: consentTextVersion });

    return NextResponse.json({ ok: true, emailOk });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
