import type { BlogPost } from '../types';

// Refreshed 2026-11-17 (ET) (content plan 2026-11, row 2026-11-17): rewritten around the April 1, 2026
// edition of Form OIR-B1-1802 and Spanish (ES) added. datePublished 2026-10-03 kept. Facts checked
// 2026-11-17 against official sources (raw copies in /workspace/windmit/; notes in
// /workspace/articles/wind-mitigation-inspection-florida_sources.md):
// - OIR Wind Mitigation Resources page: OIR-B1-1802 completed by an authorized inspector; new edition effective
//   Apr 1, 2026 after the June 2024 ARA Residential Wind-Loss Mitigation Study; s. 627.0629 review every 5 years;
//   form valid up to 5 years absent material changes or inaccuracies; verify inspector under s. 627.711(2)(a).
// - Form OIR-B1-1802 (Rev. 04/26), adopted by Rule 69O-170.0155, F.A.C.: questions 1-9 (building code incl.
//   SFBC-94 for the HVHZ = Miami-Dade/Broward; region by ASCE 7-22 design wind speed; roof slope 6:12; roof
//   covering with permit date or FBC/Miami-Dade product approval + year; roof deck attachment (weakest); roof-to-wall
//   (weakest: toenails, clips, single wraps, double wraps, structural); roof geometry (hip <=10% non-hip perimeter);
//   sealed roof deck/SWR (standard underlayment or hot-mopped felt does not qualify); opening protection (weakest,
//   all openings incl. garage doors and skylights; damaged openings = level Z; openings needing replacement don't
//   qualify for wind mitigation rate differentials)); at least one photo or document per attribute in Q2-9;
//   insurer may ask additional questions; inspector and homeowner signatures (homeowner certifies inspection and ID);
//   "maintain a copy of this form ... with the insurance policy".
// - s. 627.711 (2026, Online Sunshine): (1) notice at issuance and each renewal using an OIR form; (2)(a) uniform
//   form used by all insurers; inspector list; (3) personal inspection, direct-employee exception for 471.015/489.111;
//   (4)-(5) misconduct/discipline; (6) no referral compensation between inspectors and insurance agencies/agents;
//   (8) knowingly false form = first-degree misdemeanor; (9) insurer may require independent verification at its
//   expense; Citizens QA-program exception.
// - s. 215.5586 (2026): MSFH subject to appropriation; inspection eligibility (single-family on own parcel, detached
//   or attached <=3 stories, site-built, owner-occupied, homestead exemption); grant criteria (insured value
//   <=$700,000, program inspection within 24 months, built before Jan 1, 2008, low- or moderate-income per
//   s. 420.0004); $2 state per $1, state max $10,000; low-income up to $10,000 without match.
// - MSFH Support: "What is a Hurricane Mitigation Inspection?" (Jul 9): paid for by the program; does not look at
//   age or condition; inspection approval is not grant approval. "Can I use a previously completed inspection?" (Mar 3):
//   no. "Who is eligible for a grant?" (Jul 9): don't start work before grant approval.
// - MSFH Support "Program Modernization FAQs" (Nov 6, 2026) + mysafeflhome.com notice (checked Nov 17): portal
//   temporarily unavailable from Nov 10; enhanced portal anticipated Dec 4.
// No private insurers named. No premium outcome, percentage or dollar promise.
const LEG = 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=';
const S = {
  oir: 'https://floir.gov/consumers/wind-mitigation-resources',
  form: 'https://floir.gov/docs-sf/property-casualty-libraries/product-review/all-forms/form-oir-1802-adopted-version-(no-watermark).pdf?Status=Master',
  s627711: LEG + '0600-0699/0627/Sections/0627.711.html',
  s2155586: LEG + '0200-0299/0215/Sections/0215.5586.html',
  msfhInsp: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000367649-what-is-a-hurricane-mitigation-inspection-',
  msfhGrant: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000024911-who-is-eligible-for-a-hurricane-mitigation-grant-',
  msfhModern: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000390446-msfh-program-modernization-faqs',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'wind-mitigation-inspection-florida',
  datePublished: '2026-10-03',
  dateModified: '2026-11-17',
  translations: {
    en: {
      title: 'Wind Mitigation Inspection in Florida: The Form and What Inspectors Document',
      metaTitle: 'Wind Mitigation Inspection in Florida (OIR-B1-1802) | M&K Agency',
      description: 'Florida’s wind mitigation form OIR-B1-1802, revised April 1, 2026: the nine questions inspectors answer, who may sign it, and how long it stays valid.',
      ogAlt: 'Illustration of a Florida house with a hip roof, metal roof-to-wall straps and storm shutters, a clipboard with checkboxes and a magnifying glass',
      excerpt: 'The wind mitigation form records how your roof is attached, how openings are protected and which building code applied. Here is what the 2026 edition asks and who may sign it.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'In South Miami-Dade, almost every [homeowners insurance](/en/homeowners-insurance-florida-city) conversation comes back to wind. A **wind mitigation inspection** is how the wind-resistant features of a house get written down in one place: the state’s **Uniform Mitigation Verification Inspection Form, OIR-B1-1802**. Every insurer must use this same form when a policyholder submits it for wind rating ([s. 627.711](' + S.s627711 + ')).' },
        { type: 'p', text: 'Below: the current edition question by question, who may sign it, how long it lasts and where My Safe Florida Home fits. We don’t predict what a form does to any premium; that depends on the insurer’s approved rating rules and on what the inspector finds.' },

        { type: 'h2', text: 'A new edition took effect April 1, 2026' },
        { type: 'p', text: 'Section 627.0629 requires the Office of Insurance Regulation (OIR) to review wind-loss mitigation features every five years. After a June 2024 Residential Wind-Loss Mitigation Study, OIR updated Form OIR-B1-1802 **effective April 1, 2026** ([OIR](' + S.oir + ')). The form is adopted by Rule 69O-170.0155, F.A.C., and the revision is marked “Rev. 04/26” at the bottom of each page.' },
        { type: 'p', text: 'OIR states that a completed form is **valid for up to five years**, provided no material changes are made to the structure and no inaccuracies are found on the form. After a new roof, windows or garage door, ask whether the form still describes the house.' },

        { type: 'h2', text: 'The nine questions on the form' },
        { type: 'p', text: 'The 2026 form is six pages. The inspector answers these questions ([Form OIR-B1-1802](' + S.form + ')):' },
        { type: 'ol', items: [
          '**Building code.** Which Florida Building Code edition was in force when the original permit was applied for (2001/2004, or 2007 and later). In the **High-Velocity Hurricane Zone**, which the form defines as Miami-Dade and Broward, the South Florida Building Code of 1994 also counts.',
          '**Region.** The home’s design wind speed under ASCE 7-22: HVHZ, Region 1 (140 mph or more), Region 2 (130–139 mph) or Region 3 (under 130 mph).',
          '**Roof slope.** Whether the main roof is steeper or flatter than 6:12.',
          '**Roof covering.** Each covering type (shingle, tile, metal, membrane and so on), with a permit application date or a Florida or Miami-Dade product approval number, plus the year it was installed or replaced.',
          '**Roof deck attachment.** The weakest way the roof sheathing is fastened: sheathing thickness, nail size and spacing, a concrete deck, or “no attic access.”',
          '**Roof-to-wall attachment.** The weakest connection between rafters or trusses and the walls: toenails, clips, single wraps, double wraps or structural anchors.',
          '**Roof geometry.** Hip roof (non-hip features no more than 10% of the roof perimeter), flat roof (buildings of five or more units) or other.',
          '**Secondary water resistance.** Whether a sealed roof deck protects against water if the covering blows off. Standard underlayment or hot-mopped felt does not qualify.',
          '**Opening protection.** The weakest wind-borne debris protection across all windows, entry doors, sliding glass doors, skylights and garage doors, from verified impact-rated products down to none.',
        ] },
        { type: 'p', text: 'Every feature marked in questions 2 through 9 needs **at least one photo or document** attached to the form. Damaged openings that need repair are recorded as their own category, and the form says a house with openings that need replacement does not qualify for wind mitigation rate differentials, whatever its other features. The insurer may ask additional questions.' },
        { type: 'p', text: 'The last page carries two signatures. The inspector certifies the inspection, and the homeowner certifies that the named inspector (or an authorized employee) inspected the home and showed identification. The form tells you to keep a copy with your insurance policy.' },

        { type: 'h2', text: 'Who may sign it' },
        { type: 'p', text: 'Under s. 627.711(2)(a), an insurer must accept a form signed by:' },
        { type: 'ul', items: [
          'A home inspector licensed under s. 468.8314 who completed at least 3 hours of approved hurricane mitigation training and a proficiency exam',
          'A building code inspector certified under s. 468.607',
          'A general, building or residential contractor licensed under s. 489.111',
          'A professional engineer (s. 471.015) or professional architect (s. 481.213)',
          'Anyone else the insurer recognizes as qualified to complete the form',
        ] },
        { type: 'p', text: 'The signer must inspect the home **personally**. Only licensed contractors and engineers may send a qualified direct employee, and they remain liable for that employee’s work. OIR encourages homeowners to confirm an inspector is authorized under the statute before hiring.' },

        { type: 'h2', text: 'Rules that protect the form' },
        { type: 'ul', items: [
          '**No referral payments.** An inspector may not give anything of value to an insurance agency or agent for a referral, and agencies may not accept it (s. 627.711(6)). We take nothing from inspectors.',
          '**False forms are a crime.** Knowingly submitting a false or fraudulent form to obtain a rating benefit is a first-degree misdemeanor (s. 627.711(8)).',
          '**Insurers may double-check.** An insurer may have a form independently verified at its own expense before accepting it. A separate rule applies to forms sent to Citizens Property Insurance Corporation through a quality-assurance program it approves (s. 627.711(9)).',
        ] },

        { type: 'h2', text: 'My Safe Florida Home: the state inspection' },
        { type: 'p', text: 'My Safe Florida Home (MSFH), run by the Department of Financial Services and subject to legislative funding, offers a hurricane mitigation inspection **paid for by the program** to eligible homeowners ([MSFH](' + S.msfhInsp + ')). Under [s. 215.5586](' + S.s2155586 + '), the home must be a site-built, owner-occupied single-family home on its own parcel (detached, or attached up to three stories) with a homestead exemption. MSFH notes that its inspection looks for hurricane-resistant features, not the age or condition of the home, and that inspection approval is not grant approval.' },
        { type: 'p', text: 'Grants have more conditions under the 2026 statute: an MSFH inspection within the previous 24 months, an insured value of $700,000 or less, a home built before January 1, 2008, and a low- or moderate-income applicant. Work must be based on the MSFH report, not on a private inspection, and must not start before the grant is approved ([MSFH](' + S.msfhGrant + ')). Our [My Safe Florida Home guide](/en/blog/my-safe-florida-home-2026) covers the grant steps.' },
        { type: 'callout', title: 'Portal status, November 2026', text: 'MSFH says its applicant portal has been **temporarily unavailable since November 10** while it moves to a new system, with the enhanced portal **anticipated on December 4** ([MSFH](' + S.msfhModern + ')). Check mysafeflhome.com before you plan around a date.' },

        { type: 'h2', text: 'Before your renewal: a short checklist' },
        { type: 'ol', items: [
          'Find your current form and its inspection date. If it is close to five years old, or the roof, windows or doors have changed, ask about a new one.',
          'Gather roof permit dates, product approval numbers and receipts for shutters or impact products. Questions 4 and 9 depend on them.',
          'Make sure the inspector can get into the attic. Without access, deck and roof-to-wall attachment may be marked “no attic access.”',
          'Confirm the inspector’s license type against the list above, and read the form before you sign the homeowner section.',
          'Send a copy to your agent and keep one with your policy. Review your [hurricane deductible](/en/florida-home-insurance-wind-deductible), [roof age](/en/blog/roof-age-home-insurance-florida) and [flood coverage](/en/flood-insurance-homestead-fl) too; a wind form does not address flood.',
        ] },
        { type: 'callout', title: 'Talk it through with a local agent', text: 'Bring your form to M&K Agency or send it through the [quote form](/en/quote), or call [(305) 859-3953](' + TEL + '). We are at 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (Monday–Friday 9–6, Saturday by appointment) and work in English, Spanish and Russian. Coverage and rating depend on the insurer and the policy. This is general information, not legal advice.' },
      ],
      faq: [
        { q: 'What is Form OIR-B1-1802?', a: 'It is Florida’s Uniform Mitigation Verification Inspection Form. An authorized inspector completes it to document a home’s wind-resistant features: building code, roof covering, deck and roof-to-wall attachment, roof shape, secondary water resistance and opening protection. The current edition took effect April 1, 2026.' },
        { q: 'How long is a wind mitigation form valid?', a: 'Up to five years, according to OIR, as long as no material changes are made to the structure and no inaccuracies are found on the form.' },
        { q: 'Will a wind mitigation inspection lower my premium?', a: 'No one can promise that. The form documents features. Each insurer applies its own approved rating and underwriting rules, and some features may not change anything. Ask your agent how your insurer treats a current form.' },
      ],
      sources: [
        { label: 'Florida OIR: Wind Mitigation Resources', url: S.oir },
        { label: 'Florida OIR: Form OIR-B1-1802, Uniform Mitigation Verification Inspection Form (Rev. 04/26)', url: S.form },
        { label: 'Florida Statutes, s. 627.711 (2026): uniform mitigation verification inspection form', url: S.s627711 },
        { label: 'Florida Statutes, s. 215.5586 (2026): My Safe Florida Home Program', url: S.s2155586 },
        { label: 'My Safe Florida Home: What is a hurricane mitigation inspection?', url: S.msfhInsp },
        { label: 'My Safe Florida Home: Who is eligible for a hurricane mitigation grant?', url: S.msfhGrant },
        { label: 'My Safe Florida Home: Program modernization FAQs (Nov. 6, 2026)', url: S.msfhModern },
      ],
    },
    es: {
      title: 'Inspección de mitigación de viento en Florida: el formulario y lo que documenta el inspector',
      metaTitle: 'Inspección wind mitigation en Florida (OIR-B1-1802) | M&K Agency',
      description: 'El formulario de mitigación de viento OIR-B1-1802, vigente desde el 1 de abril de 2026: sus nueve preguntas, quién puede firmarlo y cuánto tiempo es válido.',
      ogAlt: 'Ilustración de una casa en Florida con techo a cuatro aguas, amarres metálicos entre techo y paredes, contraventanas, un portapapeles con casillas y una lupa',
      excerpt: 'El formulario de mitigación de viento deja constancia de cómo está sujeto el techo, cómo se protegen ventanas y puertas y qué código de construcción se aplicó. Esto es lo que pregunta la edición de 2026 y quién puede firmarla.',
      category: 'Seguro de vivienda',
      body: [
        { type: 'p', text: 'En el sur de Miami-Dade, hablar de [seguro de vivienda](/es/homeowners-insurance-florida-city) es hablar del viento. La **inspección de mitigación de viento** (wind mitigation) deja por escrito lo que ayuda a la casa a resistir un huracán, en el formulario estatal **Uniform Mitigation Verification Inspection Form, OIR-B1-1802**. La ley obliga a todas las aseguradoras a usar ese mismo formulario cuando el asegurado lo presenta para la tarifa de viento ([s. 627.711](' + S.s627711 + ')).' },
        { type: 'p', text: 'Repasamos la edición vigente pregunta por pregunta, quién la firma, cuánto dura y dónde entra My Safe Florida Home. No pronosticamos el efecto en ninguna prima: eso depende de las reglas aprobadas de cada aseguradora y de lo que encuentre el inspector.' },

        { type: 'h2', text: 'Desde el 1 de abril de 2026 rige una nueva edición' },
        { type: 'p', text: 'La s. 627.0629 exige que la Oficina de Regulación de Seguros (OIR) revise cada cinco años las medidas contra pérdidas por viento. Tras un estudio de junio de 2024, la OIR actualizó el formulario OIR-B1-1802 **a partir del 1 de abril de 2026** ([OIR](' + S.oir + ')). Lo adopta la Regla 69O-170.0155, F.A.C.' },
        { type: 'p', text: 'Según la OIR, un formulario completado es **válido hasta cinco años**, siempre que la estructura no tenga cambios importantes y no se encuentren errores en el documento. Si cambió el techo, las ventanas o la puerta del garaje, pregunte si el formulario sigue describiendo la casa.' },

        { type: 'h2', text: 'Las nueve preguntas del formulario' },
        { type: 'p', text: 'La edición de 2026 tiene seis páginas. El inspector responde estas preguntas ([formulario OIR-B1-1802](' + S.form + ')):' },
        { type: 'ol', items: [
          '**Código de construcción.** Qué edición del Código de Construcción de Florida regía al solicitar el permiso original (2001/2004, o 2007 en adelante). En la **Zona de Huracanes de Alta Velocidad** (HVHZ: Miami-Dade y Broward) también cuenta el Código del Sur de Florida de 1994.',
          '**Región.** El viento de diseño según ASCE 7-22: HVHZ, Región 1 (140 mph o más), Región 2 (130 a 139 mph) o Región 3 (menos de 130 mph).',
          '**Pendiente del techo.** Si el techo principal es más o menos inclinado que 6:12.',
          '**Cubierta del techo.** Cada tipo (asfáltica, teja, metal, membrana, etc.), con la fecha del permiso o el número de aprobación de producto de Florida o Miami-Dade y el año de instalación.',
          '**Fijación del entablado.** La fijación más débil del entablado: grosor, tamaño y separación de clavos, losa de concreto o “sin acceso al ático”.',
          '**Unión techo-pared.** La conexión más débil entre las cerchas o vigas y las paredes: clavos en ángulo (toenails), clips, amarres sencillos, amarres dobles o anclajes estructurales.',
          '**Forma del techo.** Techo a cuatro aguas (con otras formas que no pasen del 10 % del perímetro), techo plano (edificios de cinco unidades o más) u otro.',
          '**Resistencia secundaria al agua.** Si una cubierta sellada frena el agua cuando el viento arranca el techo. El fieltro común no cuenta.',
          '**Protección de aberturas.** La protección más débil contra escombros en ventanas, puertas, puertas corredizas, tragaluces y puertas de garaje: desde productos de impacto verificados hasta ninguna.',
        ] },
        { type: 'p', text: 'Cada característica marcada en las preguntas 2 a 9 debe ir acompañada de **al menos una foto o un documento**. Las aberturas dañadas van en categoría aparte, y según el formulario una casa con aberturas que deben reemplazarse no califica para diferenciales de tarifa por mitigación de viento. La aseguradora puede hacer preguntas adicionales.' },
        { type: 'p', text: 'La última página lleva dos firmas. El inspector certifica la inspección y el propietario, que el inspector (o un empleado autorizado) revisó la casa y se identificó. El formulario indica guardar una copia con la póliza.' },

        { type: 'h2', text: 'Quién puede firmarlo' },
        { type: 'p', text: 'Según la s. 627.711(2)(a), la aseguradora debe aceptar un formulario firmado por:' },
        { type: 'ul', items: [
          'Un inspector de viviendas con licencia (s. 468.8314), con al menos 3 horas de capacitación aprobada en mitigación de huracanes y examen de competencia',
          'Un inspector de código de construcción certificado según la s. 468.607',
          'Un contratista general, de edificación o residencial con licencia según la s. 489.111',
          'Un ingeniero profesional (s. 471.015) o un arquitecto profesional (s. 481.213)',
          'Otra persona o entidad que la aseguradora reconozca como calificada',
        ] },
        { type: 'p', text: 'Quien firma debe inspeccionar la casa **en persona**. Solo contratistas e ingenieros con licencia pueden enviar a un empleado directo calificado, y responden por su trabajo. La OIR recomienda verificar que el inspector esté autorizado antes de contratarlo.' },

        { type: 'h2', text: 'Reglas que protegen el formulario' },
        { type: 'ul', items: [
          '**Nada de pagos por referidos.** Un inspector no puede dar nada de valor a una agencia o agente de seguros por recomendarlo, y la agencia no puede aceptarlo (s. 627.711(6)). Nosotros no recibimos nada de los inspectores.',
          '**Un formulario falso es delito.** Presentar a sabiendas un formulario falso o fraudulento para obtener un beneficio en la tarifa es un delito menor de primer grado (s. 627.711(8)).',
          '**La aseguradora puede verificar.** La aseguradora puede pedir, a su costo, una verificación independiente. Hay una regla aparte para formularios enviados a Citizens Property Insurance Corporation mediante un programa de control de calidad aprobado por Citizens (s. 627.711(9)).',
        ] },

        { type: 'h2', text: 'My Safe Florida Home: la inspección del estado' },
        { type: 'p', text: 'My Safe Florida Home (MSFH), del Departamento de Servicios Financieros y sujeto a fondos legislativos, ofrece a los propietarios elegibles una inspección de mitigación de huracanes **pagada por el programa** ([MSFH](' + S.msfhInsp + ')). Según la [s. 215.5586](' + S.s2155586 + '), debe ser una vivienda unifamiliar construida en sitio, en su propia parcela (independiente o adosada de hasta tres pisos), ocupada por su dueño y con exención de homestead. La inspección no evalúa la edad ni el estado de la casa, y aprobarla no equivale a aprobar una subvención.' },
        { type: 'p', text: 'Las subvenciones tienen más requisitos según la ley de 2026: una inspección de MSFH en los últimos 24 meses, un valor asegurado de $700,000 o menos, una casa construida antes del 1 de enero de 2008 y un solicitante de ingresos bajos o moderados. Las obras deben basarse en el informe de MSFH, no en una inspección privada, y no pueden empezar antes de que se apruebe la subvención ([MSFH](' + S.msfhGrant + ')). En nuestra [guía de My Safe Florida Home](/es/blog/my-safe-florida-home-2026) explicamos los pasos.' },
        { type: 'callout', title: 'Estado del portal, noviembre de 2026', text: 'MSFH informa que su portal de solicitudes está **temporalmente fuera de servicio desde el 10 de noviembre** mientras migra a un sistema nuevo, y que el portal renovado **se espera para el 4 de diciembre** ([MSFH](' + S.msfhModern + ')).' },

        { type: 'h2', text: 'Antes de renovar: una lista breve' },
        { type: 'ol', items: [
          'Busque su formulario y su fecha. Si va a cumplir cinco años o cambió techo, ventanas o puertas, pregunte por uno nuevo.',
          'Reúna permisos del techo, números de aprobación de producto y facturas de contraventanas o ventanas de impacto (preguntas 4 y 9).',
          'Dé acceso al ático; si no, el entablado y la unión techo-pared pueden quedar como “sin acceso al ático”.',
          'Verifique la licencia del inspector y lea el formulario antes de firmar.',
          'Envíe una copia a su agente y guarde otra con la póliza. Revise también su [deducible de huracán](/es/florida-home-insurance-wind-deductible), la [edad del techo](/es/blog/roof-age-home-insurance-florida) y la [cobertura de inundación](/es/flood-insurance-homestead-fl); el formulario de viento no cubre inundaciones.',
        ] },
        { type: 'callout', title: 'Hable con un agente local', text: 'Traiga su formulario a M&K Agency, use el [formulario de cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + '). Estamos en 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (lunes a viernes de 9 a 6, sábados con cita) y atendemos en español, inglés y ruso. La cobertura y la tarifa dependen de cada póliza. Información general, no asesoría legal.' },
      ],
      faq: [
        { q: '¿Qué es el formulario OIR-B1-1802?', a: 'Es el formulario uniforme de Florida con el que un inspector autorizado documenta cómo resiste la casa el viento: código, techo, uniones, resistencia secundaria al agua y protección de aberturas. La edición vigente rige desde el 1 de abril de 2026.' },
        { q: '¿Cuánto tiempo es válido el formulario?', a: 'Hasta cinco años, según la OIR, siempre que la estructura no tenga cambios importantes y no se encuentren errores en el formulario.' },
        { q: '¿La inspección va a bajar mi prima?', a: 'Nadie puede prometerlo. El formulario documenta características; cada aseguradora aplica sus propias reglas aprobadas, y algunas características pueden no cambiar nada.' },
      ],
      sources: [
        { label: 'Florida OIR: Wind Mitigation Resources (recursos de mitigación de viento)', url: S.oir },
        { label: 'Florida OIR: formulario OIR-B1-1802, Uniform Mitigation Verification Inspection Form (Rev. 04/26)', url: S.form },
        { label: 'Estatutos de Florida, s. 627.711 (2026): formulario uniforme de verificación de mitigación', url: S.s627711 },
        { label: 'Estatutos de Florida, s. 215.5586 (2026): programa My Safe Florida Home', url: S.s2155586 },
        { label: 'My Safe Florida Home: ¿Qué es una inspección de mitigación de huracanes?', url: S.msfhInsp },
        { label: 'My Safe Florida Home: ¿Quién es elegible para una subvención?', url: S.msfhGrant },
        { label: 'My Safe Florida Home: preguntas sobre la modernización del programa (6 de noviembre de 2026)', url: S.msfhModern },
      ],
    },
    ru: {
      title: 'Инспекция wind mitigation во Флориде: форма и что в ней фиксируют',
      metaTitle: 'Инспекция wind mitigation во Флориде (OIR-B1-1802) | M&K Agency',
      description: 'Форма wind mitigation OIR-B1-1802 в редакции с 1 апреля 2026: девять вопросов инспектора, кто вправе её подписать и сколько она действует.',
      ogAlt: 'Иллюстрация: дом во Флориде с вальмовой крышей, металлическими креплениями крыши к стенам и ставнями, планшет с галочками и лупа',
      excerpt: 'Форма wind mitigation фиксирует, как крыша крепится к дому, чем защищены окна и двери и по какому строительному кодексу строили. Разбираем, что спрашивает редакция 2026 года и кто может её подписать.',
      category: 'Страхование дома',
      body: [
        { type: 'p', text: 'На юге Майами-Дейд почти любой разговор о [страховке дома](/ru/homeowners-insurance-florida-city) сводится к ветру. **Инспекция wind mitigation** нужна, чтобы собрать в одном документе всё, что помогает дому выдержать ураган. Этот документ — государственная форма **Uniform Mitigation Verification Inspection Form, OIR-B1-1802**. По закону Флориды все страховщики обязаны пользоваться именно этой формой, когда страхователь подаёт её для учёта ветровых факторов при тарификации ([s. 627.711](' + S.s627711 + ')).' },
        { type: 'p', text: 'Ниже — действующая редакция формы по пунктам, кто вправе её подписывать, сколько она действует и при чём здесь государственная программа My Safe Florida Home. Предсказывать, как форма отразится на премии, мы не будем: это зависит от утверждённых правил тарификации конкретного страховщика и от того, что инспектор реально найдёт в доме.' },

        { type: 'h2', text: 'С 1 апреля 2026 года действует новая редакция' },
        { type: 'p', text: 'Раздел 627.0629 обязывает Управление по регулированию страхования Флориды (OIR) раз в пять лет пересматривать меры, снижающие ущерб от ветра. По итогам исследования июня 2024 года OIR обновило форму OIR-B1-1802 **с 1 апреля 2026 года** ([OIR](' + S.oir + ')). Форма утверждена правилом 69O-170.0155 Административного кодекса Флориды, а внизу каждой страницы стоит пометка «Rev. 04/26».' },
        { type: 'p', text: 'По данным OIR, заполненная форма **действует до пяти лет**, если в конструкцию дома не вносили существенных изменений и в документе не нашли неточностей. Поменяли крышу, окна или гаражные ворота — стоит уточнить, описывает ли форма дом в нынешнем виде.' },

        { type: 'h2', text: 'Девять вопросов формы' },
        { type: 'p', text: 'В редакции 2026 года шесть страниц. Инспектор отвечает на такие вопросы ([форма OIR-B1-1802](' + S.form + ')):' },
        { type: 'ol', items: [
          '**Строительный кодекс.** Какая редакция Florida Building Code действовала на момент подачи заявки на первоначальное разрешение (2001/2004 или 2007 и позже). В **зоне ураганных ветров высокой скорости (HVHZ)** — по форме это Майами-Дейд и Бровард — учитывается и South Florida Building Code 1994 года.',
          '**Регион.** Расчётная скорость ветра для дома по ASCE 7-22: HVHZ, регион 1 (от 140 миль/ч), регион 2 (130–139 миль/ч) или регион 3 (меньше 130 миль/ч).',
          '**Уклон крыши.** Круче основная крыша, чем 6:12, или положе.',
          '**Кровельное покрытие.** Каждый тип покрытия (битумная черепица, керамическая или бетонная черепица, металл, мембрана и т. д.) с датой заявки на разрешение или номером product approval Флориды либо Майами-Дейд и годом укладки или замены.',
          '**Крепление настила.** Самый слабый способ крепления кровельного настила: толщина листов, размер и шаг гвоздей, бетонная плита или отметка «нет доступа на чердак».',
          '**Крепление крыши к стенам.** Самое слабое соединение стропил или ферм со стенами: гвозди под углом (toenails), клипсы, одинарные или двойные хомуты, структурные анкеры.',
          '**Форма крыши.** Вальмовая (другие формы — не больше 10% периметра), плоская (здания от пяти квартир) или иная.',
          '**Дополнительная гидроизоляция (SWR).** Есть ли герметичный настил, который не пустит воду, если ветер сорвёт покрытие. Обычная подкладка и битумный войлок не засчитываются.',
          '**Защита проёмов.** Самая слабая защита от летящих обломков среди всех окон, входных и раздвижных стеклянных дверей, мансардных окон и гаражных ворот — от проверенных ударостойких изделий до полного её отсутствия.',
        ] },
        { type: 'p', text: 'К каждому признаку, отмеченному в вопросах 2–9, нужно приложить **хотя бы одно фото или документ**. Повреждённые проёмы, требующие ремонта, записываются отдельной категорией, и в форме прямо сказано: дом с проёмами, которые нужно менять, не подходит для ветровых тарифных дифференциалов, что бы ни было в остальных пунктах. Страховщик может задать дополнительные вопросы.' },
        { type: 'p', text: 'На последней странице две подписи. Инспектор удостоверяет проверку, а владелец — что названный инспектор (или его уполномоченный сотрудник) действительно осмотрел дом и предъявил удостоверение. Сама форма советует хранить копию вместе со страховым полисом.' },

        { type: 'h2', text: 'Кто вправе подписать форму' },
        { type: 'p', text: 'Согласно s. 627.711(2)(a), страховщик обязан принять форму, подписанную:' },
        { type: 'ul', items: [
          'home inspector с лицензией по s. 468.8314, прошедшим не менее 3 часов утверждённого обучения по hurricane mitigation и экзамен',
          'инспектором строительного кодекса с сертификатом по s. 468.607',
          'генеральным, строительным или жилищным подрядчиком с лицензией по s. 489.111',
          'профессиональным инженером (s. 471.015) или архитектором (s. 481.213)',
          'любым другим лицом или компанией, которых страховщик признаёт квалифицированными',
        ] },
        { type: 'p', text: 'Подписант должен осмотреть дом **лично**. Прислать вместо себя квалифицированного штатного сотрудника могут только лицензированные подрядчики и инженеры, и за его работу они отвечают сами. OIR советует до найма убедиться, что инспектор уполномочен по закону.' },

        { type: 'h2', text: 'Правила, которые защищают форму' },
        { type: 'ul', items: [
          '**Никаких вознаграждений за направление клиентов.** Инспектор не может ничего давать страховому агентству или агенту за рекомендацию, а агентство не может это принимать (s. 627.711(6)). Мы объясним форму, но от инспекторов ничего не получаем.',
          '**Поддельная форма — преступление.** Заведомо ложная или мошенническая форма, поданная ради выгоды в тарифе, — мисдиминор первой степени (s. 627.711(8)). За нарушения инспектору также грозят санкции по лицензии.',
          '**Страховщик может перепроверить.** Прежде чем принять форму, страховщик вправе за свой счёт заказать независимую проверку. Отдельное правило действует для форм, поданных в Citizens Property Insurance Corporation через одобренную Citizens программу контроля качества (s. 627.711(9)).',
        ] },

        { type: 'h2', text: 'My Safe Florida Home: государственная инспекция' },
        { type: 'p', text: 'Программа My Safe Florida Home (MSFH) Департамента финансовых услуг работает в пределах выделенного Легислатурой финансирования и предлагает подходящим владельцам инспекцию hurricane mitigation, **оплаченную программой** ([MSFH](' + S.msfhInsp + ')). По [s. 215.5586](' + S.s2155586 + ') это должен быть построенный на месте односемейный дом на собственном участке (отдельный или сблокированный не выше трёх этажей), в котором живёт владелец и на который оформлено освобождение homestead. MSFH уточняет: инспекция ищет признаки ураганостойкости, а не оценивает возраст или состояние дома, и одобрение инспекции — ещё не одобрение гранта.' },
        { type: 'p', text: 'Для грантов закон 2026 года ставит больше условий: инспекция MSFH за последние 24 месяца, страховая стоимость не выше $700 000, дом построен до 1 января 2008 года и заявитель с низким или средним доходом. Работы должны опираться на отчёт MSFH, а не на частную инспекцию, и начинать их до одобрения гранта нельзя ([MSFH](' + S.msfhGrant + ')). Шаги подачи — в нашем [гиде по My Safe Florida Home](/ru/blog/my-safe-florida-home-2026).' },
        { type: 'callout', title: 'Портал MSFH, ноябрь 2026', text: 'По сообщению MSFH, портал для заявителей **временно недоступен с 10 ноября** из-за перехода на новую систему, а обновлённый портал **ожидается 4 декабря** ([MSFH](' + S.msfhModern + ')). Прежде чем строить планы, проверьте mysafeflhome.com.' },

        { type: 'h2', text: 'Перед продлением полиса: короткий чек-лист' },
        { type: 'ol', items: [
          'Найдите текущую форму и дату инспекции. Если ей почти пять лет или менялись крыша, окна или двери, спросите о новой.',
          'Соберите даты разрешений на кровлю, номера product approval и чеки на ставни или ударостойкие окна: от них зависят ответы на вопросы 4 и 9.',
          'Обеспечьте инспектору доступ на чердак. Без него крепление настила и крыши к стенам могут отметить как «нет доступа на чердак».',
          'Сверьте тип лицензии инспектора со списком выше и прочитайте форму, прежде чем подписывать раздел владельца.',
          'Отправьте копию агенту и храните ещё одну с полисом. Заодно проверьте [ураганную франшизу](/ru/florida-home-insurance-wind-deductible), [возраст крыши](/ru/blog/roof-age-home-insurance-florida) и [страховку от наводнения](/ru/flood-insurance-homestead-fl): ветровая форма наводнение не затрагивает.',
        ] },
        { type: 'callout', title: 'Обсудите свою ситуацию с местным агентом', text: 'Принесите форму в M&K Agency или отправьте её через [форму заявки](/ru/quote), либо позвоните по номеру [(305) 859-3953](' + TEL + '). Мы находимся по адресу 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (пн–пт 9–6, суббота по записи) и говорим по-русски, по-английски и по-испански — подробнее о [русскоязычном агенте в Майами](/ru/russian-speaking-insurance-agent-miami). Покрытие и тариф зависят от страховщика и полиса. Это общая информация, а не юридическая консультация.' },
      ],
      faq: [
        { q: 'Что такое форма OIR-B1-1802?', a: 'Это единая форма Флориды для проверки mitigation-признаков. Уполномоченный инспектор заполняет её, чтобы задокументировать ветроустойчивость дома: строительный кодекс, кровельное покрытие, крепление настила и крыши к стенам, форму крыши, дополнительную гидроизоляцию и защиту проёмов. Действующая редакция применяется с 1 апреля 2026 года.' },
        { q: 'Сколько действует форма wind mitigation?', a: 'До пяти лет, по данным OIR, если в конструкцию не вносили существенных изменений и в форме не нашли неточностей.' },
        { q: 'Снизит ли инспекция мою премию?', a: 'Этого никто не может обещать. Форма лишь фиксирует признаки; каждый страховщик применяет свои утверждённые правила тарификации и андеррайтинга, и некоторые признаки могут ничего не изменить. Спросите агента, как ваш страховщик учитывает действующую форму.' },
      ],
      sources: [
        { label: 'Florida OIR: Wind Mitigation Resources (ресурсы по wind mitigation)', url: S.oir },
        { label: 'Florida OIR: форма OIR-B1-1802, Uniform Mitigation Verification Inspection Form (Rev. 04/26)', url: S.form },
        { label: 'Florida Statutes, s. 627.711 (2026): единая форма проверки mitigation', url: S.s627711 },
        { label: 'Florida Statutes, s. 215.5586 (2026): программа My Safe Florida Home', url: S.s2155586 },
        { label: 'My Safe Florida Home: что такое hurricane mitigation inspection', url: S.msfhInsp },
        { label: 'My Safe Florida Home: кто может получить грант', url: S.msfhGrant },
        { label: 'My Safe Florida Home: вопросы о модернизации программы (6 ноября 2026)', url: S.msfhModern },
      ],
    },
  },
};
