import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against the 2026 Florida Statutes on flsenate.gov:
// - s. 558.002 (definitions: "action" excludes personal injury claims; "construction defect").
// - s. 558.003 (claimant must comply first; court stays a non-compliant action; notice not
//   required before completion of the building or improvement).
// - s. 558.004 (60/120 days before suit; (2) inspection within 30/50 days, destructive testing
//   by mutual agreement; (3) may forward copy to subs/suppliers/design professionals within
//   10/30 days, not an admission; (4) they respond within 15/30 days; (5) written response to
//   claimant within 45/75 days: repair offer, money offer, combination, dispute, or statement
//   that the insurer will decide within 30 days; (6) dispute or no response -> claimant may
//   sue; (7) claimant accepts/rejects within 45 days; (9) offers not an admission;
//   (1)(d) notice does not toll repose; (10) tolls limitations; (13) copy to insurer is not a
//   claim unless the policy says otherwise, but policy conditions still apply; (15) document
//   exchange within 30 days of a written request).
// - s. 558.005 (opt-out in writing).
// The homeowner side is covered in builder-warranty-vs-homeowners-insurance-florida.
const S = {
  s558002: 'https://www.flsenate.gov/Laws/Statutes/2026/558.002',
  s558003: 'https://www.flsenate.gov/Laws/Statutes/2026/558.003',
  s558004: 'https://www.flsenate.gov/Laws/Statutes/2026/558.004',
  s558005: 'https://www.flsenate.gov/Laws/Statutes/2026/558.005',
};

export const post: BlogPost = {
  slug: 'chapter-558-notice-contractors-florida',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Got a Chapter 558 Notice? A Florida Contractor’s Guide to the Defect Claim Deadlines',
      metaTitle: 'Chapter 558 Notice: A Guide for Florida Contractors | M&K Agency',
      description: 'A Florida contractor’s guide to a Chapter 558 defect notice: what it is, the 10, 15, 30 and 45-day deadlines, response options and when to tell your insurer.',
      excerpt: 'A Chapter 558 notice is not a lawsuit, but the clock starts the day it is served. What the notice means for a contractor, the deadlines in s. 558.004, the five ways to respond, and where your insurance fits in.',
      category: 'Contractor insurance',
      body: [
        { type: 'p', text: 'The letter says it is a “notice of claim under Chapter 558.” A past client, a homeowner who bought from your client, or a condo association says something you built or remodeled is defective. It is not a lawsuit yet. Florida requires owners to send this notice and give you a chance to respond **before** they can sue over a construction defect ([s. 558.003](' + S.s558003 + ')). What you do in the next few weeks matters.' },
        { type: 'h2', text: 'What counts as a construction defect' },
        { type: 'p', text: 'Chapter 558 defines a construction defect as a deficiency in design, construction, repair, alteration or remodeling that results from defective materials, a building code violation, a design that fails professional standards, or work that does not meet accepted trade standards ([s. 558.002](' + S.s558002 + ')). The process covers claims for damage to property. Personal injury claims are not part of it.' },
        { type: 'h2', text: 'The deadlines, step by step' },
        { type: 'p', text: 'The days below run from when the notice is served on you. The numbers in parentheses apply when the claimant is an association representing more than 20 parcels ([s. 558.004](' + S.s558004 + ')).' },
        { type: 'ol', items: [
          '**Within 10 days (30):** you may forward a copy of the notice to each subcontractor, supplier or design professional you believe is responsible, noting the specific defect. Forwarding it is not an admission.',
          '**Within 15 days (30) of receiving that copy:** each of them must send you a written response with their inspection findings and their offer or position.',
          '**Within 30 days (50):** you may inspect the property. The owner must give reasonable access during normal working hours. Destructive testing requires written notice and mutual agreement.',
          '**Within 45 days (75):** you must send the claimant a written response.',
        ] },
        { type: 'p', text: 'Either side can also ask for documents such as plans, photos, expert reports, subcontracts and maintenance records. The request must cite the statute, and the other side has 30 days to produce them.' },
        { type: 'h2', text: 'Your five response options' },
        { type: 'p', text: 'The written response must contain one or more of these ([s. 558.004(5)](' + S.s558004 + ')):' },
        { type: 'ul', items: [
          'An offer to **repair** at no cost to the claimant, with a description of the work and a timetable.',
          'An offer to **pay** a settlement amount, with a timetable.',
          'A **combination** of repairs and payment.',
          'A statement that you **dispute** the claim.',
          'A statement that your **insurer** will decide on any payment within 30 days after it is notified.',
        ] },
        { type: 'p', text: 'If you dispute the claim or miss the deadline, the claimant can file suit without further notice. If you make a timely offer, the claimant has 45 days to accept or reject it in writing. The statute says an offer, or the lack of one, is not an admission of liability.' },
        { type: 'h2', text: 'Where your insurance comes in' },
        { type: 'p', text: 'Under [s. 558.004(13)](' + S.s558004 + '), sending a copy of the notice to your insurer is **not a claim** for insurance purposes unless the policy says otherwise. The same subsection keeps every notice condition of your liability policy in force. In practice:' },
        { type: 'ol', items: [
          'Read the **notice and claim conditions** in your general liability policy. Many policies ask you to report potential claims promptly.',
          'Send your agent a copy of the notice and the contract for the job, so the right policy and policy period can be identified.',
          'Keep a file with the notice, the dates you received and sent each document, photos and your subcontracts.',
          'Whether a policy responds to a particular defect depends on its terms. That is a question for the policy wording and, if needed, an attorney.',
        ] },
        { type: 'p', text: 'Two more points from the statute. Some contracts opt out of Chapter 558 in writing ([s. 558.005](' + S.s558005 + ')), so check yours. And serving the notice pauses the statute of limitations for a period, but not the statute of repose.' },
        { type: 'p', text: 'Homeowners see the same process from the other side; our article on [builder warranties and homeowners insurance](/en/blog/builder-warranty-vs-homeowners-insurance-florida) explains it for them. For coverage built around your trade, see our [contractor insurance page](/en/contractor-insurance-florida).' },
        { type: 'callout', title: 'Questions about your liability coverage?', text: '[Request a quote](/en/quote) or send us your current policy. A licensed agent can go over it with you in English, Spanish or Russian. This is general information, not legal advice; for a notice you have received, talk to an attorney about your response.' },
      ],
      faq: [
        { q: 'How long does a contractor have to respond to a Chapter 558 notice?', a: 'Generally 45 days after the notice is served, or 75 days when the claimant is an association representing more than 20 parcels.' },
        { q: 'Is a Chapter 558 notice a lawsuit?', a: 'No. It is a required pre-suit notice. The owner must send it, and give the contractor a chance to inspect and respond, before filing an action over a construction defect.' },
        { q: 'Should I send the 558 notice to my insurance company?', a: 'Florida law says sending a copy to your insurer is not a claim unless the policy says otherwise, but your policy’s notice conditions still apply. Check your policy and talk to your agent promptly.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 558.002 (2026): definitions', url: S.s558002 },
        { label: 'Florida Statutes s. 558.003 (2026): action; compliance', url: S.s558003 },
        { label: 'Florida Statutes s. 558.004 (2026): notice and opportunity to repair', url: S.s558004 },
        { label: 'Florida Statutes s. 558.005 (2026): contract provisions; opting out', url: S.s558005 },
      ],
    },
    es: {
      title: '¿Recibió un aviso del Capítulo 558? Guía para contratistas sobre los plazos de un reclamo por defectos en Florida',
      metaTitle: 'Aviso del Capítulo 558: guía para contratistas | M&K Agency',
      description: 'Aviso del Capítulo 558 para contratistas en Florida: qué es, los plazos de 10, 15, 30 y 45 días, cómo responder y cuándo avisar a su aseguradora.',
      excerpt: 'Un aviso del Capítulo 558 no es una demanda, pero el reloj empieza a correr el día que se lo entregan. Qué significa para un contratista, los plazos de la sección 558.004, las cinco formas de responder y el papel de su seguro.',
      category: 'Seguro para contratistas',
      body: [
        { type: 'p', text: 'La carta dice que es un “notice of claim under Chapter 558”. Un cliente anterior, alguien que le compró la casa a su cliente o una asociación de condominio dice que algo que usted construyó o remodeló tiene un defecto. Todavía no es una demanda. Florida exige que el dueño envíe este aviso y le dé la oportunidad de responder **antes** de demandar por un defecto de construcción ([sección 558.003](' + S.s558003 + ')). Lo que haga en las próximas semanas cuenta.' },
        { type: 'h2', text: 'Qué se considera un defecto de construcción' },
        { type: 'p', text: 'El Capítulo 558 define el defecto de construcción como una deficiencia en el diseño, la construcción, la reparación, la alteración o la remodelación causada por materiales defectuosos, una violación del código de construcción, un diseño que no cumple los estándares profesionales o un trabajo que no cumple los estándares aceptados del oficio ([sección 558.002](' + S.s558002 + ')). El proceso cubre reclamos por daños a la propiedad; los reclamos por lesiones personales no entran.' },
        { type: 'h2', text: 'Los plazos, paso a paso' },
        { type: 'p', text: 'Los días se cuentan desde que le entregan el aviso. Los números entre paréntesis aplican cuando quien reclama es una asociación que representa más de 20 parcelas ([sección 558.004](' + S.s558004 + ')).' },
        { type: 'ol', items: [
          '**En 10 días (30):** puede enviar copia del aviso a cada subcontratista, proveedor o profesional de diseño que considere responsable, indicando el defecto específico. Enviarla no es admitir nada.',
          '**En 15 días (30) desde que reciben esa copia:** cada uno debe enviarle una respuesta por escrito con lo que encontró en su inspección y su oferta o postura.',
          '**En 30 días (50):** puede inspeccionar la propiedad. El dueño debe darle acceso razonable en horario normal de trabajo. Las pruebas destructivas requieren aviso por escrito y acuerdo de ambas partes.',
          '**En 45 días (75):** debe enviarle al reclamante una respuesta por escrito.',
        ] },
        { type: 'p', text: 'Cualquiera de las partes puede pedir documentos como planos, fotos, informes de expertos, subcontratos y registros de mantenimiento. La solicitud debe citar la ley, y la otra parte tiene 30 días para entregarlos.' },
        { type: 'h2', text: 'Sus cinco opciones de respuesta' },
        { type: 'p', text: 'La respuesta por escrito debe incluir una o más de estas ([sección 558.004(5)](' + S.s558004 + ')):' },
        { type: 'ul', items: [
          'Una oferta de **reparar** sin costo para el reclamante, con la descripción del trabajo y un calendario.',
          'Una oferta de **pagar** una suma para cerrar el reclamo, con un calendario.',
          'Una **combinación** de reparación y pago.',
          'Una declaración de que usted **disputa** el reclamo.',
          'Una declaración de que su **aseguradora** decidirá si hay pago dentro de los 30 días después de ser notificada.',
        ] },
        { type: 'p', text: 'Si disputa el reclamo o no responde a tiempo, el reclamante puede demandar sin más aviso. Si hace una oferta a tiempo, el reclamante tiene 45 días para aceptarla o rechazarla por escrito. La ley aclara que hacer una oferta, o no hacerla, no es una admisión de responsabilidad.' },
        { type: 'h2', text: 'Dónde entra su seguro' },
        { type: 'p', text: 'Según la [sección 558.004(13)](' + S.s558004 + '), enviarle copia del aviso a su aseguradora **no cuenta como reclamo** de seguro, salvo que la póliza diga otra cosa. Esa misma subsección mantiene vigentes todas las condiciones de aviso de su póliza de responsabilidad. En la práctica:' },
        { type: 'ol', items: [
          'Lea las **condiciones de aviso y de reclamo** de su póliza de responsabilidad general. Muchas pólizas piden reportar pronto cualquier posible reclamo.',
          'Mándele a su agente copia del aviso y del contrato de esa obra, para identificar la póliza y el período que corresponden.',
          'Guarde un expediente con el aviso, las fechas en que recibió y envió cada documento, las fotos y sus subcontratos.',
          'Si una póliza responde o no por un defecto concreto depende de sus términos. Eso lo dice la póliza y, si hace falta, un abogado.',
        ] },
        { type: 'p', text: 'Dos puntos más de la ley. Algunos contratos excluyen el Capítulo 558 por escrito ([sección 558.005](' + S.s558005 + ')); revise el suyo. Y el aviso suspende por un tiempo el plazo de prescripción, pero no el plazo de caducidad (statute of repose).' },
        { type: 'p', text: 'Los dueños de casa viven el mismo proceso desde el otro lado; nuestro artículo sobre [garantía del constructor y seguro de casa](/es/blog/builder-warranty-vs-homeowners-insurance-florida) se lo explica a ellos. Para coberturas pensadas para su oficio, vea nuestra [página de seguro para contratistas](/es/contractor-insurance-florida).' },
        { type: 'callout', title: '¿Dudas sobre su cobertura de responsabilidad?', text: '[Pida una cotización](/es/quote) o envíenos su póliza actual. Un agente con licencia la revisa con usted en español, inglés o ruso. Esto es información general, no asesoría legal; si recibió un aviso, consulte con un abogado cómo responder.' },
      ],
      faq: [
        { q: '¿Cuánto tiempo tiene un contratista para responder a un aviso del Capítulo 558?', a: 'Por lo general, 45 días desde que le entregan el aviso, o 75 días cuando el reclamante es una asociación que representa más de 20 parcelas.' },
        { q: '¿Un aviso del Capítulo 558 es una demanda?', a: 'No. Es un aviso obligatorio antes de demandar. El dueño debe enviarlo, y darle al contratista la oportunidad de inspeccionar y responder, antes de presentar una acción por un defecto de construcción.' },
        { q: '¿Debo enviarle el aviso 558 a mi compañía de seguros?', a: 'La ley de Florida dice que enviarle copia a su aseguradora no es un reclamo, salvo que la póliza diga otra cosa, pero las condiciones de aviso de su póliza siguen aplicando. Revise su póliza y hable pronto con su agente.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 558.002 (2026): definiciones (en inglés)', url: S.s558002 },
        { label: 'Estatutos de Florida, sección 558.003 (2026): acción; cumplimiento (en inglés)', url: S.s558003 },
        { label: 'Estatutos de Florida, sección 558.004 (2026): aviso y oportunidad de reparar (en inglés)', url: S.s558004 },
        { label: 'Estatutos de Florida, sección 558.005 (2026): cláusulas del contrato; exclusión (en inglés)', url: S.s558005 },
      ],
    },
    ru: {
      title: 'Пришло уведомление по Chapter 558? Сроки по претензии о строительном дефекте для подрядчика во Флориде',
      metaTitle: 'Уведомление Chapter 558: памятка подрядчику | M&K Agency',
      description: 'Уведомление о дефекте по Chapter 558 для подрядчика во Флориде: что это, сроки 10, 15, 30 и 45 дней, варианты ответа и когда сообщать страховой.',
      excerpt: 'Уведомление по Chapter 558 — ещё не иск, но отсчёт сроков начинается в день его вручения. Что оно значит для подрядчика, какие сроки устанавливает ст. 558.004, пять вариантов ответа и при чём здесь страховка.',
      category: 'Страхование подрядчиков',
      body: [
        { type: 'p', text: 'В письме написано: «notice of claim under Chapter 558». Бывший заказчик, новый владелец дома или ассоциация кондоминиума утверждает, что в вашей стройке или ремонте есть дефект. Это ещё не иск. Флорида требует, чтобы владелец сначала направил такое уведомление и дал вам возможность ответить, и только **потом** подавал в суд из-за строительного дефекта ([ст. 558.003](' + S.s558003 + ')). То, что вы сделаете в ближайшие недели, имеет значение.' },
        { type: 'h2', text: 'Что считается строительным дефектом' },
        { type: 'p', text: 'Chapter 558 определяет строительный дефект как недостаток проекта, строительства, ремонта, перепланировки или реконструкции, вызванный дефектными материалами, нарушением строительного кодекса, проектом ниже профессиональных стандартов или работой, не соответствующей принятым в отрасли нормам ([ст. 558.002](' + S.s558002 + ')). Процедура касается претензий об ущербе имуществу; претензии о травмах сюда не входят.' },
        { type: 'h2', text: 'Сроки по шагам' },
        { type: 'p', text: 'Дни считаются с момента вручения вам уведомления. Цифры в скобках — для случаев, когда претензию подаёт ассоциация, представляющая более 20 участков ([ст. 558.004](' + S.s558004 + ')).' },
        { type: 'ol', items: [
          '**В течение 10 дней (30):** вы можете переслать копию уведомления каждому субподрядчику, поставщику или проектировщику, которого считаете ответственным, указав конкретный дефект. Пересылка не является признанием вины.',
          '**В течение 15 дней (30) после получения копии:** каждый из них обязан прислать вам письменный ответ с результатами осмотра и своим предложением или позицией.',
          '**В течение 30 дней (50):** вы вправе осмотреть объект. Владелец должен обеспечить разумный доступ в рабочее время. Разрушающие испытания — только с письменным уведомлением и по согласию сторон.',
          '**В течение 45 дней (75):** вы обязаны направить заявителю письменный ответ.',
        ] },
        { type: 'p', text: 'Любая сторона может запросить документы: чертежи, фото, заключения экспертов, договоры субподряда, записи об обслуживании. Запрос должен ссылаться на закон, и у другой стороны есть 30 дней, чтобы их предоставить.' },
        { type: 'h2', text: 'Пять вариантов ответа' },
        { type: 'p', text: 'Письменный ответ должен содержать один или несколько из них ([ст. 558.004(5)](' + S.s558004 + ')):' },
        { type: 'ul', items: [
          'Предложение **устранить дефект** без затрат для заявителя, с описанием работ и графиком.',
          'Предложение **выплатить** сумму для урегулирования, с графиком.',
          '**Комбинацию** ремонта и выплаты.',
          'Заявление, что вы **оспариваете** претензию.',
          'Заявление, что решение о выплате примет ваша **страховая компания** в течение 30 дней после уведомления.',
        ] },
        { type: 'p', text: 'Если вы оспариваете претензию или пропускаете срок, заявитель может подать иск без дополнительного уведомления. Если вы вовремя сделали предложение, у заявителя есть 45 дней, чтобы письменно принять его или отклонить. Закон прямо говорит, что предложение или его отсутствие не является признанием ответственности.' },
        { type: 'h2', text: 'При чём здесь страховка' },
        { type: 'p', text: 'Согласно [ст. 558.004(13)](' + S.s558004 + '), отправка копии уведомления страховой **не считается страховым клеймом**, если в полисе не сказано иное. При этом все условия об уведомлении в вашем полисе ответственности продолжают действовать. На практике:' },
        { type: 'ol', items: [
          'Прочитайте **условия об уведомлении и клеймах** в полисе general liability. Многие полисы требуют сообщать о возможных претензиях без промедления.',
          'Пришлите агенту копию уведомления и договор по этому объекту, чтобы определить нужный полис и период страхования.',
          'Ведите папку: уведомление, даты получения и отправки каждого документа, фото, договоры с субподрядчиками.',
          'Сработает ли полис по конкретному дефекту, зависит от его условий. Это вопрос к тексту полиса и, при необходимости, к юристу.',
        ] },
        { type: 'p', text: 'Ещё два момента из закона. В некоторых договорах стороны письменно отказываются от процедуры Chapter 558 ([ст. 558.005](' + S.s558005 + ')) — проверьте свой. И вручение уведомления на время приостанавливает срок исковой давности (statute of limitations), но не предельный срок (statute of repose).' },
        { type: 'p', text: 'Владельцы домов проходят ту же процедуру с другой стороны; для них — наша статья о [гарантии застройщика и страховке дома](/ru/blog/builder-warranty-vs-homeowners-insurance-florida). Страхование под вашу профессию — на [странице для подрядчиков](/ru/contractor-insurance-florida).' },
        { type: 'callout', title: 'Вопросы по страховке ответственности?', text: '[Оставьте заявку на расчёт](/ru/quote) или пришлите нам текущий полис. Лицензированный агент разберёт его с вами на русском, английском или испанском. Это общая информация, а не юридическая консультация; если вы получили уведомление, обсудите ответ с юристом.' },
      ],
      faq: [
        { q: 'Сколько времени у подрядчика на ответ по Chapter 558?', a: 'Как правило, 45 дней с момента вручения уведомления или 75 дней, если заявитель — ассоциация, представляющая более 20 участков.' },
        { q: 'Уведомление по Chapter 558 — это иск?', a: 'Нет. Это обязательное досудебное уведомление. Владелец должен его направить и дать подрядчику возможность осмотреть объект и ответить, прежде чем подавать иск из-за строительного дефекта.' },
        { q: 'Нужно ли отправлять уведомление 558 в страховую?', a: 'По закону Флориды отправка копии страховой не считается клеймом, если в полисе не сказано иное, но условия полиса об уведомлении продолжают действовать. Проверьте полис и сразу свяжитесь с агентом.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 558.002 (2026): определения (на английском)', url: S.s558002 },
        { label: 'Законы Флориды, ст. 558.003 (2026): иск; соблюдение процедуры (на английском)', url: S.s558003 },
        { label: 'Законы Флориды, ст. 558.004 (2026): уведомление и возможность устранить дефект (на английском)', url: S.s558004 },
        { label: 'Законы Флориды, ст. 558.005 (2026): условия договора; отказ от процедуры (на английском)', url: S.s558005 },
      ],
    },
  },
};
