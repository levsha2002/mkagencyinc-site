'use client';

import { PHONE_TEL } from '@/lib/dictionaries';
import { GOOGLE_ADS_ID } from '@/lib/analytics';
import WhatsAppLink, { WhatsAppIcon } from '@/components/WhatsAppLink';
import { CC, pickLang } from '@/lib/coverage-check';

// "Send us your policy – we'll check your coverage" (coverage-check pages,
// near the hero and in the final CTA). Two buttons:
//   WhatsApp → wa.me with a prefilled "here's my policy" message; fires the
//              standard whatsapp_click plus send_policy_whatsapp.
//   Text     → the site's usual sms: link to the office number; fires
//              send_policy_text (the site-wide tel:/sms: listener also sends
//              its usual sms_click event).
function track(event: 'send_policy_whatsapp' | 'send_policy_text', lang: string, placement: string) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', event, { send_to: GOOGLE_ADS_ID, lang, page_path: window.location.pathname, link_location: placement });
}

export default function SendPolicyCta({ lang: rawLang, placement }: { lang: string; placement: 'hero' | 'final' }) {
  const lang = pickLang(rawLang);
  const t = CC[lang].sendPolicy;
  return (
    <div className={`cc-send cc-send-${placement}`}>
      <p className="cc-send-title">📄 {t.title}</p>
      <div className="cc-send-btns">
        <WhatsAppLink
          lang={lang}
          placement={`send_policy_${placement}`}
          text={t.waText}
          className="cc-send-btn cc-send-wa"
          onClick={() => track('send_policy_whatsapp', lang, placement)}
        >
          <WhatsAppIcon size={18} /> {t.waBtn}
        </WhatsAppLink>
        <a
          href={`sms:${PHONE_TEL}`}
          className="cc-send-btn cc-send-text"
          onClick={() => track('send_policy_text', lang, placement)}
        >
          💬 {t.textBtn}
        </a>
      </div>
      <p className="cc-send-line">{t.line}</p>
    </div>
  );
}
