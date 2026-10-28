import type { BlogPost } from '../types';

// Refreshed 2026-10-28 (first published 2026-10-04). Facts checked 2026-10-28 against the current eCFR
// text (29 CFR part 1910 subparts D and I; last amended Dec. 17, 2019) and OSHA pages:
// - 1910.23(b)(8)-(13): ladders used only as designed; inspected before initial use in each work shift;
//   defective ladders tagged "Dangerous: Do Not Use" and removed; face the ladder; at least one hand;
//   no object or load that could cause loss of balance. (c)(2) stepladder spreader/locking device;
//   (c)(3) max intended load incl. tools; (c)(4) stable and level unless secured; (c)(6) not moved,
//   shifted or extended with an employee on it; (c)(7) passageways, doorways, driveways: secured or
//   barricaded (cones, caution tape); (c)(8) cap/top step not a step; (c)(9) slippery surfaces secured;
//   (c)(10) both side rails supported at the top; (c)(11) 3 ft above an upper landing; (c)(12) not
//   tied together for length unless designed for it; (c)(13) no boxes/barrels.
// - 1910.28(a)(2)(i): section does not apply to portable ladders; (a)(2)(ii) pre-work/post-work
//   inspection exemption; (b)(1)(i) unprotected side or edge 4 ft or more -> guardrail, safety net or
//   personal fall protection; (b)(1)(ii) residential roofs: fall protection plan (1926.502(k)) only when
//   the employer demonstrates infeasibility/greater hazard (presumption that it is feasible);
//   (b)(3)(i) holes incl. skylights 4 ft+ -> covers, guardrails, travel restraint or PFAS;
//   (b)(12)(ii) RDS -> personal fall arrest; (b)(13) low-slope roofs: <6 ft from edge -> guardrail,
//   net, travel restraint or PFAS; 6 to <15 ft -> same, designated area allowed if infrequent and
//   temporary; 15 ft+ -> same or designated area, none required if infrequent and temporary, plus a
//   work rule; (c) falling objects: head protection plus toeboards/screens/guardrails, canopy, or
//   barricading the area below.
// - 1910.21(b): low-slope roof = slope <= 4 in 12; RDS definition excludes industrial rope access.
// - 1910.140(c)(13) anchorages 5,000 lb per employee or designed by a qualified person with safety
//   factor 2; (c)(18) inspected before initial use during each workshift; (c)(21) prompt rescue;
//   (d)(3) body belts prohibited as part of a personal fall arrest system.
// - 1910.27(b): building owner written anchorage info (5,000 lb per employee, annual inspection,
//   certification as necessary and at least every 10 years); employer must obtain it first and keep it
//   for the job; 300 ft limit; separate independent PFAS; inspected each workshift; prompt rescue;
//   no hazardous weather; tools/squeegees/buckets secured; stabilization > 130 ft.
// - 1910.30(a) training by a qualified person before exposure for employees who use personal fall
//   protection; (b)(1) equipment training before use; (b)(3) RDS; (c) retraining; (d) in a manner
//   the employee understands.
// - 1904.39(a): fatality within 8 hours; in-patient hospitalization, amputation, loss of an eye within
//   24 hours; by phone to the Area Office, 1-800-321-OSHA, or online. 1904.1: 10-or-fewer partial
//   exemption from records, but 1904.39 reporting still applies.
// - OSHA WWS final rule FAQ: published Nov. 18, 2016, effective Jan. 17, 2017; covers window cleaning;
//   On-Site Consultation is separate from enforcement and does not result in penalties or citations.
// - s. 440.185(2), F.S. (2026): employer reports injury to its carrier within 7 days after actual
//   knowledge.
// Scope note: the window-cleaning landing page is for homes, storefronts and low-rise buildings with
// ladders and water-fed poles. Rope descent is background only; no suggestion that the agency places
// coverage for it.
const S = {
  l1910_23: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.23',
  l1910_27: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.27',
  l1910_28: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.28',
  l1910_30: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.30',
  l1910_140: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.140',
  l1904_1: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.1',
  l1904_39: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.39',
  faq: 'https://www.osha.gov/walking-working-surfaces/faq',
  s440185: 'https://www.flsenate.gov/Laws/Statutes/2026/440.185',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'osha-fall-protection-window-cleaners',
  datePublished: '2026-10-04',
  dateModified: '2026-10-28',
  translations: {
    en: {
      title: 'OSHA Fall Protection Basics for Window Cleaners: Ladders, Roof Edges and Rope Descent',
      metaTitle: 'OSHA Fall Protection for Window Cleaning Crews | M&K Agency',
      description: 'OSHA fall protection for window cleaning crews: ladders, the 4-foot edge, flat roofs, skylights, harnesses, training in your crew’s language and injury reports.',
      ogAlt: 'Flat illustration of a low-rise storefront with an extension ladder, safety cones, a water-fed pole and a work van',
      excerpt: 'Which OSHA rule applies on the ladder, on a flat roof and on a rope? A plain-language guide for small window cleaning businesses in South Miami-Dade, checked against the current federal regulations.',
      category: 'Window cleaning insurance',
      body: [
        { type: 'p', text: 'Most window cleaning in South Miami-Dade happens from a ladder or from the ground with a water-fed pole: homes in Homestead, storefronts along U.S. 1, two-story offices in Florida City. If you have employees, federal OSHA rules for general industry apply to that work. OSHA’s FAQ on the walking-working surfaces rule, in effect since January 17, 2017, lists window cleaning among the businesses it covers. We rechecked every rule below against the current regulation text in October 2026. It is a starting point, not a safety program.' },
        { type: 'h2', text: 'Which rule applies where' },
        { type: 'ul', items: [
          '**On a portable ladder:** the ladder section, [29 CFR 1910.23](' + S.l1910_23 + '). The general fall protection section, 1910.28, says it does not apply to portable ladders.',
          '**On a roof, balcony or ledge with an open edge 4 feet or more above a lower level:** [1910.28(b)(1)](' + S.l1910_28 + ').',
          '**On a flat (low-slope) roof:** the distance-from-the-edge rules in 1910.28(b)(13).',
          '**On a seat-and-rope rig:** the rope descent rules in [1910.27(b)](' + S.l1910_27 + '). It is a different line of work, covered briefly below.',
        ] },
        { type: 'h2', text: 'Ladders: 29 CFR 1910.23' },
        { type: 'p', text: 'For the ladders your crew uses every day, the employer must make sure that:' },
        { type: 'ul', items: [
          'Each ladder is **inspected before its first use in every shift**. A damaged one is tagged “Dangerous: Do Not Use” and taken out of service until it is repaired or replaced.',
          'Ladders stand on **stable, level surfaces** unless they are secured, and they are always secured on slippery surfaces.',
          'A ladder in a **doorway, passageway or driveway** is secured or guarded with a barricade such as cones or caution tape. That covers most storefront jobs.',
          'Both side rails are supported at the top, and a ladder used to reach a roof extends **at least 3 feet** above it.',
          'Nobody moves or extends a ladder with someone on it. A stepladder’s spreader is locked, and its top step or cap is never a step.',
          'The total load, including tools and buckets, stays within the ladder’s rating. Ladders are never tied together for length or set on boxes or barrels.',
          'Workers face the ladder, keep at least one hand on it, and don’t carry anything that could throw them off balance. Hoist the bucket up on a line instead.',
        ] },
        { type: 'h2', text: 'Off the ladder: roof edges, flat roofs and skylights' },
        { type: 'p', text: 'Once a worker steps onto a roof, balcony or ledge with an **unprotected edge 4 feet or more** above a lower level, the employer must provide guardrails, a safety net or a personal fall protection system ([1910.28(b)(1)](' + S.l1910_28 + ')). Many storefronts and small offices here have flat roofs, where the rules depend on distance from the edge:' },
        { type: 'ul', items: [
          '**Less than 6 feet** from the edge: guardrail, safety net, travel restraint or personal fall arrest.',
          '**6 to 15 feet:** the same options. A designated area marked by a warning line is allowed only for work that is both infrequent and temporary.',
          '**15 feet or more:** fall protection or a designated area. None is required if the work is infrequent and temporary, but the employer must enforce a rule that nobody goes within 15 feet of the edge without protection.',
        ] },
        { type: 'p', text: 'Skylights count as holes. If one is 4 feet or more above the floor below, workers need a cover, guardrail, travel restraint or fall arrest system. On a **home’s roof**, a written fall protection plan is allowed only if the employer can show that the standard systems are not feasible or would create a greater hazard, and OSHA presumes they are feasible.' },
        { type: 'h2', text: 'Harnesses and anchors: 1910.140' },
        { type: 'p', text: 'If you use personal fall protection, [1910.140](' + S.l1910_140 + ') sets the rules. Body belts are prohibited as part of a personal fall arrest system, so use a full body harness. Gear must be inspected before first use in each shift. Anchorages must hold at least 5,000 pounds per worker, or be designed by a qualified person with a safety factor of two. The employer must also plan for **prompt rescue** if someone falls.' },
        { type: 'h2', text: 'Falling tools and the sidewalk below' },
        { type: 'p', text: 'When workers are exposed to falling objects, 1910.28(c) requires head protection plus at least one control, such as toeboards or screens, keeping items back from the edge, or barricading the area below. At a busy storefront, coning off the sidewalk under your work protects your crew and the customers walking by.' },
        { type: 'h2', text: 'Rope descent systems: 1910.27' },
        { type: 'p', text: 'Taller buildings are often cleaned from a rope descent system, the seat-and-rope rig some call a bosun’s chair. Before anyone uses one, the **building owner** must give the employer written information that each anchorage was identified, tested, certified and maintained to hold at least 5,000 pounds per worker. It must be based on an annual inspection and certification at least every 10 years. Other rules include a 300-foot limit in most cases, a separate fall arrest system for each worker, tools secured by lanyard, and no work in storms or gusty wind.' },
        { type: 'p', text: 'This guide and our window cleaning page are written for ladder and pole work on homes, storefronts and low-rise buildings. If you are considering rope work, talk to your agent before you accept the job.' },
        { type: 'h2', text: 'Training your crew understands: 1910.30' },
        { type: 'p', text: 'Workers who use personal fall protection must be trained by a qualified person before exposure to a fall hazard. Every worker must be trained on the equipment, ladders included, before using it ([1910.30](' + S.l1910_30 + ')). Retraining is required when the job, the equipment or a worker’s skills show the old training no longer works. Training must also be given **in a manner each employee understands**. For many crews in South Miami-Dade, that means Spanish or Russian. Keep a short record of who was trained, when and on what.' },
        { type: 'h2', text: 'If someone gets hurt' },
        { type: 'ul', items: [
          'Report a work-related death to OSHA **within 8 hours**, and an in-patient hospitalization, amputation or loss of an eye **within 24 hours**. Call the nearest OSHA Area Office or 1-800-321-OSHA, or report online ([1904.39](' + S.l1904_39 + ')). This applies even to companies with 10 or fewer employees ([1904.1](' + S.l1904_1 + ')).',
          'Under Florida law, the employer must report a work injury to its workers’ comp insurer **within 7 days** after learning of it ([s. 440.185(2)](' + S.s440185 + ')).',
        ] },
        { type: 'p', text: 'Want a second opinion before anything happens? OSHA’s On-Site Consultation Program is confidential, separate from enforcement, and does not result in penalties or citations ([OSHA FAQ](' + S.faq + ')).' },
        { type: 'h2', text: 'Where insurance fits' },
        { type: 'p', text: 'A fall is usually a workers’ comp question, and sometimes a liability question: a ladder that slides into an awning, a squeegee that drops near a shopper. Start with our [window cleaning insurance page](/en/window-cleaning-insurance-florida) and our [general liability overview](/en/insurance/general-liability). If you work with extra hands, read [employee or 1099 for workers’ comp](/en/blog/helper-employee-or-1099-florida-workers-comp). If a property manager wants proof before your first visit, see our guide to [certificates of insurance](/en/blog/certificate-of-insurance-contractors-florida). Coverage always depends on your policy’s terms.' },
        { type: 'callout', title: 'Reviewing your coverage?', text: '[Request a quote](/en/quote) or call [(305) 859-3953](' + TEL + '). Tell us how tall your regular jobs are and what equipment you use. A licensed agent will go over it with you in English, Spanish or Russian at our Florida City office (Monday–Friday 9–6, Saturday by appointment). This is general information, not legal or safety advice; check the regulations or OSHA for your situation.' },
      ],
      faq: [
        { q: 'At what height does OSHA require fall protection for window cleaners?', a: 'Under 29 CFR 1910.28, at an unprotected side or edge 4 feet or more above a lower level, such as a roof edge or balcony. Low-slope roofs have extra rules based on distance from the edge. Portable ladders follow their own section, 1910.23.' },
        { q: 'Do my workers need a harness on a portable ladder?', a: 'Section 1910.28 does not apply to portable ladders. The ladder rules in 1910.23 apply instead: inspection each shift, stable footing, 3 feet above a landing, facing the ladder with one hand on it, and the rest of the list above.' },
        { q: 'Can I train my crew in Spanish or Russian?', a: 'Yes. Under 1910.30(d), training must be given in a manner each employee understands, so train in the language your crew actually speaks.' },
      ],
      sources: [
        { label: '29 CFR 1910.23: ladders (OSHA)', url: S.l1910_23 },
        { label: '29 CFR 1910.28: duty to have fall protection and falling object protection (OSHA)', url: S.l1910_28 },
        { label: '29 CFR 1910.27: scaffolds and rope descent systems (OSHA)', url: S.l1910_27 },
        { label: '29 CFR 1910.30: training requirements (OSHA)', url: S.l1910_30 },
        { label: '29 CFR 1910.140: personal fall protection systems (OSHA)', url: S.l1910_140 },
        { label: '29 CFR 1904.39: reporting fatalities and severe injuries (OSHA)', url: S.l1904_39 },
        { label: '29 CFR 1904.1: small-employer recordkeeping exemption (OSHA)', url: S.l1904_1 },
        { label: 'OSHA: Walking-Working Surfaces final rule FAQ', url: S.faq },
        { label: 'Florida Statutes s. 440.185 (2026): notice of injury', url: S.s440185 },
      ],
    },
    es: {
      title: 'Protección contra caídas de OSHA para limpiadores de ventanas: escaleras, bordes de techo y descenso con cuerdas',
      metaTitle: 'OSHA y caídas en la limpieza de ventanas | M&K Agency',
      description: 'Reglas de OSHA contra caídas para cuadrillas de limpieza de ventanas: escaleras, bordes de 4 pies, techos planos, tragaluces, arneses, capacitación y reportes.',
      ogAlt: 'Ilustración de un local comercial de poca altura con una escalera extensible, conos de seguridad, un poste de agua y una van de trabajo',
      excerpt: '¿Qué regla de OSHA aplica en la escalera, en un techo plano y en una silla con cuerdas? Una guía clara para pequeños negocios de limpieza de ventanas en el sur de Miami-Dade, revisada contra el texto federal vigente.',
      category: 'Seguro para limpieza de ventanas',
      body: [
        { type: 'p', text: 'En el sur de Miami-Dade casi todas las ventanas se limpian en escalera o desde el piso con un poste de agua: casas en Homestead, locales sobre la U.S. 1, oficinas bajas en Florida City. Si tiene empleados, aplican las reglas federales de OSHA para la industria general; las preguntas frecuentes de OSHA sobre la norma de superficies de trabajo, vigente desde el 17 de enero de 2017, nombran la limpieza de ventanas. Revisamos cada punto con el texto vigente en octubre de 2026; es un punto de partida, no un programa de seguridad.' },
        { type: 'h2', text: 'Qué norma aplica en cada caso' },
        { type: 'ul', items: [
          '**En una escalera portátil:** la sección de escaleras, [29 CFR 1910.23](' + S.l1910_23 + '). La sección general de caídas, la 1910.28, no aplica a escaleras portátiles.',
          '**En un techo, balcón o cornisa con un borde abierto a 4 pies o más del nivel de abajo:** la [1910.28(b)(1)](' + S.l1910_28 + ').',
          '**En un techo plano (de poca pendiente):** las reglas por distancia al borde de la 1910.28(b)(13).',
          '**En una silla colgante con cuerdas:** las reglas de descenso con cuerdas de la [1910.27(b)](' + S.l1910_27 + '). Es otro tipo de trabajo (ver abajo).',
        ] },
        { type: 'h2', text: 'Escaleras: 29 CFR 1910.23' },
        { type: 'p', text: 'El empleador debe asegurarse de que:' },
        { type: 'ul', items: [
          'Cada escalera se **revise antes del primer uso en cada turno**; si está dañada, se marca “Dangerous: Do Not Use” y se saca de servicio hasta repararla o cambiarla.',
          'Se apoye en **superficies estables y niveladas**, salvo que esté asegurada, y se asegure siempre en pisos resbalosos.',
          'En una **puerta, pasillo o entrada de carros**, se asegure o se proteja con conos o cinta, algo común frente a las tiendas.',
          'Los dos rieles se apoyen arriba y, para subir a un techo, la escalera sobresalga **al menos 3 pies**.',
          'Nadie la mueva ni la extienda con alguien arriba; la de tijera va con los separadores trabados y no se pisa el último escalón ni la tapa.',
          'La carga, con herramientas y cubos, no pase de su capacidad, y nunca se amarren escaleras para ganar largo ni se monten sobre cajas o barriles.',
          'El trabajador suba de frente, con una mano en la escalera y sin cargar nada que lo desbalancee. El cubo, mejor con una cuerda.',
        ] },
        { type: 'h2', text: 'Fuera de la escalera: bordes, techos planos y tragaluces' },
        { type: 'p', text: 'Cuando el trabajador pasa a un techo, balcón o cornisa con un **borde sin protección a 4 pies o más** sobre el nivel de abajo, el empleador debe proveer barandas, red de seguridad o un sistema personal de protección contra caídas ([1910.28(b)(1)](' + S.l1910_28 + ')). En los techos planos, comunes en locales de la zona, todo depende de la distancia al borde:' },
        { type: 'ul', items: [
          '**A menos de 6 pies** del borde: baranda, red, sistema de restricción de desplazamiento o detención de caídas.',
          '**De 6 a 15 pies:** las mismas opciones, o un área delimitada con línea de advertencia si el trabajo es poco frecuente y temporal.',
          '**A 15 pies o más:** protección o área delimitada, o nada si el trabajo es poco frecuente y temporal, pero con una regla obligatoria: nadie a menos de 15 pies del borde sin protección.',
        ] },
        { type: 'p', text: 'Los tragaluces cuentan como huecos: a 4 pies o más del piso de abajo, necesitan tapa, baranda, restricción o detención de caídas. En el **techo de una casa**, un plan escrito en lugar de esos sistemas solo vale si el empleador demuestra que no son factibles o crean más riesgo, y OSHA presume que sí lo son.' },
        { type: 'h2', text: 'Arneses y anclajes: 1910.140' },
        { type: 'p', text: 'Aquí manda la [1910.140](' + S.l1910_140 + '). El cinturón está prohibido en un sistema de detención de caídas: se usa arnés de cuerpo completo. El equipo se revisa antes del primer uso en cada turno. Los anclajes deben aguantar al menos 5,000 libras por trabajador, o estar diseñados por una persona calificada con factor de seguridad de dos. Hay que prever un **rescate rápido**.' },
        { type: 'h2', text: 'Herramientas que caen y la acera de abajo' },
        { type: 'p', text: 'Ante el riesgo de caída de objetos, la 1910.28(c) exige casco y al menos una medida más: rodapiés o mallas, mantener las cosas lejos del borde o acordonar el área de abajo. Frente a una tienda, los conos en la acera protegen a su gente y a los clientes.' },
        { type: 'h2', text: 'Descenso con cuerdas: 1910.27' },
        { type: 'p', text: 'Los edificios altos se limpian a menudo con un sistema de descenso con cuerdas, la silla colgante o bosun’s chair. Antes de usarlo, el **dueño del edificio** debe darle al empleador información por escrito de que cada anclaje fue identificado, probado, certificado y mantenido para aguantar al menos 5,000 libras por trabajador, con inspección anual y certificación por lo menos cada 10 años. Por lo general, máximo 300 pies, un sistema de detención propio para cada trabajador, herramientas amarradas y nada de trabajo con tormenta o ráfagas.' },
        { type: 'p', text: 'Esta guía y nuestra página de limpieza de ventanas están pensadas para trabajo con escalera y poste en casas, tiendas y edificios bajos. Si piensa hacer trabajo con cuerdas, hable con su agente antes de aceptar el contrato.' },
        { type: 'h2', text: 'Capacitación que su gente entienda: 1910.30' },
        { type: 'p', text: 'Quien usa protección personal debe ser capacitado por una persona calificada antes de exponerse al riesgo, y todo trabajador debe aprender a usar el equipo, escaleras incluidas, antes de usarlo ([1910.30](' + S.l1910_30 + ')). Se vuelve a capacitar si cambian el trabajo o el equipo, o si la persona ya no domina lo aprendido. Y la capacitación debe darse **de manera que cada empleado la entienda**: en muchas cuadrillas de la zona, en español o en ruso. Anote quién, cuándo y en qué se capacitó.' },
        { type: 'h2', text: 'Si alguien se lastima' },
        { type: 'ul', items: [
          'Una muerte relacionada con el trabajo se reporta a OSHA **dentro de 8 horas**; una hospitalización, amputación o pérdida de un ojo, **dentro de 24 horas**. Llame a la oficina de área de OSHA más cercana o al 1-800-321-OSHA, o repórtelo en línea ([1904.39](' + S.l1904_39 + ')). Esto aplica aunque la empresa tenga 10 empleados o menos ([1904.1](' + S.l1904_1 + ')).',
          'En Florida, el empleador reporta la lesión a su aseguradora de workers’ comp **dentro de 7 días** de enterarse ([s. 440.185(2)](' + S.s440185 + ')).',
        ] },
        { type: 'p', text: 'El programa de consultoría en el sitio de OSHA es confidencial, separado de la fiscalización y no genera multas ni citaciones ([preguntas de OSHA](' + S.faq + ')).' },
        { type: 'h2', text: 'Dónde entra el seguro' },
        { type: 'p', text: 'Una caída suele ser tema de workers’ comp y, a veces, de responsabilidad civil: una escalera que se resbala contra un toldo, un limpiavidrios que cae cerca de un cliente. Empiece por nuestra [página de seguro para limpieza de ventanas](/es/window-cleaning-insurance-florida) y la de [responsabilidad civil general](/es/insurance/general-liability). Con ayudantes, lea [¿empleado o 1099 para el workers’ comp?](/es/blog/helper-employee-or-1099-florida-workers-comp). Si un administrador le pide prueba de seguro, vea la guía del [certificado de seguro (COI)](/es/blog/certificate-of-insurance-contractors-florida). La cobertura siempre depende de los términos de su póliza.' },
        { type: 'callout', title: '¿Va a revisar su seguro?', text: '[Pida una cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + '). Díganos a qué altura trabaja y con qué equipo. Un agente con licencia lo revisa con usted en español, inglés o ruso en nuestra oficina de Florida City (lunes a viernes de 9 a 6, sábados con cita). Esto es información general, no asesoría legal ni de seguridad; consulte las normas o a OSHA para su caso.' },
      ],
      faq: [
        { q: '¿A qué altura exige OSHA protección contra caídas para limpiadores de ventanas?', a: 'Según la 29 CFR 1910.28, en un lado o borde sin protección a 4 pies o más del nivel de abajo, como el borde de un techo o un balcón. Los techos planos tienen reglas extra según la distancia al borde. Las escaleras portátiles siguen su propia sección, la 1910.23.' },
        { q: '¿Mis trabajadores necesitan arnés en una escalera portátil?', a: 'No por la 1910.28, que no aplica a escaleras portátiles. Rige la 1910.23: revisión en cada turno, base firme, 3 pies sobre el techo, subir de frente con una mano en la escalera y el resto de la lista.' },
        { q: '¿Puedo capacitar a mi gente en español o en ruso?', a: 'Sí. La 1910.30(d) exige capacitar de manera que cada empleado entienda: use el idioma que su cuadrilla habla de verdad.' },
      ],
      sources: [
        { label: '29 CFR 1910.23: escaleras (OSHA, en inglés)', url: S.l1910_23 },
        { label: '29 CFR 1910.28: protección contra caídas de personas y objetos (OSHA, en inglés)', url: S.l1910_28 },
        { label: '29 CFR 1910.27: andamios y descenso con cuerdas (OSHA, en inglés)', url: S.l1910_27 },
        { label: '29 CFR 1910.30: capacitación (OSHA, en inglés)', url: S.l1910_30 },
        { label: '29 CFR 1910.140: sistemas personales de protección contra caídas (OSHA, en inglés)', url: S.l1910_140 },
        { label: '29 CFR 1904.39: reporte de muertes y lesiones graves (OSHA, en inglés)', url: S.l1904_39 },
        { label: '29 CFR 1904.1: exención de registros para empresas pequeñas (OSHA, en inglés)', url: S.l1904_1 },
        { label: 'OSHA: preguntas frecuentes sobre la norma de superficies de trabajo (en inglés)', url: S.faq },
        { label: 'Estatutos de Florida, s. 440.185 (2026): aviso de lesión (en inglés)', url: S.s440185 },
      ],
    },
    ru: {
      title: 'Защита от падений по правилам OSHA для мойщиков окон: лестницы, края крыш и спуск на верёвках',
      metaTitle: 'OSHA и защита от падений при мойке окон | M&K Agency',
      description: 'Правила OSHA для бригад по мойке окон: лестницы, край высотой 4 фута, плоские крыши и световые люки, страховочные системы, обучение и сообщения о травмах.',
      ogAlt: 'Иллюстрация: невысокое здание с магазином, приставная лестница, конусы, телескопическая щётка с подачей воды и рабочий фургон',
      excerpt: 'Какое правило OSHA действует на лестнице, на плоской крыше и на верёвке? Понятный разбор для небольших компаний по мойке окон на юге Майами-Дейд, сверенный с действующим текстом федеральных норм.',
      category: 'Страхование для мойки окон',
      body: [
        { type: 'p', text: 'Почти все окна на юге Майами-Дейд моют со стремянки или с земли телескопической щёткой с подачей воды: частные дома в Хомстеде, магазины вдоль U.S. 1, двухэтажные офисы во Флорида-Сити. Если у вас есть сотрудники, на эту работу распространяются федеральные правила OSHA для general industry. В FAQ OSHA по стандарту о рабочих поверхностях, который действует с 17 января 2017 года, мойка окон прямо названа среди охваченных видов бизнеса. Каждое правило ниже мы сверили с актуальным текстом норм в октябре 2026 года. Это отправная точка, а не программа безопасности.' },
        { type: 'h2', text: 'Какая норма где действует' },
        { type: 'ul', items: [
          '**На переносной лестнице:** раздел о лестницах, [29 CFR 1910.23](' + S.l1910_23 + '). Общий раздел о защите от падений, 1910.28, на переносные лестницы не распространяется.',
          '**На крыше, балконе или карнизе с открытым краем на высоте 4 фута и более:** [1910.28(b)(1)](' + S.l1910_28 + ').',
          '**На плоской крыше (с малым уклоном):** правила по расстоянию до края в 1910.28(b)(13).',
          '**На подвесном сиденье с верёвками:** правила о системах спуска в [1910.27(b)](' + S.l1910_27 + '). Это другой вид работ, о нём коротко ниже.',
        ] },
        { type: 'h2', text: 'Лестницы: 29 CFR 1910.23' },
        { type: 'p', text: 'По лестницам, с которыми бригада работает каждый день, работодатель обязан обеспечить следующее:' },
        { type: 'ul', items: [
          'Каждую лестницу **осматривают перед первым использованием в каждую смену**. Повреждённую помечают «Dangerous: Do Not Use» и выводят из работы до ремонта или замены.',
          'Лестница стоит на **устойчивой ровной поверхности**, если она не закреплена, а на скользком полу её закрепляют всегда.',
          'Лестницу в **дверном проёме, проходе или на въезде** закрепляют или ограждают конусами либо лентой. Это почти любой заказ у витрины магазина.',
          'Обе тетивы опираются наверху, а лестница, по которой поднимаются на крышу, выступает над ней **минимум на 3 фута**.',
          'Никто не переставляет и не раздвигает лестницу, пока на ней человек. Распорки стремянки зафиксированы, а верхнюю ступень или площадку не используют как ступеньку.',
          'Общий вес вместе с инструментом и вёдрами не превышает допустимую нагрузку. Лестницы не связывают друг с другом ради длины и не ставят на ящики или бочки.',
          'Работник поднимается лицом к лестнице, держится хотя бы одной рукой и не несёт ничего, что может нарушить равновесие. Ведро лучше поднять на верёвке.',
        ] },
        { type: 'h2', text: 'Когда сошли с лестницы: края, плоские крыши, световые люки' },
        { type: 'p', text: 'Если работник выходит на крышу, балкон или карниз с **незащищённым краем на высоте 4 фута и более**, работодатель обязан обеспечить ограждение, страховочную сетку или персональную систему защиты от падения ([1910.28(b)(1)](' + S.l1910_28 + ')). У многих магазинов и небольших офисов в нашем районе плоские крыши, и там всё зависит от расстояния до края:' },
        { type: 'ul', items: [
          '**Ближе 6 футов** к краю: ограждение, сетка, удерживающая система (travel restraint) или система остановки падения.',
          '**От 6 до 15 футов:** те же варианты. Зона, отмеченная предупредительной линией, допускается только для редких и кратковременных работ.',
          '**15 футов и дальше:** защита или отмеченная зона. Для редких и кратковременных работ защита не обязательна, но работодатель должен ввести и соблюдать правило: без защиты ближе 15 футов к краю не подходить.',
        ] },
        { type: 'p', text: 'Световой люк считается проёмом. Если под ним 4 фута и более, нужна крышка, ограждение, удерживающая система или система остановки падения. На **крыше частного дома** письменный план защиты от падений допускается, только если работодатель докажет, что обычные системы применить невозможно или опаснее, а OSHA исходит из того, что применить их можно.' },
        { type: 'h2', text: 'Страховочные системы и анкеры: 1910.140' },
        { type: 'p', text: 'Если вы пользуетесь персональными системами защиты, действует [1910.140](' + S.l1910_140 + '). Поясной ремень в составе системы остановки падения запрещён, поэтому нужна полная страховочная привязь. Снаряжение осматривают перед первым использованием в каждую смену. Анкер должен выдерживать не менее 5,000 фунтов на работника либо быть рассчитан квалифицированным специалистом с двукратным запасом прочности. Работодатель также обязан заранее продумать **быструю эвакуацию** на случай падения.' },
        { type: 'h2', text: 'Падающий инструмент и тротуар внизу' },
        { type: 'p', text: 'Если есть риск падения предметов, 1910.28(c) требует каски и хотя бы одну меру сверху: бортики или сетки, держать вещи подальше от края или оградить зону внизу. У оживлённого магазина конусы на тротуаре под местом работы защищают и вашу бригаду, и покупателей.' },
        { type: 'h2', text: 'Спуск на верёвках: 1910.27' },
        { type: 'p', text: 'Высокие здания часто моют с системы спуска на верёвках — подвесного сиденья, которое называют bosun’s chair или «люлькой». До начала работ **владелец здания** должен письменно сообщить работодателю, что каждый анкер определён, испытан, сертифицирован, обслуживается и выдерживает не менее 5,000 фунтов на работника, с ежегодным осмотром и сертификацией не реже раза в 10 лет. Кроме того, как правило, спуск не выше 300 футов, у каждого своя независимая страховка, инструмент пристёгнут, а в грозу и при порывистом ветре работать нельзя.' },
        { type: 'p', text: 'Эта статья и наша страница по мойке окон рассчитаны на работу с лестниц и щёток в частных домах, магазинах и невысоких зданиях. Если думаете о работе на верёвках, поговорите с агентом до того, как возьмёте заказ.' },
        { type: 'h2', text: 'Обучение на понятном языке: 1910.30' },
        { type: 'p', text: 'Тех, кто пользуется персональной защитой от падений, до начала работ на высоте обучает квалифицированный специалист. Каждого работника нужно научить обращаться с оборудованием, включая лестницы, до того как он начнёт им пользоваться ([1910.30](' + S.l1910_30 + ')). Переобучение нужно, когда меняются работы или оборудование либо видно, что человек уже не владеет навыками. И обучение должно проходить **так, чтобы каждый работник его понял**: во многих бригадах на юге Майами-Дейд это значит по-испански или по-русски. Записывайте, кто, когда и чему обучен.' },
        { type: 'h2', text: 'Если кто-то пострадал' },
        { type: 'ul', items: [
          'О гибели работника на производстве нужно сообщить в OSHA **в течение 8 часов**, о госпитализации, ампутации или потере глаза — **в течение 24 часов**: в ближайший офис OSHA, по номеру 1-800-321-OSHA или онлайн ([1904.39](' + S.l1904_39 + ')). Это касается и компаний, где 10 сотрудников или меньше ([1904.1](' + S.l1904_1 + ')).',
          'По закону Флориды работодатель сообщает о травме своему страховщику по workers’ comp **в течение 7 дней** после того, как узнал о ней ([s. 440.185(2)](' + S.s440185 + ')).',
        ] },
        { type: 'p', text: 'Хотите, чтобы кто-то посмотрел со стороны, пока ничего не случилось? Программа выездных консультаций OSHA (On-Site Consultation) конфиденциальна, отделена от проверок и не ведёт к штрафам и предписаниям ([FAQ OSHA](' + S.faq + ')).' },
        { type: 'h2', text: 'При чём здесь страховка' },
        { type: 'p', text: 'Падение — это обычно вопрос workers’ comp для вашего сотрудника, а иногда и вопрос ответственности: лестница съехала на навес, скребок упал рядом с покупателем. Начните с нашей [страницы для мойщиков окон](/ru/window-cleaning-insurance-florida) и обзора [general liability](/ru/insurance/general-liability). Если работаете с помощниками, прочитайте статью [работник или 1099 для workers’ comp](/ru/blog/helper-employee-or-1099-florida-workers-comp). Если управляющая компания просит подтверждение страховки до первого визита, загляните в наш разбор [сертификата страхования (COI)](/ru/blog/certificate-of-insurance-contractors-florida). Покрытие всегда зависит от условий вашего полиса.' },
        { type: 'callout', title: 'Пересматриваете страховку?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните по номеру [(305) 859-3953](' + TEL + '). Расскажите, на какой высоте обычно работаете и каким оборудованием. Лицензированный агент разберёт всё с вами на русском, английском или испанском в нашем офисе во Флорида-Сити (понедельник–пятница с 9 до 6, суббота по записи). Это общая информация, а не юридическая консультация и не инструкция по технике безопасности; для своей ситуации сверяйтесь с нормами или с OSHA.' },
      ],
      faq: [
        { q: 'С какой высоты OSHA требует защиту от падения для мойщиков окон?', a: 'По 29 CFR 1910.28 — у незащищённого края на высоте 4 фута и более над нижним уровнем, например у края крыши или балкона. Для плоских крыш есть дополнительные правила по расстоянию до края. Переносные лестницы регулирует отдельный раздел, 1910.23.' },
        { q: 'Нужна ли страховочная привязь на переносной лестнице?', a: 'Раздел 1910.28 на переносные лестницы не распространяется. Действуют правила 1910.23: осмотр каждую смену, устойчивая опора, 3 фута над площадкой, подъём лицом к лестнице с опорой на руку и остальное из списка выше.' },
        { q: 'Можно ли обучать бригаду по-испански или по-русски?', a: 'Да. По 1910.30(d) обучение должно проходить так, чтобы каждый работник его понял, поэтому обучайте на том языке, на котором бригада действительно говорит.' },
      ],
      sources: [
        { label: '29 CFR 1910.23: лестницы (OSHA, на английском)', url: S.l1910_23 },
        { label: '29 CFR 1910.28: защита от падения людей и предметов (OSHA, на английском)', url: S.l1910_28 },
        { label: '29 CFR 1910.27: леса и системы спуска на верёвках (OSHA, на английском)', url: S.l1910_27 },
        { label: '29 CFR 1910.30: требования к обучению (OSHA, на английском)', url: S.l1910_30 },
        { label: '29 CFR 1910.140: персональные системы защиты от падений (OSHA, на английском)', url: S.l1910_140 },
        { label: '29 CFR 1904.39: сообщения о гибели и тяжёлых травмах (OSHA, на английском)', url: S.l1904_39 },
        { label: '29 CFR 1904.1: исключение для небольших работодателей (OSHA, на английском)', url: S.l1904_1 },
        { label: 'OSHA: FAQ по стандарту о рабочих поверхностях (на английском)', url: S.faq },
        { label: 'Законы Флориды, s. 440.185 (2026): уведомление о травме (на английском)', url: S.s440185 },
      ],
    },
  },
};
