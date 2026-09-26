import Link from 'next/link';
import { getDict, PHONE_DISPLAY, PHONE_TEL, ADDRESS, REVIEWS_URL } from '@/lib/dictionaries';
import { blogHasLang } from '@/lib/blog';
import WhatsAppLink from '@/components/WhatsAppLink';

export default function Footer({ lang }: { lang: string }) {
  const t = getDict(lang);
  const fx = t.footerExtra;
  return (
    <footer className="footer">
      <div className="container">
        {/* On-site quote page (tracked Google Ads conversion) instead of the
            off-site Allstate Lead Manager QR code, which has no Google tag. */}
        <div style={{ marginBottom: 18, display: 'flex', justifyContent: 'center' }}>
          <Link
            href={`/${lang}/quote`}
            style={{ background: 'var(--gold)', color: 'var(--navy)', fontWeight: 800, padding: '11px 22px', borderRadius: 999, textDecoration: 'none' }}
          >
            📝 {lang === 'es' ? 'Solicite una cotización' : lang === 'ru' ? 'Запросить расчёт' : 'Request a Quote'}
          </Link>
        </div>
        <p><strong>{t.footer.lic}</strong></p>
        <p style={{ margin: '8px 0' }}>
          {ADDRESS} · <a href={`tel:${PHONE_TEL}`} style={{ color: '#fff', fontWeight: 700 }}>{PHONE_DISPLAY}</a>
          {' · '}
          <WhatsAppLink lang={lang} placement="footer" className="wa-link" style={{ color: '#fff', fontWeight: 700 }} />
        </p>
        <p style={{ margin: '8px 0', fontSize: '.8rem', opacity: 0.85 }}>
          {fx.licenseLine} ·{' '}
          <a href="mailto:mikhailkozlov@allstate.com" style={{ color: '#bcd0ea' }}>
            mikhailkozlov@allstate.com
          </a>
        </p>
        <p style={{ margin: '8px 0', fontSize: '.8rem' }}>
          {fx.reviews}:{' '}
          <a href={REVIEWS_URL} target="_blank" rel="noopener" style={{ color: '#bcd0ea' }}>
            Allstate.com
          </a>
          {' · '}
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
          <Link href={`/${lang}/news`} style={{ color: '#bcd0ea' }}>{lang === 'es' ? 'Noticias' : lang === 'ru' ? 'Новости' : 'News'}</Link>
          {' · '}
          {blogHasLang(lang) && (
            <>
              <Link href={`/${lang}/blog`} style={{ color: '#bcd0ea' }}>{lang === 'ru' ? 'Блог' : 'Blog'}</Link>
              {' · '}
            </>
          )}
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
