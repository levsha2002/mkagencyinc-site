import Link from 'next/link';
import Image from 'next/image';
import { getDict, PHONE_DISPLAY, PHONE_TEL, ADDRESS } from '@/lib/dictionaries';

// Official Allstate Lead Manager webform — scanning or clicking submits
// directly into Lead Manager, which captures texting consent at submission
// (see LEAD_MANAGER_URL usage below for the desktop click-through).
const LEAD_MANAGER_URL = 'https://www.leadmanagementlab.com/Form.aspx?id=cb4a2fa2-a2bc-494d-9510-7445b2080b65';

const SCAN: Record<string, string> = {
  en: 'Fill Out Request for a Quote',
  es: 'Llene la solicitud de cotización',
  ru: 'Заполните заявку на расчёт',
};

export default function Footer({ lang }: { lang: string }) {
  const t = getDict(lang);
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
            <Image src="/images/lead-manager-qr.png" alt="QR code — request a quote via Allstate Lead Manager" width={112} height={112} />
          </a>
          <span style={{ fontSize: '.78rem', color: '#bcd0ea', fontWeight: 600 }}>{SCAN[lang] || SCAN.en}</span>
        </div>
        <p><strong>{t.footer.lic}</strong></p>
        <p style={{ margin: '8px 0' }}>
          {ADDRESS} · <a href={`tel:${PHONE_TEL}`} style={{ color: '#fff', fontWeight: 700 }}>{PHONE_DISPLAY}</a>
        </p>
        <p style={{ margin: '8px 0', fontSize: '.8rem', opacity: 0.85 }}>
          Florida License #L109526 · NPN #19586268 · Agent in Charge: Mikhail Kozlov ·{' '}
          <a href="mailto:mikhailkozlov@allstate.com" style={{ color: '#bcd0ea' }}>
            mikhailkozlov@allstate.com
          </a>
        </p>
        <p style={{ margin: '8px 0', fontSize: '.8rem' }}>
          Reviews:{' '}
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
          <Link href={`/${lang}/referral`} style={{ color: '#bcd0ea' }}>Community Businesses</Link>
          {' · '}
          <Link href={`/${lang}/privacy`} style={{ color: '#bcd0ea' }}>{t.footer.privacy}</Link>
          {' · '}
          <Link href={`/${lang}/terms`} style={{ color: '#bcd0ea' }}>{t.footer.terms}</Link>
          {' · '}
          <Link href={`/${lang}/disclosures`} style={{ color: '#bcd0ea' }}>{t.footer.disclosures}</Link>
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
