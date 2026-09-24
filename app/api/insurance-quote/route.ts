import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import { guardSubmission } from '@/lib/form-guard';
import { cleanAttribution, attributionEmailRow } from '@/lib/attribution';

const NOTIFY_EMAIL = 'mikhailkozlov@allstate.com';
const FROM_ADDRESS = 'M&K Agency Website <leads@mkagencyinc.com>';

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
<p><b>Address:</b> ${b.address}</p>
${b.vin ? `<p><b>VIN:</b> ${b.vin}</p>` : ''}
${b.drivers ? `<p><b>Number of drivers:</b> ${b.drivers}</p>` : ''}
${b.comments ? `<p><b>Additional comments / coverages:</b> ${b.comments}</p>` : ''}
<p><b>TCPA consent given:</b> Yes (v${b.consent_text_version || 'unknown'})</p>
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

      await sql`INSERT INTO insurance_quotes
        (name, phone, address, vin, drivers, comments, product_slug, product_title, lang, consent,
         consent_ip, consent_user_agent, consent_text_version, gclid, utm)
        VALUES (${b.name}, ${b.phone}, ${b.address}, ${b.vin || ''}, ${b.drivers || ''},
        ${b.comments || ''}, ${b.product_slug}, ${b.product_title}, ${b.lang}, ${b.consent},
        ${consentIp}, ${consentUserAgent}, ${consentTextVersion}, ${attr.gclid}, ${attr.utm})`;
    }

    const emailOk = await notifyAgent({ ...b, consent_text_version: consentTextVersion });

    return NextResponse.json({ ok: true, emailOk });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
