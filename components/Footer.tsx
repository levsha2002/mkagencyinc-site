import Link from 'next/link';
import Image from 'next/image';
import { getDict, PHONE_DISPLAY, PHONE_TEL, ADDRESS, LEAD_MANAGER_URL } from '@/lib/dictionaries';

export default function Footer({ lang }: { lang: string }) {
  const t = getDict(lang);
  const fx = t.footerExtra;
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <a
            href={LEAD_MANAGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#fff', padding: 10, borderRadius: 12, lineHeight: 0 }}
          >
            <Image src="/images/lead-manager-qr.png" alt={fx.qrAlt} width={112} height={112} />
          </a>
          <span style={{ fontSize: '.78rem', color: '#bcd0ea', fontWeight: 600 }}>{fx.scan}</span>
        </div>
        <p><strong>{t.footer.lic}</strong></p>
        <p style={{ margin: '8px 0' }}>
          {ADDRESS} · <a href={`tel:${PHONE_TEL}`} style={{ color: '#fff', fontWeight: 700 }}>{PHONE_DISPLAY}</a>
        </p>
        <p style={{ margin: '8px 0', fontSize: '.8rem', opacity: 0.85 }}>
          {fx.licenseLine} ·{' '}
          <a href="mailto:mikhailkozlov@allstate.com" style={{ color: '#bcd0ea' }}>
            mikhailkozlov@allstate.com
          </a>
        </p>
        <p style={{ margin: '8px 0', fontSize: '.8rem' }}>
          {fx.reviews}:{' '}
          <a
            href="https://www.experience.com/reviews/mikhail-7323351"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#bcd0ea' }}
          >
            Experience.com
          </a>
          {' · '}
          <a
            href="https://www.chamberofcommerce.com/business-directory/florida/florida-city/insurance-agency/2012178838-mikhail-kozlov-allstate-insurance"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#bcd0ea' }}
          >
            Chamber of Commerce
          </a>
        </p>
        <p style={{ margin: '8px 0', fontSize: '.85rem' }}>
          <Link href={`/${lang}/referral`} style={{ color: '#bcd0ea' }}>{fx.community}</Link>
          {' · '}
          <Link href={`/${lang}/privacy`} style={{ color: '#bcd0ea' }}>{t.footer.privacy}</Link>
          {' · '}
          <Link href={`/${lang}/terms`} style={{ color: '#bcd0ea' }}>{t.footer.terms}</Link>
          {' · '}
          <Link href={`/${lang}/disclosures`} style={{ color: '#bcd0ea' }}>{t.footer.disclosures}</Link>
        </p>
        <p style={{ margin: '8px 0', fontSize: '.85rem' }}>
          {fx.allstateBefore}
          <a
            href="https://agents.allstate.com/mikhail-kozlov-florida-city-fl.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#bcd0ea', textDecoration: 'underline' }}
          >
            {fx.allstateLink}
          </a>
          {fx.allstateAfter}
        </p>
        <p suppressHydrationWarning>© {new Date().getFullYear()} M&K Agency Inc. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
