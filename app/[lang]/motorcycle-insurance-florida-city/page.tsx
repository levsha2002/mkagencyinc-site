import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import LeadForm from '@/components/LeadForm';
import { buildAlternates } from '@/lib/seo';

// Гео-лендинг: Motorcycle Insurance — Florida City / Homestead.
// Контент самодостаточный (не в dictionaries.ts), по образцу car-insurance-florida-city/page.tsx.

type Lang = 'en' | 'es' | 'ru';

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'Motorcycle Insurance in Florida City & Homestead, FL | M&K Agency',
    metaDesc:
      'Local licensed agents quote motorcycle insurance for every bike — cruiser, sport, touring, or vintage. Free quote — English, Español, по-русски.',
    kicker: 'Motorcycle Insurance · Florida City & Homestead',
    h1a: 'Motorcycle insurance in Florida City & Homestead,',
    h1b: 'priced for how you actually ride.',
    sub: 'A supersport bike, a Harley, and a vintage cruiser don’t carry the same risk — and they shouldn’t carry the same rate. We’ll price your exact bike and riding profile carefully, in three languages.',
    cta: 'Have an agent call me',
    call: `Call ${PHONE_DISPLAY}`,
    whyTitle: 'Why one-size-fits-all motorcycle rates cost you money — and what we do about it',
    whyText:
      'Motorcycle insurance isn’t priced like car insurance. Bike type, engine size, riding experience, and whether it’s your daily ride or a weekend/collector bike all move the price — sometimes dramatically. We review your exact bike and profile in detail and apply every discount you qualify for, so you get a fair, competitive rate for your type of riding.',
    covTitle: 'Coverage we quote every day',
    cov: [
      { h: 'Liability, collision & comprehensive', p: 'Full protection for your bike and for others if you’re at fault — from a parking-lot tip-over to a total loss.' },
      { h: 'Custom parts, gear & accessory coverage', p: 'Aftermarket exhausts, custom paint, saddlebags, and riding gear are often excluded from standard policies unless you add this.' },
      { h: 'Agreed-value coverage for vintage & collector bikes', p: 'A total loss on a vintage or collector motorcycle pays out the value you and the carrier agreed on — not a depreciated guess.' },
      { h: 'Seasonal / lay-up coverage', p: 'Store your bike for the off-season and reduce or suspend liability and physical damage premiums while it sits.' },
      { h: 'Multi-bike & garage discounts', p: 'Insure more than one motorcycle — or bundle with your auto policy — and save on both.' },
      { h: 'Roadside assistance for riders', p: 'Flat tire, dead battery, or breakdown on US-1 — towing and roadside help built for two wheels, not four.' },
    ],
    localTitle: 'A real office, 10 minutes away',
    localText:
      'We’re at 33550 S Dixie Hwy, Suite 102, Florida City — close to Homestead, Leisure City and Naranja, and a short ride from the Keys. Walk in, call, or text. Same-day proof of insurance and claims guidance from agents who understand riders.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Talk to a licensed agent',
    faqTitle: 'Motorcycle insurance in Florida City — common questions',
    faq: [
      { q: 'Is motorcycle insurance legally required in Florida?', a: 'Florida doesn’t require standalone liability insurance to register most motorcycles the way it does for cars — but you remain financially responsible for any damage or injury you cause. Carrying real coverage protects your savings if you’re ever at fault in an accident, and lenders require it if the bike is financed.' },
      { q: 'What is agreed-value coverage and do I need it?', a: 'Agreed value locks in a payout amount you and the carrier agree on up front — instead of a depreciated “actual cash value” estimate after a total loss. It’s especially important for vintage, custom, or collector motorcycles that have appreciated in value.' },
      { q: 'Can I insure a modified or custom bike?', a: 'Yes. Tell us about aftermarket parts, custom paint, or performance modifications and we’ll find coverage that fits — standard policies often exclude custom work unless it’s scheduled.' },
      { q: 'Do you offer coverage for multiple motorcycles?', a: 'Yes, often with a multi-bike discount. Bundling with your auto or home policy can save you further.' },
      { q: 'How fast can I get proof of insurance?', a: 'Usually the same day. Most policies can be quoted, bound, and documented within an hour.' },
    ],
    disclaimer: 'Coverage descriptions are general information, not policy language. Requirements and eligibility vary by carrier, bike type, and rider profile.',
  },
  es: {
    metaTitle: 'Seguro de Motocicleta en Florida City y Homestead, FL | M&K Agency',
    metaDesc:
      'Agentes locales licenciados cotizan seguro de motocicleta para cualquier moto — crucero, deportiva, touring o vintage. Cotización gratis. Hablamos español.',
    kicker: 'Seguro de Motocicleta · Florida City y Homestead',
    h1a: 'Seguro de motocicleta en Florida City y Homestead,',
    h1b: 'con el precio de cómo usted realmente maneja.',
    sub: 'Una moto supersport, una Harley y una crucero vintage no tienen el mismo riesgo — y no deberían tener la misma tarifa. Cotizamos su moto y su perfil exactos con cuidado, en tres idiomas.',
    cta: 'Que me llame un agente',
    call: `Llame ${PHONE_DISPLAY}`,
    whyTitle: 'Por qué una tarifa “talla única” le cuesta dinero — y qué hacemos al respecto',
    whyText:
      'El seguro de motocicleta no se cotiza como el de auto. El tipo de moto, el tamaño del motor, la experiencia del conductor y si es su vehículo diario o una moto de fin de semana o colección mueven el precio — a veces drásticamente. Revisamos su moto y perfil exactos en detalle y aplicamos cada descuento que le corresponde, para que obtenga una tarifa justa y competitiva para su tipo de manejo.',
    covTitle: 'Coberturas que cotizamos todos los días',
    cov: [
      { h: 'Responsabilidad civil, colisión y cobertura amplia', p: 'Protección completa para su moto y para terceros si usted es responsable — desde una caída en el estacionamiento hasta una pérdida total.' },
      { h: 'Piezas personalizadas, equipo y accesorios', p: 'Escapes de aftermarket, pintura personalizada, alforjas y equipo de conducción suelen quedar excluidos de las pólizas estándar a menos que agregue esta cobertura.' },
      { h: 'Cobertura de valor acordado para motos vintage y de colección', p: 'Una pérdida total en una moto vintage o de colección paga el valor que usted y la aseguradora acordaron — no una estimación depreciada.' },
      { h: 'Cobertura estacional / de almacenamiento', p: 'Guarde su moto fuera de temporada y reduzca o suspenda las primas de responsabilidad civil y daño físico mientras no la use.' },
      { h: 'Descuentos por múltiples motos', p: 'Asegure más de una motocicleta — o combínela con su póliza de auto — y ahorre en ambas.' },
      { h: 'Asistencia en carretera para motociclistas', p: 'Llanta ponchada, batería agotada o avería en la US-1 — remolque y asistencia diseñados para dos ruedas, no cuatro.' },
    ],
    localTitle: 'Una oficina real, a 10 minutos',
    localText:
      'Estamos en 33550 S Dixie Hwy, Suite 102, Florida City — cerca de Homestead, Leisure City y Naranja, y a poca distancia de los Cayos. Visítenos, llame o envíe un texto. Comprobante de seguro el mismo día y acompañamiento en reclamos de agentes que entienden a los motociclistas.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Hable con un agente licenciado',
    faqTitle: 'Seguro de motocicleta en Florida City — preguntas frecuentes',
    faq: [
      { q: '¿Es obligatorio el seguro de motocicleta en Florida?', a: 'Florida no exige un seguro de responsabilidad civil independiente para registrar la mayoría de las motocicletas como sí lo hace con los autos — pero usted sigue siendo responsable financieramente por cualquier daño o lesión que cause. Tener cobertura real protege sus ahorros, y los prestamistas la exigen si la moto está financiada.' },
      { q: '¿Qué es la cobertura de valor acordado y la necesito?', a: 'El valor acordado fija por adelantado el monto que usted y la aseguradora acuerdan — en lugar de una estimación depreciada de “valor real en efectivo” tras una pérdida total. Es especialmente importante para motos vintage, personalizadas o de colección que se han revalorizado.' },
      { q: '¿Pueden asegurar una moto modificada o personalizada?', a: 'Sí. Cuéntenos sobre piezas aftermarket, pintura personalizada o modificaciones de rendimiento y le encontramos la cobertura adecuada — las pólizas estándar suelen excluir el trabajo personalizado a menos que se declare.' },
      { q: '¿Ofrecen cobertura para varias motocicletas?', a: 'Sí, muchas veces con descuento por múltiples motos. Combinar con su póliza de auto o casa puede ahorrarle aún más.' },
      { q: '¿Qué tan rápido obtengo el comprobante de seguro?', a: 'Normalmente el mismo día. La mayoría de las pólizas se cotizan y emiten en una hora.' },
    ],
    disclaimer: 'Las descripciones de cobertura son información general, no lenguaje de póliza. Los requisitos y la elegibilidad varían según la aseguradora, el tipo de moto y el perfil del conductor.',
  },
  ru: {
    metaTitle: 'Страховка мотоцикла во Florida City и Homestead, FL | M&K Agency',
    metaDesc:
      'Местные лицензированные агенты рассчитают страховку мотоцикла для любого байка — круизер, спорт, туринг или винтаж. Бесплатный расчёт. Говорим по-русски.',
    kicker: 'Страховка мотоцикла · Florida City и Homestead',
    h1a: 'Страховка мотоцикла во Florida City и Homestead —',
    h1b: 'по цене, соответствующей тому, как вы ездите.',
    sub: 'Спортбайк, Harley и винтажный круизер несут разный риск — и не должны стоить одинаково. Мы внимательно рассчитаем тариф для вашего конкретного байка и профиля вождения, на трёх языках.',
    cta: 'Заказать звонок агента',
    call: `Звоните ${PHONE_DISPLAY}`,
    whyTitle: 'Почему единый тариф на мотоциклы невыгоден — и что мы с этим делаем',
    whyText:
      'Страховка мотоцикла считается не так, как автостраховка. Тип байка, объём двигателя, опыт водителя и то, ежедневный это транспорт или байк выходного дня/коллекционный экземпляр — всё это сильно меняет цену. Мы подробно разбираем ваш байк и профиль и применяем каждую положенную скидку, чтобы вы получили честный, конкурентный тариф под ваш стиль езды.',
    covTitle: 'Что мы считаем каждый день',
    cov: [
      { h: 'Liability, collision и comprehensive', p: 'Полная защита вашего байка и третьих лиц, если виноваты вы — от падения на парковке до полной гибели транспорта.' },
      { h: 'Кастомные детали, экипировка и аксессуары', p: 'Тюнинг-выхлопы, кастомная покраска, кофры и экипировка часто не покрываются стандартным полисом без этой опции.' },
      { h: 'Agreed-value для винтажных и коллекционных байков', p: 'При полной гибели винтажного или коллекционного мотоцикла выплата — это сумма, согласованная заранее с страховой, а не заниженная оценка.' },
      { h: 'Сезонное покрытие / хранение', p: 'Храните байк в межсезонье и снизьте или приостановите премии по liability и физическому ущербу, пока он не используется.' },
      { h: 'Скидки за несколько байков', p: 'Застрахуйте больше одного мотоцикла — или объедините с автополисом — и сэкономьте на обоих.' },
      { h: 'Помощь на дороге для байкеров', p: 'Спущенное колесо, севший аккумулятор или поломка на US-1 — эвакуация и помощь, рассчитанные на два колеса, а не четыре.' },
    ],
    localTitle: 'Настоящий офис в 10 минутах',
    localText:
      'Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City — рядом Homestead, Leisure City, Naranja и недалеко от Keys. Заходите, звоните или пишите. Подтверждение страховки в тот же день и сопровождение по клеймам от агентов, которые понимают байкеров.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Поговорить с лицензированным агентом',
    faqTitle: 'Страховка мотоцикла во Florida City — частые вопросы',
    faq: [
      { q: 'Обязательна ли страховка мотоцикла во Флориде по закону?', a: 'Флорида не требует отдельной liability-страховки для регистрации большинства мотоциклов, как для машин, — но вы всё равно несёте финансовую ответственность за причинённый ущерб или травмы. Реальное покрытие защищает ваши сбережения, а кредиторы требуют его, если байк в кредите.' },
      { q: 'Что такое agreed value и нужна ли она мне?', a: 'Agreed value фиксирует заранее согласованную с страховой сумму выплаты — вместо заниженной оценки «actual cash value» после полной гибели. Это особенно важно для винтажных, кастомных или коллекционных мотоциклов, которые выросли в цене.' },
      { q: 'Можно ли застраховать модифицированный или кастомный байк?', a: 'Да. Расскажите нам о тюнинге, кастомной покраске или модификациях двигателя — подберём подходящее покрытие. Стандартные полисы часто исключают кастомную работу, если она не заявлена отдельно.' },
      { q: 'Есть ли покрытие на несколько мотоциклов?', a: 'Да, часто со скидкой за несколько байков. Объединение с автополисом или страховкой дома сэкономит ещё больше.' },
      { q: 'Как быстро я получу подтверждение страховки?', a: 'Обычно в тот же день. Большинство полисов рассчитываются и оформляются за час.' },
    ],
    disclaimer: 'Описания покрытий — общая информация, а не текст полиса. Требования и условия зависят от страховой компании, типа байка и профиля водителя.',
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
    alternates: buildAlternates(params.lang, '/motorcycle-insurance-florida-city'),
  };
}

export default function MotorcycleInsuranceFloridaCity({ params }: { params: { lang: string } }) {
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
