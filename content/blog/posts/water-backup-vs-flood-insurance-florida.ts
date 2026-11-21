import type { BlogPost } from '../types';

// New article 2026-11-21 (ET) (content plan 2026-11, row 2026-11-21; content_calendar.csv row 62).
// Facts checked 2026-11-21 against official sources (raw copies in /workspace/waterbackup/raw/; notes in
// /workspace/articles/water-backup-vs-flood-insurance-florida_sources.md):
// - SFIP Dwelling Form, 44 CFR Part 61 App. A(1) (eCFR, current as of 2026-11-19): II.B flood definition
//   (2+ acres or 2+ properties, one yours; overflow of inland/tidal waters; unusual and rapid accumulation or runoff
//   of surface waters; mudflow); V.D.3 rain excluded; V.D.4 water damage primarily from a condition substantially
//   confined to the dwelling or within your control, incl. failure/stoppage/breakage of water or sewer lines, drains,
//   pumps; V.D.5 backup through sewers or drains / sump discharge / seepage excluded unless there is a flood in the
//   area and the flood is the proximate cause; VII.G written notice, inventory, proof of loss within 60 days.
// - 44 CFR 59.1 definition of flood or flooding.
// - FloodSmart "Buy a policy": cause of flooding matters (sewer backed up during a heavy rainstorm = covered;
//   backup from clogged pipes = not); sewer backup covered only if it directly results from flooding; 30-day wait.
// - Florida DFS homeowners overview: some homeowners policies do not provide sewer backup coverage; backup from an
//   outside sewer or drain may be excluded; may be added via endorsement; flood not covered by homeowners.
// - Miami-Dade WASD release Nov. 20, 2026 (Can the Grease): grease causes backups in home plumbing or the public
//   sewer; private-side backup repairs are the homeowner's responsibility; 648 grease/debris clogs in the past year.
// - F.S. 627.70132 (2026): property insurance claim notice within 1 year after the date of loss.
// - Citizens flood page: flood required on most new/renewing personal residential policies with wind by Jan. 1, 2027.
// No private insurer named. No cost or outcome claims.
const S = {
  sfip: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-61/appendix-Appendix%20A(1)%20to%20Part%2061',
  cfr591: 'https://www.ecfr.gov/current/title-44/chapter-I/subchapter-B/part-59/subpart-A/section-59.1',
  floodsmart: 'https://www.floodsmart.gov/get-insured/buy-a-policy',
  dfsHome: 'https://myfloridacfo.com/division/consumers/understanding-insurance/homeownersinsuranceoverview',
  dfsFlood: 'https://www.myfloridacfo.com/division/ica/fullcoverage/flood',
  wasd: 'https://www.miamidade.gov/global/release.page?Mduid_release=rel1795016885691814',
  fog: 'https://www.miamidade.gov/global/economy/neighborhood-compliance/fats-oils-grease.page',
  s70132: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.70132.html',
  citizens: 'https://www.citizensfla.com/flood',
  nws: 'https://www.weather.gov/mfl/',
};
const TEL = 'tel:+13058593953';
const NEWS = '2026-11-20-flood-watch-ends-auto-excess-profits-robot-rules-deferred';

export const post: BlogPost = {
  slug: 'water-backup-vs-flood-insurance-florida',
  datePublished: '2026-11-21',
  translations: {
    en: {
      title: 'Water Backup vs. Flood in Florida: Why They Are Not the Same Loss',
      metaTitle: 'Sewer Backup vs. Flood Insurance in Florida | M&K Agency',
      description: 'Water came up through your drains? How the NFIP flood policy treats sewer backup, what Florida DFS says about homeowners policies, and what to do first.',
      excerpt: 'Water inside the house is not automatically a flood claim. Here is how the NFIP defines flood, when a sewer or drain backup counts, and why your homeowners policy is a separate question.',
      ogAlt: 'Illustration of a Florida house in the rain with a flooded street on one side and a floor drain with rising water on the other',
      category: 'Flood insurance',
      body: [
        { type: 'p', text: 'After the heavy rain and flash flooding South Florida saw this week ([our Nov. 20 news roundup](/en/news/' + NEWS + ')), many homeowners are dealing with water inside the house. Some of it came in from a flooded street. Some came up through a floor drain, a shower or a toilet. To you, both look like “the house flooded.” To an insurance policy, they can be two different losses, handled by two different policies with different rules.' },
        { type: 'p', text: 'Here is how the official sources draw the line, and what to check before you file a claim.' },

        { type: 'h2', text: 'What counts as a “flood” under the NFIP' },
        { type: 'p', text: 'The National Flood Insurance Program (NFIP) Standard Flood Insurance Policy for homes, the Dwelling Form, defines a flood as a **general and temporary condition** of partial or complete inundation of **two or more acres of normally dry land, or two or more properties (one of which is yours)**, caused by:' },
        { type: 'ul', items: [
          'the overflow of inland or tidal waters;',
          'the unusual and rapid accumulation or runoff of surface waters from any source; or',
          'mudflow.',
        ] },
        { type: 'p', text: 'The key word is **general**. A flood is something happening to the area, not just inside your walls. Water from a leaking pipe or a clogged drain in one house is not a flood under this definition, even if it covers the whole floor.' },

        { type: 'h2', text: 'What a sewer or drain backup is' },
        { type: 'p', text: 'A backup happens when wastewater cannot leave the house and is pushed back up through the lowest openings: floor drains, tubs, showers and toilets. The cause can be inside your line, in the public sewer, or in a system overwhelmed by storm water.' },
        { type: 'p', text: 'One common cause is kitchen grease. On November 20, the Miami-Dade Water and Sewer Department (WASD) reminded residents before Thanksgiving that even small amounts of grease poured down the drain can harden and create backups in a home’s plumbing or in the public sewer. WASD says its crews responded to 648 grease- and debris-related clogs in the past year, and that **if a backup occurs on private-side pipes, repairs are the homeowner’s responsibility**.' },

        { type: 'h2', text: 'How the NFIP flood policy treats a backup' },
        { type: 'p', text: 'The Dwelling Form excludes water or water-borne material that **backs up through sewers or drains**, discharges or overflows from a sump pump, or seeps or leaks through the property, **unless there is a flood in the area and the flood is the proximate cause** of the backup. FloodSmart, FEMA’s consumer site, puts it plainly: sewer backup is covered by flood insurance only if it directly results from flooding.' },
        { type: 'p', text: 'FloodSmart gives an example: a policy would cover water damage from a sewer that backed up during a heavy rainstorm, but not damage from a sewer backup caused by clogged pipes. In practice, the question an adjuster will ask is what caused the water to come up. Three typical situations:' },
        { type: 'ul', items: [
          '**The street and neighboring lots are under water, and sewage comes up in your bathroom at the same time.** This can fit the flood definition, because there is a flood in the area that caused the backup.',
          '**It is a dry day, and the tub fills with wastewater because of a grease or root clog in your line.** This is not a flood. The flood policy also excludes water damage that results mainly from a condition confined to the house or within your control, including a stoppage or breakage of sewer lines or drains.',
          '**Rain comes in through the roof or a window.** The flood policy excludes rain itself. That is a question for your homeowners policy.',
        ] },

        { type: 'h2', text: 'What your homeowners policy may say' },
        { type: 'p', text: 'Florida’s Department of Financial Services (DFS) notes that some homeowners policies do not provide sewer backup coverage. If water backs up from an outside sewer or drain, the policy may exclude it, but this coverage may be added through an **endorsement**. DFS is equally clear that flood damage is not covered by a homeowners policy; flood needs its own policy.' },
        { type: 'p', text: 'Backup endorsements are not standardized. Whether you have one, how much it pays and what deductible applies depend on your own policy, so read the declarations page and the endorsement itself rather than assuming. If you have both a flood policy and a backup endorsement, the cause of the water decides which one responds.' },
        { type: 'callout', title: 'Quick test', text: 'Was there water across your street or your neighbors’ yards when the backup started? If yes, start with the flood policy. If the backup happened on its own, start with your homeowners policy and any water backup endorsement.' },

        { type: 'h2', text: 'If water comes up through your drains' },
        { type: 'ol', items: [
          'Stop running water, washers and dishwashers so you don’t add to the backup, and keep children and pets away from wastewater.',
          'Check whether neighbors have the same problem. If so, report it to your sewer utility and write down the ticket number.',
          'Have a licensed plumber find the cause and ask for a written report or camera video that says where the blockage was.',
          'Take photos and video of the water, the drains and the damage before cleanup, and keep receipts.',
          'Notify your insurers promptly. NFIP policies require prompt written notice, an inventory of damaged property and a signed proof of loss within 60 days. Under Florida law (s. 627.70132), a homeowners claim must be reported within 1 year after the date of loss.',
        ] },
        { type: 'p', text: 'Our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) walks through documentation in more detail.' },

        { type: 'h2', text: 'Before the next storm' },
        { type: 'ul', items: [
          '**Keep grease out of the sink.** WASD and Miami-Dade’s fats, oils and grease program recommend letting grease cool, sealing it in a container and putting it in the trash, and scraping plates before washing.',
          '**Know your flood coverage.** A new NFIP policy generally takes effect 30 days after purchase, with a few exceptions listed on FloodSmart. See why that matters during high tides in our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          '**Citizens policyholders:** under Florida law (s. 627.715), most new and renewing Citizens Property Insurance Corporation personal residential policies that include wind must have flood coverage by January 1, 2027. Read [what changes](/en/blog/citizens-flood-insurance-requirement-2027).',
          '**Review at renewal.** Our [year-end renewal checklist](/en/blog/year-end-homeowners-renewal-checklist-florida) covers what to look for on your declarations page.',
        ] },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Bring your homeowners and flood declarations pages to our office at 33550 S Dixie Hwy, Suite 102, Florida City (Monday–Friday 9–6, Saturday by appointment), or call [(305) 859-3953](' + TEL + '). A licensed agent will go through what each policy says about flood and water backup and explain your options. Learn more on our [flood insurance page](/en/flood-insurance-homestead-fl) and [homeowners insurance page](/en/homeowners-insurance-florida-city), or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms of the policy you choose. Talk with a licensed agent about your situation.' },
      ],
      faq: [
        { q: 'Does flood insurance cover sewer backup?', a: 'Only in limited cases. The NFIP Dwelling Form excludes backup through sewers or drains unless there is a flood in the area and the flood is the proximate cause. FloodSmart says sewer backup is covered only if it directly results from flooding.' },
        { q: 'Does my homeowners policy cover water that backs up from the sewer?', a: 'It depends on your policy. Florida DFS says some homeowners policies do not provide sewer backup coverage and may exclude backup from an outside sewer or drain, but the coverage may be added by endorsement. Check your declarations page.' },
        { q: 'Who pays to fix the sewer pipe itself?', a: 'Miami-Dade WASD says that if a backup occurs on private-side infrastructure, repairs are the homeowner’s responsibility. Ask your utility where its responsibility begins at your address.' },
      ],
      sources: [
        { label: 'eCFR: 44 CFR Part 61, Appendix A(1), Standard Flood Insurance Policy, Dwelling Form (sections II.B, V.D, VII.G)', url: S.sfip },
        { label: 'eCFR: 44 CFR 59.1, definition of flood or flooding', url: S.cfr591 },
        { label: 'FEMA FloodSmart: Buy a policy (what is and isn’t covered, sewer backup, 30-day wait)', url: S.floodsmart },
        { label: 'Florida DFS: Homeowners Insurance Overview (sewer backup, endorsement, flood exclusion)', url: S.dfsHome },
        { label: 'Florida DFS Insurance Consumer Advocate: Flood insurance', url: S.dfsFlood },
        { label: 'Miami-Dade County: WASD “Can the Grease” holiday release (Nov. 20, 2026)', url: S.wasd },
        { label: 'Miami-Dade County: Fats, oils and grease', url: S.fog },
        { label: 'Florida Statutes s. 627.70132 (2026), notice of property insurance claim', url: S.s70132 },
        { label: 'Citizens Property Insurance Corporation: Flood insurance requirement', url: S.citizens },
        { label: 'National Weather Service Miami', url: S.nws },
      ],
    },
    es: {
      title: 'Retroceso del alcantarillado o inundación en Florida: por qué no son el mismo daño',
      metaTitle: 'Retroceso del alcantarillado vs. inundación | M&K Agency',
      description: '¿Salió agua por los desagües? Cómo trata la póliza del NFIP el retroceso del alcantarillado, qué dice la DFS sobre el seguro de casa y qué hacer.',
      excerpt: 'Que entre agua en la casa no significa automáticamente que sea un reclamo por inundación. Así define el NFIP una inundación, cuándo cuenta un retroceso del drenaje y por qué su seguro de casa es otra historia.',
      ogAlt: 'Ilustración de una casa en Florida bajo la lluvia, con una calle inundada de un lado y un desagüe de piso con agua subiendo del otro',
      category: 'Seguro de inundación',
      body: [
        { type: 'p', text: 'Tras las fuertes lluvias e inundaciones repentinas de esta semana en el sur de Florida ([nuestro resumen de noticias del 20 de noviembre](/es/news/' + NEWS + ')), muchas familias están lidiando con agua dentro de la casa. A unas les entró desde la calle; a otras les subió por el desagüe, la ducha o el inodoro. Para usted, “se inundó la casa”. Para el seguro, pueden ser dos daños distintos, con pólizas y reglas distintas.' },
        { type: 'p', text: 'Esto dicen las fuentes oficiales y esto conviene revisar antes de reclamar.' },

        { type: 'h2', text: 'Qué es una “inundación” para el NFIP' },
        { type: 'p', text: 'La póliza estándar del Programa Nacional de Seguro contra Inundaciones (NFIP) para viviendas, el llamado Dwelling Form, define la inundación como una **condición general y temporal** en la que el agua cubre total o parcialmente **dos o más acres de terreno normalmente seco, o dos o más propiedades (una de ellas la suya)**, por:' },
        { type: 'ul', items: [
          'el desbordamiento de aguas interiores o de marea;',
          'la acumulación o escorrentía inusual y rápida de aguas superficiales de cualquier origen; o',
          'flujos de lodo.',
        ] },
        { type: 'p', text: 'La palabra clave es **general**: la inundación le pasa a la zona, no solo a su casa. El agua de una tubería rota o de un desagüe tapado en una sola vivienda no es una inundación según esta definición, aunque cubra todo el piso.' },

        { type: 'h2', text: 'Qué es un retroceso del alcantarillado' },
        { type: 'p', text: 'Hay retroceso cuando las aguas residuales no pueden salir de la casa y regresan por las aberturas más bajas: desagües de piso, bañeras, duchas e inodoros. La causa puede estar en su tubería, en el alcantarillado público o en un sistema desbordado por la lluvia.' },
        { type: 'p', text: 'Una causa común: la grasa de cocina. El 20 de noviembre, el Departamento de Agua y Alcantarillado de Miami-Dade (WASD) recordó que hasta un poco de grasa en el fregadero puede endurecerse y tapar la plomería de la casa o el alcantarillado público. Según WASD, sus cuadrillas atendieron 648 tapones causados por grasa y desechos en el último año, y **si el retroceso ocurre en las tuberías del lado privado, la reparación le corresponde al dueño de la casa**.' },

        { type: 'h2', text: 'Cómo trata el retroceso la póliza de inundación del NFIP' },
        { type: 'p', text: 'El Dwelling Form excluye el agua o el material arrastrado por el agua que **retrocede por alcantarillas o desagües**, que sale o se desborda de una bomba de sumidero, o que se filtra a través de la propiedad, **a menos que haya una inundación en la zona y esa inundación sea la causa directa** del retroceso. FloodSmart, el sitio de FEMA para consumidores, lo resume así: el seguro de inundación cubre el retroceso del alcantarillado solo si es consecuencia directa de una inundación.' },
        { type: 'p', text: 'FloodSmart pone un ejemplo: la póliza cubriría el daño de una alcantarilla que se devolvió durante un aguacero fuerte, pero no el de un retroceso causado por tuberías tapadas. El ajustador va a preguntar qué hizo subir el agua. Tres casos típicos:' },
        { type: 'ul', items: [
          '**La calle y los patios vecinos están bajo el agua y, al mismo tiempo, sube agua sucia en su baño.** Esto puede encajar en la definición, porque hay una inundación en la zona que provocó el retroceso.',
          '**Es un día seco y la bañera se llena de aguas negras por un tapón de grasa o de raíces en su tubería.** Eso no es una inundación. La póliza también excluye el daño por agua causado principalmente por un problema dentro de la casa o bajo su control, como un desagüe tapado o roto.',
          '**Entra lluvia por el techo o por una ventana.** La póliza de inundación excluye la lluvia en sí. Eso corresponde a su seguro de casa.',
        ] },

        { type: 'h2', text: 'Qué puede decir su seguro de casa' },
        { type: 'p', text: 'El Departamento de Servicios Financieros de Florida (DFS) advierte que algunas pólizas de propietario no incluyen cobertura por retroceso del alcantarillado. Si el agua se devuelve desde una alcantarilla o un drenaje exterior, la póliza puede excluirlo, aunque esa cobertura se puede añadir mediante un **endoso**. La DFS también deja claro que el seguro de casa no cubre daños por inundación: para eso hace falta una póliza aparte.' },
        { type: 'p', text: 'Estos endosos no son iguales en todas las pólizas: si lo tiene, cuánto paga y qué deducible aplica dependen de su contrato. Lea la página de declaraciones y el endoso en vez de suponer. Si tiene póliza de inundación y endoso, la causa del agua define cuál responde.' },
        { type: 'callout', title: 'Prueba rápida', text: '¿Había agua en la calle o en los patios vecinos cuando empezó el retroceso? Si es así, empiece por la póliza de inundación. Si no, empiece por su seguro de casa y el endoso, si lo tiene.' },

        { type: 'h2', text: 'Si le sube agua por los desagües' },
        { type: 'ol', items: [
          'Deje de usar agua, lavadora y lavaplatos, y mantenga a niños y mascotas lejos de las aguas residuales.',
          'Pregunte si a los vecinos les pasa lo mismo. Si es así, avísele a su empresa de alcantarillado y anote el número de reporte.',
          'Pida a un plomero con licencia un informe escrito o el video de la cámara que muestre dónde estaba el tapón.',
          'Antes de limpiar, tome fotos y video del agua y de los daños, y guarde los recibos.',
          'Avise a sus aseguradoras cuanto antes. La póliza del NFIP exige aviso escrito sin demora, un inventario de lo dañado y una prueba de pérdida (proof of loss) firmada dentro de los 60 días. Según la ley de Florida (s. 627.70132), un reclamo al seguro de casa debe notificarse dentro de 1 año después de la fecha de la pérdida.',
        ] },
        { type: 'p', text: 'Nuestra [lista para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida) explica con más detalle cómo documentar los daños.' },

        { type: 'h2', text: 'Antes de la próxima tormenta' },
        { type: 'ul', items: [
          '**No eche grasa por el fregadero.** Miami-Dade recomienda dejar enfriar la grasa, guardarla en un envase cerrado y botarla en la basura, y raspar los platos antes de lavarlos.',
          '**Conozca su cobertura de inundación.** Una póliza nueva del NFIP normalmente entra en vigor 30 días después de comprarla, con algunas excepciones que explica FloodSmart. Vea por qué importa en nuestra [guía sobre las mareas reales](/es/blog/king-tides-flood-insurance-miami-dade).',
          '**Asegurados de Citizens:** por ley estatal (s. 627.715), la mayoría de las pólizas residenciales personales nuevas y renovadas de Citizens Property Insurance Corporation que incluyen viento deben tener seguro de inundación a más tardar el 1 de enero de 2027. Lea [qué cambia](/es/blog/citizens-flood-insurance-requirement-2027).',
          '**Revise al renovar.** Nuestra [lista de fin de año para la renovación](/es/blog/year-end-homeowners-renewal-checklist-florida) explica qué mirar en la página de declaraciones.',
        ] },

        { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
        { type: 'p', text: 'Traiga las páginas de declaraciones de su seguro de casa y de inundación a nuestra oficina en 33550 S Dixie Hwy, Suite 102, Florida City (lunes a viernes de 9 a 6, sábados con cita), o llame al [(305) 859-3953](' + TEL + '). Un agente con licencia le explicará qué dice cada póliza sobre inundación y retroceso de agua. Más información en nuestra [página de seguro de inundación](/es/flood-insurance-homestead-fl) y en la de [seguro de casa](/es/homeowners-insurance-florida-city), o [pida una cotización](/es/quote).' },
        { type: 'p', text: 'La cobertura depende de los términos de la póliza que elija. Hable con un agente con licencia sobre su caso.' },
      ],
      faq: [
        { q: '¿El seguro de inundación cubre el retroceso del alcantarillado?', a: 'Solo en casos limitados. El Dwelling Form del NFIP excluye el retroceso por alcantarillas o desagües, salvo que haya una inundación en la zona y esa inundación sea la causa directa. FloodSmart indica que solo se cubre si es consecuencia directa de una inundación.' },
        { q: '¿Mi seguro de casa cubre el agua que se devuelve por el alcantarillado?', a: 'Depende de su póliza. La DFS de Florida dice que algunas pólizas no incluyen esa cobertura y pueden excluir el retroceso desde una alcantarilla o drenaje exterior, pero se puede añadir con un endoso. Revise su página de declaraciones.' },
        { q: '¿Quién paga la reparación de la tubería?', a: 'WASD de Miami-Dade indica que, si el retroceso ocurre en la infraestructura del lado privado, la reparación le corresponde al dueño. Pregunte a su empresa de servicios dónde empieza la parte que le toca a ella.' },
      ],
      sources: [
        { label: 'eCFR: 44 CFR parte 61, apéndice A(1), póliza estándar de seguro de inundación, Dwelling Form (secciones II.B, V.D, VII.G) (en inglés)', url: S.sfip },
        { label: 'eCFR: 44 CFR 59.1, definición de inundación (en inglés)', url: S.cfr591 },
        { label: 'FEMA FloodSmart: qué cubre la póliza, retroceso del alcantarillado y espera de 30 días (en inglés)', url: S.floodsmart },
        { label: 'DFS de Florida: resumen del seguro de propietario (retroceso del alcantarillado, endoso, exclusión de inundación) (en inglés)', url: S.dfsHome },
        { label: 'DFS de Florida, Defensoría del Consumidor de Seguros: seguro de inundación (en inglés)', url: S.dfsFlood },
        { label: 'Condado de Miami-Dade: comunicado de WASD “Can the Grease” (20 de noviembre de 2026) (en inglés)', url: S.wasd },
        { label: 'Condado de Miami-Dade: grasas, aceites y manteca (en inglés)', url: S.fog },
        { label: 'Estatutos de Florida, s. 627.70132 (2026), aviso de reclamo de seguro de propiedad (en inglés)', url: S.s70132 },
        { label: 'Citizens Property Insurance Corporation: requisito de seguro de inundación (en inglés)', url: S.citizens },
        { label: 'Servicio Meteorológico Nacional, Miami (en inglés)', url: S.nws },
      ],
    },
    ru: {
      title: 'Вода из канализации или наводнение: почему во Флориде это разные убытки',
      metaTitle: 'Обратный поток канализации и наводнение | M&K Agency',
      description: 'Вода пошла из сливов? Как полис NFIP от наводнения относится к обратному потоку канализации, что DFS Флориды говорит о страховке дома и что делать сразу.',
      excerpt: 'Вода в доме — ещё не страховой случай по наводнению. Разбираем, как NFIP определяет наводнение, когда засчитывается обратный поток из канализации и почему страховка дома — отдельный вопрос.',
      ogAlt: 'Иллюстрация: дом во Флориде под дождём, с одной стороны затопленная улица, с другой — сливной трап в полу, из которого поднимается вода',
      category: 'Страхование от наводнения',
      body: [
        { type: 'p', text: 'После сильных ливней и внезапных подтоплений на юге Флориды на этой неделе ([наш обзор новостей за 20 ноября](/ru/news/' + NEWS + ')) у многих вода оказалась в доме. У одних она пришла с затопленной улицы. У других поднялась через трап в полу, душ или унитаз. Для хозяина это одно и то же: «дом затопило». Для страховки это могут быть два разных убытка, которые покрываются разными полисами по разным правилам.' },
        { type: 'p', text: 'Разберём, где официальные источники проводят границу и что проверить до подачи претензии.' },

        { type: 'h2', text: 'Что NFIP считает наводнением' },
        { type: 'p', text: 'Стандартный полис Национальной программы страхования от наводнений (NFIP) для жилых домов — так называемый Dwelling Form — определяет наводнение как **общее и временное состояние**, при котором вода частично или полностью покрывает **не менее двух акров обычно сухой земли или не менее двух участков (один из которых ваш)**. Причиной должно быть:' },
        { type: 'ul', items: [
          'выход из берегов внутренних водоёмов или приливных вод;',
          'необычное и быстрое скопление или сток поверхностных вод из любого источника;',
          'грязевой поток.',
        ] },
        { type: 'p', text: 'Ключевое слово — **общее**. Наводнение происходит с округой, а не только внутри ваших стен. Вода из лопнувшей трубы или забитого слива в одном доме под это определение не подпадает, даже если залит весь пол.' },

        { type: 'h2', text: 'Что такое обратный поток из канализации' },
        { type: 'p', text: 'Обратный поток возникает, когда стоки не могут уйти из дома и выдавливаются через самые низкие отверстия: трапы в полу, ванну, душ и унитаз. Причина может быть в вашей трубе, в городской канализации или в системе, переполненной ливневой водой.' },
        { type: 'p', text: 'Одна из частых причин — кухонный жир. 20 ноября, перед Днём благодарения, Департамент водоснабжения и канализации округа Майами-Дейд (WASD) напомнил: даже немного жира, слитого в раковину, застывает и может закупорить домашнюю сантехнику или общую канализацию. По данным WASD, за последний год его бригады выезжали на 648 засоров из-за жира и мусора. И главное: **если засор произошёл в трубах на частной стороне, ремонт оплачивает владелец дома**.' },

        { type: 'h2', text: 'Как полис NFIP относится к обратному потоку' },
        { type: 'p', text: 'Dwelling Form исключает воду и всё, что она несёт, если она **поднимается через канализацию или сливы**, выходит из дренажного (sump) насоса или просачивается сквозь стены и пол, — **кроме случаев, когда в округе есть наводнение и именно оно стало непосредственной причиной** обратного потока. FloodSmart, потребительский сайт FEMA, формулирует проще: обратный поток канализации покрывается страховкой от наводнения, только если он прямо вызван наводнением.' },
        { type: 'p', text: 'FloodSmart приводит пример: полис покроет ущерб от канализации, которую выдавило во время сильного ливня, но не от обратного потока из-за забитых труб. На практике оценщик спросит одно: что заставило воду подняться. Три типичные ситуации:' },
        { type: 'ul', items: [
          '**Улица и соседние участки под водой, и в это же время в ванной поднимаются стоки.** Это может подпадать под определение: в округе наводнение, и оно вызвало обратный поток.',
          '**День сухой, а ванна наполняется стоками из-за жирового засора или корней в вашей трубе.** Это не наводнение. Кроме того, полис исключает ущерб от воды, вызванный в основном проблемой внутри дома или под вашим контролем, в том числе засором или поломкой канализационных труб и сливов.',
          '**Дождь затекает через крышу или окно.** Полис от наводнения исключает сам дождь. Это вопрос к страховке дома.',
        ] },

        { type: 'h2', text: 'Что может быть в страховке дома' },
        { type: 'p', text: 'Департамент финансовых услуг Флориды (DFS) отмечает, что некоторые полисы страхования дома не включают покрытие обратного потока канализации. Если вода возвращается из уличной канализации или дренажа, полис может это исключать, но такое покрытие можно добавить **дополнением (endorsement)**. DFS также прямо говорит, что страховка дома не покрывает ущерб от наводнения: для этого нужен отдельный полис.' },
        { type: 'p', text: 'Дополнения на обратный поток воды не стандартизированы. Есть ли оно у вас, какой у него лимит и какая франшиза — зависит от вашего договора, поэтому не гадайте, а прочитайте страницу деклараций и сам текст дополнения. Если у вас есть и полис от наводнения, и такое дополнение, то какой из них сработает, решает причина появления воды.' },
        { type: 'callout', title: 'Быстрая проверка', text: 'Стояла ли вода на улице или у соседей, когда начался обратный поток? Если да, начинайте с полиса от наводнения. Если канализацию выдавило само по себе, начинайте со страховки дома и дополнения на обратный поток, если оно есть.' },

        { type: 'h2', text: 'Если вода пошла из сливов' },
        { type: 'ol', items: [
          'Перестаньте пользоваться водой, стиральной и посудомоечной машиной, чтобы не усугубить ситуацию, и не подпускайте детей и животных к стокам.',
          'Узнайте, нет ли того же у соседей. Если есть, сообщите в коммунальную службу канализации и запишите номер заявки.',
          'Вызовите лицензированного сантехника, чтобы он нашёл причину, и попросите письменное заключение или видео с камеры, где видно место засора.',
          'До уборки сфотографируйте и снимите на видео воду, сливы и повреждения; сохраняйте все чеки.',
          'Сразу сообщите страховым компаниям. Полис NFIP требует быстрого письменного уведомления, описи повреждённого имущества и подписанного подтверждения убытка (proof of loss) в течение 60 дней. По закону Флориды (s. 627.70132) о претензии по страховке дома нужно заявить в течение 1 года с даты убытка.',
        ] },
        { type: 'p', text: 'Подробнее о том, как документировать ущерб, — в нашем [чек-листе для претензий после урагана](/ru/blog/hurricane-claim-checklist-florida).' },

        { type: 'h2', text: 'До следующего шторма' },
        { type: 'ul', items: [
          '**Не сливайте жир в раковину.** WASD и программа округа Майами-Дейд по жирам и маслам советуют дать жиру остыть, закрыть его в банке или бутылке и выбросить с мусором, а тарелки перед мытьём очищать в ведро.',
          '**Знайте, что покрывает ваш полис от наводнения.** Новый полис NFIP обычно вступает в силу через 30 дней после покупки, с несколькими исключениями, которые перечислены на FloodSmart. Почему это важно, мы объясняли в [статье о королевских приливах](/ru/blog/king-tides-flood-insurance-miami-dade).',
          '**Клиентам Citizens:** по закону штата (s. 627.715) большинство новых и продлеваемых личных жилищных полисов Citizens Property Insurance Corporation с покрытием ветра должны иметь страховку от наводнения не позднее 1 января 2027 года. Подробнее — [что меняется](/ru/blog/citizens-flood-insurance-requirement-2027).',
          '**Проверьте полис при продлении.** В нашем [чек-листе продления в конце года](/ru/blog/year-end-homeowners-renewal-checklist-florida) — на что смотреть на странице деклараций.',
        ] },

        { type: 'h2', text: 'Чем поможет M&K Agency' },
        { type: 'p', text: 'Приносите страницы деклараций по страховке дома и от наводнения в наш офис: 33550 S Dixie Hwy, Suite 102, Florida City (понедельник–пятница 9–6, суббота по записи), или звоните [(305) 859-3953](' + TEL + '). Лицензированный агент разберёт, что каждый полис говорит о наводнении и обратном потоке воды, и объяснит ваши варианты. Подробнее — на странице [страхования от наводнения](/ru/flood-insurance-homestead-fl) и [страхования дома](/ru/homeowners-insurance-florida-city); также можно [запросить расчёт](/ru/quote). Мы говорим по-русски: [русскоязычный страховой агент в Майами](/ru/russian-speaking-insurance-agent-miami).' },
        { type: 'p', text: 'Покрытие зависит от условий выбранного полиса. Обсудите свою ситуацию с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Покрывает ли страховка от наводнения обратный поток канализации?', a: 'Только в ограниченных случаях. Dwelling Form NFIP исключает обратный поток через канализацию и сливы, если только в округе нет наводнения, которое стало непосредственной причиной. FloodSmart пишет, что такой ущерб покрывается, только если он прямо вызван наводнением.' },
        { q: 'Покрывает ли страховка дома воду, которую выдавило из канализации?', a: 'Зависит от полиса. DFS Флориды отмечает, что некоторые полисы не включают это покрытие и могут исключать обратный поток из уличной канализации или дренажа, но его можно добавить дополнением. Проверьте страницу деклараций.' },
        { q: 'Кто платит за ремонт самой трубы?', a: 'WASD округа Майами-Дейд указывает: если засор произошёл в трубах на частной стороне, ремонт за счёт владельца. Уточните в своей коммунальной службе, где по вашему адресу начинается её зона ответственности.' },
      ],
      sources: [
        { label: 'eCFR: 44 CFR часть 61, приложение A(1), стандартный полис от наводнения, Dwelling Form (разделы II.B, V.D, VII.G) (на английском)', url: S.sfip },
        { label: 'eCFR: 44 CFR 59.1, определение наводнения (на английском)', url: S.cfr591 },
        { label: 'FEMA FloodSmart: что покрывает полис, обратный поток канализации, 30 дней ожидания (на английском)', url: S.floodsmart },
        { label: 'DFS Флориды: обзор страхования дома (обратный поток канализации, дополнение, исключение наводнения) (на английском)', url: S.dfsHome },
        { label: 'DFS Флориды, уполномоченный по защите прав страхователей: страхование от наводнения (на английском)', url: S.dfsFlood },
        { label: 'Округ Майами-Дейд: пресс-релиз WASD «Can the Grease» (20 ноября 2026 г.) (на английском)', url: S.wasd },
        { label: 'Округ Майами-Дейд: жиры, масла и смазки (на английском)', url: S.fog },
        { label: 'Законы Флориды, s. 627.70132 (2026), уведомление о претензии по страхованию имущества (на английском)', url: S.s70132 },
        { label: 'Citizens Property Insurance Corporation: требование о страховке от наводнения (на английском)', url: S.citizens },
        { label: 'Национальная метеослужба, Майами (на английском)', url: S.nws },
      ],
    },
  },
};
