import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

// Это "Заказать звонок" — отдельная, более короткая форма (имя + телефон + время).
// Специально НЕ использует Ricochet: пишет прямо в ту же таблицу leads в Neon
// (с пометкой insurance_type = 'Callback Request', чтобы отличать от обычных лидов)
// и присылает тебе email — та же связка Neon + Resend, что уже работает для формы.

const sql = neon(process.env.DATABASE_URL!);
const resend = new Resend(process.env.RESEND_API_KEY!);
const NOTIFY_EMAIL = 'mkagency2020@hotmail.com';

export async function POST(request: Request) {
  try {
    const { name, phone, time } = await request.json();

    if (!name || !phone) {
      return NextResponse.json({ success: false, error: 'Missing name or phone' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO leads (name, email, phone, insurance_type, zip_code, message)
      VALUES (${name}, ${''}, ${phone}, ${'Callback Request'}, ${''}, ${`Preferred callback time: ${time}`})
      RETURNING id
    `;

    try {
      await resend.emails.send({
        from: 'M&K Agency <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        subject: `☎️ Запрос обратного звонка: ${name}`,
        html: `
          <h2>Запрос обратного звонка</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Удобное время:</strong> ${time}</p>
        `,
      });
    } catch (emailError) {
      console.error('Callback email failed (still saved to DB):', emailError);
    }

    return NextResponse.json({ success: true, id: result[0].id });
  } catch (error: any) {
    console.error('Callback route error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
