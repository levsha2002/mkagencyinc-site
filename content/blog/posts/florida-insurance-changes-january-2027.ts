import type { BlogPost } from '../types';

// Facts checked 2026-11-11 (ET) against official sources (raw excerpts in /workspace/jan2027/):
// - 2026 F.S. 627.351(6)(aa) (Online Sunshine): Citizens flood requirement; 1.d. policies effective on or
//   after Jan 1, 2027 for all other personal lines residential property; 3. exempt: no wind coverage,
//   condo unit owners form; minimum = NFIP dwelling coverage or s. 627.715 standard.
// - Citizens /flood page: phases, tenant contents also exempt, CIT FW01 + proof options, Coverage A rule,
//   NFIP max $250,000 Regular / $35,000 Emergency.
// - FloodSmart (NFIP): 30-day wait with exceptions; FEMA: NFIP authorized through Dec. 11, 2026 (signed Sept. 2, 2026).
// - IBHS FORTIFIED Technical Bulletin FH 2026-03 (first release Sept. 29, 2026): 15-year eligibility limit for
//   asphalt-shingle FORTIFIED homes; applies to applications submitted on or after Jan 1, 2027.
// - 2026 F.S. 627.7011(5)(b)-(c): roof age rules (unchanged).
// - 2026 F.S. 627.3518(2)(b)1-2: Citizens commercial lines clearinghouses on or before Jan 1, 2027;
//   627.351(6)(oo). Status: OIR letter of Sept. 15, 2026 reported by Insurance Journal (Sept. 24, 2026).
// - 2026 F.S. 320.021 (ch. 2026-147): blue envelope / blue card, requests from Jan 1, 2027.
// - Florida Senate: SB 522 (2026, PIP repeal) and SB 1024 (2026, Citizens flood) died March 13, 2026.
// - Legislature 2026 chapter-law citator: acts effective Jan 1, 2027 = elections, local government,
//   electronic payments to local governments, virtual currency kiosks (none on auto/home/business insurance).
// No carrier names, no premium or marketing claims.
const S = {
  s627351: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.351.html',
  s6273518: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.3518.html',
  s6277011: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.7011.html',
  s320021: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0320/Sections/0320.021.html',
  citFlood: 'https://www.citizensfla.com/flood',
  citCommercial: 'https://www.citizensfla.com/-/content-commercial-policies/contactus',
  floodsmart: 'https://www.floodsmart.gov/whats-covered',
  femaReauth: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  ibhs: 'https://fortifiedhome.org/wp-content/uploads/FH-2026-03-Redesignation-Eligibility-1.pdf',
  ijClearinghouse: 'https://www.insurancejournal.com/news/southeast/2026/09/24/886645.htm',
  sb522: 'https://www.flsenate.gov/Session/Bill/2026/522',
  sb1024: 'https://www.flsenate.gov/Session/Bill/2026/1024',
  citator: 'https://www.leg.state.fl.us/data/session/2026/citator/Daily/chapter.pdf',
  flhsmvIns: 'https://www.flhsmv.gov/insurance/',
};

export const post: BlogPost = {
  slug: 'florida-insurance-changes-january-2027',
  datePublished: '2026-11-11',
  translations: {
    en: {
      title: 'Florida Insurance Changes Taking Effect Jan. 1, 2027: What’s Confirmed and What Isn’t',
      metaTitle: 'Florida Insurance Changes on Jan. 1, 2027 | M&K Agency',
      description: 'Jan. 1, 2027 changes with an official date: the last Citizens flood phase, FORTIFIED shingle roofs, Citizens commercial clearinghouses and a new driver card.',
      ogAlt: 'Illustration of a Florida house with a wall calendar showing a highlighted first day, a flood-water line, a roof shield, an envelope and palm trees',
      excerpt: 'Only the changes with an official January 1, 2027 date, checked against the statutes, Citizens and FEMA, plus the rumored changes that did not happen.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'Every December, clients ask us: “What changes on January 1?” Online lists mix real changes with bills that never passed. This guide includes **only items with an official January 1, 2027 date** that we could confirm in Florida law, at Citizens, with FEMA or in the program’s own rules. We checked them on November 11, 2026.' },
        { type: 'ul', items: [
          '**Citizens homeowners:** the last step of the flood insurance requirement.',
          '**FORTIFIED homes with shingle roofs:** a new 15-year limit on keeping the designation.',
          '**Citizens commercial policies:** new clearinghouses the law says must be running by January 1.',
          '**Drivers:** the state’s new blue envelope and blue card become available.',
        ] },

        { type: 'h2', text: '1. Citizens: flood insurance for every homeowners policy with wind coverage' },
        { type: 'p', text: 'This is the change that affects the most people in South Miami-Dade. Florida law has phased in a flood insurance requirement for Citizens Property Insurance Corporation policyholders since 2023. The final step covers **all other personal residential policies effective on or after January 1, 2027**, whatever the home is worth and whatever its flood zone ([s. 627.351(6)(aa), F.S.](' + S.s627351 + ')).' },
        { type: 'ul', items: [
          '**Who is exempt:** policies that don’t cover wind, condo unit-owner policies and, per Citizens, tenant contents policies ([Citizens](' + S.citFlood + ')).',
          '**How much:** flood building coverage at least equal to your Citizens dwelling limit (Coverage A). If the National Flood Insurance Program (NFIP) can’t offer that much, Citizens accepts the most you qualify for: $250,000 in the NFIP Regular Program or $35,000 in the Emergency Program.',
          '**Proof:** a signed Policyholder Affirmation Regarding Flood Insurance (CIT FW01) plus the flood declarations page, or the flood application and proof of payment while it is pending.',
          '**Where:** an NFIP policy or a private flood policy that meets Florida’s legal standard.',
        ] },
        { type: 'p', text: 'Timing matters. A new NFIP policy generally takes effect **30 days** after purchase, with a few exceptions, such as buying it while you take out or renew a mortgage ([FloodSmart](' + S.floodsmart + ')). The NFIP is also authorized only through **December 11, 2026** unless Congress extends it ([FEMA](' + S.femaReauth + ')). If your Citizens renewal falls in early 2027, apply in November. For the full walk-through, read our guide to the [Citizens flood requirement for 2027](/en/blog/citizens-flood-insurance-requirement-2027) and our page on [flood insurance in Homestead and Florida City](/en/flood-insurance-homestead-fl).' },

        { type: 'h2', text: '2. FORTIFIED homes with asphalt shingles: a 15-year limit' },
        { type: 'p', text: 'FORTIFIED is a voluntary construction program run by the Insurance Institute for Business & Home Safety (IBHS). It is not a state law. A designation normally has to be renewed about every five years. Under a technical bulletin first released September 29, 2026, homes whose required roof areas are covered entirely or in part with **asphalt shingles** can keep FORTIFIED Roof, Silver or Gold status for **15 years at most** ([IBHS Technical Bulletin FH 2026-03](' + S.ibhs + ')):' },
        { type: 'ul', items: [
          'If the shingle roof was installed as part of the first designation, the 15 years start on that designation date.',
          'For an existing roof with a documented installation date, the 15 years start on the installation date.',
          'For an existing roof with an unknown installation date, the home gets one term of up to five years and can’t be re-designated until the shingles are replaced.',
        ] },
        { type: 'p', text: 'The limit applies to new designations and re-designations **submitted on or after January 1, 2027**. Terms issued before then are not shortened, and replacing the shingle roof areas with a new valid designation starts a new eligibility period. IBHS also says the bulletin does not set a lifespan for shingles or decide when a roof must be replaced.' },
        { type: 'p', text: 'Florida’s roof-age law has not changed. An insurer may not refuse to issue or renew a homeowners policy solely because the roof is under 15 years old. For an older roof, if an authorized inspection shows at least 5 years of useful life left, the insurer may not refuse solely because of age ([s. 627.7011(5), F.S.](' + S.s6277011 + ')). See our guides to [roof age](/en/blog/roof-age-home-insurance-florida), the [wind mitigation inspection](/en/blog/wind-mitigation-inspection-florida) and [My Safe Florida Home](/en/blog/my-safe-florida-home-2026).' },

        { type: 'h2', text: '3. Citizens commercial policies: new clearinghouses' },
        { type: 'p', text: 'This one is for owners of buildings insured on Citizens commercial forms. That means commercial residential properties, such as condominium and homeowners associations and apartment buildings ([Citizens](' + S.citCommercial + ')), and commercial nonresidential (business) properties. A 2026 law requires Citizens to set up, **on or before January 1, 2027**, two commercial clearinghouses. One checks for offers from licensed (authorized) insurers. The other checks for offers from approved surplus lines insurers ([s. 627.3518(2)(b), F.S.](' + S.s6273518 + ')). If an approved surplus lines insurer offers comparable coverage within a cost margin set in the law, Citizens may not issue new coverage for that risk ([s. 627.351(6)(oo), F.S.](' + S.s627351 + ')).' },
        { type: 'p', text: 'The deadline is in the statute, but the setup is not finished. In a September 15 letter, the Office of Insurance Regulation said it could not yet approve the program, and Citizens’ board chair said the plan needed more work ([Insurance Journal, Sept. 24, 2026](' + S.ijClearinghouse + ')). If your association or business renews with Citizens in early 2027, ask your agent early how the renewal will be handled. See our [commercial insurance page](/en/commercial-insurance-florida-city).' },

        { type: 'h2', text: '4. Drivers: blue envelope and blue card' },
        { type: 'p', text: 'Starting **January 1, 2027**, a person with autism spectrum disorder can request a blue envelope, a blue card or both from FLHSMV or a county tax collector’s office ([s. 320.021, F.S.](' + S.s320021 + ')). The envelope is meant to hold a copy of the driver license, vehicle registration, **proof of insurance** and emergency contacts. Its outside carries communication guidelines for officers during a traffic stop.' },

        { type: 'h2', text: 'What is not changing on January 1' },
        { type: 'ul', items: [
          '**No-fault (PIP) is not going away.** SB 522, which would have repealed PIP starting January 1, 2027, died in committee on March 13, 2026 ([Florida Senate](' + S.sb522 + ')). To register a car you still need at least $10,000 of PIP and $10,000 of property damage liability ([FLHSMV](' + S.flhsmvIns + ')). See [Florida’s minimum car insurance requirements](/en/blog/florida-minimum-car-insurance-requirements).',
          '**The Citizens flood step was not softened.** SB 1024, which would have added more exemptions, died the same day ([Florida Senate](' + S.sb1024 + ')).',
          '**No new insurance law takes effect that day.** The Legislature’s list of 2026 laws shows the acts that take effect January 1, 2027 deal with elections, local government and virtual currency kiosks. None changes auto, home, commercial auto or general liability insurance requirements ([2026 chapter-law list](' + S.citator + ')).',
        ] },

        { type: 'h2', text: 'Your before-January checklist' },
        { type: 'ol', items: [
          'Find your next renewal dates for home, flood, auto and business policies.',
          'Citizens homeowners policyholders without flood coverage: apply now and get the CIT FW01 form ready.',
          'If your home is FORTIFIED, find the expiration date on your certificate and the roof installation date.',
          'Keep your roof paperwork and your current wind mitigation form (OIR-B1-1802) together.',
          'Associations and business owners with Citizens commercial policies: ask about the renewal path early.',
          'Put a current insurance card in every vehicle.',
        ] },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Bring or email your declarations pages, and a licensed agent will check your renewal dates, the Citizens flood requirement and any FORTIFIED paperwork with you. Start with our [homeowners insurance page](/en/homeowners-insurance-florida-city), [request a quote](/en/quote) or call [(305) 859-3953](tel:+13058593953). Our office is at 33550 S Dixie Hwy, Suite 102, Florida City. We’re open Monday–Friday 9–6 and Saturday by appointment.' },
      ],
      faq: [
        { q: 'I have a Citizens policy for less than $400,000 outside a flood zone. Do I need flood insurance in 2027?', a: 'Yes, if it is a personal residential policy that includes wind coverage. For policies effective on or after January 1, 2027, the value and the flood zone no longer matter. Condo unit-owner policies, tenant contents policies and policies without wind coverage are exempt.' },
        { q: 'Does the FORTIFIED 15-year limit mean my insurer can drop my roof at 15 years?', a: 'No. The IBHS bulletin covers only FORTIFIED designation eligibility. Florida’s roof-age rules in s. 627.7011(5) are separate and have not changed.' },
        { q: 'Will the Citizens commercial clearinghouses definitely start January 1?', a: 'The law sets that deadline, but in September regulators said they could not yet approve the program. Ask your agent before your renewal.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 627.351 (2026), paragraphs (6)(aa) and (6)(oo)', url: S.s627351 },
        { label: 'Citizens Property Insurance Corporation: flood insurance requirements', url: S.citFlood },
        { label: 'FloodSmart.gov (NFIP): buying flood insurance, waiting period', url: S.floodsmart },
        { label: 'FEMA: congressional reauthorization of the NFIP', url: S.femaReauth },
        { label: 'IBHS: FORTIFIED Technical Bulletin FH 2026-03 (Sept. 29, 2026)', url: S.ibhs },
        { label: 'Florida Statutes s. 627.7011 (2026): homeowners’ policies, roof age', url: S.s6277011 },
        { label: 'Florida Statutes s. 627.3518 (2026): Citizens clearinghouses', url: S.s6273518 },
        { label: 'Citizens: commercial policies', url: S.citCommercial },
        { label: 'Insurance Journal: commercial clearinghouse plan hits a snag (Sept. 24, 2026)', url: S.ijClearinghouse },
        { label: 'Florida Statutes s. 320.021 (2026): blue envelope and blue card program', url: S.s320021 },
        { label: 'Florida Senate: SB 522 (2026), died in committee March 13, 2026', url: S.sb522 },
        { label: 'Florida Senate: SB 1024 (2026), died in committee March 13, 2026', url: S.sb1024 },
        { label: 'Florida Legislature: 2026 chapter laws by effective date', url: S.citator },
        { label: 'FLHSMV: Florida insurance requirements', url: S.flhsmvIns },
      ],
    },
    es: {
      title: 'Cambios de seguros en Florida desde el 1 de enero de 2027: lo confirmado y lo que no cambia',
      metaTitle: 'Cambios de seguros en Florida en enero de 2027 | M&K Agency',
      description: 'Lo que cambia el 1 de enero de 2027 con fecha oficial: la última fase de inundación de Citizens, techos FORTIFIED, el clearinghouse comercial y la tarjeta azul.',
      ogAlt: 'Ilustración de una casa en Florida con un calendario de pared con el primer día resaltado, una línea de agua de inundación, un escudo sobre el techo, un sobre y palmeras',
      excerpt: 'Solo los cambios con fecha oficial del 1 de enero de 2027, verificados en la ley, en Citizens y en FEMA, y los cambios que se anunciaron pero no se aprobaron.',
      category: 'Seguro de vivienda',
      body: [
        { type: 'p', text: 'Cada diciembre nos preguntan: “¿Qué cambia el 1 de enero?”. En internet hay listas que mezclan cambios reales con proyectos que nunca se aprobaron. Aquí va **solo lo que tiene fecha oficial del 1 de enero de 2027**, confirmado en la ley de Florida, en Citizens, en FEMA o en las reglas del programa. Revisado el 11 de noviembre de 2026.' },
        { type: 'ul', items: [
          '**Dueños de casa con Citizens:** la última etapa del seguro de inundación obligatorio.',
          '**Casas FORTIFIED con tejas asfálticas:** un nuevo límite de 15 años.',
          '**Pólizas comerciales de Citizens:** nuevos clearinghouses que la ley exige para el 1 de enero.',
          '**Conductores:** el nuevo sobre azul y la tarjeta azul.',
        ] },

        { type: 'h2', text: '1. Citizens: seguro de inundación para toda póliza de vivienda con cobertura de viento' },
        { type: 'p', text: 'Es el cambio que más familias del sur de Miami-Dade afectará. Desde 2023, la ley exige por etapas seguro de inundación a los asegurados de Citizens Property Insurance Corporation. La última etapa abarca **todas las demás pólizas residenciales personales que entren en vigor a partir del 1 de enero de 2027**, sin importar el valor de la casa ni la zona de inundación ([sección 627.351(6)(aa)](' + S.s627351 + ')).' },
        { type: 'ul', items: [
          '**Quién queda exento:** las pólizas sin cobertura de viento, las pólizas de dueños de unidades de condominio y, según Citizens, las pólizas de contenido para inquilinos ([Citizens](' + S.citFlood + ')).',
          '**Cuánta cobertura:** cobertura de edificio al menos igual al límite de vivienda de su póliza de Citizens (Coverage A). Si el Programa Nacional de Seguro contra Inundaciones (NFIP) no llega a ese monto, Citizens acepta el máximo disponible: $250,000 en el Regular Program o $35,000 en el Emergency Program.',
          '**Comprobante:** el formulario firmado CIT FW01 más la página de declaraciones de inundación, o la solicitud y el pago mientras esté en trámite.',
          '**Dónde:** una póliza del NFIP o una privada que cumpla el estándar legal de Florida.',
        ] },
        { type: 'p', text: 'Una póliza nueva del NFIP suele entrar en vigor **30 días** después de la compra, salvo excepciones como comprarla al sacar o renovar una hipoteca ([FloodSmart](' + S.floodsmart + ')). Y el NFIP está autorizado solo hasta el **11 de diciembre de 2026**, salvo que el Congreso lo extienda ([FEMA](' + S.femaReauth + ')). Si renueva con Citizens a principios de 2027, solicítelo en noviembre. Detalles en nuestra guía sobre el [requisito de inundación de Citizens para 2027](/es/blog/citizens-flood-insurance-requirement-2027) y en la página de [seguro de inundación en Homestead y Florida City](/es/flood-insurance-homestead-fl).' },

        { type: 'h2', text: '2. Casas FORTIFIED con tejas asfálticas: límite de 15 años' },
        { type: 'p', text: 'FORTIFIED es un programa voluntario de construcción del Insurance Institute for Business & Home Safety (IBHS), no una ley estatal. La designación suele renovarse cada cinco años. Según un boletín técnico del 29 de septiembre de 2026, las casas con techo cubierto total o parcialmente de **tejas asfálticas** pueden mantener la designación FORTIFIED Roof, Silver o Gold por **15 años como máximo** ([boletín técnico FH 2026-03 de IBHS](' + S.ibhs + ')):' },
        { type: 'ul', items: [
          'Techo instalado con la primera designación: 15 años desde esa designación.',
          'Techo existente con fecha de instalación documentada: 15 años desde la instalación.',
          'Techo existente sin fecha conocida: un solo período de hasta cinco años, sin nueva designación hasta reemplazar las tejas.',
        ] },
        { type: 'p', text: 'El límite rige para designaciones y renovaciones **presentadas a partir del 1 de enero de 2027**. No acorta las vigencias ya emitidas, y al reemplazar las tejas con una designación válida empieza un nuevo período. IBHS aclara que el boletín no fija la vida útil de las tejas ni decide cuándo cambiar un techo.' },
        { type: 'p', text: 'La ley de Florida sobre la edad del techo no cambia. La aseguradora no puede negarse a emitir ni renovar una póliza de vivienda solo porque el techo tenga menos de 15 años, ni por la edad de un techo más viejo si una inspección autorizada le da al menos 5 años de vida útil ([sección 627.7011(5)](' + S.s6277011 + ')). Vea nuestras guías sobre la [edad del techo](/es/blog/roof-age-home-insurance-florida) y [My Safe Florida Home](/es/blog/my-safe-florida-home-2026).' },

        { type: 'h2', text: '3. Pólizas comerciales de Citizens: nuevos clearinghouses' },
        { type: 'p', text: 'Esto aplica a edificios con pólizas comerciales de Citizens: comerciales residenciales, como asociaciones de condominio y de propietarios o edificios de apartamentos ([Citizens](' + S.citCommercial + ')), y comerciales no residenciales (negocios). Una ley de 2026 obliga a Citizens a tener, **a más tardar el 1 de enero de 2027**, dos clearinghouses comerciales: uno busca ofertas de aseguradoras autorizadas y otro de aseguradoras de surplus lines aprobadas ([sección 627.3518(2)(b)](' + S.s6273518 + ')). Si una de estas ofrece cobertura comparable dentro de un margen de costo fijado por ley, Citizens no puede emitir cobertura nueva para ese riesgo ([sección 627.351(6)(oo)](' + S.s627351 + ')).' },
        { type: 'p', text: 'La fecha está en la ley, pero el sistema no está listo. En una carta del 15 de septiembre, la Oficina de Regulación de Seguros (OIR) dijo que aún no podía aprobar el programa, y el presidente de la junta de Citizens pidió rehacer el plan ([Insurance Journal, 24 de septiembre de 2026](' + S.ijClearinghouse + ')). Si su asociación o negocio renueva con Citizens a principios de 2027, consulte con tiempo. Vea nuestra [página de seguros comerciales](/es/commercial-insurance-florida-city).' },

        { type: 'h2', text: '4. Conductores: sobre azul y tarjeta azul' },
        { type: 'p', text: 'A partir del **1 de enero de 2027**, una persona con trastorno del espectro autista podrá pedir un sobre azul, una tarjeta azul o ambos en el FLHSMV o en la oficina del recaudador de impuestos (tax collector) del condado ([sección 320.021](' + S.s320021 + ')). El sobre guarda copia de la licencia, el registro, el **comprobante de seguro** y contactos de emergencia, y por fuera lleva pautas de comunicación para el oficial en una parada de tráfico.' },

        { type: 'h2', text: 'Lo que no cambia el 1 de enero' },
        { type: 'ul', items: [
          '**El PIP no desaparece.** El SB 522, que lo eliminaba desde el 1 de enero de 2027, murió en comité el 13 de marzo de 2026 ([Senado de Florida](' + S.sb522 + ')). Para registrar un carro sigue necesitando al menos $10,000 de PIP y $10,000 de daños a la propiedad (PDL) ([FLHSMV](' + S.flhsmvIns + ')). Vea los [requisitos mínimos de seguro de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements).',
          '**La etapa de inundación de Citizens sigue igual.** El SB 1024, que agregaba exenciones, murió el mismo día ([Senado de Florida](' + S.sb1024 + ')).',
          '**Ese día no entra en vigor ninguna ley de seguros.** Según la lista de leyes de 2026, las que rigen desde el 1 de enero de 2027 tratan de elecciones, gobiernos locales y cajeros de criptomonedas; ninguna cambia los requisitos de seguro de auto, vivienda, auto comercial o responsabilidad general ([lista de leyes de 2026](' + S.citator + ')).',
        ] },

        { type: 'h2', text: 'Su lista antes de enero' },
        { type: 'ol', items: [
          'Anote las fechas de renovación de casa, inundación, auto y negocio.',
          '¿Citizens sin seguro de inundación? Solicítelo ya y prepare el CIT FW01.',
          'Casa FORTIFIED: busque el vencimiento del certificado y la fecha del techo.',
          'Guarde juntos los papeles del techo y el formulario de mitigación de viento (OIR-B1-1802).',
          'Asociaciones y negocios con Citizens comercial: pregunten con tiempo.',
          'Deje una tarjeta de seguro vigente en cada vehículo.',
        ] },

        { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
        { type: 'p', text: 'Traiga o envíenos sus páginas de declaraciones y un agente con licencia revisará con usted las renovaciones, el requisito de Citizens y los papeles FORTIFIED. Vea nuestra [página de seguro de vivienda](/es/homeowners-insurance-florida-city), [pida una cotización](/es/quote) o llame al [(305) 859-3953](tel:+13058593953). Estamos en 33550 S Dixie Hwy, Suite 102, Florida City, de lunes a viernes de 9 a 6 y sábados con cita.' },
      ],
      faq: [
        { q: 'Tengo una póliza de Citizens por menos de $400,000 fuera de zona de inundación. ¿Necesito seguro de inundación en 2027?', a: 'Sí, si es una póliza residencial personal con viento. Desde el 1 de enero de 2027 ya no importan el valor ni la zona. Están exentas las pólizas de unidades de condominio, las de inquilinos y las que no cubren viento.' },
        { q: '¿El límite de 15 años de FORTIFIED significa que mi aseguradora puede rechazar mi techo a los 15 años?', a: 'No. El boletín de IBHS trata solo la designación FORTIFIED. Las reglas de la sección 627.7011(5) sobre la edad del techo no cambiaron.' },
        { q: '¿Los clearinghouses comerciales de Citizens empiezan seguro el 1 de enero?', a: 'La ley fija esa fecha, pero en septiembre el regulador aún no podía aprobar el programa. Consulte antes de renovar.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 627.351 (2026), párrafos (6)(aa) y (6)(oo)', url: S.s627351 },
        { label: 'Citizens Property Insurance Corporation: requisitos de seguro de inundación', url: S.citFlood },
        { label: 'FloodSmart.gov (NFIP): compra de seguro de inundación y período de espera', url: S.floodsmart },
        { label: 'FEMA: reautorización del NFIP por el Congreso', url: S.femaReauth },
        { label: 'IBHS: boletín técnico FORTIFIED FH 2026-03 (29 de septiembre de 2026)', url: S.ibhs },
        { label: 'Estatutos de Florida, sección 627.7011 (2026): pólizas de vivienda, edad del techo', url: S.s6277011 },
        { label: 'Estatutos de Florida, sección 627.3518 (2026): clearinghouses de Citizens', url: S.s6273518 },
        { label: 'Citizens: pólizas comerciales', url: S.citCommercial },
        { label: 'Insurance Journal: tropiezo en el plan del clearinghouse comercial (24 de septiembre de 2026)', url: S.ijClearinghouse },
        { label: 'Estatutos de Florida, sección 320.021 (2026): programa del sobre azul y la tarjeta azul', url: S.s320021 },
        { label: 'Senado de Florida: SB 522 (2026), murió en comité el 13 de marzo de 2026', url: S.sb522 },
        { label: 'Senado de Florida: SB 1024 (2026), murió en comité el 13 de marzo de 2026', url: S.sb1024 },
        { label: 'Legislatura de Florida: leyes de 2026 por fecha de vigencia', url: S.citator },
        { label: 'FLHSMV: requisitos de seguro en Florida', url: S.flhsmvIns },
      ],
    },
    ru: {
      title: 'Что меняется в страховании во Флориде с 1 января 2027 года: только подтверждённые изменения',
      metaTitle: 'Что меняется в страховании с 1 января 2027 | M&K Agency',
      description: 'Изменения с официальной датой 1 января 2027 года: последний этап flood-требования Citizens, крыши FORTIFIED, коммерческие clearinghouse и синяя карточка.',
      ogAlt: 'Иллюстрация: дом во Флориде, настенный календарь с выделенным первым числом, линия паводковой воды, щит над крышей, конверт и пальмы',
      excerpt: 'Только изменения с официальной датой 1 января 2027 года, проверенные по законам Флориды, Citizens и FEMA, и те, о которых говорили, но которые не приняты.',
      category: 'Страхование дома',
      body: [
        { type: 'p', text: 'Каждый декабрь клиенты спрашивают нас: «Что поменяется с 1 января?» В интернете гуляют списки, где реальные изменения перемешаны с законопроектами, которые так и не прошли. Здесь собрано **только то, у чего есть официальная дата 1 января 2027 года** и что мы смогли подтвердить в законах Флориды, у Citizens, в FEMA или в правилах самой программы. Проверено 11 ноября 2026 года.' },
        { type: 'ul', items: [
          '**Владельцы домов с полисом Citizens:** последний этап требования о страховке от наводнения.',
          '**Дома FORTIFIED с битумной черепицей:** новый 15-летний предел для сохранения статуса.',
          '**Коммерческие полисы Citizens:** новые clearinghouse, которые по закону должны заработать к 1 января.',
          '**Водители:** штат начинает выдавать синий конверт и синюю карточку.',
        ] },

        { type: 'h2', text: '1. Citizens: flood-страховка для каждого домашнего полиса с покрытием ветра' },
        { type: 'p', text: 'Это изменение затронет больше всего семей на юге Miami-Dade. С 2023 года закон Флориды поэтапно вводит для клиентов Citizens Property Insurance Corporation обязательную страховку от наводнения. Последний этап касается **всех остальных личных жилых полисов, вступающих в силу 1 января 2027 года или позже**, независимо от стоимости дома и flood-зоны ([s. 627.351(6)(aa), F.S.](' + S.s627351 + ')).' },
        { type: 'ul', items: [
          '**Кого не касается:** полисов без покрытия ветра, полисов владельцев квартир в кондо и, по данным Citizens, полисов арендаторов на имущество ([Citizens](' + S.citFlood + ')).',
          '**Сколько нужно:** покрытие здания от наводнения не меньше лимита на дом в полисе Citizens (Coverage A). Если национальная программа NFIP столько не даёт, Citizens принимает максимум, на который вы имеете право: $250,000 в Regular Program или $35,000 в Emergency Program.',
          '**Подтверждение:** подписанная форма Policyholder Affirmation Regarding Flood Insurance (CIT FW01) плюс declarations page flood-полиса, а пока заявка оформляется — копия заявки и подтверждение оплаты.',
          '**Где оформлять:** полис NFIP или частный flood-полис, который соответствует требованиям закона Флориды.',
        ] },
        { type: 'p', text: 'Важны сроки. Новый полис NFIP обычно начинает действовать через **30 дней** после покупки, хотя есть исключения, например при оформлении или продлении ипотеки ([FloodSmart](' + S.floodsmart + ')). Кроме того, NFIP сейчас продлена только до **11 декабря 2026 года**, если Конгресс её не продлит ([FEMA](' + S.femaReauth + ')). Если продление вашего полиса Citizens приходится на начало 2027 года, подавайте заявку на flood в ноябре. Подробности — в нашей статье о [требовании Citizens по flood на 2027 год](/ru/blog/citizens-flood-insurance-requirement-2027) и на странице о [страховке от наводнения в Homestead и Florida City](/ru/flood-insurance-homestead-fl).' },

        { type: 'h2', text: '2. Дома FORTIFIED с битумной черепицей: предел в 15 лет' },
        { type: 'p', text: 'FORTIFIED — добровольная строительная программа института IBHS (Insurance Institute for Business & Home Safety), а не закон штата. Статус обычно подтверждают примерно раз в пять лет. Согласно техническому бюллетеню, впервые опубликованному 29 сентября 2026 года, дом, у которого обязательные участки крыши полностью или частично покрыты **битумной (асфальтовой) черепицей**, может сохранять статус FORTIFIED Roof, Silver или Gold **не больше 15 лет** ([бюллетень IBHS FH 2026-03](' + S.ibhs + ')):' },
        { type: 'ul', items: [
          'Если крышу из черепицы положили при первой сертификации, 15 лет отсчитываются от даты этой сертификации.',
          'Если крыша уже была и дата её монтажа подтверждена документами, 15 лет считаются от даты монтажа.',
          'Если крыша уже была, а дата монтажа неизвестна, дом получает один срок до пяти лет, и повторно сертифицировать его нельзя, пока черепицу не заменят.',
        ] },
        { type: 'p', text: 'Предел применяется к новым сертификациям и продлениям, **поданным 1 января 2027 года или позже**. Сроки, выданные раньше, не сокращаются, а замена черепичных участков крыши с новой действующей сертификацией начинает новый период. IBHS отдельно оговаривает, что бюллетень не определяет срок службы черепицы и не решает, когда крышу нужно менять.' },
        { type: 'p', text: 'Закон Флориды о возрасте крыши не изменился. Страховщик не может отказать в выдаче или продлении домашнего полиса только потому, что крыше меньше 15 лет. Если крыша старше и проверка авторизованного инспектора показывает, что ей осталось не меньше 5 лет службы, отказать только из-за возраста тоже нельзя ([s. 627.7011(5), F.S.](' + S.s6277011 + ')). Подробнее — в нашей [статье о возрасте крыши](/ru/blog/roof-age-home-insurance-florida), а также в материалах о [wind mitigation inspection](/ru/blog/wind-mitigation-inspection-florida) и [My Safe Florida Home](/ru/blog/my-safe-florida-home-2026).' },

        { type: 'h2', text: '3. Коммерческие полисы Citizens: новые clearinghouse' },
        { type: 'p', text: 'Этот пункт для владельцев зданий, застрахованных по коммерческим полисам Citizens. Это коммерческая жилая недвижимость, например ассоциации кондо и HOA или многоквартирные дома ([Citizens](' + S.citCommercial + ')), и коммерческая нежилая недвижимость (бизнес). Закон 2026 года обязывает Citizens **не позднее 1 января 2027 года** запустить два коммерческих clearinghouse. Один ищет предложения от лицензированных во Флориде (authorized) страховщиков, второй — от одобренных страховщиков surplus lines ([s. 627.3518(2)(b), F.S.](' + S.s6273518 + ')). Если одобренный страховщик surplus lines предлагает сопоставимое покрытие в пределах установленной законом разницы в стоимости, Citizens не может выдать новое покрытие на этот объект ([s. 627.351(6)(oo), F.S.](' + S.s627351 + ')).' },
        { type: 'p', text: 'Срок записан в законе, но система ещё не готова. В письме от 15 сентября регулятор OIR сообщил, что пока не может одобрить программу, а председатель совета Citizens сказал, что план нужно доработать ([Insurance Journal, 24 сентября 2026](' + S.ijClearinghouse + ')). Если ваша ассоциация или бизнес продлевает полис Citizens в начале 2027 года, заранее спросите агента, как пройдёт продление. На нашей [странице коммерческого страхования](/ru/commercial-insurance-florida-city) — чем мы можем помочь.' },

        { type: 'h2', text: '4. Водителям: синий конверт и синяя карточка' },
        { type: 'p', text: 'С **1 января 2027 года** человек с расстройством аутистического спектра может запросить синий конверт, синюю карточку или и то и другое в FLHSMV или в офисе tax collector своего округа ([s. 320.021, F.S.](' + S.s320021 + ')). В конверте хранят копию водительских прав, регистрацию машины, **подтверждение страховки** и контакты на случай экстренной ситуации, а снаружи напечатаны подсказки для полицейского при остановке.' },

        { type: 'h2', text: 'Что 1 января не меняется' },
        { type: 'ul', items: [
          '**PIP (no-fault) не отменяют.** Законопроект SB 522, который отменял PIP с 1 января 2027 года, умер в комитете 13 марта 2026 года ([Сенат Флориды](' + S.sb522 + ')). Для регистрации машины по-прежнему нужны минимум $10,000 PIP и $10,000 ответственности за ущерб имуществу ([FLHSMV](' + S.flhsmvIns + ')). См. [минимальные требования к автостраховке во Флориде](/ru/blog/florida-minimum-car-insurance-requirements).',
          '**Этап Citizens по flood не смягчили.** SB 1024, который добавлял новые исключения, умер в тот же день ([Сенат Флориды](' + S.sb1024 + ')).',
          '**Новых страховых законов в этот день не вступает.** По списку законов 2026 года, который ведёт Легислатура, с 1 января 2027 года вступают в силу акты о выборах, местных органах власти и криптовалютных киосках. Ни один из них не меняет требований к страхованию авто, дома, коммерческого транспорта или general liability ([список законов 2026 года](' + S.citator + ')).',
        ] },

        { type: 'h2', text: 'Чек-лист до января' },
        { type: 'ol', items: [
          'Выпишите даты продления полисов на дом, flood, авто и бизнес.',
          'Клиентам Citizens без flood-страховки: подайте заявку сейчас и подготовьте форму CIT FW01.',
          'Если дом FORTIFIED, найдите дату окончания сертификата и дату монтажа крыши.',
          'Храните документы на крышу вместе с действующей формой wind mitigation (OIR-B1-1802).',
          'Ассоциациям и бизнесу с коммерческими полисами Citizens: заранее уточните порядок продления.',
          'Положите актуальную страховую карточку в каждую машину.',
        ] },

        { type: 'h2', text: 'Чем поможет M&K Agency' },
        { type: 'p', text: 'Принесите или пришлите нам declarations pages, и лицензированный агент вместе с вами проверит даты продления, требование Citizens по flood и документы FORTIFIED. Мы говорим по-русски — см. нашу страницу [русскоязычного страхового агента в Майами](/ru/russian-speaking-insurance-agent-miami). Начните со [страницы о страховании дома](/ru/homeowners-insurance-florida-city), [запросите расчёт](/ru/quote) или позвоните по [(305) 859-3953](tel:+13058593953). Наш офис: 33550 S Dixie Hwy, Suite 102, Florida City. Работаем с понедельника по пятницу с 9 до 6, в субботу по записи.' },
      ],
      faq: [
        { q: 'У меня полис Citizens меньше чем на $400,000, дом вне flood-зоны. Нужна ли мне flood-страховка в 2027 году?', a: 'Да, если это личный жилой полис с покрытием ветра. Для полисов, вступающих в силу 1 января 2027 года или позже, стоимость дома и flood-зона больше не важны. Полисы владельцев квартир в кондо, полисы арендаторов и полисы без покрытия ветра под требование не попадают.' },
        { q: 'Значит ли 15-летний предел FORTIFIED, что страховщик откажет из-за крыши через 15 лет?', a: 'Нет. Бюллетень IBHS касается только статуса FORTIFIED. Правила Флориды о возрасте крыши в s. 627.7011(5) — отдельная норма, и она не изменилась.' },
        { q: 'Точно ли коммерческие clearinghouse Citizens заработают 1 января?', a: 'Закон устанавливает этот срок, но в сентябре регулятор заявил, что пока не может одобрить программу. Уточните у агента до продления.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 627.351 (2026), пункты (6)(aa) и (6)(oo)', url: S.s627351 },
        { label: 'Citizens Property Insurance Corporation: требования о страховке от наводнения', url: S.citFlood },
        { label: 'FloodSmart.gov (NFIP): покупка flood-страховки и период ожидания', url: S.floodsmart },
        { label: 'FEMA: продление NFIP Конгрессом', url: S.femaReauth },
        { label: 'IBHS: технический бюллетень FORTIFIED FH 2026-03 (29 сентября 2026)', url: S.ibhs },
        { label: 'Florida Statutes s. 627.7011 (2026): домашние полисы, возраст крыши', url: S.s6277011 },
        { label: 'Florida Statutes s. 627.3518 (2026): clearinghouse Citizens', url: S.s6273518 },
        { label: 'Citizens: коммерческие полисы', url: S.citCommercial },
        { label: 'Insurance Journal: заминка с коммерческим clearinghouse (24 сентября 2026)', url: S.ijClearinghouse },
        { label: 'Florida Statutes s. 320.021 (2026): программа синего конверта и синей карточки', url: S.s320021 },
        { label: 'Сенат Флориды: SB 522 (2026), умер в комитете 13 марта 2026', url: S.sb522 },
        { label: 'Сенат Флориды: SB 1024 (2026), умер в комитете 13 марта 2026', url: S.sb1024 },
        { label: 'Легислатура Флориды: законы 2026 года по дате вступления в силу', url: S.citator },
        { label: 'FLHSMV: требования к страховке во Флориде', url: S.flhsmvIns },
      ],
    },
  },
};
