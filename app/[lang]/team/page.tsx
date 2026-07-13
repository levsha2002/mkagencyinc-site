import { getDict, ADDRESS, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';
import TeamSection from '@/components/TeamSection';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).team;
  return {
    title: t.metaTitle,
    description: t.metaDesc,
  };
}

export default function TeamPage({ params }: { params: { lang: string } }) {
  const dict = getDict(params.lang);
  const t = dict.team;
  const about = dict.about;

  return (
    <main>
      <section
        className="team-hero"
        style={{ backgroundImage: "url('/images/Hero-hurricane.jpg')" }}
      >
        <div className="team-hero-overlay">
          <div className="container">
            <h1>{t.h1}</h1>
            <p>{t.sub}</p>
          </div>
        </div>
      </section>

      {/* ===== Company story + office (merged from About Us) ===== */}
      <section className="section">
        <div className="container about-grid">
          <div>
            <p className="kicker">{dict.nav.about}</p>
            <h2 style={{ textAlign: 'left' }}>{about.h}</h2>
            <p style={{ margin: '14px 0', color: 'var(--muted)' }}>{about.p1}</p>
            <p style={{ color: 'var(--muted)' }}>{about.p2}</p>
            <ul>
              {about.points.map((p: string, i: number) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="office-map-side">
              <div className="office-map-embed">
                <iframe
                  title="M&K Agency office location"
                  src="https://www.google.com/maps?q=25.4567,-80.4746&z=17&output=embed"
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
              <h3 style={{ color: 'var(--navy)', marginBottom: 10 }}>📍 {about.visit}</h3>
              <p style={{ fontWeight: 700 }}>M&K Agency Inc.</p>
              <p>{ADDRESS}</p>
              <p style={{ marginTop: 12 }}>
                <a href={`tel:${PHONE_TEL}`} style={{ color: 'var(--blue)', fontWeight: 800 }}>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team intro ===== */}
      <section className="team-intro">
        <div className="container team-intro-grid">
          <div>
            <p>{t.intro1}</p>
            <p>{t.intro2}</p>
          </div>
          <img src="/images/Professional_Agent.jpg" alt="" className="team-intro-img" />
        </div>
      </section>

      {/* ===== Full agent roster ===== */}
      <TeamSection lang={params.lang} />

      <section
        className="team-community-banner"
        style={{ backgroundImage: "url('/images/Flood_water_street.jpg')" }}
      >
        <div className="team-community-overlay">
          <div className="container">
            <h2>{t.communityTitle}</h2>
            <p>{t.communityBody}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
