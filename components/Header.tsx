import Link from 'next/link';
import { getDict, PHONE_DISPLAY, PHONE_TEL, locales } from '@/lib/dictionaries';

export default function Header({ lang }: { lang: string }) {
  const t = getDict(lang);
  return (
    <header className="header">
      <div className="container header-in">
        <Link href={`/${lang}`} className="logo">
          <span className="logo-badge">M&K</span> M&K Agency
        </Link>
        <nav className="nav">
          <Link href={`/${lang}`}>{t.nav.home}</Link>
          <Link href={`/${lang}/services`}>{t.nav.services}</Link>
          <Link href={`/${lang}/about`}>{t.nav.about}</Link>
          <Link href={`/${lang}/contact`}>{t.nav.contact}</Link>
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
          	📞 {t.call247} · {PHONE_DISPLAY}
        </a>
	      <a href={`sms:${PHONE_TEL}`} className="text-btn">
  		      💬 Text us
	</a>
      </div>
    </header>
  );
}
