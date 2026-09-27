import Image from 'next/image';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { pickLang } from '@/lib/coverage-check';
import { GAP, GAP_PATH, GAP_SOURCE, GAP_NOTE } from '@/lib/gap-insurance';
import CoverageCheckForm from '@/components/CoverageCheckForm';
import WhatsAppLink, { WhatsAppIcon } from '@/components/WhatsAppLink';

// /[lang]/gap-insurance: gap insurance landing page for new-car buyers.
// Same design system and short lead form as /coverage-check (source
// 'gap-insurance', Auto preselected, note "Gap insurance", same conversion
// tracking). Every CTA button jumps to the form (#quote). Phone numbers use
// PHONE_DISPLAY / PHONE_TEL so the site-wide call tracking applies. WhatsApp
// links on this page carry a gap-specific message (see WhatsAppLink
// pageText). Copy lives in lib/gap-insurance.ts.

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const c = GAP[pickLang(params.lang)];
  return pageMetadata({ lang: params.lang, path: GAP_PATH, title: c.metaTitle, description: c.metaDesc });
}

const NO_HASH_POLICY = {};

function CtaButton({ label }: { label: string }) {
  return (
    <a href="#quote" className="cta cc-cta">
      {label} →
    </a>
  );
}

export default function GapInsurancePage({ params }: { params: { lang: string } }) {
  const lang = pickLang(params.lang);
  const c = GAP[lang];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <main className="cc gap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ===== Hero ===== */}
      <section className="cc-hero">
        <div className="container cc-hero-grid">
          <div>
            <span className="badge gold">{c.badge}</span>
            <h1>{c.h1}</h1>
            <p className="cc-sub">{c.sub}</p>
            <div className="cc-cta-row">
              <CtaButton label={c.cta} />
              <a href={`tel:${PHONE_TEL}`} className="cta cc-call">
                📞 {c.callPrefix} <span className="cc-nowrap">{PHONE_DISPLAY}</span>
              </a>
            </div>
            <p className="cc-micro">{c.micro}</p>
            <WhatsAppLink lang={lang} placement="gap_hero" className="gap-wa">
              <WhatsAppIcon size={18} /> {c.waHero}
            </WhatsAppLink>
          </div>
          <div className="cc-hero-photo-wrap">
            <Image
              src="/images/cat-auto.jpg"
              alt={c.heroAlt}
              width={1280}
              height={720}
              priority
              sizes="(max-width: 900px) 100vw, 500px"
              className="cc-hero-photo"
            />
          </div>
        </div>
      </section>

      {/* ===== What it is + labeled example ===== */}
      <section className="section gap-what">
        <div className="container gap-what-grid">
          <div>
            <h2>{c.whatH2}</h2>
            {c.whatP.map((p) => (
              <p key={p} className="gap-p">{p}</p>
            ))}
          </div>
          <figure className="gap-example" aria-label={c.exLabel}>
            <span className="gap-ex-label">{c.exLabel}</span>
            <h3>{c.exH3}</h3>
            <dl className="gap-ex-rows">
              {c.exRows.map((r) => (
                <div key={r.k} className={r.gap ? 'gap-ex-row gap-ex-total' : 'gap-ex-row'}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
            <p>{c.exP}</p>
            <figcaption className="gap-ex-note">{c.exNote}</figcaption>
          </figure>
        </div>
        <div className="center-cta">
          <CtaButton label={c.cta} />
        </div>
      </section>

      {/* ===== Who needs it ===== */}
      <section className="section gap-who">
        <div className="container">
          <h2>{c.whoH2}</h2>
          <div className="gap-who-grid">
            {c.who.map((w) => (
              <article key={w.h} className="gap-who-card">
                <span className="gap-who-ico" aria-hidden="true">{w.icon}</span>
                <h3>{w.h}</h3>
                <p>{w.p}</p>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <CtaButton label={c.cta} />
          </div>
        </div>
      </section>

      {/* ===== What it doesn't cover ===== */}
      <section className="section gap-no">
        <div className="container gap-narrow">
          <h2>{c.noH2}</h2>
          <p className="gap-p">{c.noIntro}</p>
          <ul className="gap-no-list">
            {c.no.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p className="cc-tip">ℹ️ {c.noNote}</p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section cc-faq">
        <div className="container">
          <h2>{c.faqH2}</h2>
          <div className="cc-faq-list">
            {c.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="center-cta">
            <CtaButton label={c.cta} />
          </div>
        </div>
      </section>

      {/* ===== Final CTA + form ===== */}
      <section className="section cc-form-section" id="quote">
        <div className="container cc-form-grid">
          <div className="cc-form-intro">
            <h2>{c.formH2}</h2>
            <p className="cc-sub">{c.formSub}</p>
            <a href={`tel:${PHONE_TEL}`} className="cc-big-phone">📞 {PHONE_DISPLAY}</a>
            <p>
              <WhatsAppLink lang={lang} placement="gap_final" className="gap-wa">
                <WhatsAppIcon size={18} /> {c.waHero}
              </WhatsAppLink>
            </p>
          </div>
          <CoverageCheckForm
            lang={lang}
            copy={c.form}
            source={GAP_SOURCE}
            leadEvent="gap_insurance_lead"
            defaultPolicy="Auto"
            hashPolicy={NO_HASH_POLICY}
            note={GAP_NOTE}
          />
        </div>
      </section>
    </main>
  );
}
