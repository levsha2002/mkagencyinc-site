// AI-чат для сайта. Работает на Grok (xAI) — используем тот же XAI_API_KEY,
// который уже есть в .env.local для /studio. Никакого Ricochet тут не нужно:
// бот просто отвечает посетителю, а когда набирает достаточно информации,
// предлагает нажать "Заказать звонок" (это уже отдельная кнопка на сайте,
// см. /api/callback/route.ts), либо посетитель сам заполняет форму котировки.

export const runtime = 'nodejs';

const SYSTEM_PROMPT = `You are Sam, the AI assistant for M&K Agency, an independent Allstate insurance
agency serving all of Florida (home, auto, commercial, life). Keep every reply to 2-3 short sentences.

Your job is ONLY to:
1) Help visitors understand what M&K Agency offers.
2) Gently find out what they need (home / auto / commercial / life) and whether they've had a recent
   hurricane claim, a price increase, or feel underinsured.
3) When you have a sense of what they need, tell them to use the "Request a callback" tab right above
   this chat, or fill out the quote form on the page — a real licensed agent will call them.

Never quote a price. Never promise coverage or claim approval — you are not a licensed agent.
If asked something outside insurance, politely redirect back to insurance topics.
If the visitor writes in Spanish, reply in Spanish. If in Russian, reply in Russian. Otherwise reply in English.`;

export async function POST(req) {
  try {
    if (!process.env.XAI_API_KEY) {
      return json({ reply: 'Chat is not configured yet — please call us at (305) 859-3953.' }, 200);
    }

    const { messages } = await req.json();

    // messages приходят как [{role:'user'|'assistant', content:'...'}, ...]
    const xaiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.slice(-10), // последние 10 сообщений — достаточно контекста, дешевле по токенам
    ];

    const r = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'grok-4', // См. INSTRUCTIONS_RU.md — можно заменить на новую модель, когда выйдет
        messages: xaiMessages,
        max_tokens: 200,
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error('xAI chat error:', r.status, errText);
      return json({ reply: 'Sorry, I had a hiccup — please call us at (305) 859-3953 or use "Request a callback".' }, 200);
    }

    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content || 'Please call us at (305) 859-3953.';
    return json({ reply });
  } catch (e) {
    console.error('Chat route error:', e);
    return json({ reply: 'Something went wrong — please call us at (305) 859-3953.' }, 200);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
