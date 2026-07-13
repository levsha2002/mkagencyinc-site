import Link from 'next/link';
import { getProductsByCategory } from '@/lib/insurance-products';

const CATEGORIES: { key: 'auto' | 'home' | 'commercial' | 'specialty'; title: string; icon: string }[] = [
  { key: 'auto', title: 'Auto Insurance', icon: '🚗' },
  { key: 'home', title: 'Home Insurance', icon: '🏠' },
  { key: 'commercial', title: 'Business Insurance', icon: '🏢' },
  { key: 'specialty', title: 'Other Private Insurance', icon: '⛵' },
];

export async function generateMetadata() {
  return {
    title: 'Insurance Products | M&K Agency, Florida',
    description: 'Explore auto, home, commercial, and specialty insurance coverage options from M&K Agency — serving all of Florida.',
  };
}

export default function InsuranceHub({ params }: { params: { lang: string } }) {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="kicker">Coverage</p>
          <h2>Find the right insurance for you</h2>

          {CATEGORIES.map((cat) => {
            const products = getProductsByCategory(cat.key);
            return (
              <div key={cat.key} style={{ marginTop: 44 }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.3rem', marginBottom: 18 }}>
                  {cat.icon} {cat.title}
                </h3>
                <div className="cards4">
                  {products.map((p) => (
                    <Link key={p.slug} href={`/${params.lang}/insurance/${p.slug}`} className="svc">
                      <h3>{p.title}</h3>
                      <p>{p.shortIntro}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="center-cta">
            <Link href={`/${params.lang}/quote`} className="cta">Get a free quote →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
