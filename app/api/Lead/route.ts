import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const sql = neon(process.env.DATABASE_URL!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, phone, insurance_type, zip_code, message } = await request.json();

    // Save to DB
    await sql`
      INSERT INTO leads (name, email, phone, insurance_type, zip_code, message)
      VALUES (${name}, ${email}, ${phone}, ${insurance_type}, ${zip_code}, ${message})
    `;

    // Send email
    await resend.emails.send({
      from: 'M&K Agency <onboarding@resend.dev>',
      to: 'mkagency2020@hotmail.com', // твоя почта
      subject: `Новый лид: ${name}`,
      html: `
        <h2>Новый лид</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Тип:</strong> ${insurance_type}</p>
        <p><strong>ZIP:</strong> ${zip_code}</p>
        <p><strong>Сообщение:</strong> ${message || 'Нет'}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}