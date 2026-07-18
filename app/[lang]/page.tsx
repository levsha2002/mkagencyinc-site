import Link from 'next/link';
import Image from 'next/image';
import { getDict, PHONE_TEL } from '@/lib/dictionaries';
import RelatedCoverage from '@/components/RelatedCoverage';
import GapAnalysis from '@/components/GapAnalysis';
import { pickRotating } from '@/lib/rotation';
import { buildAlternates } from '@/lib/seo';

// Re-render this page once a day (ISR) so the rotating hero image and
// rotating sub-headline advance automatically — no deploys needed.
export const revalidate = 86400;

// Rotating hero images: add hero-4.jpg, hero-5.jpg... to public/images and
// list them here — the site cycles through them one per day.
const HERO_IMAGES = ['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg'];

// Rotating supporting line under the headline (headline itself stays fixed for SEO).
const HERO_SUBS: Record<string, string[]> = {
  en: [
    "We'll help you find the right coverage for your home, car, and family — explained simply, in English, Spanish, or Russian. Real people who answer, and who are there when you need us most.",
    'Hurricane season, Miami traffic, a growing family — Florida life is unpredictable. Your coverage shouldn’t be. Real local agents, three languages, one call.',
    'From the Keys to Kendall, we protect what Florida families work hardest for — home, car, business, and each other. Talk to a real person today.',
  ],
  es: [
    'Le ayudamos a encontrar la cobertura adecuada para su casa, su auto y su familia — explicada con claridad, en inglés, español o ruso. Personas reales que contestan.',
    'Temporada de huracanes, tráfico de Miami, una familia que crece — la vida en Florida es impredecible. Su cobertura no debería serlo. Agentes locales reales, tres idiomas, una llamada.',
    'Desde los Cayos hasta Kendall, protegemos lo que más les cuesta a las familias de Florida — casa, auto, negocio y los suyos. Hable hoy con una persona real.',
  ],
  ru: [
    'Поможем подобрать правильную защиту для дома, машины и семьи — объясним просто, на английском, испанском или русском. Живые люди, которые отвечают на звонки и рядом, когда нужнее всего.',
    'Сезон ураганов, трафик Майами, растущая семья — жизнь во Флориде непредсказуема. Ваша страховка такой быть не должна. Живые местные агенты, три языка, один звонок.',
    'От Киз до Кендалла мы защищаем то, ради чего семьи Флориды работают больше всего — дом, машину, бизнес и друг друга. Поговорите с живым человеком сегодня.',
  ],
};

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang);
  return {
    title: t.meta.title,
    description: t.meta.desc,
    alternates: buildAlternates(params.lang, ''),
  };
}

const meet: Record<string, Record<string, string>> = {
  en: {
    kicker: 'Meet your agent',
    h: "Hi, I'm Mikhail Kozlov.",
    bio: 'For years, my family and I have protected families and businesses across Florida. Insurance is about people, not policies — when you call, you reach me and my team, in English, Spanish, or Russian.',
    talk: 'Talk to Mikhail',
    quote: 'Request a callback →',
  },
  es: {
    kicker: 'Conoce a tu agente',
    h: 'Hola, soy Mikhail Kozlov.',
    bio: 'Durante años, mi familia y yo hemos protegido a familias y negocios en Florida. El seguro se trata de personas, no de pólizas — cuando llamas, hablas conmigo y mi equipo, en inglés, español o ruso.',
    talk: 'Habla con Mikhail',
    quote: 'Solicitar una llamada →',
  },
  ru: {
    kicker: 'Ваш агент',
    h: 'Здравствуйте, я Михаил Козлов.',
    bio: 'Уже много лет мы с семьёй защищаем семьи и бизнес по всей Флориде. Страхование — это о людях, а не о полисах. Когда вы звоните, вы говорите со мной и моей командой — на английском, испанском или русском.',
    talk: 'Поговорить с Михаилом',
    quote: 'Заказать звонок →',
  },
};

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const t = getDict(lang);
  const m = meet[lang] || meet.en;
  const heroImg = pickRotating(HERO_IMAGES, 'day');
  const heroSub = pickRotating(HERO_SUBS[lang] || HERO_SUBS.en, 'day');

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.homeFaq.items.map((f: { q: string; a: string }) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge gold">📉 {t.hero.badge1}</span>
            <br />
            <span className="badge white">● {t.hero.badge2}</span>
            <h1>
              {t.hero.h1a}
              <br />
              <span className="accent">{t.hero.h1b}</span>
            </h1>
            <p className="sub">{heroSub}</p>
            <Link href={`/${lang}/quote`} className="cta">{t.hero.cta} →</Link>
            <div className="rated">
              <span className="stars">★★★★½</span>
              <span>
                <strong>Mikhail Kozlov</strong> ·{' '}
                <a
                  href="https://www.experience.com/reviews/mikhail-7323351"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'underline' }}
                >
                  {t.hero.rated}
                </a>
              </span>
            </div>
          </div>
          {/* Rotating hero image (changes daily via ISR) */}
          <div className="hero-photo-wrap">
            <img src={heroImg} alt="M&K Agency — protecting Florida families" className="hero-photo" />
          </div>
        </div>
      </section>

      <div className="strip">✦ {t.hero.strip}</div>

      {/* ===== Gap analysis — where your current policy leaves you exposed ===== */}
      <GapAnalysis lang={lang} />

      {/* ===== Meet Mikhail (real photo) ===== */}
      <section className="section">
        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '36px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/images/mikhail.jpg"
            alt="Mikhail Kozlov, Founder of M&K Agency"
            width={270}
            height={338}
            style={{
              width: '270px',
              height: 'auto',
              maxWidth: '100%',
              borderRadius: '20px',
              boxShadow: '0 14px 44px rgba(8,42,89,.20)',
              display: 'block',
            }}
          />
          <div style={{ flex: '1 1 320px', maxWidth: '460px' }}>
            <p className="kicker">{m.kicker}</p>
            <h2 style={{ marginTop: '4px' }}>{m.h}</h2>
            <p style={{ color: 'var(--muted)' }}>{m.bio}</p>
            <div style={{ marginTop: '10px', fontWeight: 600, color: '#082a59' }}>
              ✦ In God We Trust · We build our future together
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '18px' }}>
              <a href={`tel:${PHONE_TEL}`} className="cta">📞 {m.talk}</a>
              <a
                href={`/${lang}/quote`}
                className="cta"
                style={{ background: '#fff', color: '#082a59', border: '2px solid #082a59' }}
              >
                {m.quote}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== All coverage in one place (full catalog lives on /insurance) ===== */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <p className="kicker">{t.nav.insurance}</p>
          <h2>{t.services.title}</h2>
          <p style={{ textAlign: 'center', marginTop: 14 }}>
            <Link className="cta" href={`/${lang}/insurance`}>{t.nav.insurance} →</Link>
          </p>
        </div>
      </section>
      <RelatedCoverage lang={lang} />

      {/* ===== FAQ — answers the questions people quietly worry about ===== */}
      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container">
          <h2>{t.homeFaq.title}</h2>
          <div style={{ maxWidth: '46rem', margin: '0 auto' }}>
            {t.homeFaq.items.map((f: { q: string; a: string }) => (
              <details
                key={f.q}
                style={{
                  background: '#fff',
                  border: '1px solid #e6ecf5',
                  borderRadius: 14,
                  padding: '14px 18px',
                  marginBottom: 10,
                }}
              >
                <summary style={{ fontWeight: 700, color: 'var(--navy)', cursor: 'pointer', fontSize: '1.05rem' }}>
                  {f.q}
                </summary>
                <p style={{ marginTop: 8, color: 'var(--muted)' }}>{f.a}</p>
              </details>
            ))}
            <p style={{ textAlign: 'center', marginTop: 22 }}>
              <Link className="cta" href={`/${lang}/quote`}>{t.hero.cta} →</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
