import type { BlogPost, PostTranslation } from '../types';

// Facts checked 2026-10-07 (ET) against:
// - F.S. 322.04(1)(c)-(d), (2) (2026 text): nonresident exemption with a valid home state/country license
// - F.S. 322.031(1) (2026): nonresident who takes a job or enrolls children in public school: FL license within 30 days (spouse, dependents too)
// - F.S. 322.033(2) (2026): licenses issued by other states only to people who can't prove lawful presence are invalid in FL
// - F.S. 322.12(1) (2026): test waiver for a surrendered license from another state, a Canadian province or the US Armed Forces
// - F.S. 322.095(1) (2026): TLSAE course for applicants 18+ unless licensed in another jurisdiction
// - F.S. 320.02(2)(b), (3), (5)(a) (2026): ID for registration (incl. foreign passport + I-94), VIN verification, proof of PIP/PDL
// - F.S. 320.38 (2026): register within 10 days after starting a job or enrolling children
// - F.S. 627.733(1)-(2), (4) (2026): required security; nonresident vehicle present >90 of 365 days; owner liable for PIP if uninsured
// - F.S. 627.736(1) (2026): PIP $10,000, 80% of medical expenses, 14-day initial care
// - F.S. 324.022(1), (3) (2026): PDL $10,000; nonresident 90-day rule
// - F.S. 324.0221(1)-(2) (2026): insurer reports cancellations within 10 days; suspension of license and registration
// - FLHSMV pages: New Resident; Visiting Florida FAQs; Florida Insurance Requirements; Class E Knowledge Exam & Driving
//   Skills Test (50 questions, 40 to pass, English only); What to Bring; Driver License Handbook rev. 08/2023 (reciprocity list)
// - Florida Senate SB 1766 (2013) analysis + ch. 2013-1 (IDP requirement removed; IDP described as a translation)
// No private insurers named; no promotional or rate claims. The $500 figure is the state's reinstatement-fee cap (FLHSMV).

const URL = {
  newRes: 'https://www.flhsmv.gov/new-resident/',
  visit: 'https://www.flhsmv.gov/driver-licenses-id-cards/visiting-florida-faqs/',
  ins: 'https://www.flhsmv.gov/insurance/',
  exam: 'https://www.flhsmv.gov/driver-licenses-id-cards/licensing-requirements-teens-graduated-driver-license-laws-driving-curfews/class-e-knowledge-exam-driving-skills-test/',
  bring: 'https://www.flhsmv.gov/driver-licenses-id-cards/what-to-bring/',
  handbook: 'https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf',
  s32204: 'https://www.flsenate.gov/Laws/Statutes/2026/322.04',
  s322031: 'https://www.flsenate.gov/Laws/Statutes/2026/322.031',
  s322033: 'https://www.flsenate.gov/Laws/Statutes/2026/322.033',
  s32212: 'https://www.flsenate.gov/Laws/Statutes/2026/322.12',
  s322095: 'https://www.flsenate.gov/Laws/Statutes/2026/322.095',
  s32002: 'https://www.flsenate.gov/Laws/Statutes/2026/320.02',
  s32038: 'https://www.flsenate.gov/Laws/Statutes/2026/320.38',
  s627733: 'https://www.flsenate.gov/Laws/Statutes/2026/627.733',
  s627736: 'https://www.flsenate.gov/Laws/Statutes/2026/627.736',
  s324022: 'https://www.flsenate.gov/Laws/Statutes/2026/324.022',
  s3240221: 'https://www.flsenate.gov/Laws/Statutes/2026/324.0221',
  sb1766: 'https://flsenate.gov/Session/Bill/2013/1766/Analyses/2013s1766.pre.ca.PDF',
};

const es: PostTranslation = {
  title: 'Seguro de auto con licencia extranjera o recién llegado a Florida: licencia, registro y PIP',
  metaTitle: 'Seguro de auto con licencia extranjera en Florida | M&K Agency',
  description:
    '¿Recién llegado a Florida con licencia extranjera? Cuándo sacar la licencia de Florida, cómo registrar el carro en 10 días y qué seguro PIP y PDL se exige.',
  ogAlt: 'Ilustración de un carro, una licencia de conducir, un pasaporte y una palmera bajo un cielo azul',
  excerpt:
    'Puede manejar con la licencia de su país mientras es visitante, pero al establecerse en Florida corren plazos de 30 y 10 días. Licencia, registro y seguro mínimo, según el FLHSMV y la ley de 2026.',
  category: 'Seguro de auto',
  body: [
    { type: 'p', text: 'Si acaba de llegar a Florida desde Cuba, Venezuela, Colombia o desde otro estado, seguramente necesita un carro desde la primera semana. ¿Puede manejar con la licencia de su país? ¿Cuándo debe sacar la de Florida? ¿Qué seguro necesita para las placas? Esto es lo que dicen el **FLHSMV** (el departamento de vehículos de Florida) y los Estatutos de Florida de 2026.' },
    { type: 'callout', title: 'En resumen', text: 'Como visitante, puede manejar con una licencia válida de su país. Al establecerse en Florida tiene **30 días** para sacar la licencia de Florida y **10 días** para registrar su carro, y para registrarlo necesita un seguro de Florida con **PIP y PDL de al menos $10,000 cada uno**.' },

    { type: 'h2', text: '¿Puedo manejar en Florida con mi licencia extranjera?' },
    { type: 'p', text: 'Sí, mientras sea **no residente**. El s. 322.04 exime de la licencia de Florida a la persona no residente de 16 años o más que lleve consigo una licencia válida no comercial de su estado o país de origen.' },
    { type: 'p', text: '¿Y el permiso internacional (IDP)? La ley vigente no lo exige; el requisito que existió a comienzos de 2013 se eliminó ese mismo año. El IDP es, en esencia, una traducción de su licencia y no la sustituye.' },
    { type: 'p', text: 'Ojo: las licencias que algunos estados emiten solo a quienes no prueban presencia legal en EE. UU. no valen en Florida (s. 322.033).' },

    { type: 'h2', text: 'Cuándo pasa a ser residente: el plazo de 30 días' },
    { type: 'p', text: 'Según el FLHSMV, usted puede considerarse residente cuando empieza a trabajar en Florida, inscribe a sus hijos en una escuela pública, se registra para votar, solicita la exención de homestead o vive aquí más de seis meses seguidos.' },
    { type: 'p', text: 'Desde ese momento tiene **30 días** para sacar la licencia de Florida si va a seguir manejando. El s. 322.031 lo exige al no residente que acepta un empleo o inscribe a sus hijos en la escuela, y también a su cónyuge e hijos dependientes que manejen. Hay excepciones, como militares en servicio activo y estudiantes universitarios de tiempo completo.' },

    { type: 'h2', text: 'Cómo sacar la licencia de Florida con una licencia de otro país' },
    { type: 'p', text: 'El trámite es en persona y depende de quién emitió su licencia:' },
    { type: 'ul', items: [
      '**Otro estado de EE. UU. o las Fuerzas Armadas de EE. UU.:** el FLHSMV puede exonerarle de los exámenes escrito y práctico si entrega su licencia (s. 322.12).',
      '**Canadá, Francia, Taiwán o Corea del Sur:** según el manual oficial del FLHSMV, también se exoneran ambos exámenes. **Alemania:** solo el práctico.',
      '**Cualquier otro país** (por ejemplo, Cuba, Venezuela, Colombia o México): cuente con el examen de conocimientos y el examen práctico de manejo.',
    ] },
    { type: 'p', text: 'El examen de conocimientos Clase E tiene 50 preguntas y se aprueba con 40 correctas (80 %). El FLHSMV indica que **se ofrece solo en inglés**, así que conviene estudiar el manual con tiempo. El examen de la vista se hace siempre.' },
    { type: 'p', text: 'Si ya tuvo licencia en otro país, no necesita el curso **TLSAE**: el s. 322.095 solo lo exige a mayores de 18 años que nunca han tenido licencia en otra jurisdicción. Lleve prueba de identidad y de presencia legal, número de Seguro Social y dos comprobantes de domicilio; la lista según su estatus está en la página *What to Bring* del FLHSMV.' },

    { type: 'h2', text: 'Registrar el carro: 10 días y seguro de Florida' },
    { type: 'p', text: 'Si empieza a trabajar o inscribe a sus hijos en la escuela, el s. 320.38 le da **10 días** para registrar en Florida los vehículos que va a usar aquí. El FLHSMV aplica el mismo plazo a los nuevos residentes. Para un carro de otro estado, lleve:' },
    { type: 'ul', items: [
      '**identificación de todos los dueños:** el s. 320.02 acepta una licencia REAL ID, un pasaporte de EE. UU. o **un pasaporte extranjero vigente con el formulario I-94**, más un comprobante de domicilio;',
      '**prueba de seguro de Florida** y el **título original** (si hay préstamo, coordínelo con el prestamista);',
      '**el formulario HSMV 82040** firmado por todos los dueños y la **verificación física del VIN** (HSMV 82040 u 82042), hecha por un agente del orden, un concesionario con licencia de Florida o un empleado del recaudador de impuestos del condado, entre otros.',
    ] },
    { type: 'p', text: 'Sin prueba de PIP y PDL no hay registro: el s. 320.02(5) obliga a la oficina a negarlo.' },

    { type: 'h2', text: 'El seguro mínimo en Florida: PIP y PDL' },
    { type: 'ul', items: [
      '**$10,000 de PIP (protección contra lesiones personales).** Según el s. 627.736, paga el 80 % de los gastos médicos razonables y necesarios, hasta el límite, sin importar quién causó el choque, si recibe atención inicial dentro de 14 días.',
      '**$10,000 de PDL (daños a la propiedad)** por los daños que usted cause a bienes ajenos (s. 324.022).',
    ] },
    { type: 'p', text: 'Tres reglas clave:' },
    { type: 'ol', items: [
      '**La póliza tiene que ser de Florida**, de una aseguradora autorizada en el estado. Si viene de otro estado, pídale a su agente que pase su seguro a una póliza de Florida.',
      '**La cobertura debe ser continua**, aunque el carro no se use. Entregue la placa **antes** de cancelar el seguro.',
      '**Las cancelaciones se reportan al estado** dentro de 10 días (s. 324.0221). Sin cobertura, pueden suspenderle la licencia y el registro hasta por tres años, con una tarifa de reinstalación de hasta $500.',
    ] },
    { type: 'p', text: '¿Aún no es residente? Si el carro de un no residente estuvo en Florida más de 90 de los últimos 365 días, debe tener PIP y PDL mientras siga aquí (s. 627.733 y s. 324.022). Y el dueño que choca sin el seguro exigido paga personalmente los beneficios de PIP (s. 627.733(4)).' },
    { type: 'p', text: 'El mínimo no paga las lesiones que usted cause a otros; para eso existe la [responsabilidad por lesiones corporales](/es/blog/bodily-injury-liability-fr44-florida), y la [cobertura de motorista sin seguro](/es/blog/uninsured-motorist-coverage-florida) le protege si el responsable no tiene seguro. Son opcionales para la mayoría, pero conviene revisarlas con su agente.' },

    { type: 'h2', text: '¿Me pueden asegurar con licencia extranjera?' },
    { type: 'p', text: 'Puede pedir una cotización, pero cada aseguradora decide con sus propias reglas de suscripción cómo trata una licencia extranjera o un historial corto en EE. UU. Tenga a mano su pasaporte, su licencia y su documento migratorio (I-94, visa o residencia), su dirección en Florida, el VIN y el título del carro, y los datos de todos los que vayan a manejarlo.' },
    { type: 'p', text: 'Cuando saque la licencia de Florida, avísele a su agente para actualizar la póliza. Si un familiar va a usar su carro, lea [prestar su carro en Florida](/es/blog/lending-your-car-florida-owner-liability).' },

    { type: 'h2', text: 'Le atendemos en español en Florida City' },
    { type: 'p', text: 'En M&K Agency atendemos a recién llegados de todo el sur de Miami-Dade. Un agente con licencia le explica las coberturas, cotiza con la licencia que tiene hoy y, si se emite la póliza, le entrega la prueba de seguro para el registro. Vea nuestro [seguro de auto en Florida City](/es/car-insurance-florida-city), [solicite una cotización](/es/quote) o llame al **(305) 859-3953**. Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034; lunes a viernes de 9 a 6, sábados con cita.' },
    { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza; hable con un agente con licencia antes de contratar o cambiar su seguro. Esta guía es información general, no asesoría legal.' },
  ],
  faq: [
    { q: '¿Puedo manejar en Florida solo con la licencia de mi país?', a: 'Sí, como no residente, si la licencia es válida y la lleva consigo (s. 322.04). Cuando empieza a trabajar, inscribe a sus hijos en la escuela pública o se establece aquí, tiene 30 días para sacar la licencia de Florida.' },
    { q: '¿Necesito el permiso internacional de manejo (IDP)?', a: 'La ley de Florida vigente no lo exige: pide una licencia válida de su país. El IDP es una traducción de esa licencia y no la reemplaza.' },
    { q: '¿Puedo registrar el carro antes de tener licencia de Florida?', a: 'Sí. El s. 320.02 acepta un pasaporte extranjero vigente con el formulario I-94 y un comprobante de domicilio. También necesita la prueba de seguro de Florida con PIP y PDL.' },
  ],
  sources: [
    { label: 'FLHSMV: New Resident – Welcome to Florida! (residencia, 30 y 10 días, título y registro)', url: URL.newRes },
    { label: 'FLHSMV: Visiting Florida FAQs (visitantes de otro país; cuándo sacar la licencia de Florida)', url: URL.visit },
    { label: 'FLHSMV: Florida Insurance Requirements (PIP y PDL, cobertura continua, suspensiones)', url: URL.ins },
    { label: 'FLHSMV: Class E Knowledge Exam & Driving Skills Test (50 preguntas, solo en inglés)', url: URL.exam },
    { label: 'FLHSMV: What to Bring (documentos para la licencia)', url: URL.bring },
    { label: 'FLHSMV: Official Florida Driver License Handbook, rev. 08/2023 (reciprocidad)', url: URL.handbook },
    { label: 'Estatutos de Florida s. 322.04 (2026): personas exentas de sacar licencia', url: URL.s32204 },
    { label: 'Estatutos de Florida s. 322.031 (2026): no residentes; cuándo se exige licencia', url: URL.s322031 },
    { label: 'Estatutos de Florida s. 322.033 (2026): licencias de otros estados no válidas en Florida', url: URL.s322033 },
    { label: 'Estatutos de Florida s. 322.12 (2026): exámenes y exoneración', url: URL.s32212 },
    { label: 'Estatutos de Florida s. 322.095 (2026): curso TLSAE', url: URL.s322095 },
    { label: 'Estatutos de Florida s. 320.02 (2026): registro, identificación, VIN y prueba de seguro', url: URL.s32002 },
    { label: 'Estatutos de Florida s. 320.38 (2026): registro en 10 días', url: URL.s32038 },
    { label: 'Estatutos de Florida s. 627.733 (2026): seguro obligatorio; regla de 90 días para no residentes', url: URL.s627733 },
    { label: 'Estatutos de Florida s. 627.736 (2026): beneficios de PIP', url: URL.s627736 },
    { label: 'Estatutos de Florida s. 324.022 (2026): responsabilidad por daños a la propiedad (PDL)', url: URL.s324022 },
    { label: 'Estatutos de Florida s. 324.0221 (2026): reportes de cancelación y suspensiones', url: URL.s3240221 },
    { label: 'Senado de Florida: análisis del SB 1766 (2013) sobre el permiso internacional', url: URL.sb1766 },
  ],
};

const ru: PostTranslation = {
  title: 'Автостраховка во Флориде для новоприбывших: иностранные права, регистрация машины и PIP',
  metaTitle: 'Автостраховка во Флориде для новоприбывших | M&K Agency',
  description:
    'Переехали во Флориду? Можно ли ездить по иностранным правам, когда нужны флоридские, как зарегистрировать машину за 10 дней и какая страховка обязательна.',
  ogAlt: 'Иллюстрация: машина, водительское удостоверение, паспорт и пальма на фоне голубого неба',
  excerpt:
    'Пока вы гость, можно ездить по правам своей страны. Но после переезда идут сроки: 30 дней на флоридские права и 10 дней на регистрацию машины. Разбираем права, регистрацию и обязательную страховку по законам 2026 года.',
  category: 'Автострахование',
  body: [
    { type: 'p', text: 'Вы переехали на юг Флориды из России, Украины, Беларуси, Казахстана или из другого штата, и машина нужна уже в первую неделю. Сразу возникают вопросы: можно ли ездить по своим правам, когда менять их на флоридские, что нужно для регистрации и номеров. Ниже — то, что говорят **FLHSMV** (департамент безопасности дорожного движения и транспорта Флориды) и законы штата в редакции 2026 года.' },
    { type: 'callout', title: 'Коротко', text: 'Пока вы не резидент, можно ездить по действующим правам своей страны. Как только вы обосновались во Флориде (например, вышли на работу или отдали детей в государственную школу), у вас **30 дней**, чтобы получить флоридские права, и **10 дней**, чтобы зарегистрировать машину. Для регистрации нужна флоридская страховка с **PIP и PDL не менее $10,000 каждая**.' },

    { type: 'h2', text: 'Можно ли ездить во Флориде по иностранным правам' },
    { type: 'p', text: 'Да, пока вы **не резидент**. Статья 322.04 освобождает от флоридских прав нерезидента от 16 лет, у которого при себе действующие некоммерческие права, выданные в его штате или стране. FLHSMV формулирует так же: гость из другой страны должен иметь при себе действующие права на своё имя, выданные страной проживания.' },
    { type: 'p', text: 'А международное водительское удостоверение (IDP)? Действующий закон его не требует. Флорида ввела такое требование в начале 2013 года и в том же году отменила (закон 2013-1). По сути, IDP — это перевод ваших прав на несколько языков, и сами права он не заменяет.' },
    { type: 'p', text: 'Важное исключение: права, которые некоторые штаты выдают только людям, не подтвердившим законное пребывание в США, во Флориде недействительны (статья 322.033). Список таких прав публикует FLHSMV.' },

    { type: 'h2', text: 'Когда вы становитесь резидентом: 30 дней на права' },
    { type: 'p', text: 'По разъяснению FLHSMV, вас могут считать резидентом Флориды, если вы начали здесь работать, записали детей в государственную школу, зарегистрировались как избиратель, подали заявление на льготу homestead или живёте во Флориде больше шести месяцев подряд.' },
    { type: 'p', text: 'С этого момента у вас **30 дней**, чтобы получить флоридские права, если вы продолжаете водить. Статья 322.031 прямо требует этого от нерезидента, который устроился на работу или записал детей в государственную школу, и распространяет тот же срок на супруга и детей-иждивенцев, которые водят. Есть исключения, например для военных на действительной службе и студентов очной формы обучения.' },

    { type: 'h2', text: 'Как получить флоридские права, если ваши выданы в другой стране' },
    { type: 'p', text: 'Оформление — лично, а экзамены зависят от того, где выданы ваши права:' },
    { type: 'ul', items: [
      '**Другой штат или территория США, Вооружённые силы США:** FLHSMV может освободить от теории и вождения, если вы сдаёте старые права (статья 322.12). Остаётся только проверка зрения.',
      '**Канада, Франция, Тайвань, Южная Корея:** по официальному справочнику FLHSMV, оба экзамена тоже не нужны. **Германия:** не нужен только экзамен по вождению.',
      '**Все остальные страны**, включая Россию, Украину, Беларусь и Казахстан: готовьтесь сдавать и теорию, и практическое вождение.',
    ] },
    { type: 'p', text: 'Теоретический экзамен класса E — 50 вопросов с вариантами ответа, проходной балл — 40 правильных (80 %). FLHSMV указывает, что **этот экзамен проводится только на английском**, поэтому справочник лучше начать читать заранее. Зрение проверяют у всех.' },
    { type: 'p', text: 'Если у вас уже были права в другой стране, курс **TLSAE** (правила дорожного движения и последствия алкоголя и наркотиков) не нужен: статья 322.095 требует его от заявителей старше 18 лет, только если у них никогда не было прав в другой юрисдикции.' },
    { type: 'p', text: 'Возьмите удостоверение личности и подтверждение законного пребывания, номер социального страхования (SSN) и два документа с адресом во Флориде; точный перечень для вашего статуса — на странице *What to Bring* сайта FLHSMV.' },

    { type: 'h2', text: 'Регистрация машины: 10 дней и флоридская страховка' },
    { type: 'p', text: 'Если вы вышли на работу или записали детей в школу, статья 320.38 даёт **10 дней**, чтобы зарегистрировать во Флориде машины, на которых вы ездите. FLHSMV применяет тот же срок к новым резидентам. Для машины из другого штата понадобятся:' },
    { type: 'ul', items: [
      '**документ, удостоверяющий личность каждого владельца.** Статья 320.02 принимает права REAL ID любого штата, паспорт США или **действующий иностранный паспорт вместе с формой I-94**, а также подтверждение адреса;',
      '**подтверждение флоридской страховки** и **оригинал титула** — свидетельства о праве собственности (если машина в кредите, титул решается через кредитора);',
      '**форма HSMV 82040** с подписями всех владельцев и **физическая проверка VIN** (HSMV 82040 или 82042) — её проводит, например, полицейский, лицензированный дилер Флориды или сотрудник окружного налогового офиса (Tax Collector).',
    ] },
    { type: 'p', text: 'Без подтверждения PIP и PDL машину не зарегистрируют: статья 320.02(5) прямо обязывает офис отказать.' },

    { type: 'h2', text: 'Обязательный минимум: PIP и PDL' },
    { type: 'p', text: 'Машина с флоридской регистрацией должна быть застрахована как минимум на:' },
    { type: 'ul', items: [
      '**$10,000 PIP (личная защита от травм).** По статье 627.736 PIP оплачивает 80 % разумных и необходимых медицинских расходов в пределах лимита, независимо от того, кто виноват в аварии, если первичная помощь получена в течение 14 дней.',
      '**$10,000 PDL (ответственность за ущерб чужому имуществу)** — за повреждение чужой машины, забора и другого имущества (статья 324.022).',
    ] },
    { type: 'p', text: 'Три важных правила:' },
    { type: 'ol', items: [
      '**Полис должен быть флоридским** и выдан страховой компанией, у которой есть разрешение работать в штате. Переезжаете из другого штата — попросите агента перевести страховку на флоридский полис.',
      '**Страховка должна действовать без перерывов** весь срок регистрации, даже если машина стоит или не на ходу. Если перестаёте ею пользоваться, сначала сдайте номера и только **потом** отменяйте страховку.',
      '**Об отмене полиса узнаёт штат.** Страховая сообщает в FLHSMV в течение 10 дней (статья 324.0221). Без страховки могут приостановить и права, и регистрацию на срок до трёх лет, со сбором за восстановление до $500.',
    ] },
    { type: 'p', text: 'Вы ещё не резидент, но машина уже здесь? Если машина нерезидента находилась во Флориде больше 90 дней за последние 365, владелец обязан держать PIP и PDL, пока машина в штате (статьи 627.733 и 324.022). А владелец, у которого на момент аварии не было обязательной страховки, теряет защиту системы no-fault от исков и сам отвечает за выплаты по PIP (статья 627.733(4)).' },
    { type: 'p', text: 'PIP и PDL не платят за травмы, которые вы причинили другим, — для этого есть [ответственность за телесные повреждения](/ru/blog/bodily-injury-liability-fr44-florida). А [покрытие от незастрахованных водителей](/ru/blog/uninsured-motorist-coverage-florida) защищает вас, если у виновника нет страховки. Для большинства водителей они необязательны, но обсудить их с агентом стоит.' },

    { type: 'h2', text: 'Застрахуют ли меня с иностранными правами' },
    { type: 'p', text: 'Запросить расчёт можно, но каждая страховая сама решает по своим правилам оценки риска, как учитывать иностранные права или короткий стаж в США. Подготовьте паспорт, права и иммиграционный документ (I-94, виза или грин-карта), адрес во Флориде, VIN и титул машины, а также данные всех, кто будет ею управлять.' },
    { type: 'p', text: 'Получили флоридские права — сообщите агенту, чтобы обновить полис. А если вашей машиной будет пользоваться недавно приехавший родственник, прочитайте статью о том, [чем рискует владелец, давая машину другому](/ru/blog/lending-your-car-florida-owner-liability): за аварию может отвечать и владелец.' },

    { type: 'h2', text: 'Поможем на русском в Florida City' },
    { type: 'p', text: 'В M&K Agency мы помогаем новоприбывшим со всего юга Miami-Dade, в том числе [на русском языке](/ru/russian-speaking-insurance-agent-miami). Лицензированный агент объяснит, из чего состоит полис, сделает расчёт по вашим нынешним правам и, если полис оформлен, выдаст подтверждение страховки, которое нужно для регистрации. Подробнее — на странице [автострахование во Florida City](/ru/car-insurance-florida-city). [Запросите расчёт](/ru/quote) или позвоните: **(305) 859-3953**. Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034; пн–пт 9–6, суббота по записи.' },
    { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений конкретного полиса. Перед оформлением или изменением страховки поговорите с лицензированным агентом. Эта статья — общая информация, не юридическая консультация.' },
  ],
  faq: [
    { q: 'Можно ли ездить во Флориде только по правам своей страны?', a: 'Да, пока вы нерезидент и права действительны и при вас (статья 322.04). Когда вы выходите на работу, записываете детей в государственную школу или становитесь резидентом, у вас 30 дней, чтобы получить флоридские права.' },
    { q: 'Нужно ли международное водительское удостоверение?', a: 'Действующий закон Флориды его не требует: нужны действующие права вашей страны. IDP — это перевод прав, он их не заменяет.' },
    { q: 'Можно ли зарегистрировать машину до получения флоридских прав?', a: 'Да. Для регистрации статья 320.02 принимает действующий иностранный паспорт с формой I-94 и подтверждение адреса. Кроме того, нужно подтверждение флоридской страховки с PIP и PDL.' },
    { q: 'Придётся ли сдавать экзамены, если у меня российские или украинские права?', a: 'Россия и Украина не входят в список стран, для которых FLHSMV отменяет экзамены, поэтому рассчитывайте на теорию и практическое вождение. Теоретический экзамен проводится только на английском. Курс TLSAE не нужен, если права у вас уже были.' },
    { q: 'Подойдёт ли страховка из другого штата?', a: 'Для регистрации во Флориде нужен флоридский полис от страховой компании, которой разрешено работать в штате. Попросите агента перевести страховку и не отменяйте старый полис, пока не начал действовать новый.' },
  ],
  sources: [
    { label: 'FLHSMV: New Resident – Welcome to Florida! (резидентство, сроки 30 и 10 дней, титул и регистрация)', url: URL.newRes },
    { label: 'FLHSMV: Visiting Florida FAQs (гости из других стран; когда нужны флоридские права)', url: URL.visit },
    { label: 'FLHSMV: Florida Insurance Requirements (PIP и PDL, непрерывная страховка, приостановки)', url: URL.ins },
    { label: 'FLHSMV: Class E Knowledge Exam & Driving Skills Test (50 вопросов, только на английском)', url: URL.exam },
    { label: 'FLHSMV: What to Bring (документы для получения прав)', url: URL.bring },
    { label: 'FLHSMV: Official Florida Driver License Handbook, ред. 08/2023 (страны без экзаменов)', url: URL.handbook },
    { label: 'Florida Statutes s. 322.04 (2026): кому не нужны флоридские права', url: URL.s32204 },
    { label: 'Florida Statutes s. 322.031 (2026): нерезиденты; когда нужны права', url: URL.s322031 },
    { label: 'Florida Statutes s. 322.033 (2026): права других штатов, недействительные во Флориде', url: URL.s322033 },
    { label: 'Florida Statutes s. 322.12 (2026): экзамены и освобождение от них', url: URL.s32212 },
    { label: 'Florida Statutes s. 322.095 (2026): курс TLSAE', url: URL.s322095 },
    { label: 'Florida Statutes s. 320.02 (2026): регистрация, документы, проверка VIN, подтверждение страховки', url: URL.s32002 },
    { label: 'Florida Statutes s. 320.38 (2026): регистрация в течение 10 дней', url: URL.s32038 },
    { label: 'Florida Statutes s. 627.733 (2026): обязательная страховка; правило 90 дней для нерезидентов', url: URL.s627733 },
    { label: 'Florida Statutes s. 627.736 (2026): выплаты по PIP', url: URL.s627736 },
    { label: 'Florida Statutes s. 324.022 (2026): ответственность за ущерб имуществу (PDL)', url: URL.s324022 },
    { label: 'Florida Statutes s. 324.0221 (2026): сообщения об отмене полиса и приостановки', url: URL.s3240221 },
    { label: 'Сенат Флориды: анализ законопроекта SB 1766 (2013) о международном удостоверении', url: URL.sb1766 },
  ],
};

export const post: BlogPost = {
  slug: 'seguro-auto-licencia-extranjera-florida',
  datePublished: '2026-10-07',
  translations: { es, ru },
};
