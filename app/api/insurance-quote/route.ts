import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import { guardSubmission } from '@/lib/form-guard';

const NOTIFY_EMAIL = 'mikhailkozlov@allstate.com';
const FROM_ADDRESS = 'M&K Agency Website <leads@mkagencyinc.com>';

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
<p><b>TCPA consent given:</b> Yes</p>`,
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

      await sql`INSERT INTO insurance_quotes
        (name, phone, address, vin, drivers, comments, product_slug, product_title, lang, consent)
        VALUES (${b.name}, ${b.phone}, ${b.address}, ${b.vin || ''}, ${b.drivers || ''},
        ${b.comments || ''}, ${b.product_slug}, ${b.product_title}, ${b.lang}, ${b.consent})`;
    }

    const emailOk = await notifyAgent(b);

    return NextResponse.json({ ok: true, emailOk });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
