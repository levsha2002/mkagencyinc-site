import type { BlogPost } from '../types';

// New article 2026-11-27 (content plan 2026-11, row 2026-11-27). Facts checked 2026-11-27 (ET) against
// official sources (raw copies in /workspace/adddriver/raw/):
// - s. 320.02(5)(a) (2026): proof of PIP (627.733), PDL (324.022) and, if required, the combined limits of
//   s. 627.7415 must be shown at registration; the issuing agent refuses registration without it; the
//   proof card shows the insurer, coverage ID number and the make, year and VIN of the vehicle.
//   s. 320.02(2)(c): a business applicant gives an FEIN (if applicable) or proof it may do business in Florida.
// - FLHSMV Florida Insurance Requirements: PIP + PDL before registering a vehicle with 4+ wheels;
//   $10,000 each; continuous coverage even if not driven; surrender the plate BEFORE canceling insurance.
// - FLHSMV License Plates page: dealer temporary plate valid 30 days incl. date of issue; failure to
//   surrender a valid plate when insurance is canceled results in driver license suspension.
// - s. 319.23(6)(a): title application filed within 30 days after delivery of the motor vehicle; late fee.
// - s. 320.0609(1)(a), (2)(a): plate stays with the owner; may be transferred to a vehicle in the same
//   classification; on sale/disposition remove the plate and return it or transfer it to a replacement;
//   no plate on a replacement vehicle without an application for transfer.
// - s. 627.733(1)(a): security continuously throughout the registration period.
// - s. 627.7415 (am. ch. 2026-39): commercial motor vehicles, combined BI/PD per occurrence by gross vehicle
//   weight: $50,000 (26,000 to <35,000 lb), $100,000 (35,000 to <44,000), $300,000 (44,000+). Sub. (4)
//   (federal part 387 levels) is not used: out of scope for vehicles that stay in Florida.
// - s. 322.01(8)(a) CMV for licensing = GVWR 26,001 lb or more; s. 322.03(4)(b) Florida resident needs a
//   valid Florida CDL. FLHSMV Commercial Motor Vehicle Drivers page: CDL applicants at least 18; under 21
//   restricted to intrastate operation.
// - s. 316.003 CMV (ch. 316) = used in commerce + GVWR 10,000 lb or more (or >15 passengers / hazmat);
//   s. 316.302(4): no one under 18 may operate a CMV (farm-products exception under 26,001 lb).
// - s. 316.302(2)(a): solely intrastate, no placarded hazmat -> need not comply with 49 CFR 391.11(b)(1)
//   (eCFR 2023-12-31: "Is at least 21 years old"). (2)(f): GVW, GVWR and GCWR under 26,001 lb, solely
//   intrastate, no placarded hazmat -> exempt from (1) but must follow 49 CFR 382, 392, 393,
//   396.3(a)(1), 396.9. (1)(b): other intrastate CMVs follow 49 CFR 382-386 and 390-397 as of Dec 31, 2023.
// - s. 322.36(1), (3): may not permit an unlicensed/unauthorized person to drive; 2nd-degree misdemeanor;
//   knowingly lending to a suspended driver + crash with injury/death -> lender's license suspended 1 year.
// - s. 324.021(9)(c)1: the (9)(b)2-3 owner caps do not apply to vehicles used for commercial activity in the
//   owner's ordinary course of business (other than rental companies).
// - FLHSMV Driver License Check (status by license number) + "Questions About Driving Records" (own 3-year,
//   7-year or complete record via the MyDMV Portal; others' records protected by the DPPA, request form).
// - s. 316.646(1): proof of required security in the driver's possession, paper or electronic.
// Scope (site rule): the agency places commercial auto only for vehicles that operate within Florida.
// No rates, no carrier names, no coverage promises.
const S = {
  s32002: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0320/Sections/0320.02.html',
  s31923: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0319/Sections/0319.23.html',
  s3200609: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0320/Sections/0320.0609.html',
  s627733: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.733.html',
  s6277415: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.7415.html',
  s32201: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0322/Sections/0322.01.html',
  s32203: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0322/Sections/0322.03.html',
  s316003: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.003.html',
  s316302: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.302.html',
  s32236: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0322/Sections/0322.36.html',
  s324021: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0324/Sections/0324.021.html',
  s316646: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.646.html',
  ins: 'https://www.flhsmv.gov/insurance/',
  plates: 'https://www.flhsmv.gov/motor-vehicles-tags-titles/license-plates-registration/',
  cdl: 'https://www.flhsmv.gov/driver-licenses-id-cards/commercial-motor-vehicle-drivers/',
  dlCheck: 'https://mydmvportal.flhsmv.gov/home/en/publicweb/dlcheck',
  records: 'https://www.flhsmv.gov/driver-licenses-id-cards/questions-about-driving-records/',
  c39111: 'https://www.ecfr.gov/on/2023-12-31/title-49/section-391.11',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'adding-driver-vehicle-commercial-auto-florida',
  datePublished: '2026-11-27',
  translations: {
    en: {
      title: 'Adding a Driver or a Second Work Truck to a Florida In-State Commercial Auto Policy',
      metaTitle: 'Adding a Driver or Truck to Commercial Auto | M&K Agency',
      description: 'Buying another work truck or hiring a driver in Florida? What to send your agent first: VIN, weight, garaging address, license numbers and the state rules.',
      ogAlt: 'Illustration of two work trucks side by side, a key on a ring, a clipboard checklist and palm trees',
      excerpt: 'A second truck or a new driver changes your commercial auto policy. What to tell your agent before the truck leaves the lot, and the Florida rules on registration, licenses and plates.',
      category: 'Commercial auto insurance',
      body: [
        { type: 'p', text: 'Business is picking up: you buy a second pickup or box truck, or hire someone to drive the one you have. Before that truck leaves the lot or the new hire takes the keys, call your agent. A commercial auto policy is written around a list of vehicles and drivers, and a change to that list is a change to the policy. This guide is for trucks that work **only within Florida**, which is the kind of commercial auto M&K Agency places.' },
        { type: 'callout', title: 'Short version', text: 'Send the VIN and weight of the new truck and the full name, date of birth and license number of the new driver **before** the first trip. Whether a new vehicle or driver has any coverage before you report it depends on your policy’s wording, so don’t assume it does.' },

        { type: 'h2', text: 'Adding a truck: what Florida requires first' },
        { type: 'p', text: 'Florida ties registration to insurance. A vehicle with at least four wheels needs personal injury protection (PIP) and property damage liability (PDL) of at least $10,000 each before it can be registered ([FLHSMV](' + S.ins + ')). The tag agency must refuse the registration if you can’t show proof, and the insurance card identifies the insured vehicle by make, year and VIN ([s. 320.02(5)(a)](' + S.s32002 + ')). That is why the agent needs the exact VIN.' },
        { type: 'ul', items: [
          '**Heavier trucks need higher liability.** Commercial motor vehicles must carry combined bodily injury and property damage liability of at least **$50,000** per occurrence from 26,000 to under 35,000 pounds gross vehicle weight, **$100,000** from 35,000 to under 44,000 pounds, and **$300,000** at 44,000 pounds or more ([s. 627.7415](' + S.s6277415 + ')). Proof of that coverage is also checked at registration ([s. 320.02(5)(a)](' + S.s32002 + ')).',
          '**Dealer temporary plates are short.** A dealer temporary plate is valid for 30 days, including the day it is issued ([FLHSMV](' + S.plates + ')).',
          '**Coverage has to stay on.** Once the truck is registered, the required security must stay in force for the whole registration period ([s. 627.733(1)(a)](' + S.s627733 + ')), even when the truck is parked ([FLHSMV](' + S.ins + ')).',
        ] },
        { type: 'p', text: 'For the agent, have this ready for the new truck: year, make, model and VIN; the gross vehicle weight rating, plus any trailer it will pull; whether it is titled to you or the business, and any lender or lessor; the address where it is parked overnight; what it carries and the area it works in; equipment such as racks, a liftgate or a toolbox; and the date you take delivery.' },

        { type: 'h2', text: 'Replacing a truck is not the same as adding one' },
        { type: 'p', text: 'If the new truck replaces an old one, tell your agent it is a swap. Florida plates stay with the owner, not the vehicle. When you sell or trade a vehicle, you remove the plate and either return it or transfer it to the replacement, and a plate can move only to a vehicle in the same classification after you apply for the transfer ([s. 320.0609](' + S.s3200609 + ')).' },
        { type: 'p', text: 'FLHSMV says to surrender the plate **before** you cancel the insurance on a vehicle, and failing to surrender a valid plate when the insurance is canceled leads to a driver license suspension ([FLHSMV insurance](' + S.ins + '); [FLHSMV plates](' + S.plates + ')). Don’t drop the old truck until its plate is transferred or turned in.' },

        { type: 'h2', text: 'Adding a driver: check the license and the truck' },
        { type: 'p', text: 'For each new driver, the agent needs full name, date of birth, license number and state, and which trucks they will drive. Before you hand over the keys:' },
        { type: 'ul', items: [
          '**Check the license.** FLHSMV’s online [Driver License Check](' + S.dlCheck + ') shows the status of a Florida license by its number. A driver can buy their own 3-year, 7-year or complete driving record through the MyDMV Portal; records of other people are protected by the federal Driver Privacy Protection Act and are requested with a form ([FLHSMV](' + S.records + ')).',
          '**Match the license to the truck.** A vehicle with a gross vehicle weight rating of 26,001 pounds or more is a commercial motor vehicle for licensing ([s. 322.01(8)](' + S.s32201 + ')), and a Florida resident needs a valid Florida commercial driver license (CDL) to drive one ([s. 322.03(4)(b)](' + S.s32203 + ')). FLHSMV says CDL applicants must be at least 18, and applicants under 21 are restricted to operating within Florida ([FLHSMV](' + S.cdl + ')).',
          '**Watch the age floor on mid-size trucks.** Florida’s traffic code counts a vehicle used in commerce with a gross vehicle weight rating of 10,000 pounds or more as a commercial motor vehicle ([s. 316.003](' + S.s316003 + ')), and no one under 18 may drive one, apart from a narrow farm-products exception ([s. 316.302(4)](' + S.s316302 + ')). Drivers who stay within Florida and don’t haul placarded hazardous materials are not held to the federal 21-year minimum ([s. 316.302(2)(a)](' + S.s316302 + '); [49 CFR 391.11(b)(1)](' + S.c39111 + ')).',
        ] },
        { type: 'p', text: 'Florida also makes it an offense to let someone without a valid license drive a vehicle you own or control. If you knowingly lend a vehicle to a driver whose license is suspended and it is in a crash that injures or kills someone, your own license is suspended for one year ([s. 322.36](' + S.s32236 + ')).' },
        { type: 'p', text: 'Florida caps what a person who lends a vehicle can owe for the borrower’s crash, but those caps **do not apply** to an owner whose vehicles are used for commercial activity in the ordinary course of business ([s. 324.021(9)(c)1](' + S.s324021 + ')). Our guide to [lending your car in Florida](/en/blog/lending-your-car-florida-owner-liability) explains the owner-liability rules. For a business, who is behind the wheel is a big part of the risk, so every regular driver belongs on the list, including family members who sometimes drive the work truck.' },

        { type: 'h2', text: 'Florida rules that come with the second truck' },
        { type: 'ul', items: [
          '**Federal safety rules can apply even inside Florida.** Trucks under 26,001 pounds that work only within Florida and don’t haul placarded hazardous materials must still follow certain federal rules on driving, parts and accessories, and inspection and maintenance ([s. 316.302(2)(f)](' + S.s316302 + ')). Our [USDOT guide for Florida work trucks](/en/blog/usdot-number-florida-work-trucks) explains when you need a USDOT number.',
          '**Proof of insurance in every cab.** The driver must have proof of the required coverage at all times, on paper or electronically ([s. 316.646](' + S.s316646 + ')). See our guide to [electronic proof of insurance](/en/blog/electronic-proof-of-insurance-florida).',
        ] },

        { type: 'h2', text: 'When a driver leaves or a truck is sold' },
        { type: 'p', text: 'Report removals as promptly as additions: tell your agent when a driver stops working for you, and when a truck is sold, deal with the plate first. At year end, our [commercial auto renewal checklist](/en/blog/commercial-auto-renewal-checklist-florida) reviews the full vehicle and driver lists.' },
        { type: 'p', text: 'Coverage choices for a growing fleet, such as liability limits above the legal floors, physical damage on a financed truck, uninsured motorist coverage, or hired and non-owned auto for rented trucks and employees’ own cars, depend on the policy, the vehicles and the business. A licensed agent can go through them with you. More on options: [work truck insurance in Florida](/en/work-truck-insurance-florida) and [commercial auto insurance](/en/insurance/commercial-auto).' },
        { type: 'callout', title: 'Adding a truck or a driver?', text: 'Send the VIN, weight and driver details through the [quote form](/en/quote) or call [(305) 859-3953](' + TEL + '). Our office is at 33550 S Dixie Hwy, Suite 102, Florida City (Monday–Friday 9–6, Saturday by appointment), and we work in English, Spanish and Russian. Coverage depends on the policy you choose. This is general information, not legal advice.' },
      ],
      faq: [
        { q: 'Is a truck I just bought covered before I call my agent?', a: 'It depends on your policy’s wording, so call before the first trip with the VIN ready. You also need proof of insurance for that truck to register it in Florida.' },
        { q: 'Can a 19-year-old employee drive our work truck?', a: 'Florida law sets a floor, not the whole answer. No one under 18 may drive a commercial motor vehicle, a CDL truck needs a Florida CDL, and CDL holders under 21 are limited to driving within Florida. Insurers may also have their own driver requirements, so list the driver with your agent before they drive.' },
        { q: 'Do I need to list someone who drives the truck only occasionally?', a: 'Tell your agent about everyone who drives a company vehicle, even once in a while, and ask how your policy treats drivers who are not listed.' },
      ],
      sources: [
        { label: 'FLHSMV: Florida insurance requirements', url: S.ins },
        { label: 'FLHSMV: license plates and registration (temporary plates, plate surrender)', url: S.plates },
        { label: 'Florida Statutes, s. 320.02 (2026): registration; proof of insurance', url: S.s32002 },
        { label: 'Florida Statutes, s. 319.23 (2026): title application within 30 days', url: S.s31923 },
        { label: 'Florida Statutes, s. 320.0609 (2026): transfer of license plates', url: S.s3200609 },
        { label: 'Florida Statutes, s. 627.733 (2026): required security', url: S.s627733 },
        { label: 'Florida Statutes, s. 627.7415 (2026): commercial motor vehicles; liability minimums', url: S.s6277415 },
        { label: 'Florida Statutes, s. 322.01 and s. 322.03 (2026): commercial motor vehicle; CDL required', url: S.s32203 },
        { label: 'FLHSMV: commercial motor vehicle drivers (CDL age rules)', url: S.cdl },
        { label: 'Florida Statutes, s. 316.003 and s. 316.302 (2026): commercial motor vehicle rules', url: S.s316302 },
        { label: '49 CFR 391.11 (as of Dec. 31, 2023): driver qualifications', url: S.c39111 },
        { label: 'Florida Statutes, s. 322.36 (2026): permitting an unauthorized operator to drive', url: S.s32236 },
        { label: 'Florida Statutes, s. 324.021 (2026): owner liability limits', url: S.s324021 },
        { label: 'FLHSMV: Driver License Check and questions about driving records', url: S.records },
        { label: 'Florida Statutes, s. 316.646 (2026): proof of insurance', url: S.s316646 },
      ],
    },
    es: {
      title: 'Cómo agregar un conductor o un segundo camión de trabajo a una póliza de auto comercial en Florida',
      metaTitle: 'Agregar conductor o camión al auto comercial | M&K Agency',
      description: '¿Compra otro camión de trabajo o contrata a un chofer en Florida? Qué darle primero a su agente: VIN, peso, dónde duerme el camión, licencias y reglas.',
      ogAlt: 'Ilustración de dos camiones de trabajo uno al lado del otro, un llavero, una tablilla con lista de verificación y palmas',
      excerpt: 'Un segundo camión o un chofer nuevo cambian su póliza de auto comercial. Qué decirle a su agente antes de sacar el camión del concesionario, y las reglas de Florida sobre registro, licencias y placas.',
      category: 'Seguro de auto comercial',
      body: [
        { type: 'p', text: 'Hay más trabajo: compra una segunda pickup o un box truck, o contrata a alguien para manejar el camión que ya tiene. Antes de sacar el camión del concesionario o de darle las llaves al empleado nuevo, llame a su agente. La póliza de auto comercial se basa en una lista de vehículos y conductores, y cambiar esa lista es cambiar la póliza. Esta guía es para camiones que trabajan **solo dentro de Florida**, el tipo de auto comercial que coloca M&K Agency.' },
        { type: 'callout', title: 'En pocas palabras', text: 'Mande el VIN y el peso del camión nuevo, y el nombre, la fecha de nacimiento y el número de licencia del conductor nuevo **antes** del primer viaje. No dé por hecho que tienen cobertura antes de avisar: depende de su póliza.' },

        { type: 'h2', text: 'Agregar un camión: lo que Florida exige primero' },
        { type: 'p', text: 'En Florida el registro va de la mano con el seguro. Un vehículo de cuatro ruedas o más necesita protección contra lesiones personales (PIP) y responsabilidad por daños a la propiedad (PDL) de al menos $10,000 cada una antes de poder registrarse ([FLHSMV](' + S.ins + ')). La oficina de placas debe negar el registro si usted no presenta la prueba, y la tarjeta del seguro identifica el vehículo por marca, año y VIN ([s. 320.02(5)(a)](' + S.s32002 + ')). Por eso el agente necesita el VIN exacto.' },
        { type: 'ul', items: [
          '**Los camiones más pesados necesitan más responsabilidad civil.** Los vehículos comerciales deben llevar responsabilidad combinada por lesiones y daños a la propiedad de al menos **$50,000** por incidente de 26,000 a menos de 35,000 libras de peso bruto, **$100,000** de 35,000 a menos de 44,000 libras, y **$300,000** desde 44,000 libras ([s. 627.7415](' + S.s6277415 + ')). Esa cobertura también se verifica al registrar ([s. 320.02(5)(a)](' + S.s32002 + ')).',
          '**La placa temporal del concesionario dura poco.** Es válida por 30 días, contando el día en que se emite ([FLHSMV](' + S.plates + ')).',
          '**El seguro no se puede cortar.** Tras el registro, la cobertura exigida debe seguir vigente durante todo el período de registro ([s. 627.733(1)(a)](' + S.s627733 + ')), aunque el camión esté parado ([FLHSMV](' + S.ins + ')).',
        ] },
        { type: 'p', text: 'Tenga a mano para el agente: año, marca, modelo y VIN; el peso bruto nominal (GVWR) y el del tráiler, si lo hay; a nombre de quién está el título y si hay banco o arrendador; dónde se estaciona de noche; qué carga y en qué zona trabaja; equipos añadidos; y la fecha en que lo recibe.' },

        { type: 'h2', text: 'Reemplazar un camión no es lo mismo que agregar uno' },
        { type: 'p', text: 'Si el camión nuevo sustituye a uno viejo, dígale a su agente que es un cambio. En Florida la placa es del dueño, no del vehículo. Cuando vende o entrega un vehículo como parte de pago, quita la placa y la devuelve o la pasa al vehículo de reemplazo, y solo se puede transferir a un vehículo de la misma clasificación, con una solicitud de transferencia ([s. 320.0609](' + S.s3200609 + ')).' },
        { type: 'p', text: 'La FLHSMV indica entregar la placa **antes** de cancelar el seguro; si no la entrega, le suspenden la licencia de conducir ([FLHSMV seguro](' + S.ins + '); [FLHSMV placas](' + S.plates + ')). No quite el camión viejo de la póliza hasta transferir o entregar su placa.' },

        { type: 'h2', text: 'Agregar un conductor: revise la licencia y el camión' },
        { type: 'p', text: 'Por cada conductor nuevo, el agente pedirá nombre, fecha de nacimiento, número y estado de la licencia, y qué camiones manejará. Antes de entregarle las llaves:' },
        { type: 'ul', items: [
          '**Verifique la licencia.** El [Driver License Check](' + S.dlCheck + ') de la FLHSMV muestra en línea el estado de una licencia de Florida por su número. El propio conductor puede comprar su historial de 3 años, 7 años o completo en el portal MyDMV ([FLHSMV](' + S.records + ')).',
          '**La licencia tiene que corresponder al camión.** Un vehículo con peso bruto nominal de 26,001 libras o más es un vehículo comercial a efectos de licencia ([s. 322.01(8)](' + S.s32201 + ')), y un residente de Florida necesita una licencia comercial (CDL) de Florida vigente para manejarlo ([s. 322.03(4)(b)](' + S.s32203 + ')). Según la FLHSMV, quien solicita una CDL debe tener al menos 18 años, y los menores de 21 solo pueden operar dentro de Florida ([FLHSMV](' + S.cdl + ')).',
          '**Ojo con la edad en camiones medianos.** El código de tránsito de Florida considera vehículo comercial a un vehículo usado en el comercio con peso bruto nominal de 10,000 libras o más ([s. 316.003](' + S.s316003 + ')), y nadie menor de 18 años puede manejarlo, salvo una excepción limitada para productos agrícolas ([s. 316.302(4)](' + S.s316302 + ')). A los conductores que no salen de Florida y no llevan materiales peligrosos que requieran placas de aviso no se les aplica el mínimo federal de 21 años ([s. 316.302(2)(a)](' + S.s316302 + '); [49 CFR 391.11(b)(1)](' + S.c39111 + ')).',
        ] },
        { type: 'p', text: 'En Florida es delito dejar que alguien sin licencia válida maneje un vehículo suyo o bajo su control. Si presta a sabiendas un vehículo a una persona con la licencia suspendida y hay un choque con heridos o muertos, le suspenden a usted la licencia por un año ([s. 322.36](' + S.s32236 + ')).' },
        { type: 'p', text: 'Florida limita lo que debe quien presta un vehículo por el choque del que lo maneja, pero esos límites **no se aplican** al dueño de vehículos que se usan en una actividad comercial dentro del curso normal de su negocio ([s. 324.021(9)(c)1](' + S.s324021 + ')). Nuestra guía sobre [prestar su carro en Florida](/es/blog/lending-your-car-florida-owner-liability) explica la responsabilidad del dueño. Por eso todo conductor habitual debe estar en la lista, incluidos los familiares que a veces usan el camión.' },

        { type: 'h2', text: 'Reglas de Florida que llegan con el segundo camión' },
        { type: 'ul', items: [
          '**Hay reglas federales de seguridad aunque no salga de Florida.** Los camiones de menos de 26,001 libras que trabajan solo dentro de Florida y no llevan materiales peligrosos con placas de aviso igual deben cumplir ciertas reglas federales sobre manejo, piezas y accesorios, e inspección y mantenimiento ([s. 316.302(2)(f)](' + S.s316302 + ')). Nuestra [guía del número USDOT](/es/blog/usdot-number-florida-work-trucks) explica cuándo hace falta.',
          '**Prueba de seguro en cada cabina.** El conductor debe llevar en todo momento la prueba de la cobertura exigida, en papel o en formato electrónico ([s. 316.646](' + S.s316646 + ')). Vea nuestra guía de [prueba electrónica de seguro](/es/blog/electronic-proof-of-insurance-florida).',
        ] },

        { type: 'h2', text: 'Cuando un conductor se va o vende un camión' },
        { type: 'p', text: 'Avise las bajas tan pronto como las altas: cuando un conductor deja de trabajar con usted y, si vende un camión, resuelva primero lo de la placa. A fin de año, nuestra [lista de renovación de auto comercial](/es/blog/commercial-auto-renewal-checklist-florida) repasa vehículos y conductores.' },
        { type: 'p', text: 'Las decisiones de cobertura para una flota que crece, como límites de responsabilidad por encima del mínimo legal, daños propios en un camión financiado, cobertura contra conductores sin seguro o autos alquilados y de empleados (hired and non-owned), dependen de la póliza, los vehículos y el negocio. Un agente con licencia puede revisarlas. Más opciones: [seguro para camiones de trabajo en Florida](/es/work-truck-insurance-florida) y [seguro de auto comercial](/es/insurance/commercial-auto).' },
        { type: 'callout', title: '¿Va a agregar un camión o un conductor?', text: 'Envíenos el VIN, el peso y los datos del conductor con el [formulario de cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + '). Nuestra oficina está en 33550 S Dixie Hwy, Suite 102, Florida City (lunes a viernes de 9 a 6, sábados con cita), y atendemos en español, inglés y ruso. La cobertura depende de la póliza que elija. Esta es información general, no asesoría legal.' },
      ],
      faq: [
        { q: '¿El camión que acabo de comprar está cubierto antes de llamar a mi agente?', a: 'Depende de lo que diga su póliza, así que llame antes del primer viaje con el VIN a mano. Además, sin prueba de seguro de ese camión no podrá registrarlo en Florida.' },
        { q: '¿Un empleado de 19 años puede manejar nuestro camión de trabajo?', a: 'La ley de Florida solo pone un piso. Nadie menor de 18 puede manejar un vehículo comercial, un camión que exige CDL necesita una CDL de Florida, y los titulares de CDL menores de 21 solo pueden manejar dentro de Florida. Las aseguradoras pueden tener sus propios requisitos: agregue al conductor antes de que maneje.' },
        { q: '¿Tengo que incluir a alguien que maneja el camión solo de vez en cuando?', a: 'Avise a su agente de todos los que manejan vehículos de la empresa y pregunte cómo trata su póliza a los conductores no incluidos.' },
      ],
      sources: [
        { label: 'FLHSMV: requisitos de seguro de Florida', url: S.ins },
        { label: 'FLHSMV: placas y registro (placas temporales, entrega de placas)', url: S.plates },
        { label: 'Estatutos de Florida, s. 320.02 (2026): registro; prueba de seguro', url: S.s32002 },
        { label: 'Estatutos de Florida, s. 319.23 (2026): solicitud de título en 30 días', url: S.s31923 },
        { label: 'Estatutos de Florida, s. 320.0609 (2026): transferencia de placas', url: S.s3200609 },
        { label: 'Estatutos de Florida, s. 627.733 (2026): seguro obligatorio', url: S.s627733 },
        { label: 'Estatutos de Florida, s. 627.7415 (2026): vehículos comerciales; mínimos de responsabilidad', url: S.s6277415 },
        { label: 'Estatutos de Florida, s. 322.01 y s. 322.03 (2026): vehículo comercial; CDL obligatoria', url: S.s32203 },
        { label: 'FLHSMV: conductores de vehículos comerciales (edad para la CDL)', url: S.cdl },
        { label: 'Estatutos de Florida, s. 316.003 y s. 316.302 (2026): reglas para vehículos comerciales', url: S.s316302 },
        { label: '49 CFR 391.11 (al 31 de diciembre de 2023): requisitos de los conductores', url: S.c39111 },
        { label: 'Estatutos de Florida, s. 322.36 (2026): permitir que maneje una persona no autorizada', url: S.s32236 },
        { label: 'Estatutos de Florida, s. 324.021 (2026): límites de responsabilidad del dueño', url: S.s324021 },
        { label: 'FLHSMV: Driver License Check y preguntas sobre historiales de manejo', url: S.records },
        { label: 'Estatutos de Florida, s. 316.646 (2026): prueba de seguro', url: S.s316646 },
      ],
    },
    ru: {
      title: 'Как добавить водителя или второй рабочий грузовик в коммерческую автостраховку во Флориде',
      metaTitle: 'Новый водитель или грузовик в коммерческой страховке | M&K Agency',
      description: 'Покупаете ещё один рабочий грузовик или берёте водителя во Флориде? Что сразу сообщить агенту: VIN, вес, адрес стоянки, номер прав — и какие правила действуют.',
      ogAlt: 'Иллюстрация: два рабочих грузовика рядом, связка ключей, планшет с чек-листом и пальмы',
      excerpt: 'Второй грузовик или новый водитель меняют вашу коммерческую автостраховку. Что сказать агенту до того, как машина выедет из дилерского центра, и правила Флориды о регистрации, правах и номерах.',
      category: 'Коммерческое автострахование',
      body: [
        { type: 'p', text: 'Заказов стало больше: вы покупаете второй пикап или бокс-трак либо нанимаете человека, который будет ездить на уже имеющейся машине. Прежде чем грузовик выедет со стоянки дилера, а новый сотрудник получит ключи, позвоните агенту. Коммерческий полис составляется по списку машин и водителей, и любое изменение этого списка — это изменение полиса. Статья касается грузовиков, которые работают **только в пределах Флориды**: именно такое коммерческое автострахование оформляет M&K Agency.' },
        { type: 'callout', title: 'Коротко', text: 'Пришлите VIN и вес новой машины, а также полное имя, дату рождения и номер прав нового водителя **до** первого рейса. Действует ли какое-то покрытие на новую машину или водителя до того, как вы о них сообщили, зависит от формулировок вашего полиса, поэтому не стоит на это рассчитывать.' },

        { type: 'h2', text: 'Новый грузовик: что Флорида требует в первую очередь' },
        { type: 'p', text: 'Во Флориде регистрация машины привязана к страховке. Для транспортного средства с четырьмя колёсами и больше до регистрации нужны PIP (страхование от травм) и PDL (ответственность за ущерб чужому имуществу), не менее $10,000 каждое ([FLHSMV](' + S.ins + ')). Без подтверждения страховки регистрацию не оформят, а в страховой карточке машина указана по марке, году выпуска и VIN ([s. 320.02(5)(a)](' + S.s32002 + ')). Поэтому агенту нужен точный VIN, а не «белый пикап 2022 года».' },
        { type: 'ul', items: [
          '**Для тяжёлых машин минимум ответственности выше.** Коммерческие транспортные средства должны иметь совокупное покрытие ответственности за вред здоровью и имуществу не меньше **$50,000** на случай при полной массе от 26,000 до 35,000 фунтов, **$100,000** — от 35,000 до 44,000 фунтов и **$300,000** — от 44,000 фунтов ([s. 627.7415](' + S.s6277415 + ')). Это покрытие тоже проверяют при регистрации ([s. 320.02(5)(a)](' + S.s32002 + ')).',
          '**Временный номер от дилера действует недолго** — 30 дней, включая день выдачи ([FLHSMV](' + S.plates + ')).',
          '**Страховка не должна прерываться.** После регистрации обязательное покрытие должно действовать весь срок регистрации ([s. 627.733(1)(a)](' + S.s627733 + ')), даже если грузовик стоит без дела ([FLHSMV](' + S.ins + ')).',
        ] },
        { type: 'p', text: 'Подготовьте для агента данные о новой машине: год, марку, модель и VIN; полную разрешённую массу (GVWR), а также массу прицепа, если он будет; на кого оформлен титул — на вас или на компанию, есть ли банк или лизингодатель; адрес, где машина ночует; что она возит и в каком районе работает; дополнительное оборудование — багажник, гидроборт, ящики для инструментов; дату, когда вы её забираете.' },

        { type: 'h2', text: 'Замена грузовика — не то же самое, что добавление' },
        { type: 'p', text: 'Если новая машина заменяет старую, скажите агенту, что это замена. Номерной знак во Флориде принадлежит владельцу, а не машине. Продавая машину или сдавая её в зачёт, вы снимаете номер и либо возвращаете его, либо переносите на новую машину. Перенести номер можно только на машину той же категории и только по заявлению о переносе ([s. 320.0609](' + S.s3200609 + ')).' },
        { type: 'p', text: 'Важен порядок действий. FLHSMV предупреждает: сначала сдайте номер и **только потом** отменяйте страховку. Если действующий номер не сдан, а страховка отменена, водительские права приостанавливают ([FLHSMV, страхование](' + S.ins + '); [FLHSMV, номера](' + S.plates + ')). Так что не звоните агенту снимать старую машину с полиса, пока её номер не перенесён или не сдан.' },

        { type: 'h2', text: 'Новый водитель: проверьте права и подходят ли они к машине' },
        { type: 'p', text: 'По каждому новому водителю агент попросит полное имя, дату рождения, номер прав и штат, где они выданы, а также на каких машинах он будет ездить. Прежде чем отдать ключи:' },
        { type: 'ul', items: [
          '**Проверьте права.** Сервис FLHSMV [Driver License Check](' + S.dlCheck + ') показывает статус флоридских прав по их номеру. Сам водитель может купить свою историю вождения за 3 года, 7 лет или полную через портал MyDMV; записи других людей защищены федеральным законом о конфиденциальности данных водителей (DPPA) и запрашиваются по специальной форме ([FLHSMV](' + S.records + ')).',
          '**Права должны соответствовать машине.** Транспортное средство с полной разрешённой массой от 26,001 фунта считается коммерческим для целей водительских прав ([s. 322.01(8)](' + S.s32201 + ')), и житель Флориды может водить его только с действующими флоридскими коммерческими правами (CDL) ([s. 322.03(4)(b)](' + S.s32203 + ')). По данным FLHSMV, заявителю на CDL должно быть не меньше 18 лет, а водителям до 21 года разрешено ездить только в пределах Флориды ([FLHSMV](' + S.cdl + ')).',
          '**Возраст важен и для средних грузовиков.** Правила дорожного движения Флориды считают коммерческой машину, которая используется в бизнесе и имеет полную разрешённую массу от 10,000 фунтов ([s. 316.003](' + S.s316003 + ')), и садиться за руль такой машины до 18 лет нельзя, за узким исключением для перевозки сельхозпродукции ([s. 316.302(4)](' + S.s316302 + ')). На водителей, которые работают только во Флориде и не возят опасные грузы, требующие знаков опасности, федеральный минимум в 21 год не распространяется ([s. 316.302(2)(a)](' + S.s316302 + '); [49 CFR 391.11(b)(1)](' + S.c39111 + ')).',
        ] },
        { type: 'p', text: 'Кроме того, во Флориде нарушением закона считается позволить водить вашу машину (или машину, которой вы распоряжаетесь) человеку без действующих прав. Если вы сознательно дали машину водителю с приостановленными правами и он попал в аварию, где кто-то пострадал или погиб, ваши собственные права приостанавливают на год ([s. 322.36](' + S.s32236 + ')).' },
        { type: 'p', text: 'Есть и финансовая сторона. Флорида ограничивает сумму, которую владелец, одолживший машину, может быть должен за аварию другого водителя, но эти ограничения **не действуют** для владельца машин, которые используются в обычной коммерческой деятельности его бизнеса ([s. 324.021(9)(c)1](' + S.s324021 + ')). Подробнее — в статье о том, [что будет, если одолжить машину во Флориде](/ru/blog/lending-your-car-florida-owner-liability). Для бизнеса то, кто сидит за рулём, — большая часть риска, поэтому в списке должны быть все постоянные водители, включая родственников, которые иногда ездят на рабочем грузовике.' },

        { type: 'h2', text: 'Правила Флориды, которые приходят вместе со вторым грузовиком' },
        { type: 'ul', items: [
          '**Федеральные правила безопасности действуют и внутри Флориды.** Грузовики легче 26,001 фунта, которые работают только во Флориде и не возят опасные грузы со знаками опасности, всё равно должны соблюдать ряд федеральных правил о вождении, деталях и оборудовании, осмотре и обслуживании ([s. 316.302(2)(f)](' + S.s316302 + ')). Когда нужен номер USDOT — в нашей [статье о USDOT для рабочих грузовиков](/ru/blog/usdot-number-florida-work-trucks).',
          '**Подтверждение страховки в каждой кабине.** У водителя всегда должно быть подтверждение обязательной страховки — на бумаге или в электронном виде ([s. 316.646](' + S.s316646 + ')). Положите новую карточку в новую машину. Подробнее — в статье об [электронном подтверждении страховки](/ru/blog/electronic-proof-of-insurance-florida).',
        ] },

        { type: 'h2', text: 'Если водитель уволился или грузовик продан' },
        { type: 'p', text: 'Сообщайте об исключениях так же быстро, как о добавлениях. Скажите агенту, когда водитель перестал у вас работать, чтобы список оставался точным, а при продаже грузовика сначала решите вопрос с номером, как описано выше. В конце года пригодится наш [чек-лист продления коммерческой автостраховки](/ru/blog/commercial-auto-renewal-checklist-florida): в нём разобраны полные списки машин и водителей.' },
        { type: 'p', text: 'Выбор покрытия для растущего автопарка — лимиты ответственности выше законного минимума, страхование собственного ущерба для грузовика в кредите, покрытие на случай аварии с незастрахованным водителем, арендованные машины и личные машины сотрудников (hired and non-owned) — зависит от полиса, машин и бизнеса. Лицензированный агент разберёт это с вами. Подробнее: [страхование рабочих грузовиков во Флориде](/ru/work-truck-insurance-florida) и [коммерческое автострахование](/ru/insurance/commercial-auto). Мы говорим по-русски: [русскоязычный страховой агент в Майами](/ru/russian-speaking-insurance-agent-miami).' },
        { type: 'callout', title: 'Добавляете грузовик или водителя?', text: 'Пришлите VIN, вес машины и данные водителя через [форму расчёта](/ru/quote) или позвоните по номеру [(305) 859-3953](' + TEL + '). Наш офис: 33550 S Dixie Hwy, Suite 102, Florida City (понедельник–пятница 9–6, суббота по записи); мы работаем на русском, английском и испанском. Покрытие зависит от выбранного полиса. Это общая информация, а не юридическая консультация.' },
      ],
      faq: [
        { q: 'Застрахован ли грузовик, который я только что купил, до звонка агенту?', a: 'Это зависит от формулировок вашего полиса. В одних полисах новые машины учитываются иначе, чем уже внесённые в список, и детали различаются. Позвоните до первого рейса и держите под рукой VIN. К тому же без подтверждения страховки на эту машину её не зарегистрируют во Флориде.' },
        { q: 'Может ли 19-летний сотрудник водить наш рабочий грузовик?', a: 'Закон Флориды задаёт только нижнюю планку. До 18 лет водить коммерческую машину нельзя, для грузовика категории CDL нужны флоридские права CDL, а владельцам CDL моложе 21 года разрешено ездить только в пределах Флориды. У страховых компаний могут быть и свои требования, поэтому внесите водителя в полис через агента до того, как он сядет за руль.' },
        { q: 'Нужно ли вносить в полис человека, который ездит на грузовике лишь изредка?', a: 'Сообщите агенту обо всех, кто водит машины компании, даже изредка, и спросите, как ваш полис относится к водителям, которых нет в списке.' },
      ],
      sources: [
        { label: 'FLHSMV: требования к страховке во Флориде', url: S.ins },
        { label: 'FLHSMV: номерные знаки и регистрация (временные номера, сдача номеров)', url: S.plates },
        { label: 'Статуты Флориды, s. 320.02 (2026): регистрация; подтверждение страховки', url: S.s32002 },
        { label: 'Статуты Флориды, s. 319.23 (2026): заявление на титул в течение 30 дней', url: S.s31923 },
        { label: 'Статуты Флориды, s. 320.0609 (2026): перенос номерных знаков', url: S.s3200609 },
        { label: 'Статуты Флориды, s. 627.733 (2026): обязательное страхование', url: S.s627733 },
        { label: 'Статуты Флориды, s. 627.7415 (2026): коммерческие машины; минимальная ответственность', url: S.s6277415 },
        { label: 'Статуты Флориды, s. 322.01 и s. 322.03 (2026): коммерческая машина; обязательные права CDL', url: S.s32203 },
        { label: 'FLHSMV: водители коммерческих машин (возраст для CDL)', url: S.cdl },
        { label: 'Статуты Флориды, s. 316.003 и s. 316.302 (2026): правила для коммерческих машин', url: S.s316302 },
        { label: '49 CFR 391.11 (редакция на 31 декабря 2023 г.): требования к водителям', url: S.c39111 },
        { label: 'Статуты Флориды, s. 322.36 (2026): допуск к управлению лица без права', url: S.s32236 },
        { label: 'Статуты Флориды, s. 324.021 (2026): пределы ответственности владельца', url: S.s324021 },
        { label: 'FLHSMV: Driver License Check и вопросы об истории вождения', url: S.records },
        { label: 'Статуты Флориды, s. 316.646 (2026): подтверждение страховки', url: S.s316646 },
      ],
    },
  },
};
