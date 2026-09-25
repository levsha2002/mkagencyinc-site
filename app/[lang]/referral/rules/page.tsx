import { referralRules } from '@/lib/legal-content';
import { pageMetadata, clipDescription } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const lang = (params.lang as 'en' | 'es' | 'ru') in referralRules ? (params.lang as 'en' | 'es' | 'ru') : 'en';
  return pageMetadata({ lang: params.lang, path: '/referral/rules', title: `${referralRules[lang].title} | M&K Agency`, description: clipDescription(referralRules[lang].intro) });
}

export default function ReferralRulesPage({ params }: { params: { lang: string } }) {
  const lang = (params.lang as 'en' | 'es' | 'ru') in referralRules ? (params.lang as 'en' | 'es' | 'ru') : 'en';
  const doc = referralRules[lang];

  return (
    <main>
      <section className="section" style={{ maxWidth: 780, margin: '0 auto' }}>
        <div className="container">
          <h1 style={{ textAlign: 'left', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: 'var(--navy)', marginBottom: 8 }}>{doc.title}</h1>
          <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: 20 }}>
            {doc.effectiveDateLabel}
          </p>
          <p style={{ color: '#444', lineHeight: 1.6, marginBottom: 24 }}>{doc.intro}</p>

          {doc.sections.map((s) => (
            <div key={s.heading} style={{ marginBottom: 22 }}>
              <h3 style={{ color: 'var(--navy)', fontSize: '1.1rem', marginBottom: 8 }}>
                {s.heading}
              </h3>
              {s.body.map((p, i) => (
                <p key={i} style={{ color: '#444', lineHeight: 1.6, marginBottom: 10 }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
