import type { BlogPost } from '../types';

// Facts checked 2026-10-17 (ET) against official sources: Miami-Dade County king tides page and
// news item of Oct. 13, 2026 (Oct. 24-30 = highest predicted tide; Nov. 6-9; Nov. 23-26; move cars,
// rinse with fresh water, don't drive through flooded areas); City of Miami King Tides page (2026
// dates, ~3-hour flooding, 1.5 h before/after peak, peak times Oct. 27: 10:31 AM / 10:34 PM);
// SFWMD 2026 King Tide Season Forecast + weekly outlook Oct. 12-18 (East Coast window Oct. 22-Nov. 12,
// annual maximum predicted peak Oct. 27, 2026); NOAA "What is high tide flooding?"; Florida DFS
// Homeowners Insurance Overview (flood not covered; definition includes overflow of tidal waters)
// and Personal Automobile Insurance Overview (comprehensive covers flood); FloodSmart "Buy a policy"
// (limits, exclusions incl. cars, 30-day wait + exceptions); 44 CFR 61.11; 44 CFR Part 61 App. A(1)
// (SFIP Dwelling Form: flood definition, property not insured, flood in progress, loss avoidance,
// 60-day proof of loss); FEMA NFIP reauthorization page (extended Sept. 2, 2026 to Dec. 11, 2026);
// Citizens flood requirement page; FLHSMV insurance requirements. No insurer named.
const S = {
  mdc: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  mdcPage: 'https://www.miamidade.gov/initiative/weather-ready/flooding/king-tides.page',
  miami: 'https://www.miami.gov/My-Government/Climate-Change-in-the-City-of-Miami/King-Tides',
  sfwmd: 'https://www.sfwmd.gov/news-events/news/2026-king-tide-season-forecast',
  noaa: 'https://oceanservice.noaa.gov/facts/nuisance-flooding.html',
  dfsHome: 'https://myfloridacfo.com/division/consumers/understanding-insurance/homeownersinsuranceoverview',
  dfsAuto: 'https://www.myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview',
  floodsmart: 'https://www.floodsmart.gov/get-insured/buy-a-policy',
  cfr6111: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/section-61.11',
  sfip: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/appendix-Appendix%20A(1)%20to%20Part%2061',
  fema: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  citizens: 'https://www.citizensfla.com/flood',
  flhsmv: 'https://www.flhsmv.gov/insurance/',
  crs: 'https://www.congress.gov/crs-product/IN10835',
  dfsFlood: 'https://www.myfloridacfo.com/division/ica/fullcoverage/flood',
};

export const post: BlogPost = {
  slug: 'king-tides-flood-insurance-miami-dade',
  datePublished: '2026-10-17',
  translations: {
    en: {
      title: 'King Tides Oct. 24–30: What Flood Insurance Covers (and the 30-Day Wait)',
      metaTitle: 'King Tides Oct. 24–30 and Flood Insurance | M&K Agency',
      description: 'Miami-Dade’s highest tides of the year arrive Oct. 24–30. What homeowners, flood and car insurance cover, and why a new flood policy waits 30 days.',
      excerpt: 'The fall’s highest predicted tides hit Miami-Dade Oct. 24–30, with the peak around Oct. 27. Here is which policy pays when tidal water reaches your home or car, and why buying flood insurance during the tides is too late.',
      ogAlt: 'Illustration of a Florida house on a street covered by tidal water under a full moon',
      category: 'Flood insurance',
      body: [
        { type: 'p', text: 'Miami-Dade County and the City of Miami list **October 24–30** as the next king tide window, with the highest predicted tides of the fall. The South Florida Water Management District (SFWMD) forecasts the year’s highest predicted tide on the East Coast for **October 27, 2026**. On those days, salt water can push up through storm drains and cover low streets, yards and driveways, even when it isn’t raining.' },
        { type: 'p', text: 'If that water reaches your house or car, which policy pays? Here is what the official sources say.' },

        { type: 'h2', text: 'When and where king tides flood' },
        { type: 'p', text: 'King tides are the highest predicted high tides of the year. Miami-Dade County explains that the highest tides in Southeast Florida come in the fall, partly because the water is warmer and seasonal winds push water levels higher. The City of Miami says king tide flooding usually lasts about three hours, roughly 1.5 hours before and after the peak. Its table puts the October 27 peaks at about 10:31 AM and 10:34 PM.' },
        { type: 'ul', items: [
          '**County and City of Miami dates still ahead:** Oct. 24–30 (highest), Nov. 6–9 and Nov. 23–26.',
          '**SFWMD East Coast outlook:** elevated tides Oct. 22–Nov. 12, then Nov. 22–29 and Dec. 22–27.',
          '**Worse with weather:** the County warns that rain, strong winds or big waves on top of a king tide can cause more severe flooding.',
        ] },
        { type: 'p', text: 'NOAA reports that high tide flooding is now about twice as frequent in U.S. coastal communities as it was 20 years ago.' },

        { type: 'h2', text: 'Your homeowners policy generally does not cover flood' },
        { type: 'p', text: 'The Florida Department of Financial Services (DFS) is direct about it: flood damage is not covered by a homeowners policy, and the definition of flood typically includes an **overflow of inland or tidal waters**. FloodSmart, FEMA’s flood insurance site, says the same about most homeowners and renters policies. DFS adds that flood is usually a separate policy, although some insurers offer it as an endorsement, so check your declarations page.' },

        { type: 'h2', text: 'Does king tide water count as a “flood”?' },
        { type: 'p', text: 'Under the National Flood Insurance Program (NFIP) Standard Flood Insurance Policy, a flood is a general and temporary condition of water covering **two or more acres of normally dry land, or two or more properties (one of them yours)**, from the overflow of inland or tidal waters or the unusual and rapid runoff of surface water. Tidal water that covers your street and enters your home can fit that definition. The policy pays for direct physical loss, so there must be visible damage to insured property.' },
        { type: 'p', text: 'Even then, the NFIP does not cover everything a king tide can reach. FloodSmart and the policy itself exclude, among other things:' },
        { type: 'ul', items: [
          'Cars and most self-propelled vehicles',
          'Property outside the building, such as landscaping, decks, patios, fences, seawalls, docks and swimming pools',
          'Temporary housing and living expenses while your home is repaired',
          'Water damage that comes mainly from a problem confined to the house, such as a broken pipe',
        ] },

        { type: 'h2', text: 'What an NFIP policy covers' },
        { type: 'p', text: 'Building coverage, up to $250,000 for a home, pays for the structure, electrical and plumbing systems, the water heater, built-in appliances and permanently installed flooring and cabinets. Contents coverage, up to $100,000, is bought separately and protects furniture, clothing, electronics, and the washer and dryer. Each has its own deductible. When flooding is imminent, the policy can also pay up to $1,000 for sandbags, pumps and similar measures, and up to $1,000 to move insured property to safety.' },

        { type: 'h2', text: 'The 30-day wait: buying during the tides is too late' },
        { type: 'p', text: 'Under federal rule 44 CFR 61.11, a new NFIP policy, or added coverage, generally takes effect at **12:01 a.m. on the 30th day after you apply and pay**. A policy applied for and paid on October 17 would start on November 16: after the Oct. 24–30 and Nov. 6–9 tides, but before Nov. 23–26. The policy also won’t pay for a flood that was already under way on the day you applied.' },
        { type: 'p', text: 'There are a few exceptions:' },
        { type: 'ul', items: [
          '**Mortgage closing:** if you buy flood insurance when you make, increase, extend or renew a loan, coverage can start at closing.',
          '**New flood map:** within 13 months after your community’s flood map is revised, the wait is one day (FloodSmart describes it as buying within a year of a newly designated high-risk zone).',
          '**Renewal changes:** FloodSmart says there is no wait when you change coverage while renewing.',
        ] },

        { type: 'h2', text: 'Your car is a separate question' },
        { type: 'p', text: 'Flood insurance does not cover cars. For a vehicle, flood damage falls under **comprehensive** (other than collision) coverage, which DFS says pays for damage from fire, theft, windstorm, vandalism or flood. Florida only requires PIP and property damage liability to register a car, so a driver with just the minimum has no coverage for a flooded engine. Compare the options in [comprehensive vs. collision in Florida](/en/blog/comprehensive-vs-collision-florida), and if you are shopping for a used car this season, read [how to spot a flood-damaged title](/en/blog/flood-damaged-used-car-florida).' },
        { type: 'p', text: 'The County’s advice for king tides: move vehicles to higher ground before the tides begin, don’t drive through flooded streets, and wash your car with fresh water after driving through salt water.' },

        { type: 'h2', text: 'Two dates to keep in mind' },
        { type: 'p', text: '**December 11, 2026.** FEMA says the NFIP’s authorization was extended on September 2, 2026, through December 11, 2026. If Congress lets it lapse, FEMA would stop selling and renewing policies until it acts, though valid claims would still be paid. Another reason not to wait.' },
        { type: 'p', text: '**January 1, 2027.** Citizens Property Insurance Corporation will require flood coverage on most of its new and renewing personal residential policies that include wind. See [what Citizens policyholders need to do](/en/blog/citizens-flood-insurance-requirement-2027).' },

        { type: 'h2', text: 'A quick king tide checklist' },
        { type: 'ol', items: [
          'Find your declarations pages and confirm whether you have flood coverage for the building and for contents.',
          'Look up your flood zone and how close your street sits to tidal water.',
          'Take photos or a short video of each room and your belongings now.',
          'Move cars and valuables off the ground floor or to higher ground before the peak days.',
          'If water gets in, photograph the damage and report it promptly. NFIP policies ask for a signed proof of loss within 60 days. Our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) walks through documenting a loss.',
        ] },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Bring your current home and auto declarations pages to our office at 33550 S Dixie Hwy, Suite 102, Florida City (Monday–Friday 9–6, Saturday by appointment), or call (305) 859-3953. A licensed agent will check what you have, explain the waiting period and flood options, and review comprehensive coverage on your car. Learn more on our [flood insurance page](/en/flood-insurance-homestead-fl) or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms of the policy you choose. Talk with a licensed agent about your situation.' },
      ],
      faq: [
        { q: 'Will my homeowners policy pay if a king tide floods my house?', a: 'Generally no. Florida DFS says flood damage, including the overflow of tidal waters, is not covered by a homeowners policy. You need a separate flood policy or a flood endorsement, if your insurer offers one.' },
        { q: 'If I buy flood insurance today, am I covered for the October 27 peak?', a: 'Usually not. A new NFIP policy generally takes effect on the 30th day after you apply and pay, so a policy started on October 17 would begin on November 16. The main exceptions are buying at a mortgage closing or shortly after a flood map revision.' },
        { q: 'Does flood insurance cover my car?', a: 'No. NFIP policies exclude cars. Flood damage to a vehicle is covered by comprehensive auto coverage, if you carry it.' },
        { q: 'Is flood insurance required in Florida?', a: 'Florida law does not require homeowners to buy it, but a lender may require it, and Citizens will require it on most policies with wind coverage starting January 1, 2027.' },
      ],
      sources: [
        { label: 'Miami-Dade County: Prepare for King Tides (Oct. 13, 2026)', url: S.mdc },
        { label: 'City of Miami: King Tides 2026 dates and peak times', url: S.miami },
        { label: 'SFWMD: 2026 King Tide Season Forecast', url: S.sfwmd },
        { label: 'NOAA: What is high tide flooding?', url: S.noaa },
        { label: 'Florida DFS: Homeowners Insurance Overview', url: S.dfsHome },
        { label: 'Florida DFS Insurance Consumer Advocate: Flood insurance', url: S.dfsFlood },
        { label: 'Florida DFS: Personal Automobile Insurance Overview', url: S.dfsAuto },
        { label: 'FLHSMV: Florida insurance requirements', url: S.flhsmv },
        { label: 'FloodSmart (NFIP): Buy a flood insurance policy', url: S.floodsmart },
        { label: '44 CFR 61.11: effective date of NFIP coverage', url: S.cfr6111 },
        { label: '44 CFR Part 61, Appendix A(1): Standard Flood Insurance Policy, Dwelling Form', url: S.sfip },
        { label: 'FEMA: Congressional reauthorization of the NFIP', url: S.fema },
        { label: 'Congressional Research Service: What Happens If the NFIP Lapses? (IN10835)', url: S.crs },
        { label: 'Citizens Property Insurance Corporation: Flood insurance requirements', url: S.citizens },
      ],
    },
    es: {
      title: 'Mareas reales del 24 al 30 de octubre: qué cubre el seguro de inundación y por qué hay que esperar 30 días',
      metaTitle: 'Mareas reales de octubre y seguro de inundación | M&K Agency',
      description: 'Las mareas más altas del año llegan a Miami-Dade del 24 al 30 de octubre. Qué cubren el seguro de casa, el de inundación y el de auto, y la espera de 30 días.',
      excerpt: 'Las mareas más altas del otoño llegan a Miami-Dade del 24 al 30 de octubre, con el pico alrededor del 27. Vea qué póliza responde si el agua llega a su casa o a su carro, y por qué comprar el seguro durante las mareas ya es tarde.',
      ogAlt: 'Ilustración de una casa en Florida con la calle cubierta por agua de marea bajo la luna llena',
      category: 'Seguro de inundación',
      body: [
        { type: 'p', text: 'El Condado de Miami-Dade y la Ciudad de Miami señalan del **24 al 30 de octubre** como la próxima ventana de mareas reales (king tides), con las mareas más altas previstas para este otoño. El Distrito de Manejo del Agua del Sur de Florida (SFWMD) pronostica la marea más alta del año en la costa este para el **27 de octubre de 2026**. Esos días el agua salada sube por los desagües y cubre calles bajas y patios, aunque no llueva.' },
        { type: 'p', text: 'Si esa agua llega a su casa o a su carro, ¿qué póliza paga? Esto dicen las fuentes oficiales.' },

        { type: 'h2', text: 'Cuándo y dónde inundan las mareas reales' },
        { type: 'p', text: 'Las mareas reales son las pleamares más altas previstas del año. En el sureste de Florida llegan en otoño, cuando el agua está más caliente y los vientos de la temporada suben el nivel del mar, explica el Condado. Según la Ciudad de Miami, la inundación dura unas tres horas, alrededor del pico. Su tabla ubica los picos del 27 de octubre cerca de las 10:31 a. m. y las 10:34 p. m.' },
        { type: 'ul', items: [
          '**Fechas que quedan según el Condado y la Ciudad de Miami:** 24 al 30 de octubre (las más altas), 6 al 9 de noviembre y 23 al 26 de noviembre.',
          '**Pronóstico del SFWMD para la costa este:** mareas elevadas del 22 de octubre al 12 de noviembre, luego del 22 al 29 de noviembre y del 22 al 27 de diciembre.',
          '**Con mal tiempo es peor:** lluvia, viento fuerte u oleaje agravan la inundación, advierte el Condado.',
        ] },
        { type: 'p', text: 'La NOAA informa que las inundaciones por marea alta ya ocurren el doble de veces en las comunidades costeras de EE. UU. que hace 20 años.' },

        { type: 'h2', text: 'El seguro de casa, por lo general, no cubre inundaciones' },
        { type: 'p', text: 'El Departamento de Servicios Financieros de Florida (DFS) lo dice claro: el seguro de vivienda no cubre daños por inundación, y la definición de inundación normalmente incluye el **desbordamiento de aguas interiores o de marea**. FloodSmart, el sitio de FEMA, dice lo mismo de la mayoría de las pólizas de casa y de inquilinos. Suele ser una póliza aparte, aunque algunas aseguradoras la ofrecen como endoso, añade el DFS.' },

        { type: 'h2', text: '¿El agua de una marea real cuenta como “inundación”?' },
        { type: 'p', text: 'En la póliza estándar del Programa Nacional de Seguro contra Inundaciones (NFIP), una inundación es una condición general y temporal en la que el agua cubre **dos o más acres de terreno normalmente seco, o dos o más propiedades (una de ellas la suya)**, por el desbordamiento de aguas interiores o de marea, entre otras causas. La marea que tapa su calle y entra a la casa puede encajar ahí, siempre que haya daño físico visible.' },
        { type: 'p', text: 'Aun así, el NFIP excluye, entre otras cosas:' },
        { type: 'ul', items: [
          'Carros y la mayoría de los vehículos motorizados',
          'Lo que está fuera de la casa: jardín, terrazas, cercas, muros de contención, muelles y piscinas',
          'Vivienda temporal y gastos de vida mientras se repara la casa',
          'Daños por agua que vienen de un problema dentro de la casa, como un tubo roto',
        ] },

        { type: 'h2', text: 'Qué cubre una póliza del NFIP' },
        { type: 'p', text: 'La cobertura de estructura (hasta $250,000 por vivienda) protege la casa, la electricidad, la plomería, el calentador, los electrodomésticos empotrados, los pisos fijos y los gabinetes. La de contenido (hasta $100,000) se compra aparte y protege muebles, ropa, electrónicos, lavadora y secadora. Cada una tiene su deducible. Si la inundación es inminente, la póliza puede pagar hasta $1,000 por sacos de arena y bombas, y hasta $1,000 por mover bienes asegurados a un lugar seguro.' },

        { type: 'h2', text: 'La espera de 30 días: comprar durante las mareas ya es tarde' },
        { type: 'p', text: 'Según la norma federal 44 CFR 61.11, una póliza nueva del NFIP, o la cobertura que se agrega, normalmente entra en vigor a las **12:01 a. m. del día 30 después de solicitarla y pagarla**. Si la paga el 17 de octubre, empezaría el 16 de noviembre: después de las mareas de octubre y del 6 al 9 de noviembre, pero antes de las del 23 al 26. Tampoco paga una inundación que ya estaba en curso el día de la solicitud.' },
        { type: 'p', text: 'Hay algunas excepciones:' },
        { type: 'ul', items: [
          '**Cierre de hipoteca:** si lo compra al sacar, aumentar, extender o renovar un préstamo, puede empezar el día del cierre.',
          '**Mapa de inundación nuevo:** en los 13 meses siguientes a la revisión del mapa de su comunidad, la espera es de un día.',
          '**Cambios al renovar:** no hay espera, según FloodSmart.',
        ] },

        { type: 'h2', text: 'El carro es otro tema' },
        { type: 'p', text: 'El seguro de inundación no cubre carros. En un vehículo, el daño por inundación entra en la **cobertura amplia** (comprehensive), que según el DFS paga daños por incendio, robo, vendaval, vandalismo o inundación. Florida solo exige PIP y PDL para registrar un carro, así que con el mínimo un motor inundado no queda cubierto. Compare opciones en [cobertura amplia vs. colisión en Florida](/es/blog/comprehensive-vs-collision-florida) y, si va a comprar un carro usado, lea [cómo detectar un título de flood vehicle](/es/blog/flood-damaged-used-car-florida).' },
        { type: 'p', text: 'El Condado aconseja mover los carros a terreno alto antes de las mareas, no manejar por calles inundadas y lavar el carro con agua dulce si pasó por agua salada.' },

        { type: 'h2', text: 'Dos fechas importantes' },
        { type: 'p', text: '**11 de diciembre de 2026.** FEMA informa que la autorización del NFIP se extendió el 2 de septiembre de 2026 hasta el 11 de diciembre de 2026. Si vence, FEMA dejaría de vender y renovar pólizas hasta que el Congreso actúe, aunque seguiría pagando reclamos válidos.' },
        { type: 'p', text: '**1 de enero de 2027.** Citizens Property Insurance Corporation exigirá seguro de inundación en la mayoría de sus pólizas residenciales nuevas y renovadas que incluyen viento. Vea [qué deben hacer los asegurados de Citizens](/es/blog/citizens-flood-insurance-requirement-2027).' },

        { type: 'h2', text: 'Lista rápida para las mareas reales' },
        { type: 'ol', items: [
          'Revise sus declaraciones: ¿tiene cobertura de inundación para la estructura y el contenido?',
          'Desde ya, tome fotos o video de cada cuarto y sus pertenencias.',
          'Antes de los días pico, suba los objetos de valor y mueva el carro a un lugar alto.',
          'Si entra agua, fotografíe el daño y repórtelo pronto; el NFIP pide una prueba de pérdida firmada dentro de 60 días. Vea nuestra [lista para reclamar después de un huracán](/es/blog/hurricane-claim-checklist-florida).',
        ] },

        { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
        { type: 'p', text: 'Traiga sus páginas de declaraciones de casa y de auto a nuestra oficina en 33550 S Dixie Hwy, Suite 102, Florida City (lunes a viernes de 9 a 6, sábados con cita), o llame al (305) 859-3953. Un agente licenciado revisará su cobertura, las opciones de inundación y la cobertura amplia de su carro. Más información en nuestra página de [seguro de inundación](/es/flood-insurance-homestead-fl), o [pida una cotización](/es/quote).' },
        { type: 'p', text: 'La cobertura depende de los términos de la póliza que elija. Hable con un agente licenciado sobre su caso.' },
      ],
      faq: [
        { q: '¿Mi seguro de casa paga si una marea real me inunda la casa?', a: 'Por lo general, no. El DFS de Florida indica que el seguro de vivienda no cubre inundaciones, incluido el desbordamiento de aguas de marea. Necesita una póliza de inundación aparte o un endoso.' },
        { q: 'Si compro el seguro de inundación hoy, ¿estoy cubierto para el pico del 27 de octubre?', a: 'Normalmente no. Una póliza nueva del NFIP entra en vigor el día 30 después de solicitarla y pagarla: si la paga el 17 de octubre, empieza el 16 de noviembre. Las excepciones principales son el cierre de una hipoteca y una revisión reciente del mapa de inundación.' },
        { q: '¿El seguro de inundación cubre mi carro?', a: 'No. Las pólizas del NFIP excluyen los carros. El daño por inundación en un vehículo lo cubre la cobertura amplia (comprehensive) del seguro de auto, si la tiene.' },
        { q: '¿Es obligatorio el seguro de inundación en Florida?', a: 'La ley de Florida no obliga a los dueños de casa a comprarlo, pero el banco puede exigirlo, y Citizens lo exigirá en la mayoría de las pólizas con viento a partir del 1 de enero de 2027.' },
      ],
      sources: [
        { label: 'Condado de Miami-Dade: King Tides (en inglés)', url: S.mdcPage },
        { label: 'Ciudad de Miami: fechas y horas pico de King Tides 2026 (en inglés)', url: S.miami },
        { label: 'SFWMD: pronóstico de la temporada de mareas reales 2026 (en inglés)', url: S.sfwmd },
        { label: 'NOAA: qué es la inundación por marea alta (en inglés)', url: S.noaa },
        { label: 'DFS de Florida: resumen del seguro de vivienda (en inglés)', url: S.dfsHome },
        { label: 'DFS de Florida: seguro de inundación (en inglés)', url: S.dfsFlood },
        { label: 'DFS de Florida: resumen del seguro de auto personal (en inglés)', url: S.dfsAuto },
        { label: 'FLHSMV: requisitos de seguro en Florida (en inglés)', url: S.flhsmv },
        { label: 'FloodSmart (NFIP): comprar una póliza de inundación (en inglés)', url: S.floodsmart },
        { label: '44 CFR 61.11: fecha de inicio de la cobertura del NFIP (en inglés)', url: S.cfr6111 },
        { label: '44 CFR parte 61, apéndice A(1): póliza estándar de inundación (en inglés)', url: S.sfip },
        { label: 'FEMA: reautorización del NFIP por el Congreso (en inglés)', url: S.fema },
        { label: 'Citizens Property Insurance Corporation: requisitos de seguro de inundación (en inglés)', url: S.citizens },
      ],
    },
    ru: {
      title: 'Королевские приливы 24–30 октября: что покрывает страховка от наводнения и почему нужно ждать 30 дней',
      metaTitle: 'Королевские приливы и страховка от наводнения | M&K Agency',
      description: 'Самые высокие приливы года придут в Майами-Дейд 24–30 октября. Что покрывают страховка дома, полис от наводнения и автостраховка и зачем ждать 30 дней.',
      excerpt: 'Самые высокие осенние приливы ожидаются в Майами-Дейд 24–30 октября, пик около 27-го. Разбираемся, какой полис платит, если вода дошла до дома или машины, и почему покупать страховку от наводнения во время приливов уже поздно.',
      ogAlt: 'Иллюстрация: дом во Флориде, улица залита приливной водой, над ней полная луна',
      category: 'Страхование от наводнения',
      body: [
        { type: 'p', text: 'Округ Майами-Дейд и город Майами называют **24–30 октября** следующим периодом королевских приливов (king tides): это самые высокие приливы, ожидаемые этой осенью. Управление водных ресурсов Южной Флориды (SFWMD) прогнозирует самый высокий прилив года на восточном побережье на **27 октября 2026 года**. В такие дни солёная вода поднимается через ливнёвки и заливает низкие улицы, дворы и подъезды к домам, даже если дождя нет.' },
        { type: 'p', text: 'Если вода дойдёт до дома или машины, кто заплатит? Вот что говорят официальные источники и что ещё можно успеть сделать на этой неделе.' },

        { type: 'h2', text: 'Когда и где приливы заливают улицы' },
        { type: 'p', text: 'Королевские приливы — самые высокие прогнозируемые приливы года. Округ объясняет, что на юго-востоке Флориды они приходятся на осень: вода теплее, а сезонные ветры нагоняют её к берегу. По данным города Майами, подтопление обычно длится около трёх часов — примерно полтора часа до пика и полтора после. В таблице города пики 27 октября указаны около 10:31 и 22:34.' },
        { type: 'ul', items: [
          '**Ближайшие даты по данным округа и города Майами:** 24–30 октября (самые высокие), 6–9 ноября и 23–26 ноября.',
          '**Прогноз SFWMD для восточного побережья:** повышенные приливы с 22 октября по 12 ноября, затем 22–29 ноября и 22–27 декабря.',
          '**В непогоду хуже:** округ предупреждает, что дождь, сильный ветер или волны вместе с королевским приливом могут дать более серьёзное подтопление.',
        ] },
        { type: 'p', text: 'По данным NOAA, приливные подтопления в прибрежных районах США теперь случаются примерно вдвое чаще, чем 20 лет назад. Чтобы проверить свой квартал, округ советует карту NOAA Sea Level Rise Viewer (вкладка flood frequency).' },

        { type: 'h2', text: 'Обычная страховка дома наводнение, как правило, не покрывает' },
        { type: 'p', text: 'Департамент финансовых услуг Флориды (DFS) пишет прямо: ущерб от наводнения полис домовладельца не покрывает, а под наводнением обычно понимается в том числе **выход из берегов внутренних или приливных вод**. FloodSmart, сайт FEMA о страховании от наводнений, говорит то же о большинстве полисов для владельцев и арендаторов. DFS добавляет, что это, как правило, отдельный полис, хотя некоторые страховщики предлагают его как дополнение (endorsement). Проверьте свою страницу деклараций (declarations page).' },

        { type: 'h2', text: 'Считается ли приливная вода «наводнением»?' },
        { type: 'p', text: 'В стандартном полисе Национальной программы страхования от наводнений (NFIP) наводнение — это общее временное затопление **не менее двух акров обычно сухой земли или не менее двух участков (один из них ваш)** из-за выхода из берегов внутренних или приливных вод либо необычно быстрого скопления поверхностной воды. Прилив, который залил улицу и зашёл в дом, может подпадать под это определение. Полис платит за прямой физический ущерб, то есть повреждения застрахованного имущества должны быть видны.' },
        { type: 'p', text: 'Но даже тогда NFIP покрывает не всё, до чего доходит вода. FloodSmart и сам полис исключают, в частности:' },
        { type: 'ul', items: [
          'Машины и большинство самоходной техники',
          'Всё, что снаружи дома: газон и растения, настилы, патио, заборы, подпорные стенки, причалы и бассейны',
          'Временное жильё и расходы на проживание на время ремонта',
          'Ущерб от воды, источник которой внутри дома, например лопнувшая труба',
        ] },

        { type: 'h2', text: 'Что покрывает полис NFIP' },
        { type: 'p', text: 'Покрытие строения (building) — до $250 000 для жилого дома: сам дом, электрика и сантехника, водонагреватель, встроенная техника, постоянно уложенные полы и шкафы. Покрытие имущества (contents) — до $100 000, покупается отдельно и защищает мебель, одежду, электронику, стиральную и сушильную машины. У каждого покрытия своя франшиза. Если наводнение неминуемо, полис может оплатить до $1000 на мешки с песком, насосы и похожие меры и до $1000 на перевозку застрахованного имущества в безопасное место.' },

        { type: 'h2', text: '30 дней ожидания: покупать во время приливов уже поздно' },
        { type: 'p', text: 'По федеральному правилу 44 CFR 61.11 новый полис NFIP, как и увеличение покрытия, обычно вступает в силу в **00:01 на 30-й день после подачи заявки и оплаты**. Полис, оформленный и оплаченный 17 октября, начнёт действовать 16 ноября — уже после приливов 24–30 октября и 6–9 ноября, но до 23–26 ноября. Кроме того, полис не оплатит наводнение, которое уже шло в день подачи заявки.' },
        { type: 'p', text: 'Исключений немного:' },
        { type: 'ul', items: [
          '**Закрытие ипотеки:** если страховка покупается при оформлении, увеличении, продлении или возобновлении кредита, она может начать действовать в день закрытия сделки.',
          '**Новая карта зон затопления:** в течение 13 месяцев после пересмотра карты для вашего района ожидание — один день (FloodSmart описывает это как покупку в течение года после того, как участок отнесли к зоне высокого риска).',
          '**Изменения при продлении:** по данным FloodSmart, при изменении покрытия во время продления ждать не нужно.',
          '**Наводнение после лесного пожара на федеральной земле:** ожидание один день, для Южной Флориды это почти неактуально.',
        ] },

        { type: 'h2', text: 'Машина — отдельный вопрос' },
        { type: 'p', text: 'Страховка от наводнения машины не покрывает. Для автомобиля ущерб от воды относится к покрытию **comprehensive** (ущерб не от столкновения): по данным DFS, оно платит за пожар, угон, ураганный ветер, вандализм и наводнение. Для регистрации машины Флорида требует только PIP и PDL (ответственность за чужое имущество), поэтому у водителя с минимальной страховкой залитый двигатель не покрыт. Подробнее — в статье [comprehensive и collision во Флориде](/ru/blog/comprehensive-vs-collision-florida), а если планируете купить подержанную машину, прочитайте, [как распознать «утопленника»](/ru/blog/flood-damaged-used-car-florida).' },
        { type: 'p', text: 'Советы округа на время приливов: заранее переставьте машину повыше, не ездите по залитым улицам, а после поездки по солёной воде помойте машину пресной водой.' },

        { type: 'h2', text: 'Две даты, о которых стоит помнить' },
        { type: 'p', text: '**11 декабря 2026 года.** FEMA сообщает, что 2 сентября 2026 года полномочия NFIP продлены до 11 декабря 2026 года. Если Конгресс их не продлит, FEMA перестанет продавать и продлевать полисы, пока Конгресс не примет решение, хотя обоснованные выплаты продолжатся. Ещё одна причина не откладывать.' },
        { type: 'p', text: '**1 января 2027 года.** Citizens Property Insurance Corporation начнёт требовать страховку от наводнения для большинства новых и продлеваемых полисов на жильё с покрытием от ветра. Подробнее — [что нужно сделать клиентам Citizens](/ru/blog/citizens-flood-insurance-requirement-2027).' },

        { type: 'h2', text: 'Короткий чек-лист на время приливов' },
        { type: 'ol', items: [
          'Найдите страницы деклараций и проверьте, есть ли у вас страховка от наводнения на дом и на имущество.',
          'Узнайте свою зону затопления и насколько близко ваша улица к приливной воде.',
          'Уже сейчас сфотографируйте или снимите на видео каждую комнату и вещи.',
          'Перед пиковыми днями уберите ценное с пола первого этажа и переставьте машину повыше.',
          'Если вода зашла в дом, сфотографируйте повреждения и сразу сообщите о них. По полису NFIP подписанное подтверждение убытка (proof of loss) нужно подать в течение 60 дней. Как задокументировать ущерб, рассказано в нашем [чек-листе страхового случая после урагана](/ru/blog/hurricane-claim-checklist-florida).',
        ] },

        { type: 'h2', text: 'Чем поможет M&K Agency' },
        { type: 'p', text: 'Принесите страницы деклараций по дому и машине в наш офис: 33550 S Dixie Hwy, Suite 102, Florida City (понедельник–пятница с 9 до 6, суббота по записи), или позвоните по номеру (305) 859-3953. Лицензированный агент проверит ваше покрытие, объяснит срок ожидания и варианты страхования от наводнения и посмотрит comprehensive по машине. Подробнее о защите дома — на странице [страхование дома](/ru/homeowners-insurance-florida-city), или сразу [запросите расчёт](/ru/quote).' },
        { type: 'p', text: 'Покрытие зависит от условий выбранного полиса. Обсудите свою ситуацию с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Заплатит ли страховка дома, если королевский прилив затопит дом?', a: 'Как правило, нет. DFS Флориды указывает, что полис домовладельца не покрывает наводнение, в том числе выход приливных вод. Нужен отдельный полис от наводнения или дополнение к полису, если страховщик его предлагает.' },
        { q: 'Если купить страховку от наводнения сегодня, буду ли я защищён на пик 27 октября?', a: 'Обычно нет. Новый полис NFIP вступает в силу на 30-й день после заявки и оплаты: оформленный 17 октября начнёт действовать 16 ноября. Основные исключения — покупка при закрытии ипотеки или вскоре после пересмотра карты зон затопления.' },
        { q: 'Покрывает ли страховка от наводнения машину?', a: 'Нет. Полисы NFIP машины исключают. Ущерб от воды для автомобиля покрывает comprehensive в автостраховке, если оно у вас есть.' },
        { q: 'Обязательна ли страховка от наводнения во Флориде?', a: 'Закон Флориды не обязывает домовладельцев её покупать, но её может потребовать банк, а Citizens с 1 января 2027 года будет требовать её для большинства полисов с покрытием от ветра.' },
      ],
      sources: [
        { label: 'Округ Майами-Дейд: King Tides (на английском)', url: S.mdcPage },
        { label: 'Город Майами: даты и время пиков King Tides 2026 (на английском)', url: S.miami },
        { label: 'SFWMD: прогноз сезона королевских приливов 2026 (на английском)', url: S.sfwmd },
        { label: 'NOAA: что такое приливное подтопление (на английском)', url: S.noaa },
        { label: 'DFS Флориды: обзор страхования дома (на английском)', url: S.dfsHome },
        { label: 'DFS Флориды: страхование от наводнения (на английском)', url: S.dfsFlood },
        { label: 'DFS Флориды: обзор личного автострахования (на английском)', url: S.dfsAuto },
        { label: 'FLHSMV: требования к страхованию во Флориде (на английском)', url: S.flhsmv },
        { label: 'FloodSmart (NFIP): покупка полиса от наводнения (на английском)', url: S.floodsmart },
        { label: '44 CFR 61.11: дата начала действия полиса NFIP (на английском)', url: S.cfr6111 },
        { label: '44 CFR, часть 61, приложение A(1): стандартный полис от наводнения (на английском)', url: S.sfip },
        { label: 'FEMA: продление полномочий NFIP Конгрессом (на английском)', url: S.fema },
        { label: 'Citizens Property Insurance Corporation: требования о страховке от наводнения (на английском)', url: S.citizens },
      ],
    },
  },
};
