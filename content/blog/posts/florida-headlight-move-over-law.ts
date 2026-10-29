import type { BlogPost } from '../types';

// Facts checked 2026-10-29 against official sources:
// - NIST "Daylight Saving Time Rules": during 2026, DST is in effect from March 8 at 2 a.m. to November 1 at
//   2 a.m. (local time).
// - 2026 F.S. 316.217(1): lighted lamps required (a) from sunset to sunrise, including the twilight hours
//   (between sunset and full night, between full night and sunrise); (b) during any rain, smoke or fog.
//   (5) noncriminal traffic infraction, moving violation (ch. 318).
// - 2026 F.S. 316.220(1): at least two headlamps, white light; no object, material or covering that alters
//   the light color. (3) nonmoving violation.
// - 2026 F.S. 316.237(1)(a)-(b): high beam reveals persons/vehicles at least 450 ft, low beam at least 150 ft;
//   no covering that reduces that visibility. (3) nonmoving violation.
// - 2026 F.S. 316.238(1)(a)-(b): dim within 500 ft of an oncoming vehicle; within 300 ft when following.
//   (2) moving violation.
// - 2026 F.S. 316.2397(7)(a),(c): flashing lights allowed to indicate the vehicle is lawfully stopped or
//   disabled; and during extremely low visibility on roads posted 55 mph or higher.
// - 2026 F.S. 316.126(1)(b): emergency vehicle with visual signals on the roadside; sanitation or utility
//   vehicle working on the roadside; wrecker with amber lights doing a recovery/loading; road and bridge
//   maintenance or construction vehicle with warning lights and without advance signs/channelizing devices;
//   disabled vehicle stopped with warning/hazard lights, or using flares or emergency signage, or with one or
//   more persons visibly present. 1. vacate the lane closest on a road with 2+ lanes in that direction, if
//   safe; otherwise slow down per 2. 2. 20 mph under the posted limit when the limit is 25 mph or more; 5 mph
//   when the limit is 20 mph or less (two-lane roads). (1)(a) yield/pull over for approaching emergency
//   vehicles. (6) moving violation (ch. 318).
// - FLHSMV "Move Over, Florida!": 2024: 205 crashes and more than 17,500 citations for failing to move over;
//   drivers 20-29 most likely to violate; violation results in a fine, fees and points.
// - 2026 F.S. 322.27(3)(d)8: all other moving violations, 3 points; (3)(a) 12 points in 12 months = up to
//   30 days suspension; (3)(d)4.c/6 certain camera-enforced violations "may not be used for purposes of
//   setting motor vehicle insurance rates".
// No carrier names, no premium or fine figures.
const S = {
  nist: 'https://www.nist.gov/pml/time-and-frequency-division/popular-links/daylight-saving-time-dst',
  s316217: 'https://www.flsenate.gov/Laws/Statutes/2026/316.217',
  s316220: 'https://www.flsenate.gov/Laws/Statutes/2026/316.220',
  s316237: 'https://www.flsenate.gov/Laws/Statutes/2026/316.237',
  s316238: 'https://www.flsenate.gov/Laws/Statutes/2026/316.238',
  s3162397: 'https://www.flsenate.gov/Laws/Statutes/2026/316.2397',
  s316126: 'https://www.flsenate.gov/Laws/Statutes/2026/316.126',
  s32227: 'https://www.flsenate.gov/Laws/Statutes/2026/322.27',
  flhsmv: 'https://www.flhsmv.gov/safety-center/driving-safety/move-over/',
};

export const post: BlogPost = {
  slug: 'florida-headlight-move-over-law',
  datePublished: '2026-10-29',
  translations: {
    en: {
      title: 'Clocks Change Nov 1: Florida Headlight and Move Over Laws for Night Driving',
      metaTitle: 'Florida Move Over Law and Headlights After Nov 1 | M&K Agency',
      description: 'Clocks fall back Nov 1, so the commute home gets darker. When Florida law requires headlights, when to dim, and how to move over for vehicles on the shoulder.',
      ogAlt: 'Illustration of a car with headlights on at dusk, changing lanes away from a vehicle with flashing lights stopped on the shoulder',
      excerpt: 'Daylight saving time ends Sunday, Nov 1. Here is what Florida law says about headlights, high beams and the Move Over law, and what to do if you are the one stopped on the shoulder.',
      category: 'Car insurance',
      body: [
        { type: 'p', text: 'Daylight saving time ends on **Sunday, November 1, 2026, at 2 a.m.**, when clocks go back one hour ([NIST](' + S.nist + ')). From Monday on, sunset comes about an hour earlier on the clock, so many people who drove home in daylight last week will drive home in the dark. Two Florida laws matter more after dark: the headlight rules and the Move Over law. Here is what they actually say, in plain words.' },
        { type: 'h2', text: 'When Florida law requires headlights' },
        { type: 'p', text: 'Under [s. 316.217](' + S.s316217 + '), every vehicle on a Florida road must have its lamps on:' },
        { type: 'ul', items: [
          '**From sunset to sunrise, including twilight.** The law defines twilight as the time between sunset and full night, and between full night and sunrise. "It is not fully dark yet" is not an exception.',
          '**During any rain, smoke or fog**, day or night. If you need your wipers in a South Florida downpour, you need your headlights too.',
        ] },
        { type: 'p', text: 'Driving without required lamps is a noncriminal **moving** violation ([s. 316.217(5)](' + S.s316217 + ')). Check that your lights are switched on, not just set to whatever the car does in daylight, and walk around the car once in a while to make sure every lamp works.' },
        { type: 'h2', text: 'Covers, tints and colored bulbs' },
        { type: 'p', text: 'A car needs at least two headlamps, one on each side, showing **white** light. Nothing placed over a headlamp may change that color ([s. 316.220](' + S.s316220 + ')). The law also bans covers or films that cut how far the beams reach: the high beam must reveal people and vehicles at least **450 feet** ahead, and the low beam at least **150 feet** ([s. 316.237](' + S.s316237 + ')). Smoked lens covers can look good in daylight and become a ticket at night.' },
        { type: 'h2', text: 'High beams: when to dim' },
        { type: 'p', text: 'On dark roads, such as the stretch of U.S. 1 south toward the Keys or rural roads around the Redland, high beams help. Florida law requires you to switch to low beams ([s. 316.238](' + S.s316238 + ')):' },
        { type: 'ul', items: [
          'within **500 feet** of an oncoming vehicle;',
          'within **300 feet** when you are following another vehicle.',
        ] },
        { type: 'p', text: 'Failing to dim is also a moving violation. The same section requires a beam strong enough to reveal people and vehicles at a safe distance, so slow down if you are outdriving your low beams.' },
        { type: 'h2', text: 'The Move Over law: what to do for a vehicle on the shoulder' },
        { type: 'p', text: 'Flashing lights on the shoulder are harder to judge at night. [Section 316.126(1)(b)](' + S.s316126 + ') applies when any of these is stopped on the roadside:' },
        { type: 'ul', items: [
          'a police car, ambulance, fire truck or other emergency vehicle showing its lights;',
          'a sanitation or utility vehicle doing its work on the roadside;',
          'a tow truck with amber lights doing a recovery or loading a vehicle;',
          'a road maintenance or construction vehicle with warning lights, when there are no advance signs or cones;',
          'a **disabled vehicle** with hazard lights on, or using flares or emergency signs, or with a person visibly next to it.',
        ] },
        { type: 'p', text: 'What the law requires, as soon as it is safe:' },
        { type: 'ol', items: [
          '**Move over.** On an interstate or any road with two or more lanes in your direction, leave the lane closest to the stopped vehicle, unless a police officer directs otherwise.',
          '**If you cannot move over safely, slow down** to **20 mph below** the posted limit when the limit is 25 mph or more. On a two-lane road posted at 20 mph or less, slow to **5 mph**.',
        ] },
        { type: 'p', text: 'This is different from an emergency vehicle coming up behind you with its siren or lights on. Then you must pull over toward the closest edge of the road, clear of intersections, and stop until it passes ([s. 316.126(1)(a)](' + S.s316126 + ')).' },
        { type: 'p', text: 'FLHSMV reports that in 2024 there were **205 crashes and more than 17,500 citations** for failing to move over in Florida, and that drivers aged 20 to 29 are the most likely to violate the law ([FLHSMV](' + S.flhsmv + ')). A violation is a moving violation that brings a fine, fees and points on your record.' },
        { type: 'h2', text: 'If you are the one stopped on the shoulder' },
        { type: 'p', text: 'Read the list above again: the law protects a disabled vehicle only when other drivers can tell it is there. So if you get a flat tire or the engine dies on the Turnpike after dark:' },
        { type: 'ul', items: [
          'get as far off the road as you can and **turn on your hazard lights**; Florida law allows flashing lights to show that a vehicle is lawfully stopped or disabled ([s. 316.2397(7)](' + S.s3162397 + '));',
          'if you carry flares or a reflective emergency sign, put them out;',
          'stay away from moving traffic, and call for help.',
        ] },
        { type: 'p', text: 'One more rule from the same section: you may use your hazard lights while driving only during periods of **extremely low visibility** on roads posted at 55 mph or higher ([s. 316.2397(7)(c)](' + S.s3162397 + ')).' },
        { type: 'h2', text: 'Points, your license and your auto policy' },
        { type: 'p', text: 'Under Florida’s point system, most moving violations without their own category, such as these, carry **3 points**, and 12 points within 12 months can lead to a license suspension of up to 30 days ([s. 322.27(3)](' + S.s32227 + ')). The same statute shows that driving records and insurance are linked: it lists certain camera-enforced violations that “may not be used for purposes of setting motor vehicle insurance rates.” That carve-out covers only certain camera-enforced violations, not a ticket for failing to move over or to dim your lights.' },
        { type: 'p', text: 'Night driving is also a good moment to look at what your own policy would do after a crash. Florida’s minimum, PIP and property damage liability, does not pay for injuries you cause to other people; our [minimum car insurance guide](/en/blog/florida-minimum-car-insurance-requirements) explains the gap. [Uninsured motorist coverage](/en/blog/uninsured-motorist-coverage-florida) matters if the other driver has little or no insurance, and [collision coverage](/en/blog/comprehensive-vs-collision-florida) is what repairs your own car after hitting something in the dark. If a crash does happen, see [what to do after a car accident in Miami-Dade](/en/auto-insurance-after-accident-miami-dade).' },
        { type: 'callout', title: 'Want a second look at your auto policy?', text: 'Send us your declarations page or [request a quote](/en/quote), or call [(305) 859-3953](tel:+13058593953), Monday to Friday 9 to 6, Saturday by appointment. We explain it in English, Spanish or Russian. See also our [car insurance page](/en/car-insurance-florida-city). This is general information, not legal advice; coverage depends on your policy, so talk with a licensed agent.' },
      ],
      faq: [
        { q: 'When does daylight saving time end in 2026?', a: 'On Sunday, November 1, 2026, at 2 a.m. local time, according to NIST. Clocks go back one hour.' },
        { q: 'Do I need headlights in the rain in Florida during the day?', a: 'Yes. Section 316.217 requires lighted lamps during any rain, smoke or fog, and from sunset to sunrise, including twilight.' },
        { q: 'What does the Florida Move Over law require?', a: 'For a stopped emergency, sanitation, utility, tow, road maintenance or disabled vehicle, leave the lane next to it when you can do so safely. If you cannot, slow to 20 mph below a posted limit of 25 mph or more, or to 5 mph where the limit is 20 mph or less.' },
        { q: 'Does the Move Over law protect me if my car breaks down?', a: 'It covers a disabled vehicle that has its hazard or warning lights on, uses flares or emergency signs, or has a person visibly present. Turn on your hazards so other drivers know to move over.' },
      ],
      sources: [
        { label: 'NIST: Daylight Saving Time rules (2026 dates)', url: S.nist },
        { label: 'Florida Statutes s. 316.217 (2026): when lighted lamps are required', url: S.s316217 },
        { label: 'Florida Statutes s. 316.220 (2026): headlamps on motor vehicles', url: S.s316220 },
        { label: 'Florida Statutes s. 316.237 (2026): multiple-beam road-lighting equipment', url: S.s316237 },
        { label: 'Florida Statutes s. 316.238 (2026): use of high and low beams', url: S.s316238 },
        { label: 'Florida Statutes s. 316.2397 (2026): certain lights prohibited; flashing lights exceptions', url: S.s3162397 },
        { label: 'Florida Statutes s. 316.126 (2026): Move Over; emergency and disabled vehicles', url: S.s316126 },
        { label: 'FLHSMV: Move Over, Florida!', url: S.flhsmv },
        { label: 'Florida Statutes s. 322.27 (2026): point system and suspension', url: S.s32227 },
      ],
    },
    es: {
      title: 'Cambio de hora el 1 de noviembre: luces y ley Move Over en Florida para manejar de noche',
      metaTitle: 'Ley Move Over y luces en Florida tras el 1 de nov. | M&K Agency',
      description: 'El 1 de noviembre se atrasa la hora y oscurece antes. Cuándo exige Florida las luces, cuándo bajar las altas y cómo cumplir la ley Move Over en la carretera.',
      ogAlt: 'Ilustración de un carro con las luces encendidas al anochecer que se cambia de carril para alejarse de un vehículo con luces intermitentes detenido en el paseo',
      excerpt: 'El horario de verano termina el domingo 1 de noviembre. Lo que dice la ley de Florida sobre las luces, las luces altas y la ley Move Over, y qué hacer si usted es quien se quedó parado en el paseo.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'El horario de verano termina el **domingo 1 de noviembre de 2026 a las 2 a.m.**, cuando los relojes se atrasan una hora ([NIST](' + S.nist + ')). Desde el lunes, el sol se pone más o menos una hora antes según el reloj, y mucha gente que la semana pasada volvía a casa con luz de día va a manejar ya de noche. Hay dos leyes de Florida que pesan más cuando oscurece: las reglas de las luces y la ley Move Over. Veamos qué dicen.' },
        { type: 'h2', text: 'Cuándo la ley exige llevar las luces encendidas' },
        { type: 'p', text: 'Según la [sección 316.217](' + S.s316217 + '), todo vehículo que circule por una vía de Florida debe llevar las luces encendidas:' },
        { type: 'ul', items: [
          '**Desde la puesta del sol hasta la salida del sol, incluido el crepúsculo.** La ley define el crepúsculo como el rato entre la puesta del sol y la noche cerrada, y entre la noche cerrada y el amanecer. “Todavía no está oscuro del todo” no es excusa.',
          '**Con cualquier lluvia, humo o neblina**, sea de día o de noche. Si un aguacero del sur de Florida le obliga a poner los limpiaparabrisas, también le obliga a prender las luces.',
        ] },
        { type: 'p', text: 'Manejar sin las luces requeridas es una infracción de tránsito no penal **en movimiento** (moving violation) ([s. 316.217(5)](' + S.s316217 + ')). Fíjese en que las luces estén realmente encendidas y revise de vez en cuando que todas funcionen.' },
        { type: 'h2', text: 'Micas oscuras, películas y bombillos de color' },
        { type: 'p', text: 'Un carro debe tener por lo menos dos faros delanteros, uno a cada lado, con luz **blanca**, y nada colocado encima puede cambiar ese color ([s. 316.220](' + S.s316220 + ')). La ley también prohíbe cubiertas o películas que reduzcan el alcance: la luz alta debe dejar ver personas y vehículos a por lo menos **450 pies**, y la baja a **150 pies** ([s. 316.237](' + S.s316237 + ')). Unas micas ahumadas pueden lucir bien de día y terminar en multa de noche.' },
        { type: 'h2', text: 'Luces altas: cuándo hay que bajarlas' },
        { type: 'p', text: 'En tramos oscuros, como la U.S. 1 hacia los Cayos o los caminos rurales de la zona de Redland, las luces altas ayudan. Pero la ley obliga a cambiar a luces bajas ([s. 316.238](' + S.s316238 + ')):' },
        { type: 'ul', items: [
          'a menos de **500 pies** de un vehículo que viene de frente;',
          'a menos de **300 pies** cuando va detrás de otro vehículo.',
        ] },
        { type: 'p', text: 'No bajarlas también es una infracción en movimiento. La misma sección exige que la luz alcance para ver a tiempo a personas y vehículos, así que reduzca la velocidad si sus luces bajas no le dejan ver lo suficiente.' },
        { type: 'h2', text: 'La ley Move Over: qué hacer ante un vehículo detenido en el paseo' },
        { type: 'p', text: 'De noche cuesta más calcular la distancia a unas luces intermitentes. La [sección 316.126(1)(b)](' + S.s316126 + ') se aplica cuando hay detenido al costado de la vía:' },
        { type: 'ul', items: [
          'una patrulla, ambulancia, camión de bomberos u otro vehículo de emergencia con las luces encendidas;',
          'un camión de basura o de servicios públicos (luz, agua, teléfono) trabajando al lado de la vía;',
          'una grúa con luces ámbar remolcando o cargando un vehículo;',
          'un vehículo de mantenimiento o construcción de carreteras con luces de advertencia, cuando no hay letreros ni conos previos;',
          'un **vehículo averiado** con las luces de emergencia (intermitentes) encendidas, con bengalas o señales de emergencia, o con alguna persona visible a su lado.',
        ] },
        { type: 'p', text: 'Lo que exige la ley, en cuanto sea seguro hacerlo:' },
        { type: 'ol', items: [
          '**Cámbiese de carril.** En una interestatal o cualquier vía con dos o más carriles en su sentido, deje libre el carril más cercano al vehículo detenido, salvo que un policía le indique otra cosa.',
          '**Si no puede cambiarse con seguridad, reduzca la velocidad** a **20 mph por debajo** del límite indicado cuando el límite es de 25 mph o más. En una vía de dos carriles con límite de 20 mph o menos, baje a **5 mph**.',
        ] },
        { type: 'p', text: 'Otra cosa es un vehículo de emergencia que se acerca con sirena o luces encendidas. En ese caso debe orillarse hacia el borde más cercano de la vía, fuera de las intersecciones, y detenerse hasta que pase ([s. 316.126(1)(a)](' + S.s316126 + ')).' },
        { type: 'p', text: 'Según el FLHSMV, en 2024 hubo **205 choques y más de 17,500 multas** en Florida por no cumplir la ley Move Over, y los conductores de 20 a 29 años son los que más la incumplen ([FLHSMV](' + S.flhsmv + ')). La infracción trae multa, cargos y puntos en su récord de manejo.' },
        { type: 'h2', text: 'Si quien está parado en el paseo es usted' },
        { type: 'p', text: 'Vuelva a mirar la lista: la ley protege a un vehículo averiado solo cuando los demás pueden notar que está ahí. Si se le poncha una goma o se le apaga el motor en el Turnpike de noche:' },
        { type: 'ul', items: [
          'sálgase de la vía todo lo que pueda y **prenda las luces de emergencia**; la ley de Florida permite las luces intermitentes para indicar que un vehículo está detenido legalmente o averiado ([s. 316.2397(7)](' + S.s3162397 + '));',
          'si lleva bengalas o un triángulo o letrero reflectante, colóquelos;',
          'manténgase lejos del tráfico y pida ayuda.',
        ] },
        { type: 'p', text: 'Un detalle más de esa misma sección: manejando, las luces de emergencia solo se permiten con **visibilidad extremadamente baja** en vías con límite de 55 mph o más ([s. 316.2397(7)(c)](' + S.s3162397 + ')).' },
        { type: 'h2', text: 'Puntos, su licencia y su póliza de auto' },
        { type: 'p', text: 'En el sistema de puntos de Florida, las infracciones en movimiento que no tienen una categoría propia, como estas, suman **3 puntos**, y 12 puntos en 12 meses pueden llevar a una suspensión de la licencia de hasta 30 días ([s. 322.27(3)](' + S.s32227 + ')). La misma ley deja claro que el récord de manejo y el seguro van de la mano: señala que ciertas infracciones captadas por cámara no pueden usarse para fijar las tarifas del seguro de auto. Esa excepción cubre solo esas infracciones de cámara, no una multa por no cambiarse de carril o por no bajar las luces.' },
        { type: 'p', text: 'Ya que va a manejar más de noche, vale la pena repasar qué haría su póliza después de un choque. El mínimo de Florida, PIP y daños a la propiedad (PDL), no paga las lesiones que usted cause a otras personas; nuestra [guía del seguro mínimo](/es/blog/florida-minimum-car-insurance-requirements) explica ese hueco. La [cobertura de motorista sin seguro](/es/blog/uninsured-motorist-coverage-florida) importa si el otro conductor tiene poco o ningún seguro, y la [cobertura de colisión](/es/blog/comprehensive-vs-collision-florida) es la que repara su propio carro si choca contra algo en la oscuridad. Si llega a tener un accidente, lea [qué hacer después de un choque en Miami-Dade](/es/auto-insurance-after-accident-miami-dade).' },
        { type: 'callout', title: '¿Quiere que revisemos su póliza de auto?', text: 'Envíenos su página de declaraciones, [pida una cotización](/es/quote) o llame al [(305) 859-3953](tel:+13058593953), de lunes a viernes de 9 a 6 y los sábados con cita. Le atendemos en español, inglés o ruso. Vea también nuestra [página de seguro de auto](/es/car-insurance-florida-city). Esto es información general, no asesoría legal; la cobertura depende de su póliza, así que consulte con un agente con licencia.' },
      ],
      faq: [
        { q: '¿Cuándo termina el horario de verano en 2026?', a: 'El domingo 1 de noviembre de 2026 a las 2 a.m., hora local, según el NIST. Los relojes se atrasan una hora.' },
        { q: '¿Tengo que prender las luces si llueve de día en Florida?', a: 'Sí. La sección 316.217 exige las luces encendidas con cualquier lluvia, humo o neblina, y desde la puesta hasta la salida del sol, incluido el crepúsculo.' },
        { q: '¿Qué exige la ley Move Over en Florida?', a: 'Ante un vehículo de emergencia, de basura, de servicios públicos, una grúa, un vehículo de mantenimiento vial o un carro averiado detenido, deje libre el carril de al lado si puede hacerlo con seguridad. Si no puede, baje a 20 mph por debajo de un límite de 25 mph o más, o a 5 mph donde el límite es de 20 mph o menos.' },
        { q: '¿Me protege la ley Move Over si se me daña el carro?', a: 'Protege al vehículo averiado que tiene encendidas las luces de emergencia, usa bengalas o señales de emergencia, o tiene a una persona visible al lado. Prenda las intermitentes para que los demás sepan que deben cambiarse de carril.' },
      ],
      sources: [
        { label: 'NIST: reglas del horario de verano (fechas de 2026), en inglés', url: S.nist },
        { label: 'Estatutos de Florida, s. 316.217 (2026): cuándo se requieren luces encendidas', url: S.s316217 },
        { label: 'Estatutos de Florida, s. 316.220 (2026): faros delanteros', url: S.s316220 },
        { label: 'Estatutos de Florida, s. 316.237 (2026): luces altas y bajas (equipo)', url: S.s316237 },
        { label: 'Estatutos de Florida, s. 316.238 (2026): uso de luces altas y bajas', url: S.s316238 },
        { label: 'Estatutos de Florida, s. 316.2397 (2026): luces prohibidas; luces intermitentes permitidas', url: S.s3162397 },
        { label: 'Estatutos de Florida, s. 316.126 (2026): ley Move Over; vehículos de emergencia y averiados', url: S.s316126 },
        { label: 'FLHSMV: Move Over, Florida!', url: S.flhsmv },
        { label: 'Estatutos de Florida, s. 322.27 (2026): sistema de puntos y suspensión', url: S.s32227 },
      ],
    },
    ru: {
      title: 'Переход на зимнее время 1 ноября: фары и закон Move Over во Флориде',
      metaTitle: 'Закон Move Over и фары во Флориде после 1 ноября | M&K Agency',
      description: '1 ноября часы переводят назад, и дорога домой темнеет. Когда во Флориде обязательны фары, когда переключать дальний свет и как работает закон Move Over.',
      ogAlt: 'Иллюстрация: машина с включёнными фарами в сумерках перестраивается подальше от автомобиля с мигалками, стоящего на обочине',
      excerpt: 'Летнее время заканчивается в воскресенье, 1 ноября. Что закон Флориды говорит о фарах, дальнем свете и законе Move Over и что делать, если на обочине остановились вы сами.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Летнее время заканчивается в **воскресенье, 1 ноября 2026 года, в 2:00 ночи**: часы переводят на час назад ([NIST](' + S.nist + ')). С понедельника по часам солнце садится примерно на час раньше, и многие, кто на прошлой неделе возвращался с работы засветло, поедут домой уже в темноте. После заката особенно важны два закона Флориды: правила о фарах и закон Move Over («Уступи полосу»). Разберём, что в них написано на самом деле.' },
        { type: 'h2', text: 'Когда во Флориде обязательно включать фары' },
        { type: 'p', text: 'По [статье 316.217](' + S.s316217 + ') у любого автомобиля на дорогах Флориды должен гореть свет:' },
        { type: 'ul', items: [
          '**От заката до восхода, включая сумерки.** Закон считает сумерками время между закатом и полной темнотой и между полной темнотой и рассветом. «Ещё не совсем стемнело» — не оправдание.',
          '**В любой дождь, дым или туман**, днём и ночью. Если в южнофлоридский ливень вы включили дворники, включайте и фары.',
        ] },
        { type: 'p', text: 'Езда без обязательного света — некриминальное нарушение, которое относится к **движущимся** (moving violation) ([ст. 316.217(5)](' + S.s316217 + ')). Проверяйте, что фары действительно включены, и время от времени обходите машину, чтобы убедиться, что горят все лампы.' },
        { type: 'h2', text: 'Накладки, плёнки и цветные лампы' },
        { type: 'p', text: 'У машины должно быть не меньше двух фар, по одной с каждой стороны, и свет у них **белый**. Всё, что меняет этот цвет, ставить на фары нельзя ([ст. 316.220](' + S.s316220 + ')). Запрещены и накладки или плёнки, которые сокращают дальность: дальний свет должен освещать людей и машины минимум на **450 футов** (около 137 м), ближний — на **150 футов** (около 46 м) ([ст. 316.237](' + S.s316237 + ')). Тонированные накладки днём смотрятся эффектно, а ночью могут обернуться штрафом.' },
        { type: 'h2', text: 'Дальний свет: когда переключать' },
        { type: 'p', text: 'На тёмных участках, например на U.S. 1 в сторону Кис или на загородных дорогах в районе Редленда, дальний свет выручает. Но закон требует переходить на ближний ([ст. 316.238](' + S.s316238 + ')):' },
        { type: 'ul', items: [
          'когда до встречной машины меньше **500 футов** (около 150 м);',
          'когда вы едете за другой машиной ближе **300 футов** (около 90 м).',
        ] },
        { type: 'p', text: 'Не переключить свет — тоже движущееся нарушение. Та же статья требует, чтобы свет позволял вовремя увидеть людей и машины, так что если ближнего света не хватает, сбавьте скорость.' },
        { type: 'h2', text: 'Закон Move Over: что делать, если на обочине стоит машина' },
        { type: 'p', text: 'Ночью труднее оценить, насколько близко мигалки на обочине. [Статья 316.126(1)(b)](' + S.s316126 + ') действует, когда у края дороги стоит:' },
        { type: 'ul', items: [
          'полиция, скорая, пожарная или другая экстренная машина с включёнными сигналами;',
          'мусоровоз или машина коммунальной службы, которая работает у дороги;',
          'эвакуатор с жёлтыми мигалками, который грузит или вытаскивает машину;',
          'дорожная ремонтная или строительная техника с предупреждающими огнями, если перед ней нет знаков и конусов;',
          '**сломанная машина** с включённой аварийкой, с сигнальными огнями (фальшфейерами) или аварийным знаком либо с человеком рядом.',
        ] },
        { type: 'p', text: 'Что требует закон, как только это безопасно:' },
        { type: 'ol', items: [
          '**Перестройтесь.** На хайвее или любой дороге, где в вашем направлении две полосы и больше, освободите полосу, ближайшую к стоящей машине, если полицейский не укажет иначе.',
          '**Если безопасно перестроиться нельзя, сбавьте скорость** до значения на **20 миль/ч ниже** разрешённой, когда ограничение 25 миль/ч и выше. На двухполосной дороге с ограничением 20 миль/ч и меньше — до **5 миль/ч**.',
        ] },
        { type: 'p', text: 'Это другая ситуация, чем экстренная машина, которая догоняет вас с сиреной или мигалками. Тогда нужно прижаться к ближайшему краю дороги, не на перекрёстке, и остановиться, пока она не проедет ([ст. 316.126(1)(a)](' + S.s316126 + ')).' },
        { type: 'p', text: 'По данным FLHSMV, в 2024 году во Флориде было **205 аварий и более 17 500 штрафов** за нарушение закона Move Over, а чаще всего его нарушают водители 20–29 лет ([FLHSMV](' + S.flhsmv + ')). За нарушение — штраф, сборы и баллы в водительской истории.' },
        { type: 'h2', text: 'Если на обочине остановились вы' },
        { type: 'p', text: 'Посмотрите на список ещё раз: закон защищает сломанную машину, только если другие водители могут её заметить. Если ночью на Turnpike пробило колесо или заглох мотор:' },
        { type: 'ul', items: [
          'уйдите с проезжей части как можно дальше и **включите аварийку**: закон Флориды разрешает мигающие огни, чтобы показать, что машина остановилась законно или неисправна ([ст. 316.2397(7)](' + S.s3162397 + '));',
          'если есть фальшфейеры или светоотражающий аварийный знак, выставьте их;',
          'держитесь подальше от потока машин и вызовите помощь.',
        ] },
        { type: 'p', text: 'И ещё одно правило из той же статьи: на ходу аварийку можно включать только при **крайне плохой видимости** на дорогах с ограничением 55 миль/ч и выше ([ст. 316.2397(7)(c)](' + S.s3162397 + ')).' },
        { type: 'h2', text: 'Баллы, права и ваш автополис' },
        { type: 'p', text: 'В балльной системе Флориды движущиеся нарушения без отдельной категории, как эти, дают **3 балла**, а 12 баллов за 12 месяцев могут привести к лишению прав на срок до 30 дней ([ст. 322.27(3)](' + S.s32227 + ')). Та же статья показывает, что водительская история и страховка связаны: в ней перечислены отдельные нарушения, зафиксированные камерами, которые нельзя использовать при расчёте тарифов автостраховки. Это исключение касается только таких камер, а не штрафа за то, что вы не перестроились или не переключили свет.' },
        { type: 'p', text: 'Раз ездить в темноте теперь придётся чаще, стоит проверить, что сделает ваш полис после аварии. Минимум Флориды — PIP и ответственность за имущество (PDL) — не оплачивает травмы, которые вы причините другим людям; об этом пробеле — в нашей [статье о минимальной автостраховке](/ru/blog/florida-minimum-car-insurance-requirements). [Покрытие UM/UIM](/ru/blog/uninsured-motorist-coverage-florida) важно, если у виновника мало страховки или её нет совсем, а [collision](/ru/blog/comprehensive-vs-collision-florida) оплачивает ремонт вашей машины, если вы во что-то врезались в темноте. Если авария всё же случилась, прочитайте, [что делать после ДТП в Miami-Dade](/ru/auto-insurance-after-accident-miami-dade).' },
        { type: 'callout', title: 'Хотите, чтобы мы посмотрели ваш автополис?', text: 'Пришлите нам declarations page, [оставьте заявку](/ru/quote) или позвоните по номеру [(305) 859-3953](tel:+13058593953): понедельник–пятница с 9 до 6, в субботу по записи. Говорим по-русски, по-английски и по-испански. Подробнее — на нашей [странице об автостраховании](/ru/car-insurance-florida-city). Это общая информация, а не юридическая консультация; покрытие зависит от вашего полиса, поэтому решение лучше обсудить с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Когда в 2026 году заканчивается летнее время?', a: 'В воскресенье, 1 ноября 2026 года, в 2:00 ночи по местному времени, по данным NIST. Часы переводят на час назад.' },
        { q: 'Нужно ли во Флориде включать фары днём в дождь?', a: 'Да. Статья 316.217 требует включённый свет в любой дождь, дым или туман, а также от заката до восхода, включая сумерки.' },
        { q: 'Что требует закон Move Over во Флориде?', a: 'Если на обочине стоит экстренная машина, мусоровоз, машина коммунальной службы, эвакуатор, дорожная техника или сломанный автомобиль, освободите соседнюю с ним полосу, когда это безопасно. Если нельзя, сбавьте скорость на 20 миль/ч ниже ограничения в 25 миль/ч и выше или до 5 миль/ч там, где ограничение 20 миль/ч и меньше.' },
        { q: 'Защищает ли закон Move Over меня, если сломалась моя машина?', a: 'Он распространяется на неисправную машину с включённой аварийкой или предупреждающими огнями, с сигнальными огнями или аварийным знаком либо с человеком рядом. Включите аварийку, чтобы другие водители знали, что нужно перестроиться.' },
      ],
      sources: [
        { label: 'NIST: правила летнего времени (даты 2026 года), на английском', url: S.nist },
        { label: 'Статуты Флориды, ст. 316.217 (2026): когда обязателен включённый свет', url: S.s316217 },
        { label: 'Статуты Флориды, ст. 316.220 (2026): фары автомобиля', url: S.s316220 },
        { label: 'Статуты Флориды, ст. 316.237 (2026): дальний и ближний свет (оборудование)', url: S.s316237 },
        { label: 'Статуты Флориды, ст. 316.238 (2026): использование дальнего и ближнего света', url: S.s316238 },
        { label: 'Статуты Флориды, ст. 316.2397 (2026): запрещённые огни; когда разрешены мигающие', url: S.s3162397 },
        { label: 'Статуты Флориды, ст. 316.126 (2026): закон Move Over; экстренные и неисправные машины', url: S.s316126 },
        { label: 'FLHSMV: Move Over, Florida!', url: S.flhsmv },
        { label: 'Статуты Флориды, ст. 322.27 (2026): балльная система и лишение прав', url: S.s32227 },
      ],
    },
  },
};
