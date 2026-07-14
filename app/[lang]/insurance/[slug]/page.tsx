import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { insuranceProducts, getProductBySlug } from '@/lib/insurance-products';
import InsuranceQuoteForm from '@/components/InsuranceQuoteForm';
import HumanLifeValueCalculator from '@/components/HumanLifeValueCalculator';
import { buildAlternates } from '@/lib/seo';

export async function generateStaticParams() {
  return insuranceProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { lang: string; slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.title} | M&K Agency, Florida`,
    description: product.shortIntro,
    alternates: buildAlternates(params.lang, `/insurance/${params.slug}`),
  };
}

const VALID_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

// Auto-discovers every photo dropped into public/images/insurance/<slug>/ —
// same pattern as the Life at M&K gallery. Drop in as many photos as you
// want; no code changes needed. Falls back to the hardcoded product.images
// (if any) when no dedicated folder exists yet.
function getProductPhotos(slug: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'insurance', slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => VALID_EXT.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/images/insurance/${slug}/${f}`);
  } catch {
    return [];
  }
}

export default function InsuranceProductPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  const folderPhotos = getProductPhotos(product.slug);
  const photos =
    folderPhotos.length > 0
      ? folderPhotos
      : (product.images || []).map((img) => img.src);

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

            {product.liabilityExamples && product.liabilityExamples.length > 0 && (
              <div style={{ marginTop: 20 }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.1rem', marginBottom: 10 }}>
                  What do liability claims actually look like?
                </h3>
                <ul>
                  {product.liabilityExamples.map((ex, i) => (
                    <li key={i} style={{ marginBottom: 10 }}>{ex}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.humanLifeValueNote && (
              <p style={{ color: '#444', lineHeight: 1.6, marginTop: 20 }}>
                {product.humanLifeValueNote}
              </p>
            )}

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

            {photos.length > 0 && (
              <div className="insurance-photo-grid" style={{ marginTop: 24 }}>
                {photos.map((src) => (
                  <img key={src} src={src} alt={product.title} />
                ))}
              </div>
            )}
          </div>

          <InsuranceQuoteForm product={product} lang={params.lang} />
          {product.slug === 'life-insurance' && <HumanLifeValueCalculator />}
        </div>
      </section>
    </main>
  );
}
