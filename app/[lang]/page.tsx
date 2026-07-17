import Link from 'next/link';
import Image from 'next/image';
import { getDict, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import RelatedCoverage from '@/components/RelatedCoverage';
import { buildAlternates } from '@/lib/seo';

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
            <p className="sub">{t.hero.sub}</p>
            <a href="#quote" className="cta">{t.hero.cta} →</a>
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
          <LeadForm lang={lang} />
        </div>
      </section>

      <div className="strip">✦ {t.hero.strip}</div>

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

      <section className="section">
        <div className="container">
          <p className="kicker">{t.nav.insurance}</p>
          <h2>{t.services.title}</h2>
          <div className="cards4">
            <Link className="svc" href={`/${lang}/car-insurance-florida-city`} style={{ textDecoration: 'none', color: 'inherit' }}><div className="ico">🚗</div><h3>{t.services.auto.h}</h3><p>{t.services.auto.p}</p></Link>
            <Link className="svc" href={`/${lang}/homeowners-insurance-florida-city`} style={{ textDecoration: 'none', color: 'inherit' }}><div className="ico">🏠</div><h3>{t.services.home.h}</h3><p>{t.services.home.p}</p></Link>
            <Link className="svc" href={`/${lang}/insurance#commercial`} style={{ textDecoration: 'none', color: 'inherit' }}><div className="ico">🏢</div><h3>{t.services.commercial.h}</h3><p>{t.services.commercial.p}</p></Link>
            <Link className="svc" href={`/${lang}/life`} style={{ textDecoration: 'none', color: 'inherit' }}><div className="ico">❤️</div><h3>{t.services.life.h}</h3><p>{t.services.life.p}</p></Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: 18 }}>
            <Link className="cta" href={`/${lang}/insurance`}>{t.nav.insurance} →</Link>
          </p>
        </div>
      </section>

      {/* ===== All coverage cross-links (Auto, Home, SR-22, Umbrella, …) ===== */}
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
              <a className="cta" href="#quote">{t.hero.cta} →</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
