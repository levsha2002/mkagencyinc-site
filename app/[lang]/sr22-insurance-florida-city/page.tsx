import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import RelatedCoverage from '@/components/RelatedCoverage';
import { buildAlternates } from '@/lib/seo';

// Geo-landing: SR-22 / FR-44 filings — Florida City / Homestead.
// Self-contained content (not in dictionaries.ts), same pattern as the other geo pages.

type Lang = 'en' | 'es' | 'ru';

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'SR-22 & FR-44 Insurance in Florida City, FL | Same-Day Filing | M&K Agency',
    metaDesc:
      'Need an SR-22 or FR-44 in Florida? Local licensed agents file fast so you can reinstate your license. Help in English, Español, по-русски. Call (305) 859-3953.',
    kicker: 'SR-22 & FR-44 Filings · Florida City & Homestead',
    h1a: 'Need an SR-22 or FR-44 in Florida?',
    h1b: 'We file it fast, so you can get back on the road.',
    sub: 'An SR-22 or FR-44 isn’t a type of insurance — it’s a certificate your insurer files with the state to prove you carry the required liability coverage. We handle the whole thing for you, often the same day, and explain every step in plain language.',
    cta: 'Have an agent call me',
    call: `Call ${PHONE_DISPLAY}`,
    bannerAlt: 'Driver back on the road in South Florida after an SR-22 filing',
    bannerText: 'Same-day filing available — most drivers can be covered and filed within the hour.',
    whyTitle: 'What an SR-22 / FR-44 really is — and how we make it painless',
    whyText:
      'If the state told you that you need an SR-22 or FR-44, it means you have to prove you carry at least the minimum required liability coverage for a set period — usually three years in Florida. The SR-22 is the standard certificate; the FR-44 is Florida’s higher-limit version, required after a DUI conviction. We set up a policy that meets the exact requirement, electronically file the certificate with the FLHSMV, and stay on top of it so your filing never lapses (a lapse can restart the clock or re-suspend your license).',
    covTitle: 'How we help high-risk and reinstating drivers',
    cov: [
      { h: 'Same-day SR-22 filing', p: 'In most cases we can bind a policy and file your SR-22 electronically with the state the same day, so you can reinstate quickly.' },
      { h: 'FR-44 for Florida DUI cases', p: 'A Florida DUI requires an FR-44 with higher liability limits (100/300/50). We set up a compliant policy and file it correctly the first time.' },
      { h: 'Coverage when others say no', p: 'Been non-renewed or turned away after a violation? We specialize in getting reinstating and high-risk drivers properly covered.' },
      { h: 'We keep the filing active', p: 'Let a payment lapse and the state is notified automatically. We monitor your policy so the certificate stays in force for the full required term.' },
      { h: 'Help understanding your requirement', p: 'Not sure if you need an SR-22 or FR-44, or for how long? We read your reinstatement letter with you and explain exactly what the state wants.' },
      { h: 'A plan to lower your rate over time', p: 'A filing requirement isn’t forever. We’ll review your policy each renewal and move you toward a better rate as your record improves.' },
    ],
    localTitle: 'A real office, 10 minutes away',
    localText:
      'We’re at 33550 S Dixie Hwy, Suite 102, Florida City — serving drivers across Homestead, Leisure City, Naranja and South Miami-Dade. Walk in, call, or text. We handle SR-22 and FR-44 filings quickly and confidentially, and we’ll help you reinstate as fast as the state allows.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Talk to a licensed agent',
    faqTitle: 'SR-22 & FR-44 in Florida — common questions',
    faq: [
      { q: 'What is an SR-22?', a: 'An SR-22 is a certificate of financial responsibility your insurance company files with the state to prove you carry at least the minimum required liability coverage. It’s often required to reinstate a license after a violation such as driving without insurance or too many points.' },
      { q: 'What’s the difference between an SR-22 and an FR-44 in Florida?', a: 'An FR-44 is unique to Florida (and Virginia) and is required after a DUI/DWI conviction. It works like an SR-22 but requires much higher liability limits — 100,000/300,000 bodily injury and 50,000 property damage, versus Florida’s standard minimums.' },
      { q: 'How long do I have to carry it?', a: 'In Florida it’s typically three years of continuous coverage. If your policy lapses during that period, the clock can restart and your license can be re-suspended — which is why keeping the filing active matters.' },
      { q: 'How fast can you file it?', a: 'Usually the same day. Once we set up a compliant policy, we file the certificate electronically with the FLHSMV, often within the hour during office hours.' },
      { q: 'Will an SR-22 raise my rates?', a: 'The filing itself is a small fee, but the violation behind it usually affects your premium. We work to get you the best available rate now and lower it at each renewal as your record improves.' },
    ],
    disclaimer: 'This is general information, not legal advice or policy language. SR-22/FR-44 requirements, limits, and timeframes are set by the state and your specific case — confirm your exact requirement with the FLHSMV or your reinstatement letter.',
  },
  es: {
    metaTitle: 'Seguro SR-22 y FR-44 en Florida City, FL | Presentación el Mismo Día | M&K Agency',
    metaDesc:
      '¿Necesita un SR-22 o FR-44 en Florida? Agentes locales licenciados lo presentan rápido para reinstalar su licencia. Ayuda en español. Llame al (305) 859-3953.',
    kicker: 'Presentaciones SR-22 y FR-44 · Florida City y Homestead',
    h1a: '¿Necesita un SR-22 o FR-44 en Florida?',
    h1b: 'Lo presentamos rápido para que vuelva a manejar.',
    sub: 'Un SR-22 o FR-44 no es un tipo de seguro — es un certificado que su aseguradora presenta ante el estado para probar que tiene la cobertura de responsabilidad requerida. Nos encargamos de todo, muchas veces el mismo día, y le explicamos cada paso con claridad.',
    cta: 'Que me llame un agente',
    call: `Llame ${PHONE_DISPLAY}`,
    bannerAlt: 'Conductor de vuelta en la carretera en el sur de Florida tras una presentación SR-22',
    bannerText: 'Presentación el mismo día disponible — la mayoría de los conductores quedan cubiertos y presentados en una hora.',
    whyTitle: 'Qué es realmente un SR-22 / FR-44 — y cómo se lo hacemos fácil',
    whyText:
      'Si el estado le dijo que necesita un SR-22 o FR-44, significa que debe demostrar que tiene al menos la cobertura de responsabilidad mínima requerida durante un período — normalmente tres años en Florida. El SR-22 es el certificado estándar; el FR-44 es la versión de límites más altos de Florida, requerida tras una condena por DUI. Configuramos una póliza que cumple el requisito exacto, presentamos el certificado electrónicamente ante el FLHSMV y lo vigilamos para que su presentación nunca caduque (una caducidad puede reiniciar el conteo o volver a suspender su licencia).',
    covTitle: 'Cómo ayudamos a conductores de alto riesgo y en reinstalación',
    cov: [
      { h: 'Presentación SR-22 el mismo día', p: 'En la mayoría de los casos emitimos la póliza y presentamos su SR-22 electrónicamente ante el estado el mismo día, para que reinstale rápido.' },
      { h: 'FR-44 para casos de DUI en Florida', p: 'Un DUI en Florida requiere un FR-44 con límites más altos (100/300/50). Configuramos una póliza que cumple y la presentamos correctamente a la primera.' },
      { h: 'Cobertura cuando otros dicen que no', p: '¿No le renovaron o lo rechazaron tras una infracción? Nos especializamos en cubrir correctamente a conductores en reinstalación y de alto riesgo.' },
      { h: 'Mantenemos la presentación activa', p: 'Si un pago caduca, el estado es notificado automáticamente. Vigilamos su póliza para que el certificado siga vigente todo el período requerido.' },
      { h: 'Ayuda para entender su requisito', p: '¿No sabe si necesita un SR-22 o FR-44, ni por cuánto tiempo? Leemos su carta de reinstalación con usted y le explicamos exactamente qué pide el estado.' },
      { h: 'Un plan para bajar su tarifa con el tiempo', p: 'Un requisito de presentación no es para siempre. Revisamos su póliza en cada renovación y lo movemos hacia una mejor tarifa a medida que mejora su historial.' },
    ],
    localTitle: 'Una oficina real, a 10 minutos',
    localText:
      'Estamos en 33550 S Dixie Hwy, Suite 102, Florida City — atendemos a conductores en Homestead, Leisure City, Naranja y el sur de Miami-Dade. Visítenos, llame o envíe un texto. Manejamos las presentaciones SR-22 y FR-44 de forma rápida y confidencial.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Hable con un agente licenciado',
    faqTitle: 'SR-22 y FR-44 en Florida — preguntas frecuentes',
    faq: [
      { q: '¿Qué es un SR-22?', a: 'Un SR-22 es un certificado de responsabilidad financiera que su aseguradora presenta ante el estado para probar que tiene al menos la cobertura mínima de responsabilidad requerida. Suele exigirse para reinstalar una licencia tras una infracción, como manejar sin seguro o acumular demasiados puntos.' },
      { q: '¿Cuál es la diferencia entre un SR-22 y un FR-44 en Florida?', a: 'El FR-44 es exclusivo de Florida (y Virginia) y se requiere tras una condena por DUI/DWI. Funciona como un SR-22 pero exige límites de responsabilidad mucho más altos — 100,000/300,000 por lesiones y 50,000 por daños a la propiedad.' },
      { q: '¿Por cuánto tiempo debo mantenerlo?', a: 'En Florida suele ser tres años de cobertura continua. Si su póliza caduca durante ese período, el conteo puede reiniciarse y su licencia puede volver a suspenderse — por eso importa mantener la presentación activa.' },
      { q: '¿Qué tan rápido lo pueden presentar?', a: 'Normalmente el mismo día. Una vez que configuramos una póliza que cumple, presentamos el certificado electrónicamente ante el FLHSMV, muchas veces en una hora en horario de oficina.' },
      { q: '¿Un SR-22 subirá mi tarifa?', a: 'La presentación en sí es un cargo pequeño, pero la infracción detrás suele afectar su prima. Trabajamos para conseguirle la mejor tarifa disponible ahora y bajarla en cada renovación a medida que mejora su historial.' },
    ],
    disclaimer: 'Esto es información general, no asesoría legal ni lenguaje de póliza. Los requisitos, límites y plazos del SR-22/FR-44 los define el estado y su caso — confirme su requisito exacto con el FLHSMV o su carta de reinstalación.',
  },
  ru: {
    metaTitle: 'Страховка SR-22 и FR-44 во Florida City, FL | Оформление в тот же день | M&K Agency',
    metaDesc:
      'Нужен SR-22 или FR-44 во Флориде? Местные лицензированные агенты оформят быстро, чтобы восстановить права. Помощь по-русски. Звоните (305) 859-3953.',
    kicker: 'Оформление SR-22 и FR-44 · Florida City и Homestead',
    h1a: 'Нужен SR-22 или FR-44 во Флориде?',
    h1b: 'Оформим быстро, чтобы вы снова сели за руль.',
    sub: 'SR-22 или FR-44 — это не вид страховки, а сертификат, который ваша страховая подаёт в штат, подтверждая, что у вас есть требуемое покрытие ответственности. Мы берём всё на себя, часто в тот же день, и объясняем каждый шаг простым языком.',
    cta: 'Заказать звонок агента',
    call: `Звоните ${PHONE_DISPLAY}`,
    bannerAlt: 'Водитель снова за рулём в Южной Флориде после оформления SR-22',
    bannerText: 'Оформление в тот же день — большинство водителей получают покрытие и подачу в течение часа.',
    whyTitle: 'Что такое SR-22 / FR-44 на самом деле — и как мы делаем это без хлопот',
    whyText:
      'Если штат сказал, что вам нужен SR-22 или FR-44, значит вы обязаны подтверждать наличие как минимум минимального требуемого покрытия ответственности в течение срока — обычно три года во Флориде. SR-22 — стандартный сертификат; FR-44 — версия Флориды с более высокими лимитами, требуется после осуждения за DUI. Мы оформляем полис, точно соответствующий требованию, подаём сертификат электронно в FLHSMV и следим, чтобы подача не прервалась (перерыв может обнулить срок или снова приостановить права).',
    covTitle: 'Как мы помогаем водителям высокого риска и на восстановлении',
    cov: [
      { h: 'Подача SR-22 в тот же день', p: 'В большинстве случаев мы оформляем полис и подаём SR-22 электронно в штат в тот же день, чтобы вы быстро восстановились.' },
      { h: 'FR-44 для случаев DUI во Флориде', p: 'DUI во Флориде требует FR-44 с повышенными лимитами (100/300/50). Мы оформляем соответствующий полис и подаём его правильно с первого раза.' },
      { h: 'Покрытие, когда другие отказывают', p: 'Не продлили полис или отказали после нарушения? Мы специализируемся на корректном страховании водителей на восстановлении и высокого риска.' },
      { h: 'Держим подачу активной', p: 'Если платёж просрочен, штат уведомляется автоматически. Мы следим за вашим полисом, чтобы сертификат действовал весь требуемый срок.' },
      { h: 'Поможем разобраться в требовании', p: 'Не уверены, нужен ли SR-22 или FR-44 и на какой срок? Разберём с вами письмо о восстановлении и объясним, что именно требует штат.' },
      { h: 'План снижения тарифа со временем', p: 'Требование подачи не навсегда. На каждом продлении пересматриваем полис и двигаем вас к лучшему тарифу по мере улучшения истории.' },
    ],
    localTitle: 'Настоящий офис в 10 минутах',
    localText:
      'Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City — работаем с водителями Homestead, Leisure City, Naranja и юга Miami-Dade. Заходите, звоните или пишите. Оформляем SR-22 и FR-44 быстро и конфиденциально.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Поговорить с лицензированным агентом',
    faqTitle: 'SR-22 и FR-44 во Флориде — частые вопросы',
    faq: [
      { q: 'Что такое SR-22?', a: 'SR-22 — это сертификат финансовой ответственности, который ваша страховая подаёт в штат, подтверждая наличие как минимум минимального требуемого покрытия ответственности. Часто нужен для восстановления прав после нарушения — например, вождения без страховки или избытка штрафных баллов.' },
      { q: 'В чём разница между SR-22 и FR-44 во Флориде?', a: 'FR-44 существует только во Флориде (и Вирджинии) и требуется после осуждения за DUI/DWI. Работает как SR-22, но требует гораздо более высоких лимитов ответственности — 100 000/300 000 за травмы и 50 000 за ущерб имуществу.' },
      { q: 'Как долго нужно его держать?', a: 'Во Флориде обычно три года непрерывного покрытия. Если полис прервётся в этот период, срок может обнулиться, а права — снова приостановить. Поэтому важно держать подачу активной.' },
      { q: 'Как быстро вы оформите?', a: 'Обычно в тот же день. После оформления соответствующего полиса мы подаём сертификат электронно в FLHSMV, часто в течение часа в рабочее время.' },
      { q: 'Поднимет ли SR-22 мой тариф?', a: 'Сама подача — небольшая плата, но нарушение за ней обычно влияет на премию. Мы стараемся получить лучший доступный тариф сейчас и снижать его на каждом продлении по мере улучшения истории.' },
    ],
    disclaimer: 'Это общая информация, а не юридическая консультация или текст полиса. Требования, лимиты и сроки SR-22/FR-44 устанавливают штат и ваш конкретный случай — уточните точное требование в FLHSMV или в письме о восстановлении.',
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
    alternates: buildAlternates(params.lang, '/sr22-insurance-florida-city'),
  };
}

export default function Sr22InsuranceFloridaCity({ params }: { params: { lang: string } }) {
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
              <span className="stars">★★★★½</span>
              <span>{t.langLine}</span>
            </div>
          </div>
          <LeadForm lang={l} />
        </div>
      </section>

      {/* Image banner — background image degrades gracefully to a navy gradient if the file is missing */}
      <section
        aria-label={t.bannerAlt}
        style={{
          backgroundImage: "linear-gradient(rgba(8,42,89,.62), rgba(8,42,89,.62)), url('/images/sr22-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          padding: '54px 20px',
          textAlign: 'center',
        }}
      >
        <p style={{ maxWidth: '40rem', margin: '0 auto', fontSize: '1.25rem', fontWeight: 600 }}>
          {t.bannerText}
        </p>
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

      <RelatedCoverage lang={l} current="/sr22-insurance-florida-city" />
    </main>
  );
}
