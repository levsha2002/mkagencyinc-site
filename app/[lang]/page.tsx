import Link from 'next/link';
import { getDict, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const t = getDict(lang);
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
            <a href={`tel:${PHONE_TEL}`} className="cta">📞 {t.call247} · {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
