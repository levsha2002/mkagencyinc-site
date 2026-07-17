import Link from 'next/link';
import { getDict, PHONE_DISPLAY, PHONE_TEL, ADDRESS } from '@/lib/dictionaries';

export default function Footer({ lang }: { lang: string }) {
  const t = getDict(lang);
  return (
    <footer className="footer">
      <div className="container">
        <p><strong>{t.footer.lic}</strong></p>
        <p style={{ margin: '8px 0' }}>
          {ADDRESS} · <a href={`tel:${PHONE_TEL}`} style={{ color: '#fff', fontWeight: 700 }}>{PHONE_DISPLAY}</a>
        </p>
        <p style={{ margin: '8px 0', fontSize: '.85rem' }}>
          <Link href={`/${lang}/referral`} style={{ color: '#bcd0ea' }}>Community Businesses</Link>
          {' · '}
          <Link href={`/${lang}/privacy`} style={{ color: '#bcd0ea' }}>{t.footer.privacy}</Link>
          {' · '}
          <Link href={`/${lang}/terms`} style={{ color: '#bcd0ea' }}>{t.footer.terms}</Link>
        </p>
        <p style={{ margin: '8px 0', fontSize: '.85rem' }}>
          Please visit my site,{' '}
          <a
            href="https://agents.allstate.com/mikhail-kozlov-florida-city-fl.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#bcd0ea', textDecoration: 'underline' }}
          >
            Allstate Agency - Mikhail Kozlov
          </a>
          , to get more information on the Allstate products and services I can offer.
        </p>
        <p suppressHydrationWarning>© {new Date().getFullYear()} M&K Agency Inc. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
