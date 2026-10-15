import type { BlogPost } from '../types';

// Facts re-checked 2026-10-15 against:
// - FLHSMV Florida Insurance Requirements (flhsmv.gov/insurance/) — SR22 definition; PIP/PDL; suspension up to 3 years; reinstatement fee up to $500
// - Florida Statutes s. 324.021(7) (2026) — proof of financial responsibility 10/20/10
// - Florida Statutes s. 324.023 (2026) — DUI higher limits 100/300/50, min. 3 years
// - Florida Statutes s. 324.031 (2026) — manner of proving financial responsibility
// - Florida Statutes s. 324.051 (2026) — crash reports; license/registration suspensions for 3 years
// - Florida Statutes s. 324.072 (2026) — proof required upon certain convictions (322.26 / 322.27)
// - FLHSMV FR procedure manuals (SR22/FR44 electronic filing within 15 working days; continuous 3-year maintenance; FR44 covers SR22 limits)
// EN blog version added 2026-10-15 (informational; conversion intent → /[lang]/sr22-insurance-florida-city).
// No private insurers named. No rate figures or promotional claims.
const SOURCES_EN = [
  { label: 'FLHSMV: Florida Insurance Requirements (SR22 definition; PIP/PDL; suspension and reinstatement notes)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'Florida Statutes s. 324.021 (2026): definitions; proof of financial responsibility 10/20/10', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Florida Statutes s. 324.023 (2026): financial responsibility after DUI; 100/300/50; minimum 3 years', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Florida Statutes s. 324.031 (2026): manner of proving financial responsibility', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Florida Statutes s. 324.051 (2026): crash reports; license and registration suspensions', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.051' },
  { label: 'Florida Statutes s. 324.072 (2026): proof required upon certain convictions', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.072' },
  { label: 'FLHSMV: Procedures Manual — SR22/FR44 certification (limits and continuous maintenance)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Verification criteria for financial responsibility sanctions', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

const SOURCES_ES = [
  { label: 'FLHSMV: Florida Insurance Requirements (definición de SR22; PIP/PDL; suspensiones)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'Estatutos de Florida s. 324.021 (2026): definiciones; prueba de responsabilidad financiera 10/20/10', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Estatutos de Florida s. 324.023 (2026): responsabilidad financiera tras DUI; 100/300/50; mínimo 3 años', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Estatutos de Florida s. 324.031 (2026): formas de demostrar responsabilidad financiera', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Estatutos de Florida s. 324.051 (2026): reportes de choques; suspensiones de licencia y registro', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.051' },
  { label: 'Estatutos de Florida s. 324.072 (2026): prueba exigida tras ciertas condenas', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.072' },
  { label: 'FLHSMV: Procedures Manual — certificación SR22/FR44 (límites y mantenimiento continuo)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Verification criteria for financial responsibility sanctions', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

const SOURCES_RU = [
  { label: 'FLHSMV: Florida Insurance Requirements (определение SR22; PIP/PDL; приостановки)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'Florida Statutes s. 324.021 (2026): определения; proof of financial responsibility 10/20/10', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Florida Statutes s. 324.023 (2026): финансовая ответственность после DUI; 100/300/50; минимум 3 года', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Florida Statutes s. 324.031 (2026): способы подтверждения финансовой ответственности', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Florida Statutes s. 324.051 (2026): отчёты о ДТП; приостановки прав и регистрации', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.051' },
  { label: 'Florida Statutes s. 324.072 (2026): доказательство после определённых приговоров', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.072' },
  { label: 'FLHSMV: Procedures Manual — сертификация SR22/FR44 (лимиты и непрерывное поддержание)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Verification criteria for financial responsibility sanctions', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

export const post: BlogPost = {
  slug: 'sr22-florida-guia',
  datePublished: '2026-09-27',
  dateModified: '2026-10-15',
  translations: {
    en: {
      title: 'SR-22 in Florida: Who Needs It, How Filing Works and How Long It Lasts',
      metaTitle: 'SR-22 in Florida: Who Needs It & How It’s Filed | M&K Agency',
      description: 'What an SR-22 is in Florida, who needs one, 10/20/10 vs FR-44, how insurers file with FLHSMV, how long to keep coverage, and what a lapse can mean.',
      ogAlt: 'Car dashboard with a document on the windshield and palms outside',
      excerpt: 'An SR-22 is not a type of insurance — it is a certificate your insurer files with FLHSMV. Who needs it, how filing works, how long it lasts, FR-44 after DUI, and what a lapse can trigger.',
      category: 'Auto insurance',
      body: [
        { type: 'p', text: 'If FLHSMV told you that you need an **SR-22**, start here: **it is not a type of insurance**. On its insurance-requirements page, FLHSMV defines an **SR22** as an insurance filing that **certifies bodily injury liability (BIL) and property damage liability (PDL)** for reinstatement under Florida’s Financial Responsibility Law.' },
        { type: 'p', text: 'This guide covers who typically needs one, the limits it certifies, how filing works, how long coverage must stay continuous, how **FR-44** differs after certain DUI cases, and what a lapse can trigger. For local help getting a policy and filing set up, see our [SR-22 and FR-44 page for Florida City and Homestead](/en/sr22-insurance-florida-city) or [request a quote](/en/quote).' },

        { type: 'h2', text: 'What an SR-22 is (and is not)' },
        { type: 'ul', items: [
          'You generally **do not file** it yourself — your **insurer** does (usually electronically with FLHSMV).',
          'The certificate shows you carry the liability coverage the state requires for your case.',
          'If the policy is canceled or interrupted while the certificate is active, the insurer typically notifies the department, which can affect your privilege again.',
        ] },
        { type: 'callout', title: 'Important', text: 'An SR-22 does not replace PIP and PDL required to register a vehicle with four or more wheels, and it does not authorize driving while your license is still suspended. Confirm your requirement with FLHSMV or your reinstatement letter. This is general information, not legal advice.' },

        { type: 'h2', text: 'Who typically needs an SR-22' },
        { type: 'p', text: 'Chapter 324 sets when financial responsibility must be shown. In practice, FLHSMV asks for an SR-22 or FR-44 when a driver **cannot show** the required liability coverage was in force on the date of the event:' },
        { type: 'ul', items: [
          '**Reportable crashes** without a liability policy meeting s. **324.021(7)** (see s. **324.051**).',
          '**Financial-responsibility or insurance-related suspensions**, when proof is required before reinstatement.',
          '**Certain convictions.** Under s. **324.072**, after a license suspension or revocation under s. 322.26 or s. 322.27, the department also suspends registrations in that person’s name unless they already had coverage required under s. 324.031 on the date of the latest offense, or give and thereafter maintain proof of financial responsibility as the chapter requires.',
          '**DUI** under s. 316.193 after **October 1, 2007**: usually an **FR-44** (higher limits), not a standard SR-22. An FR-44 covers the SR-22 limit level — you do not need both for the same case.',
        ] },
        { type: 'p', text: 'Your FLHSMV letter is the clearest guide. If you do not own a car, see [non-owner SR-22 in Florida](/en/blog/non-owner-sr22-florida).' },

        { type: 'h2', text: 'Limits: 10/20/10' },
        { type: 'p', text: 'Proof of financial responsibility in s. **324.021(7)** means the ability to respond in damages for at least **$10,000** for injury or death of one person, **$20,000** for two or more persons (subject to the per-person limit), and **$10,000** for property damage — **10/20/10**. FLHSMV procedures state that an **SR22** certifies at least those BIL/PDL limits. Separately, Florida-registered vehicles still need continuous **PIP** and **PDL** (at least $10,000 of each). See [Florida minimum car insurance (PIP & PDL)](/en/blog/florida-minimum-car-insurance-requirements).' },

        { type: 'h2', text: 'SR-22 vs FR-44' },
        { type: 'p', text: '**SR-22** certifies at least **10/20/10**. **FR-44** is Florida’s higher-limit certificate after certain DUI cases. Under s. **324.023**, after a DUI under s. 316.193 after October 1, 2007 (regardless of adjudication of guilt), the owner or operator must maintain **$100,000 / $300,000 / $50,000** (**100/300/50**) for a **minimum of 3 years**. FLHSMV documents that with an **FR44**. Procedure materials say you do not need both an SR-22 and an FR-44 for the same person. More context: [bodily injury liability and FR-44](/en/blog/bodily-injury-liability-fr44-florida).' },

        { type: 'h2', text: 'How long it usually lasts' },
        { type: 'p', text: 'For FR-44 after DUI, s. 324.023 requires the higher limits for at least **3 years**. If for **3 years** from reinstatement of privileges for a s. 316.193 violation there is no new DUI or felony traffic conviction, the person becomes exempt. For SR22/FR44 cases generally, FLHSMV procedures say certificates must be **maintained continuously for 3 years** from the original FR-case suspension date. s. **324.051(3)** also keeps suspensions under that section for **3 years** unless reinstated as the chapter allows. Follow the dates on your notice.' },

        { type: 'h2', text: 'How filing works' },
        { type: 'ol', items: [
          'Read your FLHSMV letter (SR-22 vs FR-44, case number, other steps).',
          'Obtain a liability policy with at least the required limits (often 10/20/10; 100/300/50 for FR-44 after DUI), plus PIP/PDL if you register a Florida vehicle.',
          'Ask the insurer to file with FLHSMV. Procedures say filings are electronic and due within **15 working days** of issuance; drivers do not mail the form in the usual flow.',
          'Keep coverage continuous. If you change insurers, avoid a gap and confirm the new filing.',
          'Keep policy and filing records for verification requests.',
        ] },
        { type: 'p', text: 's. **324.031** also allows other proof methods (certain deposits or department self-insurance certificates), but most private drivers use a liability policy plus the insurer’s certificate.' },

        { type: 'h2', text: 'What happens if coverage lapses' },
        { type: 'p', text: 'A cancellation or gap while the certificate is active typically leads the insurer to notify FLHSMV (SR26 / FR46 codes), which can suspend your privilege again. FLHSMV also states that failing to maintain required insurance can suspend driving privilege and plate for **up to three years**, with a reinstatement fee of **up to $500**, and that there is no temporary or hardship license for insurance-related suspensions. Turn in the plate before canceling insurance on a registered vehicle.' },

        { type: 'h2', text: 'Next steps and local help' },
        { type: 'p', text: 'Save the letter, note SR-22 vs FR-44, gather your driving history and vehicle info, and work with a Florida-licensed agent so the insurer files electronically. Do not leave a gap while the requirement is active. No car in your name? Ask about an operator’s (non-owner) policy — [Non-Owner SR-22 in Florida](/en/blog/non-owner-sr22-florida).' },
        { type: 'p', text: 'At [M&K Agency we help with SR-22 and FR-44 filings](/en/sr22-insurance-florida-city) in Florida City, Homestead, and South Miami-Dade. [Request a quote](/en/quote), read [car insurance in Florida City](/en/car-insurance-florida-city), or call **(305) 859-3953**. Office: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Hours: Mon–Fri 9–6; Saturday by appointment. Coverage depends on each policy and your exact FLHSMV case; this page is general information, not legal advice.' },
      ],
      faq: [
        { q: 'Is an SR-22 a type of insurance?', a: 'No. FLHSMV defines an SR22 as a filing that certifies BIL and PDL for Florida’s Financial Responsibility Law. You need a policy that meets the limits; the SR-22 is the certificate the insurer files with the state.' },
        { q: 'What limits does an SR-22 certify?', a: 'Under s. 324.021(7), proof of financial responsibility is 10/20/10: $10,000 per person, $20,000 per crash for bodily injury, and $10,000 for property damage. FLHSMV procedures say an SR22 certifies at least those limits.' },
        { q: 'How long must I keep an SR-22 or FR-44?', a: 'For FR-44 after DUI under s. 324.023, 100/300/50 must be carried at least 3 years. For SR22/FR44 generally, FLHSMV procedures describe continuous maintenance for 3 years from the original FR-case suspension date. Confirm dates on your notice.' },
        { q: 'What is an FR-44?', a: 'Florida’s higher-limit certificate (100/300/50) after certain DUI cases under s. 316.193 after October 1, 2007 (s. 324.023). An FR-44 also covers the SR-22 limit level; you do not need both for the same case.' },
        { q: 'Can I file the SR-22 myself?', a: 'In the usual process, no. The insurer files electronically with FLHSMV. Obtain a policy that meets the limits and ask the insurer or agent to complete the filing.' },
        { q: 'What if coverage lapses while SR-22 is required?', a: 'The insurer typically notifies FLHSMV, which can suspend your privilege again. FLHSMV also notes suspension of privilege and plate for up to three years and a reinstatement fee of up to $500 for failing to maintain required insurance. Keep continuous coverage for the full period on your notice.' },
      ],
      sources: SOURCES_EN,
    },

    es: {
      title: '¿Qué es el SR-22 en Florida? Quién lo necesita, cómo se presenta y cuánto dura',
      metaTitle: 'SR-22 en Florida: quién lo necesita y presentación | M&K Agency',
      description: 'Qué es el SR-22 en Florida, quién lo necesita, límites 10/20/10 frente al FR-44, cómo lo presenta la aseguradora ante el FLHSMV y qué implica una interrupción.',
      ogAlt: 'Tablero de carro con un documento sobre el parabrisas y palmeras afuera',
      excerpt: 'El SR-22 no es un tipo de seguro: es un certificado que su aseguradora presenta ante el FLHSMV. Quién lo necesita, cómo se presenta, cuánto dura, la diferencia con el FR-44 y qué implica una interrupción.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'Si el **FLHSMV** le indicó que necesita un **SR-22**, lo primero: **no es un tipo de seguro**. En su página de requisitos, el departamento define el **SR22** como una presentación que **certifica cobertura de responsabilidad por lesiones corporales (BIL) y por daños a la propiedad (PDL)** para reinstalar bajo la Ley de Responsabilidad Financiera de Florida.' },
        { type: 'p', text: 'Esta guía resume quién suele necesitarlo, qué límites certifica, cómo se presenta, cuánto suele durar, en qué se diferencia del **FR-44** tras ciertos DUI y qué puede pasar si hay una interrupción (textos oficiales de 2026). Para coordinar la póliza y la presentación en el sur de Miami-Dade: [SR-22 y FR-44 en Florida City y Homestead](/es/sr22-insurance-florida-city) o [pida una cotización](/es/quote).' },

        { type: 'h2', text: 'Qué es un SR-22 (y qué no es)' },
        { type: 'ul', items: [
          'Usted **no presenta** el SR-22 por su cuenta: lo hace su **aseguradora** (hoy, en la mayoría de los casos, electrónicamente ante el FLHSMV).',
          'El certificado demuestra que tiene la cobertura de responsabilidad que el estado exige para su caso.',
          'Si la póliza se cancela o hay una interrupción mientras el certificado está activo, la aseguradora normalmente notifica al estado.',
        ] },
        { type: 'callout', title: 'Importante', text: 'El SR-22 no reemplaza el PIP ni el PDL obligatorios para registrar un vehículo de cuatro o más ruedas, ni autoriza a manejar mientras la licencia siga suspendida. Confirme su caso con el FLHSMV o su carta de reinstalación. Información general, no asesoría legal.' },

        { type: 'h2', text: 'Quién suele necesitarlo' },
        { type: 'p', text: 'En la práctica, el FLHSMV pide SR-22/FR-44 cuando el conductor **no puede demostrar** que tenía la cobertura requerida en la fecha del hecho:' },
        { type: 'ul', items: [
          '**Choques reportables** sin póliza de responsabilidad con los límites de s. **324.021(7)** (véase s. **324.051**).',
          '**Suspensiones** por responsabilidad financiera o falta de seguro obligatorio, cuando el estado pide prueba para reinstalar.',
          '**Ciertas condenas.** Según s. **324.072**, tras una suspensión o revocación bajo s. 322.26 o s. 322.27, el departamento también suspende el registro de vehículos a nombre de esa persona, salvo que ya tuviera la cobertura de s. 324.031 en la fecha de la última infracción, o dé y mantenga la prueba de responsabilidad financiera que exige el capítulo.',
          '**DUI** bajo s. 316.193 **después del 1 de octubre de 2007**: normalmente **FR-44**, no el SR-22 estándar. El FR-44 cubre también los límites del SR-22.',
        ] },
        { type: 'p', text: 'Su carta del FLHSMV es la referencia más clara. Si no es dueño de un vehículo: [¿Necesito SR-22 si no tengo carro?](/es/blog/non-owner-sr22-florida).' },

        { type: 'h2', text: 'Límites: 10/20/10' },
        { type: 'p', text: 'La prueba de responsabilidad financiera del **s. 324.021(7)** es **10/20/10**: **$10,000** por persona, **$20,000** por accidente por lesiones corporales (sujeto al límite por persona) y **$10,000** por daños a la propiedad. Los procedimientos del FLHSMV indican que el **SR22** certifica al menos esos límites. Para registrar un vehículo en Florida siguen haciendo falta **PIP** y **PDL** (mínimo $10,000 de cada uno). Ver [seguro mínimo de auto en Florida (PIP y PDL)](/es/blog/florida-minimum-car-insurance-requirements).' },

        { type: 'h2', text: 'SR-22 frente a FR-44' },
        { type: 'p', text: 'El **SR-22** certifica al menos **10/20/10**. El **FR-44** es el certificado de límites más altos tras ciertos DUI. El **s. 324.023** exige, tras un DUI bajo s. 316.193 después del 1 de octubre de 2007 (con independencia de la adjudicación), mantener **100/300/50** (**$100,000 / $300,000 / $50,000**) por un **mínimo de 3 años**. El FLHSMV lo documenta con un **FR44**; no hace falta presentar ambos para el mismo caso. Más contexto: [responsabilidad por lesiones corporales y FR-44](/es/blog/bodily-injury-liability-fr44-florida).' },

        { type: 'h2', text: 'Cuánto dura' },
        { type: 'p', text: 'Para el FR-44 tras DUI, la ley exige los límites más altos al menos **3 años**. Si durante **3 años** desde la reinstalación por una violación de s. 316.193 no hay nueva condena por DUI ni delito de tráfico grave, la persona queda exenta. Para SR22/FR44 en general, los procedimientos del FLHSMV hablan de mantenimiento **continuo durante 3 años** desde la fecha original de suspensión del caso FR. El s. **324.051(3)** también mantiene esas suspensiones **3 años**, salvo reinstalación según el capítulo. Siga las fechas de su aviso.' },

        { type: 'h2', text: 'Cómo se presenta' },
        { type: 'ol', items: [
          'Lea su carta del FLHSMV (SR-22 o FR-44, número de caso, otros pasos).',
          'Obtenga una póliza con al menos los límites exigidos (a menudo 10/20/10; 100/300/50 para FR-44 por DUI), más PIP/PDL si registra un vehículo en Florida.',
          'Pida a la aseguradora que presente el certificado. Según los procedimientos, las presentaciones son electrónicas y deben hacerse dentro de **15 días hábiles** desde la emisión.',
          'Mantenga cobertura continua; si cambia de aseguradora, evite huecos y confirme la nueva presentación.',
          'Conserve la documentación de la póliza y de la presentación.',
        ] },
        { type: 'p', text: 'El s. **324.031** también admite otras formas de prueba (ciertos depósitos o autoaseguro del departamento), pero para la mayoría de conductores particulares el camino es póliza de responsabilidad más el certificado de la aseguradora.' },

        { type: 'h2', text: 'Si hay una interrupción de cobertura' },
        { type: 'p', text: 'Una cancelación o un hueco mientras el certificado está activo suele hacer que la aseguradora notifique al FLHSMV (códigos SR26 / FR46) y puede volver a suspender su privilegio. El FLHSMV indica además que no mantener el seguro requerido puede suspender el privilegio y la placa hasta **tres años**, con una tarifa de reinstalación de hasta **$500**, y que no hay licencia temporal por esas suspensiones. Entregue la placa antes de cancelar el seguro de un vehículo registrado.' },

        { type: 'h2', text: 'Pasos siguientes y ayuda local' },
        { type: 'p', text: 'Guarde la carta, anote SR-22 o FR-44, reúna historial y datos del vehículo, y trabaje con un agente con licencia en Florida para que la aseguradora presente el certificado. No deje huecos mientras el requisito esté activo. Sin carro a su nombre: [¿Necesito SR-22 si no tengo carro?](/es/blog/non-owner-sr22-florida).' },
        { type: 'p', text: 'En [M&K Agency ayudamos con presentaciones SR-22 y FR-44](/es/sr22-insurance-florida-city) en Florida City, Homestead y el sur de Miami-Dade. [Pida una cotización](/es/quote), lea sobre el [seguro de auto en Florida City](/es/car-insurance-florida-city) o llame al **(305) 859-3953**. Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Lunes a viernes 9–6; sábados con cita. La cobertura depende de cada póliza y de su caso ante el FLHSMV; esta página es información general, no asesoría legal.' },
      ],
      faq: [
        { q: '¿El SR-22 es un tipo de seguro?', a: 'No. El FLHSMV define el SR22 como una presentación que certifica BIL y PDL para la Ley de Responsabilidad Financiera. Usted necesita una póliza con los límites exigidos; el SR-22 es el certificado que presenta la aseguradora.' },
        { q: '¿Cuáles son los límites del SR-22?', a: 'Según s. 324.021(7), la prueba es 10/20/10: $10,000 por persona, $20,000 por accidente por lesiones y $10,000 por daños a la propiedad. Los procedimientos del FLHSMV indican que el SR22 certifica al menos esos límites.' },
        { q: '¿Cuánto tiempo hay que mantenerlo?', a: 'Para el FR-44 tras DUI bajo s. 324.023, 100/300/50 al menos 3 años. Para SR22/FR44 en general, los procedimientos del FLHSMV hablan de 3 años continuos desde la suspensión original del caso FR. Confirme las fechas en su aviso.' },
        { q: '¿Qué es el FR-44?', a: 'El certificado de límites más altos (100/300/50) tras ciertos DUI bajo s. 316.193 después del 1 de octubre de 2007 (s. 324.023). Cubren también el nivel del SR-22; no necesita ambos para el mismo caso.' },
        { q: '¿Puedo presentarlo yo mismo?', a: 'En el procedimiento habitual, no. La aseguradora lo presenta electrónicamente ante el FLHSMV. Su papel es obtener la póliza y pedir que completen la presentación.' },
        { q: '¿Qué pasa si se interrumpe la cobertura?', a: 'La aseguradora suele notificar al FLHSMV y puede haber una nueva suspensión. El FLHSMV también señala suspensión del privilegio y la placa hasta tres años y una tarifa de reinstalación de hasta $500. Mantenga cobertura continua todo el período de su aviso.' },
      ],
      sources: SOURCES_ES,
    },

    ru: {
      title: 'SR-22 во Флориде: кому нужен, как подаётся и сколько действует',
      metaTitle: 'SR-22 во Флориде: кому нужен и как подаётся | M&K Agency',
      description: 'Что такое SR-22 во Флориде: кому нужен, лимиты 10/20/10, отличие от FR-44, как страховая подаёт сертификат в FLHSMV и что бывает при перерыве в покрытии.',
      ogAlt: 'Приборная панель автомобиля, на лобовом стекле — документ, за окном пальмы',
      excerpt: 'SR-22 — не вид страховки, а сертификат, который страховая подаёт в FLHSMV. Кому нужен, как подают, сколько держать покрытие, чем отличается FR-44 и что значит перерыв.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Если **FLHSMV** сообщил, что вам нужен **SR-22**, главное сразу: **это не вид страховки**. На странице требований к страховке департамент определяет **SR22** как страховую подачу, которая **подтверждает покрытие ответственности за телесные повреждения (BIL) и ущерб имуществу (PDL)** для восстановления прав по Закону Флориды о финансовой ответственности.' },
        { type: 'p', text: 'Ниже — обзор (тексты 2026 года): кому обычно нужен SR-22, какие лимиты он подтверждает, как подаётся, сколько длится, чем отличается **FR-44** после определённых DUI и что бывает при перерыве. Для оформления рядом: [SR-22 и FR-44 во Florida City и Homestead](/ru/sr22-insurance-florida-city) или [запрос расчёта](/ru/quote).' },

        { type: 'h2', text: 'Что такое SR-22 (и чем он не является)' },
        { type: 'ul', items: [
          'Вы **не подаёте** его сами: это делает **страховая** (обычно электронно в FLHSMV).',
          'Сертификат показывает, что у вас есть покрытие ответственности, которое штат требует по вашему делу.',
          'Если полис отменят или будет перерыв, пока сертификат активен, страховая обычно уведомляет штат.',
        ] },
        { type: 'callout', title: 'Важно', text: 'SR-22 не заменяет обязательные PIP и PDL для регистрации авто во Флориде и не даёт права ездить, пока лицензия ещё приостановлена. Уточняйте требование в FLHSMV или по письму. Общая информация, не юридическая консультация.' },

        { type: 'h2', text: 'Кому обычно нужен' },
        { type: 'p', text: 'На практике FLHSMV запрашивает SR-22/FR-44, когда водитель **не может подтвердить**, что на дату события у него было нужное покрытие:' },
        { type: 'ul', items: [
          '**Отчётные ДТП** без полиса ответственности с лимитами s. **324.021(7)** (см. s. **324.051**).',
          '**Приостановки** по финансовой ответственности или отсутствию обязательной страховки, когда для восстановления нужно доказательство.',
          '**Определённые приговоры.** По s. **324.072**, после приостановки или аннулирования прав по s. 322.26 или s. 322.27 департамент также приостанавливает регистрацию авто на имя этого человека, если только на дату последнего нарушения у него уже не было покрытия по s. 324.031 либо он не даст и не будет поддерживать proof of financial responsibility по главе.',
          '**DUI** по s. 316.193 **после 1 октября 2007 года**: обычно **FR-44**, а не стандартный SR-22. FR-44 закрывает и лимиты SR-22.',
        ] },
        { type: 'p', text: 'Ориентир — письмо FLHSMV. Нет своего авто: [Non-owner SR-22 во Флориде](/ru/blog/non-owner-sr22-florida).' },

        { type: 'h2', text: 'Лимиты: 10/20/10' },
        { type: 'p', text: 'По **s. 324.021(7)** proof of financial responsibility — это **10/20/10**: **$10,000** на человека, **$20,000** на ДТП по телесным повреждениям (с учётом лимита на человека) и **$10,000** по имуществу. Процедуры FLHSMV указывают, что **SR22** подтверждает как минимум эти лимиты. Для регистрации авто во Флориде отдельно нужны **PIP** и **PDL** (минимум по $10,000). См. [минимальная автостраховка (PIP и PDL)](/ru/blog/florida-minimum-car-insurance-requirements).' },

        { type: 'h2', text: 'SR-22 и FR-44' },
        { type: 'p', text: '**SR-22** подтверждает не ниже **10/20/10**. **FR-44** — сертификат повышенных лимитов после определённых DUI. По **s. 324.023**, после DUI по s. 316.193 после 1 октября 2007 года (независимо от adjudication of guilt) нужно держать **100/300/50** (**$100,000 / $300,000 / $50,000**) **минимум 3 года**. FLHSMV оформляет это как **FR44**; оба по одному делу не нужны. Контекст: [ответственность за телесные повреждения и FR-44](/ru/blog/bodily-injury-liability-fr44-florida).' },

        { type: 'h2', text: 'Сколько длится' },
        { type: 'p', text: 'Для FR-44 после DUI закон требует повышенные лимиты не менее **3 лет**. Если в течение **3 лет** с восстановления прав за нарушение s. 316.193 нет нового DUI или тяжкого дорожного преступления, от требования освобождают. Для SR22/FR44 в целом процедуры FLHSMV говорят о **непрерывном поддержании 3 года** с исходной даты приостановки по делу FR. s. **324.051(3)** также держит такие приостановки **3 года**, если иное не предусмотрено главой. Даты — в вашем уведомлении.' },

        { type: 'h2', text: 'Как подают' },
        { type: 'ol', items: [
          'Прочитайте письмо FLHSMV (SR-22 или FR-44, номер дела, другие шаги).',
          'Оформите полис с нужными лимитами (часто 10/20/10; 100/300/50 для FR-44 после DUI), плюс PIP/PDL при регистрации во Флориде.',
          'Попросите страховую подать сертификат. По процедурам подача электронная и нужна в течение **15 рабочих дней** с выдачи.',
          'Держите покрытие без перерывов; при смене страховой избегайте «дыры» и подтвердите новую подачу.',
          'Сохраняйте документы по полису и подаче.',
        ] },
        { type: 'p', text: 's. **324.031** допускает и другие способы (депозиты или самострахование департамента), но для частных водителей обычный путь — полис ответственности плюс сертификат страховой.' },

        { type: 'h2', text: 'Если покрытие прервётся' },
        { type: 'p', text: 'Отмена или перерыв при активном сертификате обычно приводит к уведомлению FLHSMV (коды SR26 / FR46) и может снова приостановить права. FLHSMV также указывает: неподдерживание обязательной страховки может приостановить права и номер **до трёх лет**, сбор за восстановление — **до $500**, временных/hardship-прав для таких приостановок нет. Сдавайте номер до отмены страховки на зарегистрированном авто.' },

        { type: 'h2', text: 'Что делать дальше и помощь рядом' },
        { type: 'p', text: 'Сохраните письмо, отметьте SR-22 или FR-44, соберите историю вождения и данные авто, обратитесь к лицензированному агенту во Флориде, чтобы страховая подала сертификат электронно. Не допускайте перерыва, пока требование действует. Нет авто на вас: [Non-owner SR-22 во Флориде](/ru/blog/non-owner-sr22-florida).' },
        { type: 'p', text: 'В [M&K Agency помогаем с подачей SR-22 и FR-44](/ru/sr22-insurance-florida-city) в Florida City, Homestead и на юге Miami-Dade. [Запрос расчёта](/ru/quote), [автострахование во Florida City](/ru/car-insurance-florida-city) или звонок **(305) 859-3953**. Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Пн–пт 9–6; суббота по записи. Общаемся на русском, испанском и английском. Покрытие зависит от полиса и вашего дела в FLHSMV; это общая информация, не юридическая консультация.' },
      ],
      faq: [
        { q: 'SR-22 — это вид страховки?', a: 'Нет. По FLHSMV, SR22 — подача, подтверждающая BIL и PDL для Закона о финансовой ответственности. Нужен полис с нужными лимитами; SR-22 — сертификат, который подаёт страховая.' },
        { q: 'Какие лимиты у SR-22?', a: 'По s. 324.021(7) — 10/20/10: $10,000 на человека, $20,000 на ДТП по телесным повреждениям и $10,000 по имуществу. Процедуры FLHSMV: SR22 подтверждает как минимум эти лимиты.' },
        { q: 'Сколько нужно держать SR-22 или FR-44?', a: 'Для FR-44 после DUI по s. 324.023 — 100/300/50 минимум 3 года. Для SR22/FR44 в целом процедуры FLHSMV говорят о 3 годах непрерывно с исходной даты приостановки по делу FR. Даты — в уведомлении.' },
        { q: 'Что такое FR-44?', a: 'Сертификат повышенных лимитов (100/300/50) после определённых DUI по s. 316.193 после 1 октября 2007 года (s. 324.023). Закрывает и уровень SR-22; оба по одному делу не нужны.' },
        { q: 'Могу ли я сам подать SR-22?', a: 'В обычном порядке — нет. Сертификат подаёт страховая электронно в FLHSMV. Ваша задача — полис с нужными лимитами и просьба завершить подачу.' },
        { q: 'Что если покрытие прервётся?', a: 'Страховая обычно уведомляет FLHSMV, и права могут снова приостановить. FLHSMV также указывает приостановку прав и номера до трёх лет и сбор до $500. Держите непрерывное покрытие весь срок из уведомления.' },
      ],
      sources: SOURCES_RU,
    },
  },
};
