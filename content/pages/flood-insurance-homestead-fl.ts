import type { Block, Faq, Source } from '../types';

// Service page: /en|es|ru/flood-insurance-homestead-fl. Facts first checked
// against official sources on 2026-09-26; refreshed and re-checked on
// 2026-10-23 (NFIP authorization status, king tide dates, Citizens flood rule).
export const FLOOD_PAGE_DATE = { published: '2026-09-26', modified: '2026-10-23' };

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
  ogAlt: string;
}

const U = {
  femaReauth: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  crs: 'https://www.congress.gov/crs-product/IN10835',
  floodsmart: 'https://www.floodsmart.gov/get-insured/buy-a-policy',
  cfr6111: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/section-61.11',
  sfip: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/appendix-Appendix%20A(1)%20to%20Part%2061',
  citizens: 'https://www.citizensfla.com/flood',
  mdZones: 'https://www.miamidade.gov/global/economy/building/flood-protection/flood-zone-maps.page',
  mdSurge: 'https://www.miamidade.gov/initiative/weather-ready/flooding/storm-surge.page',
  mdKing: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  dfsFlood: 'https://www.myfloridacfo.com/division/ica/fullcoverage/flood',
};

const SOURCES_EN: Source[] = [
  { label: 'FEMA: Congressional Reauthorization for the NFIP (last updated Sept. 28, 2026)', url: U.femaReauth },
  { label: 'Congressional Research Service IN10835: What Happens If the NFIP Lapses? (updated Sept. 11, 2026)', url: U.crs },
  { label: 'FloodSmart.gov (NFIP): What you need to know about buying flood insurance', url: U.floodsmart },
  { label: 'Code of Federal Regulations, 44 CFR 61.11: NFIP effective dates and waiting periods', url: U.cfr6111 },
  { label: 'Code of Federal Regulations, 44 CFR Part 61, App. A(1): Standard Flood Insurance Policy, Dwelling Form', url: U.sfip },
  { label: 'Citizens Property Insurance Corporation: Flood insurance requirements', url: U.citizens },
  { label: 'Miami-Dade County: Flood Zone Maps', url: U.mdZones },
  { label: 'Miami-Dade County: Storm Surge', url: U.mdSurge },
  { label: 'Miami-Dade County: Prepare for King Tides in coastal and low-lying areas (Oct. 13, 2026)', url: U.mdKing },
  { label: 'Florida Department of Financial Services, Insurance Consumer Advocate: Flood insurance', url: U.dfsFlood },
];

const SOURCES_ES: Source[] = [
  { label: 'FEMA: reautorización del NFIP por el Congreso (actualizado el 28 de septiembre de 2026, en inglés)', url: U.femaReauth },
  { label: 'Servicio de Investigación del Congreso, IN10835: ¿Qué pasa si el NFIP vence? (actualizado el 11 de septiembre de 2026, en inglés)', url: U.crs },
  { label: 'FloodSmart.gov (NFIP): lo que debe saber al comprar seguro de inundación (en inglés)', url: U.floodsmart },
  { label: 'Código de Regulaciones Federales, 44 CFR 61.11: fechas de vigencia y períodos de espera del NFIP (en inglés)', url: U.cfr6111 },
  { label: 'Código de Regulaciones Federales, 44 CFR parte 61, apéndice A(1): póliza estándar de inundación para viviendas (en inglés)', url: U.sfip },
  { label: 'Citizens Property Insurance Corporation: requisitos de seguro de inundación (en inglés)', url: U.citizens },
  { label: 'Condado de Miami-Dade: mapas de zonas de inundación (en inglés)', url: U.mdZones },
  { label: 'Condado de Miami-Dade: marejada ciclónica (en inglés)', url: U.mdSurge },
  { label: 'Condado de Miami-Dade: prepárese para las mareas reales (13 de octubre de 2026, en inglés)', url: U.mdKing },
  { label: 'Departamento de Servicios Financieros de Florida, Defensora del Consumidor de Seguros: seguro de inundación (en inglés)', url: U.dfsFlood },
];

const SOURCES_RU: Source[] = [
  { label: 'FEMA: продление полномочий NFIP Конгрессом (обновлено 28 сентября 2026 г., на английском)', url: U.femaReauth },
  { label: 'Исследовательская служба Конгресса, IN10835: что будет, если полномочия NFIP истекут (обновлено 11 сентября 2026 г., на английском)', url: U.crs },
  { label: 'FloodSmart.gov (NFIP): что нужно знать при покупке страховки от наводнения (на английском)', url: U.floodsmart },
  { label: 'Свод федеральных правил, 44 CFR 61.11: дата вступления в силу и период ожидания полисов NFIP (на английском)', url: U.cfr6111 },
  { label: 'Свод федеральных правил, 44 CFR часть 61, приложение A(1): стандартный полис NFIP для жилого дома (на английском)', url: U.sfip },
  { label: 'Citizens Property Insurance Corporation: требования о страховании от наводнения (на английском)', url: U.citizens },
  { label: 'Округ Майами-Дейд: карты зон затопления (на английском)', url: U.mdZones },
  { label: 'Округ Майами-Дейд: штормовой нагон (на английском)', url: U.mdSurge },
  { label: 'Округ Майами-Дейд: подготовка к королевским приливам (13 октября 2026 г., на английском)', url: U.mdKing },
  { label: 'Департамент финансовых услуг Флориды, Уполномоченный по защите прав потребителей страховых услуг: страхование от наводнения (на английском)', url: U.dfsFlood },
];

export const FLOOD_PAGE: Record<'en' | 'es' | 'ru', FloodPage> = {
  en: {
    metaTitle: 'Flood Insurance in Homestead & Florida City, FL | M&K Agency',
    metaDesc: 'Flood insurance in Homestead and Florida City: flood zones, the NFIP 30-day wait, NFIP authority through Dec. 11, 2026 and the Citizens flood rule for 2027.',
    kicker: 'Flood Insurance · Homestead & Florida City',
    h1a: 'Flood insurance in Homestead & Florida City,',
    h1b: 'in place before the water rises.',
    sub: 'Your homeowners or renters policy almost certainly excludes flood. We help South Miami-Dade households check their flood zone, understand the rules that apply to them and put a separate flood policy in place, in English, Spanish or Russian.',
    cta: 'Have an agent call me',
    call: 'Call',
    langLine: 'English · Español · По-русски',
    breadcrumb: 'Flood insurance',
    ogAlt: 'Illustration of a South Florida house with a flood barrier beside rising water',
    body: [
      { type: 'h2', text: 'Why flood coverage matters in South Miami-Dade' },
      { type: 'p', text: 'Homestead and Florida City sit between Biscayne Bay, the Everglades and a network of canals, on land close to sea level. Miami-Dade County notes that groundwater sits just below the surface, so in heavy rain water sometimes has nowhere to drain. With storm surge from the bay on top of that, flooding is not only a coastal problem here.' },
      { type: 'p', text: '**Standard homeowners and renters policies do not cover flood damage.** FloodSmart, FEMA’s flood insurance site, says most of them exclude it, and Florida’s Department of Financial Services explains that flood coverage is usually a separate policy. Florida law does not require homeowners to buy it, but a mortgage lender may.' },

      { type: 'h2', text: 'King tides Oct. 24–30: why timing matters this fall' },
      { type: 'p', text: 'Miami-Dade County expects king tides on Oct. 24–30, the highest predicted tides of the season, then again on Nov. 6–9 and Nov. 23–26. The County warns that flooding can be worse when they coincide with heavy rain, strong winds or big waves. A new NFIP policy generally starts 30 days after you apply and pay, so a policy bought now would not be in force until late November. The NFIP also does not pay for a flood that was already in progress when you applied. Our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade) covers what a flood policy pays for after tidal flooding.' },

      { type: 'h2', text: 'Know your flood zone (and what it means)' },
      { type: 'p', text: 'FEMA’s Flood Insurance Rate Maps place every address in a zone. The maps in effect for Miami-Dade took effect on September 11, 2009. FEMA published preliminary new maps for the county in 2021, and the County says they are not currently effective, so your zone could change when they are adopted.' },
      { type: 'ul', items: [
        '**Zones A, AE, AH and AO** are high-risk Special Flood Hazard Areas (SFHA).',
        '**Zone VE** covers coastal areas where storm waves add to the risk.',
        '**Zone X** is moderate-to-low risk. Flood insurance is not federally required there, yet Miami-Dade County says these areas submit more than 20% of NFIP claims and receive one-third of disaster assistance for flooding.',
      ] },
      { type: 'p', text: 'Look up your address with [Miami-Dade County’s flood zone map tool](https://www.miamidade.gov/global/economy/building/flood-protection/flood-zone-maps.page) or call the County’s Flood Zone Hotline at 305-372-6466. Don’t confuse flood zones with the County’s storm surge planning zones A through E: surge zones guide evacuation, while FEMA flood zones drive lender requirements and flood insurance rating.' },

      { type: 'h2', text: 'When flood insurance is required' },
      { type: 'ul', items: [
        '**Mortgage in a high-risk zone.** Flood insurance is required for any federally backed mortgage on a building in a Special Flood Hazard Area. Your lender enforces the rule and will ask for proof.',
        '**Citizens policyholders.** Citizens Property Insurance Corporation is phasing in a flood requirement for personal residential policies with wind coverage. Homes in an SFHA already need it. Outside the SFHA it applies to dwelling limits of $400,000 or more since January 1, 2026, and to all remaining wind policies from January 1, 2027. The flood limit must at least equal the Citizens dwelling limit, or the NFIP maximum of $250,000 if that is lower. Condo unit-owner, tenant and wind-excluded policies are exempt. More in our [Citizens flood requirement guide](/en/blog/citizens-flood-insurance-requirement-2027).',
        '**Everyone else.** Coverage is optional, but worth discussing in a low, flat area like ours.',
      ] },

      { type: 'h2', text: 'Plan around the 30-day waiting period' },
      { type: 'p', text: 'A new NFIP policy generally takes effect 30 days after purchase. The main exceptions: no wait when the policy is bought while making, increasing, extending or renewing a mortgage; no wait for coverage changes made at renewal; and a one-day wait if a map update newly places your property in a high-risk zone and you buy within 12 months. Once a storm is in the forecast, it is too late to buy new NFIP coverage for it.' },
      { type: 'callout', title: 'NFIP authorization status (checked Oct. 23, 2026)', text: 'On Sept. 2, 2026, an extension was signed that keeps the NFIP authorized until 11:59 p.m. on Dec. 11, 2026. If Congress lets it lapse, FEMA stops selling and renewing NFIP policies; policies already in force run to the end of their term, and FEMA can still pay valid claims with available funds. It lapsed from Oct. 1 to Nov. 12, 2025 and from Feb. 1 to 3, 2026. If you need a new policy or a renewal in December or January, don’t wait.' },

      { type: 'h2', text: 'What an NFIP policy covers, and what it doesn’t' },
      { type: 'p', text: 'NFIP building coverage for a home goes up to $250,000 and contents coverage up to $100,000, bought separately with separate deductibles. Building coverage includes the structure and foundation walls, electrical and plumbing systems, water heaters, built-in appliances, permanently installed carpet and cabinets, and a detached garage. Contents coverage protects furniture, clothing, electronics, a washer and dryer, and portable or window air conditioners. Renters can buy contents coverage on its own, and a condo association’s master policy does not cover everything inside your unit.' },
      { type: 'p', text: 'NFIP policies do not cover cars, property outside the building (landscaping, fences, pools, decks, patios, septic systems), temporary housing during repairs, currency and valuable papers, or most belongings kept in a basement. Flood damage to a car falls under the comprehensive part of an auto policy; see [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida), and if you are shopping for a used car after a storm, [how to spot a flood-damaged title](/en/blog/flood-damaged-used-car-florida). An NFIP policy lasts one year, with a 30-day grace period if you renew and pay in full by its end. Private flood policies are also sold in Florida; compare their limits and exclusions line by line.' },

      { type: 'h2', text: 'Before and after a flood' },
      { type: 'ul', items: [
        '**Get an Elevation Certificate.** It shows how high your home sits compared with the required flood elevation. It is required for new construction and substantial improvements.',
        '**Know the 50% rule.** In Miami-Dade, a home in a flood zone that is damaged or improved by more than 50% of its market value has to be raised to the current elevation requirement.',
        '**Raise what you can** (water heater, electrical panel, AC equipment) and keep a photo and video inventory and your policy documents in cloud storage.',
        '**After a loss,** the NFIP dwelling policy asks for a signed proof of loss within 60 days. Our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) walks through the steps.',
      ] },

      { type: 'h2', text: 'How M&K Agency helps' },
      { type: 'p', text: 'Our office is at 33550 S Dixie Hwy, Suite 102, in Florida City, a short drive from Homestead, Leisure City and Naranja. A licensed agent will look up your flood zone with you, explain which requirements apply to your home and help you line up flood coverage alongside your [homeowners insurance](/en/homeowners-insurance-florida-city). We are open Monday through Friday, 9 to 6, and on Saturdays by appointment. Call [(305) 859-3953](tel:+13058593953) or [request a quote online](/en/quote).' },
    ],
    faqTitle: 'Flood insurance in Homestead & Florida City: common questions',
    faq: [
      { q: 'Does my homeowners policy cover flood damage?', a: 'Almost never. Standard homeowners and renters policies exclude flood, including storm surge and tidal flooding. You need a separate flood policy from the NFIP or a private flood insurer.' },
      { q: 'I’m in Zone X. Do I need flood insurance?', a: 'Lenders generally don’t require it in Zone X, but Miami-Dade County says moderate-to-low risk areas submit more than 20% of NFIP claims. If your home is insured by Citizens with wind coverage, flood coverage is required for policies effective on or after January 1, 2027, whatever your zone.' },
      { q: 'How long before a new flood policy starts?', a: 'Usually 30 days after you buy an NFIP policy. There is no wait when it is bought for a mortgage closing, and only one day right after certain flood map changes. Private flood policies set their own waiting periods.' },
      { q: 'What happens if the NFIP lapses on Dec. 11, 2026?', a: 'FEMA would stop selling and renewing NFIP policies until Congress acts. Policies already in force stay in force to the end of their term, and valid claims can still be paid with available funds.' },
    ],
    sources: SOURCES_EN,
  },
  es: {
    metaTitle: 'Seguro de inundación en Homestead y Florida City | M&K Agency',
    metaDesc: 'Seguro de inundación en Homestead y Florida City: zonas de riesgo, la espera de 30 días, el NFIP hasta el 11 de diciembre de 2026 y la regla de Citizens.',
    kicker: 'Seguro de inundación · Homestead y Florida City',
    h1a: 'Seguro de inundación en Homestead y Florida City,',
    h1b: 'listo antes de que suba el agua.',
    sub: 'Lo más probable es que su póliza de casa o de inquilino no cubra inundaciones. Ayudamos a las familias del sur de Miami-Dade a conocer su zona de inundación, entender qué reglas les aplican y contratar una póliza de inundación por separado, en español, inglés o ruso.',
    cta: 'Que me llame un agente',
    call: 'Llame al',
    langLine: 'Español · English · По-русски',
    breadcrumb: 'Seguro de inundación',
    ogAlt: 'Ilustración de una casa del sur de Florida con una barrera contra inundaciones junto al agua que sube',
    body: [
      { type: 'h2', text: 'Por qué importa en el sur de Miami-Dade' },
      { type: 'p', text: 'Homestead y Florida City quedan entre la bahía de Biscayne, los Everglades y una red de canales, casi al nivel del mar. Según el Condado de Miami-Dade, el agua subterránea está muy cerca de la superficie, así que en los aguaceros fuertes el agua a veces no tiene por dónde drenar.' },
      { type: 'p', text: '**Las pólizas normales de casa y de inquilino no cubren inundación.** FloodSmart, el sitio de FEMA, dice que la mayoría la excluye, y el Departamento de Servicios Financieros de Florida explica que suele ser una póliza aparte. La ley de Florida no obliga a comprarla, pero el banco de la hipoteca sí puede exigirla.' },

      { type: 'h2', text: 'Mareas reales del 24 al 30 de octubre: por qué importan las fechas' },
      { type: 'p', text: 'El Condado de Miami-Dade espera mareas reales (king tides) del 24 al 30 de octubre, las más altas previstas de la temporada, y otra vez del 6 al 9 y del 23 al 26 de noviembre. Una póliza nueva del NFIP normalmente empieza 30 días después de comprarla y pagarla: si la compra hoy, no estará vigente hasta finales de noviembre. Y el NFIP no paga una inundación que ya estaba ocurriendo cuando usted hizo la solicitud. Nuestra [guía sobre las mareas reales](/es/blog/king-tides-flood-insurance-miami-dade) explica qué paga una póliza de inundación cuando entra agua de la marea.' },

      { type: 'h2', text: 'Conozca su zona de inundación' },
      { type: 'p', text: 'Los mapas de FEMA asignan una zona a cada dirección. Los vigentes en Miami-Dade son del 11 de septiembre de 2009. FEMA publicó mapas preliminares nuevos en 2021, pero según el condado todavía no están vigentes, así que su zona podría cambiar.' },
      { type: 'ul', items: [
        '**Zonas A, AE, AH y AO:** Áreas Especiales de Riesgo de Inundación (SFHA), de alto riesgo.',
        '**Zona VE:** zonas costeras con oleaje de tormenta.',
        '**Zona X:** riesgo moderado o bajo. No es obligatorio por ley federal, pero según el condado, de estas zonas sale más del 20% de los reclamos al NFIP y una tercera parte de la ayuda por desastres de inundación.',
      ] },
      { type: 'p', text: 'Busque su dirección en la [herramienta de mapas del Condado de Miami-Dade](https://www.miamidade.gov/global/economy/building/flood-protection/flood-zone-maps.page) o llame al 305-372-6466. No la confunda con las zonas de marejada ciclónica (de la A a la E), que sirven para evacuar; la zona de FEMA es la que cuenta para el banco y el seguro.' },

      { type: 'h2', text: '¿Cuándo es obligatorio?' },
      { type: 'ul', items: [
        '**Hipoteca en zona de alto riesgo.** Es obligatorio para cualquier hipoteca respaldada por el gobierno federal sobre un edificio en una SFHA. El banco hace cumplir la regla y le pedirá la prueba.',
        '**Asegurados de Citizens.** Citizens Property Insurance Corporation exige seguro de inundación por etapas en las pólizas residenciales personales con cobertura de viento. Dentro de una SFHA ya es obligatorio. Fuera de ella aplica desde el 1 de enero de 2026 a límites de vivienda de $400,000 o más, y a todas las demás pólizas con viento desde el 1 de enero de 2027. El límite de inundación debe igualar por lo menos el de vivienda de Citizens, o el máximo del NFIP de $250,000 si es menor. Las pólizas de unidades de condominio, de inquilinos y sin viento están exentas. Vea nuestra [guía sobre el requisito de Citizens](/es/blog/citizens-flood-insurance-requirement-2027).',
        '**Todos los demás.** Es opcional, pero en una zona tan baja y plana vale la pena hablarlo.',
      ] },

      { type: 'h2', text: 'Cuente con la espera de 30 días' },
      { type: 'p', text: 'Una póliza nueva del NFIP normalmente entra en vigor 30 días después de la compra. Excepciones principales: no hay espera si se compra al obtener, aumentar, extender o renovar una hipoteca, ni para cambios de cobertura al renovar; y es de un día si un cambio de mapa pone su propiedad en zona de alto riesgo y usted compra dentro de 12 meses.' },
      { type: 'callout', title: 'Autorización del NFIP (revisado el 23 de octubre de 2026)', text: 'El 2 de septiembre de 2026 se firmó una extensión que mantiene el NFIP autorizado hasta las 11:59 p.m. del 11 de diciembre de 2026. Si vence, FEMA deja de vender y de renovar pólizas del NFIP; las vigentes siguen hasta el final de su plazo y FEMA todavía puede pagar reclamos válidos con los fondos disponibles. Venció del 1 de octubre al 12 de noviembre de 2025 y del 1 al 3 de febrero de 2026. Si necesita una póliza nueva o una renovación en diciembre o enero, no espere.' },

      { type: 'h2', text: 'Qué cubre una póliza del NFIP y qué no' },
      { type: 'p', text: 'Para una vivienda, el NFIP cubre la estructura hasta $250,000 y el contenido hasta $100,000; se compran por separado, cada una con su deducible. La estructura incluye la casa y las paredes de los cimientos, los sistemas eléctrico y de plomería, el calentador, los electrodomésticos empotrados, la alfombra y los gabinetes fijos. El contenido protege muebles, ropa, electrónicos, lavadora, secadora y aires acondicionados portátiles. Los inquilinos pueden comprar solo contenido, y la póliza maestra de un condominio no cubre todo lo que hay dentro de su unidad.' },
      { type: 'p', text: 'El NFIP no cubre carros, lo que está fuera de la casa (jardín, cercas, piscinas, terrazas, pozos sépticos), alojamiento temporal, dinero en efectivo ni documentos de valor. El agua en un carro entra en la parte comprensiva de la póliza de auto: vea [cobertura amplia vs. colisión](/es/blog/comprehensive-vs-collision-florida) y, si compra un carro usado después de una tormenta, [cómo detectar un título de flood vehicle](/es/blog/flood-damaged-used-car-florida). La póliza dura un año, con 30 días de gracia para renovarla y pagarla completa. También hay pólizas privadas de inundación: compare límites y exclusiones punto por punto.' },

      { type: 'h2', text: 'Antes y después de una inundación' },
      { type: 'ul', items: [
        '**Saque un Certificado de Elevación.** Muestra a qué altura está su casa respecto a la elevación requerida. Es obligatorio en construcciones nuevas y mejoras sustanciales.',
        '**Conozca la regla del 50%.** En Miami-Dade, una casa en zona de inundación con daños o mejoras de más del 50% de su valor de mercado debe elevarse al requisito actual.',
        '**Suba lo que pueda** (calentador, panel eléctrico, aire acondicionado) y guarde fotos, videos y sus documentos de seguro en la nube.',
        '**Después de un daño,** la póliza del NFIP pide una prueba de pérdida (proof of loss) firmada dentro de 60 días. Siga nuestra [lista de pasos para reclamar después de un huracán](/es/blog/hurricane-claim-checklist-florida).',
      ] },

      { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
      { type: 'p', text: 'Nuestra oficina está en 33550 S Dixie Hwy, Suite 102, en Florida City, muy cerca de Homestead, Leisure City y Naranja. Un agente licenciado buscará su zona con usted, le explicará qué requisitos aplican a su casa y le ayudará a coordinar la cobertura de inundación con su [seguro de casa](/es/homeowners-insurance-florida-city). Abrimos de lunes a viernes de 9 a 6, y los sábados con cita. Llame al [(305) 859-3953](tel:+13058593953) o [pida una cotización en línea](/es/quote).' },
    ],
    faqTitle: 'Seguro de inundación en Homestead y Florida City: preguntas frecuentes',
    faq: [
      { q: '¿Mi seguro de casa cubre daños por inundación?', a: 'Casi nunca. Las pólizas normales de casa y de inquilino excluyen la inundación, incluida la marejada ciclónica y el agua de la marea. Necesita una póliza de inundación aparte, del NFIP o de una aseguradora privada.' },
      { q: 'Estoy en la Zona X. ¿Necesito seguro de inundación?', a: 'Los bancos normalmente no lo exigen en la Zona X, pero según el condado de esas zonas sale más del 20% de los reclamos al NFIP. Si su casa está con Citizens y tiene cobertura de viento, es obligatorio para pólizas que empiecen a partir del 1 de enero de 2027, sin importar la zona.' },
      { q: '¿Cuánto tarda en empezar una póliza nueva?', a: 'Normalmente 30 días después de comprar una póliza del NFIP. No hay espera si se compra para el cierre de una hipoteca, y es de un día justo después de ciertos cambios de mapa.' },
      { q: '¿Qué pasa si el NFIP vence el 11 de diciembre de 2026?', a: 'FEMA dejaría de vender y de renovar pólizas del NFIP hasta que el Congreso actúe. Las vigentes siguen hasta el final de su plazo y los reclamos válidos se pueden pagar con los fondos disponibles.' },
    ],
    sources: SOURCES_ES,
  },
  ru: {
    metaTitle: 'Страховка от наводнения в Хомстеде и Флорида-Сити | M&K Agency',
    metaDesc: 'Страхование от наводнения в Хомстеде и Флорида-Сити: зоны затопления, 30 дней ожидания по NFIP, полномочия NFIP до 11 декабря 2026 г. и требование Citizens.',
    kicker: 'Страхование от наводнения · Хомстед и Флорида-Сити',
    h1a: 'Страховка от наводнения в Хомстеде и Флорида-Сити:',
    h1b: 'оформите её до того, как придёт вода.',
    sub: 'Полис на дом или на съёмное жильё почти наверняка не покрывает наводнение. Мы помогаем жителям юга Майами-Дейд узнать свою зону затопления, разобраться, какие правила к ним относятся, и оформить отдельный полис от наводнения — на русском, английском или испанском.',
    cta: 'Пусть агент мне перезвонит',
    call: 'Звоните:',
    langLine: 'По-русски · English · Español',
    breadcrumb: 'Страхование от наводнения',
    ogAlt: 'Иллюстрация: дом на юге Флориды с барьером от воды рядом с поднимающимся уровнем воды',
    body: [
      { type: 'h2', text: 'Почему на юге Майами-Дейд важна страховка от наводнения' },
      { type: 'p', text: 'Хомстед и Флорида-Сити расположены между заливом Бискейн, Эверглейдс и сетью каналов, на земле почти на уровне моря. Округ Майами-Дейд отмечает, что грунтовые воды здесь подходят почти к самой поверхности, поэтому в сильные ливни воде иногда просто некуда уйти. А если добавить штормовой нагон из залива, затопление здесь угрожает не только побережью.' },
      { type: 'p', text: '**Обычные полисы на дом и на съёмное жильё не покрывают ущерб от наводнения.** Сайт FEMA о страховании от наводнений FloodSmart пишет, что большинство таких полисов его исключают, а Департамент финансовых услуг Флориды поясняет, что это покрытие обычно оформляется отдельным полисом. Закон Флориды не обязывает владельцев домов его покупать, но этого может потребовать ипотечный банк.' },

      { type: 'h2', text: 'Королевские приливы 24–30 октября: почему важны сроки' },
      { type: 'p', text: 'Округ Майами-Дейд ожидает королевские приливы (king tides) 24–30 октября — самые высокие прогнозируемые приливы сезона, а затем 6–9 и 23–26 ноября. Округ предупреждает, что затопление может быть сильнее, если прилив совпадёт с ливнем, сильным ветром или высокими волнами. Новый полис NFIP, как правило, вступает в силу через 30 дней после заявки и оплаты, так что купленный сейчас полис начнёт действовать только в конце ноября. Кроме того, NFIP не платит за наводнение, которое уже началось к моменту подачи заявки. В нашей [статье о королевских приливах](/ru/blog/king-tides-flood-insurance-miami-dade) подробно разобрано, что оплачивает полис от наводнения при приливном затоплении.' },

      { type: 'h2', text: 'Узнайте свою зону затопления' },
      { type: 'p', text: 'Карты FEMA (Flood Insurance Rate Maps) относят каждый адрес к определённой зоне. Действующие карты для Майами-Дейд вступили в силу 11 сентября 2009 года. В 2021 году FEMA опубликовало предварительные новые карты округа; по данным округа, они пока не действуют, так что после их утверждения ваша зона может измениться.' },
      { type: 'ul', items: [
        '**Зоны A, AE, AH и AO** — зоны повышенного риска (Special Flood Hazard Area, SFHA).',
        '**Зона VE** — прибрежные участки, где к риску добавляются штормовые волны.',
        '**Зона X** — умеренный или низкий риск. Федеральный закон не требует здесь страховки от наводнения, но, по данным округа Майами-Дейд, на такие зоны приходится более 20% страховых случаев по NFIP и треть помощи пострадавшим от наводнений.',
      ] },
      { type: 'p', text: 'Найдите свой адрес на [карте зон затопления округа Майами-Дейд](https://www.miamidade.gov/global/economy/building/flood-protection/flood-zone-maps.page) или позвоните на горячую линию округа 305-372-6466. Не путайте зоны затопления с зонами штормового нагона A–E: по зонам нагона объявляют эвакуацию, а от зоны FEMA зависят требования банка и расчёт страховки от наводнения.' },

      { type: 'h2', text: 'Когда страховка от наводнения обязательна' },
      { type: 'ul', items: [
        '**Ипотека в зоне повышенного риска.** Для любой ипотеки с федеральной поддержкой на здание в зоне SFHA страховка от наводнения обязательна. Следит за этим банк, и он попросит подтверждение.',
        '**Клиенты Citizens.** Citizens Property Insurance Corporation поэтапно вводит требование о страховке от наводнения для личных жилищных полисов с покрытием от ветра. Для домов в зоне SFHA оно уже действует. Вне SFHA с 1 января 2026 года оно касается полисов с лимитом на дом от $400 000, а с 1 января 2027 года — всех остальных полисов с покрытием от ветра. Лимит по наводнению должен быть не ниже лимита на дом в полисе Citizens или равен максимуму NFIP в $250 000, если он меньше. Полисы владельцев квартир в кондоминиумах, арендаторов и полисы без покрытия от ветра под требование не попадают. Подробнее — в нашей [статье о требовании Citizens](/ru/blog/citizens-flood-insurance-requirement-2027).',
        '**Все остальные.** Страховка необязательна, но в такой низкой и плоской местности её стоит обсудить.',
      ] },

      { type: 'h2', text: 'Учитывайте 30 дней ожидания' },
      { type: 'p', text: 'Новый полис NFIP обычно вступает в силу через 30 дней после покупки. Основные исключения: ожидания нет, если полис покупается при оформлении, увеличении, продлении или пересмотре ипотеки; нет его и для изменений покрытия при продлении полиса; а если после обновления карт ваш участок впервые попал в зону повышенного риска и вы покупаете полис в течение 12 месяцев, ожидание составляет один день. Когда шторм уже появился в прогнозе, покупать новый полис NFIP, чтобы покрыть именно его, поздно.' },
      { type: 'callout', title: 'Статус полномочий NFIP (проверено 23 октября 2026 г.)', text: '2 сентября 2026 года подписан закон, продлевающий полномочия NFIP до 23:59 11 декабря 2026 года. Если Конгресс их не продлит, FEMA перестанет продавать и продлевать полисы NFIP; уже действующие полисы сохраняются до конца срока, а обоснованные выплаты FEMA может производить из имеющихся средств. Перерывы уже были: с 1 октября по 12 ноября 2025 года и с 1 по 3 февраля 2026 года. Если вам нужен новый полис или продление в декабре или январе, не откладывайте.' },

      { type: 'h2', text: 'Что покрывает полис NFIP, а что нет' },
      { type: 'p', text: 'Для жилого дома NFIP покрывает здание на сумму до $250 000 и имущество до $100 000; эти покрытия покупаются отдельно, и у каждого своя франшиза. Покрытие здания включает сам дом и стены фундамента, электрику и сантехнику, водонагреватель, встроенную технику, постоянно уложенный ковролин, встроенные шкафы и отдельно стоящий гараж. Покрытие имущества защищает мебель, одежду, электронику, стиральную и сушильную машины, переносные и оконные кондиционеры. Арендаторы могут купить только покрытие имущества, а общий полис ассоциации кондоминиума покрывает не всё, что находится внутри вашей квартиры.' },
      { type: 'p', text: 'Полисы NFIP не покрывают автомобили, всё, что находится вне здания (озеленение, заборы, бассейны, террасы, патио, септики), временное жильё на время ремонта, наличные деньги и важные документы, а также большую часть вещей в подвале. Ущерб автомобилю от воды покрывает часть comprehensive автостраховки — см. [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida), а если вы покупаете подержанную машину после шторма — [как распознать «утопленника»](/ru/blog/flood-damaged-used-car-florida). Полис NFIP действует один год; есть льготный период 30 дней, если вы продлите и полностью оплатите его до окончания срока. Во Флориде продаются и частные полисы от наводнения — сравнивайте их лимиты и исключения пункт за пунктом.' },

      { type: 'h2', text: 'До и после наводнения' },
      { type: 'ul', items: [
        '**Получите сертификат высоты (Elevation Certificate).** Он показывает, на какой высоте стоит дом относительно требуемой для вашей зоны отметки. Он обязателен для нового строительства и капитальной реконструкции.',
        '**Помните о правиле 50%.** В Майами-Дейд дом в зоне затопления, ущерб или улучшения которого превышают 50% его рыночной стоимости, нужно поднять до текущих требований по высоте.',
        '**Поднимите что можно** (водонагреватель, электрощит, блок кондиционера), сделайте фото- и видеоопись имущества и храните документы по страховке в облаке.',
        '**После ущерба** полис NFIP для жилого дома требует подписанное подтверждение убытка (proof of loss) в течение 60 дней. Наш [чек-лист страхового случая после урагана](/ru/blog/hurricane-claim-checklist-florida) поможет пройти все шаги.',
      ] },

      { type: 'h2', text: 'Чем поможет M&K Agency' },
      { type: 'p', text: 'Наш офис находится по адресу 33550 S Dixie Hwy, Suite 102, во Флорида-Сити, в нескольких минутах езды от Хомстеда, Лежер-Сити и Наранхи. Лицензированный агент вместе с вами проверит зону затопления, объяснит, какие требования относятся к вашему дому, и поможет подобрать страховку от наводнения вместе со [страховкой дома](/ru/homeowners-insurance-florida-city). Мы работаем с понедельника по пятницу с 9 до 18, по субботам — по записи. Звоните по номеру [(305) 859-3953](tel:+13058593953) или [оставьте заявку онлайн](/ru/quote).' },
    ],
    faqTitle: 'Страхование от наводнения в Хомстеде и Флорида-Сити: частые вопросы',
    faq: [
      { q: 'Покрывает ли страховка дома ущерб от наводнения?', a: 'Почти никогда. Обычные полисы на дом и на съёмное жильё исключают наводнение, включая штормовой нагон и приливное затопление. Нужен отдельный полис от наводнения — от NFIP или от частной страховой компании.' },
      { q: 'Мой дом в зоне X. Нужна ли мне страховка от наводнения?', a: 'В зоне X банки её обычно не требуют, но, по данным округа Майами-Дейд, на зоны умеренного и низкого риска приходится более 20% страховых случаев по NFIP. Если дом застрахован в Citizens с покрытием от ветра, страховка от наводнения обязательна для полисов, вступающих в силу с 1 января 2027 года, независимо от зоны.' },
      { q: 'Когда начинает действовать новый полис от наводнения?', a: 'Обычно через 30 дней после покупки полиса NFIP. Ожидания нет, если полис покупается при закрытии ипотечной сделки, и оно составляет один день сразу после некоторых изменений карт. Частные полисы устанавливают свои сроки ожидания.' },
      { q: 'Что будет, если полномочия NFIP истекут 11 декабря 2026 года?', a: 'FEMA перестанет продавать и продлевать полисы NFIP, пока Конгресс не примет решение. Действующие полисы сохраняются до конца срока, а обоснованные страховые выплаты по-прежнему возможны из имеющихся средств.' },
    ],
    sources: SOURCES_RU,
  },
};
