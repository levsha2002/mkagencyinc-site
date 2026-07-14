import { referralRules } from '@/lib/legal-content';
import { buildAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const lang = (params.lang as 'en' | 'es' | 'ru') in referralRules ? (params.lang as 'en' | 'es' | 'ru') : 'en';
  return { title: `${referralRules[lang].title} | M&K Agency`, alternates: buildAlternates(params.lang, '/referral/rules') };
}

export default function ReferralRulesPage({ params }: { params: { lang: string } }) {
  const lang = (params.lang as 'en' | 'es' | 'ru') in referralRules ? (params.lang as 'en' | 'es' | 'ru') : 'en';
  const doc = referralRules[lang];

  return (
    <main>
      <section className="section" style={{ maxWidth: 780, margin: '0 auto' }}>
        <div className="container">
          <h2 style={{ textAlign: 'left' }}>{doc.title}</h2>
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
