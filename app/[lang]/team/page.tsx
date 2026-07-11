import { getDict, ADDRESS } from '@/lib/dictionaries';
import TeamSection from '@/components/TeamSection';
import LifeGallery from '@/components/LifeGallery';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).team;
  return {
    title: t.metaTitle,
    description: t.metaDesc,
  };
}

export default function TeamPage({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).team;

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

      <section className="team-intro">
        <div className="container team-intro-grid">
          <div>
            <p>{t.intro1}</p>
            <p>{t.intro2}</p>
          </div>
          <img src="/images/Professional_Agent.jpg" alt="" className="team-intro-img" />
        </div>
      </section>

      <TeamSection lang={params.lang} />

      <section className="office-map-section">
        <div className="container office-map-grid">
          <div className="office-map-embed">
            <iframe
              title="M&K Agency office location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <p className="kicker">{t.officeKicker}</p>
            <h2 style={{ textAlign: 'left' }}>{t.officeTitle}</h2>
            <p style={{ color: 'var(--muted)' }}>{t.officeBody}</p>
          </div>
        </div>
        <div className="container">
          <img
            src="/images/key-west.jpg"
            alt="Key West coastline"
            className="key-west-img"
          />
        </div>
      </section>

      <LifeGallery />

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
