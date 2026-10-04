import type { BlogPost } from '../types';

// Facts checked 2026-10-04: DFS Homeowners Insurance Toolkit (insurance vs home warranty
// plan; HO-3 covers all causes of loss not specifically excluded; check exclusions);
// 2026 Florida Statutes on flsenate.gov: s. 718.203 (condo developer and contractor
// implied warranties: 3 years / 1 year after turnover, max 5; 1 year other property;
// conditioned on routine maintenance), s. 553.835 (no implied-warranty action for offsite
// improvements), s. 558.004 (60/120-day notice of claim, 15-day endeavor, 30-day
// inspection, 45-day response options, 45 days to accept/reject; notice does not toll
// repose), s. 95.11(3)(b) (4 years from CO / latent defect discovery; 7-year outer limit;
// warranty repairs do not extend), s. 627.70132 (1-year claim notice). No insurer named.
const S = {
  dfs: 'https://www.myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---homeowners-insurance-toolkit.pdf',
  s718203: 'https://www.flsenate.gov/Laws/Statutes/2026/718.203',
  s553835: 'https://www.flsenate.gov/Laws/Statutes/2026/553.835',
  s558004: 'https://www.flsenate.gov/Laws/Statutes/2026/558.004',
  s558005: 'https://www.flsenate.gov/Laws/Statutes/2026/558.005',
  s9511: 'https://www.flsenate.gov/Laws/Statutes/2026/95.11',
  s70132: 'https://www.flsenate.gov/Laws/Statutes/2026/627.70132',
};

export const post: BlogPost = {
  slug: 'builder-warranty-vs-homeowners-insurance-florida',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Builder Warranty vs. Homeowners Insurance: Who Pays for What in a New Florida Home',
      metaTitle: 'Builder Warranty vs. Home Insurance in Florida | M&K Agency',
      description: 'New home in Florida? What a builder warranty does, what homeowners insurance does, Florida’s condo warranties, the Chapter 558 defect process and key deadlines.',
      excerpt: 'At a new-construction closing you get two promises: the builder’s warranty and your insurance policy. They do different jobs. Here is how to tell which one to call.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'When you close on a new home, you usually walk away with two documents that sound alike: the **builder’s warranty** and your **homeowners policy**. They do different jobs, and knowing which one to call first can save you weeks.' },
        { type: 'h2', text: 'Insurance is for sudden losses' },
        { type: 'p', text: 'Florida’s Department of Financial Services puts it simply: homeowners insurance protects your home from losses due to **fire, theft and other perils**. The most common form, the HO-3, covers the home for all causes of loss **not specifically excluded**, which makes the exclusions section the most important page to read ([DFS toolkit](' + S.dfs + ')). Insurance is not designed to pay to correct how a house was built. Ask your agent to show you how your policy treats wear and tear, workmanship and construction defects, and any damage that results from them.' },
        { type: 'h2', text: 'A builder warranty is a contract' },
        { type: 'p', text: 'A written builder warranty is a promise from the builder about the work. What it covers, for how long and how you must report a problem are all in the document, so keep a copy with your closing papers. Note any **written-notice requirement** and deadlines. DFS also warns that home warranty plans, the separate service contracts for appliances and systems, often have many exclusions and limits.' },
        { type: 'h2', text: 'Buying a new condo? The law adds warranties' },
        { type: 'p', text: 'For condominiums, Florida law gives each buyer **implied warranties from the developer** ([s. 718.203](' + S.s718203 + ')):' },
        { type: 'ul', items: [
          '**The unit:** 3 years from completion of the building.',
          '**Roof, structure and building-wide mechanical, electrical and plumbing:** 3 years from completion, or 1 year after owners take control of the association, whichever is later, but **never more than 5 years**.',
          '**Other property conveyed with the unit:** 1 year from closing or possession, whichever comes first.',
          'Contractors, subcontractors and suppliers also owe warranties on their work, and all of these depend on **routine maintenance** being done.',
        ] },
        { type: 'p', text: 'For single-family homes, a separate law limits implied-warranty claims for **offsite improvements** such as streets, drainage and utilities that do not directly support the home ([s. 553.835](' + S.s553835 + ')). Other claims based on contract or statute are not affected.' },
        { type: 'h2', text: 'Reporting a defect to the builder: Chapter 558' },
        { type: 'p', text: 'Before a homeowner can sue over a construction defect, Florida requires a **written notice of claim** to the builder at least **60 days** before filing, or 120 days for an association of more than 20 parcels ([s. 558.004](' + S.s558004 + ')), unless both sides agreed in writing to opt out ([s. 558.005](' + S.s558005 + ')). In short:' },
        { type: 'ol', items: [
          'Describe each defect and its location in reasonable detail. The law asks you to try to send notice within 15 days of discovering it.',
          'The builder may inspect within **30 days**.',
          'Within **45 days**, the builder must answer in writing: an offer to repair, an offer to pay, both, a dispute, or a statement that its insurer will decide.',
          'You then have **45 days** to accept or reject an offer.',
        ] },
        { type: 'h2', text: 'Deadlines that keep running' },
        { type: 'p', text: 'Claims over the construction of a home generally must be filed within **4 years** of the certificate of occupancy, or from when a hidden defect was or should have been discovered, and in any event within **7 years** ([s. 95.11(3)(b)](' + S.s9511 + ')). Repairs under warranty do not extend that limit, and a Chapter 558 notice does not pause it. For legal deadlines in your case, talk with a Florida attorney.' },
        { type: 'h2', text: 'When both may apply' },
        { type: 'p', text: 'Picture a roof leak after a storm in your second year. You may have a sudden loss for your insurer **and** a possible defect for your builder. Report the damage to your insurer promptly (Florida’s outer limit is 1 year from the date of loss, [s. 627.70132](' + S.s70132 + ')), notify the builder in writing as your warranty requires, and keep photos. Our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida) explains what the insurer must do next.' },
        { type: 'callout', title: 'Closing on a new home?', text: 'See our [new construction home insurance page](/en/new-construction-home-insurance-florida) or [request a quote](/en/quote). A licensed agent will walk you through what the policy covers and what it excludes. This is general information, not legal advice; coverage depends on your policy.' },
      ],
      faq: [
        { q: 'Does homeowners insurance cover construction defects?', a: 'Insurance is built for sudden losses from covered perils, not for correcting how a house was built. Some policies may cover damage that results from a defect. The answer is in your policy’s exclusions, so ask your agent to walk you through them.' },
        { q: 'How long is the warranty on a new condo in Florida?', a: 'By statute, the developer’s implied warranty on the unit is 3 years from completion of the building. The roof, structure and building-wide systems are covered for 3 years or 1 year after owners take control, whichever is later, up to 5 years.' },
        { q: 'What is a 558 notice?', a: 'It is the written notice of a construction defect that Florida requires before a lawsuit. The builder gets a chance to inspect and to respond with an offer to repair, pay or both.' },
      ],
      sources: [
        { label: 'Florida Department of Financial Services: Homeowners Insurance Toolkit (PDF)', url: S.dfs },
        { label: 'Florida Statutes s. 718.203 (2026): condominium warranties', url: S.s718203 },
        { label: 'Florida Statutes s. 553.835 (2026): implied warranties (offsite improvements)', url: S.s553835 },
        { label: 'Florida Statutes s. 558.004 (2026): notice and opportunity to repair', url: S.s558004 },
        { label: 'Florida Statutes s. 558.005 (2026): contract provisions; opting out', url: S.s558005 },
        { label: 'Florida Statutes s. 95.11 (2026): limitations of actions', url: S.s9511 },
        { label: 'Florida Statutes s. 627.70132 (2026): notice of property insurance claim', url: S.s70132 },
      ],
    },
    es: {
      title: 'Garantía del constructor o seguro de casa: quién paga qué en una casa nueva en Florida',
      metaTitle: 'Garantía del constructor vs. seguro de casa | M&K Agency',
      description: '¿Casa nueva en Florida? Qué hace la garantía del constructor, qué hace el seguro de casa, las garantías de condominio, el proceso del Capítulo 558 y los plazos.',
      excerpt: 'Al cerrar la compra de una casa nueva recibe dos promesas: la garantía del constructor y su póliza de seguro. Hacen trabajos distintos. Así sabrá a quién llamar.',
      category: 'Seguro de casa',
      body: [
        { type: 'p', text: 'Cuando cierra la compra de una casa nueva, normalmente sale con dos documentos que suenan parecido: la **garantía del constructor** y su **póliza de seguro de casa**. Cumplen funciones distintas, y saber a cuál llamar primero le puede ahorrar semanas.' },
        { type: 'h2', text: 'El seguro es para pérdidas repentinas' },
        { type: 'p', text: 'El Departamento de Servicios Financieros de Florida lo explica así: el seguro de casa protege su vivienda de pérdidas por **incendio, robo y otros riesgos**. La forma más común, la HO-3, cubre la casa contra toda causa de pérdida que **no esté excluida expresamente**, por eso la sección de exclusiones es la página más importante de leer ([guía del DFS](' + S.dfs + ')). El seguro no está hecho para pagar por corregir la forma en que se construyó la casa. Pídale a su agente que le muestre cómo trata su póliza el desgaste, la mano de obra, los defectos de construcción y los daños que resulten de ellos.' },
        { type: 'h2', text: 'La garantía del constructor es un contrato' },
        { type: 'p', text: 'Una garantía escrita es una promesa del constructor sobre su trabajo. Qué cubre, por cuánto tiempo y cómo reportar un problema está en el documento, así que guarde una copia con los papeles del cierre. Fíjese si exige **aviso por escrito** y en qué plazos. El DFS también advierte que los planes de garantía del hogar (home warranty), que son contratos de servicio aparte para equipos y sistemas, suelen tener muchas exclusiones y límites.' },
        { type: 'h2', text: '¿Compra un condominio nuevo? La ley agrega garantías' },
        { type: 'p', text: 'En los condominios, la ley de Florida le da a cada comprador **garantías implícitas del desarrollador** ([s. 718.203](' + S.s718203 + ')):' },
        { type: 'ul', items: [
          '**La unidad:** 3 años desde que se termina el edificio.',
          '**Techo, estructura y sistemas mecánicos, eléctricos y de plomería del edificio:** 3 años desde que se termina, o 1 año después de que los dueños tomen el control de la asociación, lo que ocurra más tarde, pero **nunca más de 5 años**.',
          '**Otros bienes que se entregan con la unidad:** 1 año desde el cierre o la entrega, lo que ocurra primero.',
          'Los contratistas, subcontratistas y proveedores también garantizan su trabajo, y todas estas garantías dependen de que se haga el **mantenimiento de rutina**.',
        ] },
        { type: 'p', text: 'En las casas unifamiliares, otra ley limita los reclamos por garantía implícita sobre **obras fuera del lote** (offsite), como calles, drenaje y servicios que no sostienen directamente la casa ([s. 553.835](' + S.s553835 + ')). No afecta otros reclamos basados en el contrato o en la ley.' },
        { type: 'h2', text: 'Reportar un defecto al constructor: Capítulo 558' },
        { type: 'p', text: 'Antes de demandar por un defecto de construcción, Florida exige enviar al constructor un **aviso de reclamo por escrito** por lo menos **60 días** antes, o 120 días si es una asociación de más de 20 parcelas ([s. 558.004](' + S.s558004 + ')), salvo que las dos partes hayan acordado por escrito no aplicarlo ([s. 558.005](' + S.s558005 + ')). En resumen:' },
        { type: 'ol', items: [
          'Describa cada defecto y dónde está con suficiente detalle. La ley le pide intentar enviar el aviso dentro de 15 días después de descubrirlo.',
          'El constructor puede inspeccionar dentro de **30 días**.',
          'Dentro de **45 días**, el constructor debe responder por escrito: una oferta de reparar, de pagar, las dos cosas, un rechazo o una declaración de que decidirá su aseguradora.',
          'Usted tiene luego **45 días** para aceptar o rechazar una oferta.',
        ] },
        { type: 'h2', text: 'Plazos que siguen corriendo' },
        { type: 'p', text: 'Los reclamos por la construcción de una casa, por lo general, deben presentarse dentro de **4 años** desde el certificado de ocupación, o desde que se descubrió (o se debió descubrir) un defecto oculto, y en todo caso dentro de **7 años** ([s. 95.11(3)(b)](' + S.s9511 + ')). Las reparaciones bajo garantía no alargan ese límite, y el aviso del Capítulo 558 no lo pausa. Para los plazos legales de su caso, consulte con un abogado en Florida.' },
        { type: 'h2', text: 'Cuando pueden aplicar los dos' },
        { type: 'p', text: 'Imagine una filtración en el techo después de una tormenta en su segundo año. Puede tener una pérdida repentina para su aseguradora **y** un posible defecto para su constructor. Reporte el daño a su aseguradora cuanto antes (el límite máximo en Florida es 1 año desde la fecha de la pérdida, [s. 627.70132](' + S.s70132 + ')), avise al constructor por escrito como pida su garantía y guarde fotos. Nuestra guía de [plazos de un reclamo por huracán](/es/blog/hurricane-claim-timeline-florida) explica lo que la aseguradora debe hacer después.' },
        { type: 'callout', title: '¿Va a cerrar la compra de una casa nueva?', text: 'Vea nuestra página de [seguro para casas de construcción nueva](/es/new-construction-home-insurance-florida) o [pida una cotización](/es/quote). Un agente con licencia le explicará qué cubre la póliza y qué excluye. Esto es información general, no asesoría legal; la cobertura depende de su póliza.' },
      ],
      faq: [
        { q: '¿El seguro de casa cubre defectos de construcción?', a: 'El seguro está hecho para pérdidas repentinas por riesgos cubiertos, no para corregir cómo se construyó la casa. Algunas pólizas pueden cubrir el daño que resulta de un defecto. La respuesta está en las exclusiones de su póliza; pídale a su agente que se las explique.' },
        { q: '¿Cuánto dura la garantía de un condominio nuevo en Florida?', a: 'Por ley, la garantía implícita del desarrollador sobre la unidad es de 3 años desde que se termina el edificio. El techo, la estructura y los sistemas del edificio tienen 3 años o 1 año después de que los dueños tomen el control, lo que ocurra más tarde, hasta un máximo de 5 años.' },
        { q: '¿Qué es un aviso 558?', a: 'Es el aviso por escrito de un defecto de construcción que Florida exige antes de una demanda. El constructor tiene la oportunidad de inspeccionar y responder con una oferta de reparar, pagar o ambas.' },
      ],
      sources: [
        { label: 'Departamento de Servicios Financieros de Florida: guía del seguro de vivienda (PDF, en inglés)', url: S.dfs },
        { label: 'Estatutos de Florida, sección 718.203 (2026): garantías de condominio (en inglés)', url: S.s718203 },
        { label: 'Estatutos de Florida, sección 553.835 (2026): garantías implícitas, obras fuera del lote (en inglés)', url: S.s553835 },
        { label: 'Estatutos de Florida, sección 558.004 (2026): aviso y oportunidad de reparar (en inglés)', url: S.s558004 },
        { label: 'Estatutos de Florida, sección 558.005 (2026): cláusulas del contrato y exclusión voluntaria (en inglés)', url: S.s558005 },
        { label: 'Estatutos de Florida, sección 95.11 (2026): plazos para demandar (en inglés)', url: S.s9511 },
        { label: 'Estatutos de Florida, sección 627.70132 (2026): aviso de reclamo de propiedad (en inglés)', url: S.s70132 },
      ],
    },
    ru: {
      title: 'Гарантия застройщика или страховка дома: кто за что платит в новом доме во Флориде',
      metaTitle: 'Гарантия застройщика и страховка дома во Флориде | M&K Agency',
      description: 'Новый дом во Флориде? Что даёт гарантия застройщика, что — страховка дома, гарантии по кондо, порядок по Chapter 558 и важные сроки.',
      excerpt: 'На закрытии сделки по новому дому вы получаете два обещания: гарантию застройщика и страховой полис. У них разные задачи. Разбираемся, куда звонить в каком случае.',
      category: 'Страхование дома',
      body: [
        { type: 'p', text: 'Закрывая сделку по новому дому, вы обычно уходите с двумя документами, которые звучат похоже: **гарантией застройщика** (builder warranty) и **полисом страховки дома**. Задачи у них разные, и если знать, куда обращаться в первую очередь, можно сэкономить недели.' },
        { type: 'h2', text: 'Страховка — для внезапного ущерба' },
        { type: 'p', text: 'Департамент финансовых услуг Флориды (DFS) формулирует просто: страховка дома защищает от ущерба из-за **пожара, кражи и других рисков**. Самая распространённая форма полиса, HO-3, покрывает дом от любых причин ущерба, **которые прямо не исключены**, поэтому раздел исключений — самая важная страница полиса ([гид DFS](' + S.dfs + ')). Страховка не предназначена для оплаты исправления того, как построен дом. Попросите агента показать, как ваш полис относится к износу, качеству работ, строительным дефектам и ущербу, который из них вытекает.' },
        { type: 'h2', text: 'Гарантия застройщика — это договор' },
        { type: 'p', text: 'Письменная гарантия — это обещание застройщика по поводу его работы. Что она покрывает, на какой срок и как сообщать о проблеме, написано в самом документе, так что храните копию вместе с документами по сделке. Обратите внимание, нужно ли **письменное уведомление** и в какие сроки. DFS также предупреждает, что планы home warranty — отдельные сервисные контракты на технику и системы дома — часто содержат много исключений и ограничений.' },
        { type: 'h2', text: 'Покупаете новое кондо? Закон добавляет гарантии' },
        { type: 'p', text: 'Для кондо закон Флориды даёт каждому покупателю **подразумеваемые гарантии застройщика** ([ст. 718.203](' + S.s718203 + ')):' },
        { type: 'ul', items: [
          '**Сама квартира:** 3 года с завершения здания.',
          '**Крыша, несущие конструкции и общедомовые механические, электрические и сантехнические системы:** 3 года с завершения или 1 год после того, как владельцы получат контроль над ассоциацией, — что наступит позже, но **не больше 5 лет**.',
          '**Остальное имущество, передаваемое с квартирой:** 1 год с закрытия сделки или передачи, — что наступит раньше.',
          'Подрядчики, субподрядчики и поставщики тоже дают гарантии на свою работу, и все эти гарантии действуют при условии **регулярного обслуживания**.',
        ] },
        { type: 'p', text: 'Для частных домов отдельный закон ограничивает претензии по подразумеваемой гарантии в отношении **объектов за пределами участка** — улиц, дренажа, коммуникаций, которые напрямую не держат сам дом ([ст. 553.835](' + S.s553835 + ')). Другие претензии на основании договора или закона это не затрагивает.' },
        { type: 'h2', text: 'Как сообщить застройщику о дефекте: Chapter 558' },
        { type: 'p', text: 'Прежде чем подать в суд из-за строительного дефекта, во Флориде нужно направить застройщику **письменное уведомление о претензии** не позже чем за **60 дней**, а для ассоциации более чем на 20 участков — за 120 дней ([ст. 558.004](' + S.s558004 + ')), если только стороны письменно не договорились отказаться от этой процедуры ([ст. 558.005](' + S.s558005 + ')). Коротко:' },
        { type: 'ol', items: [
          'Достаточно подробно опишите каждый дефект и где он находится. Закон просит постараться отправить уведомление в течение 15 дней после обнаружения.',
          'Застройщик может провести осмотр в течение **30 дней**.',
          'В течение **45 дней** застройщик обязан ответить письменно: предложить ремонт, выплату, то и другое, оспорить претензию или сообщить, что решение примет его страховая.',
          'Затем у вас есть **45 дней**, чтобы принять или отклонить предложение.',
        ] },
        { type: 'h2', text: 'Сроки, которые продолжают идти' },
        { type: 'p', text: 'Иски по поводу строительства дома, как правило, нужно подать в течение **4 лет** с даты certificate of occupancy или с момента, когда скрытый дефект обнаружили (или должны были обнаружить), и в любом случае не позже **7 лет** ([ст. 95.11(3)(b)](' + S.s9511 + ')). Гарантийный ремонт этот срок не продлевает, а уведомление по Chapter 558 его не приостанавливает. О юридических сроках в вашей ситуации лучше поговорить с адвокатом во Флориде.' },
        { type: 'h2', text: 'Когда работает и то и другое' },
        { type: 'p', text: 'Представьте, что на второй год после шторма потекла крыша. Это может быть и внезапный ущерб для страховой, **и** возможный дефект для застройщика. Как можно скорее заявите ущерб страховой (крайний срок во Флориде — 1 год с даты ущерба, [ст. 627.70132](' + S.s70132 + ')), письменно уведомите застройщика, как требует гарантия, и сохраните фото. Что страховая обязана сделать дальше, читайте в статье о [сроках по клейму после урагана](/ru/blog/hurricane-claim-timeline-florida).' },
        { type: 'callout', title: 'Скоро закрытие по новому дому?', text: 'Загляните на страницу о [страховке нового дома](/ru/new-construction-home-insurance-florida) или [оставьте заявку на расчёт](/ru/quote). Лицензированный агент объяснит, что полис покрывает и что исключает. Это общая информация, а не юридическая консультация; покрытие зависит от вашего полиса.' },
      ],
      faq: [
        { q: 'Покрывает ли страховка дома строительные дефекты?', a: 'Страховка рассчитана на внезапный ущерб от покрываемых рисков, а не на исправление того, как построен дом. Некоторые полисы могут покрывать ущерб, вызванный дефектом. Ответ — в разделе исключений вашего полиса; попросите агента пройтись по нему с вами.' },
        { q: 'Сколько длится гарантия на новое кондо во Флориде?', a: 'По закону подразумеваемая гарантия застройщика на квартиру — 3 года с завершения здания. На крышу, конструкции и общедомовые системы — 3 года или 1 год после перехода контроля к владельцам, что позже, но не больше 5 лет.' },
        { q: 'Что такое уведомление 558?', a: 'Это письменное уведомление о строительном дефекте, которое во Флориде нужно направить до подачи иска. Застройщик получает возможность осмотреть дом и ответить предложением ремонта, выплаты или того и другого.' },
      ],
      sources: [
        { label: 'Департамент финансовых услуг Флориды: гид по страхованию жилья (PDF, на английском)', url: S.dfs },
        { label: 'Законы Флориды, ст. 718.203 (2026): гарантии по кондоминиумам (на английском)', url: S.s718203 },
        { label: 'Законы Флориды, ст. 553.835 (2026): подразумеваемые гарантии, объекты за пределами участка (на английском)', url: S.s553835 },
        { label: 'Законы Флориды, ст. 558.004 (2026): уведомление и возможность устранить дефект (на английском)', url: S.s558004 },
        { label: 'Законы Флориды, ст. 558.005 (2026): условия договора, отказ от процедуры (на английском)', url: S.s558005 },
        { label: 'Законы Флориды, ст. 95.11 (2026): сроки исковой давности (на английском)', url: S.s9511 },
        { label: 'Законы Флориды, ст. 627.70132 (2026): уведомление о клейме по имуществу (на английском)', url: S.s70132 },
      ],
    },
  },
};
