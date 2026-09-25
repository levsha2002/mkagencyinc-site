import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { insuranceProducts, getProductBySlug } from '@/lib/insurance-products';
import { getDict, PHONE_DISPLAY, PHONE_TEL, ADDRESS, LICENSE_LINE } from '@/lib/dictionaries';
import RatingBadge from '@/components/RatingBadge';
import InsuranceQuoteForm from '@/components/InsuranceQuoteForm';
import HumanLifeValueCalculator from '@/components/HumanLifeValueCalculator';
import { pageMetadata } from '@/lib/seo';
import { getProductUI } from '@/lib/insurance-products-i18n';
import Image from 'next/image';

// ISR: re-render daily. The rating comes from data/reviews.json (see lib/reviews.ts);
// an optional live fetch (RATING_LIVE_FETCH=1) is cached for a week.
export const revalidate = 86400;

export async function generateStaticParams() {
  return insuranceProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { lang: string; slug: string } }) {
  const product = getProductBySlug(params.slug, params.lang);
  if (!product) return {};
  return pageMetadata({
    lang: params.lang,
    path: `/insurance/${params.slug}`,
    title: `${product.title} | M&K Agency, Florida`,
    description: `${product.shortIntro} ${getDict(params.lang).productPage.metaSuffix}`,
  });
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
  const product = getProductBySlug(params.slug, params.lang);
  if (!product) return notFound();
  const ui = getProductUI(params.lang);

  const folderPhotos = getProductPhotos(product.slug);
  const photos =
    folderPhotos.length > 0
      ? folderPhotos
      : (product.images || []).map((img) => img.src);

  const pp = getDict(params.lang).productPage;

  return (
    <main>
      {/* Above the fold: real H1, phone digits + call/text CTAs, then the form.
          On phones the grid stacks, so the form now starts right after the
          intro instead of ~1,000px down below the article. */}
      <section className="section product-top">
        <div className="container about-grid product-top-grid">
          <div>
            <p className="kicker" style={{ textAlign: 'left' }}>{ui.kicker}</p>
            <h1 className="product-h1">
              {product.title} {pp.h1Suffix}
            </h1>
            <p className="product-intro">{product.shortIntro}</p>
            <div className="product-cta-row">
              <a href={`tel:${PHONE_TEL}`} className="cta product-call">
                📞 {pp.callCta} {PHONE_DISPLAY}
              </a>
              <a href={`sms:${PHONE_TEL}`} className="cta product-text">
                💬 {pp.textCta}
              </a>
            </div>
            <p className="product-hours">{pp.hours}</p>
          </div>

          <InsuranceQuoteForm product={product} lang={params.lang} />
        </div>

        <div className="container">
          <div className="product-trust" aria-label={pp.trustTitle}>
            <strong>{pp.trustTitle}</strong>
            <span>
              📍 {pp.office}: M&amp;K Agency Inc. · {ADDRESS}
            </span>
            <span>
              📞 <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> · {pp.hours}
            </span>
            <span>🪪 {LICENSE_LINE}</span>
            <span>
              <RatingBadge lang={params.lang} />
            </span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container product-body">
          <div>
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
                  {ui.liabilityHeading}
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
                  {ui.subtypesHeading}
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
                  <Image
                    key={src}
                    src={src}
                    alt={product.title}
                    width={800}
                    height={600}
                    sizes="(max-width: 600px) 50vw, 200px"
                  />
                ))}
              </div>
            )}
            <p style={{ fontSize: '.8rem', color: 'var(--muted)', marginTop: 18 }}>{pp.underwriting}</p>
          </div>
          {product.slug === 'life-insurance' && <HumanLifeValueCalculator lang={params.lang} />}
        </div>
      </section>
    </main>
  );
}
