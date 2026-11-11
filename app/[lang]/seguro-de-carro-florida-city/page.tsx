import Link from 'next/link';
import { notFound } from 'next/navigation';
import HeroBackdrop from '@/components/hero/HeroBackdrop';
import { dailyHero } from '@/content/hero';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import WhatsAppLink, { WhatsAppIcon } from '@/components/WhatsAppLink';
import { WHATSAPP_DISPLAY } from '@/lib/whatsapp';
import { pageMetadata } from '@/lib/seo';

// /es/seguro-de-carro-florida-city — Spanish-only Google Ads landing page for
// "seguro de carro" and "agente de seguros en Florida City" (Quality Score).
// Spanish only: /en and /ru 404 (see LIMITED_LANG_PAGES in lib/page-langs.ts,
// which also adds the es URL to the sitemap and points the language switcher
// to /car-insurance-florida-city). hreflang/canonical: es only.
//
// Conversion tracking is inherited, not re-implemented:
//  - tel: buttons use PHONE_TEL / PHONE_DISPLAY, so the layout's delegated
//    click script fires phone_call (AW-18321801016/vxzLCLXQuNkcELj-waBE) and
//    the Google forwarding-number swap (phone_conversion_number) applies.
//  - WhatsApp buttons use <WhatsAppLink> (AW-18321801016/BpOFCLO7348dELj-waBE).
//  - <LeadForm> posts to /api/lead with the TCPA consent payload and fires the
//    existing callback_request conversion on success.
//
// Compliance: no carrier names, no price/savings/"best" claims, no coverage
// promises, no dealer/lender topics; GAP only as an add-on to the auto policy.
// The layout's standard footer and disclosures stay as on every page.

export const revalidate = 3600;

const PATH = '/seguro-de-carro-florida-city';
const linkStyle = { color: 'var(--blue)', fontWeight: 600 } as const;

const T = {
  metaTitle: 'Seguro de carro | Agente de seguros en Florida City | M&K Agency',
  metaDesc:
    'Seguro de carro con un agente de seguros en Florida City que habla español. Agencia local y familiar en S Dixie Hwy. Cotización gratis: (305) 859-3953.',
  kicker: 'Seguro de carro · Florida City, FL',
  h1: 'Seguro de carro con un agente de seguros en Florida City que habla español',
  sub: 'Somos una agencia local y familiar en S Dixie Hwy. Nuestros agentes hablan español y le explican su póliza de auto con palabras claras, antes de que usted firme.',
  callLabel: 'Llamar',
  waLabel: 'WhatsApp',
  callback: 'Llámenos, o lo contactamos en una hora (en horario de oficina: lunes a viernes de 9 a 6).',
  cta: 'Pedir cotización gratis',
  introTitle: 'Su agente de seguros en Florida City, en español',
  introText:
    'En M&K Agency lo atiende un agente de seguros licenciado de Florida City, por teléfono, por WhatsApp o en persona. Revisamos con usted quién maneja, qué carros tiene y para qué los usa, y le explicamos qué incluye cada parte de su seguro de carro: el PIP y el PDL que exige Florida, la responsabilidad por lesiones a otras personas y la cobertura de motorista sin seguro. Así usted decide con toda la información en la mano.',
  points: [
    { h: 'Agentes que hablan español', p: 'Le atendemos en español de principio a fin: la cotización, los documentos y las preguntas que tenga después.' },
    { h: 'Agencia local y familiar', p: 'Nuestra oficina está en 33550 S Dixie Hwy, Suite 102, Florida City, cerca de Homestead, Leisure City y Naranja.' },
    { h: 'Cotización gratis', p: 'Pedir una cotización de seguro de carro no tiene costo y no lo obliga a nada.' },
  ],
  covTitle: 'Coberturas de seguro de carro que le explicamos',
  cov: [
    { h: 'PIP y PDL: el mínimo de Florida', p: 'La ley de Florida exige $10,000 de Protección contra Lesiones Personales (PIP) y $10,000 de Responsabilidad por Daños a la Propiedad (PDL).' },
    { h: 'Lesiones corporales (BI)', p: 'Responde por las lesiones que usted le cause a otras personas en un accidente, hasta los límites que elija.' },
    { h: 'Motorista sin seguro (UM/UIM)', p: 'Para sus propias lesiones cuando el conductor que tuvo la culpa no tiene seguro o no tiene suficiente.' },
    { h: 'Choque y amplia', p: 'Las coberturas de choque (collision) y amplia (comprehensive) son para daños a su propio carro, según lo que diga su póliza.' },
    { h: 'SR-22 y FR-44', p: 'Si el estado se lo exige, le cotizamos la póliza y la aseguradora presenta el certificado ante el FLHSMV.', link: { href: '/es/sr22-insurance-florida-city', label: 'Seguro SR-22 y FR-44 en Florida City' } },
    { h: 'GAP', p: 'Un complemento de su póliza de auto. Su agente le explica si aplica en su caso.' },
  ],
  officeTitle: 'Visítenos en Florida City',
  officeText: 'Atendemos en español, inglés y ruso. Venga a la oficina, llámenos o escríbanos por WhatsApp.',
  hoursLabel: 'Horario',
  hours: ['Lunes a viernes: 9 a. m. a 6 p. m.', 'Sábados: con cita'],
  faqTitle: 'Seguro de carro en Florida City: preguntas frecuentes',
  faq: [
    {
      q: '¿Qué es un SR-22 y cuándo me lo piden?',
      a: 'El SR-22 es un certificado que la aseguradora presenta ante el FLHSMV para demostrar que usted tiene el seguro que el estado le exige. Según el FLHSMV, si usted tuvo la culpa de un choque con heridos y no tenía cobertura de lesiones corporales, debe mantener límites de 10/20/10 con un SR-22 durante tres años. Después de una condena por DUI, Florida exige un FR-44, con límites más altos.',
      link: { href: '/es/sr22-insurance-florida-city', label: 'Más sobre el SR-22 y el FR-44' },
    },
    {
      q: '¿Puedo sacar seguro de carro con licencia extranjera?',
      a: 'Sí, lo atendemos. Cada semana ayudamos a recién llegados que manejan con licencia de otro país. Como visitante, puede manejar en Florida con una licencia válida de su país (s. 322.04). Cuando se establece aquí como residente, tiene 30 días para sacar la licencia de Florida. Le decimos qué documentos traer para cotizar.',
      link: { href: '/es/blog/seguro-auto-licencia-extranjera-florida', label: 'Guía: seguro de auto con licencia extranjera' },
    },
    {
      q: '¿Qué es la cobertura UM/UIM?',
      a: 'UM/UIM quiere decir motorista sin seguro o con seguro insuficiente. Es la parte de su póliza para sus propias lesiones, y las de sus pasajeros, cuando el conductor que tuvo la culpa no tiene seguro o tiene menos del que hace falta. En Florida no es obligatoria: si usted compra cobertura de lesiones corporales, se la deben ofrecer, y si no la quiere, tiene que rechazarla por escrito.',
    },
    {
      q: '¿Cuánto cuesta pedir una cotización?',
      a: 'Nada. La cotización es gratis y no lo obliga a nada. Llámenos al (305) 859-3953, escríbanos por WhatsApp o deje sus datos en el formulario, y lo contactamos en una hora en horario de oficina.',
    },
  ],
  disclaimer:
    'Las descripciones de las coberturas son información general, no el texto de la póliza. Los requisitos y la elegibilidad varían según la aseguradora y el perfil del conductor.',
};

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (params.lang !== 'es') return {};
  return pageMetadata({ lang: 'es', path: PATH, title: T.metaTitle, description: T.metaDesc, langs: ['es'] });
}

function Actions({ placement }: { placement: string }) {
  return (
    <div className="gap-actions cc-top-actions">
      <a href={`tel:${PHONE_TEL}`} className="cta gap-call">
        <span aria-hidden="true">📞</span>
        <span>{T.callLabel} <span className="cc-nowrap">{PHONE_DISPLAY}</span></span>
      </a>
      <WhatsAppLink lang="es" placement={placement} className="cta gap-wa-btn">
        <WhatsAppIcon size={22} /> {T.waLabel} <span className="cc-nowrap">{WHATSAPP_DISPLAY}</span>
      </WhatsAppLink>
    </div>
  );
}

export default function SeguroDeCarroFloridaCity({ params }: { params: { lang: string } }) {
  if (params.lang !== 'es') notFound();

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: T.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  // Same facts as the site-wide InsuranceAgency block in app/[lang]/layout.tsx.
  const agencyLd = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'M&K Agency Inc.',
    url: `https://mkagencyinc.com/es${PATH}`,
    telephone: PHONE_DISPLAY,
    image: 'https://mkagencyinc.com/og.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '33550 S Dixie Hwy, Suite 102',
      addressLocality: 'Florida City',
      addressRegion: 'FL',
      postalCode: '33034',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 25.4567, longitude: -80.4746 },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: ['Florida City', 'Homestead', 'Miami-Dade County'],
    knowsLanguage: ['es', 'en', 'ru'],
  };

  const hero = dailyHero('auto', 'es');

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agencyLd) }} />

      <section className="hero hero--photo">
        <HeroBackdrop image={hero.image} alt={hero.alt} />
        <div className="container hero-grid">
          <div>
            <span className="badge gold">{T.kicker}</span>
            <h1>{T.h1}</h1>
            <p className="sub">{T.sub}</p>
            <Actions placement="seguro_carro_top" />
            <p className="sub" style={{ fontWeight: 600 }}>{T.callback}</p>
            <a className="cta" href="#quote">{T.cta} →</a>
          </div>
          <LeadForm lang="es" defaultType="Auto" source="ads-es-seguro-de-carro-florida-city" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{T.introTitle}</h2>
          <p style={{ maxWidth: '46rem', margin: '0 auto', textAlign: 'center', color: 'var(--muted)' }}>{T.introText}</p>
          <div className="cards4 cards3" style={{ marginTop: 24 }}>
            {T.points.map((c) => (
              <div className="svc" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container">
          <h2>{T.covTitle}</h2>
          <div className="cards4 cards3">
            {T.cov.map((c: { h: string; p: string; link?: { href: string; label: string } }) => (
              <div className="svc" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                {c.link && (
                  <p style={{ marginTop: 8 }}>
                    <Link href={c.link.href} style={linkStyle}>{c.link.label} →</Link>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2 style={{ textAlign: 'left' }}>{T.officeTitle}</h2>
            <p style={{ color: 'var(--muted)' }}>{T.officeText}</p>
            <p style={{ color: 'var(--muted)', marginTop: 8, fontWeight: 600 }}>{T.callback}</p>
            <div style={{ marginTop: 16 }}>
              <Actions placement="seguro_carro_office" />
            </div>
          </div>
          <div className="office">
            <strong>M&K Agency Inc.</strong>
            <p>33550 S Dixie Hwy, Suite 102<br />Florida City, FL 33034</p>
            <p style={{ marginTop: 8 }}>
              <strong>{T.hoursLabel}:</strong><br />
              {T.hours[0]}<br />
              {T.hours[1]}
            </p>
            <p style={{ marginTop: 8 }}>Español · English · По-русски</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }} id="faq">
        <div className="container">
          <h2>{T.faqTitle}</h2>
          <div style={{ maxWidth: '46rem', margin: '0 auto' }}>
            {T.faq.map((f: { q: string; a: string; link?: { href: string; label: string } }) => (
              <details key={f.q} style={{ background: '#fff', border: '1px solid #e6ecf5', borderRadius: 14, padding: '14px 18px', marginBottom: 10 }}>
                <summary style={{ fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }}>{f.q}</summary>
                <p style={{ marginTop: 8, color: 'var(--muted)' }}>{f.a}</p>
                {f.link && (
                  <p style={{ marginTop: 6 }}>
                    <Link href={f.link.href} style={linkStyle}>{f.link.label} →</Link>
                  </p>
                )}
              </details>
            ))}
            <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: 14 }}>{T.disclaimer}</p>
            <p style={{ textAlign: 'center', marginTop: 22 }}>
              <a className="cta" href="#quote">{T.cta} →</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
