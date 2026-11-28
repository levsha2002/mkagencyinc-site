import type { BlogPost, PostTranslation } from '../types';

// Refreshed 2026-11-28 (ET) for the end of hurricane season. Facts re-checked that day
// against official sources (raw text in /workspace/claimcheck2/):
// - The 2026 Florida Statutes on Online Sunshine (leg.state.fl.us):
//   s. 627.70132(1)-(5): reopened vs supplemental claim; claim or reopened claim barred unless notice within
//   1 year after the date of loss, supplemental within 18 months; combat-deployment tolling; for hurricanes the
//   date of loss is landfall, for tornadoes/windstorms/severe rain/other weather the date NOAA verifies the
//   event; condo loss-assessment notice; does not affect s. 95.11.
//   s. 95.11(2)(e): action for breach of a property insurance contract within five years from the date of loss.
//   s. 627.70131(1)(a), (3)(a)-(e), (7)(a), (8): 7 days to acknowledge; investigation within 7 days after
//   proof-of-loss statements; physical inspection within 30 days, adjuster name + license number; estimate copy
//   within 7 days; pay or deny within 60 days unless factors beyond the insurer's control; tolling.
//   s. 627.7142 (Bill of Rights within 14 days); s. 627.7152(13) (no assignment, policies issued on/after
//   Jan. 1, 2023); s. 626.854(7), (11)(b), (14) (PA cancel 10 days / 30 days after loss in a declared
//   emergency; fee caps 10% in the year after a declaration, 20% otherwise; 48 hours' notice before an
//   insurer inspection); s. 489.147(2)(b), (6)(a) (no gifts or deductible waivers for roof inspections/claims;
//   roof contract cancel within 10 days or by the official start date if signed within 180 days of a declared
//   emergency in that area); s. 627.7015(2) (mediation eligibility after pay/deny).
// - NHC climatology (season June 1 - Nov. 30); NHC Isaias update 830 PM CDT Oct. 9, 2026 (landfall near
//   Destin, 105 mph); NOAA NESDIS 2026 season wrap-up (Isaias the only hurricane; landfall as Category 2).
// - DFS storm page (helpline 1-877-693-5236, Mon-Fri 8-5 ET; do not sign anything after storm damage, call
//   first); DFS mediation page (residential property mediation is pre-appraisal and pre-suit; bring photos and
//   estimates; insurer pays the mediation cost unless you fail to appear).
// - FloodSmart home page (most homeowners insurance does not cover flood damage); FloodSmart claims checklist + start-a-claim page (documentation within 60 days of the flood or the
//   timeframe the adjuster gives; keep samples; appeal to FEMA within 60 days of the letter).
// - Citizens report-a-claim page (24/7 hotline 866.411.2742; myPolicy).
// No private insurer named; no premium figures.
const LEG = 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=';
const S = {
  s70132: LEG + '0600-0699/0627/Sections/0627.70132.html',
  s70131: LEG + '0600-0699/0627/Sections/0627.70131.html',
  s7142: LEG + '0600-0699/0627/Sections/0627.7142.html',
  s7152: LEG + '0600-0699/0627/Sections/0627.7152.html',
  s7015: LEG + '0600-0699/0627/Sections/0627.7015.html',
  s854: LEG + '0600-0699/0626/Sections/0626.854.html',
  s147: LEG + '0400-0499/0489/Sections/0489.147.html',
  s9511: LEG + '0000-0099/0095/Sections/0095.11.html',
  nhc: 'https://www.nhc.noaa.gov/climo/',
  isaias: 'https://www.nhc.noaa.gov/archive/2026/al09/al092026.update.10100129.shtml',
  noaa: 'https://www.nesdis.noaa.gov/news/2026-hurricane-season-wrap',
  dfs: 'https://www.myfloridacfo.com/division/consumers/storm',
  dfsMed: 'https://myfloridacfo.com/division/consumers/mediation',
  nfip: 'https://www.floodsmart.gov/claims-checklist',
  nfipStart: 'https://www.floodsmart.gov/recover/start-a-claim',
  citizens: 'https://www.citizensfla.com/report-a-claim',
  fs: 'https://www.floodsmart.gov/',
};

const en: PostTranslation = {
  title: 'Hurricane Claim Checklist for Florida Homeowners: What Still Matters After Nov. 30',
  metaTitle: 'Florida Hurricane Claim Checklist (2026) | M&K Agency',
  description: 'Hurricane season ends Nov. 30, but Florida claim deadlines keep running. Checklist for open, reopened and supplemental home claims, flood claims and contracts.',
  ogAlt: 'House with a tarp on the roof and a boarded window, a calendar with the last day circled, a checklist and a phone photo',
  excerpt: 'The 2026 season ends November 30. If your home still has storm damage, or a claim is still open, here is what to document, report and check before the deadlines.',
  category: 'Homeowners insurance',
  body: [
    { type: 'p', text: 'The Atlantic hurricane season officially runs from June 1 to November 30 ([NHC](' + S.nhc + ')). This year Florida had one hurricane landfall: **Isaias** came ashore near Destin on the evening of **October 9, 2026** as a Category 2 storm ([NHC](' + S.isaias + '), [NOAA](' + S.noaa + ')). The end of the season does not end your claim rights or your duties. If you still have damage, an unreported claim or a repair that uncovered more damage, here are the next steps.' },
    { type: 'p', text: 'This guide covers **what you do**. Insurer deadlines and when they pause are in our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida); year-end paperwork is in the [end-of-season checklist](/en/blog/end-of-hurricane-season-checklist-florida).' },
    { type: 'h2', text: 'The claim clock did not stop with the season' },
    { type: 'p', text: 'Florida law counts claim deadlines from the **date of loss**, not from the end of hurricane season ([s. 627.70132](' + S.s70132 + ')):' },
    { type: 'ul', items: [
      'A **new or reopened claim** is barred unless the insurer gets notice, as the policy requires, within **1 year** after the date of loss.',
      'A **supplemental claim** (more damage from the same peril, or extra costs found while repairing an open claim) must be reported within **18 months** after the date of loss.',
      'For a hurricane, the date of loss is the **day of landfall**. For Isaias, both windows run from October 9, 2026, so the one-year limit falls in October 2027 and the 18-month limit in April 2028. Do not wait for the last weeks.',
      'For tornadoes, windstorms, severe rain or other weather, the date of loss is the date **NOAA verifies** the event. Damage from a heavy rain that was not a hurricane follows that date.',
      'For condo owners, a claim under loss assessment coverage has its own rule: within 1 year of the loss or 90 days after the association votes the assessment, whichever is later, and never more than 3 years after the loss.',
    ] },
    { type: 'p', text: 'These limits are outer limits. Most policies also ask for prompt notice, so report as soon as you know about the damage. A lawsuit over a property insurance contract has a separate deadline of five years from the date of loss ([s. 95.11(2)(e)](' + S.s9511 + ')); that is a legal question for a Florida attorney.' },
    { type: 'h2', text: 'If you still have damage: document first' },
    { type: 'ol', items: [
      '**Photograph and film everything before you fix or throw away anything:** roof, ceilings, attic, walls, floors, windows, fences and damaged belongings.',
      'Make **reasonable temporary repairs**, such as a roof tarp, and **keep every receipt**. Most policies require this.',
      'Keep damaged items until the adjuster sees them, unless they are a health hazard. If you must discard them, photograph them first and keep a sample, such as a piece of carpet.',
      'If the home was not livable, keep receipts for hotel, meals and other extra costs; many policies include additional living expense coverage.',
    ] },
    { type: 'h2', text: 'Report, reopen or supplement' },
    { type: 'p', text: 'Call your insurer, use its app or report online, and write down the claim number, the date and the name of each person you speak with. If your claim was closed and you now have more costs for damage you already reported, ask to **reopen** it. If you found **new damage** from the same storm, or extra costs during repairs on an open claim, it is a **supplemental** claim. If your home is insured with Citizens Property Insurance Corporation, its claims hotline is **866.411.2742**, open 24 hours a day, or you can report through myPolicy ([Citizens](' + S.citizens + ')).' },
    { type: 'h2', text: 'What your insurer must do, in short' },
    { type: 'ul', items: [
      'Acknowledge your communication within **7 days**, unless it pays within that time or factors beyond its control prevent it ([s. 627.70131](' + S.s70131 + ')).',
      'If a physical inspection is needed, do it within **30 days** after receiving your proof-of-loss statements. The adjuster must give you his or her name and state license number, and you get a copy of any detailed estimate within 7 days after it is generated.',
      'Pay or deny the claim, or part of it, within **60 days** after notice, with a written explanation, unless factors beyond its control prevent it.',
      'Send you the **Homeowner Claims Bill of Rights** within 14 days after your first contact about the claim ([s. 627.7142](' + S.s7142 + ')).',
      'Give you at least **48 hours’ notice** before an adjuster’s on-site inspection or meeting; you can waive it ([s. 626.854(14)](' + S.s854 + ')).',
    ] },
    { type: 'h2', text: 'Flood damage is a separate claim' },
    { type: 'p', text: 'Most homeowners policies do not cover flood damage ([FloodSmart](' + S.fs + ')). If water came in from storm surge or rising water, report it to your **flood** insurer as well. For a National Flood Insurance Program claim, FEMA’s checklist says to send the documentation that supports your claim **within 60 days of the flood**, or within the timeframe your adjuster or insurer gives you, and to keep samples of flooring you throw away ([NFIP checklist](' + S.nfip + '), [FloodSmart](' + S.nfipStart + ')). If a flood claim is denied, you can appeal to FEMA within 60 days after the insurer’s letter. Our [water backup vs. flood guide](/en/blog/water-backup-vs-flood-insurance-florida) explains why the two are different losses.' },
    { type: 'h2', text: 'Contractors, public adjusters and what you sign' },
    { type: 'ul', items: [
      'For residential policies issued on or after January 1, 2023, you **cannot assign** your post-loss benefits to a contractor; an attempted assignment is void ([s. 627.7152(13)](' + S.s7152 + ')).',
      'A contractor may not offer a gift, cash, a deductible waiver or anything of value for letting it inspect your roof or for filing a roof claim ([s. 489.147](' + S.s147 + ')). If you sign a roof contract within 180 days after a declared state of emergency covering your area, you can cancel without penalty within 10 days or by the official start date, whichever comes first.',
      'A **public adjuster’s** fee is capped at 10% of claim payments for claims made in the year after a state of emergency is declared, and 20% otherwise. You can cancel the contract within 10 days, or, in a declared emergency, within 30 days after the date of loss if that is longer ([s. 626.854](' + S.s854 + ')).',
      'The Florida Department of Financial Services advises: after storm damage, **don’t sign anything**; call its helpline first ([DFS](' + S.dfs + ')).',
    ] },
    { type: 'h2', text: 'If you disagree with the result' },
    { type: 'p', text: 'Ask for the written explanation and compare the estimate with one from a licensed contractor. Florida’s residential property **mediation** program, run by DFS, is a pre-appraisal and pre-suit option; a claim is eligible once the insurer has paid or denied it ([s. 627.7015](' + S.s7015 + ')). The insurer pays the cost of the mediation unless you fail to appear, and you should bring your policy, photos, estimates and letters ([DFS mediation](' + S.dfsMed + ')). The DFS Insurance Consumer Helpline is **1-877-693-5236** (1-877-MY-FL-CFO), Monday to Friday, 8 a.m. to 5 p.m. Eastern.' },
    { type: 'h2', text: 'Use the quiet months to get ready' },
    { type: 'p', text: 'Once your claims are settled, record a fresh video of every room and review your [hurricane deductible](/en/florida-home-insurance-wind-deductible), your [flood insurance](/en/flood-insurance-homestead-fl) options and our [renewal checklist](/en/blog/year-end-homeowners-renewal-checklist-florida) before June 1.' },
    { type: 'callout', title: 'Questions about an open claim or your coverage?', text: 'A licensed agent can walk through your policy, deductibles and flood options with you in English, Spanish or Russian. See our [homeowners insurance page](/en/homeowners-insurance-florida-city), [request a quote](/en/quote) or call (305) 859-3953. This is general information, not legal advice; coverage depends on your policy.' },
  ],
  faq: [
    { q: 'Hurricane season is over. Can I still report damage from Isaias?', a: 'Yes, if you are within the limits in s. 627.70132: notice of a new or reopened claim within 1 year after landfall (October 9, 2026) and a supplemental claim within 18 months. Your policy may also require prompt notice, so report as soon as you can.' },
    { q: 'What is the difference between a reopened and a supplemental claim?', a: 'A reopened claim is a closed claim you ask to reopen for more costs on damage you already reported. A supplemental claim is for additional damage from the same peril, or for costs found while repairing an open claim.' },
    { q: 'Do I file one claim for wind and flood?', a: 'Usually not. Wind damage goes to your homeowners insurer and flood damage to your flood insurer. For an NFIP claim, FEMA asks for supporting documentation within 60 days of the flood or the timeframe your adjuster gives.' },
  ],
  sources: [
    { label: 'Florida Statutes s. 627.70132 (2026): notice of property insurance claim', url: S.s70132 },
    { label: 'Florida Statutes s. 627.70131 (2026): insurer’s duty to acknowledge, investigate, pay or deny', url: S.s70131 },
    { label: 'Florida Statutes s. 627.7142 (2026): Homeowner Claims Bill of Rights', url: S.s7142 },
    { label: 'Florida Statutes s. 627.7152 (2026): assignment agreements', url: S.s7152 },
    { label: 'Florida Statutes s. 626.854 (2026): public adjusters; notice before inspections', url: S.s854 },
    { label: 'Florida Statutes s. 489.147 (2026): prohibited property insurance practices by contractors', url: S.s147 },
    { label: 'Florida Statutes s. 627.7015 (2026): property insurance mediation', url: S.s7015 },
    { label: 'Florida Statutes s. 95.11 (2026): limitations on civil actions', url: S.s9511 },
    { label: 'National Hurricane Center: tropical cyclone climatology', url: S.nhc },
    { label: 'National Hurricane Center: Hurricane Isaias landfall update, Oct. 9, 2026', url: S.isaias },
    { label: 'NOAA NESDIS: 2026 hurricane season wrap-up', url: S.noaa },
    { label: 'Florida DFS: storm and disaster insurance help', url: S.dfs },
    { label: 'Florida DFS: mediation and neutral evaluation', url: S.dfsMed },
    { label: 'FEMA / FloodSmart: NFIP claims checklist', url: S.nfip },
    { label: 'FEMA / FloodSmart: start a flood claim', url: S.nfipStart },
    { label: 'FEMA / FloodSmart: flood insurance basics', url: S.fs },
    { label: 'Citizens Property Insurance Corporation: report a claim', url: S.citizens },
  ],
};

const es: PostTranslation = {
  title: 'Reclamo por huracán en Florida: los pasos que siguen vigentes después del 30 de noviembre',
  metaTitle: 'Lista para reclamar por huracán en Florida (2026) | M&K Agency',
  description: 'La temporada de huracanes termina el 30 de noviembre, pero los plazos para reclamar siguen corriendo. Pasos para reclamos abiertos, reabiertos y suplementarios.',
  ogAlt: 'Casa con una lona en el techo y una ventana tapiada, un calendario con el último día marcado, una lista de control y una foto en el teléfono',
  excerpt: 'La temporada 2026 termina el 30 de noviembre. Si su casa todavía tiene daños o su reclamo sigue abierto, esto es lo que debe documentar, reportar y revisar.',
  category: 'Seguro de vivienda',
  body: [
    { type: 'p', text: 'La temporada de huracanes del Atlántico va oficialmente del 1 de junio al 30 de noviembre ([NHC](' + S.nhc + ')). Este año Florida tuvo un solo huracán que tocó tierra: **Isaías** (Isaias, en inglés) llegó cerca de Destin la noche del **9 de octubre de 2026** como categoría 2 ([NHC](' + S.isaias + '), [NOAA](' + S.noaa + ')). Con la temporada no terminan sus derechos ni sus obligaciones: si todavía tiene daños o una reparación destapó más, estos son los pasos.' },
    { type: 'p', text: 'Aquí va **lo que le toca hacer a usted**; los plazos de la aseguradora están en la guía de [plazos del reclamo por huracán](/es/blog/hurricane-claim-timeline-florida) y el papeleo de fin de año, en la [lista de fin de temporada](/es/blog/end-of-hurricane-season-checklist-florida).' },
    { type: 'h2', text: 'El reloj del reclamo no se detuvo con la temporada' },
    { type: 'p', text: 'La ley de Florida cuenta los plazos desde la **fecha de la pérdida**, no desde el fin de la temporada ([art. 627.70132](' + S.s70132 + ')):' },
    { type: 'ul', items: [
      'Un **reclamo nuevo o reabierto** no procede si la aseguradora no recibe el aviso, en la forma que pide la póliza, dentro de **1 año** después de la fecha de la pérdida.',
      'Un **reclamo suplementario** (más daños por el mismo riesgo, o costos adicionales que aparecen al reparar un reclamo abierto) debe avisarse dentro de **18 meses**.',
      'En un huracán, la fecha de la pérdida es el **día en que tocó tierra**. Para Isaías, ambos plazos cuentan desde el 9 de octubre de 2026: el de un año vence en octubre de 2027 y el de 18 meses, en abril de 2028. No espere a las últimas semanas.',
      'En tornados, vendavales, lluvias intensas u otros eventos del tiempo, la fecha de la pérdida es la fecha en que la **NOAA verifica** el evento.',
      'En condominios, el reclamo por derramas (loss assessment) vence 1 año después de la pérdida o 90 días después de que la asociación vote la derrama, lo que sea más tarde, y nunca pasados 3 años.',
    ] },
    { type: 'p', text: 'Son límites máximos; casi todas las pólizas piden aviso pronto. Demandar por incumplimiento del contrato tiene otro plazo, cinco años desde la pérdida ([art. 95.11(2)(e)](' + S.s9511 + ')); consúltelo con un abogado.' },
    { type: 'h2', text: 'Si todavía tiene daños: primero, documente' },
    { type: 'ol', items: [
      '**Tome fotos y video de todo antes de arreglar o botar algo:** techo, cielos rasos, ático, paredes, pisos, ventanas, cercas y pertenencias dañadas.',
      'Haga **reparaciones temporales razonables**, como una lona en el techo, y **guarde cada recibo**. Casi todas las pólizas lo exigen.',
      'Guarde lo dañado hasta que lo vea el ajustador, salvo que sea un peligro para la salud; si debe botarlo, fotografíelo y guarde una muestra, como un pedazo de alfombra.',
      'Si la casa quedó inhabitable, guarde los recibos de hotel, comidas y otros gastos extra; muchas pólizas incluyen cobertura de gastos adicionales de vivienda.',
    ] },
    { type: 'h2', text: 'Reportar, reabrir o suplementar' },
    { type: 'p', text: 'Reporte por teléfono, aplicación o en línea, y anote el número de reclamo, la fecha y el nombre de cada persona con quien hable. Si su reclamo se cerró y ahora tiene más costos por daños que ya había reportado, pida **reabrirlo**. Si encontró **daños nuevos** de la misma tormenta, o costos extra durante la reparación de un reclamo abierto, es un reclamo **suplementario**. Si su casa está asegurada con Citizens Property Insurance Corporation, su línea de reclamos es el **866.411.2742**, disponible las 24 horas, o puede reportar en myPolicy ([Citizens](' + S.citizens + ')).' },
    { type: 'h2', text: 'Lo que la aseguradora debe hacer, en resumen' },
    { type: 'ul', items: [
      'Acusar recibo de su comunicación dentro de **7 días**, salvo que pague en ese tiempo o lo impidan factores fuera de su control ([art. 627.70131](' + S.s70131 + ')).',
      'Si hace falta inspección física, hacerla dentro de **30 días** tras recibir su prueba de pérdida. El ajustador debe darle su nombre y número de licencia, y usted recibe copia de todo estimado detallado en 7 días.',
      'Pagar o negar el reclamo, o parte de él, dentro de **60 días** después del aviso, con una explicación por escrito, salvo factores fuera de su control.',
      'Enviarle la **Homeowner Claims Bill of Rights** (carta de derechos del asegurado) dentro de 14 días después de su primer contacto sobre el reclamo ([art. 627.7142](' + S.s7142 + ')).',
      'Avisarle con al menos **48 horas** antes de una inspección o reunión del ajustador en la propiedad; usted puede renunciar a ese aviso ([art. 626.854(14)](' + S.s854 + ')).',
    ] },
    { type: 'h2', text: 'La inundación es un reclamo aparte' },
    { type: 'p', text: 'La mayoría de los seguros de vivienda no cubren daños por inundación ([FloodSmart](' + S.fs + ')). Si el agua entró por marejada ciclónica o crecida, repórtelo también a su aseguradora de **inundación**. Para un reclamo del Programa Nacional de Seguro contra Inundaciones (NFIP), la lista de FEMA indica enviar la documentación que respalda el reclamo **dentro de 60 días de la inundación**, o en el plazo que le dé su ajustador o aseguradora, y guardar muestras del piso que bote ([lista del NFIP](' + S.nfip + '), [FloodSmart](' + S.nfipStart + ')). Vea también [retroceso de alcantarillado vs. inundación](/es/blog/water-backup-vs-flood-insurance-florida).' },
    { type: 'h2', text: 'Contratistas, ajustadores públicos y lo que usted firma' },
    { type: 'ul', items: [
      'En pólizas residenciales emitidas a partir del 1 de enero de 2023, usted **no puede ceder** a un contratista los beneficios del reclamo; una cesión así es nula ([art. 627.7152(13)](' + S.s7152 + ')).',
      'Un contratista no puede ofrecerle regalos, efectivo, que no pague el deducible ni nada de valor a cambio de inspeccionar su techo o presentar un reclamo por el techo ([art. 489.147](' + S.s147 + ')).',
      'Los honorarios de un **ajustador público** tienen tope: 10% de los pagos si el reclamo se presenta en el año siguiente a una declaración de emergencia y 20% en otros casos. El contrato se puede cancelar en 10 días o, en una emergencia declarada, en 30 días desde la pérdida si es más largo ([art. 626.854](' + S.s854 + ')).',
      'El Departamento de Servicios Financieros de Florida (DFS) aconseja: tras daños por tormenta, **no firme nada** y llame primero a su línea de ayuda ([DFS](' + S.dfs + ')).',
    ] },
    { type: 'h2', text: 'Si no está de acuerdo con el resultado' },
    { type: 'p', text: 'Pida la explicación por escrito y compare el estimado con el de un contratista con licencia. El programa de **mediación** de propiedad residencial del DFS es una vía previa a la tasación (appraisal) y a la demanda; el reclamo califica una vez que la aseguradora lo pagó o lo negó ([art. 627.7015](' + S.s7015 + ')). La aseguradora paga el costo de la mediación salvo que usted no se presente; lleve póliza, fotos y estimados ([mediación del DFS](' + S.dfsMed + ')). La línea de ayuda al consumidor del DFS es el **1-877-693-5236** (1-877-MY-FL-CFO), de lunes a viernes, de 8 a.m. a 5 p.m., hora del Este.' },
    { type: 'h2', text: 'Aproveche los meses tranquilos' },
    { type: 'p', text: 'Cuando sus reclamos estén resueltos, grabe un video nuevo de cada cuarto y revise su [deducible de huracán](/es/florida-home-insurance-wind-deductible), sus opciones de [seguro de inundación](/es/flood-insurance-homestead-fl) y nuestra [lista para la renovación](/es/blog/year-end-homeowners-renewal-checklist-florida) antes del 1 de junio.' },
    { type: 'callout', title: '¿Dudas sobre un reclamo abierto o su cobertura?', text: 'Un agente con licencia puede revisar con usted su póliza, sus deducibles y sus opciones de inundación, en español, inglés o ruso. Vea nuestra página de [seguro de vivienda](/es/homeowners-insurance-florida-city), [pida una cotización](/es/quote) o llame al (305) 859-3953. Esta es información general, no asesoría legal; la cobertura depende de su póliza.' },
  ],
  faq: [
    { q: 'Ya terminó la temporada. ¿Todavía puedo reportar daños de Isaías?', a: 'Sí, si está dentro de los límites del art. 627.70132: aviso de un reclamo nuevo o reabierto dentro de 1 año desde que tocó tierra (9 de octubre de 2026) y de un reclamo suplementario dentro de 18 meses.' },
    { q: '¿Qué diferencia hay entre un reclamo reabierto y uno suplementario?', a: 'Un reclamo reabierto es uno cerrado que usted pide reabrir por más costos de daños que ya reportó. Un suplementario es por daños adicionales del mismo riesgo, o por costos que aparecen al reparar un reclamo abierto.' },
    { q: '¿Presento un solo reclamo por viento e inundación?', a: 'Por lo general, no. El daño por viento va a su seguro de vivienda y el de inundación a su seguro de inundación. Para un reclamo del NFIP, FEMA pide la documentación dentro de 60 días de la inundación o en el plazo que indique su ajustador.' },
  ],
  sources: [
    { label: 'Estatutos de Florida, art. 627.70132 (2026): aviso de reclamo de seguro de propiedad (en inglés)', url: S.s70132 },
    { label: 'Estatutos de Florida, art. 627.70131 (2026): obligaciones de la aseguradora (en inglés)', url: S.s70131 },
    { label: 'Estatutos de Florida, art. 627.7142 (2026): Homeowner Claims Bill of Rights (en inglés)', url: S.s7142 },
    { label: 'Estatutos de Florida, art. 627.7152 (2026): cesión de beneficios (en inglés)', url: S.s7152 },
    { label: 'Estatutos de Florida, art. 626.854 (2026): ajustadores públicos; aviso de inspección (en inglés)', url: S.s854 },
    { label: 'Estatutos de Florida, art. 489.147 (2026): prácticas prohibidas a contratistas (en inglés)', url: S.s147 },
    { label: 'Estatutos de Florida, art. 627.7015 (2026): mediación de seguros de propiedad (en inglés)', url: S.s7015 },
    { label: 'Estatutos de Florida, art. 95.11 (2026): plazos para acciones civiles (en inglés)', url: S.s9511 },
    { label: 'Centro Nacional de Huracanes: climatología de ciclones tropicales (en inglés)', url: S.nhc },
    { label: 'Centro Nacional de Huracanes: Isaías toca tierra, 9 de octubre de 2026 (en inglés)', url: S.isaias },
    { label: 'NOAA NESDIS: resumen de la temporada de huracanes 2026 (en inglés)', url: S.noaa },
    { label: 'DFS de Florida: ayuda de seguros por tormentas y desastres (en inglés)', url: S.dfs },
    { label: 'DFS de Florida: mediación y evaluación neutral (en inglés)', url: S.dfsMed },
    { label: 'FEMA / FloodSmart: lista de reclamos del NFIP (en inglés)', url: S.nfip },
    { label: 'FEMA / FloodSmart: cómo iniciar un reclamo por inundación (en inglés)', url: S.nfipStart },
    { label: 'FEMA / FloodSmart: conceptos básicos del seguro de inundación (en inglés)', url: S.fs },
    { label: 'Citizens Property Insurance Corporation: reportar un reclamo (en inglés)', url: S.citizens },
  ],
};

const ru: PostTranslation = {
  title: 'Чек-лист по ураганному убытку для домовладельцев Флориды: что важно и после 30 ноября',
  metaTitle: 'Чек-лист по ураганному убытку во Флориде (2026) | M&K Agency',
  description: 'Сезон ураганов заканчивается 30 ноября, но сроки по страховым случаям во Флориде идут дальше. Что делать с открытыми, повторными и дополнительными заявлениями.',
  ogAlt: 'Дом с брезентом на крыше и заколоченным окном, календарь с обведённым последним днём, чек-лист и фото на телефоне',
  excerpt: 'Сезон 2026 года заканчивается 30 ноября. Если у дома остались повреждения после шторма или страховой случай ещё открыт, вот что фиксировать, о чём заявлять и что проверить до истечения сроков.',
  category: 'Страхование дома',
  body: [
    { type: 'p', text: 'Атлантический сезон ураганов официально длится с 1 июня по 30 ноября ([NHC](' + S.nhc + ')). В этом году на побережье Флориды вышел только один ураган: **Isaias** обрушился на берег возле Дестина вечером **9 октября 2026 года**, имея категорию 2 ([NHC](' + S.isaias + '), [NOAA](' + S.noaa + ')). Конец сезона не отменяет ни ваших прав, ни ваших обязанностей. Если повреждения остались, об убытке вы так и не заявили или при ремонте обнаружились новые повреждения, ниже порядок действий.' },
    { type: 'p', text: 'Здесь речь о том, **что делаете вы**. Сроки для страховой компании и случаи, когда они приостанавливаются, описаны в статье о [сроках урегулирования ураганного убытка](/ru/blog/hurricane-claim-timeline-florida), а бумаги на конец года собраны в [чек-листе к концу сезона](/ru/blog/end-of-hurricane-season-checklist-florida).' },
    { type: 'h2', text: 'Сроки не закончились вместе с сезоном' },
    { type: 'p', text: 'Закон Флориды отсчитывает сроки от **даты убытка**, а не от конца сезона ураганов ([ст. 627.70132](' + S.s70132 + ')):' },
    { type: 'ul', items: [
      '**Новое или повторно открытое заявление** не принимается, если страховщик не получил уведомление в порядке, предусмотренном полисом, в течение **1 года** после даты убытка.',
      '**Дополнительное заявление** (supplemental claim: новые повреждения от того же риска или дополнительные расходы, выявленные при ремонте по открытому случаю) нужно подать в течение **18 месяцев**.',
      'Для урагана датой убытка считается **день выхода на сушу**. Для Isaias оба срока идут от 9 октября 2026 года: годичный истекает в октябре 2027-го, 18-месячный — в апреле 2028-го. Не тяните до последних недель.',
      'Для торнадо, сильного ветра, ливней и других погодных явлений датой убытка считается дата, когда событие **подтвердило NOAA**. Ущерб от ливня, который не был ураганом, отсчитывается от этой даты.',
      'Для владельцев кондо у заявления по покрытию спецвзносов (loss assessment) своё правило: в течение 1 года после убытка или 90 дней после того, как ассоциация проголосует за взнос, смотря что позже, но не позднее 3 лет после убытка.',
    ] },
    { type: 'p', text: 'Это предельные сроки. Большинство полисов требует уведомить страховщика без промедления, поэтому сообщайте сразу, как заметили повреждение. Для иска о нарушении договора страхования имущества действует отдельный срок — пять лет с даты убытка ([ст. 95.11(2)(e)](' + S.s9511 + ')); это вопрос к адвокату во Флориде.' },
    { type: 'h2', text: 'Если повреждения остались: сначала зафиксируйте' },
    { type: 'ol', items: [
      '**Сфотографируйте и снимите на видео всё до ремонта и до того, как что-то выбросить:** крышу, потолки, чердак, стены, полы, окна, забор и испорченные вещи.',
      'Сделайте **разумный временный ремонт**, например натяните брезент на крышу, и **сохраняйте все чеки**. Этого требует большинство полисов.',
      'Не выбрасывайте повреждённые вещи до осмотра адджастера, если они не опасны для здоровья. Если выбросить всё же нужно, сначала сфотографируйте и оставьте образец, например кусок ковра.',
      'Если жить в доме было нельзя, храните чеки за гостиницу, еду и другие дополнительные расходы: во многих полисах есть покрытие дополнительных расходов на проживание.',
    ] },
    { type: 'h2', text: 'Заявить, открыть заново или дополнить' },
    { type: 'p', text: 'Позвоните страховщику, воспользуйтесь приложением или сайтом и запишите номер страхового случая, дату и имя каждого, с кем говорили. Если случай закрыт, а у вас появились новые расходы по уже заявленному ущербу, попросите **открыть его заново** (reopened claim). Если вы нашли **новые повреждения** от того же шторма или дополнительные расходы при ремонте по открытому случаю, это **дополнительное заявление**. Если дом застрахован в Citizens Property Insurance Corporation, круглосуточная линия по страховым случаям — **866.411.2742**, заявить можно и через myPolicy ([Citizens](' + S.citizens + ')).' },
    { type: 'h2', text: 'Что обязан сделать страховщик: коротко' },
    { type: 'ul', items: [
      'Подтвердить получение вашего обращения в течение **7 дней**, если только он не выплатил за это время или этому не помешали не зависящие от него обстоятельства ([ст. 627.70131](' + S.s70131 + ')).',
      'Если нужен осмотр на месте, провести его в течение **30 дней** после получения ваших документов proof of loss. Адджастер обязан сообщить своё имя и номер лицензии штата, а копию подробной сметы вы получаете в течение 7 дней после её составления.',
      'Выплатить или отказать полностью или частично в течение **60 дней** после уведомления, с письменным объяснением, если не помешали не зависящие от него обстоятельства.',
      'Прислать **Homeowner Claims Bill of Rights** (памятку о правах страхователя) в течение 14 дней после первого обращения по случаю ([ст. 627.7142](' + S.s7142 + ')).',
      'Предупредить минимум за **48 часов** до осмотра или встречи с адджастером на месте; от этого уведомления можно отказаться ([ст. 626.854(14)](' + S.s854 + ')).',
    ] },
    { type: 'h2', text: 'Наводнение — отдельное заявление' },
    { type: 'p', text: 'Большинство полисов страхования дома не покрывает ущерб от наводнения ([FloodSmart](' + S.fs + ')). Если вода пришла с нагонной волной или от подъёма воды, сообщите и страховщику по **наводнению**. По полису Национальной программы страхования от наводнений (NFIP) FEMA советует отправить документы, подтверждающие ущерб, **в течение 60 дней после наводнения** или в срок, который назовёт адджастер или страховщик, и сохранить образцы выброшенного напольного покрытия ([чек-лист NFIP](' + S.nfip + '), [FloodSmart](' + S.nfipStart + ')). Отказ по такому случаю можно обжаловать в FEMA в течение 60 дней после письма страховщика. Почему это разные убытки, объясняет статья [обратный поток канализации и наводнение](/ru/blog/water-backup-vs-flood-insurance-florida).' },
    { type: 'h2', text: 'Подрядчики, публичные адджастеры и что вы подписываете' },
    { type: 'ul', items: [
      'По жилым полисам, выданным 1 января 2023 года и позже, **нельзя переуступить** подрядчику право на страховую выплату; такая переуступка недействительна ([ст. 627.7152(13)](' + S.s7152 + ')).',
      'Подрядчик не вправе предлагать подарок, деньги, отказ от франшизы или что-либо ценное за осмотр крыши или за подачу заявления по крыше ([ст. 489.147](' + S.s147 + ')). Договор на крышу, подписанный в течение 180 дней после объявления чрезвычайного положения в вашем районе, можно расторгнуть без штрафа в течение 10 дней или до официального начала работ, смотря что раньше.',
      'Гонорар **публичного адджастера** ограничен: 10% выплат по заявлениям, поданным в течение года после объявления чрезвычайного положения, и 20% в остальных случаях. Договор можно расторгнуть в течение 10 дней, а при объявленном ЧП — в течение 30 дней после убытка, если этот срок дольше ([ст. 626.854](' + S.s854 + ')).',
      'Департамент финансовых услуг Флориды (DFS) советует: после ущерба от шторма **ничего не подписывайте**, сначала позвоните на его горячую линию ([DFS](' + S.dfs + ')).',
    ] },
    { type: 'h2', text: 'Если вы не согласны с решением' },
    { type: 'p', text: 'Запросите письменное объяснение и сравните смету страховщика со сметой лицензированного подрядчика. Программа **медиации** DFS по жилой недвижимости проходит до оценки (appraisal) и до суда; случай становится допустимым для медиации после того, как страховщик выплатил или отказал ([ст. 627.7015](' + S.s7015 + ')). Стоимость медиации оплачивает страховщик, если вы не пропустите встречу; возьмите полис, фото, сметы и письма ([медиация DFS](' + S.dfsMed + ')). Горячая линия DFS для потребителей — **1-877-693-5236** (1-877-MY-FL-CFO), с понедельника по пятницу, с 8 до 17 по восточному времени.' },
    { type: 'h2', text: 'Используйте спокойные месяцы' },
    { type: 'p', text: 'Когда страховые случаи закрыты, снимите свежее видео каждой комнаты и до 1 июня проверьте [ураганную франшизу](/ru/florida-home-insurance-wind-deductible), варианты [страхования от наводнения](/ru/flood-insurance-homestead-fl) и наш [чек-лист к продлению полиса](/ru/blog/year-end-homeowners-renewal-checklist-florida).' },
    { type: 'callout', title: 'Вопросы по открытому случаю или покрытию?', text: 'Лицензированный агент разберёт с вами полис, франшизы и варианты страхования от наводнения на русском, английском или испанском. Подробнее на странице [страхование дома](/ru/homeowners-insurance-florida-city) и о нашем [русскоязычном агенте в Майами](/ru/russian-speaking-insurance-agent-miami); [запросите расчёт](/ru/quote) или позвоните (305) 859-3953. Это общая информация, а не юридическая консультация; покрытие зависит от условий вашего полиса.' },
  ],
  faq: [
    { q: 'Сезон закончился. Можно ли ещё заявить об ущербе от Isaias?', a: 'Да, если вы укладываетесь в сроки ст. 627.70132: уведомление о новом или повторно открытом случае — в течение 1 года после выхода урагана на сушу (9 октября 2026 года), о дополнительном — в течение 18 месяцев. Полис может требовать и более быстрого уведомления, поэтому не откладывайте.' },
    { q: 'Чем повторно открытое заявление отличается от дополнительного?', a: 'Повторно открытое — это закрытый случай, который вы просите открыть из-за новых расходов по уже заявленному ущербу. Дополнительное — это новые повреждения от того же риска или расходы, выявленные при ремонте по открытому случаю.' },
    { q: 'Подавать ли одно заявление за ветер и наводнение?', a: 'Как правило, нет. Ущерб от ветра идёт к страховщику дома, от наводнения — к страховщику по наводнению. По случаю NFIP FEMA просит прислать подтверждающие документы в течение 60 дней после наводнения или в срок, названный адджастером.' },
  ],
  sources: [
    { label: 'Законы Флориды, ст. 627.70132 (2026): уведомление о страховом случае по имуществу (на английском)', url: S.s70132 },
    { label: 'Законы Флориды, ст. 627.70131 (2026): обязанности страховщика (на английском)', url: S.s70131 },
    { label: 'Законы Флориды, ст. 627.7142 (2026): Homeowner Claims Bill of Rights (на английском)', url: S.s7142 },
    { label: 'Законы Флориды, ст. 627.7152 (2026): переуступка прав на выплату (на английском)', url: S.s7152 },
    { label: 'Законы Флориды, ст. 626.854 (2026): публичные адджастеры; уведомление об осмотре (на английском)', url: S.s854 },
    { label: 'Законы Флориды, ст. 489.147 (2026): запрещённые практики подрядчиков (на английском)', url: S.s147 },
    { label: 'Законы Флориды, ст. 627.7015 (2026): медиация по страхованию имущества (на английском)', url: S.s7015 },
    { label: 'Законы Флориды, ст. 95.11 (2026): сроки исковой давности (на английском)', url: S.s9511 },
    { label: 'Национальный центр ураганов: климатология тропических циклонов (на английском)', url: S.nhc },
    { label: 'Национальный центр ураганов: выход Isaias на сушу, 9 октября 2026 (на английском)', url: S.isaias },
    { label: 'NOAA NESDIS: итоги сезона ураганов 2026 (на английском)', url: S.noaa },
    { label: 'DFS Флориды: страховая помощь при штормах и стихийных бедствиях (на английском)', url: S.dfs },
    { label: 'DFS Флориды: медиация и нейтральная оценка (на английском)', url: S.dfsMed },
    { label: 'FEMA / FloodSmart: чек-лист страхового случая NFIP (на английском)', url: S.nfip },
    { label: 'FEMA / FloodSmart: как начать страховой случай по наводнению (на английском)', url: S.nfipStart },
    { label: 'FEMA / FloodSmart: основы страхования от наводнения (на английском)', url: S.fs },
    { label: 'Citizens Property Insurance Corporation: заявить о страховом случае (на английском)', url: S.citizens },
  ],
};

export const post: BlogPost = {
  slug: 'hurricane-claim-checklist-florida',
  datePublished: '2026-10-09',
  dateModified: '2026-11-28',
  translations: { en, es, ru },
};
