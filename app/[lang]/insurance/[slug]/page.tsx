import { notFound } from 'next/navigation';
import { insuranceProducts, getProductBySlug } from '@/lib/insurance-products';
import InsuranceQuoteForm from '@/components/InsuranceQuoteForm';

export async function generateStaticParams() {
  return insuranceProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.title} | M&K Agency, Florida`,
    description: product.shortIntro,
  };
}

export default function InsuranceProductPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <main>
      <section className="section">
        <div className="container about-grid">
          <div>
            <p className="kicker">Coverage</p>
            <h2 style={{ textAlign: 'left' }}>{product.title}</h2>
            <p style={{ margin: '14px 0', color: 'var(--muted)' }}>{product.shortIntro}</p>

            {product.article.map((para, i) => (
              <p key={i} style={{ color: '#444', lineHeight: 1.6, marginBottom: 14 }}>
                {para}
              </p>
            ))}

            {product.note && (
              <div
                style={{
                  background: '#fff8e6',
                  border: '1px solid #f0dca0',
                  borderRadius: 14,
                  padding: '14px 18px',
                  margin: '18px 0',
                  color: '#7a5c00',
                  fontSize: '.92rem',
                }}
              >
                ⚠️ {product.note}
              </div>
            )}

            <ul>
              {product.coverageHighlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            {product.subtypes && product.subtypes.length > 0 && (
              <div style={{ marginTop: 28 }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.1rem', marginBottom: 14 }}>
                  Types of coverage we can quote
                </h3>
                <div style={{ display: 'grid', gap: 12 }}>
                  {product.subtypes.map((s) => (
                    <div
                      key={s.name}
                      style={{
                        background: '#f7f8fa',
                        borderRadius: 12,
                        padding: '14px 16px',
                      }}
                    >
                      <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>
                        {s.name}
                      </p>
                      <p style={{ color: '#555', fontSize: '.92rem', margin: 0 }}>
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.images && product.images.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${product.images.length}, 1fr)`,
                  gap: 10,
                  marginTop: 24,
                }}
              >
                {product.images.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: '100%',
                      aspectRatio: '4 / 3',
                      objectFit: 'cover',
                      borderRadius: 14,
                      background: '#dfe4ea',
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <InsuranceQuoteForm product={product} lang={params.lang} />
        </div>
      </section>
    </main>
  );
}
