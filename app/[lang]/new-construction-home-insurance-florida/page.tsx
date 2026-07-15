import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import { buildAlternates } from '@/lib/seo';

// Гео-лендинг: New Construction Home & Condo Insurance — вся Флорида
// (не привязан к одному городу, как car-insurance-florida-city — таргетируется
// по ZIP-кодам новостроек: Villages, Poinciana/Kissimmee, Davenport, Apopka, и т.д.)

type Lang = 'en' | 'es' | 'ru';

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'New Construction Home & Condo Insurance in Florida | M&K Agency',
    metaDesc:
      'Just bought a new-build home or condo in Florida? Compare 15+ A-rated carriers before you rely on the builder’s bundled insurance. Fast quotes for closing.',
    kicker: 'New Construction Insurance · Serving All of Florida',
    h1a: 'New construction home insurance,',
    h1b: 'priced for the home you just built.',
    sub: 'Builders often bundle you into one insurance option at closing — usually not the cheapest one. We compare 15+ A-rated Florida carriers so your new home is covered at a fair price from day one.',
    cta: 'Get my free new-home quote',
    call: `Call ${PHONE_DISPLAY}`,
    whyTitle: 'Why new construction buyers overpay — and what we do about it',
    whyText:
      'A newly built home usually qualifies for real savings: impact windows, a new roof, modern wiring and plumbing, and up-to-code wind mitigation features all lower risk — and should lower your premium too. The problem is most buyers never see those savings, because builders route them straight to one bundled insurance option at the closing table without comparing the market. As an independent agency, we shop your new home’s exact features across multiple A-rated carriers and make sure every wind-mitigation credit you qualify for is actually applied.',
    covTitle: 'Coverage we quote every day for new-build buyers',
    cov: [
      { h: 'Fast quote & binder for closing', p: 'New construction closings move fast and lenders require proof of insurance in place. We turn around a quote and binder quickly so nothing holds up your closing date.' },
      { h: 'Wind mitigation credit maximization', p: 'Impact windows, hurricane straps, and a new roof can mean real discounts — we make sure your new home gets full credit for every feature it qualifies for.' },
      { h: 'New condo? HO-6 coverage', p: 'Buying a new-construction condo instead of a house? We quote HO-6 interior coverage that works alongside your association’s master policy.' },
      { h: 'Builder’s insurance vs. the open market', p: 'The policy your builder points you to is rarely the cheapest or the best fit. We’ll show you what the same coverage costs elsewhere before you sign anything.' },
      { h: 'Dwelling, liability & loss of use', p: 'Full protection for your new home’s replacement cost, your liability as a homeowner, and living expenses if you’re ever displaced.' },
      { h: 'Bundle with auto & save', p: 'Just moved and need to re-shop your car insurance too? Bundling a new home policy with auto typically unlocks a multi-policy discount on both.' },
    ],
    localTitle: 'Licensed statewide — from the Keys to Jacksonville',
    localText:
      'Our office is in Florida City, but new construction is booming everywhere in Florida — The Villages, Poinciana, Davenport, Apopka, Cape Coral, Tampa Bay and beyond. We handle new-home insurance for buyers across the entire state, all by phone, text, or email — no need to visit in person to get covered before closing.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Compare new-home insurance rates now',
    faqTitle: 'New construction home insurance in Florida — common questions',
    faq: [
      { q: 'Do I need homeowners insurance before I close on a new construction home?', a: 'Yes — if you’re financing the home, your lender will require proof of homeowners (or condo/HO-6) insurance in place before closing. Even if you’re paying cash, it’s strongly recommended to have coverage starting the day you take ownership.' },
      { q: 'Is new construction actually cheaper to insure?', a: 'Often, yes. New homes are built to current Florida building code, typically including impact windows or shutters, hurricane straps, and a brand-new roof — all of which carriers give real wind-mitigation credit for. The savings depend on your specific home’s features and are not automatic; we make sure every credit you qualify for is applied.' },
      { q: 'What’s the difference between builder’s risk insurance and homeowners insurance?', a: 'Builder’s risk insurance covers the home during construction and is usually the builder’s responsibility, not yours. Homeowners insurance is the policy you need starting at closing, once you take ownership — that’s what we quote.' },
      { q: 'My builder already recommended an insurance company — can you still help?', a: 'Absolutely, and it’s worth checking. Builder-recommended policies are convenient but rarely shopped against the market. We’ll compare the same coverage across multiple carriers so you can see whether you’re getting a fair price before you commit.' },
      { q: 'Do you help buyers outside of South Florida?', a: 'Yes — we’re licensed to write homeowners insurance across the state of Florida, including major new-construction areas like The Villages, Kissimmee/Poinciana, Davenport, Apopka, and Cape Coral. Everything can be handled remotely by phone, text, or email.' },
    ],
    disclaimer: 'Coverage descriptions are general information, not policy language. Requirements, credits, and eligibility vary by carrier, home features, and location.',
  },
  es: {
    metaTitle: 'Seguro para Casas y Condominios de Nueva Construcción en Florida | M&K Agency',
    metaDesc:
      '¿Acaba de comprar una casa o condominio de nueva construcción en Florida? Compare 15+ aseguradoras A-rated antes de aceptar el seguro del constructor. Cotizaciones rápidas para el cierre.',
    kicker: 'Seguro de Nueva Construcción · Toda Florida',
    h1a: 'Seguro para casas de nueva construcción,',
    h1b: 'con el precio justo para su nueva casa.',
    sub: 'Los constructores suelen incluirlo en una sola opción de seguro al cierre — normalmente no la más barata. Comparamos 15+ aseguradoras A-rated de Florida para que su nueva casa esté protegida a un precio justo desde el primer día.',
    cta: 'Cotización gratis para mi casa nueva',
    call: `Llame ${PHONE_DISPLAY}`,
    whyTitle: 'Por qué los compradores de casas nuevas pagan de más — y qué hacemos al respecto',
    whyText:
      'Una casa recién construida normalmente califica para ahorros reales: ventanas de impacto, techo nuevo, instalaciones eléctricas y de plomería modernas, y características de mitigación de viento al día — todo esto reduce el riesgo y debería reducir su prima también. El problema es que la mayoría de los compradores nunca ven ese ahorro, porque los constructores los dirigen directamente a una sola opción de seguro en la mesa de cierre sin comparar el mercado. Como agencia independiente, cotizamos las características exactas de su casa nueva entre varias aseguradoras A-rated y verificamos que se apliquen todos los créditos de mitigación de viento que le correspondan.',
    covTitle: 'Coberturas que cotizamos todos los días para compradores de casa nueva',
    cov: [
      { h: 'Cotización y póliza rápida para el cierre', p: 'Los cierres de casas nuevas se mueven rápido y los prestamistas exigen comprobante de seguro antes del cierre. Cotizamos y emitimos rápido para que nada retrase su cierre.' },
      { h: 'Maximización de créditos por mitigación de viento', p: 'Ventanas de impacto, amarres para huracanes y techo nuevo pueden significar descuentos reales — verificamos que su casa nueva reciba crédito completo por cada característica que califique.' },
      { h: '¿Condominio nuevo? Cobertura HO-6', p: '¿Compró un condominio de nueva construcción en lugar de una casa? Cotizamos cobertura HO-6 para el interior que funciona junto con la póliza maestra de su asociación.' },
      { h: 'Seguro del constructor vs. el mercado abierto', p: 'La póliza que le recomienda el constructor rara vez es la más barata o la mejor opción. Le mostramos cuánto cuesta la misma cobertura en otro lado antes de que firme nada.' },
      { h: 'Vivienda, responsabilidad civil y pérdida de uso', p: 'Protección completa para el costo de reconstrucción de su casa nueva, su responsabilidad civil como propietario, y gastos de vivienda si alguna vez es desplazado.' },
      { h: 'Combine con auto y ahorre', p: '¿Se acaba de mudar y también necesita cotizar su seguro de auto? Combinar una póliza de casa nueva con auto generalmente desbloquea un descuento multi-póliza en ambas.' },
    ],
    localTitle: 'Licenciados en todo el estado — desde los Cayos hasta Jacksonville',
    localText:
      'Nuestra oficina está en Florida City, pero la nueva construcción está en auge en toda Florida — The Villages, Poinciana, Davenport, Apopka, Cape Coral, Tampa Bay y más. Atendemos seguros de casa nueva para compradores en todo el estado, todo por teléfono, texto o correo electrónico — no necesita visitarnos en persona para estar cubierto antes del cierre.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Compare tarifas de seguro de casa nueva ahora',
    faqTitle: 'Seguro de casa de nueva construcción en Florida — preguntas frecuentes',
    faq: [
      { q: '¿Necesito seguro de casa antes de cerrar una casa de nueva construcción?', a: 'Sí — si está financiando la casa, su prestamista exigirá comprobante de seguro de casa (o condominio/HO-6) antes del cierre. Incluso si paga en efectivo, se recomienda tener cobertura desde el día en que toma posesión.' },
      { q: '¿Es realmente más barato asegurar una casa nueva?', a: 'A menudo, sí. Las casas nuevas se construyen según el código de construcción actual de Florida, generalmente con ventanas de impacto o contraventanas, amarres para huracanes y techo nuevo — todo esto genera crédito real de mitigación de viento. El ahorro depende de las características específicas de su casa y no es automático; verificamos que se aplique cada crédito que le corresponda.' },
      { q: '¿Cuál es la diferencia entre el seguro de riesgo del constructor y el seguro de casa?', a: 'El seguro de riesgo del constructor cubre la casa durante la construcción y generalmente es responsabilidad del constructor, no suya. El seguro de casa es la póliza que necesita a partir del cierre, una vez que toma posesión — eso es lo que cotizamos.' },
      { q: 'Mi constructor ya me recomendó una aseguradora — ¿aún pueden ayudarme?', a: 'Claro que sí, y vale la pena revisar. Las pólizas recomendadas por el constructor son convenientes pero rara vez se comparan con el mercado. Compararemos la misma cobertura entre varias aseguradoras para que vea si le están dando un precio justo antes de comprometerse.' },
      { q: '¿Ayudan a compradores fuera del sur de Florida?', a: 'Sí — estamos licenciados para emitir seguros de casa en todo el estado de Florida, incluyendo áreas de nueva construcción como The Villages, Kissimmee/Poinciana, Davenport, Apopka y Cape Coral. Todo se puede manejar de forma remota por teléfono, texto o correo electrónico.' },
    ],
    disclaimer: 'Las descripciones de cobertura son información general, no lenguaje de póliza. Los requisitos, créditos y elegibilidad varían según la aseguradora, las características de la casa y la ubicación.',
  },
  ru: {
    metaTitle: 'Страховка новостроек: дом и кондо во Флориде | M&K Agency',
    metaDesc:
      'Купили новый дом или кондо во Флориде? Сравните 15+ страховых A-rated, прежде чем соглашаться на вариант от застройщика. Быстрый расчёт для closing.',
    kicker: 'Страховка новостроек · Вся Флорида',
    h1a: 'Страховка нового дома —',
    h1b: 'по цене, справедливой именно для новостройки.',
    sub: 'Застройщики часто предлагают один "готовый" вариант страховки при closing — обычно не самый дешёвый. Мы сравним 15+ страховых A-rated Флориды, чтобы ваш новый дом был застрахован по честной цене с первого дня.',
    cta: 'Бесплатный расчёт для нового дома',
    call: `Звоните ${PHONE_DISPLAY}`,
    whyTitle: 'Почему покупатели новостроек переплачивают — и что мы с этим делаем',
    whyText:
      'Новый дом обычно даёт право на реальную экономию: ударопрочные окна, новая крыша, современная электрика и сантехника, соответствие актуальным требованиям по защите от ветра — всё это снижает риск и должно снижать премию. Проблема в том, что большинство покупателей никогда не видят эту экономию, потому что застройщики направляют их сразу на один вариант страховки за столом closing, без сравнения рынка. Как независимое агентство, мы прогоняем точные характеристики вашего нового дома через несколько страховых A-rated и следим, чтобы были применены все положенные скидки за wind mitigation.',
    covTitle: 'Что мы считаем каждый день для покупателей новостроек',
    cov: [
      { h: 'Быстрый расчёт и полис для closing', p: 'Closing по новостройкам проходит быстро, а кредиторы требуют подтверждение страховки заранее. Мы быстро оформим расчёт и полис, чтобы ничего не задержало вашу дату closing.' },
      { h: 'Максимизация скидок за wind mitigation', p: 'Ударопрочные окна, ураганные крепления и новая крыша могут дать реальные скидки — проверим, что ваш новый дом получил полный кредит по каждой подходящей характеристике.' },
      { h: 'Новое кондо? Покрытие HO-6', p: 'Купили кондо в новостройке вместо дома? Рассчитаем HO-6 покрытие интерьера, которое работает вместе с master-полисом вашей ассоциации.' },
      { h: 'Страховка застройщика против открытого рынка', p: 'Полис, который предлагает застройщик, редко бывает самым дешёвым или лучшим вариантом. Покажем, сколько это же покрытие стоит в других местах, прежде чем вы что-то подпишете.' },
      { h: 'Dwelling, liability и loss of use', p: 'Полная защита стоимости восстановления нового дома, вашей liability как домовладельца, и расходов на жильё, если временно придётся съехать.' },
      { h: 'Объедините с авто и сэкономьте', p: 'Только переехали и нужно пересчитать автостраховку тоже? Объединение полиса нового дома с авто обычно даёт скидку за несколько полисов на оба сразу.' },
    ],
    localTitle: 'Лицензия на весь штат — от Keys до Jacksonville',
    localText:
      'Наш офис в Florida City, но новостройки сейчас растут по всей Флориде — The Villages, Poinciana, Davenport, Apopka, Cape Coral, Tampa Bay и дальше. Мы оформляем страховку нового дома для покупателей по всему штату — полностью по телефону, смс или email, приезжать лично не нужно, чтобы получить покрытие до closing.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Сравнить тарифы на страховку нового дома сейчас',
    faqTitle: 'Страховка новостроек во Флориде — частые вопросы',
    faq: [
      { q: 'Нужна ли страховка дома перед closing по новостройке?', a: 'Да — если дом в ипотеке, кредитор потребует подтверждение страховки дома (или кондо/HO-6) перед closing. Даже при оплате наличными настоятельно рекомендуется иметь покрытие с того дня, когда вы вступаете во владение.' },
      { q: 'Правда ли, что новый дом дешевле страховать?', a: 'Часто да. Новые дома строятся по актуальным флоридским строительным нормам — обычно с ударопрочными окнами или ставнями, ураганными креплениями и новой крышей — всё это даёт реальную скидку за wind mitigation. Экономия зависит от конкретных характеристик дома и не применяется автоматически — мы следим, чтобы был учтён каждый положенный кредит.' },
      { q: 'В чём разница между builder’s risk insurance и страховкой дома?', a: 'Builder’s risk insurance покрывает дом во время строительства и обычно является ответственностью застройщика, не вашей. Страховка дома — это полис, который нужен вам начиная с closing, когда вы вступаете во владение — именно его мы и рассчитываем.' },
      { q: 'Застройщик уже порекомендовал страховую — вы всё равно можете помочь?', a: 'Конечно, и стоит проверить. Полисы, рекомендованные застройщиком, удобны, но редко сравниваются с рынком. Мы сравним то же покрытие среди нескольких страховых, чтобы вы увидели, честная ли это цена, прежде чем соглашаться.' },
      { q: 'Работаете ли вы с покупателями за пределами Южной Флориды?', a: 'Да — у нас лицензия на оформление страховки дома по всему штату Флорида, включая крупные районы новостроек: The Villages, Kissimmee/Poinciana, Davenport, Apopka и Cape Coral. Всё можно оформить удалённо — по телефону, смс или email.' },
    ],
    disclaimer: 'Описания покрытий — общая информация, а не текст полиса. Требования, скидки и условия зависят от страховой компании, характеристик дома и расположения.',
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
    alternates: buildAlternates(params.lang, '/new-construction-home-insurance-florida'),
  };
}

export default function NewConstructionHomeInsuranceFlorida({ params }: { params: { lang: string } }) {
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
    </main>
  );
}
