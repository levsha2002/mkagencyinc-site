import { NextResponse } from 'next/server';
import { PHONE_DISPLAY } from '@/lib/dictionaries';

const SYSTEM = `You are "Mike's assistant" — the friendly AI assistant of M&K Agency Inc.,
an independent insurance agency in Florida City, FL serving all of Florida.
Lines of business: auto, home/condo, commercial, and life insurance.
Languages: reply in the same language the customer writes in (English, Spanish, or Russian).
Rules:
- Be brief, warm, and helpful. 2-4 sentences max per reply.
- NEVER quote exact prices; explain that a licensed agent will prepare a personalized quote.
- NEVER mention any specific carrier brand names.
- Always try to move toward getting the visitor's phone number or the quote form on the page.
- Office phone (calls & texts): ${PHONE_DISPLAY}. Hours: Mon-Fri 9am-6pm ET.
- If asked something unrelated to insurance, politely steer back.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!process.env.XAI_API_KEY) {
      return NextResponse.json({ reply: `Please call us at ${PHONE_DISPLAY} — a licensed agent will help you right away.` });
    }
    const res = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'grok-3-mini',
        messages: [{ role: 'system', content: SYSTEM }, ...messages.slice(-12)],
        max_tokens: 300,
      }),
    });
    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content || `Please call us at ${PHONE_DISPLAY}.`;
    return NextResponse.json({ reply });
  } catch (e) {
    console.error('chat error', e);
    return NextResponse.json({ reply: `Please call us at ${PHONE_DISPLAY}.` });
  }
}
