import Link from 'next/link';
import { CITY_PAGES } from '@/content/pages/city';
import s from './City.module.css';

// "Areas we serve" links for the local city/county pages. Server component.
// - variant 'section': two columns (auto / home) on the Florida City product
//   pages and the city pages themselves.
// - variant 'footer': one compact line in the site footer.
type Lang = 'en' | 'es' | 'ru';

const L = (lang: string): Lang => (lang === 'es' || lang === 'ru' ? lang : 'en');

const T: Record<Lang, { title: string; auto: string; home: string; intro: string }> = {
  en: { title: 'Areas we serve', auto: 'Car insurance', home: 'Home insurance', intro: 'We serve South Florida from our Florida City office, in person and by phone, WhatsApp, text and email.' },
  es: { title: 'Zonas que atendemos', auto: 'Seguro de auto', home: 'Seguro de casa', intro: 'Atendemos el sur de Florida desde nuestra oficina en Florida City, en persona y por teléfono, WhatsApp, texto y correo.' },
  ru: { title: 'Где мы работаем', auto: 'Автостраховка', home: 'Страховка дома', intro: 'Мы обслуживаем Южную Флориду из офиса во Florida City — лично, по телефону, в WhatsApp, по SMS и почте.' },
};

// Area labels (same in all languages except county names).
const AREA: Record<string, Record<Lang, string>> = {
  'florida-city': { en: 'Florida City', es: 'Florida City', ru: 'Florida City' },
  homestead: { en: 'Homestead', es: 'Homestead', ru: 'Homestead' },
  'cutler-bay': { en: 'Cutler Bay', es: 'Cutler Bay', ru: 'Cutler Bay' },
  kendall: { en: 'Kendall', es: 'Kendall', ru: 'Kendall' },
  'miami-dade': { en: 'Miami-Dade County', es: 'Condado Miami-Dade', ru: 'Округ Miami-Dade' },
  broward: { en: 'Broward County', es: 'Condado Broward', ru: 'Округ Broward' },
};
const ORDER = ['miami-dade', 'florida-city', 'homestead', 'cutler-bay', 'kendall', 'broward'];

function links(line: 'auto' | 'home') {
  const fc = { area: 'florida-city', path: line === 'auto' ? '/car-insurance-florida-city' : '/homeowners-insurance-florida-city' };
  const rest = CITY_PAGES.filter((p) => p.line === line).map((p) => ({ area: p.area as string, path: p.path }));
  return [fc, ...rest].sort((a, b) => ORDER.indexOf(a.area) - ORDER.indexOf(b.area));
}

export default function AreasWeServe({ lang, current, variant = 'section' }: { lang: string; current?: string; variant?: 'section' | 'footer' }) {
  const l = L(lang);
  const t = T[l];
  if (variant === 'footer') {
    return (
      <nav className={s.footerAreas} aria-label={t.title}>
        {(['auto', 'home'] as const).map((line) => (
          <div key={line}>
            <strong>{line === 'auto' ? t.auto : t.home}:</strong>
            {links(line).filter((x) => x.area !== 'florida-city').map((x, i) => (
              <span key={x.path}>
                {i > 0 && ' · '}
                <Link href={`/${l}${x.path}`}>{AREA[x.area][l]}</Link>
              </span>
            ))}
          </div>
        ))}
      </nav>
    );
  }
  return (
    <section className="section" aria-labelledby="areas-we-serve">
      <div className="container">
        <h2 id="areas-we-serve">{t.title}</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '40rem', margin: '0 auto 18px' }}>{t.intro}</p>
        <div className={s.areas}>
          {(['auto', 'home'] as const).map((line) => (
            <div key={line}>
              <h3>{line === 'auto' ? t.auto : t.home}</h3>
              <ul>
                {links(line).map((x) => (
                  <li key={x.path}>
                    <Link href={`/${l}${x.path}`} aria-current={x.path === current ? 'page' : undefined}>{AREA[x.area][l]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
