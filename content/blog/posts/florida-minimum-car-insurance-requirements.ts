import type { BlogPost, PostTranslation } from '../types';

// Facts checked 2026-10-08 (ET) against the 2026 Florida Statutes and FLHSMV:
// - F.S. 627.733(1)-(2), (4) (2026): required security, continuous; nonresident vehicle present >90 of 365 days;
//   an owner without the required coverage loses tort immunity and personally owes PIP benefits
// - F.S. 627.732(3) (2026): "motor vehicle" = four or more wheels
// - F.S. 627.736(1), (2), (4)(e) (2026): PIP $10,000 medical + disability, $5,000 death; 80% medical, 60% income;
//   14-day initial care; $10,000 with an emergency medical condition, $2,500 without; no massage/acupuncture;
//   who is covered; authorized exclusions
// - F.S. 627.737(1)-(2) (2026): tort exemption; pain and suffering only for permanent injury, scarring, death
// - F.S. 324.022(1), (3) (2026): PDL $10,000 per crash (or $30,000 combined BI/PD); nonresident 90-day rule
// - F.S. 324.021(7) (2026): 10/20/10 proof of financial responsibility; F.S. 324.023 (2026): DUI 100/300/50 for 3 years
// - F.S. 324.0221(1)-(3) (2026): insurers report cancellations within 10 days; suspension; reinstatement fee
//   $150 / $250 / $500 within 3 years of the first reinstatement
// - F.S. 316.646(1), (3), (4) (2026): proof of coverage in the vehicle (paper or electronic); penalties
// - FLHSMV Florida Insurance Requirements; FLHSMV Involved in a Crash? (SR-22 for 3 years after an at-fault injury crash)
// - Florida Senate: SB 522 (2026) died in committee 3/13/2026; HB 769 (2026) died 3/13/2026
// No private insurers named; dollar figures are legal limits and state fees only.

const URL = {
  ins: 'https://www.flhsmv.gov/insurance/',
  crash: 'https://www.flhsmv.gov/insurance/involved-in-a-crash/',
  s627732: 'https://www.flsenate.gov/Laws/Statutes/2026/627.732',
  s627733: 'https://www.flsenate.gov/Laws/Statutes/2026/627.733',
  s627736: 'https://www.flsenate.gov/Laws/Statutes/2026/627.736',
  s627737: 'https://www.flsenate.gov/Laws/Statutes/2026/627.737',
  s324021: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021',
  s324022: 'https://www.flsenate.gov/Laws/Statutes/2026/324.022',
  s324023: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023',
  s3240221: 'https://www.flsenate.gov/Laws/Statutes/2026/324.0221',
  s316646: 'https://www.flsenate.gov/Laws/Statutes/2026/316.646',
  sb522: 'https://www.flsenate.gov/Session/Bill/2026/522',
  hb769: 'https://www.flsenate.gov/Session/Bill/2026/769',
};

const en: PostTranslation = {
  title: 'Florida Minimum Car Insurance Requirements in 2026: PIP, PDL and What They Leave Out',
  metaTitle: 'Florida Minimum Car Insurance Requirements 2026 | M&K Agency',
  description:
    'Florida requires $10,000 PIP and $10,000 PDL. What each pays, the 14-day rule, when bodily injury is required, and what a lapse costs you at the FLHSMV.',
  ogAlt: 'Illustration of a car on a road next to two shields labeled PIP and PDL under a sunny sky',
  excerpt:
    'Two coverages are mandatory in Florida: $10,000 of PIP and $10,000 of property damage liability. Here is what they pay, what they don\u2019t, and what happens if your coverage lapses.',
  category: 'Auto insurance',
  body: [
    { type: 'p', text: 'Florida is a **no-fault** state, and its list of mandatory auto coverages is short. To register and drive a car here you need two coverages, and both have a $10,000 floor. Bills filed in the 2026 session to repeal the no-fault system (SB 522 and HB 769) died in committee on March 13, 2026, so the rules below still apply. This guide explains what the minimum actually does, using the 2026 Florida Statutes and the FLHSMV.' },
    { type: 'callout', title: 'The short version', text: 'Every car, SUV, pickup or van registered in Florida must carry **$10,000 of Personal Injury Protection (PIP)** and **$10,000 of Property Damage Liability (PDL)**, continuously, from an insurer licensed in Florida. Bodily injury liability is **not** required for most drivers.' },

    { type: 'h2', text: 'Who has to carry PIP and PDL' },
    { type: 'ul', items: [
      'The owner or registrant of any vehicle with **four or more wheels** that must be registered in Florida (s. 627.733 and s. 627.732). Motorcycles fall outside this definition.',
      'Coverage must stay in force for the **whole registration period**, even if the car is parked, broken down or out of state (FLHSMV).',
      'A nonresident whose car has been in Florida **more than 90 of the last 365 days** must carry it too (s. 627.733(2), s. 324.022(3)).',
      'While driving, you must have **proof of coverage** with you, on paper or on your phone (s. 316.646).',
    ] },
    { type: 'p', text: 'New to Florida? The FLHSMV notes that your agent can move your current insurance to a Florida policy. See our [car insurance in Florida City](/en/car-insurance-florida-city) page.' },

    { type: 'h2', text: 'What PIP pays, and the 14-day rule' },
    { type: 'p', text: 'PIP pays for **your own injuries** no matter who caused the crash. Under s. 627.736 the $10,000 limit covers:' },
    { type: 'ul', items: [
      '**80% of reasonable medical expenses** for medically necessary care: doctor, hospital, X-rays, dental, rehabilitation and ambulance.',
      '**60% of lost gross income** if the injury keeps you from working, plus the cost of hiring help for household tasks you can\u2019t do.',
      'A separate **$5,000 death benefit** per person.',
    ] },
    { type: 'p', text: 'PIP covers you and relatives who live with you, passengers, anyone driving your car with permission, and Florida residents on foot or on a bicycle hit by your car who don\u2019t have PIP of their own. It also follows you in your own car anywhere in the U.S. or Canada.' },
    { type: 'callout', title: 'Two rules that cut benefits', text: 'You must get **initial treatment within 14 days** of the crash from a physician, dentist, chiropractor, nurse practitioner, hospital or EMS. And the full $10,000 is available only if a qualified provider finds an **emergency medical condition**; otherwise medical benefits stop at **$2,500**. Massage and acupuncture are not covered.' },

    { type: 'h2', text: 'What PIP does not do' },
    { type: 'ul', items: [
      'It never pays to repair **any vehicle**, yours or anyone else\u2019s.',
      'It leaves **20% of medical bills** and **40% of lost income** to you, and stops at the limit.',
      'An insurer may exclude injuries in **another car you own that isn\u2019t on the policy**, injuries to someone driving your car **without permission**, and injuries caused intentionally or while committing a felony.',
      'It is not liability coverage: if you seriously injure someone, PIP doesn\u2019t pay **their claim against you**.',
    ] },
    { type: 'p', text: 'In exchange, s. 627.737 limits lawsuits: an injured person can claim pain and suffering only for a permanent injury, significant and permanent scarring or disfigurement, the permanent loss of an important bodily function, or death. An owner who crashes without the required coverage loses that protection and must personally pay the PIP benefits (s. 627.733(4)).' },

    { type: 'h2', text: 'What PDL covers' },
    { type: 'p', text: 'Property damage liability pays for damage **you or someone driving your insured car** cause to other people\u2019s property: another car, a fence, a mailbox, a storefront. The minimum is $10,000 per crash; a policy with a $30,000 combined bodily injury and property damage limit also qualifies (s. 324.022). PDL does not fix your own car. That takes collision and comprehensive, which state law doesn\u2019t require.' },

    { type: 'h2', text: 'When bodily injury liability becomes mandatory' },
    { type: 'p', text: 'Bodily injury liability (BI) pays for injuries you cause to others. Florida doesn\u2019t require it up front, but the state can demand it later:' },
    { type: 'ul', items: [
      '**At-fault crash with injuries and no BI.** If you got a moving violation, someone was hurt and you had no BI, the FLHSMV requires 10/20/10 coverage with an **SR-22** filing for three years, plus releases or a security deposit.',
      '**DUI conviction.** An **FR-44** with $100,000/$300,000 BI and $50,000 property damage, for at least three years (s. 324.023).',
    ] },
    { type: 'p', text: 'More detail: [bodily injury liability and FR-44](/en/blog/bodily-injury-liability-fr44-florida) and [non-owner SR-22](/en/blog/non-owner-sr22-florida).' },

    { type: 'h2', text: 'Lapses, suspensions and reinstatement fees' },
    { type: 'p', text: 'Insurers must report a PIP or PDL cancellation to the FLHSMV within 10 days, and after notice the department suspends the **driver license and registration** (s. 324.0221). The FLHSMV says a suspension can last up to three years, with no hardship license for insurance suspensions. To reinstate you show proof of coverage and pay a fee of **$150** the first time, **$250** the second and **$500** for each later one within three years of the first (s. 324.0221(3)).' },
    { type: 'ul', items: [
      'No longer using the car? **Turn in the plate before you cancel.**',
      'Moving away? Keep the Florida policy until the car is registered in the new state or the plates are surrendered.',
      'Showing an officer proof of insurance you know is no longer in force is a first-degree misdemeanor (s. 316.646(4)).',
    ] },

    { type: 'h2', text: 'Why the minimum may not be enough' },
    { type: 'p', text: 'Serious injuries can quickly outrun $10,000 of PIP, and $10,000 of PDL may not cover a newer car or a multi-car crash. With no BI, you face a serious injury claim on your own. Coverages worth discussing with an agent: BI limits, [uninsured motorist coverage](/en/blog/uninsured-motorist-coverage-florida), collision and comprehensive, and a [personal umbrella](/en/umbrella-insurance-florida-city) for homeowners.' },

    { type: 'h2', text: 'Talk it through with a local agent' },
    { type: 'p', text: 'M&K Agency helps drivers across South Miami-Dade in English, Spanish and Russian. [Request a quote](/en/quote) or call **(305) 859-3953**. Office: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034; Monday to Friday 9 to 6, Saturday by appointment.' },
    { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you buy or change coverage. This guide is general information, not legal advice.' },
  ],
  faq: [
    { q: 'What is the minimum car insurance in Florida in 2026?', a: '$10,000 of Personal Injury Protection and $10,000 of Property Damage Liability on every registered vehicle with four or more wheels, kept continuously.' },
    { q: 'Does PIP pay to fix my car?', a: 'No. PIP pays for injuries only. Damage to other people\u2019s property falls under PDL; damage to your own car needs collision or comprehensive.' },
    { q: 'Do I need insurance if my car is parked and not driven?', a: 'Yes, as long as the registration is active. To stop coverage, surrender the plate at a driver license or tax collector office first.' },
    { q: 'Did Florida get rid of PIP?', a: 'No. The 2026 bills to repeal the no-fault law, SB 522 and HB 769, died in committee on March 13, 2026.' },
  ],
  sources: [
    { label: 'FLHSMV: Florida Insurance Requirements (PIP and PDL, continuous coverage, penalties)', url: URL.ins },
    { label: 'FLHSMV: Involved in a Crash? (financial responsibility, SR-22 for three years)', url: URL.crash },
    { label: 'Florida Statutes s. 627.733 (2026): required security', url: URL.s627733 },
    { label: 'Florida Statutes s. 627.732 (2026): definitions (motor vehicle)', url: URL.s627732 },
    { label: 'Florida Statutes s. 627.736 (2026): required PIP benefits and exclusions', url: URL.s627736 },
    { label: 'Florida Statutes s. 627.737 (2026): tort exemption and limits on damages', url: URL.s627737 },
    { label: 'Florida Statutes s. 324.022 (2026): property damage liability', url: URL.s324022 },
    { label: 'Florida Statutes s. 324.021 (2026): definitions (proof of financial responsibility)', url: URL.s324021 },
    { label: 'Florida Statutes s. 324.023 (2026): liability after a DUI (FR-44)', url: URL.s324023 },
    { label: 'Florida Statutes s. 324.0221 (2026): insurer reports, suspension, reinstatement', url: URL.s3240221 },
    { label: 'Florida Statutes s. 316.646 (2026): proof of security', url: URL.s316646 },
    { label: 'Florida Senate: SB 522 (2026), Motor Vehicle Insurance (died in committee)', url: URL.sb522 },
    { label: 'Florida Senate: HB 769 (2026), Motor Vehicle Insurance (died in committee)', url: URL.hb769 },
  ],
};

const es: PostTranslation = {
  title: 'Seguro mínimo de auto en Florida en 2026: qué cubren el PIP y el PDL, y qué no',
  metaTitle: 'Seguro mínimo de auto en Florida 2026: PIP y PDL | M&K Agency',
  description:
    'Florida exige $10,000 de PIP y $10,000 de PDL. Qué paga cada uno, la regla de los 14 días, cuándo exigen lesiones corporales y qué pasa si el seguro se cae.',
  ogAlt: 'Ilustración de un carro en la carretera junto a dos escudos con las siglas PIP y PDL bajo un cielo soleado',
  excerpt:
    'En Florida solo dos coberturas son obligatorias: $10,000 de PIP y $10,000 de daños a la propiedad. Qué pagan, qué dejan fuera y qué pasa si deja vencer el seguro.',
  category: 'Seguro de auto',
  body: [
    { type: 'p', text: 'Mucha gente en Florida maneja con "el seguro básico" sin saber bien qué incluye. Florida es un estado **no-fault** (sin culpa) y la ley pide solo dos coberturas, cada una de $10,000. Los proyectos de 2026 que buscaban eliminar el sistema no-fault (SB 522 y HB 769) murieron en comité el 13 de marzo de 2026, así que las reglas siguen vigentes. Aquí le explicamos, con los Estatutos de Florida de 2026 y el FLHSMV, qué hace y qué no hace ese mínimo.' },
    { type: 'callout', title: 'En resumen', text: 'Todo carro, SUV, pickup o van registrado en Florida debe tener **$10,000 de Protección contra Lesiones Personales (PIP)** y **$10,000 de Responsabilidad por Daños a la Propiedad (PDL)**, sin interrupciones y con una aseguradora autorizada en Florida. La responsabilidad por lesiones corporales (BI) **no** es obligatoria para la mayoría.' },

    { type: 'h2', text: '¿Quién tiene que llevar PIP y PDL?' },
    { type: 'ul', items: [
      'El dueño o titular del registro de cualquier vehículo de **cuatro ruedas o más** que deba registrarse en Florida (s. 627.733 y s. 627.732). Las motocicletas quedan fuera de esta definición.',
      'La cobertura debe estar vigente **todo el período del registro**, aunque el carro esté parqueado, dañado o fuera del estado (FLHSMV).',
      'El no residente cuyo carro lleva en Florida **más de 90 de los últimos 365 días** también debe tenerla (s. 627.733(2) y s. 324.022(3)).',
      'Al manejar debe llevar la **prueba de seguro**, en papel o en el celular (s. 316.646).',
    ] },
    { type: 'p', text: 'Si acaba de llegar, lea nuestra guía de [seguro de auto con licencia extranjera](/es/blog/seguro-auto-licencia-extranjera-florida) sobre licencia y registro, o vea el [seguro de auto en Florida City](/es/car-insurance-florida-city).' },

    { type: 'h2', text: 'Qué paga el PIP y la regla de los 14 días' },
    { type: 'p', text: 'El PIP paga **sus propias lesiones**, sin importar quién tuvo la culpa. Según el s. 627.736, el límite de $10,000 cubre:' },
    { type: 'ul', items: [
      'El **80 % de los gastos médicos razonables** y necesarios: médico, hospital, rayos X, dentista, rehabilitación y ambulancia.',
      'El **60 % del ingreso bruto perdido** si la lesión no le deja trabajar, más lo que pague a otra persona por las tareas de la casa que usted no pueda hacer.',
      'Aparte, un **beneficio por muerte de $5,000** por persona.',
    ] },
    { type: 'p', text: 'Protege a usted y a los familiares que viven con usted, a los pasajeros, a quien maneje su carro con permiso y a los residentes de Florida atropellados a pie o en bicicleta que no tengan PIP propio. Además le cubre en su propio carro en cualquier parte de EE. UU. o Canadá.' },
    { type: 'callout', title: 'Dos reglas que reducen el beneficio', text: 'Debe recibir **atención inicial dentro de los 14 días** del choque, de un médico, dentista, quiropráctico, enfermero de práctica avanzada, hospital o servicio de emergencias. Y los $10,000 completos solo aplican si un proveedor calificado determina una **condición médica de emergencia**; si no, los gastos médicos se limitan a **$2,500**. Masajes y acupuntura no están cubiertos.' },

    { type: 'h2', text: 'Lo que el PIP no hace' },
    { type: 'ul', items: [
      'No paga la reparación de **ningún vehículo**, ni el suyo ni el ajeno.',
      'El **20 % de los gastos médicos** y el **40 % del salario perdido** corren por su cuenta, y todo se acaba al llegar al límite.',
      'La aseguradora puede excluir lesiones en **otro carro suyo que no esté en la póliza**, a quien maneje su carro **sin permiso** y las causadas a propósito o cometiendo un delito grave.',
      'No es cobertura de responsabilidad: si usted lesiona gravemente a alguien, el PIP no paga **el reclamo de esa persona contra usted**.',
    ] },
    { type: 'p', text: 'A cambio, el s. 627.737 limita las demandas: solo se puede reclamar dolor y sufrimiento por una lesión permanente, cicatrices o desfiguración importantes y permanentes, la pérdida permanente de una función corporal importante o la muerte. El dueño que choca sin el seguro exigido pierde esa protección y paga de su bolsillo los beneficios de PIP (s. 627.733(4)).' },

    { type: 'h2', text: 'Qué cubre el PDL' },
    { type: 'p', text: 'La responsabilidad por daños a la propiedad paga lo que usted, o quien maneje su carro asegurado, le dañe a otros: otro carro, una cerca, un buzón, la vidriera de un negocio. El mínimo es $10,000 por choque; también sirve una póliza con un límite combinado de $30,000 para lesiones y daños (s. 324.022). El PDL no arregla su carro: para eso están las coberturas de choque (collision) y comprensiva, que la ley no exige.' },

    { type: 'h2', text: 'Cuándo la responsabilidad por lesiones corporales pasa a ser obligatoria' },
    { type: 'p', text: 'La BI paga las lesiones que usted causa a otros. Florida no la pide para registrar el carro, pero puede exigirla después:' },
    { type: 'ul', items: [
      '**Choque con heridos en el que usted tuvo la culpa y no tenía BI.** Si le pusieron una infracción de tránsito y hubo lesionados, el FLHSMV exige cobertura 10/20/10 con un **SR-22** por tres años, además de descargos (releases) de los afectados o un depósito de seguridad.',
      '**Condena por DUI.** Un **FR-44** con $100,000/$300,000 de BI y $50,000 de daños a la propiedad, por un mínimo de tres años (s. 324.023).',
    ] },
    { type: 'p', text: 'Más detalles en [responsabilidad por lesiones corporales y FR-44](/es/blog/bodily-injury-liability-fr44-florida) y en la [guía del SR-22 en Florida](/es/blog/sr22-florida-guia).' },

    { type: 'h2', text: 'Si el seguro se cae: suspensión y tarifa de reinstalación' },
    { type: 'p', text: 'La aseguradora debe avisar al FLHSMV de la cancelación del PIP o del PDL en un plazo de 10 días, y tras notificarle, el departamento suspende **su licencia y su registro** (s. 324.0221). Según el FLHSMV, la suspensión puede durar hasta tres años y no hay licencia por necesidad (hardship) para suspensiones por seguro. Para recuperarlos, debe presentar prueba de seguro y pagar **$150** la primera vez, **$250** la segunda y **$500** cada vez siguiente dentro de los tres años desde la primera (s. 324.0221(3)).' },
    { type: 'ul', items: [
      '¿Ya no va a usar el carro? **Entregue la placa antes de cancelar el seguro.**',
      '¿Se muda a otro estado? Mantenga la póliza de Florida hasta registrar el carro allá o entregar las placas.',
      'Mostrarle a un policía una prueba de seguro que usted sabe que ya no está vigente es un delito menor de primer grado (s. 316.646(4)).',
    ] },

    { type: 'h2', text: 'Por qué el mínimo puede quedarse corto' },
    { type: 'p', text: 'Una lesión seria puede pasar rápido de los $10,000 de PIP, y $10,000 de PDL quizá no alcancen para un carro nuevo o un choque con varios vehículos. Sin BI, un reclamo grave por lesiones lo enfrenta usted solo. Vale la pena revisar con su agente los límites de BI, la [cobertura de motorista sin seguro](/es/blog/uninsured-motorist-coverage-florida), choque y comprensiva, y una [póliza paraguas](/es/umbrella-insurance-florida-city) si tiene casa propia.' },

    { type: 'h2', text: 'Hable con un agente local en español' },
    { type: 'p', text: 'En M&K Agency atendemos a conductores de todo el sur de Miami-Dade en español, inglés y ruso. [Solicite una cotización](/es/quote) o llame al **(305) 859-3953**. Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034; lunes a viernes de 9 a 6, sábados con cita.' },
    { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza; hable con un agente con licencia antes de contratar o cambiar su seguro. Esta guía es información general, no asesoría legal.' },
  ],
  faq: [
    { q: '¿Cuál es el seguro mínimo de auto en Florida en 2026?', a: '$10,000 de PIP y $10,000 de PDL en todo vehículo registrado de cuatro ruedas o más, sin interrupciones.' },
    { q: '¿El PIP paga el arreglo de mi carro?', a: 'No. El PIP solo cubre lesiones. Los daños a la propiedad ajena los paga el PDL; los de su carro, las coberturas de choque o comprensiva.' },
    { q: '¿Necesito seguro si el carro está parqueado y no lo uso?', a: 'Sí, mientras el registro esté activo. Para quitar el seguro, primero entregue la placa en una oficina de licencias o del recaudador de impuestos (tax collector).' },
    { q: '¿Florida eliminó el PIP?', a: 'No. Los proyectos de 2026 para derogar la ley no-fault, SB 522 y HB 769, murieron en comité el 13 de marzo de 2026.' },
  ],
  sources: [
    { label: 'FLHSMV: Florida Insurance Requirements (PIP y PDL, cobertura continua, sanciones)', url: URL.ins },
    { label: 'FLHSMV: Involved in a Crash? (responsabilidad financiera, SR-22 por tres años)', url: URL.crash },
    { label: 'Estatutos de Florida s. 627.733 (2026): seguro obligatorio', url: URL.s627733 },
    { label: 'Estatutos de Florida s. 627.732 (2026): definiciones (vehículo de motor)', url: URL.s627732 },
    { label: 'Estatutos de Florida s. 627.736 (2026): beneficios y exclusiones del PIP', url: URL.s627736 },
    { label: 'Estatutos de Florida s. 627.737 (2026): exención de responsabilidad civil y límites a los daños', url: URL.s627737 },
    { label: 'Estatutos de Florida s. 324.022 (2026): responsabilidad por daños a la propiedad', url: URL.s324022 },
    { label: 'Estatutos de Florida s. 324.021 (2026): definiciones (prueba de responsabilidad financiera)', url: URL.s324021 },
    { label: 'Estatutos de Florida s. 324.023 (2026): responsabilidad tras un DUI (FR-44)', url: URL.s324023 },
    { label: 'Estatutos de Florida s. 324.0221 (2026): reportes, suspensión y reinstalación', url: URL.s3240221 },
    { label: 'Estatutos de Florida s. 316.646 (2026): prueba de seguro', url: URL.s316646 },
    { label: 'Senado de Florida: SB 522 (2026), Motor Vehicle Insurance (murió en comité)', url: URL.sb522 },
    { label: 'Senado de Florida: HB 769 (2026), Motor Vehicle Insurance (murió en comité)', url: URL.hb769 },
  ],
};

const ru: PostTranslation = {
  title: 'Минимальная автостраховка во Флориде в 2026 году: что покрывают PIP и PDL, а что нет',
  metaTitle: 'Минимальная автостраховка во Флориде 2026 | M&K Agency',
  description:
    'Во Флориде обязательны $10,000 PIP и $10,000 PDL. Что они оплачивают, правило 14 дней, когда нужна ответственность за травмы и чем грозит перерыв в страховке.',
  ogAlt: 'Иллюстрация: машина на дороге рядом с двумя щитами с надписями PIP и PDL под солнечным небом',
  excerpt:
    'Во Флориде обязательны всего две страховки: $10,000 PIP и $10,000 ответственности за чужое имущество. Что они оплачивают, чего не покрывают и что будет, если страховка прервётся.',
  category: 'Автострахование',
  body: [
    { type: 'p', text: 'Многие приезжие удивляются, насколько короткий во Флориде список обязательной автостраховки. Флорида — штат **no-fault** («без учёта вины»), и закон требует всего две страховки, каждая не меньше $10,000. Законопроекты 2026 года об отмене системы no-fault (SB 522 и HB 769) умерли в комитетах 13 марта 2026 года, так что правила не изменились. Разбираем по статутам Флориды 2026 года и материалам FLHSMV, что даёт этот минимум и где он вас не защитит.' },
    { type: 'callout', title: 'Коротко', text: 'Каждая легковая машина, SUV, пикап или минивэн, зарегистрированные во Флориде, должны иметь **$10,000 PIP (Personal Injury Protection, страховка от травм)** и **$10,000 PDL (Property Damage Liability, ответственность за ущерб чужому имуществу)** — без перерывов и у страховщика с лицензией Флориды. Страховка ответственности за травмы других людей (bodily injury, BI) для большинства водителей **не** обязательна.' },

    { type: 'h2', text: 'Кто обязан иметь PIP и PDL' },
    { type: 'ul', items: [
      'Владелец или регистрант любого транспортного средства с **четырьмя колёсами и более**, которое должно быть зарегистрировано во Флориде (статьи 627.733 и 627.732). Мотоциклы под это определение не попадают.',
      'Страховка должна действовать **весь срок регистрации**, даже если машина стоит, сломана или находится в другом штате (FLHSMV).',
      'Нерезидент, чья машина пробыла во Флориде **больше 90 дней из последних 365**, тоже обязан её иметь (статьи 627.733(2) и 324.022(3)).',
      'За рулём нужно иметь при себе **подтверждение страховки** — на бумаге или в телефоне (статья 316.646).',
    ] },
    { type: 'p', text: 'Только переехали? Про права и регистрацию машины читайте [гид для новоприбывших](/ru/blog/seguro-auto-licencia-extranjera-florida), а про полис — страницу [автостраховка во Florida City](/ru/car-insurance-florida-city).' },

    { type: 'h2', text: 'Что оплачивает PIP и правило 14 дней' },
    { type: 'p', text: 'PIP платит за **ваши собственные травмы**, независимо от того, кто виноват в аварии. По статье 627.736 в пределах лимита $10,000 он покрывает:' },
    { type: 'ul', items: [
      '**80 % разумных медицинских расходов** на необходимое лечение: врач, больница, рентген, стоматолог, реабилитация, скорая.',
      '**60 % потерянного дохода** (до вычета налогов), если из-за травмы вы не можете работать, плюс расходы на помощь по дому, которую вы сами выполнять не в состоянии.',
      'Отдельно — **$5,000 на случай смерти** на каждого человека.',
    ] },
    { type: 'p', text: 'PIP защищает вас и родственников, живущих с вами, пассажиров, любого, кто ведёт вашу машину с разрешения, а также жителей Флориды, сбитых вашей машиной, когда они шли пешком или ехали на велосипеде, если у них нет своего PIP. В своей машине вы застрахованы по PIP в любой точке США и Канады.' },
    { type: 'callout', title: 'Два правила, которые урезают выплаты', text: 'Первичную помощь нужно получить **в течение 14 дней** после аварии — у врача, стоматолога, хиропрактора, медсестры с расширенной практикой (APRN), в больнице или у скорой. Полные $10,000 доступны, только если квалифицированный медик установит **неотложное медицинское состояние (emergency medical condition)**; иначе медицинские выплаты ограничены **$2,500**. Массаж и иглоукалывание не оплачиваются.' },

    { type: 'h2', text: 'Чего PIP не делает' },
    { type: 'ul', items: [
      'Не оплачивает ремонт **ни одной машины** — ни вашей, ни чужой.',
      '**20 % медицинских счетов** и **40 % потерянного дохода** остаются на вас, а после исчерпания лимита платите вы.',
      'Страховщик может исключить травмы в **другой вашей машине, не вписанной в полис**, травмы водителя, взявшего машину **без разрешения**, а также травмы, причинённые умышленно или при совершении тяжкого преступления.',
      'Это не страховка ответственности: если вы серьёзно травмировали человека, PIP не оплатит **его иск к вам**.',
    ] },
    { type: 'p', text: 'Взамен статья 627.737 ограничивает иски: компенсацию за боль и страдания можно требовать только при стойкой травме, значительных и необратимых шрамах или обезображивании, необратимой утрате важной функции организма или смерти. Владелец, попавший в аварию без обязательной страховки, этой защиты лишается и сам выплачивает пострадавшим положенное по PIP (статья 627.733(4)).' },

    { type: 'h2', text: 'Что покрывает PDL' },
    { type: 'p', text: 'Ответственность за ущерб имуществу оплачивает то, что вы — или тот, кто ведёт вашу застрахованную машину, — повредили у других: чужую машину, забор, почтовый ящик, витрину. Минимум — $10,000 на одну аварию; подойдёт и полис с общим лимитом $30,000 на травмы и имущество (статья 324.022). Вашу машину PDL не чинит: для этого нужны collision и comprehensive, которые закон не требует.' },

    { type: 'h2', text: 'Когда ответственность за травмы становится обязательной' },
    { type: 'p', text: 'BI оплачивает травмы, которые вы причинили другим. Для регистрации машины Флорида её не требует, но может потребовать позже:' },
    { type: 'ul', items: [
      '**Авария по вашей вине с пострадавшими, а BI не было.** Если вам выписали штраф за нарушение ПДД и были травмированные, FLHSMV требует страховку 10/20/10 с подачей **SR-22** на три года, а также отказ пострадавших от претензий (releases) или залог.',
      '**Осуждение за DUI.** Нужен **FR-44** с лимитами BI $100,000/$300,000 и $50,000 за имущество, минимум на три года (статья 324.023).',
    ] },
    { type: 'p', text: 'Подробнее: [ответственность за телесные повреждения и FR-44](/ru/blog/bodily-injury-liability-fr44-florida) и [гид по SR-22 во Флориде](/ru/blog/sr22-florida-guia).' },

    { type: 'h2', text: 'Перерыв в страховке: приостановка и плата за восстановление' },
    { type: 'p', text: 'Страховщик обязан сообщить в FLHSMV об отмене PIP или PDL в течение 10 дней, и после уведомления департамент приостанавливает **права и регистрацию машины** (статья 324.0221). По данным FLHSMV, приостановка может длиться до трёх лет, а ограниченных прав «для работы» (hardship) при приостановке за отсутствие страховки не дают. Чтобы всё восстановить, нужно подтвердить страховку и заплатить сбор: **$150** в первый раз, **$250** во второй и **$500** за каждый следующий раз в течение трёх лет после первого (статья 324.0221(3)).' },
    { type: 'ul', items: [
      'Больше не пользуетесь машиной? **Сначала сдайте номерной знак, потом отменяйте страховку.**',
      'Уезжаете в другой штат? Не отменяйте флоридский полис, пока не зарегистрируете машину там или не сдадите номера.',
      'Предъявить полицейскому подтверждение страховки, зная, что она уже не действует, — мисдиминор первой степени (статья 316.646(4)).',
    ] },

    { type: 'h2', text: 'Почему минимума может не хватить' },
    { type: 'p', text: 'Расходы на лечение серьёзной травмы быстро превышают $10,000 PIP, а $10,000 PDL может не хватить на новую машину или аварию с несколькими автомобилями. Без BI серьёзный иск за травмы вы встречаете один на один. Стоит обсудить с агентом лимиты BI, [страховку от незастрахованных водителей](/ru/blog/uninsured-motorist-coverage-florida), collision и comprehensive, а владельцам дома — [личный umbrella-полис](/ru/umbrella-insurance-florida-city).' },

    { type: 'h2', text: 'Поможем разобраться на русском' },
    { type: 'p', text: 'M&K Agency работает с водителями по всему югу Майами-Дейд на русском, английском и испанском. [Запросите расчёт](/ru/quote) или позвоните **(305) 859-3953**. Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034; понедельник–пятница с 9 до 6, суббота по записи.' },
    { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений конкретного полиса; перед покупкой или изменением страховки проконсультируйтесь с лицензированным агентом. Это общая информация, а не юридическая консультация.' },
  ],
  faq: [
    { q: 'Какая минимальная автостраховка во Флориде в 2026 году?', a: '$10,000 PIP и $10,000 PDL на каждую зарегистрированную машину с четырьмя колёсами и более, без перерывов.' },
    { q: 'Оплатит ли PIP ремонт моей машины?', a: 'Нет. PIP покрывает только травмы. Ущерб чужому имуществу оплачивает PDL, а ремонт вашей машины — collision или comprehensive.' },
    { q: 'Нужна ли страховка, если машина стоит и я на ней не езжу?', a: 'Да, пока регистрация действует. Чтобы снять страховку, сначала сдайте номерной знак в офисе FLHSMV или tax collector.' },
    { q: 'Флорида отменила PIP?', a: 'Нет. Законопроекты 2026 года об отмене закона no-fault, SB 522 и HB 769, умерли в комитетах 13 марта 2026 года.' },
  ],
  sources: [
    { label: 'FLHSMV: Florida Insurance Requirements (PIP и PDL, непрерывная страховка, санкции)', url: URL.ins },
    { label: 'FLHSMV: Involved in a Crash? (финансовая ответственность, SR-22 на три года)', url: URL.crash },
    { label: 'Florida Statutes s. 627.733 (2026): обязательная страховка', url: URL.s627733 },
    { label: 'Florida Statutes s. 627.732 (2026): определения (транспортное средство)', url: URL.s627732 },
    { label: 'Florida Statutes s. 627.736 (2026): выплаты и исключения по PIP', url: URL.s627736 },
    { label: 'Florida Statutes s. 627.737 (2026): ограничение исков и компенсаций', url: URL.s627737 },
    { label: 'Florida Statutes s. 324.022 (2026): ответственность за ущерб имуществу', url: URL.s324022 },
    { label: 'Florida Statutes s. 324.021 (2026): определения (подтверждение финансовой ответственности)', url: URL.s324021 },
    { label: 'Florida Statutes s. 324.023 (2026): ответственность после DUI (FR-44)', url: URL.s324023 },
    { label: 'Florida Statutes s. 324.0221 (2026): сообщения страховщиков, приостановка, восстановление', url: URL.s3240221 },
    { label: 'Florida Statutes s. 316.646 (2026): подтверждение страховки', url: URL.s316646 },
    { label: 'Сенат Флориды: SB 522 (2026), Motor Vehicle Insurance (умер в комитете)', url: URL.sb522 },
    { label: 'Сенат Флориды: HB 769 (2026), Motor Vehicle Insurance (умер в комитете)', url: URL.hb769 },
  ],
};

export const post: BlogPost = {
  slug: 'florida-minimum-car-insurance-requirements',
  datePublished: '2026-10-08',
  translations: { en, es, ru },
};
