import type { TopicPage } from './types';

// Umbrella & wealth protection tab. Real cases: Fla. Sup. Ct. SC17-85 (2018)
// and SC01-2846 (2004), described neutrally without carrier or private names.
// NHTSA DOT HS 813 403 per-person costs; III dog-bite page for typical limits.
export const umbrella: TopicPage = {
  slug: 'umbrella-insurance',
  leadSource: 'learn-umbrella',
  leadType: 'Home',
  published: '2026-10-03',
  modified: '2026-10-03',
  t: {
    en: {
      metaTitle: 'Umbrella Insurance & Wealth Protection in Florida | M&K Agency',
      metaDesc:
        "Car and home policies stop at their limits. A real Florida case: $100,000 of coverage, an $8.47 million judgment. How an umbrella protects what you've built.",
      tab: 'Umbrella & wealth',
      kicker: 'Umbrella insurance · Wealth protection',
      h1: "Protect what you've built from one bad day",
      sub: "A lawsuit, a death or a disability can wipe out years of savings in a few months. Here is how families protect their income, their savings and their kids' future, in plain words.",
      heroFigure: 'umbrella-layers',
      keyTitle: 'The short version',
      key: [
        'Your car and home policies pay only up to their **liability limits**. If a jury decides you owe more, the rest is on you.',
        'In a real Florida case, a driver with a **$100,000** policy faced an **$8.47 million** judgment.',
        'An **umbrella policy** adds an extra layer, for example $1 million, on top of your car and home liability.',
        'Wealth protection has three parts: **lawsuits** (umbrella), **death** (life insurance) and **lost income** (a plan for when you cannot work).',
      ],
      sections: [
        {
          id: 'how',
          h2: 'How an umbrella works',
          figure: 'umbrella-layers',
          blocks: [
            { type: 'p', text: 'Think of your car and home liability as the first floor. The umbrella is a second floor built on top.' },
            {
              type: 'ol',
              items: [
                'Something serious happens: a crash you cause, a guest hurt at your home, a dog bite.',
                'Your car or home policy pays first, up to its limit.',
                'If the claim is bigger, the umbrella pays the rest, up to its own limit.',
              ],
            },
            { type: 'p', text: 'Most umbrella policies require you to carry certain liability limits on your car and home first. Many also help pay for your legal defense. The details depend on the policy, so we check yours with you.' },
          ],
        },
        {
          id: 'case',
          h2: 'A real Florida case: $100,000 of coverage, an $8.47 million judgment',
          figure: 'limit-vs-verdict',
          blocks: [
            { type: 'p', text: 'In August 2006, in Palm Beach County, a driver caused a crash that killed a 51-year-old husband and father of three. The driver had car insurance with a $100,000 liability limit.' },
            { type: 'p', text: 'A jury found the driver 100% at fault and awarded $8.47 million. The judgment was entered against the driver for the full amount. Years later the case reached the Florida Supreme Court over how the claim had been handled.' },
            { type: 'p', text: 'We do not share this to scare anyone. We share it because the gap between $100,000 and $8.47 million is real, and that is exactly the kind of gap an umbrella policy is built for.' },
          ],
        },
        {
          id: 'who',
          h2: 'Who should think about an umbrella?',
          blocks: [
            {
              type: 'ul',
              items: [
                'You own a home, or you have savings or investments.',
                'You have a teen driver in the house.',
                'You have a pool, a trampoline or a dog.',
                'You rent out a home or a room.',
                'You own a boat.',
                'You earn a good income, so your future paychecks are worth a lot.',
              ],
            },
          ],
          stories: [
            {
              title: 'Example: the new driver',
              steps: [
                'Sofia is 17 and just got her license.',
                'She looks at her phone for a second and hits a man on a bike.',
                'He is in the hospital for weeks and cannot go back to his job as a mechanic.',
              ],
              ending: "Her parents' car policy pays up to its limit, for example $100,000. His medical bills, lost pay and future earnings can be far more. An umbrella adds another layer above the car policy.",
            },
          ],
        },
        {
          id: 'three',
          h2: "Wealth protection: three things that can take a family's money",
          blocks: [
            { type: 'h3', text: '1. A lawsuit' },
            { type: 'p', text: 'Liability limits on your car and your home are the first line. An umbrella is the second. See how this works at home on our [home insurance page](/en/protect/home-insurance).' },
            { type: 'h3', text: '2. A death' },
            { type: 'p', text: "If the main earner dies, the paycheck stops. [Life insurance](/en/protect/life-insurance) can replace it, pay the mortgage and help pay for the kids' education." },
            { type: 'h3', text: '3. A disability' },
            { type: 'p', text: 'If you cannot work for months, PIP and Social Security may pay little or nothing for a long time. Savings, [uninsured motorist coverage](/en/protect/car-insurance) for crashes and the right plan help keep the bills paid.' },
          ],
        },
      ],
      casesTitle: 'Real Florida cases: when the limit is far below the verdict',
      casesIntro: 'These come from public court records. We share them to show how large serious claims can be. Every case is different.',
      cases: [
        {
          title: 'A $100,000 policy and an $8.47 million judgment',
          where: 'Palm Beach County · Florida Supreme Court, 2018 (crash in 2006)',
          happened: "A driver was found 100% at fault for a crash that killed a 51-year-old husband and father of three. The driver's car insurance had a $100,000 liability limit.",
          decided: 'A jury awarded $8.47 million, and the judgment was entered against the driver for the full amount. The case then went to the Florida Supreme Court over how the claim had been handled.',
          shows: 'A liability limit can be a tiny part of a serious verdict. The difference is a judgment against the person at fault.',
          source: 'caseSc1785',
        },
        {
          title: '$10,000 per person and about $1.4 million in verdicts',
          where: 'Hillsborough County · Florida Supreme Court, 2004 (crash in 1990)',
          happened: 'A car insured for $10,000 per person and $20,000 per crash was driven by a driver who had been drinking. It crossed the center line and hit a car, killing a mother and badly hurting her young daughter.',
          decided: "Juries set the damages at $911,400 for the mother's death and $500,000 for the daughter's injuries.",
          shows: 'Low limits can leave the people at fault facing amounts many times larger than their coverage.',
          source: 'caseSc012846',
        },
      ],
      statsTitle: 'The numbers behind it',
      stats: [
        { value: '$1.6 million', text: 'is the average lifetime economic cost of one crash death in the U.S. ($11.3 million when quality of life is counted).', source: 'nhtsaCost' },
        { value: '$979,000', text: 'is the average economic cost for each critically injured crash survivor.', source: 'nhtsaCost' },
        { value: '$100,000 to $300,000', text: 'is the typical liability limit on a home policy. Above the limit, the owner is responsible.', source: 'iiiDogBite' },
        { value: '29%', text: 'of U.S. adults say they would stay financially secure for more than 2 years if a main earner died.', source: 'limra2026' },
      ],
      checklistTitle: 'Check your own protection in 5 minutes',
      checklist: [
        'Write down the liability limits on your car policy (for example 100/300).',
        'Write down the personal liability limit on your home, condo or renters policy.',
        'Add up what you would want to protect: savings, investments, other property and years of future income.',
        'Do you have a teen driver, a pool, a dog, a boat or a rental? Those raise the stakes.',
        'Check that every car, home and driver in your household is listed under your umbrella.',
        "Send us your policies and we'll check your coverage.",
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/en/protect/car-insurance', label: 'Hit by a driver with no insurance?', text: 'Uninsured motorist coverage, in plain words, with real Florida cases.' },
        { href: '/en/protect/home-insurance', label: 'Pools, dog bites and guest falls', text: 'Where home liability stops and why the gap matters.' },
        { href: '/en/protect/life-insurance', label: "Protect your family's income", text: 'Life insurance for the mortgage, the bills and the kids.' },
        { href: '/en/umbrella-insurance-florida-city', label: 'Get an umbrella quote', text: 'Umbrella insurance with a local agent in Florida City.' },
      ],
      faq: [
        { q: 'What is an umbrella policy, in plain words?', a: 'It is extra liability insurance. It sits on top of your car and home policies and pays after their limits run out, up to its own limit.' },
        { q: 'Does an umbrella cover me when I drive?', a: 'Usually yes. A personal umbrella sits above the liability on your car policy. In most policies it also covers family members who live with you. Check your policy for the details.' },
        { q: 'Does an umbrella pay for my own injuries?', a: 'No. An umbrella is for harm you cause to other people. For your own injuries in a crash, look at PIP and uninsured motorist coverage.' },
        { q: 'How much umbrella coverage do I need?', a: 'Start by adding up what a serious lawsuit could put at risk: savings, investments, other property and years of future income. We will help you compare that with the limits available.' },
        { q: 'Do I need to be rich to need an umbrella?', a: 'No. Families with a good income, a teen driver, a pool or a dog can have a lot at stake too. A large judgment can affect your finances for years, not only what you own today.' },
        { q: 'What does an umbrella not cover?', a: 'It depends on the policy. Umbrellas usually do not cover business activities, harm you cause on purpose or damage to your own property. We will go over the exclusions with you.' },
      ],
      ctaTitle: "How big is your gap? Let's look together.",
      ctaText:
        "Send us your car and home policies and we'll check your coverage. We'll show you your limits, what they protect, and what an umbrella would add. We call back within 1 hour during business hours.",
      disclaimer:
        'This page is general information, not legal or financial advice and not policy language. What is covered depends on your policy, its limits and its exclusions. Stories marked "Example" are made up to explain the idea. "Real case" items come from public court records linked below, and every case is different. No one can promise how a claim will turn out.',
      sources: ['caseSc1785', 'caseSc012846', 'nhtsaCost', 'iiiDogBite', 'limra2026'],
    },
    es: {
      metaTitle: 'Seguro umbrella y protección del patrimonio en Florida | M&K Agency',
      metaDesc:
        'Sus pólizas de auto y casa tienen límite. Un caso real en Florida: $100,000 de cobertura y una sentencia de $8.47 millones. Cómo el umbrella protege lo suyo.',
      tab: 'Umbrella y patrimonio',
      kicker: 'Seguro umbrella · Protección del patrimonio',
      h1: 'Proteja lo que ha construido de un solo mal día',
      sub: 'Una demanda, una muerte o una incapacidad pueden acabar con años de ahorros en pocos meses. Aquí le explicamos, en palabras simples, cómo las familias protegen su ingreso, sus ahorros y el futuro de sus hijos.',
      heroFigure: 'umbrella-layers',
      keyTitle: 'En pocas palabras',
      key: [
        'Sus pólizas de auto y casa pagan solo hasta sus **límites de responsabilidad**. Si un jurado decide que usted debe más, el resto le toca a usted.',
        'En un caso real en Florida, un conductor con una póliza de **$100,000** quedó con una sentencia de **$8.47 millones**.',
        'Una **póliza umbrella** agrega una capa extra, por ejemplo de $1 millón, encima de la responsabilidad de su auto y su casa.',
        'Proteger el patrimonio tiene tres partes: **demandas** (umbrella), **muerte** (seguro de vida) e **ingreso perdido** (un plan para cuando no pueda trabajar).',
      ],
      sections: [
        {
          id: 'how',
          h2: 'Cómo funciona el umbrella',
          figure: 'umbrella-layers',
          blocks: [
            { type: 'p', text: 'Piense en la responsabilidad de su auto y su casa como el primer piso. El umbrella es un segundo piso encima.' },
            {
              type: 'ol',
              items: [
                'Pasa algo grave: un choque que usted causa, un invitado que se lesiona en su casa, una mordida de perro.',
                'Primero paga su póliza de auto o de casa, hasta su límite.',
                'Si el reclamo es mayor, el umbrella paga el resto, hasta su propio límite.',
              ],
            },
            { type: 'p', text: 'La mayoría de las pólizas umbrella piden que usted tenga ciertos límites de responsabilidad en su auto y su casa primero. Muchas también ayudan a pagar su defensa legal. Los detalles dependen de la póliza, así que revisamos la suya con usted.' },
          ],
        },
        {
          id: 'case',
          h2: 'Un caso real en Florida: $100,000 de cobertura y una sentencia de $8.47 millones',
          figure: 'limit-vs-verdict',
          blocks: [
            { type: 'p', text: 'En agosto de 2006, en el condado de Palm Beach, un conductor causó un choque en el que murió un hombre de 51 años, esposo y padre de tres hijos. El conductor tenía un seguro de auto con un límite de responsabilidad de $100,000.' },
            { type: 'p', text: 'Un jurado encontró al conductor 100% culpable y otorgó $8.47 millones. La sentencia se dictó contra el conductor por el monto total. Años después, el caso llegó a la Corte Suprema de Florida por la forma en que se había manejado el reclamo.' },
            { type: 'p', text: 'No lo contamos para asustar a nadie. Lo contamos porque la diferencia entre $100,000 y $8.47 millones es real, y justo para ese tipo de hueco existe la póliza umbrella.' },
          ],
        },
        {
          id: 'who',
          h2: '¿Quién debería pensar en un umbrella?',
          blocks: [
            {
              type: 'ul',
              items: [
                'Tiene casa propia, ahorros o inversiones.',
                'Tiene un hijo adolescente que maneja.',
                'Tiene piscina, trampolín o perro.',
                'Renta una casa o un cuarto.',
                'Tiene un bote.',
                'Gana un buen sueldo, así que sus sueldos futuros valen mucho.',
              ],
            },
          ],
          stories: [
            {
              title: 'Ejemplo: la conductora nueva',
              steps: [
                'Sofía tiene 17 años y acaba de sacar su licencia.',
                'Mira el teléfono un segundo y atropella a un hombre en bicicleta.',
                'Él pasa semanas en el hospital y no puede volver a su trabajo de mecánico.',
              ],
              ending: 'La póliza de auto de sus padres paga hasta su límite, por ejemplo $100,000. Las facturas médicas, el sueldo perdido y los ingresos futuros de él pueden ser mucho más. El umbrella agrega otra capa encima de la póliza de auto.',
            },
          ],
        },
        {
          id: 'three',
          h2: 'Proteger el patrimonio: tres cosas que pueden llevarse el dinero de una familia',
          blocks: [
            { type: 'h3', text: '1. Una demanda' },
            { type: 'p', text: 'Los límites de responsabilidad de su auto y su casa son la primera línea. El umbrella es la segunda. Vea cómo funciona en casa en nuestra [página de seguro de casa](/es/protect/home-insurance).' },
            { type: 'h3', text: '2. Una muerte' },
            { type: 'p', text: 'Si muere quien más gana, el sueldo se detiene. El [seguro de vida](/es/protect/life-insurance) puede reemplazarlo, pagar la hipoteca y ayudar con los estudios de los hijos.' },
            { type: 'h3', text: '3. Una incapacidad' },
            { type: 'p', text: 'Si no puede trabajar por meses, el PIP y el Seguro Social pueden pagar poco o nada durante mucho tiempo. Los ahorros, la [cobertura de conductor sin seguro](/es/protect/car-insurance) para choques y un buen plan ayudan a seguir pagando las cuentas.' },
          ],
        },
      ],
      casesTitle: 'Casos reales en Florida: cuando el límite queda muy por debajo del veredicto',
      casesIntro: 'Estos casos vienen de registros públicos de los tribunales. Los compartimos para mostrar lo grandes que pueden ser los reclamos graves. Cada caso es diferente.',
      cases: [
        {
          title: 'Una póliza de $100,000 y una sentencia de $8.47 millones',
          where: 'Condado de Palm Beach · Corte Suprema de Florida, 2018 (choque en 2006)',
          happened: 'Un conductor fue declarado 100% culpable de un choque en el que murió un hombre de 51 años, esposo y padre de tres hijos. El seguro de auto del conductor tenía un límite de responsabilidad de $100,000.',
          decided: 'Un jurado otorgó $8.47 millones, y la sentencia se dictó contra el conductor por el monto total. Luego el caso llegó a la Corte Suprema de Florida por la forma en que se había manejado el reclamo.',
          shows: 'Un límite de responsabilidad puede ser una parte mínima de un veredicto grave. La diferencia es una sentencia contra la persona culpable.',
          source: 'caseSc1785',
        },
        {
          title: '$10,000 por persona y cerca de $1.4 millones en veredictos',
          where: 'Condado de Hillsborough · Corte Suprema de Florida, 2004 (choque en 1990)',
          happened: 'Un carro asegurado por $10,000 por persona y $20,000 por accidente iba manejado por un conductor que había estado bebiendo. Cruzó la línea central y chocó otro carro: murió una madre y su hija pequeña quedó gravemente herida.',
          decided: 'Los jurados fijaron los daños en $911,400 por la muerte de la madre y $500,000 por las lesiones de la niña.',
          shows: 'Los límites bajos pueden dejar a los culpables frente a montos muchas veces mayores que su cobertura.',
          source: 'caseSc012846',
        },
      ],
      statsTitle: 'Los números detrás',
      stats: [
        { value: '$1.6 millones', text: 'es el costo económico promedio de por vida de una muerte en un choque en EE. UU. ($11.3 millones al contar la calidad de vida).', source: 'nhtsaCost' },
        { value: '$979,000', text: 'es el costo económico promedio por cada sobreviviente con lesiones críticas.', source: 'nhtsaCost' },
        { value: '$100,000 a $300,000', text: 'es el límite típico de responsabilidad en una póliza de casa. Por encima del límite, responde el dueño.', source: 'iiiDogBite' },
        { value: '29%', text: 'de los adultos en EE. UU. dice que seguiría estable económicamente más de 2 años si muriera quien más gana.', source: 'limra2026' },
      ],
      checklistTitle: 'Revise su protección en 5 minutos',
      checklist: [
        'Anote los límites de responsabilidad de su póliza de auto (por ejemplo 100/300).',
        'Anote el límite de responsabilidad personal de su póliza de casa, condominio o inquilino.',
        'Sume lo que quiere proteger: ahorros, inversiones, otras propiedades y años de ingresos futuros.',
        '¿Tiene un hijo adolescente que maneja, piscina, perro, bote o una propiedad que renta? Eso aumenta lo que está en juego.',
        'Revise que todos los carros, casas y conductores de su hogar estén incluidos en su umbrella.',
        'Envíenos sus pólizas y revisamos su cobertura.',
      ],
      relatedTitle: 'Siga leyendo',
      related: [
        { href: '/es/protect/car-insurance', label: '¿Lo chocó alguien sin seguro?', text: 'La cobertura de conductor sin seguro, en palabras simples, con casos reales de Florida.' },
        { href: '/es/protect/home-insurance', label: 'Piscinas, mordidas de perro y caídas', text: 'Dónde termina la responsabilidad de casa y por qué importa el hueco.' },
        { href: '/es/protect/life-insurance', label: 'Proteja el ingreso de su familia', text: 'Seguro de vida para la hipoteca, las cuentas y los hijos.' },
        { href: '/es/umbrella-insurance-florida-city', label: 'Cotice un umbrella', text: 'Seguro umbrella con un agente local en Florida City.' },
      ],
      faq: [
        { q: '¿Qué es una póliza umbrella, en palabras simples?', a: 'Es un seguro de responsabilidad extra. Va encima de sus pólizas de auto y casa y paga cuando se acaban sus límites, hasta su propio límite.' },
        { q: '¿El umbrella me cubre cuando manejo?', a: 'Normalmente sí. Un umbrella personal va encima de la responsabilidad de su póliza de auto. En la mayoría de las pólizas también cubre a los familiares que viven con usted. Revise los detalles de su póliza.' },
        { q: '¿El umbrella paga mis propias lesiones?', a: 'No. El umbrella es para el daño que usted le cause a otras personas. Para sus propias lesiones en un choque, vea el PIP y la cobertura de conductor sin seguro.' },
        { q: '¿Cuánta cobertura umbrella necesito?', a: 'Empiece por sumar lo que una demanda grave podría poner en riesgo: ahorros, inversiones, otras propiedades y años de ingresos futuros. Le ayudamos a compararlo con los límites disponibles.' },
        { q: '¿Hay que ser rico para necesitar un umbrella?', a: 'No. Las familias con un buen sueldo, un hijo adolescente que maneja, piscina o perro también pueden tener mucho en juego. Una sentencia grande puede afectar sus finanzas por años, no solo lo que tiene hoy.' },
        { q: '¿Qué no cubre un umbrella?', a: 'Depende de la póliza. Normalmente no cubre actividades de negocio, daños que usted cause a propósito ni daños a su propia propiedad. Revisamos las exclusiones con usted.' },
      ],
      ctaTitle: '¿Qué tan grande es su hueco? Veámoslo juntos.',
      ctaText:
        'Envíenos sus pólizas de auto y casa y revisamos su cobertura. Le mostramos sus límites, lo que protegen y lo que agregaría un umbrella. Le devolvemos la llamada en menos de 1 hora en horario de oficina.',
      disclaimer:
        'Esta página es información general, no asesoría legal ni financiera, ni lenguaje de póliza. Lo que se cubre depende de su póliza, sus límites y sus exclusiones. Las historias marcadas como "Ejemplo" son inventadas para explicar la idea. Los "casos reales" vienen de registros públicos de los tribunales enlazados abajo, y cada caso es diferente. Nadie puede prometer cómo terminará un reclamo.',
      sources: ['caseSc1785', 'caseSc012846', 'nhtsaCost', 'iiiDogBite', 'limra2026'],
    },
    ru: {
      metaTitle: 'Полис umbrella и защита капитала во Флориде | M&K Agency',
      metaDesc:
        'Полисы на машину и дом платят только до лимита. Реальное дело во Флориде: страховка на $100 000 и решение суда на $8,47 млн. Как umbrella защищает нажитое.',
      tab: 'Umbrella и капитал',
      kicker: 'Полис umbrella · Защита капитала',
      h1: 'Защитите всё, что вы построили, от одного плохого дня',
      sub: 'Судебный иск, смерть или потеря трудоспособности могут за несколько месяцев съесть сбережения многих лет. Рассказываем простыми словами, как семьи защищают свой доход, сбережения и будущее детей.',
      heroFigure: 'umbrella-layers',
      keyTitle: 'Коротко',
      key: [
        'Полисы на машину и дом платят только в пределах **лимитов ответственности**. Если присяжные решат, что вы должны больше, остальное — ваше.',
        'В реальном деле во Флориде у водителя был полис на **$100 000**, а решение суда — на **$8,47 млн**.',
        '**Полис umbrella** добавляет ещё один слой, например на $1 млн, поверх ответственности по машине и дому.',
        'Защита капитала состоит из трёх частей: **иски** (umbrella), **смерть** (страхование жизни) и **потеря дохода** (план на случай, если вы не можете работать).',
      ],
      sections: [
        {
          id: 'how',
          h2: 'Как работает umbrella',
          figure: 'umbrella-layers',
          blocks: [
            { type: 'p', text: 'Представьте, что ответственность по машине и дому — это первый этаж. Umbrella — второй этаж поверх него.' },
            {
              type: 'ol',
              items: [
                'Случается что-то серьёзное: авария по вашей вине, гость травмировался у вас дома, укус собаки.',
                'Сначала платит полис на машину или дом — в пределах своего лимита.',
                'Если претензия больше, остальное платит umbrella — в пределах своего лимита.',
              ],
            },
            { type: 'p', text: 'Большинство полисов umbrella требуют, чтобы сначала у вас были определённые лимиты ответственности по машине и дому. Многие также помогают оплатить юридическую защиту. Детали зависят от полиса, поэтому мы проверяем ваш вместе с вами.' },
          ],
        },
        {
          id: 'case',
          h2: 'Реальное дело во Флориде: страховка на $100 000 и решение суда на $8,47 млн',
          figure: 'limit-vs-verdict',
          blocks: [
            { type: 'p', text: 'В августе 2006 года в округе Палм-Бич водитель стал виновником аварии, в которой погиб 51-летний мужчина — муж и отец троих детей. У водителя была автостраховка с лимитом ответственности $100 000.' },
            { type: 'p', text: 'Присяжные признали водителя виновным на 100% и присудили $8,47 млн. Решение суда было вынесено против водителя на всю сумму. Спустя годы дело дошло до Верховного суда Флориды из-за того, как урегулировали претензию.' },
            { type: 'p', text: 'Мы рассказываем это не чтобы напугать. А потому, что разница между $100 000 и $8,47 млн — реальная, и именно для таких дыр существует полис umbrella.' },
          ],
        },
        {
          id: 'who',
          h2: 'Кому стоит подумать об umbrella?',
          blocks: [
            {
              type: 'ul',
              items: [
                'У вас есть свой дом, сбережения или инвестиции.',
                'В семье есть водитель-подросток.',
                'У вас есть бассейн, батут или собака.',
                'Вы сдаёте дом или комнату.',
                'У вас есть лодка.',
                'У вас хороший доход — значит, ваши будущие зарплаты стоят очень много.',
              ],
            },
          ],
          stories: [
            {
              title: 'Пример: начинающий водитель',
              steps: [
                'Софии 17 лет, она только что получила права.',
                'На секунду она отвлекается на телефон и сбивает мужчину на велосипеде.',
                'Он несколько недель лежит в больнице и не может вернуться на работу автомехаником.',
              ],
              ending: 'Автополис её родителей платит в пределах лимита — например, $100 000. А его лечение, потерянный заработок и будущий доход могут стоить гораздо больше. Umbrella добавляет ещё один слой поверх автополиса.',
            },
          ],
        },
        {
          id: 'three',
          h2: 'Защита капитала: три вещи, которые могут отнять у семьи деньги',
          blocks: [
            { type: 'h3', text: '1. Судебный иск' },
            { type: 'p', text: 'Лимиты ответственности по машине и дому — первая линия защиты. Umbrella — вторая. Как это работает дома, смотрите на странице [страховки дома](/ru/protect/home-insurance).' },
            { type: 'h3', text: '2. Смерть' },
            { type: 'p', text: 'Если не станет главного кормильца, зарплата прекратится. [Страхование жизни](/ru/protect/life-insurance) может заменить её, закрыть ипотеку и помочь оплатить учёбу детей.' },
            { type: 'h3', text: '3. Потеря трудоспособности' },
            { type: 'p', text: 'Если вы месяцами не можете работать, PIP и Social Security могут долго платить мало или вообще ничего. Сбережения, [покрытие UM](/ru/protect/car-insurance) на случай аварии и правильный план помогают и дальше платить по счетам.' },
          ],
        },
      ],
      casesTitle: 'Реальные дела во Флориде: когда лимит намного меньше решения суда',
      casesIntro: 'Это открытые судебные документы. Мы приводим их, чтобы показать, какими большими бывают серьёзные претензии. Каждое дело индивидуально.',
      cases: [
        {
          title: 'Полис на $100 000 и решение суда на $8,47 млн',
          where: 'Округ Палм-Бич · Верховный суд Флориды, 2018 (авария в 2006 году)',
          happened: 'Водителя признали виновным на 100% в аварии, в которой погиб 51-летний мужчина — муж и отец троих детей. Лимит ответственности в автостраховке водителя был $100 000.',
          decided: 'Присяжные присудили $8,47 млн, и решение суда было вынесено против водителя на всю сумму. Затем дело дошло до Верховного суда Флориды из-за того, как урегулировали претензию.',
          shows: 'Лимит ответственности может оказаться крошечной частью решения по серьёзному делу. Разница — это решение суда против виновника.',
          source: 'caseSc1785',
        },
        {
          title: '$10 000 на человека и около $1,4 млн по решениям присяжных',
          where: 'Округ Хилсборо · Верховный суд Флориды, 2004 (авария в 1990 году)',
          happened: 'Машиной, застрахованной на $10 000 на человека и $20 000 на аварию, управлял водитель, который перед этим выпивал. Он выехал на встречную полосу и врезался в другую машину: погибла мама, её маленькая дочь получила тяжёлые травмы.',
          decided: 'Присяжные оценили ущерб в $911 400 за гибель матери и $500 000 за травмы девочки.',
          shows: 'При низких лимитах виновники могут оказаться перед суммами, во много раз превышающими их страховку.',
          source: 'caseSc012846',
        },
      ],
      statsTitle: 'Цифры, на которых всё основано',
      stats: [
        { value: '$1,6 млн', text: '— средние экономические потери за всю жизнь от одной гибели в ДТП в США ($11,3 млн с учётом качества жизни).', source: 'nhtsaCost' },
        { value: '$979 000', text: '— средние экономические потери на каждого выжившего с критическими травмами.', source: 'nhtsaCost' },
        { value: '$100 000 – $300 000', text: '— типичный лимит ответственности в полисе на дом. Сверх лимита отвечает владелец.', source: 'iiiDogBite' },
        { value: '29%', text: 'взрослых в США уверены, что сохранили бы финансовую стабильность дольше 2 лет после смерти кормильца.', source: 'limra2026' },
      ],
      checklistTitle: 'Проверьте свою защиту за 5 минут',
      checklist: [
        'Запишите лимиты ответственности в автополисе (например, 100/300).',
        'Запишите лимит личной ответственности в полисе на дом, кондо или аренду.',
        'Сложите то, что хотите защитить: сбережения, инвестиции, другую недвижимость и годы будущего дохода.',
        'Есть водитель-подросток, бассейн, собака, лодка или сдаваемое жильё? Это повышает ставки.',
        'Проверьте, что все машины, дома и водители вашей семьи указаны в полисе umbrella.',
        'Пришлите полисы — проверим покрытие.',
      ],
      relatedTitle: 'Читайте также',
      related: [
        { href: '/ru/protect/car-insurance', label: 'В вас врезался водитель без страховки?', text: 'Покрытие UM простыми словами — и реальные дела во Флориде.' },
        { href: '/ru/protect/home-insurance', label: 'Бассейн, укусы собак, падения гостей', text: 'Где заканчивается ответственность по дому и почему важна дыра.' },
        { href: '/ru/protect/life-insurance', label: 'Защитите доход семьи', text: 'Страхование жизни: ипотека, счета и дети.' },
        { href: '/ru/umbrella-insurance-florida-city', label: 'Рассчитать umbrella', text: 'Полис umbrella с местным агентом во Флорида-Сити.' },
      ],
      faq: [
        { q: 'Что такое полис umbrella, если простыми словами?', a: 'Это дополнительная страховка ответственности. Она лежит поверх полисов на машину и дом и платит, когда их лимиты закончились, — в пределах своего лимита.' },
        { q: 'Защищает ли umbrella, когда я за рулём?', a: 'Обычно да. Личный umbrella лежит поверх ответственности по вашему автополису. В большинстве полисов он также распространяется на членов семьи, которые живут с вами. Детали проверьте в своём полисе.' },
        { q: 'Платит ли umbrella за мои собственные травмы?', a: 'Нет. Umbrella — это про вред, который вы причинили другим людям. Ваши собственные травмы в аварии покрывают PIP и UM.' },
        { q: 'Какой лимит umbrella мне нужен?', a: 'Начните с того, что может оказаться под угрозой при серьёзном иске: сбережения, инвестиции, другая недвижимость и годы будущего дохода. Мы поможем сравнить это с доступными лимитами.' },
        { q: 'Umbrella нужен только богатым?', a: 'Нет. Семьи с хорошим доходом, водителем-подростком, бассейном или собакой тоже могут многое потерять. Крупное решение суда может влиять на ваши финансы годами, а не только на то, что у вас есть сегодня.' },
        { q: 'Что umbrella не покрывает?', a: 'Зависит от полиса. Обычно umbrella не покрывает предпринимательскую деятельность, умышленный вред и ущерб вашему собственному имуществу. Исключения мы разберём вместе с вами.' },
      ],
      ctaTitle: 'Насколько велика ваша дыра? Давайте посмотрим вместе.',
      ctaText:
        'Пришлите полисы на машину и дом — проверим покрытие. Покажем ваши лимиты, что они защищают и что добавит umbrella. В рабочее время перезваниваем в течение часа.',
      disclaimer:
        'Эта страница — общая информация, а не юридическая или финансовая консультация и не текст полиса. Что покрывается, зависит от вашего полиса, его лимитов и исключений. Истории с пометкой «Пример» придуманы, чтобы объяснить идею. «Реальные дела» взяты из открытых судебных документов по ссылкам ниже, и каждое дело индивидуально. Никто не может обещать, чем закончится страховой случай.',
      sources: ['caseSc1785', 'caseSc012846', 'nhtsaCost', 'iiiDogBite', 'limra2026'],
    },
  },
};
