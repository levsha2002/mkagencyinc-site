import Link from 'next/link';

// Cross-links every insurance landing page to every other one.
// Drop <RelatedCoverage lang={l} current="/slug" /> at the bottom of any
// landing page. The `current` page is skipped so it doesn't link to itself.

type Lang = 'en' | 'es' | 'ru';

const LINKS: { path: string; label: Record<Lang, string>; icon: string }[] = [
  { path: '/car-insurance-florida-city', icon: '🚗', label: { en: 'Auto Insurance', es: 'Seguro de Auto', ru: 'Автострахование' } },
  { path: '/homeowners-insurance-florida-city', icon: '🏠', label: { en: 'Home Insurance', es: 'Seguro de Casa', ru: 'Страховка дома' } },
  { path: '/condo-insurance-florida-city', icon: '🏢', label: { en: 'Condo Insurance', es: 'Seguro de Condominio', ru: 'Страховка кондо' } },
  { path: '/new-construction-home-insurance-florida', icon: '🏗️', label: { en: 'New-Construction Home', es: 'Casa de Nueva Construcción', ru: 'Новостройка' } },
  { path: '/motorcycle-insurance-florida-city', icon: '🏍️', label: { en: 'Motorcycle Insurance', es: 'Seguro de Motocicleta', ru: 'Страховка мотоцикла' } },
  { path: '/classic-car-insurance-florida-city', icon: '🚘', label: { en: 'Classic Car Insurance', es: 'Seguro de Auto Clásico', ru: 'Классические авто' } },
  { path: '/sr22-insurance-florida-city', icon: '📄', label: { en: 'SR-22 / FR-44', es: 'SR-22 / FR-44', ru: 'SR-22 / FR-44' } },
  { path: '/umbrella-insurance-florida-city', icon: '☂️', label: { en: 'Umbrella Insurance', es: 'Seguro Paraguas (Umbrella)', ru: 'Зонтичная страховка (Umbrella)' } },
  { path: '/insurance', icon: '📋', label: { en: 'All coverage', es: 'Todas las coberturas', ru: 'Все виды страхования' } },
];

const HEADING: Record<Lang, string> = {
  en: 'Explore our other coverage',
  es: 'Explore nuestras otras coberturas',
  ru: 'Другие виды страхования',
};

export default function RelatedCoverage({ lang, current }: { lang: string; current?: string }) {
  const l: Lang = lang === 'es' || lang === 'ru' ? (lang as Lang) : 'en';
  const items = LINKS.filter((x) => x.path !== current);

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: '1.4rem' }}>{HEADING[l]}</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
            maxWidth: '52rem',
            margin: '10px auto 0',
          }}
        >
          {items.map((x) => (
            <Link
              key={x.path}
              href={`/${l}${x.path}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#fff',
                border: '1.5px solid #d9e2ec',
                borderRadius: 999,
                padding: '9px 16px',
                color: '#082a59',
                fontWeight: 600,
                fontSize: '.95rem',
                textDecoration: 'none',
              }}
            >
              <span aria-hidden>{x.icon}</span> {x.label[l]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
