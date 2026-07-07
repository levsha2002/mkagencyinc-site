import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

// ВАЖНО: эта папка теперь называется "lead" (маленькими буквами), а не "Lead".
// На Windows это не имело значения (там регистр букв в именах папок не важен),
// но сервер Vercel работает на Linux, где "Lead" и "lead" — это ДВЕ РАЗНЫЕ папки.
// Фронтенд всегда стучится в /api/lead (маленькими буквами), поэтому раньше
// в реальной продакшен-версии сайта это возвращало 404 (страница не найдена),
// даже если тут был правильный код.

const sql = neon(process.env.DATABASE_URL!);
const resend = new Resend(process.env.RESEND_API_KEY!);

// Куда слать email о новом лиде. Меняй здесь, если поменяется почта.
const NOTIFY_EMAIL = 'mkagency2020@hotmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, insurance_type, zip_code, message } = body;

    if (!name || !phone || !zip_code) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // 1) Сохраняем лид в базу Neon — работает независимо от email,
    //    поэтому даже если письмо не уйдёт, лид не потеряется.
    const result = await sql`
      INSERT INTO leads (name, email, phone, insurance_type, zip_code, message)
      VALUES (${name}, ${email || ''}, ${phone}, ${insurance_type}, ${zip_code}, ${message || ''})
      RETURNING id
    `;

    // 2) Отправляем email-уведомление через Resend.
    //    "from" ниже — это тестовый домен Resend, который работает СРАЗУ,
    //    без подтверждения домена. Когда захочешь брендированный адрес вида
    //    noreply@mkagency2026.com — подтверди домен mkagency2026.com в Resend
    //    (Resend Dashboard → Domains → Add Domain), тогда смени "from" на него.
    try {
      await resend.emails.send({
        from: 'M&K Agency <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        subject: `🔔 Новый лид: ${name} (${insurance_type})`,
        html: `
          <h2>Новый лид с сайта</h2>
          <p><strong>ID в базе:</strong> ${result[0].id}</p>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email || '—'}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Тип страховки:</strong> ${insurance_type}</p>
          <p><strong>ZIP:</strong> ${zip_code}</p>
          <p><strong>Доп. инфо:</strong> ${message || '—'}</p>
        `,
      });
    } catch (emailError) {
      // Если email не ушёл (например, ещё не настроен RESEND_API_KEY на Vercel) —
      // лид всё равно уже сохранён в базе на шаге 1. Просто логируем ошибку.
      console.error('Email send failed (lead was still saved to DB):', emailError);
    }

    return NextResponse.json({ success: true, id: result[0].id });
  } catch (error: any) {
    console.error('Lead route error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
