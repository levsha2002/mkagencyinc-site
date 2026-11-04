import type { BlogPost } from '../types';

// Facts re-checked 2026-11-04 against the 2026 Florida Statutes on leg.state.fl.us
// (Online Sunshine) and the NAIC glossary. Raw excerpts: /workspace/buildersrisk/.
// - s. 553.79(1)(c): local gov may send written notice of expiration ≥30 days before
//   a permit expires (email or USPS) to owner + listed contractor; SF dwelling permit
//   expires 1 year after issuance or on the effective date of the next Florida Building
//   Code edition, whichever is later; local gov may extend.
// - s. 553.79(16): owner may close a permit with the original or a different licensed
//   contractor (new contractor not liable for the original's defects) or as owner-builder;
//   expired permit with requirements substantially completed may be closed without a new
//   permit under the code in effect at application; agency may close a permit 6 years after
//   issuance absent apparent safety hazards.
// - s. 489.129(1)(j): abandonment presumption after 90 days (terminate without just cause
//   or proper notice, or no work without just cause for 90 consecutive days).
// - s. 713.13: notice of commencement before commencing or recommencing after default/
//   abandonment; void if work not commenced within 90 days of recording; default 1-year
//   effective period; payments after expiration are improper; change of contractor requires
//   a new NOC or notice of recommencement.
// - NAIC glossary: builders' risk covers buildings in the course of construction, plus
//   machinery/equipment and materials incidental to construction (reporting or completed
//   value form).
// Builders risk policy terms: deliberately general (policies differ; we review the actual
// policy). No universal vacancy/stoppage terms are stated.
const S = {
  s55379: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.79.html',
  s489129: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0489/Sections/0489.129.html',
  s71313: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0713/Sections/0713.13.html',
  naic: 'https://content.naic.org/glossary-insurance-terms',
};

export const post: BlogPost = {
  slug: 'construction-stalls-builders-risk-florida',
  datePublished: '2026-10-04',
  dateModified: '2026-11-04',
  translations: {
    en: {
      title: 'When a Florida Construction Project Stalls: Permits, Liens and Your Builders Risk Policy',
      metaTitle: 'Stalled Construction & Builders Risk in Florida | M&K Agency',
      description: 'Project on hold in Florida? When a single-family permit can expire, what notice of commencement and abandonment rules mean, and what to check in your builders risk policy.',
      ogAlt: 'Paused construction site with a house frame, idle crane, traffic cones, clipboard and shield',
      excerpt: 'Financing, a contractor dispute or a storm can stop a project for months. What Florida law says about expiring permits, notice of commencement and abandoned jobs — and the builders risk questions to ask while the site sits empty.',
      category: 'Builders risk insurance',
      body: [
        { type: 'p', text: 'Construction loans get delayed, contractors leave, materials run late, and hurricane season can push a schedule back for weeks. When work stops, the half-built house or building is still standing on the lot. Four practical questions come up: what happens to the permit, what a notice of commencement means if work pauses or a new contractor steps in, what you can do if the contractor walked away, and whether your builders risk policy still fits the project.' },
        { type: 'h2', text: 'Your building permit has a clock' },
        { type: 'p', text: 'For a **single-family home**, Florida law says a building permit expires **1 year after it is issued**, or on the effective date of the next edition of the Florida Building Code, whichever is later. The local government may extend it. It may also send the owner and the contractor listed on the permit a written notice — by e-mail or U.S. mail — at least 30 days before the permit expires, identifying the permit and the expiration date ([s. 553.79(1)(c)](' + S.s55379 + ')). For other buildings, and for how your city or county handles extensions, check with your local building department.' },
        { type: 'p', text: 'If a permit expires, the law gives owners some ways to **close** it ([s. 553.79(16)](' + S.s55379 + ')):' },
        { type: 'ul', items: [
          'You can keep the original contractor or hire **another licensed contractor** to finish what the permit requires. The new contractor is liable only for its own work, not for defects in the original contractor’s work.',
          'You can take over as an **owner-builder**, under the rules for owner-builders.',
          'If the permit’s requirements were substantially completed, the local agency may close an expired permit **without a new permit**, under the code in effect when the application was received.',
          'A local enforcement agency may close a permit **6 years after issuance**, even without a final inspection, if it finds no apparent safety hazards.',
        ] },
        { type: 'h2', text: 'Notice of commencement when work pauses' },
        { type: 'p', text: 'Florida’s construction-lien law starts with a recorded **notice of commencement** (NOC). Except for improvements that are exempt under the statute, an owner or authorized agent must record an NOC in the clerk’s office **before actually commencing** work — or **before recommencing** after default or abandonment — and post a certified copy (or a notarized statement that the NOC was filed, plus a copy) on the site ([s. 713.13(1)(a)](' + S.s71313 + ')). The statutory form warns that the NOC must be recorded and posted **before the first inspection**, and that payments made after the NOC expires can be treated as improper payments that may leave an owner paying twice for improvements.' },
        { type: 'p', text: 'A few timing rules matter when a job stalls:' },
        { type: 'ul', items: [
          'If the improvement described in the NOC is **not actually commenced within 90 days** after recording, that notice is **void** and of no further effect ([s. 713.13(2)](' + S.s71313 + ')).',
          'Unless the NOC (or a new or amended one) says otherwise, it is generally effective for **1 year** after recording. If the contract calls for completion longer than one year, the NOC must state that it is effective for one year plus the additional period ([s. 713.13(1)(c), (6)](' + S.s71313 + ')).',
          'An NOC recorded within its effective period may be **amended** to extend the period or fix information. To **change contractors**, though, the statute requires a **new notice of commencement or a notice of recommencement** ([s. 713.13(5)(a)](' + S.s71313 + ')).',
        ] },
        { type: 'p', text: 'When a project sits idle, check whether the recorded NOC is still within its effective period, whether work commenced within 90 days of recording, and whether a contractor change needs a new filing before work restarts. Your lender often cares about the same paperwork. This is lien-law timing — not a substitute for counsel.' },

        { type: 'h2', text: 'If the contractor stopped showing up' },
        { type: 'p', text: 'Florida treats abandoning a project as grounds for discipline against a licensed contractor. A project may be **presumed abandoned after 90 days** if the contractor ends it without just cause or without proper notice to the owner (including the reason for termination), or does no work without just cause for 90 consecutive days ([s. 489.129(1)(j)](' + S.s489129 + ')). Disputes about a contract, payments, or liens are legal matters; raise them with an attorney and, where licensing is involved, with the state licensing board.' },
        { type: 'p', text: 'If you hire a replacement contractor, pair the license and permit questions with the NOC or recommencement filing and with updated [certificates of insurance](/en/blog/certificate-of-insurance-contractors-florida). See also [contractor insurance in Florida](/en/contractor-insurance-florida).' },

        { type: 'h2', text: 'Builders risk while the site sits' },
        { type: 'p', text: 'The National Association of Insurance Commissioners describes **builders’ risk** as coverage that typically insures against loss to **buildings in the course of construction**, including machinery, equipment and materials incidental to construction, often on a reporting or completed-value form ([NAIC glossary](' + S.naic + ')). That is high-level only. Policies written for a job in progress are not all the same: some say little about a pause; others have conditions tied to work stopping, an unoccupied site, or how long materials may sit. There is **no single statewide vacancy or stoppage rule** that overrides your wording. Read your policy — or send it to us — and look for:' },
        { type: 'ol', items: [
          '**The policy term.** When does it end, and does that still match the new schedule? Ask what your options are to extend it **before** it expires.',
          '**Conditions about a stoppage or vacancy.** Does the policy mention work stopping, the site being unoccupied, or a time limit? What does it ask you to do?',
          '**Notice.** Does the policy or your lender require you to tell someone when work stops or the schedule changes?',
          '**Named parties.** If a new contractor, lender or owner entity is involved, do the named insured and additional interests still match the job?',
          '**Site security, materials and theft.** Fencing, lighting, locks, removing stored materials — and how theft of on-site materials is treated.',
          '**Your loan and contract.** Construction loans and contracts often set insurance requirements that still apply during a delay.',
        ] },
        { type: 'p', text: 'Keep photos and a written log of the site on the day work stopped and at regular visits. For the product overview, see [builders risk insurance](/en/builders-risk-insurance-florida). When the home is finished, read [builder warranties vs. homeowners insurance](/en/blog/builder-warranty-vs-homeowners-insurance-florida). Contractor liability questions often sit next to [general liability](/en/insurance/general-liability).' },
        { type: 'callout', title: 'Project on hold?', text: '[Request a quote](/en/quote) or call (305) 859-3953. Send us your current builders risk policy and the new schedule. A licensed agent will go over the terms with you in English, Spanish or Russian. This is general information, not legal advice; policies differ, and we review the terms of the actual policy.' },
      ],
      faq: [
        { q: 'When does a building permit expire in Florida?', a: 'For a single-family dwelling, Florida law says the permit expires 1 year after issuance or on the effective date of the next Florida Building Code edition, whichever is later. Local governments may extend it and may send at least 30 days’ written notice before expiration.' },
        { q: 'What is a notice of commencement, and why does it matter if work stops?', a: 'Under s. 713.13, an owner generally must record and post a notice of commencement before starting work, or before recommencing after default or abandonment. The notice can become void if work does not commence within 90 days of recording, usually lasts about one year unless extended, and a change of contractor requires a new notice of commencement or a notice of recommencement. Payments after expiration can be treated as improper payments.' },
        { q: 'When is a construction project considered abandoned in Florida?', a: 'Under s. 489.129(1)(j), a project may be presumed abandoned after 90 days if the contractor ends it without just cause or proper notice, or does no work without just cause for 90 consecutive days.' },
        { q: 'Does builders risk still cover a stalled project?', a: 'It depends on the policy. NAIC describes builders’ risk as coverage for buildings in the course of construction, including related equipment and materials, but individual policies differ on stoppage, vacancy and end dates. Read your policy or send it to us so we can review it.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 553.79 (2026): permits; applications; issuance; inspections (Online Sunshine)', url: S.s55379 },
        { label: 'Florida Statutes s. 489.129 (2026): disciplinary proceedings — abandonment (Online Sunshine)', url: S.s489129 },
        { label: 'Florida Statutes s. 713.13 (2026): notice of commencement (Online Sunshine)', url: S.s71313 },
        { label: 'NAIC Glossary of Insurance Terms: Builders’ Risk Policies', url: S.naic },
      ],
    },
    es: {
      title: 'Cuando una obra se detiene en Florida: permisos, gravámenes y su póliza builders risk',
      metaTitle: 'Obra detenida y builders risk en Florida | M&K Agency',
      description: '¿Obra en pausa en Florida? Cuándo vence el permiso de una casa unifamiliar, qué implica el notice of commencement y el abandono, y qué revisar en su póliza builders risk.',
      ogAlt: 'Obra en pausa con estructura de casa, grúa inactiva, conos, portapapeles y escudo',
      excerpt: 'El financiamiento, un problema con el contratista o una tormenta pueden parar una obra por meses. Qué dice la ley de Florida sobre permisos que vencen, el notice of commencement y obras abandonadas, y qué preguntar sobre su builders risk mientras el terreno está solo.',
      category: 'Seguro builders risk',
      body: [
        { type: 'p', text: 'Los préstamos de construcción se atrasan, los contratistas se van, los materiales llegan tarde y la temporada de huracanes puede correr el calendario por semanas. Cuando la obra se detiene, la casa o el edificio a medio hacer sigue en el terreno. Surgen cuatro preguntas prácticas: qué pasa con el permiso, qué significa el notice of commencement si la obra se pausa o entra un contratista nuevo, qué puede hacer si el contratista se fue, y si su póliza builders risk todavía le sirve al proyecto.' },
        { type: 'h2', text: 'Su permiso de construcción tiene fecha' },
        { type: 'p', text: 'Para una **casa unifamiliar**, la ley de Florida dice que el permiso vence **1 año después de emitido**, o en la fecha en que entra en vigor la siguiente edición del Código de Construcción de Florida, lo que ocurra después. El gobierno local puede extenderlo. También puede enviarles al dueño y al contratista que figura en el permiso un aviso por escrito — por correo electrónico o correo postal — al menos 30 días antes del vencimiento, identificando el permiso y la fecha ([sección 553.79(1)(c)](' + S.s55379 + ')). Para otros edificios, y para las extensiones, consulte con su departamento de construcción local.' },
        { type: 'p', text: 'Si el permiso vence, la ley le da al dueño algunas formas de **cerrarlo** ([sección 553.79(16)](' + S.s55379 + ')):' },
        { type: 'ul', items: [
          'Puede seguir con el contratista original o contratar a **otro contratista con licencia** para terminar lo que exige el permiso. El nuevo contratista responde solo por su trabajo, no por los defectos del contratista anterior.',
          'Puede asumir el papel de **owner-builder** (dueño constructor), según las reglas para owner-builders.',
          'Si lo que exige el permiso está sustancialmente terminado, la agencia local puede cerrar un permiso vencido **sin un permiso nuevo**, con el código vigente cuando se recibió la solicitud.',
          'Una agencia local puede cerrar un permiso **6 años después de emitido**, aunque no haya inspección final, si determina que no hay peligros aparentes de seguridad.',
        ] },
        { type: 'h2', text: 'Notice of commencement cuando la obra se pausa' },
        { type: 'p', text: 'La ley de gravámenes de construcción de Florida comienza con un **notice of commencement** (aviso de inicio) registrado. Salvo las mejoras que la ley exime, el dueño o su agente autorizado debe registrar ese aviso en la oficina del clerk **antes de comenzar** la obra — o **antes de reanudarla** tras un incumplimiento o abandono — y colocar en el terreno una copia certificada (o una declaración notariada de que se presentó el aviso, más una copia) ([sección 713.13(1)(a)](' + S.s71313 + ')). El formulario legal advierte que el aviso debe registrarse y colocarse **antes de la primera inspección**, y que los pagos hechos después de que expire pueden tratarse como pagos indebidos y dejar al dueño pagando dos veces por las mejoras.' },
        { type: 'p', text: 'Algunas reglas de tiempo importan cuando la obra se detiene:' },
        { type: 'ul', items: [
          'Si la mejora descrita en el aviso **no comienza de hecho dentro de los 90 días** posteriores al registro, ese aviso queda **nulo** y sin efecto ([sección 713.13(2)](' + S.s71313 + ')).',
          'Salvo que el aviso (o uno nuevo o enmendado) diga otra cosa, suele ser efectivo por **1 año** desde el registro. Si el contrato prevé más de un año para terminar, el aviso debe indicar que es efectivo por un año más el período adicional ([secciones 713.13(1)(c) y (6)](' + S.s71313 + ')).',
          'Un aviso registrado dentro de su vigencia puede **enmendarse** para extender el plazo o corregir datos. Para **cambiar de contratista**, la ley exige un **nuevo notice of commencement o un notice of recommencement** ([sección 713.13(5)(a)](' + S.s71313 + ')).',
        ] },
        { type: 'p', text: 'Cuando la obra está parada, revise si el aviso sigue vigente, si el trabajo comenzó dentro de los 90 días del registro y si un cambio de contratista exige un nuevo trámite antes de reanudar. Su banco suele mirar los mismos papeles. Esto es plazo de la ley de gravámenes, no un sustituto de un abogado.' },

        { type: 'h2', text: 'Si el contratista dejó de venir' },
        { type: 'p', text: 'En Florida, abandonar una obra es motivo de sanción para un contratista con licencia. Una obra puede **presumirse abandonada después de 90 días** si el contratista la termina sin causa justificada o sin avisarle debidamente al dueño (incluyendo el motivo), o si no trabaja sin causa justificada durante 90 días seguidos ([sección 489.129(1)(j)](' + S.s489129 + ')). Las disputas de contrato, pagos o gravámenes son temas legales; háblelo con un abogado y, cuando corresponda, con la junta estatal de licencias.' },
        { type: 'p', text: 'Si contrata a un reemplazo, combine licencia y permiso con el trámite de NOC o recommencement y con [certificados de seguro](/es/blog/certificate-of-insurance-contractors-florida) actualizados. Vea también [seguro para contratistas en Florida](/es/contractor-insurance-florida).' },

        { type: 'h2', text: 'El builders risk mientras la obra está parada' },
        { type: 'p', text: 'La National Association of Insurance Commissioners describe el **builders’ risk** como cobertura que, en términos generales, asegura **edificios en curso de construcción**, con maquinaria, equipo y materiales incidentales, a menudo en formulario de reporte o de valor completado ([glosario NAIC](' + S.naic + ')). Es solo una definición general. Las pólizas para una obra en marcha no son iguales: algunas casi no hablan de una pausa; otras tienen condiciones por paralización, desocupación o materiales. **No hay una sola regla estatal de vacancia o paralización** que sustituya su texto. Lea su póliza — o envíenosla — y busque:' },
        { type: 'ol', items: [
          '**La vigencia.** ¿Cuándo vence y todavía coincide con el nuevo calendario? Pregunte qué opciones hay para extenderla **antes** de que venza.',
          '**Condiciones por paralización o desocupación.** ¿La póliza habla de que se pare la obra, de que el terreno quede desocupado o de un plazo? ¿Qué le pide hacer?',
          '**Avisos.** ¿La póliza o su banco le exigen avisar cuando se para la obra o cambia el calendario?',
          '**Partes nombradas.** Si entra un contratista, prestamista o entidad dueña nueva, ¿coinciden el asegurado nombrado y los intereses adicionales con la obra?',
          '**Seguridad, materiales y robo.** Cerca, luces, candados, retirar materiales — y cómo se trata el robo de materiales en el terreno.',
          '**Su préstamo y su contrato.** Los préstamos y contratos de construcción suelen fijar requisitos de seguro que siguen vigentes durante una demora.',
        ] },
        { type: 'p', text: 'Guarde fotos y un registro del terreno el día que se paró la obra y en cada visita. Visión general: [seguro builders risk](/es/builders-risk-insurance-florida). Cuando la casa esté terminada: [garantía del constructor y seguro de casa](/es/blog/builder-warranty-vs-homeowners-insurance-florida). La responsabilidad del contratista suele ir junto a la [responsabilidad general](/es/insurance/general-liability).' },
        { type: 'callout', title: '¿Obra en pausa?', text: '[Pida una cotización](/es/quote) o llame al (305) 859-3953. Envíenos su póliza builders risk actual y el nuevo calendario. Un agente con licencia revisa los términos con usted en español, inglés o ruso. Esto es información general, no asesoría legal; las pólizas varían y revisamos los términos de la póliza concreta.' },
      ],
      faq: [
        { q: '¿Cuándo vence un permiso de construcción en Florida?', a: 'Para una casa unifamiliar, la ley de Florida dice que vence 1 año después de emitido o cuando entra en vigor la siguiente edición del Código de Construcción de Florida, lo que ocurra después. El gobierno local puede extenderlo y puede enviar un aviso escrito al menos 30 días antes del vencimiento.' },
        { q: '¿Qué es un notice of commencement y por qué importa si la obra se detiene?', a: 'Según la sección 713.13, el dueño suele tener que registrar y colocar un notice of commencement antes de empezar, o antes de reanudar tras un incumplimiento o abandono. El aviso puede quedar nulo si la obra no comienza dentro de 90 días del registro, suele durar cerca de un año salvo extensión, y un cambio de contratista exige un nuevo aviso o un notice of recommencement. Los pagos después del vencimiento pueden tratarse como indebidos.' },
        { q: '¿Cuándo se considera abandonada una obra en Florida?', a: 'Según la sección 489.129(1)(j), una obra puede presumirse abandonada después de 90 días si el contratista la termina sin causa justificada o sin aviso adecuado, o si no trabaja sin causa justificada durante 90 días seguidos.' },
        { q: '¿El builders risk sigue cubriendo una obra detenida?', a: 'Depende de la póliza. La NAIC describe el builders’ risk como cobertura para edificios en curso de construcción, con equipo y materiales relacionados, pero cada póliza trata distinto la paralización, la desocupación y la fecha de fin. Lea su póliza o envíenosla para revisarla.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 553.79 (2026): permisos, solicitudes, emisión, inspecciones (Online Sunshine, en inglés)', url: S.s55379 },
        { label: 'Estatutos de Florida, sección 489.129 (2026): procedimientos disciplinarios — abandono (Online Sunshine, en inglés)', url: S.s489129 },
        { label: 'Estatutos de Florida, sección 713.13 (2026): notice of commencement (Online Sunshine, en inglés)', url: S.s71313 },
        { label: 'Glosario NAIC de términos de seguros: Builders’ Risk Policies (en inglés)', url: S.naic },
      ],
    },
    ru: {
      title: 'Стройка во Флориде встала: разрешение, liens и ваш полис builders risk',
      metaTitle: 'Остановка стройки и builders risk во Флориде | M&K Agency',
      description: 'Стройка во Флориде на паузе? Когда истекает разрешение на частный дом, что означают notice of commencement и заброшенный объект, и что проверить в полисе builders risk.',
      ogAlt: 'Замороженная стройка: каркас дома, простойный кран, конусы, планшет и щит',
      excerpt: 'Финансирование, конфликт с подрядчиком или шторм могут остановить стройку на месяцы. Что закон Флориды говорит об истекающих разрешениях, notice of commencement и брошенных объектах — и какие вопросы задать по builders risk, пока участок стоит пустой.',
      category: 'Страхование builders risk',
      body: [
        { type: 'p', text: 'Строительный кредит задерживается, подрядчик уходит, материалы опаздывают, а сезон ураганов может сдвинуть график на недели. Когда работы останавливаются, недостроенный дом или здание остаётся на участке. Возникают четыре практических вопроса: что будет с разрешением (permit), что значит notice of commencement, если работы встали или приходит новый подрядчик, что делать, если подрядчик исчез, и подходит ли проекту ваш полис builders risk.' },
        { type: 'h2', text: 'У разрешения на строительство есть срок' },
        { type: 'p', text: 'Для **частного односемейного дома** закон Флориды говорит, что разрешение на строительство истекает **через 1 год после выдачи** или в день вступления в силу следующей редакции Строительного кодекса Флориды — в зависимости от того, что наступит позже. Местные власти могут продлить разрешение. Они также могут направить владельцу и подрядчику, указанному в разрешении, письменное уведомление — по e-mail или обычной почте — не позднее чем за 30 дней до истечения, с указанием разрешения и даты ([ст. 553.79(1)(c)](' + S.s55379 + ')). Для других зданий и по вопросам продления обращайтесь в местный строительный департамент.' },
        { type: 'p', text: 'Если разрешение истекло, закон даёт владельцу несколько способов его **закрыть** ([ст. 553.79(16)](' + S.s55379 + ')):' },
        { type: 'ul', items: [
          'Можно оставить прежнего подрядчика или нанять **другого лицензированного подрядчика**, чтобы выполнить то, что требует разрешение. Новый подрядчик отвечает только за свою работу, а не за дефекты прежнего.',
          'Можно взять стройку на себя как **owner-builder** (владелец-застройщик) по правилам для owner-builders.',
          'Если требования разрешения в основном выполнены, местное ведомство может закрыть истёкшее разрешение **без нового**, по кодексу, действовавшему на момент подачи заявления.',
          'Местное ведомство может закрыть разрешение **через 6 лет после выдачи**, даже без финальной инспекции, если не видит явных угроз безопасности.',
        ] },
        { type: 'h2', text: 'Notice of commencement, когда работы на паузе' },
        { type: 'p', text: 'Строительное lien-право Флориды начинается с зарегистрированного **notice of commencement** (уведомления о начале работ). За исключением улучшений, которые закон прямо освобождает, владелец или уполномоченный агент должен зарегистрировать NOC в офисе clerk **до фактического начала** работ — или **до возобновления** после default или abandonment — и разместить на участке заверенную копию (либо нотариальное заявление о подаче NOC плюс копию) ([ст. 713.13(1)(a)](' + S.s71313 + ')). В установленной форме есть предупреждение: NOC нужно зарегистрировать и разместить **до первой инспекции**, а платежи после истечения NOC могут считаться improper payments и привести к тому, что владелец заплатит за улучшения дважды.' },
        { type: 'p', text: 'Несколько сроков особенно важны, когда стройка стоит:' },
        { type: 'ul', items: [
          'Если улучшение, описанное в NOC, **фактически не начато в течение 90 дней** после регистрации, такое уведомление **недействительно** и больше не действует ([ст. 713.13(2)](' + S.s71313 + ')).',
          'Если в NOC (или в новом/изменённом) не сказано иное, он обычно действует **1 год** с даты регистрации. Если по договору срок завершения больше года, в NOC нужно указать, что он действует год плюс дополнительный период ([ст. 713.13(1)(c), (6)](' + S.s71313 + ')).',
          'NOC, зарегистрированный в пределах срока действия, можно **изменить**, чтобы продлить срок или исправить данные. Чтобы **сменить подрядчика**, закон требует **новый notice of commencement или notice of recommencement** ([ст. 713.13(5)(a)](' + S.s71313 + ')).',
        ] },
        { type: 'p', text: 'Пока объект простаивает, уточните: действует ли ещё зарегистрированный NOC, начались ли работы реально в течение 90 дней после регистрации, и нужна ли новая подача при смене подрядчика до возобновления. Кредитор часто смотрит те же бумаги. Это сроки lien-закона — не замена чтению зарегистрированного документа и консультации с юристом.' },

        { type: 'h2', text: 'Если подрядчик перестал появляться' },
        { type: 'p', text: 'Во Флориде брошенный объект — основание для дисциплинарных мер против лицензированного подрядчика. Объект может **считаться брошенным через 90 дней**, если подрядчик прекратил работы без уважительной причины или без надлежащего уведомления владельца (с указанием причины), либо без уважительной причины не работал 90 дней подряд ([ст. 489.129(1)(j)](' + S.s489129 + ')). Споры по договору, оплате или liens — вопрос юридический; обсудите его с юристом и, где речь о лицензии, с лицензионной комиссией штата.' },
        { type: 'p', text: 'Если после паузы вы нанимаете другого подрядчика, свяжите вопросы лицензии и разрешения с подачей NOC/recommencement и с обновлёнными сертификатами страхования. Подробнее — в наших материалах о [страховании подрядчиков во Флориде](/ru/contractor-insurance-florida) и о [сертификатах страхования для подрядчиков](/ru/blog/certificate-of-insurance-contractors-florida).' },

        { type: 'h2', text: 'Builders risk, пока стройка стоит' },
        { type: 'p', text: 'National Association of Insurance Commissioners описывает полисы **builders’ risk** как покрытие, которое обычно страхует от убытка **здания в процессе строительства**, включая машины и оборудование, используемые на стройке, и материалы, связанные со строительством, часто по форме reporting или completed value ([глоссарий NAIC](' + S.naic + ')). Это определение высокого уровня. Оно не означает, что каждый полис одинаково реагирует на остановку работ.' },
        { type: 'p', text: 'Полисы builders risk рассчитаны на идущее строительство, и они не одинаковы. В одних про паузу почти ничего не сказано, в других есть условия, связанные с остановкой работ, с тем, что участок остаётся без присмотра, или со сроком хранения материалов. **Единого штатного правила vacancy/stoppage**, которое заменяет текст вашего полиса, нет. Прочитайте свой полис (или пришлите его нам) и найдите:' },
        { type: 'ol', items: [
          '**Срок действия.** Когда полис заканчивается и совпадает ли это с новым графиком? Узнайте, как его продлить, **до** того как он истечёт.',
          '**Условия при остановке или пустом участке.** Упоминает ли полис остановку работ, незанятый объект или какой-то срок? Что он требует от вас?',
          '**Уведомление.** Требуют ли полис или банк сообщать, когда работы остановились или изменился график?',
          '**Named insured и дополнительные интересы.** Если появляются новый подрядчик, кредитор или владелец, совпадают ли указанные стороны с объектом?',
          '**Охрана участка.** Есть ли требования к забору, освещению, замкам или вывозу хранящихся материалов?',
          '**Материалы и кражи.** Покрываются ли материалы на участке и как рассматриваются кражи?',
          '**Кредит и договор.** Строительные кредиты и договоры часто устанавливают требования к страховке, которые действуют и во время задержки.',
        ] },
        { type: 'p', text: 'Сделайте фото и записи о состоянии участка в день остановки и при каждом визите. Такие записи пригодятся при любом последующем клейме, вопросе по разрешению или споре. Как работает builders risk в целом — на нашей [странице builders risk](/ru/builders-risk-insurance-florida). Когда дом будет готов, следующий шаг описан в статье о [гарантии застройщика и страховке дома](/ru/blog/builder-warranty-vs-homeowners-insurance-florida). Вопросы ответственности подрядчика часто соседствуют с [general liability](/ru/insurance/general-liability) для рабочих на объекте.' },
        { type: 'callout', title: 'Стройка на паузе?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните по (305) 859-3953. Пришлите нам текущий полис builders risk и новый график. Лицензированный агент разберёт условия с вами на русском, английском или испанском. Это общая информация, а не юридическая консультация; полисы различаются, и мы смотрим условия конкретного полиса.' },
      ],
      faq: [
        { q: 'Когда истекает разрешение на строительство во Флориде?', a: 'Для частного односемейного дома закон Флориды говорит, что разрешение истекает через 1 год после выдачи или при вступлении в силу следующей редакции Строительного кодекса Флориды — что наступит позже. Местные власти могут его продлить и могут направить письменное уведомление не менее чем за 30 дней до истечения.' },
        { q: 'Что такое notice of commencement и почему он важен при остановке работ?', a: 'По ст. 713.13 владелец обычно должен зарегистрировать и разместить notice of commencement до начала работ или до возобновления после default/abandonment. Уведомление может стать недействительным, если работы не начаты в течение 90 дней после регистрации, обычно действует около года, если не продлено, а смена подрядчика требует нового NOC или notice of recommencement. Платежи после истечения могут считаться improper payments.' },
        { q: 'Когда объект считается брошенным во Флориде?', a: 'По ст. 489.129(1)(j) объект может считаться брошенным через 90 дней, если подрядчик прекратил работы без уважительной причины или надлежащего уведомления, либо без уважительной причины не работал 90 дней подряд.' },
        { q: 'Покрывает ли builders risk остановившуюся стройку?', a: 'Зависит от полиса. NAIC описывает builders’ risk как покрытие зданий в процессе строительства, включая связанное оборудование и материалы, но условия stoppage, vacancy и дата окончания у полисов разные. Прочитайте свой полис или пришлите его нам на проверку.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 553.79 (2026): разрешения, заявления, выдача, инспекции (Online Sunshine, на английском)', url: S.s55379 },
        { label: 'Законы Флориды, ст. 489.129 (2026): дисциплинарные меры — брошенный объект (Online Sunshine, на английском)', url: S.s489129 },
        { label: 'Законы Флориды, ст. 713.13 (2026): notice of commencement (Online Sunshine, на английском)', url: S.s71313 },
        { label: 'Глоссарий NAIC: Builders’ Risk Policies (на английском)', url: S.naic },
      ],
    },
  },
};
