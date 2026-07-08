# M&K Agency — новый многостраничный сайт (v2). Инструкция по загрузке

## Что внутри
- 3 языка с отдельными адресами: mkagencyinc.com/en, /es, /ru
  (лучший формат для Google — каждая версия индексируется отдельно, hreflang настроен)
- 4 страницы на каждом языке: Главная, Services, About, Contact
- Форма котировки (TCPA-галочка) → Neon + письмо на mkagency2020@hotmail.com
- Виджет «Chat with Mike» (ИИ через xAI) + вкладка «Request a callback»
  Копия переписки уходит в агентство, когда клиент ставит галочку согласия
- Телефон и SMS везде: (305) 247-8877
- SEO: title/description на каждой странице на каждом языке, schema.org
  InsuranceAgency, sitemap.xml, robots.txt
- Без упоминаний Allstate (compliance для Exclusive Agent)

## Как загрузить (10 минут)

### Шаг 1. Сохрани старый проект (на всякий случай)
Переименуй папку Desktop\mk-agency-next в mk-agency-next-OLD.

### Шаг 2. Распакуй новый
Распакуй mk-agency-next-v2.zip на Desktop так, чтобы получилась папка
Desktop\mk-agency-next с файлом package.json внутри.

### Шаг 3. Перенеси git из старой папки
Скопируй СКРЫТУЮ папку .git из mk-agency-next-OLD в новую mk-agency-next.
(В проводнике включи «Показывать скрытые элементы».)
Также скопируй файл .env.local из старой папки в новую.

### Шаг 4. Собери локально
Открой cmd в новой папке:
    cd C:\Users\a0c5016\Desktop\mk-agency-next
    npm install
    npm run build
Должно быть зелёным без ошибок.

### Шаг 5. Залей на Vercel
    git add -A
    git commit -m "v2: multipage trilingual site with Chat with Mike"
    git push origin main
НЕ запускай vercel --prod вручную — деплой пойдёт сам.

### Шаг 6. Проверь переменные в Vercel
Vercel → mk-agency-next → Settings → Environment Variables:
    DATABASE_URL      (Neon)
    RESEND_API_KEY    (Resend)
    XAI_API_KEY       (xAI / Grok)
⚠️ Эти ключи светились в прошлых чатах — СОЗДАЙ НОВЫЕ (rotate) и вставь новые
значения. Старые отзови.

### Шаг 7. Проверь сайт
- mkagencyinc.com → должно перекинуть на /en (или /ru если браузер русский)
- Отправь тестовую заявку с формы → письмо придёт на mkagency2020@hotmail.com
- Открой чат «Chat with Mike», задай вопрос, поставь галочку → копия придёт
  на почту агентства
- Проверь /es и /ru — переключатель языков в шапке

## Примечания
- Резюме о письмах: пока отправитель onboarding@resend.dev (тестовый Resend).
  Чтобы письма шли с адреса @mkagencyinc.com — подтверди домен в Resend
  (Settings → Domains) и поменяй from в файлах app/api/*/route.ts.
- /studio (генератор картинок) в эту версию не включён — скажи, если нужен,
  добавлю обратно.
