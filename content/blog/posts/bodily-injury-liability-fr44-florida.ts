import type { BlogPost } from '../types';

// Facts checked 2026-10-04: FR-44 required in FL after DUI conviction
// (s. 316.193; s. 324.023 F.S.): BI 100/300 + PD 50, minimum 3 years; only FL
// and VA use FR-44. FL does not require BI liability for most drivers (PIP
// $10k + PDL $10k per ss. 627.733, 627.736). FL judgments generally valid
// 20 years (s. 55.081). Homestead: Art. X, s. 4, FL Constitution (primary
// residence shielded from forced sale by most creditors; exceptions include
// mortgages, tax liens, mechanic's liens). Wage garnishment: head-of-family
// protections exist (s. 222.11) with limits \u2014 kept general here.
// Deliberately generic: no private insurer named. No premium rates, no savings
// claims, no guaranteed outcomes. Not legal advice. ES/RU mirror EN.
const SOURCES = [
  { label: 'Florida Statutes s. 324.023 (2026): financial responsibility \u2014 FR-44 after DUI', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Florida Statutes s. 316.193 (2026): driving under the influence', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.193' },
  { label: 'Florida Constitution, Article X, Section 4: homestead exemption', url: 'https://www.flsenate.gov/Laws/Constitution' },
  { label: 'FLHSMV: Florida Insurance Requirements', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'Florida Department of Financial Services: Consumer Services', url: 'https://www.myfloridacfo.com/division/consumers/' },
];

export const post: BlogPost = {
  slug: 'bodily-injury-liability-fr44-florida',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Bodily Injury Liability in Florida: Lawsuits, FR-44, and Protecting What You Own',
      metaTitle: 'Bodily Injury Liability & FR-44 in Florida | M&K Agency',
      description: 'Bodily injury liability in Florida: what you owe after a serious crash, how FR-44, garnishment, liens and homestead protection work.',
      ogAlt: 'Sedan with a protective shield emblem driving on a palm-lined highway',
      excerpt: 'Florida doesn\u2019t require most drivers to carry bodily injury liability. But if you cause a serious crash without enough of it, the bill doesn\u2019t disappear \u2014 it can follow your paycheck and your property for years.',
      category: 'Auto insurance',
      body: [
        { type: 'p', text: '**Bodily injury (BI) liability** is the part of your auto policy that pays for injuries **you cause to other people** \u2014 their medical bills, lost wages, and pain and suffering. Here is the part most Florida drivers miss: for most drivers, Florida **does not require it**. To register a car you need only **PIP ($10,000)** and **property damage liability ($10,000)**. That means you can be driving legally with **zero coverage** for the injuries you cause to others.' },
        { type: 'p', text: 'So what happens when a driver with minimum coverage \u2014 or no BI at all \u2014 causes a serious crash? This article walks through it: the lawsuit, what a judgment can reach, where Florida\u2019s homestead protection helps (and where it doesn\u2019t), what a DUI adds through FR-44, and where a personal umbrella fits in.' },

        { type: 'h2', text: 'The crash is only the beginning: how a judgment follows you' },
        { type: 'ul', items: [
          'The injured person can **sue you personally** for what insurance didn\u2019t pay: medical bills, future care, lost wages, and pain and suffering.',
          'A money judgment in Florida is generally valid for **20 years** and can be renewed. It doesn\u2019t expire when the crash fades from memory.',
          'With a judgment in hand, the creditor can pursue **wage garnishment** (Florida law shields a head of household\u2019s wages in many cases, but the protection has limits and doesn\u2019t cover every kind of debt), **levy on bank accounts**, and **liens on property** you own that isn\u2019t otherwise protected.',
          'Interest keeps running on the unpaid balance while you sort it out.',
        ] },

        { type: 'h2', text: 'Can they take your house? Homestead protection' },
        { type: 'p', text: 'Florida\u2019s homestead protection (Article X, Section 4 of the Florida Constitution) shields your **primary residence** from forced sale by most creditors \u2014 and unlike many states, Florida puts **no dollar cap** on the value protected. But it is narrower than people think:' },
        { type: 'ul', items: [
          'It doesn\u2019t stop the **judgment itself** \u2014 you still owe the money.',
          'It doesn\u2019t protect **bank accounts, investments, second homes, rental property, or business assets**.',
          'It doesn\u2019t block **mortgages, property-tax liens, or contractor (mechanic\u2019s) liens** \u2014 those creditors can still force a sale.',
        ] },
        { type: 'p', text: 'In plain terms: homestead keeps a roof over your head, but it doesn\u2019t make the debt go away \u2014 and everything outside the homestead is exposed.' },

        { type: 'h2', text: 'A DUI makes it much worse: FR-44' },
        { type: 'p', text: 'After a DUI conviction (s. 316.193), Florida \u2014 one of only two states to use it \u2014 requires an **FR-44** filing (s. 324.023):' },
        { type: 'ul', items: [
          'You must carry **$100,000 per person / $300,000 per accident** in bodily injury liability plus **$50,000** in property damage \u2014 roughly ten times the BI limits many drivers carry.',
          'You must maintain those limits for a **minimum of 3 years**.',
          'Your insurer files the FR-44 certificate with the state. If the coverage lapses, your license goes away again \u2014 and the clock can restart.',
        ] },
        { type: 'p', text: 'An FR-44 isn\u2019t insurance itself. It\u2019s proof, filed by your insurer, that you carry the limits the state demands after a DUI.' },

        { type: 'h2', text: 'Where a personal umbrella fits' },
        { type: 'p', text: 'A **personal umbrella policy** sits **on top of** your auto and homeowners liability limits. When a covered claim burns through your underlying BI limit, the umbrella can pay what\u2019s left, up to its own limit \u2014 for both auto and home liability claims under one policy.' },
        { type: 'ul', items: [
          'For **homeowners**, an umbrella is especially worth understanding: a house, savings and investments are visible assets that make you a worthwhile target to sue.',
          'Umbrella coverage generally requires you to carry certain **underlying auto and home liability limits** first \u2014 it doesn\u2019t replace them.',
          'It\u2019s the layer that responds when the numbers get bigger than your auto policy was built for.',
        ] },
        { type: 'p', text: 'See our [personal umbrella guide](/en/protect/umbrella-insurance) for how the coverage is structured.' },

        { type: 'h2', text: 'What to check on your own policy' },
        { type: 'ol', items: [
          'Find your **bodily injury liability limits** on your declarations page \u2014 two numbers, such as 100/300.',
          'If you see only PIP and property damage, you likely have **no BI liability at all**.',
          'Ask what a serious injury claim would do to your savings, a second property, or your wages over the next 20 years.',
          'If you own a home, ask a licensed agent how an umbrella would stack over your auto and home policies.',
          'If you carry an FR-44, **never let the coverage lapse** \u2014 a lapse can restart the multi-year clock.',
        ] },
        { type: 'callout', title: 'Please note', text: 'This is general insurance information, not legal advice. Lawsuits, garnishment, liens and homestead questions turn on specific facts \u2014 talk to an attorney about a specific situation, and to a licensed agent about coverage.' },

        { type: 'h2', text: 'Not sure what your limits are? Get a free coverage check' },
        { type: 'p', text: 'Our [Free 5-Minute Coverage Check](/en/coverage-check) reviews your auto liability limits, whether an umbrella makes sense for your household, and where the gaps are. Free, no obligation, in English, Spanish or Russian.' },
        { type: 'p', text: 'You can also visit M&K Agency at 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034, call (305) 859-3953, or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you change your coverage.' },
      ],
      faq: [
        { q: 'Is bodily injury liability required in Florida?', a: 'For most drivers, no. Florida requires PIP ($10,000) and property damage liability ($10,000). Drivers with certain violations \u2014 including DUI convictions carrying an FR-44 \u2014 must carry much higher BI limits.' },
        { q: 'What is an FR-44?', a: 'A certificate your insurer files with the state proving you carry elevated liability limits after a DUI: $100,000/$300,000 bodily injury and $50,000 property damage in Florida, maintained for a minimum of 3 years.' },
        { q: 'Can a crash judgment garnish my wages in Florida?', a: 'Possibly. Florida law protects a head of household\u2019s wages from garnishment in many cases, but the protection has limits. Judgments in Florida are generally valid for 20 years.' },
        { q: 'Can they put a lien on my house?', a: 'Your primary residence is generally shielded from forced sale under Florida\u2019s homestead protection (Article X, Section 4), with exceptions for mortgages, tax liens and contractor liens. Non-homestead property \u2014 second homes, rentals, investments \u2014 is not shielded.' },
        { q: 'Does a personal umbrella replace my auto BI limits?', a: 'No. An umbrella sits on top of your auto and home liability limits and requires you to carry specified underlying limits first.' },
      ],
      sources: SOURCES,
    },
    es: {
      title: 'Responsabilidad por lesiones corporales en Florida: demandas, FR-44 y c\u00f3mo proteger lo tuyo',
      metaTitle: 'Lesiones corporales y FR-44 en Florida | M&K Agency',
      description: 'Responsabilidad por lesiones corporales en Florida: qu\u00e9 debes tras un choque grave, c\u00f3mo funcionan FR-44, embargo de salario, grav\u00e1menes y la protecci\u00f3n homestead.',
      ogAlt: 'Sedán con emblema de escudo protector en una autopista con palmeras',
      excerpt: 'Florida no exige a la mayor\u00eda de los conductores llevar responsabilidad por lesiones corporales. Pero si causas un choque grave sin suficiente cobertura, la cuenta no desaparece: puede seguir tu salario y tus bienes por a\u00f1os.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'La **responsabilidad por lesiones corporales (BI)** es la parte de tu p\u00f3liza de auto que paga por las lesiones **que t\u00fa causas a otras personas**: sus cuentas m\u00e9dicas, salarios perdidos y dolor y sufrimiento. Y esto es lo que la mayor\u00eda de los conductores de Florida no sabe: para la mayor\u00eda, Florida **no la exige**. Para registrar un auto solo necesitas **PIP ($10,000)** y **responsabilidad por da\u00f1os a la propiedad ($10,000)**. Es decir, puedes manejar legalmente con **cero cobertura** para las lesiones que causes a otros.' },
        { type: 'p', text: '\u00bfQu\u00e9 pasa cuando un conductor con cobertura m\u00ednima \u2014 o sin BI \u2014 causa un choque grave? Este art\u00edculo lo explica: la demanda, qu\u00e9 puede alcanzar un fallo judicial, d\u00f3nde ayuda la protecci\u00f3n homestead de Florida (y d\u00f3nde no), qu\u00e9 agrega un DUI con el FR-44, y d\u00f3nde encaja una p\u00f3liza paraguas personal.' },

        { type: 'h2', text: 'El choque es solo el principio: c\u00f3mo te sigue un fallo judicial' },
        { type: 'ul', items: [
          'La persona lesionada puede **demandarte personalmente** por lo que el seguro no pag\u00f3: cuentas m\u00e9dicas, atenci\u00f3n futura, salarios perdidos y dolor y sufrimiento.',
          'Un fallo monetario en Florida generalmente es v\u00e1lido por **20 a\u00f1os** y puede renovarse. No expira cuando el choque se olvida.',
          'Con un fallo en mano, el acreedor puede buscar el **embargo de salario** (la ley de Florida protege el salario del cabeza de familia en muchos casos, pero la protecci\u00f3n tiene l\u00edmites y no cubre todo tipo de deuda), el **embargo de cuentas bancarias** y **grav\u00e1menes sobre propiedades** que tengas y no est\u00e9n protegidas.',
          'Los intereses siguen corriendo sobre el saldo impago mientras lo resuelves.',
        ] },

        { type: 'h2', text: '\u00bfPueden quitarte la casa? La protecci\u00f3n homestead' },
        { type: 'p', text: 'La protecci\u00f3n homestead de Florida (Art\u00edculo X, Secci\u00f3n 4 de la Constituci\u00f3n de Florida) protege tu **residencia principal** de la venta forzada por la mayor\u00eda de los acreedores \u2014 y a diferencia de muchos estados, Florida **no pone tope** al valor protegido. Pero es m\u00e1s limitada de lo que la gente cree:' },
        { type: 'ul', items: [
          'No detiene el **fallo en s\u00ed** \u2014 sigues debiendo el dinero.',
          'No protege **cuentas bancarias, inversiones, segundas viviendas, propiedades de alquiler ni activos de negocios**.',
          'No bloquea **hipotecas, grav\u00e1menes de impuestos a la propiedad ni grav\u00e1menes de contratistas** \u2014 esos acreedores s\u00ed pueden forzar una venta.',
        ] },
        { type: 'p', text: 'En palabras simples: el homestead mantiene un techo sobre tu cabeza, pero no hace desaparecer la deuda \u2014 y todo lo que est\u00e1 fuera del homestead queda expuesto.' },

        { type: 'h2', text: 'Un DUI lo empeora mucho: FR-44' },
        { type: 'p', text: 'Tras una condena por DUI (s. 316.193), Florida \u2014 uno de solo dos estados que lo usan \u2014 exige una declaraci\u00f3n **FR-44** (s. 324.023):' },
        { type: 'ul', items: [
          'Debes llevar **$100,000 por persona / $300,000 por accidente** en responsabilidad por lesiones corporales m\u00e1s **$50,000** en da\u00f1os a la propiedad: unas diez veces los l\u00edmites de BI que llevan muchos conductores.',
          'Debes mantener esos l\u00edmites por un **m\u00ednimo de 3 a\u00f1os**.',
          'Tu aseguradora presenta el certificado FR-44 ante el estado. Si la cobertura se interrumpe, pierdes la licencia de nuevo \u2014 y el reloj puede reiniciarse.',
        ] },
        { type: 'p', text: 'El FR-44 no es un seguro en s\u00ed. Es la prueba, presentada por tu aseguradora, de que llevas los l\u00edmites que el estado exige tras un DUI.' },

        { type: 'h2', text: 'D\u00f3nde encaja una p\u00f3liza paraguas personal' },
        { type: 'p', text: 'Una **p\u00f3liza paraguas personal** se coloca **encima de** tus l\u00edmites de responsabilidad de auto y de vivienda. Cuando un reclamo cubierto agota tu l\u00edmite base de BI, el paraguas puede pagar el resto, hasta su propio l\u00edmite \u2014 para reclamos de auto y de hogar bajo una sola p\u00f3liza.' },
        { type: 'ul', items: [
          'Para los **propietarios de vivienda**, el paraguas vale la pena entenderlo: una casa, ahorros e inversiones son activos visibles que te convierten en un objetivo que vale la pena demandar.',
          'La cobertura paraguas generalmente exige que primero lleves ciertos **l\u00edmites base de responsabilidad de auto y hogar** \u2014 no los reemplaza.',
          'Es la capa que responde cuando las cifras superan lo que tu p\u00f3liza de auto fue dise\u00f1ada para cubrir.',
        ] },
        { type: 'p', text: 'Mira nuestra [gu\u00eda de paraguas personal](/es/protect/umbrella-insurance) para ver c\u00f3mo se estructura la cobertura.' },

        { type: 'h2', text: 'Qu\u00e9 revisar en tu propia p\u00f3liza' },
        { type: 'ol', items: [
          'Busca tus **l\u00edmites de responsabilidad por lesiones corporales** en tu p\u00e1gina de declaraciones: dos n\u00fameros, como 100/300.',
          'Si solo ves PIP y da\u00f1os a la propiedad, probablemente **no tienes BI en absoluto**.',
          'Preg\u00fantate qu\u00e9 har\u00eda un reclamo grave con tus ahorros, una segunda propiedad o tu salario durante los pr\u00f3ximos 20 a\u00f1os.',
          'Si tienes casa propia, pregunta a un agente licenciado c\u00f3mo un paraguas se sumar\u00eda sobre tus p\u00f3lizas de auto y hogar.',
          'Si llevas un FR-44, **nunca dejes que la cobertura se interrumpa**: una interrupci\u00f3n puede reiniciar el reloj de varios a\u00f1os.',
        ] },
        { type: 'callout', title: 'Ten en cuenta', text: 'Esta es informaci\u00f3n general sobre seguros, no asesor\u00eda legal. Las demandas, embargos, grav\u00e1menes y temas de homestead dependen de hechos espec\u00edficos: habla con un abogado sobre tu situaci\u00f3n y con un agente licenciado sobre tu cobertura.' },

        { type: 'h2', text: '\u00bfNo sabes cu\u00e1les son tus l\u00edmites? Revisi\u00f3n gratuita' },
        { type: 'p', text: 'Nuestra [Revisi\u00f3n de Cobertura Gratuita de 5 Minutos](/es/coverage-check) revisa tus l\u00edmites de responsabilidad de auto, si un paraguas tiene sentido para tu hogar y d\u00f3nde est\u00e1n los vac\u00edos. Gratis, sin obligaci\u00f3n, en ingl\u00e9s, espa\u00f1ol o ruso.' },
        { type: 'p', text: 'Tambi\u00e9n puedes visitar M&K Agency en 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034, llamar al (305) 859-3953, o [solicitar una cotizaci\u00f3n](/es/quote).' },
        { type: 'p', text: 'La cobertura depende de los t\u00e9rminos, l\u00edmites y exclusiones de cada p\u00f3liza. Habla con un agente licenciado antes de cambiar tu cobertura.' },
      ],
      faq: [
        { q: '\u00bfLa responsabilidad por lesiones corporales es obligatoria en Florida?', a: 'Para la mayor\u00eda de los conductores, no. Florida exige PIP ($10,000) y responsabilidad por da\u00f1os a la propiedad ($10,000). Conductores con ciertas violaciones \u2014 incluyendo DUI con FR-44 \u2014 deben llevar l\u00edmites de BI mucho m\u00e1s altos.' },
        { q: '\u00bfQu\u00e9 es un FR-44?', a: 'Un certificado que tu aseguradora presenta ante el estado probando que llevas l\u00edmites elevados tras un DUI: $100,000/$300,000 en lesiones corporales y $50,000 en da\u00f1os a la propiedad en Florida, por un m\u00ednimo de 3 a\u00f1os.' },
        { q: '\u00bfUn fallo por choque puede embargar mi salario en Florida?', a: 'Posiblemente. La ley de Florida protege el salario del cabeza de familia del embargo en muchos casos, pero la protecci\u00f3n tiene l\u00edmites. Los fallos en Florida generalmente son v\u00e1lidos por 20 a\u00f1os.' },
        { q: '\u00bfPueden poner un gravamen sobre mi casa?', a: 'Tu residencia principal generalmente est\u00e1 protegida de la venta forzada bajo la protecci\u00f3n homestead (Art\u00edculo X, Secci\u00f3n 4), con excepciones para hipotecas, impuestos y contratistas. Las propiedades que no son homestead \u2014 segundas viviendas, alquileres, inversiones \u2014 no est\u00e1n protegidas.' },
        { q: '\u00bfUn paraguas personal reemplaza mi BI de auto?', a: 'No. El paraguas se coloca encima de tus l\u00edmites de responsabilidad de auto y hogar, y exige que primero lleves los l\u00edmites base requeridos.' },
      ],
      sources: SOURCES,
    },
    ru: {
      title: 'Ответственность за телесные повреждения во Флориде: суды, FR-44 и защита имущества',
      metaTitle: 'Bodily injury и FR-44 во Флориде | M&K Agency',
      description: 'Ответственность за телесные повреждения во Флориде: что вы должны после серьёзного ДТП, как работают FR-44, garnishment, liens и защита homestead.',
      ogAlt: 'Седан с эмблемой защитного щита на шоссе среди пальм',
      excerpt: 'Флорида не требует от большинства водителей страховку ответственности за телесные повреждения. Но если вы стали виновником серьёзного ДТП без достаточного покрытия — счёт не исчезнет: он может преследовать вашу зарплату и имущество годами.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: '**Ответственность за телесные повреждения (BI)** — это часть вашего автополиса, которая платит за травмы, **которые вы причинили другим людям**: их медицинские счета, потерянную зарплату, боль и страдания. И вот что большинство водителей Флориды упускает: для большинства водителей Флорида **её не требует**. Для регистрации машины нужны только **PIP ($10 000)** и **ответственность за ущерб имуществу ($10 000)**. То есть вы можете ездить легально с **нулёвым покрытием** травм, которые причините другим.' },
        { type: 'p', text: 'Что происходит, когда водитель с минимальным покрытием — или вообще без BI — становится виновником серьёзного ДТП? В этой статье — по шагам: суд, до чего может дотянуться судебное решение, где помогает защита homestead во Флориде (а где нет), что добавляет DUI через FR-44 и где вписывается личный umbrella-полис.' },

        { type: 'h2', text: 'ДТП — только начало: как судебное решение преследует вас' },
        { type: 'ul', items: [
          'Пострадавший может **подать на вас в суд лично** — взыскать то, что не покрыла страховка: медицинские счета, будущее лечение, потерянную зарплату, боль и страдания.',
          'Денежное судебное решение во Флориде, как правило, действительно **20 лет** и может продлеваться. Оно не истекает, когда о ДТП уже забыли.',
          'С решением суда на руках кредитор может добиваться **удержания из зарплаты (garnishment)** (закон Флориды во многих случаях защищает зарплату главы семьи, но у защиты есть лимиты и она покрывает не все виды долгов), **ареста банковских счетов** и **залоговых обременений (liens)** на ваше имущество, которое не защищено иначе.',
          'Проценты на неоплаченный остаток продолжают капать, пока вы разбираетесь.',
        ] },

        { type: 'h2', text: 'Могут ли забрать дом? Защита homestead' },
        { type: 'p', text: 'Защита homestead во Флориде (статья X, раздел 4 Конституции Флориды) — защищает ваше **основное жильё** от принудительной продажи большинством кредиторов, и в отличие от многих штатов Флорида **не ограничивает** стоимость защищённого жилья. Но она уже, чем думают:' },
        { type: 'ul', items: [
          'Она не отменяет **само решение суда** — деньги вы всё равно должны.',
          'Она не защищает **банковские счета, инвестиции, второй дом, сдаваемую недвижимость и бизнес-активы**.',
          'Она не блокирует **ипотеку, налоговые обременения и залоги подрядчиков (mechanic’s liens)** — эти кредиторы всё равно могут добиться продажи.',
        ] },
        { type: 'p', text: 'Простыми словами: homestead сохраняет крышу над головой, но не гасит долг — а всё, что вне homestead, под ударом.' },

        { type: 'h2', text: 'DUI сильно всё ухудшает: FR-44' },
        { type: 'p', text: 'После осуждения за DUI (s. 316.193) Флорида — один из всего двух штатов, где это применяется — требует filing **FR-44** (s. 324.023):' },
        { type: 'ul', items: [
          'Вы обязаны держать **$100 000 на человека / $300 000 на аварию** ответственности за телесные повреждения плюс **$50 000** ущерба имуществу — примерно в десять раз больше BI-лимитов, с которыми ездит большинство.',
          'Эти лимиты нужно держать **минимум 3 года**.',
          'Ваш страховщик подаёт сертификат FR-44 в штат. Если покрытие прервётся — права отберут снова, а отсчёт может начаться заново.',
        ] },
        { type: 'p', text: 'FR-44 — не страховка сама по себе. Это подтверждение, которое ваш страховщик подаёт в штат, что у вас есть требуемые лимиты после DUI.' },

        { type: 'h2', text: 'Где вписывается личный umbrella' },
        { type: 'p', text: '**Личный umbrella-полис** ложится **поверх** ваших лимитов ответственности авто и homeowners. Когда покрываемый иск съедает ваш базовый BI-лимит, umbrella может доплатить остаток — в пределах своего лимита, по искам и авто, и дома в одном полисе.' },
        { type: 'ul', items: [
          '**Владельцам домов** umbrella особенно стоит понять: дом, сбережения и инвестиции — видимые активы, из-за которых на вас стоит подавать в суд.',
          'Umbrella обычно требует, чтобы сначала были оформлены определённые **базовые лимиты ответственности авто и дома** — он их не заменяет.',
          'Это слой, который срабатывает, когда суммы превышают то, на что был рассчитан ваш автополис.',
        ] },
        { type: 'p', text: 'Смотрите наш [гид по личному umbrella](/ru/protect/umbrella-insurance), как устроено покрытие.' },

        { type: 'h2', text: 'Что проверить в своём полисе' },
        { type: 'ol', items: [
          'Найдите **лимиты ответственности за телесные повреждения** на declarations page — два числа, например 100/300.',
          'Если видите только PIP и ущерб имуществу — скорее всего, у вас **вообще нет BI**.',
          'Спросите себя: что серьёзный иск сделает с вашими сбережениями, вторым объектом или зарплатой за 20 лет?',
          'Если у вас свой дом — спросите лицензированного агента, как umbrella ляжет поверх ваших полисов авто и дома.',
          'Если у вас FR-44 — **никогда не допускайте разрыва покрытия**: разрыв может перезапустить многолетний отсчёт.',
        ] },
        { type: 'callout', title: 'Обратите внимание', text: 'Это общая информация о страховании, а не юридическая консультация. Суды, garnishment, liens и вопросы homestead зависят от конкретных фактов — по конкретной ситуации говорите с адвокатом, по покрытию — с лицензированным агентом.' },

        { type: 'h2', text: 'Не уверены в своих лимитах? Бесплатная проверка покрытия' },
        { type: 'p', text: 'Наша [бесплатная 5-минутная проверка покрытия](/ru/coverage-check) разберёт лимиты вашей автоответственности, есть ли смысл в umbrella для вашей семьи и где пробелы. Бесплатно, ни к чему не обязывает, на английском, испанском или русском.' },
        { type: 'p', text: 'Вы также можете посетить офис M&K Agency: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034, позвонить (305) 859-3953 или [запросить котировку](/ru/quote).' },
        { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений каждого полиса. Проконсультируйтесь с лицензированным агентом, прежде чем менять покрытие.' },
      ],
      faq: [
        { q: 'Ответственность за телесные повреждения обязательна во Флориде?', a: 'Для большинства водителей — нет. Флорида требует PIP ($10 000) и ответственность за ущерб имуществу ($10 000). Водители с отдельными нарушениями — включая DUI с FR-44 — обязаны держать гораздо более высокие BI-лимиты.' },
        { q: 'Что такое FR-44?', a: 'Сертификат, который ваш страховщик подаёт в штат, подтверждая повышенные лимиты после DUI: $100 000/$300 000 телесных повреждений и $50 000 ущерба имуществу во Флориде, минимум на 3 года.' },
        { q: 'Могут ли удерживать зарплату по решению суда во Флориде?', a: 'Возможно. Закон Флориды во многих случаях защищает зарплату главы семьи от удержания, но у защиты есть лимиты. Судебные решения во Флориде, как правило, действительны 20 лет.' },
        { q: 'Могут ли наложить lien на мой дом?', a: 'Основное жильё, как правило, защищено от принудительной продажи по homestead (статья X, раздел 4), с исключениями для ипотеки, налогов и подрядчиков. Не-homestead имущество — второй дом, аренда, инвестиции — не защищено.' },
        { q: 'Заменяет ли личный umbrella мои BI-лимиты авто?', a: 'Нет. Umbrella ложится поверх лимитов ответственности авто и дома и требует сначала оформить установленные базовые лимиты.' },
      ],
      sources: SOURCES,
    },
  },
};
