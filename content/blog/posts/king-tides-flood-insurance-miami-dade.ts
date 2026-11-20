import type { BlogPost } from '../types';

// Refreshed 2026-11-20 (ET) (content plan 2026-11, row 2026-11-20): dates moved from the Oct. 24-30 window to the
// Nov. 23-26 window (Thanksgiving week). datePublished 2026-10-17 kept. Facts checked 2026-11-20 against official
// sources (raw copies in /workspace/kingtides2/raw/; notes in /workspace/articles/king-tides-flood-insurance-miami-dade_sources.md):
// - Miami-Dade County King Tides page: 2026 fall dates per SFWMD incl. Nov. 6-9 and Nov. 23-26 (last on the list);
//   highest tides in the fall; worse with heavy rain, strong winds or big waves; move vehicles to higher ground, rinse
//   with fresh water after salt water; don't drive or walk through flood water; NOAA Sea Level Rise Viewer.
// - SFWMD 2026 King Tide Season Forecast: East Coast Nov. 22-29 (full moon) and Dec. 22-27; annual maximum peak Oct. 27.
// - SFWMD Weekly King Tide Forecast (Nov. 16, 2026; period Nov. 16-22): East Coast may remain below the NWS minor
//   flooding threshold and may approach it over the weekend as the full moon approaches; daily forecasts on the
//   Resilience Metrics Hub (Virginia Key etc.).
// - SFWMD news Nov. 18, 2026: Emergency Order 2026-085 (pumping, 2026 Fall Flooding); EOC Level 2; avoid flood water.
// - NOAA CO-OPS tide predictions, Virginia Key 8723214 (hilo, local time): highs Nov. 23 7:33 AM / 7:35 PM,
//   Nov. 24 8:23 AM / 8:26 PM, Nov. 25 9:13 AM / 9:17 PM, Nov. 26 10:04 AM / 10:10 PM; morning highs slightly higher.
// - NOAA "What is high tide flooding?": about twice as frequent as 20 years ago.
// - Florida DFS homeowners overview (flood excluded; includes overflow of tidal waters); DFS ICA flood page (separate
//   policy or endorsement; not required by FL law; lender may require); DFS auto overview (comprehensive incl. flood);
//   FLHSMV (PIP/PDL required).
// - FloodSmart "Buy a policy": building $250,000 / contents $100,000; 30-day wait with four exceptions (mortgage,
//   change at renewal, newly mapped high-risk zone within 12 months = 1 day, federal-land wildfire = 1 day); sewer
//   backup covered only if it directly results from flooding; 30-day grace period after expiration if renewed and paid.
// - 44 CFR 61.11 (12:01 a.m. on the 30th day; Nov. 20 -> Dec. 20); SFIP Dwelling Form (flood definition, exclusions,
//   loss avoidance $1,000 + $1,000, flood in progress, 60-day proof of loss).
// - FEMA reauthorization page + CRS IN10835: NFIP authorized through Dec. 11, 2026 (11:59 p.m.); no further extension
//   enacted as of Nov. 20, 2026.
// - Citizens flood page: most new and renewing personal residential policies with wind need flood by Jan. 1, 2027.
// No private insurer named. No premium or outcome claims.
const S = {
  mdcPage: 'https://www.miamidade.gov/initiative/weather-ready/flooding/king-tides.page',
  sfwmd: 'https://www.sfwmd.gov/news-events/news/2026-king-tide-season-forecast',
  sfwmdWeek: 'https://www.sfwmd.gov/news-events/news/weekly-king-tide-forecast-50',
  sfwmdEo: 'https://www.sfwmd.gov/news-events/news/sfwmd-issues-emergency-order-pumping-and-other-measures-address-flooding-south',
  tides: 'https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=8723214',
  noaa: 'https://oceanservice.noaa.gov/facts/nuisance-flooding.html',
  nws: 'https://www.weather.gov/mfl/',
  dfsHome: 'https://myfloridacfo.com/division/consumers/understanding-insurance/homeownersinsuranceoverview',
  dfsFlood: 'https://www.myfloridacfo.com/division/ica/fullcoverage/flood',
  dfsAuto: 'https://www.myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview',
  flhsmv: 'https://www.flhsmv.gov/insurance/',
  floodsmart: 'https://www.floodsmart.gov/get-insured/buy-a-policy',
  cfr6111: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/section-61.11',
  sfip: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/appendix-Appendix%20A(1)%20to%20Part%2061',
  fema: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  crs: 'https://www.congress.gov/crs-product/IN10835',
  citizens: 'https://www.citizensfla.com/flood',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'king-tides-flood-insurance-miami-dade',
  datePublished: '2026-10-17',
  dateModified: '2026-11-20',
  translations: {
    en: {
      title: 'King Tides Nov. 23–26: Flood Insurance During Thanksgiving Week',
      metaTitle: 'King Tides Nov. 23–26 and Flood Insurance | M&K Agency',
      description: 'King tides return to Miami-Dade Nov. 23–26, Thanksgiving week. What home, flood and car insurance cover, and why a new flood policy waits 30 days.',
      excerpt: 'The last king tide window on Miami-Dade’s 2026 fall list falls on Nov. 23–26, right before Thanksgiving. Here is which policy responds when tidal water reaches your home or car, and why buying flood insurance that week is too late.',
      ogAlt: 'Illustration of a Florida house and a car parked on higher ground beside a tidal street, with a calendar and a full moon',
      category: 'Flood insurance',
      body: [
        { type: 'p', text: 'Miami-Dade County lists **November 23–26** as the last king tide window on its 2026 fall schedule. The South Florida Water Management District (SFWMD) gives a slightly wider East Coast window, **November 22–29**, around the full moon. Thanksgiving is November 26, so the high tides overlap with a week when many families travel, host guests and leave cars parked on the street.' },
        { type: 'p', text: 'This window also follows a very wet week. On November 18, SFWMD issued Emergency Order 2026-085 to authorize pumping and other measures for what it calls the 2026 Fall Flooding. Ground that is already saturated and canals that are already high leave less room for salt water. Here is what the official sources say about timing and coverage.' },

        { type: 'h2', text: 'When to expect the high water' },
        { type: 'p', text: 'King tides are the highest predicted high tides of the year. The County explains that in Southeast Florida they peak in the fall, partly because the water is warmer and seasonal winds push water levels higher. The year’s highest predicted tide already passed on October 27, but the November full-moon tides can still cover low streets, yards and driveways, even on a dry, sunny day.' },
        { type: 'ul', items: [
          '**NOAA predictions for Virginia Key:** high tides around 7:33 AM and 7:35 PM on Nov. 23, 8:23 AM and 8:26 PM on Nov. 24, 9:13 AM and 9:17 PM on Nov. 25, and 10:04 AM and 10:10 PM on Thanksgiving Day. The morning tides are predicted slightly higher. Times shift by location, so check the station closest to you.',
          '**SFWMD weekly outlook (Nov. 16):** East Coast water levels may stay below the National Weather Service “minor flooding” threshold but may approach it as the full moon nears.',
          '**Weather makes it worse:** the County warns that heavy rain, strong winds or big waves on top of a king tide can cause more severe flooding. Follow [NWS Miami](https://www.weather.gov/mfl/) for coastal flood alerts.',
        ] },

        { type: 'h2', text: 'Your homeowners policy generally does not cover flood' },
        { type: 'p', text: 'The Florida Department of Financial Services (DFS) is direct: flood damage is not covered by a homeowners policy, and the definition of flood typically includes an **overflow of inland or tidal waters**. DFS adds that flood is usually a separate policy, although some insurers offer it as an endorsement. Florida law does not require homeowners to buy flood insurance, but a mortgage lender may.' },

        { type: 'h2', text: 'Does king tide water count as a “flood”?' },
        { type: 'p', text: 'Under the National Flood Insurance Program (NFIP) Standard Flood Insurance Policy, a flood is a general and temporary condition of water covering **two or more acres of normally dry land, or two or more properties (one of them yours)**, from the overflow of inland or tidal waters or the unusual and rapid runoff of surface water. A tide that covers your street and enters your home can fit that definition, as long as there is direct physical damage to insured property. FloodSmart adds that sewer backup is covered only when it results directly from flooding.' },
        { type: 'p', text: 'The NFIP still does not cover everything a king tide can reach. Among other things, it excludes:' },
        { type: 'ul', items: [
          'Cars and most self-propelled vehicles',
          'Property outside the building, such as landscaping, decks, patios, fences, seawalls, docks and swimming pools',
          'Temporary housing and living expenses while your home is repaired',
          'Water damage that comes mainly from a problem inside the house, such as a broken pipe',
        ] },

        { type: 'h2', text: 'What an NFIP policy covers' },
        { type: 'p', text: 'Building coverage, up to $250,000 for a home, pays for the structure and its systems, built-in appliances and permanent flooring. Contents coverage, up to $100,000, is bought separately for furniture, clothing and electronics. Each has its own deductible. When flooding is imminent, the policy can also pay up to $1,000 for sandbags and pumps, and up to $1,000 to move insured property to safety.' },

        { type: 'h2', text: 'The 30-day wait: buying during Thanksgiving week is too late' },
        { type: 'p', text: 'Under federal rule 44 CFR 61.11, a new NFIP policy, or added coverage, generally takes effect at **12:01 a.m. on the 30th day after you apply and pay**. A policy applied for and paid today, November 20, would start on **December 20**: after the Thanksgiving tides, but before the next SFWMD East Coast window of December 22–27. The policy also won’t pay for a flood that was already under way on the day you applied.' },
        { type: 'p', text: 'The main exceptions, according to FloodSmart:' },
        { type: 'ul', items: [
          '**Mortgage:** no wait if you buy flood insurance while making, increasing, extending or renewing a loan.',
          '**Renewal changes:** no wait if you change your coverage while renewing your policy.',
          '**New flood map:** a one-day wait if your property was newly mapped into a high-risk zone and you buy within 12 months of the update (the federal rule says 13 months).',
        ] },

        { type: 'h2', text: 'Your car is a separate question' },
        { type: 'p', text: 'Flood insurance does not cover cars. For a vehicle, flood damage falls under **comprehensive** (other than collision) coverage, which DFS says pays for damage from fire, theft, windstorm, vandalism or flood. Florida only requires PIP and property damage liability to register a car, so a driver with just the minimum has no coverage for a flooded engine. Compare the options in [comprehensive vs. collision in Florida](/en/blog/comprehensive-vs-collision-florida), and if you are shopping for a used car after this fall’s flooding, read [how to spot a flood-damaged car](/en/blog/flood-damaged-used-car-florida).' },
        { type: 'p', text: 'The County’s advice for king tides: move vehicles to higher ground before the tides begin, don’t drive or walk through flooded streets, and rinse your car with fresh water after driving through salt water.' },

        { type: 'h2', text: 'Two dates right after the holiday' },
        { type: 'p', text: '**December 11, 2026.** FEMA says the NFIP is authorized through 11:59 p.m. on December 11, 2026, and as of today Congress has not passed a further extension. If the program lapses, FEMA would stop selling and renewing policies until Congress acts, although valid claims would still be paid.' },
        { type: 'p', text: '**January 1, 2027.** Citizens Property Insurance Corporation will require flood coverage on most of its new and renewing personal residential policies that include wind. See [what Citizens policyholders need to do](/en/blog/citizens-flood-insurance-requirement-2027).' },

        { type: 'h2', text: 'A quick checklist before Thanksgiving' },
        { type: 'ol', items: [
          'Find your declarations pages and confirm whether you have flood coverage for the building and for contents.',
          'Check tide times for the nearest station and plan driving and parking around the highs.',
          'Take photos or a short video of each room and your belongings now.',
          'Move cars and valuables off the ground floor or to higher ground before you travel.',
          'If water gets in, photograph the damage and report it promptly. NFIP policies ask for a signed proof of loss within 60 days. See our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida).',
        ] },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Bring your home and auto declarations pages to our office at 33550 S Dixie Hwy, Suite 102, Florida City (Monday–Friday 9–6, Saturday by appointment), or call [(305) 859-3953](' + TEL + '). A licensed agent will check what you have, explain the waiting period and your flood options, and review comprehensive coverage on your car. Learn more on our [flood insurance page](/en/flood-insurance-homestead-fl) or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms of the policy you choose. Talk with a licensed agent about your situation.' },
      ],
      faq: [
        { q: 'Will my homeowners policy pay if a king tide floods my house?', a: 'Generally no. Florida DFS says flood damage, including the overflow of tidal waters, is not covered by a homeowners policy. You need a separate flood policy, or a flood endorsement if your insurer offers one.' },
        { q: 'If I buy flood insurance this week, am I covered for the Nov. 23–26 tides?', a: 'Usually not. A new NFIP policy generally takes effect on the 30th day after you apply and pay, so a policy started on November 20 would begin on December 20. The main exceptions are buying at a mortgage closing, changing coverage at renewal, or buying shortly after a flood map revision.' },
        { q: 'Does flood insurance cover my car?', a: 'No. NFIP policies exclude cars. Flood damage to a vehicle is covered by comprehensive auto coverage, if you carry it.' },
      ],
      sources: [
        { label: 'Miami-Dade County: King Tides (2026 schedule and safety tips)', url: S.mdcPage },
        { label: 'SFWMD: 2026 King Tide Season Forecast', url: S.sfwmd },
        { label: 'SFWMD: Weekly King Tide Forecast, Nov. 16–22, 2026', url: S.sfwmdWeek },
        { label: 'SFWMD: Emergency Order 2026-085 for fall flooding (Nov. 18, 2026)', url: S.sfwmdEo },
        { label: 'NOAA Tides & Currents: tide predictions, Virginia Key', url: S.tides },
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
      title: 'Mareas reales del 23 al 26 de noviembre: el seguro de inundación en la semana de Acción de Gracias',
      metaTitle: 'Mareas reales de noviembre y seguro de inundación | M&K Agency',
      description: 'Las mareas reales vuelven a Miami-Dade del 23 al 26 de noviembre. Qué cubren los seguros de casa, inundación y auto, y por qué hay que esperar 30 días.',
      excerpt: 'La última ventana de mareas reales del calendario de otoño 2026 de Miami-Dade cae del 23 al 26 de noviembre, justo antes de Acción de Gracias. Vea qué póliza responde si el agua llega a su casa o a su carro, y por qué comprar el seguro esa semana ya es tarde.',
      ogAlt: 'Ilustración de una casa en Florida y un carro estacionado en terreno alto junto a una calle con agua de marea, un calendario y la luna llena',
      category: 'Seguro de inundación',
      body: [
        { type: 'p', text: 'El Condado de Miami-Dade marca del **23 al 26 de noviembre** como la última ventana de mareas reales (king tides) de su calendario de otoño 2026. El Distrito de Manejo del Agua del Sur de Florida (SFWMD) da para la costa este del **22 al 29 de noviembre**, con la luna llena. Como Acción de Gracias cae el 26, las mareas coinciden con viajes, visitas y carros estacionados en la calle.' },
        { type: 'p', text: 'Además, llegan tras una semana muy lluviosa: el 18 de noviembre el SFWMD emitió la Orden de Emergencia 2026-085 para autorizar bombeo por las inundaciones de otoño de 2026. Con el suelo empapado y los canales altos, el agua salada tiene menos salida. Esto dicen las fuentes oficiales.' },

        { type: 'h2', text: 'Cuándo esperar el agua alta' },
        { type: 'p', text: 'Las mareas reales son las pleamares más altas previstas del año y en el sureste de Florida llegan en otoño, explica el Condado. La más alta ya pasó el 27 de octubre, pero las de luna llena de noviembre todavía pueden cubrir calles bajas, patios y entradas de garaje, aunque haga sol.' },
        { type: 'ul', items: [
          '**Predicciones de la NOAA para Virginia Key:** pleamar cerca de las 7:33 a. m. y 7:35 p. m. el 23; 8:23 a. m. y 8:26 p. m. el 24; 9:13 a. m. y 9:17 p. m. el 25; y 10:04 a. m. y 10:10 p. m. el Día de Acción de Gracias. La hora varía según el lugar.',
          '**Pronóstico semanal del SFWMD (16 de noviembre):** en la costa este el agua podría quedarse por debajo del umbral de “inundación menor” del Servicio Nacional de Meteorología, pero acercarse a él con la luna llena.',
          '**Con mal tiempo es peor:** lluvia fuerte, viento u oleaje encima de una marea real agravan la inundación, advierte el Condado. Siga las alertas de [NWS Miami](https://www.weather.gov/mfl/).',
        ] },

        { type: 'h2', text: 'El seguro de casa, por lo general, no cubre inundaciones' },
        { type: 'p', text: 'El Departamento de Servicios Financieros de Florida (DFS) lo dice claro: el seguro de vivienda no cubre inundaciones, y la definición suele incluir el **desbordamiento de aguas interiores o de marea**. Es una póliza aparte, aunque algunas aseguradoras la ofrecen como endoso. La ley de Florida no la exige, pero el banco de la hipoteca puede pedirla.' },

        { type: 'h2', text: '¿El agua de una marea real cuenta como “inundación”?' },
        { type: 'p', text: 'En la póliza estándar del Programa Nacional de Seguro contra Inundaciones (NFIP), una inundación es una condición general y temporal en la que el agua cubre **dos o más acres de terreno normalmente seco, o dos o más propiedades (una de ellas la suya)**, por el desbordamiento de aguas interiores o de marea. La marea que tapa su calle y entra a la casa puede encajar ahí, siempre que haya daño físico directo. FloodSmart aclara que el retroceso de aguas negras solo se cubre si es consecuencia directa de la inundación.' },
        { type: 'p', text: 'Aun así, el NFIP excluye, entre otras cosas:' },
        { type: 'ul', items: [
          'Carros y la mayoría de los vehículos motorizados',
          'Lo que está fuera del edificio: jardines, terrazas, patios, cercas, muros de contención, muelles y piscinas',
          'Alojamiento temporal y gastos de vida mientras se repara la casa',
          'Daños por agua causados por un problema dentro de la casa, como una tubería rota',
        ] },

        { type: 'h2', text: 'Qué cubre una póliza del NFIP' },
        { type: 'p', text: 'La cobertura del edificio, hasta $250,000 para una vivienda, paga la estructura y sus sistemas, los electrodomésticos empotrados y los pisos fijos. La de contenido, hasta $100,000, se compra aparte para muebles, ropa y electrónicos. Cada una tiene su deducible. Si la inundación es inminente, también puede pagar hasta $1,000 en sacos de arena y bombas, y hasta $1,000 para poner a salvo bienes asegurados.' },

        { type: 'h2', text: 'La espera de 30 días: comprar en la semana de Acción de Gracias es tarde' },
        { type: 'p', text: 'Según la norma federal 44 CFR 61.11, una póliza nueva del NFIP, o la cobertura que se añada, entra en vigor por lo general a las **12:01 a. m. del día 30 después de solicitarla y pagarla**. Si la solicita y paga hoy, 20 de noviembre, empezaría el **20 de diciembre**: después de las mareas de Acción de Gracias, pero antes de la siguiente ventana del SFWMD (22 al 27 de diciembre). Tampoco paga una inundación que ya estaba en curso el día de la solicitud.' },
        { type: 'p', text: 'Las principales excepciones, según FloodSmart:' },
        { type: 'ul', items: [
          '**Hipoteca:** no hay espera si compra el seguro al obtener, aumentar, extender o renovar un préstamo.',
          '**Cambios al renovar:** no hay espera si cambia la cobertura al renovar su póliza.',
          '**Nuevo mapa de inundación:** un día de espera si su propiedad pasó a una zona de alto riesgo y compra dentro de los 12 meses siguientes (la norma federal dice 13 meses).',
        ] },

        { type: 'h2', text: 'El carro es otro tema' },
        { type: 'p', text: 'El seguro de inundación no cubre carros. En un vehículo, ese daño entra en la cobertura **comprehensive**, que según el DFS paga incendio, robo, vendaval, vandalismo o inundación. Florida solo exige PIP y daños a la propiedad (PDL) para registrar un carro: con el mínimo, un motor inundado no tiene cobertura. Compare opciones en [comprehensive vs. colisión en Florida](/es/blog/comprehensive-vs-collision-florida) y, si busca un carro usado tras las inundaciones de este otoño, lea [cómo detectar un carro inundado](/es/blog/flood-damaged-used-car-florida).' },
        { type: 'p', text: 'Los consejos del Condado: mueva los vehículos a terreno alto antes de las mareas, no maneje ni camine por calles inundadas y lave el carro con agua dulce si pasó por agua salada.' },

        { type: 'h2', text: 'Dos fechas justo después del feriado' },
        { type: 'p', text: '**11 de diciembre de 2026.** FEMA indica que el NFIP está autorizado hasta las 11:59 p. m. del 11 de diciembre de 2026, y el Congreso aún no lo ha extendido. Si caduca, FEMA dejaría de vender y renovar pólizas hasta que el Congreso actúe, aunque pagaría los reclamos válidos.' },
        { type: 'p', text: '**1 de enero de 2027.** Citizens Property Insurance Corporation exigirá cobertura de inundación en la mayoría de sus pólizas residenciales personales nuevas y renovadas que incluyan viento. Vea [qué deben hacer los asegurados de Citizens](/es/blog/citizens-flood-insurance-requirement-2027).' },

        { type: 'h2', text: 'Lista rápida antes de Acción de Gracias' },
        { type: 'ol', items: [
          'Confirme en sus páginas de declaraciones si tiene cobertura de inundación para el edificio y el contenido.',
          'Consulte la hora de la marea en su zona y planifique dónde estacionar.',
          'Tome fotos o un video corto de cada cuarto y de sus pertenencias ahora.',
          'Suba carros y objetos de valor del primer piso o a terreno alto antes de viajar.',
          'Si entra agua, fotografíe los daños y repórtelos pronto. Las pólizas del NFIP piden una prueba de pérdida firmada dentro de 60 días. Vea nuestra [lista para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida).',
        ] },

        { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
        { type: 'p', text: 'Traiga las páginas de declaraciones de su casa y su carro a nuestra oficina en 33550 S Dixie Hwy, Suite 102, Florida City (lunes a viernes de 9 a 6, sábados con cita), o llame al [(305) 859-3953](' + TEL + '). Un agente con licencia revisará sus pólizas y le explicará la espera, sus opciones de inundación y la cobertura comprehensive de su carro. Más información en nuestra [página de seguro de inundación](/es/flood-insurance-homestead-fl) o [pida una cotización](/es/quote).' },
        { type: 'p', text: 'La cobertura depende de los términos de la póliza que elija. Consulte su caso con un agente con licencia.' },
      ],
      faq: [
        { q: '¿Mi seguro de casa paga si una marea real inunda mi vivienda?', a: 'Por lo general, no. Según el DFS de Florida, el seguro de vivienda no cubre inundaciones, incluido el desbordamiento de aguas de marea. Necesita una póliza aparte o un endoso, si su aseguradora lo ofrece.' },
        { q: 'Si compro el seguro de inundación esta semana, ¿estoy cubierto para las mareas del 23 al 26 de noviembre?', a: 'Normalmente no. Una póliza nueva del NFIP suele empezar el día 30 después de solicitarla y pagarla: comprada el 20 de noviembre, empezaría el 20 de diciembre. Las excepciones principales son una hipoteca, un cambio al renovar o un mapa de inundación recién revisado.' },
        { q: '¿El seguro de inundación cubre mi carro?', a: 'No. El NFIP excluye los carros; ese daño lo cubre la cobertura comprehensive del seguro de auto, si la tiene.' },
      ],
      sources: [
        { label: 'Condado de Miami-Dade: King Tides (calendario 2026 y consejos, en inglés)', url: S.mdcPage },
        { label: 'SFWMD: pronóstico de la temporada de mareas reales 2026 (en inglés)', url: S.sfwmd },
        { label: 'SFWMD: pronóstico semanal, 16 al 22 de noviembre de 2026 (en inglés)', url: S.sfwmdWeek },
        { label: 'SFWMD: Orden de Emergencia 2026-085 por las inundaciones de otoño (18 de noviembre de 2026, en inglés)', url: S.sfwmdEo },
        { label: 'NOAA Tides & Currents: predicciones de marea, Virginia Key (en inglés)', url: S.tides },
        { label: 'NOAA: qué es la inundación por marea alta (en inglés)', url: S.noaa },
        { label: 'DFS de Florida: guía del seguro de vivienda (en inglés)', url: S.dfsHome },
        { label: 'DFS de Florida: seguro de inundación (en inglés)', url: S.dfsFlood },
        { label: 'DFS de Florida: guía del seguro de auto personal (en inglés)', url: S.dfsAuto },
        { label: 'FLHSMV: requisitos de seguro en Florida (en inglés)', url: S.flhsmv },
        { label: 'FloodSmart (NFIP): comprar una póliza de inundación (en inglés)', url: S.floodsmart },
        { label: '44 CFR 61.11: inicio de la cobertura del NFIP (en inglés)', url: S.cfr6111 },
        { label: '44 CFR Parte 61, Apéndice A(1): póliza estándar de inundación (en inglés)', url: S.sfip },
        { label: 'FEMA: reautorización del NFIP por el Congreso (en inglés)', url: S.fema },
        { label: 'Servicio de Investigación del Congreso: qué pasa si el NFIP caduca (IN10835, en inglés)', url: S.crs },
        { label: 'Citizens Property Insurance Corporation: requisitos de seguro de inundación (en inglés)', url: S.citizens },
      ],
    },
    ru: {
      title: 'Королевские приливы 23–26 ноября: страховка от наводнения на неделе Дня благодарения',
      metaTitle: 'King tides 23–26 ноября и страховка от наводнения | M&K Agency',
      description: 'Королевские приливы вернутся в Майами-Дейд 23–26 ноября, на неделе Дня благодарения. Что покрывают страховки дома, от наводнения и авто, и почему ждать 30 дней.',
      excerpt: 'Последнее окно королевских приливов в осеннем графике Майами-Дейда на 2026 год выпадает на 23–26 ноября, прямо перед Днём благодарения. Разбираем, какой полис отвечает, если морская вода дойдёт до дома или машины, и почему покупать страховку в эти дни уже поздно.',
      ogAlt: 'Иллюстрация: дом во Флориде и машина на возвышенности рядом с затопленной приливом улицей, календарь и полная луна',
      category: 'Страхование от наводнения',
      body: [
        { type: 'p', text: 'Округ Майами-Дейд называет **23–26 ноября** последним окном королевских приливов (king tides) в своём осеннем графике на 2026 год. Управление водных ресурсов Южной Флориды (SFWMD) даёт для восточного побережья окно чуть шире — **22–29 ноября**, вокруг полнолуния. День благодарения в этом году 26 ноября, так что высокая вода придётся на неделю, когда многие уезжают, принимают гостей и оставляют машины на улице.' },
        { type: 'p', text: 'К тому же приливы придут после очень дождливой недели. 18 ноября SFWMD издало экстренный приказ 2026-085, разрешающий дополнительную откачку воды и другие меры из-за осенних наводнений 2026 года. Когда земля пропитана водой, а каналы и так полные, морской воде некуда уходить. Ниже — что говорят официальные источники о сроках и покрытии.' },

        { type: 'h2', text: 'Когда ждать высокую воду' },
        { type: 'p', text: 'Королевские приливы — самые высокие прогнозируемые приливы года. На юго-востоке Флориды они приходятся на осень: вода теплее, а сезонные ветры нагоняют её к берегу, объясняет округ. Самый высокий прилив года уже был 27 октября, но ноябрьские приливы в полнолуние всё ещё могут залить низкие улицы, дворы и подъездные дорожки — даже в солнечный день.' },
        { type: 'ul', items: [
          '**Прогноз NOAA для Virginia Key:** пики прилива около 7:33 и 19:35 23 ноября, 8:23 и 20:26 24 ноября, 9:13 и 21:17 25 ноября, 10:04 и 22:10 в День благодарения. Утренние приливы прогнозируются чуть выше вечерних. В других местах время смещается — смотрите ближайшую к вам станцию.',
          '**Недельный прогноз SFWMD (16 ноября):** на восточном побережье вода может остаться ниже порога «незначительного подтопления» Национальной метеослужбы (NWS), но приблизиться к нему ближе к полнолунию.',
          '**В непогоду хуже:** сильный дождь, ветер или волны поверх королевского прилива усиливают подтопление, предупреждает округ. Следите за предупреждениями о прибрежных наводнениях на сайте [NWS Miami](https://www.weather.gov/mfl/).',
        ] },

        { type: 'h2', text: 'Страховка дома, как правило, наводнение не покрывает' },
        { type: 'p', text: 'Департамент финансовых услуг Флориды (DFS) пишет прямо: ущерб от наводнения не покрывается страховкой дома, а под наводнением обычно понимается и **разлив внутренних или приливных вод**. Как правило, это отдельный полис, хотя некоторые страховщики предлагают его как дополнение (endorsement). Закон Флориды не обязывает владельцев покупать такую страховку, но её может потребовать банк по ипотеке.' },

        { type: 'h2', text: 'Считается ли приливная вода «наводнением»?' },
        { type: 'p', text: 'В стандартном полисе Национальной программы страхования от наводнений (NFIP) наводнение — это общее временное затопление **двух и более акров обычно сухой земли или двух и более участков (один из них ваш)** из-за разлива внутренних или приливных вод либо быстрого стока поверхностных вод. Прилив, который заливает улицу и заходит в дом, под это определение подходит, если есть прямой физический ущерб застрахованному имуществу. FloodSmart уточняет: обратный подпор канализации покрывается, только если он прямо вызван наводнением.' },
        { type: 'p', text: 'Но и NFIP покрывает не всё, до чего доходит прилив. Среди исключений:' },
        { type: 'ul', items: [
          'автомобили и большинство самоходной техники;',
          'имущество вне здания: озеленение, деки, патио, заборы, подпорные стенки, причалы и бассейны;',
          'временное жильё и расходы на проживание, пока дом ремонтируется;',
          'ущерб от воды из-за проблемы внутри дома, например лопнувшей трубы.',
        ] },

        { type: 'h2', text: 'Что покрывает полис NFIP' },
        { type: 'p', text: 'Покрытие здания — до $250,000 для жилого дома — включает конструкцию, электрику и сантехнику, водонагреватель, встроенную технику, стационарные полы и шкафы. Покрытие имущества — до $100,000 — оформляется отдельно и защищает мебель, одежду, электронику, стиральную и сушильную машины. У каждого покрытия своя франшиза. Если наводнение неизбежно, полис может оплатить до $1,000 на мешки с песком, насосы и подобные меры и до $1,000 на перенос застрахованного имущества в безопасное место.' },

        { type: 'h2', text: '30 дней ожидания: покупать на неделе Дня благодарения поздно' },
        { type: 'p', text: 'По федеральному правилу 44 CFR 61.11 новый полис NFIP или увеличение покрытия обычно вступает в силу в **00:01 на 30-й день после подачи заявки и оплаты**. Полис, оформленный и оплаченный сегодня, 20 ноября, начнёт действовать **20 декабря** — уже после приливов Дня благодарения, но до следующего окна SFWMD для восточного побережья, 22–27 декабря. Кроме того, полис не оплатит наводнение, которое уже шло в день подачи заявки.' },
        { type: 'p', text: 'Основные исключения, по данным FloodSmart:' },
        { type: 'ul', items: [
          '**Ипотека:** ожидания нет, если страховка покупается при оформлении, увеличении, продлении или пересмотре кредита.',
          '**Изменения при продлении:** ожидания нет, если вы меняете покрытие при продлении полиса.',
          '**Новая карта зон затопления:** один день ожидания, если участок попал в зону высокого риска и вы покупаете полис в течение 12 месяцев после обновления карты (в федеральном правиле — 13 месяцев).',
        ] },

        { type: 'h2', text: 'Машина — отдельный вопрос' },
        { type: 'p', text: 'Страховка от наводнения машины не покрывает. Для автомобиля ущерб от воды относится к покрытию **comprehensive** (ущерб не от столкновения): по данным DFS, оно платит за пожар, кражу, ураганный ветер, вандализм или наводнение. Для регистрации машины во Флориде обязательны только PIP и ответственность за ущерб имуществу (PDL), так что с минимальным полисом залитый двигатель не покрыт. Сравните варианты в статье [comprehensive и collision во Флориде](/ru/blog/comprehensive-vs-collision-florida), а если после осенних наводнений ищете подержанную машину, прочитайте, [как распознать утопленный автомобиль](/ru/blog/flood-damaged-used-car-florida).' },
        { type: 'p', text: 'Советы округа на время королевских приливов: заранее перегоните машину на возвышенность, не ездите и не ходите по затопленным улицам и промойте машину пресной водой, если проехали по солёной.' },

        { type: 'h2', text: 'Две даты сразу после праздника' },
        { type: 'p', text: '**11 декабря 2026 года.** По данным FEMA, полномочия NFIP действуют до 23:59 11 декабря 2026 года, и на сегодня Конгресс нового продления не принял. Если программа прервётся, FEMA перестанет продавать и продлевать полисы, пока Конгресс не примет решение, хотя обоснованные убытки будут оплачиваться.' },
        { type: 'p', text: '**1 января 2027 года.** Citizens Property Insurance Corporation будет требовать страховку от наводнения для большинства новых и продлеваемых личных жилых полисов с покрытием ветра. Подробнее — [что нужно сделать клиентам Citizens](/ru/blog/citizens-flood-insurance-requirement-2027).' },

        { type: 'h2', text: 'Короткий чек-лист до Дня благодарения' },
        { type: 'ol', items: [
          'Найдите страницы деклараций и проверьте, есть ли у вас страховка от наводнения на здание и на имущество.',
          'Посмотрите время приливов на ближайшей станции и спланируйте поездки и парковку с учётом утренних и вечерних пиков.',
          'Снимите на фото или короткое видео каждую комнату и вещи — прямо сейчас.',
          'Перед отъездом уберите ценные вещи с первого этажа, а машину перегоните на возвышенность.',
          'Если вода зашла в дом, сфотографируйте ущерб и сразу сообщите о нём. Полис NFIP требует подписанное подтверждение убытка (proof of loss) в течение 60 дней. Подробнее — в [чек-листе по ураганным убыткам](/ru/blog/hurricane-claim-checklist-florida).',
        ] },

        { type: 'h2', text: 'Чем поможет M&K Agency' },
        { type: 'p', text: 'Приносите страницы деклараций по дому и машине в наш офис: 33550 S Dixie Hwy, Suite 102, Florida City (понедельник–пятница 9–18, суббота по записи), или звоните по номеру [(305) 859-3953](' + TEL + '). Лицензированный агент проверит, что у вас есть, объяснит срок ожидания и варианты страховки от наводнения и посмотрит покрытие comprehensive на машину. Подробнее — на странице о [страховке от наводнения](/ru/flood-insurance-homestead-fl), о нашем [русскоязычном агенте в Майами](/ru/russian-speaking-insurance-agent-miami), или [запросите расчёт](/ru/quote).' },
        { type: 'p', text: 'Покрытие зависит от условий выбранного полиса. Обсудите свою ситуацию с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Заплатит ли страховка дома, если королевский прилив затопит мой дом?', a: 'Как правило, нет. DFS Флориды указывает, что ущерб от наводнения, включая разлив приливных вод, страховкой дома не покрывается. Нужен отдельный полис от наводнения или дополнение к полису, если страховщик его предлагает.' },
        { q: 'Если купить страховку от наводнения на этой неделе, будут ли покрыты приливы 23–26 ноября?', a: 'Обычно нет. Новый полис NFIP, как правило, начинает действовать на 30-й день после заявки и оплаты: полис, оформленный 20 ноября, вступит в силу 20 декабря. Основные исключения — покупка при закрытии ипотеки, изменение покрытия при продлении или покупка вскоре после пересмотра карты зон затопления.' },
        { q: 'Покрывает ли страховка от наводнения машину?', a: 'Нет. Полисы NFIP машины исключают. Ущерб автомобилю от воды покрывает comprehensive в автостраховке, если оно у вас есть.' },
      ],
      sources: [
        { label: 'Округ Майами-Дейд: King Tides — график 2026 и советы (на английском)', url: S.mdcPage },
        { label: 'SFWMD: прогноз сезона королевских приливов 2026 (на английском)', url: S.sfwmd },
        { label: 'SFWMD: недельный прогноз приливов 16–22 ноября 2026 (на английском)', url: S.sfwmdWeek },
        { label: 'SFWMD: экстренный приказ 2026-085 из-за осенних наводнений, 18 ноября 2026 (на английском)', url: S.sfwmdEo },
        { label: 'NOAA Tides & Currents: прогноз приливов, Virginia Key (на английском)', url: S.tides },
        { label: 'NOAA: что такое приливное подтопление (на английском)', url: S.noaa },
        { label: 'DFS Флориды: обзор страхования дома (на английском)', url: S.dfsHome },
        { label: 'DFS Флориды: страхование от наводнения (на английском)', url: S.dfsFlood },
        { label: 'DFS Флориды: обзор личного автострахования (на английском)', url: S.dfsAuto },
        { label: 'FLHSMV: требования к страхованию во Флориде (на английском)', url: S.flhsmv },
        { label: 'FloodSmart (NFIP): покупка полиса от наводнения (на английском)', url: S.floodsmart },
        { label: '44 CFR 61.11: дата начала действия полиса NFIP (на английском)', url: S.cfr6111 },
        { label: '44 CFR, часть 61, приложение A(1): стандартный полис от наводнения (на английском)', url: S.sfip },
        { label: 'FEMA: продление полномочий NFIP Конгрессом (на английском)', url: S.fema },
        { label: 'Исследовательская служба Конгресса: что будет, если NFIP прервётся (IN10835, на английском)', url: S.crs },
        { label: 'Citizens Property Insurance Corporation: требования о страховке от наводнения (на английском)', url: S.citizens },
      ],
    },
  },
};
