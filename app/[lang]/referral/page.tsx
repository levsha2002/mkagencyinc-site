import Link from 'next/link';
import { getDict } from '@/lib/dictionaries';
import ReferralMap from '@/components/ReferralMap';
import ReferralForm from '@/components/ReferralForm';
import { buildAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).referral;
  return {
    title: `${t.heroTitle} | M&K Agency, Florida`,
    description: t.heroSub,
    alternates: buildAlternates(params.lang, '/referral'),
  };
}

export default function ReferralPage({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).referral;

  return (
    <main>
      <section className="life-hero">
        <div className="container">
          <h1>
            {t.heroTitle}
            <br />
            <span className="accent">{t.heroAccent}</span>
          </h1>
          <p>{t.heroSub}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kicker">{t.purposeTitle}</p>
          <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: 680, margin: '0 auto 28px' }}>
            {t.purposeBody}
          </p>

          <div
            style={{
              background: '#fff8e6',
              border: '1px solid #f0dca0',
              borderRadius: 14,
              padding: '14px 18px',
              marginBottom: 20,
              color: '#7a5c00',
              fontSize: '.88rem',
              lineHeight: 1.5,
            }}
          >
            ⚠️ {t.disclaimer}{' '}
            <Link href={`/${params.lang}/referral/rules`} style={{ color: '#7a5c00', textDecoration: 'underline' }}>
              {t.rulesLink}
            </Link>
          </div>

          <ReferralMap searchPlaceholder={t.searchPlaceholder} />
          <p style={{ textAlign: 'center', marginTop: 16, fontSize: '.85rem' }}>
            <Link href={`/${params.lang}/referral/rules`} style={{ color: 'var(--blue)' }}>
              {t.rulesLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <p className="kicker">{t.recommendKicker}</p>
          <ReferralForm t={t} />
        </div>
      </section>
    </main>
  );
}
