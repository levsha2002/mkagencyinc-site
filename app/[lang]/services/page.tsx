import { getDict, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang);
  return {
    title: t.services.metaTitle,
    description: t.services.metaDesc,
    alternates: {
      canonical: `/${params.lang}/services`,
      languages: { en: '/en/services', es: '/es/services', ru: '/ru/services' },
    },
  };
}

export default function Services({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang);
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="kicker">{t.nav.services}</p>
          <h2>{t.services.title}</h2>
          <div className="cards4" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="svc"><div className="ico">🚗</div><h3>{t.services.auto.h}</h3><p>{t.services.auto.p}</p></div>
            <div className="svc"><div className="ico">🏠</div><h3>{t.services.home.h}</h3><p>{t.services.home.p}</p></div>
            <div className="svc"><div className="ico">🏢</div><h3>{t.services.commercial.h}</h3><p>{t.services.commercial.p}</p></div>
            <div className="svc"><div className="ico">❤️</div><h3>{t.services.life.h}</h3><p>{t.services.life.p}</p></div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 30, fontWeight: 700, color: 'var(--navy)' }}>{t.services.cta}</p>
          <div className="center-cta">
            <a href={`tel:${PHONE_TEL}`} className="cta">📞 {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <LeadForm lang={params.lang} />
        </div>
      </section>
    </main>
  );
}
