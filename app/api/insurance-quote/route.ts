import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const NOTIFY_EMAIL = 'mkagency2020@hotmail.com';

export async function POST(req: NextRequest) {
  try {
    const b = await req.json();

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

    let emailOk = true;
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error: resendError } = await resend.emails.send({
        from: 'M&K Website <onboarding@resend.dev>',
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
      });
      if (resendError) {
        emailOk = false;
        console.error('Insurance-quote API: Resend email failed:', JSON.stringify(resendError));
      }
    } else {
      emailOk = false;
      console.error('Insurance-quote API: RESEND_API_KEY is not set — email notification skipped');
    }

    return NextResponse.json({ ok: true, emailOk });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
