import Link from 'next/link';
import { getDict, ADDRESS, PHONE_TEL, PHONE_DISPLAY } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import AgentAvatars from '@/components/AgentAvatars';
import { buildAlternates } from '@/lib/seo';

const GUIDED: Record<string, { line: string; btn: string }> = {
  en: { line: 'Prefer a guided, step-by-step form? Tell us what you need and a licensed agent calls you back.', btn: 'Request a callback →' },
  es: { line: '¿Prefiere un formulario guiado paso a paso? Díganos qué necesita y un agente licenciado le devuelve la llamada.', btn: 'Solicitar una llamada →' },
  ru: { line: 'Хотите удобную пошаговую форму? Скажите, что нужно, и лицензированный агент перезвонит вам.', btn: 'Заказать обратный звонок →' },
};

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang);
  return {
    title: t.contact.metaTitle,
    description: t.contact.metaDesc,
    alternates: buildAlternates(params.lang, '/contact'),
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

          <AgentAvatars />

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
          <div style={{ textAlign: 'center', marginBottom: 22 }}>
            <p style={{ color: 'var(--muted)', marginBottom: 12 }}>
              {(GUIDED[params.lang] || GUIDED.en).line}
            </p>
            <Link className="cta" href={`/${params.lang}/quote`}>
              {(GUIDED[params.lang] || GUIDED.en).btn}
            </Link>
          </div>
          <LeadForm lang={params.lang} />
        </div>
      </section>
    </main>
  );
}
