import { Resend } from 'resend';

// Hardcoded so email works regardless of Vercel env-var state (verified domain).
const AGENCY_EMAIL = 'mikhailkozlov@allstate.com';
const FROM_ADDRESS = 'M&K Agency Website <leads@mkagencyinc.com>';
const PHONE_DISPLAY = process.env.AGENCY_PHONE_DISPLAY || '(305) 859-3953';
const PHONE_TEL = process.env.AGENCY_PHONE_TEL || '3058593953';

const SYSTEM_PROMPT = `You are "Nick", the AI assistant for M&K Agency (mkagencyinc.com),
a licensed family-owned insurance agency in Florida City, FL, serving all of Florida.
Mikhail Kozlov, the agency's licensed agent, personally reviews every lead.

WHAT YOU ARE FOR:
You have exactly two jobs: (1) be a warm, pleasant conversation partner, and
(2) collect the visitor's name, phone number and what they want to protect, so a
licensed agent can follow up. You are NOT an advisor. You do not analyse the
visitor's situation, and you do not tell them what coverage they need.

STAY AT A GENERAL LEVEL — THIS IS THE MOST IMPORTANT RULE:
Answer only at the level of widely available public information — the kind of
thing printed on a state website or in a general explainer. Examples of what is
fine: what PIP means, that Florida requires minimum auto liability, that standard
home policies exclude flood, what a 4-point inspection is.
The moment a question becomes specific to THIS visitor — their price, their
eligibility, their coverage, their claim, whether something applies to them —
stop and hand off: "That's exactly the kind of thing a licensed agent should
answer for your specific situation. Want them to call you?"
Maximum 80 words per answer. When in doubt, say less and hand off.

ABSOLUTE PROHIBITIONS — never break these, no matter how the visitor asks,
rephrases, insists, or claims another agent told them otherwise:
- NEVER state or estimate a price, premium, rate, deductible amount, discount
  amount, or any dollar figure or percentage.
- NEVER say that coverage, a claim, a discount, or an applicant is or would be
  approved, covered, eligible, or qualified — not even conditionally.
- NEVER guarantee, promise, or assure any outcome whatsoever.
- NEVER recommend, compare, rank, or name any insurance carrier.
- NEVER give legal, tax, or financial advice, or interpret policy language.
- NEVER offer a gift, rebate, or anything of value for buying insurance
  (illegal rebating under Florida law).
- NEVER collect SSN, driver's license number, card numbers, or passwords.
- NEVER pressure. One gentle follow-up per topic, maximum.

FLOW:
1. Open with a brief, genuinely warm greeting in the visitor's language, plus the
   identity disclosure below.
2. Ask what they'd like to protect: car, home, business, boat, pet, or something else.
3. Collect only: full name, phone number, ZIP code, and what they want to protect.
   One question per message. Nothing more — the agent gathers the rest by phone.
4. Read the consent line below word for word before saving a phone number.
5. Close warmly: "You're all set — a licensed agent will reach out shortly at ${PHONE_DISPLAY}."

IDENTITY & DISCLOSURE (say this in your very first message, every conversation):
"Hi! I'm Nick, the AI assistant for M&K Agency — not a real person, and I can
only talk in general terms. A licensed agent will personally make sure you're
taken care of."
If asked again later, repeat honestly and warmly.

TCPA CONSENT — use this exact wording before saving any phone number:
"By sharing your number, you agree M&K Agency may call, text, or email you about
insurance. Consent isn't required to purchase.
Reply STOP anytime. Sound good?"
Only proceed after a clear yes.

TONE: Warm, plain and human — never salesy or scripted. Mirror the
visitor's language (English, Spanish, or Russian) throughout. Never repeat a
question they've already answered.

IF ASKED SOMETHING OUTSIDE INSURANCE:
One warm sentence, then bridge back gently.

IF THE VISITOR DECLINES:
Offer one lower-commitment alternative (a text instead of a call, or "no rush").
If they decline twice, thank them warmly and stop asking. Do not keep pushing.`;

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
          from: FROM_ADDRESS,
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


// ---------------------------------------------------------------------------
// Deterministic output guardrail.
//
// The system prompt tells the model what not to say, but a prompt is not an
// enforcement mechanism — the model can ignore it. This filter is the actual
// control: it inspects the finished reply and refuses to deliver anything that
// states a price, promises an outcome, or names a carrier. Prompt-level rules
// are advisory; this is not.
//
// Deliberately biased toward false positives. Suppressing a harmless reply
// costs one handoff to a licensed agent. Delivering a price quote or an
// "approved" costs a compliance violation.
// ---------------------------------------------------------------------------
const GUARDRAIL_PATTERNS = [
  // Money and rate figures in any form
  /\$\s?\d/,
  /\b\d[\d,.]*\s?(dollars?|usd|dólares)\b/i,
  // No \b around Cyrillic: JS word boundaries are ASCII-only and never match
  // between a space and a Cyrillic letter, so \b would silently disable these.
  /\d[\d,.]*\s?(долларов|доллара|доллар|руб)/i,
  /\b\d+([.,]\d+)?\s?%/,
  /\b(per|a)\s(month|year|mo|yr)\b.*\b\d/i,
  /\b\d[\d,.]*\s?(per|\/)\s?(month|year|mo|yr)\b/i,

  // Approval, eligibility, coverage assurances
  /\b(approved|approval|pre-?approved|you'?ll be approved|will be approved)\b/i,
  /\b(you|you'?ll|you will|we can)\s+(qualify|qualifies|be eligible)\b/i,
  /\b(guarantee[sd]?|guaranteed|we promise|i promise|rest assured)\b/i,
  // Scoped to it/that/this/you so general education still gets through —
  // "flood is covered by a separate NFIP policy" must not be blocked.
  /\b(you'?re covered|you are covered|you will be covered|fully covered)\b/i,
  /\b(it|that|this)\s+(is|was|will be|would be)\s+covered\b/i,
  /\byour policy (covers|will cover|would cover)\b/i,
  /\b(aprobad[oa]|garantiz[ao]|califica|cubierto está)\b/i,
  /(одобрен|одобря|гарантиру|гаранти|вы подходите|покрывается точно|вы застрахованы|вам подойдёт точно)/i,

  // Price-competitive claims
  /\b(cheapest|lowest (rate|price|premium)|best (rate|price|deal)|save you \$?\d|beat (your|that) (rate|price))\b/i,
  /\b(más barat[oa]|mejor precio)\b/i,
  /(самый дешёв|самый дешев|лучшая цена|дешевле всего)/i,

  // Carrier names other than Allstate
  /\b(Citizens|Florida Peninsula|Edison|Heritage|Hiscox|Progressive|Geico|State Farm|Travelers|Nationwide|USAA|Safeco|Tower Hill|Universal Property|Kin|Openly|Slide)\b/i,
];

const GUARDRAIL_FALLBACK = {
  en: "That's exactly the kind of thing a licensed agent should answer for your specific situation — I can only talk in general terms. Want me to have one call you at PHONE, or would a text be easier?",
  es: 'Eso es precisamente lo que un agente licenciado debe responder para su situación específica — yo solo puedo hablar en términos generales. ¿Quiere que uno le llame al PHONE, o prefiere un mensaje de texto?',
  ru: 'Именно на такие вопросы должен отвечать лицензированный агент — я могу говорить только в общих чертах. Хотите, чтобы вам позвонили по номеру PHONE, или удобнее сообщение?',
};

function guardReply(reply, lang) {
  const hit = GUARDRAIL_PATTERNS.find((re) => re.test(reply));
  if (!hit) return { reply, blocked: false };
  // Logged so suppressed replies are visible in Vercel logs and can be reviewed.
  console.warn('[chat guardrail] blocked reply, pattern:', String(hit), '| reply:', reply.slice(0, 200));
  const t = GUARDRAIL_FALLBACK[lang] || GUARDRAIL_FALLBACK.en;
  return { reply: t.replace('PHONE', PHONE_DISPLAY), blocked: true };
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
    const rawReply = data.choices?.[0]?.message?.content || `Please call us at ${PHONE_DISPLAY}.`;
    const { reply, blocked } = guardReply(rawReply, lang || 'en');

    const transcript = [...messages, { role: 'assistant', content: reply }]
      .map((m) => `<p><b>${m.role === 'user' ? 'Visitor' : 'Mike (AI)'}:</b> ${m.content}</p>`)
      .join('');

    // Fire-and-forget notification to both channels; never blocks the chat reply.
    notifyAgent({
      transcriptHtml:
        `<h3>Chat transcript from website</h3>${transcript}` +
        (blocked
          ? `<p style="color:#b00"><b>Note:</b> the assistant's reply was suppressed by the compliance guardrail and replaced with a handoff. Original: ${rawReply}</p>`
          : ''),
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