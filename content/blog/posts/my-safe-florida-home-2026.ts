import type { BlogPost } from '../types';

// Facts checked 2026-10-04 against:
// - MSFH Support “Is funding currently available?” (modified Aug 17, 2026) — program accepting applications
// - My Safe Florida Home FAQs (mysafeflhome.com/faqs-2/) — inspection/grant eligibility; matching vs low-income; improvements; timelines
// - MSFH Grant Application Jump Page — prioritization groups; inspection/grant criteria
// - MSFH 2025–26 program overview (mysafeflhome.com/msfh-new-year-2025-26/)
// - Florida Statutes s. 215.5586 (2026) — My Safe Florida Home Program (DFS; subject to appropriation; not an entitlement;
//   18-month completion window; grant applicants low/moderate income; inspection within 24 months; attached homes up to
//   3 stories; many 2026 amendments expire July 1, 2027). ES/RU aligned with the 2026 text on 2026-10-04 (ET).
// No private insurers named. No premium %, discount %, or savings promises. Grant dollar caps stated only as official program limits.
// EN version added 2026-10-04 (ET). Re-checked the same day: MSFH support funding article (still “now accepting
// applications”, modified Aug 17, 2026), MSFH FAQs, grant jump page, 2025–26 overview, and the 2026 text of
// s. 215.5586 (18-month completion window; grant applicants must be low- or moderate-income; 2026 amendments
// expire July 1, 2027). Where program pages and the statute differ, the EN text says so and points to the portal.
const SOURCES_EN = [
  { label: 'My Safe Florida Home Support: Is funding currently available? (accepting applications; Aug. 17, 2026 update)', url: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000024197-is-funding-currently-available-' },
  { label: 'My Safe Florida Home: Frequently Asked Questions (inspection and grant eligibility; grant types; eligible improvements)', url: 'https://mysafeflhome.com/faqs-2/' },
  { label: 'My Safe Florida Home: Grant application jump page (prioritization groups; inspection and grant criteria)', url: 'https://mysafeflhome.com/grant-application-jump-page/' },
  { label: 'My Safe Florida Home: 2025–26 program overview (inspection and grant criteria)', url: 'https://mysafeflhome.com/msfh-new-year-2025-26/' },
  { label: 'Florida Statutes s. 215.5586 (2026): My Safe Florida Home Program (DFS; subject to legislative appropriation)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/215.5586' },
];

const SOURCES_ES = [
  { label: 'My Safe Florida Home Support: ¿Hay financiamiento disponible? (aceptación de solicitudes; actualización 17 ago. 2026)', url: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000024197-is-funding-currently-available-' },
  { label: 'My Safe Florida Home: Preguntas frecuentes (elegibilidad de inspección y subsidio; tipos de grant; mejoras elegibles)', url: 'https://mysafeflhome.com/faqs-2/' },
  { label: 'My Safe Florida Home: página de inicio de solicitudes (grupos de priorización; criterios de inspección y grant)', url: 'https://mysafeflhome.com/grant-application-jump-page/' },
  { label: 'My Safe Florida Home: panorama del programa 2025–26 (inspección y grant)', url: 'https://mysafeflhome.com/msfh-new-year-2025-26/' },
  { label: 'Estatutos de Florida s. 215.5586 (2026): My Safe Florida Home Program (DFS; sujeto a apropiación legislativa)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/215.5586' },
];

const SOURCES_RU = [
  { label: 'My Safe Florida Home Support: доступно ли финансирование? (приём заявок; обновление 17 августа 2026)', url: 'https://support.mysafeflhome.com/en/support/solutions/articles/156000024197-is-funding-currently-available-' },
  { label: 'My Safe Florida Home: Frequently Asked Questions (инспекция и гранты; типы грантов; eligible improvements)', url: 'https://mysafeflhome.com/faqs-2/' },
  { label: 'My Safe Florida Home: страница заявок (группы приоритета; критерии инспекции и гранта)', url: 'https://mysafeflhome.com/grant-application-jump-page/' },
  { label: 'My Safe Florida Home: обзор программы 2025–26 (инспекция и грант)', url: 'https://mysafeflhome.com/msfh-new-year-2025-26/' },
  { label: 'Florida Statutes s. 215.5586 (2026): программа My Safe Florida Home (DFS; при наличии ассигнований)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/215.5586' },
];

export const post: BlogPost = {
  slug: 'my-safe-florida-home-2026',
  datePublished: '2026-10-04',
  translations: {
    en: {
      title: 'My Safe Florida Home 2026: Free Inspection and Grants (Official $10,000 Cap)',
      metaTitle: 'My Safe Florida Home 2026: Grants & Inspection | M&K Agency',
      description: 'My Safe Florida Home 2026: the free hurricane inspection, who qualifies for a grant, the official $10,000 cap, priority groups and how to check funding.',
      excerpt: 'My Safe Florida Home offers eligible homeowners a free hurricane mitigation inspection and, for those who qualify, a state grant with an official cap of $10,000. Here is how the program works, who qualifies and how to check funding.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'If you own a home in South Florida — Florida City, Homestead, Cutler Bay or anywhere in Miami-Dade — you have probably heard of **My Safe Florida Home (MSFH)**. It is the state program run by the Florida **Department of Financial Services (DFS)**: a **free hurricane mitigation inspection** for eligible homes and, if you meet additional criteria, a **grant** toward the improvements that inspection recommends.' },
        { type: 'p', text: 'This guide is about the **program** — who can apply, how the grants work, the steps in the portal and where funding stands. It is not a walkthrough of Form OIR-B1-1802, the private wind mitigation form; for that, see our guide to the [wind mitigation inspection in Florida](/en/blog/wind-mitigation-inspection-florida). Facts below come from [mysafeflhome.com](https://mysafeflhome.com), the program’s support center and **s. 215.5586**, Florida Statutes. The dollar amounts are **official program limits**, not a promise about your [homeowners insurance](/en/homeowners-insurance-florida-city) premium.' },

        { type: 'h2', text: 'Funding status (checked October 4, 2026)' },
        { type: 'p', text: 'According to the program’s support article **“Is funding currently available?”** (last updated **August 17, 2026**), My Safe Florida Home **is accepting applications**. Homeowners create an account in the **Applicant Portal** (Neighborly) and complete the **Prioritization Questionnaire**; the program then places them in an Inspection Group or a Grant Group, and they can submit the matching application.' },
        { type: 'callout', title: 'Funding can change', text: 'The program depends on annual legislative appropriations. Section 215.5586 states that it does not create an entitlement or obligate the state to fund inspections or retrofits, and the department may not accept more applications than available funds cover. Several 2026 changes to the statute are also temporary and set to expire July 1, 2027. Re-check mysafeflhome.com and the support center before you apply — group windows and remaining funds change.' },
        { type: 'p', text: 'The call center number listed by the program is **850-427-2559**. You can also submit a ticket through the official MSFH Support Center.' },

        { type: 'h2', text: 'What the program offers (two parts)' },
        { type: 'p', text: 'Official program materials describe two main components:' },
        { type: 'ol', items: [
          '**Free hurricane mitigation inspection** — no cost and **no obligation** to apply for a grant. An inspector under contract with the program reviews your home’s wind-resistant features and recommends improvements.',
          '**Mitigation grant** — financial help toward improvements **recommended in the initial inspection report**, subject to eligibility, prioritization and available funds.',
        ] },
        { type: 'p', text: 'For the MSFH inspection you **cannot use your own inspector**: once your application is approved, the program assigns a licensed inspector it has under contract. That is different from a private OIR-B1-1802 inspection you arrange yourself for insurance paperwork.' },

        { type: 'h2', text: 'Who can get the free inspection' },
        { type: 'p', text: 'Under the program FAQs and **s. 215.5586(1)**, the home generally must meet **all** of these:' },
        { type: 'ul', items: [
          'A **single-family** home on its own parcel — **detached**, or a townhouse-style attached home (the 2026 statute covers attached homes of up to three stories);',
          '**Site-built** and **owner-occupied**; and',
          'Granted a **homestead exemption** under Chapter 196.',
        ] },
        { type: 'p', text: 'Generally **not** eligible: multifamily buildings (apartments, duplexes, triplexes), condominiums, cooperatives, retirement homes, mobile or manufactured homes, and second, vacation or rental homes. Single-family homes attached to other units are treated as townhouses for program purposes.' },

        { type: 'h2', text: 'Extra requirements for a grant' },
        { type: 'p', text: 'Not everyone who gets an inspection qualifies for a grant. The FAQs, the application page and the statute list, among other things:' },
        { type: 'ul', items: [
          'You received the **initial inspection** through the program (the 2026 statute says within the **24 months** before you apply);',
          'An **insured value** of **$700,000 or less** (the program’s application page lists an exception for low-income homeowners, but the 2026 statute text does not — confirm the current rule in the portal);',
          'The home was **built before January 1, 2008**, as shown on the county property appraiser’s website;',
          'You provide the name and **Florida license number** of the contractor you chose;',
          'You agree to a **final inspection** when the project is done; and',
          'You agree to share with the program any information your insurer sends you about premium changes tied to the funded improvements.',
        ] },
        { type: 'p', text: 'The statute directs the program to prioritize **low- and moderate-income** applicants (as defined in s. 420.0004), and the 2026 version requires grant applicants to fall in one of those groups. Review order: (1) low-income, 60 or older; (2) other low-income; (3) moderate-income, 60 or older; (4) other moderate-income; then everyone else, in timed windows. Program materials define low-income as household income **at or below 80%** of the county median and moderate-income as **below 120%**, using HUD income rules.' },

        { type: 'h2', text: 'Grant types and the official $10,000 cap' },
        { type: 'p', text: 'The FAQs describe two grant types (both **subject to legislative appropriation**):' },
        { type: 'ul', items: [
          '**Matching grants:** the state pays **$2 for every $1** the homeowner contributes (on a reimbursement basis), up to a **maximum state contribution of $10,000**.',
          '**Low-income grants:** up to **$10,000** with **no** matching contribution and, per the FAQs, no paid-in-full invoice required.',
        ] },
        { type: 'callout', title: 'A program cap, not a premium promise', text: 'The $10,000 figure is the official maximum state contribution under the FAQs and s. 215.5586. It does not mean your homeowners insurance will cost less or change by any set amount. Any effect on your rate depends on your insurer, your policy and your home’s actual features.' },
        { type: 'p', text: '**Do not start work before official grant approval.** The FAQs are explicit: starting early disqualifies you from reimbursement. Payment is made through a **Draw Request** after the work is finished and the portal steps (including the final inspection) are complete.' },

        { type: 'h2', text: 'Improvements a grant can cover' },
        { type: 'p', text: 'When they appear in the **Initial Inspection Report**, the program lists four eligible categories:' },
        { type: 'ol', items: [
          '**Opening protection** — impact-rated windows, doors, garage doors and skylights that protect against flying debris;',
          '**Roof-to-wall attachment** — strengthening the roof-to-wall connection with clips or wraps;',
          '**Roof deck attachment** — better nailing and fastening of the roof deck;',
          '**Secondary water resistance (SWR)** — self-adhering underlayment that limits leaks if the roof covering is lost.',
        ] },
        { type: 'p', text: 'Only improvements **recommended** in the initial report and **observed** in the final report qualify; no other construction work counts. Older versions of the statute limited townhouse grants to opening protection. The program FAQ describes a 2026 legislative update (SB 1452) that lets townhomes receive roof grants like single-family homes, and the 2026 statute text no longer has the opening-protection-only limit — if you own a townhouse, confirm the current rule on mysafeflhome.com.' },

        { type: 'h2', text: 'Practical steps in the portal' },
        { type: 'ol', items: [
          'Create your **Applicant Portal** account and complete the Prioritization Questionnaire.',
          'When your group’s window opens, submit the **inspection** application (if you don’t have an MSFH inspection yet).',
          'Review the initial report in the portal; if improvements are recommended and you qualify, move on to the **Grant Phase**.',
          'Choose a Florida-licensed contractor (general, building, residential, specialty or roofing, per DBPR) and verify the license on MyFloridaLicense.com.',
          'Wait for **written grant approval** before any work begins.',
          'When the work is done, request the **final inspection** in the portal (the FAQs say you get one opportunity) and complete the Draw Request with the required documents.',
        ] },
        { type: 'p', text: 'Deadlines: both the program FAQs and the 2026 text of **s. 215.5586** say to finish construction and request the final inspection **within 18 months** of grant approval. Miss it and the application can be deemed abandoned, with the grant money returning to the department. Answer any **Request for Information (RFI)** within **60 days**, or the application can be deemed abandoned.' },

        { type: 'h2', text: 'How this fits with your homeowners insurance' },
        { type: 'p', text: 'MSFH is a state mitigation program. Your homeowners policy is a separate contract. Documenting improvements or sending mitigation paperwork to an insurer does **not** ensure a credit, a lower rate or a policy offer. At [M&K Agency](/en/homeowners-insurance-florida-city), a licensed agent can help you review your declarations page and understand what paperwork insurers usually ask for — without promising any premium outcome. For the private form insurers use, read our [wind mitigation inspection guide](/en/blog/wind-mitigation-inspection-florida).' },
        { type: 'p', text: 'If you also want help with coverage, [request a quote](/en/quote) or call **(305) 859-3953**. Office: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Hours: Monday–Friday 9–6; Saturday by appointment.' },
        { type: 'p', text: 'This page is general information based on official program sources and the statute. It is not a quote, legal advice, or an assurance of eligibility or funding. Always confirm the criteria and funding status on mysafeflhome.com on the day you apply.' },
      ],
      faq: [
        { q: 'Is My Safe Florida Home accepting applications in 2026?', a: 'According to the program’s support article last updated August 17, 2026, yes — it was accepting applications. Create an Applicant Portal account, complete the Prioritization Questionnaire and apply when your group’s window opens. Re-check mysafeflhome.com, because funding depends on annual appropriations.' },
        { q: 'What is the maximum grant?', a: 'The program FAQs and s. 215.5586 describe a maximum state contribution of $10,000: a matching grant of $2 from the state for every $1 from the homeowner, or up to $10,000 with no match for eligible low-income homeowners. That is the official grant cap, not a promise about your insurance premium.' },
        { q: 'Who qualifies for the free inspection?', a: 'Generally a site-built, owner-occupied single-family home (detached, or an attached townhouse-style home) with a homestead exemption. Condominiums, multifamily buildings, mobile or manufactured homes, and second or rental homes usually do not qualify. Details are in the mysafeflhome.com FAQs and s. 215.5586.' },
        { q: 'Can I start the work before my grant is approved?', a: 'No. The program FAQs say that starting mitigation work before official grant approval disqualifies you from reimbursement.' },
        { q: 'Is MSFH the same as a private OIR-B1-1802 inspection?', a: 'No. MSFH is the state program: the program assigns the inspector and a grant may follow. Form OIR-B1-1802 is the mitigation form an authorized inspector you hire completes for insurance documentation. They are separate paths that can complement each other; our wind mitigation inspection guide covers the form.' },
        { q: 'What improvements does the grant cover?', a: 'When the initial report recommends them: opening protection, roof-to-wall attachment, roof deck attachment and secondary water resistance (SWR). Only what was recommended and then verified at the final inspection qualifies.' },
      ],
      sources: SOURCES_EN,
    },

    es: {
      title: 'My Safe Florida Home 2026: inspección gratis y subsidio (tope oficial de $10,000)',
      metaTitle: 'My Safe Florida Home 2026: subsidio e inspección | M&K Agency',
      description: 'My Safe Florida Home 2026: inspección gratis, elegibilidad del subsidio, tope oficial de $10,000, grupos de prioridad y cómo verificar el financiamiento (DFS).',
      excerpt: 'My Safe Florida Home ofrece a dueños elegibles una inspección gratis de mitigation y, si califican, un subsidio estatal con tope oficial de hasta $10,000. Aquí el proceso, la elegibilidad y cómo verificar el financiamiento.',
      category: 'Seguro de vivienda',
      body: [
        { type: 'p', text: 'Si es dueño de casa en South Florida — Florida City, Homestead, Cutler Bay u otro punto de Miami-Dade — probablemente ha oído de **My Safe Florida Home (MSFH)**. Es el programa estatal del **Department of Financial Services (DFS)** de Florida: **inspección gratis** de mitigation ante huracanes y, si cumple criterios adicionales, un **subsidio (grant)** hacia mejoras recomendadas.' },
        { type: 'p', text: 'Esta guía cubre el **programa** (elegibilidad, financiamiento, tipos de subsidio y pasos), no el detalle de la forma privada OIR-B1-1802. Fuentes: [mysafeflhome.com](https://mysafeflhome.com), el soporte oficial y el **s. 215.5586**. No prometemos un resultado en su prima de [seguro de vivienda](/es/homeowners-insurance-florida-city): los dólares abajo son **límites oficiales del programa**, no un descuento de seguro.' },

        { type: 'h2', text: 'Estado del financiamiento (verificado el 4 de octubre de 2026)' },
        { type: 'p', text: 'Según el artículo de soporte del programa **“Is funding currently available?”** (actualizado el **17 de agosto de 2026**), My Safe Florida Home **está aceptando solicitudes**. Los dueños deben crear una cuenta en el **Applicant Portal** (Neighborly), completar el **Prioritization Questionnaire** y quedar asignados a un grupo de inspección o de grant antes de presentar la solicitud correspondiente.' },
        { type: 'callout', title: 'El financiamiento puede cambiar', text: 'El programa depende de apropiaciones legislativas anuales. El s. 215.5586 deja claro que no crea un derecho (entitlement) ni obliga al Estado a financiar inspecciones o retrofits, y el departamento no puede aceptar más solicitudes de las que cubren los fondos disponibles. Además, varios cambios de 2026 al estatuto son temporales y vencen el 1 de julio de 2027. Antes de aplicar, vuelva a comprobar el estado en mysafeflhome.com y en el centro de soporte: ventanas por grupo y fondos disponibles pueden cambiar.' },
        { type: 'p', text: 'El centro de llamadas citado por el programa es el **850-427-2559**. También puede enviar un ticket por el Support Center oficial.' },

        { type: 'h2', text: 'Qué ofrece el programa (dos componentes)' },
        { type: 'p', text: 'Los materiales oficiales describen dos piezas principales:' },
        { type: 'ol', items: [
          '**Inspección gratis de hurricane mitigation** — sin costo y **sin obligación** de solicitar un subsidio. Un inspector contratado por el programa evalúa características de resistencia al viento y recomienda mejoras.',
          '**Subsidio (grant) de mitigation** — ayuda financiera hacia mejoras **recomendadas en el informe de inspección inicial**, sujeto a elegibilidad, priorización y fondos disponibles.',
        ] },
        { type: 'p', text: 'Para la inspección MSFH **no puede usar su propio inspector**: una vez aprobada la solicitud, el programa asigna un inspector con licencia bajo contrato. Eso es distinto de una inspección privada con forma OIR-B1-1802 que usted contrata por su cuenta para documentación de seguro.' },

        { type: 'h2', text: 'Quién puede pedir la inspección gratis' },
        { type: 'p', text: 'Según las FAQ del programa y el **s. 215.5586(1)**, para la inspección el hogar suele tener que cumplir **todos** estos puntos:' },
        { type: 'ul', items: [
          'Ser una vivienda **unifamiliar** en su propia parcela: **independiente (detached)** o adosada tipo townhouse (el texto de 2026 del estatuto incluye viviendas adosadas de hasta tres pisos);',
          'Ser **construida in situ (site-built)** y **ocupada por el dueño**; y',
          'Tener **exención de homestead** bajo el Capítulo 196.',
        ] },
        { type: 'p', text: 'En general **no** califican: multifamiliares (apartamentos, dúplex, tríplex), condominios, cooperativas, hogares de retiro, casas móviles o manufactured homes, ni segundas viviendas, vacacionales o de alquiler. Las unifamiliares unidas a otras unidades se tratan como townhouses a efectos del programa.' },

        { type: 'h2', text: 'Elegibilidad adicional para el subsidio' },
        { type: 'p', text: 'No todo el que recibe inspección califica para grant. Las FAQ, la página de solicitudes y el estatuto exigen, entre otros:' },
        { type: 'ul', items: [
          'Haber recibido la **inspección inicial** a través del programa (según el texto de 2026 del estatuto, dentro de los **24 meses** anteriores a la solicitud);',
          '**Valor asegurado** de la vivienda de **$700,000 o menos** (la página de solicitudes del programa indica una excepción para dueños low-income, pero el texto de 2026 del estatuto no la incluye; confirme la regla vigente en el portal);',
          'Vivienda **construida antes del 1 de enero de 2008**, según el sitio web del tasador de propiedades (property appraiser) del condado;',
          'Nombre y **número de licencia estatal** del contratista elegido;',
          'Acuerdo de permitir una **inspección final** al terminar el proyecto; y',
          'Acuerdo de entregar al programa la información que reciba de su aseguradora sobre descuentos vinculados a las mejoras financiadas.',
        ] },
        { type: 'p', text: 'El estatuto prioriza a personas de **bajos o moderados ingresos** (definiciones ligadas a s. 420.0004), y el texto de 2026 exige que quien solicite el grant pertenezca a uno de esos dos grupos. Orden de revisión: (1) low-income de 60+; (2) demás low-income; (3) moderate-income de 60+; (4) demás moderate-income; luego otros según las ventanas. Low-income suele ser ingreso del hogar **≤80%** de la mediana del condado; moderate-income, **<120%**, según materiales del programa referenciados a HUD.' },

        { type: 'h2', text: 'Tipos de subsidio y tope oficial de $10,000' },
        { type: 'p', text: 'Las FAQ distinguen dos tipos (ambos **sujetos a apropiación legislativa**):' },
        { type: 'ul', items: [
          '**Matching grants:** el Estado aporta **$2 por cada $1** que aporte el dueño (base de reembolso), hasta un **máximo de contribución estatal de $10,000**.',
          '**Low-income grants:** hasta **$10,000** **sin** aporte de matching obligatorio y, según las FAQ, sin exigir factura pagada en su totalidad como en el matching.',
        ] },
        { type: 'callout', title: 'Tope del programa, no promesa de prima', text: 'Los $10,000 son el límite oficial de contribución estatal del grant según las FAQ y el s. 215.5586. No significan que su seguro de vivienda vaya a costar menos, ni un porcentaje de descuento. Cualquier efecto en la tarifa depende de su aseguradora, su póliza y las características reales de la casa.' },
        { type: 'p', text: '**No empiece la obra antes de la aprobación oficial del grant.** Las FAQ son explícitas: comenzar antes lo descalifica del reembolso. El pago suele hacerse mediante **Draw Request** después de terminar el trabajo y completar los pasos del portal (incluida la inspección final).' },

        { type: 'h2', text: 'Mejoras que el grant puede cubrir' },
        { type: 'p', text: 'Cuando aparecen en el **Initial Inspection Report**, el programa lista cuatro categorías elegibles:' },
        { type: 'ol', items: [
          '**Opening protection** — ventanas, puertas, puertas de garage y tragaluces resistentes a impacto / protección contra escombros voladores;',
          '**Roof-to-wall attachment** — refuerzo de la conexión techo–paredes (clips, wraps, etc.);',
          '**Roof deck attachment** — refuerzo del clavado / fijación del deck del techo;',
          '**Secondary water resistance (SWR)** — subcapa autoadhesiva u otra medida contra filtraciones si se pierde el revestimiento del techo.',
        ] },
        { type: 'p', text: 'Solo cuentan las mejoras **recomendadas** en el informe inicial y **observadas** en el informe final. Otra construcción no entra. Versiones anteriores del estatuto limitaban el grant de los townhouses a opening protection. Las FAQ del programa describen una actualización legislativa de 2026 (SB 1452) que permite a los townhomes recibir grants para el techo igual que las viviendas unifamiliares, y el texto de 2026 del estatuto ya no incluye ese límite. Si su propiedad es townhouse, confirme la regla vigente en mysafeflhome.com.' },

        { type: 'h2', text: 'Pasos prácticos en el portal' },
        { type: 'ol', items: [
          'Cree su cuenta en el **Applicant Portal** y complete el cuestionario de priorización.',
          'Cuando abra la ventana de su grupo, solicite la **inspección** (si aún no la tiene).',
          'Revise el informe inicial en el portal; si hay mejoras recomendadas y califica, indique interés en el **Grant Phase**.',
          'Elija un contratista con licencia de Florida (general, building, residential, specialty o roofing según DBPR) y verifique la licencia en MyFloridaLicense.com.',
          'Espere la **aprobación escrita del grant** antes de construir.',
          'Al terminar, solicite la **inspección final** por el portal (las FAQ indican una sola oportunidad) y complete el Draw Request con la documentación exigida.',
        ] },
        { type: 'p', text: 'Plazos: tanto las FAQ del programa como el texto de 2026 del **s. 215.5586** piden terminar la obra y solicitar la inspección final **dentro de los 18 meses** siguientes a la aprobación del grant. Si no cumple, la solicitud puede darse por abandonada y los fondos vuelven al departamento. Responda a cualquier **Request for Information (RFI)** dentro de **60 días**, o la solicitud puede darse por abandonada.' },

        { type: 'h2', text: 'Cómo encaja esto con su seguro de vivienda' },
        { type: 'p', text: 'MSFH es un programa de mitigation del Estado. Su póliza de homeowners es un contrato aparte. Documentar mejoras o entregar formularios de mitigation a una aseguradora **no garantiza** un crédito, un descuento ni una oferta. En [M&K Agency](/es/homeowners-insurance-florida-city) podemos ayudarle a revisar su declarations page y a entender qué papeles suelen pedir las aseguradoras — siempre sin prometer un resultado de prima.' },
        { type: 'p', text: 'Si también necesita orientación sobre cobertura, solicite una [cotización](/es/quote) o llame al **(305) 859-3953**. Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Horario: lunes a viernes 9–6; sábado con cita.' },
        { type: 'p', text: 'Esta página es información general basada en fuentes oficiales del programa y en el estatuto. No es cotización, asesoría legal ni garantía de elegibilidad o de fondos. Confirme siempre los criterios y el estado de financiamiento en mysafeflhome.com el día que vaya a aplicar.' },
      ],
      faq: [
        { q: '¿My Safe Florida Home está aceptando solicitudes en 2026?', a: 'Según el artículo de soporte del programa actualizado el 17 de agosto de 2026, sí estaba aceptando solicitudes. Debe crear cuenta en el Applicant Portal, completar el cuestionario de priorización y aplicar cuando abra la ventana de su grupo. Reverifique en mysafeflhome.com porque el financiamiento depende de apropiaciones anuales.' },
        { q: '¿Cuánto es el subsidio máximo?', a: 'Las FAQ del programa y el s. 215.5586 describen una contribución estatal máxima de $10,000 (matching $2 estatal por cada $1 del dueño, o hasta $10,000 sin matching para low-income elegibles). Es el tope oficial del grant, no una promesa sobre su prima de seguro.' },
        { q: '¿Quién califica para la inspección gratis?', a: 'En general: vivienda unifamiliar site-built (independiente, o adosada tipo townhouse), ocupada por el dueño, con homestead exemption. No suelen calificar condominios, multifamiliares, mobile/manufactured homes ni segundas viviendas o rentas. Detalles en las FAQ de mysafeflhome.com y en s. 215.5586.' },
        { q: '¿Puedo empezar la remodelación antes de que aprueben el grant?', a: 'No. Las FAQ del programa indican que comenzar la construcción de mitigation antes de la aprobación oficial lo descalifica del reembolso.' },
        { q: '¿MSFH es lo mismo que una inspección privada OIR-B1-1802?', a: 'No. MSFH es el programa estatal (inspección asignada por el programa y posible grant). La forma OIR-B1-1802 es documentación de mitigation que suele usarse con aseguradoras cuando usted contrata un inspector autorizado por su cuenta. Son caminos distintos que a veces se complementan.' },
        { q: '¿Qué mejoras cubre el grant?', a: 'Cuando el informe inicial las recomienda: opening protection, roof-to-wall attachment, roof deck attachment y secondary water resistance (SWR). Solo lo recomendado y luego verificado en la inspección final.' },
      ],
      sources: SOURCES_ES,
    },

    ru: {
      title: 'My Safe Florida Home 2026: бесплатная инспекция и грант (официальный лимит до $10,000)',
      metaTitle: 'My Safe Florida Home 2026: грант и инспекция | M&K Agency',
      description: 'My Safe Florida Home 2026: бесплатная инспекция, критерии гранта, официальный лимит до $10,000, группы приоритета и как проверить финансирование (DFS).',
      excerpt: 'My Safe Florida Home даёт подходящим домовладельцам бесплатную hurricane mitigation inspection и, при соответствии критериям, государственный грант с официальным лимитом до $10,000. Разбираем процесс и как проверить финансирование.',
      category: 'Страхование жилья',
      body: [
        { type: 'p', text: 'Владельцы домов в South Florida — Florida City, Homestead, Cutler Bay и по всему Miami-Dade — часто спрашивают про **My Safe Florida Home (MSFH)**. Это государственная программа штата Флорида под управлением **Department of Financial Services (DFS)**: для подходящих домов — **бесплатная инспекция** hurricane mitigation и, при дополнительных критериях, **грант** на рекомендованные улучшения.' },
        { type: 'p', text: 'Ниже — именно о **программе** (кто может подать заявку, как устроены гранты, какой сейчас статус финансирования), а не о глубоком разборе частной формы OIR-B1-1802. Для формы и частной инспекции см. наш материал [«Инспекция wind mitigation во Флориде»](/ru/blog/wind-mitigation-inspection-florida). Факты сверены с [mysafeflhome.com](https://mysafeflhome.com), support-центром программы и **s. 215.5586** Florida Statutes. Суммы в долларах ниже — **официальные лимиты программы**, а не обещание скидки по [страхованию жилья](/ru/homeowners-insurance-florida-city).' },

        { type: 'h2', text: 'Статус финансирования (проверено 4 октября 2026)' },
        { type: 'p', text: 'По статье support-центра **“Is funding currently available?”** (обновление **17 августа 2026**) программа **принимает заявки**. Нужно создать аккаунт в **Applicant Portal** (Neighborly), заполнить **Prioritization Questionnaire** и получить группу (Inspection Group или Grant Group), после чего подать соответствующую заявку.' },
        { type: 'callout', title: 'Финансирование может измениться', text: 'Программа зависит от ежегодных законодательных ассигнований. s. 215.5586 прямо говорит: это не entitlement и штат не обязан финансировать инспекции или retrofit, а департамент не может принимать заявок больше, чем покрывают доступные средства. Кроме того, многие изменения статута 2026 года временные и истекают 1 июля 2027. Перед подачей снова проверьте mysafeflhome.com и support-центр — окна групп и остаток средств меняются.' },
        { type: 'p', text: 'Call center программы, указанный в официальных материалах: **850-427-2559**. Также можно открыть ticket через Support Center.' },

        { type: 'h2', text: 'Два компонента программы' },
        { type: 'p', text: 'Официальные материалы выделяют:' },
        { type: 'ol', items: [
          '**Бесплатная hurricane mitigation inspection** — без платы и **без обязательства** идти за грантом. Инспектор по контракту с программой оценивает ветроустойчивость и рекомендует улучшения.',
          '**Mitigation grant** — финансовая помощь на улучшения, **рекомендованные в initial inspection report**, при наличии критериев, приоритета и денег в бюджете программы.',
        ] },
        { type: 'p', text: 'Для MSFH-инспекции **нельзя привести «своего» инспектора**: после одобрения заявки программа назначает лицензированного инспектора по контракту. Это отдельно от частной инспекции с формой **OIR-B1-1802**, которую вы заказываете сами для страховой документации.' },

        { type: 'h2', text: 'Кто может получить бесплатную инспекцию' },
        { type: 'p', text: 'По FAQ программы и **s. 215.5586(1)** для инспекции дом обычно должен одновременно:' },
        { type: 'ul', items: [
          'быть **односемейным** домом на отдельном участке — **detached** или присоединённым домом типа townhouse (редакция статута 2026 года включает присоединённые дома высотой до трёх этажей);',
          'быть **site-built** и **owner-occupied**; и',
          'иметь **homestead exemption** по главе 196.',
        ] },
        { type: 'p', text: 'Как правило **не** подходят: multifamily (квартиры, duplex, triplex), condominiums, cooperatives, retirement homes, mobile/manufactured homes, а также второе жильё, vacation и сдача в аренду. Односемейные дома, присоединённые к другим юнитам, для программы считаются townhouses.' },

        { type: 'h2', text: 'Дополнительные критерии для гранта' },
        { type: 'p', text: 'Не каждый, кто прошёл инспекцию, получает grant. Среди требований FAQ, страницы заявок и статута:' },
        { type: 'ul', items: [
          'уже получена **initial inspection** через программу (по редакции статута 2026 года — в течение **24 месяцев** до подачи заявки на грант);',
          '**insured value** жилья **не выше $700,000** (страница заявок программы указывает исключение для low-income, но в тексте статута 2026 года его нет — уточняйте актуальное правило в портале);',
          'дом **построен до 1 января 2008** — по данным сайта property appraiser округа;',
          'имя и **номер лицензии штата** выбранного подрядчика;',
          'согласие на **final inspection** после работ; и',
          'согласие передать программе сведения от страховщика о скидках, связанных с улучшениями за счёт гранта.',
        ] },
        { type: 'p', text: 'Статут также ориентирует программу на **low-income** и **moderate-income** заявителей (определения связаны с s. 420.0004), а редакция 2026 года требует, чтобы заявитель на грант относился к одной из этих двух групп. Порядок приоритета: (1) low-income 60+; (2) остальные low-income; (3) moderate-income 60+; (4) остальные moderate-income; затем остальные по календарю окон. Low-income обычно ≈ доход домохозяйства **не выше 80%** медианы округа; moderate-income — **ниже 120%**, по материалам программы со ссылкой на HUD.' },

        { type: 'h2', text: 'Типы грантов и официальный лимит $10,000' },
        { type: 'p', text: 'FAQ выделяет два типа (оба **при наличии ассигнований**):' },
        { type: 'ul', items: [
          '**Matching grants:** штат даёт **$2 на каждый $1** вклада домовладельца (возмещение), до **максимума государственной доли $10,000**.',
          '**Low-income grants:** до **$10,000** **без** обязательного matching; по FAQ для low-income также не требуется paid-in-full invoice так же, как при matching.',
        ] },
        { type: 'callout', title: 'Лимит программы ≠ обещание по премии', text: '$10,000 — официальный максимум вклада штата в grant по FAQ и s. 215.5586. Это не гарантия, что страхование жилья станет дешевле, и не процент скидки. Любой эффект на тариф зависит от страховщика, полиса и реальных характеристик дома.' },
        { type: 'p', text: '**Не начинайте строительство до официального одобрения гранта.** FAQ прямо говорит: старт работ раньше лишает права на возмещение. Выплата обычно идёт через **Draw Request** после завершения работ и шагов в портале (включая final inspection).' },

        { type: 'h2', text: 'Какие улучшения может покрыть грант' },
        { type: 'p', text: 'Если они рекомендованы в **Initial Inspection Report**, программа перечисляет четыре категории:' },
        { type: 'ol', items: [
          '**Opening protection** — ударостойкие окна, двери, гаражные ворота и зенитные фонари / защита от летящего мусора;',
          '**Roof-to-wall attachment** — усиление связи крыши и стен (clips, wraps и т.п.);',
          '**Roof deck attachment** — усиление крепления настила крыши;',
          '**Secondary water resistance (SWR)** — самоклеящаяся подложка или иная защита от протечек, если сорвало кровельное покрытие.',
        ] },
        { type: 'p', text: 'Учитываются только улучшения, **рекомендованные** в initial report и **подтверждённые** в final report. Прочий ремонт не входит. Прежние редакции статута ограничивали грант для townhouses только opening protection. FAQ программы описывает законодательное обновление 2026 года (SB 1452), по которому townhomes могут получать гранты на крышу так же, как односемейные дома, а в тексте статута 2026 года этого ограничения уже нет. Если у вас townhouse, уточните действующее правило на mysafeflhome.com.' },

        { type: 'h2', text: 'Практические шаги в портале' },
        { type: 'ol', items: [
          'Создайте аккаунт в **Applicant Portal** и заполните Prioritization Questionnaire.',
          'Когда откроется окно вашей группы, подайте заявку на **инспекцию** (если её ещё нет).',
          'Изучите initial report в портале; при рекомендованных улучшениях и соответствии критериям отметьте интерес к **Grant Phase**.',
          'Выберите подрядчика с лицензией Флориды (general, building, residential, specialty или roofing по DBPR) и проверьте лицензию на MyFloridaLicense.com.',
          'Дождитесь **письменного одобрения гранта**, прежде чем строить.',
          'После работ запросите **final inspection** через портал (по FAQ — одна попытка) и оформите Draw Request с нужными документами.',
        ] },
        { type: 'p', text: 'Сроки: и FAQ программы, и редакция **s. 215.5586** 2026 года требуют завершить строительство и запросить final inspection **в течение 18 месяцев** после одобрения гранта. Иначе заявку могут признать abandoned, а средства вернутся департаменту. На **Request for Information (RFI)** отвечайте в течение **60 дней**, иначе заявку также могут признать abandoned.' },

        { type: 'h2', text: 'Как это связано со страхованием жилья' },
        { type: 'p', text: 'MSFH — государственная программа mitigation. Ваш homeowners-полис — отдельный договор. Документы об улучшениях или формы mitigation **не гарантируют** кредит, скидку или предложение полиса. В [M&K Agency](/ru/homeowners-insurance-florida-city) лицензированный агент поможет разобрать declarations page и понять, какие бумаги обычно запрашивают страховщики — без обещаний по премии. Подробнее о частной форме OIR-B1-1802 — в статье про [инспекцию wind mitigation](/ru/blog/wind-mitigation-inspection-florida).' },
        { type: 'p', text: 'Нужна помощь с покрытием — [оставьте заявку на котировку](/ru/quote) или звоните **(305) 859-3953**. Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Часы: пн–пт 9–6; суббота по записи.' },
        { type: 'p', text: 'Материал носит общий характер и опирается на официальные источники программы и статут. Это не котировка, не юридическая консультация и не гарантия eligibility или финансирования. В день подачи сверяйте критерии и статус средств на mysafeflhome.com.' },
      ],
      faq: [
        { q: 'Принимает ли My Safe Florida Home заявки в 2026 году?', a: 'По статье support-центра от 17 августа 2026 программа принимала заявки. Нужны аккаунт в Applicant Portal, Prioritization Questionnaire и подача в окно вашей группы. Перепроверяйте mysafeflhome.com: финансирование зависит от ежегодных ассигнований.' },
        { q: 'Какой максимальный размер гранта?', a: 'FAQ и s. 215.5586 описывают максимальную долю штата $10,000 (matching $2 штата на каждый $1 домовладельца либо до $10,000 без matching для подходящих low-income). Это официальный лимит grant, а не обещание по страховой премии.' },
        { q: 'Кто может получить бесплатную инспекцию?', a: 'Обычно: site-built односемейный дом (detached или присоединённый, типа townhouse), owner-occupied, с homestead exemption. Как правило не подходят condominiums, multifamily, mobile/manufactured homes, второе жильё и аренда. Подробности — в FAQ mysafeflhome.com и s. 215.5586.' },
        { q: 'Можно ли начать ремонт до одобрения гранта?', a: 'Нет. FAQ программы указывает: начало mitigation-строительства до официального одобрения лишает права на возмещение.' },
        { q: 'Чем MSFH отличается от частной инспекции OIR-B1-1802?', a: 'MSFH — госпрограмма (инспектор назначается программой, возможен грант). OIR-B1-1802 — форма mitigation для страховой документации при частной инспекции у уполномоченного инспектора. Это разные пути; о форме подробнее — в нашей статье про wind mitigation inspection.' },
        { q: 'Какие улучшения покрывает грант?', a: 'Если рекомендованы в initial report: opening protection, roof-to-wall attachment, roof deck attachment и secondary water resistance (SWR). Только рекомендованное и затем подтверждённое на final inspection.' },
      ],
      sources: SOURCES_RU,
    },
  },
};
