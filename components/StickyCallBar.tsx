import { getDict, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';

// Mobile-only sticky bottom bar — the ONE always-visible floating element on
// phones: "📞 (305) 859-3953 | 💬 Text". Hidden on desktop via CSS
// (.sticky-call-bar, see globals.css). The digits are shown (not just
// "Call us") so the number is visible above the fold on every page.
export default function StickyCallBar({ lang }: { lang: string }) {
  const t = getDict(lang);
  return (
    <div className="sticky-call-bar" role="navigation" aria-label="Quick contact">
      <a href={`tel:${PHONE_TEL}`} className="scb-btn scb-call" aria-label={`${t.call247} ${PHONE_DISPLAY}`}>
        📞 {PHONE_DISPLAY}
      </a>
      <a href={`sms:${PHONE_TEL}`} className="scb-btn scb-text">
        💬 {t.contact.textUs}
      </a>
    </div>
  );
}
