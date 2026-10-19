import type { BlogPost, PostTranslation } from '../types';

// Facts checked 2026-10-19 (ET) against FLHSMV and the 2026 Florida Statutes (flsenate.gov):
// - FLHSMV Florida Insurance Requirements: PIP/PDL continuous even if not driven or inoperable;
//   suspension of driving privilege and plate up to 3 years; no temporary or hardship license for
//   insurance-related suspensions; surrender the plate BEFORE canceling to avoid suspension and
//   reinstatement fees; reinstatement fee up to $500; military stationed out of state may be exempt
// - FLHSMV Received a Letter: insurers report electronically; letter carries an FR sanction number whose
//   first digit gives the type of case; copy of the letter in MyDMV Portal
// - FLHSMV FR700: verify policy number, 5-digit company code, Florida policy, VIN, address; insurer reports
//   electronically, or update via Driver License Check / 850-617-3000; if not confirmed, suspended
//   immediately; options: surrender tag + fee, or Florida PIP/PDL ($10,000/$10,000) + fee; pay online
//   (MyDMV Portal > Driver License > Sanction Inquiry), in person ($6.25 tax collector service fee may
//   apply; immediate clearance), or by mail (10 business days); business vehicles: form + insurance + check
// - FLHSMV FR200: guilty of driving without proof of insurance; if uninsured owner: PIP six-month,
//   non-cancellable SR-22 policy filed electronically, kept 2 years from reinstatement, or surrender plate;
//   re-registering within 2 years requires the same filing
// - FLHSMV FR100/FR900: crash cases; FR100 without BIL: SR22 for 3 years + signed releases
// - s. 324.0221(1)-(3): insurer reports within 10 days + written notice; suspension of license and
//   registration after notice and opportunity to be heard; fees $150 / $250 / $500 within 3 years of the
//   first reinstatement, back to $150 after 3 years; one fee for license + registration; proof kept 2 years
// - s. 627.733(1), (5): continuous security; military emergency active duty outside the U.S. exemption
// - s. 316.646(1), (3), (4): proof in the vehicle (paper or electronic); court-ordered suspension; knowingly
//   false proof = first-degree misdemeanor
// - s. 627.7275(2): insurers make reinstatement policies available subject to underwriting; at least 6 months
// - s. 322.34(1), (2), (8): moving violation; knowing = misdemeanor, higher for repeats; impound/immobilize
// No insurers named. Dollar figures are state fees set by law or by FLHSMV only.

const S = {
  ins: 'https://www.flhsmv.gov/insurance/',
  insEs: 'https://www.flhsmv.gov/insurance-es/',
  letter: 'https://www.flhsmv.gov/insurance/received-a-letter/',
  fr7: 'https://www.flhsmv.gov/insurance/received-a-letter/fr700/',
  fr2: 'https://www.flhsmv.gov/insurance/received-a-letter/fr200/',
  fr1: 'https://www.flhsmv.gov/insurance/received-a-letter/fr100/',
  dlcheck: 'https://mydmvportal.flhsmv.gov/home/en/publicweb/dlcheck/',
  s3240221: 'https://www.flsenate.gov/Laws/Statutes/2026/324.0221',
  s627733: 'https://www.flsenate.gov/Laws/Statutes/2026/627.733',
  s316646: 'https://www.flsenate.gov/Laws/Statutes/2026/316.646',
  s6277275: 'https://www.flsenate.gov/Laws/Statutes/2026/627.7275',
  s32234: 'https://www.flsenate.gov/Laws/Statutes/2026/322.34',
};

const en: PostTranslation = {
  title: 'License Suspended for No Insurance in Florida: How to Reinstate It',
  metaTitle: 'License Suspended for No Insurance in Florida | M&K Agency',
  description:
    'Florida suspended your license and plate over an insurance lapse? How to read the FR letter, check your status, pay the $150–$500 fee and reinstate.',
  excerpt:
    'An insurance lapse in Florida can suspend both your driver license and your registration. Here is how to read the FLHSMV letter, fix the record and avoid a repeat.',
  ogAlt: 'Flat illustration of a parked car, a driver license card, a key and an envelope with a warning sign',
  category: 'Auto insurance',
  body: [
    { type: 'p', text: 'Got a letter from the Florida Department of Highway Safety and Motor Vehicles (FLHSMV) saying your license and registration will be suspended over insurance? It is one of the more fixable problems on a driving record. Here is why it happens and the steps FLHSMV lists to reinstate, based on its own instructions and the 2026 Florida Statutes.' },
    { type: 'callout', title: 'The short version', text: 'If a car registered in your name went without Florida PIP and PDL, FLHSMV can suspend **both your license and your plate**. To clear it, you either buy a Florida policy with at least $10,000 PIP and $10,000 PDL that your insurer reports to the state, or surrender the plate. Then you pay a reinstatement fee of **$150, $250 or $500**. There is no hardship license for insurance suspensions.' },

    { type: 'h2', text: 'Why Florida suspends a license over insurance' },
    { type: 'p', text: 'Every owner of a registered vehicle with four or more wheels must keep **Personal Injury Protection (PIP)** and **Property Damage Liability (PDL)** in force for the whole registration period (s. 627.733). FLHSMV adds that coverage must stay active even if the car isn’t driven or doesn’t run. The minimums, and what they pay, are covered in our guide to [Florida minimum car insurance requirements](/en/blog/florida-minimum-car-insurance-requirements).' },
    { type: 'p', text: 'Insurers must report a PIP or PDL cancellation or nonrenewal to FLHSMV **within 10 days**, and must tell you in writing that it will be reported (s. 324.0221(1)). If the department’s records show no required coverage, it suspends the **registration and the driver license** of the owner, after notice and a chance to be heard (s. 324.0221(2)). A court conviction for driving without proof of insurance can lead to the same suspension (s. 316.646(3)).' },

    { type: 'h2', text: 'Step 1: Find the FR sanction number on your letter' },
    { type: 'p', text: 'FLHSMV insurance letters carry an **FR sanction** number, and the department says its first digit tells you what kind of case you have. The most common ones:' },
    { type: 'ul', items: [
      '**FR7**: the department can’t confirm insurance on a vehicle registered in your name.',
      '**FR2**: a court found you guilty of driving without proof of insurance.',
      '**FR1 and FR9**: a crash in which your vehicle may not have had the required coverage. These cases can require signed releases from the other parties and, after an injury crash without bodily injury liability, an SR-22 for three years. See our [SR-22 guide](/en/blog/sr22-florida-guia).',
    ] },
    { type: 'p', text: 'Lost the letter? FLHSMV says you can view a copy in **MyDMV Portal**, and you can check your license status any time with the department’s online **Driver License Check**.' },

    { type: 'h2', text: 'Step 2: If you were insured, fix the record' },
    { type: 'p', text: 'Sometimes the policy existed but the records don’t match. Before the suspension date, FLHSMV asks you to call your insurer and confirm:' },
    { type: 'ul', items: [
      'The policy number and the five-digit company code (on your ID card) are correct.',
      'The policy was active before the suspension date and is written for Florida.',
      'The insurer has the right VIN and your current address.',
    ] },
    { type: 'p', text: 'Then ask the insurer to report the policy to FLHSMV electronically. You can also enter the details through Driver License Check or the department’s automated line at 850-617-3000. FLHSMV warns that if the insurer doesn’t confirm what you submit, the license and registration are suspended immediately, so the insurer’s report is what counts.' },

    { type: 'h2', text: 'Step 3: If coverage really lapsed, reinstate' },
    { type: 'p', text: 'For an FR7 case, FLHSMV gives two ways to clear the record:' },
    { type: 'ol', items: [
      '**Insure the vehicle.** Buy a Florida policy with at least $10,000 PIP and $10,000 PDL and ask the insurer to report it to FLHSMV electronically.',
      '**Or surrender the plate** if you no longer need the vehicle on the road. Turn in the plate and registration at a driver license and motor vehicle service center or a tax collector’s office, or mail them to FLHSMV.',
    ] },
    { type: 'p', text: 'Either way, you also pay the reinstatement fee listed in your letter:' },
    { type: 'ul', items: [
      '**Online** in MyDMV Portal (Driver License tab, then Sanction Inquiry), where you can also update your insurance details if the insurer hasn’t reported them yet.',
      '**In person** at a driver license and motor vehicle service center or tax collector’s office. Tax collector offices may add a $6.25 service fee.',
      '**By mail**, allowing about ten business days.',
    ] },

    { type: 'h2', text: 'How much the reinstatement fee is' },
    { type: 'p', text: 'The fee is set by law and nonrefundable (s. 324.0221(3)): **$150** for the first reinstatement, **$250** for the second and **$500** for each later one within three years of the first. If three years pass without a second reinstatement, the next one is $150 again. When both the license and the registration are suspended, you pay **one** fee for both.' },

    { type: 'h2', text: 'After a ticket for no proof of insurance (FR2)' },
    { type: 'p', text: 'If you had insurance on the day of the ticket and just couldn’t show it, FLHSMV lets you submit the policy details through MyDMV Portal, by fax or by mail. If the vehicle you owned was **uninsured**, the rules are stricter: buy a **six-month, non-cancelable PIP policy with an SR-22 filing**, which the insurer files electronically, and keep it for **two years** from reinstatement, or surrender the plate. Get it before the suspension date and you avoid the suspension; after it, you also pay the fee. Florida law requires insurers to make reinstatement policies available, subject to their usual underwriting, for at least six months (s. 627.7275(2)).' },
    { type: 'p', text: 'Don’t own a car but still need a filing? A [non-owner SR-22](/en/blog/non-owner-sr22-florida) may fit.' },

    { type: 'h2', text: 'Don’t drive until FLHSMV shows you as valid' },
    { type: 'p', text: 'FLHSMV states there is **no temporary or hardship license** for insurance-related suspensions. Driving while suspended is a moving violation; if you knew about the suspension, it becomes a criminal misdemeanor, with heavier penalties for repeat convictions (s. 322.34).' },

    { type: 'h2', text: 'How to avoid the next suspension' },
    { type: 'ul', items: [
      '**Turn in the plate before you cancel insurance** on a car you sold, stored or stopped driving. FLHSMV says this avoids suspension and reinstatement fees.',
      'When you switch insurers, make sure the new policy starts before the old one ends.',
      'Active-duty military stationed outside Florida may be exempt, says FLHSMV. For emergency duty abroad, s. 627.733(5) requires notifying FLHSMV before and after.',
      'Keep proof of coverage in the car, on paper or on your phone (s. 316.646).',
    ] },

    { type: 'h2', text: 'How M&K Agency can help' },
    { type: 'p', text: 'Bring us your FLHSMV letter. We’ll explain what your FR sanction asks for, look at Florida policy options that meet it, and make sure the insurer reports the coverage to the state. If your case calls for an SR-22, see our [SR-22 insurance in Florida City](/en/sr22-insurance-florida-city) page, or start with [car insurance in Florida City](/en/car-insurance-florida-city). [Request a quote](/en/quote) or call **(305) 859-3953**. Office: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034; Monday to Friday 9 to 6, Saturday by appointment.' },
    { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy, and your letter and FLHSMV record set your exact requirements. This guide is general information, not legal advice. Talk with a licensed agent before you buy or change coverage.' },
  ],
  faq: [
    { q: 'What is the reinstatement fee after an insurance suspension?', a: '$150 the first time, $250 the second and $500 for each later one within three years of the first (s. 324.0221(3)). One fee covers both license and registration. Tax collector offices may add a $6.25 service fee.' },
    { q: 'Do I need an SR-22 after my insurance lapsed?', a: 'For a typical lapse letter (FR7), FLHSMV’s steps call for a Florida PIP/PDL policy reported by your insurer, or a surrendered plate, plus the fee. An SR-22 comes up in other cases, such as an FR2 conviction while uninsured or an uninsured injury crash. Your letter says which applies.' },
    { q: 'How do I check if my Florida license is suspended?', a: 'Use FLHSMV’s online Driver License Check or log in to MyDMV Portal, which also shows your FR sanction number. If you mailed documents, allow about ten business days.' },
  ],
  sources: [
    { label: 'FLHSMV: Florida Insurance Requirements (continuous PIP/PDL, penalties, no hardship license)', url: S.ins },
    { label: 'FLHSMV: Received a Letter (FR sanction numbers, MyDMV Portal)', url: S.letter },
    { label: 'FLHSMV: FR700 letter instructions (insurance not confirmed; how to reinstate)', url: S.fr7 },
    { label: 'FLHSMV: FR200 letter instructions (conviction for no proof of insurance)', url: S.fr2 },
    { label: 'FLHSMV: FR100 letter instructions (crash without required coverage)', url: S.fr1 },
    { label: 'FLHSMV: Driver License Check', url: S.dlcheck },
    { label: 'Florida Statutes s. 324.0221 (2026): insurer reports, suspension, reinstatement fees', url: S.s3240221 },
    { label: 'Florida Statutes s. 627.733 (2026): required security; military exemption', url: S.s627733 },
    { label: 'Florida Statutes s. 316.646 (2026): proof of security', url: S.s316646 },
    { label: 'Florida Statutes s. 627.7275 (2026): reinstatement policies', url: S.s6277275 },
    { label: 'Florida Statutes s. 322.34 (2026): driving while license suspended', url: S.s32234 },
  ],
};

const es: PostTranslation = {
  title: 'Licencia suspendida por no tener seguro en Florida: cómo reactivarla paso a paso',
  metaTitle: 'Licencia suspendida por falta de seguro en Florida | M&K Agency',
  description:
    '¿Le suspendieron la licencia y la placa por falta de seguro en Florida? Cómo leer la carta FR, revisar su estatus, pagar la tarifa y reactivarla.',
  excerpt:
    'Si su seguro se canceló o se venció, Florida puede suspender su licencia y su registro. Así se lee la carta del FLHSMV, se corrige el récord y se evita que vuelva a pasar.',
  ogAlt: 'Ilustración de un carro estacionado, una licencia de conducir, una llave y un sobre con una señal de advertencia',
  category: 'Seguro de auto',
  body: [
    { type: 'p', text: '¿Le llegó una carta del Departamento de Seguridad en las Carreteras y Vehículos Motorizados de Florida (FLHSMV) que anuncia la suspensión de su licencia y su registro por el seguro? Tiene solución. Estos son los pasos que indica el FLHSMV, según sus instrucciones y los Estatutos de Florida de 2026.' },
    { type: 'callout', title: 'En resumen', text: 'Si su carro registrado se quedó sin PIP y PDL de Florida, el FLHSMV puede suspender **su licencia y su placa**. Para resolverlo, compre una póliza de Florida con al menos $10,000 de PIP y $10,000 de PDL que la aseguradora reporte al estado, o entregue la placa. Después pague la tarifa de restitución: **$150, $250 o $500**. No existe licencia temporal ni “hardship” para suspensiones por seguro.' },

    { type: 'h2', text: '¿Por qué Florida suspende la licencia por falta de seguro?' },
    { type: 'p', text: 'Todo dueño de un vehículo registrado de cuatro ruedas o más debe mantener **Protección contra Lesiones Personales (PIP)** y **Responsabilidad por Daños a la Propiedad (PDL)** durante todo el período del registro (s. 627.733). La cobertura debe seguir activa aunque el carro no se maneje o no funcione (FLHSMV). Detalles en nuestra guía del [seguro mínimo de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements).' },
    { type: 'p', text: 'Las aseguradoras deben reportar al FLHSMV cualquier cancelación o no renovación del PIP o el PDL **dentro de 10 días**, y avisarle a usted por escrito (s. 324.0221(1)). Si los registros del departamento no muestran la cobertura requerida, se suspenden **el registro y la licencia** del dueño, previo aviso y oportunidad de ser escuchado (s. 324.0221(2)). Una condena en la corte por manejar sin prueba de seguro puede llevar a la misma suspensión (s. 316.646(3)).' },

    { type: 'h2', text: 'Paso 1: Busque el número de sanción FR en la carta' },
    { type: 'p', text: 'Estas cartas traen un número de **sanción FR**; según el FLHSMV, el primer dígito indica el tipo de caso. Los más comunes:' },
    { type: 'ul', items: [
      '**FR7**: el estado no puede confirmar el seguro de un vehículo registrado a su nombre.',
      '**FR2**: una corte lo declaró culpable de manejar sin prueba de seguro.',
      '**FR1 y FR9**: un accidente en el que su vehículo quizás no tenía la cobertura requerida. Tras un choque con lesionados sin cobertura de lesiones corporales (BI), pueden exigir liberaciones firmadas y un SR-22 por tres años. Vea nuestra [guía del SR-22](/es/blog/sr22-florida-guia).',
    ] },
    { type: 'p', text: '¿Perdió la carta? El FLHSMV permite ver una copia en **MyDMV Portal**, y usted puede revisar el estatus de su licencia cuando quiera con la herramienta en línea **Driver License Check**.' },

    { type: 'h2', text: 'Paso 2: Si sí tenía seguro, corrija el récord' },
    { type: 'p', text: 'A veces la póliza existía, pero los registros no coinciden. Antes de la fecha de suspensión, el FLHSMV recomienda llamar a la aseguradora y confirmar que:' },
    { type: 'ul', items: [
      'El número de póliza y el código de compañía de cinco dígitos (en su tarjeta de seguro) son correctos.',
      'La póliza estaba vigente antes de la fecha de suspensión y es una póliza de Florida.',
      'La aseguradora tiene el VIN correcto y su dirección actual.',
    ] },
    { type: 'p', text: 'Luego pida a la aseguradora que reporte la póliza electrónicamente. También puede ingresar los datos en Driver License Check o en la línea automatizada 850-617-3000. Ojo: si la aseguradora no confirma lo que usted envía, el FLHSMV suspende la licencia y el registro de inmediato.' },

    { type: 'h2', text: 'Paso 3: Si el seguro sí se venció, reactive la licencia' },
    { type: 'p', text: 'En un caso FR7, el FLHSMV ofrece dos caminos:' },
    { type: 'ol', items: [
      '**Asegurar el vehículo:** compre una póliza de Florida con al menos $10,000 de PIP y $10,000 de PDL y pida a la aseguradora que la reporte electrónicamente al FLHSMV.',
      '**O entregar la placa**, si ya no va a usar ese carro: lleve la placa y el registro a una oficina de licencias y vehículos o a la oficina del recaudador de impuestos (Tax Collector), o envíelos por correo al FLHSMV.',
    ] },
    { type: 'p', text: 'Además, pague la tarifa de restitución que indica la carta:' },
    { type: 'ul', items: [
      '**En línea**, en MyDMV Portal (pestaña Driver License y luego Sanction Inquiry). Ahí también puede actualizar los datos del seguro.',
      '**En persona**, en una oficina de licencias o del Tax Collector. El Tax Collector puede cobrar un cargo de servicio de $6.25.',
      '**Por correo**, contando unos diez días hábiles.',
    ] },

    { type: 'h2', text: '¿De cuánto es la tarifa de restitución?' },
    { type: 'p', text: 'La fija la ley y no es reembolsable (s. 324.0221(3)): **$150** la primera vez, **$250** la segunda y **$500** por cada una adicional dentro de los tres años siguientes a la primera. Si pasan tres años sin una segunda restitución, la siguiente vuelve a ser de $150. Si le suspendieron la licencia y el registro a la vez, paga **una sola** tarifa por ambos.' },

    { type: 'h2', text: 'Después de una multa por no tener prueba de seguro (FR2)' },
    { type: 'p', text: 'Si tenía seguro ese día y no pudo mostrarlo, envíe los datos de la póliza por MyDMV Portal, fax o correo. Si el vehículo era suyo y **no estaba asegurado**, las reglas son más estrictas: compre una **póliza de PIP de seis meses, no cancelable, con certificado SR-22**, que la aseguradora presenta electrónicamente, y manténgala **dos años** desde la restitución; o entregue la placa. Si la consigue antes de la fecha de suspensión, la evita; si no, también paga la tarifa. La ley obliga a las aseguradoras a ofrecer pólizas para restitución, sujetas a sus normas de suscripción y por al menos seis meses (s. 627.7275(2)).' },
    { type: 'p', text: '¿No tiene carro? Lea sobre el [SR-22 para no propietarios](/es/blog/non-owner-sr22-florida).' },

    { type: 'h2', text: 'No maneje hasta que el FLHSMV lo muestre como válido' },
    { type: 'p', text: 'Según el FLHSMV, **no hay licencia temporal ni “hardship”** para suspensiones relacionadas con el seguro. Manejar con la licencia suspendida es una infracción de tránsito; si usted sabía de la suspensión, se convierte en un delito menor (misdemeanor), con penas más duras si se repite (s. 322.34).' },

    { type: 'h2', text: 'Cómo evitar otra suspensión' },
    { type: 'ul', items: [
      '**Entregue la placa antes de cancelar el seguro** de un carro que vendió, guardó o dejó de usar. Según el FLHSMV, así evita la suspensión y la tarifa de restitución.',
      'Si cambia de aseguradora, confirme que la nueva póliza empiece antes de que termine la anterior.',
      'Según el FLHSMV, los militares en servicio activo destinados fuera de Florida pueden estar exentos. Para servicio de emergencia en el extranjero, la s. 627.733(5) exige avisar al FLHSMV antes y después.',
      'Lleve la prueba de seguro en el carro, en papel o en el teléfono (s. 316.646).',
    ] },

    { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
    { type: 'p', text: 'Tráiganos la carta del FLHSMV. Le explicamos qué pide su sanción FR, revisamos pólizas de Florida que cumplan el requisito y confirmamos que la aseguradora reporte la cobertura. Si su caso exige SR-22, vea nuestra página de [SR-22 en Florida City](/es/sr22-insurance-florida-city), o empiece por el [seguro de carro en Florida City](/es/car-insurance-florida-city). [Pida su cotización](/es/quote) o llame al **(305) 859-3953**. Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034; de lunes a viernes de 9 a 6, sábados con cita.' },
    { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza, y sus requisitos exactos los fija su carta del FLHSMV. Esto es información general, no asesoría legal: consulte a un agente con licencia antes de cambiar su seguro.' },
  ],
  faq: [
    { q: '¿De cuánto es la tarifa de restitución?', a: '$150 la primera vez, $250 la segunda y $500 por cada una adicional dentro de los tres años siguientes a la primera (s. 324.0221(3)). Una sola tarifa cubre licencia y registro. El Tax Collector puede sumar un cargo de servicio de $6.25.' },
    { q: '¿Necesito SR-22 si se me venció el seguro?', a: 'En una carta típica por cancelación (FR7), no: el FLHSMV pide una póliza de Florida con PIP y PDL reportada por la aseguradora, o entregar la placa, más la tarifa. El SR-22 aparece en otros casos, como una condena FR2 sin seguro. Su carta indica qué le aplica.' },
    { q: '¿Cómo sé si mi licencia está suspendida?', a: 'Con la herramienta Driver License Check del FLHSMV o entrando a MyDMV Portal, donde también aparece su número de sanción FR. Si envió documentos por correo, cuente unos diez días hábiles.' },
  ],
  sources: [
    { label: 'FLHSMV: Requisitos de seguro de Florida (cobertura continua, sanciones, sin licencia hardship)', url: S.insEs },
    { label: 'FLHSMV: Received a Letter (números de sanción FR, MyDMV Portal)', url: S.letter },
    { label: 'FLHSMV: instrucciones de la carta FR700 (seguro no confirmado; cómo reactivar)', url: S.fr7 },
    { label: 'FLHSMV: instrucciones de la carta FR200 (condena por no tener prueba de seguro)', url: S.fr2 },
    { label: 'FLHSMV: instrucciones de la carta FR100 (accidente sin la cobertura requerida)', url: S.fr1 },
    { label: 'FLHSMV: Driver License Check', url: S.dlcheck },
    { label: 'Estatutos de Florida s. 324.0221 (2026): reportes, suspensión y tarifas de restitución', url: S.s3240221 },
    { label: 'Estatutos de Florida s. 627.733 (2026): seguro obligatorio; exención militar', url: S.s627733 },
    { label: 'Estatutos de Florida s. 316.646 (2026): prueba de seguro', url: S.s316646 },
    { label: 'Estatutos de Florida s. 627.7275 (2026): pólizas para restitución', url: S.s6277275 },
    { label: 'Estatutos de Florida s. 322.34 (2026): manejar con la licencia suspendida', url: S.s32234 },
  ],
};

const ru: PostTranslation = {
  title: 'Права приостановлены из-за отсутствия страховки во Флориде: как их восстановить',
  metaTitle: 'Права приостановлены из-за страховки во Флориде | M&K Agency',
  description:
    'Во Флориде приостановили права и номер из-за перерыва в страховке? Как прочитать письмо FR, проверить статус, оплатить сбор и восстановить права.',
  excerpt:
    'Перерыв в автостраховке во Флориде может обернуться приостановкой и прав, и регистрации машины. Разбираем письмо FLHSMV, шаги по восстановлению и как не допустить повторения.',
  ogAlt: 'Иллюстрация: припаркованная машина, водительское удостоверение, ключ и конверт со знаком предупреждения',
  category: 'Автострахование',
  body: [
    { type: 'p', text: 'Пришло письмо от Департамента безопасности дорожного движения и транспортных средств Флориды (FLHSMV) о том, что ваши права и регистрацию машины приостановят из-за страховки? Это решаемая проблема. Разберём, почему так происходит и какие шаги для восстановления указывает FLHSMV, опираясь на его инструкции и Статуты Флориды в редакции 2026 года.' },
    { type: 'callout', title: 'Коротко', text: 'Если на машине, зарегистрированной на ваше имя, не было флоридских PIP и PDL, FLHSMV может приостановить **и права, и номерной знак**. Чтобы это исправить, нужно оформить флоридский полис минимум с $10,000 PIP и $10,000 PDL, о котором страховая сообщит штату, либо сдать номер. Затем оплачивается сбор за восстановление — **$150, $250 или $500**. Временных или «хардшип»-прав при приостановке из-за страховки не бывает.' },

    { type: 'h2', text: 'Почему во Флориде приостанавливают права из-за страховки' },
    { type: 'p', text: 'Владелец любой зарегистрированной машины с четырьмя и более колёсами обязан держать **PIP (Personal Injury Protection)** и **PDL (Property Damage Liability)** весь срок регистрации (s. 627.733). FLHSMV уточняет: страховка нужна, даже если машина стоит без дела или не на ходу. О минимальных требованиях и о том, что они покрывают, — в нашей статье про [минимальную автостраховку во Флориде](/ru/blog/florida-minimum-car-insurance-requirements).' },
    { type: 'p', text: 'Штат узнаёт о перерыве, потому что страховые компании обязаны сообщать в FLHSMV об отмене или непродлении PIP или PDL **в течение 10 дней** и письменно предупреждать клиента, что об этом будет сообщено (s. 324.0221(1)). Если по данным департамента обязательной страховки нет, он приостанавливает **регистрацию и водительские права** владельца — после уведомления и возможности возразить (s. 324.0221(2)). К такой же приостановке может привести и решение суда за езду без подтверждения страховки (s. 316.646(3)).' },

    { type: 'h2', text: 'Шаг 1. Найдите в письме номер санкции FR' },
    { type: 'p', text: 'В письмах FLHSMV о страховке указан номер **санкции FR**, и, по словам департамента, первая цифра показывает тип дела. Самые частые:' },
    { type: 'ul', items: [
      '**FR7** — штат не может подтвердить страховку машины, зарегистрированной на вас.',
      '**FR2** — суд признал вас виновным в езде без подтверждения страховки.',
      '**FR1 и FR9** — ДТП, в котором у вашей машины, возможно, не было обязательной страховки. Здесь могут потребовать подписанные отказы от претензий (releases) других участников, а после аварии с пострадавшими без страховки ответственности за телесные повреждения (BI) — SR-22 на три года. Подробнее — в нашем [гиде по SR-22](/ru/blog/sr22-florida-guia).',
    ] },
    { type: 'p', text: 'Потеряли письмо? Копию можно посмотреть в личном кабинете **MyDMV Portal**, а статус прав в любой момент проверяется онлайн-сервисом **Driver License Check**.' },

    { type: 'h2', text: 'Шаг 2. Если страховка была, исправьте данные' },
    { type: 'p', text: 'Бывает, что полис действовал, но в базе штата этого не видно. До даты приостановки, указанной в письме, FLHSMV советует позвонить в страховую и проверить:' },
    { type: 'ul', items: [
      'номер полиса и пятизначный код компании (он есть на страховой карточке);',
      'что полис действовал до даты приостановки и оформлен именно во Флориде;',
      'что у страховой правильный VIN машины и ваш текущий адрес.',
    ] },
    { type: 'p', text: 'Затем попросите страховую отправить данные о полисе в FLHSMV электронно. Внести сведения можно и самостоятельно — через Driver License Check или по автоматической линии департамента 850-617-3000. Но учтите: если страховая не подтвердит ваши данные, права и регистрация будут приостановлены сразу. Решающее значение имеет именно сообщение от страховой.' },

    { type: 'h2', text: 'Шаг 3. Если перерыв действительно был — восстановите права' },
    { type: 'p', text: 'Для дела FR7 FLHSMV предлагает два варианта:' },
    { type: 'ol', items: [
      '**Застраховать машину**: оформить флоридский полис минимум с $10,000 PIP и $10,000 PDL и попросить страховую электронно сообщить о нём в FLHSMV.',
      '**Или сдать номер**, если машина на дороге больше не нужна: отнести номерной знак и регистрацию в офис по выдаче прав и регистрации транспорта или в офис Tax Collector либо отправить их в FLHSMV почтой.',
    ] },
    { type: 'p', text: 'В обоих случаях нужно оплатить сбор за восстановление, указанный в письме:' },
    { type: 'ul', items: [
      '**онлайн** — в MyDMV Portal (вкладка Driver License → Sanction Inquiry); там же можно обновить данные о страховке, если страховая ещё их не отправила;',
      '**лично** — в офисе по выдаче прав или Tax Collector; Tax Collector может взять сервисный сбор $6.25;',
      '**почтой** — обработка занимает около десяти рабочих дней.',
    ] },

    { type: 'h2', text: 'Сколько составляет сбор за восстановление' },
    { type: 'p', text: 'Сумма установлена законом и не возвращается (s. 324.0221(3)): **$150** за первое восстановление, **$250** за второе и **$500** за каждое следующее в течение трёх лет после первого. Если за три года второго восстановления не было, следующее снова обойдётся в $150. Если приостановлены и права, и регистрация, платится **один** сбор за всё.' },

    { type: 'h2', text: 'После штрафа за отсутствие подтверждения страховки (FR2)' },
    { type: 'p', text: 'Если в день штрафа страховка была, а показать её вы не смогли, FLHSMV принимает данные полиса через MyDMV Portal, по факсу или почтой. Если же ваша машина была **не застрахована**, требования жёстче: нужен **шестимесячный неотменяемый полис PIP с формой SR-22**, которую страховая подаёт электронно, и держать его **два года** с даты восстановления; альтернатива — сдать номер. Успеете оформить такой полис до даты приостановки — приостановки не будет; если позже — придётся ещё и оплатить сбор. Закон обязывает страховые предлагать полисы для восстановления прав — с учётом их правил андеррайтинга и сроком не менее шести месяцев (s. 627.7275(2)).' },
    { type: 'p', text: 'Своей машины нет, а SR-22 нужен? Почитайте о [SR-22 для тех, у кого нет машины (non-owner)](/ru/blog/non-owner-sr22-florida).' },

    { type: 'h2', text: 'Не садитесь за руль, пока FLHSMV не покажет, что права действуют' },
    { type: 'p', text: 'FLHSMV прямо пишет: **временных или «хардшип»-прав** при приостановке из-за страховки нет. Езда с приостановленными правами — нарушение правил движения, а если вы знали о приостановке — уже уголовно наказуемый проступок (misdemeanor), и за повторные случаи наказание строже (s. 322.34).' },

    { type: 'h2', text: 'Как не допустить повторения' },
    { type: 'ul', items: [
      '**Сдайте номер до того, как отменить страховку** на машину, которую продали, поставили на хранение или перестали водить. По словам FLHSMV, так вы избежите приостановки и сбора за восстановление.',
      'Меняете страховую — убедитесь, что новый полис начинает действовать раньше, чем заканчивается старый.',
      'По данным FLHSMV, военнослужащие на действительной службе за пределами Флориды могут быть освобождены от требования. При чрезвычайной службе за границей s. 627.733(5) требует уведомить FLHSMV до и после.',
      'Возите подтверждение страховки в машине — на бумаге или в телефоне (s. 316.646).',
    ] },
    { type: 'p', text: 'Недавно переехали во Флориду? Посмотрите наш гид по [автостраховке для новоприбывших](/ru/blog/seguro-auto-licencia-extranjera-florida).' },

    { type: 'h2', text: 'Чем поможет M&K Agency' },
    { type: 'p', text: 'Принесите нам письмо от FLHSMV. Мы объясним, чего требует ваша санкция FR, подберём варианты флоридских полисов, которые отвечают требованию, и проследим, чтобы страховая сообщила о покрытии штату. Если по вашему делу нужен SR-22, смотрите страницу [SR-22 во Флорида-Сити](/ru/sr22-insurance-florida-city) или начните со страницы об [автостраховке во Флорида-Сити](/ru/car-insurance-florida-city). [Запросите расчёт](/ru/quote) или позвоните: **(305) 859-3953**, мы говорим по-русски. Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034; пн–пт с 9 до 6, в субботу по записи.' },
    { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений конкретного полиса, а точные требования по вашему делу определяют письмо и данные FLHSMV. Эта статья — общая информация, а не юридическая консультация. Перед покупкой или изменением страховки посоветуйтесь с лицензированным агентом.' },
  ],
  faq: [
    { q: 'Сколько нужно заплатить за восстановление прав?', a: '$150 за первое восстановление, $250 за второе и $500 за каждое следующее в течение трёх лет после первого (s. 324.0221(3)). Один сбор покрывает и права, и регистрацию. Tax Collector может добавить сервисный сбор $6.25.' },
    { q: 'Нужен ли SR-22, если страховка просто прервалась?', a: 'В типичном деле об отмене полиса (FR7) FLHSMV требует флоридский полис с PIP и PDL, о котором сообщит страховая, или сдачу номера, плюс сбор. SR-22 нужен в других ситуациях — например, при санкции FR2 за езду без страховки или после ДТП с пострадавшими без покрытия. Что касается именно вас, указано в письме.' },
    { q: 'Как проверить, приостановлены ли мои права?', a: 'Через онлайн-сервис FLHSMV Driver License Check или в MyDMV Portal — там же виден номер санкции FR. Если отправляли документы почтой, закладывайте около десяти рабочих дней.' },
  ],
  sources: [
    { label: 'FLHSMV: Florida Insurance Requirements (непрерывные PIP/PDL, санкции, нет «хардшип»-прав)', url: S.ins },
    { label: 'FLHSMV: Received a Letter (номера санкций FR, MyDMV Portal)', url: S.letter },
    { label: 'FLHSMV: инструкции к письму FR700 (страховка не подтверждена; как восстановить права)', url: S.fr7 },
    { label: 'FLHSMV: инструкции к письму FR200 (осуждение за отсутствие подтверждения страховки)', url: S.fr2 },
    { label: 'FLHSMV: инструкции к письму FR100 (ДТП без обязательной страховки)', url: S.fr1 },
    { label: 'FLHSMV: Driver License Check', url: S.dlcheck },
    { label: 'Florida Statutes s. 324.0221 (2026): сообщения страховщиков, приостановка, сборы за восстановление', url: S.s3240221 },
    { label: 'Florida Statutes s. 627.733 (2026): обязательная страховка; исключение для военных', url: S.s627733 },
    { label: 'Florida Statutes s. 316.646 (2026): подтверждение страховки', url: S.s316646 },
    { label: 'Florida Statutes s. 627.7275 (2026): полисы для восстановления прав', url: S.s6277275 },
    { label: 'Florida Statutes s. 322.34 (2026): езда с приостановленными правами', url: S.s32234 },
  ],
};

export const post: BlogPost = {
  slug: 'florida-license-suspended-no-insurance',
  datePublished: '2026-10-19',
  translations: { en, es, ru },
};
