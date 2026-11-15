import type { BlogPost } from '../types';

// New article 2026-11-15 (content plan 2026-11, row 2026-11-15). Facts checked 2026-11-15 (ET) against
// official sources (raw copies in /workspace/winterres/; notes in
// /workspace/articles/winter-residents-florida-license-registration-insurance_sources.md):
// - s. 322.04(1)(c),(d),(2) (2026): nonresident with a valid home-state/country noncommercial license in
//   immediate possession is exempt from getting a Florida license; does not apply to persons covered by 322.031.
// - s. 322.031(1)-(3) (2026): nonresident who accepts employment / engages in a trade, profession or occupation
//   or enters children in public school: Florida license within 30 days if they drive; spouse and dependent
//   child too; exceptions (migrant/seasonal farm workers, active-duty military, commuters domiciled elsewhere,
//   certain students).
// - s. 320.37 (2026): registration not required for a nonresident's vehicle registered at home with the plate
//   displayed; not for foreign corporations doing business here, for-hire vehicles, RVs or mobile homes here
//   6+ consecutive months, commercial vehicles.
// - s. 320.38 (2026): employment/trade or children in public school -> register within 10 days.
// - s. 320.01(34) and s. 322.01(36) (2026): "resident" definitions (domicile 6+ consecutive months, voter
//   registration, statement of domicile under s. 222.17, homestead exemption).
// - s. 627.733(2),(3) and s. 324.022(3) (2026): nonresident vehicle physically present more than 90 days during
//   the preceding 365 days, operated or not -> PIP/PDL security continuously while it remains in Florida.
// - s. 320.02(5)(a) (2026): proof of PIP/PDL at registration, or registration is refused.
// - FLHSMV New Resident page (residency indicators, 30 days license, 10 days insurance + title/registration,
//   title packet, VIN verification, lienholder), FLHSMV insurance page (PIP 80% up to $10,000, PDL $10,000,
//   Florida-licensed insurer, continuous coverage, non-resident 10 days, moving out of state, suspension up to
//   3 years), FLHSMV registrations page, FLHSMV license plates page (90-day temporary plate for a customer
//   temporarily employed in Florida).
const LEG = 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=';
const S = {
  s32204: LEG + '0300-0399/0322/Sections/0322.04.html',
  s322031: LEG + '0300-0399/0322/Sections/0322.031.html',
  s32237: LEG + '0300-0399/0320/Sections/0320.37.html',
  s32038: LEG + '0300-0399/0320/Sections/0320.38.html',
  s32001: LEG + '0300-0399/0320/Sections/0320.01.html',
  s32201: LEG + '0300-0399/0322/Sections/0322.01.html',
  s627733: LEG + '0600-0699/0627/Sections/0627.733.html',
  s324022: LEG + '0300-0399/0324/Sections/0324.022.html',
  s32002: LEG + '0300-0399/0320/Sections/0320.02.html',
  newRes: 'https://www.flhsmv.gov/new-resident/',
  ins: 'https://www.flhsmv.gov/insurance/',
  reg: 'https://www.flhsmv.gov/motor-vehicles-tags-titles/license-plates-registration/motor-vehicle-registrations/',
  plates: 'https://www.flhsmv.gov/motor-vehicles-tags-titles/license-plates-registration/',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'winter-residents-florida-license-registration-insurance',
  datePublished: '2026-11-15',
  translations: {
    en: {
      title: 'Wintering in Florida: When Out-of-State Drivers Need a Florida License, Registration, and Insurance',
      metaTitle: 'Snowbirds: Florida License, Tag and Insurance Rules | M&K Agency',
      description: 'Spending the winter in Florida with your home-state car? When Florida law asks for a Florida license, registration and insurance, and the 90-day insurance rule.',
      ogAlt: 'Illustration of a car with a blank license plate on a Florida road with palm trees, a suitcase, a calendar and a blue shield with a check mark',
      excerpt: 'Driving your own car down for the winter? Florida treats the license, the registration and the insurance as three separate questions. Here is what triggers each one.',
      category: 'Car insurance',
      body: [
        { type: 'p', text: 'Every fall, drivers bring their own cars to South Florida for the winter, with a license and plates from another state. The question we hear each season: **do I need a Florida license, a Florida tag or Florida insurance?** Florida law answers those as three separate questions, each with its own trigger. Here is what the statutes and the Florida Department of Highway Safety and Motor Vehicles (FLHSMV) say.' },
        { type: 'callout', title: 'We don’t decide your residency', text: 'Whether you are a Florida resident depends on your own facts and can matter for taxes and other legal questions. This article explains the rules; it does not decide your status. If unsure, ask FLHSMV, your county tax collector or a qualified professional.' },

        { type: 'h2', text: 'Your home-state license while you visit' },
        { type: 'p', text: 'A nonresident who has a **valid noncommercial driver license from their home state or country in their immediate possession** does not need a Florida license to drive a regular passenger car here ([s. 322.04(1)(c)–(d)](' + S.s32204 + ')). The license must stay valid, and the exemption ends once the work-or-school rule below applies ([s. 322.04(2)](' + S.s32204 + ')).' },

        { type: 'h2', text: 'Your home plates can stay, with exceptions' },
        { type: 'p', text: 'Florida’s registration requirement does not apply to a car owned by a nonresident if the car is properly registered in the owner’s home state or country and shows that plate ([s. 320.37(1)](' + S.s32237 + ')). The exemption does **not** cover ([s. 320.37(2)](' + S.s32237 + ')):' },
        { type: 'ul', items: [
          'a foreign (out-of-state) corporation doing business in Florida;',
          'vehicles operated for hire;',
          '**recreational vehicles or mobile homes kept in Florida for at least 6 consecutive months**;',
          'commercial vehicles.',
        ] },
        { type: 'p', text: 'If you winter in an RV park, that third point is the one to watch.' },

        { type: 'h2', text: 'What changes the picture: work, school or residency' },
        { type: 'p', text: 'Two events end the visitor exemptions even if you still live somewhere else: **accepting a job or doing business in Florida** (a trade, profession or occupation), or **enrolling your children in a Florida public school**. When either happens:' },
        { type: 'ul', items: [
          '**Registration: within 10 days.** You must register in Florida the vehicles you plan to drive here ([s. 320.38](' + S.s32038 + ')). FLHSMV adds that the car must then also carry a Florida policy ([FLHSMV insurance](' + S.ins + ')).',
          '**Driver license: within 30 days**, if you drive here. Your spouse and dependent children must also get Florida licenses within that 30-day period before driving ([s. 322.031(1)](' + S.s322031 + ')).',
        ] },
        { type: 'p', text: 'The law lists exceptions, including nonresident migrant or seasonal farm workers, active-duty military members and their families, certain college students, and people domiciled in another state who commute into Florida to work and hold a valid license from that state ([s. 322.031(2)–(3)](' + S.s322031 + '); [s. 320.38](' + S.s32038 + ')). FLHSMV also lists a 90-day temporary plate for a customer who is temporarily employed in Florida ([FLHSMV license plates](' + S.plates + ')). Ask the tax collector’s office whether it fits your case.' },
        { type: 'p', text: 'Becoming a resident is the third trigger. FLHSMV says you **may be considered a Florida resident** when you have started work here, enrolled children in public school, registered to vote here, filed for a homestead tax exemption, or lived here more than six consecutive months ([FLHSMV New Resident](' + S.newRes + ')). The statutes define a resident in similar terms, including someone who has made a sworn statement of domicile under s. 222.17 ([s. 320.01(34)](' + S.s32001 + '); [s. 322.01(36)](' + S.s32201 + ')). For a new resident, FLHSMV gives **30 days for the Florida license** and **10 days to get Florida insurance and title and register the vehicle**.' },
        { type: 'p', text: 'Filing for homestead or declaring Florida domicile also counts for license and vehicle purposes.' },

        { type: 'h2', text: 'The 90-day insurance rule, even without a Florida tag' },
        { type: 'p', text: 'This is the rule many winter visitors have never heard of. If you are a nonresident and your car, **whether driven or not, has been physically in Florida for more than 90 days during the preceding 365 days**, you must keep Florida personal injury protection (PIP) and property damage liability (PDL) security in effect **continuously for as long as the car stays in Florida** ([s. 627.733(2)](' + S.s627733 + '); [s. 324.022(3)](' + S.s324022 + ')).' },
        { type: 'p', text: 'A car that comes down in early December and stays until April passes that line. The law describes this security as a policy delivered or issued for delivery in Florida by an authorized insurer that provides Florida’s PIP benefits, or another method the state approves ([s. 627.733(3)](' + S.s627733 + ')). FLHSMV sets the floor at **$10,000 of PIP**, which pays 80% of necessary and reasonable medical expenses up to $10,000 after a covered injury regardless of fault, and **$10,000 of PDL** ([FLHSMV insurance](' + S.ins + ')).' },
        { type: 'p', text: 'Ask your current insurer, in writing, whether your policy meets these requirements while the car is here, or talk with a Florida-licensed agent. For the full list of coverages, see [Florida minimum car insurance requirements](/en/blog/florida-minimum-car-insurance-requirements).' },

        { type: 'h2', text: 'If you do register your car in Florida' },
        { type: 'p', text: 'The tag office will not issue a registration without proof of PIP and PDL ([s. 320.02(5)(a)](' + S.s32002 + ')). For a car coming from another state without a lien, FLHSMV lists ([FLHSMV New Resident](' + S.newRes + ')):' },
        { type: 'ul', items: [
          'proof of identity for every owner;',
          'proof of Florida insurance (an electronic card works; see [electronic proof of insurance](/en/blog/electronic-proof-of-insurance-florida));',
          'the original out-of-state title;',
          'form HSMV 82040, signed by all owners;',
          'a VIN inspection by a law enforcement officer, a licensed Florida dealer or a tax collector or FLHSMV employee.',
        ] },
        { type: 'p', text: 'If a lender holds the title, contact the lender first; FLHSMV says the car must be registered either way. Florida driver licenses are applied for in person. More on the insurance-first order in [buying a car in Florida](/en/blog/buying-car-florida-insurance-registration).' },

        { type: 'h2', text: 'Heading home in the spring' },
        { type: 'ul', items: [
          '**Florida-registered car:** keep the Florida policy for the whole registration period, even if the car is parked or out of state. Turn in the plate, or register the car in the other state, before you cancel ([FLHSMV insurance](' + S.ins + ')). A lapse can lead to suspension of your license and plate for up to three years; see [license suspended for no insurance](/en/blog/florida-license-suspended-no-insurance).',
          '**Car left in Florida with home plates:** once the 90-day line is passed, the security duty continues “throughout the period” the car remains here, driven or not ([s. 627.733(2)](' + S.s627733 + ')).',
        ] },

        { type: 'h2', text: 'A quick snowbird checklist' },
        { type: 'ol', items: [
          'Count the days your car will be in Florida in a 365-day period.',
          'Ask your insurer, in writing, how your policy works in Florida after 90 days.',
          'Plan ahead before taking a job here or enrolling a child in public school (10 and 30 days).',
          'Before filing for homestead or declaring domicile, review the license and tag steps that follow.',
        ] },
        { type: 'callout', title: 'Talk it through with a local agent', text: 'Ask through the [quote form](/en/quote) or call [(305) 859-3953](' + TEL + '). M&K Agency is at 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (Monday–Friday 9–6, Saturday by appointment), and we work in English, Spanish and Russian. See also [car insurance in Florida City](/en/car-insurance-florida-city). Coverage depends on the policy you choose. This is general information, not legal or tax advice.' },
      ],
      faq: [
        { q: 'I spend every winter in Florida. Do I have to register my car here?', a: 'Not simply because of the season. A nonresident’s car properly registered at home is exempt (s. 320.37), unless you take a job, do business or enroll children in public school here (s. 320.38), or you become a resident. FLHSMV lists living here more than six consecutive months among the signs of residency, so longer stays deserve a closer look.' },
        { q: 'Does my home-state policy cover me in Florida?', a: 'It depends on the policy. Once the car has been here more than 90 days in a 365-day period, Florida requires PIP and PDL security that meets its rules (s. 627.733(2), s. 324.022(3)). Ask your insurer to confirm in writing.' },
        { q: 'I took a part-time winter job. What changes?', a: 'Unless an exception applies, register the vehicles you drive here within 10 days (s. 320.38) and, if you drive, get a Florida license within 30 days (s. 322.031).' },
        { q: 'Can you tell me whether I am a Florida resident?', a: 'No. Residency depends on your own facts. We can explain the rules and help with the insurance side; for the status itself, ask FLHSMV, your tax collector or a qualified professional.' },
      ],
      sources: [
        { label: 'FLHSMV: New Resident – Welcome to Florida', url: S.newRes },
        { label: 'FLHSMV: Florida insurance requirements', url: S.ins },
        { label: 'FLHSMV: motor vehicle registrations', url: S.reg },
        { label: 'FLHSMV: license plates and registration (temporary plates)', url: S.plates },
        { label: 'Florida Statutes, s. 320.37 (2026): registration not to apply to nonresidents', url: S.s32237 },
        { label: 'Florida Statutes, s. 320.38 (2026): when nonresident exemption not allowed', url: S.s32038 },
        { label: 'Florida Statutes, s. 322.031 (2026): nonresident; when license required', url: S.s322031 },
        { label: 'Florida Statutes, s. 322.04 (2026): persons exempt from obtaining a driver license', url: S.s32204 },
        { label: 'Florida Statutes, s. 320.01 and s. 322.01 (2026): definitions of “resident”', url: S.s32001 },
        { label: 'Florida Statutes, s. 627.733 (2026): required security', url: S.s627733 },
        { label: 'Florida Statutes, s. 324.022 (2026): financial responsibility for property damage', url: S.s324022 },
        { label: 'Florida Statutes, s. 320.02 (2026): registration; proof of insurance', url: S.s32002 },
      ],
    },
    es: {
      title: 'Pasar el invierno en Florida: cuándo un conductor de otro estado necesita licencia, registro y seguro de Florida',
      metaTitle: 'Snowbirds: licencia, placa y seguro en Florida | M&K Agency',
      description: '¿Pasa el invierno en Florida con su carro de otro estado? Cuándo la ley pide licencia, registro y seguro de Florida, y la regla de seguro de los 90 días.',
      ogAlt: 'Ilustración de un carro con una placa en blanco en una carretera de Florida con palmeras, una maleta, un calendario y un escudo azul con una marca de verificación',
      excerpt: '¿Trae su propio carro para el invierno? Florida trata la licencia, el registro y el seguro como tres preguntas distintas. Esto es lo que activa cada una.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'Cada otoño llegan al sur de Florida conductores que pasan aquí el invierno con su carro, su licencia y sus placas de otro estado. La pregunta de cada temporada: **¿necesito licencia, placa o seguro de Florida?** La ley responde a cada una por separado. Esto dicen los estatutos y el Departamento de Seguridad en las Carreteras y Vehículos Motorizados de Florida (FLHSMV).' },
        { type: 'callout', title: 'No decidimos su residencia', text: 'Ser o no residente de Florida depende de sus circunstancias y puede influir en impuestos y otros asuntos legales. Explicamos las reglas, no su situación. Si tiene dudas, consulte al FLHSMV, al tax collector de su condado o a un profesional.' },

        { type: 'h2', text: 'Su licencia de otro estado durante la visita' },
        { type: 'p', text: 'Un no residente que lleva consigo una **licencia no comercial vigente de su estado o país** no necesita licencia de Florida para manejar un carro de pasajeros común ([s. 322.04(1)(c)–(d)](' + S.s32204 + ')). La licencia debe estar vigente, y la excepción termina cuando aplica la regla de trabajo o escuela que verá más abajo ([s. 322.04(2)](' + S.s32204 + ')).' },

        { type: 'h2', text: 'Sus placas pueden quedarse, con excepciones' },
        { type: 'p', text: 'La obligación de registrar el carro en Florida no aplica al vehículo de un no residente si está bien registrado en su estado o país y lleva esa placa a la vista ([s. 320.37(1)](' + S.s32237 + ')). La excepción **no** cubre ([s. 320.37(2)](' + S.s32237 + ')):' },
        { type: 'ul', items: [
          'corporaciones de otro estado que hacen negocios en Florida;',
          'vehículos de alquiler con conductor (for hire);',
          '**vehículos recreativos (RV) o casas móviles que permanecen en Florida 6 meses seguidos o más**;',
          'vehículos comerciales.',
        ] },
        { type: 'p', text: '¿Pasa el invierno en un parque de RV? Fíjese en el tercer punto.' },

        { type: 'h2', text: 'Lo que cambia todo: trabajo, escuela o residencia' },
        { type: 'p', text: 'Dos hechos terminan las excepciones, aunque usted siga viviendo en otro lugar: **aceptar un empleo o ejercer un oficio, profesión o negocio en Florida**, o **inscribir a sus hijos en una escuela pública de Florida**. Cuando pasa cualquiera de los dos:' },
        { type: 'ul', items: [
          '**Registro: 10 días.** Debe registrar en Florida los vehículos que piensa usar aquí ([s. 320.38](' + S.s32038 + ')). El FLHSMV añade que el carro también debe tener una póliza de Florida ([FLHSMV, seguros](' + S.ins + ')).',
          '**Licencia: 30 días**, si maneja aquí. Su cónyuge y sus hijos dependientes también deben sacar la licencia de Florida dentro de ese plazo antes de manejar ([s. 322.031(1)](' + S.s322031 + ')).',
        ] },
        { type: 'p', text: 'Hay excepciones: trabajadores agrícolas de temporada no residentes, militares en servicio activo y sus familias, ciertos estudiantes y quienes viven en otro estado, cruzan a Florida para trabajar y tienen licencia válida de ese estado ([s. 322.031(2)–(3)](' + S.s322031 + '); [s. 320.38](' + S.s32038 + ')). El FLHSMV también prevé una placa temporal de 90 días para quien trabaja temporalmente en Florida ([FLHSMV, placas](' + S.plates + ')); pregunte al tax collector si aplica.' },
        { type: 'p', text: 'La tercera causa es hacerse residente. Según el FLHSMV, **puede considerarse residente de Florida** si empezó a trabajar aquí, inscribió a sus hijos en una escuela pública, se registró para votar aquí, solicitó la exención de impuestos homestead o vivió aquí más de seis meses seguidos ([FLHSMV, nuevos residentes](' + S.newRes + ')). Los estatutos definen al residente de forma parecida e incluyen a quien firma una declaración jurada de domicilio según el s. 222.17 ([s. 320.01(34)](' + S.s32001 + '); [s. 322.01(36)](' + S.s32201 + ')). Para el nuevo residente, el FLHSMV fija **30 días para la licencia** y **10 días para contratar seguro de Florida, titular y registrar el vehículo**.' },
        { type: 'p', text: 'Pedir el homestead o declarar domicilio también cuenta para la licencia y el registro. Si llega del extranjero con licencia de otro país, vea nuestra guía sobre [seguro de auto con licencia extranjera](/es/blog/seguro-auto-licencia-extranjera-florida).' },

        { type: 'h2', text: 'La regla de los 90 días para el seguro, aunque no tenga placa de Florida' },
        { type: 'p', text: 'Pocos visitantes la conocen. Si usted no es residente y su carro, **se maneje o no, ha estado físicamente en Florida más de 90 días durante los 365 días anteriores**, debe mantener la protección contra lesiones personales (PIP) y la responsabilidad por daños a la propiedad (PDL) de Florida **sin interrupción mientras el carro siga en el estado** ([s. 627.733(2)](' + S.s627733 + '); [s. 324.022(3)](' + S.s324022 + ')).' },
        { type: 'p', text: 'De diciembre a abril, ese límite se supera. La ley pide una póliza emitida para entrega en Florida por una aseguradora autorizada, con los beneficios PIP de Florida, u otro método aprobado por el estado ([s. 627.733(3)](' + S.s627733 + ')). El FLHSMV fija el mínimo en **$10,000 de PIP**, que paga el 80% de los gastos médicos necesarios y razonables hasta $10,000 tras una lesión cubierta, sin importar quién tuvo la culpa, y **$10,000 de PDL** ([FLHSMV, seguros](' + S.ins + ')).' },
        { type: 'p', text: 'Pida a su aseguradora una confirmación por escrito o hable con un agente con licencia en Florida. Más detalles en [requisitos mínimos de seguro de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements).' },

        { type: 'h2', text: 'Si registra el carro en Florida' },
        { type: 'p', text: 'La oficina no emite el registro sin prueba de PIP y PDL ([s. 320.02(5)(a)](' + S.s32002 + ')). Para un carro de otro estado sin préstamo, el FLHSMV pide ([FLHSMV, nuevos residentes](' + S.newRes + ')):' },
        { type: 'ul', items: [
          'identificación de todos los dueños;',
          'prueba de seguro de Florida (sirve la tarjeta electrónica; vea [prueba electrónica del seguro](/es/blog/electronic-proof-of-insurance-florida));',
          'el título original del otro estado;',
          'el formulario HSMV 82040 firmado por todos los dueños;',
          'la verificación del VIN por un agente de la ley, un concesionario de Florida con licencia o un empleado del tax collector o del FLHSMV.',
        ] },
        { type: 'p', text: 'Si el banco tiene el título, hable primero con él; el carro debe registrarse de todos modos. La licencia se tramita en persona. Sobre el orden seguro-primero, lea [comprar un carro en Florida](/es/blog/buying-car-florida-insurance-registration).' },

        { type: 'h2', text: 'Al regresar en primavera' },
        { type: 'ul', items: [
          '**Carro registrado en Florida:** mantenga la póliza todo el período de registro, aunque el carro esté guardado o fuera. Entregue la placa o registre el carro en su estado antes de cancelar ([FLHSMV, seguros](' + S.ins + ')). Sin seguro, la licencia y la placa pueden suspenderse hasta tres años; vea [licencia suspendida por falta de seguro](/es/blog/florida-license-suspended-no-insurance).',
          '**Carro que se queda en Florida con placas de su estado:** una vez pasado el límite de 90 días, la obligación sigue “durante todo el período” en que el carro permanezca aquí, se use o no ([s. 627.733(2)](' + S.s627733 + ')).',
        ] },

        { type: 'h2', text: 'Lista rápida para snowbirds' },
        { type: 'ol', items: [
          'Cuente los días que el carro estará en Florida en 365 días.',
          'Pregunte a su aseguradora, por escrito, cómo funciona su póliza en Florida después de 90 días.',
          'Si acepta un trabajo aquí o inscribe a un hijo en la escuela pública, tenga en cuenta los plazos de 10 y 30 días.',
          'Antes de pedir el homestead o declarar domicilio, revise qué trámites de licencia y placa siguen.',
        ] },
        { type: 'callout', title: 'Hable con un agente local', text: 'Escríbanos por el [formulario de cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + '). M&K Agency está en 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (lunes a viernes de 9 a 6, sábados con cita) y le atendemos en español, inglés y ruso. Vea también [seguro de auto en Florida City](/es/car-insurance-florida-city). La cobertura depende de la póliza que elija. Esta es información general, no asesoría legal ni fiscal.' },
      ],
      faq: [
        { q: 'Paso todos los inviernos en Florida. ¿Tengo que registrar mi carro aquí?', a: 'No solo por la temporada. El carro de un no residente bien registrado en su estado está exento (s. 320.37), salvo que trabaje o inscriba a sus hijos en una escuela pública aquí (s. 320.38) o se haga residente. Ojo: el FLHSMV cuenta vivir aquí más de seis meses seguidos entre las señales de residencia.' },
        { q: '¿Mi póliza de otro estado me cubre en Florida?', a: 'Depende de la póliza. Cuando el carro lleva aquí más de 90 días en 365, la ley exige PIP y PDL según las reglas de Florida (s. 627.733(2), s. 324.022(3)). Pida a su aseguradora que lo confirme por escrito.' },
        { q: 'Conseguí un trabajo de medio tiempo para el invierno. ¿Qué cambia?', a: 'Salvo excepción, registre en 10 días los vehículos que maneja aquí (s. 320.38) y, si maneja, saque la licencia de Florida en 30 días (s. 322.031).' },
        { q: '¿Ustedes pueden decirme si soy residente de Florida?', a: 'No. La residencia depende de sus circunstancias. Le explicamos las reglas y le ayudamos con el seguro; sobre su situación, consulte al FLHSMV, al tax collector o a un profesional.' },
      ],
      sources: [
        { label: 'FLHSMV: New Resident – Welcome to Florida (nuevos residentes)', url: S.newRes },
        { label: 'FLHSMV: requisitos de seguro en Florida', url: S.ins },
        { label: 'FLHSMV: registro de vehículos', url: S.reg },
        { label: 'FLHSMV: placas y registro (placas temporales)', url: S.plates },
        { label: 'Estatutos de Florida, s. 320.37 (2026): no residentes y registro', url: S.s32237 },
        { label: 'Estatutos de Florida, s. 320.38 (2026): cuándo no aplica la excepción', url: S.s32038 },
        { label: 'Estatutos de Florida, s. 322.031 (2026): no residentes y licencia', url: S.s322031 },
        { label: 'Estatutos de Florida, s. 322.04 (2026): personas exentas de licencia', url: S.s32204 },
        { label: 'Estatutos de Florida, s. 320.01 y s. 322.01 (2026): definición de “residente”', url: S.s32001 },
        { label: 'Estatutos de Florida, s. 627.733 (2026): protección requerida (PIP)', url: S.s627733 },
        { label: 'Estatutos de Florida, s. 324.022 (2026): responsabilidad por daños a la propiedad', url: S.s324022 },
        { label: 'Estatutos de Florida, s. 320.02 (2026): registro y prueba de seguro', url: S.s32002 },
      ],
    },
    ru: {
      title: 'Зимуете во Флориде: когда нужны местные права, регистрация и страховка',
      metaTitle: 'Зимовка во Флориде: права, номера и страховка | M&K Agency',
      description: 'Проводите зиму во Флориде на своей машине из другого штата? Когда закон требует флоридские права, регистрацию и страховку и что такое правило 90 дней.',
      ogAlt: 'Иллюстрация: машина с пустым номерным знаком на дороге во Флориде, пальмы, чемодан, календарь и синий щит с галочкой',
      excerpt: 'Приехали на зиму на своей машине? Права, регистрация и страховка во Флориде — три разных вопроса. Рассказываем, что запускает каждый из них.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Каждую осень в Южную Флориду приезжают зимовать водители на своих машинах — с правами и номерами другого штата. И каждый сезон звучит вопрос: **нужны ли мне флоридские права, флоридские номера или флоридская страховка?** Закон отвечает на эти вопросы по отдельности, и у каждого свой повод. Разбираем, что говорят законы штата и Департамент безопасности дорожного движения и транспортных средств Флориды (FLHSMV).' },
        { type: 'callout', title: 'Мы не определяем вашу резидентность', text: 'Резидент вы Флориды или нет, зависит от ваших обстоятельств и может влиять на налоги, участие в выборах и другие юридические вопросы. Эта статья объясняет правила, но не определяет ваш статус. Если сомневаетесь, уточните в FLHSMV или в офисе tax collector вашего округа, а по налоговым и юридическим вопросам — у профильного специалиста.' },

        { type: 'h2', text: 'Права своего штата на время визита' },
        { type: 'p', text: 'Нерезиденту, у которого **при себе действующие некоммерческие права своего штата или страны**, флоридские права для обычной легковой машины не нужны ([s. 322.04(1)(c)–(d)](' + S.s32204 + ')). Права должны быть действительны, а исключение перестаёт работать, как только вступает в силу правило о работе или школе ниже ([s. 322.04(2)](' + S.s32204 + ')).' },

        { type: 'h2', text: 'Номера своего штата можно оставить, но не всегда' },
        { type: 'p', text: 'Требование регистрировать машину во Флориде не распространяется на машину нерезидента, если она правильно зарегистрирована в его штате или стране и на ней стоит этот номер ([s. 320.37(1)](' + S.s32237 + ')). Исключение **не** действует для ([s. 320.37(2)](' + S.s32237 + ')):' },
        { type: 'ul', items: [
          'корпораций из других штатов, ведущих бизнес во Флориде;',
          'машин, работающих по найму (for hire);',
          '**домов на колёсах (RV) и мобильных домов, которые находятся во Флориде 6 месяцев подряд и дольше**;',
          'коммерческих машин.',
        ] },
        { type: 'p', text: 'Если вы зимуете в RV-парке, обратите внимание именно на третий пункт.' },

        { type: 'h2', text: 'Что всё меняет: работа, школа или переезд' },
        { type: 'p', text: 'Два события отменяют «гостевые» исключения, даже если вы по-прежнему живёте в другом штате: **вы устроились на работу или занимаетесь во Флориде профессией или бизнесом**, либо **отдали детей в государственную школу Флориды**. В этом случае:' },
        { type: 'ul', items: [
          '**Регистрация — 10 дней.** Машины, на которых вы собираетесь здесь ездить, нужно зарегистрировать во Флориде ([s. 320.38](' + S.s32038 + ')). FLHSMV добавляет, что тогда на машину нужен и флоридский полис ([FLHSMV о страховке](' + S.ins + ')).',
          '**Права — 30 дней**, если вы здесь водите. Супруг(а) и дети на иждивении тоже должны получить флоридские права в течение этих 30 дней, прежде чем садиться за руль ([s. 322.031(1)](' + S.s322031 + ')).',
        ] },
        { type: 'p', text: 'Закон предусматривает исключения: сезонные сельхозработники-нерезиденты, военные на действительной службе и их семьи, некоторые студенты, а также те, у кого постоянное место жительства в другом штате, кто ездит во Флориду только на работу и имеет действующие права того штата ([s. 322.031(2)–(3)](' + S.s322031 + '); [s. 320.38](' + S.s32038 + ')). Кроме того, FLHSMV упоминает временный номер на 90 дней для тех, кто временно работает во Флориде ([FLHSMV о номерах](' + S.plates + ')). Подходит ли он вам, уточните в офисе tax collector.' },
        { type: 'p', text: 'Третий повод — стать резидентом. По словам FLHSMV, **вас могут считать резидентом Флориды**, если вы начали здесь работать, записали детей в государственную школу, зарегистрировались здесь как избиратель, подали заявление на homestead exemption (налоговое освобождение для основного жилья) или прожили здесь больше шести месяцев подряд ([FLHSMV для новых резидентов](' + S.newRes + ')). В законах определение похожее; туда же относится заявление о постоянном месте жительства (statement of domicile) по s. 222.17 ([s. 320.01(34)](' + S.s32001 + '); [s. 322.01(36)](' + S.s32201 + ')). Новому резиденту FLHSMV даёт **30 дней на флоридские права** и **10 дней, чтобы оформить флоридскую страховку, титул и регистрацию машины**.' },
        { type: 'p', text: 'Это важно тем, кто решил оформить homestead или заявить Флориду местом постоянного проживания: эти шаги учитываются и для прав, и для регистрации машины. Если вы переехали из другой страны с иностранными правами, читайте наш материал [об автостраховке для новоприбывших](/ru/blog/seguro-auto-licencia-extranjera-florida).' },

        { type: 'h2', text: 'Правило 90 дней для страховки — даже без флоридских номеров' },
        { type: 'p', text: 'О нём многие зимующие даже не слышали. Если вы нерезидент, а ваша машина — **неважно, ездите вы на ней или нет — провела во Флориде больше 90 дней за предыдущие 365 дней**, вы обязаны держать флоридское покрытие PIP (личная защита от травм) и PDL (ответственность за ущерб чужому имуществу) **без перерывов всё время, пока машина остаётся в штате** ([s. 627.733(2)](' + S.s627733 + '); [s. 324.022(3)](' + S.s324022 + ')).' },
        { type: 'p', text: 'Машина, которая приехала в начале декабря и стоит здесь до апреля, этот порог переходит. Закон описывает такое покрытие как полис, выданный во Флориде (delivered or issued for delivery) уполномоченной страховой компанией и включающий флоридские выплаты PIP, либо другой одобренный штатом способ ([s. 627.733(3)](' + S.s627733 + ')). Минимум по FLHSMV — **$10,000 PIP** (80% необходимых и разумных медицинских расходов до $10,000 после страхового случая, независимо от виновника) и **$10,000 PDL** ([FLHSMV о страховке](' + S.ins + ')).' },
        { type: 'p', text: 'Что делать: письменно спросите свою страховую, соответствует ли ваш полис этим требованиям Флориды, пока машина здесь, или поговорите с агентом, у которого есть флоридская лицензия. Все обязательные виды покрытия — в статье [о минимальной автостраховке во Флориде](/ru/blog/florida-minimum-car-insurance-requirements).' },

        { type: 'h2', text: 'Если вы всё же регистрируете машину во Флориде' },
        { type: 'p', text: 'Без подтверждения PIP и PDL регистрацию не выдадут ([s. 320.02(5)(a)](' + S.s32002 + ')). Для машины из другого штата без кредита FLHSMV перечисляет ([FLHSMV для новых резидентов](' + S.newRes + ')):' },
        { type: 'ul', items: [
          'документ, удостоверяющий личность, для каждого владельца;',
          'подтверждение флоридской страховки (подойдёт электронная карточка, см. [электронное подтверждение страховки](/ru/blog/electronic-proof-of-insurance-florida));',
          'оригинал титула другого штата;',
          'форму HSMV 82040 с подписями всех владельцев;',
          'проверку VIN: её проводит сотрудник полиции, лицензированный дилер Флориды или сотрудник tax collector или FLHSMV.',
        ] },
        { type: 'p', text: 'Если титул у банка-кредитора, сначала свяжитесь с ним: по словам FLHSMV, зарегистрировать машину нужно в любом случае. Флоридские права оформляют лично в офисе. Почему страховка идёт первой, читайте в статье [о покупке машины во Флориде](/ru/blog/buying-car-florida-insurance-registration).' },

        { type: 'h2', text: 'Весной, перед отъездом' },
        { type: 'ul', items: [
          '**Машина с флоридской регистрацией:** держите флоридский полис весь срок регистрации, даже если машина стоит или уехала из штата. Сначала сдайте номер или зарегистрируйте машину в другом штате, а потом отменяйте полис ([FLHSMV о страховке](' + S.ins + ')). Перерыв в страховке грозит приостановкой прав и номера на срок до трёх лет, подробнее — в статье [о приостановке прав из-за отсутствия страховки](/ru/blog/florida-license-suspended-no-insurance).',
          '**Машина остаётся во Флориде с номерами другого штата:** после 90 дней обязанность действует «в течение всего периода», пока машина здесь, ездят на ней или нет ([s. 627.733(2)](' + S.s627733 + ')).',
        ] },

        { type: 'h2', text: 'Короткий чек-лист для зимующих' },
        { type: 'ol', items: [
          'Посчитайте, сколько дней за 365 дней машина проведёт во Флориде.',
          'Письменно спросите страховую, как работает ваш полис во Флориде после 90 дней.',
          'Устраиваетесь на работу или записываете ребёнка в школу — учтите сроки 10 и 30 дней.',
          'Перед оформлением homestead или заявления о месте жительства уточните, что последует с правами и номерами.',
        ] },
        { type: 'callout', title: 'Обсудите свою ситуацию с местным агентом', text: 'Оставьте заявку через [форму](/ru/quote) или позвоните [(305) 859-3953](' + TEL + '). M&K Agency: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 (понедельник–пятница 9–6, суббота по записи). Говорим по-русски, по-английски и по-испански — см. также [русскоязычный страховой агент в Майами](/ru/russian-speaking-insurance-agent-miami) и [автостраховку во Florida City](/ru/car-insurance-florida-city). Покрытие зависит от выбранного полиса. Это общая информация, а не юридическая или налоговая консультация.' },
      ],
      faq: [
        { q: 'Я каждую зиму провожу во Флориде. Нужно ли регистрировать здесь машину?', a: 'Не из-за самого сезона. Машина нерезидента, правильно зарегистрированная в его штате, освобождена (s. 320.37), если только вы не устроились здесь на работу, не ведёте бизнес, не отдали детей в государственную школу (s. 320.38) и не стали резидентом. FLHSMV называет проживание здесь больше шести месяцев подряд одним из признаков резидентности, поэтому долгие визиты стоит проверить.' },
        { q: 'Действует ли во Флориде полис моего штата?', a: 'Зависит от полиса. Но отдельно от этого, когда машина пробыла во Флориде больше 90 дней за 365 дней, закон требует PIP и PDL по флоридским правилам (s. 627.733(2), s. 324.022(3)). Попросите страховую подтвердить это письменно или поговорите с агентом с флоридской лицензией.' },
        { q: 'Я устроился на зиму на подработку. Что меняется?', a: 'По s. 320.38 машины, на которых вы здесь ездите, нужно зарегистрировать во Флориде в течение 10 дней, а по s. 322.031 — получить флоридские права в течение 30 дней, если вы водите. Есть исключения, например для тех, кто постоянно живёт в другом штате, ездит во Флориду на работу и имеет действующие права того штата.' },
        { q: 'Можете ли вы сказать, резидент я Флориды или нет?', a: 'Нет. Резидентность зависит от ваших обстоятельств и может влиять на налоги и другие юридические вопросы. Мы объясним, что говорят FLHSMV и законы, и поможем со страховкой, а сам статус уточняйте в FLHSMV, у tax collector или у профильного специалиста.' },
      ],
      sources: [
        { label: 'FLHSMV: New Resident – Welcome to Florida (новым резидентам)', url: S.newRes },
        { label: 'FLHSMV: требования к страховке во Флориде', url: S.ins },
        { label: 'FLHSMV: регистрация транспортных средств', url: S.reg },
        { label: 'FLHSMV: номера и регистрация (временные номера)', url: S.plates },
        { label: 'Florida Statutes, s. 320.37 (2026): регистрация и нерезиденты', url: S.s32237 },
        { label: 'Florida Statutes, s. 320.38 (2026): когда исключение для нерезидентов не действует', url: S.s32038 },
        { label: 'Florida Statutes, s. 322.031 (2026): нерезиденты и водительские права', url: S.s322031 },
        { label: 'Florida Statutes, s. 322.04 (2026): кому не нужны флоридские права', url: S.s32204 },
        { label: 'Florida Statutes, s. 320.01 и s. 322.01 (2026): определение «резидента»', url: S.s32001 },
        { label: 'Florida Statutes, s. 627.733 (2026): обязательное покрытие (PIP)', url: S.s627733 },
        { label: 'Florida Statutes, s. 324.022 (2026): ответственность за ущерб имуществу', url: S.s324022 },
        { label: 'Florida Statutes, s. 320.02 (2026): регистрация и подтверждение страховки', url: S.s32002 },
      ],
    },
  },
};
