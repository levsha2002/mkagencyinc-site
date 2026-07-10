import Link from 'next/link';
import { getDict, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';

const meet: Record<string, Record<string, string>> = {
  en: {
    kicker: 'Meet your agent',
    h: "Hi, I'm Mikhail Kozlov.",
    bio: 'For years, my family and I have protected families and businesses across Florida. Insurance is about people, not policies — when you call, you reach me and my team, in English, Spanish, or Russian.',
    talk: 'Talk to Mikhail',
    quote: 'Get a free quote →',
  },
  es: {
    kicker: 'Conoce a tu agente',
    h: 'Hola, soy Mikhail Kozlov.',
    bio: 'Durante años, mi familia y yo hemos protegido a familias y negocios en Florida. El seguro se trata de personas, no de pólizas — cuando llamas, hablas conmigo y mi equipo, en inglés, español o ruso.',
    talk: 'Habla con Mikhail',
    quote: 'Cotización gratis →',
  },
  ru: {
    kicker: 'Ваш агент',
    h: 'Здравствуйте, я Михаил Козлов.',
    bio: 'Уже много лет мы с семьёй защищаем семьи и бизнес по всей Флориде. Страхование — это о людях, а не о полисах. Когда вы звоните, вы говорите со мной и моей командой — на английском, испанском или русском.',
    talk: 'Поговорить с Михаилом',
    quote: 'Бесплатный расчёт →',
  },
};

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const t = getDict(lang);
  const m = meet[lang] || meet.en;
  return (
    <main>
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
              <span className="stars">★★★★★</span>
              <span><strong>Mikhail Kozlov</strong> · {t.hero.rated}</span>
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
          <img
            src="/images/mikhail.jpg"
            alt="Mikhail Kozlov, Founder of M&K Agency"
            style={{
              width: '270px',
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
          <p className="kicker">{t.nav.services}</p>
          <h2>{t.services.title}</h2>
          <div className="cards4">
            <div className="svc"><div className="ico">🚗</div><h3>{t.services.auto.h}</h3><p>{t.services.auto.p}</p></div>
            <div className="svc"><div className="ico">🏠</div><h3>{t.services.home.h}</h3><p>{t.services.home.p}</p></div>
            <div className="svc"><div className="ico">🏢</div><h3>{t.services.commercial.h}</h3><p>{t.services.commercial.p}</p></div>
            <div className="svc"><div className="ico">❤️</div><h3>{t.services.life.h}</h3><p>{t.services.life.p}</p></div>
          </div>
          <div className="center-cta">
            <a href={`/${lang}/quote`} className="cta" style={{ marginRight: '8px' }}>🧾 {m.quote}</a>
            <a href={`tel:${PHONE_TEL}`} className="cta">📞 {t.call247} · {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
