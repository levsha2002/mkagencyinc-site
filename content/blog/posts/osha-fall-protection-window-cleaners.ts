import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against 29 CFR (current eCFR text; links go to osha.gov):
// - 1910.23(b),(c): ladders inspected before initial use each shift; defective ladders tagged
//   and removed; face the ladder, one hand on it; stable and level surfaces unless secured;
//   secure or barricade ladders in doorways, passageways, driveways; no moving with a person on
//   it; extend 3 ft above an upper landing; don't exceed maximum intended load (incl. tools);
//   no boxes/barrels for extra height; top step/cap of a stepladder not a step.
// - 1910.28(a)(2)(i): section doesn't apply to portable ladders; (b)(1)(i): unprotected side or
//   edge 4 ft or more above a lower level -> guardrail, safety net or personal fall protection;
//   (c): falling-object protection, head protection.
// - 1910.27(b): rope descent systems - building owner written anchorage information (5,000 lb
//   per employee, annual inspection, certification at least every 10 years); employer must
//   obtain it before use; max 300 ft unless not feasible otherwise; inspect each shift;
//   separate independent personal fall arrest; prompt rescue; no use in hazardous weather;
//   tools secured; stabilization > 130 ft.
// - 1910.30: training by a qualified person before exposure to fall hazards; RDS training;
//   retraining.
// Scope note: the window-cleaning landing page is for homes, storefronts and low-rise
// buildings with ladders and water-fed poles. Rope descent is explained briefly only, with no
// suggestion that the agency places coverage for it.
const S = {
  l1910_23: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.23',
  l1910_27: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.27',
  l1910_28: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.28',
  l1910_30: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.30',
};

export const post: BlogPost = {
  slug: 'osha-fall-protection-window-cleaners',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'OSHA Fall Protection Basics for Window Cleaners: Ladders, Roof Edges and Rope Descent',
      metaTitle: 'OSHA Fall Protection for Window Cleaners | M&K Agency',
      description: 'Which OSHA rules apply when your window cleaning crew works at height? Ladder rules in 29 CFR 1910.23, the 4-foot edge rule, rope descent and training.',
      ogAlt: 'Tall commercial building with safety harness equipment hanging from the roof edge',
      excerpt: 'Falls are the injury every window cleaning business worries about. A plain-language summary of the OSHA general industry rules on ladders, unprotected edges, rope descent systems and training, with links to the regulations.',
      category: 'Window cleaning insurance',
      body: [
        { type: 'p', text: 'Most window cleaning jobs in South Florida happen on a ladder or with a water-fed pole from the ground. When you have employees on those ladders, federal OSHA rules for general industry set specific duties for you as the employer. Here are the basics, with links to each regulation. They are a starting point, not a full safety program.' },
        { type: 'h2', text: 'Ladders: 29 CFR 1910.23' },
        { type: 'p', text: 'Portable ladders have their own section ([1910.23](' + S.l1910_23 + ')). Among other things, the employer must make sure that:' },
        { type: 'ul', items: [
          'Each ladder is **inspected before first use in every shift**, and a damaged ladder is tagged “Dangerous: Do Not Use” and taken out of service.',
          'Ladders stand on **stable, level surfaces**, or are secured so they cannot slip, and are secured on slippery surfaces.',
          'A ladder in a **doorway, passageway or driveway** is secured or guarded with a barricade such as cones or caution tape. That matters at storefronts.',
          'Nobody moves or extends a ladder while someone is on it, and the top step or cap of a stepladder is not used as a step.',
          'A ladder used to reach a roof or upper landing extends **at least 3 feet** above it.',
          'The load, including the worker’s tools and buckets, stays within the ladder’s rating, and ladders are never set on boxes or barrels for extra height.',
          'Workers face the ladder and keep at least one hand on it while climbing.',
        ] },
        { type: 'h2', text: 'Roofs, ledges and the 4-foot rule: 1910.28' },
        { type: 'p', text: 'If a worker steps off the ladder onto a roof, balcony or ledge, a different rule applies. On a walking-working surface with an **unprotected side or edge 4 feet or more** above a lower level, the employer must provide guardrails, a safety net or a personal fall protection system ([1910.28(b)(1)](' + S.l1910_28 + ')). Where workers could be hit by falling tools, the same section requires head protection and measures such as toeboards or barricading the area below.' },
        { type: 'h2', text: 'Rope descent systems: 1910.27' },
        { type: 'p', text: 'Taller buildings are often cleaned from a rope descent system, the seat-and-rope rig some call a bosun’s chair. That is a different operation, with strict rules ([1910.27(b)](' + S.l1910_27 + ')):' },
        { type: 'ul', items: [
          'Before anyone uses it, the **building owner** must tell the employer in writing that each anchorage has been identified, tested, certified and maintained to hold at least **5,000 pounds** per worker, and the employer must keep that information for the job.',
          'Generally no rope descent above **300 feet**, a separate independent fall arrest system for each worker, inspection every shift, a plan for **prompt rescue**, and no work in storms or gusty wind.',
        ] },
        { type: 'p', text: 'Our window cleaning page is written for ladder and pole work on homes, storefronts and low-rise buildings. If you are thinking about rope work, tell your agent first, because it changes how your business is described.' },
        { type: 'h2', text: 'Training: 1910.30' },
        { type: 'p', text: 'Before an employee is exposed to a fall hazard, the employer must make sure a qualified person trains them on the hazards, the procedures and the equipment they use, and retrains them when the work or equipment changes ([1910.30](' + S.l1910_30 + ')). Keep a simple record of who was trained, when, and on what.' },
        { type: 'h2', text: 'Where insurance fits' },
        { type: 'p', text: 'A fall is a workers’ comp question for your employee and often a liability question for the property: a ladder that slides into a storefront sign, a bucket that drops near a customer. See our [window cleaning insurance page](/en/window-cleaning-insurance-florida) for the coverage side, and our article on [helpers and workers’ comp](/en/blog/helper-employee-or-1099-florida-workers-comp) if you work with extra hands.' },
        { type: 'callout', title: 'Reviewing your coverage?', text: '[Request a quote](/en/quote) and tell us how tall your regular jobs are and what equipment you use. A licensed agent will go over it with you in English, Spanish or Russian. This is general information, not legal or safety advice; check the regulations or OSHA for your situation.' },
      ],
      faq: [
        { q: 'At what height does OSHA require fall protection for window cleaners?', a: 'Under 29 CFR 1910.28, employers must protect workers on a walking-working surface with an unprotected side or edge 4 feet or more above a lower level. Portable ladders are covered by their own rules in 1910.23.' },
        { q: 'Who certifies the anchorages for a rope descent system?', a: 'The building owner must tell the employer in writing that each anchorage has been identified, tested, certified and maintained to support at least 5,000 pounds per worker, before the system is used.' },
        { q: 'Do window cleaning employees need fall protection training?', a: 'Yes, when they are exposed to fall hazards. A qualified person must train them before exposure, and the employer must retrain them when the work or equipment changes.' },
      ],
      sources: [
        { label: '29 CFR 1910.23: ladders (OSHA)', url: S.l1910_23 },
        { label: '29 CFR 1910.27: scaffolds and rope descent systems (OSHA)', url: S.l1910_27 },
        { label: '29 CFR 1910.28: duty to have fall protection and falling object protection (OSHA)', url: S.l1910_28 },
        { label: '29 CFR 1910.30: training requirements (OSHA)', url: S.l1910_30 },
      ],
    },
    es: {
      title: 'Protección contra caídas de OSHA para limpiadores de ventanas: escaleras, bordes de techo y descenso con cuerdas',
      metaTitle: 'OSHA y caídas: guía para limpiadores de ventanas | M&K Agency',
      description: '¿Qué reglas de OSHA aplican cuando su equipo limpia ventanas en altura? Escaleras (1910.23), la regla de 4 pies, descenso con cuerdas y capacitación.',
      ogAlt: 'Edificio alto con equipo de arnés de seguridad colgando del borde del techo',
      excerpt: 'Las caídas son la lesión que más preocupa en un negocio de limpieza de ventanas. Un resumen sencillo de las reglas de OSHA sobre escaleras, bordes sin protección, sistemas de descenso con cuerdas y capacitación, con enlaces a cada norma.',
      category: 'Seguro para limpieza de ventanas',
      body: [
        { type: 'p', text: 'La mayoría de los trabajos de limpieza de ventanas en el sur de Florida se hacen en escalera o con un poste de agua desde el piso. Cuando tiene empleados en esas escaleras, las reglas federales de OSHA para la industria general le imponen deberes concretos como empleador. Aquí van las bases, con el enlace a cada norma. Son un punto de partida, no un programa de seguridad completo.' },
        { type: 'h2', text: 'Escaleras: 29 CFR 1910.23' },
        { type: 'p', text: 'Las escaleras portátiles tienen su propia sección ([1910.23](' + S.l1910_23 + ')). Entre otras cosas, el empleador debe asegurarse de que:' },
        { type: 'ul', items: [
          'Cada escalera se **inspeccione antes del primer uso en cada turno**, y la que esté dañada se marque “Dangerous: Do Not Use” y se retire.',
          'La escalera se apoye en **superficies estables y niveladas**, o se asegure para que no resbale, y se asegure en superficies resbalosas.',
          'Una escalera en una **puerta, pasillo o entrada de carros** se asegure o se proteja con una barrera, como conos o cinta de precaución. En las tiendas esto importa.',
          'Nadie mueva ni extienda la escalera con alguien arriba, y no se use como peldaño el último escalón o la tapa de una escalera de tijera.',
          'La escalera que se usa para subir a un techo o descanso sobresalga **al menos 3 pies** por encima.',
          'La carga, incluidas las herramientas y los cubos, no pase de la capacidad de la escalera, y nunca se ponga sobre cajas o barriles para ganar altura.',
          'El trabajador suba y baje de frente a la escalera, con al menos una mano en ella.',
        ] },
        { type: 'h2', text: 'Techos, cornisas y la regla de 4 pies: 1910.28' },
        { type: 'p', text: 'Si el trabajador pasa de la escalera a un techo, balcón o cornisa, aplica otra regla. En una superficie de trabajo con un **lado o borde sin protección a 4 pies o más** sobre un nivel inferior, el empleador debe proveer barandas, una red de seguridad o un sistema personal de protección contra caídas ([1910.28(b)(1)](' + S.l1910_28 + ')). Si a un trabajador le puede caer una herramienta encima, la misma sección exige casco y medidas como rodapiés o acordonar el área de abajo.' },
        { type: 'h2', text: 'Sistemas de descenso con cuerdas: 1910.27' },
        { type: 'p', text: 'Los edificios más altos suelen limpiarse con un sistema de descenso con cuerdas, la silla colgante que algunos llaman bosun’s chair. Es otra operación, con reglas estrictas ([1910.27(b)](' + S.l1910_27 + ')):' },
        { type: 'ul', items: [
          'Antes de usarlo, el **dueño del edificio** debe informarle por escrito al empleador que cada anclaje fue identificado, probado, certificado y mantenido para aguantar al menos **5,000 libras** por trabajador, y el empleador debe guardar esa información durante la obra.',
          'Por lo general, nada de descenso con cuerdas a más de **300 pies**, un sistema de detención de caídas independiente para cada trabajador, inspección en cada turno, un plan de **rescate inmediato** y nada de trabajo con tormenta o ráfagas de viento.',
        ] },
        { type: 'p', text: 'Nuestra página de limpieza de ventanas está pensada para trabajo con escalera y poste en casas, tiendas y edificios bajos. Si piensa hacer trabajo con cuerdas, dígaselo antes a su agente, porque cambia la forma en que se describe su negocio.' },
        { type: 'h2', text: 'Capacitación: 1910.30' },
        { type: 'p', text: 'Antes de que un empleado quede expuesto a una caída, el empleador debe asegurarse de que una persona calificada lo capacite sobre los riesgos, los procedimientos y el equipo que usa, y volver a capacitarlo cuando cambie el trabajo o el equipo ([1910.30](' + S.l1910_30 + ')). Lleve un registro sencillo de quién se capacitó, cuándo y en qué.' },
        { type: 'h2', text: 'Dónde entra el seguro' },
        { type: 'p', text: 'Una caída es un tema de workers’ comp para su empleado y muchas veces de responsabilidad civil frente a la propiedad: una escalera que se resbala contra el letrero de una tienda, un cubo que cae cerca de un cliente. Vea nuestra [página de seguro para limpieza de ventanas](/es/window-cleaning-insurance-florida) para la parte de coberturas, y nuestro artículo sobre [ayudantes y workers’ comp](/es/blog/helper-employee-or-1099-florida-workers-comp) si trabaja con gente extra.' },
        { type: 'callout', title: '¿Va a revisar su seguro?', text: '[Pida una cotización](/es/quote) y díganos a qué altura son sus trabajos habituales y qué equipo usa. Un agente con licencia lo revisa con usted en español, inglés o ruso. Esto es información general, no asesoría legal ni de seguridad; consulte las normas o a OSHA para su caso.' },
      ],
      faq: [
        { q: '¿A qué altura exige OSHA protección contra caídas para limpiadores de ventanas?', a: 'Según 29 CFR 1910.28, el empleador debe proteger a quien trabaja en una superficie con un lado o borde sin protección a 4 pies o más sobre un nivel inferior. Las escaleras portátiles tienen sus propias reglas en 1910.23.' },
        { q: '¿Quién certifica los anclajes de un sistema de descenso con cuerdas?', a: 'El dueño del edificio debe informarle por escrito al empleador, antes de usar el sistema, que cada anclaje fue identificado, probado, certificado y mantenido para aguantar al menos 5,000 libras por trabajador.' },
        { q: '¿Los empleados de limpieza de ventanas necesitan capacitación sobre caídas?', a: 'Sí, cuando están expuestos a riesgos de caída. Una persona calificada debe capacitarlos antes, y el empleador debe volver a capacitarlos cuando cambie el trabajo o el equipo.' },
      ],
      sources: [
        { label: '29 CFR 1910.23: escaleras (OSHA, en inglés)', url: S.l1910_23 },
        { label: '29 CFR 1910.27: andamios y sistemas de descenso con cuerdas (OSHA, en inglés)', url: S.l1910_27 },
        { label: '29 CFR 1910.28: obligación de protección contra caídas y caída de objetos (OSHA, en inglés)', url: S.l1910_28 },
        { label: '29 CFR 1910.30: requisitos de capacitación (OSHA, en inglés)', url: S.l1910_30 },
      ],
    },
    ru: {
      title: 'Защита от падений по правилам OSHA для мойщиков окон: лестницы, края крыш и спуск на верёвках',
      metaTitle: 'OSHA и защита от падений: мойщикам окон | M&K Agency',
      description: 'Какие правила OSHA действуют, когда ваша бригада моет окна на высоте? Лестницы по 29 CFR 1910.23, правило 4 футов, анкеры для спуска на верёвках и обучение.',
      ogAlt: 'Высокое здание, с края крыши свисает страховочное снаряжение',
      excerpt: 'Падение — главный риск в бизнесе по мойке окон. Простым языком о правилах OSHA для general industry: лестницы, незащищённые края, системы спуска на верёвках и обучение, со ссылками на нормы.',
      category: 'Страхование для мойки окон',
      body: [
        { type: 'p', text: 'Большинство заказов по мойке окон в Южной Флориде выполняются со стремянки или с земли телескопической щёткой с подачей воды. Если на этих лестницах работают ваши сотрудники, федеральные правила OSHA для general industry возлагают на вас как на работодателя конкретные обязанности. Ниже — основы со ссылками на каждую норму. Это отправная точка, а не полноценная программа безопасности.' },
        { type: 'h2', text: 'Лестницы: 29 CFR 1910.23' },
        { type: 'p', text: 'Переносным лестницам посвящён отдельный раздел ([1910.23](' + S.l1910_23 + ')). Среди прочего работодатель должен обеспечить, чтобы:' },
        { type: 'ul', items: [
          'Каждую лестницу **осматривали перед первым использованием в каждую смену**, а повреждённую помечали «Dangerous: Do Not Use» и убирали из работы.',
          'Лестница стояла на **устойчивой ровной поверхности** или была закреплена от соскальзывания, а на скользкой поверхности — обязательно закреплена.',
          'Лестницу в **дверном проёме, проходе или на въезде** закрепляли или ограждали конусами либо лентой. У магазинов это особенно важно.',
          'Никто не переставлял и не раздвигал лестницу, пока на ней человек, а верхнюю ступень или площадку стремянки не использовали как ступеньку.',
          'Лестница, по которой поднимаются на крышу или площадку, выступала над ней **минимум на 3 фута**.',
          'Нагрузка вместе с инструментом и вёдрами не превышала допустимую, а лестницу никогда не ставили на ящики или бочки ради высоты.',
          'Работник поднимался и спускался лицом к лестнице, держась за неё хотя бы одной рукой.',
        ] },
        { type: 'h2', text: 'Крыши, карнизы и правило 4 футов: 1910.28' },
        { type: 'p', text: 'Если работник переходит с лестницы на крышу, балкон или карниз, действует другое правило. На рабочей поверхности с **незащищённым краем на высоте 4 фута и более** над нижним уровнем работодатель обязан обеспечить ограждение, страховочную сетку или персональную систему защиты от падения ([1910.28(b)(1)](' + S.l1910_28 + ')). Если на работников может упасть инструмент, тот же раздел требует каски и мер вроде бортиков или ограждения зоны внизу.' },
        { type: 'h2', text: 'Системы спуска на верёвках: 1910.27' },
        { type: 'p', text: 'Высокие здания часто моют с системы спуска на верёвках — подвесного сиденья, которое иногда называют bosun’s chair, или «люлькой». Это уже другой вид работ со строгими правилами ([1910.27(b)](' + S.l1910_27 + ')):' },
        { type: 'ul', items: [
          'До начала работ **владелец здания** должен письменно сообщить работодателю, что каждый анкер определён, испытан, сертифицирован и обслуживается и выдерживает не менее **5,000 фунтов** на работника, а работодатель хранит эти данные на весь период работ.',
          'Как правило, спуск не выше **300 футов**, отдельная независимая страховочная система для каждого, осмотр в каждую смену, план **быстрой эвакуации** и никакой работы в грозу или при порывистом ветре.',
        ] },
        { type: 'p', text: 'Наша страница по мойке окон рассчитана на работу с лестниц и щёток в частных домах, магазинах и невысоких зданиях. Если вы думаете о работе на верёвках, сначала скажите агенту: от этого зависит, как описывается ваш бизнес.' },
        { type: 'h2', text: 'Обучение: 1910.30' },
        { type: 'p', text: 'До того как работник столкнётся с риском падения, работодатель должен обеспечить его обучение квалифицированным специалистом: риски, порядок действий и оборудование, которым он пользуется. При изменении работ или оборудования нужно переобучение ([1910.30](' + S.l1910_30 + ')). Ведите простой журнал: кто, когда и по какой теме прошёл обучение.' },
        { type: 'h2', text: 'При чём здесь страховка' },
        { type: 'p', text: 'Падение — это вопрос workers’ comp для вашего сотрудника и часто вопрос ответственности перед владельцем объекта: лестница съехала на вывеску магазина, ведро упало рядом с покупателем. О страховании — на нашей [странице для мойщиков окон](/ru/window-cleaning-insurance-florida), а если вы работаете с помощниками, прочитайте статью о [помощниках и workers’ comp](/ru/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'callout', title: 'Пересматриваете страховку?', text: '[Оставьте заявку на расчёт](/ru/quote) и укажите, на какой высоте обычно работаете и каким оборудованием. Лицензированный агент разберёт всё с вами на русском, английском или испанском. Это общая информация, а не юридическая консультация и не инструкция по технике безопасности; для своей ситуации сверяйтесь с нормами или с OSHA.' },
      ],
      faq: [
        { q: 'С какой высоты OSHA требует защиту от падения для мойщиков окон?', a: 'По 29 CFR 1910.28 работодатель должен защищать работников на поверхности с незащищённым краем на высоте 4 фута и более над нижним уровнем. Для переносных лестниц — отдельные правила в 1910.23.' },
        { q: 'Кто сертифицирует анкеры для спуска на верёвках?', a: 'Владелец здания до начала работ письменно сообщает работодателю, что каждый анкер определён, испытан, сертифицирован, обслуживается и выдерживает не менее 5,000 фунтов на работника.' },
        { q: 'Нужно ли обучать сотрудников защите от падений?', a: 'Да, если они работают с риском падения. Квалифицированный специалист обучает их заранее, а при изменении работ или оборудования работодатель организует переобучение.' },
      ],
      sources: [
        { label: '29 CFR 1910.23: лестницы (OSHA, на английском)', url: S.l1910_23 },
        { label: '29 CFR 1910.27: леса и системы спуска на верёвках (OSHA, на английском)', url: S.l1910_27 },
        { label: '29 CFR 1910.28: обязанность обеспечить защиту от падения людей и предметов (OSHA, на английском)', url: S.l1910_28 },
        { label: '29 CFR 1910.30: требования к обучению (OSHA, на английском)', url: S.l1910_30 },
      ],
    },
  },
};
