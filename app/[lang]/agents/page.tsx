import Link from 'next/link';
import { team } from '@/lib/team-data';
import { buildAlternates } from '@/lib/seo';

// "Our Agents" — Design G: sticky action panel + agent rows with photos.
// Contact-by-name: every agent has call + text (SMS pre-fills their name).

type Lang = 'en' | 'es' | 'ru';
const PHONE = '3058593953';

const T: Record<Lang, any> = {
  en: {
    metaTitle: 'Our Agents | Call or Text Any of Us by Name | M&K Agency',
    metaDesc: 'Meet the licensed M&K Agency team — Mikhail, Craig, Shane, Elena and more. Call or text any agent by name. English · Español · По-русски.',
    kicker: 'OUR TEAM',
    h1a: 'Our', h1b: 'Agents',
    sub: 'Real, licensed people — pick who you want to talk to, and reach them by name.',
    panelTitle: 'Reach us your way',
    panelSub: 'Call, text, visit — or request a callback and we call you.',
    callUs: 'Call us', textUs: 'Text us', visitUs: 'Visit us',
    callback: 'Request a callback →',
    rated: '4.53★ · 68 verified reviews',
    community: 'See how our team gives back →',
    callT: 'Call', textT: 'Text',
    smsBody: "Hi! I'd like to talk to {name} about my insurance.",
  },
  es: {
    metaTitle: 'Nuestros Agentes | Llame o Envíe un Texto por Nombre | M&K Agency',
    metaDesc: 'Conozca al equipo licenciado de M&K Agency — Mikhail, Craig, Shane, Elena y más. Llame o envíe un texto a cualquier agente por nombre.',
    kicker: 'NUESTRO EQUIPO',
    h1a: 'Nuestros', h1b: 'Agentes',
    sub: 'Personas reales y licenciadas — elija con quién hablar y contáctelo por nombre.',
    panelTitle: 'Contáctenos a su manera',
    panelSub: 'Llame, envíe un texto, visítenos — o solicite una llamada.',
    callUs: 'Llámenos', textUs: 'Texto', visitUs: 'Visítenos',
    callback: 'Solicitar una llamada →',
    rated: '4.53★ · 68 reseñas verificadas',
    community: 'Vea cómo nuestro equipo ayuda a la comunidad →',
    callT: 'Llamar', textT: 'Texto',
    smsBody: 'Hola! Me gustaría hablar con {name} sobre mi seguro.',
  },
  ru: {
    metaTitle: 'Наши агенты | Позвоните или напишите любому по имени | M&K Agency',
    metaDesc: 'Команда лицензированных агентов M&K Agency — Михаил, Craig, Shane, Elena и другие. Звоните или пишите любому агенту по имени. Говорим по-русски.',
    kicker: 'НАША КОМАНДА',
    h1a: 'Наши', h1b: 'агенты',
    sub: 'Живые лицензированные люди — выберите, с кем говорить, и свяжитесь по имени.',
    panelTitle: 'Свяжитесь, как удобно',
    panelSub: 'Позвоните, напишите SMS, приезжайте — или закажите обратный звонок.',
    callUs: 'Позвонить', textUs: 'SMS', visitUs: 'Приехать',
    callback: 'Заказать обратный звонок →',
    rated: '4.53★ · 68 проверенных отзывов',
    community: 'Как наша команда помогает сообществу →',
    callT: 'Позвонить', textT: 'Написать',
    smsBody: 'Здравствуйте! Хочу поговорить с {name} о страховке.',
  },
};

function pick(lang: string): { l: Lang; t: any } {
  const l: Lang = lang === 'es' || lang === 'ru' ? (lang as Lang) : 'en';
  return { l, t: T[l] };
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const { t } = pick(params.lang);
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: buildAlternates(params.lang, '/agents'),
  };
}

export default function AgentsPage({ params }: { params: { lang: string } }) {
  const { l, t } = pick(params.lang);

  return (
    <main>
      <section className="section" style={{ paddingBottom: 24 }}>
        <div className="container">
          <p className="kicker">{t.kicker}</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
            {t.h1a} <span style={{ borderBottom: '4px solid var(--gold)' }}>{t.h1b}</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: 10 }}>{t.sub}</p>
        </div>
      </section>

      <section style={{ paddingBottom: 64 }}>
        <div className="container agents-layout">
          {/* Sticky action panel (Design G) */}
          <aside className="agents-panel">
            <strong>{t.panelTitle}</strong>
            <p>{t.panelSub}</p>
            <a href={`tel:${PHONE}`} className="ap-btn ap-gold">📞 {t.callUs}</a>
            <a href={`sms:${PHONE}`} className="ap-btn">💬 {t.textUs}</a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=33550+S+Dixie+Hwy+Suite+102+Florida+City+FL+33034"
              target="_blank" rel="noopener noreferrer" className="ap-btn"
            >📍 {t.visitUs}</a>
            <Link href={`/${l}/quote`} className="ap-cta">{t.callback}</Link>
            <span className="ap-rated">★ {t.rated}</span>
          </aside>

          {/* Agent rows */}
          <div className="agents-list">
            {team.map((a, i) => {
              const body = encodeURIComponent(t.smsBody.replace('{name}', a.name));
              return (
                <div className="agent-row" key={a.slug} style={{ animationDelay: `${i * 0.06}s` }}>
                  <img src={a.photo} alt={a.name} />
                  <div className="ar-info">
                    <b>{a.name}</b>
                    <span className="ar-role">{a.role}</span>
                    {a.quote ? <em>“{a.quote}”</em> : null}
                  </div>
                  <div className="ar-actions">
                    <a href={`tel:${PHONE}`} title={`${t.callT} — ${a.name}`}>📞</a>
                    <a href={`sms:${PHONE}?body=${body}`} title={`${t.textT} — ${a.name}`}>💬</a>
                  </div>
                </div>
              );
            })}
            <p style={{ marginTop: 14 }}>
              <Link href={`/${l}/team`} style={{ color: 'var(--blue)', fontWeight: 700 }}>
                {t.community}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
