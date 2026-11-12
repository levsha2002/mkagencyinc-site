import type { BlogPost } from '../types';

// New article 2026-11-12 (content plan row 2026-11-12). Facts checked 2026-11-12 (ET) against
// official sources (raw copies in /workspace/cautorenew/):
// - s. 320.055(5) (2026): nonapportioned registration under s. 320.08(4)(c)-(n) (heavy trucks with a
//   gross vehicle weight of 8,000 lb or more) runs Dec 1 - Nov 30; renewal period = 31 days from Dec 1.
//   s. 320.055(1)(a): natural-person owners of 5,001-7,999 lb trucks (320.08(4)(a)-(b)) renew by birth month.
// - FLHSMV procedure RS-02 (rev. 07/01/2021): heavy trucks over 7,999 lb: Dec 1 - Nov 30, renewal period
//   31 days from Dec 1, expiration date Dec 31; 5,001-7,999 lb: owner's birthday.
// - s. 320.02(7) (2026) + FLHSMV Motor Vehicle Registrations page: 55,000 lb or more -> proof of filing or
//   payment of the federal heavy vehicle use tax (IRS Form 2290, Schedule 1) before registration.
// - FLHSMV Florida Insurance Requirements: PIP + PDL before registering a vehicle with 4+ wheels;
//   continuous coverage even if not driven; surrender the plate before canceling the insurance;
//   suspension of license and plate for lapses.
// - s. 627.7415 (2026): commercial motor vehicles, combined BI/PD minimums by gross vehicle weight:
//   $50,000 (26,000 to <35,000 lb), $100,000 (35,000 to <44,000 lb), $300,000 (44,000 lb+).
//   Subsection (4) (federal part 387 levels) is not used: it concerns carriers outside this article's scope.
// - s. 324.021(1) motor vehicle includes trailers; (9)(c)1 the (9)(b)2-3 caps do not apply to an owner of
//   motor vehicles used for commercial activity in the owner's ordinary course of business.
// - s. 322.01(8)(a) CMV for licensing = GVWR 26,001 lb or more; s. 322.03(4)(b) a Florida resident who must
//   hold a CDL may not operate a CMV without a valid Florida CDL.
// - FLHSMV Driver License Check (status by license number) and "Questions About Driving Records"
//   (own 3-year / 7-year record via the MyDMV Portal).
// - s. 316.646(1) proof of required security in the driver's possession, paper or electronic.
// - s. 316.302(2)(f): under 26,001 lb GVW/GVWR/GCWR, solely intrastate, no placarded hazmat -> exempt
//   from (1) but must comply with 49 CFR 382, 392, 393, 396.3(a)(1), 396.9.
// - 49 CFR 396.3(a)(1) (same text on 2023-12-31): parts and accessories in safe and proper operating
//   condition at all times.
// Scope (site rule): the agency places commercial auto only for vehicles operating within Florida.
const S = {
  s320055: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0320/Sections/0320.055.html',
  s32002: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0320/Sections/0320.02.html',
  s6277415: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.7415.html',
  s324021: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0324/Sections/0324.021.html',
  s32201: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0322/Sections/0322.01.html',
  s32203: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0322/Sections/0322.03.html',
  s316646: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.646.html',
  s316302: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.302.html',
  rs02: 'https://www.flhsmv.gov/pdf/proc/rs/rs-02_registration_renewals.pdf',
  reg: 'https://www.flhsmv.gov/motor-vehicles-tags-titles/license-plates-registration/motor-vehicle-registrations/',
  ins: 'https://www.flhsmv.gov/insurance/',
  dlCheck: 'https://services.flhsmv.gov/DLCheck/',
  records: 'https://www.flhsmv.gov/driver-licenses-id-cards/general-information/questions-about-driving-records/',
  c3963: 'https://www.ecfr.gov/current/title-49/section-396.3',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'commercial-auto-renewal-checklist-florida',
  datePublished: '2026-11-12',
  translations: {
    en: {
      title: 'Year-End Commercial Auto Renewal Checklist for Florida Work Trucks (In-State)',
      metaTitle: 'Commercial Auto Renewal Checklist: Florida Trucks | M&K Agency',
      description: 'A year-end checklist for work trucks that stay in Florida: December tag renewals, weight-based liability minimums, driver and vehicle lists, and the paperwork.',
      ogAlt: 'Illustration of a box truck and a pickup with a trailer beside a clipboard checklist, a December calendar page and palm trees',
      excerpt: 'Heavy-truck tags come due in December and many commercial auto policies renew around the new year. What to update and gather for trucks that work only within Florida.',
      category: 'Commercial auto insurance',
      body: [
        { type: 'p', text: 'December is a busy month for Florida businesses that run trucks. Heavy-truck tags come due, many commercial auto policies renew around the new year, and it is a good time to clean up the vehicle and driver lists before the next busy season. This checklist is for pickups, vans, box trucks and trailers that work **only within Florida**. M&K Agency places commercial auto for vehicles that operate within Florida; trucks that cross state lines fall under separate federal rules that this guide does not cover.' },

        { type: 'h2', text: '1. Put the December tag deadline on the calendar' },
        { type: 'p', text: 'Florida sets registration periods by vehicle type and weight. For trucks with a gross vehicle weight of 8,000 pounds or more that are registered only in Florida, the registration period runs from December 1 to November 30, and the renewal window is the 31 days that begin on December 1 ([s. 320.055(5)](' + S.s320055 + ')). FLHSMV’s registration procedure says it plainly: those registrations expire on **December 31** ([FLHSMV RS-02](' + S.rs02 + ')). Lighter trucks follow other schedules. A 5,001–7,999-pound truck owned by a person, for example, renews on the owner’s birthday. Check the expiration date on each registration certificate.' },
        { type: 'ul', items: [
          '**Insurance comes first.** A vehicle with at least four wheels needs personal injury protection (PIP) and property damage liability before it can be registered, and that coverage has to stay in force for the whole registration period, even when the truck is parked ([FLHSMV](' + S.ins + ')).',
          '**Very heavy trucks.** For a vehicle of 55,000 pounds or more, the owner must show proof of filing or paying the federal heavy vehicle use tax (IRS Form 2290, Schedule 1) when registering ([s. 320.02(7)](' + S.s32002 + '); [FLHSMV](' + S.reg + ')).',
          '**Sold a truck or parked it for good?** FLHSMV says to turn in the plate **before** you cancel the insurance on it. Canceling first can lead to a suspended driver license and plate ([FLHSMV](' + S.ins + ')).',
        ] },

        { type: 'h2', text: '2. Update the vehicle list' },
        { type: 'p', text: 'Renewal is the moment to make the policy match the trucks you actually run. For each vehicle, have ready:' },
        { type: 'ul', items: [
          'year, make, model and VIN;',
          'the gross vehicle weight rating, plus the rating of any trailer it pulls;',
          'who holds the title (you or the business) and any lender or lessor;',
          'the address where it is parked overnight;',
          'equipment added this year: racks, a liftgate, toolboxes, a wrap or permanently mounted gear.',
        ] },
        { type: 'p', text: 'Weight matters for more than the tag. Under [s. 627.7415](' + S.s6277415 + '), commercial motor vehicles must carry minimum combined bodily injury and property damage liability of **$50,000** per occurrence from 26,000 to under 35,000 pounds gross vehicle weight, **$100,000** from 35,000 to under 44,000 pounds, and **$300,000** at 44,000 pounds or more. Those are legal floors; customers and contracts often ask for higher limits. Florida’s financial responsibility law also counts trailers as motor vehicles ([s. 324.021(1)](' + S.s324021 + ')), so list every trailer too.' },

        { type: 'h2', text: '3. Update the driver list' },
        { type: 'p', text: 'Write down everyone who drives a company vehicle, even once in a while: full name, date of birth and driver license number. Then:' },
        { type: 'ul', items: [
          '**Check each license.** FLHSMV’s online [Driver License Check](' + S.dlCheck + ') shows the status of a Florida license by its number, and drivers can buy their own 3-year or 7-year driving record through the MyDMV Portal ([FLHSMV](' + S.records + ')).',
          '**Match the license to the truck.** For licensing, a vehicle with a gross vehicle weight rating of 26,001 pounds or more is a commercial motor vehicle in Florida ([s. 322.01(8)](' + S.s32201 + ')), and a Florida resident needs a valid Florida commercial driver license to drive one ([s. 322.03(4)(b)](' + S.s32203 + ')).',
          '**Report changes.** Tell your agent about new hires, drivers who left, and family members who drive the work trucks.',
        ] },
        { type: 'p', text: 'Why this matters: Florida caps what a person who lends a vehicle can owe for the borrower’s crash, but those caps **do not apply** to an owner of vehicles used for commercial activity in the ordinary course of business ([s. 324.021(9)(c)1](' + S.s324021 + ')). For a business, who drives your trucks is a big part of your risk. Our guide to [lending your car in Florida](/en/blog/lending-your-car-florida-owner-liability) explains the owner-liability rules.' },

        { type: 'h2', text: '4. Describe how each truck really works' },
        { type: 'p', text: 'A policy is written around how the vehicles are used, so be specific:' },
        { type: 'ul', items: [
          'what the business does and what each truck carries;',
          'the area you work in, such as Florida City, Homestead and Kendall, or deliveries around South Florida;',
          'whether trucks pull trailers, and how often;',
          'whether employees use their own cars for work errands, or you rent trucks in busy weeks;',
          'changes planned for next year: a new service area, a bigger truck, a new kind of job.',
        ] },
        { type: 'p', text: 'If a trip would ever take a truck outside Florida, tell us before it happens. The coverage we place is for vehicles that operate within Florida.' },

        { type: 'h2', text: '5. Gather the paperwork' },
        { type: 'ul', items: [
          '**Proof of insurance in every truck.** Florida requires the driver to have proof of the required coverage at all times, on paper or electronically ([s. 316.646](' + S.s316646 + ')). Put the new cards in the trucks as soon as the policy renews.',
          '**Your USDOT number, if you have one.** Many trucks that stay in Florida still need one; our [USDOT guide for Florida work trucks](/en/blog/usdot-number-florida-work-trucks) explains when, and how to keep the registration current.',
          '**Maintenance records.** Even trucks under 26,001 pounds that work only in Florida must follow certain federal rules on driving, parts and accessories, and inspection and maintenance ([s. 316.302(2)(f)](' + S.s316302 + ')). One of them requires parts and accessories to be in safe and proper operating condition at all times ([49 CFR 396.3](' + S.c3963 + ')). Repair records help you show that.',
          '**Claims and incidents from the year,** including small ones you paid out of pocket.',
          '**Certificates of insurance** that customers and general contractors will ask for in January. See our guide to [certificates of insurance](/en/blog/certificate-of-insurance-contractors-florida).',
        ] },

        { type: 'h2', text: '6. Questions to ask at renewal' },
        { type: 'ul', items: [
          'Do my liability limits meet the s. 627.7415 floor for each truck’s weight, and what my contracts require?',
          'Do older trucks still need collision and comprehensive, and which deductibles make sense?',
          'Is uninsured/underinsured motorist coverage on the policy?',
          'Do I need hired and non-owned auto coverage for rented trucks or employees’ own cars?',
          'Are the tools and equipment in the trucks covered by a separate policy, such as inland marine?',
        ] },
        { type: 'p', text: 'The answers depend on the policy, the vehicles and the business, and a licensed agent can go through them with you. More on coverage options: [work truck insurance in Florida](/en/work-truck-insurance-florida) and [commercial auto insurance](/en/insurance/commercial-auto).' },
        { type: 'callout', title: 'Renewing a work truck policy?', text: 'Send us your vehicle and driver lists through the [quote form](/en/quote) or call [(305) 859-3953](' + TEL + '). Our office is at 33550 S Dixie Hwy, Suite 102, Florida City (Monday–Friday 9–6, Saturday by appointment), and we work in English, Spanish and Russian. Coverage depends on the policy you choose. This is general information, not legal advice.' },
      ],
      faq: [
        { q: 'When do Florida heavy-truck registrations expire?', a: 'For trucks of 8,000 pounds or more registered only in Florida, the registration period ends November 30 and the renewal window runs 31 days from December 1, so the expiration date is December 31. Lighter trucks follow other schedules, so check each registration certificate.' },
        { q: 'Do the higher liability minimums apply to my pickup?', a: 'The weight-based minimums in s. 627.7415 start at 26,000 pounds gross vehicle weight. Most pickups and vans are lighter and fall under Florida’s general PIP and property damage liability requirement, although customers and contracts may still ask for higher limits.' },
        { q: 'Can I cancel insurance on a truck I won’t use this winter?', a: 'Florida requires continuous coverage on a registered vehicle even when it is not driven. If you take a truck out of service, FLHSMV says to turn in the plate before canceling the insurance. Ask your agent about the options first.' },
        { q: 'Do you insure trucks that travel to other states?', a: 'No. We place commercial auto coverage for vehicles that operate within Florida only.' },
      ],
      sources: [
        { label: 'Florida Statutes, s. 320.055 (2026): registration periods; renewal periods', url: S.s320055 },
        { label: 'FLHSMV procedure RS-02: registration (renewal) periods (PDF)', url: S.rs02 },
        { label: 'Florida Statutes, s. 320.02 (2026): registration required; heavy vehicle use tax proof', url: S.s32002 },
        { label: 'FLHSMV: motor vehicle registrations (heavy trucks and HVUT)', url: S.reg },
        { label: 'FLHSMV: Florida insurance requirements', url: S.ins },
        { label: 'Florida Statutes, s. 627.7415 (2026): commercial motor vehicles; additional liability insurance', url: S.s6277415 },
        { label: 'Florida Statutes, s. 324.021 (2026): definitions; owner liability limits', url: S.s324021 },
        { label: 'Florida Statutes, s. 322.01 (2026): definitions (commercial motor vehicle)', url: S.s32201 },
        { label: 'Florida Statutes, s. 322.03 (2026): drivers must be licensed', url: S.s32203 },
        { label: 'FLHSMV: Driver License Check', url: S.dlCheck },
        { label: 'FLHSMV: questions about driving records', url: S.records },
        { label: 'Florida Statutes, s. 316.646 (2026): proof of security', url: S.s316646 },
        { label: 'Florida Statutes, s. 316.302 (2026): commercial motor vehicles; safety regulations', url: S.s316302 },
        { label: '49 CFR 396.3: inspection, repair and maintenance (eCFR)', url: S.c3963 },
      ],
    },
    es: {
      title: 'Renovación del seguro de auto comercial a fin de año: lista para camiones de trabajo en Florida (dentro del estado)',
      metaTitle: 'Renovar el auto comercial de su camión en Florida | M&K Agency',
      description: 'Lista de fin de año para camiones que trabajan solo en Florida: placas de camiones pesados en diciembre, mínimos de responsabilidad por peso, choferes y papeles.',
      ogAlt: 'Ilustración de un camión de caja y una pickup con tráiler junto a una lista de verificación, una hoja de calendario de diciembre y palmeras',
      excerpt: 'Las placas de los camiones pesados vencen en diciembre y muchas pólizas de auto comercial se renuevan con el año nuevo. Qué actualizar y qué reunir si sus camiones trabajan solo dentro de Florida.',
      category: 'Seguro de auto comercial',
      body: [
        { type: 'p', text: 'En diciembre vencen las placas de los camiones pesados, muchas pólizas de auto comercial se renuevan con el año nuevo y conviene poner en orden la lista de vehículos y choferes. Esta lista es para pickups, vans, camiones de caja y tráileres que trabajan **solo dentro de Florida**. M&K Agency coloca seguros de auto comercial para vehículos que operan dentro de Florida; los camiones que cruzan a otros estados se rigen por reglas federales distintas que esta guía no cubre.' },

        { type: 'h2', text: '1. Anote en el calendario el vencimiento de diciembre' },
        { type: 'p', text: 'Florida fija los periodos de registro según el tipo y el peso del vehículo. Para los camiones con un peso bruto de 8,000 libras o más registrados solo en Florida, el periodo va del 1 de diciembre al 30 de noviembre, y el plazo para renovar son los 31 días que empiezan el 1 de diciembre ([sección 320.055(5)](' + S.s320055 + ')). Según el procedimiento de FLHSMV, esos registros vencen el **31 de diciembre** ([FLHSMV RS-02](' + S.rs02 + ')). Los camiones más livianos siguen otros calendarios (uno de 5,001 a 7,999 libras a nombre de una persona se renueva en el cumpleaños del dueño); revise cada certificado de registro.' },
        { type: 'ul', items: [
          '**Primero el seguro.** Un vehículo de cuatro ruedas o más necesita protección contra lesiones personales (PIP) y responsabilidad por daños a la propiedad (PDL) antes de registrarse, y esa cobertura debe mantenerse durante todo el periodo de registro, aunque el camión esté parado ([FLHSMV](' + S.ins + ')).',
          '**Camiones muy pesados.** Para un vehículo de 55,000 libras o más, el dueño debe mostrar al registrarlo que presentó o pagó el impuesto federal de uso de vehículos pesados (formulario 2290 del IRS, Anexo 1) ([sección 320.02(7)](' + S.s32002 + '); [FLHSMV](' + S.reg + ')).',
          '**¿Vendió un camión o lo sacó de servicio?** FLHSMV indica entregar la placa **antes** de cancelar el seguro. Si cancela primero, le pueden suspender la licencia y la placa ([FLHSMV](' + S.ins + ')).',
        ] },

        { type: 'h2', text: '2. Actualice la lista de vehículos' },
        { type: 'p', text: 'Para cada vehículo tenga a mano:' },
        { type: 'ul', items: [
          'año, marca, modelo y VIN;',
          'el peso bruto nominal (GVWR) y el de cualquier tráiler que jale;',
          'a nombre de quién está el título (usted o la empresa) y si hay banco o arrendador;',
          'la dirección donde se guarda de noche;',
          'el equipo que agregó este año: racks, plataforma elevadora, cajas de herramientas, rotulado o equipo fijo.',
        ] },
        { type: 'p', text: 'El peso no solo cuenta para la placa. Según la [sección 627.7415](' + S.s6277415 + '), los vehículos motorizados comerciales deben llevar una responsabilidad civil mínima combinada por lesiones y daños a la propiedad de **$50,000** por evento entre 26,000 y menos de 35,000 libras de peso bruto, **$100,000** entre 35,000 y menos de 44,000 libras, y **$300,000** a partir de 44,000 libras. Son pisos legales; los contratos a menudo piden más. La ley de responsabilidad financiera también cuenta los tráileres como vehículos motorizados ([sección 324.021(1)](' + S.s324021 + ')), así que anote también cada tráiler.' },

        { type: 'h2', text: '3. Actualice la lista de choferes' },
        { type: 'p', text: 'Apunte a todas las personas que manejan un vehículo de la empresa, aunque sea de vez en cuando: nombre completo, fecha de nacimiento y número de licencia. Después:' },
        { type: 'ul', items: [
          '**Revise cada licencia.** La herramienta en línea [Driver License Check](' + S.dlCheck + ') de FLHSMV muestra el estado de una licencia de Florida con su número, y cada chofer puede comprar su propio historial de manejo de 3 o 7 años en el portal MyDMV ([FLHSMV](' + S.records + ')).',
          '**Que la licencia corresponda al camión.** Para efectos de licencia, en Florida un vehículo con peso bruto nominal de 26,001 libras o más es un vehículo motorizado comercial ([sección 322.01(8)](' + S.s32201 + ')), y un residente de Florida necesita una licencia comercial (CDL) de Florida vigente para manejarlo ([sección 322.03(4)(b)](' + S.s32203 + ')).',
          '**Avise de los cambios:** choferes nuevos, los que se fueron y familiares que manejan los camiones.',
        ] },
        { type: 'p', text: 'Por qué importa: Florida pone un tope a lo que debe pagar una persona que presta su vehículo si quien lo maneja causa un choque, pero ese tope **no aplica** al dueño de vehículos que se usan en una actividad comercial dentro del curso normal de su negocio ([sección 324.021(9)(c)1](' + S.s324021 + ')). Nuestra guía sobre [prestar el carro en Florida](/es/blog/lending-your-car-florida-owner-liability) explica la responsabilidad del dueño.' },

        { type: 'h2', text: '4. Explique cómo trabaja cada camión' },
        { type: 'p', text: 'La póliza se arma según el uso real de los vehículos, así que sea concreto:' },
        { type: 'ul', items: [
          'a qué se dedica el negocio y qué lleva cada camión;',
          'la zona donde trabaja, por ejemplo Florida City, Homestead y Kendall, o entregas por el sur de Florida;',
          'si los camiones jalan tráileres y con qué frecuencia;',
          'si los empleados usan su carro para mandados del trabajo o si renta camiones en semanas de mucho trabajo;',
          'cambios previstos para el próximo año: otra zona, un camión más grande, otro tipo de trabajo.',
        ] },
        { type: 'p', text: 'Si algún viaje fuera a sacar un camión de Florida, díganoslo antes. Los seguros que colocamos son para vehículos que operan dentro de Florida.' },

        { type: 'h2', text: '5. Reúna los papeles' },
        { type: 'ul', items: [
          '**Comprobante de seguro en cada camión.** En Florida, el chofer debe llevar siempre el comprobante de la cobertura obligatoria, en papel o en formato electrónico ([sección 316.646](' + S.s316646 + ')).',
          '**Su número USDOT, si lo tiene.** Muchos camiones que no salen de Florida igual lo necesitan; nuestra [guía del número USDOT para camiones de trabajo](/es/blog/usdot-number-florida-work-trucks) explica cuándo y cómo mantener el registro al día.',
          '**Registros de mantenimiento.** Incluso los camiones de menos de 26,001 libras que trabajan solo en Florida deben cumplir ciertas normas federales sobre manejo, piezas y accesorios, e inspección y mantenimiento ([sección 316.302(2)(f)](' + S.s316302 + ')). Una de ellas exige que las piezas y accesorios estén siempre en condiciones seguras de funcionamiento ([49 CFR 396.3](' + S.c3963 + ')).',
          '**Reclamos e incidentes del año,** incluso los pequeños que pagó de su bolsillo.',
          '**Certificados de seguro** que le pedirán en enero; vea nuestra guía sobre [certificados de seguro](/es/blog/certificate-of-insurance-contractors-florida).',
        ] },

        { type: 'h2', text: '6. Preguntas para la renovación' },
        { type: 'ul', items: [
          '¿Mis límites de responsabilidad cumplen el piso de la sección 627.7415 según el peso de cada camión, y lo que exigen mis contratos?',
          '¿Los camiones más viejos todavía necesitan choque (collision) y cobertura integral (comprehensive), y qué deducibles convienen?',
          '¿Tiene la póliza cobertura de motorista sin seguro o con seguro insuficiente?',
          '¿Necesito cobertura para vehículos rentados y vehículos que no son de la empresa (hired and non-owned) por camiones rentados o carros de empleados?',
          '¿Las herramientas y el equipo de los camiones están cubiertos en otra póliza, como inland marine?',
        ] },
        { type: 'p', text: 'Las respuestas dependen de la póliza, los vehículos y el negocio, y un agente con licencia puede revisarlas con usted. Más sobre coberturas: [seguro para camiones de trabajo en Florida](/es/work-truck-insurance-florida) y [seguro de auto comercial](/es/insurance/commercial-auto).' },
        { type: 'callout', title: '¿Le toca renovar el seguro de su camión de trabajo?', text: 'Mándenos la lista de vehículos y choferes con el [formulario de cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + '). Nuestra oficina está en 33550 S Dixie Hwy, Suite 102, Florida City (lunes a viernes de 9 a 6, sábados con cita), y lo atendemos en español, inglés o ruso. La cobertura depende de la póliza que elija. Esto es información general, no asesoría legal.' },
      ],
      faq: [
        { q: '¿Cuándo vence el registro de los camiones pesados en Florida?', a: 'Para camiones de 8,000 libras o más registrados solo en Florida, el 31 de diciembre; la renovación se abre el 1 de diciembre. Los más livianos tienen otros calendarios.' },
        { q: '¿Los mínimos de responsabilidad más altos aplican a mi pickup?', a: 'Los mínimos por peso de la sección 627.7415 empiezan en 26,000 libras de peso bruto. La mayoría de las pickups y vans pesan menos, aunque los contratos pueden pedir límites más altos.' },
        { q: '¿Puedo cancelar el seguro de un camión que no voy a usar este invierno?', a: 'Florida exige cobertura continua en un vehículo registrado aunque no se maneje. Si saca un camión de servicio, FLHSMV indica entregar la placa antes de cancelar el seguro.' },
        { q: '¿Aseguran camiones que viajan a otros estados?', a: 'No. Colocamos seguros de auto comercial solo para vehículos que operan dentro de Florida.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 320.055 (2026): periodos de registro y de renovación (en inglés)', url: S.s320055 },
        { label: 'FLHSMV, procedimiento RS-02: periodos de registro y renovación (PDF, en inglés)', url: S.rs02 },
        { label: 'Estatutos de Florida, sección 320.02 (2026): registro; comprobante del impuesto de vehículos pesados (en inglés)', url: S.s32002 },
        { label: 'FLHSMV: registro de vehículos (camiones pesados e impuesto HVUT) (en inglés)', url: S.reg },
        { label: 'FLHSMV: requisitos de seguro en Florida (en inglés)', url: S.ins },
        { label: 'Estatutos de Florida, sección 627.7415 (2026): vehículos comerciales; seguro de responsabilidad adicional (en inglés)', url: S.s6277415 },
        { label: 'Estatutos de Florida, sección 324.021 (2026): definiciones; límites de responsabilidad del dueño (en inglés)', url: S.s324021 },
        { label: 'Estatutos de Florida, sección 322.01 (2026): definiciones (vehículo motorizado comercial) (en inglés)', url: S.s32201 },
        { label: 'Estatutos de Florida, sección 322.03 (2026): obligación de tener licencia (en inglés)', url: S.s32203 },
        { label: 'FLHSMV: Driver License Check, estado de la licencia (en inglés)', url: S.dlCheck },
        { label: 'FLHSMV: preguntas sobre historiales de manejo (en inglés)', url: S.records },
        { label: 'Estatutos de Florida, sección 316.646 (2026): comprobante de seguro (en inglés)', url: S.s316646 },
        { label: 'Estatutos de Florida, sección 316.302 (2026): vehículos comerciales; normas de seguridad (en inglés)', url: S.s316302 },
        { label: '49 CFR 396.3: inspección, reparación y mantenimiento (eCFR, en inglés)', url: S.c3963 },
      ],
    },
    ru: {
      title: 'Продление коммерческой автостраховки в конце года: чек-лист для рабочих грузовиков во Флориде (внутри штата)',
      metaTitle: 'Продление страховки рабочего грузовика во Флориде | M&K Agency',
      description: 'Чек-лист на конец года для грузовиков, которые работают только во Флориде: декабрьская перерегистрация, минимумы ответственности по весу, водители и документы.',
      ogAlt: 'Иллюстрация: бокс-трак и пикап с прицепом рядом с чек-листом на планшете, листком календаря за декабрь и пальмами',
      excerpt: 'Регистрация тяжёлых грузовиков истекает в декабре, а многие коммерческие автополисы продлеваются к Новому году. Что обновить и какие документы собрать, если ваши машины работают только во Флориде.',
      category: 'Коммерческое автострахование',
      body: [
        { type: 'p', text: 'Для бизнеса во Флориде, у которого есть грузовики, декабрь — горячая пора. Истекает регистрация тяжёлых машин, многие коммерческие автополисы продлеваются к Новому году, и это удобный момент привести в порядок список машин и водителей перед следующим сезоном. Этот чек-лист — для пикапов, фургонов, бокс-траков и прицепов, которые работают **только в пределах Флориды**. M&K Agency оформляет коммерческое автострахование для машин, которые ездят только по Флориде; на грузовики, выезжающие в другие штаты, распространяются отдельные федеральные правила, и здесь мы их не разбираем.' },

        { type: 'h2', text: '1. Отметьте в календаре декабрьский срок' },
        { type: 'p', text: 'Во Флориде период регистрации зависит от типа и веса машины. У грузовиков с полной массой (gross vehicle weight) от 8,000 фунтов, зарегистрированных только во Флориде, период регистрации длится с 1 декабря по 30 ноября, а продлить её можно в течение 31 дня начиная с 1 декабря ([ст. 320.055(5)](' + S.s320055 + ')). В процедуре FLHSMV сказано прямо: срок такой регистрации истекает **31 декабря** ([FLHSMV RS-02](' + S.rs02 + ')). У более лёгких грузовиков свой график: например, грузовик весом 5,001–7,999 фунтов, оформленный на физическое лицо, перерегистрируют ко дню рождения владельца. Проверьте дату окончания в регистрационном свидетельстве каждой машины.' },
        { type: 'ul', items: [
          '**Сначала страховка.** Машину с четырьмя колёсами и более нельзя зарегистрировать без полиса PIP и страхования ответственности за ущерб имуществу (PDL), и эта страховка должна действовать весь период регистрации, даже если грузовик стоит ([FLHSMV](' + S.ins + ')).',
          '**Очень тяжёлые машины.** Для машины массой от 55,000 фунтов при регистрации нужно подтвердить подачу декларации или уплату федерального налога на тяжёлые транспортные средства (форма IRS 2290, Schedule 1) ([ст. 320.02(7)](' + S.s32002 + '); [FLHSMV](' + S.reg + ')).',
          '**Продали грузовик или поставили его на прикол?** FLHSMV советует сначала сдать номер и только **потом** отменять страховку. Если сделать наоборот, могут приостановить права и номер ([FLHSMV](' + S.ins + ')).',
        ] },

        { type: 'h2', text: '2. Обновите список машин' },
        { type: 'p', text: 'Продление — момент, когда полис должен совпасть с тем, на чём вы реально работаете. По каждой машине подготовьте:' },
        { type: 'ul', items: [
          'год, марку, модель и VIN;',
          'паспортную полную массу (GVWR), а также GVWR каждого прицепа, который она тянет;',
          'на кого оформлен титул (на вас или на компанию), есть ли банк или лизингодатель;',
          'адрес, где машина стоит ночью;',
          'оборудование, добавленное за год: багажники, гидроборт, ящики для инструмента, оклейку, стационарно закреплённое оборудование.',
        ] },
        { type: 'p', text: 'Вес важен не только для регистрации. По [ст. 627.7415](' + S.s6277415 + ') коммерческие машины должны иметь минимальное совокупное покрытие ответственности за вред здоровью и имуществу: **$50,000** на случай при полной массе от 26,000 до 35,000 фунтов, **$100,000** — от 35,000 до 44,000 фунтов и **$300,000** — от 44,000 фунтов. Это законный минимум; заказчики и договоры часто требуют лимиты выше. Кроме того, закон Флориды о финансовой ответственности относит прицепы к транспортным средствам ([ст. 324.021(1)](' + S.s324021 + ')), так что внесите в список и все прицепы.' },

        { type: 'h2', text: '3. Обновите список водителей' },
        { type: 'p', text: 'Запишите всех, кто садится за руль машин компании, даже изредка: полное имя, дату рождения и номер водительских прав. Затем:' },
        { type: 'ul', items: [
          '**Проверьте права.** Онлайн-сервис FLHSMV [Driver License Check](' + S.dlCheck + ') показывает статус флоридских прав по их номеру, а сам водитель может заказать свою историю вождения за 3 или 7 лет через портал MyDMV ([FLHSMV](' + S.records + ')).',
          '**Права должны соответствовать машине.** Для целей лицензирования во Флориде машина с GVWR от 26,001 фунта считается коммерческой ([ст. 322.01(8)](' + S.s32201 + ')), и жителю Флориды для управления ею нужны действующие коммерческие права (CDL), выданные во Флориде ([ст. 322.03(4)(b)](' + S.s32203 + ')).',
          '**Сообщайте об изменениях.** Говорите агенту о новых сотрудниках, об ушедших водителях и о родственниках, которые ездят на рабочих машинах.',
        ] },
        { type: 'p', text: 'Почему это важно: во Флориде есть потолок ответственности для человека, который одолжил машину, если водитель попал в аварию, но этот потолок **не действует** для владельца машин, используемых в коммерческой деятельности в обычном ходе бизнеса ([ст. 324.021(9)(c)1](' + S.s324021 + ')). Для компании то, кто водит её грузовики, — большая часть риска. Подробнее об ответственности владельца — в статье о том, [можно ли одолжить машину во Флориде](/ru/blog/lending-your-car-florida-owner-liability).' },

        { type: 'h2', text: '4. Опишите, как на самом деле работает каждая машина' },
        { type: 'p', text: 'Полис оформляется под реальное использование машин, поэтому будьте конкретны:' },
        { type: 'ul', items: [
          'чем занимается бизнес и что возит каждый грузовик;',
          'район работы: например, Florida City, Homestead и Kendall или доставки по Южной Флориде;',
          'тянут ли машины прицепы и как часто;',
          'ездят ли сотрудники по рабочим делам на своих машинах, берёте ли вы грузовики в аренду в загруженные недели;',
          'что меняется в следующем году: новый район, грузовик побольше, новый вид работ.',
        ] },
        { type: 'p', text: 'Если какая-то поездка может вывести грузовик за пределы Флориды, скажите нам об этом заранее. Мы оформляем страховку для машин, которые работают только внутри Флориды.' },

        { type: 'h2', text: '5. Соберите документы' },
        { type: 'ul', items: [
          '**Подтверждение страховки в каждой машине.** Во Флориде водитель обязан всегда иметь при себе подтверждение обязательной страховки — бумажное или электронное ([ст. 316.646](' + S.s316646 + ')). Положите новые карточки в машины сразу после продления полиса.',
          '**Номер USDOT, если он есть.** Многим грузовикам, которые не выезжают из Флориды, он всё равно нужен; в нашей [статье о номере USDOT для рабочих грузовиков](/ru/blog/usdot-number-florida-work-trucks) — когда он обязателен и как держать регистрацию актуальной.',
          '**Записи о техобслуживании.** Даже грузовики легче 26,001 фунта, работающие только во Флориде, должны соблюдать часть федеральных правил о вождении, деталях и оборудовании, осмотре и обслуживании ([ст. 316.302(2)(f)](' + S.s316302 + ')). Одно из них требует, чтобы детали и оборудование всегда были в безопасном и исправном состоянии ([49 CFR 396.3](' + S.c3963 + ')). Счета за ремонт помогают это подтвердить.',
          '**Страховые случаи и происшествия за год,** включая мелкие, которые вы оплатили сами.',
          '**Сертификаты страхования (COI),** которые заказчики и генподрядчики попросят в январе. См. нашу статью о [сертификатах страхования](/ru/blog/certificate-of-insurance-contractors-florida).',
        ] },

        { type: 'h2', text: '6. Что спросить при продлении' },
        { type: 'ul', items: [
          'Соответствуют ли мои лимиты ответственности минимуму ст. 627.7415 для веса каждой машины и требованиям моих договоров?',
          'Нужны ли старым машинам collision и comprehensive и какие франшизы разумны?',
          'Есть ли в полисе покрытие на случай аварии с незастрахованным или недострахованным водителем?',
          'Нужно ли покрытие hired and non-owned auto для арендованных грузовиков и личных машин сотрудников?',
          'Застрахованы ли инструменты и оборудование в машинах отдельным полисом, например inland marine?',
        ] },
        { type: 'p', text: 'Ответы зависят от полиса, машин и вашего бизнеса; лицензированный агент разберёт их вместе с вами. Подробнее о покрытии: [страхование рабочих грузовиков во Флориде](/ru/work-truck-insurance-florida) и [коммерческое автострахование](/ru/insurance/commercial-auto). Удобнее по-русски — вот [наш русскоязычный страховой агент в Майами](/ru/russian-speaking-insurance-agent-miami).' },
        { type: 'callout', title: 'Пора продлевать полис на рабочий грузовик?', text: 'Пришлите список машин и водителей через [форму расчёта](/ru/quote) или позвоните по номеру [(305) 859-3953](' + TEL + '). Наш офис: 33550 S Dixie Hwy, Suite 102, Florida City (пн–пт 9:00–18:00, суббота по записи). Говорим по-русски, по-английски и по-испански. Покрытие зависит от выбранного полиса. Это общая информация, а не юридическая консультация.' },
      ],
      faq: [
        { q: 'Когда истекает регистрация тяжёлых грузовиков во Флориде?', a: 'У грузовиков от 8,000 фунтов, зарегистрированных только во Флориде, период регистрации заканчивается 30 ноября, а продлить её можно в течение 31 дня с 1 декабря, то есть до 31 декабря. У более лёгких машин другой график — смотрите регистрационное свидетельство.' },
        { q: 'Касаются ли повышенные минимумы ответственности моего пикапа?', a: 'Минимумы по весу из ст. 627.7415 начинаются с полной массы 26,000 фунтов. Большинство пикапов и фургонов легче и подпадают под общее требование Флориды о PIP и PDL, хотя заказчики и договоры могут требовать более высоких лимитов.' },
        { q: 'Можно ли отменить страховку на грузовик, который зимой не будет работать?', a: 'Флорида требует непрерывной страховки на зарегистрированную машину, даже если на ней не ездят. Если выводите грузовик из работы, FLHSMV советует сначала сдать номер и только потом отменять страховку. Обсудите варианты с агентом заранее.' },
        { q: 'Вы страхуете грузовики, которые ездят в другие штаты?', a: 'Нет. Мы оформляем коммерческое автострахование только для машин, которые работают в пределах Флориды.' },
      ],
      sources: [
        { label: 'Florida Statutes, ст. 320.055 (2026): периоды регистрации и продления (англ.)', url: S.s320055 },
        { label: 'FLHSMV, процедура RS-02: периоды регистрации (PDF, англ.)', url: S.rs02 },
        { label: 'Florida Statutes, ст. 320.02 (2026): регистрация; подтверждение налога на тяжёлые машины (англ.)', url: S.s32002 },
        { label: 'FLHSMV: регистрация транспортных средств (тяжёлые грузовики и HVUT) (англ.)', url: S.reg },
        { label: 'FLHSMV: требования к страхованию во Флориде (англ.)', url: S.ins },
        { label: 'Florida Statutes, ст. 627.7415 (2026): коммерческие машины; дополнительное страхование ответственности (англ.)', url: S.s6277415 },
        { label: 'Florida Statutes, ст. 324.021 (2026): определения; пределы ответственности владельца (англ.)', url: S.s324021 },
        { label: 'Florida Statutes, ст. 322.01 (2026): определения (коммерческое транспортное средство) (англ.)', url: S.s32201 },
        { label: 'Florida Statutes, ст. 322.03 (2026): обязательность водительских прав (англ.)', url: S.s32203 },
        { label: 'FLHSMV: Driver License Check — статус прав (англ.)', url: S.dlCheck },
        { label: 'FLHSMV: вопросы об истории вождения (англ.)', url: S.records },
        { label: 'Florida Statutes, ст. 316.646 (2026): подтверждение страховки (англ.)', url: S.s316646 },
        { label: 'Florida Statutes, ст. 316.302 (2026): коммерческие машины; правила безопасности (англ.)', url: S.s316302 },
        { label: '49 CFR 396.3: осмотр, ремонт и обслуживание (eCFR, англ.)', url: S.c3963 },
      ],
    },
  },
};
