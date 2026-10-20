import type { BlogPost } from '../types';

// Facts checked 2026-10-20 against official sources:
// - s. 489.115(5)(a) (2026): before initial issuance or renewal of a certificate or registration, the
//   applicant submits an affidavit that he or she has workers' compensation as required by ch. 440,
//   public liability insurance and property damage insurance, in amounts determined by board rule;
//   the board verifies affidavits by random sample. (5)(d): an applicant planning a s. 440.05
//   exemption attests it will obtain one within 30 days after the license is issued.
// - Rule 61G4-15.003 F.A.C. (eff. 11/15/2007, implements 489.115(5)): coverage must be maintained for
//   the life of an active license; random audits by ZIP area; licensee has 30 days from the board's
//   request to send an original certificate, a certified copy on file with the building department,
//   or the policy. Certificate must show: date issued, agent name, named insured = exact name of the
//   qualified business + d/b/a, insurer, policy number, effective and expiration dates, limits,
//   certificate holder = DBPR / CILB, 30-day written cancellation notice to the holder, agent
//   signature, license number. Amounts: general and building contractors $300,000 liability /
//   $50,000 property damage; residential, sheet metal, air conditioning, roofing, mechanical, pool,
//   plumbing, underground utility, solar, pollutant storage, other specialty: $100,000 / $25,000.
// - DBPR Construction Industry FAQs: same amounts; active licensees must keep workers' comp or an exemption.
// - s. 624.447 (2026): any insurer shall, upon request, verify a certificate of insurance on any
//   contractor as defined in s. 768.0425 (person who contracts to perform construction or building
//   services regulated by state or local law, incl. ch. 489 and 633).
// - s. 626.9541(1)(a) (2026): knowingly issuing or circulating a property and casualty certificate of
//   insurance altered after being issued that misrepresents the policy's terms is an unfair or
//   deceptive practice.
// - s. 440.10(1)(c) (2026): a contractor shall require a subcontractor to provide evidence of workers'
//   comp; a corporate sub with an exempt officer provides a copy of the exemption certificate.
//   (1)(b): contractor liable for employees of an uninsured sub.
// - Miami-Dade RER / CTQB business certificate of competency instructions (rev. 1/28/2026): ch. 10 of
//   the county code requires contractors and subcontractors in incorporated and unincorporated areas
//   to be certified by CTQB, CILB or ECLB; GL certificate with at least $300,000 bodily injury and
//   $50,000 property damage per occurrence, in the business name, made out to RER, before the county
//   certificate is issued; workers' comp presented to the municipal building department when pulling
//   permits (unincorporated: first to Contractor Licensing).
// - Miami-Dade "Florida Certified Contractor License Registration and Verification": state-certified
//   contractors must be verified to get permits in unincorporated Miami-Dade; copies of license, GL
//   certificate ($300,000 BI / $50,000 PD) and WC certificate or exemption; certificate holder Miami
//   Dade County; may need a Contractor's Business Tax Receipt.
// - Miami-Dade e-licensing renewal page: ch. 10 certificate holders keep public liability insurance;
//   policy endorsed to notify the CTQB secretary at least 30 days before cancellation.
// - DFS Division of Workers' Compensation data portal: Proof of Coverage database and Exemption Search.
// Generic explanations (holder vs. additional insured, waiver of subrogation, primary/non-contributory)
// are general, non-carrier-specific information, not legal advice.
const S = {
  s489115: 'https://www.flsenate.gov/Laws/Statutes/2026/489.115',
  rule: 'https://www.flrules.org/gateway/ruleNo.asp?id=61G4-15.003',
  dbprFaq: 'https://www2.myfloridalicense.com/construction-industry/faqs/',
  s624447: 'https://www.flsenate.gov/Laws/Statutes/2026/624.447',
  s7680425: 'https://www.flsenate.gov/Laws/Statutes/2026/768.0425',
  s6269541: 'https://www.flsenate.gov/Laws/Statutes/2026/626.9541',
  s44010: 'https://www.flsenate.gov/Laws/Statutes/2026/440.10',
  mdBiz: 'https://www.miamidade.gov/resources/licenses/documents/business-certification.pdf',
  mdReg: 'https://www.miamidade.gov/resources/licenses/documents/voluntary-registration-app.pdf',
  mdRenew: 'https://www.miamidade.gov/Apps/RER/CLRA/',
  dfsPoc: 'https://dwcdataportal.fldfs.com/POCData.aspx',
};

export const post: BlogPost = {
  slug: 'certificate-of-insurance-contractors-florida',
  datePublished: '2026-10-20',
  translations: {
    en: {
      title: 'Certificates of Insurance for Contractors in Miami-Dade: What Clients Ask For',
      metaTitle: 'Certificate of Insurance for Contractors in Florida | M&K Agency',
      description: 'What a contractor’s certificate of insurance shows, holder vs. additional insured, Florida license minimums and Miami-Dade COI rules, in plain English.',
      ogAlt: 'Clipboard with an insurance certificate and a shield next to a pressure washer and a hard hat',
      excerpt: 'An HOA, a property manager or a general contractor wants your COI before you start. What the certificate shows, what “additional insured” really means, and the insurance rules Florida and Miami-Dade put on licensed contractors.',
      category: 'Contractor & handyman insurance',
      body: [
        { type: 'p', text: 'An HOA board, a property manager or a general contractor tells you: “Send us your COI before you start.” For a pressure washer, a handyman or a roofer, that one page can decide whether the job goes ahead this week. Here is what it is, what clients check and what Florida and Miami-Dade require.' },
        { type: 'h2', text: 'What a certificate of insurance is, and what it is not' },
        { type: 'p', text: 'A certificate of insurance (COI) is a one-page summary, issued through your agent or insurer, of the policies you have on the day it is issued: the insurer, policy numbers, dates and limits. It is **evidence of coverage, not the coverage itself**. The policy and its endorsements decide what is covered.' },
        { type: 'p', text: 'Florida law backs that up. Knowingly issuing or circulating a property and casualty certificate that was **altered after it was issued** and misrepresents the policy is an unfair and deceptive practice ([s. 626.9541(1)(a)](' + S.s6269541 + ')). And an insurer must, on request, **verify** a certificate of insurance for a contractor ([s. 624.447](' + S.s624447 + ')), meaning anyone who contracts to perform construction or building services regulated by state or local law ([s. 768.0425](' + S.s7680425 + ')).' },
        { type: 'h2', text: 'What clients look for on the certificate' },
        { type: 'p', text: 'Forms vary, but most liability certificates have the same boxes. The list Florida’s Construction Industry Licensing Board (CILB) uses when it audits a licensee is a good checklist for anyone ([Rule 61G4-15.003](' + S.rule + ')):' },
        { type: 'ul', items: [
          '**Named insured:** the exact name of your business, plus any d/b/a. A certificate in your personal name when the contract is with your LLC is a common reason a client sends it back.',
          '**Insurer, policy number and dates:** effective and expiration dates for each policy shown.',
          '**Limits:** for general liability, usually per-occurrence and aggregate amounts. Workers’ comp and commercial auto have their own lines.',
          '**Certificate holder:** whoever asked for the certificate, such as the HOA, the management company or the general contractor.',
          '**Description of operations:** the type of work, and sometimes the project address.',
          '**Date issued and the agent’s signature.**',
        ] },
        { type: 'h2', text: 'Certificate holder vs. additional insured' },
        { type: 'p', text: 'This is the request that confuses people most. A **certificate holder** simply receives the certificate as proof that you carry insurance. Being listed as a holder gives them no rights under your policy. An **additional insured** is someone your policy is extended to protect, usually for claims arising from your work for them. That status comes from an **endorsement on the policy**, not from typing a name on the certificate.' },
        { type: 'p', text: 'Two more phrases often appear in contracts:' },
        { type: 'ul', items: [
          '**Waiver of subrogation:** your insurer gives up the right to recover what it paid on a claim from the client. It usually needs an endorsement, and not every policy allows it.',
          '**Primary and non-contributory:** your policy responds before the client’s own insurance, without asking it to share. This also depends on the policy wording.',
        ] },
        { type: 'p', text: 'This is general information, not legal advice, and it does not describe any particular policy. Send us the insurance section of the contract **before you sign** and we will tell you what your current policy supports.' },
        { type: 'h2', text: 'Licensed contractors: what the state requires' },
        { type: 'p', text: 'If you hold a state certification or registration from the CILB, insurance is part of the license. Before the license is first issued and at every renewal, you sign an affidavit that you carry workers’ compensation as required by chapter 440, plus public liability and property damage insurance in amounts set by board rule ([s. 489.115(5)](' + S.s489115 + ')). The rule sets these minimums ([Rule 61G4-15.003](' + S.rule + '); [DBPR](' + S.dbprFaq + ')):' },
        { type: 'ul', items: [
          '**General and building contractors:** $300,000 liability and $50,000 property damage.',
          '**Residential contractors and most other categories** (roofing, plumbing, air conditioning, pool and others): $100,000 liability and $25,000 property damage.',
        ] },
        { type: 'p', text: 'The coverage must stay in force as long as the license is active. The board audits licensees at random, and a selected licensee has 30 days from the request to send proof, typically a certificate naming the CILB as certificate holder, showing the license number and promising 30 days’ written notice of cancellation. The DBPR adds that active licensees must keep workers’ comp or an exemption. Electrical contractors are licensed by a separate state board.' },
        { type: 'h2', text: 'Miami-Dade’s own paperwork' },
        { type: 'p', text: 'Chapter 10 of the county code requires anyone working as a contractor or subcontractor in construction, in incorporated and unincorporated areas alike, to be certified by the county’s Construction Trades Qualifying Board (CTQB), the CILB or the state electrical board ([Miami-Dade RER](' + S.mdBiz + ')). Then:' },
        { type: 'ul', items: [
          '**County certificate of competency:** the county needs a general liability certificate with at least **$300,000 bodily injury and $50,000 property damage per occurrence**, in the business’s name and made out to the Department of Regulatory and Economic Resources (RER). The policy must be endorsed to notify the CTQB at least 30 days before cancellation ([Miami-Dade](' + S.mdRenew + ')).',
          '**State-certified contractors in unincorporated Miami-Dade:** before you can get permits there, the county verifies your license and asks for your general liability certificate (same minimums) and your workers’ comp certificate or exemption, with Miami-Dade County as certificate holder ([Miami-Dade](' + S.mdReg + ')).',
          '**Permits:** proof of workers’ comp is shown to the municipal building department when you pull permits.',
        ] },
        { type: 'p', text: 'Cities can add their own steps, so check with the building department where the job is. A business tax receipt is a separate requirement; our guide to [opening a small business in Miami-Dade](/en/blog/start-small-business-miami-dade-licenses) covers it.' },
        { type: 'h2', text: 'Workers’ comp certificates go both ways' },
        { type: 'p', text: 'If you hire subcontractors, Florida law says you **must get evidence of their workers’ comp**, or a copy of an officer’s exemption certificate, and you can become liable for the workers of an uninsured sub ([s. 440.10(1)](' + S.s44010 + ')). You can look up a company’s reported policy or an officer’s exemption in the state’s [Proof of Coverage and Exemption search](' + S.dfsPoc + '). For helpers paid on a 1099, see [employee or 1099 under Florida workers’ comp](/en/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'h2', text: 'How to keep certificates from slowing you down' },
        { type: 'ol', items: [
          'Ask for the client’s requirements in writing: limits, the exact holder name and address, and any additional insured, waiver or notice wording.',
          'Send that request to your agent before you sign, not on the morning of the job.',
          'Make sure the named insured matches the name on your contract and license.',
          'Watch expiration dates. When your policy renews, clients with ongoing work usually ask for a new certificate.',
          'Keep your subs’ certificates on file and check their dates too.',
        ] },
        { type: 'p', text: 'For coverage built around HOA and property-manager work, see our [pressure washing insurance page](/en/pressure-washing-insurance-florida). General contractors and remodelers can start with [contractor insurance in Florida](/en/contractor-insurance-florida), and repair businesses with [handyman insurance](/en/handyman-insurance-florida). See also [general liability](/en/insurance/general-liability) and our guide to [Chapter 558 defect notices](/en/blog/chapter-558-notice-contractors-florida).' },
        { type: 'callout', title: 'Got a COI request?', text: '[Request a quote](/en/quote) or call (305) 859-3953 and send us the client’s requirements. A licensed agent will review your general liability, workers’ comp and commercial auto with you in English, Spanish or Russian at our Florida City office (Monday–Friday 9–6, Saturday by appointment). This is general information, not legal advice; coverage depends on your policy, its endorsements and your contract.' },
      ],
      faq: [
        { q: 'Is a certificate of insurance the same as my policy?', a: 'No. It summarizes your policies as of the date it is issued; the policy and its endorsements decide coverage. In Florida, circulating a certificate altered after issue that misrepresents the policy is an unfair trade practice.' },
        { q: 'Does a certificate holder become an additional insured?', a: 'No. A holder only receives proof of coverage. Additional insured status has to be added to the policy by endorsement.' },
        { q: 'How much liability insurance does a Florida contractor license require?', a: 'Under the CILB rule, $300,000 liability and $50,000 property damage for general and building contractors, and $100,000 and $25,000 for most other categories. A client’s contract may ask for more.' },
        { q: 'Can a client check that my certificate is real?', a: 'Yes. Florida law requires an insurer to verify a contractor’s certificate of insurance on request, and workers’ comp policies can be looked up in the state’s Proof of Coverage database.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 489.115 (2026): certification and registration; insurance affidavit', url: S.s489115 },
        { label: 'Florida Administrative Code Rule 61G4-15.003: Public Liability Insurance (CILB)', url: S.rule },
        { label: 'Florida DBPR: Construction Industry FAQs', url: S.dbprFaq },
        { label: 'Florida Statutes s. 624.447 (2026): certificate of insurance for contractors', url: S.s624447 },
        { label: 'Florida Statutes s. 768.0425 (2026): definition of contractor', url: S.s7680425 },
        { label: 'Florida Statutes s. 626.9541 (2026): unfair or deceptive acts (altered certificates)', url: S.s6269541 },
        { label: 'Florida Statutes s. 440.10 (2026): liability for compensation; subcontractors', url: S.s44010 },
        { label: 'Miami-Dade RER: Business Certificate of Competency application instructions', url: S.mdBiz },
        { label: 'Miami-Dade RER: Florida Certified Contractor License Registration and Verification', url: S.mdReg },
        { label: 'Miami-Dade RER: contractor certificate renewal (insurance notice)', url: S.mdRenew },
        { label: 'Florida DFS, Division of Workers’ Compensation: Proof of Coverage and Exemption search', url: S.dfsPoc },
      ],
    },
    es: {
      title: 'Certificado de seguro (COI) para contratistas en Miami-Dade: lo que piden los clientes',
      metaTitle: 'Certificado de seguro para contratistas en Florida | M&K Agency',
      description: 'Qué muestra el certificado de seguro de un contratista, titular vs. asegurado adicional, mínimos de la licencia en Florida y requisitos de Miami-Dade.',
      ogAlt: 'Portapapeles con un certificado de seguro y un escudo junto a una hidrolavadora y un casco',
      excerpt: 'La HOA, el administrador o el contratista general le piden su COI antes de empezar. Qué muestra el certificado, qué significa de verdad “asegurado adicional” y qué exigen Florida y Miami-Dade a los contratistas con licencia.',
      category: 'Seguro para contratistas y handyman',
      body: [
        { type: 'p', text: 'La HOA, el administrador o el contratista general se lo dicen claro: “Mándenos su COI antes de empezar”. Si usted hace lavado a presión, trabajos de handyman o techos, esa hoja puede decidir si el trabajo arranca esta semana. Le explicamos qué es, qué revisan los clientes y qué exigen Florida y Miami-Dade.' },
        { type: 'h2', text: 'Qué es un certificado de seguro y qué no es' },
        { type: 'p', text: 'El certificado de seguro (COI) es un resumen de una página, emitido por medio de su agente o aseguradora, de las pólizas que usted tiene el día de la emisión: aseguradora, números de póliza, fechas y límites. Es **prueba de la cobertura, no la cobertura en sí**: lo cubierto lo deciden la póliza y sus endosos.' },
        { type: 'p', text: 'La ley de Florida lo respalda. Emitir o hacer circular a sabiendas un certificado de seguro de propiedad y responsabilidad que fue **alterado después de emitido** y que tergiversa la póliza es una práctica desleal y engañosa ([sección 626.9541(1)(a)](' + S.s6269541 + ')). Además, la aseguradora debe **verificar**, si se le pide, el certificado de seguro de un contratista ([sección 624.447](' + S.s624447 + ')), es decir, de quien contrata trabajos de construcción regulados por leyes estatales o locales ([sección 768.0425](' + S.s7680425 + ')).' },
        { type: 'h2', text: 'Qué revisan los clientes en el certificado' },
        { type: 'p', text: 'Las casillas suelen ser las mismas. La lista que usa la Junta de Licencias de la Industria de la Construcción de Florida (CILB) en sus auditorías sirve de guía ([Regla 61G4-15.003](' + S.rule + ')):' },
        { type: 'ul', items: [
          '**Asegurado nombrado (named insured):** el nombre exacto de su negocio y su d/b/a. Un certificado a su nombre personal cuando el contrato es con su LLC suele ser rechazado.',
          '**Aseguradora, número de póliza y fechas:** inicio y vencimiento de cada póliza.',
          '**Límites:** en responsabilidad civil general, normalmente por ocurrencia y agregado. El workers’ comp y el auto comercial van en líneas aparte.',
          '**Titular del certificado (certificate holder):** quien lo pidió, por ejemplo la HOA, la compañía administradora o el contratista general.',
          '**Descripción de operaciones:** el tipo de trabajo y, a veces, la dirección de la obra.',
          '**Fecha de emisión y firma del agente.**',
        ] },
        { type: 'h2', text: 'Titular del certificado vs. asegurado adicional' },
        { type: 'p', text: 'Aquí se confunde mucha gente. El **titular del certificado** solo recibe la constancia de que usted tiene seguro, sin ningún derecho bajo su póliza. El **asegurado adicional** (additional insured) es alguien a quien la póliza extiende su protección, por lo general por reclamos que surgen del trabajo que usted le hace. Ese estatus sale de un **endoso en la póliza**, no de escribir un nombre en el certificado.' },
        { type: 'p', text: 'En los contratos aparecen también estas dos frases:' },
        { type: 'ul', items: [
          '**Renuncia de subrogación (waiver of subrogation):** su aseguradora renuncia a cobrarle al cliente lo que pagó por un reclamo. Casi siempre requiere un endoso, y no todas las pólizas lo permiten.',
          '**Primario y no contributivo (primary and non-contributory):** su póliza responde antes que el seguro del cliente, sin pedirle que comparta el pago. También depende de la redacción de la póliza.',
        ] },
        { type: 'p', text: 'Esto es información general, no asesoría legal, y no describe ninguna póliza en particular. Mándenos la sección de seguros del contrato **antes de firmar** y revisamos qué permite su póliza.' },
        { type: 'h2', text: 'Contratistas con licencia: lo que exige el estado' },
        { type: 'p', text: 'Si usted tiene una certificación o registro de la CILB, el seguro forma parte de la licencia. Antes de que se emita por primera vez y en cada renovación, usted firma una declaración jurada de que tiene compensación laboral según el capítulo 440, además de seguro de responsabilidad civil y de daños a la propiedad en los montos que fija la junta ([sección 489.115(5)](' + S.s489115 + ')). La regla establece estos mínimos ([Regla 61G4-15.003](' + S.rule + '); [DBPR](' + S.dbprFaq + ')):' },
        { type: 'ul', items: [
          '**Contratistas generales y de edificación (building):** $300,000 de responsabilidad civil y $50,000 de daños a la propiedad.',
          '**Contratistas residenciales y la mayoría de las demás categorías** (techos, plomería, aire acondicionado, piscinas y otras): $100,000 y $25,000.',
        ] },
        { type: 'p', text: 'La cobertura debe mantenerse mientras la licencia esté activa. En las auditorías al azar, el contratista tiene 30 días desde la solicitud para enviar la prueba, normalmente un certificado con la CILB como titular, su número de licencia y aviso escrito de 30 días si se cancela la póliza. Según el DBPR, también debe mantener workers’ comp o una exención. Los electricistas dependen de otra junta estatal.' },
        { type: 'h2', text: 'Los trámites propios de Miami-Dade' },
        { type: 'p', text: 'El capítulo 10 del código del condado exige que todo contratista o subcontratista de construcción, tanto en zonas incorporadas como no incorporadas, esté certificado por la Junta de Calificación de Oficios de la Construcción del condado (CTQB), por la CILB o por la junta estatal de electricistas ([Miami-Dade RER](' + S.mdBiz + ')). Además:' },
        { type: 'ul', items: [
          '**Certificado de competencia del condado:** se exige un certificado de responsabilidad civil general de al menos **$300,000 por lesiones corporales y $50,000 por daños a la propiedad por ocurrencia**, a nombre del negocio y emitido a favor del Department of Regulatory and Economic Resources (RER). La póliza debe tener un endoso para avisar a la CTQB al menos 30 días antes de una cancelación ([Miami-Dade](' + S.mdRenew + ')).',
          '**Contratistas con licencia estatal en el Miami-Dade no incorporado:** para sacar permisos, el condado verifica su licencia y pide el certificado de responsabilidad civil (mismos mínimos) y el de workers’ comp o la exención, con Miami-Dade County como titular ([Miami-Dade](' + S.mdReg + ')).',
          '**Permisos:** la prueba de workers’ comp se presenta en el departamento de construcción del municipio al sacar permisos.',
        ] },
        { type: 'p', text: 'Cada ciudad puede tener pasos propios; confirme con su departamento de construcción. El business tax receipt es aparte; vea nuestra guía para [abrir un pequeño negocio en Miami-Dade](/es/blog/start-small-business-miami-dade-licenses).' },
        { type: 'h2', text: 'El certificado de workers’ comp va en las dos direcciones' },
        { type: 'p', text: 'Si usted contrata subcontratistas, la ley de Florida le **exige pedirles prueba de su workers’ comp** o copia del certificado de exención del oficial, y usted puede responder por los trabajadores de un sub sin seguro ([sección 440.10(1)](' + S.s44010 + ')). Puede consultar pólizas y exenciones en la [búsqueda estatal de cobertura y exenciones](' + S.dfsPoc + '). Si paga a un ayudante con 1099, lea [¿empleado o contratista 1099?](/es/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'h2', text: 'Cómo evitar que el certificado lo atrase' },
        { type: 'ol', items: [
          'Pida por escrito los requisitos: límites, nombre y dirección exactos del titular y el texto de asegurado adicional, renuncia o aviso.',
          'Mándele esa solicitud a su agente antes de firmar, no la mañana del trabajo.',
          'Que el asegurado nombrado coincida con el contrato y la licencia.',
          'Vigile el vencimiento: al renovar la póliza, los clientes con trabajos en curso suelen pedir un certificado nuevo.',
          'Guarde los certificados de sus subs y revise sus fechas.',
        ] },
        { type: 'p', text: 'Para trabajos con HOA y administradores, vea nuestra [página de seguro para lavado a presión](/es/pressure-washing-insurance-florida). Contratistas y remodeladores: [seguro para contratistas en Florida](/es/contractor-insurance-florida); reparaciones: [seguro para handyman](/es/handyman-insurance-florida). Vea también [responsabilidad civil general](/es/insurance/general-liability) y el [aviso del capítulo 558](/es/blog/chapter-558-notice-contractors-florida).' },
        { type: 'callout', title: '¿Le pidieron un COI?', text: '[Pida una cotización](/es/quote) o llame al (305) 859-3953 y mándenos los requisitos del cliente. Un agente con licencia revisa con usted la responsabilidad civil, el workers’ comp y el auto comercial en español, inglés o ruso, en nuestra oficina de Florida City (lunes a viernes de 9 a 6, sábados con cita). Esto es información general, no asesoría legal; la cobertura depende de su póliza, sus endosos y su contrato.' },
      ],
      faq: [
        { q: '¿El certificado de seguro es lo mismo que mi póliza?', a: 'No. Resume sus pólizas a la fecha de emisión; la cobertura la deciden la póliza y sus endosos.' },
        { q: '¿El titular del certificado pasa a ser asegurado adicional?', a: 'No. El titular solo recibe la prueba de cobertura. Para ser asegurado adicional hace falta un endoso en la póliza.' },
        { q: '¿Cuánto seguro de responsabilidad exige la licencia de contratista en Florida?', a: 'Según la CILB, $300,000 y $50,000 para contratistas generales y de edificación, y $100,000 y $25,000 para la mayoría de las demás categorías. El contrato puede pedir más.' },
        { q: '¿El cliente puede comprobar que mi certificado es real?', a: 'Sí. La aseguradora debe verificar, si se le pide, el certificado de un contratista, y el workers’ comp se puede buscar en la base de datos estatal.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 489.115 (2026): certificación y registro; declaración de seguro (en inglés)', url: S.s489115 },
        { label: 'Código Administrativo de Florida, Regla 61G4-15.003: seguro de responsabilidad civil (CILB) (en inglés)', url: S.rule },
        { label: 'DBPR de Florida: preguntas frecuentes de la industria de la construcción (en inglés)', url: S.dbprFaq },
        { label: 'Estatutos de Florida, sección 624.447 (2026): certificado de seguro para contratistas (en inglés)', url: S.s624447 },
        { label: 'Estatutos de Florida, sección 768.0425 (2026): definición de contratista (en inglés)', url: S.s7680425 },
        { label: 'Estatutos de Florida, sección 626.9541 (2026): prácticas desleales (certificados alterados) (en inglés)', url: S.s6269541 },
        { label: 'Estatutos de Florida, sección 440.10 (2026): responsabilidad por la compensación; subcontratistas (en inglés)', url: S.s44010 },
        { label: 'Miami-Dade RER: instrucciones para el certificado de competencia del negocio (en inglés)', url: S.mdBiz },
        { label: 'Miami-Dade RER: registro y verificación de licencias estatales de contratista (en inglés)', url: S.mdReg },
        { label: 'Miami-Dade RER: renovación del certificado de contratista (aviso sobre el seguro) (en inglés)', url: S.mdRenew },
        { label: 'DFS de Florida, División de Compensación Laboral: búsqueda de prueba de cobertura y exenciones (en inglés)', url: S.dfsPoc },
      ],
    },
    ru: {
      title: 'Сертификат страхования (COI) для подрядчиков в Майами-Дейд: что просят заказчики',
      metaTitle: 'Сертификат страхования для подрядчиков во Флориде | M&K Agency',
      description: 'Что показывает сертификат страхования подрядчика, чем certificate holder отличается от additional insured, минимумы для лицензии во Флориде и Майами-Дейд.',
      ogAlt: 'Планшет со страховым сертификатом и щитом рядом с мойкой высокого давления и каской',
      excerpt: 'HOA, управляющая компания или генподрядчик просят ваш COI до начала работ. Что показывает сертификат, что на самом деле значит additional insured и какие требования к страховке у Флориды и Майами-Дейд для лицензированных подрядчиков.',
      category: 'Страхование для подрядчиков и хендименов',
      body: [
        { type: 'p', text: 'Совет HOA, управляющая компания или генподрядчик пишут: «Пришлите ваш COI до начала работ». Для тех, кто занимается мойкой высокого давления, мелким ремонтом или кровлей, от этой одной страницы может зависеть, начнётся ли работа на этой неделе. Разбираем, что такое сертификат страхования, что в нём проверяют заказчики и какие правила устанавливают Флорида и Майами-Дейд.' },
        { type: 'h2', text: 'Что такое сертификат страхования и чем он не является' },
        { type: 'p', text: 'Certificate of insurance (COI) — это одностраничная сводка, которую выдают через вашего агента или страховую компанию: какие полисы действуют у вас на дату выдачи, у какой страховой, их номера, сроки и лимиты. Это **подтверждение страховки, а не сама страховка**. Что покрывается, решают полис и его endorsements (дополнения).' },
        { type: 'p', text: 'Закон Флориды это подкрепляет. Сознательно выдавать или распространять сертификат по страхованию имущества и ответственности, **изменённый после выдачи** так, что он искажает условия полиса, — недобросовестная и вводящая в заблуждение практика ([ст. 626.9541(1)(a)](' + S.s6269541 + ')). А страховая компания обязана по запросу **подтвердить** сертификат страхования подрядчика ([ст. 624.447](' + S.s624447 + ')) — то есть того, кто берётся за строительные работы, регулируемые законами штата или местными правилами ([ст. 768.0425](' + S.s7680425 + ')).' },
        { type: 'h2', text: 'Что заказчики смотрят в сертификате' },
        { type: 'p', text: 'Формы бывают разные, но поля в сертификатах ответственности почти всегда одни и те же. Список, по которому Совет по лицензированию строительной отрасли Флориды (CILB) проверяет лицензиатов, подойдёт как чек-лист любому ([правило 61G4-15.003](' + S.rule + ')):' },
        { type: 'ul', items: [
          '**Named insured (страхователь):** точное название вашей компании и d/b/a, если есть. Сертификат на ваше личное имя, когда договор заключён с вашей LLC, — частая причина, по которой его возвращают.',
          '**Страховая компания, номер полиса и даты:** начало и окончание каждого указанного полиса.',
          '**Лимиты:** для general liability обычно на один случай и общий (aggregate). У workers’ comp и коммерческого авто свои строки.',
          '**Certificate holder (держатель сертификата):** тот, кто запросил сертификат, — HOA, управляющая компания или генподрядчик.',
          '**Описание работ:** вид работ, иногда адрес объекта.',
          '**Дата выдачи и подпись агента.**',
        ] },
        { type: 'h2', text: 'Certificate holder и additional insured — не одно и то же' },
        { type: 'p', text: 'На этом путаются чаще всего. **Certificate holder** просто получает сертификат как доказательство того, что у вас есть страховка; никаких прав по вашему полису у него от этого не появляется. **Additional insured** (дополнительный застрахованный) — это тот, на кого распространяется защита вашего полиса, обычно по претензиям, связанным с вашей работой для него. Такой статус даёт **endorsement к полису**, а не имя, вписанное в сертификат.' },
        { type: 'p', text: 'В договорах часто встречаются ещё две формулировки:' },
        { type: 'ul', items: [
          '**Waiver of subrogation (отказ от суброгации):** ваша страховая отказывается взыскивать с заказчика то, что выплатила по страховому случаю. Обычно для этого нужен endorsement, и не каждый полис это допускает.',
          '**Primary and non-contributory:** ваш полис платит первым и не требует, чтобы в выплате участвовала страховка заказчика. Это тоже зависит от формулировок полиса.',
        ] },
        { type: 'p', text: 'Это общая информация, а не юридическая консультация, и она не описывает какой-то конкретный полис. Пришлите нам раздел договора о страховании **до подписания** — скажем, что допускает ваш текущий полис.' },
        { type: 'h2', text: 'Лицензированные подрядчики: требования штата' },
        { type: 'p', text: 'Если у вас сертификация или регистрация CILB, страховка — часть лицензии. Перед первой выдачей лицензии и при каждом продлении вы подписываете affidavit о том, что у вас есть workers’ compensation по главе 440, а также страховка публичной ответственности и ущерба имуществу в размерах, установленных правилами совета ([ст. 489.115(5)](' + S.s489115 + ')). Правило задаёт такие минимумы ([правило 61G4-15.003](' + S.rule + '); [DBPR](' + S.dbprFaq + ')):' },
        { type: 'ul', items: [
          '**General и building contractors:** $300,000 по ответственности и $50,000 по ущербу имуществу.',
          '**Residential contractors и большинство других категорий** (кровля, сантехника, кондиционеры, бассейны и другие): $100,000 и $25,000.',
        ] },
        { type: 'p', text: 'Страховка должна действовать всё время, пока лицензия активна. Совет проводит выборочные проверки, и у выбранного лицензиата есть 30 дней с момента запроса, чтобы прислать подтверждение — обычно сертификат, где держателем указан CILB, стоит номер лицензии и есть условие о письменном уведомлении за 30 дней при отмене полиса. DBPR добавляет, что у активного лицензиата должен быть workers’ comp или exemption. Электрики лицензируются отдельным советом штата.' },
        { type: 'h2', text: 'Отдельные требования Майами-Дейд' },
        { type: 'p', text: 'Глава 10 кодекса округа требует, чтобы каждый подрядчик и субподрядчик в строительстве — и в городах, и на неинкорпорированной территории — был сертифицирован окружным Construction Trades Qualifying Board (CTQB), CILB или советом штата для электриков ([Miami-Dade RER](' + S.mdBiz + ')). Дальше:' },
        { type: 'ul', items: [
          '**Окружной certificate of competency:** нужен сертификат general liability не меньше **$300,000 за телесные повреждения и $50,000 за ущерб имуществу на один случай**, на имя компании и выписанный на Department of Regulatory and Economic Resources (RER). В полисе должен быть endorsement об уведомлении CTQB минимум за 30 дней до отмены ([Miami-Dade](' + S.mdRenew + ')).',
          '**Подрядчики с лицензией штата на неинкорпорированной территории:** прежде чем получать там разрешения, округ проверяет вашу лицензию и просит сертификат general liability (те же минимумы) и сертификат workers’ comp или exemption, где держателем указан Miami-Dade County ([Miami-Dade](' + S.mdReg + ')).',
          '**Разрешения на работы:** подтверждение workers’ comp предъявляют в строительный департамент города, когда получают permit.',
        ] },
        { type: 'p', text: 'У городов могут быть свои шаги, поэтому уточняйте в строительном департаменте по месту объекта. Business tax receipt — отдельное требование; о нём в нашей статье о том, [как открыть малый бизнес в Майами-Дейд](/ru/blog/start-small-business-miami-dade-licenses).' },
        { type: 'h2', text: 'Сертификаты workers’ comp работают в обе стороны' },
        { type: 'p', text: 'Если вы нанимаете субподрядчиков, закон Флориды **обязывает вас требовать от них подтверждение workers’ comp** или копию сертификата exemption, а за работников незастрахованного суба можете отвечать вы ([ст. 440.10(1)](' + S.s44010 + ')). Полис компании или exemption конкретного officer можно найти в [базе штата Proof of Coverage и Exemption](' + S.dfsPoc + '). Если вы платите помощнику по 1099, прочитайте, [кем он считается для workers’ comp во Флориде](/ru/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'h2', text: 'Как сделать, чтобы сертификат не тормозил работу' },
        { type: 'ol', items: [
          'Попросите требования заказчика письменно: лимиты, точное название и адрес держателя, формулировки про additional insured, waiver или уведомления.',
          'Отправьте запрос агенту до подписания договора, а не утром в день работ.',
          'Проверьте, что named insured совпадает с названием в договоре и лицензии.',
          'Следите за сроками. Когда полис продлевается, заказчики с текущими работами обычно просят новый сертификат.',
          'Храните сертификаты, которые вы собираете со своих субподрядчиков, и тоже проверяйте их даты.',
        ] },
        { type: 'p', text: 'Страхование под работу для HOA и управляющих компаний — на нашей [странице для мойки высокого давления](/ru/pressure-washing-insurance-florida). Генподрядчикам и ремонтным компаниям — [страхование подрядчиков во Флориде](/ru/contractor-insurance-florida), мастерам по мелкому ремонту — [страхование для хендименов](/ru/handyman-insurance-florida). Подробнее об основном полисе — [general liability](/ru/insurance/general-liability). Если заказчик потом пришлёт претензию по дефектам, пригодится наша статья об [уведомлении по главе 558](/ru/blog/chapter-558-notice-contractors-florida).' },
        { type: 'callout', title: 'Попросили COI?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните по номеру (305) 859-3953 и пришлите требования заказчика. Лицензированный агент разберёт с вами general liability, workers’ comp и коммерческое авто на русском, английском или испанском в нашем офисе во Florida City (понедельник–пятница с 9 до 6, суббота по записи). Это общая информация, а не юридическая консультация; покрытие зависит от вашего полиса, его endorsements и договора.' },
      ],
      faq: [
        { q: 'Сертификат страхования — это то же самое, что полис?', a: 'Нет. Он показывает ваши полисы на дату выдачи, а покрытие определяют сам полис и его endorsements. Во Флориде распространять сертификат, изменённый после выдачи и искажающий условия полиса, запрещено как недобросовестная практика.' },
        { q: 'Становится ли certificate holder дополнительным застрахованным?', a: 'Нет. Держатель получает только подтверждение страховки. Статус additional insured добавляется в полис через endorsement.' },
        { q: 'Какая страховка ответственности нужна для лицензии подрядчика во Флориде?', a: 'По правилу CILB — $300,000 по ответственности и $50,000 по ущербу имуществу для general и building contractors и $100,000 и $25,000 для большинства других категорий. Договор заказчика может требовать больше.' },
        { q: 'Может ли заказчик проверить, что сертификат настоящий?', a: 'Да. По закону Флориды страховая обязана по запросу подтвердить сертификат страхования подрядчика, а полисы workers’ comp можно найти в базе штата Proof of Coverage.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 489.115 (2026): сертификация и регистрация; affidavit о страховке (на английском)', url: S.s489115 },
        { label: 'Административный кодекс Флориды, правило 61G4-15.003: страхование публичной ответственности (CILB) (на английском)', url: S.rule },
        { label: 'DBPR Флориды: FAQ по строительной отрасли (на английском)', url: S.dbprFaq },
        { label: 'Законы Флориды, ст. 624.447 (2026): сертификат страхования подрядчика (на английском)', url: S.s624447 },
        { label: 'Законы Флориды, ст. 768.0425 (2026): определение подрядчика (на английском)', url: S.s7680425 },
        { label: 'Законы Флориды, ст. 626.9541 (2026): недобросовестные практики (изменённые сертификаты) (на английском)', url: S.s6269541 },
        { label: 'Законы Флориды, ст. 440.10 (2026): ответственность за компенсацию; субподрядчики (на английском)', url: S.s44010 },
        { label: 'Miami-Dade RER: инструкция к заявлению на business certificate of competency (на английском)', url: S.mdBiz },
        { label: 'Miami-Dade RER: регистрация и проверка лицензий подрядчиков штата (на английском)', url: S.mdReg },
        { label: 'Miami-Dade RER: продление сертификата подрядчика (требование к страховке) (на английском)', url: S.mdRenew },
        { label: 'DFS Флориды, Отдел workers’ compensation: поиск Proof of Coverage и Exemption (на английском)', url: S.dfsPoc },
      ],
    },
  },
};
