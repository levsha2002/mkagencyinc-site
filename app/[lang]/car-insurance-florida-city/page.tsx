import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import RelatedCoverage from '@/components/RelatedCoverage';
import { buildAlternates } from '@/lib/seo';

// Гео-лендинг: Car Insurance — Florida City / Homestead.
// Контент самодостаточный (не в dictionaries.ts), по образцу quote/layout.tsx.

type Lang = 'en' | 'es' | 'ru';

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'Car Insurance in Florida City & Homestead, FL | M&K Agency',
    metaDesc:
      'Local licensed agents in Florida City & Homestead help you find real auto insurance coverage at a competitive rate. Free quote in minutes — English, Español, по-русски.',
    kicker: 'Auto Insurance · Florida City & Homestead',
    h1a: 'Car insurance in Florida City & Homestead,',
    h1b: 'without overpaying.',
    sub: 'Your neighbors on S Dixie Hwy will find you real auto coverage at a competitive rate. One call, three languages, real local agents.',
    cta: 'Have an agent call me',
    call: `Call ${PHONE_DISPLAY}`,
    whyTitle: 'Why auto insurance costs more around here — and what we do about it',
    whyText:
      'Miami-Dade drivers pay some of the highest auto premiums in Florida: dense traffic on US-1 and the Turnpike, high uninsured-driver rates, and storm exposure all push prices up. As a local agency in Florida City, we review your exact driving profile and apply every discount you qualify for — so you get a fair, competitive rate, explained in plain language.',
    covTitle: 'Coverage we quote every day',
    cov: [
      { h: 'State-minimum PIP & PDL', p: 'Florida requires $10,000 PIP and $10,000 property damage liability. We make sure you meet the law — and explain where minimum coverage leaves you exposed.' },
      { h: 'Full coverage (comp & collision)', p: 'Protection for your own car — accidents, theft, flood and hurricane damage. Required by most lenders and leases.' },
      { h: 'Bodily injury & uninsured motorist', p: 'About 1 in 5 Florida drivers is uninsured. UM coverage protects you and your family when the other driver has nothing.' },
      { h: 'SR-22 / FR-44 filings', p: 'After a DUI or license issue, we handle the state filing and find carriers that still offer fair rates.' },
      { h: 'Rideshare (Uber / Lyft)', p: 'Personal policies exclude rideshare driving. We quote endorsements and hybrid policies that cover every mile.' },
      { h: 'Motorcycle, boat & RV', p: 'From Harleys to jet skis — bundle your toys with your auto policy and save on both.' },
    ],
    localTitle: 'A real office, 10 minutes away',
    localText:
      'We’re at 33550 S Dixie Hwy, Suite 102, Florida City — next to Homestead, Leisure City and Naranja. Walk in, call, or text. Same-day proof of insurance, help with FL DHSMV paperwork, and claims guidance from people who know your roads.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Talk to a licensed agent',
    faqTitle: 'Car insurance in Florida City — common questions',
    faq: [
      { q: 'What car insurance is required in Florida City, FL?', a: 'Florida law requires $10,000 in Personal Injury Protection (PIP) and $10,000 in Property Damage Liability (PDL). Bodily injury liability is not required for most drivers but is strongly recommended — and required after certain violations (SR-22/FR-44).' },
      { q: 'Why is car insurance so expensive in Miami-Dade County?', a: 'High traffic density, one of the highest uninsured-driver rates in the country, storm exposure, and litigation costs all raise premiums. Reviewing your exact profile and applying every eligible discount is the most effective way to avoid overpaying.' },
      { q: 'Can you insure drivers with a foreign or international license?', a: 'Yes. We work with newcomers every week in English, Spanish, and Russian, and explain every step of the process.' },
      { q: 'How fast can I get proof of insurance?', a: 'Usually the same day. Most policies can be quoted, bound, and documented within an hour — you leave with valid Florida proof of insurance.' },
      { q: 'Do you charge a fee for quotes?', a: 'No. Quotes are free and there is no obligation, and requesting one does not affect your credit score.' },
    ],
    disclaimer: 'Coverage descriptions are general information, not policy language. Requirements and eligibility vary by carrier and driver profile.',
  },
  es: {
    metaTitle: 'Seguro de Auto en Florida City y Homestead, FL | M&K Agency',
    metaDesc:
      'Agentes locales licenciados en Florida City y Homestead le ayudan a encontrar cobertura real de auto a un precio competitivo. Cotización gratis en minutos. Hablamos español.',
    kicker: 'Seguro de Auto · Florida City y Homestead',
    h1a: 'Seguro de auto en Florida City y Homestead,',
    h1b: 'sin pagar de más.',
    sub: 'Sus vecinos en S Dixie Hwy le encuentran cobertura real de auto a un precio competitivo. Una llamada, tres idiomas, agentes locales de verdad.',
    cta: 'Que me llame un agente',
    call: `Llame ${PHONE_DISPLAY}`,
    whyTitle: 'Por qué el seguro de auto cuesta más aquí — y qué hacemos al respecto',
    whyText:
      'Los conductores de Miami-Dade pagan algunas de las primas más altas de Florida: tráfico denso en la US-1 y el Turnpike, alto porcentaje de conductores sin seguro y exposición a tormentas. Como agencia local en Florida City, revisamos su perfil exacto de manejo y aplicamos cada descuento que le corresponde — para que obtenga una tarifa justa y competitiva, explicada en lenguaje sencillo.',
    covTitle: 'Coberturas que cotizamos todos los días',
    cov: [
      { h: 'Mínimo estatal: PIP y PDL', p: 'Florida exige $10,000 de PIP y $10,000 de responsabilidad por daños a la propiedad. Cumplimos la ley — y le explicamos dónde el mínimo lo deja expuesto.' },
      { h: 'Cobertura completa (comp & collision)', p: 'Protección para su propio auto — accidentes, robo, inundación y huracán. Requerida por la mayoría de los financiamientos y leases.' },
      { h: 'Lesiones corporales y conductor sin seguro', p: 'Aproximadamente 1 de cada 5 conductores en Florida no tiene seguro. La cobertura UM lo protege a usted y a su familia.' },
      { h: 'Trámites SR-22 / FR-44', p: 'Después de un DUI o problema de licencia, hacemos el trámite estatal y buscamos aseguradoras con tarifas justas.' },
      { h: 'Rideshare (Uber / Lyft)', p: 'Las pólizas personales excluyen el rideshare. Cotizamos endosos y pólizas híbridas que cubren cada milla.' },
      { h: 'Motocicleta, bote y RV', p: 'De Harleys a jet skis — combine sus vehículos con su póliza de auto y ahorre en ambos.' },
    ],
    localTitle: 'Una oficina real, a 10 minutos',
    localText:
      'Estamos en 33550 S Dixie Hwy, Suite 102, Florida City — junto a Homestead, Leisure City y Naranja. Visítenos, llame o envíe un texto. Comprobante de seguro el mismo día, ayuda con trámites del DHSMV y acompañamiento en reclamos.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Hable con un agente licenciado',
    faqTitle: 'Seguro de auto en Florida City — preguntas frecuentes',
    faq: [
      { q: '¿Qué seguro de auto es obligatorio en Florida City, FL?', a: 'La ley de Florida exige $10,000 de Protección por Lesiones Personales (PIP) y $10,000 de Responsabilidad por Daños a la Propiedad (PDL). La cobertura por lesiones corporales no es obligatoria para la mayoría, pero es muy recomendable — y obligatoria tras ciertas infracciones (SR-22/FR-44).' },
      { q: '¿Por qué el seguro es tan caro en el condado de Miami-Dade?', a: 'Tráfico denso, uno de los porcentajes más altos de conductores sin seguro del país, exposición a tormentas y costos legales elevan las primas. Revisar su perfil exacto y aplicar cada descuento disponible es la forma más eficaz de no pagar de más.' },
      { q: '¿Aseguran a conductores con licencia extranjera?', a: 'Sí. Trabajamos con recién llegados cada semana, en inglés, español y ruso, y le explicamos cada paso del proceso.' },
      { q: '¿Qué tan rápido obtengo mi comprobante de seguro?', a: 'Normalmente el mismo día. La mayoría de las pólizas se cotizan y emiten en una hora — sale con su comprobante válido de Florida.' },
      { q: '¿Cobran por cotizar?', a: 'No. Las cotizaciones son gratis y sin compromiso, y pedir una no afecta su puntaje de crédito.' },
    ],
    disclaimer: 'Las descripciones de cobertura son información general, no lenguaje de póliza. Los requisitos y la elegibilidad varían según la aseguradora y el perfil del conductor.',
  },
  ru: {
    metaTitle: 'Автостраховка во Florida City и Homestead, FL | M&K Agency',
    metaDesc:
      'Местные лицензированные агенты во Florida City и Homestead помогут найти реальное покрытие для автостраховки по конкурентной цене. Бесплатный расчёт за минуты. Говорим по-русски.',
    kicker: 'Автостраховка · Florida City и Homestead',
    h1a: 'Автостраховка во Florida City и Homestead —',
    h1b: 'без переплаты.',
    sub: 'Ваши соседи с S Dixie Hwy подберут реальное покрытие по конкурентной цене. Один звонок, три языка, настоящие местные агенты.',
    cta: 'Заказать звонок агента',
    call: `Звоните ${PHONE_DISPLAY}`,
    whyTitle: 'Почему автостраховка здесь дороже — и что мы с этим делаем',
    whyText:
      'Водители Miami-Dade платят одни из самых высоких премий во Флориде: плотный трафик на US-1 и Turnpike, высокая доля незастрахованных водителей и ураганы поднимают цены. Как местное агентство во Florida City, мы разбираем ваш профиль вождения и применяем каждую положенную скидку — чтобы вы получили честный, конкурентный тариф, объяснённый простыми словами.',
    covTitle: 'Что мы считаем каждый день',
    cov: [
      { h: 'Минимум штата: PIP и PDL', p: 'Флорида требует $10,000 PIP и $10,000 ответственности за имущество. Мы обеспечим соответствие закону — и объясним, где минимальное покрытие оставляет вас без защиты.' },
      { h: 'Полное покрытие (comp & collision)', p: 'Защита вашей машины — ДТП, угон, наводнение, ураган. Обязательна для большинства кредитов и лизинга.' },
      { h: 'Bodily injury и незастрахованный водитель', p: 'Примерно каждый пятый водитель Флориды не застрахован. Покрытие UM защищает вас и семью, когда у виновника ничего нет.' },
      { h: 'SR-22 / FR-44', p: 'После DUI или проблем с правами оформим государственную подачу и найдём страховые с адекватными тарифами.' },
      { h: 'Rideshare (Uber / Lyft)', p: 'Личные полисы не покрывают работу в такси. Подберём эндорсменты и гибридные полисы на каждую милю.' },
      { h: 'Мотоцикл, лодка, RV', p: 'От Harley до гидроцикла — объедините технику с автополисом и сэкономьте на обоих.' },
    ],
    localTitle: 'Настоящий офис в 10 минутах',
    localText:
      'Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City — рядом Homestead, Leisure City и Naranja. Заходите, звоните или пишите. Подтверждение страховки в тот же день, помощь с документами DHSMV и сопровождение по клеймам.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Поговорить с лицензированным агентом',
    faqTitle: 'Автостраховка во Florida City — частые вопросы',
    faq: [
      { q: 'Какая автостраховка обязательна во Florida City, FL?', a: 'Закон Флориды требует $10,000 PIP (Personal Injury Protection) и $10,000 PDL (ответственность за имущество). Bodily injury для большинства не обязательна, но настоятельно рекомендуется — а после некоторых нарушений обязательна (SR-22/FR-44).' },
      { q: 'Почему страховка в Miami-Dade такая дорогая?', a: 'Плотный трафик, один из самых высоких в стране процентов незастрахованных водителей, ураганы и судебные издержки поднимают премии. Разбор вашего профиля и применение каждой положенной скидки — самый эффективный способ не переплачивать.' },
      { q: 'Страхуете ли водителей с иностранными правами?', a: 'Да. Мы каждую неделю помогаем новоприбывшим — на английском, испанском и русском, и объясняем каждый шаг процесса.' },
      { q: 'Как быстро я получу подтверждение страховки?', a: 'Обычно в тот же день. Большинство полисов рассчитываются и оформляются за час — вы уходите с действующим флоридским подтверждением.' },
      { q: 'Расчёт платный?', a: 'Нет. Расчёты бесплатны и ни к чему не обязывают, и обращение за расчётом не влияет на кредитный рейтинг.' },
    ],
    disclaimer: 'Описания покрытий — общая информация, а не текст полиса. Требования и условия зависят от страховой компании и профиля водителя.',
  },
};

function pick(lang: string): { l: Lang; t: any } {
  const l: Lang = lang === 'es' || lang === 'ru' ? (lang as Lang) : 'en';
  return { l, t: C[l] };
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const { t } = pick(params.lang);
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: buildAlternates(params.lang, '/car-insurance-florida-city'),
  };
}

export default function CarInsuranceFloridaCity({ params }: { params: { lang: string } }) {
  const { l, t } = pick(params.lang);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map((f: { q: string; a: string }) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge gold">{t.kicker}</span>
            <h1>
              {t.h1a} <span className="accent">{t.h1b}</span>
            </h1>
            <p className="sub">{t.sub}</p>
            <a className="cta" href="#quote">{t.cta}</a>
            <div className="rated" style={{ marginLeft: 12 }}>
              <span className="stars">★★★★★</span>
              <span>{t.langLine}</span>
            </div>
          </div>
          <LeadForm lang={l} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.whyTitle}</h2>
          <p style={{ maxWidth: '46rem', margin: '0 auto', textAlign: 'center', color: 'var(--muted)' }}>
            {t.whyText}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }}>
        <div className="container">
          <h2>{t.covTitle}</h2>
          <div className="cards4" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {t.cov.map((c: { h: string; p: string }) => (
              <div className="svc" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2 style={{ textAlign: 'left' }}>{t.localTitle}</h2>
            <p style={{ color: 'var(--muted)' }}>{t.localText}</p>
            <p style={{ marginTop: 16 }}>
              <a className="cta" href={`tel:${PHONE_TEL}`}>{t.call}</a>
            </p>
          </div>
          <div className="office">
            <strong>M&K Agency Inc.</strong>
            <p>33550 S Dixie Hwy, Suite 102<br />Florida City, FL 33034</p>
            <p style={{ marginTop: 8 }}>{t.langLine}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }} id="quote">
        <div className="container">
          <h2>{t.faqTitle}</h2>
          <div style={{ maxWidth: '46rem', margin: '0 auto' }}>
            {t.faq.map((f: { q: string; a: string }) => (
              <details key={f.q} style={{ background: '#fff', border: '1px solid #e6ecf5', borderRadius: 14, padding: '14px 18px', marginBottom: 10 }}>
                <summary style={{ fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }}>{f.q}</summary>
                <p style={{ marginTop: 8, color: 'var(--muted)' }}>{f.a}</p>
              </details>
            ))}
            <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: 14 }}>{t.disclaimer}</p>
            <p style={{ textAlign: 'center', marginTop: 22 }}>
              <Link className="cta" href={`/${l}/quote`}>{t.cta}</Link>
            </p>
          </div>
        </div>
      </section>
      <RelatedCoverage lang={l} current="/car-insurance-florida-city" />
    </main>
  );
}
