import Link from 'next/link';
import { BUSINESS_PAGES } from '@/content/pages/business';
import s from './Business.module.css';

// "Insurance by business type" link block. Used on every business-type page and
// on the general liability and commercial auto product pages.
type Lang = 'en' | 'es' | 'ru';

const HEADING: Record<Lang, string> = {
  en: 'Insurance by business type',
  es: 'Seguros por tipo de negocio',
  ru: 'Страховка по видам бизнеса',
};

export default function BusinessTypeLinks({ lang, current }: { lang: string; current?: string }) {
  const l: Lang = lang === 'es' || lang === 'ru' ? (lang as Lang) : 'en';
  const items = BUSINESS_PAGES.filter((p) => p.path !== current);
  return (
    <section className="section" aria-labelledby="business-types">
      <div className="container">
        <h2 id="business-types" style={{ fontSize: '1.4rem' }}>{HEADING[l]}</h2>
        <div className={s.links}>
          {items.map((p) => (
            <Link key={p.path} href={`/${l}${p.path}`} className={s.pill}>
              <span aria-hidden>{p.icon}</span> {p.copy[l].linkLabel}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
