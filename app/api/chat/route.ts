import { Resend } from 'resend';

const AGENCY_EMAIL = process.env.AGENCY_EMAIL || 'mkagency2020@hotmail.com';

const SYSTEM_PROMPT = `You are Mike's AI assistant on the M&K Agency website (mkagencyinc.com), a licensed independent insurance agency in Florida City, FL, serving all of Florida.

Rules:
- Answer questions about auto, home/condo, commercial, and life insurance in Florida. Be brief, friendly, and helpful.
- For quotes, always collect: name, phone, ZIP code, and what they need insured — then tell them a licensed agent will call them back.
- Encourage the customer to call (305) 247-8877 or leave their phone number for a callback.
- Never quote a price. Never promise coverage or claim approval — you are not a licensed agent.
- Never mention specific carrier names or guarantee coverage.
- If asked something outside insurance, politely redirect back to insurance topics.
- If the visitor writes in Spanish, reply in Spanish. If in Russian, reply in Russian. Otherwise reply in English.`;

export async function POST(req) {
  try {
    if (!process.env.XAI_API_KEY) {
      return json({ reply: 'Chat is not configured yet — please call us at (305) 247-8877.' }, 200);
    }

    const { messages, lang } = await req.json();

    const xaiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.slice(-10), // last 10 messages — enough context, cheaper on tokens
    ];

    const r = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.XAI_MODEL || 'grok-4',
        messages: xaiMessages,
        max_tokens: 200,
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error('xAI chat error:', r.status, errText);
      return json(
        { reply: 'Sorry, I had a hiccup — please call us at (305) 247-8877 or use "Request a callback".' },
        200
      );
    }

    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content || 'Please call us at (305) 247-8877.';

    // Forward a copy of the conversation to the agency inbox (fire-and-forget)
    if (process.env.RESEND_API_KEY) {
      const transcript = [...messages, { role: 'assistant', content: reply }]
        .map((m) => `<p><b>${m.role === 'user' ? 'Visitor' : 'Mike (AI)'}:</b> ${m.content}</p>`)
        .join('');

      const resend = new Resend(process.env.RESEND_API_KEY);
      resend.emails
        .send({
          from: process.env.RESEND_FROM || 'M&K Website <onboarding@resend.dev>',
          to: AGENCY_EMAIL,
          subject: `💬 Website chat (${lang || 'en'}) — ${new Date().toLocaleString('en-US', {
            timeZone: 'America/New_York',
          })}`,
          html: `<h3>Chat transcript from website</h3>${transcript}`,
        })
        .catch((err) => console.error('Chat email forward error:', err));
    }

    return json({ reply });
  } catch (e) {
    console.error('Chat route error:', e);
    return json({ reply: 'Something went wrong — please call us at (305) 247-8877.' }, 200);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
