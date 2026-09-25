// Google Ads / GA4 conversion tracking.
//
// Previously every form fired the SAME conversion label, and phone clicks —
// the primary action for a callback-only agency — fired nothing at all. Smart
// Bidding could not tell a phone call from a product quote, and could not see
// calls whatsoever, so it optimised toward the only thing it could observe.
//
// Each action below is tracked separately. Two signals are sent per action:
//   1. A named GA4 event, always. Works immediately with no setup and can be
//      imported into Google Ads as a conversion from the GA4 property.
//   2. A Google Ads conversion, only once a label is filled in below.

export const GOOGLE_ADS_ID = 'AW-18321801016';

export type ConversionAction =
  | 'phone_call'        // tap/click on a tel: link — the highest-intent signal we have
  | 'sms_click'         // tap/click on an sms: link
  | 'callback_request'  // "have an agent call me" form (LeadForm / quote page)
  | 'chat_lead'         // callback requested from inside the chat widget
  | 'talknow_lead'      // callback requested from the mobile Talk Now widget
  | 'quote_submit';     // product-specific quote form (InsuranceQuoteForm)

// Conversion labels from Google Ads → Goals → Conversions → (action) → Tag setup.
//
// Each label can be supplied as an environment variable so new conversions can
// be switched on from the Vercel dashboard without editing this file. The
// literal below is the fallback for the one action that already existed.
//
// NEXT_PUBLIC_ is required — these are read in the browser. Values are inlined
// at build time, so a redeploy is needed after adding one, but no code change.
//
// A null label is safe: the GA4 event still fires, only the Ads-side
// conversion is skipped. Nothing breaks while labels are pending.
export const CONVERSION_LABELS: Record<ConversionAction, string | null> = {
  // Created in Google Ads on 2026-07-30 under the "Contact" goal, source
  // mkagencyinc.com, manual event, primary, count = one.
  phone_call: process.env.NEXT_PUBLIC_ADS_LABEL_PHONE_CALL || 'vxzLCLXQuNkcELj-waBE',
  sms_click: process.env.NEXT_PUBLIC_ADS_LABEL_SMS_CLICK || '-6r1CLjQuNkcELj-waBE',
  callback_request:
    process.env.NEXT_PUBLIC_ADS_LABEL_CALLBACK || '-1BtCL2Fj9EcELj-waBE',
  chat_lead: process.env.NEXT_PUBLIC_ADS_LABEL_CHAT_LEAD || 'LgDxCKDLotkcELj-waBE',
  // The "Talk to Agent Now" modal is a lead form like any other, so until a
  // dedicated conversion action exists it reports into the same "Submit lead
  // form" action as the other forms (label below). Set
  // NEXT_PUBLIC_ADS_LABEL_TALKNOW to split it out later; the env var wins.
  talknow_lead: process.env.NEXT_PUBLIC_ADS_LABEL_TALKNOW || '-1BtCL2Fj9EcELj-waBE',
  quote_submit:
    process.env.NEXT_PUBLIC_ADS_LABEL_QUOTE || '-1BtCL2Fj9EcELj-waBE',
};

type Params = Record<string, string | number | boolean | undefined>;

/** Optional per-submission data for the Ads conversion. */
export type ConversionOptions = {
  /** Unique per submission — Google Ads de-duplicates conversions on it. */
  transactionId?: string;
  /** Raw visitor input; normalised before being handed to gtag user_data. */
  email?: string;
  phone?: string;
};

/** A fresh id for one form submission. */
export function newTransactionId(prefix = 'mk'): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return `${prefix}-${crypto.randomUUID()}`;
    }
  } catch {}
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/** US numbers to E.164 (+1XXXXXXXXXX). Returns '' when it can't be sure. */
export function toE164(raw?: string): string {
  if (!raw) return '';
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, '');
  if (trimmed.startsWith('+') && digits.length >= 10 && digits.length <= 15) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return '';
}

function normEmail(raw?: string): string {
  const e = (raw || '').trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? e : '';
}

/** Enhanced conversions: hand gtag the visitor's email / phone right before
 *  the conversion fires (gtag hashes them before sending). Forms reset right
 *  after a submit, so automatic page scraping could not find them. */
export function setUserData(opts: { email?: string; phone?: string } = {}) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;
  const email = normEmail(opts.email);
  const phone_number = toE164(opts.phone);
  if (!email && !phone_number) return;
  const data: Record<string, string> = {};
  if (email) data.email = email;
  if (phone_number) data.phone_number = phone_number;
  gtag('set', 'user_data', data);
}

/** Fires a named GA4 event plus, when a label is configured, the Ads conversion.
 *  Call only after the lead API has answered OK. */
export function trackConversion(action: ConversionAction, params: Params = {}, opts: ConversionOptions = {}) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;

  setUserData({ email: opts.email, phone: opts.phone });
  const transaction_id = opts.transactionId || newTransactionId(action);

  gtag('event', action, { ...params, transaction_id, send_to: GOOGLE_ADS_ID });

  const label = CONVERSION_LABELS[action];
  if (label) {
    gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${label}`, ...params, transaction_id });
  }
}

/** Inline script that captures every tel:/sms: click on the page via delegation.
 *  Delegation rather than per-link handlers: there are 27 such links across 20
 *  files today, and any added later are covered automatically. */
export function phoneClickTrackingScript() {
  const labels = JSON.stringify(CONVERSION_LABELS);
  return `
(function(){
  var ADS='${GOOGLE_ADS_ID}', L=${labels};
  function fire(action, href){
    if(typeof window.gtag!=='function') return;
    window.gtag('event', action, { send_to: ADS, link_url: href });
    if(L[action]) window.gtag('event','conversion',{ send_to: ADS+'/'+L[action], link_url: href });
  }
  document.addEventListener('click', function(e){
    var t=e.target;
    if(!t || !t.closest) return;
    // Off-site Allstate Lead Manager form: observable event only, NOT a
    // conversion (the lead itself happens on a page we can't tag).
    var o=t.closest('a[href*="leadmanagementlab.com"]');
    if(o){
      if(typeof window.gtag==='function') window.gtag('event','outbound_quote_click',{ send_to: ADS, link_url: o.getAttribute('href')||'', link_location: location.pathname });
      return;
    }
    var a=t.closest('a[href^="tel:"], a[href^="sms:"]');
    if(!a) return;
    var href=a.getAttribute('href')||'';
    fire(href.slice(0,4)==='tel:' ? 'phone_call' : 'sms_click', href);
  }, true);
})();`.trim();
}
