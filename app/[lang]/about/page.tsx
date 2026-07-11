import { getDict, ADDRESS, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';
import TeamSection from '@/components/TeamSection';

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

          <div>
            <div className="office-map-side">
              <div className="office-map-embed">
                <iframe
                  title="M&K Agency office location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <img
                src="/images/key-west.jpg"
                alt="Key West coastline"
                className="key-west-side-img"
              />
            </div>

            <div className="office" style={{ marginTop: 20 }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: 10 }}>📍 {t.about.visit}</h3>
              <p style={{ fontWeight: 700 }}>M&K Agency Inc.</p>
              <p>{ADDRESS}</p>
              <p style={{ marginTop: 12 }}>
                <a href={`tel:${PHONE_TEL}`} style={{ color: 'var(--blue)', fontWeight: 800 }}>{PHONE_DISPLAY}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection lang={params.lang} />
    </main>
  );
}
