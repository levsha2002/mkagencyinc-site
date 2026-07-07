import { getDict, ADDRESS, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang);
  return {
    title: t.about.metaTitle,
    description: t.about.metaDesc,
    alternates: {
      canonical: `/${params.lang}/about`,
      languages: { en: '/en/about', es: '/es/about', ru: '/ru/about' },
    },
  };
}

export default function About({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang);
  return (
    <main>
      <section className="section">
        <div className="container about-grid">
          <div>
            <p className="kicker">{t.nav.about}</p>
            <h2 style={{ textAlign: 'left' }}>{t.about.h}</h2>
            <p style={{ margin: '14px 0', color: 'var(--muted)' }}>{t.about.p1}</p>
            <p style={{ color: 'var(--muted)' }}>{t.about.p2}</p>
            <ul>
              {t.about.points.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </div>
          <div className="office">
            <h3 style={{ color: 'var(--navy)', marginBottom: 10 }}>📍 {t.about.visit}</h3>
            <p style={{ fontWeight: 700 }}>M&K Agency Inc.</p>
            <p>{ADDRESS}</p>
            <p style={{ marginTop: 12 }}>
              <a href={`tel:${PHONE_TEL}`} style={{ color: 'var(--blue)', fontWeight: 800 }}>{PHONE_DISPLAY}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
