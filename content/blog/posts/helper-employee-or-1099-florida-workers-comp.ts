import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against official sources:
// - s. 440.02(18) (2026): (c) "employee" includes independent contractors working in the
//   construction industry, persons paid by a construction contractor as a subcontractor unless
//   exempt/covered, and construction sole proprietors; (d)1 excludes non-construction
//   independent contractors who meet at least 4 of 6 criteria (or the alternative conditions);
//   (d)1.c the person claiming to be an independent contractor bears the burden of proof;
//   (d)5 casual employment not in the course of the trade is excluded.
//   s. 440.02(10) "construction industry" definition; division may set codes by rule.
// - DFS Division of Workers' Compensation, Employer FAQ: construction law "does not allow for
//   independent contractors"; the person is a business owner or an employee.
// - DFS Coverage Requirements page: construction 1+ employees; non-construction 4+; if a sub
//   has no coverage, its workers become the contractor's employees (69L-6.021 trade list).
// - s. 440.10(1)(b),(c),(f) (2026): contractor liable for uninsured subs' employees; contractor
//   shall require evidence of coverage; DFS penalty for misclassified "independent
//   contractors" (amount omitted).
// - s. 440.11(1)(a) (2026): if the employer fails to secure compensation, the injured employee
//   may claim compensation or sue, and certain defenses are barred.
// - s. 440.185(1),(2) (2026): employee reports within 30 days; employer reports to carrier
//   within 7 days of actual knowledge. DFS FAQ: file DWC-1 within 7 days even if unsure.
// No legal advice: classification depends on the facts.
const S = {
  s44002: 'https://www.flsenate.gov/Laws/Statutes/2026/440.02',
  s44010: 'https://www.flsenate.gov/Laws/Statutes/2026/440.10',
  s44011: 'https://www.flsenate.gov/Laws/Statutes/2026/440.11',
  s440185: 'https://www.flsenate.gov/Laws/Statutes/2026/440.185',
  dfsFaq: 'https://www.myfloridacfo.com/division/wc/employer/frequently-asked-questions',
  dfsReq: 'https://www.myfloridacfo.com/division/wc/employer/coverage-requirements',
};

export const post: BlogPost = {
  slug: 'helper-employee-or-1099-florida-workers-comp',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'Your Helper Got Hurt on the Job: Employee or 1099 Contractor Under Florida Workers’ Comp?',
      metaTitle: 'Helper Hurt on the Job: Employee or 1099? | M&K Agency',
      description: 'A helper gets hurt on your job. Employee or 1099 contractor under Florida workers’ comp? What the law looks at, construction vs. other work, and next steps.',
      excerpt: 'Paying someone on a 1099 does not decide whether they are your employee for workers’ comp. How Florida law draws the line, why construction work is different, and the first steps after an injury.',
      category: 'Handyman insurance',
      body: [
        { type: 'p', text: 'You bring a helper on a busy week: a cousin, a neighbor, a guy from the last job. You pay cash or send a 1099 at the end of the year. Then he falls off a ladder or cuts his hand on a saw. The first question is not about the tax form. It is whether Florida’s workers’ compensation law treats him as **your employee**.' },
        { type: 'h2', text: 'A 1099 does not settle it' },
        { type: 'p', text: 'Florida’s workers’ comp law has its own definitions, and they look at how the work is actually done, not at what you call the person. The person who says they are an independent contractor has the **burden of proving it** ([s. 440.02(18)(d)](' + S.s44002 + ')). The answer also depends on whether the work is in the **construction industry**, which the law defines as for-profit building, clearing, filling, excavation or substantial improvement in the size or use of a structure or the appearance of land. The state lists the specific trades by rule ([DFS](' + S.dfsReq + ')).' },
        { type: 'h2', text: 'Construction work: no “independent” helpers' },
        { type: 'p', text: 'For construction work, the Division of Workers’ Compensation puts it plainly: the law “does not allow for independent contractors in the construction industry.” A person is either a business owner or an employee of a business ([DFS employer FAQ](' + S.dfsFaq + ')). The statute counts as employees independent contractors working in construction, and people paid by a construction contractor as a subcontractor unless that subcontractor has its own coverage or a valid exemption ([s. 440.02(18)(c)](' + S.s44002 + ')).' },
        { type: 'p', text: 'If you work under a general contractor, the same logic runs up the chain. A contractor is liable for the employees of an uninsured subcontractor, and must ask subs for proof of coverage ([s. 440.10](' + S.s44010 + ')).' },
        { type: 'h2', text: 'Other work: the four-of-six test' },
        { type: 'p', text: 'Outside construction, a worker can be an independent contractor if they meet at least **four** of these, among other rules in the statute:' },
        { type: 'ul', items: [
          'They run a separate business with their own facility, truck, equipment or materials.',
          'They have, or have applied for, a federal employer identification number (with an exception for some sole proprietors).',
          'They are paid as a business, not as an individual.',
          'They have a business bank account for their business expenses.',
          'They can work for others whenever they choose, without an employment application.',
          'They are paid by the job or by competitive bid under a contract.',
        ] },
        { type: 'p', text: 'Many handyman jobs sit near the line between repair work and construction, so the classification of your work matters. That is a question to settle **before** you bring someone on, with the statute, the Division and your agent.' },
        { type: 'h2', text: 'If someone is hurt' },
        { type: 'ol', items: [
          'Get them medical care first.',
          'If you have workers’ comp, report the injury to your carrier **within 7 days** of learning about it, even if you are not sure it is covered ([s. 440.185](' + S.s440185 + '); [DFS](' + S.dfsFaq + ')). An employee generally must tell the employer within 30 days.',
          'Write down what happened, who was there, and how and how much you paid the person.',
          'Call your agent. If the person may count as your employee and you had no coverage, the law lets the injured worker claim benefits or sue you, and removes some defenses ([s. 440.11](' + S.s44011 + ')). That is a moment to talk to an attorney.',
        ] },
        { type: 'p', text: 'For coverage built around small repair and install work, see our [handyman insurance page](/en/handyman-insurance-florida). If you are just starting out, our guide to [opening a small business in Miami-Dade](/en/blog/start-small-business-miami-dade-licenses) covers the first registrations.' },
        { type: 'callout', title: 'About to hire a helper?', text: '[Request a quote](/en/quote) or call us before the first day. A licensed agent will go over workers’ comp and liability with you in English, Spanish or Russian. This is general information, not legal advice; whether a person is an employee depends on the facts and how your work is classified.' },
      ],
      faq: [
        { q: 'Is a 1099 helper an employee for Florida workers’ comp?', a: 'It depends. The tax form does not decide it. In construction work, Florida law does not recognize independent contractors for workers’ comp. Outside construction, the person must meet the statute’s criteria and has the burden of proving independent status.' },
        { q: 'How soon must I report a work injury in Florida?', a: 'An employer must report the injury to its workers’ comp carrier within 7 days after actually learning of it. The Division says to file the report even if you think the injury is not covered.' },
        { q: 'What if my subcontractor has no workers’ comp?', a: 'Under s. 440.10, a contractor is liable for the employees of a subcontractor who has not secured coverage. Contractors must ask subs for proof of coverage or an exemption certificate.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 440.02 (2026): definitions (employee, construction industry)', url: S.s44002 },
        { label: 'Florida Statutes s. 440.10 (2026): liability for compensation', url: S.s44010 },
        { label: 'Florida Statutes s. 440.11 (2026): exclusiveness of liability', url: S.s44011 },
        { label: 'Florida Statutes s. 440.185 (2026): notice of injury; reports', url: S.s440185 },
        { label: 'Florida DFS, Division of Workers’ Compensation: Employer Frequently Asked Questions', url: S.dfsFaq },
        { label: 'Florida DFS, Division of Workers’ Compensation: Coverage Requirements', url: S.dfsReq },
      ],
    },
    es: {
      title: 'Su ayudante se lastimó en el trabajo: ¿empleado o contratista 1099 según la compensación laboral de Florida?',
      metaTitle: 'Ayudante lesionado: ¿empleado o 1099? | M&K Agency',
      description: 'Un ayudante se lastima en su obra. ¿Empleado o contratista 1099 para el workers’ comp de Florida? Qué mira la ley, construcción vs. otros trabajos y qué hacer.',
      excerpt: 'Pagarle a alguien con un 1099 no decide si es su empleado para el workers’ comp. Cómo traza la línea la ley de Florida, por qué la construcción es distinta y los primeros pasos después de una lesión.',
      category: 'Seguro para handyman',
      body: [
        { type: 'p', text: 'Una semana con mucho trabajo, usted trae un ayudante: un primo, un vecino, alguien de la obra anterior. Le paga en efectivo o le manda un 1099 a fin de año. Un día se cae de la escalera o se corta con la sierra. La primera pregunta no es el formulario de impuestos, sino si la ley de compensación laboral de Florida lo considera **su empleado**.' },
        { type: 'h2', text: 'El 1099 no lo decide' },
        { type: 'p', text: 'La ley de workers’ comp de Florida tiene sus propias definiciones, y mira cómo se hace el trabajo en la realidad, no cómo usted llama a la persona. Quien dice ser contratista independiente tiene la **carga de probarlo** ([sección 440.02(18)(d)](' + S.s44002 + ')). La respuesta también depende de si el trabajo es de la **industria de la construcción**, que la ley define como construir, desmontar, rellenar, excavar o mejorar de forma sustancial el tamaño o el uso de una estructura o la apariencia de un terreno, con fines de lucro. El estado detalla los oficios por reglamento ([DFS](' + S.dfsReq + ')).' },
        { type: 'h2', text: 'En construcción: no hay ayudantes “independientes”' },
        { type: 'p', text: 'Para la construcción, la División de Compensación Laboral lo dice claro: la ley “no permite contratistas independientes en la industria de la construcción”. La persona es dueña de un negocio o es empleada de un negocio ([preguntas frecuentes del DFS](' + S.dfsFaq + ')). La ley cuenta como empleados a los contratistas independientes que trabajan en construcción y a quienes un contratista de construcción les paga como subcontratistas, salvo que ese subcontratista tenga su propia cobertura o una exención válida ([sección 440.02(18)(c)](' + S.s44002 + ')).' },
        { type: 'p', text: 'Si usted trabaja para un contratista general, la misma lógica sube por la cadena: el contratista responde por los empleados de un subcontratista sin seguro y debe pedirles prueba de cobertura a sus subs ([sección 440.10](' + S.s44010 + ')).' },
        { type: 'h2', text: 'Otros trabajos: la prueba de cuatro de seis' },
        { type: 'p', text: 'Fuera de la construcción, un trabajador puede ser contratista independiente si cumple al menos **cuatro** de estos puntos, entre otras reglas de la ley:' },
        { type: 'ul', items: [
          'Tiene un negocio propio, con su local, camioneta, equipo o materiales.',
          'Tiene, o solicitó, un número federal de empleador (EIN), salvo excepciones para algunos dueños únicos.',
          'Se le paga como negocio, no como persona.',
          'Tiene una cuenta bancaria del negocio para sus gastos.',
          'Puede trabajar para otros cuando quiera, sin llenar una solicitud de empleo.',
          'Cobra por trabajo terminado o por oferta competitiva bajo un contrato.',
        ] },
        { type: 'p', text: 'Muchos trabajos de handyman quedan cerca de la línea entre reparación y construcción, así que la clasificación de su trabajo importa. Conviene aclararla **antes** de traer a alguien, con la ley, la División y su agente.' },
        { type: 'h2', text: 'Si alguien se lastima' },
        { type: 'ol', items: [
          'Primero, que reciba atención médica.',
          'Si tiene workers’ comp, reporte la lesión a su aseguradora **dentro de los 7 días** después de enterarse, aunque no esté seguro de que esté cubierta ([sección 440.185](' + S.s440185 + '); [DFS](' + S.dfsFaq + ')). El empleado, por lo general, debe avisarle al empleador dentro de 30 días.',
          'Anote qué pasó, quién estaba y cómo y cuánto le pagaba a la persona.',
          'Llame a su agente. Si la persona puede contar como su empleado y usted no tenía cobertura, la ley le permite al trabajador reclamar beneficios o demandarlo, y le quita a usted algunas defensas ([sección 440.11](' + S.s44011 + ')). En ese momento conviene hablar con un abogado.',
        ] },
        { type: 'p', text: 'Para coberturas pensadas para trabajos pequeños de reparación e instalación, vea nuestra [página de seguro para handyman](/es/handyman-insurance-florida). Si va empezando, nuestra guía sobre [cómo abrir un pequeño negocio en Miami-Dade](/es/blog/start-small-business-miami-dade-licenses) explica los primeros registros.' },
        { type: 'callout', title: '¿Va a contratar un ayudante?', text: '[Pida una cotización](/es/quote) o llámenos antes del primer día. Un agente con licencia revisa con usted el workers’ comp y la responsabilidad civil en español, inglés o ruso. Esto es información general, no asesoría legal; si una persona es empleada o no depende de los hechos y de cómo se clasifica su trabajo.' },
      ],
      faq: [
        { q: '¿Un ayudante con 1099 es empleado para el workers’ comp de Florida?', a: 'Depende. El formulario de impuestos no lo decide. En construcción, la ley de Florida no reconoce contratistas independientes para el workers’ comp. Fuera de la construcción, la persona debe cumplir los criterios de la ley y le toca a ella probar que es independiente.' },
        { q: '¿En cuánto tiempo debo reportar una lesión de trabajo en Florida?', a: 'El empleador debe reportarla a su aseguradora de workers’ comp dentro de los 7 días después de enterarse. La División indica que se presente el reporte aunque usted crea que la lesión no está cubierta.' },
        { q: '¿Qué pasa si mi subcontratista no tiene workers’ comp?', a: 'Según la sección 440.10, el contratista responde por los empleados de un subcontratista que no tiene cobertura. Los contratistas deben pedirles a sus subs prueba de cobertura o el certificado de exención.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 440.02 (2026): definiciones (empleado, industria de la construcción) (en inglés)', url: S.s44002 },
        { label: 'Estatutos de Florida, sección 440.10 (2026): responsabilidad por la compensación (en inglés)', url: S.s44010 },
        { label: 'Estatutos de Florida, sección 440.11 (2026): exclusividad de la responsabilidad (en inglés)', url: S.s44011 },
        { label: 'Estatutos de Florida, sección 440.185 (2026): aviso de lesión; reportes (en inglés)', url: S.s440185 },
        { label: 'DFS de Florida, División de Compensación Laboral: preguntas frecuentes de empleadores (en inglés)', url: S.dfsFaq },
        { label: 'DFS de Florida, División de Compensación Laboral: requisitos de cobertura (en inglés)', url: S.dfsReq },
      ],
    },
    ru: {
      title: 'Помощник травмировался на работе: работник или подрядчик на 1099 по закону Флориды о workers’ comp?',
      metaTitle: 'Травма помощника: работник или 1099? | M&K Agency',
      description: 'Помощник травмировался на вашем объекте. Работник он или подрядчик на 1099 для workers’ comp во Флориде? Что смотрит закон, стройка и другие работы, что делать.',
      excerpt: 'Оплата по 1099 не решает, считается ли человек вашим работником для workers’ comp. Где закон Флориды проводит границу, почему со стройкой всё иначе и что делать сразу после травмы.',
      category: 'Страхование для хендименов',
      body: [
        { type: 'p', text: 'В горячую неделю вы берёте помощника: родственника, соседа, знакомого с прошлого объекта. Платите наличными или в конце года отправляете 1099. А потом он падает со стремянки или режет руку пилой. Первый вопрос — не про налоговую форму, а про то, считает ли закон Флориды о workers’ compensation его **вашим работником**.' },
        { type: 'h2', text: '1099 ничего не решает' },
        { type: 'p', text: 'У закона Флориды о workers’ comp свои определения, и смотрит он на то, как реально устроена работа, а не на то, как вы называете человека. Тот, кто утверждает, что он independent contractor, **обязан это доказать** ([ст. 440.02(18)(d)](' + S.s44002 + ')). Ответ зависит и от того, относится ли работа к **строительной отрасли**: закон определяет её как коммерческое строительство, расчистку, отсыпку, земляные работы или существенное изменение размера или назначения здания либо вида участка. Конкретные профессии штат перечисляет в правилах ([DFS](' + S.dfsReq + ')).' },
        { type: 'h2', text: 'Стройка: «независимых» помощников не бывает' },
        { type: 'p', text: 'Про строительство Отдел workers’ compensation говорит прямо: закон «не допускает independent contractors в строительной отрасли». Человек либо владелец бизнеса, либо работник бизнеса ([FAQ для работодателей, DFS](' + S.dfsFaq + ')). Закон считает работниками independent contractors в строительстве, а также тех, кому строительный подрядчик платит как субподрядчикам, если у такого субподрядчика нет своей страховки или действующего exemption ([ст. 440.02(18)(c)](' + S.s44002 + ')).' },
        { type: 'p', text: 'Если вы работаете на генподрядчика, та же логика идёт вверх по цепочке: подрядчик отвечает за работников незастрахованного субподрядчика и обязан требовать от субов подтверждение покрытия ([ст. 440.10](' + S.s44010 + ')).' },
        { type: 'h2', text: 'Другие работы: тест «четыре из шести»' },
        { type: 'p', text: 'Вне строительства человек может считаться independent contractor, если выполняются минимум **четыре** условия из этих (плюс другие правила закона):' },
        { type: 'ul', items: [
          'У него свой бизнес: своё помещение, машина, инструмент или материалы.',
          'У него есть федеральный номер работодателя (EIN) или он его запросил (с исключением для некоторых sole proprietors).',
          'Оплата идёт на бизнес, а не физическому лицу.',
          'У него есть бизнес-счёт в банке для рабочих расходов.',
          'Он может работать на других когда захочет, без оформления на работу.',
          'Оплата — за выполненную работу или по конкурсной заявке по договору.',
        ] },
        { type: 'p', text: 'Многие работы хендимена находятся на границе между ремонтом и строительством, поэтому классификация вашей работы важна. Её стоит выяснить **до того**, как вы возьмёте человека, — по закону, в Отделе workers’ comp и у своего агента.' },
        { type: 'h2', text: 'Если человек травмировался' },
        { type: 'ol', items: [
          'Сначала — медицинская помощь.',
          'Если у вас есть workers’ comp, сообщите о травме страховой **в течение 7 дней** с момента, как узнали, даже если не уверены, что случай покрывается ([ст. 440.185](' + S.s440185 + '); [DFS](' + S.dfsFaq + ')). Работник, как правило, должен сообщить работодателю в течение 30 дней.',
          'Запишите, что произошло, кто был рядом и как и сколько вы платили этому человеку.',
          'Позвоните агенту. Если человек может считаться вашим работником, а страховки у вас не было, закон позволяет ему требовать выплат или подать на вас в суд, и часть аргументов защиты вам будет недоступна ([ст. 440.11](' + S.s44011 + ')). В такой ситуации стоит поговорить с юристом.',
        ] },
        { type: 'p', text: 'Страхование для небольших ремонтных и монтажных работ — на нашей [странице для хендименов](/ru/handyman-insurance-florida). Если вы только начинаете, первые регистрации описаны в статье о том, [как открыть малый бизнес в Майами-Дейд](/ru/blog/start-small-business-miami-dade-licenses).' },
        { type: 'callout', title: 'Собираетесь взять помощника?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните нам до его первого рабочего дня. Лицензированный агент разберёт с вами workers’ comp и ответственность на русском, английском или испанском. Это общая информация, а не юридическая консультация; кем считается человек, зависит от фактов и от классификации вашей работы.' },
      ],
      faq: [
        { q: 'Помощник на 1099 — это работник для workers’ comp во Флориде?', a: 'Зависит от ситуации. Налоговая форма этого не решает. В строительстве закон Флориды не признаёт independent contractors для целей workers’ comp. Вне строительства человек должен соответствовать критериям закона, и доказывать независимость придётся ему.' },
        { q: 'В какой срок нужно сообщить о травме на работе во Флориде?', a: 'Работодатель должен сообщить своей страховой workers’ comp в течение 7 дней после того, как узнал о травме. Отдел workers’ comp советует подавать отчёт, даже если вы считаете, что случай не покрывается.' },
        { q: 'Что, если у моего субподрядчика нет workers’ comp?', a: 'По ст. 440.10 подрядчик отвечает за работников субподрядчика, у которого нет покрытия. Подрядчик обязан требовать от субов подтверждение страховки или сертификат exemption.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 440.02 (2026): определения (работник, строительная отрасль) (на английском)', url: S.s44002 },
        { label: 'Законы Флориды, ст. 440.10 (2026): ответственность за компенсацию (на английском)', url: S.s44010 },
        { label: 'Законы Флориды, ст. 440.11 (2026): исключительность ответственности (на английском)', url: S.s44011 },
        { label: 'Законы Флориды, ст. 440.185 (2026): уведомление о травме; отчёты (на английском)', url: S.s440185 },
        { label: 'DFS Флориды, Отдел workers’ compensation: FAQ для работодателей (на английском)', url: S.dfsFaq },
        { label: 'DFS Флориды, Отдел workers’ compensation: требования к покрытию (на английском)', url: S.dfsReq },
      ],
    },
  },
};
