import Link from 'next/link';
import { getProductsByCategory } from '@/lib/insurance-products';
import InsuranceCategoryNav from '@/components/InsuranceCategoryNav';
import { buildAlternates } from '@/lib/seo';

const CATEGORIES: {
  key: 'auto' | 'home' | 'commercial' | 'life' | 'specialty';
  title: string;
  icon: string;
}[] = [
  { key: 'auto', title: 'Auto Insurance', icon: '🚗' },
  { key: 'home', title: 'Home Insurance', icon: '🏠' },
  { key: 'commercial', title: 'Commercial Insurance', icon: '🏢' },
  { key: 'life', title: 'Life Insurance', icon: '❤️' },
  { key: 'specialty', title: 'Other Private Insurance', icon: '⛵' },
];

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return {
    title: 'Insurance Services | M&K Agency, Florida',
    description:
      'Auto, home, commercial, life, and specialty insurance coverage options from M&K Agency — serving all of Florida.',
    alternates: buildAlternates(params.lang, '/insurance'),
  };
}

export default function InsuranceHub({ params }: { params: { lang: string } }) {
  return (
    <main>
      <section
        className="team-hero"
        style={{ backgroundImage: "url('/images/Professional_Agent.jpg')" }}
      >
        <div className="team-hero-overlay">
          <div className="container">
            <h1>One agency. Every kind of coverage.</h1>
            <p>
              For home insurance, we compare 15+ A-rated Florida carriers so you get the right
              coverage at the right price. For your car, your business, and the people who
              depend on you, we'll make sure you have the right protection too.
            </p>
          </div>
        </div>
      </section>

      <section className="insurance-cat-nav-wrap">
        <InsuranceCategoryNav />
      </section>

      <section className="team-body">
        <div className="container">
          {CATEGORIES.map((cat) => {
            const products = getProductsByCategory(cat.key);
            if (products.length === 0) return null;
            return (
              <div key={cat.key} id={cat.key} className="insurance-cat-section">
                {/* Design D: photo banner header per category */}
                <div className="cat-banner">
                  <img src={`/images/cat-${cat.key}.jpg`} alt={cat.title} />
                  <div className="cat-banner-t">
                    <h2>{cat.icon} {cat.title}</h2>
                  </div>
                </div>
                <div className="cards4">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${params.lang}/insurance/${p.slug}`}
                      className="svc"
                    >
                      <h3>{p.title}</h3>
                      <p>{p.shortIntro}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="center-cta">
            <Link href={`/${params.lang}/quote`} className="cta">
              Have an agent call me →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
