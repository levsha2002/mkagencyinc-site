'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getDict, PHONE_DISPLAY, PHONE_TEL, locales, LEAD_MANAGER_URL } from '@/lib/dictionaries';

export default function Header({ lang }: { lang: string }) {
  const t = getDict(lang);
  const [open, setOpen] = useState(false);

  const communityLabel = lang === 'es' ? 'Comunidad' : lang === 'ru' ? 'Сообщество' : 'Community';
  const agentsLabel = lang === 'es' ? 'Nuestros Agentes' : lang === 'ru' ? 'Наши агенты' : 'Our Agents';
  const contactLabel = lang === 'es' ? 'Contáctenos' : lang === 'ru' ? 'Контакты' : 'Contact Us';

  const checkLabel =
    lang === 'es' ? 'Protección' : lang === 'ru' ? 'Финансовая защита' : 'Financial Protection';

  const qrCaption =
    lang === 'es' ? 'Llene la solicitud de cotización' : lang === 'ru' ? 'Заполните заявку на расчёт' : 'Fill Out Request for a Quote';

  // Pages that already carry an on-site lead form: the header's quote CTA
  // jumps to that form (tracked conversion) instead of sending the visitor
  // to the off-site Allstate Lead Manager page, which has no Google tag.
  const pathname = usePathname() || '';
  const hasOnSiteForm = /^\/(en|es|ru)\/(insurance\/[^/]+|quote|[a-z0-9-]+-insurance-florida(-city)?)\/?$/.test(pathname);
  const onSiteQuoteLabel =
    lang === 'es' ? 'Solicite una cotización' : lang === 'ru' ? 'Запросить расчёт' : 'Request a Quote';

  const links = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/insurance`, label: t.nav.insurance },
    { href: `/${lang}/protection-check`, label: checkLabel },
    { href: `/${lang}/agents`, label: agentsLabel },
    { href: `/${lang}/quote`, label: contactLabel },
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

        {/* Language switcher sits right next to the nav (by Community), not pushed to the far edge */}
        <div className="lang">
          {locales.map((l) => (
            <Link key={l} href={`/${l}`} className={l === lang ? 'active' : ''}>
              {l.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="spacer" />

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

      {/* Contact actions on their own row, so the EN/ES/RU switcher never gets squeezed out */}
      <div className="header-cta">
        <div className="container header-cta-in">
          <a href={`tel:${PHONE_TEL}`} className="call-btn">
            📞 <span className="call-btn-text">{t.call247} · {PHONE_DISPLAY}</span>
          </a>
          <a href={`sms:${PHONE_TEL}`} className="text-btn">💬 <span className="text-btn-text">{t.contact.textUs}</span></a>
          {hasOnSiteForm ? (
            <a href="#quote" className="text-btn header-quote-btn">📝 <span className="text-btn-text">{onSiteQuoteLabel}</span></a>
          ) : (
            <a
              href={LEAD_MANAGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header-qr"
              title={qrCaption}
            >
              <Image src="/images/lead-manager-qr.png" alt={t.footerExtra.qrAlt} width={48} height={48} />
              <span className="header-qr-text">{qrCaption}</span>
            </a>
          )}
        </div>
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
