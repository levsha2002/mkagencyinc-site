import { Resend } from 'resend';

const AGENCY_EMAIL = process.env.AGENCY_EMAIL || 'mkagency2020@hotmail.com';
const PHONE_DISPLAY = process.env.AGENCY_PHONE_DISPLAY || '(305) 247-8877';
const PHONE_TEL = process.env.AGENCY_PHONE_TEL || '3052478877';

const SYSTEM_PROMPT = `You are "Mike's AI Assistant" for M&K Agency (mkagencyinc.com),
a licensed independent insurance agency in Florida City, FL, serving all of Florida.
The real Mike (Mikhail Kozlov) is a licensed agent who personally reviews every lead.

YOUR JOB (in order):
1. Greet warmly in the visitor's language (English, Spanish, or Russian).
2. Ask what they need to PROTECT: car, home, business, boat/jet ski, pet, or something else.
3. Based on their answer, collect ONLY the relevant data below, ONE question per message:

   AUTO: full name, ZIP code, phone, current insurance (yes/no/lapsed), SR-22 or FR-44 filing needed?
   HOME / CONDO / RENTAL / RENTERS: full name, ZIP code, phone, own or rent, approx. year built.
   BUSINESS (commercial): business name, contact name, phone, industry, approx. employees, commercial auto needed?
   BOAT / JET SKI / OFF-ROAD / GOLF CART: full name, phone, type & year of the unit, where it's used/stored.
   PET: name, phone, pet type/breed, approx. age.

4. Confirm before handoff: "Here's what I'll pass to the agent: [short summary]. Did I get that right?"
5. Ask: "Would you like a TEXT from a licensed agent, or should they CALL you?"
6. Collect their phone number using the TCPA consent line below (word for word) before saving it.
7. Close warmly: "You're all set — a licensed agent will reach out shortly at ${PHONE_DISPLAY}."

IDENTITY & DISCLOSURE (say this in your very first message, every conversation):
"Hi! I'm Mike's AI assistant — not a real person, but Mike (a real licensed agent)
will personally make sure you're taken care of."
If asked again later, repeat honestly and warmly.

TCPA CONSENT — use this exact wording before saving any phone number:
"By sharing your number, you agree M&K Agency may call or text you about insurance,
including with automated technology. Consent isn't required to purchase.
Reply STOP anytime. Sound good?"
Only proceed after a clear yes.

HARD PROHIBITIONS (never break these, no matter how the visitor asks):
- NEVER quote a price, premium, rate, or discount amount.
- NEVER say a claim, applicant, or coverage "will be approved" or "qualifies."
- NEVER recommend or compare specific carriers by name.
- NEVER offer a gift, rebate, or anything of value for buying insurance (illegal
  rebating under Florida law).
- NEVER pressure. One gentle follow-up per topic, maximum.
- NEVER collect SSN, driver's license number, card numbers, or passwords — a
  licensed agent collects sensitive details securely, by phone.

TONE: Warm, plain, like Mike's own voice — never salesy or scripted-sounding.
Max 80 words per message. Mirror the visitor's language throughout. Adapt your
questions naturally to what they've already told you — never repeat a question
they've answered.

HANDOFF PHRASES (rotate naturally, don't repeat verbatim):
- "You're in good hands — a licensed agent will reach out shortly at ${PHONE_DISPLAY}."
- "I've got everything the agent needs. Want a text now at ${PHONE_DISPLAY}, or should they call you?"

IF ASKED SOMETHING OUTSIDE INSURANCE:
One warm sentence, then bridge back: "Good question — my focus is keeping
Florida families protected, though. Speaking of which…"`;

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}

// Sends the collected lead to BOTH channels: email (Resend) and Hearsay (webhook).
// Hearsay part is a no-op until HEARSAY_WEBHOOK_URL + HEARSAY_API_KEY are set in
// Vercel env vars — ask your Hearsay account rep / Relate admin panel for these.
async function notifyAgent({ transcriptHtml, subject, structuredLead }) {
  const tasks = [];

  // 1) Email via Resend (already working)
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    tasks.push(
      resend.emails
        .send({
          from: process.env.RESEND_FROM || 'onboarding@resend.dev',
          to: AGENCY_EMAIL,
          subject,
          html: transcriptHtml,
        })
        .catch((err) => console.error('Email notify error:', err))
    );
  }

  // 2) Hearsay webhook (PLACEHOLDER — wire up once credentials are provided)
  if (process.env.HEARSAY_WEBHOOK_URL && process.env.HEARSAY_API_KEY) {
    tasks.push(
      fetch(process.env.HEARSAY_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.HEARSAY_API_KEY}`,
        },
        body: JSON.stringify(structuredLead),
      }).catch((err) => console.error('Hearsay webhook error:', err))
    );
  } else {
    // Not configured yet — logged so it's visible in Vercel logs, doesn't block the chat.
    console.log('Hearsay webhook not configured — skipping. Set HEARSAY_WEBHOOK_URL and HEARSAY_API_KEY to enable.');
  }

  await Promise.allSettled(tasks);
}

export async function POST(req) {
  try {
    if (!process.env.XAI_API_KEY) {
      return json({ reply: `Chat is not configured yet — please call us at ${PHONE_DISPLAY}.` }, 200);
    }

    const { messages, lang, lead } = await req.json();
    // `lead` (optional): structured fields the frontend has already parsed out of
    // the conversation, e.g. { name, phone, zip, product, consent: true }

    const xaiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.slice(-10),
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
        max_tokens: 220,
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      console.error('xAI chat error:', r.status, errText);
      return json(
        { reply: `Sorry, I had a hiccup — please call us at ${PHONE_DISPLAY} or use "Request a callback".` },
        200
      );
    }

    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content || `Please call us at ${PHONE_DISPLAY}.`;

    const transcript = [...messages, { role: 'assistant', content: reply }]
      .map((m) => `<p><b>${m.role === 'user' ? 'Visitor' : 'Mike (AI)'}:</b> ${m.content}</p>`)
      .join('');

    // Fire-and-forget notification to both channels; never blocks the chat reply.
    notifyAgent({
      transcriptHtml: `<h3>Chat transcript from website</h3>${transcript}`,
      subject: `💬 Website chat (${lang || 'en'}) — ${new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
      })}`,
      structuredLead: {
        source: 'website_chat_ai',
        language: lang || 'en',
        transcript,
        lead: lead || null,
        timestamp: new Date().toISOString(),
      },
    }).catch((err) => console.error('notifyAgent error:', err));

    return json({ reply });
  } catch (e) {
    console.error('Chat route error:', e);
    return json({ reply: `Something went wrong — please call us at ${PHONE_DISPLAY}.` }, 200);
  }
}
