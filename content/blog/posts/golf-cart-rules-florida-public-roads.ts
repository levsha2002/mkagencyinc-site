import type { BlogPost } from '../types';
import { srcList } from '../../pages/rec/sources';

// Facts checked 2026-10-03: s. 316.212 F.S. (2026) full text (designated roads and signs;
// state highway crossings; sunrise-sunset and night equipment; equipment list; under 18
// learner's or driver license, 18+ government photo ID; stricter local ordinances; sidewalk
// ordinances 15 mph and 8-foot sidewalks next to state highways; moving vs nonmoving
// violations); s. 316.2125 (retirement communities); s. 320.01 (golf cart 20 mph, LSV 25 mph);
// s. 316.2122 (LSV); FLHSMV LSV page and TL-63. No insurer named, no prices.
const KEYS = ['s316_212', 's316_2125', 's320_01', 's316_2122', 'flhsmvLsv', 'flhsmvTl63'] as const;

export const post: BlogPost = {
  slug: 'golf-cart-rules-florida-public-roads',
  datePublished: '2026-10-03',
  translations: {
    en: {
      title: 'Golf Carts on Florida Roads: Where You Can Drive, Who Can Drive and When It Becomes an LSV',
      metaTitle: 'Golf Cart Rules on Florida Roads | M&K Agency',
      description: 'Florida golf cart law in plain words: designated roads, night driving, teen drivers, sidewalks, tickets, and how a golf cart becomes a street-legal LSV.',
      excerpt: 'A golf cart is not a toy under Florida law. Here is where it may go, who may drive it, what a ticket looks like and what changes when you convert it.',
      category: 'Golf cart insurance',
      body: [
        { type: 'p', text: 'In many Florida neighborhoods the golf cart is the second family car. Florida law starts from the opposite direction: driving a golf cart on public roads is **prohibited except where the law allows it** ([s. 316.212](https://www.flsenate.gov/Laws/Statutes/2026/316.212)). Here is what that means day to day.' },
        { type: 'h2', text: 'Where you may drive' },
        { type: 'ul', items: [
          'On a **county road or city street that the local government has designated** for golf carts, after deciding carts can travel there safely, and **posted with signs**.',
          'Across a **state highway** only at crossings the Department of Transportation has approved.',
          'On some **sidewalks**, if the city or county passes an ordinance that allows it. Those ordinances must limit carts to **15 mph**, and next to a state highway the sidewalk must be at least **8 feet wide**.',
          'Inside a **retirement community**, under a separate section of the law ([s. 316.2125](https://www.flsenate.gov/Laws/Statutes/2026/316.2125)).',
        ] },
        { type: 'h2', text: 'When and with what equipment' },
        { type: 'p', text: 'Golf carts may be driven only **from sunrise to sunset**, unless the local government allows night driving and the cart has **headlights, brake lights, turn signals and a windshield**. At all times a cart needs **efficient brakes, reliable steering, safe tires, a rearview mirror and red reflectors** front and rear. Cities and counties can add stricter rules.' },
        { type: 'h2', text: 'Who may drive' },
        { type: 'p', text: 'On public roads, a driver **under 18** must have a valid **learner’s license or driver license**, and a driver **18 or older** must carry a valid **government-issued photo ID**. For families with young teens, this is the rule that matters most.' },
        { type: 'h2', text: 'What a ticket looks like' },
        { type: 'p', text: 'Breaking the road, crossing, hours or local-route rules is a noncriminal **moving violation**; equipment and driver-ID violations are **nonmoving violations** (s. 316.212(9)).' },
        { type: 'callout', title: 'Own a golf cart or LSV?', text: 'See our [Florida golf cart and LSV insurance guide](/en/golf-cart-insurance-florida): the gaps between a home policy and an injured passenger.' },
        { type: 'h2', text: 'Turning a golf cart into an LSV' },
        { type: 'p', text: 'A golf cart cannot go faster than 20 mph; a **low-speed vehicle** goes over 20 and up to 25 mph ([s. 320.01](https://www.flsenate.gov/Laws/Statutes/2026/320.01)) and may use streets posted at **35 mph or less** ([s. 316.2122](https://www.flsenate.gov/Laws/Statutes/2026/316.2122)). Golf carts are **not titled or registered** in Florida ([FLHSMV TL-63](https://www.flhsmv.gov/pdf/proc/tl/tl-63.pdf)). A converted cart needs the LSV safety equipment (including **seat belts and a VIN**), an inspection, a Florida-assigned VIN, a title and registration, and proof of **PIP and property damage liability** ([FLHSMV](https://www.flhsmv.gov/safety-center/consumer-education/low-speed-vehicles/)). The driver then needs a valid driver license.' },
        { type: 'p', text: 'Whether it is a golf cart or an LSV, tell your agent how it is used: on the course, in the community or on public streets. Coverage depends on the policy.' },
      ],
      faq: [
        { q: 'Can a 14-year-old drive a golf cart in Florida?', a: 'Not on public roads unless he or she has a valid learner’s license or driver license. Florida requires drivers under 18 to have one of those, and drivers 18 or older to carry a government photo ID.' },
        { q: 'Can I drive a golf cart at night in Florida?', a: 'Only if the local government has allowed night driving and the cart has headlights, brake lights, turn signals and a windshield. Otherwise golf carts may be driven only from sunrise to sunset.' },
        { q: 'Can golf carts drive on sidewalks in Florida?', a: 'Only where a city or county ordinance allows it. Those ordinances must cap golf carts at 15 mph, and on sidewalks next to state highways the sidewalk must be at least 8 feet wide.' },
        { q: 'How do I make my golf cart street legal?', a: 'By converting it into a low-speed vehicle: add the required safety equipment, pass an inspection, get a Florida-assigned VIN, title and registration, and carry PIP and property damage liability. FLHSMV lists the steps and forms.' },
      ],
      sources: srcList('en', [...KEYS]),
    },
    es: {
      title: 'Carritos de golf en las calles de Florida: por dónde, quién puede manejar y cuándo se vuelve un LSV',
      metaTitle: 'Reglas del carrito de golf en Florida | M&K Agency',
      description: 'La ley de carritos de golf en Florida con palabras claras: vías designadas, manejo de noche, conductores jóvenes, aceras, multas y cómo convertirlo en LSV.',
      excerpt: 'Para la ley de Florida, un carrito de golf no es un juguete. Por dónde puede ir, quién lo puede manejar, cómo es una multa y qué cambia si lo convierte.',
      category: 'Seguro de carrito de golf',
      body: [
        { type: 'p', text: 'En muchos barrios de Florida el carrito de golf es el segundo carro de la familia. La ley de Florida parte de lo contrario: manejar un carrito de golf por la vía pública está **prohibido salvo donde la ley lo permite** ([s. 316.212](https://www.flsenate.gov/Laws/Statutes/2026/316.212)). Esto es lo que significa en el día a día.' },
        { type: 'h2', text: 'Por dónde puede manejar' },
        { type: 'ul', items: [
          'Por una **vía del condado o calle de la ciudad que el gobierno local haya designado** para carritos de golf, después de decidir que pueden circular con seguridad, y **señalizada**.',
          'Para cruzar una **carretera estatal**, solo por cruces aprobados por el Departamento de Transporte.',
          'Por algunas **aceras**, si la ciudad o el condado aprueban una ordenanza que lo permita. Esas ordenanzas deben limitar los carritos a **15 mph**, y junto a una carretera estatal la acera debe tener al menos **8 pies de ancho**.',
          'Dentro de una **comunidad de jubilados**, según una sección aparte de la ley ([s. 316.2125](https://www.flsenate.gov/Laws/Statutes/2026/316.2125)).',
        ] },
        { type: 'h2', text: 'A qué hora y con qué equipo' },
        { type: 'p', text: 'Solo se puede manejar **de la salida a la puesta del sol**, salvo que el gobierno local permita manejar de noche y el carrito tenga **faros, luces de freno, direccionales y parabrisas**. Siempre necesita **frenos eficientes, dirección confiable, llantas seguras, espejo retrovisor y reflectores rojos** adelante y atrás. Las ciudades y los condados pueden poner reglas más estrictas.' },
        { type: 'h2', text: 'Quién puede manejar' },
        { type: 'p', text: 'En la vía pública, quien tenga **menos de 18 años** necesita **permiso de aprendiz o licencia de conducir** vigente, y quien tenga **18 años o más**, una **identificación oficial con foto** vigente. Para las familias con hijos adolescentes, esta es la regla que más importa.' },
        { type: 'h2', text: 'Cómo es una multa' },
        { type: 'p', text: 'No respetar las reglas de vías, cruces, horario o rutas locales es una **infracción de movimiento** no penal; las de equipo e identificación del conductor son **infracciones que no son de movimiento** (s. 316.212(9)).' },
        { type: 'callout', title: '¿Tiene carrito de golf o LSV?', text: 'Vea nuestra [guía de seguro de carrito de golf y LSV en Florida](/es/golf-cart-insurance-florida): los huecos entre la póliza de casa y un pasajero lesionado.' },
        { type: 'h2', text: 'Convertir un carrito de golf en LSV' },
        { type: 'p', text: 'Un carrito de golf no puede pasar de 20 mph; un **vehículo de baja velocidad** va a más de 20 y hasta 25 mph ([s. 320.01](https://www.flsenate.gov/Laws/Statutes/2026/320.01)) y puede usar calles con límite de **35 mph o menos** ([s. 316.2122](https://www.flsenate.gov/Laws/Statutes/2026/316.2122)). En Florida los carritos de golf **no se titulan ni se registran** ([FLHSMV TL-63](https://www.flhsmv.gov/pdf/proc/tl/tl-63.pdf)). Un carrito convertido necesita el equipo de seguridad del LSV (incluidos **cinturones y VIN**), una inspección, un VIN asignado por Florida, título y registro, y prueba de **PIP y responsabilidad por daños a la propiedad** ([FLHSMV](https://www.flhsmv.gov/safety-center/consumer-education/low-speed-vehicles/)). Y quien lo maneje necesita licencia de conducir vigente.' },
        { type: 'p', text: 'Sea carrito de golf o LSV, cuéntele a su agente cómo lo usa: en el campo, en la comunidad o por la calle. La cobertura depende de la póliza.' },
      ],
      faq: [
        { q: '¿Un muchacho de 14 años puede manejar un carrito de golf en Florida?', a: 'No por la vía pública, a menos que tenga permiso de aprendiz o licencia de conducir vigente. Florida exige uno de esos a los menores de 18 años y una identificación oficial con foto a los de 18 o más.' },
        { q: '¿Puedo manejar un carrito de golf de noche en Florida?', a: 'Solo si el gobierno local lo permite y el carrito tiene faros, luces de freno, direccionales y parabrisas. Si no, solo se puede manejar de la salida a la puesta del sol.' },
        { q: '¿Los carritos de golf pueden ir por la acera en Florida?', a: 'Solo donde una ordenanza de la ciudad o el condado lo permita. Esas ordenanzas deben limitar los carritos a 15 mph, y en aceras junto a carreteras estatales la acera debe tener al menos 8 pies de ancho.' },
        { q: '¿Cómo hago legal mi carrito de golf para la calle?', a: 'Convirtiéndolo en vehículo de baja velocidad: agregue el equipo de seguridad requerido, pase la inspección, obtenga VIN asignado por Florida, título y registro, y tenga PIP y responsabilidad por daños a la propiedad. El FLHSMV explica los pasos y formularios.' },
      ],
      sources: srcList('es', [...KEYS]),
    },
    ru: {
      title: 'Гольф-кары на дорогах Флориды: где можно ездить, кому можно водить и когда кар становится LSV',
      metaTitle: 'Правила для гольф-каров во Флориде | M&K Agency',
      description: 'Закон Флориды о гольф-карах простыми словами: назначенные дороги, езда ночью, подростки за рулём, тротуары, штрафы и как переделать кар в LSV.',
      excerpt: 'По закону Флориды гольф-кар — не игрушка. Где на нём можно ездить, кто может водить, как выглядит штраф и что меняется после переделки.',
      category: 'Страхование гольф-каров',
      body: [
        { type: 'p', text: 'Во многих районах Флориды гольф-кар — вторая машина в семье. Закон Флориды исходит из обратного: ездить на гольф-каре по дорогам общего пользования **запрещено, кроме случаев, которые закон прямо разрешает** ([ст. 316.212](https://www.flsenate.gov/Laws/Statutes/2026/316.212)). Вот что это значит на практике.' },
        { type: 'h2', text: 'Где можно ездить' },
        { type: 'ul', items: [
          'По **дороге округа или городской улице, которую местная власть назначила** для гольф-каров, решив, что ездить там безопасно, и **обозначила знаками**.',
          'Пересекать **дорогу штата** — только на переездах, одобренных Департаментом транспорта.',
          'По некоторым **тротуарам**, если город или округ примет такое постановление. Оно должно ограничивать скорость кара **15 милями в час**, а рядом с дорогой штата тротуар должен быть шириной не меньше **8 футов**.',
          'Внутри **пенсионного комьюнити** — по отдельной статье закона ([ст. 316.2125](https://www.flsenate.gov/Laws/Statutes/2026/316.2125)).',
        ] },
        { type: 'h2', text: 'Когда и с каким оборудованием' },
        { type: 'p', text: 'Ездить можно только **от восхода до заката**, если только местная власть не разрешила ночную езду и у кара есть **фары, стоп-сигналы, поворотники и лобовое стекло**. Всегда нужны **исправные тормоза, надёжное рулевое управление, безопасные шины, зеркало заднего вида и красные отражатели** спереди и сзади. Города и округа могут ввести правила строже.' },
        { type: 'h2', text: 'Кому можно водить' },
        { type: 'p', text: 'На дорогах общего пользования водителю **младше 18 лет** нужны действующие **ученические или обычные права**, а с **18 лет** — действующее **государственное удостоверение с фото**. Для семей с подростками это самое важное правило.' },
        { type: 'h2', text: 'Как выглядит штраф' },
        { type: 'p', text: 'Нарушение правил о дорогах, переездах, времени суток или местных маршрутах — некриминальное нарушение **с движением (moving violation)**; нарушения по оборудованию и документам водителя — **без движения (nonmoving)** (ст. 316.212(9)).' },
        { type: 'callout', title: 'Есть гольф-кар или LSV?', text: 'Читайте наш [гид по страховке гольф-кара и LSV во Флориде](/ru/golf-cart-insurance-florida): дыры между полисом на дом и травмированным пассажиром.' },
        { type: 'h2', text: 'Как гольф-кар становится LSV' },
        { type: 'p', text: 'Гольф-кар не может ехать быстрее 20 миль в час; **тихоходный автомобиль (LSV)** — быстрее 20 и до 25 миль в час ([ст. 320.01](https://www.flsenate.gov/Laws/Statutes/2026/320.01)), и ему можно по улицам с ограничением **35 миль в час или ниже** ([ст. 316.2122](https://www.flsenate.gov/Laws/Statutes/2026/316.2122)). Гольф-кары во Флориде **не получают титул и не регистрируются** ([FLHSMV TL-63](https://www.flhsmv.gov/pdf/proc/tl/tl-63.pdf)). Переделанному кару нужно оборудование LSV (в том числе **ремни и VIN**), осмотр, VIN от Флориды, титул и регистрация, а также подтверждение **PIP и ответственности за ущерб имуществу** ([FLHSMV](https://www.flhsmv.gov/safety-center/consumer-education/low-speed-vehicles/)). Водителю нужны действующие права.' },
        { type: 'p', text: 'Гольф-кар это или LSV, расскажите агенту, как вы им пользуетесь: на поле, в комьюнити или на улицах. Покрытие зависит от полиса.' },
      ],
      faq: [
        { q: 'Может ли 14-летний водить гольф-кар во Флориде?', a: 'Не на дорогах общего пользования, если у него нет действующих ученических или обычных прав. Флорида требует одно из двух от водителей младше 18 лет, а от водителей с 18 лет — государственное удостоверение с фото.' },
        { q: 'Можно ли ездить на гольф-каре ночью?', a: 'Только если местная власть это разрешила и у кара есть фары, стоп-сигналы, поворотники и лобовое стекло. Иначе — только от восхода до заката.' },
        { q: 'Можно ли гольф-карам по тротуару?', a: 'Только там, где это разрешает постановление города или округа. Оно должно ограничивать скорость 15 милями в час, а у дорог штата тротуар должен быть шириной не меньше 8 футов.' },
        { q: 'Как сделать гольф-кар легальным для улиц?', a: 'Переделать его в тихоходный автомобиль: установить нужное оборудование, пройти осмотр, получить VIN от Флориды, титул и регистрацию и оформить PIP и ответственность за ущерб имуществу. Шаги и формы перечислены у FLHSMV.' },
      ],
      sources: srcList('ru', [...KEYS]),
    },
  },
};
