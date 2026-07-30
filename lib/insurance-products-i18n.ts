import type { InsuranceProduct } from './insurance-products';

// Spanish and Russian copy for the product catalogue.
//
// The catalogue in insurance-products.ts is the English source of truth. This
// file overlays translations by slug so /es/insurance/* and /ru/insurance/*
// serve coverage descriptions in the visitor's own language — previously they
// rendered English on every locale, which meant a Spanish- or Russian-speaking
// customer read what they were buying in a language they may not know.
//
// Insurance terms that are used in English in the Florida market (HO-6, PIP,
// claim, closing, 4-point inspection, wind mitigation, BOP, E&O, agreed value)
// are kept in English, matching the voice of the existing es/ru site copy.

export type ProductI18n = Partial<
  Pick<
    InsuranceProduct,
    | 'title'
    | 'shortIntro'
    | 'article'
    | 'coverageHighlights'
    | 'note'
    | 'liabilityExamples'
    | 'humanLifeValueNote'
    | 'subtypes'
  >
>;

const es: Record<string, ProductI18n> = {
  'auto-personal': {
    title: 'Seguro de Auto Personal',
    shortIntro: 'Cobertura para el vehículo que conduce todos los días — al trabajo, a la escuela y a todas partes.',
    article: [
      'Un accidente de auto no solo daña su vehículo — puede poner en riesgo sus ahorros, sus ingresos y su futuro financiero. Nos enfocamos en cobertura que protege lo que usted ha construido, no solo el mínimo estatal.',
      'Para conductores que quieren más, ofrecemos accident forgiveness para que un error no dispare su tarifa, además de acceso en línea a su póliza 24/7 — vea sus tarjetas de identificación, haga pagos y presente un reclamo desde su teléfono.',
    ],
    coverageHighlights: [
      'Responsabilidad civil por lesiones corporales y daños a la propiedad',
      'Cobertura de colisión y comprensiva',
      'Protección contra conductores sin seguro o con seguro insuficiente',
      'Asistencia en carretera y reembolso de auto de alquiler',
    ],
  },
  'auto-commercial-use': {
    title: 'Seguro de Auto de Uso Comercial',
    shortIntro: 'Para vehículos usados para trabajar — entregas, visitas de servicio, transporte de equipo o mercancía.',
    article: [
      'Si usa su vehículo para algo más que ir y venir del trabajo — entregas, visitas a clientes, cargar herramientas o inventario — una póliza personal normalmente no cubre un reclamo que ocurra durante el uso comercial. La cobertura de uso comercial cierra ese vacío.',
      'Entendemos la realidad del pequeño negocio en Florida, desde un solo vehículo hasta flotas pequeñas, y le ayudamos a encontrar cobertura que corresponda a cómo usted realmente usa su vehículo.',
    ],
    coverageHighlights: [
      'Responsabilidad civil para conducción de uso comercial',
      'Opciones de cobertura de carga y equipo',
      'Cobertura de autos alquilados y no propios',
      'Cobertura para un solo vehículo o flotas pequeñas',
    ],
  },
  'auto-rideshare': {
    title: 'Seguro para Uber y Lyft (Rideshare)',
    shortIntro: 'Cobertura hecha para el vacío entre su póliza personal y lo que ofrecen Uber/Lyft.',
    article: [
      'Uber y Lyft proporcionan seguro mientras usted está activamente en un viaje — pero hay vacíos reales de cobertura entre viajes, y la mayoría de las pólizas personales excluyen por completo la conducción de rideshare. Quedar atrapado en ese vacío después de un accidente es uno de los errores más comunes y más costosos que cometen los conductores.',
      'Un endoso de rideshare o una póliza híbrida llena ese vacío para que esté protegido desde el momento en que se conecta en la aplicación hasta que se desconecta.',
    ],
    coverageHighlights: [
      'Cobertura con la aplicación encendida, esperando solicitud de viaje',
      'Cobertura del vacío entre los periodos de la póliza de la empresa de rideshare',
      'Opciones de responsabilidad civil y daño físico',
      'Funciona junto con su póliza de auto personal',
    ],
  },
  'auto-electric-vehicle': {
    title: 'Seguro para Vehículos Eléctricos',
    shortIntro: 'Tarifas competitivas de seguro de auto para vehículos eléctricos.',
    article: [
      'No vendemos garantías de vehículos — eso no es algo que ofrezcamos. Lo que sí ofrecemos son tarifas competitivas de seguro de auto para vehículos eléctricos, desde Tesla hasta Rivian y cualquier EV en la carretera.',
      'Obtenga una cotización rápida y sin presión de un agente local real.',
    ],
    coverageHighlights: [],
  },
  'auto-classic': {
    title: 'Seguro de Auto Clásico',
    shortIntro: 'Cobertura de bajo kilometraje hecha para el auto que exhibe, no el que usa para ir al trabajo.',
    article: [
      'Un auto clásico no es solo transporte — es una inversión, y una póliza de auto estándar lo trata como cualquier otro vehículo que se deprecia. El seguro de auto clásico está construido de otra manera: normalmente ofrece Replacement Coverage (también llamada agreed o guaranteed value), de modo que una pérdida total paga el valor que usted y la aseguradora acordaron desde el principio, no una estimación de mercado depreciada.',
      'Como los autos clásicos se conducen mucho menos que un auto diario, las aseguradoras ofrecen tarifas significativamente más bajas para vehículos de uso limitado — normalmente hasta 5,000 millas al año — además de cobertura construida alrededor de piezas de repuesto auténticas u OEM si alguna vez se necesita una reparación.',
    ],
    coverageHighlights: [
      'Replacement coverage (agreed/guaranteed value) — sin sorpresas de depreciación en una pérdida total',
      'Precios de programa de bajo kilometraje para vehículos conducidos hasta 5,000 millas al año',
      'Cobertura para piezas de repuesto auténticas/OEM',
      'Asistencia en carretera adecuada para vehículos clásicos y de colección',
    ],
  },
  'home-single-family': {
    title: 'Seguro de Casa Unifamiliar',
    shortIntro: 'Protección para su casa, desde huracanes e inundaciones hasta accidentes cotidianos.',
    article: [
      'Los propietarios en Florida enfrentan riesgos que la mayor parte del país no tiene — huracanes, inundaciones y costos de reaseguro en aumento. Le ayudamos a tener una cobertura que realmente aguante cuando llegue una tormenta, y le explicamos exactamente qué incluye y qué no.',
      '¿Está comprando una casa? Le ayudamos a tener la póliza lista rápido para que pueda cerrar a tiempo — incluyendo orientación sobre las inspecciones que su prestamista o aseguradora puedan requerir.',
    ],
    coverageHighlights: [
      'Cobertura de vivienda, otras estructuras y bienes personales',
      'Cobertura de viento y huracán',
      'Responsabilidad civil y pagos médicos',
      'Pérdida de uso / gastos adicionales de vivienda',
    ],
    liabilityExamples: [
      'Contrata a un handyman o contratista que no tiene su propio seguro ni workers’ comp — se cae del techo o recibe una descarga haciendo trabajo eléctrico. Sin cobertura propia, las facturas médicas suelen recaer en usted, y pueden ser enormes.',
      'Los niños del vecindario vienen a jugar a su patio o piscina y uno se rompe un brazo o una pierna — solo las facturas médicas pueden llegar a cientos de miles de dólares, y como dueño de la propiedad usted puede ser responsable incluso si no hizo nada mal.',
      'Una rama de un árbol de su patio se cae y daña el techo o el auto de un vecino.',
      'Un repartidor se tropieza en un escalón roto y se lesiona en su propiedad.',
    ],
    note: 'Las casas de más de 20 años normalmente requieren una inspección de 4 puntos y una inspección de mitigación de viento antes de que una aseguradora emita una nueva póliza. Podemos recomendarle inspectores que las realizan rápido.',
  },
  'home-townhouse': {
    title: 'Seguro de Townhouse',
    shortIntro: 'Cobertura diseñada para la propiedad de townhome, donde usted y su HOA aseguran partes distintas de la propiedad.',
    article: [
      'El seguro de townhouse está entre una póliza de casa unifamiliar y una de condominio — la póliza maestra de su HOA normalmente cubre la estructura del edificio, mientras usted es responsable de los acabados interiores, los bienes personales y la responsabilidad civil.',
      'Le ayudamos a entender exactamente qué cubre la póliza de su HOA para que no termine sobreasegurado ni, peor, con un vacío que nadie detecta hasta que hay un reclamo.',
    ],
    coverageHighlights: [
      'Cobertura de estructura interior y mejoras',
      'Protección de bienes personales',
      'Responsabilidad civil y cobertura de loss assessment',
      'Coordinada con la póliza maestra de su HOA',
    ],
    note: 'Los townhouses de más de 20 años también pueden requerir una inspección de 4 puntos y un reporte de mitigación de viento, según la aseguradora.',
  },
  'home-condo': {
    title: 'Seguro de Condominio',
    shortIntro: 'Protección para todo lo que está dentro de las paredes de su unidad — la parte que su asociación no cubre.',
    article: [
      'La póliza maestra de su asociación de condominio cubre el edificio, pero casi nunca cubre sus pisos, gabinetes, electrodomésticos, pertenencias personales ni su responsabilidad civil dentro de la unidad. Para eso existe la póliza de condominio HO-6.',
      'Muchos prestamistas hipotecarios exigen comprobante de seguro de condominio antes del cierre — normalmente podemos cotizar y emitir rápido.',
      'Si se rompe una tubería o su bañera se desborda y el daño por agua se extiende a la unidad de un vecino, su exposición de responsabilidad puede ser enorme — costos de reparación, vivienda temporal para su vecino, e incluso reclamos por lesiones si alguien resulta herido. Los límites estándar de responsabilidad de condominio a menudo no alcanzan para un reclamo así.',
    ],
    coverageHighlights: [
      'Cobertura del interior de la unidad (HO-6)',
      'Bienes personales y pérdida de uso',
      'Responsabilidad civil dentro de su unidad',
      'Cobertura de loss assessment para cuotas especiales de la HOA',
    ],
    note: 'Para unidades en edificios de más de 20 años, algunas aseguradoras requieren una inspección de 4 puntos y un reporte de mitigación de viento a nivel del edificio.',
  },
  'general-liability': {
    title: 'Seguro de Responsabilidad Civil General',
    shortIntro: 'La póliza fundamental que protege su negocio de reclamos de terceros por lesiones y daños a la propiedad.',
    article: [
      'Ya sea que un cliente se resbale en su local o que su trabajo dañe la propiedad de un cliente, el seguro de responsabilidad civil general cubre los costos legales y médicos que siguen — y muchos arrendadores, contratos y juntas de licencias lo exigen antes de que usted pueda incluso operar.',
      'Ayudamos a contratistas, comercios, restaurantes y negocios de servicios en toda Florida a encontrar los límites correctos al precio correcto.',
    ],
    coverageHighlights: [
      'Responsabilidad por lesiones corporales y daños a la propiedad',
      'Cobertura de productos y operaciones terminadas',
      'Cobertura de lesión personal y publicitaria',
      'Cumple con la mayoría de los requisitos de arrendadores y contratos',
    ],
  },
  'business-owners-policy': {
    title: 'Póliza de Dueño de Negocio (BOP)',
    shortIntro: 'Una póliza combinada que une cobertura de propiedad y responsabilidad civil a mejor precio que comprarlas por separado.',
    article: [
      'Una Business Owners Policy empaqueta la responsabilidad civil general con la cobertura de propiedad comercial — protegiendo su edificio, equipo e inventario junto con su exposición de responsabilidad — normalmente a un costo combinado menor que dos pólizas separadas.',
      'Es una buena opción para negocios pequeños y medianos: tiendas, oficinas y restaurantes que poseen o arriendan un espacio físico.',
    ],
    coverageHighlights: [
      'Cobertura de propiedad comercial',
      'Cobertura de responsabilidad civil general',
      'Cobertura de interrupción del negocio',
      'Complementos opcionales: rotura de equipo, cyber y más',
    ],
  },
  'errors-omissions': {
    title: 'Seguro de Errores y Omisiones (E&O)',
    shortIntro: 'Protección para profesionales contra reclamos por errores, negligencia o malos consejos.',
    article: [
      'Si su negocio da asesoría, presta un servicio o hace recomendaciones profesionales, un solo cliente descontento que alegue un error puede desencadenar una demanda costosa — incluso si usted no hizo nada mal. El seguro E&O cubre su defensa legal y los daños que resulten.',
      'Común para consultores, agentes, profesionales de bienes raíces y otros negocios basados en servicios.',
    ],
    coverageHighlights: [
      'Costos de defensa legal por reclamos de negligencia profesional',
      'Cobertura por presuntos errores, omisiones o actos negligentes',
      'Cobertura de acuerdos y sentencias hasta los límites de la póliza',
      'Disponible como cobertura claims-made',
    ],
  },
  'commercial-auto': {
    title: 'Seguro de Auto Comercial',
    shortIntro: 'Cobertura de flota y vehículos de negocio para empresas que dependen de la carretera para operar.',
    article: [
      'Desde un solo camión de trabajo hasta una flota pequeña, el seguro de auto comercial cubre vehículos registrados a nombre de su negocio o usados principalmente para operaciones comerciales — con límites de responsabilidad más altos que los que permite una póliza personal típica.',
      'Armamos cobertura de flota que se ajusta a contratistas, oficios y negocios basados en entregas.',
    ],
    coverageHighlights: [
      'Responsabilidad civil construida para la exposición del negocio',
      'Cobertura de daño físico para vehículos propios',
      'Cobertura de autos alquilados y no propios',
      'Descuentos de flota para varios vehículos',
    ],
  },
  'life-insurance': {
    title: 'Seguro de Vida',
    shortIntro: 'Proteja a las personas que dependen de usted, con cobertura que se ajuste a su presupuesto.',
    article: [
      'El seguro de vida no se trata de usted — se trata de asegurar que las personas que dependen de usted queden protegidas financieramente si algo le pasa. Le ayudamos a revisar opciones de vida a término y vida entera para que el futuro de su familia nunca quede al azar.',
      'Le ayudamos a encontrar cobertura que se ajuste a su presupuesto y etapa de vida, ya sea que necesite una cobertura a término simple o una póliza permanente que acumule valor en efectivo.',
    ],
    coverageHighlights: [
      'Cobertura de vida a término (opciones de 10, 20 y 30 años)',
      'Opciones de vida entera y cobertura permanente',
      'Montos de cobertura para cualquier presupuesto',
      'Opciones sin examen médico disponibles para muchos solicitantes',
    ],
    humanLifeValueNote: 'Una manera de pensar en cuánto seguro de vida necesita es su «Valor de Vida Humana» — en esencia, el valor financiero que usted aporta a las personas que dependen de usted. Toma en cuenta sus ingresos, cuántos años laborales le quedan y sus deudas pendientes. No es una ciencia exacta, pero es un punto de partida útil. Pruebe la calculadora abajo.',
  },
  'pet-insurance': {
    title: 'Seguro para Mascotas',
    shortIntro: 'Ayuda para cubrir facturas veterinarias cuando ocurren accidentes o enfermedades.',
    article: [
      'Los costos veterinarios por cirugía, atención de emergencia o una enfermedad continua pueden llegar a miles de dólares. El seguro para mascotas reembolsa una parte de esos costos para que una decisión médica para su mascota nunca sea una decisión financiera.',
    ],
    coverageHighlights: [
      'Cobertura de accidentes y enfermedades',
      'Complementos opcionales de bienestar y cuidado de rutina',
      'Elija su propio veterinario',
      'Reclamos basados en reembolso',
    ],
  },
  'boat-insurance': {
    title: 'Seguro de Embarcaciones',
    shortIntro: 'Cobertura para su bote en el agua, en el muelle y en almacenamiento.',
    article: [
      'Ya sea un center console para pescar los fines de semana o un bote familiar para navegar la costa, el seguro de embarcaciones cubre daño físico, responsabilidad civil y remolque — protección que su póliza de casa normalmente no extiende a una embarcación.',
    ],
    coverageHighlights: [
      'Daño físico (casco, motor, equipo)',
      'Responsabilidad civil y pagos médicos',
      'Remolque y asistencia en el agua',
      'Cobertura para tráileres',
    ],
  },
  'jet-ski-insurance': {
    title: 'Seguro de Jet Ski / PWC',
    shortIntro: 'Cobertura de responsabilidad civil y daños para motos acuáticas.',
    article: [
      'Las motos acuáticas están involucradas en una proporción desproporcionada de accidentes náuticos — lo que hace que la cobertura de responsabilidad civil sea especialmente importante. Una póliza de PWC cubre daño físico y responsabilidad si usted lesiona a alguien o daña propiedad en el agua.',
    ],
    coverageHighlights: [
      'Cobertura de daño físico',
      'Cobertura de responsabilidad civil',
      'Cobertura para varias motos acuáticas en una sola póliza',
      'Cobertura de tráiler disponible',
    ],
  },
  'off-road-insurance': {
    title: 'Seguro de Vehículos Todoterreno (ATV/UTV)',
    shortIntro: 'Cobertura para ATVs, UTVs y otros vehículos todoterreno.',
    article: [
      'Los ATVs y UTVs normalmente están excluidos de las pólizas de casa, y las lesiones que los involucran suelen ser graves. Una póliza dedicada de todoterreno cubre daño físico y responsabilidad civil, ya sea que maneje por recreación o use el vehículo en una propiedad o en un sitio de trabajo.',
    ],
    coverageHighlights: [
      'Cobertura de daño físico',
      'Cobertura de responsabilidad civil',
      'Cobertura de accesorios y equipo',
      'Cobertura dentro y fuera de su propiedad',
    ],
  },
  'golf-cart-insurance': {
    title: 'Seguro de Carritos de Golf',
    shortIntro: 'Cobertura para carritos de golf usados en campos, en comunidades o en la calle.',
    article: [
      'Muchas comunidades del sur de Florida permiten carritos de golf street-legal en calles locales — pero la mayoría de las pólizas de casa los excluyen una vez que salen de su propiedad. Una póliza de carrito de golf cubre responsabilidad civil y daño físico donde sea que lo conduzca.',
    ],
    coverageHighlights: [
      'Responsabilidad civil dentro y fuera del campo de golf',
      'Cobertura de daño físico',
      'Cobertura para carritos street-legal y estándar',
      'Cobertura opcional de accesorios',
    ],
  },
  'motorcycle-insurance': {
    title: 'Seguro de Motocicleta',
    shortIntro: 'Cobertura construida alrededor de cómo usted realmente maneja — desde una moto estándar de uso diario hasta una clásica de colección.',
    article: [
      'El seguro de motocicleta no es igual para todos. Una supersport hecha para pista tiene un perfil de riesgo muy distinto al de una touring hecha para comodidad en viajes largos, y el precio lo refleja. Revisamos de cerca su moto específica, su estilo de manejo y su nivel de experiencia para encontrar la póliza correcta a un precio justo.',
      'Cualquiera que sea la que maneje, le ayudamos a encontrar cobertura de responsabilidad civil, colisión y comprensiva a un precio justo — incluyendo cobertura de equipo, accesorios y partes personalizadas en muchas pólizas.',
    ],
    coverageHighlights: [
      'Cobertura de responsabilidad civil, colisión y comprensiva',
      'Cobertura de partes personalizadas, equipo y accesorios',
      'Cobertura agreed-value disponible para motos vintage y de colección',
      'Opciones de cobertura estacional / lay-up',
    ],
    subtypes: [
      { name: 'Motocicleta estándar', description: 'Una moto de uso diario y multipropósito, con cilindrada equilibrada y posición de manejo erguida — hecha para desplazamientos y paseos casuales más que para un estilo específico.' },
      { name: 'Motocicleta cruiser', description: 'Asiento bajo, posición de manejo relajada y mayor cilindrada. Una opción popular para paseos casuales de fin de semana y viajes de placer más largos.' },
      { name: 'Motocicleta touring', description: 'Hecha para comodidad en distancias largas — carenados más grandes, protección contra el clima y compartimentos de almacenamiento para viajes largos.' },
      { name: 'Motocicleta sport touring', description: 'Combina el rendimiento de una sport con la comodidad de una touring, para quienes quieren manejo ágil sin renunciar al confort en viajes largos.' },
      { name: 'Motocicleta supersport', description: 'Diseño de alto rendimiento inspirado en pista, con motores potentes y posición de manejo agresiva. Normalmente tiene la clasificación de seguro más alta de todas las categorías.' },
      { name: 'Motocicleta sport', description: 'Más ligera y enfocada en rendimiento, hecha para velocidad y manejo preciso en carretera pavimentada.' },
      { name: 'Dual sport', description: 'Diseñada para manejo dentro y fuera de carretera, con mayor despeje al suelo y llantas versátiles para terreno mixto.' },
      { name: 'Motocicleta Harley-Davidson', description: 'Una categoría aparte por su fuerte valor de reventa y su personalización frecuente — a menudo asegurada con límites más altos para reflejar el costo real de reemplazo.' },
      { name: 'Motocicleta adventure touring', description: 'Hecha para viajes largos en terreno mixto, con suspensión robusta, tanques de combustible más grandes y durabilidad tanto en pavimento como en caminos sin pavimentar.' },
      { name: 'Moped / Scooter — sport', description: 'Un scooter de menor cilindrada con estilo más deportivo, normalmente usado para trayectos urbanos cortos.' },
      { name: 'Moped / Scooter — estándar', description: 'Un scooter de baja cilindrada y transmisión automática, hecho para desplazamientos básicos y transporte urbano diario.' },
      { name: 'Motocicleta vintage', description: 'Motos clásicas y de colección, a menudo elegibles para cobertura agreed-value que refleja su valor en aumento en lugar de la depreciación estándar.' },
      { name: 'Motocicleta de tres ruedas', description: 'Trikes y reverse-trikes (incluyendo autocycles) que ofrecen mayor estabilidad con una tercera rueda — de fábrica o convertidos profesionalmente.' },
    ],
  },
};

const ru: Record<string, ProductI18n> = {
  'auto-personal': {
    title: 'Страхование личного автомобиля',
    shortIntro: 'Покрытие для машины, на которой вы ездите каждый день — на работу, в школу и куда угодно.',
    article: [
      'Авария повреждает не только машину — под угрозой оказываются ваши накопления, доход и финансовое будущее. Мы делаем ставку на покрытие, которое защищает то, что вы построили, а не только на минимум, требуемый штатом.',
      'Для тех, кому нужно больше, мы предлагаем accident forgiveness, чтобы одна ошибка не подбросила тариф, плюс круглосуточный онлайн-доступ к полису — ID-карты, платежи и подача claim прямо с телефона.',
    ],
    coverageHighlights: [
      'Liability: вред здоровью и ущерб имуществу',
      'Collision и comprehensive покрытие',
      'Защита от водителей без страховки или с недостаточной страховкой',
      'Помощь на дороге и компенсация аренды авто',
    ],
  },
  'auto-commercial-use': {
    title: 'Страхование авто для коммерческого использования',
    shortIntro: 'Для машин, которые используются для работы — доставка, выезды к клиентам, перевозка оборудования или товара.',
    article: [
      'Если вы используете машину не только для поездок на работу — доставка, визиты к клиентам, перевозка инструмента или товара — личный полис обычно не покроет случай, произошедший во время рабочего использования. Коммерческое покрытие закрывает этот пробел.',
      'Мы понимаем реальность малого бизнеса во Флориде — от одной машины до небольшого парка — и поможем подобрать покрытие под то, как вы действительно используете транспорт.',
    ],
    coverageHighlights: [
      'Liability для поездок в рабочих целях',
      'Варианты покрытия груза и оборудования',
      'Покрытие для арендованных и не принадлежащих вам авто',
      'Покрытие для одной машины или небольшого парка',
    ],
  },
  'auto-rideshare': {
    title: 'Страхование для Uber и Lyft (rideshare)',
    shortIntro: 'Покрытие для разрыва между вашим личным полисом и тем, что даёт Uber/Lyft.',
    article: [
      'Uber и Lyft страхуют, пока вы активно в поездке — но между заказами остаются реальные пробелы, а большинство личных автополисов вообще исключают работу в rideshare. Попасть в этот разрыв после аварии — одна из самых частых и самых дорогих ошибок водителей.',
      'Эндорсмент rideshare или гибридный полис закрывает этот разрыв: вы защищены с момента, когда вышли в приложение, и до момента, когда вышли из него.',
    ],
    coverageHighlights: [
      'Покрытие, когда приложение включено и вы ждёте заказ',
      'Покрытие разрыва между периодами полиса компании-агрегатора',
      'Варианты liability и покрытия физического ущерба',
      'Работает вместе с вашим личным автополисом',
    ],
  },
  'auto-electric-vehicle': {
    title: 'Страхование электромобилей',
    shortIntro: 'Конкурентные тарифы автострахования для электромобилей.',
    article: [
      'Мы не продаём гарантии на автомобили — этого мы не предлагаем. Что мы предлагаем — конкурентные тарифы автострахования для электромобилей, от Tesla и Rivian до любого EV на дороге.',
      'Быстрый расчёт без давления от живого местного агента.',
    ],
    coverageHighlights: [],
  },
  'auto-classic': {
    title: 'Страхование классических автомобилей',
    shortIntro: 'Покрытие с малым пробегом — для машины, которую вы показываете, а не для той, на которой едете на работу.',
    article: [
      'Классическая машина — не просто транспорт, а вложение, а стандартный автополис относится к ней как к любому обесценивающемуся автомобилю. Страхование классики устроено иначе: обычно предлагается Replacement Coverage (также agreed или guaranteed value), и при полной гибели выплачивается сумма, о которой вы со страховой договорились заранее, а не оценка рынка с учётом амортизации.',
      'Поскольку классику водят намного меньше, чем повседневную машину, страховые дают существенно более низкие тарифы для авто с ограниченным пробегом — как правило до 5 000 миль в год — плюс покрытие, рассчитанное на оригинальные детали OEM, если понадобится ремонт.',
    ],
    coverageHighlights: [
      'Replacement coverage (agreed/guaranteed value) — без сюрпризов с амортизацией при полной гибели',
      'Тарифы программы малого пробега для авто до 5 000 миль в год',
      'Покрытие оригинальных деталей OEM',
      'Помощь на дороге, подходящая для классических и коллекционных авто',
    ],
  },
  'home-single-family': {
    title: 'Страхование частного дома',
    shortIntro: 'Защита вашего дома — от ураганов и наводнений до бытовых происшествий.',
    article: [
      'Домовладельцы Флориды сталкиваются с рисками, которых нет у большей части страны — ураганы, наводнения, растущая стоимость перестрахования. Мы поможем оформить покрытие, которое реально сработает при урагане, и объясним, что именно в него входит, а что нет.',
      'Покупаете дом? Поможем быстро оформить полис, чтобы closing прошёл в срок — включая подсказки по инспекциям, которые может потребовать кредитор или страховая.',
    ],
    coverageHighlights: [
      'Dwelling, другие строения и личное имущество',
      'Покрытие ветра и урагана',
      'Liability и медицинские выплаты',
      'Loss of use / дополнительные расходы на жильё',
    ],
    liabilityExamples: [
      'Вы наняли работника или подрядчика без своей страховки и без workers’ comp — он упал с крыши или получил удар током на электрике. Без его собственного покрытия медицинские счёта обычно ложатся на вас, и суммы могут быть огромными.',
      'Соседские дети пришли играть у вас во дворе или в бассейне, и один сломал руку или ногу — одни медицинские счёта могут дойти до сотен тысяч долларов, а как владелец участка вы можете отвечать, даже если ни в чём не виноваты.',
      'Ветка вашего дерева упала и повредила крышу или машину соседа.',
      'Курьер споткнулся о сломанную ступеньку и получил травму на вашей территории.',
    ],
    note: 'Дома старше 20 лет обычно требуют проверки 4-point и wind mitigation, прежде чем страховая выдаст новый полис. Подскажем инспекторов, которые делают это быстро.',
  },
  'home-townhouse': {
    title: 'Страхование townhouse',
    shortIntro: 'Покрытие для townhome, где вы и ваша HOA страхуете разные части собственности.',
    article: [
      'Страхование townhouse находится между полисом частного дома и полисом кондо: master-полис вашей HOA обычно покрывает конструкцию здания, а вы отвечаете за внутреннюю отделку, личное имущество и liability.',
      'Мы поможем разобраться, что именно покрывает полис вашей HOA, чтобы вы не переплатили за лишнее и, что хуже, не остались с пробелом, который обнаружится только при claim.',
    ],
    coverageHighlights: [
      'Покрытие внутренней конструкции и улучшений',
      'Защита личного имущества',
      'Liability и покрытие loss assessment',
      'Согласовано с master-полисом вашей HOA',
    ],
    note: 'Townhouse старше 20 лет также может потребовать проверку 4-point и отчёт wind mitigation — зависит от страховой.',
  },
  'home-condo': {
    title: 'Страхование кондо',
    shortIntro: 'Защита всего, что внутри стен вашей квартиры — того, что не покрывает ассоциация.',
    article: [
      'Master-полис вашей ассоциации кондо покрывает само здание, но почти никогда не покрывает ваши полы, шкафы, бытовую технику, личные вещи и вашу liability внутри квартиры. Именно для этого нужен полис HO-6.',
      'Многие ипотечные кредиторы требуют подтверждение страховки кондо до closing — обычно мы можем рассчитать и выдать полис быстро.',
      'Если прорвало трубу или перелилась ванна и вода ушла к соседям, ваша ответственность может быть огромной: ремонт, временное жильё для соседа и даже claim за травмы, если кто-то пострадал. Стандартных лимитов liability для кондо на такой случай часто не хватает.',
    ],
    coverageHighlights: [
      'Покрытие внутренней части квартиры (HO-6)',
      'Личное имущество и loss of use',
      'Liability внутри вашей квартиры',
      'Покрытие loss assessment при спецсборах HOA',
    ],
    note: 'Для квартир в домах старше 20 лет некоторые страховые требуют проверку 4-point и отчёт wind mitigation на уровне здания.',
  },
  'general-liability': {
    title: 'Страхование общей ответственности (General Liability)',
    shortIntro: 'Базовый полис, который защищает бизнес от претензий третьих лиц за травмы и ущерб имуществу.',
    article: [
      'Клиент поскользнулся в вашем помещении или ваша работа повредила имущество заказчика — general liability покрывает юридические и медицинские расходы, которые за этим следуют. А многие арендодатели, контракты и лицензирующие органы требуют этот полис ещё до начала работы.',
      'Помогаем подрядчикам, магазинам, ресторанам и сервисным компаниям по всей Флориде подобрать нужные лимиты по адекватной цене.',
    ],
    coverageHighlights: [
      'Liability за вред здоровью и ущерб имуществу',
      'Покрытие продукции и завершённых работ',
      'Покрытие personal и advertising injury',
      'Соответствует требованиям большинства арендодателей и контрактов',
    ],
  },
  'business-owners-policy': {
    title: 'Полис владельца бизнеса (BOP)',
    shortIntro: 'Комбинированный полис: имущество и ответственность вместе дешевле, чем по отдельности.',
    article: [
      'Business Owners Policy объединяет general liability с покрытием коммерческого имущества — защищает здание, оборудование и товарные запасы вместе с вашей ответственностью — и обычно суммарно дешевле, чем два отдельных полиса.',
      'Хорошо подходит малому и среднему бизнесу: магазинам, офисам и ресторанам, которые владеют помещением или арендуют его.',
    ],
    coverageHighlights: [
      'Покрытие коммерческого имущества',
      'Покрытие general liability',
      'Покрытие перерыва в работе бизнеса',
      'Опции: поломка оборудования, cyber и другое',
    ],
  },
  'errors-omissions': {
    title: 'Страхование ошибок и упущений (E&O)',
    shortIntro: 'Защита специалистов от претензий за ошибки, небрежность или неверный совет.',
    article: [
      'Если ваш бизнес консультирует, оказывает услуги или даёт профессиональные рекомендации, один недовольный клиент, заявивший об ошибке, может обернуться дорогим иском — даже если вы ни в чём не виноваты. E&O покрывает юридическую защиту и возникший ущерб.',
      'Обычно нужен консультантам, агентам, специалистам по недвижимости и другим сервисным компаниям.',
    ],
    coverageHighlights: [
      'Расходы на юридическую защиту по претензиям о профессиональной небрежности',
      'Покрытие заявленных ошибок, упущений и небрежных действий',
      'Покрытие соглашений и судебных решений в пределах лимитов полиса',
      'Доступно как claims-made покрытие',
    ],
  },
  'commercial-auto': {
    title: 'Страхование коммерческого транспорта',
    shortIntro: 'Покрытие парка и рабочих машин для компаний, чья работа держится на дороге.',
    article: [
      'От одного рабочего пикапа до небольшого парка: commercial auto покрывает машины, оформленные на бизнес или используемые преимущественно в рабочих целях — с более высокими лимитами liability, чем допускает обычный личный полис.',
      'Собираем покрытие парка под подрядчиков, ремонтные бригады и доставку.',
    ],
    coverageHighlights: [
      'Liability, рассчитанный на риски бизнеса',
      'Покрытие физического ущерба для собственных машин',
      'Покрытие арендованных и не принадлежащих вам авто',
      'Скидки за парк при нескольких машинах',
    ],
  },
  'life-insurance': {
    title: 'Страхование жизни',
    shortIntro: 'Защитите тех, кто зависит от вас, — покрытием, которое вписывается в ваш бюджет.',
    article: [
      'Страхование жизни — не про вас, а про то, чтобы люди, которые от вас зависят, остались финансово защищены, если с вами что-то случится. Поможем разобрать варианты term и whole life, чтобы будущее вашей семьи не зависело от случая.',
      'Поможем найти покрытие под ваш бюджет и жизненный этап — будь то простой term или постоянный полис, накапливающий денежную стоимость.',
    ],
    coverageHighlights: [
      'Term life (варианты на 10, 20, 30 лет)',
      'Whole life и другие варианты постоянного покрытия',
      'Суммы покрытия под любой бюджет',
      'Для многих заявителей доступны варианты без медосмотра',
    ],
    humanLifeValueNote: 'Один из способов понять, сколько страхования жизни вам нужно, — это «Human Life Value», то есть финансовая ценность, которую вы даёте зависящим от вас людям. Учитываются ваш доход, сколько рабочих лет у вас впереди и текущие долги. Это не точная наука, но полезная отправная точка. Попробуйте калькулятор ниже.',
  },
  'pet-insurance': {
    title: 'Страхование питомцев',
    shortIntro: 'Помощь с ветеринарными счетами при травмах или болезни.',
    article: [
      'Ветеринарные расходы на операцию, экстренную помощь или длительное лечение могут дойти до тысяч долларов. Страховка питомца возмещает часть этих расходов, чтобы медицинское решение о вашем животном никогда не было финансовым.',
    ],
    coverageHighlights: [
      'Покрытие травм и заболеваний',
      'Опции для плановых осмотров и профилактики',
      'Выбор своего ветеринара',
      'Claim по принципу возмещения',
    ],
  },
  'boat-insurance': {
    title: 'Страхование катеров и лодок',
    shortIntro: 'Покрытие для судна на воде, у причала и на хранении.',
    article: [
      'Center console для рыбалки по выходным или семейный катер для прогулок по побережью — страхование судна покрывает физический ущерб, liability и буксировку. Полис на дом обычно не распространяется на судно.',
    ],
    coverageHighlights: [
      'Физический ущерб (корпус, двигатель, оборудование)',
      'Liability и медицинские выплаты',
      'Буксировка и помощь на воде',
      'Покрытие прицепа',
    ],
  },
  'jet-ski-insurance': {
    title: 'Страхование гидроциклов (Jet Ski / PWC)',
    shortIntro: 'Liability и покрытие ущерба для персональных водных судов.',
    article: [
      'На гидроциклы приходится непропорционально большая доля происшествий на воде — поэтому liability здесь особенно важен. Полис PWC покрывает физический ущерб и ответственность, если вы травмировали человека или повредили имущество на воде.',
    ],
    coverageHighlights: [
      'Покрытие физического ущерба',
      'Покрытие liability',
      'Несколько гидроциклов в одном полисе',
      'Доступно покрытие прицепа',
    ],
  },
  'off-road-insurance': {
    title: 'Страхование внедорожной техники (ATV/UTV)',
    shortIntro: 'Покрытие для ATV, UTV и другой внедорожной техники.',
    article: [
      'ATV и UTV обычно исключены из полисов на дом, а травмы с ними, как правило, серьёзные. Отдельный внедорожный полис покрывает физический ущерб и liability — независимо от того, катаетесь вы для удовольствия или используете технику на участке или на объекте.',
    ],
    coverageHighlights: [
      'Покрытие физического ущерба',
      'Покрытие liability',
      'Покрытие аксессуаров и оборудования',
      'Покрытие на вашем участке и за его пределами',
    ],
  },
  'golf-cart-insurance': {
    title: 'Страхование гольф-каров',
    shortIntro: 'Покрытие для гольф-каров на площадках, в поселках и на дорогах.',
    article: [
      'Многие поселки Южной Флориды разрешают street-legal гольф-кары на местных дорогах — но большинство полисов на дом исключают их, как только кар покидает ваш участок. Полис на гольф-кар покрывает liability и физический ущерб там, где вы на нём едете.',
    ],
    coverageHighlights: [
      'Liability на площадке и за её пределами',
      'Покрытие физического ущерба',
      'Покрытие street-legal и обычных каров',
      'Опциональное покрытие аксессуаров',
    ],
  },
  'motorcycle-insurance': {
    title: 'Страхование мотоциклов',
    shortIntro: 'Покрытие под то, как вы реально ездите — от стандартного байка на каждый день до коллекционной классики.',
    article: [
      'Страхование мотоцикла не бывает универсальным. Supersport, созданный для трека, имеет совершенно иной профиль риска, чем touring для дальних поездок, и цена это отражает. Мы внимательно смотрим на ваш конкретный байк, стиль езды и опыт, чтобы подобрать подходящий полис по честной цене.',
      'На чём бы вы ни ездили, поможем подобрать liability, collision и comprehensive по честной цене — включая покрытие экипировки, аксессуаров и кастомных деталей во многих полисах.',
    ],
    coverageHighlights: [
      'Liability, collision и comprehensive покрытие',
      'Покрытие кастомных деталей, экипировки и аксессуаров',
      'Agreed-value покрытие доступно для винтажных и коллекционных байков',
      'Варианты сезонного покрытия / lay-up',
    ],
    subtypes: [
      { name: 'Стандартный мотоцикл', description: 'Повседневный универсальный мотоцикл со сбалансированным объёмом двигателя и прямой посадкой — для поездок по делам и спокойной езды, а не под конкретный стиль.' },
      { name: 'Круизер', description: 'Низкое седло, расслабленная посадка и больший объём двигателя. Популярный выбор для спокойных поездок по выходным и длительных прогулок.' },
      { name: 'Туристический (touring)', description: 'Создан для комфорта на больших расстояниях — крупные обтекатели, защита от погоды и багажные отсеки для дальних поездок.' },
      { name: 'Sport touring', description: 'Сочетает динамику спортбайка с комфортом туриста — для тех, кому нужна живая управляемость без потери удобства в дальней дороге.' },
      { name: 'Supersport', description: 'Высокая мощность и трековая геометрия с агрессивной посадкой. Обычно имеет самый высокий страховой рейтинг среди всех категорий.' },
      { name: 'Спортивный (sport)', description: 'Легче и ориентирован на динамику — для скорости и точной управляемости на асфальте.' },
      { name: 'Dual sport', description: 'Рассчитан и на асфальт, и на бездорожье: больший дорожный просвет и универсальные покрышки для смешанного рельефа.' },
      { name: 'Harley-Davidson', description: 'Отдельная категория из-за высокой остаточной стоимости и частого кастома — часто страхуется с повышенными лимитами, чтобы отразить реальную стоимость замены.' },
      { name: 'Adventure touring', description: 'Для дальних поездок по смешанному рельефу: выносливая подвеска, большие бензобаки и запас прочности как для асфальта, так и для грунта.' },
      { name: 'Мопед / скутер — спортивный', description: 'Скутер малого объёма в более спортивном стиле, обычно для коротких городских поездок.' },
      { name: 'Мопед / скутер — стандартный', description: 'Скутер малого объёма с автоматической трансмиссией — для простых повседневных городских поездок.' },
      { name: 'Винтажный мотоцикл', description: 'Классические и коллекционные мотоциклы, часто подходящие под agreed-value покрытие, которое отражает растущую стоимость, а не стандартную амортизацию.' },
      { name: 'Трёхколёсный мотоцикл', description: 'Трайки и обратные трайки (включая autocycles) — дополнительная устойчивость за счёт третьего колеса, заводские или профессионально переделанные.' },
    ],
  },
};

export const productTranslations: Record<'es' | 'ru', Record<string, ProductI18n>> = { es, ru };

// Section headings on the product page. These were hardcoded in English, so
// they stayed English on /es and /ru even once the product copy was translated.
const PRODUCT_UI = {
  en: {
    kicker: 'Coverage',
    liabilityHeading: 'What do liability claims actually look like?',
    subtypesHeading: 'Types of coverage we can help with',
  },
  es: {
    kicker: 'Cobertura',
    liabilityHeading: '¿Cómo son en realidad los reclamos de responsabilidad civil?',
    subtypesHeading: 'Tipos de cobertura con los que podemos ayudar',
  },
  ru: {
    kicker: 'Покрытие',
    liabilityHeading: 'Как на самом деле выглядят claim по liability?',
    subtypesHeading: 'С какими видами покрытия мы помогаем',
  },
} as const;

export function getProductUI(lang?: string) {
  return PRODUCT_UI[(lang === 'es' || lang === 'ru' ? lang : 'en')];
}

/** Overlays translated copy onto the English product. Unknown locales and
 *  untranslated fields fall back to English rather than rendering blank. */
export function localizeProduct(product: InsuranceProduct, lang?: string): InsuranceProduct {
  if (lang !== 'es' && lang !== 'ru') return product;
  const t = productTranslations[lang][product.slug];
  if (!t) return product;
  return { ...product, ...t };
}
