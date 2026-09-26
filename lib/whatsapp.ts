import { GOOGLE_ADS_ID } from '@/lib/analytics';

// WhatsApp contact: Mikhail Kozlov's mobile, (971) 998-7313. Deliberately a
// different number from the office/call-tracking line (305) 859-3953, so the
// Google forwarding-number swap (mkCallSwap in lib/analytics.ts), which only
// matches tel: links and the 305 number, never touches these links.
export const WHATSAPP_NUMBER = '19719987313';

type Lang = 'en' | 'es' | 'ru';

const TEXT: Record<Lang, string> = {
  en: "Hi, I'd like to get an insurance quote.",
  es: 'Hola, me gustaría una cotización de seguro.',
  ru: 'Здравствуйте, хочу узнать о страховке.',
};

const LABEL: Record<Lang, string> = {
  en: 'Chat on WhatsApp',
  es: 'Escríbenos por WhatsApp',
  ru: 'Написать в WhatsApp',
};

const pick = (lang: string): Lang => (lang === 'es' || lang === 'ru' ? lang : 'en');

/** https://wa.me/19719987313?text=<prefilled message in the page language> */
export function whatsappUrl(lang: string): string {
  // encodeURIComponent leaves the apostrophe in "I'd" as-is; %27 keeps the
  // href identical in raw HTML and in the DOM.
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(TEXT[pick(lang)]).replace(/'/g, '%27')}`;
}

export function whatsappLabel(lang: string): string {
  return LABEL[pick(lang)];
}

/** Plain GA/Ads event (not a Google Ads conversion action). */
export function trackWhatsAppClick(lang: string, placement: string) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', 'whatsapp_click', {
    send_to: GOOGLE_ADS_ID,
    lang: pick(lang),
    page_path: window.location.pathname,
    link_location: placement,
  });
}
