'use client';

import { useState } from 'react';
import Image from 'next/image';

// Share buttons for the referral page. Facebook/WhatsApp glyphs: Simple Icons (CC0). Every shared link carries UTM tags, so
// visits and referral leads coming from shares are attributed in GA4 and in the
// lead record (lib/attribution picks utm_* up on landing).
const FB = 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z';
const WA = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';
const SMS = 'M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2zm3 6v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z';
const LINK = 'M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a3 3 0 1 1 4.2 4.2l-2 2-1.4-1.4 2-2a1 1 0 1 0-1.4-1.4l-3.5 3.5a1 1 0 0 1-1.4 0zm2.8-2.8a1 1 0 0 1 0 1.4l-3.5 3.5a3 3 0 1 1-4.2-4.2l2-2 1.4 1.4-2 2a1 1 0 1 0 1.4 1.4l3.5-3.5a1 1 0 0 1 1.4 0z';

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d={d} />
  </svg>
);

export default function ShareBar({ lang, t }: { lang: string; t: any }) {
  const [copied, setCopied] = useState(false);
  const base = `https://mkagencyinc.com/${lang}/referral`;
  const url = (medium: string) => `${base}?utm_source=share&utm_medium=${medium}&utm_campaign=referral`;
  const text = t.shareText as string;

  const copy = async () => {
    const u = url('copy_link');
    try {
      await navigator.clipboard.writeText(u);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = u;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch {}
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="ref-sharebar">
      <div className="ref-qr">
        <Image src={`/images/referral/qr-${lang}.png`} alt={t.qrAlt} width={112} height={112} />
      </div>
      <div className="ref-share-text">
        <h2>{t.title}</h2>
        <p>{t.sub}</p>
      </div>
      <div className="ref-share">
        <a className="ref-sbtn fb" target="_blank" rel="noopener noreferrer"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url('facebook'))}`}>
          <Icon d={FB} />Facebook
        </a>
        <a className="ref-sbtn wa" target="_blank" rel="noopener noreferrer"
          href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url('whatsapp')}`)}`}>
          <Icon d={WA} />WhatsApp
        </a>
        <a className="ref-sbtn sms" href={`sms:?&body=${encodeURIComponent(`${text} ${url('sms')}`)}`}>
          <Icon d={SMS} />{t.text}
        </a>
        <button type="button" className="ref-sbtn copy" onClick={copy} aria-live="polite">
          <Icon d={LINK} />{copied ? t.copied : t.copy}
        </button>
      </div>
    </div>
  );
}
