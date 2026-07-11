import { getDict } from '@/lib/dictionaries';
import TeamSection from '@/components/TeamSection';

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
