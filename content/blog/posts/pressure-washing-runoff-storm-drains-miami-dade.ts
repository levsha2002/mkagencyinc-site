import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against official sources:
// - Miami-Dade County Code s. 24-42.4 (storm sewer prohibitions), text as shown in the county's
//   2025 ordinance file (Agenda Item 5(K), public hearing 5-6-25): unlawful to discharge
//   domestic sewage, industrial waste, liquid waste or other waste into a sewer designed to
//   carry storm water. (The prohibition is in both the prior (2)(a) and amended (4)(a) text.)
// - Miami-Dade Environmental Complaints page (DERM): report liquid discharges or spills into
//   storm drains, waterways or onto open ground; 305-372-6955, 24/7.
// - 40 CFR 122.26(b)(2) (EPA NPDES): "illicit discharge" = any discharge to a municipal
//   separate storm sewer not composed entirely of storm water (with listed exceptions).
// - FDEP, Recommended BMPs for Mobile Vehicle and Equipment Washing (PDF): plan collection and
//   disposal first; identify storm drains and slope; contain (booms, covers/mats, pools,
//   vacuums); minimize water; mild biodegradable detergents; collect solids; four disposal
//   options; discharge to stormwater systems or surface water prohibited without an NPDES
//   permit; sanitary sewer needs utility approval and property-owner approval; inflatable plugs
//   only on private property.
// The FDEP guide is written for vehicle/equipment washing; the article says so.
// - Miami-Dade Fertilizer Regulations page: runoff carries nutrients to lakes, canals, Biscayne Bay.
// No penalty amounts.
const S = {
  mdcCode: 'https://www.miamidade.gov/govaction/legistarfiles/MinMatters/Y2025/250614min.pdf',
  derm: 'https://www.miamidade.gov/global/environment/code-compliance/environmental-complaints.page',
  cfr: 'https://www.ecfr.gov/current/title-40/section-122.26',
  fdep: 'https://floridadep.gov/sites/default/files/bmps4mobile-vehicle-washing_1.pdf',
  mdcFert: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1620843942468395',
};

export const post: BlogPost = {
  slug: 'pressure-washing-runoff-storm-drains-miami-dade',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Pressure Washing Runoff in Miami-Dade: What Can Go Down the Storm Drain?',
      metaTitle: 'Pressure Washing Runoff in Miami-Dade | M&K Agency',
      description: 'Where does pressure washing water go? Miami-Dade’s storm sewer rule, what EPA calls an illicit discharge, and FDEP methods to contain wash water.',
      excerpt: 'A storm drain is not the sewer that goes to a treatment plant. What the county code and state guidance say about wash water, and practical ways to keep it out of the drain.',
      category: 'Pressure washing insurance',
      body: [
        { type: 'p', text: 'A driveway, a dumpster pad, a restaurant sidewalk: the dirt comes off, and the water heads for the nearest grate. That grate belongs to the storm sewer, which is built for rain, not to the sanitary sewer that carries wastewater to treatment. Miami-Dade notes that runoff from the urban landscape can carry pollutants into lakes, canals and Biscayne Bay ([Miami-Dade County](' + S.mdcFert + ')). That is why wash water is a regulatory question, not just a mess to sweep up.' },
        { type: 'h2', text: 'What the rules say' },
        { type: 'ul', items: [
          '**Miami-Dade County.** The county code makes it unlawful to discharge “domestic sewage, industrial waste, liquid waste, or other waste” into a sewer designed to carry storm water (section 24-42.4 of the Code of Miami-Dade County, shown in the county’s [2025 ordinance file](' + S.mdcCode + ')). The county’s environmental division (DERM) takes reports of liquid discharges into storm drains 24 hours a day ([DERM](' + S.derm + ')).',
          '**Federal stormwater rules.** EPA’s stormwater regulations define an **illicit discharge** as any discharge to a municipal storm sewer that is not made up entirely of storm water, with limited exceptions ([40 CFR 122.26(b)(2)](' + S.cfr + ')).',
          '**State guidance.** The Florida Department of Environmental Protection (FDEP) states that discharging wastewater to stormwater systems, such as drains, ditches and retention areas, or to surface water is prohibited without an NPDES wastewater permit ([FDEP](' + S.fdep + ')).',
        ] },
        { type: 'p', text: 'The FDEP guide is written for mobile **vehicle and equipment** washing. If you wash fleets or equipment, it applies directly. For houses, roofs and flatwork, its methods are a good reference, and DERM can answer questions about a specific setup.' },
        { type: 'h2', text: 'Before you start a job' },
        { type: 'ol', items: [
          '**Plan the water first.** Decide how you will collect it and where it will go, and get any approvals, before you turn on the machine.',
          '**Walk the site.** Find every storm drain, swale and ditch, and look at the slope to see where the water will run.',
          '**Use less.** High-pressure, low-volume equipment means less water to manage. Sweep up loose debris first.',
          '**Go easy on chemicals.** FDEP suggests the minimum amount of detergent, close to pH neutral and rapidly biodegradable, and avoiding strongly acidic or alkaline products or ones with petroleum distillates or chlorinated solvents.',
        ] },
        { type: 'h2', text: 'Containing and disposing of wash water' },
        { type: 'p', text: 'FDEP lists common containment tools: **booms or berms** around a drain, **drain covers and mats** that seal the grate, **portable containment pools**, and **wet/dry vacuums or pumps** to pick the water up. Inflatable pipe plugs belong only on private property, not in public storm drains. For disposal, the guide lists four options:' },
        { type: 'ul', items: [
          'A **closed-loop recycling system**, with its sludge and reservoir water disposed of properly.',
          'The **sanitary sewer**, with prior approval from the wastewater utility and the property owner.',
          '**Land or ground**, only for small, infrequent amounts that do not run off. Repeated use of the same area may require a permit.',
          '**Surface water**, which requires an NPDES permit and is generally not practical.',
        ] },
        { type: 'p', text: 'Collect solids, such as paint chips and grit, and dispose of them properly. If a spill could reach a storm drain, contain it and report significant spills to the local FDEP office or the county. Fertilizer has its own drain rules; our article on [fertilizer rules in Miami-Dade](/en/blog/fertilizer-rules-landscapers-miami-dade) covers them.' },
        { type: 'h2', text: 'Why it matters for your business' },
        { type: 'p', text: 'Property managers and HOAs often ask how you handle runoff, and runoff that damages a customer’s plants or a neighbor’s property is a liability question. When we quote, tell us what you wash, which chemicals you use and how you recover water. See our [pressure washing insurance page](/en/pressure-washing-insurance-florida) for the coverage side.' },
        { type: 'callout', title: 'Reviewing your coverage?', text: '[Request a quote](/en/quote) and describe your jobs and equipment. A licensed agent will go over it with you in English, Spanish or Russian. This is general information, not legal or environmental compliance advice; check with DERM or FDEP for your situation.' },
      ],
      faq: [
        { q: 'Can I let pressure washing water go into a storm drain in Miami-Dade?', a: 'The county code prohibits discharging liquid waste and other waste into a sewer designed to carry storm water, and FDEP says discharging wastewater to stormwater systems is prohibited without an NPDES permit. Plan to contain and collect it.' },
        { q: 'Where can pressure washing wastewater go?', a: 'FDEP’s guide lists a closed-loop recycling system, the sanitary sewer with utility and owner approval, small infrequent discharges to land that do not run off, or surface water with an NPDES permit.' },
        { q: 'Who do I call about a discharge into a storm drain in Miami-Dade?', a: 'Miami-Dade’s environmental division (DERM) takes reports of liquid discharges into storm drains at 305-372-6955, 24 hours a day, or by email at environmentalcomplaints@miamidade.gov.' },
      ],
      sources: [
        { label: 'Miami-Dade County: ordinance file amending s. 24-42.4 of the County Code, storm sewer prohibitions (2025, PDF)', url: S.mdcCode },
        { label: 'Miami-Dade County (DERM): Environmental Complaints', url: S.derm },
        { label: '40 CFR 122.26: storm water discharges, definition of illicit discharge (eCFR)', url: S.cfr },
        { label: 'FDEP: Recommended Best Management Practices for Mobile Vehicle and Equipment Washing (PDF)', url: S.fdep },
        { label: 'Miami-Dade County (DERM): Fertilizer Regulations (runoff to canals and Biscayne Bay)', url: S.mdcFert },
      ],
    },
    es: {
      title: 'Agua del lavado a presión en Miami-Dade: ¿qué puede ir al desagüe pluvial?',
      metaTitle: 'Lavado a presión y desagües pluviales en Miami-Dade | M&K Agency',
      description: '¿A dónde va el agua del lavado a presión? La regla de Miami-Dade sobre el drenaje pluvial, la descarga ilícita según la EPA y cómo contener el agua según FDEP.',
      excerpt: 'Un desagüe pluvial no es la cloaca que va a la planta de tratamiento. Qué dicen el código del condado y la guía del estado sobre el agua de lavado, y formas prácticas de mantenerla fuera del desagüe.',
      category: 'Seguro para lavado a presión',
      body: [
        { type: 'p', text: 'Una entrada de carros, el área del contenedor de basura, la acera de un restaurante: la suciedad sale y el agua corre hacia la rejilla más cercana. Esa rejilla es del alcantarillado pluvial, hecho para el agua de lluvia, no del alcantarillado sanitario que lleva las aguas residuales a tratamiento. Miami-Dade advierte que el agua que escurre de las zonas urbanas puede arrastrar contaminantes a lagos, canales y la Bahía de Biscayne ([Condado de Miami-Dade](' + S.mdcFert + ')). Por eso el agua de lavado es un tema de reglamento, no solo de limpieza.' },
        { type: 'h2', text: 'Qué dicen las reglas' },
        { type: 'ul', items: [
          '**Condado de Miami-Dade.** El código del condado prohíbe descargar “aguas negras domésticas, desechos industriales, desechos líquidos u otros desechos” en un alcantarillado diseñado para llevar agua de lluvia (sección 24-42.4 del Código de Miami-Dade, según el [expediente de la ordenanza de 2025](' + S.mdcCode + ')). La división ambiental del condado (DERM) recibe reportes de descargas líquidas a desagües pluviales las 24 horas ([DERM](' + S.derm + ')).',
          '**Reglas federales.** Las normas de la EPA definen como **descarga ilícita** cualquier descarga a un alcantarillado pluvial municipal que no sea solo agua de lluvia, con pocas excepciones ([40 CFR 122.26(b)(2)](' + S.cfr + ')).',
          '**Guía del estado.** El Departamento de Protección Ambiental de Florida (FDEP) indica que descargar aguas residuales a sistemas pluviales, como desagües, zanjas y áreas de retención, o a cuerpos de agua está prohibido sin un permiso NPDES ([FDEP](' + S.fdep + ')).',
        ] },
        { type: 'p', text: 'La guía de FDEP está escrita para el lavado móvil de **vehículos y equipos**. Si usted lava flotas o maquinaria, aplica directamente. Para casas, techos y pisos, sus métodos sirven de referencia, y DERM puede responder preguntas sobre su caso.' },
        { type: 'h2', text: 'Antes de empezar un trabajo' },
        { type: 'ol', items: [
          '**Primero, el agua.** Decida cómo la va a recoger y a dónde va a ir, y consiga las autorizaciones, antes de prender la máquina.',
          '**Recorra el lugar.** Ubique cada desagüe, cuneta y zanja, y fíjese en la pendiente para saber hacia dónde va a correr el agua.',
          '**Use menos agua.** Los equipos de alta presión y bajo caudal dejan menos agua que manejar. Barra antes la basura suelta.',
          '**Cuidado con los químicos.** FDEP recomienda la mínima cantidad de detergente, de pH casi neutro y biodegradable, y evitar productos muy ácidos o alcalinos o con derivados del petróleo o solventes clorados.',
        ] },
        { type: 'h2', text: 'Cómo contener y desechar el agua' },
        { type: 'p', text: 'FDEP menciona herramientas comunes: **barreras o bermas** alrededor del desagüe, **tapas y alfombras** que sellan la rejilla, **piscinas de contención** portátiles y **aspiradoras o bombas** para recoger el agua. Los tapones inflables solo se usan en propiedad privada, nunca en desagües públicos. Para desecharla, la guía da cuatro opciones:' },
        { type: 'ul', items: [
          'Un **sistema de reciclaje de circuito cerrado**, desechando bien sus lodos y el agua del depósito.',
          'El **alcantarillado sanitario**, con autorización previa de la empresa de aguas y del dueño de la propiedad.',
          '**El terreno**, solo para cantidades pequeñas y poco frecuentes que no escurran. Usar siempre el mismo lugar puede requerir permiso.',
          '**Cuerpos de agua**, lo que exige permiso NPDES y por lo general no es práctico.',
        ] },
        { type: 'p', text: 'Recoja los sólidos, como pedazos de pintura y arenilla, y deséchelos bien. Si un derrame puede llegar al desagüe, conténgalo y reporte los derrames importantes a la oficina local de FDEP o al condado. El fertilizante tiene sus propias reglas; vea nuestro artículo sobre [reglas de fertilizante en Miami-Dade](/es/blog/fertilizer-rules-landscapers-miami-dade).' },
        { type: 'h2', text: 'Por qué importa para su negocio' },
        { type: 'p', text: 'Los administradores de propiedades y las HOA suelen preguntar cómo maneja el agua, y el agua que daña las plantas de un cliente o la propiedad de un vecino es un tema de responsabilidad civil. Al cotizar, díganos qué lava, qué químicos usa y cómo recupera el agua. Vea nuestra [página de seguro para lavado a presión](/es/pressure-washing-insurance-florida) para la parte de coberturas.' },
        { type: 'callout', title: '¿Va a revisar su seguro?', text: '[Pida una cotización](/es/quote) y describa sus trabajos y su equipo. Un agente con licencia lo revisa con usted en español, inglés o ruso. Esto es información general, no asesoría legal ni ambiental; consulte a DERM o a FDEP para su caso.' },
      ],
      faq: [
        { q: '¿Puedo dejar que el agua del lavado a presión vaya al desagüe pluvial en Miami-Dade?', a: 'El código del condado prohíbe descargar desechos líquidos y otros desechos en un alcantarillado pluvial, y FDEP indica que descargar aguas residuales a sistemas pluviales está prohibido sin permiso NPDES. Planifique cómo contenerla y recogerla.' },
        { q: '¿A dónde puede ir el agua del lavado a presión?', a: 'La guía de FDEP menciona un sistema de reciclaje de circuito cerrado, el alcantarillado sanitario con autorización de la empresa de aguas y del dueño, descargas pequeñas y poco frecuentes al terreno sin escurrimiento, o cuerpos de agua con permiso NPDES.' },
        { q: '¿A quién llamo por una descarga a un desagüe pluvial en Miami-Dade?', a: 'La división ambiental del condado (DERM) recibe reportes de descargas líquidas a desagües pluviales al 305-372-6955, las 24 horas, o por correo a environmentalcomplaints@miamidade.gov.' },
      ],
      sources: [
        { label: 'Condado de Miami-Dade: expediente de la ordenanza que modifica la sección 24-42.4 del Código, prohibiciones en alcantarillado pluvial (2025, PDF, en inglés)', url: S.mdcCode },
        { label: 'Condado de Miami-Dade (DERM): quejas ambientales (en inglés)', url: S.derm },
        { label: '40 CFR 122.26: descargas pluviales, definición de descarga ilícita (eCFR, en inglés)', url: S.cfr },
        { label: 'FDEP: buenas prácticas para el lavado móvil de vehículos y equipos (PDF, en inglés)', url: S.fdep },
        { label: 'Condado de Miami-Dade (DERM): reglamento de fertilizantes, escorrentía a canales y la Bahía de Biscayne (en inglés)', url: S.mdcFert },
      ],
    },
    ru: {
      title: 'Вода после мойки под давлением в Майами-Дейд: что можно сливать в ливнёвку?',
      metaTitle: 'Мойка под давлением и ливнёвки в Майами-Дейд | M&K Agency',
      description: 'Куда уходит вода после мойки под давлением? Правило Майами-Дейд о ливневой канализации, незаконный сброс по EPA и как собирать воду по советам FDEP.',
      excerpt: 'Ливнёвка — это не та канализация, что ведёт на очистные. Что говорят окружной кодекс и рекомендации штата о воде после мойки и как на практике не пускать её в ливнёвку.',
      category: 'Страхование для мойки под давлением',
      body: [
        { type: 'p', text: 'Подъездная дорожка, площадка под мусорный контейнер, тротуар у ресторана: грязь смывается, и вода бежит к ближайшей решётке. Эта решётка относится к ливневой канализации, рассчитанной на дождевую воду, а не к бытовой, которая ведёт стоки на очистку. Округ Майами-Дейд отмечает, что сток с городских территорий может уносить загрязнения в озёра, каналы и залив Бискейн ([округ Майами-Дейд](' + S.mdcFert + ')). Поэтому вода после мойки — вопрос правил, а не только уборки.' },
        { type: 'h2', text: 'Что говорят правила' },
        { type: 'ul', items: [
          '**Округ Майами-Дейд.** Окружной кодекс запрещает сбрасывать «бытовые стоки, промышленные отходы, жидкие отходы и другие отходы» в канализацию, предназначенную для дождевой воды (раздел 24-42.4 кодекса Майами-Дейд, текст в [материалах окружного постановления 2025 года](' + S.mdcCode + ')). Экологическая служба округа (DERM) круглосуточно принимает сообщения о сбросе жидкостей в ливнёвки ([DERM](' + S.derm + ')).',
          '**Федеральные правила.** В нормах EPA **незаконным сбросом** (illicit discharge) считается любой сброс в муниципальную ливневую канализацию, который не состоит целиком из дождевой воды, за немногими исключениями ([40 CFR 122.26(b)(2)](' + S.cfr + ')).',
          '**Рекомендации штата.** Департамент охраны окружающей среды Флориды (FDEP) указывает, что сброс сточных вод в ливневые системы — решётки, канавы, пруды-накопители — или в водоёмы запрещён без разрешения NPDES ([FDEP](' + S.fdep + ')).',
        ] },
        { type: 'p', text: 'Руководство FDEP написано для выездной мойки **машин и техники**. Если вы моете автопарки или оборудование, оно применяется напрямую. Для домов, крыш и площадок его методы — хороший ориентир, а по конкретной ситуации можно спросить DERM.' },
        { type: 'h2', text: 'До начала работы' },
        { type: 'ol', items: [
          '**Сначала — вода.** Решите, как вы её соберёте и куда денете, и получите нужные согласования до того, как включите аппарат.',
          '**Осмотрите объект.** Найдите все решётки, кюветы и канавы и посмотрите на уклон, чтобы понять, куда побежит вода.',
          '**Меньше воды.** Оборудование высокого давления с малым расходом — меньше воды, которую надо собрать. Мусор сначала смести.',
          '**Осторожно с химией.** FDEP советует минимум моющего средства, близкого к нейтральному pH и быстро разлагающегося, и избегать сильнокислотных и сильнощелочных средств, а также средств с нефтепродуктами или хлорированными растворителями.',
        ] },
        { type: 'h2', text: 'Как собрать воду и куда её деть' },
        { type: 'p', text: 'FDEP перечисляет обычные средства: **боны или валики** вокруг решётки, **накладки и коврики**, герметично закрывающие решётку, переносные **поддоны-бассейны** и **пылесосы или насосы** для сбора воды. Надувные заглушки для труб — только на частной территории, не в городских ливнёвках. Для утилизации руководство даёт четыре варианта:' },
        { type: 'ul', items: [
          '**Замкнутая система рециркуляции**, с правильной утилизацией осадка и воды из бака.',
          '**Хозяйственно-бытовая канализация** — с предварительного согласия водоканала и владельца объекта.',
          '**На грунт** — только небольшие и нечастые объёмы без стока. Если постоянно сливать в одно место, может понадобиться разрешение.',
          '**В водоём** — только с разрешением NPDES, обычно это непрактично.',
        ] },
        { type: 'p', text: 'Твёрдые частицы, например чешуйки краски и песок, соберите и утилизируйте. Если разлив может дойти до ливнёвки, локализуйте его, а о значительных разливах сообщите в местный офис FDEP или в округ. Для удобрений действуют свои правила — читайте статью о [правилах по удобрениям в Майами-Дейд](/ru/blog/fertilizer-rules-landscapers-miami-dade).' },
        { type: 'h2', text: 'Почему это важно для бизнеса' },
        { type: 'p', text: 'Управляющие компании и HOA часто спрашивают, как вы обращаетесь со стоком, а вода, которая повредила растения клиента или имущество соседа, — это вопрос ответственности. При расчёте расскажите нам, что вы моете, какую химию используете и как собираете воду. О страховании — на нашей [странице для мойки под давлением](/ru/pressure-washing-insurance-florida).' },
        { type: 'callout', title: 'Пересматриваете страховку?', text: '[Оставьте заявку на расчёт](/ru/quote) и опишите ваши заказы и оборудование. Лицензированный агент разберёт всё с вами на русском, английском или испанском. Это общая информация, а не юридическая или экологическая консультация; по своей ситуации обращайтесь в DERM или FDEP.' },
      ],
      faq: [
        { q: 'Можно ли сливать воду после мойки под давлением в ливнёвку в Майами-Дейд?', a: 'Окружной кодекс запрещает сбрасывать жидкие и другие отходы в ливневую канализацию, а FDEP указывает, что сброс сточных вод в ливневые системы без разрешения NPDES запрещён. Планируйте, как собрать воду.' },
        { q: 'Куда можно девать воду после мойки?', a: 'Руководство FDEP называет замкнутую систему рециркуляции, хозяйственно-бытовую канализацию с согласия водоканала и владельца, небольшие нечастые сбросы на грунт без стока или водоём с разрешением NPDES.' },
        { q: 'Куда сообщить о сбросе в ливнёвку в Майами-Дейд?', a: 'Экологическая служба округа (DERM) принимает сообщения о сбросе жидкостей в ливнёвки круглосуточно по телефону 305-372-6955 или по почте environmentalcomplaints@miamidade.gov.' },
      ],
      sources: [
        { label: 'Округ Майами-Дейд: материалы постановления об изменении раздела 24-42.4 кодекса, запреты для ливневой канализации (2025, PDF, на английском)', url: S.mdcCode },
        { label: 'Округ Майами-Дейд (DERM): экологические жалобы (на английском)', url: S.derm },
        { label: '40 CFR 122.26: ливневые стоки, определение illicit discharge (eCFR, на английском)', url: S.cfr },
        { label: 'FDEP: рекомендации по выездной мойке машин и техники (PDF, на английском)', url: S.fdep },
        { label: 'Округ Майами-Дейд (DERM): правила по удобрениям, сток в каналы и залив Бискейн (на английском)', url: S.mdcFert },
      ],
    },
  },
};
