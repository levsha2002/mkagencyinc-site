'use client';

import { useMemo, useState } from 'react';
import { referralBusinesses, CATEGORIES, type ReferralBusiness } from '@/lib/referral-businesses';

// Community business directory.
//
// The point of this page is that it is genuinely free and genuinely open. It
// exists to answer the question local groups ask constantly — "who is a good
// plumber / roofer / inspector" — with a real list instead of one name.
//
// TWO RULES THAT MUST NOT BE BROKEN, because they are what keeps this lawful:
//
// 1. Inclusion is free and unconditional. A business is never listed because
//    it sends us customers, and never ranked higher for doing so. Ordering is
//    alphabetical, mechanically. Under RESPA s.8, giving something of value in
//    exchange for referrals of settlement-service business is prohibited, and
//    realtors, loan officers and title agents all sit inside that definition.
//    A directory open to everyone on identical terms does not trade anything
//    for anything. A directory that quietly favours referrers does.
//
// 2. "Verified" means one thing only, and the page says so out loud: a person
//    called and confirmed the business exists and is operating. It is not a
//    judgement of quality, price, licensing or insurance. Without that line
//    the badge reads as a recommendation, and a bad roofer becomes the
//    agency's problem.

type Lang = 'en' | 'es' | 'ru';

const T: Record<Lang, Record<string, string>> = {
  en: {
    title: 'Local businesses our clients recommend',
    sub: 'A free directory for South Florida. No one pays to be listed and no one is ranked higher for sending us business.',
    verifiedTitle: 'What "Verified by M&K Agency" means',
    verifiedBody:
      'It means a person on our team called the business and confirmed it is real and currently operating. That is all it means. It is not a judgement of quality, price, workmanship, licensing or insurance, and it is not a recommendation. Please check licences, insurance and references yourself before hiring anyone, exactly as you would with any business you found on your own.',
    search: 'Search by name or service',
    category: 'Category',
    city: 'City',
    language: 'Speaks',
    allCities: 'All cities',
    allLanguages: 'Any language',
    found: 'businesses',
    none: 'Nothing matches those filters yet. Try widening the search, or suggest a business below.',
    clear: 'Clear filters',
    call: 'Call',
    site: 'Website',
    verified: 'Verified by M&K Agency',
    empty: 'The directory is being built. If you run a local business, or want to suggest one you trust, use the form below — listing is free and always will be.',
  },
  es: {
    title: 'Negocios locales que nuestros clientes recomiendan',
    sub: 'Un directorio gratuito para el sur de Florida. Nadie paga por aparecer y nadie se posiciona más alto por enviarnos clientes.',
    verifiedTitle: 'Qué significa "Verificado por M&K Agency"',
    verifiedBody:
      'Significa que una persona de nuestro equipo llamó al negocio y confirmó que es real y que está operando. Eso es todo lo que significa. No es un juicio sobre calidad, precio, mano de obra, licencias o seguros, y no es una recomendación. Verifique usted mismo licencias, seguros y referencias antes de contratar a cualquiera, igual que haría con un negocio que encontrara por su cuenta.',
    search: 'Buscar por nombre o servicio',
    category: 'Categoría',
    city: 'Ciudad',
    language: 'Habla',
    allCities: 'Todas las ciudades',
    allLanguages: 'Cualquier idioma',
    found: 'negocios',
    none: 'Nada coincide con esos filtros todavía. Amplíe la búsqueda o sugiera un negocio abajo.',
    clear: 'Limpiar filtros',
    call: 'Llamar',
    site: 'Sitio web',
    verified: 'Verificado por M&K Agency',
    empty: 'El directorio se está construyendo. Si tiene un negocio local, o quiere sugerir uno de confianza, use el formulario de abajo — aparecer es gratis y siempre lo será.',
  },
  ru: {
    title: 'Местный бизнес, который рекомендуют наши клиенты',
    sub: 'Бесплатный справочник по Южной Флориде. Никто не платит за размещение и никто не поднимается выше за то, что присылает нам клиентов.',
    verifiedTitle: 'Что означает «Verified by M&K Agency»',
    verifiedBody:
      'Это означает, что человек из нашей команды позвонил в компанию и убедился, что она существует и работает. И только это. Это не оценка качества, цены, работы, лицензий или страховки, и это не рекомендация. Пожалуйста, проверяйте лицензии, страховку и отзывы самостоятельно, прежде чем нанимать кого-либо, — ровно так же, как вы сделали бы с компанией, найденной самостоятельно.',
    search: 'Поиск по названию или услуге',
    category: 'Категория',
    city: 'Город',
    language: 'Говорят',
    allCities: 'Все города',
    allLanguages: 'Любой язык',
    found: 'компаний',
    none: 'По этим фильтрам пока ничего нет. Расширьте поиск или предложите компанию ниже.',
    clear: 'Сбросить фильтры',
    call: 'Позвонить',
    site: 'Сайт',
    verified: 'Проверено M&K Agency',
    empty: 'Справочник наполняется. Если у вас местный бизнес или вы хотите предложить того, кому доверяете, — форма ниже. Размещение бесплатное и таким останется.',
  },
};

const LANG_LABEL: Record<Lang, Record<string, string>> = {
  en: { en: 'English', es: 'Spanish', ru: 'Russian' },
  es: { en: 'Inglés', es: 'Español', ru: 'Ruso' },
  ru: { en: 'английский', es: 'испанский', ru: 'русский' },
};

export default function BusinessDirectory({ lang = 'en' }: { lang?: string }) {
  const L: Lang = lang === 'es' || lang === 'ru' ? lang : 'en';
  const t = T[L];

  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [city, setCity] = useState('');
  const [spoken, setSpoken] = useState('');

  const cities = useMemo(
    () => Array.from(new Set(referralBusinesses.map((b) => b.city))).sort(),
    []
  );

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return referralBusinesses
      .filter((b) => {
        if (cat !== 'All' && b.category !== cat) return false;
        if (city && b.city !== city) return false;
        if (spoken && !(b.languages || []).includes(spoken as 'en' | 'es' | 'ru')) return false;
        if (needle) {
          const hay = `${b.name} ${b.category} ${b.description} ${b.city}`.toLowerCase();
          if (!hay.includes(needle)) return false;
        }
        return true;
      })
      // Alphabetical, always. Ordering must not be a lever anyone can buy or earn.
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [q, cat, city, spoken]);

  const hasFilters = q || cat !== 'All' || city || spoken;
  const isEmpty = referralBusinesses.length === 0;

  const input: React.CSSProperties = {
    padding: '11px 13px',
    borderRadius: 10,
    border: '1px solid #dfe6f0',
    fontSize: '.95rem',
    background: '#fff',
    width: '100%',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'left', marginBottom: 8 }}>{t.title}</h2>
      <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: 20, maxWidth: 640 }}>{t.sub}</p>

      {/* What the badge does and does not mean. Deliberately prominent. */}
      <div
        style={{
          background: '#fff8e6',
          border: '1px solid #f0dca0',
          borderRadius: 14,
          padding: '16px 18px',
          marginBottom: 26,
          maxWidth: 760,
        }}
      >
        <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 6, fontSize: '.98rem' }}>
          {t.verifiedTitle}
        </p>
        <p style={{ color: '#6b5a2a', fontSize: '.9rem', margin: 0, lineHeight: 1.6 }}>{t.verifiedBody}</p>
      </div>

      {isEmpty ? (
        <p style={{ color: 'var(--muted)', lineHeight: 1.6, maxWidth: 640 }}>{t.empty}</p>
      ) : (
        <>
          {/* ---------- filters ---------- */}
          <div style={{ display: 'grid', gap: 12, marginBottom: 18 }}>
            <input
              type="search"
              placeholder={t.search}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              style={input}
              aria-label={t.search}
            />
            <div
              style={{
                display: 'grid',
                gap: 10,
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              }}
            >
              <select value={cat} onChange={(e) => setCat(e.target.value)} style={input} aria-label={t.category}>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? t.category : c}
                  </option>
                ))}
              </select>
              <select value={city} onChange={(e) => setCity(e.target.value)} style={input} aria-label={t.city}>
                <option value="">{t.allCities}</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                value={spoken}
                onChange={(e) => setSpoken(e.target.value)}
                style={input}
                aria-label={t.language}
              >
                <option value="">{t.allLanguages}</option>
                {(['en', 'es', 'ru'] as const).map((l) => (
                  <option key={l} value={l}>
                    {LANG_LABEL[L][l]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
              color: 'var(--muted)',
              fontSize: '.9rem',
            }}
          >
            <span>
              {results.length} {t.found}
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={() => {
                  setQ('');
                  setCat('All');
                  setCity('');
                  setSpoken('');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--blue)',
                  cursor: 'pointer',
                  fontSize: '.9rem',
                  padding: 0,
                }}
              >
                {t.clear}
              </button>
            )}
          </div>

          {/* ---------- results ---------- */}
          {results.length === 0 ? (
            <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{t.none}</p>
          ) : (
            <div
              style={{
                display: 'grid',
                gap: 14,
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              }}
            >
              {results.map((b: ReferralBusiness) => (
                <div
                  key={b.slug}
                  style={{
                    background: '#fff',
                    border: '1px solid #e6ecf5',
                    borderRadius: 14,
                    padding: '16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--navy)', margin: 0, fontSize: '1.02rem' }}>
                      {b.name}
                    </p>
                    <p style={{ color: 'var(--blue)', margin: '2px 0 0', fontSize: '.85rem' }}>
                      {b.category} · {b.city}
                    </p>
                  </div>

                  {b.description && (
                    <p style={{ color: '#555', fontSize: '.9rem', margin: 0, lineHeight: 1.5 }}>
                      {b.description}
                    </p>
                  )}

                  {b.languages && b.languages.length > 0 && (
                    <p style={{ color: 'var(--muted)', fontSize: '.82rem', margin: 0 }}>
                      {t.language}: {b.languages.map((l) => LANG_LABEL[L][l]).join(', ')}
                    </p>
                  )}

                  <div style={{ display: 'flex', gap: 10, marginTop: 'auto', paddingTop: 6, flexWrap: 'wrap' }}>
                    {b.phone && (
                      <a
                        href={`tel:${b.phone.replace(/[^0-9+]/g, '')}`}
                        style={{
                          background: 'var(--navy)',
                          color: '#fff',
                          padding: '8px 14px',
                          borderRadius: 9,
                          fontSize: '.88rem',
                          textDecoration: 'none',
                          fontWeight: 600,
                        }}
                      >
                        📞 {t.call}
                      </a>
                    )}
                    {b.website && (
                      <a
                        href={b.website}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        style={{
                          border: '1px solid #dfe6f0',
                          color: 'var(--navy)',
                          padding: '8px 14px',
                          borderRadius: 9,
                          fontSize: '.88rem',
                          textDecoration: 'none',
                        }}
                      >
                        {t.site}
                      </a>
                    )}
                  </div>

                  <p style={{ color: '#7a8aa0', fontSize: '.75rem', margin: '4px 0 0' }}>✓ {t.verified}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
