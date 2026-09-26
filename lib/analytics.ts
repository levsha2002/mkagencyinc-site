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

// Website call conversion ("Website calls 60s+": Google forwarding number,
// calls of 60s+ count). gtag swaps visible occurrences of this number for a
// Google forwarding number for ad visitors and counts qualifying calls.
// Format must match the number as it appears in page text.
export const CALL_CONVERSION_SEND_TO = `${GOOGLE_ADS_ID}/P8qXCI3yzIYdELj-waBE`;
export const CALL_CONVERSION_PHONE = '(305) 859-3953';

/** Inline script: gtag bootstrap + base Ads config + the website call
 *  conversion config with a `phone_conversion_callback`.
 *
 *  Google docs (support.google.com/google-ads/answer/6095883): the callback is
 *  invoked with (formatted_number, mobile_number) only when a Google forwarding
 *  number was issued (visitor came from an ad). formatted_number uses the same
 *  format as phone_conversion_number, i.e. "(305) XXX-XXXX"; mobile_number is
 *  the tel:-URI number (docs show both "18001234567" and "+18001234567", so
 *  only its digits are used). Without a callback Google only swaps text, so
 *  tel: links (the main path on mobile) would still dial the real number and
 *  the 60s+ call conversion would never see those calls.
 *
 *  The swap edits text nodes / href attributes in place (never replaces DOM
 *  nodes React owns), skips <script>/JSON-LD, inputs and sms: links (SMS stays
 *  on the real number), and a MutationObserver re-applies it to anything
 *  rendered later (client-side navigation, chat replies, modals). It only
 *  starts once Google hands us a number, so ordinary visitors pay nothing. */
export function gtagInitScript() {
  return String.raw`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}', { allow_enhanced_conversions: true });
(function(){
  var NUM_RE=/\(?\b305\)?[\s.\-]*859[\s.\-]*3953\b/g;
  var REAL='3058593953';
  var SKIP={SCRIPT:1,STYLE:1,NOSCRIPT:1,TEXTAREA:1,INPUT:1,SELECT:1,OPTION:1,TEMPLATE:1};
  var S=null;
  function isReal(href){
    if(!href || href.slice(0,4).toLowerCase()!=='tel:') return false;
    var d=href.slice(4).split(/[;?]/)[0].replace(/\D/g,'');
    if(d.length===11 && d.charAt(0)==='1') d=d.slice(1);
    return d===REAL;
  }
  function fixAnchor(a){
    var h=a.getAttribute('href');
    if(isReal(h) && h!==S.tel) a.setAttribute('href', S.tel);
  }
  function fixText(n){
    var v=n.nodeValue;
    if(!v || v.indexOf('3953')<0) return;
    var p=n.parentNode;
    if(!p || p.nodeType!==1) return;
    if(SKIP[p.nodeName] || p.isContentEditable) return;
    if(p.closest && p.closest('a[href^="sms:"],script,style,noscript,textarea')) return;
    NUM_RE.lastIndex=0;
    if(NUM_RE.test(v)){ NUM_RE.lastIndex=0; n.nodeValue=v.replace(NUM_RE, S.formatted); }
  }
  function scan(root){
    if(!root) return;
    if(root.nodeType===3){ fixText(root); return; }
    if(root.nodeType!==1 && root.nodeType!==9 && root.nodeType!==11) return;
    if(root.nodeType===1){ if(SKIP[root.nodeName]) return; if(root.nodeName==='A') fixAnchor(root); }
    if(root.querySelectorAll){ var as=root.querySelectorAll('a[href^="tel:"],a[href^="TEL:"]'); for(var i=0;i<as.length;i++) fixAnchor(as[i]); }
    var w=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), t;
    while((t=w.nextNode())) fixText(t);
  }
  function start(){
    scan(document.body);
    if(S.obs || !window.MutationObserver) return;
    S.obs=new MutationObserver(function(ms){
      for(var i=0;i<ms.length;i++){
        var m=ms[i];
        if(m.type==='childList'){ for(var j=0;j<m.addedNodes.length;j++) scan(m.addedNodes[j]); }
        else if(m.type==='characterData'){ fixText(m.target); }
        else if(m.type==='attributes' && m.target.nodeName==='A'){ fixAnchor(m.target); }
      }
    });
    S.obs.observe(document.body, {childList:true, subtree:true, characterData:true, attributes:true, attributeFilter:['href']});
  }
  window.mkCallSwap=function(formatted_number, mobile_number){
    var d=String(mobile_number||formatted_number||'').replace(/\D/g,'');
    if(d.length===10) d='1'+d;
    if(d.length!==11 || d.slice(1)===REAL || !formatted_number) return;
    S=S||{};
    S.formatted=String(formatted_number); S.tel='tel:+'+d;
    if(document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  };
})();
gtag('config', '${CALL_CONVERSION_SEND_TO}', {
  'phone_conversion_number': '${CALL_CONVERSION_PHONE}',
  'phone_conversion_callback': window.mkCallSwap
});
`.trim();
}

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
