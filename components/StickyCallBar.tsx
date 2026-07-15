import { getDict, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';

// Mobile-only sticky bottom bar — always-visible "Call" + "Text" actions.
// Hidden on desktop via CSS (.sticky-call-bar, see globals.css). Sits on
// every page (mounted from the root layout) so it's there no matter which
// page a visitor lands on from search/ads.
export default function StickyCallBar({ lang }: { lang: string }) {
  const t = getDict(lang);
  return (
    <div className="sticky-call-bar" role="navigation" aria-label="Quick contact">
      <a href={`tel:${PHONE_TEL}`} className="scb-btn scb-call">
        📞 {t.call247}
      </a>
      <a href={`sms:${PHONE_TEL}`} className="scb-btn scb-text">
        💬 {t.contact.textUs}
      </a>
    </div>
  );
}
