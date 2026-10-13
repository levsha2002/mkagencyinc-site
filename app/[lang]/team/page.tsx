import { getDict, ADDRESS, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';
import TeamSection from '@/components/TeamSection';
import { pageMetadata } from '@/lib/seo';
import Image from 'next/image';
import WhatsAppLink from '@/components/WhatsAppLink';
import OfficeMap from '@/components/OfficeMap';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).team;
  return pageMetadata({
    lang: params.lang,
    path: '/team',
    title: t.metaTitle,
    description: t.metaDesc,
  });
}

export default function TeamPage({ params }: { params: { lang: string } }) {
  const dict = getDict(params.lang);
  const t = dict.team;
  const about = dict.about;

  return (
    <main>
      <section className="team-hero">
        <Image
          src="/images/Hero-hurricane.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="team-hero-img"
        />
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
              <OfficeMap label={t.officeMapLabel} title="M&K Agency office location" />
              {/* Sized from the CSS 4/3 aspect ratio; the class still controls
                  the actual layout, these dimensions only tell next/image what
                  to generate. */}
              <Image
                src="/images/key-west.jpg"
                alt="Key West coastline"
                width={640}
                height={480}
                sizes="(max-width: 560px) 50vw, 320px"
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
                {' · '}
                <WhatsAppLink lang={params.lang} placement="team_office" className="wa-link" style={{ color: 'var(--blue)', fontWeight: 800 }} />
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
          <Image
            src="/images/Professional_Agent.jpg"
            alt=""
            width={1152}
            height={864}
            className="team-intro-img"
            sizes="(max-width: 900px) 100vw, 560px"
          />
        </div>
      </section>

      {/* ===== Full agent roster ===== */}
      <TeamSection lang={params.lang} />

      <section className="team-community-banner">
        <Image
          src="/images/Flood_water_street.jpg"
          alt=""
          fill
          sizes="100vw"
          className="team-hero-img"
        />
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
