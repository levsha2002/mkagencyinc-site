import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const NOTIFY_EMAIL = process.env.AGENCY_EMAIL || 'mikhailkozlov@allstate.com';

export async function POST(req: NextRequest) {
  try {
    const b = await req.json();

    if (!b.business_name || !b.phone || !b.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      await sql`CREATE TABLE IF NOT EXISTS referral_submissions (
        id SERIAL PRIMARY KEY,
        business_name TEXT,
        category TEXT,
        address TEXT,
        zip TEXT,
        website TEXT,
        owner_first_name TEXT,
        owner_last_name TEXT,
        phone TEXT,
        email TEXT,
        description TEXT,
        card_image TEXT,
        verified BOOLEAN DEFAULT false,
        created_at TIMESTAMPTZ DEFAULT now()
      )`;
      await sql`ALTER TABLE referral_submissions ADD COLUMN IF NOT EXISTS zip TEXT`;
      await sql`ALTER TABLE referral_submissions ADD COLUMN IF NOT EXISTS website TEXT`;
      await sql`ALTER TABLE referral_submissions ADD COLUMN IF NOT EXISTS card_image TEXT`;

      await sql`INSERT INTO referral_submissions
        (business_name, category, address, zip, website, owner_first_name, owner_last_name, phone, email, description, card_image)
        VALUES (${b.business_name}, ${b.category}, ${b.address}, ${b.zip || ''}, ${b.website || ''},
                ${b.owner_first_name}, ${b.owner_last_name}, ${b.phone}, ${b.email}, ${b.description},
                ${b.card_image || ''})`;
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM || 'M&K Website <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        subject: `New business referral: ${b.business_name}`,
        html: `<h2>New local business recommendation — needs phone verification</h2>
          <p><b>Business:</b> ${b.business_name}</p>
          <p><b>Category:</b> ${b.category}</p>
          <p><b>Address:</b> ${b.address}, ${b.zip || ''}</p>
          ${b.website ? `<p><b>Website:</b> <a href="${b.website}">${b.website}</a></p>` : ''}
          <p><b>Owner:</b> ${b.owner_first_name} ${b.owner_last_name}</p>
          <p><b>Phone:</b> ${b.phone}</p>
          <p><b>Email:</b> ${b.email}</p>
          <p><b>Description:</b> ${b.description}</p>
          ${b.card_image ? '<p><b>Business card/logo:</b> uploaded — view in database record</p>' : ''}
          <p style="color:#c0392b"><b>Next step:</b> Call the owner to verify before adding to the map.</p>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
