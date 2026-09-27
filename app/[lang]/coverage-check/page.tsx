import Image from 'next/image';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import { pageMetadata } from '@/lib/seo';
import { team } from '@/lib/team-data';
import { CC, CC_PATH, pickLang } from '@/lib/coverage-check';
import CoverageCheckForm from '@/components/CoverageCheckForm';
import SendPolicyCta from '@/components/SendPolicyCta';

// /[lang]/coverage-check: "Free Coverage Check" landing page (EN/ES/RU).
// One screen = one idea: hero → gaps → how it works → trust → FAQ → form →
// reviews. Every "Have an agent call me" button jumps to the form (#quote,
// which is also where the header's quote button points on this page).
// Phone numbers use PHONE_DISPLAY / PHONE_TEL so the site-wide Google call
// tracking (number swap + phone_call click event) applies here too.
// Copy lives in lib/coverage-check.ts. No carrier rating badge on this page.

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const c = CC[pickLang(params.lang)];
  return pageMetadata({ lang: params.lang, path: CC_PATH, title: c.metaTitle, description: c.metaDesc });
}

function CtaButton({ label, className = '' }: { label: string; className?: string }) {
  return (
    <a href="#quote" className={`cta cc-cta ${className}`.trim()}>
      {label} →
    </a>
  );
}

export default function CoverageCheckPage({ params }: { params: { lang: string } }) {
  const lang = pickLang(params.lang);
  const c = CC[lang];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <main className="cc">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ===== Screen 1: hero ===== */}
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
            <SendPolicyCta lang={lang} placement="hero" />
          </div>
          <div className="cc-hero-photo-wrap">
            <Image
              src="/images/Family_at_home.jpg"
              alt={c.heroAlt}
              width={1152}
              height={864}
              priority
              sizes="(max-width: 900px) 100vw, 500px"
              className="cc-hero-photo"
            />
          </div>
        </div>
      </section>

      {/* ===== Screen 2: gaps ===== */}
      <section className="section cc-gaps">
        <div className="container">
          <h2>{c.gapsH2}</h2>
          <div className="cc-gap-grid">
            {c.gaps.map((g) => (
              <article key={g.id} id={g.id} className="cc-gap">
                <Image src={g.img} alt={g.alt} width={1152} height={864} sizes="(max-width: 700px) 100vw, 540px" className="cc-gap-img" />
                <div className="cc-gap-body">
                  <span className="cc-gap-label">{g.label}</span>
                  <h3>{g.h}</h3>
                  <p>{g.p}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <CtaButton label={c.gapsCta} />
          </div>
        </div>
      </section>

      {/* ===== Screen 3: how it works ===== */}
      <section className="section cc-how">
        <div className="container">
          <h2>{c.howH2}</h2>
          <ol className="cc-steps">
            {c.steps.map((s) => (
              <li key={s.n} className="cc-step">
                <span className="cc-step-n" aria-hidden="true">{s.n}</span>
                <span className="cc-step-word">{c.stepWord} {s.n}</span>
                <p>
                  <strong>{s.h}</strong> {s.p}
                </p>
              </li>
            ))}
          </ol>
          <p className="cc-tip">📄 {c.tip}</p>
          <div className="center-cta">
            <CtaButton label={c.cta} />
          </div>
        </div>
      </section>

      {/* ===== Screen 4: trust ===== */}
      <section className="section cc-trust" id="claims">
        <div className="container cc-trust-grid">
          <div>
            <h2>{c.trustH2}</h2>
            <ul className="cc-trust-list">
              {c.trust.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="cc-team" aria-hidden="true">
            {team.map((m) => (
              <div key={m.slug} className="cc-tm">
                <Image src={m.photo} alt="" width={96} height={96} />
                <span>{m.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Screen 5: FAQ ===== */}
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

      {/* ===== Screen 6: final CTA + form ===== */}
      <section className="section cc-form-section" id="quote">
        <div className="container cc-form-grid">
          <div className="cc-form-intro">
            <h2>{c.formH2}</h2>
            <p className="cc-sub">{c.formSub}</p>
            <a href={`tel:${PHONE_TEL}`} className="cc-big-phone">📞 {PHONE_DISPLAY}</a>
            <SendPolicyCta lang={lang} placement="final" />
          </div>
          <CoverageCheckForm lang={lang} />
        </div>
      </section>

      {/* ===== Screen 7: reviews ===== */}
      <section className="section cc-reviews">
        <div className="container">
          <h2>{c.reviewsH2}</h2>
          {/* TODO: replace this placeholder with the Google reviews widget
              (Google Business Profile reviews only). Do NOT use the carrier
              rating badge (components/RatingBadge) on this page. */}
          <div className="cc-reviews-placeholder" data-reviews-placeholder>
            <span className="cc-reviews-ico" aria-hidden="true">💬</span>
            <p>{c.reviewsSoon}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
