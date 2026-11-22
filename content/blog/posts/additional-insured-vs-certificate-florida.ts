import type { BlogPost } from '../types';

// New article 2026-11-22 (ET) (content plan 2026-11, row 2026-11-22; content_calendar.csv row 63).
// Facts checked 2026-11-22 against official sources (raw copies in /workspace/aicoi/; notes in
// /workspace/articles/additional-insured-vs-certificate-florida_sources.md):
// - Connecticut Insurance Department Bulletin S-14 (Nov. 9, 2010), Use of Certificates of Insurance: a certificate is
//   evidence of insurance, a snapshot of coverages as of the day of issue, confers no rights on the certificate holder,
//   does not make the holder an additional insured; that protection requires being named an additional insured by
//   endorsement or under the terms of the policy; there may be a cost; certificates cannot amend, expand or alter the policy.
// - Texas Department of Insurance, Certificates of Insurance FAQ (Ins. Code ch. 1811): with only a blanket additional
//   insured endorsement, the certificate may state that the policy contains it but may not name the holder as an
//   additional insured; the AI box is checked if the policy includes an endorsement naming the holder.
// - F.S. 626.9541(1)(a) (2026): knowingly issuing/circulating a P&C certificate of insurance altered after issue that
//   misrepresents policy terms = unfair or deceptive act.
// - F.S. 624.447 (2026): any insurer shall, upon request, verify a certificate of insurance on any contractor (s. 768.0425).
// - F.S. 489.115(5)(a) (2026): affidavit of workers' comp (ch. 440), public liability and property damage insurance in
//   amounts set by board rule, before initial issuance or renewal. DBPR CILB FAQ: general/building $300,000 liability +
//   $50,000 property damage; all other categories $100,000 + $25,000; keep it at all times.
// - F.S. 440.10(1)(c) (2026): contractor shall require a subcontractor to provide evidence of workers' comp.
// - F.S. 725.06 (2026): construction-contract indemnity for the indemnitee's own fault void unless a monetary limitation
//   with a reasonable commercial relationship that is part of the project specs/bid documents; owner limit >= $1 million
//   per occurrence unless otherwise agreed; no indemnity for gross negligence or willful, wanton or intentional misconduct;
//   (2)-(3) separate rules for public agency contracts.
// - Miami-Dade Strategic Procurement, Vendor Insurance: no standard requirements, each contract carries its own risk;
//   generally WC (ch. 440), CGL >= $300,000 per occurrence / $600,000 aggregate with Miami-Dade County shown as an
//   additional insured, auto liability >= $300,000 CSL (owned, non-owned, hired).
// - Miami-Dade Contract Requirements page (MCC 7040/7360): certificates within 10 days of award; County named as
//   additional insured on public liability; certificates indicate 30-day advance notice of modification; contract number
//   and title on each certificate; non-compliant contractors placed in inactive status until corrected.
// - Miami-Dade DTPW solicitation 20260011 (MCC 7360), Supplementary Instructions 1.09: CGL $1,000,000 each occurrence /
//   $2,000,000 aggregate, products/completed operations, County included as additional insured; umbrella; insurance
//   required "shall in no way limit the responsibility to indemnify" the County.
// No private insurer named. No cost or outcome claims. General information, not legal advice.
const S = {
  ct: 'https://portal.ct.gov/cid/department-resources/bulletins/sales-bulletins/bulletin-s-14',
  tdi: 'https://www.tdi.texas.gov/certificates/faq.html',
  s6269541: 'https://www.flsenate.gov/Laws/Statutes/2026/626.9541',
  s624447: 'https://www.flsenate.gov/Laws/Statutes/2026/624.447',
  s489115: 'https://www.flsenate.gov/Laws/Statutes/2026/489.115',
  dbprFaq: 'https://www2.myfloridalicense.com/construction-industry/faqs/',
  s44010: 'https://www.flsenate.gov/Laws/Statutes/2026/440.10',
  s72506: 'https://www.flsenate.gov/Laws/Statutes/2026/725.06',
  mdVendor: 'https://www.miamidade.gov/global/strategic-procurement/insurance-process.page',
  mdContract: 'https://www.miamidade.gov/global/business/business-with-the-county/contract-requirements.page',
  mdSol: 'https://www.miamidade.gov/Apps/ISD/StratProc/ProcurementNAS/pdf_Files/20260011MCC7360/20260011_Solicitation_Documents.pdf',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'additional-insured-vs-certificate-florida',
  datePublished: '2026-11-22',
  translations: {
    en: {
      title: 'Additional Insured vs. a Certificate of Insurance for Florida Contractors',
      metaTitle: 'Additional Insured vs. Certificate of Insurance | M&K Agency',
      description: 'A client wants to be “additional insured,” not just a certificate holder. What the difference is, why it takes an endorsement, and what to check first.',
      excerpt: '“Send us your COI” and “add us as additional insured” are two different requests. Here is what each one means for a Florida contractor, and why the certificate alone cannot change your policy.',
      ogAlt: 'Illustration of a construction site with a clipboard document, a separate stapled endorsement page and a blue shield with a check mark',
      category: 'Contractor & handyman insurance',
      body: [
        { type: 'p', text: 'A general contractor, an HOA or a county agency sends over the insurance section of a contract. One line says “provide a certificate of insurance.” The next says “name us as an additional insured.” They sound alike, but they are not the same request.' },
        { type: 'p', text: 'This guide focuses on additional insured requests. For a walk through every box on a certificate, see our [certificate of insurance guide for contractors](/en/blog/certificate-of-insurance-contractors-florida).' },

        { type: 'h2', text: 'Two different requests' },
        { type: 'ul', items: [
          '**Certificate holder.** The person or company that receives your certificate as evidence that you carry insurance. Insurance regulators describe the certificate as a **snapshot of your coverage on the day it is issued**. It gives the holder no rights under your policy.',
          '**Additional insured.** A person or company that your policy itself treats as an insured for the coverage described. That status comes from an **endorsement**, or from terms already written into the policy, not from the certificate.',
        ] },
        { type: 'p', text: 'The Connecticut Insurance Department put it plainly in a bulletin to insurers and agents: a certificate does not make the holder an additional insured. To get that protection, the holder has to be named as an additional insured by endorsement or be an insured under the terms of the policy, and in some cases there may be a cost for it. The same bulletin says certificates cannot be used to amend, expand or alter the policy.' },

        { type: 'h2', text: 'Why the certificate cannot do the job of an endorsement' },
        { type: 'p', text: 'The policy is the contract between you and the insurer. The certificate only describes it. If the policy does not include the client as an additional insured, typing that on a certificate does not change the policy.' },
        { type: 'p', text: 'Florida law treats certificates seriously. Knowingly issuing or circulating a property and casualty certificate of insurance that was **altered after it was issued** and misrepresents the policy is an unfair or deceptive practice ([s. 626.9541(1)(a)](' + S.s6269541 + ')). And any insurer must, on request, verify a certificate of insurance for a contractor ([s. 624.447](' + S.s624447 + ')), so a client can check what you sent.' },
        { type: 'p', text: 'Some policies include **blanket** additional insured wording, which reaches parties you agreed in a written contract to add rather than listing each one by name. The Texas Department of Insurance, for example, tells agents that in that case a certificate may say the policy has a blanket additional insured endorsement, but it should not name the holder as an additional insured unless the policy does. The lesson works anywhere: the document that shows additional insured status is the **endorsement**, so ask your agent for a copy along with the certificate.' },

        { type: 'h2', text: 'Where these requests come from in South Florida' },
        { type: 'p', text: 'Private clients write their own requirements; public work spells them out. Miami-Dade County, for example, says it has no standard insurance requirements because each contract carries its own risk, but its general minimums include ([Miami-Dade Vendor Insurance](' + S.mdVendor + ')):' },
        { type: 'ul', items: [
          'workers’ compensation for all employees, as required by chapter 440;',
          'commercial general liability of at least $300,000 per occurrence and $600,000 aggregate, with **Miami-Dade County shown as an additional insured**;',
          'auto liability of at least $300,000 combined single limit for owned, non-owned and hired vehicles used in the work.',
        ] },
        { type: 'p', text: 'For its Miscellaneous Construction Contracts program, the county asks for certificates within 10 days of an award, with the contract number and title on each certificate, and places contractors whose certificates do not comply in inactive status until a corrected one arrives ([Contract Requirements](' + S.mdContract + ')). A 2026 county construction solicitation asked for $1,000,000 per occurrence and $2,000,000 aggregate in general liability, products and completed operations, the county included as an additional insured, and umbrella coverage on top ([solicitation 20260011](' + S.mdSol + ')). If a contract mentions excess limits, our [umbrella insurance guide](/en/blog/umbrella-insurance-explained-florida) explains the basics.' },
        { type: 'p', text: 'Note the words **completed operations**: some contracts want the protection to reach finished work, not only the time you are on site. Ask your agent whether your endorsement addresses both.' },

        { type: 'h2', text: 'Additional insured is not the same as indemnity' },
        { type: 'p', text: 'Contracts often pair the insurance section with an **indemnity** or hold harmless clause. That is your own promise to cover certain losses of the other party. It is a contract obligation, separate from your insurance. The same county solicitation states that the insurance it requires does not limit the contractor’s responsibility to indemnify and defend the county.' },
        { type: 'p', text: 'Florida limits indemnity clauses in construction contracts. Under [s. 725.06](' + S.s72506 + '), a promise to indemnify someone for damage caused even partly by that party’s own fault is void unless the contract has a monetary limit that bears a reasonable commercial relationship to the contract and is part of the project specifications or bid documents. For the owner, that limit cannot be under $1 million per occurrence unless the parties agree otherwise, and the indemnity cannot cover the other party’s gross negligence or willful, wanton or intentional misconduct. Public agency contracts follow separate rules in the same section. How a specific clause works is a question for your attorney.' },

        { type: 'h2', text: 'What your license requires, and what it does not' },
        { type: 'p', text: 'If you hold a state contractor license, you sign an affidavit before the license is issued and at each renewal that you carry workers’ compensation, public liability and property damage insurance in amounts set by board rule ([s. 489.115(5)(a)](' + S.s489115 + ')). According to the [DBPR construction FAQs](' + S.dbprFaq + '), general and building contractors keep at least $300,000 liability and $50,000 property damage; other categories keep $100,000 and $25,000.' },
        { type: 'p', text: 'Those are minimums for the license. Additional insured wording, higher limits and completed operations come from the client’s contract. Workers’ comp is a separate track again: a contractor must get evidence of each subcontractor’s workers’ comp ([s. 440.10(1)(c)](' + S.s44010 + ')). Our guides on [subcontractor certificates](/en/blog/subcontractor-insurance-certificates-florida) and the [construction workers’ comp exemption](/en/blog/workers-comp-exemption-florida-construction) cover that side.' },

        { type: 'h2', text: 'Before you sign: a short checklist' },
        { type: 'ol', items: [
          'Get the insurance section of the contract in writing: who must be an additional insured, on which policies, for ongoing work or completed operations too, the limits, and the exact certificate holder name and address.',
          'Send it to your agent **before you sign**, not the morning the job starts.',
          'Ask whether your current policy already has additional insured terms that fit this contract, or whether the insurer needs to issue an endorsement.',
          'Ask for a copy of the endorsement, and check that the named insured matches the business name on your contract and license.',
          'Note your renewal date; clients with ongoing work usually ask for an updated certificate after renewal.',
          'Ask your own subcontractors for the same documents your contract requires of you.',
        ] },
        { type: 'p', text: 'Disputes over defective work follow their own process; see our guide to [Chapter 558 notices](/en/blog/chapter-558-notice-contractors-florida).' },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Send us the insurance section of the contract, or bring it to our office at 33550 S Dixie Hwy, Suite 102, Florida City (Monday–Friday 9–6, Saturday by appointment). Call [(305) 859-3953](' + TEL + ') or [request a quote](/en/quote). A licensed agent will review your [contractor insurance](/en/contractor-insurance-florida) in English, Spanish or Russian and tell you what your policy can support.' },
        { type: 'p', text: 'This is general information, not legal advice. Coverage, including any additional insured status, depends on the terms and endorsements of your policy. Talk with a licensed agent about your situation.' },
      ],
      faq: [
        { q: 'If my certificate says “additional insured,” is the client covered?', a: 'Not by the certificate alone. Regulators describe certificates as information that confers no rights and cannot amend the policy. Additional insured status has to come from an endorsement or the policy’s own terms.' },
        { q: 'Is an additional insured the same as a certificate holder?', a: 'No. A certificate holder only receives proof of insurance. An additional insured is treated as an insured under your policy for the coverage the endorsement describes.' },
        { q: 'Is additional insured status the same as an indemnity clause?', a: 'No. Indemnity is your contractual promise to cover certain losses of the other party. Florida s. 725.06 limits those clauses in construction contracts. Additional insured status is part of your insurance policy.' },
      ],
      sources: [
        { label: 'Connecticut Insurance Department: Bulletin S-14, Use of Certificates of Insurance', url: S.ct },
        { label: 'Texas Department of Insurance: Certificates of Insurance FAQ', url: S.tdi },
        { label: 'Florida Statutes s. 626.9541 (2026), unfair or deceptive acts, altered certificates', url: S.s6269541 },
        { label: 'Florida Statutes s. 624.447 (2026), verification of contractor certificates', url: S.s624447 },
        { label: 'Florida Statutes s. 489.115 (2026), contractor insurance affidavit', url: S.s489115 },
        { label: 'Florida DBPR: Construction Industry Licensing FAQs (insurance amounts)', url: S.dbprFaq },
        { label: 'Florida Statutes s. 440.10 (2026), subcontractor workers’ comp evidence', url: S.s44010 },
        { label: 'Florida Statutes s. 725.06 (2026), construction contracts, limitation on indemnification', url: S.s72506 },
        { label: 'Miami-Dade County: Vendor Insurance', url: S.mdVendor },
        { label: 'Miami-Dade County: Contract Requirements (vendor insurance, MCC program)', url: S.mdContract },
        { label: 'Miami-Dade County DTPW: Solicitation 20260011 (MCC 7360), insurance section 1.09', url: S.mdSol },
      ],
    },
    es: {
      title: 'Asegurado adicional o certificado de seguro: lo que deben saber los contratistas en Florida',
      metaTitle: 'Asegurado adicional vs. certificado de seguro | M&K Agency',
      description: 'Su cliente pide ser “asegurado adicional”, no solo titular del certificado. Qué diferencia hay, por qué hace falta un endoso y qué revisar antes de firmar.',
      excerpt: '“Mándenos su COI” y “inclúyanos como asegurado adicional” son dos pedidos distintos. Le explicamos qué significa cada uno para un contratista en Florida y por qué el certificado por sí solo no cambia su póliza.',
      ogAlt: 'Ilustración de una obra con un portapapeles, una hoja de endoso grapada aparte y un escudo azul con una marca de verificación',
      category: 'Seguro para contratistas',
      body: [
        { type: 'p', text: 'Un contratista general, una asociación de propietarios o una agencia del condado le manda la sección de seguros del contrato. Una línea dice “presente un certificado de seguro”. La siguiente dice “inclúyanos como asegurado adicional”. Parecen iguales, pero son pedidos distintos.' },
        { type: 'p', text: 'Esta guía trata del asegurado adicional. Para repasar cada casilla del certificado, vea nuestra [guía del certificado de seguro para contratistas](/es/blog/certificate-of-insurance-contractors-florida).' },

        { type: 'h2', text: 'Dos pedidos diferentes' },
        { type: 'ul', items: [
          '**Titular del certificado (certificate holder).** La persona o empresa que recibe su certificado como prueba de que usted tiene seguro. Los reguladores lo describen como una **foto de su cobertura el día en que se emite**. No le da al titular ningún derecho bajo su póliza.',
          '**Asegurado adicional (additional insured).** Una persona o empresa a la que su propia póliza trata como asegurada para la cobertura indicada. Esa condición viene de un **endoso** o de términos que ya están en la póliza, no del certificado.',
        ] },
        { type: 'p', text: 'Un boletín del Departamento de Seguros de Connecticut para aseguradoras y agentes lo resume: el certificado no convierte al titular en asegurado adicional; para eso hace falta un endoso o que la póliza ya lo incluya como asegurado, y a veces tiene un costo. Tampoco sirve para modificar, ampliar ni alterar la póliza.' },

        { type: 'h2', text: 'Por qué el certificado no reemplaza al endoso' },
        { type: 'p', text: 'La póliza es el contrato entre usted y la aseguradora; el certificado solo la describe. Si la póliza no incluye al cliente, escribirlo en el certificado no cambia nada.' },
        { type: 'p', text: 'En Florida, emitir o hacer circular a sabiendas un certificado de seguro de propiedad y responsabilidad civil **alterado después de emitido** que tergiverse la póliza es una práctica desleal o engañosa ([s. 626.9541(1)(a)](' + S.s6269541 + ')). Además, toda aseguradora debe verificar, si se lo piden, el certificado de seguro de un contratista ([s. 624.447](' + S.s624447 + ')), así que el cliente puede comprobar lo que usted le mandó.' },
        { type: 'p', text: 'Algunas pólizas traen un endoso **general (blanket)** de asegurado adicional, que alcanza a quienes usted se comprometió por contrato escrito a incluir, sin nombrarlos uno por uno. El Departamento de Seguros de Texas, por ejemplo, indica a los agentes que en ese caso el certificado puede decir que la póliza tiene un endoso blanket, pero no debe nombrar al titular como asegurado adicional si la póliza no lo hace. Lo que demuestra la condición de asegurado adicional es el **endoso**: pida una copia junto con el certificado.' },

        { type: 'h2', text: 'De dónde vienen estos pedidos en el sur de Florida' },
        { type: 'p', text: 'Los clientes privados fijan sus propios requisitos; la obra pública los detalla por escrito. El condado de Miami-Dade, por ejemplo, dice que no tiene requisitos de seguro estándar porque cada contrato tiene su propio riesgo, pero sus mínimos generales incluyen ([Miami-Dade, Vendor Insurance](' + S.mdVendor + ')):' },
        { type: 'ul', items: [
          'compensación al trabajador (workers’ comp) para todos los empleados, según el capítulo 440;',
          'responsabilidad civil general de al menos $300,000 por ocurrencia y $600,000 en total, con **el condado de Miami-Dade como asegurado adicional**;',
          'responsabilidad de auto de al menos $300,000 (límite combinado) para vehículos propios, no propios y alquilados.',
        ] },
        { type: 'p', text: 'En su programa de contratos de construcción misceláneos (MCC), el condado pide los certificados dentro de los 10 días siguientes a la adjudicación, con el número y el título del contrato en cada uno, y deja inactivo al contratista cuyo certificado no cumpla hasta que lo corrija ([Contract Requirements](' + S.mdContract + ')). Una licitación de construcción del condado de 2026 pedía $1,000,000 por ocurrencia y $2,000,000 en total de responsabilidad general, cobertura de productos y operaciones terminadas, el condado como asegurado adicional y además una póliza umbrella ([licitación 20260011](' + S.mdSol + ')). Si su contrato habla de límites en exceso, nuestra [guía del seguro umbrella](/es/blog/umbrella-insurance-explained-florida) explica lo básico.' },
        { type: 'p', text: 'Ojo con las **operaciones terminadas (completed operations)**: algunos contratos quieren que la protección alcance el trabajo ya entregado. Pregunte a su agente si su endoso cubre ambos periodos.' },

        { type: 'h2', text: 'Asegurado adicional no es lo mismo que indemnización' },
        { type: 'p', text: 'Junto a la sección de seguros suele haber una cláusula de **indemnización** o “hold harmless”: su promesa de responder por ciertas pérdidas de la otra parte. Es una obligación contractual, aparte del seguro. La misma licitación del condado aclara que el seguro exigido no limita la responsabilidad del contratista de indemnizar y defender al condado.' },
        { type: 'p', text: 'Florida pone límites a estas cláusulas en los contratos de construcción. Según la [s. 725.06](' + S.s72506 + '), prometer indemnizar a alguien por daños causados aunque sea en parte por su propia culpa es nulo salvo que el contrato fije un límite monetario razonable en relación con el contrato, incluido en las especificaciones o documentos de licitación. Para el dueño, ese límite no puede ser menor de $1 millón por ocurrencia salvo otro acuerdo, y no puede cubrir la negligencia grave ni la conducta intencional del indemnizado. Los contratos con agencias públicas siguen reglas propias en la misma sección. Para una cláusula concreta, consulte a su abogado.' },

        { type: 'h2', text: 'Qué exige su licencia y qué no' },
        { type: 'p', text: 'Si tiene licencia estatal de contratista, antes de recibirla y en cada renovación firma una declaración jurada de que tiene workers’ comp, seguro de responsabilidad civil y de daños a la propiedad en los montos que fija la junta ([s. 489.115(5)(a)](' + S.s489115 + ')). Según las [preguntas frecuentes del DBPR](' + S.dbprFaq + '), los contratistas generales y de edificación deben mantener al menos $300,000 de responsabilidad y $50,000 de daños a la propiedad; las demás categorías, $100,000 y $25,000.' },
        { type: 'p', text: 'Esos son mínimos de la licencia; el asegurado adicional, los límites más altos y las operaciones terminadas salen del contrato. El workers’ comp va aparte: el contratista debe pedir a cada subcontratista prueba de su workers’ comp ([s. 440.10(1)(c)](' + S.s44010 + ')). Nuestras guías sobre [certificados de subcontratistas](/es/blog/subcontractor-insurance-certificates-florida) y la [exención de workers’ comp en construcción](/es/blog/workers-comp-exemption-florida-construction) tratan esa parte.' },

        { type: 'h2', text: 'Antes de firmar: una lista corta' },
        { type: 'ol', items: [
          'Pida por escrito la sección de seguros: quién debe ser asegurado adicional, en qué pólizas, si incluye operaciones terminadas, los límites y el nombre y la dirección exactos del titular.',
          'Mándesela a su agente **antes de firmar**.',
          'Pregunte si su póliza actual ya tiene términos de asegurado adicional que sirvan para este contrato o si la aseguradora tiene que emitir un endoso.',
          'Pida una copia del endoso y compruebe que el asegurado nombrado coincide con el nombre de la empresa en el contrato y en la licencia.',
          'Anote la fecha de renovación; los clientes con obras en curso suelen pedir un certificado nuevo después.',
          'Pídales a sus subcontratistas los mismos documentos que su contrato le exige a usted.',
        ] },
        { type: 'p', text: 'Los reclamos por defectos de construcción siguen su propio proceso; vea nuestra guía sobre el [aviso del Capítulo 558](/es/blog/chapter-558-notice-contractors-florida).' },

        { type: 'h2', text: 'Cómo le ayuda M&K Agency' },
        { type: 'p', text: 'Mándenos la sección de seguros del contrato o tráigala a nuestra oficina en 33550 S Dixie Hwy, Suite 102, Florida City (lunes a viernes de 9 a 6, sábados con cita). Llame al [(305) 859-3953](' + TEL + ') o [pida una cotización](/es/quote). Un agente con licencia revisará su [seguro para contratistas](/es/contractor-insurance-florida) en español, inglés o ruso y le dirá qué puede respaldar su póliza.' },
        { type: 'p', text: 'Esto es información general, no asesoría legal. La cobertura, incluida la condición de asegurado adicional, depende de los términos y endosos de su póliza. Hable con un agente con licencia sobre su caso.' },
      ],
      faq: [
        { q: 'Si mi certificado dice “additional insured”, ¿el cliente ya está cubierto?', a: 'No por el certificado. Los reguladores lo describen como un documento informativo que no da derechos ni modifica la póliza. La condición de asegurado adicional tiene que venir de un endoso o de los términos de la póliza.' },
        { q: '¿El asegurado adicional es lo mismo que el titular del certificado?', a: 'No. El titular solo recibe la prueba del seguro. El asegurado adicional queda tratado como asegurado bajo su póliza para la cobertura que describe el endoso.' },
        { q: '¿Ser asegurado adicional es lo mismo que una cláusula de indemnización?', a: 'No. La indemnización es su promesa contractual de responder por ciertas pérdidas de la otra parte, y la s. 725.06 de Florida la limita en contratos de construcción. El asegurado adicional forma parte de su póliza.' },
      ],
      sources: [
        { label: 'Departamento de Seguros de Connecticut: Boletín S-14, uso de certificados de seguro (en inglés)', url: S.ct },
        { label: 'Departamento de Seguros de Texas: preguntas frecuentes sobre certificados de seguro (en inglés)', url: S.tdi },
        { label: 'Estatutos de Florida s. 626.9541 (2026), prácticas desleales, certificados alterados', url: S.s6269541 },
        { label: 'Estatutos de Florida s. 624.447 (2026), verificación de certificados de contratistas', url: S.s624447 },
        { label: 'Estatutos de Florida s. 489.115 (2026), declaración jurada de seguro del contratista', url: S.s489115 },
        { label: 'DBPR de Florida: preguntas frecuentes de licencias de construcción (montos de seguro)', url: S.dbprFaq },
        { label: 'Estatutos de Florida s. 440.10 (2026), prueba de workers’ comp de subcontratistas', url: S.s44010 },
        { label: 'Estatutos de Florida s. 725.06 (2026), contratos de construcción, límite a la indemnización', url: S.s72506 },
        { label: 'Condado de Miami-Dade: Vendor Insurance (en inglés)', url: S.mdVendor },
        { label: 'Condado de Miami-Dade: Contract Requirements, programa MCC (en inglés)', url: S.mdContract },
        { label: 'Condado de Miami-Dade, DTPW: licitación 20260011 (MCC 7360), sección de seguros 1.09 (en inglés)', url: S.mdSol },
      ],
    },
    ru: {
      title: 'Additional insured и сертификат страхования (COI): в чём разница для подрядчиков во Флориде',
      metaTitle: 'Additional insured и сертификат COI во Флориде | M&K Agency',
      description: 'Заказчик просит включить его как additional insured, а не просто прислать сертификат. Чем это отличается, зачем нужен endorsement и что проверить до подписания.',
      excerpt: '«Пришлите COI» и «включите нас как additional insured» — две разные просьбы. Объясняем, что каждая значит для подрядчика во Флориде и почему сам сертификат не меняет ваш полис.',
      ogAlt: 'Иллюстрация стройплощадки с планшетом-документом, отдельным скреплённым листом endorsement и синим щитом с галочкой',
      category: 'Страхование для подрядчиков',
      body: [
        { type: 'p', text: 'Генподрядчик, ассоциация собственников (HOA) или окружное ведомство присылают раздел договора о страховании. В одной строке: «предоставьте сертификат страхования». В следующей: «включите нас как additional insured» (дополнительного застрахованного). Звучит похоже, но это разные просьбы.' },
        { type: 'p', text: 'Эта статья — именно про additional insured. Разбор всех граф сертификата есть в нашей [статье о сертификатах страхования для подрядчиков](/ru/blog/certificate-of-insurance-contractors-florida).' },

        { type: 'h2', text: 'Две разные просьбы' },
        { type: 'ul', items: [
          '**Certificate holder (держатель сертификата).** Тот, кто получает ваш сертификат как подтверждение, что страховка у вас есть. Регуляторы называют сертификат **снимком вашего покрытия на дату выдачи**. Никаких прав по вашему полису держателю он не даёт.',
          '**Additional insured (дополнительный застрахованный).** Лицо или компания, которых сам ваш полис считает застрахованными в пределах указанного покрытия. Такой статус появляется благодаря **endorsement** (дополнению к полису) или условиям, уже прописанным в полисе, а не благодаря сертификату.',
        ] },
        { type: 'p', text: 'Департамент страхования штата Коннектикут прямо написал об этом в бюллетене для страховщиков и агентов: сертификат не делает держателя дополнительным застрахованным. Чтобы получить такую защиту, держателя нужно включить как additional insured через endorsement или он должен быть застрахованным по условиям самого полиса, и иногда за это взимается плата. В том же бюллетене сказано, что сертификатом нельзя изменить, расширить или поправить условия полиса.' },

        { type: 'h2', text: 'Почему сертификат не заменяет endorsement' },
        { type: 'p', text: 'Полис — это договор между вами и страховой компанией, а сертификат его лишь описывает. Если полис не включает заказчика как additional insured, запись об этом в сертификате ничего не меняет.' },
        { type: 'p', text: 'Во Флориде к сертификатам относятся серьёзно. Заведомо выдавать или распространять сертификат страхования имущества и ответственности, **изменённый после выдачи** и искажающий условия полиса, — это недобросовестная практика ([s. 626.9541(1)(a)](' + S.s6269541 + ')). Кроме того, любая страховая компания обязана по запросу подтвердить сертификат страхования подрядчика ([s. 624.447](' + S.s624447 + ')), так что заказчик может проверить, что вы прислали.' },
        { type: 'p', text: 'В некоторых полисах есть **blanket**-условие об additional insured: оно распространяется на тех, кого вы письменным договором обязались включить, без перечисления каждого по имени. Департамент страхования Техаса, например, разъясняет агентам: в таком случае в сертификате можно указать, что в полисе есть blanket-endorsement, но нельзя называть держателя дополнительным застрахованным, если полис этого не делает. Вывод универсальный: статус additional insured подтверждает сам **endorsement**, поэтому просите у агента его копию вместе с сертификатом.' },

        { type: 'h2', text: 'Откуда берутся такие требования в Южной Флориде' },
        { type: 'p', text: 'Частные заказчики — генподрядчики, управляющие компании, ассоциации — пишут свои требования сами. В государственных и муниципальных заказах всё расписано подробно. Округ Майами-Дейд, например, указывает, что единых требований к страховке у него нет, потому что у каждого контракта свои риски, но общий минимум обычно такой ([Miami-Dade, Vendor Insurance](' + S.mdVendor + ')):' },
        { type: 'ul', items: [
          'workers’ comp (страхование от несчастных случаев на работе) для всех сотрудников, как требует глава 440;',
          'general liability (общая гражданская ответственность) не менее $300,000 на случай и $600,000 в совокупности, причём **округ Майами-Дейд указан как additional insured**;',
          'автогражданская ответственность не менее $300,000 (combined single limit) для собственных, чужих и арендованных машин, используемых на работах.',
        ] },
        { type: 'p', text: 'По программе мелких строительных контрактов (MCC) округ требует сертификаты в течение 10 дней после присуждения контракта, с номером и названием контракта на каждом, а подрядчика с неправильным сертификатом переводит в неактивный статус, пока не придёт исправленный ([Contract Requirements](' + S.mdContract + ')). В одном строительном тендере округа 2026 года требовались general liability на $1,000,000 на случай и $2,000,000 в совокупности, покрытие products and completed operations, округ как additional insured и ещё umbrella-полис сверху ([тендер 20260011](' + S.mdSol + ')). Если в договоре речь о дополнительных лимитах, основы объясняет наша [статья об umbrella-страховке](/ru/blog/umbrella-insurance-explained-florida).' },
        { type: 'p', text: 'Обратите внимание на слова **completed operations** (завершённые работы). Некоторые договоры требуют, чтобы защита additional insured распространялась и на уже сданную работу, а не только на время, пока вы на объекте. Уточните у агента, покрывает ли endorsement в вашем полисе оба периода.' },

        { type: 'h2', text: 'Additional insured — это не indemnity' },
        { type: 'p', text: 'Рядом с разделом о страховке в договоре часто стоит пункт об **indemnity** или hold harmless — ваше обещание возместить другой стороне определённые убытки. Это договорное обязательство, отдельное от страховки. В том же тендере округа прямо сказано, что требуемая страховка никак не ограничивает обязанность подрядчика возмещать убытки округа и защищать его.' },
        { type: 'p', text: 'Во Флориде такие пункты в строительных договорах ограничены. По [s. 725.06](' + S.s72506 + ') обещание возместить другой стороне ущерб, причинённый хотя бы частично по её собственной вине, недействительно, если в договоре нет денежного лимита, разумно соотносимого с договором и включённого в проектную или тендерную документацию. Для собственника недвижимости этот лимит не может быть ниже $1 млн на случай, если стороны не договорились иначе, а грубую небрежность и умышленные действия другой стороны такой пункт покрывать не может. Для контрактов с государственными органами в той же статье действуют отдельные правила. Как работает конкретная формулировка — вопрос к вашему юристу.' },

        { type: 'h2', text: 'Что требует лицензия, а что нет' },
        { type: 'p', text: 'Если у вас лицензия подрядчика штата, то перед её выдачей и при каждом продлении вы подписываете аффидевит о том, что у вас есть workers’ comp, страхование гражданской ответственности и ущерба имуществу в суммах, установленных правилами совета ([s. 489.115(5)(a)](' + S.s489115 + ')). По [ответам DBPR на частые вопросы](' + S.dbprFaq + ') генеральные и строительные подрядчики держат не менее $300,000 ответственности и $50,000 по ущербу имуществу, остальные категории — $100,000 и $25,000.' },
        { type: 'p', text: 'Это минимум для лицензии. Additional insured, более высокие лимиты и completed operations — это уже требования договора с заказчиком. Workers’ comp — отдельная тема: подрядчик обязан получить от каждого субподрядчика подтверждение workers’ comp ([s. 440.10(1)(c)](' + S.s44010 + ')). Об этом — наши статьи о [сертификатах субподрядчиков](/ru/blog/subcontractor-insurance-certificates-florida) и об [освобождении от workers’ comp в строительстве](/ru/blog/workers-comp-exemption-florida-construction).' },

        { type: 'h2', text: 'До подписания: короткий чек-лист' },
        { type: 'ol', items: [
          'Получите раздел договора о страховании в письменном виде: кого включить как additional insured, по каким полисам, нужны ли completed operations, какие лимиты, точное имя и адрес держателя сертификата.',
          'Отправьте его агенту **до подписания**, а не утром в день начала работ.',
          'Спросите, есть ли в вашем нынешнем полисе условия об additional insured, подходящие под этот договор, или страховой компании нужно выпустить endorsement.',
          'Попросите копию endorsement и проверьте, что named insured совпадает с названием компании в договоре и в лицензии.',
          'Отметьте дату продления полиса. Заказчики с текущими работами обычно просят новый сертификат после продления.',
          'Требуйте от своих субподрядчиков те же документы, которые договор требует от вас.',
        ] },
        { type: 'p', text: 'Претензии по качеству работ рассматриваются в отдельном порядке — см. нашу статью об [уведомлении по главе 558](/ru/blog/chapter-558-notice-contractors-florida).' },

        { type: 'h2', text: 'Чем поможет M&K Agency' },
        { type: 'p', text: 'Пришлите нам раздел договора о страховании или приезжайте в офис: 33550 S Dixie Hwy, Suite 102, Florida City (пн–пт 9–6, в субботу по записи). Звоните [(305) 859-3953](' + TEL + ') или [оставьте заявку](/ru/quote). Лицензированный агент на русском, английском или испанском разберёт ваше [страхование для подрядчиков](/ru/contractor-insurance-florida) и скажет, что может поддержать ваш полис. Подробнее о нас — на странице [русскоязычного страхового агента в Майами](/ru/russian-speaking-insurance-agent-miami).' },
        { type: 'p', text: 'Это общая информация, а не юридическая консультация. Покрытие, в том числе статус additional insured, зависит от условий и endorsements вашего полиса. Обсудите свою ситуацию с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Если в сертификате написано «additional insured», заказчик уже застрахован?', a: 'Не благодаря сертификату. Регуляторы называют его информационным документом, который не даёт прав и не меняет полис. Статус additional insured должен следовать из endorsement или условий самого полиса.' },
        { q: 'Additional insured и держатель сертификата — одно и то же?', a: 'Нет. Держатель только получает подтверждение страховки. Additional insured считается застрахованным по вашему полису в пределах покрытия, описанного в endorsement.' },
        { q: 'Статус additional insured — это то же, что пункт об indemnity?', a: 'Нет. Indemnity — ваше договорное обещание возместить определённые убытки другой стороны; во Флориде такие пункты в строительных договорах ограничивает s. 725.06. Additional insured — часть вашего страхового полиса.' },
      ],
      sources: [
        { label: 'Департамент страхования Коннектикута: бюллетень S-14 о сертификатах страхования (англ.)', url: S.ct },
        { label: 'Департамент страхования Техаса: вопросы и ответы о сертификатах страхования (англ.)', url: S.tdi },
        { label: 'Законы Флориды, s. 626.9541 (2026): недобросовестные практики, изменённые сертификаты', url: S.s6269541 },
        { label: 'Законы Флориды, s. 624.447 (2026): проверка сертификатов подрядчиков', url: S.s624447 },
        { label: 'Законы Флориды, s. 489.115 (2026): аффидевит подрядчика о страховании', url: S.s489115 },
        { label: 'DBPR Флориды: частые вопросы о строительных лицензиях (суммы страховки), англ.', url: S.dbprFaq },
        { label: 'Законы Флориды, s. 440.10 (2026): подтверждение workers’ comp субподрядчиков', url: S.s44010 },
        { label: 'Законы Флориды, s. 725.06 (2026): строительные договоры, ограничение indemnity', url: S.s72506 },
        { label: 'Округ Майами-Дейд: Vendor Insurance (англ.)', url: S.mdVendor },
        { label: 'Округ Майами-Дейд: Contract Requirements, программа MCC (англ.)', url: S.mdContract },
        { label: 'Округ Майами-Дейд, DTPW: тендер 20260011 (MCC 7360), раздел о страховании 1.09 (англ.)', url: S.mdSol },
      ],
    },
  },
};
