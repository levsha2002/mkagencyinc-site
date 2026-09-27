import type { BlogPost } from '../types';

// Facts checked 2026-09-27 against:
// - FLHSMV Florida Insurance Requirements (flhsmv.gov/insurance/) — SR22 definition
// - Florida Statutes s. 324.021(7) (2026) — proof of financial responsibility 10/20/10
// - Florida Statutes s. 324.023 (2026) — DUI higher limits 100/300/50, min. 3 years
// - Florida Statutes s. 324.031 (2026) — manner of proving financial responsibility
// - Florida Statutes s. 324.051 (2026) — crash reports; license/registration suspensions
// - FLHSMV FR procedure manuals (SR22/FR44 electronic filing; continuous 3-year maintenance)
// No private insurers named. No rate figures or promotional claims.
const SOURCES_ES = [
  { label: 'FLHSMV: Florida Insurance Requirements (definición de SR22)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'Estatutos de Florida s. 324.021 (2026): definiciones; prueba de responsabilidad financiera 10/20/10', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Estatutos de Florida s. 324.023 (2026): responsabilidad financiera por lesiones o muerte tras DUI; 100/300/50; mínimo 3 años', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Estatutos de Florida s. 324.031 (2026): formas de demostrar responsabilidad financiera', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Estatutos de Florida s. 324.051 (2026): reportes de choques; suspensiones de licencia y registro', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.051' },
  { label: 'FLHSMV: Procedures Manual — certificación SR22/FR44 (límites y mantenimiento continuo)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Verification criteria for financial responsibility sanctions', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

const SOURCES_RU = [
  { label: 'FLHSMV: Florida Insurance Requirements (определение SR22)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'Florida Statutes s. 324.021 (2026): определения; proof of financial responsibility 10/20/10', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Florida Statutes s. 324.023 (2026): финансовая ответственность после DUI; 100/300/50; минимум 3 года', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Florida Statutes s. 324.031 (2026): способы подтверждения финансовой ответственности', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Florida Statutes s. 324.051 (2026): отчёты о ДТП; приостановки прав и регистрации', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.051' },
  { label: 'FLHSMV: Procedures Manual — сертификация SR22/FR44 (лимиты и непрерывное поддержание)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Verification criteria for financial responsibility sanctions', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

export const post: BlogPost = {
  slug: 'sr22-florida-guia',
  datePublished: '2026-09-27',
  translations: {
    es: {
      title: '¿Qué es el SR-22 en Florida? Duración, presentación y diferencia con el FR-44',
      metaTitle: 'SR-22 en Florida: qué es, duración y FR-44 | M&K Agency',
      description: 'Guía del SR-22 en Florida: qué es el certificado, cuándo lo exige el estado, límites 10/20/10, duración aproximada y cómo se diferencia del FR-44 tras un DUI.',
      excerpt: 'El SR-22 no es un tipo de seguro: es un certificado que su aseguradora presenta ante el FLHSMV. Le explicamos qué es, cuándo se exige, por cuánto tiempo suele mantenerse y en qué se diferencia del FR-44.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'Si el Departamento de Seguridad Vial y Vehículos Motorizados de Florida (**FLHSMV**) le indicó que necesita un **SR-22**, lo primero es aclarar esto: **no es un tipo de seguro**. Es un **certificado de responsabilidad financiera** que su aseguradora presenta ante el estado para demostrar que usted tiene la cobertura de responsabilidad exigida.' },
        { type: 'p', text: 'Con base en las páginas oficiales del FLHSMV y en los Estatutos de Florida, le explicamos qué es el SR-22, cuándo suele exigirse, qué límites certifica, cómo se presenta, cuánto suele durar y en qué se diferencia del **FR-44** tras ciertos casos de DUI.' },

        { type: 'h2', text: 'Qué es un SR-22 según el FLHSMV' },
        { type: 'p', text: 'En su página de requisitos de seguro, el FLHSMV define el **SR22** como una presentación de seguro que **certifica la cobertura de responsabilidad por lesiones corporales (BIL) y por daños a la propiedad (PDL)** para cumplir con los requisitos de reinstalación de la **Ley de Responsabilidad Financiera de Florida** (Florida Financial Responsibility Law).' },
        { type: 'ul', items: [
          'Usted **no presenta** el SR-22 por su cuenta: lo hace su **aseguradora** (hoy, en la mayoría de los casos, de forma electrónica ante el FLHSMV).',
          'El certificado demuestra que usted tiene (o va a mantener) la cobertura de responsabilidad que el estado exige para su caso.',
          'Si la póliza se cancela o hay una interrupción en la cobertura mientras el certificado está activo, la aseguradora normalmente notifica al estado; eso puede volver a suspender su privilegio de conducir.',
        ] },
        { type: 'callout', title: 'Importante', text: 'El SR-22 es un certificado, no una póliza. Sigue necesitando una póliza de auto que cumpla los límites y coberturas que el estado le pide. Esta es información general, no asesoría legal; confirme su caso con el FLHSMV o con su carta de reinstalación.' },

        { type: 'h2', text: 'Cuándo suele exigirse un SR-22 en Florida' },
        { type: 'p', text: 'Florida exige prueba de responsabilidad financiera en varias situaciones del Capítulo 324. En la práctica, el FLHSMV pide un SR-22/FR-44 cuando el conductor **no puede demostrar** que tenía la cobertura requerida en la fecha del hecho (choque reportable, ciertas condenas o suspensiones).' },
        { type: 'p', text: 'Situaciones frecuentes en las que aparece el requisito (según los materiales del FLHSMV y el Capítulo 324):' },
        { type: 'ul', items: [
          '**Choques reportables** en los que el conductor u propietario no tenía una póliza de responsabilidad con los límites de s. 324.021(7) en vigor (véase s. 324.051).',
          '**Suspensiones** relacionadas con la responsabilidad financiera o con no mantener el seguro obligatorio, cuando el estado pide prueba para reinstalar.',
          'Ciertas **condenaciones o infracciones de tráfico** que activan un caso de responsabilidad financiera ante el departamento.',
          'Casos de **DUI** bajo s. 316.193 ocurridos **después del 1 de octubre de 2007**: normalmente se exige el **FR-44** (límites más altos), no el SR-22 estándar. Un FR-44 cubre también los límites del SR-22; no hace falta presentar ambos.',
        ] },
        { type: 'p', text: 'La carta o aviso de reinstalación del FLHSMV es la referencia más clara: indica si necesita SR-22 o FR-44 y qué debe presentar para recuperar la licencia o el registro.' },

        { type: 'h2', text: 'Límites que certifica el SR-22: 10/20/10' },
        { type: 'p', text: 'La “prueba de responsabilidad financiera” de Florida, definida en el **s. 324.021(7)**, es la capacidad de responder por daños en un choque por al menos:' },
        { type: 'ul', items: [
          '**$10,000** por lesiones corporales o muerte de **una persona** en un choque;',
          '**$20,000** por lesiones corporales o muerte de **dos o más personas** en un choque (sujeto al límite por persona); y',
          '**$10,000** por daños a la **propiedad** de terceros en un choque.',
        ] },
        { type: 'p', text: 'Eso es el **10/20/10**. Los procedimientos del FLHSMV indican que un **SR22** certifica al menos esos límites. Para registrar un vehículo en Florida sigue haciendo falta el **PIP** y el **PDL** obligatorios (mínimo $10,000 de cada uno), un requisito distinto del certificado de responsabilidad financiera.' },

        { type: 'h2', text: 'SR-22 frente a FR-44: la diferencia clave' },
        { type: 'p', text: 'Muchos conductores confunden los dos nombres. La diferencia principal está en los **límites** y en el **motivo** del requisito:' },
        { type: 'ul', items: [
          '**SR-22:** certificado estándar que demuestra responsabilidad financiera con límites de al menos **10/20/10** (BIL/PDL), según los procedimientos del FLHSMV.',
          '**FR-44:** certificado de **límites más altos** que Florida exige tras ciertos casos de **conducir bajo los efectos del alcohol (DUI)**.',
        ] },
        { type: 'p', text: 'El **s. 324.023** exige que quien haya sido hallado culpable o se haya declarado culpable o nolo contendere a un DUI bajo s. 316.193 **después del 1 de octubre de 2007** (con independencia de la adjudicación de culpabilidad) mantenga la capacidad de responder por:' },
        { type: 'ul', items: [
          '**$100,000** por lesiones o muerte de una persona;',
          '**$300,000** por lesiones o muerte de dos o más personas (sujeto al límite por persona); y',
          '**$50,000** por daños a la propiedad en un choque.',
        ] },
        { type: 'p', text: 'Eso es el **100/300/50**, y esos límites deben mantenerse **por un período mínimo de 3 años**. El FLHSMV usa el certificado **FR44** para documentarlo. Si ya tiene un FR-44 en vigor, no necesita un SR-22 aparte: el FR-44 cubre ambos niveles.' },

        { type: 'h2', text: 'Cuánto dura el requisito' },
        { type: 'p', text: 'Para el FR-44 tras un DUI bajo s. 324.023, los límites más altos deben llevarse **como mínimo 3 años**. Si durante **3 años** desde la **reinstalación** de los privilegios por una violación de s. 316.193 no hay nueva condena por DUI ni por un delito de tráfico grave (felony traffic offense), la persona queda exenta.' },
        { type: 'p', text: 'Para el SR-22 en otros casos, los procedimientos del FLHSMV indican que **SR22/FR44 deben mantenerse de forma continua durante 3 años** desde la fecha original de suspensión del caso (FR case). El s. 324.051(3) también señala que esas suspensiones permanecen por **3 años**, salvo que se reinstalen según el capítulo.' },
        { type: 'p', text: 'En la práctica: mantenga **cobertura continua** durante el período que indique su carta del FLHSMV. Una interrupción puede volver a afectar su licencia; use siempre el aviso oficial del departamento.' },

        { type: 'h2', text: 'Cómo se presenta el SR-22 o el FR-44' },
        { type: 'ol', items: [
          '**Lea su carta o aviso del FLHSMV.** Confirme si pide SR-22 o FR-44, el número de caso si aparece, y qué más necesita para reinstalar (tasas de reinstalación, cursos, etc.).',
          '**Obtenga una póliza** que incluya al menos los límites de responsabilidad que su caso exige (10/20/10 para muchos SR-22; 100/300/50 para FR-44 por DUI), además del PIP/PDL obligatorio para vehículos registrados en Florida.',
          '**Pídale a la aseguradora que presente el certificado** ante el FLHSMV. Según los procedimientos del departamento, las aseguradoras presentan SR22/FR44 electrónicamente; el conductor no envía el formulario por su cuenta en el flujo habitual.',
          '**Mantenga la cobertura sin interrupciones** durante todo el período exigido. Si cambia de aseguradora, asegúrese de que la nueva presente el certificado a tiempo y de que no haya un hueco entre pólizas.',
          '**Conserve la documentación** de la póliza y de la presentación. Si el departamento pide verificación, su agente puede ayudarle a localizar el registro.',
        ] },
        { type: 'h2', text: 'Pasos prácticos si le pidieron un SR-22 o FR-44' },
        { type: 'ol', items: [
          'Guarde la carta del FLHSMV y anote la fecha y el tipo de certificado (SR-22 o FR-44).',
          'Reúna su historial de manejo y los datos del vehículo (si tiene uno a su nombre).',
          'Hable con un agente de seguros con licencia en Florida y explique exactamente lo que pide el estado.',
          'Cuando la póliza esté lista, confirme que la aseguradora **ya presentó** el certificado electrónicamente.',
          'No cancele la póliza ni deje un hueco en la cobertura mientras el requisito esté activo.',
          'Si no es dueño de un vehículo, pregunte por una póliza de operador (non-owner) que pueda cumplir los límites que su caso exige.',
        ] },

        { type: 'h2', text: 'Ayuda local en Florida City y Homestead' },
        { type: 'p', text: 'En [M&K Agency ayudamos con presentaciones SR-22 y FR-44](/es/sr22-insurance-florida-city) en Florida City, Homestead y el sur de Miami-Dade. Un agente licenciado revisa su carta del FLHSMV y coordina la póliza y la presentación electrónica.' },
        { type: 'p', text: 'También puede [pedir una cotización](/es/quote), leer más sobre el [seguro de auto en Florida City](/es/car-insurance-florida-city) o llamar al **(305) 859-3953**. Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Horario: lunes a viernes 9–6; sábados con cita.' },
        { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza y de los requisitos exactos de su caso ante el FLHSMV. Hable con un agente licenciado antes de cambiar su cobertura. Esta página es información general, no asesoría legal.' },
      ],
      faq: [
        { q: '¿El SR-22 es un tipo de seguro?', a: 'No. Según el FLHSMV, el SR22 es una presentación de seguro que certifica cobertura de responsabilidad por lesiones corporales (BIL) y por daños a la propiedad (PDL) para cumplir la Ley de Responsabilidad Financiera de Florida. Usted necesita una póliza que cumpla los límites; el SR-22 es el certificado que la aseguradora presenta ante el estado.' },
        { q: '¿Cuáles son los límites del SR-22 en Florida?', a: 'La prueba de responsabilidad financiera del s. 324.021(7) es 10/20/10: $10,000 por persona, $20,000 por accidente por lesiones corporales y $10,000 por daños a la propiedad. Los procedimientos del FLHSMV indican que el SR22 certifica al menos esos límites.' },
        { q: '¿Cuánto tiempo hay que mantener el SR-22 o el FR-44?', a: 'Para el FR-44 tras un DUI bajo s. 324.023, la ley exige mantener los límites 100/300/50 por un mínimo de 3 años. Para SR22/FR44 en general, los materiales de procedimientos del FLHSMV hablan de mantenimiento continuo durante 3 años desde la fecha original de suspensión del caso. Confirme las fechas en su aviso del FLHSMV.' },
        { q: '¿Qué es el FR-44 y cuándo se exige?', a: 'El FR-44 es el certificado de límites más altos (100/300/50) que Florida usa tras ciertos casos de DUI bajo s. 316.193 ocurridos después del 1 de octubre de 2007 (s. 324.023). Un FR-44 cubre también los límites del SR-22; no necesita presentar ambos para el mismo caso.' },
        { q: '¿Puedo presentar el SR-22 yo mismo?', a: 'En el procedimiento habitual, no. La aseguradora presenta el certificado ante el FLHSMV, hoy de forma electrónica. Su papel es obtener una póliza que cumpla los límites y pedirle a la aseguradora o al agente que complete la presentación.' },
      ],
      sources: SOURCES_ES,
    },

    ru: {
      title: 'Что такое SR-22 во Флориде: срок, подача и отличие от FR-44',
      metaTitle: 'SR-22 во Флориде: что это, срок и FR-44 | M&K Agency',
      description: 'Гид по SR-22 во Флориде: что это за сертификат, когда его требует штат, лимиты 10/20/10, обычный срок и чем FR-44 отличается после DUI.',
      excerpt: 'SR-22 — это не отдельный вид страховки, а сертификат, который страховая подаёт в FLHSMV. Разбираем, что это, когда требуют, сколько обычно держать покрытие и чем отличается FR-44.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Если Департамент безопасности дорожного движения и автотранспорта Флориды (**FLHSMV**) сообщил, что вам нужен **SR-22**, вы не одиноки: многие водители Южной Флориды, в том числе русскоязычные, получают такое уведомление после приостановки прав, ДТП или проблем со страховкой. Главное сразу: **SR-22 — это не вид страховки**. Это **сертификат финансовой ответственности**, который ваша страховая компания подаёт в штат, подтверждая, что у вас есть требуемое покрытие ответственности.' },
        { type: 'p', text: 'Ниже — практическое объяснение на основе официальных материалов FLHSMV и Florida Statutes: что такое SR-22, когда его обычно требуют, какие лимиты он подтверждает, как его подают, сколько обычно длится требование и чем оно отличается от **FR-44** — сертификата с более высокими лимитами после определённых дел о DUI.' },

        { type: 'h2', text: 'Что такое SR-22 по определению FLHSMV' },
        { type: 'p', text: 'На странице требований к страховке FLHSMV определяет **SR22** как страховую подачу (insurance filing), которая **подтверждает покрытие ответственности за телесные повреждения (BIL) и за ущерб имуществу (PDL)**, чтобы выполнить требования восстановления прав по **Закону Флориды о финансовой ответственности** (Florida Financial Responsibility Law).' },
        { type: 'ul', items: [
          'Вы **не подаёте** SR-22 самостоятельно: это делает **страховая компания** (как правило, электронно в FLHSMV).',
          'Сертификат показывает, что у вас есть (и будет поддерживаться) покрытие ответственности, которое штат требует по вашему делу.',
          'Если полис отменят или в покрытии будет перерыв, пока сертификат активен, страховая обычно уведомляет штат — и права снова могут приостановить.',
        ] },
        { type: 'callout', title: 'Важно', text: 'SR-22 — это сертификат, а не полис. Вам по-прежнему нужна автостраховка с лимитами и покрытиями, которые требует штат. Это общая информация, не юридическая консультация; уточняйте своё дело в FLHSMV или по письму о восстановлении прав.' },

        { type: 'h2', text: 'Когда во Флориде обычно требуют SR-22' },
        { type: 'p', text: 'Глава 324 Florida Statutes описывает случаи, когда нужно доказать финансовую ответственность. На практике FLHSMV запрашивает сертификат SR-22/FR-44, когда водитель **не может подтвердить**, что на дату события у него было нужное покрытие ответственности (например, при отчётном ДТП или при определённых приговорах и приостановках).' },
        { type: 'p', text: 'Типичные ситуации (по материалам FLHSMV и главе 324):' },
        { type: 'ul', items: [
          '**Отчётные ДТП**, в которых у водителя или владельца на момент аварии не было полиса ответственности с лимитами s. 324.021(7) (см. s. 324.051).',
          '**Приостановки**, связанные с финансовой ответственностью или отсутствием обязательной страховки, когда штат требует доказательство для восстановления.',
          'Определённые **приговоры или нарушения ПДД**, которые открывают дело о финансовой ответственности в департаменте.',
          'Дела о **DUI** по s. 316.193, если событие было **после 1 октября 2007 года**: обычно нужен **FR-44** (более высокие лимиты), а не стандартный SR-22. FR-44 закрывает и лимиты SR-22 — оба сертификата по одному делу не нужны.',
        ] },
        { type: 'p', text: 'Самый надёжный ориентир — письмо или уведомление FLHSMV о восстановлении: там указано, нужен SR-22 или FR-44 и что ещё требуется для возврата прав или регистрации.' },

        { type: 'h2', text: 'Какие лимиты подтверждает SR-22: 10/20/10' },
        { type: 'p', text: '«Доказательство финансовой ответственности» во Флориде по **s. 324.021(7)** — это способность отвечать за ущерб в ДТП не менее чем на:' },
        { type: 'ul', items: [
          '**$10,000** за телесные повреждения или смерть **одного человека** в одном ДТП;',
          '**$20,000** за телесные повреждения или смерть **двух и более человек** в одном ДТП (с учётом лимита на человека); и',
          '**$10,000** за ущерб **имуществу** третьих лиц в одном ДТП.',
        ] },
        { type: 'p', text: 'Это и есть **10/20/10**. Процедурные руководства FLHSMV указывают, что **SR22** подтверждает лимиты ответственности не ниже **10/20/10**. Отдельно для регистрации автомобиля во Флориде по-прежнему нужны обязательные **PIP** и **PDL** (минимум по $10,000 каждого) — это другое требование, не то же самое, что сертификат финансовой ответственности.' },

        { type: 'h2', text: 'SR-22 и FR-44: в чём разница' },
        { type: 'p', text: 'Два названия часто путают. Главное отличие — в **лимитах** и в **причине** требования:' },
        { type: 'ul', items: [
          '**SR-22:** стандартный сертификат финансовой ответственности с лимитами не ниже **10/20/10** (BIL/PDL), по процедурам FLHSMV.',
          '**FR-44:** сертификат с **более высокими лимитами**, который Флорида требует после определённых дел о **управлении в состоянии опьянения (DUI)**.',
        ] },
        { type: 'p', text: 'По **s. 324.023**, владелец или водитель, которого — независимо от adjudication of guilt — признали виновным или который признал вину / nolo contendere по обвинению в DUI по s. 316.193 **после 1 октября 2007 года**, должен поддерживать способность отвечать за ущерб в размере:' },
        { type: 'ul', items: [
          '**$100,000** за повреждения или смерть одного человека;',
          '**$300,000** за повреждения или смерть двух и более человек (с учётом лимита на человека); и',
          '**$50,000** за ущерб имуществу в одном ДТП.',
        ] },
        { type: 'p', text: 'Это **100/300/50**. Та же статья требует держать эти повышенные лимиты **минимум 3 года**. FLHSMV оформляет такой уровень покрытия сертификатом **FR44**. Если у вас уже действует FR-44, отдельный SR-22 по тому же делу не нужен.' },

        { type: 'h2', text: 'Сколько длится требование' },
        { type: 'p', text: 'Для FR-44 после DUI по s. 324.023 закон прямо говорит: повышенные лимиты нужно поддерживать **не менее 3 лет**. Далее: если в течение **3 лет** с даты **восстановления** прав за нарушение s. 316.193 человек не был осуждён за новый DUI или тяжкое дорожное преступление (felony traffic offense), от этого требования освобождают.' },
        { type: 'p', text: 'Для SR-22 по другим делам о финансовой ответственности процедурные материалы FLHSMV указывают, что сертификаты **SR22/FR44 нужно непрерывно поддерживать 3 года** с исходной даты приостановки по делу FR. Статья s. 324.051(3) также говорит, что приостановки прав или регистрации по этой статье действуют **3 года**, если права не восстановлены иначе по главе.' },
        { type: 'p', text: 'На практике: рассчитывайте на **непрерывное покрытие** на весь срок, указанный в письме FLHSMV. Перерыв может снова создать проблемы с правами. Конкретные даты зависят от вашего дела — ориентируйтесь на официальное уведомление департамента.' },

        { type: 'h2', text: 'Как подают SR-22 или FR-44' },
        { type: 'ol', items: [
          '**Прочитайте письмо или уведомление FLHSMV.** Уточните, нужен SR-22 или FR-44, номер дела (если указан) и что ещё требуется для восстановления (сборы, курсы и т.п.).',
          '**Оформите полис** с лимитами ответственности не ниже тех, что требует ваше дело (часто 10/20/10 для SR-22; 100/300/50 для FR-44 после DUI), плюс обязательные PIP/PDL для авто с регистрацией Флориды.',
          '**Попросите страховую подать сертификат** в FLHSMV. По процедурам департамента SR22/FR44 подают электронно; в обычном порядке водитель сам форму не отправляет.',
          '**Держите покрытие без перерывов** весь требуемый срок. При смене страховой убедитесь, что новая компания вовремя подала сертификат и между полисами нет «дыры».',
          '**Сохраняйте документы** по полису и подаче. Если департамент запросит проверку, агент поможет найти запись.',
        ] },
        { type: 'p', text: 'Статья s. 324.031 допускает и другие способы доказать финансовую ответственность (например, определённые депозиты или сертификаты самострахования), но для частных водителей обычный путь — полис ответственности с нужными лимитами и сертификат, который подаёт страховая.' },

        { type: 'h2', text: 'Чем SR-22 не является' },
        { type: 'ul', items: [
          '**Это не «особая страховка»** с отдельным набором покрытий: это сертификат к вашему полису ответственности.',
          '**Он не заменяет обязательные PIP и PDL** для регистрации легкового авто во Флориде.',
          '**Это не то же самое, что FR-44**: у FR-44 гораздо более высокие лимиты после определённых DUI.',
          '**Вы сами обычно не подаёте** его в штат: это делает страховая компания.',
        ] },

        { type: 'h2', text: 'Что делать, если вам назначили SR-22 или FR-44' },
        { type: 'ol', items: [
          'Сохраните письмо FLHSMV и отметьте дату и тип сертификата (SR-22 или FR-44).',
          'Соберите историю вождения и данные автомобиля (если авто на вас).',
          'Обратитесь к лицензированному страховому агенту во Флориде и точно опишите, что требует штат.',
          'Когда полис готов, убедитесь, что страховая **уже подала** сертификат электронно.',
          'Не отменяйте полис и не допускайте перерыва в покрытии, пока требование действует.',
          'Если у вас нет своего автомобиля, спросите про вариант non-owner (страховка оператора), который может закрыть нужные лимиты ответственности; доступность зависит от страховой и вашей ситуации.',
        ] },

        { type: 'h2', text: 'Помощь рядом — Florida City и Homestead' },
        { type: 'p', text: 'В [M&K Agency мы помогаем с подачей SR-22 и FR-44](/ru/sr22-insurance-florida-city) водителям Florida City, Homestead и юга Miami-Dade. Лицензированный агент разберёт письмо FLHSMV, объяснит, нужен SR-22 или FR-44, и организует полис и электронную подачу.' },
        { type: 'p', text: 'Также можно [запросить расчёт](/ru/quote), почитать об [автостраховании во Florida City](/ru/car-insurance-florida-city) или позвонить по **(305) 859-3953**. Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Часы: пн–пт 9–6; суббота по записи. Общаемся на русском, испанском и английском.' },
        { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений конкретного полиса и от точных требований вашего дела в FLHSMV. Перед изменением страховки поговорите с лицензированным агентом. Эта страница — общая информация, не юридическая консультация.' },
      ],
      faq: [
        { q: 'SR-22 — это вид страховки?', a: 'Нет. По FLHSMV, SR22 — это страховая подача, подтверждающая покрытие ответственности за телесные повреждения (BIL) и ущерб имуществу (PDL) для Закона Флориды о финансовой ответственности. Вам нужен полис с нужными лимитами; SR-22 — сертификат, который страховая подаёт в штат.' },
        { q: 'Какие лимиты у SR-22 во Флориде?', a: 'По s. 324.021(7) proof of financial responsibility — это 10/20/10: $10,000 на человека, $20,000 на ДТП по телесным повреждениям и $10,000 по имуществу. Процедуры FLHSMV указывают, что SR22 подтверждает как минимум эти лимиты.' },
        { q: 'Сколько нужно держать SR-22 или FR-44?', a: 'Для FR-44 после DUI по s. 324.023 закон требует держать лимиты 100/300/50 минимум 3 года. Для SR22/FR44 в целом процедурные материалы FLHSMV говорят о непрерывном поддержании 3 года с исходной даты приостановки по делу. Даты уточняйте в уведомлении FLHSMV.' },
        { q: 'Что такое FR-44 и когда его требуют?', a: 'FR-44 — сертификат повышенных лимитов (100/300/50), который Флорида использует после определённых дел о DUI по s. 316.193 после 1 октября 2007 года (s. 324.023). FR-44 закрывает и лимиты SR-22; оба по одному делу не нужны.' },
        { q: 'Могу ли я сам подать SR-22?', a: 'В обычном порядке — нет. Сертификат подаёт страховая компания в FLHSMV, сегодня электронно. Ваша задача — оформить полис с нужными лимитами и попросить страховую или агента завершить подачу.' },
      ],
      sources: SOURCES_RU,
    },
  },
};
