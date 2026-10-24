import type { BlogPost } from '../types';

// Facts first checked 2026-10-04 and re-checked 2026-10-24 against official sources:
// - Miami-Dade Ordinance No. 25-44 (Agenda Item 5(K), passed and adopted May 6, 2025; effective
//   10 days after enactment): amends s. 24-42.4 of the County Code. Storm sewer prohibitions are now
//   in s. 24-42.4(4)(a): unlawful to "throw, drain, run, or otherwise discharge, or to cause, permit,
//   allow, or suffer the discharge of" domestic sewage, industrial waste, liquid waste, or other waste
//   into a sewer designed to carry storm water.
// - Miami-Dade Environmental Complaints page (DERM): report liquid discharges or spills into
//   storm drains, waterways or onto open ground; 305-372-6955, 24/7; environmentalcomplaints@miamidade.gov.
// - Miami-Dade news item, Aug 19, 2022: higher fines for violations incl. prohibited discharges to
//   stormwater sewers; at a minimum doubled for certain violations, in many cases quadrupled or more;
//   escalating civil penalties for repeat offenses; greater penalty burden on contractors who knowingly
//   break the law. No amounts used.
// - F.S. 403.161(1)(a) and (2) (2026): prohibited to cause pollution so as to harm or injure human
//   health or welfare, animal, plant, or aquatic life or property; violator liable to the state for
//   damage caused and for civil penalties (s. 403.141).
// - 40 CFR 122.26(b)(2) (EPA NPDES): "illicit discharge" = any discharge to a municipal
//   separate storm sewer not composed entirely of storm water (with listed exceptions).
// - EPA Stormwater Phase II fact sheet 2.5, IDDE (Aug 2023): MS4 operators must prohibit, through an
//   ordinance or other regulatory mechanism, non-stormwater discharges into the MS4 and enforce it, and
//   inform businesses and the public; list of flows that need not be addressed includes lawn watering
//   and individual residential car washing (commercial pressure washing is not listed).
// - FDEP, Recommended BMPs for Mobile Vehicle and Equipment Washing (PDF): plan collection and
//   disposal first; identify storm drains, swales, ditches; contain (booms, covers/mats, pools,
//   vacuums); pH-neutral, rapidly biodegradable detergents; collect solids; four disposal options;
//   discharge to stormwater systems or surface water prohibited without an NPDES permit; sanitary
//   sewer needs utility approval and property-owner approval; inflatable plugs only on private property.
// - Texas Department of Insurance, Commercial general liability insurance: the pollution exclusion in
//   most GL policies eliminates coverage for third-party injury/damage from a pollution event arising
//   from your operations (actual, alleged or threatened discharge); pollutant typically defined to
//   include chemicals, acids, alkalis and waste; limited exceptions may exist; a business with a
//   significant pollution exposure may buy a separate pollution liability policy.
// - Wisconsin OCI, Consumer's Guide to Insurance for Small Business Owners (PI-085, R 10/2024): CGL
//   covers bodily injury and damage to others' property; a BOP does not cover most actions by
//   governmental agencies charging a business that failed to follow regulations or statutes, or
//   pollution charges.
// - Miami-Dade Fertilizer Regulations page: runoff carries nutrients to lakes, canals, Biscayne Bay.
const S = {
  mdcCode: 'https://www.miamidade.gov/govaction/legistarfiles/MinMatters/Y2025/250614min.pdf',
  derm: 'https://www.miamidade.gov/global/environment/code-compliance/environmental-complaints.page',
  mdcFines: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1660917580151769',
  fs403: 'https://www.flsenate.gov/Laws/Statutes/2026/403.161',
  cfr: 'https://www.ecfr.gov/current/title-40/section-122.26',
  epaIdde: 'https://www.epa.gov/system/files/documents/2023-09/EPA-Stormwater-Phase-II-Final-Rule-Factsheet-2.5-IDDE.pdf',
  fdep: 'https://floridadep.gov/sites/default/files/bmps4mobile-vehicle-washing_1.pdf',
  tdi: 'https://www.tdi.texas.gov/pubs/pc/pcgenliab.html',
  wiOci: 'https://oci.wi.gov/Documents/Consumers/PI-085.pdf',
  mdcFert: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1620843942468395',
};

export const post: BlogPost = {
  slug: 'pressure-washing-runoff-storm-drains-miami-dade',
  datePublished: '2026-10-04',
  dateModified: '2026-10-24',
  translations: {
    en: {
      title: 'Pressure Washing Runoff in Miami-Dade: What Can Go Down the Storm Drain?',
      metaTitle: 'Pressure Washing Runoff Rules in Miami-Dade | M&K Agency',
      description: 'Miami-Dade’s storm sewer rule after Ordinance 25-44, Florida pollution law, EPA illicit discharges, FDEP containment tips and the limits of liability insurance.',
      ogAlt: 'Illustration of a pressure washer rinsing a driveway with a containment berm around a storm drain',
      excerpt: 'A storm drain is not the sewer that goes to a treatment plant. The county code, state law and EPA rules on wash water, how to contain it, and why a liability policy is not a plan for fines.',
      category: 'Pressure washing insurance',
      body: [
        { type: 'p', text: 'A driveway, a dumpster pad, a restaurant sidewalk: the dirt comes off, and the water heads for the nearest grate. That grate belongs to the storm sewer, which is built for rain, not to the sanitary sewer that carries wastewater to treatment. Miami-Dade notes that runoff from the urban landscape can carry pollutants into lakes, canals and Biscayne Bay ([Miami-Dade County](' + S.mdcFert + ')). That is why wash water is a regulatory question, not just a mess to sweep up.' },
        { type: 'p', text: '**Updated October 24, 2026:** we re-checked the county code, Florida law and federal guidance, and added a section on what a general liability policy is for, and what it is not for.' },
        { type: 'h2', text: 'What the rules say' },
        { type: 'ul', items: [
          '**Miami-Dade County.** Ordinance No. 25-44, adopted May 6, 2025, reorganized section 24-42.4 of the County Code. The storm sewer prohibitions now sit in subsection (4)(a): it is unlawful to discharge “domestic sewage, industrial waste, liquid waste, or other waste” into a sewer designed to carry storm water, or to “cause, permit, allow, or suffer” that discharge ([ordinance file](' + S.mdcCode + ')). The wording covers allowing a discharge, not only doing it yourself.',
          '**County enforcement.** In 2022 the county raised fines for violations that can pollute ground and surface waters, including prohibited discharges to stormwater sewers. The county said fines at least doubled for certain violations and in many cases quadrupled or more, with escalating penalties for repeat violations and a greater penalty burden on contractors who knowingly break the law ([Miami-Dade County, Aug. 19, 2022](' + S.mdcFines + ')).',
          '**Florida law.** Section 403.161(1)(a), Florida Statutes, prohibits causing pollution that harms human health or welfare, animal, plant or aquatic life, or property. A violator is liable to the state for the damage caused and for civil penalties ([s. 403.161](' + S.fs403 + ')).',
          '**Federal stormwater rules.** EPA defines an **illicit discharge** as any discharge to a municipal storm sewer that is not made up entirely of storm water, with limited exceptions ([40 CFR 122.26(b)(2)](' + S.cfr + ')). Storm sewer operators must prohibit non-stormwater discharges by ordinance, enforce that ban and educate businesses. EPA’s list of flows those programs may leave alone includes lawn watering and individual residential car washing; commercial pressure washing is not on it ([EPA fact sheet, 2023](' + S.epaIdde + ')).',
          '**State guidance.** The Florida Department of Environmental Protection (FDEP) states that discharging wastewater to stormwater systems, such as drains, ditches and retention areas, or to surface water is prohibited without an NPDES wastewater permit ([FDEP](' + S.fdep + ')).',
        ] },
        { type: 'p', text: 'The FDEP guide is written for mobile **vehicle and equipment** washing. If you wash fleets or equipment, it applies directly. For houses, roofs and flatwork, its methods are a good reference, and DERM, the county’s environmental division, can answer questions about a specific setup.' },
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
        { type: 'h2', text: 'What general liability insurance is for, and what it is not' },
        { type: 'p', text: 'Commercial general liability (GL) is built for claims from other people for **bodily injury and damage to their property** ([Wisconsin insurance regulator](' + S.wiOci + ')). For a pressure washing business, that could mean a passer-by who slips on a wet walkway, or a customer who says your work damaged a surface or a car. Whether a specific claim is covered depends on the policy wording. Our [general liability overview](/en/insurance/general-liability) explains the basics.' },
        { type: 'p', text: 'Two limits matter for wash water. First, the Texas Department of Insurance explains that the **pollution exclusion** in most GL policies removes coverage for injury or damage caused by the actual, alleged or threatened discharge of pollutants from your operations, and that “pollutant” is typically defined to include chemicals, acids, alkalis and waste. Some exclusions carry narrow exceptions, and a business with a significant pollution exposure may look at a separate pollution liability policy ([TDI](' + S.tdi + ')). Second, the Wisconsin regulator notes that a business owner’s policy does not cover most actions by government agencies charging a business with failing to follow regulations ([OCI](' + S.wiOci + ')). In practice, a county fine is something to prevent with good jobsite habits, not something to count on insurance for.' },
        { type: 'p', text: 'When we review your coverage, we can walk through the pollution exclusion and any endorsements on your policy, so you know where the lines are before a job, not after a claim.' },
        { type: 'h2', text: 'What property managers and HOAs may ask' },
        { type: 'ul', items: [
          'A **certificate of insurance** naming the right holder. See our guide to [certificates of insurance for contractors](/en/blog/certificate-of-insurance-contractors-florida).',
          'How you will **contain and recover** the water, and where it will go.',
          'Which **cleaning products** you use, and whether they are close to pH neutral.',
          'Whether your crew is covered: if you bring a helper, read [employee or 1099 under Florida workers’ comp](/en/blog/helper-employee-or-1099-florida-workers-comp).',
        ] },
        { type: 'p', text: 'When we quote, tell us what you wash, which chemicals you use and how you recover water. See our [pressure washing insurance page](/en/pressure-washing-insurance-florida) for the coverage side.' },
        { type: 'callout', title: 'Reviewing your coverage?', text: '[Request a quote](/en/quote) or call [(305) 859-3953](tel:+13058593953) and describe your jobs and equipment. A licensed agent will go over it with you in English, Spanish or Russian. Coverage depends on your policy. This is general information, not legal or environmental compliance advice; check with DERM or FDEP for your situation.' },
      ],
      faq: [
        { q: 'Can I let pressure washing water go into a storm drain in Miami-Dade?', a: 'Section 24-42.4(4)(a) of the County Code prohibits discharging liquid waste and other waste into a sewer designed to carry storm water, and FDEP says discharging wastewater to stormwater systems is prohibited without an NPDES permit. Plan to contain and collect it.' },
        { q: 'Where can pressure washing wastewater go?', a: 'FDEP’s guide lists a closed-loop recycling system, the sanitary sewer with utility and owner approval, small infrequent discharges to land that do not run off, or surface water with an NPDES permit.' },
        { q: 'Will my general liability policy pay a county fine for runoff?', a: 'Generally, liability policies are written for injury and property damage claims from others. Most GL policies have a pollution exclusion, and regulators note that policies do not cover most government actions for breaking regulations. Check your own policy wording with your agent.' },
        { q: 'Who do I call about a discharge into a storm drain in Miami-Dade?', a: 'Miami-Dade’s environmental division (DERM) takes reports of liquid discharges into storm drains at 305-372-6955, 24 hours a day, or by email at environmentalcomplaints@miamidade.gov.' },
      ],
      sources: [
        { label: 'Miami-Dade County: Ordinance No. 25-44 file amending s. 24-42.4 of the County Code, storm sewer prohibitions (adopted May 6, 2025, PDF)', url: S.mdcCode },
        { label: 'Miami-Dade County: environmental fines increases to protect water quality (Aug. 19, 2022)', url: S.mdcFines },
        { label: 'Miami-Dade County (DERM): Environmental Complaints', url: S.derm },
        { label: 'Florida Statutes s. 403.161 (2026): prohibitions, violation, penalty', url: S.fs403 },
        { label: '40 CFR 122.26: storm water discharges, definition of illicit discharge (eCFR)', url: S.cfr },
        { label: 'EPA: Stormwater Phase II fact sheet 2.5, Illicit Discharge Detection and Elimination (Aug. 2023, PDF)', url: S.epaIdde },
        { label: 'FDEP: Recommended Best Management Practices for Mobile Vehicle and Equipment Washing (PDF)', url: S.fdep },
        { label: 'Texas Department of Insurance: Commercial general liability insurance (pollution exclusions)', url: S.tdi },
        { label: 'Wisconsin OCI: Consumer’s Guide to Insurance for Small Business Owners (PI-085, PDF)', url: S.wiOci },
        { label: 'Miami-Dade County (DERM): Fertilizer Regulations (runoff to canals and Biscayne Bay)', url: S.mdcFert },
      ],
    },
    es: {
      title: 'Agua del lavado a presión en Miami-Dade: ¿qué puede ir al desagüe pluvial?',
      metaTitle: 'Agua del lavado a presión en Miami-Dade: reglas | M&K Agency',
      description: 'El drenaje pluvial en Miami-Dade tras la Ordenanza 25-44, la ley de Florida, la descarga ilícita según la EPA y qué no cubre el seguro de responsabilidad civil.',
      ogAlt: 'Ilustración de un lavado a presión en una entrada con una barrera de contención alrededor del desagüe pluvial',
      excerpt: 'Un desagüe pluvial no es la cloaca que va a la planta de tratamiento. Qué dicen el código del condado, la ley estatal y la EPA sobre el agua de lavado, cómo contenerla y por qué una póliza de responsabilidad no es un plan para multas.',
      category: 'Seguro para lavado a presión',
      body: [
        { type: 'p', text: 'Una entrada de carros, el área del contenedor de basura, la acera de un restaurante: la suciedad sale y el agua corre hacia la rejilla más cercana. Esa rejilla es del alcantarillado pluvial, hecho para el agua de lluvia, no del alcantarillado sanitario que lleva las aguas residuales a tratamiento. Miami-Dade advierte que el agua que escurre de las zonas urbanas puede arrastrar contaminantes a lagos, canales y la Bahía de Biscayne ([Condado de Miami-Dade](' + S.mdcFert + ')). Por eso el agua de lavado es un tema de reglamento, no solo de limpieza.' },
        { type: 'p', text: '**Actualizado el 24 de octubre de 2026:** revisamos de nuevo las reglas y agregamos qué cubre y qué no la responsabilidad civil general.' },
        { type: 'h2', text: 'Qué dicen las reglas' },
        { type: 'ul', items: [
          '**Condado de Miami-Dade.** La Ordenanza n.º 25-44, aprobada el 6 de mayo de 2025, reorganizó la sección 24-42.4 del Código del condado. Las prohibiciones para el alcantarillado pluvial quedaron en el inciso (4)(a): es ilegal descargar “aguas negras domésticas, desechos industriales, desechos líquidos u otros desechos” en un alcantarillado diseñado para el agua de lluvia, o “causar, permitir o tolerar” esa descarga ([expediente de la ordenanza](' + S.mdcCode + ')).',
          '**Cómo lo hace cumplir el condado.** En 2022 el condado subió las multas por descargas prohibidas al alcantarillado pluvial, entre otras infracciones. Algunas multas al menos se duplicaron y muchas se cuadruplicaron o más, con sanciones crecientes por reincidencia y más carga para los contratistas que violan la ley a sabiendas ([Condado de Miami-Dade, 19 de agosto de 2022](' + S.mdcFines + ')).',
          '**Ley de Florida.** La sección 403.161(1)(a) de los Estatutos de Florida prohíbe causar contaminación que dañe la salud de las personas, la vida animal, vegetal o acuática, o la propiedad. El infractor responde por el daño y por sanciones civiles ([s. 403.161](' + S.fs403 + ')).',
          '**Reglas federales.** La EPA define la **descarga ilícita** como cualquier descarga a un alcantarillado pluvial municipal que no sea solo agua de lluvia, con pocas excepciones ([40 CFR 122.26(b)(2)](' + S.cfr + ')). Los operadores del sistema pluvial deben prohibirlas por ordenanza y hacer cumplir esa prohibición. La lista de la EPA de flujos que se pueden dejar de lado incluye el riego del césped y el lavado de carros en casa; el lavado a presión comercial no aparece ([hoja informativa de la EPA, 2023](' + S.epaIdde + ')).',
          '**Guía del estado.** El Departamento de Protección Ambiental de Florida (FDEP) indica que descargar aguas residuales a sistemas pluviales, como desagües, zanjas y lagunas de retención, o a cuerpos de agua, está prohibido sin un permiso NPDES ([FDEP](' + S.fdep + ')).',
        ] },
        { type: 'p', text: 'La guía de FDEP está escrita para el lavado móvil de **vehículos y equipos**. Si usted lava flotas o maquinaria, se aplica directamente. Para casas, techos y pisos, sus métodos sirven de referencia, y DERM, la división ambiental del condado, puede orientarlo.' },
        { type: 'h2', text: 'Antes de empezar un trabajo' },
        { type: 'ol', items: [
          '**Planifique el agua primero.** Decida cómo recogerla y a dónde llevarla, y consiga las autorizaciones antes de prender la máquina.',
          '**Recorra el lugar.** Ubique cada desagüe pluvial, cuneta y zanja, y fíjese en la pendiente para saber hacia dónde va a correr el agua.',
          '**Use menos agua.** Un equipo de alta presión y bajo caudal deja menos agua que manejar. Barra primero la basura suelta.',
          '**Cuidado con los químicos.** FDEP recomienda la menor cantidad de detergente posible, de pH casi neutro y biodegradable, y evitar productos muy ácidos o muy alcalinos o con derivados del petróleo o solventes clorados.',
        ] },
        { type: 'h2', text: 'Cómo contener el agua y a dónde llevarla' },
        { type: 'p', text: 'FDEP menciona herramientas comunes: **barreras o bermas** alrededor del desagüe, **tapas y alfombras** que sellan la rejilla, **piscinas de contención** portátiles y **aspiradoras o bombas** para recoger el agua. Los tapones inflables solo se usan en propiedad privada, no en desagües pluviales públicos. Para desechar el agua, la guía da cuatro opciones:' },
        { type: 'ul', items: [
          'Un **sistema de reciclaje de circuito cerrado**, desechando bien los lodos y el agua del tanque.',
          'El **alcantarillado sanitario**, con autorización previa de la empresa de aguas y del dueño de la propiedad.',
          '**El terreno**, solo para cantidades pequeñas y poco frecuentes que no escurran. Usar siempre el mismo lugar puede requerir permiso.',
          '**Cuerpos de agua**, lo que exige permiso NPDES y por lo general no es práctico.',
        ] },
        { type: 'p', text: 'Recoja los sólidos, como pedazos de pintura y arenilla, y deséchelos bien. Contenga cualquier derrame que pueda llegar al desagüe y reporte los importantes a FDEP o al condado. El fertilizante tiene sus propias reglas; vea nuestro artículo sobre [reglas de fertilizante en Miami-Dade](/es/blog/fertilizer-rules-landscapers-miami-dade).' },
        { type: 'h2', text: 'Para qué sirve el seguro de responsabilidad civil general, y para qué no' },
        { type: 'p', text: 'La responsabilidad civil general (GL) está hecha para reclamos de otras personas por **lesiones corporales y daños a su propiedad** ([regulador de seguros de Wisconsin](' + S.wiOci + ')). Por ejemplo, un peatón que se resbala en una acera mojada o un cliente que dice que usted dañó una superficie o un carro. Si un reclamo está cubierto depende de la póliza. Nuestra [página de responsabilidad civil general](/es/insurance/general-liability) explica lo básico.' },
        { type: 'p', text: 'Con el agua de lavado hay dos límites importantes. Primero, el Departamento de Seguros de Texas explica que la **exclusión de contaminación** que traen la mayoría de las pólizas GL elimina la cobertura por lesiones o daños causados por la descarga real, alegada o posible de contaminantes desde sus operaciones, y que “contaminante” suele incluir químicos, ácidos, álcalis y desechos. Hay excepciones limitadas, y un negocio con mucho riesgo de contaminación puede considerar una póliza aparte ([TDI](' + S.tdi + ')). Segundo, el regulador de Wisconsin señala que la póliza para pequeños negocios no cubre la mayoría de las acciones de agencias de gobierno contra un negocio por no cumplir los reglamentos ([OCI](' + S.wiOci + ')). En la práctica, una multa del condado se evita con buenos hábitos en el trabajo; no cuente con que el seguro la pague.' },
        { type: 'p', text: 'Al revisar su seguro, repasamos con usted la exclusión de contaminación y los endosos, para que conozca los límites antes del trabajo.' },
        { type: 'h2', text: 'Lo que suelen preguntar los administradores y las HOA' },
        { type: 'ul', items: [
          'Un **certificado de seguro** a nombre del titular correcto. Vea nuestra guía sobre el [certificado de seguro (COI) para contratistas](/es/blog/certificate-of-insurance-contractors-florida).',
          'Cómo va a **contener y recoger** el agua, y a dónde la va a llevar.',
          'Qué **productos de limpieza** usa y si son de pH casi neutro.',
          'Si su equipo de trabajo está cubierto: si trabaja con un ayudante, lea [¿empleado o contratista 1099?](/es/blog/helper-employee-or-1099-florida-workers-comp).',
        ] },
        { type: 'p', text: 'Al cotizar, díganos qué lava, qué químicos usa y cómo recupera el agua. Las coberturas están en nuestra [página de seguro para lavado a presión](/es/pressure-washing-insurance-florida).' },
        { type: 'callout', title: '¿Va a revisar su seguro?', text: '[Pida una cotización](/es/quote) o llame al [(305) 859-3953](tel:+13058593953) y describa sus trabajos y su equipo. Un agente con licencia lo revisa con usted en español, inglés o ruso. La cobertura depende de su póliza. Esto es información general, no asesoría legal ni ambiental; consulte a DERM o a FDEP para su caso.' },
      ],
      faq: [
        { q: '¿Puedo dejar que el agua del lavado a presión vaya al desagüe pluvial en Miami-Dade?', a: 'La sección 24-42.4(4)(a) del Código del condado prohíbe descargar desechos líquidos y otros desechos en un alcantarillado pluvial, y FDEP indica que descargar aguas residuales a sistemas pluviales está prohibido sin permiso NPDES. Planifique cómo contenerla y recogerla.' },
        { q: '¿A dónde puede ir el agua del lavado a presión?', a: 'FDEP menciona el reciclaje de circuito cerrado, el alcantarillado sanitario con autorización de la empresa de aguas y del dueño, descargas pequeñas al terreno sin escurrimiento, o cuerpos de agua con permiso NPDES.' },
        { q: '¿Mi póliza de responsabilidad civil paga una multa del condado por escurrimiento?', a: 'Por lo general no: estas pólizas son para reclamos de terceros por lesiones y daños. La mayoría de las pólizas GL excluyen la contaminación, y los reguladores señalan que no cubren la mayoría de las acciones del gobierno por incumplir reglamentos. Revise su póliza con su agente.' },
        { q: '¿A quién llamo por una descarga a un desagüe pluvial en Miami-Dade?', a: 'La división ambiental del condado (DERM) recibe reportes de descargas líquidas a desagües pluviales al 305-372-6955, las 24 horas, o por correo a environmentalcomplaints@miamidade.gov.' },
      ],
      sources: [
        { label: 'Condado de Miami-Dade: expediente de la Ordenanza n.º 25-44 que modifica la sección 24-42.4 del Código (aprobada el 6 de mayo de 2025, PDF, en inglés)', url: S.mdcCode },
        { label: 'Condado de Miami-Dade: aumento de multas ambientales para proteger la calidad del agua (19 de agosto de 2022, en inglés)', url: S.mdcFines },
        { label: 'Condado de Miami-Dade (DERM): quejas ambientales (en inglés)', url: S.derm },
        { label: 'Estatutos de Florida, s. 403.161 (2026): prohibiciones, infracciones y sanciones (en inglés)', url: S.fs403 },
        { label: '40 CFR 122.26: descargas pluviales, definición de descarga ilícita (eCFR, en inglés)', url: S.cfr },
        { label: 'EPA: hoja informativa 2.5 sobre detección y eliminación de descargas ilícitas (agosto de 2023, PDF, en inglés)', url: S.epaIdde },
        { label: 'FDEP: buenas prácticas para el lavado móvil de vehículos y equipos (PDF, en inglés)', url: S.fdep },
        { label: 'Departamento de Seguros de Texas: seguro de responsabilidad civil general comercial, exclusiones de contaminación (en inglés)', url: S.tdi },
        { label: 'Oficina del Comisionado de Seguros de Wisconsin: guía de seguros para dueños de pequeños negocios (PI-085, PDF, en inglés)', url: S.wiOci },
        { label: 'Condado de Miami-Dade (DERM): reglamento de fertilizantes, escorrentía a canales y la Bahía de Biscayne (en inglés)', url: S.mdcFert },
      ],
    },
    ru: {
      title: 'Вода после мойки под давлением в Майами-Дейд: что можно сливать в ливнёвку?',
      metaTitle: 'Мойка под давлением и ливнёвки в Майами-Дейд | M&K Agency',
      description: 'Правило Майами-Дейд о ливневой канализации после постановления 25-44, закон Флориды, незаконный сброс по EPA и чего не покрывает страховка ответственности.',
      ogAlt: 'Иллюстрация: мойка под давлением на подъездной дорожке и защитный барьер вокруг ливневого стока',
      excerpt: 'Ливнёвка — это не та канализация, что ведёт на очистные. Что говорят окружной кодекс, закон штата и EPA о воде после мойки, как её собрать и почему страховка ответственности не спасает от штрафов.',
      category: 'Страхование для мойки под давлением',
      body: [
        { type: 'p', text: 'Подъездная дорожка, площадка под мусорный контейнер, тротуар у ресторана: грязь смывается, и вода бежит к ближайшей решётке. Эта решётка относится к ливневой канализации, рассчитанной на дождевую воду, а не к бытовой, которая ведёт стоки на очистку. Округ Майами-Дейд отмечает, что сток с городских территорий может уносить загрязнения в озёра, каналы и залив Бискейн ([округ Майами-Дейд](' + S.mdcFert + ')). Поэтому вода после мойки — вопрос правил, а не только уборки.' },
        { type: 'p', text: '**Обновлено 24 октября 2026 года:** мы заново сверили окружной кодекс, закон Флориды и федеральные правила и добавили раздел о том, для чего нужна страховка общей ответственности, а для чего — нет.' },
        { type: 'h2', text: 'Что говорят правила' },
        { type: 'ul', items: [
          '**Округ Майами-Дейд.** Постановление № 25-44, принятое 6 мая 2025 года, переработало раздел 24-42.4 окружного кодекса. Запреты для ливневой канализации теперь в пункте (4)(a): незаконно сбрасывать «бытовые стоки, промышленные отходы, жидкие отходы и другие отходы» в канализацию для дождевой воды, а также «вызывать, разрешать или допускать» такой сброс ([материалы постановления](' + S.mdcCode + ')). То есть отвечает не только тот, кто держит пистолет мойки, но и тот, кто это допустил.',
          '**Как округ следит за соблюдением.** В 2022 году округ повысил штрафы за нарушения, которые могут загрязнить грунтовые и поверхностные воды, в том числе за запрещённый сброс в ливневую канализацию. По словам округа, за некоторые нарушения штрафы выросли как минимум вдвое, а во многих случаях — вчетверо и больше; за повторные нарушения санкции растут, а для подрядчиков, сознательно нарушающих закон, они строже ([округ Майами-Дейд, 19 августа 2022 г.](' + S.mdcFines + ')).',
          '**Закон Флориды.** Раздел 403.161(1)(a) Статутов Флориды запрещает загрязнение, которое вредит здоровью и благополучию людей, животным, растениям, водной фауне или имуществу. Нарушитель отвечает перед штатом за причинённый ущерб и несёт гражданские санкции ([s. 403.161](' + S.fs403 + ')).',
          '**Федеральные правила.** В нормах EPA **незаконным сбросом** (illicit discharge) считается любой сброс в муниципальную ливневую канализацию, который не состоит целиком из дождевой воды, за немногими исключениями ([40 CFR 122.26(b)(2)](' + S.cfr + ')). Операторы ливнёвки обязаны запретить такие сбросы постановлением, следить за исполнением и информировать бизнес. В списке EPA потоков, которыми программы могут не заниматься, есть полив газонов и мытьё личной машины у дома, а коммерческой мойки под давлением там нет ([памятка EPA, 2023](' + S.epaIdde + ')).',
          '**Рекомендации штата.** Департамент охраны окружающей среды Флориды (FDEP) указывает, что сброс сточных вод в ливневые системы — решётки, канавы, пруды-накопители — или в водоёмы запрещён без разрешения NPDES ([FDEP](' + S.fdep + ')).',
        ] },
        { type: 'p', text: 'Руководство FDEP написано для выездной мойки **машин и техники**. Если вы моете автопарки или оборудование, оно применяется напрямую. Для домов, крыш и площадок его методы — хороший ориентир, а по конкретной ситуации можно спросить DERM, экологическую службу округа.' },
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
        { type: 'h2', text: 'Что покрывает страховка общей ответственности, а что нет' },
        { type: 'p', text: 'Общая ответственность (general liability, GL) рассчитана на претензии других людей из-за **травм и повреждения их имущества** ([страховой регулятор Висконсина](' + S.wiOci + ')). Для мойки под давлением это, например, прохожий, поскользнувшийся на мокрой дорожке, или клиент, который считает, что вы повредили покрытие или машину. Покрыт ли конкретный случай, зависит от текста полиса. Основы — на нашей [странице о general liability](/ru/insurance/general-liability).' },
        { type: 'p', text: 'С водой после мойки важны два ограничения. Первое: Департамент страхования Техаса объясняет, что **исключение по загрязнению** есть в большинстве полисов GL и снимает покрытие за вред от фактического, предполагаемого или угрожающего выброса загрязняющих веществ при вашей работе, а «загрязнителями» обычно считаются химикаты, кислоты, щёлочи и отходы. В некоторых исключениях есть узкие оговорки, а бизнесу с заметным риском загрязнения стоит рассмотреть отдельный полис ответственности за загрязнение ([TDI](' + S.tdi + ')). Второе: регулятор Висконсина отмечает, что полис для малого бизнеса не покрывает большинство действий госорганов против компании за нарушение правил ([OCI](' + S.wiOci + ')). На практике штраф округа нужно предотвращать правильной работой на объекте, а не рассчитывать, что его оплатит страховка.' },
        { type: 'p', text: 'При пересмотре страховки мы можем вместе пройтись по исключению по загрязнению и дополнениям к вашему полису, чтобы вы знали границы покрытия до заказа, а не после претензии.' },
        { type: 'h2', text: 'О чём спрашивают управляющие и HOA' },
        { type: 'ul', items: [
          '**Сертификат страхования** на правильного держателя. Подробнее — в нашем материале о [сертификате страхования (COI) для подрядчиков](/ru/blog/certificate-of-insurance-contractors-florida).',
          'Как вы будете **собирать воду** и куда её денете.',
          'Какие **моющие средства** вы используете и близки ли они к нейтральному pH.',
          'Застрахована ли ваша бригада: если работаете с помощником, прочитайте [работник или подрядчик на 1099](/ru/blog/helper-employee-or-1099-florida-workers-comp).',
        ] },
        { type: 'p', text: 'При расчёте расскажите нам, что вы моете, какую химию используете и как собираете воду. О страховании — на нашей [странице для мойки под давлением](/ru/pressure-washing-insurance-florida).' },
        { type: 'callout', title: 'Пересматриваете страховку?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните по номеру [(305) 859-3953](tel:+13058593953) и опишите ваши заказы и оборудование. Лицензированный агент разберёт всё с вами на русском, английском или испанском. Покрытие зависит от вашего полиса. Это общая информация, а не юридическая или экологическая консультация; по своей ситуации обращайтесь в DERM или FDEP.' },
      ],
      faq: [
        { q: 'Можно ли сливать воду после мойки под давлением в ливнёвку в Майами-Дейд?', a: 'Раздел 24-42.4(4)(a) окружного кодекса запрещает сбрасывать жидкие и другие отходы в ливневую канализацию, а FDEP указывает, что сброс сточных вод в ливневые системы без разрешения NPDES запрещён. Планируйте, как собрать воду.' },
        { q: 'Куда можно девать воду после мойки?', a: 'Руководство FDEP называет замкнутую систему рециркуляции, хозяйственно-бытовую канализацию с согласия водоканала и владельца, небольшие нечастые сбросы на грунт без стока или водоём с разрешением NPDES.' },
        { q: 'Оплатит ли страховка ответственности штраф округа за сток?', a: 'Как правило, такие полисы рассчитаны на претензии третьих лиц из-за травм и повреждения имущества. В большинстве полисов GL есть исключение по загрязнению, а регуляторы отмечают, что большинство действий госорганов за нарушение правил не покрывается. Уточните формулировки своего полиса у агента.' },
        { q: 'Куда сообщить о сбросе в ливнёвку в Майами-Дейд?', a: 'Экологическая служба округа (DERM) принимает сообщения о сбросе жидкостей в ливнёвки круглосуточно по телефону 305-372-6955 или по почте environmentalcomplaints@miamidade.gov.' },
      ],
      sources: [
        { label: 'Округ Майами-Дейд: материалы постановления № 25-44 об изменении раздела 24-42.4 кодекса (принято 6 мая 2025 г., PDF, на английском)', url: S.mdcCode },
        { label: 'Округ Майами-Дейд: повышение экологических штрафов для защиты качества воды (19 августа 2022 г., на английском)', url: S.mdcFines },
        { label: 'Округ Майами-Дейд (DERM): экологические жалобы (на английском)', url: S.derm },
        { label: 'Статуты Флориды, s. 403.161 (2026): запреты, нарушения, санкции (на английском)', url: S.fs403 },
        { label: '40 CFR 122.26: ливневые стоки, определение illicit discharge (eCFR, на английском)', url: S.cfr },
        { label: 'EPA: памятка 2.5 о выявлении и устранении незаконных сбросов (август 2023 г., PDF, на английском)', url: S.epaIdde },
        { label: 'FDEP: рекомендации по выездной мойке машин и техники (PDF, на английском)', url: S.fdep },
        { label: 'Департамент страхования Техаса: commercial general liability, исключения по загрязнению (на английском)', url: S.tdi },
        { label: 'Страховой регулятор Висконсина (OCI): справочник по страхованию для малого бизнеса (PI-085, PDF, на английском)', url: S.wiOci },
        { label: 'Округ Майами-Дейд (DERM): правила по удобрениям, сток в каналы и залив Бискейн (на английском)', url: S.mdcFert },
      ],
    },
  },
};
