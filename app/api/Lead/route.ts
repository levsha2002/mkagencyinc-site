import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const sql = neon(process.env.DATABASE_URL!);
const resend = new Resend(process.env.RESEND_API_KEY!);

// Куда приходят уведомления о новых лидах
const NOTIFY_EMAIL = 'mkagency2020@hotmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, insurance_type, zip_code, message } = body;

    // Проверка обязательных полей
    if (!name || !phone || !zip_code) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Сохраняем лид в Neon
    const result = await sql`
      INSERT INTO leads (name, email, phone, insurance_type, zip_code, message, source)
      VALUES (
        ${name}, 
        ${email || ''}, 
        ${phone}, 
        ${insurance_type}, 
        ${zip_code}, 
        ${message || ''}, 
        'website'
      )
      RETURNING id
    `;

    // 2. Отправляем email
    try {
      await resend.emails.send({
        from: 'M&K Agency <noreply@mkagency2026.com>', // ← лучше, чем resend.dev
        to: NOTIFY_EMAIL,
        subject: `🔔 Новый лид: ${name} (${insurance_type})`,
        html: `
          <h2>Новый лид с сайта mkagency2026.com</h2>
          <p><strong>ID:</strong> ${result[0].id}</p>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email || '—'}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Тип страховки:</strong> ${insurance_type}</p>
          <p><strong>ZIP код:</strong> ${zip_code}</p>
          <p><strong>Сообщение:</strong> ${message || '—'}</p>
          <hr>
          <p><small>Время: ${new Date().toLocaleString('ru-RU')}</small></p>
        `,
      });
    } catch (emailError) {
      console.error('Email send failed:', emailError);
      // Лид уже сохранён, поэтому не возвращаем ошибку
    }

    return NextResponse.json({ success: true, id: result[0].id });

  } catch (error: any) {
    console.error('Lead route error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}