import type { BlogPost } from '../types';
import { srcList } from '../../pages/rec/sources';

// Facts checked 2026-10-03: CPSC 2024 OHV report (ED-treated injuries ~102,000/yr 2019-2023;
// Florida 107 reported deaths 2019-2021; overturns and collisions most common hazard
// patterns in fatal incidents); s. 316.2074 F.S. (2026) (ATV definition, under-16 helmet and
// eye protection, crash notice); s. 316.2123 (roads); ss. 317.0003, 317.0006 (OHV titles,
// transfer on sale). No insurer named, no prices.
const KEYS = ['cpscOhv', 's316_2074', 's316_2123', 's317_0003', 's317_0006'] as const;

export const post: BlogPost = {
  slug: 'atv-utv-public-roads-florida',
  datePublished: '2026-10-03',
  translations: {
    en: {
      title: 'ATVs, UTVs and Dirt Bikes in Florida: A Family Checklist for Titles, Roads and Riders',
      metaTitle: 'ATV and UTV Rules in Florida: Family Checklist | M&K Agency',
      description: 'Buying, riding or lending an ATV, UTV or dirt bike in Florida? Titles, when road riding is allowed, helmets for kids and what to do after a crash.',
      excerpt: 'Off-road machines are a big part of family life in rural Florida. Here is a short checklist on the title, the road rules, the kids and the coverage.',
      category: 'Off-road vehicle insurance',
      body: [
        { type: 'p', text: 'From the groves of South Dade to the ranches up north, ATVs, side-by-sides and dirt bikes are tools, toys and family time. They are also serious machines. A U.S. Consumer Product Safety Commission report estimates about **102,000 emergency-room injuries a year** involving off-highway vehicles across the U.S., and **107 reported deaths in Florida** from 2019 to 2021 ([CPSC](https://www.cpsc.gov/s3fs-public/2024_OHV_Annual_Report_0.pdf)). Overturns and collisions were the most common patterns in fatal incidents.' },
        { type: 'p', text: 'Use this checklist when you buy, ride or lend one.' },
        { type: 'h2', text: 'When you buy one: the title' },
        { type: 'ul', items: [
          'Florida treats **ATVs, two-rider ATVs, ROVs (side-by-sides) and off-highway motorcycles** used off the road as off-highway vehicles ([s. 317.0003](https://www.flsenate.gov/Laws/Statutes/2026/317.0003)).',
          'An off-highway vehicle bought by a Florida resident, or owned by a resident and used on public lands, **must be titled** ([s. 317.0006](https://www.flsenate.gov/Laws/Statutes/2026/317.0006)).',
          'A seller must **hand over the title** with the transfer completed. Buying a used machine without one makes it hard to prove ownership, including after a theft.',
        ] },
        { type: 'h2', text: 'When you ride: roads and county rules' },
        { type: 'p', text: 'ATVs are not allowed on public roads, with one exception: **daytime riding on an unpaved road with a posted speed limit under 35 mph** ([s. 316.2123](https://www.flsenate.gov/Laws/Statutes/2026/316.2123)). A county can opt out of that exception, or designate specific unpaved roads for daytime ATV use. So check your **county’s rules** before you ride from the farm to a neighbor’s place. Where road use is allowed, the operator must be a licensed driver or a minor under the direct supervision of one, and must show proof of ownership if asked.' },
        { type: 'h2', text: 'When kids ride' },
        { type: 'ul', items: [
          'Every ATV rider or operator **under 16** must wear a **DOT helmet and eye protection** ([s. 316.2074](https://www.flsenate.gov/Laws/Statutes/2026/316.2074)).',
          'Match the machine to the rider: an adult-size ATV is not a kid’s ride.',
          'Count the seats. A passenger on a single-rider ATV changes how it handles.',
        ] },
        { type: 'callout', title: 'Have an ATV, UTV or dirt bike?', text: 'See our [Florida ATV, UTV and dirt bike insurance guide](/en/atv-utv-insurance-florida) for the coverage gaps families miss, starting with the homeowners policy.' },
        { type: 'h2', text: 'After a crash' },
        { type: 'p', text: 'If a crash kills someone or injures someone who is then treated by a doctor, each ATV operator involved must **give notice of the crash** under s. 316.2074. Take photos, get names and call your agent. The questions that decide what gets paid are usually liability, medical payments and whether the person riding was allowed to.' },
        { type: 'p', text: 'Coverage depends on each policy. Many homeowners policies limit motorized vehicles; ask a licensed agent how yours treats an ATV or UTV.' },
      ],
      faq: [
        { q: 'What are the rules for kids on ATVs in Florida?', a: 'Anyone under 16 who operates or rides an ATV must wear a DOT helmet and eye protection (s. 316.2074). On the limited unpaved roads where ATVs are allowed, the operator must be a licensed driver or a minor under the direct supervision of a licensed driver. Parks and private land can have their own rules too.' },
        { q: 'Do I need a title for a used dirt bike or ATV?', a: 'Yes, an off-highway vehicle bought by a Florida resident or used on public lands must be titled, and the seller must give you the title with the transfer completed.' },
        { q: 'Can I ride my side-by-side on a county road?', a: 'Only if the road is unpaved, the posted limit is under 35 mph, it is daytime, and your county has not opted out, or if the county has designated that road for ATV use. Check your county’s rules.' },
        { q: 'What should I do after an ATV crash?', a: 'Get help for anyone injured, give notice of the crash if someone died or was treated by a doctor, take photos and call your agent to report the claim.' },
      ],
      sources: srcList('en', [...KEYS]),
    },
    es: {
      title: 'ATV, UTV y motos de tierra en Florida: lista para la familia sobre títulos, vías y conductores',
      metaTitle: 'Reglas de ATV y UTV en Florida: lista familiar | M&K Agency',
      description: '¿Va a comprar, manejar o prestar un ATV, UTV o moto de tierra en Florida? Título, cuándo se puede ir por la vía, casco para los niños y qué hacer tras un accidente.',
      excerpt: 'Los todoterrenos son parte de la vida familiar en la Florida rural. Una lista corta sobre el título, las reglas de la vía, los niños y la cobertura.',
      category: 'Seguro de vehículos todoterreno',
      body: [
        { type: 'p', text: 'De las fincas del sur de Miami-Dade a los ranchos del norte, los ATV, los side-by-side y las motos de tierra son herramienta, diversión y tiempo en familia. También son máquinas serias. Un informe de la Comisión de Seguridad de Productos de Consumo de EE. UU. calcula unas **102,000 lesiones al año atendidas en emergencias** con vehículos todoterreno en todo el país, y **107 muertes reportadas en Florida** de 2019 a 2021 ([CPSC](https://www.cpsc.gov/s3fs-public/2024_OHV_Annual_Report_0.pdf)). Los vuelcos y los choques fueron los patrones más comunes en los casos mortales.' },
        { type: 'p', text: 'Use esta lista cuando compre, maneje o preste uno.' },
        { type: 'h2', text: 'Al comprarlo: el título' },
        { type: 'ul', items: [
          'Florida considera vehículos todoterreno a los **ATV, los ATV de dos plazas, los ROV (side-by-side) y las motos de tierra** que se usan fuera de las vías ([s. 317.0003](https://www.flsenate.gov/Laws/Statutes/2026/317.0003)).',
          'Un vehículo todoterreno comprado por un residente de Florida, o que un residente usa en terrenos públicos, **debe tener título** ([s. 317.0006](https://www.flsenate.gov/Laws/Statutes/2026/317.0006)).',
          'El vendedor debe **entregar el título** con la transferencia llena. Comprar uno usado sin título hace difícil probar que es suyo, incluso después de un robo.',
        ] },
        { type: 'h2', text: 'Al manejarlo: vías y reglas del condado' },
        { type: 'p', text: 'Los ATV no pueden ir por la vía pública, con una excepción: **de día por un camino sin pavimentar con límite señalizado menor de 35 mph** ([s. 316.2123](https://www.flsenate.gov/Laws/Statutes/2026/316.2123)). Un condado puede no aplicar esa excepción o señalar caminos sin pavimentar específicos para usar el ATV de día. Así que revise **las reglas de su condado** antes de ir de la finca a casa del vecino. Donde se permite, quien maneja debe tener licencia o ser un menor bajo la supervisión directa de alguien con licencia, y mostrar prueba de propiedad si se la piden.' },
        { type: 'h2', text: 'Cuando montan los niños' },
        { type: 'ul', items: [
          'Todo **menor de 16 años** que maneje o vaya en un ATV debe usar **casco aprobado por el DOT y protección para los ojos** ([s. 316.2074](https://www.flsenate.gov/Laws/Statutes/2026/316.2074)).',
          'Que la máquina vaya con el tamaño del conductor: un ATV de adulto no es para un niño.',
          'Cuente los asientos. Un pasajero en un ATV de una sola plaza cambia cómo responde la máquina.',
        ] },
        { type: 'callout', title: '¿Tiene un ATV, UTV o moto de tierra?', text: 'Vea nuestra [guía de seguro de ATV, UTV y motos de tierra en Florida](/es/atv-utv-insurance-florida) con los huecos de cobertura que las familias pasan por alto, empezando por el seguro de casa.' },
        { type: 'h2', text: 'Después de un accidente' },
        { type: 'p', text: 'Si en un accidente muere alguien o alguien se lesiona y lo atiende un médico, cada conductor de ATV involucrado debe **dar aviso del accidente** según la s. 316.2074. Tome fotos, anote nombres y llame a su agente. Lo que decide qué se paga suele ser la responsabilidad civil, los pagos médicos y si quien manejaba tenía permiso.' },
        { type: 'p', text: 'La cobertura depende de cada póliza. Muchas pólizas de casa limitan los vehículos motorizados; pregúntele a un agente licenciado cómo trata la suya un ATV o UTV.' },
      ],
      faq: [
        { q: '¿Qué reglas hay para los niños en ATV en Florida?', a: 'Todo menor de 16 años que maneje o vaya en un ATV debe usar casco aprobado por el DOT y protección para los ojos (s. 316.2074). En los pocos caminos sin pavimentar donde se permite el ATV, quien maneja debe tener licencia o ser un menor bajo la supervisión directa de alguien con licencia. Los parques y los terrenos privados también pueden tener sus propias reglas.' },
        { q: '¿Necesito título para un ATV o moto de tierra usada?', a: 'Sí. Un vehículo todoterreno comprado por un residente de Florida o usado en terrenos públicos debe tener título, y el vendedor debe entregárselo con la transferencia llena.' },
        { q: '¿Puedo manejar mi side-by-side por un camino del condado?', a: 'Solo si el camino no está pavimentado, el límite señalizado es menor de 35 mph, es de día y su condado no excluyó esa opción, o si el condado designó ese camino para ATV. Revise las reglas de su condado.' },
        { q: '¿Qué hago después de un accidente en ATV?', a: 'Busque ayuda para los lesionados, dé aviso del accidente si alguien murió o lo atendió un médico, tome fotos y llame a su agente para reportar el reclamo.' },
      ],
      sources: srcList('es', [...KEYS]),
    },
    ru: {
      title: 'Квадроциклы, UTV и эндуро во Флориде: семейный чек-лист по титулу, дорогам и водителям',
      metaTitle: 'Правила для квадроциклов и UTV во Флориде | M&K Agency',
      description: 'Покупаете, катаетесь или даёте покататься на квадроцикле, UTV или эндуро во Флориде? Титул, когда можно на дорогу, шлемы для детей и что делать после аварии.',
      excerpt: 'Внедорожная техника — часть семейной жизни в сельской Флориде. Короткий чек-лист: титул, правила дорог, дети и страховка.',
      category: 'Страхование внедорожной техники',
      body: [
        { type: 'p', text: 'От садов юга Майами-Дейд до ранчо на севере штата квадроциклы, багги side-by-side и эндуро — это и рабочий инструмент, и развлечение, и время с семьёй. Но это серьёзная техника. По оценке Комиссии по безопасности потребительских товаров США, в стране бывает около **102 000 обращений в неотложку в год** из-за травм на внедорожной технике, а во Флориде за 2019–2021 годы зарегистрировано **107 смертей** ([CPSC](https://www.cpsc.gov/s3fs-public/2024_OHV_Annual_Report_0.pdf)). Чаще всего в смертельных случаях техника опрокидывалась или сталкивалась.' },
        { type: 'p', text: 'Пройдитесь по этому списку, когда покупаете, катаетесь или даёте технику другим.' },
        { type: 'h2', text: 'При покупке: титул' },
        { type: 'ul', items: [
          'Флорида относит к внедорожной технике **квадроциклы (ATV), двухместные ATV, ROV (side-by-side) и внедорожные мотоциклы** при использовании вне дорог ([ст. 317.0003](https://www.flsenate.gov/Laws/Statutes/2026/317.0003)).',
          'Техника, купленная жителем Флориды или используемая жителем на государственных землях, **должна иметь титул** ([ст. 317.0006](https://www.flsenate.gov/Laws/Statutes/2026/317.0006)).',
          'Продавец обязан **передать титул** с заполненной передачей права собственности. Купив подержанную машину без титула, трудно доказать, что она ваша, в том числе после угона.',
        ] },
        { type: 'h2', text: 'В поездке: дороги и правила округа' },
        { type: 'p', text: 'На дороги общего пользования квадроциклам нельзя, за одним исключением: **днём по грунтовой дороге с ограничением скорости ниже 35 миль в час** ([ст. 316.2123](https://www.flsenate.gov/Laws/Statutes/2026/316.2123)). Округ может отменить это исключение или назначить конкретные грунтовые дороги для дневной езды на ATV. Поэтому проверьте **правила своего округа**, прежде чем ехать с фермы к соседу. Там, где это разрешено, водитель должен иметь права или быть несовершеннолетним под прямым присмотром водителя с правами и по требованию показать документ о праве собственности.' },
        { type: 'h2', text: 'Когда катаются дети' },
        { type: 'ul', items: [
          'Каждый **младше 16 лет**, кто управляет квадроциклом или едет на нём, обязан быть в **шлеме по стандарту DOT и в защите для глаз** ([ст. 316.2074](https://www.flsenate.gov/Laws/Statutes/2026/316.2074)).',
          'Техника должна подходить водителю по размеру: взрослый квадроцикл — не для ребёнка.',
          'Считайте места. Пассажир на одноместном ATV меняет поведение машины.',
        ] },
        { type: 'callout', title: 'Есть квадроцикл, UTV или эндуро?', text: 'Читайте наш [гид по страховке квадроциклов, UTV и эндуро во Флориде](/ru/atv-utv-insurance-florida) — о дырах в покрытии, которые семьи пропускают, начиная со страховки дома.' },
        { type: 'h2', text: 'После аварии' },
        { type: 'p', text: 'Если в аварии кто-то погиб или получил травму, по которой его лечил врач, каждый водитель квадроцикла обязан **сообщить об аварии** по ст. 316.2074. Сфотографируйте место, запишите имена и позвоните агенту. Что будет оплачено, обычно решают ответственность, медицинские расходы и то, было ли у водителя ваше разрешение.' },
        { type: 'p', text: 'Покрытие зависит от конкретного полиса. Многие полисы на дом ограничивают моторную технику — спросите лицензированного агента, как ваш полис относится к квадроциклу или UTV.' },
      ],
      faq: [
        { q: 'Какие правила для детей на квадроциклах во Флориде?', a: 'Все младше 16 лет, кто управляет квадроциклом или едет на нём, обязаны быть в шлеме DOT и защите для глаз (ст. 316.2074). На тех немногих грунтовых дорогах, где ATV разрешены, водитель должен иметь права или быть несовершеннолетним под прямым присмотром водителя с правами. В парках и на частной земле могут быть и свои правила.' },
        { q: 'Нужен ли титул на подержанный квадроцикл или эндуро?', a: 'Да. Техника, купленная жителем Флориды или используемая на государственных землях, должна иметь титул, и продавец обязан передать его с заполненной передачей права собственности.' },
        { q: 'Можно ли ехать на багги по дороге округа?', a: 'Только если дорога грунтовая, ограничение ниже 35 миль в час, сейчас день и ваш округ не отменил это исключение — или если округ назначил эту дорогу для ATV. Проверьте правила своего округа.' },
        { q: 'Что делать после аварии на квадроцикле?', a: 'Помогите пострадавшим, сообщите об аварии, если кто-то погиб или его лечил врач, сделайте фото и позвоните агенту, чтобы заявить убыток.' },
      ],
      sources: srcList('ru', [...KEYS]),
    },
  },
};
