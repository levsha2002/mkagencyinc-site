import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against the 2026 Florida Statutes on flsenate.gov:
// - s. 553.79(1)(c): a local government may send written notice of expiration at least 30 days
//   before a permit expires; a single-family dwelling permit expires 1 year after issuance or
//   on the effective date of the next Florida Building Code edition, whichever is later; local
//   government may extend.
// - s. 553.79(16): owner may close a permit with the original or a different licensed
//   contractor (new contractor not liable for the original's defects) or as owner-builder;
//   expired permit with requirements substantially completed may be closed without a new
//   permit under the code in effect at application; agency may close a permit 6 years after
//   issuance absent apparent safety hazards.
// - s. 489.129(1)(j): discipline ground for abandoning a project; presumed after 90 days if
//   terminated without just cause or notice, or no work without just cause for 90 consecutive
//   days.
// Builders risk policy terms: deliberately general (policies differ; we review the actual
// policy). No universal vacancy/stoppage terms are stated.
const S = {
  s55379: 'https://www.flsenate.gov/Laws/Statutes/2026/553.79',
  s489129: 'https://www.flsenate.gov/Laws/Statutes/2026/489.129',
};

export const post: BlogPost = {
  slug: 'construction-stalls-builders-risk-florida',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'When a Florida Construction Project Stalls: Permits, an Empty Site and Your Builders Risk Policy',
      metaTitle: 'Stalled Construction in Florida: Builders Risk | M&K Agency',
      description: 'Project on hold in Florida? When a single-family permit can expire, what the law says about an abandoned job, and what to check in your builders risk policy.',
      excerpt: 'Financing, a contractor dispute or a storm can stop a project for months. What Florida law says about expiring permits and abandoned jobs, and the builders risk questions to ask while the site sits empty.',
      category: 'Builders risk insurance',
      body: [
        { type: 'p', text: 'Construction loans get delayed, contractors leave, materials run late, and hurricane season can push a schedule back for weeks. When work stops, the half-built house or building is still standing on the lot, and three practical questions come up: what happens to the permit, what can you do if the contractor walked away, and whether your builders risk policy still fits the project.' },
        { type: 'h2', text: 'Your building permit has a clock' },
        { type: 'p', text: 'For a **single-family home**, Florida law says a building permit expires **1 year after it is issued**, or on the effective date of the next edition of the Florida Building Code, whichever is later. The local government may extend it, and it may send the owner and the contractor a written notice at least 30 days before it expires ([s. 553.79(1)(c)](' + S.s55379 + ')). For other buildings, and for extensions, check with your local building department.' },
        { type: 'p', text: 'If a permit expires, the law gives owners some ways to **close** it ([s. 553.79(16)](' + S.s55379 + ')):' },
        { type: 'ul', items: [
          'You can keep the original contractor or hire **another licensed contractor** to finish what the permit requires. The new contractor is liable only for its own work, not for defects in the original contractor’s work.',
          'You can take over as an **owner-builder**, under the rules for owner-builders.',
          'If the permit’s requirements were substantially completed, the local agency may close an expired permit **without a new permit**, under the code in effect when the application was received.',
        ] },
        { type: 'h2', text: 'If the contractor stopped showing up' },
        { type: 'p', text: 'Florida treats abandoning a project as grounds for discipline against a licensed contractor. A project may be **presumed abandoned after 90 days** if the contractor ends it without just cause or without proper notice to the owner, or does no work without just cause for 90 consecutive days ([s. 489.129(1)(j)](' + S.s489129 + ')). Disputes about a contract are legal matters; this is a point to raise with an attorney and with the state licensing board.' },
        { type: 'h2', text: 'Builders risk while the site sits' },
        { type: 'p', text: 'Builders risk policies are written for a project in progress, and they are not all the same. Some say nothing special about a pause; others have conditions tied to work stopping or the site being unattended. There is no single rule, so read your own policy, or send it to us, and look for:' },
        { type: 'ol', items: [
          '**The policy term.** When does it end, and does that still match the new schedule? Ask what your options are to extend it before it expires.',
          '**Conditions about a stoppage or vacancy.** Does the policy mention work stopping, the site being unoccupied, or a time limit? What does it ask you to do?',
          '**Notice.** Does the policy or your lender require you to tell someone when work stops or the schedule changes?',
          '**Site security.** Are there requirements for fencing, lighting, locks or removing stored materials?',
          '**Stored materials and theft.** Are materials on site still covered, and how is theft treated?',
          '**Your loan and contract.** Construction loans and contracts often set insurance requirements that still apply during a delay.',
        ] },
        { type: 'p', text: 'Keep photos and a written log of the site’s condition on the day work stopped and at regular visits. That record helps with any later claim, permit question or dispute.' },
        { type: 'p', text: 'For how builders risk works in general, see our [builders risk insurance page](/en/builders-risk-insurance-florida). When the home is finished, our article on [builder warranties and homeowners insurance](/en/blog/builder-warranty-vs-homeowners-insurance-florida) covers the next step.' },
        { type: 'callout', title: 'Project on hold?', text: '[Request a quote](/en/quote) or send us your current builders risk policy and the new schedule. A licensed agent will go over the terms with you in English, Spanish or Russian. This is general information, not legal advice; policies differ, and we review the terms of the actual policy.' },
      ],
      faq: [
        { q: 'When does a building permit expire in Florida?', a: 'For a single-family dwelling, Florida law says the permit expires 1 year after issuance or on the effective date of the next Florida Building Code edition, whichever is later. Local governments may extend it.' },
        { q: 'When is a construction project considered abandoned in Florida?', a: 'Under s. 489.129(1)(j), a project may be presumed abandoned after 90 days if the contractor ends it without just cause or proper notice, or does no work without just cause for 90 consecutive days.' },
        { q: 'Does builders risk still cover a stalled project?', a: 'It depends on the policy. Some policies have conditions about work stopping or the site being unoccupied, and every policy has an end date. Read your policy or send it to us so we can review it.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 553.79 (2026): permits; applications; issuance; inspections', url: S.s55379 },
        { label: 'Florida Statutes s. 489.129 (2026): disciplinary proceedings (abandonment)', url: S.s489129 },
      ],
    },
    es: {
      title: 'Cuando una obra se detiene en Florida: permisos, terreno vacío y su póliza builders risk',
      metaTitle: '¿Obra detenida en Florida? Permisos y builders risk | M&K Agency',
      description: '¿Obra en pausa en Florida? Cuándo vence el permiso de una casa unifamiliar, qué dice la ley sobre una obra abandonada y qué revisar en su póliza builders risk.',
      excerpt: 'El financiamiento, un problema con el contratista o una tormenta pueden parar una obra por meses. Qué dice la ley de Florida sobre permisos que vencen y obras abandonadas, y qué preguntar sobre su builders risk mientras el terreno está solo.',
      category: 'Seguro builders risk',
      body: [
        { type: 'p', text: 'Los préstamos de construcción se atrasan, los contratistas se van, los materiales llegan tarde y la temporada de huracanes puede correr el calendario por semanas. Cuando la obra se detiene, la casa o el edificio a medio hacer sigue en el terreno, y surgen tres preguntas: qué pasa con el permiso, qué puede hacer si el contratista se fue, y si su póliza builders risk todavía le sirve al proyecto.' },
        { type: 'h2', text: 'Su permiso de construcción tiene fecha' },
        { type: 'p', text: 'Para una **casa unifamiliar**, la ley de Florida dice que el permiso vence **1 año después de emitido**, o en la fecha en que entra en vigor la siguiente edición del Código de Construcción de Florida, lo que ocurra después. El gobierno local puede extenderlo y puede enviarles al dueño y al contratista un aviso por escrito al menos 30 días antes del vencimiento ([sección 553.79(1)(c)](' + S.s55379 + ')). Para otros edificios, y para las extensiones, consulte con su departamento de construcción local.' },
        { type: 'p', text: 'Si el permiso vence, la ley le da al dueño algunas formas de **cerrarlo** ([sección 553.79(16)](' + S.s55379 + ')):' },
        { type: 'ul', items: [
          'Puede seguir con el contratista original o contratar a **otro contratista con licencia** para terminar lo que exige el permiso. El nuevo contratista responde solo por su trabajo, no por los defectos del contratista anterior.',
          'Puede asumir el papel de **owner-builder** (dueño constructor), según las reglas para owner-builders.',
          'Si lo que exige el permiso está sustancialmente terminado, la agencia local puede cerrar un permiso vencido **sin un permiso nuevo**, con el código vigente cuando se recibió la solicitud.',
        ] },
        { type: 'h2', text: 'Si el contratista dejó de venir' },
        { type: 'p', text: 'En Florida, abandonar una obra es motivo de sanción para un contratista con licencia. Una obra puede **presumirse abandonada después de 90 días** si el contratista la termina sin causa justificada o sin avisarle debidamente al dueño, o si no trabaja sin causa justificada durante 90 días seguidos ([sección 489.129(1)(j)](' + S.s489129 + ')). Las disputas de contrato son temas legales; háblelo con un abogado y con la junta estatal de licencias.' },
        { type: 'h2', text: 'El builders risk mientras la obra está parada' },
        { type: 'p', text: 'Las pólizas builders risk están pensadas para una obra en marcha, y no todas son iguales. Algunas no dicen nada especial sobre una pausa; otras tienen condiciones ligadas a que se pare el trabajo o a que el terreno quede sin nadie. No hay una regla única, así que lea su póliza, o envíenosla, y busque:' },
        { type: 'ol', items: [
          '**La vigencia.** ¿Cuándo vence y todavía coincide con el nuevo calendario? Pregunte qué opciones hay para extenderla antes de que venza.',
          '**Condiciones por paralización o desocupación.** ¿La póliza habla de que se pare la obra, de que el terreno quede desocupado o de un plazo? ¿Qué le pide hacer?',
          '**Avisos.** ¿La póliza o su banco le exigen avisar cuando se para la obra o cambia el calendario?',
          '**Seguridad del terreno.** ¿Hay requisitos de cerca, luces, candados o de retirar los materiales almacenados?',
          '**Materiales y robo.** ¿Siguen cubiertos los materiales en el terreno y cómo se trata el robo?',
          '**Su préstamo y su contrato.** Los préstamos y contratos de construcción suelen fijar requisitos de seguro que siguen vigentes durante una demora.',
        ] },
        { type: 'p', text: 'Guarde fotos y un registro escrito del estado del terreno el día que se paró la obra y en cada visita. Ese registro ayuda con cualquier reclamo, trámite de permiso o disputa posterior.' },
        { type: 'p', text: 'Para saber cómo funciona el builders risk en general, vea nuestra [página de seguro builders risk](/es/builders-risk-insurance-florida). Cuando la casa esté terminada, nuestro artículo sobre [garantía del constructor y seguro de casa](/es/blog/builder-warranty-vs-homeowners-insurance-florida) explica el siguiente paso.' },
        { type: 'callout', title: '¿Obra en pausa?', text: '[Pida una cotización](/es/quote) o envíenos su póliza builders risk actual y el nuevo calendario. Un agente con licencia revisa los términos con usted en español, inglés o ruso. Esto es información general, no asesoría legal; las pólizas varían y revisamos los términos de la póliza concreta.' },
      ],
      faq: [
        { q: '¿Cuándo vence un permiso de construcción en Florida?', a: 'Para una casa unifamiliar, la ley de Florida dice que vence 1 año después de emitido o cuando entra en vigor la siguiente edición del Código de Construcción de Florida, lo que ocurra después. El gobierno local puede extenderlo.' },
        { q: '¿Cuándo se considera abandonada una obra en Florida?', a: 'Según la sección 489.129(1)(j), una obra puede presumirse abandonada después de 90 días si el contratista la termina sin causa justificada o sin aviso adecuado, o si no trabaja sin causa justificada durante 90 días seguidos.' },
        { q: '¿El builders risk sigue cubriendo una obra detenida?', a: 'Depende de la póliza. Algunas tienen condiciones sobre la paralización o la desocupación del terreno, y todas tienen fecha de vencimiento. Lea su póliza o envíenosla para revisarla.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 553.79 (2026): permisos, solicitudes, emisión, inspecciones (en inglés)', url: S.s55379 },
        { label: 'Estatutos de Florida, sección 489.129 (2026): procedimientos disciplinarios (abandono) (en inglés)', url: S.s489129 },
      ],
    },
    ru: {
      title: 'Стройка во Флориде встала: разрешение, пустой участок и ваш полис builders risk',
      metaTitle: 'Стройка встала во Флориде: permit и builders risk | M&K Agency',
      description: 'Стройка во Флориде на паузе? Когда истекает permit на частный дом, что закон говорит о брошенном объекте и что проверить в полисе builders risk.',
      excerpt: 'Финансирование, конфликт с подрядчиком или шторм могут остановить стройку на месяцы. Что закон Флориды говорит об истекающих разрешениях и брошенных объектах и какие вопросы задать по builders risk, пока участок стоит пустой.',
      category: 'Страхование builders risk',
      body: [
        { type: 'p', text: 'Строительный кредит задерживается, подрядчик уходит, материалы опаздывают, а сезон ураганов может сдвинуть график на недели. Когда работы останавливаются, недостроенный дом или здание остаётся на участке, и возникают три практических вопроса: что будет с разрешением (permit), что делать, если подрядчик исчез, и подходит ли проекту ваш полис builders risk.' },
        { type: 'h2', text: 'У разрешения на строительство есть срок' },
        { type: 'p', text: 'Для **частного односемейного дома** закон Флориды говорит, что building permit истекает **через 1 год после выдачи** или в день вступления в силу следующей редакции Строительного кодекса Флориды — в зависимости от того, что наступит позже. Местные власти могут продлить разрешение и могут направить владельцу и подрядчику письменное уведомление не позднее чем за 30 дней до истечения ([ст. 553.79(1)(c)](' + S.s55379 + ')). Для других зданий и по вопросам продления обращайтесь в местный строительный департамент.' },
        { type: 'p', text: 'Если разрешение истекло, закон даёт владельцу несколько способов его **закрыть** ([ст. 553.79(16)](' + S.s55379 + ')):' },
        { type: 'ul', items: [
          'Можно оставить прежнего подрядчика или нанять **другого лицензированного подрядчика**, чтобы выполнить то, что требует разрешение. Новый подрядчик отвечает только за свою работу, а не за дефекты прежнего.',
          'Можно взять стройку на себя как **owner-builder** (владелец-застройщик) по правилам для owner-builders.',
          'Если требования разрешения в основном выполнены, местное ведомство может закрыть истёкшее разрешение **без нового**, по кодексу, действовавшему на момент подачи заявления.',
        ] },
        { type: 'h2', text: 'Если подрядчик перестал появляться' },
        { type: 'p', text: 'Во Флориде брошенный объект — основание для дисциплинарных мер против лицензированного подрядчика. Объект может **считаться брошенным через 90 дней**, если подрядчик прекратил работы без уважительной причины или без надлежащего уведомления владельца, либо без уважительной причины не работал 90 дней подряд ([ст. 489.129(1)(j)](' + S.s489129 + ')). Споры по договору — вопрос юридический; обсудите его с юристом и с лицензионной комиссией штата.' },
        { type: 'h2', text: 'Builders risk, пока стройка стоит' },
        { type: 'p', text: 'Полисы builders risk рассчитаны на идущее строительство, и они не одинаковы. В одних про паузу ничего особого не сказано, в других есть условия, связанные с остановкой работ или с тем, что участок остаётся без присмотра. Единого правила нет, поэтому прочитайте свой полис (или пришлите его нам) и найдите:' },
        { type: 'ol', items: [
          '**Срок действия.** Когда полис заканчивается и совпадает ли это с новым графиком? Узнайте, как его продлить, до того как он истечёт.',
          '**Условия при остановке или пустом участке.** Упоминает ли полис остановку работ, незанятый объект или какой-то срок? Что он требует от вас?',
          '**Уведомление.** Требуют ли полис или банк сообщать, когда работы остановились или изменился график?',
          '**Охрана участка.** Есть ли требования к забору, освещению, замкам или вывозу хранящихся материалов?',
          '**Материалы и кражи.** Покрываются ли материалы на участке и как рассматриваются кражи?',
          '**Кредит и договор.** Строительные кредиты и договоры часто устанавливают требования к страховке, которые действуют и во время задержки.',
        ] },
        { type: 'p', text: 'Сделайте фото и записи о состоянии участка в день остановки и при каждом визите. Такие записи пригодятся при любом последующем клейме, вопросе по разрешению или споре.' },
        { type: 'p', text: 'Как работает builders risk в целом — на нашей [странице builders risk](/ru/builders-risk-insurance-florida). Когда дом будет готов, следующий шаг описан в статье о [гарантии застройщика и страховке дома](/ru/blog/builder-warranty-vs-homeowners-insurance-florida).' },
        { type: 'callout', title: 'Стройка на паузе?', text: '[Оставьте заявку на расчёт](/ru/quote) или пришлите нам текущий полис builders risk и новый график. Лицензированный агент разберёт условия с вами на русском, английском или испанском. Это общая информация, а не юридическая консультация; полисы различаются, и мы смотрим условия конкретного полиса.' },
      ],
      faq: [
        { q: 'Когда истекает building permit во Флориде?', a: 'Для частного односемейного дома закон Флориды говорит, что разрешение истекает через 1 год после выдачи или при вступлении в силу следующей редакции Строительного кодекса Флориды — что наступит позже. Местные власти могут его продлить.' },
        { q: 'Когда объект считается брошенным во Флориде?', a: 'По ст. 489.129(1)(j) объект может считаться брошенным через 90 дней, если подрядчик прекратил работы без уважительной причины или надлежащего уведомления, либо без уважительной причины не работал 90 дней подряд.' },
        { q: 'Покрывает ли builders risk остановившуюся стройку?', a: 'Зависит от полиса. В некоторых есть условия на случай остановки работ или пустого участка, и у любого полиса есть дата окончания. Прочитайте свой полис или пришлите его нам на проверку.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 553.79 (2026): разрешения, заявления, выдача, инспекции (на английском)', url: S.s55379 },
        { label: 'Законы Флориды, ст. 489.129 (2026): дисциплинарные меры (брошенный объект) (на английском)', url: S.s489129 },
      ],
    },
  },
};
