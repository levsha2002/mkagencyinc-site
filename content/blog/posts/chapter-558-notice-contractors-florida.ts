import type { BlogPost } from '../types';

// Refreshed 2026-11-01 (first published 2026-10-04). Facts re-checked 2026-11-01 against the 2026
// Florida Statutes on flsenate.gov (raw copies in /workspace/c558/):
// - s. 558.001: legislative findings; the process gives the contractor and its insurer a chance to
//   resolve the claim through confidential settlement negotiations (last amended ch. 2015-165).
// - s. 558.002: (1) "action" covers damage to real or personal property, not personal injury claims;
//   (3) claimant includes a subsequent purchaser or an association; (4) completion = certificate of
//   occupancy (temporary or otherwise) or equivalent; (5) construction defect (a)-(d); (9) service =
//   certified mail with USPS evidence of delivery or attempted delivery, hand delivery, or courier with
//   written evidence of delivery (last amended ch. 2023-203).
// - s. 558.003: no action without complying first; court stays a non-compliant action on timely
//   motion; notice not required before completion of the building or improvement.
// - s. 558.004 (last amended ch. 2019-75; 2025 bills HB 1295 / SB 1442 did not become law):
//   (1)(a) 60 days / 120 days (association > 20 parcels) before filing; notice refers to ch. 558;
//   served on the person the claimant contracted with; (1)(b) reasonable detail, location based on at
//   least a visual inspection; (1)(c) claimant should endeavor to serve within 15 days of discovery;
//   (1)(d) does not toll repose; (2) inspection within 30/50 days, normal working hours, destructive
//   testing by mutual agreement, (c) list of three qualified persons, (g) no lien rights, refusal
//   limits damages; (3) copy to subs/suppliers/design professionals within 10/30 days, not an
//   admission; (4) their written response within 15/30 days; (5) response within 45/75 days to the
//   person who signed the notice: (a) repair at no cost to claimant, (b)/(c) money or combination
//   "that will not obligate the person's insurer", (d) dispute, (e) insurer decides within 30 days,
//   insurer silence = claimant may proceed; (6) dispute/no response -> suit without further notice;
//   (7) 45 days to accept/reject; (8) access for agreed repair; completed on time -> claimant barred;
//   (9) offers not an admission, not admissible; (10) tolls limitations until the later of 90/120 days
//   after service or 30 days after the end of the accepted repair/payment period; (13) copy to insurer
//   not a claim unless the policy says otherwise, policy conditions still apply; (14) statute controls
//   over a conflicting arbitration clause; (15) document exchange within 30 days of a written request.
// - s. 558.005: (1) applies unless both sides opted out in writing; (4) may agree in writing to
//   pre-action mediation; (6) contract notice wording since Oct. 1, 2009, no penalty if missing.
// - s. 95.11(3)(b): 4 years from TCO/CO/certificate of completion or abandonment, latent defects from
//   discovery; in any event within 7 years; warranty repairs do not extend the period; each building
//   is its own improvement.
const S = {
  s558001: 'https://www.flsenate.gov/Laws/Statutes/2026/558.001',
  s558002: 'https://www.flsenate.gov/Laws/Statutes/2026/558.002',
  s558003: 'https://www.flsenate.gov/Laws/Statutes/2026/558.003',
  s558004: 'https://www.flsenate.gov/Laws/Statutes/2026/558.004',
  s558005: 'https://www.flsenate.gov/Laws/Statutes/2026/558.005',
  s9511: 'https://www.flsenate.gov/Laws/Statutes/2026/95.11',
};
const TEL = 'tel:+13058593953';

export const post: BlogPost = {
  slug: 'chapter-558-notice-contractors-florida',
  datePublished: '2026-10-04',
  dateModified: '2026-11-01',
  translations: {
    en: {
      title: 'Got a Chapter 558 Notice? A Florida Contractor’s Guide to the Defect Claim Deadlines',
      metaTitle: 'Chapter 558 Notice in Florida: Contractor Deadlines | M&K Agency',
      description: 'Chapter 558 defect notice in Florida? The 10, 15, 30 and 45-day deadlines, your five response options, the 7-year repose limit and when to call your agent.',
      ogAlt: 'Florida stucco house with a wall crack under a magnifying glass, a sealed envelope, a calendar, a stopwatch and a clipboard',
      excerpt: 'A Chapter 558 notice is not a lawsuit, but the clock starts the day it is served. The deadlines in s. 558.004, the five ways to respond, how the notice affects time limits, and why your agent should see it early.',
      category: 'Contractor insurance',
      body: [
        { type: 'p', text: 'The letter says it is a “notice of claim under Chapter 558.” A past client, someone who later bought the home, or a condo association says something you built or remodeled is defective. It is not a lawsuit yet. Florida requires the owner to send this notice and give you a chance to inspect and respond **before** suing over a construction defect, and a court will pause a case filed without it ([s. 558.003](' + S.s558003 + ')). The Legislature describes the process as a way for the contractor **and its insurer** to resolve the claim through confidential settlement talks ([s. 558.001](' + S.s558001 + ')).' },
        { type: 'h2', text: 'What counts as a construction defect' },
        { type: 'p', text: 'Chapter 558 defines a construction defect as a deficiency in the design, planning, supervision, construction, repair, alteration or remodeling of real property that results from defective materials, a building code violation, a design that fails professional standards, or work that does not meet accepted trade standards for good and workmanlike construction ([s. 558.002](' + S.s558002 + ')). The process covers claims for damage to property. Personal injury claims are not part of it. A notice is not required for a project that has not reached completion, which generally means a certificate of occupancy has been issued.' },
        { type: 'h2', text: 'What the notice must contain' },
        { type: 'ul', items: [
          '**Timing:** at least 60 days before filing suit, or 120 days when the claimant is an association representing more than 20 parcels ([s. 558.004(1)](' + S.s558004 + ')).',
          '**Who gets it:** if the work was done under a contract, the notice goes to the person the owner contracted with.',
          '**Content:** it must refer to Chapter 558, describe each alleged defect in reasonable detail, and identify where it is, based at least on a visual inspection.',
          '**Delivery:** “service” means certified mail with a postal record of delivery or attempted delivery, hand delivery, or a courier with written proof of delivery. Write down the date it reached you; the deadlines run from that date.',
        ] },
        { type: 'h2', text: 'The deadlines, step by step' },
        { type: 'p', text: 'The days below run from service of the notice. The numbers in parentheses apply when the claimant is an association representing more than 20 parcels ([s. 558.004](' + S.s558004 + ')).' },
        { type: 'ol', items: [
          '**Within 10 days (30):** you may send a copy of the notice to each subcontractor, supplier or design professional you reasonably believe is responsible, naming the specific defect. Doing so is not an admission.',
          '**Within 15 days (30) after they receive that copy:** each of them must give you a written response with any inspection findings and their offer or position.',
          '**Within 30 days (50):** you may inspect the property. The owner must give reasonable access during normal working hours. Destructive testing needs written notice and mutual agreement.',
          '**Within 45 days (75):** you must serve your written response on the person who signed the notice.',
        ] },
        { type: 'p', text: 'Either side can also request plans, photos and videos, expert reports, subcontracts, purchase orders and maintenance records. The request must cite the statute and offer to pay reasonable copying costs, and the other side has 30 days to produce them.' },
        { type: 'h2', text: 'Your five response options' },
        { type: 'p', text: 'The written response must contain one or more of these ([s. 558.004(5)](' + S.s558004 + ')):' },
        { type: 'ul', items: [
          'An offer to **repair** at no cost to the claimant, with a detailed description of the work and a timetable.',
          'An offer to settle by **payment**, with a timetable. The statute says this offer does not obligate your insurer.',
          'A **combination** of repairs and payment, which also does not obligate your insurer.',
          'A statement that you **dispute** the claim.',
          'A statement that your **insurer** will decide on any payment within 30 days after it is notified. The insurer must be served with the claim at the same time. If the insurer does not respond within those 30 days, the owner may go ahead with a lawsuit.',
        ] },
        { type: 'p', text: 'If you dispute the claim or miss the deadline, the owner can sue without further notice. If you make a timely offer, the owner has 45 days to accept or reject it in writing. If the owner accepts a repair offer, you get access during normal working hours, and finishing the work or payment on the agreed schedule bars a lawsuit over that claim. An offer, or the lack of one, is not an admission of liability and cannot be used as evidence in the case.' },
        { type: 'h2', text: 'Where your insurance comes in' },
        { type: 'p', text: 'Under [s. 558.004(13)](' + S.s558004 + '), sending a copy of the notice to your insurer is **not a claim** for insurance purposes unless the policy says otherwise. The same subsection says you still have to meet every condition of your liability policy. In practice:' },
        { type: 'ol', items: [
          'Call your agent the day the notice arrives and send a copy, along with the contract for the job, so the right policy and policy period can be found; an older job may fall under an earlier policy.',
          'Read the **notice and claim conditions** in your general liability policy. Many policies ask you to report potential claims promptly and not to promise payment on the insurer’s behalf.',
          'Keep one file: the notice, the date and method of service, every letter you send, photos, the permit and certificate of occupancy, subcontracts and the certificates of insurance you collected from subs.',
          'Whether a policy responds to a particular defect depends on its terms. That is a question for the policy wording and, if needed, an attorney.',
        ] },
        { type: 'h2', text: 'Time limits: the notice pauses one clock, not the other' },
        { type: 'p', text: 'A suit over the design or construction of an improvement to real property generally must be filed within 4 years of the certificate of occupancy, certificate of completion or abandonment, or from discovery for a latent defect. In any event it must be filed within 7 years of that date (the statute of repose), and warranty repairs on permitted, completed work do not extend that period ([s. 95.11(3)(b)](' + S.s9511 + ')). Serving a 558 notice pauses the 4-year limitations period until the later of 90 days (120 for large associations) after service or 30 days after an accepted repair or payment period ends ([s. 558.004(10)](' + S.s558004 + ')). It does **not** pause the 7-year repose period.' },
        { type: 'h2', text: 'Check your contract' },
        { type: 'p', text: 'Since October 1, 2009, owner-contractor contracts must include a notice that construction defect claims are subject to Chapter 558, unless the parties agree otherwise; leaving it out carries no penalty ([s. 558.005](' + S.s558005 + ')). Both sides can opt out in writing or agree to pre-suit mediation. If an arbitration clause conflicts with the notice process, the statute controls.' },
        { type: 'p', text: 'Homeowners see the same process from the other side; our article on [builder warranties and homeowners insurance](/en/blog/builder-warranty-vs-homeowners-insurance-florida) explains it for them. For your own coverage, see [contractor insurance in Florida](/en/contractor-insurance-florida) and [general liability](/en/insurance/general-liability). Keep each sub’s [certificate of insurance](/en/blog/certificate-of-insurance-contractors-florida) or [workers’ comp exemption](/en/blog/workers-comp-exemption-florida-construction) on file.' },
        { type: 'callout', title: 'Got a notice, or want to review your liability coverage?', text: '[Request a quote](/en/quote) or call [(305) 859-3953](' + TEL + '). A licensed agent can go over your policy with you in English, Spanish or Russian. Coverage depends on your policy. This is general information, not legal advice; for a notice you have received, talk to an attorney about your response.' },
      ],
      faq: [
        { q: 'How long does a contractor have to respond to a Chapter 558 notice?', a: 'The written response is due within 45 days after the notice is served, or 75 days when the claimant is an association representing more than 20 parcels.' },
        { q: 'Is a Chapter 558 notice a lawsuit?', a: 'No. It is a required pre-suit notice. The owner must send it and give the contractor a chance to inspect and respond before filing an action over a construction defect.' },
        { q: 'Should I send the 558 notice to my insurance company?', a: 'Florida law says sending a copy to your insurer is not a claim unless the policy says otherwise, but your policy’s conditions still apply. Check your policy and talk to your agent promptly.' },
        { q: 'Does a 558 notice extend the 7-year deadline?', a: 'No. The notice pauses the statute of limitations for a period, but the statute says it does not toll the statute of repose.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 558.001 (2026): legislative findings', url: S.s558001 },
        { label: 'Florida Statutes s. 558.002 (2026): definitions', url: S.s558002 },
        { label: 'Florida Statutes s. 558.003 (2026): action; compliance', url: S.s558003 },
        { label: 'Florida Statutes s. 558.004 (2026): notice and opportunity to repair', url: S.s558004 },
        { label: 'Florida Statutes s. 558.005 (2026): contract provisions; application', url: S.s558005 },
        { label: 'Florida Statutes s. 95.11 (2026): limitations other than for the recovery of real property', url: S.s9511 },
      ],
    },
    es: {
      title: '¿Recibió un aviso del Capítulo 558? Guía para contratistas sobre los plazos de un reclamo por defectos en Florida',
      metaTitle: 'Aviso del Capítulo 558 en Florida: plazos | M&K Agency',
      description: 'Aviso del Capítulo 558 en Florida: plazos de 10, 15, 30 y 45 días, las cinco formas de responder, el límite de 7 años y cuándo avisar a su aseguradora.',
      ogAlt: 'Casa de estuco en Florida con una grieta bajo una lupa, un sobre sellado, un calendario, un cronómetro y un portapapeles',
      excerpt: 'Un aviso del Capítulo 558 no es una demanda, pero el reloj empieza a correr el día que se lo entregan. Los plazos de la sección 558.004, las cinco formas de responder, cómo afecta los plazos para demandar y por qué su agente debe verlo pronto.',
      category: 'Seguro para contratistas',
      body: [
        { type: 'p', text: 'La carta dice que es un “notice of claim under Chapter 558”. Un cliente anterior, un comprador posterior o una asociación de condominio asegura que una obra suya tiene un defecto. No es una demanda. En Florida, el dueño debe enviar este aviso y darle la oportunidad de inspeccionar y responder **antes** de demandar por un defecto de construcción; si demanda sin hacerlo, el juez suspende el caso ([sección 558.003](' + S.s558003 + ')). La propia ley explica que el proceso busca que el contratista **y su aseguradora** puedan resolver el reclamo en negociaciones confidenciales ([sección 558.001](' + S.s558001 + ')).' },
        { type: 'h2', text: 'Qué se considera un defecto de construcción' },
        { type: 'p', text: 'El Capítulo 558 lo define como una deficiencia en el diseño, la planificación, la supervisión, la construcción, la reparación o la remodelación de un inmueble causada por materiales defectuosos, una violación del código de construcción, un diseño que no cumple los estándares profesionales o un trabajo que no cumple los estándares aceptados del oficio ([sección 558.002](' + S.s558002 + ')). El proceso cubre reclamos por daños a la propiedad; los reclamos por lesiones personales quedan fuera. Tampoco se exige el aviso en una obra que no ha llegado a su terminación, que por lo general es la emisión del certificado de ocupación.' },
        { type: 'h2', text: 'Qué debe incluir el aviso' },
        { type: 'ul', items: [
          '**Cuándo:** al menos 60 días antes de demandar, o 120 días si quien reclama es una asociación que representa más de 20 parcelas ([sección 558.004(1)](' + S.s558004 + ')).',
          '**A quién:** si la obra se hizo bajo contrato, el aviso va a la persona con la que el dueño contrató.',
          '**Contenido:** debe mencionar el Capítulo 558, describir cada defecto con detalle razonable e indicar dónde está, al menos a partir de una inspección visual.',
          '**Entrega:** por correo certificado con constancia de entrega o intento de entrega, en mano o por mensajería con prueba escrita. Anote la fecha en que lo recibió: desde ese día corren los plazos.',
        ] },
        { type: 'h2', text: 'Los plazos, paso a paso' },
        { type: 'p', text: 'Los días se cuentan desde la entrega del aviso. Los números entre paréntesis aplican cuando reclama una asociación que representa más de 20 parcelas ([sección 558.004](' + S.s558004 + ')).' },
        { type: 'ol', items: [
          '**En 10 días (30):** puede enviar copia del aviso a cada subcontratista, proveedor o profesional de diseño que razonablemente considere responsable, señalando el defecto concreto. Hacerlo no es admitir nada.',
          '**En 15 días (30) desde que reciben esa copia:** cada uno debe enviarle una respuesta por escrito con lo que encontró y su oferta o postura.',
          '**En 30 días (50):** puede inspeccionar la propiedad. El dueño debe darle acceso razonable en horario normal de trabajo. Las pruebas destructivas requieren aviso por escrito y acuerdo de ambas partes.',
          '**En 45 días (75):** debe entregar su respuesta por escrito a quien firmó el aviso.',
        ] },
        { type: 'p', text: 'Cualquiera de las partes puede pedir planos, fotos y videos, informes de expertos, subcontratos, órdenes de compra y registros de mantenimiento. La solicitud debe citar la ley y ofrecer pagar las copias; la otra parte tiene 30 días para entregarlos.' },
        { type: 'h2', text: 'Sus cinco opciones de respuesta' },
        { type: 'p', text: 'La respuesta por escrito debe incluir una o más de estas ([sección 558.004(5)](' + S.s558004 + ')):' },
        { type: 'ul', items: [
          'Una oferta de **reparar** sin costo para el reclamante, con una descripción detallada del trabajo y un calendario.',
          'Una oferta de **pago** para cerrar el reclamo, con un calendario. La ley aclara que esta oferta no obliga a su aseguradora.',
          'Una **combinación** de reparación y pago, que tampoco obliga a su aseguradora.',
          'Una declaración de que usted **disputa** el reclamo.',
          'Una declaración de que su **aseguradora** decidirá si hay pago dentro de los 30 días después de ser notificada. A la aseguradora se le entrega el reclamo al mismo tiempo. Si no responde en esos 30 días, el dueño puede seguir adelante con la demanda.',
        ] },
        { type: 'p', text: 'Si disputa el reclamo o no responde a tiempo, el dueño puede demandar. Si hace una oferta a tiempo, el dueño tiene 45 días para aceptarla o rechazarla por escrito. Si acepta una reparación y usted la termina (o paga) en el plazo acordado, ya no puede demandar por ese reclamo. Hacer una oferta, o no hacerla, no es una admisión de responsabilidad ni se puede usar como prueba en el juicio.' },
        { type: 'h2', text: 'Dónde entra su seguro' },
        { type: 'p', text: 'Según la [sección 558.004(13)](' + S.s558004 + '), enviarle copia del aviso a su aseguradora **no cuenta como reclamo** de seguro, salvo que la póliza diga otra cosa. Aun así, debe cumplir todas las condiciones de su póliza de responsabilidad. En la práctica:' },
        { type: 'ol', items: [
          'Llame a su agente el mismo día que llegue el aviso y mándele copia junto con el contrato de esa obra, para ubicar la póliza y el período correctos.',
          'Lea las **condiciones de aviso y de reclamo** de su póliza de responsabilidad general. Muchas pólizas piden reportar pronto cualquier posible reclamo y no prometer pagos en nombre de la aseguradora.',
          'Arme un expediente: el aviso, la fecha y forma de entrega, sus cartas, fotos, el permiso, el certificado de ocupación y los subcontratos.',
          'Si la póliza responde por un defecto concreto depende de sus términos; si hace falta, consulte a un abogado.',
        ] },
        { type: 'h2', text: 'Plazos para demandar: el aviso detiene un reloj, no el otro' },
        { type: 'p', text: 'Una demanda por el diseño o la construcción de una obra en un inmueble suele tener que presentarse dentro de 4 años desde el certificado de ocupación, el certificado de terminación o el abandono de la obra, o desde que se descubre un defecto oculto. En cualquier caso, debe presentarse dentro de 7 años desde esa fecha (el plazo de caducidad o “statute of repose”), y las reparaciones en garantía sobre obra con permiso y terminada no alargan ese plazo ([sección 95.11(3)(b)](' + S.s9511 + ')). El aviso 558 suspende el plazo de 4 años hasta la fecha que llegue más tarde: 90 días (120 para asociaciones grandes) después de la entrega, o 30 días después de que termine el período de reparación o pago aceptado ([sección 558.004(10)](' + S.s558004 + ')). El plazo de 7 años **no** se suspende.' },
        { type: 'h2', text: 'Revise su contrato' },
        { type: 'p', text: 'Desde el 1 de octubre de 2009, los contratos entre dueño y contratista deben incluir un aviso de que los reclamos por defectos de construcción están sujetos al Capítulo 558, salvo que las partes acuerden otra cosa; omitirlo no conlleva sanción ([sección 558.005](' + S.s558005 + ')). Ambas partes pueden excluir el proceso por escrito o acordar una mediación previa. Si una cláusula de arbitraje choca con el proceso de aviso, manda la ley.' },
        { type: 'p', text: 'Para la visión del dueño, vea [garantía del constructor y seguro de casa](/es/blog/builder-warranty-vs-homeowners-insurance-florida). Para su propia cobertura, vea [seguro para contratistas en Florida](/es/contractor-insurance-florida) y [responsabilidad civil general](/es/insurance/general-liability). Guarde el [certificado de seguro](/es/blog/certificate-of-insurance-contractors-florida) o la [exención de workers’ comp](/es/blog/workers-comp-exemption-florida-construction) de cada subcontratista.' },
        { type: 'callout', title: '¿Recibió un aviso o quiere revisar su cobertura de responsabilidad?', text: '[Pida una cotización](/es/quote) o llame al [(305) 859-3953](' + TEL + '). Un agente con licencia revisa su póliza con usted en español, inglés o ruso. La cobertura depende de su póliza. Esto es información general, no asesoría legal; si recibió un aviso, consulte con un abogado cómo responder.' },
      ],
      faq: [
        { q: '¿Cuánto tiempo tiene un contratista para responder a un aviso del Capítulo 558?', a: 'La respuesta por escrito vence 45 días después de la entrega del aviso, o 75 días cuando reclama una asociación que representa más de 20 parcelas.' },
        { q: '¿Un aviso del Capítulo 558 es una demanda?', a: 'No. Es un aviso obligatorio antes de demandar. El dueño debe enviarlo y darle al contratista la oportunidad de inspeccionar y responder antes de presentar una acción por un defecto de construcción.' },
        { q: '¿Debo enviarle el aviso 558 a mi compañía de seguros?', a: 'La ley de Florida dice que enviarle copia a su aseguradora no es un reclamo, salvo que la póliza diga otra cosa, pero las condiciones de su póliza siguen aplicando. Revise su póliza y hable pronto con su agente.' },
        { q: '¿El aviso 558 alarga el plazo de 7 años?', a: 'No. El aviso suspende por un tiempo el plazo de prescripción, pero la ley dice que no suspende el plazo de caducidad (statute of repose).' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 558.001 (2026): declaración legislativa (en inglés)', url: S.s558001 },
        { label: 'Estatutos de Florida, sección 558.002 (2026): definiciones (en inglés)', url: S.s558002 },
        { label: 'Estatutos de Florida, sección 558.003 (2026): acción; cumplimiento (en inglés)', url: S.s558003 },
        { label: 'Estatutos de Florida, sección 558.004 (2026): aviso y oportunidad de reparar (en inglés)', url: S.s558004 },
        { label: 'Estatutos de Florida, sección 558.005 (2026): cláusulas del contrato; aplicación (en inglés)', url: S.s558005 },
        { label: 'Estatutos de Florida, sección 95.11 (2026): plazos para demandar (en inglés)', url: S.s9511 },
      ],
    },
    ru: {
      title: 'Пришло уведомление по Chapter 558? Сроки по претензии о строительном дефекте для подрядчика во Флориде',
      metaTitle: 'Уведомление Chapter 558 во Флориде: сроки | M&K Agency',
      description: 'Уведомление по Chapter 558 во Флориде: сроки 10, 15, 30 и 45 дней, пять вариантов ответа, предельный срок 7 лет и когда сообщать страховой.',
      ogAlt: 'Дом во Флориде с трещиной в стене под лупой, запечатанный конверт, календарь, секундомер и планшет',
      excerpt: 'Уведомление по Chapter 558 — ещё не иск, но отсчёт сроков начинается в день его вручения. Сроки по ст. 558.004, пять вариантов ответа, как уведомление влияет на сроки давности и почему агенту стоит увидеть его сразу.',
      category: 'Страхование подрядчиков',
      body: [
        { type: 'p', text: 'В письме написано: «notice of claim under Chapter 558». Бывший заказчик, новый владелец дома или ассоциация кондоминиума утверждает, что в вашей стройке или ремонте есть дефект. Это ещё не иск. Во Флориде владелец обязан сначала направить такое уведомление и дать вам возможность осмотреть объект и ответить, и только **потом** подавать в суд; иск, поданный в обход этой процедуры, суд приостановит ([ст. 558.003](' + S.s558003 + ')). Законодатель прямо пишет, что процедура нужна, чтобы подрядчик **и его страховая** могли урегулировать претензию в конфиденциальных переговорах ([ст. 558.001](' + S.s558001 + ')). Поэтому ближайшие недели решают многое.' },
        { type: 'h2', text: 'Что считается строительным дефектом' },
        { type: 'p', text: 'Chapter 558 называет дефектом недостаток проекта, планирования, надзора, строительства, ремонта или реконструкции недвижимости, вызванный дефектными материалами, нарушением строительного кодекса, проектом ниже профессиональных стандартов или работой, не соответствующей принятым в отрасли нормам ([ст. 558.002](' + S.s558002 + ')). Процедура касается претензий об ущербе имуществу; претензии о травмах сюда не входят. До завершения объекта, то есть обычно до выдачи certificate of occupancy, уведомление не требуется.' },
        { type: 'h2', text: 'Что должно быть в уведомлении' },
        { type: 'ul', items: [
          '**Срок:** не позднее чем за 60 дней до подачи иска, или за 120 дней, если заявитель — ассоциация, представляющая более 20 участков ([ст. 558.004(1)](' + S.s558004 + ')).',
          '**Кому:** если работа велась по договору, уведомление направляют тому, с кем владелец заключал договор.',
          '**Содержание:** ссылка на Chapter 558, разумно подробное описание каждого дефекта и его местоположение — как минимум по результатам визуального осмотра.',
          '**Вручение:** заказным письмом с почтовым подтверждением доставки или попытки доставки, лично или курьером с письменным подтверждением. Запишите дату получения: сроки считаются от неё.',
        ] },
        { type: 'h2', text: 'Сроки по шагам' },
        { type: 'p', text: 'Дни считаются с момента вручения уведомления. Цифры в скобках — для случаев, когда претензию подаёт ассоциация, представляющая более 20 участков ([ст. 558.004](' + S.s558004 + ')).' },
        { type: 'ol', items: [
          '**В течение 10 дней (30):** вы можете переслать копию уведомления каждому субподрядчику, поставщику или проектировщику, которого обоснованно считаете ответственным, указав конкретный дефект. Пересылка не является признанием вины.',
          '**В течение 15 дней (30) после получения копии:** каждый из них обязан прислать вам письменный ответ с результатами осмотра и своим предложением или позицией.',
          '**В течение 30 дней (50):** вы вправе осмотреть объект. Владелец должен обеспечить разумный доступ в рабочее время. Разрушающие испытания возможны только по письменному уведомлению с их описанием и по согласию сторон; если владелец возражает против выбранного исполнителя, вы предлагаете список из трёх квалифицированных специалистов.',
          '**В течение 45 дней (75):** вы обязаны вручить письменный ответ тому, кто подписал уведомление.',
        ] },
        { type: 'p', text: 'Любая сторона может запросить чертежи, фото и видео, заключения экспертов, договоры субподряда, заказы на материалы и записи об обслуживании. Запрос должен ссылаться на закон и содержать предложение оплатить разумные расходы на копии; у другой стороны есть 30 дней на ответ.' },
        { type: 'h2', text: 'Пять вариантов ответа' },
        { type: 'p', text: 'Письменный ответ должен содержать один или несколько из них ([ст. 558.004(5)](' + S.s558004 + ')):' },
        { type: 'ul', items: [
          'Предложение **устранить дефект** без затрат для заявителя, с подробным описанием работ и графиком.',
          'Предложение **выплатить** сумму для урегулирования, с графиком. Закон оговаривает, что такое предложение не обязывает вашу страховую.',
          '**Комбинацию** ремонта и выплаты — она тоже не обязывает страховую.',
          'Заявление, что вы **оспариваете** претензию.',
          'Заявление, что решение о выплате примет ваша **страховая компания** в течение 30 дней после уведомления. Претензию вручают страховой одновременно с этим ответом. Если страховая за 30 дней не ответит, владелец может идти в суд.',
        ] },
        { type: 'p', text: 'Если вы оспариваете претензию или пропускаете срок, владелец может подать иск без дополнительного уведомления. Если вы вовремя сделали предложение, у владельца есть 45 дней, чтобы письменно его принять или отклонить. Если он принял предложение о ремонте, он обязан пустить вас на объект в рабочее время, а выполненный в согласованный срок ремонт или выплата закрывает возможность иска по этой претензии. Предложение или его отсутствие не является признанием ответственности и не может использоваться как доказательство в суде.' },
        { type: 'h2', text: 'При чём здесь страховка' },
        { type: 'p', text: 'Согласно [ст. 558.004(13)](' + S.s558004 + '), отправка копии уведомления страховой **не считается страховым клеймом**, если в полисе не сказано иное. Но все условия вашего полиса ответственности при этом продолжают действовать. На практике:' },
        { type: 'ol', items: [
          'Позвоните агенту в тот же день, когда пришло уведомление, и пришлите копию вместе с договором по этому объекту, чтобы найти нужный полис и период страхования. Старый объект может относиться к прошлому полису.',
          'Прочитайте **условия об уведомлении и клеймах** в полисе general liability. Многие полисы требуют сообщать о возможных претензиях без промедления и не обещать выплат от имени страховой.',
          'Ведите одну папку: уведомление, дата и способ вручения, все ваши письма, фото, разрешение и certificate of occupancy, договоры субподряда и страховые сертификаты субподрядчиков.',
          'Сработает ли полис по конкретному дефекту, зависит от его условий. Это вопрос к тексту полиса и, при необходимости, к юристу.',
        ] },
        { type: 'h2', text: 'Сроки давности: уведомление останавливает одни часы, но не другие' },
        { type: 'p', text: 'Иск по проектированию или строительству объекта недвижимости обычно нужно подать в течение 4 лет с даты certificate of occupancy, certificate of completion или прекращения стройки, а для скрытого дефекта — с момента, когда его обнаружили. В любом случае — не позднее 7 лет с этой даты (statute of repose), и гарантийный ремонт завершённой работы по разрешению этот срок не продлевает ([ст. 95.11(3)(b)](' + S.s9511 + ')). Уведомление по Chapter 558 приостанавливает 4-летний срок до более поздней из дат: 90 дней (120 для больших ассоциаций) после вручения или 30 дней после окончания принятого срока ремонта или выплаты ([ст. 558.004(10)](' + S.s558004 + ')). Семилетний срок оно **не** останавливает.' },
        { type: 'h2', text: 'Проверьте договор' },
        { type: 'p', text: 'С 1 октября 2009 года договор между владельцем и подрядчиком должен содержать оговорку о том, что претензии по строительным дефектам подпадают под Chapter 558, если стороны не договорились иначе; за её отсутствие штрафа нет ([ст. 558.005](' + S.s558005 + ')). Стороны могут письменно отказаться от процедуры или договориться о досудебной медиации. Если арбитражная оговорка противоречит процедуре уведомления, действует закон.' },
        { type: 'p', text: 'Владельцы домов проходят ту же процедуру с другой стороны; для них — наша статья о [гарантии застройщика и страховке дома](/ru/blog/builder-warranty-vs-homeowners-insurance-florida). О вашей собственной защите — на страницах [страхование подрядчиков во Флориде](/ru/contractor-insurance-florida) и [general liability](/ru/insurance/general-liability). Если у вас на руках [страховой сертификат](/ru/blog/certificate-of-insurance-contractors-florida) от каждого субподрядчика или его действующее [освобождение от workers’ comp](/ru/blog/workers-comp-exemption-florida-construction), папка будет готова, если уведомление когда-нибудь придёт.' },
        { type: 'callout', title: 'Пришло уведомление или хотите проверить страховку ответственности?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните по номеру [(305) 859-3953](' + TEL + '). Лицензированный агент разберёт ваш полис на русском, английском или испанском. Покрытие зависит от условий полиса. Это общая информация, а не юридическая консультация; если вы получили уведомление, обсудите ответ с юристом.' },
      ],
      faq: [
        { q: 'Сколько времени у подрядчика на ответ по Chapter 558?', a: 'Письменный ответ нужно вручить в течение 45 дней после вручения уведомления или 75 дней, если заявитель — ассоциация, представляющая более 20 участков.' },
        { q: 'Уведомление по Chapter 558 — это иск?', a: 'Нет. Это обязательное досудебное уведомление. Владелец должен его направить и дать подрядчику возможность осмотреть объект и ответить, прежде чем подавать иск из-за строительного дефекта.' },
        { q: 'Нужно ли отправлять уведомление 558 в страховую?', a: 'По закону Флориды отправка копии страховой не считается клеймом, если в полисе не сказано иное, но условия полиса продолжают действовать. Проверьте полис и сразу свяжитесь с агентом.' },
        { q: 'Продлевает ли уведомление 558 срок в 7 лет?', a: 'Нет. Уведомление на время приостанавливает срок исковой давности, но закон прямо говорит, что предельный срок (statute of repose) оно не останавливает.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 558.001 (2026): цели закона (на английском)', url: S.s558001 },
        { label: 'Законы Флориды, ст. 558.002 (2026): определения (на английском)', url: S.s558002 },
        { label: 'Законы Флориды, ст. 558.003 (2026): иск; соблюдение процедуры (на английском)', url: S.s558003 },
        { label: 'Законы Флориды, ст. 558.004 (2026): уведомление и возможность устранить дефект (на английском)', url: S.s558004 },
        { label: 'Законы Флориды, ст. 558.005 (2026): условия договора; применение (на английском)', url: S.s558005 },
        { label: 'Законы Флориды, ст. 95.11 (2026): сроки исковой давности (на английском)', url: S.s9511 },
      ],
    },
  },
};
