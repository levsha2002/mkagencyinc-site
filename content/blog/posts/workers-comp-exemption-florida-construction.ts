import type { BlogPost } from '../types';

// Facts checked 2026-10-27 against official sources:
// - 2026 F.S. 440.05: (3) notice filed electronically by the officer; lists name, DOB, driver license or FL ID
//   number, ch. 489 licenses, Division of Corporations registration number, ownership percentage, each
//   employing corporation + FEIN; officer not entitled to benefits; within s. 440.02 officer limits; certifies
//   the corporation's employees are covered; certifies completion of the DFS online coverage and compliance
//   tutorial; certificate lists the corporation; a new certificate each time the person works for a new or
//   different corporation not listed; an officer who is a subcontractor must notify the contractor on
//   revocation. (4) personally sign; false info = 3rd-degree felony; certificate says it is NOT a DBPR license.
//   (5) effective when issued or 30 days after receipt, whichever first. (6) valid 2 years after the effective
//   date; both dates on the face; expires at midnight; DFS sends notice at least 60 days before expiration to
//   the address on the certificate or the e-mail on file. (8)(a) $50 fee for each construction certificate or
//   renewal. (10) officer listed with the Division of Corporations. (11) applies only to the named officer.
//   (12) revocation when requirements are no longer met. (13) exempt officer may not recover benefits.
//   (14) affiliated persons of someone delinquent on a stop-work order/penalty are ineligible.
// - 2026 F.S. 440.02: (10) construction industry definition; (11) officer includes an LLC member owning at
//   least 10%; (18)(b)2 no more than 3 officers of a corporation or group of affiliated corporations in
//   construction; shareholders owning at least 10% and listed with the Division of Corporations; (18)(b)3 exempt
//   officer is not an employee; (18)(c)4 construction sole proprietors and partners are employees;
//   (20)(b)2 construction employment = 1 or more employees.
// - 2026 F.S. 440.10(1)(b)-(c): contractor liable for uninsured subs' employees; must require evidence of WC;
//   corporate sub with an exempt officer gives a copy of the certificate.
// - 2026 F.S. 440.107(7)(a),(c),(d)1: stop-work order within 72 hours for failure to secure coverage; $1,000 per
//   day for working in violation; penalty 2x what coverage would have cost for the lookback period, or $1,000,
//   whichever is greater.
// - DFS DWC Exemptions page (issued to officers/members, not the business; not an employee; may not recover
//   benefits; personally sign). Construction Industry page (active registration; officer listed; 10% ownership
//   attested; no more than 3 incl. affiliated LLCs/corporations; $50 fee; no active SWO/WIV affiliation; valid
//   driver license, not expired more than 30 days; (850) 413-1609).
// - DFS Notice of Election to be Exempt system (apps.fldfs.com/bocexempt): $50 + $1 convenience fee; Division
//   has 30 days to review; shows in Exemption Search the day after issuance; valid 2 years; do not apply for
//   renewal more than 90 days before expiration, or the previous exemption for the same business is null and void.
// - DFS DWC Proof of Coverage portal (Exemption Search by employer name, FEIN, construction / non-construction).
// - DFS employer FAQ (construction: 1+ employees incl. non-exempt owners; contractor gets a copy of the sub's
//   exemption or an Exemption Search screen print before the job starts, rule 69L-6.032).
// No carrier names, no premium figures.
const S = {
  s44002: 'https://www.flsenate.gov/Laws/Statutes/2026/440.02',
  s44005: 'https://www.flsenate.gov/Laws/Statutes/2026/440.05',
  s44010: 'https://www.flsenate.gov/Laws/Statutes/2026/440.10',
  s440107: 'https://www.flsenate.gov/Laws/Statutes/2026/440.107',
  dfsEx: 'https://www.myfloridacfo.com/division/wc/employer/exemptions',
  dfsCon: 'https://www.myfloridacfo.com/division/wc/employer/exemptions/construction',
  dfsApp: 'https://apps.fldfs.com/bocexempt/',
  poc: 'https://dwcdataportal.fldfs.com/POCData.aspx',
  dfsFaq: 'https://www.myfloridacfo.com/division/wc/employer/education-and-resources/frequently-asked-questions',
};

export const post: BlogPost = {
  slug: 'workers-comp-exemption-florida-construction',
  datePublished: '2026-10-27',
  translations: {
    en: {
      title: 'Workers’ Comp Construction Exemptions in Florida: Renewal and Limits',
      metaTitle: 'Florida Construction WC Exemption: Renewal & Limits | M&K Agency',
      description: 'A Florida construction exemption lasts 2 years and covers only the officer, not the crew. Who qualifies, the 3-officer limit, how to renew and how to check it.',
      ogAlt: 'Illustration of a hard hat, a blank certificate with a seal and a calendar page next to a house frame under construction',
      excerpt: 'Your construction exemption has an expiration date. Who can get one, the ownership and three-officer limits, the 90-day renewal window, and how to look up any exemption on the state’s database.',
      category: 'Contractor insurance',
      body: [
        { type: 'p', text: 'If you run a small construction company in Florida, the workers’ comp exemption on your phone or in your truck has an expiration date printed on it. Miss it, and on paper you are an employee of your own company again. This guide covers who can hold a construction exemption, the limits the law sets, how renewal works and how to check any exemption. Whether a helper counts as an employee is covered in our [employee or 1099 guide](/en/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'h2', text: 'What an exemption is, and what it is not' },
        { type: 'p', text: 'An exemption lets an officer of a corporation, or a member of an LLC, exclude **himself or herself** from Florida’s workers’ compensation law. The Division of Workers’ Compensation issues it to the person, not to the business. Once it is issued, that officer is not considered an employee and cannot collect workers’ comp benefits ([DFS](' + S.dfsEx + '); [s. 440.05(13)](' + S.s44005 + ')).' },
        { type: 'ul', items: [
          '**It covers only the named officer.** The certificate applies to the officer on the notice and to no one else ([s. 440.05(11)](' + S.s44005 + ')). In construction, a business with **one or more** employees must carry workers’ comp, and owners without an exemption count ([s. 440.02(20)](' + S.s44002 + '); [DFS FAQ](' + S.dfsFaq + ')). When applying, the officer must certify that the company’s employees are covered.',
          '**It is not a contractor license.** By law the certificate itself says it is not a license from the Department of Business and Professional Regulation (DBPR) ([s. 440.05(4)](' + S.s44005 + ')).',
          '**It is not insurance.** It pays nothing if you get hurt. It only takes you out of the count.',
        ] },
        { type: 'h2', text: 'Who qualifies: the limits in the law' },
        { type: 'p', text: 'For the construction industry, the statute and the Division set these conditions ([s. 440.02(11), (18)(b)](' + S.s44002 + '); [DFS construction exemptions](' + S.dfsCon + ')):' },
        { type: 'ul', items: [
          'The corporation or LLC is registered and **active** with the Florida Division of Corporations, and you are listed there as an officer.',
          'You own **at least 10%**: of the stock for a corporation, or of the LLC for a member.',
          'No more than **three** officers of one company, or of a group of affiliated companies (corporations and LLCs together), may be exempt.',
          'You are not affiliated with an active stop-work order, and you hold a valid driver license (the Division accepts one expired no more than 30 days).',
        ] },
        { type: 'p', text: 'Sole proprietors and partners are not on this list. In construction the law counts a sole proprietor and a partner as employees ([s. 440.02(18)(c)](' + S.s44002 + ')). To use an exemption, the business has to be a corporation or an LLC.' },
        { type: 'h2', text: 'How you apply' },
        { type: 'p', text: 'Everything is filed online in the Division’s [Notice of Election to be Exempt system](' + S.dfsApp + '). Under [s. 440.05(3)](' + S.s44005 + ') the notice lists your name, date of birth, driver license or Florida ID number, any chapter 489 contractor licenses, the company’s Division of Corporations number, your ownership percentage and the federal tax ID of each company you work for. You also certify that you completed the Division’s online coverage and compliance tutorial. You must sign it yourself: false information on the notice is a third-degree felony ([s. 440.05(4)](' + S.s44005 + ')).' },
        { type: 'p', text: 'The state fee is **$50** for each construction exemption or renewal ([s. 440.05(8)](' + S.s44005 + ')), and the online system adds a $1 convenience fee. The Division has 30 days to review the notice, and an approved exemption shows up in the public Exemption Search the next day ([DFS](' + S.dfsApp + ')).' },
        { type: 'h2', text: 'Two years, then it expires: renewal' },
        { type: 'p', text: 'A certificate is valid for **2 years** from its effective date. Both dates are printed on its face, and it expires at midnight on the date shown. At least 60 days before that, the Division sends a notice to the address on the certificate or the e-mail on file ([s. 440.05(6)](' + S.s44005 + ')), so keep your e-mail current.' },
        { type: 'ol', items: [
          'Find the expiration date on your certificate or in the Exemption Search.',
          'Renew with the **Renew Exemption** option, not a new application. Do **not** file more than **90 days before** expiration: the Division says an early renewal makes the previous exemption for the same business null and void ([DFS](' + S.dfsApp + ')).',
          'Pay the $50 renewal fee, then print the new certificate and send copies to the contractors you work for.',
        ] },
        { type: 'p', text: 'If it lapses, an officer who works for pay counts as an employee again ([s. 440.02(18)(b)](' + S.s44002 + ')). A construction company without the required coverage can receive a stop-work order, plus a penalty of twice what the coverage would have cost for the period, or $1,000, whichever is greater ([s. 440.107(7)](' + S.s440107 + ')).' },
        { type: 'h2', text: 'When you need a new certificate' },
        { type: 'ul', items: [
          '**A new or different company.** The certificate names the corporation. If you go to work for one that is not listed, you need a new certificate ([s. 440.05(3)](' + S.s44005 + ')).',
          '**You no longer qualify.** If your ownership drops below 10% or you are no longer listed as an officer, the exemption is subject to revocation ([s. 440.05(12)](' + S.s44005 + ')).',
          '**You revoke it yourself.** If you are a subcontractor, you must tell your contractor ([s. 440.05(3)](' + S.s44005 + ')).',
        ] },
        { type: 'h2', text: 'How to check any exemption' },
        { type: 'p', text: 'The Division’s [Proof of Coverage portal](' + S.poc + ') has an **Exemption Search** listing officers and members who opted out. You can search by employer name or federal tax ID and filter construction or non-construction. Look yourself up a few months before the date.' },
        { type: 'p', text: 'For general contractors it is a legal duty: you must get evidence of workers’ comp from each sub, and a corporate sub with an exempt officer must give you a copy of the certificate ([s. 440.10(1)(c)](' + S.s44010 + ')). The Division accepts that copy or a screen print of the Exemption Search, obtained before the job starts ([DFS FAQ](' + S.dfsFaq + ')). Remember the limit: the exemption covers the sub’s owner, not the crew. If that sub has uninsured workers, the law treats them as yours ([s. 440.10(1)(b)](' + S.s44010 + ')). Our [certificate of insurance guide](/en/blog/certificate-of-insurance-contractors-florida) explains what to collect.' },
        { type: 'h2', text: 'Where insurance comes in' },
        { type: 'p', text: 'An exemption answers one question: does the owner count? The day you hire a helper, the company needs a workers’ comp policy. The exemption also does nothing for damage to a client’s property or injuries to the public; that is [general liability](/en/insurance/general-liability), a separate policy. Our [contractor insurance page](/en/contractor-insurance-florida) covers both.' },
        { type: 'callout', title: 'Adding your first employee?', text: 'Tell us the trade, the crew size and who in the company holds an exemption, and we will walk you through the options in English, Spanish or Russian. [Request a quote](/en/quote) or call [(305) 859-3953](tel:+13058593953). Coverage depends on your policy, so talk with a licensed agent before you decide.' },
      ],
      faq: [
        { q: 'How long is a Florida construction exemption valid?', a: 'Two years from the effective date printed on the certificate. It expires at midnight on the expiration date, and the Division sends a notice at least 60 days before.' },
        { q: 'How early can I renew?', a: 'No more than 90 days before the expiration date. The Division says a renewal filed earlier makes the previous exemption for the same business null and void.' },
        { q: 'Does my exemption cover my workers?', a: 'No. It applies only to the officer named on it. In construction, a company with even one employee needs workers’ comp coverage.' },
        { q: 'Can a sole proprietor get a construction exemption?', a: 'Construction exemptions are for corporate officers and LLC members who own at least 10% of a registered, active company. The law counts construction sole proprietors and partners as employees.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 440.05 (2026): election of exemption; certificate; renewal; fee', url: S.s44005 },
        { label: 'Florida Statutes s. 440.02 (2026): definitions (officer, employee, employment, construction industry)', url: S.s44002 },
        { label: 'Florida Statutes s. 440.10 (2026): liability for compensation; contractors and subcontractors', url: S.s44010 },
        { label: 'Florida Statutes s. 440.107 (2026): stop-work orders and penalties', url: S.s440107 },
        { label: 'Florida DFS, Division of Workers’ Compensation: Exemptions', url: S.dfsEx },
        { label: 'Florida DFS, Division of Workers’ Compensation: Construction Industry exemptions', url: S.dfsCon },
        { label: 'Florida DFS: Notice of Election to be Exempt (apply, renew, print)', url: S.dfsApp },
        { label: 'Florida DFS: Proof of Coverage and Exemption Search', url: S.poc },
        { label: 'Florida DFS: Employer frequently asked questions', url: S.dfsFaq },
      ],
    },
    es: {
      title: 'Exención de workers’ comp en la construcción en Florida: renovación y límites',
      metaTitle: 'Exención de workers’ comp en construcción en Florida | M&K Agency',
      description: 'La exención de construcción en Florida dura 2 años y solo cubre al oficial, no a su equipo. Quién califica, el límite de tres oficiales y cómo renovarla.',
      ogAlt: 'Ilustración de un casco, un certificado en blanco con sello y una hoja de calendario junto a una casa en construcción',
      excerpt: 'Su exención de construcción tiene fecha de vencimiento. Quién puede obtenerla, los límites de propiedad y de tres oficiales, la ventana de 90 días para renovar y cómo consultar cualquier exención en la base de datos del estado.',
      category: 'Seguro para contratistas',
      body: [
        { type: 'p', text: 'Si tiene una pequeña compañía de construcción en Florida, la exención de workers’ comp que guarda en el teléfono o en la camioneta trae impresa una fecha de vencimiento. Si se le pasa, ante la ley vuelve a ser empleado de su propia compañía. Aquí explicamos quién puede tener una exención de construcción, qué límites pone la ley, cómo se renueva y cómo verificar cualquier exención. Si su duda es si un ayudante cuenta como empleado, lea nuestra [guía de empleado o 1099](/es/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'h2', text: 'Qué es una exención y qué no es' },
        { type: 'p', text: 'La exención permite que un oficial de una corporación, o un miembro de una LLC, se excluya **a sí mismo** de la ley de compensación laboral de Florida. La División de Compensación Laboral la emite a la persona, no a la empresa. Una vez emitida, ese oficial deja de considerarse empleado y no puede cobrar beneficios de workers’ comp ([DFS](' + S.dfsEx + '); [sección 440.05(13)](' + S.s44005 + ')).' },
        { type: 'ul', items: [
          '**Solo protege al oficial que aparece en ella.** El certificado se aplica a la persona nombrada y a nadie más ([sección 440.05(11)](' + S.s44005 + ')). En construcción, una empresa con **uno o más** empleados debe tener workers’ comp, y los dueños sin exención cuentan ([sección 440.02(20)](' + S.s44002 + '); [preguntas frecuentes del DFS](' + S.dfsFaq + ')). Al solicitarla, el oficial certifica que los empleados de la compañía están asegurados.',
          '**No es una licencia de contratista.** Por ley, el propio certificado aclara que no es una licencia del Departamento de Regulación Profesional y de Negocios (DBPR) ([sección 440.05(4)](' + S.s44005 + ')).',
          '**No es un seguro.** Si usted se lesiona, no paga nada. Solo lo saca del conteo.',
        ] },
        { type: 'h2', text: 'Quién califica: los límites de la ley' },
        { type: 'p', text: 'Para la industria de la construcción, la ley y la División piden lo siguiente ([sección 440.02(11), (18)(b)](' + S.s44002 + '); [exenciones de construcción del DFS](' + S.dfsCon + ')):' },
        { type: 'ul', items: [
          'La corporación o LLC está registrada y **activa** en la División de Corporaciones de Florida, y usted figura allí como oficial.',
          'Usted es dueño de **al menos el 10%**: de las acciones en una corporación, o de la LLC si es miembro.',
          'Como máximo **tres** oficiales de una compañía, o de un grupo de compañías afiliadas (corporaciones y LLC juntas), pueden estar exentos.',
          'No está vinculado a una orden de paralización de obra (stop-work order) activa y tiene una licencia de conducir válida (la División acepta una vencida hace 30 días o menos).',
        ] },
        { type: 'p', text: 'El dueño único y los socios de una sociedad no aparecen en esta lista. En construcción, la ley los cuenta como empleados ([sección 440.02(18)(c)](' + S.s44002 + ')). Para tener exención, el negocio debe ser una corporación o una LLC.' },
        { type: 'h2', text: 'Cómo se solicita' },
        { type: 'p', text: 'Todo se hace en línea, en el [sistema Notice of Election to be Exempt](' + S.dfsApp + ') de la División. Según la [sección 440.05(3)](' + S.s44005 + '), la solicitud incluye su nombre, fecha de nacimiento, número de licencia de conducir o de ID de Florida, sus licencias de contratista del capítulo 489, el número de la compañía en la División de Corporaciones, su porcentaje de propiedad y el número federal de contribuyente (FEIN) de cada compañía para la que trabaja. También certifica que completó el tutorial en línea de la División sobre cobertura y cumplimiento. Debe firmarla usted mismo: dar información falsa es un delito grave de tercer grado ([sección 440.05(4)](' + S.s44005 + ')).' },
        { type: 'p', text: 'El cargo estatal es de **$50** por cada exención de construcción o renovación ([sección 440.05(8)](' + S.s44005 + ')), y el sistema en línea cobra $1 adicional por conveniencia. La División tiene 30 días para revisar la solicitud, y la exención aprobada aparece en la búsqueda pública de exenciones al día siguiente ([DFS](' + S.dfsApp + ')).' },
        { type: 'h2', text: 'Dura dos años: cómo renovarla' },
        { type: 'p', text: 'El certificado vale **2 años** desde la fecha de vigencia. Las dos fechas van impresas en el documento, y vence a la medianoche del día indicado. Al menos 60 días antes, la División envía un aviso a la dirección del certificado o al correo electrónico registrado ([sección 440.05(6)](' + S.s44005 + ')), así que mantenga su correo al día.' },
        { type: 'ol', items: [
          'Busque la fecha de vencimiento en su certificado o en la búsqueda de exenciones.',
          'Use la opción **Renew Exemption**, no una solicitud nueva. **No** la presente más de **90 días antes** del vencimiento: la División advierte que una renovación anticipada anula la exención anterior para la misma empresa ([DFS](' + S.dfsApp + ')).',
          'Pague los $50 de la renovación, imprima el nuevo certificado y envíe copias a los contratistas con los que trabaja.',
        ] },
        { type: 'p', text: 'Si se vence, el oficial que trabaja a cambio de pago vuelve a contar como empleado ([sección 440.02(18)(b)](' + S.s44002 + ')). Una compañía de construcción sin la cobertura exigida puede recibir una orden de paralización y una multa del doble de lo que habría costado la cobertura en ese período, o de $1,000, lo que sea mayor ([sección 440.107(7)](' + S.s440107 + ')).' },
        { type: 'h2', text: 'Cuándo necesita un certificado nuevo' },
        { type: 'ul', items: [
          '**Otra compañía.** El certificado indica el nombre de la corporación. Si empieza a trabajar para una que no aparece, necesita un certificado nuevo ([sección 440.05(3)](' + S.s44005 + ')).',
          '**Ya no cumple los requisitos.** Si su participación baja del 10% o deja de figurar como oficial, la exención puede ser revocada ([sección 440.05(12)](' + S.s44005 + ')).',
          '**La revoca usted.** Si es subcontratista, debe avisarle a su contratista ([sección 440.05(3)](' + S.s44005 + ')).',
        ] },
        { type: 'h2', text: 'Cómo verificar cualquier exención' },
        { type: 'p', text: 'El [portal Proof of Coverage](' + S.poc + ') de la División tiene una **búsqueda de exenciones (Exemption Search)** con los oficiales y miembros que se excluyeron. Puede buscar por nombre del empleador o por FEIN y filtrar entre construcción y otras industrias. Búsquese usted mismo unos meses antes de la fecha.' },
        { type: 'p', text: 'Para el contratista general es una obligación legal: debe pedir a cada subcontratista prueba de workers’ comp, y el sub que sea corporación con un oficial exento debe entregarle copia del certificado ([sección 440.10(1)(c)](' + S.s44010 + ')). La División acepta esa copia o una captura de pantalla de la búsqueda de exenciones, obtenida antes de empezar la obra ([preguntas frecuentes del DFS](' + S.dfsFaq + ')). Tenga presente el límite: la exención cubre al dueño del sub, no a su cuadrilla. Si ese sub tiene trabajadores sin seguro, la ley los trata como suyos ([sección 440.10(1)(b)](' + S.s44010 + ')). Nuestra [guía del certificado de seguro (COI)](/es/blog/certificate-of-insurance-contractors-florida) explica qué documentos pedir.' },
        { type: 'h2', text: 'Dónde entra el seguro' },
        { type: 'p', text: 'La exención responde una sola pregunta: ¿cuenta el dueño? El día que contrata a un ayudante, la compañía necesita una póliza de workers’ comp. Además, la exención no responde por daños a la propiedad del cliente ni por lesiones a terceros; eso es la [responsabilidad civil general](/es/insurance/general-liability), una póliza aparte. Nuestra página de [seguro para contratistas](/es/contractor-insurance-florida) explica las dos coberturas.' },
        { type: 'callout', title: '¿Va a contratar a su primer empleado?', text: 'Cuéntenos su oficio, cuántas personas trabajan con usted y quién en la compañía tiene exención, y le explicamos las opciones en español, inglés o ruso. [Pida una cotización](/es/quote) o llame al [(305) 859-3953](tel:+13058593953). La cobertura depende de su póliza; hable con un agente con licencia antes de decidir.' },
      ],
      faq: [
        { q: '¿Cuánto tiempo dura una exención de construcción en Florida?', a: 'Dos años desde la fecha de vigencia que aparece en el certificado. Vence a la medianoche de la fecha de vencimiento, y la División envía un aviso al menos 60 días antes.' },
        { q: '¿Con cuánta anticipación puedo renovarla?', a: 'No más de 90 días antes del vencimiento. Según la División, una renovación presentada antes anula la exención anterior para la misma empresa.' },
        { q: '¿Mi exención cubre a mis trabajadores?', a: 'No. Solo se aplica al oficial nombrado en ella. En construcción, una compañía con un solo empleado ya necesita workers’ comp.' },
        { q: '¿Un dueño único (sole proprietor) puede obtener una exención de construcción?', a: 'Las exenciones de construcción son para oficiales de corporaciones y miembros de LLC con al menos el 10% de una compañía registrada y activa. La ley cuenta como empleados al dueño único y a los socios en construcción.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 440.05 (2026): exención; certificado; renovación; cargo (en inglés)', url: S.s44005 },
        { label: 'Estatutos de Florida, sección 440.02 (2026): definiciones (en inglés)', url: S.s44002 },
        { label: 'Estatutos de Florida, sección 440.10 (2026): contratistas y subcontratistas (en inglés)', url: S.s44010 },
        { label: 'Estatutos de Florida, sección 440.107 (2026): órdenes de paralización y multas (en inglés)', url: S.s440107 },
        { label: 'DFS de Florida, División de Compensación Laboral: exenciones (en inglés)', url: S.dfsEx },
        { label: 'DFS de Florida, División de Compensación Laboral: exenciones en construcción (en inglés)', url: S.dfsCon },
        { label: 'DFS de Florida: Notice of Election to be Exempt, solicitar, renovar e imprimir (en inglés)', url: S.dfsApp },
        { label: 'DFS de Florida: Proof of Coverage y búsqueda de exenciones (en inglés)', url: S.poc },
        { label: 'DFS de Florida: preguntas frecuentes para empleadores (en inglés)', url: S.dfsFaq },
      ],
    },
    ru: {
      title: 'Освобождение от workers’ comp для строителей во Флориде: продление и ограничения',
      metaTitle: 'Exemption от workers’ comp в строительстве во Флориде | M&K Agency',
      description: 'Строительный exemption во Флориде действует 2 года и касается только officer, а не бригады. Кто может его получить, лимит в три человека, продление и проверка.',
      ogAlt: 'Иллюстрация: строительная каска, пустой сертификат с печатью и листок календаря рядом с каркасом строящегося дома',
      excerpt: 'У вашего строительного exemption есть срок действия. Кто может его получить, требования к доле и лимит в три officer, 90-дневное окно для продления и как проверить любой exemption в базе штата.',
      category: 'Страхование подрядчиков',
      body: [
        { type: 'p', text: 'Если у вас небольшая строительная компания во Флориде, на exemption от workers’ comp, который лежит у вас в телефоне или в машине, напечатана дата окончания. Пропустите её — и по закону вы снова работник собственной компании. Разберём, кто может получить строительный exemption, какие ограничения ставит закон, как его продлить и как проверить чужой. А вопрос, считается ли помощник работником, мы подробно разобрали в [статье про работника и 1099](/ru/blog/helper-employee-or-1099-florida-workers-comp).' },
        { type: 'h2', text: 'Что такое exemption — и чем он не является' },
        { type: 'p', text: 'Exemption позволяет officer корпорации или участнику LLC исключить из системы workers’ compensation **самого себя**. Отдел workers’ compensation (Division of Workers’ Compensation) выдаёт его человеку, а не компании. После этого officer не считается работником и не может получать пособия по workers’ comp ([DFS](' + S.dfsEx + '); [ст. 440.05(13)](' + S.s44005 + ')).' },
        { type: 'ul', items: [
          '**Он касается только того, кто в нём указан.** Сертификат действует для названного в нём officer и ни для кого больше ([ст. 440.05(11)](' + S.s44005 + ')). В строительстве workers’ comp обязателен уже при **одном** работнике, и владельцы без exemption тоже считаются ([ст. 440.02(20)](' + S.s44002 + '); [FAQ для работодателей, DFS](' + S.dfsFaq + ')). Подавая заявление, officer подтверждает, что работники компании застрахованы.',
          '**Это не лицензия подрядчика.** По закону на самом сертификате написано, что это не лицензия Департамента профессионального регулирования (DBPR) ([ст. 440.05(4)](' + S.s44005 + ')).',
          '**Это не страховка.** Если вы травмируетесь, он ничего не оплатит. Он лишь выводит вас из числа работников.',
        ] },
        { type: 'h2', text: 'Кто может получить: ограничения закона' },
        { type: 'p', text: 'Для строительной отрасли закон и Отдел требуют следующего ([ст. 440.02(11), (18)(b)](' + S.s44002 + '); [строительные exemptions, DFS](' + S.dfsCon + ')):' },
        { type: 'ul', items: [
          'Корпорация или LLC зарегистрирована и имеет статус **active** в Division of Corporations Флориды, а вы указаны там как officer.',
          'Вам принадлежит **не меньше 10%**: акций корпорации или доли в LLC.',
          'Exemption могут иметь **не более трёх** officers одной компании или группы аффилированных компаний (корпорации и LLC считаются вместе).',
          'Вы не связаны с действующим предписанием о прекращении работ (stop-work order), а ваши водительские права действительны (Отдел принимает права, просроченные не более чем на 30 дней).',
        ] },
        { type: 'p', text: 'Sole proprietors и партнёров в этом списке нет: в строительстве закон считает их работниками ([ст. 440.02(18)(c)](' + S.s44002 + ')). Чтобы получить exemption, бизнес должен быть корпорацией или LLC.' },
        { type: 'h2', text: 'Как подать заявление' },
        { type: 'p', text: 'Всё делается онлайн в системе Отдела [Notice of Election to be Exempt](' + S.dfsApp + '). По [ст. 440.05(3)](' + S.s44005 + ') в заявлении указывают имя, дату рождения, номер водительских прав или Florida ID, лицензии подрядчика по главе 489, номер компании в Division of Corporations, вашу долю владения и федеральный налоговый номер (FEIN) каждой компании, на которую вы работаете. Вы также подтверждаете, что прошли онлайн-курс Отдела о страховании и соблюдении закона. Подписывать нужно лично: ложные сведения в заявлении — уголовное преступление третьей степени ([ст. 440.05(4)](' + S.s44005 + ')).' },
        { type: 'p', text: 'Госсбор — **$50** за каждый строительный exemption или его продление ([ст. 440.05(8)](' + S.s44005 + ')), плюс $1 сервисного сбора за онлайн-оплату. На рассмотрение у Отдела есть 30 дней, а одобренный exemption появляется в открытой базе Exemption Search на следующий день ([DFS](' + S.dfsApp + ')).' },
        { type: 'h2', text: 'Два года — и срок истекает: продление' },
        { type: 'p', text: 'Сертификат действует **2 года** с даты вступления в силу. Обе даты напечатаны на нём, а истекает он в полночь указанного дня. Не позднее чем за 60 дней до этого Отдел присылает уведомление на адрес из сертификата или на e-mail в его базе ([ст. 440.05(6)](' + S.s44005 + ')) — следите, чтобы почта была актуальной.' },
        { type: 'ol', items: [
          'Найдите дату окончания в сертификате или в Exemption Search.',
          'Продлевайте через кнопку **Renew Exemption**, а не новым заявлением. И **не** подавайте раньше чем за **90 дней** до окончания: по словам Отдела, слишком раннее продление аннулирует прежний exemption для той же компании ([DFS](' + S.dfsApp + ')).',
          'Оплатите $50, распечатайте новый сертификат и отправьте копии подрядчикам, с которыми работаете.',
        ] },
        { type: 'p', text: 'Если срок истёк, officer, который работает за плату, снова считается работником ([ст. 440.02(18)(b)](' + S.s44002 + ')). Строительной компании без обязательного покрытия грозит stop-work order и штраф: двойная стоимость покрытия, которого не было, за этот период или $1,000 — в зависимости от того, что больше ([ст. 440.107(7)](' + S.s440107 + ')).' },
        { type: 'h2', text: 'Когда нужен новый сертификат' },
        { type: 'ul', items: [
          '**Другая компания.** В сертификате указано название корпорации. Если вы начинаете работать на компанию, которой в нём нет, нужен новый сертификат ([ст. 440.05(3)](' + S.s44005 + ')).',
          '**Вы больше не подходите.** Если ваша доля упала ниже 10% или вы больше не значитесь officer, exemption подлежит отзыву ([ст. 440.05(12)](' + S.s44005 + ')).',
          '**Вы отзываете его сами.** Если вы субподрядчик, об этом нужно сообщить своему подрядчику ([ст. 440.05(3)](' + S.s44005 + ')).',
        ] },
        { type: 'h2', text: 'Как проверить любой exemption' },
        { type: 'p', text: 'На [портале Proof of Coverage](' + S.poc + ') у Отдела есть **Exemption Search** — список officers и участников LLC, которые исключили себя из системы. Искать можно по названию работодателя или FEIN, с фильтром «строительство / не строительство». Проверьте себя за пару месяцев до даты окончания.' },
        { type: 'p', text: 'Для генподрядчика это обязанность по закону: он должен получить от каждого субподрядчика подтверждение workers’ comp, а суб-корпорация с освобождённым officer обязана дать копию сертификата ([ст. 440.10(1)(c)](' + S.s44010 + ')). Отдел принимает эту копию или скриншот из Exemption Search, полученные до начала работ ([FAQ, DFS](' + S.dfsFaq + ')). Помните про ограничение: exemption касается владельца суба, а не его бригады. Если у суба есть незастрахованные работники, закон считает их вашими ([ст. 440.10(1)(b)](' + S.s44010 + ')). Что именно собирать, мы объяснили в [статье о сертификате страхования (COI)](/ru/blog/certificate-of-insurance-contractors-florida).' },
        { type: 'h2', text: 'При чём здесь страховка' },
        { type: 'p', text: 'Exemption отвечает только на один вопрос: считается ли владелец работником. Как только вы нанимаете помощника, компании нужен полис workers’ comp. Кроме того, exemption никак не защищает от претензий за ущерб имуществу заказчика или травмы посторонних — для этого есть отдельный полис [general liability](/ru/insurance/general-liability). Обе страховки описаны на нашей [странице для подрядчиков](/ru/contractor-insurance-florida).' },
        { type: 'callout', title: 'Нанимаете первого работника?', text: 'Расскажите, чем занимается компания, сколько человек работает и у кого есть exemption, — и мы разберём варианты по-русски, по-английски или по-испански. [Оставьте заявку на расчёт](/ru/quote) или позвоните [(305) 859-3953](tel:+13058593953). Покрытие зависит от условий полиса, поэтому перед решением поговорите с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Сколько действует строительный exemption во Флориде?', a: 'Два года с даты вступления в силу, указанной в сертификате. Он истекает в полночь даты окончания, а Отдел присылает уведомление не позднее чем за 60 дней.' },
        { q: 'Как рано можно продлить exemption?', a: 'Не раньше чем за 90 дней до окончания. По словам Отдела, продление, поданное раньше, аннулирует прежний exemption для той же компании.' },
        { q: 'Покрывает ли мой exemption моих работников?', a: 'Нет. Он действует только для officer, который в нём указан. В строительстве workers’ comp нужен компании уже при одном работнике.' },
        { q: 'Может ли sole proprietor получить строительный exemption?', a: 'Строительный exemption дают officers корпораций и участникам LLC, которым принадлежит не меньше 10% зарегистрированной и действующей компании. Sole proprietors и партнёров в строительстве закон считает работниками.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 440.05 (2026): exemption, сертификат, продление, сбор (на английском)', url: S.s44005 },
        { label: 'Законы Флориды, ст. 440.02 (2026): определения (на английском)', url: S.s44002 },
        { label: 'Законы Флориды, ст. 440.10 (2026): подрядчики и субподрядчики (на английском)', url: S.s44010 },
        { label: 'Законы Флориды, ст. 440.107 (2026): stop-work orders и штрафы (на английском)', url: S.s440107 },
        { label: 'DFS Флориды, Отдел workers’ compensation: exemptions (на английском)', url: S.dfsEx },
        { label: 'DFS Флориды, Отдел workers’ compensation: exemption в строительстве (на английском)', url: S.dfsCon },
        { label: 'DFS Флориды: Notice of Election to be Exempt — подача, продление, печать (на английском)', url: S.dfsApp },
        { label: 'DFS Флориды: Proof of Coverage и Exemption Search (на английском)', url: S.poc },
        { label: 'DFS Флориды: FAQ для работодателей (на английском)', url: S.dfsFaq },
      ],
    },
  },
};
