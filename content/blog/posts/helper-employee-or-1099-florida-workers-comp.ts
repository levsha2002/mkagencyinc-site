import type { BlogPost } from '../types';

// Facts re-checked 2026-10-18 against official sources (refresh of the 2026-10-04 post):
// - s. 440.02 (2026): (10) "construction industry" = for-profit building, clearing, filling,
//   excavation or substantial improvement in size/use of a structure or appearance of land; not a
//   homeowner's own-premises work unless sold/leased within 1 year; division sets codes by rule.
//   (6) "casual" = work anticipated to take 10 working days or less and total labor cost under $500.
//   (18)(b)2 construction: no more than 3 officers per corporation (or affiliated group) may elect
//   exemption; each must own at least 10% and be listed with the Division of Corporations.
//   (18)(c)2-4 "employee" includes persons paid by a construction contractor as a subcontractor
//   (unless exempt/covered), independent contractors in construction, construction sole
//   proprietors and partners. (18)(d)1.a four of six criteria (non-construction only); (d)1.b
//   alternative conditions; (d)1.c the person claiming independent status bears the burden;
//   (d)5 casual AND not in the course of the employer's trade is excluded.
//   (20)(b)2 "employment" = private employers with 4+ employees, or 1+ in construction.
// - s. 440.05 (2026): (3) officer files the notice of election electronically with DFS and
//   certifies that the corporation's employees are covered; (4) certificate is not a DBPR license;
//   (6) certificate valid 2 years; (8)(a) $50 fee for a construction exemption or renewal.
// - s. 440.10 (2026): (1)(a) every construction contractor/subcontractor must secure coverage;
//   (1)(b) contractor liable for employees of a sub who has not secured payment; (1)(c) contractor
//   shall require evidence of coverage / exemption certificate; (1)(f) DFS penalty up to $5,000
//   per worker classified as an independent contractor who does not meet s. 440.02 criteria.
// - s. 440.107 (2026): (7)(a) failure to secure coverage -> stop-work order within 72 hours,
//   cessation of all business operations; (7)(d)1 penalty of 2x the premium that would have been
//   owed for the uninsured period in the preceding 12 months, or $1,000, whichever is greater.
// - s. 440.11(1)(a) (2026): uninsured employer -> worker may claim compensation or sue; defenses
//   of fellow-employee negligence, assumption of risk and comparative negligence barred.
// - s. 440.185 (2026): (1) employee notifies employer within 30 days; (2) employer reports to its
//   carrier within 7 days after actual knowledge.
// - DFS Division of Workers' Compensation: Coverage Requirements (construction 1+ employees incl.
//   corporate officers / LLC members; non-construction 4+; uninsured sub's workers become the
//   contractor's employees; trades listed in 69L-6.021 F.A.C.); Employer FAQ (moved to
//   /education-and-resources/; "does not allow for independent contractors in the construction
//   industry"; file DWC-1 within 7 days even if you think it is not covered); Exemptions and
//   Construction Exemption pages (officers / LLC members, not the business; 10% ownership; max 3;
//   $50; filed online; (850) 413-1609).
// - IRS "Independent contractor (self-employed) or employee?" (reviewed 19-May-2026): federal tax
//   test is common law: behavioral, financial, type of relationship; no single factor decides.
// No legal advice: classification depends on the facts.
const S = {
  s44002: 'https://www.flsenate.gov/Laws/Statutes/2026/440.02',
  s44005: 'https://www.flsenate.gov/Laws/Statutes/2026/440.05',
  s44010: 'https://www.flsenate.gov/Laws/Statutes/2026/440.10',
  s440107: 'https://www.flsenate.gov/Laws/Statutes/2026/440.107',
  s44011: 'https://www.flsenate.gov/Laws/Statutes/2026/440.11',
  s440185: 'https://www.flsenate.gov/Laws/Statutes/2026/440.185',
  dfsFaq: 'https://www.myfloridacfo.com/division/wc/employer/education-and-resources/frequently-asked-questions',
  dfsReq: 'https://www.myfloridacfo.com/division/wc/employer/coverage-requirements',
  dfsEx: 'https://www.myfloridacfo.com/division/wc/employer/exemptions/construction',
  irs: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee',
};

export const post: BlogPost = {
  slug: 'helper-employee-or-1099-florida-workers-comp',
  datePublished: '2026-10-04',
  dateModified: '2026-10-18',
  translations: {
    en: {
      title: 'Your Helper Got Hurt on the Job: Employee or 1099 Contractor Under Florida Workers’ Comp?',
      metaTitle: 'Helper: Employee or 1099? Florida Workers’ Comp | M&K Agency',
      description: 'Is your 1099 helper an employee for Florida workers’ comp? The one-employee rule in construction, the 4-of-6 test, exemptions and what to do after an injury.',
      ogAlt: 'Construction site with a hard hat resting on a toolbox',
      excerpt: 'Paying someone on a 1099 does not decide whether they are your employee for workers’ comp. How Florida law draws the line, why construction is different, what an exemption does and does not do, and the first steps after an injury.',
      category: 'Contractor & handyman insurance',
      body: [
        { type: 'p', text: 'You bring on a helper for a busy week: a cousin, a neighbor, someone from the last job. You pay cash or send a 1099 at the end of the year. Then he falls off a ladder or cuts his hand on a saw. The first question is not about the tax form. It is whether Florida’s workers’ compensation law treats him as **your employee**.' },
        { type: 'h2', text: 'A 1099 does not settle it' },
        { type: 'p', text: 'A 1099 is a federal tax form. Even the IRS does not let the form decide: its common-law test looks at behavioral control, financial control and the type of relationship, and says no single factor settles the question ([IRS](' + S.irs + ')). Florida’s workers’ comp law then uses **its own definitions**, which look at how the work is actually done, not at what you call the person. Whoever claims to be an independent contractor has the **burden of proving it** ([s. 440.02(18)(d)](' + S.s44002 + ')).' },
        { type: 'h2', text: 'When Florida requires workers’ comp' },
        { type: 'p', text: 'The headcount rule depends on your industry ([s. 440.02(20)](' + S.s44002 + '); [DFS](' + S.dfsReq + ')):' },
        { type: 'ul', items: [
          '**Construction:** coverage is required with **one or more** employees, and corporate officers or LLC members count unless they hold a valid exemption.',
          '**Other businesses:** coverage is required with **four or more** employees, again counting officers and LLC members.',
        ] },
        { type: 'p', text: 'The law defines the construction industry as for-profit building, clearing, filling, excavation or substantial improvement in the size or use of a structure or the appearance of land. A homeowner working on his own house is not “construction” unless the home is meant to be sold or leased within a year. The Division lists the specific trade codes by rule ([s. 440.02(10)](' + S.s44002 + '); [DFS](' + S.dfsReq + ')). Many handyman jobs sit near the line between small repairs and construction, so how your work is classified matters. Settle that **before** you bring someone on.' },
        { type: 'h2', text: 'Construction work: no “independent” helpers' },
        { type: 'p', text: 'For construction, the Division of Workers’ Compensation puts it plainly: Florida law “does not allow for independent contractors in the construction industry.” A person is either a business owner or an employee of a business ([DFS employer FAQ](' + S.dfsFaq + ')). The statute counts as employees independent contractors working in construction, construction sole proprietors, and anyone a construction contractor pays as a subcontractor unless that subcontractor has its own coverage or a valid exemption ([s. 440.02(18)(c)](' + S.s44002 + ')).' },
        { type: 'p', text: 'The same logic runs up the chain. A contractor is liable for the employees of an uninsured subcontractor and must ask subs for proof of coverage or a copy of the officer’s exemption certificate ([s. 440.10(1)](' + S.s44010 + ')). If a sub has no coverage, the Division says, those workers become the contractor’s employees ([DFS](' + S.dfsReq + ')).' },
        { type: 'h2', text: 'Exemptions are for owners, not helpers' },
        { type: 'p', text: 'An exemption lets an **owner** opt himself out; it does not cover anyone else. In construction it is available only to officers of a corporation or members of an LLC who own at least 10% of a company registered with the Florida Division of Corporations, with no more than three per company. The officer files online with the Division, pays a $50 fee, and the certificate lasts two years ([s. 440.02(18)(b)](' + S.s44002 + '); [s. 440.05](' + S.s44005 + '); [DFS](' + S.dfsEx + ')). When filing, the officer must certify that the company’s employees are covered. So a helper who works under you with no company of his own cannot “bring” an exemption, and your own exemption does not reach him. An exemption is also not a contractor license.' },
        { type: 'h2', text: 'Other work: the four-of-six test' },
        { type: 'p', text: 'Outside construction, a worker can be an independent contractor if they meet at least **four** of these, among other rules in the statute ([s. 440.02(18)(d)](' + S.s44002 + ')):' },
        { type: 'ul', items: [
          'They run a separate business with their own facility, truck, equipment or materials.',
          'They have, or have applied for, a federal employer identification number (some sole proprietors are excepted).',
          'They are paid as a business, not as an individual.',
          'They have a business bank account for their business expenses.',
          'They can take work from others when they choose, without an employment application.',
          'They are paid by the job or by competitive bid under a contract.',
        ] },
        { type: 'p', text: 'There is also a narrow exclusion for **casual** work: a job expected to take 10 working days or less with total labor cost under $500. It applies only when the work is also outside the course of your trade, so a helper doing your regular kind of job does not fit it ([s. 440.02(6), (18)(d)5](' + S.s44002 + ')).' },
        { type: 'h2', text: 'What the state can do' },
        { type: 'p', text: 'If the Department of Financial Services finds that an employer required to carry coverage does not have it, the law treats that as a serious danger and calls for a **stop-work order** within 72 hours, which halts all business operations. The penalty is twice what the coverage would have cost for the uninsured period in the past 12 months, or $1,000, whichever is greater ([s. 440.107(7)](' + S.s440107 + ')). On top of that, the Department can assess up to $5,000 for each worker you labeled an independent contractor who does not meet the statute’s criteria ([s. 440.10(1)(f)](' + S.s44010 + ')).' },
        { type: 'h2', text: 'If someone is hurt' },
        { type: 'ol', items: [
          'Get them medical care first.',
          'If you have workers’ comp, report the injury to your carrier **within 7 days** of learning about it, even if you are not sure it is covered ([s. 440.185](' + S.s440185 + '); [DFS](' + S.dfsFaq + ')). An employee generally must tell the employer within 30 days.',
          'Write down what happened, who was there, and how and how much you paid the person.',
          'Call your agent. If the person may count as your employee and you had no coverage, the law lets the injured worker claim benefits or sue you, and removes defenses such as the worker’s own negligence ([s. 440.11](' + S.s44011 + ')). That is a moment to talk to an attorney.',
        ] },
        { type: 'p', text: 'For coverage built around small repair and install work, see our [handyman insurance page](/en/handyman-insurance-florida). For general contractors and remodelers, see [contractor insurance in Florida](/en/contractor-insurance-florida). If you are just starting out, our guide to [opening a small business in Miami-Dade](/en/blog/start-small-business-miami-dade-licenses) covers the first registrations.' },
        { type: 'callout', title: 'About to hire a helper?', text: '[Request a quote](/en/quote) or call (305) 859-3953 before the first day. A licensed agent will go over workers’ comp and liability with you in English, Spanish or Russian at our Florida City office (Monday–Friday 9–6, Saturday by appointment). This is general information, not legal advice; whether a person is an employee depends on the facts, how your work is classified and the terms of your policy.' },
      ],
      faq: [
        { q: 'Is a 1099 helper an employee for Florida workers’ comp?', a: 'The tax form does not decide it. In construction, Florida law does not recognize independent contractors for workers’ comp. Outside construction, the person must meet the statute’s criteria and has the burden of proving independent status.' },
        { q: 'Do I need workers’ comp with just one helper?', a: 'In construction, yes: the requirement starts at one employee. Outside construction it starts at four employees, counting corporate officers and LLC members.' },
        { q: 'Can my helper get an exemption instead?', a: 'Construction exemptions are only for officers or LLC members with at least 10% ownership of a company registered with the state. A helper without his own company cannot get one.' },
        { q: 'How soon must I report a work injury?', a: 'Within 7 days after you actually learn of it, to your workers’ comp carrier. The Division says to file even if you think the injury is not covered.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 440.02 (2026): definitions (employee, employment, construction industry, casual)', url: S.s44002 },
        { label: 'Florida Statutes s. 440.05 (2026): election of exemption; certificate', url: S.s44005 },
        { label: 'Florida Statutes s. 440.10 (2026): liability for compensation', url: S.s44010 },
        { label: 'Florida Statutes s. 440.107 (2026): compliance; stop-work orders; penalties', url: S.s440107 },
        { label: 'Florida Statutes s. 440.11 (2026): exclusiveness of liability', url: S.s44011 },
        { label: 'Florida Statutes s. 440.185 (2026): notice of injury; reports', url: S.s440185 },
        { label: 'Florida DFS, Division of Workers’ Compensation: Coverage Requirements', url: S.dfsReq },
        { label: 'Florida DFS, Division of Workers’ Compensation: Employer Frequently Asked Questions', url: S.dfsFaq },
        { label: 'Florida DFS, Division of Workers’ Compensation: Construction Industry Exemptions', url: S.dfsEx },
        { label: 'IRS: Independent contractor (self-employed) or employee?', url: S.irs },
      ],
    },
    es: {
      title: 'Su ayudante se lastimó en el trabajo: ¿empleado o contratista 1099 según la compensación laboral de Florida?',
      metaTitle: 'Ayudante: ¿empleado o 1099? Workers’ comp | M&K Agency',
      description: '¿Su ayudante con 1099 es empleado para el workers’ comp de Florida? La regla de un empleado en construcción, la prueba de 4 de 6 y qué hacer si se lastima.',
      ogAlt: 'Obra con un casco sobre una caja de herramientas',
      excerpt: 'Pagarle a alguien con un 1099 no decide si es su empleado para el workers’ comp. Cómo traza la línea la ley de Florida, por qué la construcción es distinta, para qué sirve una exención y qué hacer después de una lesión.',
      category: 'Seguro para contratistas y handyman',
      body: [
        { type: 'p', text: 'Una semana con mucho trabajo, usted trae un ayudante: un primo, un vecino, alguien de la obra anterior. Le paga en efectivo o le manda un 1099 a fin de año. Un día se cae de la escalera o se corta con la sierra. La primera pregunta no es el formulario de impuestos, sino si la ley de compensación laboral de Florida lo considera **su empleado**.' },
        { type: 'h2', text: 'El 1099 no lo decide' },
        { type: 'p', text: 'El 1099 es un formulario federal de impuestos, y ni siquiera el IRS deja que el formulario decida: su prueba mira el control sobre cómo se hace el trabajo, el control financiero y el tipo de relación, y aclara que ningún factor por sí solo resuelve la pregunta ([IRS](' + S.irs + ')). La ley de workers’ comp de Florida, además, tiene **sus propias definiciones** y mira cómo se hace el trabajo en la realidad, no cómo usted llama a la persona. Quien dice ser contratista independiente tiene la **carga de probarlo** ([sección 440.02(18)(d)](' + S.s44002 + ')).' },
        { type: 'h2', text: 'Cuándo exige Florida el workers’ comp' },
        { type: 'p', text: 'El número de empleados que activa la obligación depende de su industria ([sección 440.02(20)](' + S.s44002 + '); [DFS](' + S.dfsReq + ')):' },
        { type: 'ul', items: [
          '**Construcción:** se exige con **uno o más** empleados, y los oficiales de la corporación o miembros de la LLC cuentan, salvo que tengan una exención válida.',
          '**Otros negocios:** se exige con **cuatro o más** empleados, contando también a oficiales y miembros de la LLC.',
        ] },
        { type: 'p', text: 'La ley define la construcción como construir, desmontar, rellenar, excavar o mejorar de forma sustancial el tamaño o el uso de una estructura o la apariencia de un terreno, con fines de lucro. El dueño que trabaja en su propia casa no hace “construcción”, a menos que piense venderla o alquilarla dentro de un año. La División detalla los oficios por reglamento ([sección 440.02(10)](' + S.s44002 + '); [DFS](' + S.dfsReq + ')). Muchos trabajos de handyman quedan en la frontera entre reparaciones menores y construcción, así que la clasificación de su trabajo importa. Aclárela **antes** de traer a alguien.' },
        { type: 'h2', text: 'En construcción no hay ayudantes “independientes”' },
        { type: 'p', text: 'Para la construcción, la División de Compensación Laboral lo dice claro: la ley de Florida “no permite contratistas independientes en la industria de la construcción”. La persona es dueña de un negocio o es empleada de un negocio ([preguntas frecuentes del DFS](' + S.dfsFaq + ')). La ley cuenta como empleados a los contratistas independientes que trabajan en construcción, a los dueños únicos del sector y a quien un contratista le paga como subcontratista, salvo que ese subcontratista tenga su propia cobertura o una exención válida ([sección 440.02(18)(c)](' + S.s44002 + ')).' },
        { type: 'p', text: 'La misma lógica sube por la cadena: el contratista responde por los empleados de un subcontratista sin seguro y debe pedirle prueba de cobertura o copia del certificado de exención del oficial ([sección 440.10(1)](' + S.s44010 + ')). Según la División, si el sub no tiene cobertura, esos trabajadores pasan a ser empleados del contratista ([DFS](' + S.dfsReq + ')).' },
        { type: 'h2', text: 'La exención es para dueños, no para ayudantes' },
        { type: 'p', text: 'Una exención permite que un **dueño** se excluya a sí mismo; no cubre a nadie más. En construcción solo pueden pedirla los oficiales de una corporación o miembros de una LLC con al menos 10% de una compañía registrada en la División de Corporaciones de Florida, y como máximo tres por compañía. Se solicita en línea ante la División, cuesta $50 de cargo estatal y el certificado dura dos años ([sección 440.02(18)(b)](' + S.s44002 + '); [sección 440.05](' + S.s44005 + '); [DFS](' + S.dfsEx + ')). Al pedirla, el oficial debe certificar que los empleados de la compañía están asegurados. Por eso, un ayudante que trabaja para usted sin compañía propia no puede “traer” una exención, y la exención suya no lo protege a él. Tampoco es una licencia de contratista.' },
        { type: 'h2', text: 'Otros trabajos: la prueba de cuatro de seis' },
        { type: 'p', text: 'Fuera de la construcción, un trabajador puede ser contratista independiente si cumple al menos **cuatro** de estos puntos, entre otras reglas de la ley ([sección 440.02(18)(d)](' + S.s44002 + ')):' },
        { type: 'ul', items: [
          'Tiene un negocio propio, con su local, camioneta, equipo o materiales.',
          'Tiene, o solicitó, un número federal de empleador (EIN), con excepciones para algunos dueños únicos.',
          'Se le paga como negocio, no como persona.',
          'Tiene una cuenta bancaria del negocio para sus gastos.',
          'Puede trabajar para otros cuando quiera, sin llenar una solicitud de empleo.',
          'Cobra por trabajo terminado o por oferta competitiva bajo un contrato.',
        ] },
        { type: 'p', text: 'Existe además una exclusión estrecha para el trabajo **ocasional**: uno que se espera terminar en 10 días laborables o menos, con un costo total de mano de obra menor de $500. Solo aplica si el trabajo tampoco es parte de su oficio, así que un ayudante que hace el mismo tipo de trabajo que usted no entra ahí ([sección 440.02(6) y (18)(d)5](' + S.s44002 + ')).' },
        { type: 'h2', text: 'Qué puede hacer el estado' },
        { type: 'p', text: 'Si el Departamento de Servicios Financieros comprueba que un empleador obligado no tiene cobertura, la ley lo trata como un peligro serio y ordena una **orden de paralización de trabajo** (stop-work order) dentro de 72 horas, que detiene todas las operaciones del negocio. La multa es el doble de lo que habría costado la cobertura durante el período sin seguro de los últimos 12 meses, o $1,000, lo que sea mayor ([sección 440.107(7)](' + S.s440107 + ')). Además, el Departamento puede imponer hasta $5,000 por cada trabajador que usted trató como contratista independiente sin que cumpla los criterios de la ley ([sección 440.10(1)(f)](' + S.s44010 + ')).' },
        { type: 'h2', text: 'Si alguien se lastima' },
        { type: 'ol', items: [
          'Primero, que reciba atención médica.',
          'Si tiene workers’ comp, reporte la lesión a su aseguradora **dentro de los 7 días** después de enterarse, aunque no esté seguro de que esté cubierta ([sección 440.185](' + S.s440185 + '); [DFS](' + S.dfsFaq + ')). El empleado, por lo general, debe avisarle al empleador dentro de 30 días.',
          'Anote qué pasó, quién estaba, y cómo y cuánto le pagaba a la persona.',
          'Llame a su agente. Si la persona puede contar como su empleado y usted no tenía cobertura, la ley le permite al trabajador reclamar beneficios o demandarlo, y usted pierde defensas como la negligencia del propio trabajador ([sección 440.11](' + S.s44011 + ')). En ese momento conviene hablar con un abogado.',
        ] },
        { type: 'p', text: 'Para coberturas pensadas para trabajos pequeños de reparación e instalación, vea nuestra [página de seguro para handyman](/es/handyman-insurance-florida). Para contratistas generales y remodeladores, vea [seguro para contratistas en Florida](/es/contractor-insurance-florida). Si va empezando, nuestra guía sobre [cómo abrir un pequeño negocio en Miami-Dade](/es/blog/start-small-business-miami-dade-licenses) explica los primeros registros.' },
        { type: 'callout', title: '¿Va a contratar un ayudante?', text: '[Pida una cotización](/es/quote) o llame al (305) 859-3953 antes del primer día. Un agente con licencia revisa con usted el workers’ comp y la responsabilidad civil en español, inglés o ruso, en nuestra oficina de Florida City (lunes a viernes de 9 a 6, sábados con cita). Esto es información general, no asesoría legal; si una persona es empleada o no depende de los hechos, de cómo se clasifica su trabajo y de los términos de su póliza.' },
      ],
      faq: [
        { q: '¿Un ayudante con 1099 es empleado para el workers’ comp de Florida?', a: 'El formulario de impuestos no lo decide. En construcción, la ley de Florida no reconoce contratistas independientes para el workers’ comp. Fuera de la construcción, la persona debe cumplir los criterios de la ley y le toca a ella probar que es independiente.' },
        { q: '¿Necesito workers’ comp con un solo ayudante?', a: 'En construcción, sí: la obligación empieza con un empleado. En otros negocios empieza con cuatro, contando a los oficiales y miembros de la LLC.' },
        { q: '¿Mi ayudante puede sacar una exención?', a: 'Las exenciones de construcción son solo para oficiales o miembros de una LLC con al menos 10% de una compañía registrada en el estado. Un ayudante sin compañía propia no puede obtenerla.' },
        { q: '¿En cuánto tiempo debo reportar una lesión de trabajo?', a: 'Dentro de los 7 días después de enterarse, a su aseguradora de workers’ comp. La División indica que lo reporte aunque crea que la lesión no está cubierta.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 440.02 (2026): definiciones (empleado, empleo, construcción, trabajo ocasional) (en inglés)', url: S.s44002 },
        { label: 'Estatutos de Florida, sección 440.05 (2026): exención; certificado (en inglés)', url: S.s44005 },
        { label: 'Estatutos de Florida, sección 440.10 (2026): responsabilidad por la compensación (en inglés)', url: S.s44010 },
        { label: 'Estatutos de Florida, sección 440.107 (2026): cumplimiento; órdenes de paralización; multas (en inglés)', url: S.s440107 },
        { label: 'Estatutos de Florida, sección 440.11 (2026): exclusividad de la responsabilidad (en inglés)', url: S.s44011 },
        { label: 'Estatutos de Florida, sección 440.185 (2026): aviso de lesión; reportes (en inglés)', url: S.s440185 },
        { label: 'DFS de Florida, División de Compensación Laboral: requisitos de cobertura (en inglés)', url: S.dfsReq },
        { label: 'DFS de Florida, División de Compensación Laboral: preguntas frecuentes de empleadores (en inglés)', url: S.dfsFaq },
        { label: 'DFS de Florida, División de Compensación Laboral: exenciones en construcción (en inglés)', url: S.dfsEx },
        { label: 'IRS: ¿contratista independiente o empleado? (en inglés)', url: S.irs },
      ],
    },
    ru: {
      title: 'Помощник травмировался на работе: работник или подрядчик на 1099 по закону Флориды о workers’ comp?',
      metaTitle: 'Помощник: работник или 1099? Workers’ comp | M&K Agency',
      description: 'Помощник на 1099 — работник для workers’ comp во Флориде? Правило одного работника в стройке, тест «4 из 6», exemption, stop-work order и что делать при травме.',
      ogAlt: 'Стройплощадка: каска лежит на ящике с инструментами',
      excerpt: 'Оплата по 1099 не решает, считается ли человек вашим работником для workers’ comp. Где закон Флориды проводит границу, почему со стройкой всё иначе, что даёт exemption и что делать сразу после травмы.',
      category: 'Страхование для подрядчиков и хендименов',
      body: [
        { type: 'p', text: 'В горячую неделю вы берёте помощника: родственника, соседа, знакомого с прошлого объекта. Платите наличными или в конце года отправляете 1099. А потом он падает со стремянки или режет руку пилой. Первый вопрос — не про налоговую форму, а про то, считает ли закон Флориды о workers’ compensation его **вашим работником**.' },
        { type: 'h2', text: '1099 ничего не решает' },
        { type: 'p', text: '1099 — это федеральная налоговая форма, и даже IRS не позволяет ей решать вопрос: налоговая служба смотрит, кто управляет тем, как делается работа, кто контролирует финансовую сторону и какие у сторон отношения, и подчёркивает, что ни один фактор сам по себе ничего не решает ([IRS](' + S.irs + ')). У закона Флориды о workers’ comp к тому же **свои определения**: он смотрит на то, как реально устроена работа, а не на то, как вы называете человека. Тот, кто утверждает, что он independent contractor, **обязан это доказать** ([ст. 440.02(18)(d)](' + S.s44002 + ')).' },
        { type: 'h2', text: 'Когда во Флориде нужен workers’ comp' },
        { type: 'p', text: 'Порог зависит от отрасли ([ст. 440.02(20)](' + S.s44002 + '); [DFS](' + S.dfsReq + ')):' },
        { type: 'ul', items: [
          '**Строительство:** страховка обязательна уже при **одном** работнике, причём officers корпорации и участники LLC тоже считаются, если у них нет действующего exemption.',
          '**Другие виды бизнеса:** обязательна при **четырёх и более** работниках, включая officers и участников LLC.',
        ] },
        { type: 'p', text: 'Строительная отрасль по закону — это коммерческое строительство, расчистка, отсыпка, земляные работы или существенное изменение размера или назначения здания либо вида участка. Хозяин, который работает над собственным домом, «строительством» не занимается, если не собирается продать или сдать дом в течение года. Конкретные профессии Отдел перечисляет в своих правилах ([ст. 440.02(10)](' + S.s44002 + '); [DFS](' + S.dfsReq + ')). Многие работы хендимена находятся на границе между мелким ремонтом и стройкой, поэтому классификацию лучше выяснить **до того**, как вы возьмёте человека.' },
        { type: 'h2', text: 'Стройка: «независимых» помощников не бывает' },
        { type: 'p', text: 'Про строительство Отдел workers’ compensation говорит прямо: закон Флориды «не допускает independent contractors в строительной отрасли». Человек либо владелец бизнеса, либо работник бизнеса ([FAQ для работодателей, DFS](' + S.dfsFaq + ')). Закон считает работниками independent contractors на стройке, строительных sole proprietors, а также всех, кому подрядчик платит как субподрядчикам, если у такого субподрядчика нет своей страховки или действующего exemption ([ст. 440.02(18)(c)](' + S.s44002 + ')).' },
        { type: 'p', text: 'Та же логика идёт вверх по цепочке: подрядчик отвечает за работников незастрахованного субподрядчика и обязан требовать от него подтверждение покрытия или копию сертификата exemption ([ст. 440.10(1)](' + S.s44010 + ')). Если у суба страховки нет, его люди, по словам Отдела, становятся работниками подрядчика ([DFS](' + S.dfsReq + ')).' },
        { type: 'h2', text: 'Exemption — для владельцев, а не для помощников' },
        { type: 'p', text: 'Exemption позволяет **владельцу** исключить из страховки самого себя — и больше никого. В строительстве его могут получить только officers корпорации или участники LLC, которым принадлежит не меньше 10% компании, зарегистрированной в Division of Corporations Флориды, — не более трёх на компанию. Заявление подаётся онлайн в Отдел, госсбор — $50, сертификат действует два года ([ст. 440.02(18)(b)](' + S.s44002 + '); [ст. 440.05](' + S.s44005 + '); [DFS](' + S.dfsEx + ')). При подаче officer подтверждает, что работники компании застрахованы. Поэтому помощник без своей компании exemption «принести» не может, а ваш собственный exemption на него не распространяется. И это не лицензия подрядчика.' },
        { type: 'h2', text: 'Другие работы: тест «четыре из шести»' },
        { type: 'p', text: 'Вне строительства человек может считаться independent contractor, если выполняются минимум **четыре** условия из этих (плюс другие правила закона, [ст. 440.02(18)(d)](' + S.s44002 + ')):' },
        { type: 'ul', items: [
          'У него свой бизнес: своё помещение, машина, инструмент или материалы.',
          'У него есть федеральный номер работодателя (EIN) или он его запросил (для некоторых sole proprietors есть исключение).',
          'Оплата идёт на бизнес, а не физическому лицу.',
          'У него есть бизнес-счёт в банке для рабочих расходов.',
          'Он может брать заказы у других когда захочет, без оформления на работу.',
          'Оплата — за выполненную работу или по конкурсной заявке по договору.',
        ] },
        { type: 'p', text: 'Есть и узкое исключение для **разовой** работы: такой, которую рассчитывают закончить за 10 рабочих дней или меньше, а вся оплата труда не превышает $500. Но оно действует, только если работа не относится к вашему основному делу, так что помощник на ваших обычных заказах под него не подпадает ([ст. 440.02(6) и (18)(d)5](' + S.s44002 + ')).' },
        { type: 'h2', text: 'Что может сделать штат' },
        { type: 'p', text: 'Если Department of Financial Services выясняет, что у работодателя нет обязательной страховки, закон считает это серьёзной угрозой: в течение 72 часов выносится **stop-work order**, и весь бизнес останавливается. Штраф — двойная стоимость страховки за незастрахованный период последних 12 месяцев или $1,000, смотря что больше ([ст. 440.107(7)](' + S.s440107 + ')). Кроме того, за каждого человека, которого вы оформили как independent contractor, хотя он не отвечает критериям закона, могут назначить до $5,000 ([ст. 440.10(1)(f)](' + S.s44010 + ')).' },
        { type: 'h2', text: 'Если человек травмировался' },
        { type: 'ol', items: [
          'Сначала — медицинская помощь.',
          'Если у вас есть workers’ comp, сообщите о травме страховой **в течение 7 дней** с момента, как узнали, даже если не уверены, что случай покрывается ([ст. 440.185](' + S.s440185 + '); [DFS](' + S.dfsFaq + ')). Работник, как правило, должен сообщить работодателю в течение 30 дней.',
          'Запишите, что произошло, кто был рядом, как и сколько вы платили этому человеку.',
          'Позвоните агенту. Если человек может считаться вашим работником, а страховки у вас не было, закон позволяет ему требовать выплат или подать на вас в суд, и вы теряете часть аргументов защиты, например ссылку на его собственную неосторожность ([ст. 440.11](' + S.s44011 + ')). В такой ситуации стоит поговорить с юристом.',
        ] },
        { type: 'p', text: 'Страхование для небольших ремонтных и монтажных работ — на нашей [странице для хендименов](/ru/handyman-insurance-florida), для генподрядчиков и ремонтных компаний — на странице [страхования для подрядчиков во Флориде](/ru/contractor-insurance-florida). Если вы только начинаете, первые регистрации описаны в статье о том, [как открыть малый бизнес в Майами-Дейд](/ru/blog/start-small-business-miami-dade-licenses).' },
        { type: 'callout', title: 'Собираетесь взять помощника?', text: '[Оставьте заявку на расчёт](/ru/quote) или позвоните по номеру (305) 859-3953 до его первого рабочего дня. Лицензированный агент разберёт с вами workers’ comp и ответственность на русском, английском или испанском в нашем офисе во Florida City (понедельник–пятница с 9 до 6, суббота по записи). Это общая информация, а не юридическая консультация; кем считается человек, зависит от фактов, классификации вашей работы и условий полиса.' },
      ],
      faq: [
        { q: 'Помощник на 1099 — это работник для workers’ comp во Флориде?', a: 'Налоговая форма этого не решает. В строительстве закон Флориды не признаёт independent contractors для целей workers’ comp. Вне строительства человек должен соответствовать критериям закона, и доказывать независимость придётся ему.' },
        { q: 'Нужен ли workers’ comp, если помощник всего один?', a: 'В строительстве — да, обязанность начинается с одного работника. В других отраслях — с четырёх, включая officers и участников LLC.' },
        { q: 'Может ли помощник оформить exemption?', a: 'Строительный exemption дают только officers или участникам LLC, которым принадлежит не меньше 10% зарегистрированной в штате компании. Помощник без своей компании его не получит.' },
        { q: 'В какой срок нужно сообщить о травме на работе?', a: 'В течение 7 дней после того, как вы о ней узнали, — своей страховой workers’ comp. Отдел советует подавать отчёт, даже если вы считаете, что случай не покрывается.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 440.02 (2026): определения (работник, занятость, строительная отрасль, разовая работа) (на английском)', url: S.s44002 },
        { label: 'Законы Флориды, ст. 440.05 (2026): exemption; сертификат (на английском)', url: S.s44005 },
        { label: 'Законы Флориды, ст. 440.10 (2026): ответственность за компенсацию (на английском)', url: S.s44010 },
        { label: 'Законы Флориды, ст. 440.107 (2026): контроль; stop-work orders; штрафы (на английском)', url: S.s440107 },
        { label: 'Законы Флориды, ст. 440.11 (2026): исключительность ответственности (на английском)', url: S.s44011 },
        { label: 'Законы Флориды, ст. 440.185 (2026): уведомление о травме; отчёты (на английском)', url: S.s440185 },
        { label: 'DFS Флориды, Отдел workers’ compensation: требования к покрытию (на английском)', url: S.dfsReq },
        { label: 'DFS Флориды, Отдел workers’ compensation: FAQ для работодателей (на английском)', url: S.dfsFaq },
        { label: 'DFS Флориды, Отдел workers’ compensation: exemption в строительстве (на английском)', url: S.dfsEx },
        { label: 'IRS: independent contractor или работник? (на английском)', url: S.irs },
      ],
    },
  },
};
