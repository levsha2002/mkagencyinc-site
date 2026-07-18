import Link from 'next/link';
import Image from 'next/image';
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

      {/* ===== Refer-a-friend card (printable / shareable) ===== */}
      <section className="section">
        <div className="container" style={{ maxWidth: 620 }}>
          <div
            style={{
              background: '#fff',
              border: '2px solid #082a59',
              borderRadius: 20,
              padding: '32px 28px',
              textAlign: 'center',
              boxShadow: '0 14px 44px rgba(8,42,89,.14)',
            }}
          >
            <h2 style={{ marginTop: 0, color: '#082a59', fontSize: '1.6rem' }}>
              A Referral is the Best Compliment
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: 6, fontSize: '1.05rem' }}>
              Share the QR code, share the care.
            </p>

            <div style={{ borderTop: '1px solid #e6ecf5', margin: '20px 0 16px' }} />

            <div
              style={{
                display: 'flex',
                gap: 22,
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                textAlign: 'left',
              }}
            >
              <Image
                src="/images/referral-qr.png"
                alt="QR code — share M&K Agency"
                width={120}
                height={120}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 12,
                  border: '1px solid #e6ecf5',
                  flex: '0 0 auto',
                }}
              />
              <div style={{ flex: '1 1 220px', minWidth: 220 }}>
                <div style={{ fontWeight: 700, color: '#082a59', fontSize: '1.1rem' }}>
                  Mikhail Kozlov
                </div>
                <div style={{ color: 'var(--muted)', marginBottom: 10 }}>Agency Owner</div>

                <div style={{ lineHeight: 1.9, fontSize: '.98rem' }}>
                  <div>
                    📞 <a href="tel:+13058593953" style={{ color: '#082a59', fontWeight: 600 }}>(305) 859-3953</a>
                  </div>
                  <div>
                    ✉️ <a href="mailto:mikhailkozlov@allstate.com" style={{ color: '#082a59', fontWeight: 600 }}>mikhailkozlov@allstate.com</a>
                  </div>
                  <div style={{ color: 'var(--muted)' }}>
                    📍 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034
                  </div>
                </div>
              </div>
            </div>
          </div>
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
