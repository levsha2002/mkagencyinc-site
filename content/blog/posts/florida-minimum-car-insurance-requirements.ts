import type { BlogPost, PostTranslation } from '../types';

// Refreshed 2026-11-26 (ET). Facts re-checked that day against official sources:
// - 2026 Florida Statutes on Online Sunshine (leg.state.fl.us); texts identical to the Oct 8 check:
//   s. 627.730 (Florida Motor Vehicle No-Fault Law = ss. 627.730-627.7405); s. 627.732(3) four or more wheels;
//   s. 627.733(1)-(2), (4) required security, continuous, nonresident >90 of 365 days, uninsured owner loses tort immunity;
//   s. 627.736(1)(a)-(c), (2), (4)(e) PIP $10,000 + $5,000 death, 80% medical, 60% income, 14 days, EMC $10,000 / $2,500,
//   no massage/acupuncture, exclusions, owner's own car in U.S./Canada; s. 627.737(1)-(2) tort threshold;
//   s. 627.739(1)-(3), (5) PIP deductibles $250/$500/$1,000 offered, named insured + resident relatives only,
//   lost-income exclusion option and the statute's advice not to elect it if employed;
//   s. 324.022(1)-(2) PDL $10,000 or $30,000 combined; s. 324.021(7) 10/20/10; s. 324.023 DUI 100/300/50;
//   s. 324.0221(1)-(3) 10-day report, suspension, $150/$250/$500; s. 316.646(1), (4) proof paper/electronic, penalty;
//   s. 320.02(5)(a) registration refused without proof of PIP/PDL.
// - FLHSMV Florida Insurance Requirements (PIP/PDL, continuous, taxis 125/250/50, nonresident working or with
//   children in public school registers within 10 days, plate before cancel, up to 3 years, fee up to $500);
//   FLHSMV Involved in a Crash? (injury crash: 10/20/10 + SR-22 for 3 years + releases/deposit;
//   property-damage-only crash: releases/deposit, buy PIP/PDL or surrender plate, $150-$500 fee).
// - Florida DFS Personal Automobile Insurance Overview (PIP follow-up care depends on an emergency medical
//   condition; PD includes loss of use and a legal defense until the limit is paid; Med Pay; UM).
// - Florida Senate bill pages: SB 522 (2026) died in Banking and Insurance 3/13/2026; HB 769 (2026) died in
//   Civil Justice & Claims Subcommittee 3/13/2026. Legislature 2027 Regular Session bill histories dated
//   11/25/2026: no motor vehicle insurance bill listed. 2027 session convenes March 2, 2027 (Senate session dates).
// No private insurers named; dollar figures are legal limits and state fees only; no rate information.

const LEG = 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=';
const URL = {
  ins: 'https://www.flhsmv.gov/insurance/',
  crash: 'https://www.flhsmv.gov/insurance/involved-in-a-crash/',
  dfs: 'https://www.myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview',
  s627730: `${LEG}0600-0699/0627/Sections/0627.730.html`,
  s627733: `${LEG}0600-0699/0627/Sections/0627.733.html`,
  s627736: `${LEG}0600-0699/0627/Sections/0627.736.html`,
  s627737: `${LEG}0600-0699/0627/Sections/0627.737.html`,
  s627739: `${LEG}0600-0699/0627/Sections/0627.739.html`,
  s324022: `${LEG}0300-0399/0324/Sections/0324.022.html`,
  s324023: `${LEG}0300-0399/0324/Sections/0324.023.html`,
  s3240221: `${LEG}0300-0399/0324/Sections/0324.0221.html`,
  s316646: `${LEG}0300-0399/0316/Sections/0316.646.html`,
  s32002: `${LEG}0300-0399/0320/Sections/0320.02.html`,
  sb522: 'https://www.flsenate.gov/Session/Bill/2026/522',
  hb769: 'https://www.flsenate.gov/Session/Bill/2026/769',
  sen2027: 'https://www.leg.state.fl.us/data/session/2027/citator/Daily/senhist.pdf',
  dates2027: 'https://www.flsenate.gov/Session/Calendar/2027/',
};

const en: PostTranslation = {
  title: 'Florida Minimum Car Insurance Requirements (2026): What PIP and PDL Do and Don\u2019t Cover',
  metaTitle: 'Florida Minimum Car Insurance: PIP & PDL (2026) | M&K Agency',
  description:
    'Florida is still a no-fault state: $10,000 PIP and $10,000 PDL. What each pays, the 14-day rule, PIP deductible options, when BI is required and lapse rules.',
  ogAlt: 'Illustration of a blue car on a road beside a palm tree, two shields with a medical cross and a fence, a checklist and a phone showing an insurance card',
  excerpt:
    'Florida still requires only two coverages: $10,000 of PIP and $10,000 of property damage liability. Updated for late 2026: what they pay, what they leave out, and what a lapse means.',
  category: 'Auto insurance',
  body: [
    { type: 'p', text: 'What is the minimum auto insurance Florida actually requires? Two coverages, each with a $10,000 floor. Florida is still a **no-fault** state: the Florida Motor Vehicle No-Fault Law (ss. 627.730\u2013627.7405) is in the 2026 Florida Statutes. The 2026 bills to repeal it, SB 522 and HB 769, died in committee on March 13, 2026, and the Legislature\u2019s 2027 bill histories dated November 25, 2026 listed no motor vehicle insurance bill. The 2027 session opens March 2, 2027. Until a bill passes, the rules below apply.' },
    { type: 'callout', title: 'The short version', text: 'Every car, SUV, pickup or van registered in Florida needs **$10,000 of Personal Injury Protection (PIP)** and **$10,000 of Property Damage Liability (PDL)**, kept continuously, from an insurer licensed in Florida. Bodily injury liability is **not** required for most drivers.' },

    { type: 'h2', text: 'Who has to carry PIP and PDL' },
    { type: 'ul', items: [
      'The owner or registrant of a vehicle with **four or more wheels** that must be registered in Florida (s. 627.733). Motorcycles fall outside this definition. The tax collector will not issue a registration without proof of PIP and PDL (s. 320.02(5)(a)).',
      'Coverage must stay in force for the **whole registration period**, even if the car is parked, broken down or out of state (FLHSMV).',
      'A nonresident whose car has been in Florida **more than 90 of the last 365 days** must carry it (s. 627.733(2)). A nonresident who takes a job here or enrolls children in a Florida public school must get a Florida registration and plate **within 10 days** (FLHSMV). Seasonal residents: see our [winter residents guide](/en/blog/winter-residents-florida-license-registration-insurance).',
      'While driving, keep **proof of coverage** with you, on paper or on your phone (s. 316.646; see [electronic proof of insurance](/en/blog/electronic-proof-of-insurance-florida)).'
    ] },

    { type: 'h2', text: 'What PIP pays, and the 14-day rule' },
    { type: 'p', text: 'PIP pays for **your own injuries** no matter who caused the crash. Under s. 627.736 the $10,000 limit covers:' },
    { type: 'ul', items: [
      '**80% of reasonable medical expenses** for medically necessary care: doctor, hospital, X-rays, dental, rehabilitation and ambulance.',
      '**60% of lost gross income** if the injury keeps you from working, plus help with household tasks you can\u2019t do.',
      'A separate **$5,000 death benefit** per person.',
    ] },
    { type: 'p', text: 'PIP covers you and relatives who live with you, passengers, people driving your car with permission, and Florida residents on foot or on a bicycle hit by your car who don\u2019t have PIP of their own. It also covers you in your own car anywhere in the U.S. or Canada.' },
    { type: 'callout', title: 'Two rules that cut benefits', text: 'Get **initial treatment within 14 days** of the crash from a physician, dentist, chiropractor, nurse practitioner, hospital or EMS. The full $10,000 is available only if a qualified provider finds an **emergency medical condition**; otherwise medical benefits stop at **$2,500**. Massage and acupuncture are not covered.' },

    { type: 'h2', text: 'PIP choices on your policy: deductible and lost income' },
    { type: 'p', text: 'Florida law makes insurers offer PIP **deductibles of $250, $500 and $1,000** at application and at each renewal (s. 627.739). A deductible applies only to the named insured and relatives living in the household, never to passengers or pedestrians. After it is met, up to $10,000 in benefits remains available. Insurers must also offer to **exclude lost-income benefits**. The statute itself warns against that choice if you or your relatives have a job, because lost wages would then not be paid. Your declarations page shows what you chose.' },

    { type: 'h2', text: 'What PIP does not do' },
    { type: 'ul', items: [
      'It never pays to repair **any vehicle**, yours or someone else\u2019s.',
      'It leaves **20% of medical bills** and **40% of lost income** to you, and stops at the limit.',
      'An insurer may exclude injuries in **another car you own that isn\u2019t on the policy**, injuries to someone driving your car **without permission**, and injuries caused intentionally or while committing a felony.',
      'It is not liability coverage: if you seriously injure someone, PIP doesn\u2019t pay **their claim against you**.',
    ] },
    { type: 'p', text: 'In exchange, s. 627.737 limits lawsuits: an injured person can claim pain and suffering only for a permanent injury, significant and permanent scarring or disfigurement, the permanent loss of an important bodily function, or death. An owner who crashes without the required coverage loses that protection and personally owes the PIP benefits (s. 627.733(4)).' },

    { type: 'h2', text: 'What PDL covers' },
    { type: 'p', text: 'Property damage liability pays for damage **you or someone driving your insured car** cause to other people\u2019s property: another car, a fence, a mailbox, a storefront. The Florida Department of Financial Services notes it includes the owner\u2019s **loss of use**, and that the insurer provides a legal defense until the limit is paid. The minimum is $10,000 per crash; a policy with a $30,000 combined bodily injury and property damage limit also qualifies (s. 324.022). PDL doesn\u2019t fix your own car; that takes [collision and comprehensive](/en/blog/comprehensive-vs-collision-florida), which state law doesn\u2019t require.' },

    { type: 'h2', text: 'When bodily injury liability becomes mandatory' },
    { type: 'p', text: 'Bodily injury liability (BI) pays for injuries you cause to others. Florida doesn\u2019t require it up front, but the FLHSMV can demand it later:' },
    { type: 'ul', items: [
      '**At-fault injury crash with no BI.** If you got a moving violation, injuries were noted on the report and you lacked full liability coverage, you need 10/20/10 coverage with an **SR-22** filing for three years, plus releases or a security deposit.',
      '**At-fault crash with property damage only and no PIP/PDL.** You need releases or a deposit, then PIP and PDL or surrender of the plate, plus a $150\u2013$500 reinstatement fee where it applies.',
      '**DUI conviction.** An **FR-44** with $100,000/$300,000 BI and $50,000 property damage, for at least three years (s. 324.023).',
    ] },
    { type: 'p', text: 'More detail: [bodily injury liability and FR-44](/en/blog/bodily-injury-liability-fr44-florida) and [non-owner SR-22](/en/blog/non-owner-sr22-florida).' },

    { type: 'h2', text: 'Lapses, suspensions and reinstatement fees' },
    { type: 'p', text: 'Insurers must report a PIP or PDL cancellation to the FLHSMV within 10 days, and after notice the department suspends the **driver license and registration** (s. 324.0221). A suspension can last up to three years, with no hardship license for insurance suspensions. To reinstate you show proof of coverage and pay **$150** the first time, **$250** the second and **$500** for each later one within three years of the first. Step by step: [license suspended for no insurance](/en/blog/florida-license-suspended-no-insurance).' },
    { type: 'ul', items: [
      'No longer using the car? **Turn in the plate before you cancel.**',
      'Moving away? Keep the Florida policy until the car is registered in the new state or the plates are surrendered.',
      'Showing an officer proof of insurance you know is not in force is a first-degree misdemeanor (s. 316.646(4)).',
    ] },

    { type: 'h2', text: 'Minimum is not the same as enough' },
    { type: 'p', text: 'Serious injuries can quickly outrun $10,000 of PIP, and $10,000 of PDL may not cover a newer car or a multi-car crash. With no BI, you face an injury claim on your own. Before a holiday trip (see our [Thanksgiving driving guide](/en/blog/thanksgiving-holiday-driving-florida)), review: BI limits, [uninsured motorist coverage](/en/blog/uninsured-motorist-coverage-florida), medical payments coverage, collision and comprehensive, and a [personal umbrella](/en/umbrella-insurance-florida-city) for homeowners.' },

    { type: 'h2', text: 'Talk it through with a local agent' },
    { type: 'p', text: 'M&K Agency helps drivers across South Miami-Dade in English, Spanish and Russian. See [car insurance in Florida City](/en/car-insurance-florida-city), [request a quote](/en/quote) or call [(305) 859-3953](tel:+13058593953). Office: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034.' },
    { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you buy or change coverage. This guide is general information, not legal advice.' },
  ],
  faq: [
    { q: 'Is Florida still a no-fault state in 2026?', a: 'Yes. The No-Fault Law is in the 2026 Florida Statutes. The 2026 repeal bills, SB 522 and HB 769, died in committee on March 13, 2026, and no repeal had become law as of November 26, 2026.' },
    { q: 'What is the minimum car insurance in Florida?', a: '$10,000 of Personal Injury Protection and $10,000 of Property Damage Liability on every registered vehicle with four or more wheels, kept continuously.' },
    { q: 'Does PIP pay to fix my car?', a: 'No. PIP pays for injuries only. Damage to other people\u2019s property falls under PDL; damage to your own car needs collision or comprehensive.' },
  ],
  sources: [
    { label: 'FLHSMV: Florida Insurance Requirements', url: URL.ins },
    { label: 'FLHSMV: Involved in a Crash? (financial responsibility, SR-22)', url: URL.crash },
    { label: 'Florida DFS: Personal Automobile Insurance Overview', url: URL.dfs },
    { label: 'Florida Statutes s. 627.730 (2026): Florida Motor Vehicle No-Fault Law', url: URL.s627730 },
    { label: 'Florida Statutes s. 627.733 (2026): required security', url: URL.s627733 },
    { label: 'Florida Statutes s. 627.736 (2026): PIP benefits and exclusions', url: URL.s627736 },
    { label: 'Florida Statutes s. 627.737 (2026): tort exemption', url: URL.s627737 },
    { label: 'Florida Statutes s. 627.739 (2026): PIP deductibles and options', url: URL.s627739 },
    { label: 'Florida Statutes s. 324.022 (2026): property damage liability', url: URL.s324022 },
    { label: 'Florida Statutes s. 324.023 (2026): liability after DUI (FR-44)', url: URL.s324023 },
    { label: 'Florida Statutes s. 324.0221 (2026): insurer reports, suspension, reinstatement', url: URL.s3240221 },
    { label: 'Florida Statutes s. 316.646 (2026): proof of insurance', url: URL.s316646 },
    { label: 'Florida Statutes s. 320.02 (2026): registration and proof of insurance', url: URL.s32002 },
    { label: 'Florida Senate: SB 522 (2026), died in committee', url: URL.sb522 },
    { label: 'Florida Senate: HB 769 (2026), died in committee', url: URL.hb769 },
    { label: 'Florida Legislature: 2027 Regular Session history of Senate bills', url: URL.sen2027 },
    { label: 'Florida Senate: 2027 Regular Session dates', url: URL.dates2027 },
  ],
};

const es: PostTranslation = {
  title: 'Seguro mínimo de auto en Florida (2026): qué cubren el PIP y el PDL, y qué no',
  metaTitle: 'Seguro mínimo de auto en Florida: PIP y PDL (2026) | M&K Agency',
  description:
    'Florida sigue siendo un estado no-fault: $10,000 de PIP y $10,000 de PDL. Qué paga cada uno, la regla de los 14 días, los deducibles del PIP y cuándo exigen BI.',
  ogAlt: 'Ilustración de un carro azul en la carretera junto a una palma, dos escudos con una cruz médica y una cerca, una lista de verificación y un teléfono con una tarjeta de seguro',
  excerpt:
    'Florida sigue exigiendo solo dos coberturas: $10,000 de PIP y $10,000 de daños a la propiedad. Actualizado a fines de 2026: qué pagan, qué dejan fuera y qué pasa si el seguro se cae.',
  category: 'Seguro de auto',
  body: [
    { type: 'p', text: '¿Qué seguro de auto mínimo exige Florida? Dos coberturas de $10,000 cada una. Florida sigue siendo un estado **no-fault** (sin culpa): la ley no-fault (secciones 627.730 a 627.7405) está en los Estatutos de Florida de 2026. Los proyectos de 2026 para derogarla, SB 522 y HB 769, murieron en comité el 13 de marzo de 2026, y el historial de la sesión 2027 al 25 de noviembre de 2026 no mostraba proyectos sobre seguro de auto. La sesión 2027 empieza el 2 de marzo de 2027. Mientras no se apruebe un cambio, estas reglas siguen vigentes.' },
    { type: 'callout', title: 'En resumen', text: 'Todo carro, SUV, pickup o van registrado en Florida debe tener **$10,000 de Protección contra Lesiones Personales (PIP)** y **$10,000 de Responsabilidad por Daños a la Propiedad (PDL)**, sin interrupciones y con una aseguradora autorizada en Florida. La responsabilidad por lesiones corporales (BI) **no** es obligatoria para la mayoría.' },

    { type: 'h2', text: 'Quién tiene que llevar PIP y PDL' },
    { type: 'ul', items: [
      'El dueño o titular de cualquier vehículo de **cuatro ruedas o más** que deba registrarse en Florida (s. 627.733). Las motos quedan fuera de esta definición. Sin prueba de PIP y PDL no le emiten el registro (s. 320.02(5)(a)).',
      'La cobertura debe seguir vigente **todo el periodo de registro**, aunque el carro esté parqueado, dañado o fuera del estado (FLHSMV).',
      'Un no residente con el carro en Florida **más de 90 de los últimos 365 días** también debe tenerla (s. 627.733(2)). Si consigue trabajo aquí o inscribe a sus hijos en una escuela pública, debe sacar registro y placa de Florida **en 10 días** (FLHSMV).',
      'Al manejar, lleve la **prueba del seguro** en papel o en el teléfono (s. 316.646; vea [prueba electrónica del seguro](/es/blog/electronic-proof-of-insurance-florida)).'
    ] },
    { type: 'p', text: '¿Recién llegado? Vea [seguro de auto con licencia extranjera](/es/blog/seguro-auto-licencia-extranjera-florida) y la guía para [residentes de temporada](/es/blog/winter-residents-florida-license-registration-insurance).' },

    { type: 'h2', text: 'Qué paga el PIP y la regla de los 14 días' },
    { type: 'p', text: 'El PIP paga **sus propias lesiones**, sin importar quién causó el choque. Según la s. 627.736, el límite de $10,000 cubre:' },
    { type: 'ul', items: [
      'El **80% de los gastos médicos razonables** y necesarios: médico, hospital, rayos X, dentista, rehabilitación y ambulancia.',
      'El **60% del ingreso bruto perdido** si no puede trabajar, más ayuda con tareas de la casa.',
      'Un beneficio **aparte de $5,000 por fallecimiento** por persona.',
    ] },
    { type: 'p', text: 'Cubre a usted, a los familiares que viven con usted, a los pasajeros, a quien maneje su carro con permiso y a residentes de Florida atropellados a pie o en bicicleta sin PIP propio. También le cubre en su propio carro en EE. UU. y Canadá.' },
    { type: 'callout', title: 'Dos reglas que recortan beneficios', text: 'Reciba **atención inicial dentro de 14 días** del choque (médico, dentista, quiropráctico, enfermera de práctica avanzada, hospital o emergencias). Los $10,000 completos solo aplican si un proveedor calificado determina una **condición médica de emergencia**; si no, los beneficios médicos llegan a **$2,500**. Masajes y acupuntura no están cubiertos.' },

    { type: 'h2', text: 'Opciones del PIP en su póliza: deducible e ingreso perdido' },
    { type: 'p', text: 'Las aseguradoras deben ofrecer **deducibles de PIP de $250, $500 y $1,000** al contratar y en cada renovación (s. 627.739). El deducible aplica solo al asegurado nombrado y a sus familiares en la casa, nunca a pasajeros ni peatones; después siguen disponibles hasta $10,000. También deben ofrecer **excluir el ingreso perdido**, pero el propio estatuto advierte no elegirlo si usted o sus familiares trabajan, porque no se pagarían los salarios perdidos. Su página de declaraciones muestra lo que eligió.' },

    { type: 'h2', text: 'Lo que el PIP no hace' },
    { type: 'ul', items: [
      'Nunca paga la reparación de **ningún vehículo**, ni el suyo ni el ajeno.',
      'Le deja el **20% de las cuentas médicas** y el **40% del ingreso perdido**, y se detiene en el límite.',
      'Puede excluir lesiones en **otro carro suyo fuera de la póliza**, de quien maneje su carro **sin permiso**, y lesiones intencionales o al cometer un delito grave.',
      'No es cobertura de responsabilidad: si usted lesiona a alguien, el PIP no paga **su reclamo contra usted**.',
    ] },
    { type: 'p', text: 'A cambio, la s. 627.737 limita las demandas: solo se reclama dolor y sufrimiento por lesión permanente, cicatrices o desfiguración permanentes importantes, pérdida permanente de una función corporal importante o muerte. El dueño que choca sin la cobertura obligatoria pierde esa protección y paga de su bolsillo los beneficios de PIP (s. 627.733(4)).' },

    { type: 'h2', text: 'Qué cubre el PDL' },
    { type: 'p', text: 'El PDL paga lo que **usted o quien maneje su carro asegurado** dañe a otros: otro carro, una cerca, un buzón, una vitrina. Según el Departamento de Servicios Financieros de Florida, incluye la **pérdida de uso** y la aseguradora le defiende hasta agotar el límite. El mínimo es $10,000 por choque; también sirve una póliza con un límite combinado de $30,000 para lesiones y daños (s. 324.022). El PDL no arregla su carro: para eso están [collision y comprehensive](/es/blog/comprehensive-vs-collision-florida), que la ley no exige.' },

    { type: 'h2', text: 'Cuándo se vuelve obligatoria la responsabilidad por lesiones' },
    { type: 'p', text: 'La responsabilidad por lesiones (BI) paga las lesiones que usted cause a otros. Florida no la pide de entrada, pero el FLHSMV puede exigirla:' },
    { type: 'ul', items: [
      '**Choque con lesionados en el que usted tuvo la culpa, sin BI.** Si recibió una infracción de tránsito, hubo lesionados en el reporte y no tenía cobertura de responsabilidad completa, necesitará 10/20/10 con un **SR-22** por tres años, más liberaciones firmadas o un depósito.',
      '**Choque solo con daños materiales, con culpa y sin PIP/PDL.** Necesitará liberaciones o un depósito, luego PIP y PDL o entregar la placa, y un cargo de restablecimiento de $150 a $500 si aplica.',
      '**Condena por DUI.** Un **FR-44** con $100,000/$300,000 de BI y $50,000 de daños a la propiedad, por al menos tres años (s. 324.023).',
    ] },
    { type: 'p', text: 'Más detalles: [responsabilidad por lesiones y FR-44](/es/blog/bodily-injury-liability-fr44-florida) y nuestra [guía del SR-22](/es/blog/sr22-florida-guia).' },

    { type: 'h2', text: 'Si el seguro se cae: suspensión y cargos' },
    { type: 'p', text: 'Si se cancela el PIP o el PDL, la aseguradora avisa al FLHSMV en 10 días y, tras notificarle, el departamento suspende la **licencia y el registro** (s. 324.0221). Puede durar hasta tres años, sin licencia de emergencia. Para restablecerlos se presenta prueba de cobertura y se paga **$150** la primera vez, **$250** la segunda y **$500** cada vez siguiente dentro de los tres años desde la primera. Paso a paso: [licencia suspendida por no tener seguro](/es/blog/florida-license-suspended-no-insurance).' },
    { type: 'ul', items: [
      '¿Ya no usa el carro? **Entregue la placa antes de cancelar el seguro.**',
      '¿Se muda? Mantenga la póliza de Florida hasta registrar el carro en el nuevo estado o entregar las placas.',
      'Mostrar a un policía una prueba de seguro que usted sabe vencida es un delito menor de primer grado (s. 316.646(4)).',
    ] },

    { type: 'h2', text: 'Lo mínimo no siempre alcanza' },
    { type: 'p', text: 'Una lesión seria supera rápido $10,000 de PIP, y $10,000 de PDL quizá no alcancen para un carro nuevo o un choque múltiple. Sin BI, enfrenta solo un reclamo por lesiones. Antes de viajar en las fiestas ([guía de Acción de Gracias](/es/blog/thanksgiving-holiday-driving-florida)), revise los límites de BI, la [cobertura de motorista no asegurado](/es/blog/uninsured-motorist-coverage-florida), los pagos médicos (Med Pay), collision y comprehensive, y una [póliza umbrella personal](/es/umbrella-insurance-florida-city) si tiene casa.' },

    { type: 'h2', text: 'Hable con un agente local' },
    { type: 'p', text: 'M&K Agency atiende en español, inglés y ruso en el sur de Miami-Dade. Vea [seguro de auto en Florida City](/es/car-insurance-florida-city), [pida una cotización](/es/quote) o llame al [(305) 859-3953](tel:+13058593953). Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034.' },
    { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza. Hable con un agente con licencia antes de comprar o cambiar su seguro. Esta guía es información general, no asesoría legal.' },
  ],
  faq: [
    { q: '¿Florida sigue siendo un estado no-fault en 2026?', a: 'Sí. Los proyectos de derogación de 2026 (SB 522 y HB 769) murieron en comité, y al 26 de noviembre de 2026 ninguna derogación era ley.' },
    { q: '¿Cuál es el seguro mínimo de auto en Florida?', a: '$10,000 de PIP y $10,000 de PDL en cada vehículo registrado de cuatro ruedas o más, sin interrupciones.' },
    { q: '¿El PIP paga el arreglo de mi carro?', a: 'No. El PIP solo cubre lesiones. Su carro necesita collision o comprehensive.' },
  ],
  sources: [
    { label: 'FLHSMV: Florida Insurance Requirements (requisitos de seguro)', url: URL.ins },
    { label: 'FLHSMV: Involved in a Crash? (responsabilidad financiera, SR-22)', url: URL.crash },
    { label: 'Florida DFS: Personal Automobile Insurance Overview', url: URL.dfs },
    { label: 'Estatutos de Florida s. 627.730 (2026): ley no-fault', url: URL.s627730 },
    { label: 'Estatutos de Florida s. 627.733 (2026): seguro obligatorio', url: URL.s627733 },
    { label: 'Estatutos de Florida s. 627.736 (2026): beneficios y exclusiones del PIP', url: URL.s627736 },
    { label: 'Estatutos de Florida s. 627.737 (2026): límites a las demandas', url: URL.s627737 },
    { label: 'Estatutos de Florida s. 627.739 (2026): deducibles y opciones del PIP', url: URL.s627739 },
    { label: 'Estatutos de Florida s. 324.022 (2026): daños a la propiedad', url: URL.s324022 },
    { label: 'Estatutos de Florida s. 324.023 (2026): responsabilidad tras un DUI (FR-44)', url: URL.s324023 },
    { label: 'Estatutos de Florida s. 324.0221 (2026): reportes, suspensión, restablecimiento', url: URL.s3240221 },
    { label: 'Estatutos de Florida s. 316.646 (2026): prueba del seguro', url: URL.s316646 },
    { label: 'Estatutos de Florida s. 320.02 (2026): registro y prueba del seguro', url: URL.s32002 },
    { label: 'Senado de Florida: SB 522 (2026), murió en comité', url: URL.sb522 },
    { label: 'Senado de Florida: HB 769 (2026), murió en comité', url: URL.hb769 },
    { label: 'Legislatura de Florida: historial de proyectos del Senado, sesión 2027', url: URL.sen2027 },
    { label: 'Senado de Florida: fechas de la sesión 2027', url: URL.dates2027 },
  ],
};

const ru: PostTranslation = {
  title: 'Минимальная автостраховка во Флориде (2026): что покрывают PIP и PDL, а что нет',
  metaTitle: 'Минимальная автостраховка во Флориде: PIP и PDL | M&K Agency',
  description:
    'Флорида по-прежнему штат no-fault: $10,000 PIP и $10,000 PDL. Что они оплачивают, правило 14 дней, франшиза PIP, когда нужна BI и чем грозит перерыв.',
  ogAlt: 'Иллюстрация: синяя машина на дороге у пальмы, два щита с медицинским крестом и забором, чек-лист и телефон со страховой карточкой',
  excerpt:
    'Флорида по-прежнему требует всего две страховки: $10,000 PIP и $10,000 ответственности за чужое имущество. Обновлено в конце 2026 года: что они оплачивают, чего не покрывают и что будет при перерыве.',
  category: 'Автострахование',
  body: [
    { type: 'p', text: 'Какую минимальную автостраховку на самом деле требует Флорида? Две страховки, по $10,000 каждая. Флорида по-прежнему штат **no-fault** («без вины»): закон о страховании без учёта вины (статьи 627.730–627.7405) есть в Статутах Флориды 2026 года. Законопроекты 2026 года о его отмене, SB 522 и HB 769, умерли в комитетах 13 марта 2026 года, а в списках законопроектов сессии 2027 года на 25 ноября 2026 года не было ни одного проекта об автостраховании. Сессия 2027 года открывается 2 марта 2027 года. Пока законопроект не принят, он ничего не меняет, поэтому правила ниже действуют сегодня.' },
    { type: 'callout', title: 'Коротко', text: 'Каждая машина, SUV, пикап или вэн с регистрацией во Флориде должны иметь **$10,000 PIP (страховка от травм)** и **$10,000 PDL (ответственность за ущерб чужому имуществу)** — без перерывов и от страховщика с лицензией во Флориде. Ответственность за травмы других людей (BI) для большинства водителей **не** обязательна.' },

    { type: 'h2', text: 'Кто обязан иметь PIP и PDL' },
    { type: 'ul', items: [
      'Владелец машины с **четырьмя колёсами и более**, которую нужно регистрировать во Флориде (статья 627.733). Мотоциклы под это определение не попадают. Без подтверждения PIP и PDL регистрацию не выдадут (статья 320.02(5)(a)).',
      'Страховка должна действовать **весь срок регистрации**, даже если машина стоит, сломана или находится в другом штате (FLHSMV).',
      'Нерезидент, чья машина пробыла во Флориде **больше 90 из последних 365 дней**, тоже обязан её иметь (статья 627.733(2)). Если нерезидент устроился здесь на работу или записал детей в государственную школу Флориды, он должен получить флоридскую регистрацию и номер **в течение 10 дней** (FLHSMV).',
      'За рулём держите при себе **подтверждение страховки** — на бумаге или в телефоне (статья 316.646; см. [электронное подтверждение страховки](/ru/blog/electronic-proof-of-insurance-florida)).'
    ] },
    { type: 'p', text: 'Недавно переехали? Читайте наш материал об [автостраховке с иностранными правами](/ru/blog/seguro-auto-licencia-extranjera-florida), а если проводите здесь зиму — [гид для сезонных жителей](/ru/blog/winter-residents-florida-license-registration-insurance).' },

    { type: 'h2', text: 'Что оплачивает PIP и правило 14 дней' },
    { type: 'p', text: 'PIP оплачивает **ваши собственные травмы**, кто бы ни был виноват в аварии. По статье 627.736 лимит $10,000 покрывает:' },
    { type: 'ul', items: [
      '**80% разумных медицинских расходов** на необходимое лечение: врач, больница, рентген, стоматолог, реабилитация, скорая.',
      '**60% потерянного дохода** (до налогов), если травма не даёт работать, плюс помощь по дому, с которой вы не справляетесь.',
      'Отдельную **выплату $5,000 в случае смерти** на человека.',
    ] },
    { type: 'p', text: 'PIP покрывает вас и родственников, живущих с вами, пассажиров, тех, кто водит вашу машину с разрешения, а также жителей Флориды, сбитых вашей машиной пешком или на велосипеде, если у них нет своего PIP. Он действует и в вашей собственной машине в любой точке США или Канады.' },
    { type: 'callout', title: 'Два правила, урезающие выплаты', text: 'Первичную помощь нужно получить **в течение 14 дней** после аварии — у врача, стоматолога, хиропрактика, практикующей медсестры, в больнице или от скорой. Полные $10,000 доступны, только если квалифицированный специалист установит **неотложное медицинское состояние**; иначе медицинские выплаты ограничены **$2,500**. Массаж и иглоукалывание не покрываются.' },

    { type: 'h2', text: 'Опции PIP в полисе: франшиза и потерянный доход' },
    { type: 'p', text: 'Закон обязывает страховщиков предлагать **франшизу по PIP в $250, $500 и $1,000** при оформлении и при каждом продлении (статья 627.739). Франшиза касается только самого страхователя и родственников, живущих с ним, но никогда не пассажиров и пешеходов. После неё остаётся до $10,000 выплат. Страховщики также обязаны предложить **исключить выплаты за потерянный доход**; сам закон предупреждает, что делать это не стоит, если вы или ваши родственники работают, — тогда потерянную зарплату не возместят. Что выбрано у вас, видно на странице деклараций полиса.' },

    { type: 'h2', text: 'Чего PIP не делает' },
    { type: 'ul', items: [
      'Никогда не оплачивает ремонт **машин** — ни вашей, ни чужой.',
      'Оставляет на вас **20% медицинских счетов** и **40% потерянного дохода** и заканчивается на лимите.',
      'Страховщик может исключить травмы в **другой вашей машине, не внесённой в полис**, травмы того, кто водит вашу машину **без разрешения**, а также умышленные травмы и травмы при совершении тяжкого преступления.',
      'Это не страховка ответственности: если вы серьёзно травмируете человека, PIP **не оплатит его иск к вам**.',
    ] },
    { type: 'p', text: 'Взамен статья 627.737 ограничивает иски: пострадавший может требовать компенсацию за боль и страдания только при постоянной травме, значительных и постоянных шрамах или обезображивании, постоянной потере важной функции организма или смерти. Владелец, попавший в аварию без обязательной страховки, теряет эту защиту и сам выплачивает пособия PIP (статья 627.733(4)).' },

    { type: 'h2', text: 'Что покрывает PDL' },
    { type: 'p', text: 'Ответственность за ущерб имуществу оплачивает то, что **вы или водитель вашей застрахованной машины** повредили у других: чужую машину, забор, почтовый ящик, витрину. Департамент финансовых услуг Флориды поясняет, что сюда входит и **невозможность пользоваться** имуществом, а страховщик защищает вас в суде, пока не исчерпан лимит. Минимум — $10,000 на аварию; подходит и полис с общим лимитом $30,000 на травмы и имущество (статья 324.022). Вашу машину PDL не чинит — для этого нужны [collision и comprehensive](/ru/blog/comprehensive-vs-collision-florida), которых закон не требует.' },

    { type: 'h2', text: 'Когда ответственность за травмы становится обязательной' },
    { type: 'p', text: 'Ответственность за травмы (BI) оплачивает травмы, которые вы причинили другим. Сразу Флорида её не требует, но FLHSMV может потребовать позже:' },
    { type: 'ul', items: [
      '**Авария по вашей вине с пострадавшими, без BI.** Если вам выписали нарушение ПДД, в протоколе отмечены травмы, а полной страховки ответственности не было, понадобится полис 10/20/10 с **SR-22** на три года, плюс отказы от претензий или залог.',
      '**Авария по вашей вине только с ущербом имуществу, без PIP/PDL.** Понадобятся отказы от претензий или залог, затем PIP и PDL или сдача номера, а также сбор за восстановление от $150 до $500, если он применяется.',
      '**Осуждение за DUI.** **FR-44** с BI $100,000/$300,000 и $50,000 за имущество минимум на три года (статья 324.023).',
    ] },
    { type: 'p', text: 'Подробнее: [ответственность за травмы и FR-44](/ru/blog/bodily-injury-liability-fr44-florida) и наш [гид по SR-22](/ru/blog/sr22-florida-guia).' },

    { type: 'h2', text: 'Перерыв в страховке: приостановка и сборы' },
    { type: 'p', text: 'Страховщик обязан сообщить FLHSMV об отмене PIP или PDL в течение 10 дней, и после уведомления департамент приостанавливает **права и регистрацию** (статья 324.0221). Приостановка может длиться до трёх лет, и временных прав при страховой приостановке не дают. Для восстановления нужно показать действующую страховку и заплатить **$150** в первый раз, **$250** во второй и **$500** за каждый следующий в течение трёх лет после первого. Пошагово: [права приостановлены из-за страховки](/ru/blog/florida-license-suspended-no-insurance).' },
    { type: 'ul', items: [
      'Больше не ездите на машине? **Сначала сдайте номер, потом отменяйте страховку.**',
      'Переезжаете? Держите флоридский полис, пока не зарегистрируете машину в новом штате или не сдадите номера.',
      'Предъявить полицейскому подтверждение страховки, зная, что она уже не действует, — мисдиминор первой степени (статья 316.646(4)).',
    ] },

    { type: 'h2', text: 'Минимум — не значит достаточно' },
    { type: 'p', text: 'Лечение серьёзной травмы быстро превышает $10,000 PIP, а $10,000 PDL может не хватить на новую машину или аварию с несколькими автомобилями. Без BI иск за травмы вы встречаете один на один. Перед праздничной поездкой (см. [гид по поездкам на День благодарения](/ru/blog/thanksgiving-holiday-driving-florida)) проверьте лимиты BI, [страховку от незастрахованных водителей](/ru/blog/uninsured-motorist-coverage-florida), медицинские выплаты (Med Pay), collision и comprehensive, а владельцам дома — [личный umbrella-полис](/ru/umbrella-insurance-florida-city).' },

    { type: 'h2', text: 'Поможем разобраться на русском' },
    { type: 'p', text: 'M&K Agency работает с водителями по всему югу Майами-Дейд на русском, английском и испанском — подробнее о нашем [русскоязычном агенте в Майами](/ru/russian-speaking-insurance-agent-miami) и [автостраховке во Florida City](/ru/car-insurance-florida-city). [Запросите расчёт](/ru/quote) или позвоните [(305) 859-3953](tel:+13058593953). Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034.' },
    { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений конкретного полиса; перед покупкой или изменением страховки проконсультируйтесь с лицензированным агентом. Это общая информация, а не юридическая консультация.' },
  ],
  faq: [
    { q: 'Флорида всё ещё штат no-fault в 2026 году?', a: 'Да. Закон no-fault есть в Статутах Флориды 2026 года. Законопроекты об отмене, SB 522 и HB 769, умерли в комитетах 13 марта 2026 года, и на 26 ноября 2026 года никакая отмена законом не стала.' },
    { q: 'Какая минимальная автостраховка во Флориде?', a: '$10,000 PIP и $10,000 PDL на каждую зарегистрированную машину с четырьмя колёсами и более, без перерывов.' },
    { q: 'Оплатит ли PIP ремонт моей машины?', a: 'Нет. PIP покрывает только травмы. Ущерб чужому имуществу оплачивает PDL, а ремонт вашей машины — collision или comprehensive.' },
  ],
  sources: [
    { label: 'FLHSMV: Florida Insurance Requirements (PIP и PDL, непрерывная страховка, санкции)', url: URL.ins },
    { label: 'FLHSMV: Involved in a Crash? (финансовая ответственность, SR-22)', url: URL.crash },
    { label: 'Florida DFS: Personal Automobile Insurance Overview', url: URL.dfs },
    { label: 'Florida Statutes s. 627.730 (2026): закон no-fault', url: URL.s627730 },
    { label: 'Florida Statutes s. 627.733 (2026): обязательная страховка', url: URL.s627733 },
    { label: 'Florida Statutes s. 627.736 (2026): выплаты и исключения по PIP', url: URL.s627736 },
    { label: 'Florida Statutes s. 627.737 (2026): ограничение исков', url: URL.s627737 },
    { label: 'Florida Statutes s. 627.739 (2026): франшиза и опции PIP', url: URL.s627739 },
    { label: 'Florida Statutes s. 324.022 (2026): ответственность за ущерб имуществу', url: URL.s324022 },
    { label: 'Florida Statutes s. 324.023 (2026): ответственность после DUI (FR-44)', url: URL.s324023 },
    { label: 'Florida Statutes s. 324.0221 (2026): сообщения страховщиков, приостановка, восстановление', url: URL.s3240221 },
    { label: 'Florida Statutes s. 316.646 (2026): подтверждение страховки', url: URL.s316646 },
    { label: 'Florida Statutes s. 320.02 (2026): регистрация и подтверждение страховки', url: URL.s32002 },
    { label: 'Сенат Флориды: SB 522 (2026), умер в комитете', url: URL.sb522 },
    { label: 'Сенат Флориды: HB 769 (2026), умер в комитете', url: URL.hb769 },
    { label: 'Легислатура Флориды: история законопроектов Сената, сессия 2027', url: URL.sen2027 },
    { label: 'Сенат Флориды: даты сессии 2027 года', url: URL.dates2027 },
  ],
};

export const post: BlogPost = {
  slug: 'florida-minimum-car-insurance-requirements',
  datePublished: '2026-10-08',
  dateModified: '2026-11-26',
  translations: { en, es, ru },
};
