import type { BlogPost } from '../types';

// Facts checked 2026-10-04: s. 324.021(9)(b)3 and (9)(c)1 F.S. (2026) on flsenate.gov
// (natural-person owner who loans a vehicle to a permissive user: liable up to $100,000 per
// person / $300,000 per incident bodily injury and $50,000 property damage; plus up to an
// additional $500,000 in economic damages if the user is uninsured or has under $500,000
// combined limits, reduced by recoveries; own negligence not limited; caps don't apply to
// vehicles used for commercial activity in the owner's ordinary course of business), Florida
// House staff analysis of HB 355 (2019), posted on flsenate.gov (dangerous instrumentality
// doctrine: court-created, owner strictly liable for permissive user's negligence, Southern
// Cotton Oil v. Anderson (1920), extended to golf carts and other motorized vehicles;
// negligent entrustment is separate). Umbrella content kept general. No insurer, no prices.
const S = {
  s324021: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021',
  hb355: 'https://www.flsenate.gov/Session/Bill/2019/355/Analyses/h0355e.JDC.PDF',
  ins: 'https://www.flhsmv.gov/insurance/',
  s32732: 'https://www.flsenate.gov/Laws/Statutes/2026/327.32',
};

export const post: BlogPost = {
  slug: 'lending-your-car-florida-owner-liability',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Lending Your Car in Florida: The Dangerous Instrumentality Rule and Owner Liability',
      metaTitle: 'Lending Your Car in Florida: Owner Liability | M&K Agency',
      description: 'Are you liable if a friend crashes your car in Florida? The dangerous instrumentality doctrine, the owner liability caps in s. 324.021(9)(b)3, what to check.',
      excerpt: 'In Florida, the owner of a car can be held responsible when someone else crashes it. What the dangerous instrumentality doctrine means, the limits the law sets, and the questions to ask before you hand over the keys.',
      category: 'Umbrella insurance',
      body: [
        { type: 'p', text: 'A friend needs a ride to the airport, a cousin is in town, your adult son borrows the car for the weekend. In most of daily life lending a car feels like a favor. Under Florida law, it also makes you **responsible** if the driver causes a crash.' },
        { type: 'h2', text: 'The dangerous instrumentality doctrine' },
        { type: 'p', text: 'Florida courts treat a motor vehicle as a **dangerous instrumentality**. A Florida House staff analysis summarizes the court-created rule this way: when an owner lets someone else use it, the owner is **liable for damages caused by that person’s negligence**, and whether the owner was at fault is irrelevant ([HB 355 staff analysis, 2019](' + S.hb355 + ')). The Florida Supreme Court applied the doctrine to cars in **1920**, and courts have since extended it to trucks, buses, golf carts and other motorized vehicles. The same analysis describes the doctrine as unique to Florida.' },
        { type: 'h2', text: 'What the law caps, and what it does not' },
        { type: 'p', text: 'The Legislature has limited this liability for **individuals** who lend a car. Under [s. 324.021(9)(b)3](' + S.s324021 + '), an owner who is a natural person and lends the vehicle to a permissive user is liable for the driver’s operation only up to:' },
        { type: 'ul', items: [
          '**$100,000 per person** and **$300,000 per incident** for bodily injury, and **$50,000** for property damage.',
          'Plus up to **$500,000 more in economic damages** if the driver is **uninsured** or carries less than $500,000 in combined liability limits. That extra amount is reduced by whatever is recovered from the driver and the driver’s insurance.',
        ] },
        { type: 'p', text: 'Three limits on the limit:' },
        { type: 'ul', items: [
          '**Your own negligence is not capped.** The statute says so directly. Lending your car to someone you know is unlicensed or impaired is a separate issue, which courts call negligent entrustment.',
          '**Business vehicles are different.** The caps do not apply to an owner whose vehicles are used for commercial activity in the ordinary course of business ([s. 324.021(9)(c)1](' + S.s324021 + ')).',
          'The extra $500,000 tier applies only to **economic damages** (such as medical bills and lost wages). For a specific case, read the statute or ask an attorney.',
        ] },
        { type: 'h2', text: 'Why the numbers matter for your insurance' },
        { type: 'p', text: 'Compare those figures with your own policy. To register a car, Florida requires PIP and property damage liability ([FLHSMV](' + S.ins + ')); bodily injury liability is not part of that basic requirement, so a driver may carry low limits or none at all. If the driver you lend to has low limits or no insurance, the gap between their coverage and your possible exposure can be large.' },
        { type: 'ol', items: [
          'Check your **bodily injury and property damage liability limits** on your declarations page.',
          'Ask your agent how your policy treats **drivers you allow to use the car**, and whether anyone who uses it regularly should be listed.',
          'Ask whether the driver has **their own auto insurance**, and what limits.',
          'Consider whether a **personal umbrella policy** fits your situation. An umbrella adds liability coverage above your auto and home limits, subject to its terms, and usually requires certain underlying limits.',
        ] },
        { type: 'p', text: 'Boats and jet skis follow a different rule: liability for careless operation generally stays with the operator unless the owner is driving or on board ([s. 327.32](' + S.s32732 + ')). See our article on [letting guests drive a jet ski](/en/blog/jet-ski-rental-guest-drivers-florida). For how an umbrella works, see our [umbrella insurance page](/en/umbrella-insurance-florida-city).' },
        { type: 'callout', title: 'Want to check your limits?', text: '[Request a quote](/en/quote) or send us your declarations page. A licensed agent will go over your liability limits with you. This is general information, not legal advice; how liability applies depends on the facts and the policy.' },
      ],
      faq: [
        { q: 'Am I liable if someone else crashes my car in Florida?', a: 'Often, yes. Under the dangerous instrumentality doctrine, the owner can be held liable for a permissive driver’s negligence. For individual owners, s. 324.021(9)(b)3 limits that liability to set amounts, but not for the owner’s own negligence.' },
        { q: 'What are the owner liability limits when I lend my car?', a: 'Up to $100,000 per person and $300,000 per incident for bodily injury and $50,000 for property damage, plus up to $500,000 more in economic damages if the driver is uninsured or has less than $500,000 in combined limits.' },
        { q: 'Does the cap apply to my work truck?', a: 'Not if the vehicle is used for commercial activity in the ordinary course of your business. The statute excludes those owners from the caps.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 324.021 (2026): definitions; owner and owner/lessor liability, subsection (9)', url: S.s324021 },
        { label: 'Florida House of Representatives: HB 355 (2019) staff analysis, dangerous instrumentality doctrine (PDF on flsenate.gov)', url: S.hb355 },
        { label: 'FLHSMV: Florida Insurance Requirements', url: S.ins },
        { label: 'Florida Statutes s. 327.32 (2026): vessel declared dangerous instrumentality; civil liability', url: S.s32732 },
      ],
    },
    es: {
      title: 'Prestar su carro en Florida: la doctrina del instrumento peligroso y la responsabilidad del dueño',
      metaTitle: 'Prestar su carro en Florida: responsabilidad | M&K Agency',
      description: '¿Responde usted si un amigo choca su carro en Florida? La doctrina del instrumento peligroso, los límites de la sección 324.021(9)(b)3 y qué revisar.',
      excerpt: 'En Florida, el dueño de un carro puede tener que responder cuando otra persona lo choca. Qué significa la doctrina del instrumento peligroso, qué límites fija la ley y qué preguntar antes de entregar las llaves.',
      category: 'Seguro sombrilla',
      body: [
        { type: 'p', text: 'Un amigo necesita ir al aeropuerto, llega un primo de visita, su hijo mayor se lleva el carro el fin de semana. En el día a día, prestar el carro parece un favor. Para la ley de Florida, también lo hace **responsable** a usted si el conductor causa un accidente.' },
        { type: 'h2', text: 'La doctrina del instrumento peligroso' },
        { type: 'p', text: 'Los tribunales de Florida consideran el vehículo de motor un **instrumento peligroso** (dangerous instrumentality). Un análisis del personal de la Cámara de Representantes de Florida resume así la regla creada por los tribunales: cuando el dueño deja que otra persona lo use, el dueño **responde por los daños causados por la negligencia de esa persona**, y no importa si el dueño tuvo culpa ([análisis de HB 355, 2019](' + S.hb355 + ')). La Corte Suprema de Florida aplicó la doctrina a los carros en **1920**, y desde entonces los tribunales la han extendido a camiones, autobuses, carritos de golf y otros vehículos motorizados. El mismo análisis la describe como algo propio de Florida.' },
        { type: 'h2', text: 'Qué limita la ley y qué no' },
        { type: 'p', text: 'La Legislatura limitó esta responsabilidad para las **personas** que prestan su carro. Según la [sección 324.021(9)(b)3](' + S.s324021 + '), el dueño que es persona natural y presta el vehículo a alguien con su permiso responde por la forma de manejar de esa persona solo hasta:' },
        { type: 'ul', items: [
          '**$100,000 por persona** y **$300,000 por incidente** por lesiones corporales, y **$50,000** por daños a la propiedad.',
          'Más hasta **$500,000 adicionales en daños económicos** si el conductor **no tiene seguro** o tiene menos de $500,000 en límites combinados de responsabilidad. Esa cantidad adicional se reduce con lo que se recupere del conductor y de su seguro.',
        ] },
        { type: 'p', text: 'Tres límites a ese límite:' },
        { type: 'ul', items: [
          '**Su propia negligencia no tiene tope.** La ley lo dice expresamente. Prestarle el carro a alguien que usted sabe que no tiene licencia o está tomado es otro asunto, que los tribunales llaman entrega negligente (negligent entrustment).',
          '**Los vehículos de negocio son distintos.** Los topes no aplican al dueño cuyos vehículos se usan en una actividad comercial dentro del curso normal de su negocio ([s. 324.021(9)(c)1](' + S.s324021 + ')).',
          'El tramo adicional de $500,000 es solo para **daños económicos** (como gastos médicos y salarios perdidos). Para un caso concreto, lea la ley o consulte con un abogado.',
        ] },
        { type: 'h2', text: 'Por qué estos números importan para su seguro' },
        { type: 'p', text: 'Compare esas cifras con su póliza. Para registrar un carro, Florida exige PIP y responsabilidad por daños a la propiedad ([FLHSMV](' + S.ins + ')); la responsabilidad por lesiones corporales no forma parte de ese mínimo, así que un conductor puede tener límites bajos o ninguno. Si la persona a quien le presta el carro tiene límites bajos o no tiene seguro, la diferencia entre su cobertura y lo que a usted le podrían reclamar puede ser grande.' },
        { type: 'ol', items: [
          'Revise sus **límites de responsabilidad por lesiones y por daños a la propiedad** en la página de declaraciones.',
          'Pregúntele a su agente cómo trata su póliza a los **conductores a quienes usted les presta el carro**, y si alguien que lo usa con frecuencia debe estar incluido.',
          'Pregunte si el conductor tiene **su propio seguro de auto** y con qué límites.',
          'Piense si una **póliza sombrilla personal** le conviene. Una sombrilla agrega cobertura de responsabilidad por encima de sus límites de auto y casa, según sus términos, y normalmente exige ciertos límites en las pólizas de base.',
        ] },
        { type: 'p', text: 'Los botes y las motos de agua siguen otra regla: la responsabilidad por manejo descuidado, por lo general, recae en quien maneja, salvo que el dueño esté manejando o vaya a bordo ([s. 327.32](' + S.s32732 + ')). Vea nuestro artículo sobre [dejar que los invitados manejen una moto de agua](/es/blog/jet-ski-rental-guest-drivers-florida). Para saber cómo funciona una sombrilla, visite nuestra página de [seguro sombrilla](/es/umbrella-insurance-florida-city).' },
        { type: 'callout', title: '¿Quiere revisar sus límites?', text: '[Pida una cotización](/es/quote) o envíenos su página de declaraciones. Un agente con licencia revisará con usted sus límites de responsabilidad. Esto es información general, no asesoría legal; cómo se aplica la responsabilidad depende de los hechos y de la póliza.' },
      ],
      faq: [
        { q: '¿Respondo yo si otra persona choca mi carro en Florida?', a: 'Muchas veces, sí. Según la doctrina del instrumento peligroso, el dueño puede responder por la negligencia de quien maneja con su permiso. Para los dueños que son personas, la sección 324.021(9)(b)3 limita esa responsabilidad a ciertas cantidades, pero no la que viene de la propia negligencia del dueño.' },
        { q: '¿Cuáles son los límites para el dueño que presta su carro?', a: 'Hasta $100,000 por persona y $300,000 por incidente por lesiones corporales y $50,000 por daños a la propiedad, más hasta $500,000 adicionales en daños económicos si el conductor no tiene seguro o tiene menos de $500,000 en límites combinados.' },
        { q: '¿El tope aplica a mi camioneta de trabajo?', a: 'No, si el vehículo se usa en una actividad comercial dentro del curso normal de su negocio. La ley excluye a esos dueños de los topes.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 324.021 (2026): definiciones; responsabilidad del dueño y del arrendador, subsección (9) (en inglés)', url: S.s324021 },
        { label: 'Cámara de Representantes de Florida: análisis de HB 355 (2019), doctrina del instrumento peligroso (PDF en flsenate.gov, en inglés)', url: S.hb355 },
        { label: 'FLHSMV: requisitos de seguro en Florida', url: S.ins },
        { label: 'Estatutos de Florida, sección 327.32 (2026): embarcaciones como instrumento peligroso; responsabilidad civil (en inglés)', url: S.s32732 },
      ],
    },
    ru: {
      title: 'Дали машину другу во Флориде? Доктрина «опасного инструмента» и ответственность владельца',
      metaTitle: 'Дали машину другу во Флориде: ответственность | M&K Agency',
      description: 'Отвечаете ли вы, если друг разбил вашу машину во Флориде? Доктрина dangerous instrumentality, лимиты по ст. 324.021(9)(b)3 и что проверить в полисе.',
      excerpt: 'Во Флориде владелец машины может отвечать за аварию, которую устроил другой водитель. Что такое доктрина «опасного инструмента», какие лимиты устанавливает закон и что спросить, прежде чем отдать ключи.',
      category: 'Зонтичное страхование',
      body: [
        { type: 'p', text: 'Другу нужно в аэропорт, приехал родственник, взрослый сын берёт машину на выходные. В обычной жизни одолжить машину — это просто помочь. По закону Флориды это ещё и делает вас **ответственным**, если водитель попадёт в аварию по своей вине.' },
        { type: 'h2', text: 'Доктрина «опасного инструмента»' },
        { type: 'p', text: 'Суды Флориды считают автомобиль **опасным инструментом** (dangerous instrumentality). В аналитической записке аппарата Палаты представителей Флориды это созданное судами правило описано так: если владелец разрешает другому человеку пользоваться машиной, владелец **отвечает за ущерб, причинённый по небрежности этого человека**, и не важно, был ли сам владелец виноват ([записка по HB 355, 2019](' + S.hb355 + ')). Верховный суд Флориды применил доктрину к автомобилям ещё в **1920 году**, а потом суды распространили её на грузовики, автобусы, гольф-кары и другую моторную технику. В той же записке сказано, что такая доктрина есть только во Флориде.' },
        { type: 'h2', text: 'Что закон ограничивает, а что нет' },
        { type: 'p', text: 'Законодатели ограничили эту ответственность для **частных лиц**, которые одалживают машину. По [ст. 324.021(9)(b)3](' + S.s324021 + ') владелец — физическое лицо, давший машину водителю со своего разрешения, отвечает за его вождение только в пределах:' },
        { type: 'ul', items: [
          '**$100,000 на человека** и **$300,000 на происшествие** по травмам и **$50,000** по ущербу имуществу.',
          'Плюс до **$500,000 сверху за экономический ущерб**, если у водителя **нет страховки** или его общие лимиты ответственности меньше $500,000. Эта дополнительная сумма уменьшается на всё, что удалось получить с водителя и его страховой.',
        ] },
        { type: 'p', text: 'Три оговорки к этим лимитам:' },
        { type: 'ul', items: [
          '**За собственную небрежность лимита нет.** Это прямо сказано в законе. Если вы дали машину человеку, про которого знали, что у него нет прав или он пьян, — это отдельная история, суды называют её negligent entrustment.',
          '**Рабочие машины — другое дело.** Лимиты не применяются к владельцу, чьи машины используются в коммерческой деятельности в рамках обычной работы бизнеса ([ст. 324.021(9)(c)1](' + S.s324021 + ')).',
          'Дополнительные $500,000 касаются только **экономического ущерба** (например, счетов за лечение и потерянного заработка). В конкретной ситуации читайте закон или консультируйтесь с адвокатом.',
        ] },
        { type: 'h2', text: 'Почему эти цифры важны для вашей страховки' },
        { type: 'p', text: 'Сравните эти суммы со своим полисом. Для регистрации машины Флорида требует PIP и ответственность за ущерб имуществу ([FLHSMV](' + S.ins + ')); ответственность по травмам в этот минимум не входит, поэтому у водителя могут быть низкие лимиты или этого покрытия нет вовсе. Если у того, кому вы даёте машину, низкие лимиты или нет страховки, разница между его покрытием и тем, что могут потребовать с вас, может быть большой.' },
        { type: 'ol', items: [
          'Проверьте свои **лимиты ответственности по травмам и по ущербу имуществу** на декларационной странице.',
          'Спросите агента, как ваш полис относится к **водителям, которым вы разрешаете ездить**, и нужно ли вписать в полис того, кто ездит регулярно.',
          'Узнайте, есть ли у водителя **своя автостраховка** и с какими лимитами.',
          'Подумайте, подходит ли вам **личный зонтичный полис (umbrella)**. Он добавляет покрытие ответственности сверх лимитов по авто и дому, на своих условиях, и обычно требует определённых лимитов в основных полисах.',
        ] },
        { type: 'p', text: 'Для лодок и гидроциклов правило другое: за неосторожное управление, как правило, отвечает тот, кто управляет, если только владелец сам не за рулём и не находится на борту ([ст. 327.32](' + S.s32732 + ')). Читайте статью о том, [как давать гостям покататься на гидроцикле](/ru/blog/jet-ski-rental-guest-drivers-florida). Как работает зонтичный полис, рассказано на странице о [зонтичном страховании](/ru/umbrella-insurance-florida-city).' },
        { type: 'callout', title: 'Хотите проверить свои лимиты?', text: '[Оставьте заявку на расчёт](/ru/quote) или пришлите декларационную страницу. Лицензированный агент разберёт с вами лимиты ответственности. Это общая информация, а не юридическая консультация; как применяется ответственность, зависит от обстоятельств и полиса.' },
      ],
      faq: [
        { q: 'Отвечаю ли я, если мою машину разбил другой водитель?', a: 'Часто да. По доктрине «опасного инструмента» владелец может отвечать за небрежность водителя, которому разрешил ездить. Для владельцев — частных лиц ст. 324.021(9)(b)3 ограничивает эту ответственность определёнными суммами, но не ответственность за собственную небрежность владельца.' },
        { q: 'Какие лимиты ответственности у владельца, который одолжил машину?', a: 'До $100,000 на человека и $300,000 на происшествие по травмам и $50,000 по ущербу имуществу, плюс до $500,000 за экономический ущерб, если у водителя нет страховки или его общие лимиты меньше $500,000.' },
        { q: 'Действуют ли эти лимиты для рабочей машины?', a: 'Нет, если машина используется в коммерческой деятельности в рамках обычной работы вашего бизнеса. Закон исключает таких владельцев из-под лимитов.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 324.021 (2026): определения; ответственность владельца и арендодателя, пункт (9) (на английском)', url: S.s324021 },
        { label: 'Палата представителей Флориды: аналитическая записка по HB 355 (2019), доктрина dangerous instrumentality (PDF на flsenate.gov, на английском)', url: S.hb355 },
        { label: 'FLHSMV: требования к страховке во Флориде (на английском)', url: S.ins },
        { label: 'Законы Флориды, ст. 327.32 (2026): судно как опасный инструмент, гражданская ответственность (на английском)', url: S.s32732 },
      ],
    },
  },
};
