// Small constants for the gap-insurance page, kept separate from the page copy
// so the site-wide WhatsApp button can import them without the full copy.
import type { Lang } from '@/lib/coverage-check';

export const GAP_PATH = '/gap-insurance';
export const GAP_SOURCE = 'gap-insurance';
/** Canonical note sent to /api/callback (whitelisted there). */
export const GAP_NOTE = 'Gap insurance';

/** Gap-specific prefilled WhatsApp message (also used by the floating button). */
export const GAP_WA_TEXT: Record<Lang, string> = {
  en: "Hi! I just got a new car and I'd like to ask about gap insurance.",
  es: '¡Hola! Acabo de comprar un carro nuevo y quisiera información sobre el seguro GAP.',
  ru: 'Здравствуйте! У меня новая машина, хочу узнать про GAP-страховку.',
};

