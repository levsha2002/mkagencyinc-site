import type { TopicPage } from './types';

// Home tab: personal liability at home (pool, dog bite, guest fall) and the
// gap above typical limits. Figures: III dog-bite page (2025 data, typical
// $100k–$300k limits), Florida DOH drowning page. No carrier names.
export const home: TopicPage = {
  slug: 'home-insurance',
  leadSource: 'learn-home',
  leadType: 'Home',
  published: '2026-10-03',
  modified: '2026-10-03',
  t: {
    en: {
      metaTitle: 'Home Liability in Florida: Pools, Dog Bites, Falls | M&K Agency',
      metaDesc:
        'If someone is hurt at your home, your policy pays only up to its limit. Florida dog-bite and pool facts, simple pictures and how to protect your savings.',
      tab: 'Home insurance',
      kicker: 'Home insurance · Liability at home',
      h1: 'If someone gets hurt at your home, is your family protected?',
      sub: 'Most people buy home insurance for hurricanes and fires. The same policy also protects you if a guest is hurt at your house. Here is how that works in plain words, and where the gaps are.',
      heroFigure: 'home-liability',
      keyTitle: 'The short version',
      key: [
        'Home insurance has a part called **personal liability**. It can pay if someone is hurt at your home and you are found responsible, up to a limit.',
        'That limit is often **$100,000 to $300,000**. If a claim is bigger, the rest can fall on you.',
        'Florida had the **2nd most dog-bite claims** in the U.S. in 2025: 2,347 claims, about $62,375 each on average.',
        'In Florida, drowning is the leading cause of accidental death for children ages 1 to 4, and home pools are where most children are likely to drown.',
        'An **umbrella policy** adds an extra layer of liability on top of your home and car policies.',
      ],
      sections: [
        {
          id: 'how',
          h2: 'How liability on your home policy works',
          blocks: [
            { type: 'p', text: 'Think of your home policy as having two jobs. One job is your house and your things. The other job is **you**. If someone is hurt at your place and you are responsible, the liability part can help pay.' },
            { type: 'p', text: "It can help pay the other person's medical bills and lost pay. In most policies it also pays for your legal defense if they file a claim against you. It pays only up to the limit on your policy." },
            { type: 'p', text: 'Many policies also have a small **medical payments to others** part. It pays small medical bills for a hurt guest, no matter who was at fault.' },
          ],
        },
        {
          id: 'stories',
          h2: 'Three everyday stories',
          figure: 'home-liability',
          blocks: [{ type: 'p', text: 'None of these people did anything unusual. That is the point: most claims start on a normal day.' }],
          stories: [
            {
              title: 'Example: the pool party',
              steps: [
                'Your kids invite friends over to swim on a Saturday.',
                "A guest's child slips on the pool deck and hits his head. He spends days in the hospital.",
                'His parents miss work to stay with him. The family makes a claim against you for the bills and the lost pay.',
              ],
              ending: 'Your home liability can help pay, up to its limit. If the claim is bigger, the rest is on you, unless you have an umbrella policy.',
            },
            {
              title: 'Example: the friendly dog',
              steps: [
                'Your dog has never bitten anyone.',
                'One day a delivery driver opens the gate, and the dog bites his hand.',
                "He needs surgery and can't work for two months.",
              ],
              ending: 'Dog bites are one of the most common home liability claims. Some insurers will not cover certain breeds, so tell us about every dog in your home.',
            },
            {
              title: 'Example: the wet steps',
              steps: [
                'Your neighbor, a 60-year-old electrician, comes over for a barbecue.',
                'He slips on the wet patio steps and breaks his hip.',
                "He can't work for months and may never climb a ladder again.",
              ],
              ending: 'Now the claim is not only medical bills. It is also his lost paychecks and the money he would have earned in the future. That is how one fall can grow bigger than a $100,000 limit.',
            },
          ],
        },
        {
          id: 'gap',
          h2: 'Where the gap is',
          blocks: [
            { type: 'p', text: 'The Insurance Information Institute says home liability limits are typically $100,000 to $300,000. If a claim goes over the limit, the owner is responsible for the rest.' },
            { type: 'p', text: 'Serious injuries can cost much more than that. A real Florida case shows how far apart the numbers can be: a $100,000 policy and an $8.47 million verdict. Read it on our [Umbrella & wealth protection page](/en/protect/umbrella-insurance).' },
            { type: 'callout', title: 'What is at stake', text: 'Your savings, your investments, a rental property or your business, and your peace of mind. An umbrella policy adds an extra layer, for example $1 million, above your home and car limits.' },
          ],
        },
        {
          id: 'house',
          h2: 'And the house itself?',
          blocks: [
            { type: 'p', text: "The part of your policy for the house (dwelling coverage) should be enough to rebuild it at today's prices, not what you paid for it. Building costs change, so check it every year." },
            { type: 'p', text: 'A regular home policy does not cover flood. Flood needs its own policy. Ask us if you are not sure what you have.' },
          ],
        },
      ],
      statsTitle: 'The numbers behind it',
      stats: [
        { value: '2,347', text: 'dog-bite claims in Florida in 2025, the 2nd most of any state.', source: 'iiiDogBite' },
        { value: '$62,375', text: 'was the average dog-bite claim in Florida in 2025. The U.S. average was $65,450.', source: 'iiiDogBite' },
        { value: '$100,000 to $300,000', text: 'is the typical liability limit on a home or renters policy. Above the limit, the owner is responsible.', source: 'iiiDogBite' },
        { value: '#1', text: 'Drowning is the leading cause of accidental death for Florida children ages 1 to 4. Home pools are where most children are likely to drown.', source: 'fdohDrowning' },
      ],
      checklistTitle: 'Check your own policy in 2 minutes',
      checklist: [
        'On the first page of your home policy, find **Personal Liability** (often called Coverage E). Write down the limit.',
        'Find **Medical Payments to Others** (often Coverage F).',
        'Do you have a pool, a trampoline, a dog, a boat or a home you rent out? Tell your agent. Some of these can change what is covered.',
        'Do you have savings, a teen driver or a business? Ask about an umbrella policy.',
        "Check that the dwelling limit is enough to rebuild your home at today's prices.",
        "Not sure? Send us your policy and we'll check your coverage.",
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/en/protect/umbrella-insurance', label: 'Umbrella & wealth protection', text: 'An extra layer above your home and car limits, and a real Florida case that shows why.' },
        { href: '/en/protect/life-insurance', label: 'Who pays the mortgage if you are gone?', text: 'How life insurance can keep your family in the home.' },
        { href: '/en/protect/car-insurance', label: 'Hit by a driver with no insurance?', text: 'What uninsured motorist coverage is, in plain words.' },
        { href: '/en/homeowners-insurance-florida-city', label: 'Home insurance with a personal agent', text: 'A local agent who helps you choose limits and stays with you at claim time.' },
      ],
      faq: [
        { q: 'What does home liability coverage pay for?', a: "If someone is hurt at your home, or you accidentally damage someone else's property, and you are responsible, it can help pay their medical bills, lost pay and other damages, plus your legal defense in most policies. It pays up to your limit." },
        { q: 'Does my home insurance cover my dog?', a: 'Home and renters policies typically cover dog-bite liability up to the limit. Some insurers will not cover certain breeds, and some decide case by case. Tell us about your dogs so we can check your policy.' },
        { q: 'Is my pool a problem for my insurance?', a: 'Injuries to guests at your pool are usually part of your home liability coverage, up to the limit. Some insurers ask for safety features such as a fence. Tell us about your pool so there are no surprises.' },
        { q: 'What happens if a claim is bigger than my limit?', a: 'Your insurance pays up to the limit. The rest can become your personal responsibility. That is exactly what an umbrella policy is for.' },
        { q: 'Do renters and condo owners have liability coverage?', a: 'Yes, renters and condo policies usually include personal liability too. The same rule applies: it pays up to the limit you chose.' },
        { q: 'Does the liability part cover injuries to my own family?', a: 'No. Liability is for other people. Your own family is protected by health insurance, and for a lost paycheck, by planning such as life insurance.' },
      ],
      ctaTitle: 'Is your home liability limit high enough?',
      ctaText:
        "Send us your policy and we'll check your coverage. We'll show you your liability limit, what it means for your family, and whether an umbrella makes sense. We call back within 1 hour during business hours.",
      disclaimer:
        'This page is general information, not legal advice and not policy language. What is covered depends on your policy, its limits and its exclusions. Stories marked "Example" are made up to explain the idea, and the real case we mention comes from a public court record. Every situation is different, and no one can promise how a claim will turn out.',
      sources: ['iiiDogBite', 'fdohDrowning', 'caseSc1785'],
    },
    es: {
      metaTitle: 'Accidentes en casa en Florida: piscina, perro, caídas | M&K Agency',
      metaDesc:
        'Si alguien se lesiona en su casa, su póliza paga solo hasta su límite. Datos de Florida sobre mordidas y piscinas, y cómo proteger sus ahorros y su familia.',
      tab: 'Seguro de casa',
      kicker: 'Seguro de casa · Responsabilidad en el hogar',
      h1: 'Si alguien se lesiona en su casa, ¿está protegida su familia?',
      sub: 'Casi todos compran el seguro de casa pensando en huracanes e incendios. Pero la misma póliza también lo protege si un invitado se lesiona en su casa. Aquí le explicamos cómo funciona, en palabras simples, y dónde están los huecos.',
      heroFigure: 'home-liability',
      keyTitle: 'En pocas palabras',
      key: [
        'El seguro de casa tiene una parte llamada **responsabilidad personal**. Puede pagar si alguien se lesiona en su casa y usted es responsable, hasta un límite.',
        'Ese límite suele ser de **$100,000 a $300,000**. Si el reclamo es mayor, el resto puede caer en usted.',
        'Florida fue el **2.º estado con más reclamos por mordidas de perro** en 2025: 2,347 reclamos, de unos $62,375 en promedio.',
        'En Florida, ahogarse es la principal causa de muerte accidental en niños de 1 a 4 años, y las piscinas de las casas son donde es más probable que se ahoguen.',
        'Una **póliza umbrella** agrega una capa extra de responsabilidad encima de sus pólizas de casa y de auto.',
      ],
      sections: [
        {
          id: 'how',
          h2: 'Cómo funciona la responsabilidad en su póliza de casa',
          blocks: [
            { type: 'p', text: 'Piense que su póliza de casa tiene dos trabajos. Uno es su casa y sus cosas. El otro es **usted**. Si alguien se lesiona en su casa y usted es responsable, la parte de responsabilidad puede ayudar a pagar.' },
            { type: 'p', text: 'Puede ayudar a pagar los gastos médicos y el sueldo perdido de la otra persona. En la mayoría de las pólizas también paga su defensa legal si le presentan un reclamo. Paga solo hasta el límite de su póliza.' },
            { type: 'p', text: 'Muchas pólizas también tienen una parte pequeña de **pagos médicos a terceros**. Paga gastos médicos pequeños de un invitado lesionado, sin importar de quién fue la culpa.' },
          ],
        },
        {
          id: 'stories',
          h2: 'Tres historias de todos los días',
          figure: 'home-liability',
          blocks: [{ type: 'p', text: 'Ninguna de estas personas hizo nada raro. Justamente: la mayoría de los reclamos empiezan en un día normal.' }],
          stories: [
            {
              title: 'Ejemplo: la fiesta en la piscina',
              steps: [
                'Un sábado, sus hijos invitan a unos amigos a nadar.',
                'El hijo de unos invitados se resbala junto a la piscina y se golpea la cabeza. Pasa varios días en el hospital.',
                'Sus padres faltan al trabajo para estar con él. La familia le presenta a usted un reclamo por las facturas y el sueldo perdido.',
              ],
              ending: 'La responsabilidad de su póliza de casa puede ayudar a pagar, hasta su límite. Si el reclamo es mayor, el resto le toca a usted, a menos que tenga una póliza umbrella.',
            },
            {
              title: 'Ejemplo: el perro bueno',
              steps: [
                'Su perro nunca ha mordido a nadie.',
                'Un día un repartidor abre la puerta del patio y el perro le muerde la mano.',
                'Necesita cirugía y no puede trabajar durante dos meses.',
              ],
              ending: 'Las mordidas de perro son de los reclamos de responsabilidad más comunes. Algunas aseguradoras no cubren ciertas razas, así que cuéntenos de cada perro que vive en su casa.',
            },
            {
              title: 'Ejemplo: los escalones mojados',
              steps: [
                'Su vecino, un electricista de 60 años, viene a una parrillada.',
                'Se resbala en los escalones mojados del patio y se fractura la cadera.',
                'No puede trabajar durante meses y quizás nunca vuelva a subirse a una escalera.',
              ],
              ending: 'Ahora el reclamo no son solo facturas médicas. También es el sueldo que pierde y el dinero que iba a ganar en el futuro. Así es como una caída puede superar un límite de $100,000.',
            },
          ],
        },
        {
          id: 'gap',
          h2: 'Dónde está el hueco',
          blocks: [
            { type: 'p', text: 'El Insurance Information Institute dice que los límites de responsabilidad de casa suelen ser de $100,000 a $300,000. Si un reclamo pasa del límite, el dueño responde por el resto.' },
            { type: 'p', text: 'Una lesión grave puede costar mucho más. Un caso real en Florida muestra lo lejos que pueden estar las cifras: una póliza de $100,000 y un veredicto de $8.47 millones. Léalo en nuestra [página de umbrella y protección del patrimonio](/es/protect/umbrella-insurance).' },
            { type: 'callout', title: 'Lo que está en juego', text: 'Sus ahorros, sus inversiones, una propiedad que renta o su negocio, y su tranquilidad. Una póliza umbrella agrega una capa extra, por ejemplo de $1 millón, encima de sus límites de casa y de auto.' },
          ],
        },
        {
          id: 'house',
          h2: '¿Y la casa en sí?',
          blocks: [
            { type: 'p', text: 'La parte de su póliza para la casa (cobertura de vivienda) debe alcanzar para reconstruirla a los precios de hoy, no a lo que usted pagó por ella. Los costos de construcción cambian, así que revísela cada año.' },
            { type: 'p', text: 'Una póliza de casa normal no cubre inundaciones. Para eso se necesita una póliza aparte. Pregúntenos si no está seguro de lo que tiene.' },
          ],
        },
      ],
      statsTitle: 'Los números detrás',
      stats: [
        { value: '2,347', text: 'reclamos por mordidas de perro hubo en Florida en 2025, el 2.º estado con más reclamos.', source: 'iiiDogBite' },
        { value: '$62,375', text: 'fue el reclamo promedio por mordida de perro en Florida en 2025. El promedio nacional fue $65,450.', source: 'iiiDogBite' },
        { value: '$100,000 a $300,000', text: 'es el límite típico de responsabilidad en una póliza de casa o de inquilino. Por encima del límite, responde el dueño.', source: 'iiiDogBite' },
        { value: '#1', text: 'Ahogarse es la principal causa de muerte accidental en niños de 1 a 4 años en Florida. Las piscinas de las casas son donde es más probable que se ahoguen.', source: 'fdohDrowning' },
      ],
      checklistTitle: 'Revise su póliza en 2 minutos',
      checklist: [
        'En la primera página de su póliza de casa, busque **Personal Liability** (muchas veces se llama Coverage E). Anote el límite.',
        'Busque **Medical Payments to Others** (muchas veces Coverage F).',
        '¿Tiene piscina, trampolín, perro, bote o una casa que renta? Dígale a su agente. Algunas de estas cosas pueden cambiar lo que se cubre.',
        '¿Tiene ahorros, un hijo adolescente que maneja o un negocio? Pregunte por una póliza umbrella.',
        'Revise que el límite de vivienda alcance para reconstruir su casa a los precios de hoy.',
        '¿No está seguro? Envíenos su póliza y revisamos su cobertura.',
      ],
      relatedTitle: 'Siga leyendo',
      related: [
        { href: '/es/protect/umbrella-insurance', label: 'Umbrella y protección del patrimonio', text: 'Una capa extra encima de sus límites de casa y auto, y un caso real de Florida que muestra por qué.' },
        { href: '/es/protect/life-insurance', label: '¿Quién paga la hipoteca si usted falta?', text: 'Cómo el seguro de vida puede ayudar a que su familia se quede en la casa.' },
        { href: '/es/protect/car-insurance', label: '¿Lo chocó alguien sin seguro?', text: 'Qué es la cobertura de conductor sin seguro, en palabras simples.' },
        { href: '/es/homeowners-insurance-florida-city', label: 'Seguro de casa con un agente personal', text: 'Un agente local que le ayuda a escoger sus límites y lo acompaña cuando tiene un reclamo.' },
      ],
      faq: [
        { q: '¿Qué paga la cobertura de responsabilidad de casa?', a: 'Si alguien se lesiona en su casa, o usted daña sin querer la propiedad de otra persona, y usted es responsable, puede ayudar a pagar sus gastos médicos, su sueldo perdido y otros daños, además de su defensa legal en la mayoría de las pólizas. Paga hasta su límite.' },
        { q: '¿Mi seguro de casa cubre a mi perro?', a: 'Las pólizas de casa y de inquilino normalmente cubren la responsabilidad por mordidas hasta el límite. Algunas aseguradoras no cubren ciertas razas, y otras deciden caso por caso. Cuéntenos de sus perros para revisar su póliza.' },
        { q: '¿Mi piscina es un problema para mi seguro?', a: 'Las lesiones de invitados en su piscina normalmente entran en la responsabilidad de su póliza de casa, hasta el límite. Algunas aseguradoras piden medidas de seguridad, como una cerca. Cuéntenos de su piscina para evitar sorpresas.' },
        { q: '¿Qué pasa si el reclamo es mayor que mi límite?', a: 'Su seguro paga hasta el límite. El resto puede quedar como responsabilidad personal suya. Justo para eso existe la póliza umbrella.' },
        { q: '¿Los inquilinos y dueños de condominio tienen cobertura de responsabilidad?', a: 'Sí, las pólizas de inquilino y de condominio normalmente incluyen responsabilidad personal. La regla es la misma: paga hasta el límite que usted escogió.' },
        { q: '¿La responsabilidad cubre lesiones de mi propia familia?', a: 'No. La responsabilidad es para otras personas. A su familia la protegen el seguro médico y, para un sueldo perdido, una buena planificación como el seguro de vida.' },
      ],
      ctaTitle: '¿Su límite de responsabilidad de casa es suficiente?',
      ctaText:
        'Envíenos su póliza y revisamos su cobertura. Le mostramos su límite de responsabilidad, lo que significa para su familia y si una póliza umbrella tiene sentido. Le devolvemos la llamada en menos de 1 hora en horario de oficina.',
      disclaimer:
        'Esta página es información general, no asesoría legal ni lenguaje de póliza. Lo que se cubre depende de su póliza, sus límites y sus exclusiones. Las historias marcadas como "Ejemplo" son inventadas para explicar la idea, y el caso real que mencionamos viene de un registro público de un tribunal. Cada situación es diferente y nadie puede prometer cómo terminará un reclamo.',
      sources: ['iiiDogBite', 'fdohDrowning', 'caseSc1785'],
    },
    ru: {
      metaTitle: 'Ответственность дома во Флориде: бассейн, собака, падения | M&K Agency',
      metaDesc:
        'Если кто-то пострадал у вас дома, полис платит только до лимита. Факты Флориды об укусах собак и бассейнах и как защитить сбережения и семью.',
      tab: 'Страховка дома',
      kicker: 'Страховка дома · Ответственность перед гостями',
      h1: 'Если кто-то пострадает у вас дома, защищена ли ваша семья?',
      sub: 'Страховку дома обычно покупают из-за ураганов и пожаров. Но тот же полис защищает вас, если у вас дома пострадал гость. Объясняем простыми словами, как это работает и где бывают дыры.',
      heroFigure: 'home-liability',
      keyTitle: 'Коротко',
      key: [
        'В страховке дома есть часть, которая называется **personal liability** — личная ответственность. Она может заплатить, если кто-то пострадал у вас дома по вашей вине, в пределах лимита.',
        'Этот лимит часто составляет **от $100 000 до $300 000**. Если иск больше, остальное может лечь на вас.',
        'В 2025 году Флорида была **на 2-м месте в США по страховым случаям с укусами собак**: 2347 случаев, в среднем около $62 375 каждый.',
        'Во Флориде утопление — главная причина смерти от несчастного случая у детей от 1 до 4 лет, и чаще всего дети тонут в домашних бассейнах.',
        '**Полис umbrella** добавляет ещё один слой ответственности поверх страховки дома и машины.',
      ],
      sections: [
        {
          id: 'how',
          h2: 'Как работает ответственность в страховке дома',
          blocks: [
            { type: 'p', text: 'У полиса на дом как бы две задачи. Первая — сам дом и ваши вещи. Вторая — **вы**. Если у вас дома кто-то пострадал и виноваты вы, часть «ответственность» может помочь заплатить.' },
            { type: 'p', text: 'Она может покрыть лечение и потерянный заработок пострадавшего. В большинстве полисов она также оплачивает вашу юридическую защиту, если к вам предъявят претензию. Платит только в пределах лимита полиса.' },
            { type: 'p', text: 'Во многих полисах есть и небольшая часть **medical payments to others** — она оплачивает небольшие медицинские счета пострадавшего гостя, независимо от того, кто виноват.' },
          ],
        },
        {
          id: 'stories',
          h2: 'Три обычные истории',
          figure: 'home-liability',
          blocks: [{ type: 'p', text: 'Никто из этих людей не сделал ничего необычного. В этом и дело: большинство случаев начинается в самый обычный день.' }],
          stories: [
            {
              title: 'Пример: вечеринка у бассейна',
              steps: [
                'В субботу ваши дети позвали друзей поплавать.',
                'Сын гостей поскользнулся у бассейна и ударился головой. Несколько дней он провёл в больнице.',
                'Родители не ходили на работу, чтобы быть рядом. Семья предъявляет вам претензию за счета и потерянный заработок.',
              ],
              ending: 'Ответственность по полису на дом может помочь заплатить в пределах лимита. Если сумма больше, остальное — ваша забота, если у вас нет полиса umbrella.',
            },
            {
              title: 'Пример: добрая собака',
              steps: [
                'Ваша собака никогда никого не кусала.',
                'Однажды курьер открывает калитку, и собака кусает его за руку.',
                'Ему нужна операция, и два месяца он не может работать.',
              ],
              ending: 'Укусы собак — одна из самых частых претензий по ответственности дома. Некоторые страховые не страхуют определённые породы, поэтому расскажите нам о каждой собаке в доме.',
            },
            {
              title: 'Пример: мокрые ступеньки',
              steps: [
                'Сосед, 60-летний электрик, пришёл к вам на барбекю.',
                'Он поскользнулся на мокрых ступеньках террасы и сломал бедро.',
                'Несколько месяцев он не может работать и, возможно, уже никогда не полезет на лестницу.',
              ],
              ending: 'Теперь претензия — это не только счета врачей. Это и его потерянная зарплата, и деньги, которые он заработал бы в будущем. Вот так одно падение может обойтись дороже лимита в $100 000.',
            },
          ],
        },
        {
          id: 'gap',
          h2: 'Где дыра',
          blocks: [
            { type: 'p', text: 'По данным Insurance Information Institute, лимиты ответственности в страховке дома обычно от $100 000 до $300 000. Если претензия больше лимита, за остальное отвечает владелец.' },
            { type: 'p', text: 'Серьёзная травма может стоить гораздо больше. Реальное дело во Флориде показывает, насколько далеко могут разойтись цифры: полис на $100 000 и решение присяжных на $8,47 млн. Подробнее — на странице [Umbrella и защита капитала](/ru/protect/umbrella-insurance).' },
            { type: 'callout', title: 'Что на кону', text: 'Ваши сбережения, инвестиции, сдаваемая недвижимость или бизнес — и ваше спокойствие. Полис umbrella добавляет ещё один слой, например на $1 млн, поверх лимитов по дому и машине.' },
          ],
        },
        {
          id: 'house',
          h2: 'А сам дом?',
          blocks: [
            { type: 'p', text: 'Часть полиса на сам дом (dwelling) должна покрывать восстановление дома по сегодняшним ценам, а не ту сумму, за которую вы его купили. Стоимость строительства меняется, поэтому проверяйте её каждый год.' },
            { type: 'p', text: 'Обычная страховка дома не покрывает наводнение. Для этого нужен отдельный полис. Спросите нас, если не уверены, что у вас есть.' },
          ],
        },
      ],
      statsTitle: 'Цифры, на которых всё основано',
      stats: [
        { value: '2347', text: 'страховых случаев с укусами собак было во Флориде в 2025 году — 2-е место среди штатов.', source: 'iiiDogBite' },
        { value: '$62 375', text: '— средняя выплата за укус собаки во Флориде в 2025 году. В среднем по США — $65 450.', source: 'iiiDogBite' },
        { value: '$100 000 – $300 000', text: '— типичный лимит ответственности в полисе на дом или аренду. Сверх лимита отвечает владелец.', source: 'iiiDogBite' },
        { value: '№ 1', text: 'Утопление — главная причина смерти от несчастного случая у детей 1–4 лет во Флориде. Чаще всего дети тонут в домашних бассейнах.', source: 'fdohDrowning' },
      ],
      checklistTitle: 'Проверьте свой полис за 2 минуты',
      checklist: [
        'На первой странице полиса на дом найдите **Personal Liability** (часто это Coverage E). Запишите лимит.',
        'Найдите **Medical Payments to Others** (часто Coverage F).',
        'Есть бассейн, батут, собака, лодка или дом, который вы сдаёте? Скажите агенту. Это может влиять на покрытие.',
        'Есть сбережения, водитель-подросток или бизнес? Спросите про полис umbrella.',
        'Проверьте, хватит ли лимита на дом (dwelling), чтобы отстроить его по сегодняшним ценам.',
        'Сомневаетесь? Пришлите полис — проверим покрытие.',
      ],
      relatedTitle: 'Читайте также',
      related: [
        { href: '/ru/protect/umbrella-insurance', label: 'Umbrella и защита капитала', text: 'Дополнительный слой поверх лимитов по дому и машине — и реальное дело во Флориде, которое показывает, зачем он нужен.' },
        { href: '/ru/protect/life-insurance', label: 'Кто заплатит ипотеку, если вас не станет?', text: 'Как страхование жизни помогает семье остаться в своём доме.' },
        { href: '/ru/protect/car-insurance', label: 'В вас врезался водитель без страховки?', text: 'Что такое покрытие UM, простыми словами.' },
        { href: '/ru/homeowners-insurance-florida-city', label: 'Страховка дома с личным агентом', text: 'Местный агент поможет выбрать лимиты и будет рядом при страховом случае.' },
      ],
      faq: [
        { q: 'Что оплачивает ответственность в страховке дома?', a: 'Если кто-то пострадал у вас дома или вы случайно повредили чужое имущество и виноваты вы, она может оплатить лечение пострадавшего, его потерянный заработок и другой ущерб, а в большинстве полисов — и вашу юридическую защиту. Платит в пределах лимита.' },
        { q: 'Покрывает ли страховка дома мою собаку?', a: 'Полисы на дом и на аренду обычно покрывают ответственность за укусы в пределах лимита. Но некоторые страховые не страхуют определённые породы, а другие решают индивидуально. Расскажите нам о своих собаках — проверим полис.' },
        { q: 'Бассейн — это проблема для страховки?', a: 'Травмы гостей в вашем бассейне обычно входят в ответственность по полису на дом, в пределах лимита. Некоторые страховые требуют меры безопасности, например забор. Расскажите нам о бассейне, чтобы не было сюрпризов.' },
        { q: 'Что будет, если претензия больше моего лимита?', a: 'Страховая платит до лимита. Остальное может стать вашей личной ответственностью. Именно для этого и существует полис umbrella.' },
        { q: 'Есть ли ответственность у арендаторов и владельцев кондо?', a: 'Да, полисы для арендаторов и кондо обычно тоже включают личную ответственность. Правило то же: платит в пределах выбранного лимита.' },
        { q: 'Покрывает ли ответственность травмы моей собственной семьи?', a: 'Нет. Ответственность — это про других людей. Вашу семью защищают медицинская страховка, а от потери дохода — продуманный план, например страхование жизни.' },
      ],
      ctaTitle: 'Хватает ли вашего лимита ответственности по дому?',
      ctaText:
        'Пришлите полис — проверим покрытие. Покажем ваш лимит ответственности, что он значит для семьи и нужен ли вам umbrella. В рабочее время перезваниваем в течение часа.',
      disclaimer:
        'Эта страница — общая информация, а не юридическая консультация и не текст полиса. Что покрывается, зависит от вашего полиса, его лимитов и исключений. Истории с пометкой «Пример» придуманы, чтобы объяснить идею, а реальное дело, о котором мы говорим, взято из открытых судебных документов. Каждая ситуация индивидуальна, и никто не может обещать, чем закончится страховой случай.',
      sources: ['iiiDogBite', 'fdohDrowning', 'caseSc1785'],
    },
  },
};
