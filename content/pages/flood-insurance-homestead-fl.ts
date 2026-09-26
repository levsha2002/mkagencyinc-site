import type { Block, Faq, Source } from '../types';

// Service page: /en|es/flood-insurance-homestead-fl (no RU version yet; see
// lib/page-langs.ts). Facts checked against official sources on 2026-09-26.
export const FLOOD_PAGE_DATE = { published: '2026-09-26', modified: '2026-09-26' };

export interface FloodPage {
  metaTitle: string;
  metaDesc: string;
  kicker: string;
  h1a: string;
  h1b: string;
  sub: string;
  cta: string;
  call: string;
  langLine: string;
  body: Block[];
  faqTitle: string;
  faq: Faq[];
  sources: Source[];
  breadcrumb: string;
}

const SOURCES_EN: Source[] = [
  { label: 'FEMA: Flood Insurance (National Flood Insurance Program)', url: 'https://www.fema.gov/flood-insurance' },
  { label: 'FloodSmart.gov (NFIP): What flood insurance covers, limits and waiting period', url: 'https://www.floodsmart.gov/whats-covered' },
  { label: 'Code of Federal Regulations, 44 CFR 61.11: NFIP effective dates and waiting periods', url: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/section-61.11' },
  { label: 'Congressional Research Service: What Happens If the NFIP Lapses? (updated Sept. 11, 2026)', url: 'https://www.congress.gov/crs_external_products/IN/PDF/IN10835/IN10835.62.pdf' },
  { label: 'Citizens Property Insurance Corporation: Flood insurance requirements', url: 'https://www.citizensfla.com/flood' },
  { label: 'Miami-Dade County: Flood Zone Maps', url: 'https://www.miamidade.gov/global/economy/building/flood-protection/flood-zone-maps.page' },
  { label: 'Miami-Dade County: Storm Surge', url: 'https://www.miamidade.gov/initiative/weather-ready/flooding/storm-surge.page' },
];

const SOURCES_ES: Source[] = [
  { label: 'FEMA: Seguro de inundación (Programa Nacional de Seguros contra Inundaciones, en inglés)', url: 'https://www.fema.gov/flood-insurance' },
  { label: 'FloodSmart.gov (NFIP): qué cubre el seguro de inundación, límites y período de espera (en inglés)', url: 'https://www.floodsmart.gov/whats-covered' },
  { label: 'Código de Regulaciones Federales, 44 CFR 61.11: fechas de vigencia y períodos de espera del NFIP (en inglés)', url: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/section-61.11' },
  { label: 'Servicio de Investigación del Congreso: ¿Qué pasa si el NFIP vence? (actualizado el 11 de septiembre de 2026, en inglés)', url: 'https://www.congress.gov/crs_external_products/IN/PDF/IN10835/IN10835.62.pdf' },
  { label: 'Citizens Property Insurance Corporation: requisitos de seguro de inundación (en inglés)', url: 'https://www.citizensfla.com/flood' },
  { label: 'Condado de Miami-Dade: mapas de zonas de inundación (en inglés)', url: 'https://www.miamidade.gov/global/economy/building/flood-protection/flood-zone-maps.page' },
  { label: 'Condado de Miami-Dade: marejada ciclónica (en inglés)', url: 'https://www.miamidade.gov/initiative/weather-ready/flooding/storm-surge.page' },
];

export const FLOOD_PAGE: { en: FloodPage; es: FloodPage } = {
  en: {
    metaTitle: 'Flood Insurance in Florida City & Homestead, FL | M&K Agency',
    metaDesc: 'Flood insurance for South Miami-Dade homes: flood zones, the NFIP 30-day wait, the Citizens flood rule and how to get covered before hurricane season.',
    kicker: 'Flood Insurance · Florida City & Homestead',
    h1a: 'Flood insurance in Florida City & Homestead,',
    h1b: 'in place before the water rises.',
    sub: 'Your homeowners or renters policy almost certainly excludes flood. We help South Miami-Dade households check their flood zone, understand the rules that apply to them and put a separate flood policy in place, in English, Spanish or Russian.',
    cta: 'Have an agent call me',
    call: 'Call',
    langLine: 'English · Español · По-русски',
    breadcrumb: 'Flood insurance',
    body: [
      { type: 'h2', text: 'Why flood coverage matters in South Miami-Dade' },
      { type: 'p', text: 'Florida City and Homestead sit between Biscayne Bay, the Everglades and a network of canals, on land that is close to sea level. Miami-Dade County points out that the underground water supply is just below the surface, so during major rain events water sometimes has nowhere to drain. Add storm surge from the bay and a hurricane season that runs from June 1 through November 30, and flooding is not only a coastal problem here. A slow-moving tropical storm can put water in homes miles from the shoreline.' },
      { type: 'p', text: 'The part many people learn too late: **standard homeowners and renters policies do not cover flood damage.** FEMA says it plainly: most homeowners insurance does not cover flood, and flood insurance is a separate policy. Storm surge counts as flood, not wind, so it is excluded from your homeowners policy as well.' },

      { type: 'h2', text: 'Know your flood zone (and what it means)' },
      { type: 'p', text: 'FEMA’s Flood Insurance Rate Maps put every address in a zone. The maps currently in effect for Miami-Dade took effect on September 11, 2009. FEMA published preliminary new maps for the county in 2021; they are not effective yet, so your zone could change when they are adopted.' },
      { type: 'ul', items: [
        '**Zones A, AE, AH and AO** are high-risk Special Flood Hazard Areas (SFHA). AE usually comes with a mapped base flood elevation; AH and AO describe shallow flooding of about one to three feet.',
        '**Zone VE** covers coastal high-hazard areas where storm waves add to the risk, along the bay.',
        '**Zone X** is moderate-to-low risk. Flood insurance is not federally required there, but Miami-Dade County notes that these areas account for more than 20% of NFIP claims.',
      ] },
      { type: 'p', text: 'Look up your address with [Miami-Dade County’s flood zone map tool](https://www.miamidade.gov/global/economy/building/flood-protection/flood-zone-maps.page) or FEMA’s Flood Map Service Center, or call the County’s Flood Zone Hotline at 305-372-6466. Don’t confuse flood zones with Miami-Dade’s storm surge planning zones (A through E). Surge zones tell you when to evacuate. FEMA flood zones drive lender requirements and flood insurance rating.' },

      { type: 'h2', text: 'When flood insurance is required' },
      { type: 'ul', items: [
        '**Mortgage in a high-risk zone.** Homes and businesses in high-risk flood areas with mortgages from government-backed lenders are required to carry flood insurance, and your lender will ask for proof.',
        '**Citizens policyholders.** Citizens Property Insurance Corporation is phasing in a flood requirement for personal residential policies that include wind coverage. Homes in an SFHA already need it. Outside the SFHA it has applied to homes with a dwelling limit of $400,000 or more since January 1, 2026, and it reaches all remaining wind policies effective on or after January 1, 2027. Condo unit-owner policies, tenant policies and policies that exclude wind are exempt. See our guide: [Citizens flood insurance requirement 2027](/en/blog/citizens-flood-insurance-requirement-2027).',
        '**Everyone else.** Flood coverage is optional, but in a low, flat area with a high water table it is worth a real conversation before hurricane season.',
      ] },

      { type: 'h2', text: 'Plan around the 30-day waiting period' },
      { type: 'p', text: 'A new National Flood Insurance Program (NFIP) policy generally takes effect 30 days after you apply and pay. The main exceptions: there is no wait when the policy is bought in connection with making, increasing, extending or renewing a mortgage (coverage can start at closing), no wait for coverage changes made at renewal, and a one-day wait for a limited time after a map revision newly places your building in a high-risk zone. In practice, once a storm shows up in the forecast it is too late to buy new NFIP coverage for that storm. The best time to act is well before June 1.' },
      { type: 'callout', title: 'Timing note for late 2026', text: 'Congress has extended the NFIP’s authority to write new policies only through December 11, 2026. If that authority lapses, FEMA stops issuing new policies until Congress acts, although existing policies stay in force. If you will need a new flood policy (for example, for a Citizens renewal in January), don’t leave it until December.' },

      { type: 'h2', text: 'What an NFIP policy covers, and what it doesn’t' },
      { type: 'p', text: 'NFIP building coverage for a home goes up to $250,000 and contents coverage up to $100,000. They are bought separately and carry separate deductibles. Building coverage includes the structure and foundation, electrical and plumbing systems, the water heater and HVAC equipment, built-in appliances, permanently installed carpet and cabinets, and a detached garage. Contents coverage protects furniture, clothing, electronics, a washer and dryer, and portable air conditioners.' },
      { type: 'p', text: 'NFIP policies do not cover cars, property outside the building (landscaping, fences, pools, decks, patios, septic systems), temporary housing while repairs are made, currency and valuable papers, or most belongings kept in a basement. If your home would cost more than $250,000 to rebuild, ask about excess flood coverage. Private flood policies are also sold in Florida, and they can be structured differently, so compare limits, deductibles and exclusions line by line.' },

      { type: 'h2', text: 'Homeowners, renters, condo owners and landlords' },
      { type: 'ul', items: [
        '**Homeowners:** consider both building and contents coverage. A mortgage lender usually cares only about the building.',
        '**Renters:** your landlord’s flood policy does not protect your belongings. NFIP contents-only coverage is available up to $100,000.',
        '**Condo owners:** the association’s master policy may cover the building, but not your furniture or everything inside your unit. Ask what the master flood policy includes before deciding what to buy for your unit.',
        '**Landlords:** building coverage protects the rental property. Your tenants need their own contents coverage.',
      ] },

      { type: 'h2', text: 'Reduce the damage and document your home' },
      { type: 'ul', items: [
        '**Get an Elevation Certificate.** It shows how high your home sits compared with the base flood elevation. It is required for new construction, it can be used when your flood policy is rated, and Miami-Dade County keeps copies on file for many properties.',
        '**Raise what you can.** Water heaters, electrical panels and AC equipment placed above likely flood levels are less likely to be ruined.',
        '**Know the 50% rule.** In Miami-Dade, if a home in a flood zone is damaged or improved by more than 50% of its market value, it has to be brought up to current elevation requirements.',
        '**Make a photo and video inventory** before June and keep your policy documents in cloud storage, not only in a drawer at home.',
      ] },

      { type: 'h2', text: 'How M&K Agency helps' },
      { type: 'p', text: 'Our office is at 33550 S Dixie Hwy, Suite 102, in Florida City, a short drive from anywhere in Homestead, Leisure City and Naranja. A licensed agent will look up your flood zone with you, explain which requirements apply to your home, and help you line up flood coverage alongside your [homeowners insurance](/en/homeowners-insurance-florida-city). We are open Monday through Friday, 9 to 6, and on Saturdays by appointment. Call (305) 859-3953 or [request a quote online](/en/quote).' },
      { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of the policy you choose. Talk with a licensed agent about your situation before you make changes.' },
    ],
    faqTitle: 'Flood insurance in Homestead & Florida City: common questions',
    faq: [
      { q: 'Does my homeowners policy cover flood damage?', a: 'Almost never. Standard homeowners and renters policies exclude flood, including storm surge. You need a separate flood policy from the NFIP or a private flood insurer.' },
      { q: 'I’m in Zone X. Do I need flood insurance?', a: 'Lenders generally don’t require it in Zone X, but Miami-Dade County reports that moderate-to-low risk areas account for more than 20% of NFIP claims. If your home is insured by Citizens with wind coverage, flood coverage is required for policies effective on or after January 1, 2027, whatever your zone.' },
      { q: 'How long before a new flood policy starts?', a: 'Usually 30 days after you apply and pay for an NFIP policy. The wait is waived when the policy is bought for a mortgage closing, and it is shorter right after certain flood map changes. Private flood policies set their own waiting periods.' },
      { q: 'How much flood coverage can I get from the NFIP?', a: 'For a home, up to $250,000 for the building and up to $100,000 for contents. Excess or private flood coverage may be available above those limits.' },
    ],
    sources: SOURCES_EN,
  },
  es: {
    metaTitle: 'Seguro de inundación en Homestead y Florida City | M&K Agency',
    metaDesc: 'Seguro de inundación en el sur de Miami-Dade: zonas de inundación, espera de 30 días del NFIP, la regla de Citizens y cómo protegerse antes de los huracanes.',
    kicker: 'Seguro de inundación · Homestead y Florida City',
    h1a: 'Seguro de inundación en Homestead y Florida City,',
    h1b: 'listo antes de que suba el agua.',
    sub: 'Lo más probable es que su póliza de casa o de inquilino no cubra inundaciones. Ayudamos a las familias del sur de Miami-Dade a conocer su zona de inundación, entender qué reglas les aplican y contratar una póliza de inundación por separado, en español, inglés o ruso.',
    cta: 'Que me llame un agente',
    call: 'Llame al',
    langLine: 'Español · English · По-русски',
    breadcrumb: 'Seguro de inundación',
    body: [
      { type: 'h2', text: 'Por qué el seguro de inundación importa en el sur de Miami-Dade' },
      { type: 'p', text: 'Florida City y Homestead quedan entre la bahía de Biscayne, los Everglades y una red de canales, en terrenos casi al nivel del mar. Según el Condado de Miami-Dade, el agua subterránea está a muy poca profundidad, así que en los aguaceros fuertes el agua a veces no tiene por dónde drenar. Con la marejada ciclónica y una temporada de huracanes que va del 1 de junio al 30 de noviembre, una tormenta tropical lenta puede meter agua en casas que están a millas de la bahía.' },
      { type: 'p', text: 'Lo que mucha gente descubre demasiado tarde: **las pólizas normales de casa y de inquilino no cubren daños por inundación.** Como explica FEMA, el seguro de inundación es una póliza aparte. Y la marejada ciclónica cuenta como inundación, no como viento, así que su póliza de casa tampoco la cubre.' },

      { type: 'h2', text: 'Conozca su zona de inundación (y lo que significa)' },
      { type: 'p', text: 'Los mapas de tarifas de seguro de inundación de FEMA asignan una zona a cada dirección. Los mapas vigentes en Miami-Dade entraron en vigor el 11 de septiembre de 2009. FEMA publicó mapas preliminares nuevos para el condado en 2021, pero todavía no están vigentes, así que su zona podría cambiar cuando se adopten.' },
      { type: 'ul', items: [
        '**Zonas A, AE, AH y AO:** son Áreas Especiales de Riesgo de Inundación (SFHA), de alto riesgo. La AE normalmente tiene una elevación base de inundación definida; AH y AO indican inundaciones poco profundas, de uno a tres pies aproximadamente.',
        '**Zona VE:** zonas costeras de alto peligro donde además hay oleaje de tormenta, a lo largo de la bahía.',
        '**Zona X:** riesgo moderado o bajo. Ahí el seguro de inundación no es obligatorio por ley federal, pero según el Condado de Miami-Dade, de estas zonas sale más del 20% de los reclamos al NFIP.',
      ] },
      { type: 'p', text: 'Busque su dirección en la [herramienta de mapas de zonas de inundación del Condado de Miami-Dade](https://www.miamidade.gov/global/economy/building/flood-protection/flood-zone-maps.page) o en el Flood Map Service Center de FEMA, o llame a la línea del condado al 305-372-6466. No las confunda con las zonas de marejada ciclónica de Miami-Dade (de la A a la E), que sirven para decidir cuándo evacuar. Las zonas de FEMA son las que cuentan para el banco y para el cálculo del seguro.' },

      { type: 'h2', text: '¿Cuándo es obligatorio el seguro de inundación?' },
      { type: 'ul', items: [
        '**Hipoteca en una zona de alto riesgo.** Las casas y negocios en zonas de alto riesgo con hipotecas de prestamistas respaldados por el gobierno federal tienen que tener seguro de inundación, y el banco le pedirá la prueba.',
        '**Asegurados de Citizens.** Citizens Property Insurance Corporation está exigiendo, por etapas, seguro de inundación en las pólizas residenciales personales que incluyen cobertura de viento. Las casas dentro de una SFHA ya lo necesitan. Fuera de la SFHA, desde el 1 de enero de 2026 aplica a viviendas con un límite de vivienda de $400,000 o más, y alcanza a todas las demás pólizas con viento que entren en vigor a partir del 1 de enero de 2027. Las pólizas de dueños de unidades de condominio, las de inquilinos y las que excluyen viento están exentas. Lea nuestra guía: [Citizens exigirá seguro de inundación en 2027](/es/blog/citizens-flood-insurance-requirement-2027).',
        '**Todos los demás.** Es opcional, pero en una zona tan baja y plana vale la pena hablarlo en serio antes de la temporada de huracanes.',
      ] },

      { type: 'h2', text: 'Cuente con el período de espera de 30 días' },
      { type: 'p', text: 'Una póliza nueva del Programa Nacional de Seguros contra Inundaciones (NFIP) normalmente entra en vigor 30 días después de solicitarla y pagarla. Las excepciones principales: no hay espera cuando la póliza se compra al obtener, aumentar, extender o renovar una hipoteca (la cobertura puede empezar en el cierre), tampoco para cambios de cobertura hechos al renovar, y la espera es de un día durante un tiempo limitado después de que un cambio de mapa coloca su casa en una zona de alto riesgo. Cuando la tormenta ya aparece en el pronóstico, es tarde para comprar una póliza nueva del NFIP que la cubra. Lo ideal es hacerlo mucho antes del 1 de junio.' },
      { type: 'callout', title: 'Ojo con las fechas a finales de 2026', text: 'El Congreso extendió la autorización del NFIP para emitir pólizas nuevas solo hasta el 11 de diciembre de 2026. Si esa autorización vence, FEMA deja de emitir pólizas nuevas hasta que el Congreso actúe, aunque las pólizas existentes siguen vigentes. Si va a necesitar una póliza de inundación nueva (por ejemplo, para renovar con Citizens en enero), no lo deje para diciembre.' },

      { type: 'h2', text: 'Qué cubre una póliza del NFIP y qué no' },
      { type: 'p', text: 'Para una vivienda, la cobertura de estructura del NFIP llega hasta $250,000 y la de contenido hasta $100,000. Se compran por separado y cada una tiene su propio deducible. La de estructura incluye la casa y sus cimientos, los sistemas eléctrico y de plomería, el calentador de agua y el aire acondicionado central, los electrodomésticos empotrados, la alfombra y los gabinetes fijos, y un garaje separado. La de contenido protege muebles, ropa, electrónicos, lavadora, secadora y aires acondicionados portátiles.' },
      { type: 'p', text: 'Las pólizas del NFIP no cubren autos, lo que está fuera de la casa (jardín, cercas, piscinas, terrazas, patios, pozos sépticos), el alojamiento temporal mientras se hacen las reparaciones, dinero en efectivo y documentos de valor, ni la mayoría de lo que se guarda en un sótano. Si reconstruir su casa costaría más de $250,000, pregunte por una cobertura en exceso. En Florida también hay pólizas privadas de inundación con otra estructura: compare límites, deducibles y exclusiones punto por punto.' },

      { type: 'h2', text: 'Dueños de casa, inquilinos, condominios y arrendadores' },
      { type: 'ul', items: [
        '**Dueños de casa:** considere tanto la estructura como el contenido. Al banco normalmente solo le importa la estructura.',
        '**Inquilinos:** la póliza de inundación del dueño no protege sus pertenencias. El NFIP ofrece cobertura solo de contenido de hasta $100,000.',
        '**Dueños de condominio:** la póliza maestra de la asociación puede cubrir el edificio, pero no sus muebles ni todo lo que hay dentro de su unidad. Pregunte qué incluye antes de decidir qué comprar.',
        '**Arrendadores:** la cobertura de estructura protege la propiedad que alquila. Sus inquilinos necesitan su propia cobertura de contenido.',
      ] },

      { type: 'h2', text: 'Reduzca los daños y documente su casa' },
      { type: 'ul', items: [
        '**Saque un Certificado de Elevación.** Indica a qué altura está su casa respecto a la elevación base de inundación. Es obligatorio en construcciones nuevas, puede usarse al calcular su póliza y el condado guarda copias de muchas propiedades.',
        '**Suba lo que pueda.** Un calentador, un panel eléctrico o un aire acondicionado por encima del nivel probable del agua sufre menos daños.',
        '**Conozca la regla del 50%.** En Miami-Dade, si una casa en zona de inundación sufre daños o mejoras por más del 50% de su valor de mercado, hay que ponerla al día con los requisitos actuales de elevación.',
        '**Haga un inventario con fotos y video** antes de junio y guarde sus documentos de seguro en la nube, no solo en una gaveta de la casa.',
      ] },

      { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
      { type: 'p', text: 'Nuestra oficina está en 33550 S Dixie Hwy, Suite 102, en Florida City, muy cerca de Homestead, Leisure City y Naranja. Un agente licenciado buscará su zona de inundación con usted, le explicará qué requisitos aplican a su casa y le ayudará a coordinar la cobertura de inundación con su [seguro de casa](/es/homeowners-insurance-florida-city). Abrimos de lunes a viernes de 9 a 6, y los sábados con cita. Llame al (305) 859-3953 o [pida una cotización en línea](/es/quote).' },
      { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de la póliza que elija. Hable con un agente licenciado sobre su caso antes de hacer cambios.' },
    ],
    faqTitle: 'Seguro de inundación en Homestead y Florida City: preguntas frecuentes',
    faq: [
      { q: '¿Mi seguro de casa cubre daños por inundación?', a: 'Casi nunca. Las pólizas normales de casa y de inquilino excluyen la inundación, incluida la marejada ciclónica. Necesita una póliza de inundación aparte, del NFIP o de una aseguradora privada de inundación.' },
      { q: 'Estoy en la Zona X. ¿Necesito seguro de inundación?', a: 'En la Zona X los bancos normalmente no lo exigen, pero más del 20% de los reclamos al NFIP vienen de zonas de riesgo moderado o bajo, según el condado. Si su casa está asegurada con Citizens y tiene cobertura de viento, el seguro de inundación es obligatorio para las pólizas que entren en vigor a partir del 1 de enero de 2027, sin importar la zona.' },
      { q: '¿Cuánto tarda en empezar una póliza de inundación nueva?', a: 'Normalmente 30 días después de solicitar y pagar una póliza del NFIP. No hay espera si se compra para el cierre de una hipoteca, y es más corta justo después de ciertos cambios en los mapas. Las pólizas privadas fijan sus propios períodos de espera.' },
      { q: '¿Cuánta cobertura de inundación puedo tener con el NFIP?', a: 'Para una vivienda, hasta $250,000 para la estructura y hasta $100,000 para el contenido. Por encima de esos límites puede haber cobertura en exceso o privada.' },
    ],
    sources: SOURCES_ES,
  },
};
