// One TCPA / Florida FTSA consent text for every lead form on the site.
//
// Before this file there were three different consent wordings (product
// forms, /quote and the Talk-to-Agent modal) and most API routes stored only
// `consent: true`. For a consent dispute you need the exact words the visitor
// agreed to, so every form now renders the text from here and sends
// `consent_text` + `consent_text_version` with the lead. When the wording
// changes, bump CONSENT_TEXT_VERSION so stored leads keep pointing at the
// version the visitor actually saw.
//
// Wording notes: no mention of automated / prerecorded / AI calls (the agency
// does not make them), keeps "not a condition of purchase", DNC, STOP and
// message-and-data-rates language.

export const CONSENT_TEXT_VERSION = 'v3-2026-09-25';

type L = 'en' | 'es' | 'ru';

const TEXT: Record<L, { body: string; privacyLabel: string; privacyPrefix: string }> = {
  en: {
    body:
      'By checking this box, I agree that M&K Agency Inc. may contact me about insurance by phone call, text message or email at the phone number and email I provide, even if my number is on a Do-Not-Call list. Consent is not a condition of purchase. Message frequency varies; message and data rates may apply. Reply STOP to opt out of texts at any time.',
    privacyPrefix: 'See our',
    privacyLabel: 'Privacy Policy',
  },
  es: {
    body:
      'Al marcar esta casilla, acepto que M&K Agency Inc. me contacte sobre seguros por llamada telefónica, mensaje de texto o correo electrónico al teléfono y correo que proporcione, incluso si mi número está en una lista de No Llamar. El consentimiento no es una condición de compra. La frecuencia de los mensajes varía; pueden aplicarse tarifas de mensajes y datos. Responda STOP en cualquier momento para dejar de recibir textos.',
    privacyPrefix: 'Consulte nuestra',
    privacyLabel: 'Política de Privacidad',
  },
  ru: {
    body:
      'Отмечая это поле, я соглашаюсь, что M&K Agency Inc. может связываться со мной по вопросам страхования по телефону, SMS или электронной почте по указанным мной номеру и адресу, даже если мой номер внесён в список «Не звонить». Согласие не является условием покупки. Частота сообщений может меняться; могут применяться тарифы за сообщения и передачу данных. Ответьте STOP, чтобы отказаться от SMS в любое время.',
    privacyPrefix: 'См. нашу',
    privacyLabel: 'Политику конфиденциальности',
  },
};

function pick(lang?: string): L {
  return lang === 'es' || lang === 'ru' ? lang : 'en';
}

export function getConsent(lang?: string) {
  const l = pick(lang);
  const t = TEXT[l];
  return {
    ...t,
    lang: l,
    privacyHref: `/${l}/privacy`,
    version: CONSENT_TEXT_VERSION,
    // Exact string stored with the lead (body + privacy reference).
    fullText: `${t.body} ${t.privacyPrefix} ${t.privacyLabel} (https://mkagencyinc.com/${l}/privacy).`,
  };
}

/** Fields added to every lead API payload. Extra JSON fields are ignored by
 *  routes that don't know them, so this is backward compatible. */
export function consentPayload(lang?: string) {
  const c = getConsent(lang);
  return {
    consent: true,
    consent_text: c.fullText,
    consent_text_version: c.version,
    consent_user_agent: typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 500) : '',
    page_url: typeof window !== 'undefined' ? window.location.href.slice(0, 500) : '',
  };
}
