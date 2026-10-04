import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against the 2026 Florida Statutes on flsenate.gov:
// s. 319.30(3) (total loss definitions: insured = insurer pays to replace with like kind
// and quality or pays on theft; 80% repair-cost test applies to UNINSURED vehicles; agreed
// repair is not a total loss, >100% repair cost -> "Total Loss Vehicle" brand within 72 hours;
// owner/insurer forward title within 72 hours; salvage title or certificate of destruction;
// late-model vehicle >= $7,500 retail with repair >= 90% -> certificate of destruction);
// s. 626.9743 (total-loss settlement methods: comparable vehicles in last 90 days, recognized
// valuation source provided on request, dealer quotes, specified replacement vehicle;
// itemized deductions explained in writing on request; sales tax; 72-hour storage notice).
// The "80% rule" for insured cars is a common misconception; the statute does not set one.
// GAP is mentioned only as an add-on to the client's auto policy (site rule). No prices.
const S = {
  s31930: 'https://www.flsenate.gov/Laws/Statutes/2026/319.30',
  s6269743: 'https://www.flsenate.gov/Laws/Statutes/2026/626.9743',
};

export const post: BlogPost = {
  slug: 'when-is-a-car-totaled-florida',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'When Is a Car “Totaled” in Florida? Total Loss, Actual Cash Value and Your Title',
      metaTitle: 'When Is a Car Totaled in Florida? | M&K Agency',
      description: 'How a total loss works in Florida: what the law says about the “80% rule,” how insurers must value your car, salvage titles, and what to ask if you owe on it.',
      excerpt: 'Many drivers have heard of an “80% rule.” Florida law is more specific than that. How a car becomes a total loss, how the insurer must value it, and what happens to the title.',
      category: 'Auto insurance',
      body: [
        { type: 'p', text: 'After a bad crash, a flood or a theft, the call from the adjuster often comes with one word: **totaled**. Here is what Florida law actually says about total losses, how your car’s value must be worked out, and what to ask if you still owe money on it.' },
        { type: 'h2', text: 'Is there an “80% rule” in Florida?' },
        { type: 'p', text: 'Not the way many people think. Florida’s title law defines a total loss in two ways ([s. 319.30(3)](' + S.s31930 + ')):' },
        { type: 'ul', items: [
          '**For an insured vehicle:** when the insurance company pays you to replace the car with one of like kind and quality, or pays you after the car is stolen.',
          '**For an uninsured vehicle:** when repairing it would cost **80% or more** of what it would cost to replace it with one of like kind and quality.',
        ] },
        { type: 'p', text: 'So the 80% figure in the statute is about uninsured vehicles. For an insured car, the statute does not set a percentage; the total loss happens when the insurer pays to replace the car. If you and the insurer **agree to repair** instead, the car is not a total loss. But if the insurer’s actual repair cost ends up **above 100%** of the replacement cost, the owner must ask FLHSMV, within 72 hours of the agreement, to brand the title “Total Loss Vehicle.”' },
        { type: 'h2', text: 'How the insurer must value your car' },
        { type: 'p', text: 'When a policy settles total losses on **actual cash value** or replacement with a car of like kind and quality, Florida law lists the methods the insurer must use ([s. 626.9743(5)](' + S.s6269743 + ')):' },
        { type: 'ul', items: [
          'A cash settlement based on the cost of a **comparable vehicle**, including sales tax if it applies, taken from two or more comparable cars in your local market in the last 90 days, a recognized used-vehicle valuation source, or quotes from two or more licensed local dealers.',
          'Or an offer of a **specific comparable replacement car**: same manufacturer, same or newer model year, similar body type, options and mileage, in as good or better condition, near where you live.',
          'If the insurer uses a different method, the value must be documented and every deduction **itemized in dollars**. Deductions for depreciation or betterment must be explained in writing if you ask.',
        ] },
        { type: 'p', text: 'If the valuation came from a database, the insurer must give you the relevant pages **on request**. If it came from a guidebook, it must tell you which one. Ask for them, and compare the options and mileage listed with your actual car.' },
        { type: 'h2', text: 'What happens to the title' },
        { type: 'ul', items: [
          'When an insurer pays a total loss, it generally gets the title and sends it to the state within **72 hours**. If you keep the car as part of the settlement, the title still has to go in within 72 hours, and the state issues the salvage title or certificate of destruction to you.',
          'A total-loss car may not be disposed of until a **salvage certificate of title** or **certificate of destruction** is issued.',
          'For a late-model car worth at least $7,500 before the loss, repairs estimated at **90% or more** of its retail value mean FLHSMV issues a certificate of destruction: the car can be dismantled but not titled again.',
        ] },
        { type: 'h2', text: 'Storage charges: watch the 72-hour notice' },
        { type: 'p', text: 'If your insurer has been paying for storage at a tow yard or shop, it must notify you before it stops, giving you **72 hours** to move the car ([s. 626.9743(8)](' + S.s6269743 + ')). Ask early where the car is and what you need to do.' },
        { type: 'h2', text: 'If you owe more than the car is worth' },
        { type: 'p', text: 'The settlement is based on the car’s value, not on your loan or lease balance. If the balance is higher, the difference is still yours to pay. **Gap coverage added to your auto policy** can help pay that difference after a covered total loss; see our [gap insurance page](/en/gap-insurance) for how it works and what it needs. For crashes involving a driver with no insurance, read our guide to [uninsured motorist coverage](/en/blog/uninsured-motorist-coverage-florida).' },
        { type: 'callout', title: 'Questions about a total loss?', text: '[Request a quote](/en/quote) or call us. A licensed agent can review your coverage and explain each step in English, Spanish or Russian. This is general information, not legal advice; your settlement depends on your policy.' },
      ],
      faq: [
        { q: 'At what percentage is a car totaled in Florida?', a: 'For insured cars, Florida law does not set a percentage: the car is a total loss when the insurer pays to replace it or pays after a theft. The 80% repair-cost test in the statute applies to uninsured vehicles.' },
        { q: 'Can I keep my car if it is totaled?', a: 'Florida law allows an owner to keep the vehicle as part of a total loss settlement. The title must still be sent to the state within 72 hours, and the state issues a salvage title or a certificate of destruction to you.' },
        { q: 'How do I check the insurer’s value for my car?', a: 'Ask for the valuation documents. Florida law requires the insurer to provide the relevant pages from a database, or name the guidebook, on request, and to itemize and explain any deductions.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 319.30 (2026): total loss, salvage, certificate of destruction', url: S.s31930 },
        { label: 'Florida Statutes s. 626.9743 (2026): claim settlement practices relating to motor vehicle insurance', url: S.s6269743 },
      ],
    },
    es: {
      title: '¿Cuándo se considera “pérdida total” un carro en Florida? Valor real en efectivo y su título',
      metaTitle: '¿Cuándo es pérdida total un carro en Florida? | M&K Agency',
      description: 'Pérdida total en Florida: qué dice la ley sobre la “regla del 80%”, cómo deben valorar su carro, el título de salvamento y qué preguntar si debe el préstamo.',
      excerpt: 'Muchos conductores han oído hablar de una “regla del 80%”. La ley de Florida es más precisa. Cómo un carro pasa a ser pérdida total, cómo deben valorarlo y qué pasa con el título.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'Después de un choque fuerte, una inundación o un robo, la llamada del ajustador muchas veces trae dos palabras: **pérdida total**. Esto es lo que de verdad dice la ley de Florida, cómo se debe calcular el valor de su carro y qué preguntar si todavía lo está pagando.' },
        { type: 'h2', text: '¿Existe una “regla del 80%” en Florida?' },
        { type: 'p', text: 'No como mucha gente cree. La ley de títulos de Florida define la pérdida total de dos maneras ([s. 319.30(3)](' + S.s31930 + ')):' },
        { type: 'ul', items: [
          '**Si el vehículo tiene seguro:** cuando la aseguradora le paga para reemplazar el carro por uno de clase y calidad similares, o le paga porque se lo robaron.',
          '**Si el vehículo no tiene seguro:** cuando repararlo costaría **el 80% o más** de lo que costaría reemplazarlo por uno de clase y calidad similares.',
        ] },
        { type: 'p', text: 'O sea, el 80% de la ley se refiere a los vehículos sin seguro. Para un carro asegurado, la ley no fija un porcentaje: hay pérdida total cuando la aseguradora paga para reemplazarlo. Si usted y la aseguradora **acuerdan repararlo**, no es pérdida total. Pero si el costo real de la reparación para la aseguradora pasa del **100%** del costo de reemplazo, el dueño debe pedir al FLHSMV, dentro de 72 horas después del acuerdo, que marque el título como “Total Loss Vehicle”.' },
        { type: 'h2', text: 'Cómo debe valorar su carro la aseguradora' },
        { type: 'p', text: 'Cuando la póliza liquida las pérdidas totales según el **valor real en efectivo** (actual cash value) o con un carro de clase y calidad similares, la ley de Florida indica los métodos que debe usar la aseguradora ([s. 626.9743(5)](' + S.s6269743 + ')):' },
        { type: 'ul', items: [
          'Un pago en efectivo basado en el costo de un **vehículo comparable**, con el impuesto de venta si aplica, tomado de dos o más carros comparables en su mercado local en los últimos 90 días, de una fuente reconocida de valores de autos usados o de cotizaciones de dos o más concesionarios con licencia de la zona.',
          'O la oferta de un **carro de reemplazo comparable** específico: misma marca, mismo año de modelo o más nuevo, carrocería, equipo y millaje parecidos, en igual o mejor estado y cerca de donde usted vive.',
          'Si la aseguradora usa otro método, el valor debe estar documentado y cada descuento **detallado en dólares**. Los descuentos por depreciación o mejoras deben explicarse por escrito si usted lo pide.',
        ] },
        { type: 'p', text: 'Si el valor salió de una base de datos, la aseguradora debe darle las páginas correspondientes **si usted las pide**. Si salió de una guía de precios, debe decirle cuál. Pídalas y compare el equipo y el millaje que aparecen con los de su carro.' },
        { type: 'h2', text: 'Qué pasa con el título' },
        { type: 'ul', items: [
          'Cuando una aseguradora paga una pérdida total, por lo general recibe el título y lo envía al estado dentro de **72 horas**. Si usted se queda con el carro como parte del acuerdo, el título igual debe enviarse dentro de 72 horas, y el estado le emite a usted el título de salvamento o el certificado de destrucción.',
          'Un carro de pérdida total no se puede vender ni desechar hasta que se emita un **título de salvamento** (salvage certificate of title) o un **certificado de destrucción**.',
          'Para un carro de modelo reciente que valía por lo menos $7,500 antes de la pérdida, si la reparación se estima en **el 90% o más** de su valor, el FLHSMV emite un certificado de destrucción: el carro se puede desarmar, pero no se puede volver a titular.',
        ] },
        { type: 'h2', text: 'Almacenaje: ojo con el aviso de 72 horas' },
        { type: 'p', text: 'Si su aseguradora ha estado pagando el almacenaje en una grúa o un taller, debe avisarle antes de dejar de pagarlo y darle **72 horas** para sacar el carro ([s. 626.9743(8)](' + S.s6269743 + ')). Pregunte pronto dónde está el carro y qué tiene que hacer.' },
        { type: 'h2', text: 'Si debe más de lo que vale el carro' },
        { type: 'p', text: 'El pago se basa en el valor del carro, no en lo que usted debe del préstamo o del leasing. Si el saldo es mayor, la diferencia le sigue tocando a usted. **La cobertura gap agregada a su póliza de auto** puede ayudar a pagar esa diferencia después de una pérdida total cubierta; vea nuestra página de [seguro gap](/es/gap-insurance) para saber cómo funciona y qué necesita. Si el choque fue con un conductor sin seguro, lea nuestra guía de [cobertura de motorista sin seguro](/es/blog/uninsured-motorist-coverage-florida).' },
        { type: 'callout', title: '¿Dudas sobre una pérdida total?', text: '[Pida una cotización](/es/quote) o llámenos. Un agente con licencia puede revisar su cobertura y explicarle cada paso en español, inglés o ruso. Esto es información general, no asesoría legal; el pago depende de su póliza.' },
      ],
      faq: [
        { q: '¿Con qué porcentaje se declara pérdida total un carro en Florida?', a: 'Para los carros asegurados, la ley de Florida no fija un porcentaje: hay pérdida total cuando la aseguradora paga para reemplazarlo o paga por un robo. La prueba del 80% del costo de reparación aplica a los vehículos sin seguro.' },
        { q: '¿Me puedo quedar con mi carro si es pérdida total?', a: 'La ley de Florida permite que el dueño se quede con el vehículo como parte del acuerdo. El título igual debe enviarse al estado dentro de 72 horas, y el estado le emite a usted un título de salvamento o un certificado de destrucción.' },
        { q: '¿Cómo reviso el valor que le dio la aseguradora a mi carro?', a: 'Pida los documentos de la valoración. La ley de Florida obliga a la aseguradora a darle las páginas de la base de datos o a decirle qué guía usó, si usted lo pide, y a detallar y explicar cualquier descuento.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 319.30 (2026): pérdida total, salvamento y certificado de destrucción (en inglés)', url: S.s31930 },
        { label: 'Estatutos de Florida, sección 626.9743 (2026): prácticas de liquidación de reclamos de auto (en inglés)', url: S.s6269743 },
      ],
    },
    ru: {
      title: 'Когда машину признают тоталом во Флориде: total loss, рыночная стоимость и титул',
      metaTitle: 'Когда машина — тотал во Флориде | M&K Agency',
      description: 'Как работает total loss во Флориде: что закон говорит о «правиле 80%», как страховая оценивает машину, что будет с титулом и что спросить, если есть кредит.',
      excerpt: 'Многие слышали о «правиле 80%». Закон Флориды говорит конкретнее. Когда машина становится тоталом, как страховая обязана её оценить и что происходит с титулом.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'После серьёзной аварии, наводнения или угона адъюстер часто звонит с одним словом: **тотал** (total loss). Разбираем, что на самом деле говорит закон Флориды, как должна считаться стоимость машины и что спросить, если вы ещё платите за неё кредит.' },
        { type: 'h2', text: 'Есть ли во Флориде «правило 80%»?' },
        { type: 'p', text: 'Не в том виде, как многие думают. Закон Флориды о титулах определяет total loss двумя способами ([ст. 319.30(3)](' + S.s31930 + ')):' },
        { type: 'ul', items: [
          '**Застрахованная машина:** когда страховая платит вам, чтобы заменить машину аналогичной по классу и качеству, или платит после угона.',
          '**Незастрахованная машина:** когда ремонт стоил бы **80% или больше** стоимости замены на аналогичную.',
        ] },
        { type: 'p', text: 'То есть 80% в законе — про машины без страховки. Для застрахованной машины закон процент не устанавливает: тотал наступает, когда страховая платит за замену. Если вы со страховой **договорились о ремонте**, это не тотал. Но если фактическая стоимость ремонта для страховой превысит **100%** стоимости замены, владелец в течение 72 часов после договорённости должен попросить FLHSMV поставить на титул отметку «Total Loss Vehicle».' },
        { type: 'h2', text: 'Как страховая обязана оценить машину' },
        { type: 'p', text: 'Если полис урегулирует тоталы по **рыночной стоимости** (actual cash value, ACV) или заменой на аналогичную машину, закон Флориды перечисляет методы, которыми страховая обязана пользоваться ([ст. 626.9743(5)](' + S.s6269743 + ')):' },
        { type: 'ul', items: [
          'Денежная выплата по стоимости **сопоставимой машины**, включая налог с продаж, если он применяется: по двум и более похожим машинам на вашем местном рынке за последние 90 дней, по признанному источнику цен на подержанные машины или по предложениям двух и более лицензированных местных дилеров.',
          'Или предложение **конкретной сопоставимой машины на замену**: та же марка, тот же модельный год или новее, похожий кузов, комплектация и пробег, не хуже по состоянию и недалеко от вашего дома.',
          'Если страховая использует другой метод, стоимость должна быть подтверждена документами, а каждый вычет **расписан в долларах**. Вычеты за износ или улучшения по вашему запросу объясняются письменно.',
        ] },
        { type: 'p', text: 'Если оценка взята из базы данных, страховая обязана **по запросу** дать вам соответствующие страницы, а если из справочника цен — назвать его. Попросите их и сверьте комплектацию и пробег со своей машиной.' },
        { type: 'h2', text: 'Что происходит с титулом' },
        { type: 'ul', items: [
          'Когда страховая выплачивает тотал, она, как правило, получает титул и в течение **72 часов** отправляет его в штат. Если вы оставляете машину себе по условиям урегулирования, титул всё равно нужно отправить в течение 72 часов, и штат выдаёт salvage-титул или certificate of destruction на ваше имя.',
          'Машину-тотал нельзя продать или утилизировать, пока не выдан **salvage certificate of title** или **certificate of destruction**.',
          'Если машина недавнего модельного года стоила до ущерба не меньше $7,500, а ремонт оценён в **90% или больше** её стоимости, FLHSMV выдаёт certificate of destruction: машину можно разобрать, но оформить титул заново нельзя.',
        ] },
        { type: 'h2', text: 'Хранение: следите за уведомлением за 72 часа' },
        { type: 'p', text: 'Если страховая оплачивала стоянку на эвакуаторной площадке или в мастерской, перед прекращением оплаты она обязана вас уведомить и дать **72 часа**, чтобы забрать машину ([ст. 626.9743(8)](' + S.s6269743 + ')). Сразу уточните, где машина и что нужно сделать.' },
        { type: 'h2', text: 'Если вы должны больше, чем стоит машина' },
        { type: 'p', text: 'Выплата считается от стоимости машины, а не от остатка по кредиту или лизингу. Если остаток больше, разницу всё равно платите вы. **Покрытие GAP, добавленное к вашему автополису**, может помочь закрыть эту разницу после покрываемого тотала — как оно работает и что для него нужно, читайте на странице о [GAP-страховке](/ru/gap-insurance). Если в аварии виноват водитель без страховки, пригодится статья о [покрытии UM/UIM](/ru/blog/uninsured-motorist-coverage-florida).' },
        { type: 'callout', title: 'Вопросы по тоталу?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните нам. Лицензированный агент проверит ваше покрытие и объяснит каждый шаг по-русски, по-английски или по-испански. Это общая информация, а не юридическая консультация; размер выплаты зависит от вашего полиса.' },
      ],
      faq: [
        { q: 'При каком проценте машину признают тоталом во Флориде?', a: 'Для застрахованных машин закон Флориды процент не устанавливает: тотал — когда страховая платит за замену или выплачивает после угона. Порог 80% от стоимости ремонта в законе касается машин без страховки.' },
        { q: 'Можно ли оставить себе машину-тотал?', a: 'Закон Флориды позволяет владельцу оставить машину по условиям урегулирования. Титул всё равно нужно отправить в штат в течение 72 часов, и штат выдаёт вам salvage-титул или certificate of destruction.' },
        { q: 'Как проверить оценку страховой?', a: 'Попросите документы по оценке. По закону Флориды страховая обязана по запросу дать страницы из базы данных или назвать справочник, а также расписать и объяснить все вычеты.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 319.30 (2026): total loss, salvage, certificate of destruction (на английском)', url: S.s31930 },
        { label: 'Законы Флориды, ст. 626.9743 (2026): порядок урегулирования автомобильных клеймов (на английском)', url: S.s6269743 },
      ],
    },
  },
};
