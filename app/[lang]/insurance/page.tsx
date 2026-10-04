import Link from 'next/link';
import { getProductsByCategory, HIDDEN_FROM_HUB } from '@/lib/insurance-products';
import InsuranceCategoryNav from '@/components/InsuranceCategoryNav';
import { pageMetadata } from '@/lib/seo';
import { getDict } from '@/lib/dictionaries';
import Image from 'next/image';
import { REC_NAV, REC_NAV_TITLE } from '@/content/pages/rec/nav';

const REC_INTRO: Record<'en' | 'es' | 'ru', string> = {
  en: 'Plain-language Florida guides for riders, boaters, off-road families and anyone protecting a paycheck: the rules, the coverage gaps and a personal agent.',
  es: 'Guías claras de Florida para motociclistas, dueños de botes, familias con todoterrenos y quien quiera proteger su sueldo: las reglas, los huecos de cobertura y un agente personal.',
  ru: 'Понятные гиды по Флориде для мотоциклистов, владельцев лодок, семей с внедорожной техникой и всех, кто защищает доход семьи: правила, дыры в покрытии и личный агент.',
};

const CATEGORY_ICONS: Record<'auto' | 'home' | 'commercial' | 'life' | 'specialty', string> = {
  auto: '🚗',
  home: '🏠',
  commercial: '🏢',
  life: '❤️',
  specialty: '⛵',
};

const CATEGORY_KEYS: ('auto' | 'home' | 'commercial' | 'life' | 'specialty')[] = [
  'auto',
  'home',
  'commercial',
  'life',
  'specialty',
];

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).services;
  return pageMetadata({
    lang: params.lang,
    path: '/insurance',
    title: t.metaTitle,
    description: t.metaDesc,
  });
}

export default function InsuranceHub({ params }: { params: { lang: string } }) {
  const dict = getDict(params.lang);
  const t = dict.services;
  const l = (params.lang === 'es' || params.lang === 'ru' ? params.lang : 'en') as 'en' | 'es' | 'ru';

  return (
    <main>
      {/* Hero photo via next/image (responsive, modern formats, preloaded as
          the LCP element) instead of a 308 KB CSS background-image. */}
      <section className="team-hero">
        <Image
          src="/images/Professional_Agent.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
        <div className="team-hero-overlay" style={{ position: 'relative' }}>
          <div className="container">
            <h1>{t.title}</h1>
            <p>{t.intro}</p>
          </div>
        </div>
      </section>

      <section className="insurance-cat-nav-wrap">
        <InsuranceCategoryNav lang={params.lang} />
      </section>

      <section className="team-body">
        <div className="container">
          <div id="florida-guides" className="insurance-cat-section">
            <h2>🌴 {REC_NAV_TITLE[l]}</h2>
            <p style={{ color: 'var(--muted)', marginTop: 4 }}>{REC_INTRO[l]}</p>
            <div className="cards4">
              {REC_NAV.map((x) => (
                <Link key={x.path} href={`/${params.lang}${x.path}`} className="svc">
                  <h3>{x.icon} {x.label[l]}</h3>
                </Link>
              ))}
            </div>
          </div>
          {CATEGORY_KEYS.map((key) => {
            const products = getProductsByCategory(key, params.lang).filter((p) => !HIDDEN_FROM_HUB.has(p.slug));
            if (products.length === 0) return null;
            const cat = t[key];
            return (
              <div key={key} id={key} className="insurance-cat-section">
                {/* Design D: photo banner header per category */}
                <div className="cat-banner">
                  <Image
                    src={`/images/cat-${key}.jpg`}
                    alt={cat.h}
                    fill
                    sizes="(max-width: 900px) 100vw, 900px"
                  />
                  <div className="cat-banner-t">
                    <h2>{CATEGORY_ICONS[key]} {cat.h}</h2>
                  </div>
                </div>
                <div className="cards4">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${params.lang}/insurance/${p.slug}`}
                      className="svc"
                    >
                      <h3>{p.title}</h3>
                      <p>{p.shortIntro}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <p style={{ textAlign: 'center', marginTop: 34, color: 'var(--muted)' }}>{t.cta}</p>
          <div className="center-cta" style={{ marginTop: 14 }}>
            <Link href={`/${params.lang}/quote`} className="cta">
              {dict.hero.cta} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
