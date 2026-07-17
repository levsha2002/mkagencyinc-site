'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getDict, PHONE_DISPLAY, PHONE_TEL, locales } from '@/lib/dictionaries';

export default function Header({ lang }: { lang: string }) {
  const t = getDict(lang);
  const [open, setOpen] = useState(false);

  const communityLabel = lang === 'es' ? 'Comunidad' : lang === 'ru' ? 'Сообщество' : 'Community';
  const callbackLabel = lang === 'es' ? 'Solicitar llamada' : lang === 'ru' ? 'Заказать звонок' : 'Request a Callback';

  const links = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/insurance`, label: t.nav.insurance },
    { href: `/${lang}/contact`, label: t.nav.contact },
    { href: `/${lang}/quote`, label: callbackLabel },
    { href: `/${lang}/team`, label: t.nav.team },
    { href: `/${lang}/life`, label: t.nav.life },
    { href: `/${lang}/referral`, label: communityLabel },
  ];

  return (
    <header className="header">
      <div className="container header-in">
        <Link href={`/${lang}`} className="logo">
          <Image src="/images/mikhail.jpg" alt="Mikhail Kozlov, M&K Agency"
            width={38} height={38}
            style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid #F5A623' }} />
          <span className="logo-badge">M&K</span>
          <span className="logo-text">M&K Agency</span>
        </Link>

        <nav className="nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <div className="spacer" />

        <div className="lang">
          {locales.map((l) => (
            <Link key={l} href={`/${l}`} className={l === lang ? 'active' : ''}>
              {l.toUpperCase()}
            </Link>
          ))}
        </div>

        <a href={`tel:${PHONE_TEL}`} className="call-btn">
          📞 <span className="call-btn-text">{t.call247} · {PHONE_DISPLAY}</span>
        </a>
        <a href={`sms:${PHONE_TEL}`} className="text-btn">💬 <span className="text-btn-text">Text us</span></a>

        <button
          type="button"
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="mobile-menu">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="mobile-menu-lang">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={l === lang ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <a href={`tel:${PHONE_TEL}`} className="mobile-menu-call">
            📞 {t.call247} · {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  );
}
