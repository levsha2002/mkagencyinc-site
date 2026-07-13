import ReferralMap from '@/components/ReferralMap';
import ReferralForm from '@/components/ReferralForm';

export async function generateMetadata() {
  return {
    title: 'We Care About Our Community | M&K Agency, Florida',
    description:
      'A map of Florida small businesses our clients recommend — realtors, contractors, restaurants, and more. Verified by M&K Agency.',
  };
}

export default function ReferralPage() {
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
