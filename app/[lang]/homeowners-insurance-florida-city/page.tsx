import Link from 'next/link';
import HeroBackdrop from '@/components/hero/HeroBackdrop';
import { dailyHero } from '@/content/hero';
import { PHONE_DISPLAY, PHONE_TEL, getDict } from '@/lib/dictionaries';
import RatingBadge from '@/components/RatingBadge';
import LeadForm from '@/components/LeadForm';
import RelatedCoverage from '@/components/RelatedCoverage';
import RelatedGuides from '@/components/RelatedGuides';
import AreasWeServe from '@/components/city/AreasWeServe';
import { pageMetadata } from '@/lib/seo';

// ISR: re-render daily. The rating comes from data/reviews.json (see lib/reviews.ts);
// an optional live fetch (RATING_LIVE_FETCH=1) is cached for a week.
// Daily hero rotation (photo + H1 accent + sub, America/New_York date):
// pools in content/hero/copy/homeowners.ts and HERO_IMAGE_POOLS.homeowners in content/hero/index.ts.
// The H1 keyword prefix (t.h1a) stays fixed for SEO. Hourly ISR picks up the new day.
export const revalidate = 3600;

// Гео-лендинг: Homeowners Insurance — Florida City / Homestead.
// Контент самодостаточный (не в dictionaries.ts), по образцу car-insurance-florida-city/page.tsx.

type Lang = 'en' | 'es' | 'ru';

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'Homeowners Insurance Quote in Florida City & Homestead | M&K',
    metaDesc:
      'Get a homeowners insurance quote in Florida City or Homestead: what to have ready (roof age, wind mitigation form, 4-point) and local help in 3 languages.',
    kicker: 'Homeowners Insurance · Florida City & Homestead',
    h1a: 'Homeowners insurance in Florida City & Homestead,',
    h1b: 'that holds up when a storm hits.',
    sub: 'South Miami-Dade homeowners face real hurricane and flood risk — and a market where carriers come and go. We make sure your coverage is actually there when you need it — and that you understand exactly what it includes.',
    cta: 'Have an agent call me',
    call: `Call ${PHONE_DISPLAY}`,
    whyTitle: 'Why Florida homeowners insurance is a mess right now — and what we do about it',
    whyText:
      'Rising reinsurance costs, hurricane exposure, and several carrier exits and insolvencies have made Florida one of the hardest homeowners insurance markets in the country. As a family-owned local agency, we take the time to explain what your policy actually covers, help you navigate 4-point and wind mitigation inspections, and make sure the inspection reports you already have are on file with your quote.',
    covTitle: 'Coverage we quote every day',
    cov: [
      { h: 'Dwelling & other structures', p: 'Rebuild cost for your home, plus detached structures like a shed, fence, or detached garage.' },
      { h: 'Wind & hurricane coverage', p: 'Florida’s most important coverage line — we make sure your wind deductible and limits actually match your home’s risk.' },
      { h: 'Liability & medical payments', p: 'Protection if someone is injured on your property, or your family is responsible for damage to someone else’s.' },
      { h: 'Loss of use / additional living expenses', p: 'Covers hotel and living costs if your home becomes temporarily uninhabitable after a covered loss.' },
      { h: '4-point & wind mitigation inspection help', p: 'Homes over 20 years old typically need these before a carrier will issue a policy — we can point you to inspectors who turn them around fast.' },
      { h: 'Flood insurance guidance', p: 'Standard homeowners policies exclude flood. We’ll tell you honestly whether you need a separate NFIP or private flood policy for your address.' },
    ],
    localTitle: 'A real office, 10 minutes away',
    localText:
      'We’re at 33550 S Dixie Hwy, Suite 102, Florida City — serving homeowners across Homestead, Leisure City, Naranja and South Miami-Dade. Walk in, call, or text. We’ll help you get a policy in place fast for a purchase closing, or review your renewal before your rate changes.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Talk to a licensed agent',
    checkTitle: "What to have ready for a homeowners insurance quote",
    checkIntro: "A quote is only as accurate as the details behind it. Having these on hand lets a licensed agent compare options for your home in one conversation instead of several.",
    check: [
      { h: "Address, year built and square footage", p: "The basics every quote starts with. The county property appraiser’s record is a good place to confirm year built and living area." },
      { h: "Roof age, material and permit", p: "Florida law limits when an insurer can refuse to write or renew a home solely because of roof age: roofs under 15 years old, and older roofs that an inspection shows have at least 5 years of useful life left (s. 627.7011). A roof permit or invoice helps prove the date.", link: { href: "/en/blog/roof-age-home-insurance-florida", label: "Florida’s 15-year roof rule" } },
      { h: "Wind mitigation form (OIR-B1-1802)", p: "If you have one, bring it. OIR says a completed form is valid for up to five years if the structure hasn’t materially changed.", link: { href: "/en/blog/wind-mitigation-inspection-florida", label: "What the wind mitigation form documents" } },
      { h: "4-point inspection, if your home is older", p: "Many insurers ask for a report on the roof, electrical, plumbing and HVAC before writing an older home. Ask us first whether it’s needed for your address." },
      { h: "Current declarations page and claims history", p: "Your current limits and deductibles, including your hurricane deductible, plus any claims in recent years. This lets us compare like with like.", link: { href: "/en/florida-home-insurance-wind-deductible", label: "How hurricane deductibles work" } },
      { h: "Mortgage company and flood zone", p: "Your lender’s mortgagee clause and loan number for closing, and your flood zone from FEMA’s Flood Map Service Center. Standard homeowners policies don’t cover flood.", link: { href: "/en/flood-insurance-homestead-fl", label: "Flood insurance in Homestead & Florida City" } },
    ],
    faqTitle: 'Homeowners insurance in Florida City — common questions',
    faq: [
      { q: 'Why did my homeowners insurance premium go up so much?', a: 'Rising reinsurance costs (what carriers pay to insure themselves against catastrophic losses), construction and repair cost inflation, and hurricane risk have driven premiums up across Florida — especially for older homes. Reviewing your policy with an agent each year, rather than auto-renewing without looking, is the most effective way to confirm your coverage, deductibles and inspection reports are still up to date.' },
      { q: 'Do I need flood insurance separately?', a: 'Yes — standard homeowners policies exclude flood damage entirely. Whether you legally need it depends on your flood zone and whether you have a mortgage, but we recommend most Miami-Dade homeowners at least get a quote, since flood damage isn’t rare here.' },
      { q: 'What is a 4-point inspection and when do I need one?', a: 'It’s an inspection of your home’s roof, electrical, plumbing, and HVAC systems, typically required by carriers for homes older than about 20 years before they’ll issue a new policy. A wind mitigation inspection, which documents your home’s wind-resistant features on Form OIR-B1-1802, is often done at the same visit.' },
      { q: 'How fast can you bind coverage for a home purchase closing?', a: 'Often within the same day once we have your address, purchase price, and any required inspection reports. We work directly with title companies and lenders to keep closings on schedule.' },
      { q: 'Who will I be working with?', a: 'We’re a family-owned insurance agency in Florida City. A licensed agent will review your home’s age, location, and inspection results with you and explain the coverage available for your situation.' },
      { q: "Can an insurer refuse my home just because the roof is old?", a: "Not solely for that reason if the roof is under 15 years old. For an older roof, Florida law lets you have it inspected at your own expense, and the insurer can’t refuse solely due to roof age if the inspection shows at least 5 years of remaining useful life (s. 627.7011). Other underwriting rules still apply." },
      { q: "Should I bring my wind mitigation report to a quote?", a: "Yes. Insurers can use a current OIR-B1-1802 form for wind-related rating. OIR says a completed form is valid for up to five years, provided the structure hasn’t materially changed and the form has no inaccuracies." },
    ],
    disclaimer: 'Coverage descriptions are general information, not policy language. Requirements and eligibility vary by carrier, home age, and location.',
  },
  es: {
    metaTitle: 'Cotización de seguro de casa en Florida City y Homestead | M&K',
    metaDesc:
      'Pida su cotización de seguro de casa en Florida City u Homestead: qué tener a mano (edad del techo, mitigación de viento, 4 puntos). Hablamos español.',
    kicker: 'Seguro de Casa · Florida City y Homestead',
    h1a: 'Seguro de casa en Florida City y Homestead,',
    h1b: 'que aguanta cuando llega la tormenta.',
    sub: 'Los propietarios del sur de Miami-Dade enfrentan un riesgo real de huracanes e inundaciones — y un mercado donde las aseguradoras entran y salen. Nos aseguramos de que su cobertura realmente esté ahí cuando la necesite — y de que usted entienda exactamente qué incluye.',
    cta: 'Que me llame un agente',
    call: `Llame ${PHONE_DISPLAY}`,
    whyTitle: 'Por qué el seguro de casa en Florida es un desastre ahora mismo — y qué hacemos al respecto',
    whyText:
      'El aumento en costos de reaseguro, la exposición a huracanes y varias salidas e insolvencias de aseguradoras han hecho de Florida uno de los mercados de seguro de casa más difíciles del país. Como agencia familiar local, nos tomamos el tiempo de explicarle qué cubre realmente su póliza, le ayudamos con las inspecciones de 4 puntos y mitigación de viento, y nos aseguramos de que los informes de inspección que ya tiene acompañen su cotización.',
    covTitle: 'Coberturas que cotizamos todos los días',
    cov: [
      { h: 'Vivienda y otras estructuras', p: 'Costo de reconstrucción de su casa, más estructuras separadas como cobertizo, cerca o garaje independiente.' },
      { h: 'Cobertura de viento y huracán', p: 'La línea de cobertura más importante en Florida — verificamos que su deducible de viento y límites correspondan realmente al riesgo de su casa.' },
      { h: 'Responsabilidad civil y pagos médicos', p: 'Protección si alguien se lesiona en su propiedad, o si su familia es responsable de daños a la propiedad de otra persona.' },
      { h: 'Pérdida de uso / gastos adicionales de vivienda', p: 'Cubre hotel y gastos de vida si su casa queda temporalmente inhabitable tras un siniestro cubierto.' },
      { h: 'Ayuda con inspección de 4 puntos y mitigación de viento', p: 'Las casas de más de 20 años generalmente las necesitan antes de que una aseguradora emita una póliza — le recomendamos inspectores que las realizan rápido.' },
      { h: 'Orientación sobre seguro de inundación', p: 'Las pólizas estándar de casa excluyen inundación. Le diremos honestamente si necesita una póliza separada de NFIP o de inundación privada para su dirección.' },
    ],
    localTitle: 'Una oficina real, a 10 minutos',
    localText:
      'Estamos en 33550 S Dixie Hwy, Suite 102, Florida City — atendemos a propietarios en Homestead, Leisure City, Naranja y el sur de Miami-Dade. Visítenos, llame o envíe un texto. Le ayudamos a tener una póliza lista rápido para el cierre de una compra, o a revisar su renovación antes de que cambie su tarifa.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Hable con un agente licenciado',
    checkTitle: "Qué tener a mano para cotizar su seguro de casa",
    checkIntro: "Una cotización es tan precisa como los datos que la respaldan. Con esto listo, un agente licenciado puede comparar opciones para su casa en una sola conversación.",
    check: [
      { h: "Dirección, año de construcción y metros cuadrados", p: "Lo básico de toda cotización. El registro del tasador de propiedades del condado sirve para confirmar el año y el área habitable." },
      { h: "Edad, material y permiso del techo", p: "La ley de Florida limita cuándo una aseguradora puede negarse a emitir o renovar una póliza solo por la edad del techo: techos de menos de 15 años, y techos más viejos que según una inspección tienen al menos 5 años de vida útil (s. 627.7011). El permiso o la factura del techo ayuda a probar la fecha.", link: { href: "/es/blog/roof-age-home-insurance-florida", label: "La regla de los 15 años del techo" } },
      { h: "Formulario de mitigación de viento (OIR-B1-1802)", p: "Si lo tiene, tráigalo. Según la OIR, un formulario completado vale hasta cinco años si la estructura no ha tenido cambios importantes." },
      { h: "Inspección de 4 puntos, si la casa es más antigua", p: "Muchas aseguradoras piden un informe del techo, la electricidad, la plomería y el aire acondicionado antes de asegurar una casa con años. Pregúntenos primero si hace falta para su dirección." },
      { h: "Página de declaraciones actual e historial de reclamos", p: "Sus límites y deducibles actuales, incluido el deducible de huracán, y los reclamos de los últimos años. Así comparamos en igualdad de condiciones.", link: { href: "/es/florida-home-insurance-wind-deductible", label: "Cómo funciona el deducible de huracán" } },
      { h: "Compañía hipotecaria y zona de inundación", p: "La cláusula hipotecaria y el número de préstamo para el cierre, y su zona de inundación en el Flood Map Service Center de FEMA. La póliza de casa estándar no cubre inundación.", link: { href: "/es/flood-insurance-homestead-fl", label: "Seguro de inundación en Homestead y Florida City" } },
    ],
    faqTitle: 'Seguro de casa en Florida City — preguntas frecuentes',
    faq: [
      { q: '¿Por qué subió tanto mi prima de seguro de casa?', a: 'El aumento en costos de reaseguro (lo que pagan las aseguradoras para protegerse de pérdidas catastróficas), la inflación en costos de construcción y reparación, y el riesgo de huracanes han elevado las primas en toda Florida — especialmente en casas más antiguas.Revisar su póliza con un agente cada año, en vez de renovarla automáticamente sin mirarla, es la forma más eficaz de confirmar que su cobertura, deducibles e informes de inspección siguen al día.' },
      { q: '¿Necesito seguro de inundación por separado?', a: 'Sí — las pólizas estándar de casa excluyen totalmente el daño por inundación. Si legalmente lo necesita depende de su zona de inundación y si tiene hipoteca, pero recomendamos que la mayoría de los propietarios en Miami-Dade al menos obtengan una cotización, ya que el daño por inundación no es raro aquí.' },
      { q: '¿Qué es una inspección de 4 puntos y cuándo la necesito?', a: 'Es una inspección del techo, sistema eléctrico, plomería y HVAC de su casa, generalmente requerida por las aseguradoras para casas de más de 20 años antes de emitir una nueva póliza. Una inspección de mitigación de viento, que documenta en el formulario OIR-B1-1802 las características de la casa que resisten el viento, a menudo se hace en la misma visita.' },
      { q: '¿Qué tan rápido pueden emitir cobertura para el cierre de una compra?', a: 'A menudo el mismo día una vez que tenemos su dirección, precio de compra y cualquier informe de inspección requerido. Trabajamos directamente con compañías de título y prestamistas para mantener los cierres a tiempo.' },
      { q: '¿Con quién voy a trabajar?', a: 'Somos una agencia de seguros familiar en Florida City. Un agente licenciado revisará con usted la antigüedad, la ubicación y los resultados de inspección de su casa y le explicará la cobertura disponible para su situación.' },
      { q: "¿Me pueden negar el seguro solo porque el techo es viejo?", a: "No solo por esa razón si el techo tiene menos de 15 años. Si es más viejo, la ley de Florida le permite hacer una inspección por su cuenta, y la aseguradora no puede negarse solo por la edad si la inspección muestra al menos 5 años de vida útil restante (s. 627.7011). Las demás reglas de suscripción siguen aplicando." },
      { q: "¿Debo traer mi informe de mitigación de viento a la cotización?", a: "Sí. Las aseguradoras pueden usar un formulario OIR-B1-1802 vigente para la tarificación de viento. Según la OIR, vale hasta cinco años si la estructura no ha cambiado de forma importante y el formulario no tiene errores." },
    ],
    disclaimer: 'Las descripciones de cobertura son información general, no lenguaje de póliza. Los requisitos y la elegibilidad varían según la aseguradora, la antigüedad y la ubicación de la casa.',
  },
  ru: {
    metaTitle: 'Расчёт страховки дома во Florida City и Homestead | M&K',
    metaDesc:
      'Расчёт страховки дома во Florida City и Homestead: какие документы подготовить (возраст крыши, wind mitigation, 4-point). Говорим по-русски.',
    kicker: 'Страховка дома · Florida City и Homestead',
    h1a: 'Страховка дома во Florida City и Homestead —',
    h1b: 'та, что реально работает при урагане.',
    sub: 'Домовладельцы юга Miami-Dade сталкиваются с реальным риском ураганов и наводнений — и рынком, где страховые компании то появляются, то исчезают. Мы проследим, чтобы ваше покрытие действительно сработало, когда понадобится — и чтобы вы точно понимали, что в него входит.',
    cta: 'Заказать звонок агента',
    call: `Звоните ${PHONE_DISPLAY}`,
    whyTitle: 'Почему страховка дома во Флориде сейчас в хаосе — и что мы с этим делаем',
    whyText:
      'Рост стоимости перестрахования, риск ураганов и уход/банкротство нескольких страховых компаний сделали Флориду одним из самых сложных рынков страхования жилья в стране. Как местное семейное агентство, мы находим время объяснить, что реально покрывает ваш полис, помогаем с проверками 4-point и wind mitigation и следим, чтобы уже имеющиеся у вас отчёты об инспекциях были приложены к расчёту.',
    covTitle: 'Что мы считаем каждый день',
    cov: [
      { h: 'Dwelling и другие строения', p: 'Стоимость восстановления дома, плюс отдельные строения — сарай, забор, отдельный гараж.' },
      { h: 'Wind & hurricane coverage', p: 'Самая важная строка покрытия во Флориде — мы проверим, что ваш wind-дедактибл и лимиты реально соответствуют риску дома.' },
      { h: 'Liability и медицинские выплаты', p: 'Защита, если кто-то получил травму на вашем участке, или ваша семья виновна в ущербе чужому имуществу.' },
      { h: 'Loss of use / дополнительные расходы на жильё', p: 'Покрывает отель и расходы на жизнь, если дом временно непригоден для жилья после покрытого случая.' },
      { h: 'Помощь с 4-point и wind mitigation проверками', p: 'Дома старше 20 лет обычно требуют их перед выдачей полиса — подскажем инспекторов, которые сделают проверку быстро.' },
      { h: 'Консультация по страхованию от наводнения', p: 'Стандартный полис дома не покрывает наводнение. Честно скажем, нужен ли вам отдельный полис NFIP или частная страховка от наводнения для вашего адреса.' },
    ],
    localTitle: 'Настоящий офис в 10 минутах',
    localText:
      'Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City — работаем с домовладельцами Homestead, Leisure City, Naranja и юга Miami-Dade. Заходите, звоните или пишите. Поможем быстро оформить полис для closing при покупке, или разберём ваш renewal до того, как изменится тариф.',
    langLine: 'English · Español · По-русски',
    formTitle: 'Поговорить с лицензированным агентом',
    checkTitle: "Что подготовить для расчёта страховки дома",
    checkIntro: "Расчёт точен настолько, насколько точны данные. Если всё под рукой, лицензированный агент сравнит варианты для вашего дома за один разговор, а не за несколько.",
    check: [
      { h: "Адрес, год постройки и площадь", p: "С этого начинается любой расчёт. Год постройки и жилую площадь удобно сверить по записи окружного оценщика недвижимости (property appraiser)." },
      { h: "Возраст крыши, материал и пермит", p: "Закон Флориды ограничивает отказ страховой в оформлении или продлении полиса только из-за возраста крыши: для крыш младше 15 лет и для более старых, если инспекция показала остаток срока службы не меньше 5 лет (s. 627.7011). Пермит или счёт за крышу помогут подтвердить дату.", link: { href: "/ru/blog/roof-age-home-insurance-florida", label: "Правило 15 лет для крыши" } },
      { h: "Форма wind mitigation (OIR-B1-1802)", p: "Если она есть, возьмите с собой. По данным OIR, заполненная форма действует до пяти лет, если в конструкции дома не было существенных изменений.", link: { href: "/ru/blog/wind-mitigation-inspection-florida", label: "Что фиксирует проверка wind mitigation" } },
      { h: "4-point inspection для домов постарше", p: "Многие страховые просят отчёт о крыше, электрике, сантехнике и кондиционировании, прежде чем застраховать дом с возрастом. Сначала спросите нас, нужен ли он для вашего адреса." },
      { h: "Текущая declarations page и история страховых случаев", p: "Нынешние лимиты и франшизы, включая ураганную, а также страховые случаи за последние годы. Так мы сравниваем равное с равным.", link: { href: "/ru/florida-home-insurance-wind-deductible", label: "Как работает ураганная франшиза" } },
      { h: "Ипотечная компания и flood-зона", p: "Mortgagee clause и номер кредита для closing, а также ваша flood-зона по карте FEMA (Flood Map Service Center). Стандартный полис дома наводнение не покрывает." },
    ],
    faqTitle: 'Страховка дома во Florida City — частые вопросы',
    faq: [
      { q: 'Почему моя премия за страховку дома так выросла?', a: 'Рост стоимости перестрахования (то, что страховые платят за защиту от катастрофических убытков), инфляция стоимости стройматериалов и ремонта, а также риск ураганов подняли премии по всей Флориде — особенно для старых домов. Ежегодный разбор полиса с агентом, а не автопродление не глядя, — самый надёжный способ убедиться, что покрытие, франшизы и отчёты об инспекциях актуальны.' },
      { q: 'Нужна ли мне отдельная страховка от наводнения?', a: 'Да — стандартный полис дома полностью исключает ущерб от наводнения. Обязательна ли она по закону, зависит от вашей flood-зоны и наличия ипотеки, но мы рекомендуем большинству домовладельцев Miami-Dade хотя бы запросить расчёт, поскольку ущерб от наводнения здесь не редкость.' },
      { q: 'Что такое 4-point inspection и когда она нужна?', a: 'Это проверка крыши, электрики, сантехники и HVAC дома, обычно требуемая страховыми для домов старше примерно 20 лет перед выдачей нового полиса. Проверка wind mitigation, которая фиксирует ветроустойчивые элементы дома в форме OIR-B1-1802, часто проводится в тот же визит.' },
      { q: 'Как быстро можно оформить покрытие для closing при покупке дома?', a: 'Часто в тот же день, как только у нас есть адрес, цена покупки и необходимые отчёты по инспекциям. Работаем напрямую с title-компаниями и кредиторами, чтобы closing прошёл по графику.' },
      { q: 'С кем именно я буду работать?', a: 'Мы — семейное страховое агентство во Florida City. Лицензированный агент разберёт с вами возраст и расположение дома, результаты инспекций и объяснит, какое покрытие доступно в вашей ситуации.' },
      { q: "Может ли страховая отказать только из-за старой крыши?", a: "Только по этой причине — нет, если крыше меньше 15 лет. Для более старой крыши закон Флориды позволяет провести инспекцию за свой счёт, и страховая не может отказать только из-за возраста, если инспекция показала остаток срока службы не меньше 5 лет (s. 627.7011). Остальные правила андеррайтинга при этом действуют." },
      { q: "Нужно ли приносить отчёт wind mitigation на расчёт?", a: "Да. Страховые могут учитывать действующую форму OIR-B1-1802 при расчёте ветрового риска. По данным OIR, форма действует до пяти лет, если в конструкции не было существенных изменений и в форме нет неточностей." },
    ],
    disclaimer: 'Описания покрытий — общая информация, а не текст полиса. Требования и условия зависят от страховой компании, возраста и расположения дома.',
  },
};

function pick(lang: string): { l: Lang; t: any } {
  const l: Lang = lang === 'es' || lang === 'ru' ? (lang as Lang) : 'en';
  return { l, t: C[l] };
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const { t } = pick(params.lang);
  return pageMetadata({
    lang: params.lang,
    path: '/homeowners-insurance-florida-city',
    title: t.metaTitle,
    description: t.metaDesc,
  });
}

export default function HomeownersInsuranceFloridaCity({ params }: { params: { lang: string } }) {
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

  const hero = dailyHero('homeowners', l);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="hero hero--photo">
        <HeroBackdrop image={hero.image} alt={hero.alt} />
        <div className="container hero-grid">
          <div>
            <span className="badge gold">{t.kicker}</span>
            <h1>
              {t.h1a} <span className="accent">{hero.copy.h}</span>
            </h1>
            <p className="sub">{hero.copy.sub}</p>
            <a className="cta" href="#quote">{t.cta}</a>
            <div className="rated rated-stack" style={{ marginLeft: 12 }}>
              <span>{t.langLine}</span>
              <RatingBadge lang={l} />
            </div>
          </div>
          <LeadForm lang={l} defaultType="Home" />
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
          <div className="cards4 cards3">
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

      <section className="section" id="quote-checklist">
        <div className="container">
          <h2>{t.checkTitle}</h2>
          <p style={{ maxWidth: '46rem', margin: '0 auto 18px', textAlign: 'center', color: 'var(--muted)' }}>{t.checkIntro}</p>
          <div className="cards4 cards3">
            {t.check.map((c: { h: string; p: string; link?: { href: string; label: string } }) => (
              <div className="svc" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
                {c.link && (
                  <p style={{ marginTop: 8 }}>
                    <Link href={c.link.href}>{c.link.label} →</Link>
                  </p>
                )}
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 22 }}>
            <Link className="cta" href={`/${l}/quote`}>{t.cta}</Link>{' '}
            <a className="cta" href={`tel:${PHONE_TEL}`}>{t.call}</a>
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f2f7ff' }} id="faq">
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
      <AreasWeServe lang={l} current="/homeowners-insurance-florida-city" />
      <RelatedGuides lang={l} page="/homeowners-insurance-florida-city" />
      <RelatedCoverage lang={l} current="/homeowners-insurance-florida-city" />
    </main>
  );
}
