import type { BlogPost, PostTranslation } from '../types';

// Facts checked 2026-10-06 (ET) against:
// - F.S. 627.7011(5)-(6), 2026 text (flsenate.gov) — 15-year roof rule, authorized inspector, roof-age calculation, exclusions
// - F.S. 627.701(10), 2026 text — separate roof deductible
// - F.S. 627.4133(2)(b), 2026 text — 120-day notice of nonrenewal/cancellation for residential property
// - SB 808 / HB 815 (2026) — would have extended the rule; both died in committee 3/13/2026
// - OIR 2022 Legislative Summary — SB 2-D (ch. 2022-268) roof-age provision
// - Citizens Answer ID 2513 (updated 3/17/2026), Answer ID 2871 (updated 3/19/2026), Personal Lines bulletin "Roof Rule Changes" (3/31/2023)
// No private insurers named. No price/discount/savings/guarantee claims.

const URL = {
  s7011: 'https://www.flsenate.gov/Laws/Statutes/2026/627.7011',
  s701: 'https://www.flsenate.gov/Laws/Statutes/2026/627.701',
  s4133: 'https://www.flsenate.gov/Laws/Statutes/2026/627.4133',
  sb808: 'https://www.flsenate.gov/Session/Bill/2026/808',
  oir2022: 'https://floir.gov/docs-sf/default-source/legislative-summary/2022-legislative-summary.pdf',
  cit2513: 'https://securesupport.citizensfla.com/app/answers/detail/a_id/2513',
  cit2871: 'https://securesupport.citizensfla.com/app/answers/detail/a_id/2871',
  citRoof: 'https://www.citizensfla.com/-/20230331-roof-rule-changes-1',
};

const en: PostTranslation = {
  title: "Is Your Roof Too Old for Home Insurance? Florida's 15-Year Roof Rule",
  metaTitle: "Florida's 15-Year Roof Rule for Home Insurance | M&K Agency",
  description:
    "Florida's 15-year roof rule, s. 627.7011(5): when an insurer can't refuse a home for roof age alone, how roof age is counted, and the 5-year inspection.",
  ogAlt:
    'Illustration of a Florida house with an orange roof under a magnifying glass, a 15 years badge, an inspection checklist and a palm tree',
  excerpt:
    'Florida law limits when an insurer can refuse a homeowners policy solely because of roof age. How the 15-year rule works, how roof age is counted, and what Citizens and a roof deductible add.',
  category: 'Homeowners insurance',
  body: [
    {
      type: 'p',
      text: 'If you own a home in Florida City, Homestead or elsewhere in South Florida, roof age is one of the first questions at application and renewal time. Florida law does not stop insurers from looking at roofs, but **s. 627.7011(5), Florida Statutes**, limits when a [homeowners policy](/en/homeowners-insurance-florida-city) can be refused **solely because of roof age**. Here is how the rule reads in the 2026 statutes.',
    },
    {
      type: 'callout',
      title: 'The short answer',
      text: 'Roof **under 15 years old**: an insurer may not refuse to issue or renew a homeowners policy solely because of the roof’s age. Roof **15 years or older**: the insurer must let you get an inspection by an authorized inspector, at your expense, before requiring a new roof. If the inspection shows **at least 5 years of useful life remaining**, age alone can’t be the reason for a refusal. The rule applies to homeowners policies issued or renewed on or after **July 1, 2022**.',
    },
    { type: 'h2', text: 'Where the rule comes from' },
    {
      type: 'p',
      text: 'The protection was added in the May 2022 special session (SB 2-D, chapter 2022-268), as the Florida Office of Insurance Regulation notes in its 2022 legislative summary. A 2026 bill to extend it to all property insurance policies, **SB 808** (House companion HB 815), died in committee on March 13, 2026, so the rule in force is the 2026 text of s. 627.7011(5).',
    },
    { type: 'h2', text: 'The rule, step by step' },
    {
      type: 'ol',
      items: [
        '**Roof under 15 years.** An insurer may not refuse to issue or refuse to renew a homeowners policy on a residential structure solely because the roof is less than 15 years old (s. 627.7011(5)(b)).',
        '**Roof 15 years or older.** Before requiring roof replacement as a condition of issuing or renewing the policy, the insurer must allow you to have the roof inspected by an authorized inspector. You pay for that inspection (s. 627.7011(5)(c)).',
        '**The report decides.** If the authorized inspector’s report shows 5 years or more of useful life remaining, the insurer may not refuse to issue or renew solely because of roof age.',
      ],
    },
    {
      type: 'p',
      text: 'Note the word **“solely.”** The section does not limit an insurer’s ability to reject or nonrenew for other lawful reasons (s. 627.7011(6)(c)), so a 10-year-old roof with active leaks can still be a problem. It also does not apply to mobile home policies (s. 627.7011(6)(b)).',
    },
    { type: 'h2', text: 'How roof age is counted' },
    {
      type: 'p',
      text: 'Under s. 627.7011(5)(d), roof age runs from the last date on which **100 percent of the roof’s surface area** was built or replaced under the building code in effect at the time. If the roof was replaced in stages, the clock starts at the first partial replacement in the series that eventually covered the whole roof. Citizens takes a similar view: if the roof was not all replaced at once, it uses the age of the oldest part.',
    },
    {
      type: 'p',
      text: 'A roof fully replaced in 2011 turns 15 in 2026. In a newly built home, roof age starts with construction, one of the topics on our [new-construction home insurance](/en/new-construction-home-insurance-florida) page. Keep the final roofing permit and the paid contract; your building department’s permit records can also confirm the date.',
    },
    { type: 'h2', text: 'Who can inspect a roof that is 15 or older' },
    {
      type: 'p',
      text: 'An “authorized inspector” must be **approved by the insurer** and be one of the following (s. 627.7011(5)(a)):',
    },
    {
      type: 'ul',
      items: [
        'A home inspector licensed under s. 468.8314',
        'A building code inspector certified under s. 468.607',
        'A general, building or residential contractor licensed under s. 489.111, or a roofing contractor',
        'A professional engineer licensed under s. 471.015 or architect licensed under s. 481.213',
        'Any other person or entity the insurer recognizes as qualified to inspect a residential structure',
      ],
    },
    {
      type: 'p',
      text: 'Ask which inspectors and report formats the insurer accepts **before** you book. Citizens describes remaining useful life as a trained professional’s estimate based on the roof’s condition and signs of deterioration.',
    },
    { type: 'h2', text: 'Citizens’ own roof age limits' },
    {
      type: 'p',
      text: '**Citizens Property Insurance Corporation** sets its own eligibility rules for personal residential policies. Per its FAQ updated March 17, 2026, Citizens requires documentation of a full roof replacement for:',
    },
    {
      type: 'ul',
      items: [
        'Homes with tile, slate, clay, concrete or metal roofs more than **50 years** old',
        'Homes with shingle or other types of roofs more than **25 years** old',
        'Mobile homes with roofs more than **25 years** old',
      ],
    },
    {
      type: 'p',
      text: 'Exceptions apply: you can submit documentation showing at least five years of remaining useful life for underwriting review. Citizens’ March 31, 2023 agent bulletin, issued to comply with SB 2-D, raised that minimum from three to five years and says coverage for a qualifying roof is extended for up to five years, even if the inspection shows more. Have a Citizens policy and a take-out offer? See our [Citizens take-out guide](/en/blog/citizens-takeout-offer).',
    },
    { type: 'h2', text: 'A separate roof deductible is a different rule' },
    {
      type: 'p',
      text: 'Under s. 627.701(10), a personal residential policy may include a **separate roof deductible** of no more than the lesser of 2 percent of the Coverage A (dwelling) limit or 50 percent of the roof replacement cost. It does not apply to hurricane roof losses, a tree or other hazard that punctures the roof deck, repairs of less than half the roof, or a total loss under the valued policy law. To add one at renewal, the insurer must send a notice of change in policy terms and let you reject it on a state-approved form. Hurricane damage falls under the hurricane deductible; see our [wind deductible guide](/en/florida-home-insurance-wind-deductible).',
    },
    { type: 'h2', text: 'If you receive a nonrenewal notice' },
    {
      type: 'p',
      text: 'For residential property policies, s. 627.4133(2)(b) requires written notice of nonrenewal, cancellation or termination **at least 120 days** before it takes effect, with the reason stated (shorter periods apply in listed cases, such as nonpayment). If the reason is roof age, compare it with the rule above and use that time to gather documents or schedule an inspection. Already filed a storm claim? See our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida).',
    },
    { type: 'h2', text: 'A checklist before your renewal' },
    {
      type: 'ol',
      items: [
        'Find the date of the last full roof replacement (final permit, paid contract or permit records).',
        'If the roof is 15 or older, ask which inspectors your insurer accepts and get a report that states remaining useful life in years.',
        'Photograph each slope and fix documented problems such as leaks or damaged shingles or tiles.',
        'After a reroof, update your wind mitigation report (Form OIR-B1-1802); see our [wind mitigation guide](/en/blog/wind-mitigation-inspection-florida) and the state’s [My Safe Florida Home program](/en/blog/my-safe-florida-home-2026).',
        'Check your declarations page for a roof deductible, and talk with a licensed agent before the renewal date.',
      ],
    },
    { type: 'h2', text: 'Talk with M&K Agency' },
    {
      type: 'p',
      text: 'M&K Agency is at 33550 S Dixie Hwy Ste 102, Florida City, FL 33034, open Monday to Friday 9 a.m. to 6 p.m. and Saturday by appointment. We can review your roof documents with you. Coverage and eligibility depend on the policy and each insurer’s underwriting, so talk with a licensed agent about your situation. [Request a quote](/en/quote) or call **(305) 859-3953**.',
    },
  ],
  faq: [
    {
      q: 'My roof is 12 years old. Can an insurer refuse my homeowners policy because of it?',
      a: 'Not because of its age alone. For homeowners policies issued or renewed on or after July 1, 2022, s. 627.7011(5)(b) bars refusing to issue or renew solely because the roof is less than 15 years old. The insurer can still consider the roof’s condition and other lawful reasons.',
    },
    {
      q: 'How is the 15-year rule different from Citizens’ 25- and 50-year limits?',
      a: 'The 15-year rule is state law that limits refusals based on roof age alone. Citizens’ limits are its own eligibility rules: past 25 years for shingle roofs or 50 years for tile, metal and other hard roofs, it asks for proof of a full replacement or at least five years of remaining useful life.',
    },
    {
      q: 'Does the roof-age rule apply to mobile homes?',
      a: 'No. Section 627.7011(6)(b) says the section does not apply to mobile home policies. Citizens separately requires proof of a full roof replacement on mobile homes with roofs over 25 years old.',
    },
  ],
  sources: [
    { label: 'Florida Statutes s. 627.7011 (2026): homeowners policies, roof age, authorized inspector (subsections 5 and 6)', url: URL.s7011 },
    { label: 'Florida Statutes s. 627.701 (2026): separate roof deductible (subsection 10)', url: URL.s701 },
    { label: 'Florida Statutes s. 627.4133 (2026): 120-day notice of nonrenewal or cancellation (subsection 2)', url: URL.s4133 },
    { label: 'Florida Senate: SB 808 (2026), Roofing Requirements for Property Insurance, died in committee March 13, 2026', url: URL.sb808 },
    { label: 'Florida Office of Insurance Regulation: 2022 Legislative Summary (SB 2-D, ch. 2022-268)', url: URL.oir2022 },
    { label: 'Citizens Property Insurance: roof age requirements for personal residential policies (Answer ID 2513, updated Mar. 17, 2026)', url: URL.cit2513 },
    { label: 'Citizens Property Insurance: Roof Rule Changes, Personal Lines bulletin (Mar. 31, 2023)', url: URL.citRoof },
    { label: 'Citizens Property Insurance: how the remaining useful life of a roof is determined (Answer ID 2871)', url: URL.cit2871 },
  ],
};

const es: PostTranslation = {
  title: '¿Su techo es demasiado viejo para el seguro de casa? La regla de los 15 años en Florida',
  metaTitle: 'Regla de los 15 años del techo en Florida | M&K Agency',
  description:
    'La regla de los 15 años del techo en Florida (s. 627.7011): cuándo no pueden negarle el seguro de casa solo por la edad del techo y qué hacer si es mayor.',
  ogAlt:
    'Ilustración de una casa en Florida con techo naranja bajo una lupa, un distintivo de 15 años, una lista de inspección y una palmera',
  excerpt:
    'La ley de Florida limita cuándo una aseguradora puede negarle una póliza de casa solo por la edad del techo. Cómo funciona la regla de los 15 años, cómo se cuenta la edad y qué añaden Citizens y el deducible de techo.',
  category: 'Seguro de casa',
  body: [
    {
      type: 'p',
      text: 'En el sur de Florida, la edad del techo es de lo primero que le preguntan al pedir o renovar el seguro. La ley no impide que las aseguradoras evalúen el techo, pero el **artículo 627.7011(5) de los Estatutos de Florida** limita cuándo pueden negarle una [póliza de seguro de casa](/es/homeowners-insurance-florida-city) **solo por la edad del techo**. Así se lee la regla en los estatutos de 2026.',
    },
    {
      type: 'callout',
      title: 'En resumen',
      text: 'Techo de **menos de 15 años**: la aseguradora no puede negarse a emitir ni a renovar una póliza de homeowners solo por la edad del techo. Techo de **15 años o más**: antes de exigirle un techo nuevo, debe permitirle una inspección por un inspector autorizado, que usted paga. Si el informe indica **al menos 5 años de vida útil restante**, la edad sola no basta para negarle la póliza. Aplica a pólizas de homeowners emitidas o renovadas desde el **1 de julio de 2022**.',
    },
    { type: 'h2', text: 'De dónde sale la regla' },
    {
      type: 'p',
      text: 'Se aprobó en la sesión especial de mayo de 2022 (SB 2-D, capítulo 2022-268), según el resumen legislativo de la Oficina de Regulación de Seguros de Florida (OIR). El **SB 808** de 2026 (gemelo del HB 815) quería extenderla a todas las pólizas de propiedad, pero murió en comisión el 13 de marzo de 2026.',
    },
    { type: 'h2', text: 'La regla, paso a paso' },
    {
      type: 'ol',
      items: [
        '**Techo de menos de 15 años.** La aseguradora no puede negarse a emitir ni a renovar una póliza de homeowners solo porque el techo tenga menos de 15 años (s. 627.7011(5)(b)).',
        '**Techo de 15 años o más.** Antes de exigir el cambio del techo como condición para emitir o renovar, debe permitirle una inspección por un inspector autorizado, a su costo (s. 627.7011(5)(c)).',
        '**Manda el informe.** Si el inspector autorizado determina que al techo le quedan 5 años o más de vida útil, la aseguradora no puede negarse a emitir ni a renovar solo por la edad.',
      ],
    },
    {
      type: 'p',
      text: 'Fíjese en la palabra **“solo”**. El artículo no limita el derecho de la aseguradora a rechazar o no renovar por otras razones legales (s. 627.7011(6)(c)): un techo de 10 años con goteras puede seguir siendo un problema. Tampoco se aplica a pólizas de casas móviles (s. 627.7011(6)(b)).',
    },
    { type: 'h2', text: 'Cómo se cuenta la edad del techo' },
    {
      type: 'p',
      text: 'Según el s. 627.7011(5)(d), la edad se cuenta desde la última fecha en que se construyó o reemplazó el **100 % de la superficie del techo** conforme al código de construcción vigente en ese momento. Si se cambió por partes, el conteo empieza con el primer reemplazo parcial de la serie que terminó cubriendo todo el techo. Citizens aplica un criterio parecido: si no se cambió todo a la vez, toma la edad de la parte más antigua.',
    },
    {
      type: 'p',
      text: 'Un techo cambiado por completo en 2011 cumple 15 años en 2026. En una casa recién construida, la edad del techo empieza con la construcción (vea [seguro para casas de nueva construcción](/es/new-construction-home-insurance-florida)). Guarde el permiso final y el contrato pagado; los registros de permisos de su ciudad o condado también confirman la fecha.',
    },
    { type: 'h2', text: 'Quién puede inspeccionar un techo de 15 años o más' },
    {
      type: 'p',
      text: 'El “inspector autorizado” debe estar **aprobado por la aseguradora** y ser uno de estos (s. 627.7011(5)(a)):',
    },
    {
      type: 'ul',
      items: [
        'Inspector de viviendas con licencia (s. 468.8314)',
        'Inspector de código de construcción certificado (s. 468.607)',
        'Contratista general, de edificación o residencial con licencia (s. 489.111), o contratista de techos',
        'Ingeniero (s. 471.015) o arquitecto (s. 481.213) con licencia',
        'Otra persona o entidad que la aseguradora reconozca como capacitada para inspeccionar una vivienda',
      ],
    },
    {
      type: 'p',
      text: 'Pregunte qué inspectores y formato de informe acepta la aseguradora **antes** de pedir la cita. Citizens describe la vida útil restante como la estimación de un profesional capacitado según el estado del techo.',
    },
    { type: 'h2', text: 'Los límites de edad propios de Citizens' },
    {
      type: 'p',
      text: '**Citizens Property Insurance Corporation** tiene sus propias reglas de elegibilidad para pólizas residenciales personales. Según sus preguntas frecuentes, actualizadas el 17 de marzo de 2026, pide prueba de un cambio completo del techo en:',
    },
    {
      type: 'ul',
      items: [
        'Casas con techo de teja, pizarra, barro, concreto o metal de más de **50 años**',
        'Casas con techo de shingle (tejas asfálticas) u otros materiales de más de **25 años**',
        'Casas móviles con techo de más de **25 años**',
      ],
    },
    {
      type: 'p',
      text: 'Hay excepciones: puede presentar prueba de que al techo le quedan al menos cinco años de vida útil. Un boletín de Citizens del 31 de marzo de 2023 subió ese mínimo de tres a cinco años y extiende la cobertura de un techo que califica hasta cinco años, aunque la inspección muestre más.',
    },
    { type: 'h2', text: 'El deducible de techo es otra regla' },
    {
      type: 'p',
      text: 'El s. 627.701(10) permite que una póliza residencial personal tenga un **deducible separado de techo** que no supere el menor de dos montos: el 2 % del límite de la Cobertura A (la vivienda) o el 50 % del costo de reemplazar el techo. No se aplica a daños al techo por huracán, a un árbol u otro peligro que perfore la base del techo, a reparaciones de menos de la mitad del techo ni a pérdidas totales bajo la ley de póliza valorada. Para agregarlo al renovar, la aseguradora debe avisarle del cambio y dejarle rechazarlo con un formulario aprobado por el estado. Para huracanes, vea nuestra [guía del deducible de viento](/es/florida-home-insurance-wind-deductible).',
    },
    { type: 'h2', text: 'Si le llega un aviso de no renovación' },
    {
      type: 'p',
      text: 'En pólizas de propiedad residencial, el s. 627.4133(2)(b) exige un aviso por escrito de no renovación, cancelación o terminación **al menos 120 días** antes, con el motivo (hay plazos más cortos en casos concretos, como la falta de pago). Si el motivo es la edad del techo, use ese tiempo para reunir documentos o pedir una inspección. ¿Ya tiene un reclamo por tormenta? Vea nuestra [cronología de reclamos por huracán](/es/blog/hurricane-claim-timeline-florida).',
    },
    { type: 'h2', text: 'Lista de pasos antes de renovar' },
    {
      type: 'ol',
      items: [
        'Busque la fecha del último cambio completo del techo.',
        'Si el techo tiene 15 años o más, pregunte qué inspectores acepta su aseguradora y pida un informe con la vida útil restante en años.',
        'Tome fotos del techo y repare los problemas documentados, como goteras.',
        'Después de cambiar el techo, actualice la inspección de mitigación de viento (formulario OIR-B1-1802) y vea si califica para el programa estatal [My Safe Florida Home](/es/blog/my-safe-florida-home-2026).',
        'Revise si su página de declaraciones tiene un deducible de techo y hable con un agente con licencia antes de la renovación.',
      ],
    },
    { type: 'h2', text: 'Hable con M&K Agency' },
    {
      type: 'p',
      text: 'M&K Agency está en 33550 S Dixie Hwy Ste 102, Florida City, FL 33034, de lunes a viernes de 9 a. m. a 6 p. m. y los sábados con cita. Revisamos con usted los documentos del techo. La cobertura depende de la póliza y de cada aseguradora; consulte su caso con un agente con licencia. [Pida una cotización](/es/quote) o llame al **(305) 859-3953**; le atendemos en español.',
    },
  ],
  faq: [
    {
      q: 'Mi techo tiene 12 años. ¿Me pueden negar el seguro de casa por eso?',
      a: 'No solo por la edad. En pólizas de homeowners emitidas o renovadas desde el 1 de julio de 2022, el s. 627.7011(5)(b) prohíbe negarse a emitir o renovar solo porque el techo tenga menos de 15 años. Sí pueden considerar el estado del techo.',
    },
    {
      q: '¿En qué se diferencia la regla de 15 años de los límites de 25 y 50 años de Citizens?',
      a: 'La regla de 15 años es ley estatal y limita los rechazos basados solo en la edad del techo. Los límites de Citizens son sus propias reglas: con más de 25 años en techos de shingle, o de 50 en teja, metal y otros materiales duros, pide prueba de un cambio completo o de al menos cinco años de vida útil restante.',
    },
    {
      q: '¿La regla aplica a casas móviles?',
      a: 'No. El s. 627.7011(6)(b) dice que el artículo no se aplica a pólizas de casas móviles. Citizens, por su parte, pide prueba de un cambio completo del techo en casas móviles con techo de más de 25 años.',
    },
  ],
  sources: [
    { label: 'Estatutos de Florida, s. 627.7011 (2026): pólizas de homeowners, edad del techo, inspector autorizado (apartados 5 y 6)', url: URL.s7011 },
    { label: 'Estatutos de Florida, s. 627.701 (2026): deducible separado de techo (apartado 10)', url: URL.s701 },
    { label: 'Estatutos de Florida, s. 627.4133 (2026): aviso de 120 días de no renovación o cancelación (apartado 2)', url: URL.s4133 },
    { label: 'Senado de Florida: SB 808 (2026), requisitos de techos en seguros de propiedad; murió en comisión el 13 de marzo de 2026', url: URL.sb808 },
    { label: 'Oficina de Regulación de Seguros de Florida (OIR): resumen legislativo 2022 (SB 2-D, cap. 2022-268)', url: URL.oir2022 },
    { label: 'Citizens Property Insurance: requisitos de edad del techo en pólizas residenciales personales (Answer ID 2513, actualizada el 17 de marzo de 2026)', url: URL.cit2513 },
    { label: 'Citizens Property Insurance: Roof Rule Changes, boletín para agentes (31 de marzo de 2023)', url: URL.citRoof },
    { label: 'Citizens Property Insurance: cómo se determina la vida útil restante del techo (Answer ID 2871)', url: URL.cit2871 },
  ],
};

const ru: PostTranslation = {
  title: 'Крыша слишком старая для страховки дома? Правило 15 лет во Флориде',
  metaTitle: 'Возраст крыши и страховка дома во Флориде | M&K Agency',
  description:
    'Правило 15 лет во Флориде (s. 627.7011): когда страховщик не вправе отказать из-за одного лишь возраста крыши, как его считают и что даёт инспекция.',
  ogAlt:
    'Иллюстрация: дом во Флориде с оранжевой крышей под лупой, значок «15 лет», чек-лист инспекции и пальма',
  excerpt:
    'Закон Флориды ограничивает отказы в страховке дома из-за одного лишь возраста крыши. Как работает правило 15 лет, как считают возраст крыши и что добавляют правила Citizens и отдельная франшиза на крышу.',
  category: 'Страхование дома',
  body: [
    {
      type: 'p',
      text: 'Если у вас дом во Florida City, Homestead или в любом другом районе Южной Флориды, возраст крыши — один из первых вопросов, которые задают при оформлении и продлении страховки. Закон не запрещает страховщикам оценивать крышу, но **статья 627.7011(5) Florida Statutes** ограничивает случаи, когда в [страховке дома (homeowners)](/ru/homeowners-insurance-florida-city) могут отказать **только из-за возраста крыши**. Разберём, как это правило звучит в редакции законов 2026 года и как подготовиться к следующему продлению.',
    },
    {
      type: 'callout',
      title: 'Коротко',
      text: 'Крыше **меньше 15 лет** — страховщик не может отказать в выдаче или продлении полиса homeowners только из-за её возраста. Крыше **15 лет и больше** — прежде чем требовать новую крышу, страховщик обязан дать вам провести инспекцию у уполномоченного инспектора (за ваш счёт). Если в отчёте указано, что крыше осталось служить **не менее 5 лет**, один лишь возраст не может быть причиной отказа. Правило действует для полисов homeowners, выданных или продлённых **начиная с 1 июля 2022 года**.',
    },
    { type: 'h2', text: 'Откуда взялось правило' },
    {
      type: 'p',
      text: 'Эту защиту приняли на специальной сессии в мае 2022 года (закон SB 2-D, глава 2022-268); Управление по регулированию страхования Флориды (OIR) описывает её в своём обзоре законодательства за 2022 год. В 2026 году внесли законопроект **SB 808** (и его аналог в Палате представителей HB 815), который распространил бы правило с полисов homeowners на все полисы страхования имущества, но он так и не вышел из комитета: 13 марта 2026 года его рассмотрение прекратилось. Поэтому сейчас действует правило в редакции 2026 года статьи 627.7011(5).',
    },
    { type: 'h2', text: 'Правило по шагам' },
    {
      type: 'ol',
      items: [
        '**Крыше меньше 15 лет.** Страховщик не вправе отказать в выдаче или продлении полиса homeowners на жилой дом только потому, что крыше меньше 15 лет (s. 627.7011(5)(b)).',
        '**Крыше 15 лет и больше.** Прежде чем ставить замену крыши условием выдачи или продления полиса, страховщик обязан разрешить вам инспекцию у уполномоченного инспектора. Оплачиваете её вы (s. 627.7011(5)(c)).',
        '**Решает отчёт.** Если уполномоченный инспектор указал, что крыше осталось служить 5 лет или больше, страховщик не вправе отказать в выдаче или продлении только из-за её возраста.',
      ],
    },
    {
      type: 'p',
      text: 'Обратите внимание на слово **«только»**. Статья не ограничивает право страховщика отказать или не продлить полис по другим законным причинам (s. 627.7011(6)(c)). Десятилетняя крыша с протечками всё равно может стать проблемой. Кроме того, статья не применяется к полисам на передвижные дома (mobile home, s. 627.7011(6)(b)).',
    },
    { type: 'h2', text: 'Как считают возраст крыши' },
    {
      type: 'p',
      text: 'По s. 627.7011(5)(d) возраст крыши отсчитывают с последней даты, когда **100 % её площади** было построено или заменено по строительному кодексу, действовавшему в тот момент. Если крышу меняли частями, отсчёт идёт с первой частичной замены в той серии работ, которая в итоге охватила всю крышу. Ремонт одного ската не делает крышу «новой». У Citizens похожий подход: если крышу меняли не целиком за один раз, возраст определяют по самой старой её части.',
    },
    {
      type: 'p',
      text: 'Арифметика простая: крыша, полностью заменённая в 2011 году, в 2026-м достигает 15 лет. У только что построенного дома возраст крыши отсчитывается от постройки — об этом есть раздел на нашей странице о [страховании новостроек](/ru/new-construction-home-insurance-florida). Храните финальный permit на крышу и оплаченный договор вместе со страховыми документами. Дату также можно подтвердить по архиву разрешений строительного департамента вашего города или округа.',
    },
    { type: 'h2', text: 'Кто может проверить крышу старше 15 лет' },
    {
      type: 'p',
      text: 'Закон называет «уполномоченным инспектором» (authorized inspector) специалиста, **одобренного страховщиком**, который при этом является одним из следующих (s. 627.7011(5)(a)):',
    },
    {
      type: 'ul',
      items: [
        'лицензированный инспектор жилья (home inspector) по s. 468.8314',
        'сертифицированный инспектор строительного кодекса по s. 468.607',
        'лицензированный генеральный, строительный или жилищный подрядчик по s. 489.111 либо кровельный подрядчик',
        'лицензированный инженер (s. 471.015) или архитектор (s. 481.213)',
        'другое лицо или компания, которых страховщик признаёт достаточно квалифицированными для общей инспекции жилого дома',
      ],
    },
    {
      type: 'p',
      text: 'Раз инспектора должен одобрить страховщик, **до** записи уточните у компании или у своего агента, каких инспекторов и какой формат отчёта они принимают, и проследите, чтобы в отчёте был указан оставшийся срок службы в годах. Citizens описывает оставшийся срок службы как оценку опытного специалиста отрасли — по общему состоянию крыши и признакам износа.',
    },
    { type: 'h2', text: 'Собственные возрастные пороги Citizens' },
    {
      type: 'p',
      text: 'У **Citizens Property Insurance Corporation** есть свои правила допуска для личных жилых полисов. Согласно её справочному разделу (обновлён 17 марта 2026 года), Citizens требует документ о полной замене крыши, если:',
    },
    {
      type: 'ul',
      items: [
        'крыша из черепицы (tile), сланца, глины, бетона или металла старше **50 лет**',
        'крыша из битумной черепицы (shingle) или других материалов старше **25 лет**',
        'крыша передвижного дома старше **25 лет**',
      ],
    },
    {
      type: 'p',
      text: 'Есть исключения: можно подать документы о том, что крыше осталось служить не менее пяти лет, и андеррайтеры Citizens их рассмотрят. В бюллетене Citizens для агентов от 31 марта 2023 года, выпущенном во исполнение SB 2-D, этот минимум подняли с трёх до пяти лет. Там же сказано, что для подходящей крыши покрытие продлевается не более чем на пять лет, даже если инспекция показала больший срок.',
    },
    { type: 'h2', text: 'Отдельная франшиза на крышу — это другое правило' },
    {
      type: 'p',
      text: 'Закон Флориды также разрешает включать в личный жилой полис **отдельную франшизу на крышу** (s. 627.701(10)). Она не может быть больше меньшей из двух сумм: 2 % лимита покрытия A (сам дом) или 50 % стоимости замены крыши, и применяется только к убыткам, урегулированным по восстановительной стоимости. Она не применяется к повреждению крыши ураганом, к падению дерева или другой угрозе, пробившей основание кровли, к ремонту менее 50 % крыши и к полной гибели дома по закону о полисах с оговорённой стоимостью (valued policy law). Добавить её при продлении можно только с уведомлением об изменении условий полиса, и вам должны дать возможность отказаться от неё по утверждённой форме. Об ураганной франшизе — в нашем [гиде по ветровой франшизе](/ru/florida-home-insurance-wind-deductible).',
    },
    { type: 'h2', text: 'Если пришло уведомление об отказе в продлении' },
    {
      type: 'p',
      text: 'Для полисов на жилую недвижимость s. 627.4133(2)(b) обязывает страховщика письменно уведомить первого названного в полисе страхователя об отказе в продлении, расторжении или прекращении полиса **не менее чем за 120 дней** и указать причину. Для отдельных случаев сроки короче — например, 10 дней при неуплате премии. Если причина — возраст крыши, сверьте её с правилом выше и используйте это время, чтобы собрать документы и при необходимости заказать инспекцию. Если вы уже подали заявление об ущербе после шторма, сроки по нему описаны в нашем материале о [сроках по ураганным убыткам](/ru/blog/hurricane-claim-timeline-florida).',
    },
    { type: 'h2', text: 'Чек-лист перед продлением' },
    {
      type: 'ol',
      items: [
        'Найдите дату последней полной замены крыши: финальный permit, оплаченный договор или данные строительного департамента.',
        'Если крыше 15 лет и больше, узнайте, каких уполномоченных инспекторов принимает ваш страховщик, и закажите отчёт с оставшимся сроком службы в годах.',
        'Сфотографируйте каждый скат и устраните зафиксированные проблемы — протечки, повреждённую черепицу.',
        'После замены крыши обновите отчёт о ветрозащите (форма OIR-B1-1802) — подробнее в нашем [гиде по wind mitigation](/ru/blog/wind-mitigation-inspection-florida). Проверьте и государственную программу [My Safe Florida Home](/ru/blog/my-safe-florida-home-2026).',
        'Проверьте на странице деклараций полиса (declarations page), есть ли отдельная франшиза на крышу, и заранее поговорите с лицензированным агентом.',
      ],
    },
    { type: 'h2', text: 'Обращайтесь в M&K Agency' },
    {
      type: 'p',
      text: 'M&K Agency находится по адресу 33550 S Dixie Hwy Ste 102, Florida City, FL 33034. Мы работаем с понедельника по пятницу с 9:00 до 18:00, в субботу — по записи. Вместе разберём документы на крышу и объясним, как эти правила применяются к вашему дому. Покрытие и допуск к страхованию зависят от полиса и требований конкретного страховщика, поэтому обсудите свою ситуацию с лицензированным агентом. [Запросите расчёт](/ru/quote) или позвоните по номеру **(305) 859-3953** — говорим по-русски.',
    },
  ],
  faq: [
    {
      q: 'Крыше 12 лет. Могут ли из-за этого отказать в страховке дома?',
      a: 'Только из-за возраста — нет. Для полисов homeowners, выданных или продлённых с 1 июля 2022 года, s. 627.7011(5)(b) запрещает отказывать в выдаче или продлении только потому, что крыше меньше 15 лет. При этом страховщик может учитывать состояние крыши и другие законные причины.',
    },
    {
      q: 'Чем правило 15 лет отличается от порогов Citizens в 25 и 50 лет?',
      a: 'Правило 15 лет — это закон штата, который ограничивает отказы только из-за возраста крыши в полисах homeowners. Пороги Citizens — её собственные правила допуска: для крыш из битумной черепицы старше 25 лет или из черепицы, металла и других твёрдых материалов старше 50 лет она просит подтвердить полную замену или представить документы о не менее чем пяти годах оставшегося срока службы.',
    },
    {
      q: 'Действует ли правило для передвижных домов (mobile home)?',
      a: 'Нет. По s. 627.7011(6)(b) статья не применяется к полисам на передвижные дома. Citizens, со своей стороны, требует подтверждения полной замены крыши у передвижных домов, если крыше больше 25 лет.',
    },
  ],
  sources: [
    { label: 'Florida Statutes, s. 627.7011 (2026): полисы homeowners, возраст крыши, уполномоченный инспектор (п. 5 и 6)', url: URL.s7011 },
    { label: 'Florida Statutes, s. 627.701 (2026): отдельная франшиза на крышу (п. 10)', url: URL.s701 },
    { label: 'Florida Statutes, s. 627.4133 (2026): уведомление об отказе в продлении или расторжении за 120 дней (п. 2)', url: URL.s4133 },
    { label: 'Сенат Флориды: законопроект SB 808 (2026) о требованиях к крышам в страховании имущества; рассмотрение прекращено в комитете 13 марта 2026 года', url: URL.sb808 },
    { label: 'Управление по регулированию страхования Флориды (OIR): обзор законодательства за 2022 год (SB 2-D, гл. 2022-268)', url: URL.oir2022 },
    { label: 'Citizens Property Insurance: требования к возрасту крыши для личных жилых полисов (Answer ID 2513, обновлено 17 марта 2026)', url: URL.cit2513 },
    { label: 'Citizens Property Insurance: Roof Rule Changes, бюллетень для агентов (31 марта 2023)', url: URL.citRoof },
    { label: 'Citizens Property Insurance: как определяют оставшийся срок службы крыши (Answer ID 2871)', url: URL.cit2871 },
  ],
};

export const post: BlogPost = {
  slug: 'roof-age-home-insurance-florida',
  datePublished: '2026-10-06',
  translations: { en, es, ru },
};
