import type { BlogPost } from '../types';

// Facts re-checked 2026-11-08 against the 2026 Florida Statutes on leg.state.fl.us
// (Online Sunshine), the Florida House staff analysis of HB 355 (2019) and FLHSMV.
// Raw notes: /workspace/articles/lending-your-car-florida-owner-liability_sources.md
// and /workspace/lendingcar/.
// - s. 324.021(9)(b)3: natural-person owner who loans a motor vehicle to a permissive
//   user is liable only up to $100,000 per person / $300,000 per incident bodily injury
//   and $50,000 property damage; plus up to an additional $500,000 in economic damages
//   only if the user is uninsured or has combined PD+BI limits under $500,000, reduced
//   by amounts recovered from the user and any insurance or self-insurance covering the
//   user; own negligence is not limited.
// - s. 324.021(9)(c)1: those caps (and the short-term lessor caps in (b)2) do not apply
//   to an owner of motor vehicles used for commercial activity in the owner's ordinary
//   course of business, other than a rental company.
// - HB 355 (2019) staff analysis (h0355e.JDC, 3/22/2019): court-created dangerous
//   instrumentality doctrine; owner liable when the owner entrusts, leases or loans the
//   item and a third party negligently injures another; fault of the owner is irrelevant;
//   Southern Cotton Oil Co. v. Anderson, 86 So. 629 (1920); later extended to trucks,
//   buses, golf carts and other motorized vehicles; Florida Supreme Court has described
//   the doctrine as unique to Florida (Kraemer); negligent entrustment is a separate
//   doctrine requiring active negligence by the owner.
// - FLHSMV insurance page: PIP and PDL required to register a vehicle with at least
//   four wheels; PDL pays for damage caused by you or someone else driving your insured
//   vehicle; BIL pays for injury or death to others and is not part of the basic pair.
// - s. 327.32: vessel liability confined to the operator unless the owner is operating
//   or present in the vessel.
// Holiday-guest refresh: Thanksgiving / visitors who want to borrow the owner's car.
// No insurer named. Statutory dollar caps only. Policy treatment of listed vs permitted
// drivers is left as a question for the agent (not a statute).
const S = {
  s324021: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0324/Sections/0324.021.html',
  hb355: 'https://www.flsenate.gov/Session/Bill/2019/355/Analyses/h0355e.JDC.PDF',
  ins: 'https://www.flhsmv.gov/insurance/',
  s32732: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0327/Sections/0327.32.html',
};

export const post: BlogPost = {
  slug: 'lending-your-car-florida-owner-liability',
  datePublished: '2026-10-04',
  dateModified: '2026-11-08',
  translations: {
    en: {
      title: 'Lending Your Car in Florida: Owner Liability When Holiday Guests Borrow It',
      metaTitle: 'Lending Your Car to Holiday Guests in Florida | M&K Agency',
      description: 'Holiday guests borrowing your car in Florida can leave you liable. Owner caps under s. 324.021(9), the dangerous instrumentality rule, and what to check first.',
      ogAlt: 'Flat illustration of a Florida house, a sedan, keys with a blank tag, a suitcase and a blue shield',
      excerpt: 'Thanksgiving visitors often ask to borrow the car. In Florida, lending it can make the owner liable if the driver causes a crash. What the law caps, and what to check first.',
      category: 'Car insurance',
      body: [
        { type: 'p', text: 'Relatives flying in for Thanksgiving, a cousin staying the long weekend, a visitor who wants the car for an airport run or a store trip: lending it is a common holiday favor in South Florida. It feels like hospitality. Under Florida law, it also means you, as the owner, can be held responsible if that guest causes a crash.' },
        { type: 'h2', text: 'The dangerous instrumentality doctrine' },
        { type: 'p', text: 'Florida courts treat a motor vehicle as a **dangerous instrumentality**. A [Florida House staff analysis of HB 355 (2019)](' + S.hb355 + ') summarizes the court-created rule: the owner is financially liable when the owner entrusts, leases or loans the vehicle to someone else and that person negligently injures another. Whether the owner was at fault is irrelevant. The analysis traces the rule to the Florida Supreme Court\'s 1920 decision in **Southern Cotton Oil Company v. Anderson**, and notes that courts later extended it to trucks, buses, golf carts and other motorized vehicles. The same document cites later court language describing the doctrine as unique to Florida.' },
        { type: 'h2', text: 'What s. 324.021(9) caps — and what it does not' },
        { type: 'p', text: 'The Legislature later limited this liability for individual owners who lend a personal vehicle. Under [s. 324.021(9)(b)3](' + S.s324021 + '), an owner who is a natural person and loans a motor vehicle to a permissive user is liable for the driver\'s operation only up to:' },
        { type: 'ul', items: [
          '**$100,000 per person** and **$300,000 per incident** for bodily injury, and **$50,000** for property damage.',
          'Plus up to an additional **$500,000 in economic damages only**, if the permissive user is **uninsured** or has any insurance with limits less than $500,000 combined property damage and bodily injury liability. That extra amount is reduced by amounts actually recovered from the permissive user and from any insurance or self-insurance covering that user.',
        ] },
        { type: 'p', text: 'Three limits on those caps:' },
        { type: 'ul', items: [
          '**Your own negligence is not capped.** The statute says so directly. Lending a car to someone you know is unlicensed or impaired is a separate issue. The House analysis describes **negligent entrustment** as a different doctrine: the injured person has to show the owner was actively negligent in handing the vehicle over.',
          '**Business vehicles are different.** The caps in (9)(b)2 and 3 do not apply to an owner of motor vehicles that are used for commercial activity in the owner\'s ordinary course of business, other than a rental company ([s. 324.021(9)(c)1](' + S.s324021 + ')).',
          'The extra $500,000 tier applies only to **economic damages**, such as medical bills and lost wages. For a specific case, read the statute or speak with an attorney.',
        ] },
        { type: 'h2', text: 'What to check before you hand over the keys' },
        { type: 'p', text: 'The legal caps are only part of the picture. Before a holiday guest drives, review these points with a licensed agent — ideally before anyone arrives. To go over a Florida personal auto policy at our Florida City or Kendall offices, start on our [car insurance page](/en/car-insurance-florida-city).' },
        { type: 'ol', items: [
          'Confirm the guest has a **valid driver\'s license**. Do not hand over the keys if you know the person is unlicensed or should not be driving: your own negligence is not limited by the caps.',
          'Look at **who is listed on your auto policy**. Ask your agent how the policy treats people you allow to use the car, and whether anyone who will drive during the visit should be listed. Policies handle permitted users in different ways; there is no single rule that applies to every contract. If a teenager in your household is the one about to drive, that is a different situation — see our guide to [Florida teen driver license rules](/en/blog/teen-driver-license-rules-florida).',
          'Ask whether the guest has **their own auto insurance**, and what the liability limits are. That matters for the extra $500,000 economic-damages tier, which applies when the permissive user is uninsured or has combined limits under $500,000.',
          'Compare your own **bodily injury and property damage liability limits** with the exposure in the statute. For what Florida\'s basic PIP and property-damage requirements cover, see [Florida\'s minimum car insurance requirements](/en/blog/florida-minimum-car-insurance-requirements). For when bodily injury liability becomes mandatory, see [bodily injury liability and FR-44](/en/blog/bodily-injury-liability-fr44-florida).',
          'Review **uninsured motorist coverage** on your own policy if a crash could involve a driver with little or no insurance. See our [uninsured motorist guide](/en/blog/uninsured-motorist-coverage-florida).',
          'If the visitor is considering a **rental car** instead of borrowing yours, that arrangement follows different rules. See our article on [driving a rental car over the holidays in Florida](/en/blog/rental-car-insurance-florida-holidays).',
        ] },
        { type: 'h2', text: 'Why these figures matter next to a typical policy' },
        { type: 'p', text: '[FLHSMV](' + S.ins + ') states that before you register a vehicle with at least four wheels in Florida, you must show proof of personal injury protection (PIP) and property damage liability (PDL). PIP helps pay covered medical expenses up to the statutory limit, no matter who caused the crash. PDL pays for damage to another person\'s property caused by you or someone else driving your insured vehicle. Bodily injury liability — which pays for injury or death to others — is not part of that basic registration pair, so a guest or an owner may carry low bodily injury limits or none at all. That is why the figures in s. 324.021(9) can sit well above a minimum policy.' },
        { type: 'h2', text: 'Umbrella coverage, work vehicles and boats' },
        { type: 'p', text: 'A personal umbrella policy adds liability coverage above your auto and homeowners limits, subject to its terms, and usually requires certain underlying limits. It does not change s. 324.021(9), but it is one way to address a gap between policy limits and the exposure the statute describes. See our [umbrella insurance page](/en/umbrella-insurance-florida-city) and [how umbrella insurance works in Florida](/en/blog/umbrella-insurance-explained-florida).' },
        { type: 'p', text: 'Boats and personal watercraft follow a different rule. Under [s. 327.32](' + S.s32732 + '), liability for reckless or careless operation of a vessel is confined to the operator unless the owner is operating or present in the vessel. See [letting guests operate a jet ski](/en/blog/jet-ski-rental-guest-drivers-florida).' },
        { type: 'p', text: 'If the vehicle you are tempted to lend is used for commercial activity in the ordinary course of your business, do not assume the individual-owner caps apply.' },
        { type: 'callout', title: 'Want to review your limits before guests arrive?', text: '[Request a quote](/en/quote) or send us your declarations page. A licensed agent will go over your liability limits with you. This is general information, not legal advice; how liability applies depends on the facts and the policy.' },
      ],
      faq: [
        { q: 'Am I liable if a holiday guest crashes my car in Florida?', a: 'Often, yes. Under the dangerous instrumentality doctrine, the owner can be held liable for a permissive driver\'s negligence. For an owner who is a natural person, s. 324.021(9)(b)3 limits that liability to set amounts, but not for the owner\'s own negligence.' },
        { q: 'What are the owner liability limits when I lend my car?', a: 'Up to $100,000 per person and $300,000 per incident for bodily injury and $50,000 for property damage, plus up to an additional $500,000 in economic damages if the driver is uninsured or has combined limits under $500,000, reduced by recoveries from the driver and the driver\'s insurance.' },
        { q: 'Does the cap apply if I lend a work truck?', a: 'Not if you are an owner of motor vehicles that are used for commercial activity in your ordinary course of business, other than a rental company. The statute excludes those owners from the caps in (9)(b)2 and 3.' },
        { q: 'Should I add a visiting relative to my auto policy?', a: 'Ask your agent before the guest drives. How a policy treats a permitted user, a listed driver or an excluded driver depends on the contract. A one-time trip can be treated differently from a long visit, and a teenager in the household is a separate conversation.' },
        { q: 'If my guest has no insurance, does that change what I could owe?', a: 'It can. The additional $500,000 tier for economic damages applies if the permissive user is uninsured or has combined limits under $500,000, reduced by amounts recovered from the user and any insurance covering the user.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 324.021 (2026): definitions; owner and owner/lessor liability, subsection (9)', url: S.s324021 },
        { label: 'Florida House of Representatives: HB 355 (2019) staff analysis, dangerous instrumentality doctrine (PDF on flsenate.gov)', url: S.hb355 },
        { label: 'FLHSMV: Florida Insurance Requirements', url: S.ins },
        { label: 'Florida Statutes s. 327.32 (2026): vessel declared dangerous instrumentality; civil liability', url: S.s32732 },
      ],
    },
    es: {
      title: 'Prestar su carro en Florida: responsabilidad del dueño cuando lo usan invitados de las fiestas',
      metaTitle: 'Prestar el carro a invitados en Florida | M&K Agency',
      description: 'Si un invitado usa su carro en Florida, usted puede responder. Topes de la s. 324.021(9), el instrumento peligroso y qué revisar antes de prestarlo.',
      ogAlt: 'Ilustración de una casa en Florida, un sedan, llaves con llavero en blanco, una maleta y un escudo azul',
      excerpt: 'En Acción de Gracias y otras fiestas, los invitados suelen pedir el carro. En Florida, prestarlo puede hacer responsable al dueño si hay un accidente. Qué limita la ley y qué revisar antes.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'Llegan parientes para Acción de Gracias, un primo se queda el puente, un invitado necesita el carro para el aeropuerto o la tienda: prestarlo es un favor habitual de las fiestas en el sur de Florida. Parece hospitalidad. Para la ley de Florida, también significa que usted, como dueño, puede tener que responder si ese invitado causa un accidente.' },
        { type: 'h2', text: 'La doctrina del instrumento peligroso' },
        { type: 'p', text: 'Los tribunales de Florida consideran el vehículo de motor un **instrumento peligroso** (dangerous instrumentality). Un [análisis del personal de la Cámara de Representantes sobre HB 355 (2019)](' + S.hb355 + ') resume la regla creada por los tribunales: el dueño responde cuando confía, arrienda o presta el vehículo y la otra persona lesiona a alguien por negligencia, sin importar si el dueño tuvo culpa. El análisis sitúa la regla en la decisión de **1920** de la Corte Suprema de Florida en **Southern Cotton Oil Company v. Anderson** y señala que después se extendió a camiones, autobuses, carritos de golf y otros vehículos motorizados. El mismo documento la describe como algo propio de Florida.' },
        { type: 'h2', text: 'Qué limita la sección 324.021(9) y qué no' },
        { type: 'p', text: 'La Legislatura limitó esta responsabilidad para los dueños que son personas y prestan un vehículo particular. Según la [sección 324.021(9)(b)3](' + S.s324021 + '), el dueño que es persona natural y presta el vehículo a un usuario con su permiso responde por la forma de manejar de esa persona solo hasta:' },
        { type: 'ul', items: [
          '**$100,000 por persona** y **$300,000 por incidente** por lesiones corporales, y **$50,000** por daños a la propiedad.',
          'Más hasta **$500,000 adicionales solo en daños económicos**, si el usuario con permiso **no tiene seguro** o tiene límites combinados de daños a la propiedad y lesiones inferiores a $500,000. Esa cantidad extra se reduce con lo recuperado del usuario y de su seguro o autoaseguro.',
        ] },
        { type: 'p', text: 'Tres límites a esos topes:' },
        { type: 'ul', items: [
          '**Su propia negligencia no tiene tope.** La ley lo dice expresamente. Prestarle el carro a alguien que usted sabe que no tiene licencia o no está en condiciones de manejar es otro asunto. El análisis de la Cámara describe la **entrega negligente** (negligent entrustment) como una doctrina distinta, que exige demostrar negligencia activa al entregar el vehículo.',
          '**Los vehículos de negocio son distintos.** Los topes de (9)(b)2 y 3 no aplican al dueño de vehículos de motor que se usan en una actividad comercial dentro del curso normal de su negocio, salvo una compañía de alquiler ([s. 324.021(9)(c)1](' + S.s324021 + ')).',
          'El tramo adicional de $500,000 es solo para **daños económicos**, como gastos médicos y salarios dejados de percibir. Para un caso concreto, lea la ley o consulte con un abogado.',
        ] },
        { type: 'h2', text: 'Qué revisar antes de entregar las llaves' },
        { type: 'p', text: 'Los topes legales son solo una parte. Antes de que un invitado maneje, revise estos puntos con un agente con licencia. Para una póliza de auto en Florida City o Kendall, empiece por nuestra [página de seguro de auto](/es/car-insurance-florida-city).' },
        { type: 'ol', items: [
          'Confirme que el invitado tiene una **licencia de conducir válida**. No entregue las llaves si sabe que no tiene licencia o no debería manejar: su propia negligencia no está limitada. Si maneja con una licencia extranjera, vea nuestra guía sobre [seguro de auto con licencia extranjera en Florida](/es/blog/seguro-auto-licencia-extranjera-florida).',
          'Revise **quién aparece en su póliza de auto**. Pregunte cómo trata la póliza a quienes usted les permite usar el carro y si hay que incluir a alguien durante la visita. No hay una sola regla para todos los contratos. Si maneja un adolescente de su casa, vea las [reglas de la learner\'s license para adolescentes en Florida](/es/blog/teen-driver-license-rules-florida).',
          'Pregunte si el invitado tiene **su propio seguro de auto** y con qué límites. Eso importa para el tramo adicional de $500,000, que aplica si no tiene seguro o tiene límites combinados inferiores a $500,000.',
          'Compare sus **límites de responsabilidad por lesiones y por daños a la propiedad** con lo que describe la ley. Sobre el PIP y el PDL de base, vea los [requisitos mínimos de seguro de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements). Sobre cuándo la responsabilidad por lesiones es obligatoria, vea [responsabilidad por lesiones corporales y FR-44](/es/blog/bodily-injury-liability-fr44-florida).',
          'Revise la **cobertura de motorista sin seguro** en su póliza por si el accidente involucra a un conductor con poco seguro o ninguno. Vea nuestra [guía sobre motorista sin seguro](/es/blog/uninsured-motorist-coverage-florida).',
          'Si el visitante piensa **rentar un carro** en lugar de pedir el suyo, ese arreglo sigue otras reglas. Vea [rentar un carro en las fiestas en Florida](/es/blog/rental-car-insurance-florida-holidays).',
        ] },
        { type: 'h2', text: 'Por qué estas cifras importan frente a una póliza típica' },
        { type: 'p', text: 'El [FLHSMV](' + S.ins + ') indica que, antes de registrar en Florida un vehículo de al menos cuatro ruedas, hay que mostrar prueba de PIP y de responsabilidad por daños a la propiedad (PDL). El PIP ayuda a pagar gastos médicos cubiertos hasta el límite legal, sin importar quién causó el accidente. El PDL paga el daño a la propiedad de otra persona causado por usted o por otra persona que maneje su vehículo asegurado. La responsabilidad por lesiones corporales no forma parte de ese par básico, así que un invitado o un dueño puede tener límites bajos o no tenerla. Por eso las cifras de la s. 324.021(9) pueden quedar por encima de una póliza mínima.' },
        { type: 'h2', text: 'Póliza sombrilla, vehículos de trabajo y botes' },
        { type: 'p', text: 'Una póliza sombrilla personal agrega responsabilidad por encima de sus límites de auto y de casa, según sus términos, y suele exigir ciertos límites en las pólizas de base. No cambia la s. 324.021(9), pero puede cubrir la diferencia con la exposición que describe la ley. Vea nuestra [página de seguro sombrilla](/es/umbrella-insurance-florida-city) y [cómo funciona el seguro sombrilla en Florida](/es/blog/umbrella-insurance-explained-florida).' },
        { type: 'p', text: 'Los botes y las motos de agua siguen otra regla. Según la [sección 327.32](' + S.s32732 + '), la responsabilidad por manejo imprudente o descuidado recae en el operador, salvo que el dueño maneje o vaya a bordo. Vea [dejar que los invitados manejen una moto de agua](/es/blog/jet-ski-rental-guest-drivers-florida).' },
        { type: 'p', text: 'Si el vehículo se usa en una actividad comercial dentro del curso normal de su negocio, no asuma que aplican los topes del dueño particular.' },
        { type: 'callout', title: '¿Quiere revisar sus límites antes de que lleguen los invitados?', text: '[Pida una cotización](/es/quote) o envíenos su página de declaraciones. Un agente con licencia revisará con usted sus límites de responsabilidad. Esto es información general, no asesoría legal; la responsabilidad depende de los hechos y de la póliza.' },
      ],
      faq: [
        { q: '¿Respondo yo si un invitado de las fiestas choca mi carro en Florida?', a: 'Muchas veces, sí. Según la doctrina del instrumento peligroso, el dueño puede responder por la negligencia de quien maneja con su permiso. Para el dueño que es persona natural, la s. 324.021(9)(b)3 limita esa responsabilidad a ciertas cantidades, pero no la de su propia negligencia.' },
        { q: '¿Cuáles son los límites para el dueño que presta su carro?', a: 'Hasta $100,000 por persona y $300,000 por incidente por lesiones y $50,000 por daños a la propiedad, más hasta $500,000 adicionales en daños económicos si el conductor no tiene seguro o tiene límites combinados inferiores a $500,000, menos lo recuperado del conductor y de su seguro.' },
        { q: '¿El tope aplica si presto una camioneta de trabajo?', a: 'No, si usted es dueño de vehículos que se usan en una actividad comercial dentro del curso normal de su negocio, salvo una compañía de alquiler. La ley excluye a esos dueños de los topes de (9)(b)2 y 3.' },
        { q: '¿Debo agregar a un pariente de visita a mi póliza de auto?', a: 'Pregúntele a su agente antes de que el invitado maneje. El trato a quien maneja con permiso, a un conductor incluido o a uno excluido depende del contrato. Un viaje puntual puede diferir de una visita larga, y un adolescente de la casa es otra conversación.' },
        { q: 'Si mi invitado no tiene seguro, ¿cambia lo que podrían reclamarme?', a: 'Puede cambiarlo. El tramo adicional de $500,000 por daños económicos aplica si el usuario con permiso no tiene seguro o tiene límites combinados inferiores a $500,000, reducidos con lo recuperado del usuario y de cualquier seguro que lo cubra.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 324.021 (2026): definiciones; responsabilidad del dueño y del arrendador, subsección (9) (en inglés)', url: S.s324021 },
        { label: 'Cámara de Representantes de Florida: análisis de HB 355 (2019), doctrina del instrumento peligroso (PDF en flsenate.gov, en inglés)', url: S.hb355 },
        { label: 'FLHSMV: requisitos de seguro en Florida', url: S.ins },
        { label: 'Estatutos de Florida, sección 327.32 (2026): embarcaciones como instrumento peligroso; responsabilidad civil (en inglés)', url: S.s32732 },
      ],
    },
    ru: {
      title: 'Даёте машину гостям на праздники во Флориде: ответственность владельца',
      metaTitle: 'Машина гостям на праздники во Флориде | M&K Agency',
      description: 'Если гость на праздники берёт вашу машину во Флориде, отвечать можете вы. Лимиты ст. 324.021(9), доктрина dangerous instrumentality и что проверить заранее.',
      ogAlt: 'Плоская иллюстрация: дом во Флориде, седан, ключи с пустым брелоком, чемодан и синий щит',
      excerpt: 'На День благодарения гости часто просят машину. Во Флориде владелец может отвечать, если водитель попадёт в аварию. Какие лимиты ставит закон и что проверить, прежде чем отдать ключи.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Родственники прилетают на День благодарения, двоюродный брат остаётся на длинные выходные, гостю нужна машина до аэропорта или в магазин: одолжить её — обычный праздничный жест в Южной Флориде. Кажется, что вы просто проявляете гостеприимство. По закону Флориды это ещё и значит, что вы, как владелец, можете отвечать, если этот гость станет виновником аварии.' },
        { type: 'h2', text: 'Доктрина «опасного инструмента»' },
        { type: 'p', text: 'Суды Флориды считают автомобиль **опасным инструментом** (dangerous instrumentality). В [аналитической записке аппарата Палаты представителей Флориды по законопроекту HB 355 (2019)](' + S.hb355 + ') созданное судами правило описано так: человек несёт финансовую ответственность, если он владеет тем, что суды относят к опасным инструментам, доверяет, сдаёт в аренду или одалживает это другому, и этот другой по небрежности причиняет вред. Не важно, был ли сам владелец виноват. Записка возводит правило к решению Верховного суда Флориды **1920 года** по делу **Southern Cotton Oil Company v. Anderson** и отмечает, что позже суды распространили его на грузовики, автобусы, гольф-кары и другую моторную технику. В том же документе приводятся более поздние слова Верховного суда Флориды о том, что такая доктрина есть только во Флориде.' },
        { type: 'h2', text: 'Что ограничивает статья 324.021(9) и что нет' },
        { type: 'p', text: 'Позже законодатели ограничили эту ответственность для частных владельцев, которые одалживают личную машину. По [ст. 324.021(9)(b)3](' + S.s324021 + ') владелец — физическое лицо, давший машину водителю со своего разрешения, отвечает за управление автомобилем или за действия водителя только в пределах:' },
        { type: 'ul', items: [
          '**$100,000 на человека** и **$300,000 на происшествие** по травмам и **$50,000** по ущербу имуществу.',
          'Плюс до **дополнительных $500,000 только за экономический ущерб**, если у водителя с вашего разрешения **нет страховки** или есть любая страховка с лимитами ниже $500,000 в сумме по ущербу имуществу и по травмам. Эта дополнительная сумма уменьшается на всё, что реально удалось получить с этого водителя и с любой страховки или самострахования, которое его покрывает.',
        ] },
        { type: 'p', text: 'Три оговорки к этим лимитам:' },
        { type: 'ul', items: [
          '**За собственную небрежность лимита нет.** В законе прямо сказано, что этот пункт не затрагивает ответственность владельца за его собственную небрежность. Если вы дали машину человеку, про которого знали, что у него нет прав или он не в состоянии вести, — это отдельный вопрос. В записке Палаты **неосторожная передача** (negligent entrustment) описана как другая доктрина: нужно доказать, что владелец проявил активную небрежность, отдавая машину.',
          '**Рабочие машины — другое дело.** Лимиты из (9)(b)2 и 3 не применяются к владельцу автомобилей, которые используются в коммерческой деятельности в рамках обычной работы бизнеса, кроме прокатной компании ([ст. 324.021(9)(c)1](' + S.s324021 + ')).',
          'Дополнительные $500,000 касаются только **экономического ущерба** — например, счетов за лечение и потерянного заработка, — а не всех категорий ущерба, которые может требовать иск. В конкретной ситуации читайте закон или консультируйтесь с адвокатом.',
        ] },
        { type: 'h2', text: 'Что проверить, прежде чем отдавать ключи' },
        { type: 'p', text: 'Законные лимиты — только часть картины. Прежде чем праздничный гость сядет за руль, разберите с лицензированным агентом несколько практических вопросов — лучше до приезда гостей, а не после аварии. Если хотите пройтись по личному автополису Флориды в наших офисах в Florida City или Kendall, начните со [страницы автострахования](/ru/car-insurance-florida-city). Если удобнее обсудить лимиты по-русски, откройте страницу о [русскоязычном страховом агенте в Майами-Дейд](/ru/russian-speaking-insurance-agent-miami).' },
        { type: 'ol', items: [
          'Убедитесь, что у гостя есть **действующие водительские права**. Не отдавайте ключи, если знаете, что у человека нет прав или ему нельзя за руль. Такое решение может выйти за законные лимиты, потому что ваша собственная небрежность ими не ограничена. Если гость водит по иностранным правам, посмотрите также нашу статью об [автостраховке во Флориде с иностранными правами](/ru/blog/seguro-auto-licencia-extranjera-florida).',
          'Посмотрите, **кто вписан в ваш автополис**. Спросите агента, как полис относится к людям, которым вы разрешаете ездить, и нужно ли вписать того, кто будет за рулём во время визита. Договоры по-разному относятся к водителям с разрешения владельца; единой правила для всех полисов нет. Если за руль садится подросток из вашей семьи, это уже другая ситуация — см. наш разбор [правил learner\'s license для подростков во Флориде](/ru/blog/teen-driver-license-rules-florida).',
          'Узнайте, есть ли у гостя **своя автостраховка** и какие у неё лимиты ответственности. Этот вопрос важен, потому что дополнительные $500,000 за экономический ущерб применяются, если у водителя с вашего разрешения нет страховки или его суммарные лимиты ниже $500,000.',
          'Сравните свои **лимиты ответственности по травмам и по ущербу имуществу** с той суммой, которую описывает закон. О том, что покрывают — и чего не покрывают — базовые требования Флориды по PIP и ответственности за ущерб имуществу, читайте гид о [минимальной автостраховке во Флориде](/ru/blog/florida-minimum-car-insurance-requirements). Когда ответственность по травмам становится обязательной, объясняется в статье про [ответственность за травмы и FR-44](/ru/blog/bodily-injury-liability-fr44-florida).',
          'Проверьте в своём полисе покрытие **водителя без страховки (uninsured motorist)**, если в аварии может участвовать водитель с низкой страховкой или без неё. Как это покрытие устроено во Флориде, рассказано в нашем [гиде по UM](/ru/blog/uninsured-motorist-coverage-florida).',
          'Если гость думает не брать вашу машину, а **арендовать другую**, для аренды действуют другие правила. См. статью об [аренде машины на праздники во Флориде](/ru/blog/rental-car-insurance-florida-holidays).',
        ] },
        { type: 'h2', text: 'Почему эти цифры важны рядом с обычным полисом' },
        { type: 'p', text: '[FLHSMV](' + S.ins + ') указывает: прежде чем зарегистрировать во Флориде машину с четырьмя и более колёсами, нужно показать подтверждение Personal Injury Protection (PIP) и ответственности за ущерб имуществу (PDL). PIP помогает оплатить покрываемые медицинские расходы в пределах установленного законом лимита, независимо от того, кто виноват в аварии. PDL оплачивает ущерб чужому имуществу, причинённый вами или другим человеком за рулём вашей застрахованной машины. Ответственность по травмам — та, что платит за вред здоровью или смерть других людей, — в эту базовую пару для регистрации не входит. У гостя или у владельца могут быть низкие лимиты этого покрытия или его может не быть вовсе. Поэтому цифры ответственности владельца в ст. 324.021(9) могут оказаться заметно выше того, на что рассчитан минимальный полис.' },
        { type: 'h2', text: 'Зонтичный полис, рабочие машины и лодки' },
        { type: 'p', text: 'Личный зонтичный полис (umbrella) добавляет покрытие ответственности сверх лимитов по авто и дому, на своих условиях, и обычно требует определённых лимитов в основных полисах. Он не меняет ст. 324.021(9), но им закрывают разницу между лимитами полиса и той ответственностью, которую описывает закон. См. нашу [страницу о зонтичном страховании](/ru/umbrella-insurance-florida-city) и статью о том, [как устроен зонтичный полис во Флориде](/ru/blog/umbrella-insurance-explained-florida).' },
        { type: 'p', text: 'Для лодок и гидроциклов закон другой. По [ст. 327.32](' + S.s32732 + ') ответственность за безрассудное или неосторожное управление судном лежит на том, кто им управляет, если только владелец сам не за рулём и не находится на борту. Читайте статью о том, [как давать гостям покататься на гидроцикле](/ru/blog/jet-ski-rental-guest-drivers-florida).' },
        { type: 'p', text: 'Если машину, которую вы хотите одолжить, используют в коммерческой деятельности в рамках обычной работы вашего бизнеса, не считайте, что лимиты для частного владельца на неё распространяются.' },
        { type: 'callout', title: 'Хотите проверить лимиты до приезда гостей?', text: '[Оставьте заявку на расчёт](/ru/quote) или пришлите декларационную страницу. Лицензированный агент разберёт с вами лимиты ответственности. Это общая информация, а не юридическая консультация; как применяется ответственность, зависит от обстоятельств и полиса.' },
      ],
      faq: [
        { q: 'Отвечаю ли я, если праздничный гость разбил мою машину во Флориде?', a: 'Часто да. По доктрине «опасного инструмента» владелец может отвечать за небрежность водителя, которому разрешил ездить. Для владельца — физического лица ст. 324.021(9)(b)3 ограничивает эту ответственность определёнными суммами, но не ответственность за собственную небрежность владельца.' },
        { q: 'Какие лимиты ответственности у владельца, который одолжил машину?', a: 'До $100,000 на человека и $300,000 на происшествие по травмам и $50,000 по ущербу имуществу, плюс до $500,000 за экономический ущерб, если у водителя нет страховки или его общие лимиты меньше $500,000. Дополнительная сумма уменьшается на выплаты, полученные с водителя и его страховки.' },
        { q: 'Действуют ли эти лимиты, если я одолжил рабочую машину?', a: 'Нет, если вы владелец автомобилей, которые используются в коммерческой деятельности в рамках обычной работы вашего бизнеса, кроме прокатной компании. Закон исключает таких владельцев из-под лимитов (9)(b)2 и 3.' },
        { q: 'Нужно ли вписывать приезжего родственника в автополис?', a: 'Спросите агента до того, как гость сядет за руль. Как полис относится к водителю с разрешения владельца, к вписанному или к исключённому водителю, зависит от договора. Того, кто сядет за руль один раз, могут рассматривать иначе, чем того, кто будет ездить всю длинную поездку, а подросток в семье — отдельный разговор.' },
        { q: 'Если у гостя нет своей страховки, меняется ли сумма, которую с меня могут потребовать?', a: 'Может измениться. Дополнительные $500,000 за экономический ущерб применяются, если у водителя с вашего разрешения нет страховки или его суммарные лимиты ниже $500,000. Эта дополнительная сумма уменьшается на то, что реально удалось получить с водителя и с любой страховки, которая его покрывает.' },
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
