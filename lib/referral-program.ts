// Referral program: shared constants for the /[lang]/referral "Two Doors" page
// (components/referral/*) and its API route (app/api/referral-lead).
// Client-safe: no secrets, no server imports.
//
// COMPLIANCE, read this before editing any wording here or on the page:
// - Florida anti-rebating: nothing of value is offered for buying a policy.
//   This page deliberately offers no reward or thank-you gift at all. If one is
//   ever added it must be per referral, never tied to a purchase, and capped at
//   $100 per person per calendar year. Get the owner's written approval first.
// - RESPA (realtors, lenders, title): partners get no referral fees, gifts or
//   payments of any kind, and the partner form says so in plain words.
// - Consent text is stored with every submission, exactly as shown, together
//   with its version. When you change a consent sentence, bump the version so
//   stored leads keep pointing at the words the visitor actually saw.

export type Lang = 'en' | 'es' | 'ru';
export const LANGS: Lang[] = ['en', 'es', 'ru'];

export const REFERRAL_CONSENT_VERSION = 'ref-v1-2026-09-26';
export const PARTNER_CONSENT_VERSION = 'partner-v1-2026-09-26';

export function pickLang(lang?: string): Lang {
  return lang === 'es' || lang === 'ru' ? lang : 'en';
}

/** Consent for "Refer a friend": the referrer confirms the friend agreed to be
 *  contacted. Mirrors the site-wide TCPA/FTSA wording in lib/consent.ts
 *  (not a condition of purchase, DNC, rates, STOP). */
export const REFERRAL_CONSENT: Record<Lang, string> = {
  en: 'I confirm that my friend agreed that M&K Agency Inc. may contact them about insurance by phone call, text message or email at the phone number I provided, even if that number is on a Do-Not-Call list. M&K Agency Inc. may also contact me about this referral. Consent is not a condition of purchase, and no purchase is required. Message frequency varies; message and data rates may apply. Reply STOP to opt out of texts at any time.',
  es: 'Confirmo que mi amigo aceptó que M&K Agency Inc. le contacte sobre seguros por llamada telefónica, mensaje de texto o correo electrónico al número que proporcioné, incluso si ese número está en una lista de No Llamar. M&K Agency Inc. también puede contactarme a mí sobre esta recomendación. El consentimiento no es una condición de compra y no se requiere ninguna compra. La frecuencia de los mensajes varía; pueden aplicarse tarifas de mensajes y datos. Responda STOP en cualquier momento para dejar de recibir textos.',
  ru: 'Я подтверждаю, что мой знакомый согласился, чтобы M&K Agency Inc. связалась с ним по вопросам страхования по телефону, SMS или электронной почте по указанному мной номеру, даже если этот номер внесён в список «Не звонить». M&K Agency Inc. также может связаться со мной по поводу этой рекомендации. Согласие не является условием покупки, и покупка не требуется. Частота сообщений может меняться; могут применяться тарифы за сообщения и передачу данных. Ответьте STOP, чтобы отказаться от SMS в любое время.',
};

/** Consent for "Become a referral partner". States the no-payment rule. */
export const PARTNER_CONSENT: Record<Lang, string> = {
  en: 'I agree that M&K Agency Inc. may contact me about a referral partnership by phone call, text message or email at the phone number and email I provided. I understand that no referral fees, gifts or payments of any kind are offered or paid. Message frequency varies; message and data rates may apply. Reply STOP to opt out of texts at any time.',
  es: 'Acepto que M&K Agency Inc. me contacte sobre una alianza de recomendaciones por llamada telefónica, mensaje de texto o correo electrónico al teléfono y correo que proporcioné. Entiendo que no se ofrecen ni se pagan comisiones por recomendación, regalos ni pagos de ningún tipo. La frecuencia de los mensajes varía; pueden aplicarse tarifas de mensajes y datos. Responda STOP en cualquier momento para dejar de recibir textos.',
  ru: 'Я соглашаюсь, что M&K Agency Inc. может связаться со мной по поводу партнёрства по телефону, SMS или электронной почте по указанным мной номеру и адресу. Я понимаю, что никакие вознаграждения за рекомендации, подарки или выплаты любого рода не предлагаются и не выплачиваются. Частота сообщений может меняться; могут применяться тарифы за сообщения и передачу данных. Ответьте STOP, чтобы отказаться от SMS в любое время.',
};

/** Exact consent string stored with the lead (body + privacy reference). */
export function consentFullText(kind: 'referral' | 'partner', lang?: string): string {
  const l = pickLang(lang);
  const body = kind === 'referral' ? REFERRAL_CONSENT[l] : PARTNER_CONSENT[l];
  return `${body} Privacy Policy: https://mkagencyinc.com/${l}/privacy`;
}

/** Partner business types. Values are stored in English; labels are per page language. */
export const PARTNER_TYPES = ['realtor', 'car_dealer', 'contractor', 'accountant', 'property_manager', 'other'] as const;
export type PartnerType = (typeof PARTNER_TYPES)[number];
export const PARTNER_TYPE_EN: Record<PartnerType, string> = {
  realtor: 'Realtor',
  car_dealer: 'Car dealer',
  contractor: 'Contractor',
  accountant: 'Accountant / tax preparer',
  property_manager: 'Property manager',
  other: 'Other',
};

export const LANG_NAME_EN: Record<Lang, string> = { en: 'English', es: 'Spanish', ru: 'Russian' };

/** 10-digit US number (optionally with a leading 1), else ''. */
export function normalizeUsPhone(raw: unknown): string {
  const d = String(raw ?? '').replace(/\D/g, '');
  if (d.length === 10) return d;
  if (d.length === 11 && d.startsWith('1')) return d.slice(1);
  return '';
}

export function isEmail(raw: unknown): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(raw ?? '').trim());
}

/** "Your phone or email" field: valid if it is a US phone or an email. */
export function isPhoneOrEmail(raw: unknown): boolean {
  return !!normalizeUsPhone(raw) || isEmail(raw);
}
