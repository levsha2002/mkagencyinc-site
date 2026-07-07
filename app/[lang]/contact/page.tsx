import { getDict, ADDRESS, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang);
  return {
    title: t.contact.metaTitle,
    description: t.contact.metaDesc,
    alternates: {
      canonical: `/${params.lang}/contact`,
      languages: { en: '/en/contact', es: '/es/contact', ru: '/ru/contact' },
    },
  };
}

export default function Contact({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang);
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="kicker">{t.nav.contact}</p>
          <h2>{t.contact.h}</h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)' }}>{t.contact.sub}</p>
          <div className="contact-cards">
            <div className="ccard">
              <div className="ico">📞</div>
              <h3>{t.contact.callUs}</h3>
              <a className="big" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              <p>{t.contact.hours}</p>
            </div>
            <div className="ccard">
              <div className="ico">💬</div>
              <h3>{t.contact.textUs}</h3>
              <a className="big" href={`sms:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              <p>SMS</p>
            </div>
            <div className="ccard">
              <div className="ico">📍</div>
              <h3>{t.contact.visitUs}</h3>
              <p style={{ fontWeight: 700, color: 'var(--navy)' }}>{ADDRESS}</p>
            </div>
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
