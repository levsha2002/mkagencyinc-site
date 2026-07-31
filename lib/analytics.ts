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
  // Not yet created in the Ads account. The GA4 event still fires, so the
  // action is observable in Analytics — it simply does not feed Ads bidding
  // until a conversion action exists and its label is added here.
  talknow_lead: process.env.NEXT_PUBLIC_ADS_LABEL_TALKNOW || null,
  quote_submit:
    process.env.NEXT_PUBLIC_ADS_LABEL_QUOTE || '-1BtCL2Fj9EcELj-waBE',
};

type Params = Record<string, string | number | boolean | undefined>;

/** Fires a named GA4 event plus, when a label is configured, the Ads conversion. */
export function trackConversion(action: ConversionAction, params: Params = {}) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;

  gtag('event', action, { ...params, send_to: GOOGLE_ADS_ID });

  const label = CONVERSION_LABELS[action];
  if (label) {
    gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${label}`, ...params });
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
    var a=t.closest('a[href^="tel:"], a[href^="sms:"]');
    if(!a) return;
    var href=a.getAttribute('href')||'';
    fire(href.slice(0,4)==='tel:' ? 'phone_call' : 'sms_click', href);
  }, true);
})();`.trim();
}
