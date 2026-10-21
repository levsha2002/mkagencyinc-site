import Link from 'next/link';
import { CITY_PAGES } from '@/content/pages/city';
import s from './City.module.css';

// "Areas we serve" links for the local city/county pages. Server component.
// Grouped by county: Miami-Dade (south county plus the condo coast) and Broward.
// - variant 'section': two columns (auto / home) on the homepage, the Florida
//   City product pages and the city pages themselves.
// - variant 'footer': compact lines in the site footer.
type Lang = 'en' | 'es' | 'ru';

const L = (lang: string): Lang => (lang === 'es' || lang === 'ru' ? lang : 'en');

const T: Record<Lang, { title: string; auto: string; home: string; intro: string }> = {
  en: { title: 'Areas we serve', auto: 'Car insurance', home: 'Home insurance', intro: 'We serve these Miami-Dade and Broward communities from our Florida City office, in person by appointment and by phone, WhatsApp, text and email.' },
  es: { title: 'Zonas que atendemos', auto: 'Seguro de auto', home: 'Seguro de casa', intro: 'Atendemos estas comunidades de Miami-Dade y Broward desde nuestra oficina en Florida City, en persona con cita y por teléfono, WhatsApp, texto y correo.' },
  ru: { title: 'Где мы работаем', auto: 'Автостраховка', home: 'Страховка дома', intro: 'Эти города Miami-Dade и Broward мы обслуживаем из офиса во Florida City — лично по записи, по телефону, в WhatsApp, по SMS и почте.' },
};

const AREA: Record<string, Record<Lang, string>> = {
  'florida-city': { en: 'Florida City', es: 'Florida City', ru: 'Florida City' },
  homestead: { en: 'Homestead', es: 'Homestead', ru: 'Homestead' },
  'cutler-bay': { en: 'Cutler Bay', es: 'Cutler Bay', ru: 'Cutler Bay' },
  kendall: { en: 'Kendall', es: 'Kendall', ru: 'Kendall' },
  'sunny-isles-beach': { en: 'Sunny Isles Beach', es: 'Sunny Isles Beach', ru: 'Sunny Isles Beach' },
  aventura: { en: 'Aventura', es: 'Aventura', ru: 'Aventura' },
  'hallandale-beach': { en: 'Hallandale Beach', es: 'Hallandale Beach', ru: 'Hallandale Beach' },
  hollywood: { en: 'Hollywood', es: 'Hollywood', ru: 'Hollywood' },
  'miami-dade': { en: 'Miami-Dade County', es: 'Condado Miami-Dade', ru: 'Округ Miami-Dade' },
  broward: { en: 'Broward County', es: 'Condado Broward', ru: 'Округ Broward' },
};

const GROUPS: { hub: string; cities: string[] }[] = [
  { hub: 'miami-dade', cities: ['florida-city', 'homestead', 'cutler-bay', 'kendall', 'sunny-isles-beach', 'aventura'] },
  { hub: 'broward', cities: ['hallandale-beach', 'hollywood'] },
];

function pathFor(line: 'auto' | 'home', area: string): string | undefined {
  if (area === 'florida-city') return line === 'auto' ? '/car-insurance-florida-city' : '/homeowners-insurance-florida-city';
  return CITY_PAGES.find((p) => p.line === line && p.area === area)?.path;
}

export default function AreasWeServe({ lang, current, variant = 'section' }: { lang: string; current?: string; variant?: 'section' | 'footer' }) {
  const l = L(lang);
  const t = T[l];
  if (variant === 'footer') {
    return (
      <nav className={s.footerAreas} aria-label={t.title}>
        {(['auto', 'home'] as const).map((line) => (
          <div key={line}>
            <strong>{line === 'auto' ? t.auto : t.home}</strong>
            {GROUPS.map((g) => {
              const hub = pathFor(line, g.hub);
              const cities = g.cities.filter((area) => area !== 'florida-city').map((area) => ({ area, path: pathFor(line, area) })).filter((x): x is { area: string; path: string } => !!x.path);
              if (!hub) return null;
              return (
                <span key={g.hub} className={s.footerGroup}>
                  <Link href={`/${l}${hub}`}>{AREA[g.hub][l]}</Link>
                  {cities.map((x) => (
                    <span key={x.path}>
                      {' · '}
                      <Link href={`/${l}${x.path}`}>{AREA[x.area][l]}</Link>
                    </span>
                  ))}
                </span>
              );
            })}
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
              {GROUPS.map((g) => {
                const hub = pathFor(line, g.hub);
                const cities = g.cities.map((area) => ({ area, path: pathFor(line, area) })).filter((x): x is { area: string; path: string } => !!x.path);
                if (!hub) return null;
                return (
                  <div key={g.hub} className={s.areaGroup}>
                    <p className={s.areaCounty}><Link href={`/${l}${hub}`}>{AREA[g.hub][l]}</Link></p>
                    <ul>
                      {cities.map((x) => (
                        <li key={x.path}>
                          <Link href={`/${l}${x.path}`} aria-current={x.path === current ? 'page' : undefined}>{AREA[x.area][l]}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
