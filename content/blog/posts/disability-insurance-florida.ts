import type { BlogPost } from '../types';

// Facts checked 2026-10-04: Florida operates no state temporary disability
// insurance program (only CA, HI, NJ, NY, RI and PR do); SSDI has a five-month
// waiting period and a strict disability definition (ssa.gov); Florida PIP pays
// 60% of lost wages up to the $10,000 PIP limit shared with medical benefits
// (s. 627.736 F.S.); workers' compensation covers only work-connected injuries
// and illnesses. Deliberately generic: no private insurer is named. No premium
// rates, no savings claims, no guaranteed outcomes. ES/RU mirror EN.
const SOURCES = [
  { label: 'Social Security Administration: Disability Benefits', url: 'https://www.ssa.gov/disability' },
  { label: 'Florida Office of Insurance Regulation', url: 'https://www.floir.com' },
  { label: 'Florida Department of Financial Services: Consumer Services', url: 'https://www.myfloridacfo.com/division/consumers/' },
];

export const post: BlogPost = {
  slug: 'disability-insurance-florida',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Disability Insurance in Florida: What Protects Your Income If You Can\u2019t Work',
      metaTitle: 'Disability Insurance in Florida | M&K Agency',
      description: 'Disability insurance in Florida explained: why the state has no disability program, what short- and long-term coverage does, and what to check in a policy.',
      excerpt: 'If an illness or injury kept you from working for months, what would pay the bills? Florida has no state disability check \u2014 here is what disability insurance covers and what to look at before you need it.',
      category: 'Disability insurance',
      body: [
        { type: 'p', text: 'Your paycheck is probably your most valuable financial asset \u2014 and unlike your car or your house, you cannot see it, lock it, or rebuild it after a loss. **Disability insurance** exists for one situation: an illness or injury keeps you from working, and the income stops while the bills don\u2019t.' },
        { type: 'p', text: 'This article explains what disability insurance does, why it matters more in Florida than in some other states, what people usually count on instead (and where those fall short), and what to look at in a policy before you ever need it.' },

        { type: 'h2', text: 'What disability insurance is' },
        { type: 'ul', items: [
          '**Short-term disability** coverage pays a weekly benefit for a limited time \u2014 often a few weeks to a few months \u2014 after an illness, injury, or childbirth keeps you from working.',
          '**Long-term disability** coverage pays a monthly benefit for much longer \u2014 often several years, or until a stated age such as 65 \u2014 when a serious condition keeps you out of work.',
          'Benefits are usually designed to replace **a portion of your pre-disability income**, not all of it \u2014 individual policies commonly target around 40\u201360% of gross income. The idea is to keep essentials covered: housing, food, utilities, loan payments.',
          'It is **income protection, not medical coverage**. It does not pay your hospital bills \u2014 that is what health insurance is for. It replaces part of the paycheck the illness or injury took away.',
        ] },

        { type: 'h2', text: 'Florida has no state disability program' },
        { type: 'p', text: 'A few states \u2014 California, Hawaii, New Jersey, New York and Rhode Island \u2014 run a state short-term disability insurance program funded through payroll deductions. **Florida is not one of them.** There is no automatic state disability check in Florida. If you want income protection beyond federal programs and your own arrangements, it has to come from coverage you set up yourself: through an employer, a union or association plan, or an individual policy you own.' },

        { type: 'h2', text: 'What people usually count on \u2014 and where the gaps are' },
        { type: 'ul', items: [
          '**Workers\u2019 compensation** only covers injuries and illnesses **connected to your job**. A back injury at home, a cancer diagnosis, or complications from surgery are not workers\u2019 comp cases.',
          '**Auto PIP** (Florida\u2019s no-fault coverage) pays **60% of lost wages**, but only after a **car crash**, and only up to the **$10,000 PIP limit** that it shares with medical benefits.',
          '**Social Security Disability Insurance (SSDI)** is a federal safety net with a **strict definition of disability**, a **five-month waiting period** before benefits can begin, and a long application process. It is designed to keep people from destitution, not to replace a working income.',
          '**Savings** can bridge a short gap. A disability that lasts months or years can drain them \u2014 and then the bills keep coming.',
        ] },

        { type: 'h2', text: 'The four terms that define a policy' },
        { type: 'p', text: 'Every disability policy turns on a few key terms. Understand these and you understand most of the policy:' },
        { type: 'ul', items: [
          '**Benefit amount** \u2014 the monthly (or weekly) payment. Compare it with your actual monthly obligations, not just your salary.',
          '**Elimination (waiting) period** \u2014 how long after the disability begins before benefits start: often 30, 60, 90 or 180 days. A longer waiting period generally means a lower premium, because the insurer takes on less risk.',
          '**Benefit period** \u2014 how long benefits can last: 2 years, 5 years, to age 65 or 67, or in some policies for life.',
          '**Definition of disability** \u2014 the most important wording in the policy. **\u201cOwn occupation\u201d** means you cannot do *your* specific job; **\u201cany occupation\u201d** means you cannot do *any* job suited to your education and experience. Broader definitions pay in more situations and cost more.',
        ] },

        { type: 'h2', text: 'Through work or on your own?' },
        { type: 'ul', items: [
          '**Group (employer) coverage** is often a base level of protection \u2014 sometimes short-term only \u2014 and it **usually ends when you leave the job**. It is generally not portable.',
          '**Individual coverage** is a policy **you own**. It follows you from job to job, and you choose the benefit amount, waiting period and definition of disability. It is usually medically underwritten when you apply.',
          'Many people carry both: group coverage as a foundation, individual coverage to fill the gaps the group plan leaves.',
        ] },

        { type: 'h2', text: 'What to check before you need it' },
        { type: 'ol', items: [
          'Read the **definition of disability** in your own policy \u2014 not the brochure, the contract.',
          'Note the **elimination period**: how many weeks or months could you go with no income?',
          'Note the **benefit amount and benefit period**: what would actually land in your account each month, and for how long?',
          'Read the **exclusions and limitations**: pre-existing condition clauses and limits on mental-health or substance-use-related disabilities are common.',
          'If the coverage is through work, ask **what happens if you change jobs**.',
          'When in doubt, ask a **licensed agent** to walk through the policy with you \u2014 before a claim, not after.',
        ] },
        { type: 'callout', title: 'Please note', text: 'This is general insurance information, not legal or financial advice. Policy language differs by insurer and product. Read your own policy and talk with a licensed agent before making decisions about coverage.' },

        { type: 'h2', text: 'Not sure what you have? Get a free coverage check' },
        { type: 'p', text: 'Our [Free 5-Minute Coverage Check](/en/coverage-check) includes a look at the income-protection side of your insurance picture \u2014 what you have through work, what gaps exist, and what options are available. Free, no obligation, in English, Spanish or Russian.' },
        { type: 'p', text: 'You can also visit M&K Agency at 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034, call (305) 859-3953, or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you change your coverage.' },
      ],
      faq: [
        { q: 'Does Florida have state disability insurance?', a: 'No. A few states run a state short-term disability program; Florida does not. The federal SSDI program exists, but it has a strict definition of disability and a five-month waiting period.' },
        { q: 'Doesn\u2019t workers\u2019 comp cover me if I get hurt?', a: 'Only if the injury or illness is connected to your job. Illnesses and off-the-job injuries are not workers\u2019 comp cases.' },
        { q: 'Will Social Security disability replace my income?', a: 'SSDI is a federal safety net, not income replacement. It uses a strict disability definition, has a five-month waiting period, and the application process is long.' },
        { q: 'Does health insurance pay me if I can\u2019t work?', a: 'No. Health insurance pays medical providers for care. It does not replace lost wages \u2014 that is what disability insurance is for.' },
        { q: 'If my employer offers disability coverage, do I need more?', a: 'Maybe. Group coverage is often limited and usually ends when you leave the job. Review what it actually pays, for how long, and under what definition of disability \u2014 then decide whether the gaps matter to you.' },
      ],
      sources: SOURCES,
    },
    es: {
      title: 'Seguro de discapacidad en Florida: qu\u00e9 protege tus ingresos si no puedes trabajar',
      metaTitle: 'Seguro de discapacidad en Florida | M&K Agency',
      description: 'Seguro de discapacidad en Florida explicado: por qu\u00e9 el estado no tiene programa propio, qu\u00e9 cubre la protecci\u00f3n de corto y largo plazo y qu\u00e9 revisar en una p\u00f3liza.',
      excerpt: 'Si una enfermedad o lesi\u00f3n te impidiera trabajar durante meses, \u00bfqu\u00e9 pagar\u00eda las cuentas? Florida no tiene cheque estatal por discapacidad: esto es lo que cubre el seguro y qu\u00e9 revisar antes de necesitarlo.',
      category: 'Seguro de discapacidad',
      body: [
        { type: 'p', text: 'Tu salario es probablemente tu activo financiero m\u00e1s valioso \u2014 y a diferencia de tu auto o tu casa, no puedes verlo, guardarlo bajo llave ni reconstruirlo despu\u00e9s de una p\u00e9rdida. El **seguro de discapacidad** existe para una situaci\u00f3n: una enfermedad o lesi\u00f3n te impide trabajar, el ingreso se detiene pero las cuentas no.' },
        { type: 'p', text: 'Este art\u00edculo explica qu\u00e9 hace el seguro de discapacidad, por qu\u00e9 importa m\u00e1s en Florida que en otros estados, con qu\u00e9 suele contar la gente en su lugar (y d\u00f3nde se quedan cortos), y qu\u00e9 revisar en una p\u00f3liza antes de necesitarla.' },

        { type: 'h2', text: 'Qu\u00e9 es el seguro de discapacidad' },
        { type: 'ul', items: [
          'La cobertura de **discapacidad a corto plazo** paga un beneficio semanal por un tiempo limitado \u2014 a menudo de unas semanas a unos meses \u2014 despu\u00e9s de que una enfermedad, lesi\u00f3n o parto te impida trabajar.',
          'La cobertura de **discapacidad a largo plazo** paga un beneficio mensual por mucho m\u00e1s tiempo \u2014 a menudo varios a\u00f1os, o hasta una edad establecida como los 65 \u2014 cuando una condici\u00f3n grave te mantiene fuera del trabajo.',
          'Los beneficios suelen dise\u00f1arse para reemplazar **una parte de tu ingreso previo a la discapacidad**, no todo \u2014 las p\u00f3lizas individuales com\u00fanmente apuntan a alrededor del 40\u201360% del ingreso bruto. La idea es mantener cubierto lo esencial: vivienda, comida, servicios, pagos de pr\u00e9stamos.',
          'Es **protecci\u00f3n de ingresos, no cobertura m\u00e9dica**. No paga tus cuentas del hospital \u2014 para eso est\u00e1 el seguro de salud. Reemplaza parte del salario que la enfermedad o lesi\u00f3n te quit\u00f3.',
        ] },

        { type: 'h2', text: 'Florida no tiene programa estatal de discapacidad' },
        { type: 'p', text: 'Algunos estados \u2014 California, Haw\u00e1i, Nueva Jersey, Nueva York y Rhode Island \u2014 tienen un programa estatal de seguro de discapacidad a corto plazo financiado con deducciones de n\u00f3mina. **Florida no es uno de ellos.** No existe un cheque estatal autom\u00e1tico por discapacidad en Florida. Si quieres protecci\u00f3n de ingresos m\u00e1s all\u00e1 de los programas federales y tus propios arreglos, tiene que venir de una cobertura que establezcas t\u00fa: a trav\u00e9s de un empleador, un plan sindical o de asociaci\u00f3n, o una p\u00f3liza individual propia.' },

        { type: 'h2', text: 'Con lo que suele contar la gente \u2014 y d\u00f3nde se quedan cortos' },
        { type: 'ul', items: [
          'La **compensaci\u00f3n laboral (workers\u2019 comp)** solo cubre lesiones y enfermedades **relacionadas con tu trabajo**. Una lesi\u00f3n de espalda en casa, un diagn\u00f3stico de c\u00e1ncer o complicaciones de una cirug\u00eda no son casos de workers\u2019 comp.',
          'El **PIP de auto** (la cobertura sin culpa de Florida) paga el **60% de los salarios perdidos**, pero solo despu\u00e9s de un **accidente de auto**, y solo hasta el **l\u00edmite de $10,000 del PIP** que comparte con los beneficios m\u00e9dicos.',
          'El **Seguro de Discapacidad del Seguro Social (SSDI)** es una red de seguridad federal con una **definici\u00f3n estricta de discapacidad**, un **per\u00edodo de espera de cinco meses** antes de que puedan comenzar los beneficios y un proceso de solicitud largo. Est\u00e1 dise\u00f1ado para evitar la miseria, no para reemplazar un ingreso laboral.',
          'Los **ahorros** pueden cubrir una brecha corta. Una discapacidad que dura meses o a\u00f1os puede agotarlos \u2014 y las cuentas siguen llegando.',
        ] },

        { type: 'h2', text: 'Los cuatro t\u00e9rminos que definen una p\u00f3liza' },
        { type: 'p', text: 'Toda p\u00f3liza de discapacidad gira en torno a algunos t\u00e9rminos clave. Enti\u00e9ndelos y entender\u00e1s la mayor parte de la p\u00f3liza:' },
        { type: 'ul', items: [
          '**Monto del beneficio** \u2014 el pago mensual (o semanal). Comp\u00e1ralo con tus obligaciones mensuales reales, no solo con tu salario.',
          '**Per\u00edodo de eliminaci\u00f3n (espera)** \u2014 cu\u00e1nto tiempo despu\u00e9s del inicio de la discapacidad comienzan los beneficios: a menudo 30, 60, 90 o 180 d\u00edas. Un per\u00edodo de espera m\u00e1s largo generalmente significa una prima m\u00e1s baja, porque la aseguradora asume menos riesgo.',
          '**Per\u00edodo de beneficio** \u2014 cu\u00e1nto tiempo pueden durar los beneficios: 2 a\u00f1os, 5 a\u00f1os, hasta los 65 o 67 a\u00f1os, o en algunas p\u00f3lizas de por vida.',
          '**Definici\u00f3n de discapacidad** \u2014 la redacci\u00f3n m\u00e1s importante de la p\u00f3liza. **\u201cOcupaci\u00f3n propia\u201d** significa que no puedes hacer *tu* trabajo espec\u00edfico; **\u201ccualquier ocupaci\u00f3n\u201d** significa que no puedes hacer *ning\u00fan* trabajo acorde a tu educaci\u00f3n y experiencia. Las definiciones m\u00e1s amplias pagan en m\u00e1s situaciones y cuestan m\u00e1s.',
        ] },

        { type: 'h2', text: '\u00bfA trav\u00e9s del trabajo o por tu cuenta?' },
        { type: 'ul', items: [
          'La cobertura **grupal (del empleador)** suele ser una protecci\u00f3n b\u00e1sica \u2014 a veces solo a corto plazo \u2014 y **normalmente termina cuando dejas el empleo**. Generalmente no es portable.',
          'La cobertura **individual** es una p\u00f3liza **tuya**. Te sigue de un empleo a otro, y t\u00fa eliges el monto del beneficio, el per\u00edodo de espera y la definici\u00f3n de discapacidad. Normalmente requiere evaluaci\u00f3n m\u00e9dica al solicitarla.',
          'Mucha gente tiene ambas: la grupal como base, la individual para llenar los vac\u00edos que deja el plan grupal.',
        ] },

        { type: 'h2', text: 'Qu\u00e9 revisar antes de necesitarlo' },
        { type: 'ol', items: [
          'Lee la **definici\u00f3n de discapacidad** en tu propia p\u00f3liza \u2014 no el folleto, el contrato.',
          'Anota el **per\u00edodo de eliminaci\u00f3n**: \u00bfcu\u00e1ntas semanas o meses podr\u00edas pasar sin ingresos?',
          'Anota el **monto y el per\u00edodo del beneficio**: \u00bfqu\u00e9 llegar\u00eda realmente a tu cuenta cada mes, y por cu\u00e1nto tiempo?',
          'Lee las **exclusiones y limitaciones**: las cl\u00e1usulas de condiciones preexistentes y los l\u00edmites por salud mental o uso de sustancias son comunes.',
          'Si la cobertura es del trabajo, pregunta **qu\u00e9 pasa si cambias de empleo**.',
          'En caso de duda, pide a un **agente licenciado** que revise la p\u00f3liza contigo \u2014 antes de un reclamo, no despu\u00e9s.',
        ] },
        { type: 'callout', title: 'Ten en cuenta', text: 'Esta es informaci\u00f3n general sobre seguros, no asesor\u00eda legal ni financiera. El lenguaje de las p\u00f3lizas var\u00eda seg\u00fan la aseguradora y el producto. Lee tu propia p\u00f3liza y habla con un agente licenciado antes de tomar decisiones sobre tu cobertura.' },

        { type: 'h2', text: '\u00bfNo sabes qu\u00e9 tienes? Revisi\u00f3n de cobertura gratuita' },
        { type: 'p', text: 'Nuestra [Revisi\u00f3n de Cobertura Gratuita de 5 Minutos](/es/coverage-check) incluye una mirada al lado de protecci\u00f3n de ingresos de tu panorama de seguros \u2014 qu\u00e9 tienes a trav\u00e9s del trabajo, qu\u00e9 vac\u00edos existen y qu\u00e9 opciones hay. Gratis, sin obligaci\u00f3n, en ingl\u00e9s, espa\u00f1ol o ruso.' },
        { type: 'p', text: 'Tambi\u00e9n puedes visitar M&K Agency en 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034, llamar al (305) 859-3953, o [solicitar una cotizaci\u00f3n](/es/quote).' },
        { type: 'p', text: 'La cobertura depende de los t\u00e9rminos, l\u00edmites y exclusiones de cada p\u00f3liza. Habla con un agente licenciado antes de cambiar tu cobertura.' },
      ],
      faq: [
        { q: '\u00bfFlorida tiene seguro estatal de discapacidad?', a: 'No. Algunos estados tienen un programa estatal de discapacidad a corto plazo; Florida no. Existe el programa federal SSDI, pero tiene una definici\u00f3n estricta de discapacidad y un per\u00edodo de espera de cinco meses.' },
        { q: '\u00bfNo me cubre el workers\u2019 comp si me lesiono?', a: 'Solo si la lesi\u00f3n o enfermedad est\u00e1 relacionada con tu trabajo. Las enfermedades y las lesiones fuera del trabajo no son casos de workers\u2019 comp.' },
        { q: '\u00bfEl Seguro Social por discapacidad reemplazar\u00e1 mi ingreso?', a: 'El SSDI es una red de seguridad federal, no un reemplazo de ingresos. Usa una definici\u00f3n estricta de discapacidad, tiene un per\u00edodo de espera de cinco meses y el proceso de solicitud es largo.' },
        { q: '\u00bfEl seguro de salud me paga si no puedo trabajar?', a: 'No. El seguro de salud paga a los proveedores m\u00e9dicos por la atenci\u00f3n. No reemplaza los salarios perdidos \u2014 para eso es el seguro de discapacidad.' },
        { q: 'Si mi empleador ofrece cobertura de discapacidad, \u00bfnecesito m\u00e1s?', a: 'Quiz\u00e1s. La cobertura grupal suele ser limitada y normalmente termina cuando dejas el empleo. Revisa qu\u00e9 paga realmente, por cu\u00e1nto tiempo y bajo qu\u00e9 definici\u00f3n de discapacidad \u2014 y decide si los vac\u00edos te importan.' },
      ],
      sources: SOURCES,
    },
    ru: {
      title: 'Страхование на случай потери трудоспособности во Флориде: что защитит ваш доход',
      metaTitle: 'Страхование от нетрудоспособности во Флориде | M&K Agency',
      description: 'Страхование на случай потери трудоспособности во Флориде: почему у штата нет своей программы, что покрывает страховка short-term и long-term и на что смотреть в полисе.',
      excerpt: 'Если болезнь или травма не дадут вам работать месяцами — чем платить по счетам? Во Флориде нет государственного пособия по нетрудоспособности: рассказываем, что покрывает страховка.',
      category: 'Страхование от нетрудоспособности',
      body: [
        { type: 'p', text: 'Ваша зарплата — наверное, ваш самый ценный финансовый актив, и в отличие от машины или дома её нельзя увидеть, запереть или восстановить после потери. **Страхование на случай потери трудоспособности** существует для одной ситуации: болезнь или травма не дают вам работать, доход останавливается, а счета — нет.' },
        { type: 'p', text: 'В этой статье — что делает такое страхование, почему во Флориде оно важнее, чем в некоторых других штатах, на что обычно рассчитывают вместо него (и где эти варианты не срабатывают), и на что смотреть в полисе до того, как он понадобится.' },

        { type: 'h2', text: 'Что такое страхование от нетрудоспособности' },
        { type: 'ul', items: [
          '**Краткосрочное (short-term)** страхование платит еженедельное пособие ограниченное время — обычно от нескольких недель до нескольких месяцев — после того, как болезнь, травма или роды не дают вам работать.',
          '**Долгосрочное (long-term)** страхование платит ежемесячное пособие гораздо дольше — часто несколько лет или до определённого возраста, например 65 лет — когда серьёзное заболевание надолго выводит вас из строя.',
          'Пособия обычно рассчитаны на **частичную замену дохода до нетрудоспособности**, а не на полную — индивидуальные полисы обычно ориентируются примерно на 40–60% валового дохода. Идея — покрыть основное: жильё, еду, коммунальные услуги, платежи по кредитам.',
          'Это **защита дохода, а не медицинское покрытие**. Оно не оплачивает больничные счета — для этого есть медицинская страховка. Оно заменяет часть зарплаты, которую отняли болезнь или травма.',
        ] },

        { type: 'h2', text: 'Во Флориде нет государственной программы' },
        { type: 'p', text: 'В нескольких штатах — Калифорния, Гавайи, Нью-Джерси, Нью-Йорк и Род-Айленд — действует государственная программа краткосрочного страхования нетрудоспособности, финансируемая из отчислений с зарплаты. **Флорида — не из них.** Автоматического государственного пособия по нетрудоспособности во Флориде нет. Если хотите защитить доход сверх федеральных программ и собственных накоплений, это должна быть страховка, которую вы оформите сами: через работодателя, профсоюз или ассоциацию, либо индивидуальный полис.' },

        { type: 'h2', text: 'На что обычно рассчитывают — и где пробелы' },
        { type: 'ul', items: [
          '**Workers’ compensation** покрывает только травмы и заболевания, **связанные с работой**. Травма спины дома, диагноз рака или осложнения после операции — не случаи workers’ comp.',
          '**Автомобильный PIP** (безвиновое покрытие Флориды) платит **60% потерянной зарплаты**, но только после **ДТП** и только в пределах **лимита PIP $10 000**, общего с медицинскими выплатами.',
          '**SSDI (пособие по нетрудоспособности от Social Security)** — федеральная страховочная сетка со **строгим определением нетрудоспособности**, **пятимесячным периодом ожидания** до начала выплат и долгой процедурой оформления. Она задумана как защита от нищеты, а не как замена рабочего дохода.',
          '**Сбережения** могут перекрыть короткий перерыв. Нетрудоспособность длиной в месяцы или годы может их истощить — а счета продолжат приходить.',
        ] },

        { type: 'h2', text: 'Четыре условия, которые определяют полис' },
        { type: 'p', text: 'Каждый полис держится на нескольких ключевых условиях. Поймёте их — поймёте большую часть полиса:' },
        { type: 'ul', items: [
          '**Размер пособия** — ежемесячная (или еженедельная) выплата. Сравнивайте с реальными ежемесячными обязательствами, а не только с зарплатой.',
          '**Период ожидания (elimination period)** — сколько времени после начала нетрудоспособности до первой выплаты: обычно 30, 60, 90 или 180 дней. Более длинный период ожидания обычно означает более низкую премию, потому что страховщик берёт на себя меньше риска.',
          '**Период выплат** — как долго могут длиться выплаты: 2 года, 5 лет, до 65 или 67 лет, а в некоторых полисах — пожизненно.',
          '**Определение нетрудоспособности** — самая важная формулировка в полисе. **«Own occupation»** означает, что вы не можете выполнять *свою* конкретную работу; **«any occupation»** — что вы не можете выполнять *никакую* работу, соответствующую вашему образованию и опыту. Более широкие определения срабатывают в большем числе ситуаций и стоят дороже.',
        ] },

        { type: 'h2', text: 'Через работу или самостоятельно?' },
        { type: 'ul', items: [
          '**Групповое страхование (от работодателя)** — часто базовый уровень защиты, иногда только краткосрочный, и оно **обычно заканчивается вместе с работой**. Как правило, не переносится.',
          '**Индивидуальный полис** — полис, который **принадлежит вам**. Следует за вами от работы к работе, а размер пособия, период ожидания и определение нетрудоспособности выбираете вы. При оформлении обычно требуется медицинский андеррайтинг.',
          'У многих есть оба варианта: групповой как основа, индивидуальный — чтобы закрыть пробелы группового.',
        ] },

        { type: 'h2', text: 'Что проверить до того, как понадобится' },
        { type: 'ol', items: [
          'Прочитайте **определение нетрудоспособности** в своём полисе — не в рекламном буклете, а в договоре.',
          'Отметьте **период ожидания**: сколько недель или месяцев вы сможете прожить без дохода?',
          'Отметьте **размер и период выплат**: что реально будет приходить на счёт каждый месяц и как долго?',
          'Прочитайте **исключения и ограничения**: оговорки о предсуществующих заболеваниях и лимиты по психическим расстройствам или зависимостям встречаются часто.',
          'Если страховка от работы — спросите, **что будет при смене работы**.',
          'Если сомневаетесь — попросите **лицензированного агента** разобрать полис вместе с вами: до страхового случая, а не после.',
        ] },
        { type: 'callout', title: 'Обратите внимание', text: 'Это общая информация о страховании, а не юридическая или финансовая консультация. Формулировки полисов различаются у разных страховщиков и продуктов. Читайте свой полис и консультируйтесь с лицензированным агентом, прежде чем принимать решения о покрытии.' },

        { type: 'h2', text: 'Не уверены, что у вас есть? Бесплатная проверка покрытия' },
        { type: 'p', text: 'Наша [бесплатная 5-минутная проверка покрытия](/ru/coverage-check) включает взгляд на защиту дохода в вашей страховой картине: что есть через работу, какие есть пробелы и какие варианты доступны. Бесплатно, ни к чему не обязывает, на английском, испанском или русском.' },
        { type: 'p', text: 'Вы также можете посетить офис M&K Agency: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034, позвонить (305) 859-3953 или [запросить котировку](/ru/quote).' },
        { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений каждого полиса. Проконсультируйтесь с лицензированным агентом, прежде чем менять покрытие.' },
      ],
      faq: [
        { q: 'Есть ли во Флориде государственное страхование нетрудоспособности?', a: 'Нет. В нескольких штатах есть государственная программа краткосрочной нетрудоспособности, во Флориде — нет. Федеральная программа SSDI существует, но у неё строгое определение нетрудоспособности и пятимесячный период ожидания.' },
        { q: 'Разве workers’ comp не покроет меня при травме?', a: 'Только если травма или заболевание связаны с работой. Болезни и травмы вне работы — не случаи workers’ comp.' },
        { q: 'Заменит ли пособие Social Security мой доход?', a: 'SSDI — федеральная страховочная сетка, а не замена дохода. Строгое определение нетрудоспособности, пятимесячный период ожидания и долгая процедура оформления.' },
        { q: 'Медицинская страховка платит, если я не могу работать?', a: 'Нет. Медицинская страховка оплачивает лечение. Потерянную зарплату она не заменяет — для этого и существует страхование от нетрудоспособности.' },
        { q: 'Если работодатель даёт страховку от нетрудоспособности, нужно ли ещё?', a: 'Возможно. Групповое покрытие часто ограничено и обычно заканчивается вместе с работой. Проверьте, что оно реально платит, как долго и при каком определении нетрудоспособности — и решите, важны ли для вас пробелы.' },
      ],
      sources: SOURCES,
    },
  },
};
