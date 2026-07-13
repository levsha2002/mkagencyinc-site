import Link from 'next/link';
import ReferralMap from '@/components/ReferralMap';
import ReferralForm from '@/components/ReferralForm';

export async function generateMetadata() {
  return {
    title: 'We Care About Our Community | M&K Agency, Florida',
    description:
      'A map of Florida small businesses our clients recommend — realtors, contractors, restaurants, and more. Verified by M&K Agency.',
  };
}

export default function ReferralPage({ params }: { params: { lang: string } }) {
  return (
    <main>
      <section className="life-hero">
        <div className="container">
          <h1>
            We Care About Our Community
            <br />
            <span className="accent">Our Clients Recommend</span>
          </h1>
          <p>
            A map of Florida small businesses our neighbors already trust — realtors,
            contractors, restaurants, and more. Every listing is personally verified by
            our team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ReferralMap />
          <p style={{ textAlign: 'center', marginTop: 16, fontSize: '.85rem' }}>
            <Link href={`/${params.lang}/referral/rules`} style={{ color: 'var(--blue)' }}>
              Official Program Rules
            </Link>
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <ReferralForm />
        </div>
      </section>
    </main>
  );
}
