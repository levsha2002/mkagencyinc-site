import type { BlogPost } from '../types';

// Refreshed 2026-11-19 (ET) (content plan 2026-11, row 2026-11-19): rewritten around FR-44 vs SR-22 and
// what a DUI conviction (holiday angle) means for bodily injury liability. datePublished 2026-10-04 kept.
// Facts checked 2026-11-19 against official sources (raw copies in /workspace/fr44/; notes in
// /workspace/articles/bodily-injury-liability-fr44-florida_sources.md):
// - s. 324.023 (2026, Online Sunshine): guilty / guilty or nolo plea to DUI under s. 316.193 after Oct 1, 2007,
//   regardless of adjudication -> 100,000/300,000 BI + 50,000 PD; CD alternative at least $350,000; minimum 3 years;
//   exempt after 3 years from reinstatement with no DUI or felony traffic conviction.
// - s. 324.021(7): proof of financial responsibility 10/20/10.
// - s. 316.193 (2026): 0.08; (2)(a) first conviction fine $500-$1,000, up to 6 months; (4) 0.15+/minor $1,000-$2,000,
//   up to 9 months; (5) DUI program course + probation; (6)(a) first conviction 10-day impoundment/immobilization.
// - s. 322.2615: refusal 1 yr / 18 mo; 0.08+ 6 months / 1 yr; 10-day temporary permit; review request within 10 days.
// - s. 322.28(2)(a)1: first conviction revocation at least 180 days, not more than 1 year.
// - FLHSMV Florida Insurance Requirements: PIP/PDL $10,000 each; BIL definition; SR22 definition; failure to maintain
//   insurance -> suspension up to 3 years, reinstatement fee up to $500.
// - FLHSMV DUI FAQs: FR-44 required at reinstatement (hardship or full license) for DUI convictions after Oct 1, 2007;
//   100/300 BI + 50 PD or CSL $350,000; keep 3 years from reinstatement. Pre-Oct 1, 2007: 10/20/10 proof.
// - FLHSMV DUI and Administrative Suspension Laws: first offense with bodily injury minimum 3 years revocation; first
//   conviction hardship = DUI school + hearing.
// - FLHSMV FR procedures manual (PDF): SR22/FR44 filed electronically within 15 working days of issuance; FR44 covers
//   SR22 limits; SR22/FR44 kept continuously 3 years; renewal not re-reported unless policy number changes or lapse;
//   FR46 cancellation within 15 days. Verification criteria PDF: FR-44 sanctions are person-specific (not VIN).
// Removed from the Oct 4 version (not re-verified today / off-topic): homestead, garnishment, 20-year judgments.
// No private insurers named. No premium or outcome claims. Not legal advice.
const LEG = 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=';
const TEL = 'tel:+13058593953';
const U = {
  s324023: LEG + '0300-0399/0324/Sections/0324.023.html',
  s324021: LEG + '0300-0399/0324/Sections/0324.021.html',
  s316193: LEG + '0300-0399/0316/Sections/0316.193.html',
  s3222615: LEG + '0300-0399/0322/Sections/0322.2615.html',
  s32228: LEG + '0300-0399/0322/Sections/0322.28.html',
  ins: 'https://www.flhsmv.gov/insurance/',
  duiFaq: 'https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/dui-and-iid/dui-faqs/',
  duiLaws: 'https://www.flhsmv.gov/driver-licenses-id-cards/education-courses/dui-and-iid/florida-dui-administrative-suspension-laws/',
  manual: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf',
};

export const post: BlogPost = {
  slug: 'bodily-injury-liability-fr44-florida',
  datePublished: '2026-10-04',
  dateModified: '2026-11-19',
  translations: {
    en: {
      title: 'Bodily Injury Liability and FR-44 in Florida: What a Holiday DUI Means for Your Insurance',
      metaTitle: 'FR-44 vs SR-22 in Florida: Liability After a DUI | M&K Agency',
      description: 'FR-44 in Florida after a DUI: the 100/300/50 limits in s. 324.023, how it differs from an SR-22, who files it, how long to keep it and what a lapse means.',
      ogAlt: 'Flat illustration of a car on a palm-lined road next to a shield and a filed document with a check mark',
      excerpt: 'A DUI conviction in Florida brings an FR-44: proof of 100/300/50 liability limits for three years. How it differs from an SR-22, who files it and what to check before you reinstate.',
      category: 'Auto insurance',
      body: [
        { type: 'p', text: 'The holidays fill the calendar with office parties, Thanksgiving dinners and New Year’s Eve. If one of those nights ends with a DUI arrest in Florida, the criminal case is only part of the story. A conviction also changes your **auto insurance**: before you can legally drive again, Florida requires proof of much higher **bodily injury liability** limits on a form called the **FR-44**.' },
        { type: 'p', text: 'This updated guide explains what bodily injury liability is, how the FR-44 works under **s. 324.023, Florida Statutes**, how it differs from an SR-22, and what to check before you reinstate your license. Every penalty mentioned below comes from the statutes and FLHSMV pages as they read on November 19, 2026.' },

        { type: 'h2', text: 'Bodily injury liability: what it is and when Florida requires it' },
        { type: 'p', text: 'FLHSMV defines **bodily injury liability (BIL)** as coverage that pays for injury or death to others. To register a vehicle with at least four wheels, most Florida drivers only need **$10,000 of Personal Injury Protection (PIP)** and **$10,000 of Property Damage Liability (PDL)**. That is why many drivers carry little or no bodily injury liability. See [Florida minimum car insurance requirements](/en/blog/florida-minimum-car-insurance-requirements) for the basics.' },
        { type: 'p', text: 'That changes after certain events. After some financial-responsibility cases, FLHSMV asks for an **SR-22**. After a DUI conviction, the requirement becomes the **FR-44**, with limits ten times higher.' },

        { type: 'h2', text: 'After a DUI arrest: two separate tracks' },
        { type: 'ul', items: [
          '**Administrative suspension (at the arrest).** Under s. 322.2615, if you refuse a breath, blood or urine test, or your blood- or breath-alcohol level is 0.08 or higher, the officer takes your license and issues a 10-day temporary permit. A first 0.08 suspension lasts 6 months; a first refusal, 1 year. You have **10 days** to request a review from FLHSMV.',
          '**Criminal case (conviction).** If you are convicted under s. 316.193, the court revokes your license. For a first conviction not involving a death, s. 322.28 sets a revocation of at least 180 days and no more than 1 year. FLHSMV lists a minimum of three years for a first offense with bodily injury.',
        ] },
        { type: 'p', text: 'For a first conviction, s. 316.193 also sets a fine of $500 to $1,000 (or $1,000 to $2,000 with a level of 0.15 or higher or a minor in the vehicle), up to 6 months in jail (up to 9 months in those cases), probation with a DUI program course, and a 10-day impoundment or immobilization of a vehicle. Penalties grow with repeat convictions. For the criminal case, talk to an attorney.' },

        { type: 'h2', text: 'What the FR-44 requires' },
        { type: 'p', text: 'Section 324.023 applies to anyone found guilty of DUI after October 1, 2007, or who pleaded guilty or no contest, regardless of adjudication. You must prove you can respond in damages for at least:' },
        { type: 'ul', items: [
          '**$100,000** for bodily injury to one person in a crash',
          '**$300,000** for bodily injury to two or more people in a crash',
          '**$50,000** for property damage in a crash',
        ] },
        { type: 'p', text: 'FLHSMV also accepts a **combined single limit of $350,000**, and the statute allows a certificate of deposit of at least $350,000 instead of a policy. According to FLHSMV’s DUI FAQs, you need the FR-44 **at reinstatement, whether for a hardship license or a full license**, and you must keep it for **three years from the date your driving privilege is reinstated**. The statute also has an end point: after three years from reinstatement with no new DUI or felony traffic conviction, s. 324.023 no longer applies to you.' },

        { type: 'h2', text: 'Who files the FR-44 and how' },
        { type: 'ol', items: [
          'You buy an auto policy with at least 100/300/50 limits. The FR-44 is not a separate kind of insurance; it is a certificate proving that the policy exists.',
          'Your insurer files the FR-44 with FLHSMV electronically. FLHSMV’s procedures manual says FR-44s must be filed within 15 working days of issuance.',
          'FLHSMV treats the requirement as tied to **the person**, not to one vehicle. A driver who doesn’t own a car can ask about a [non-owner policy](/en/blog/non-owner-sr22-florida).',
          'If the policy is cancelled, the insurer reports it to FLHSMV on a cancellation form (**FR-46**). FLHSMV warns that failing to keep required insurance can lead to suspension of your license and registration and a reinstatement fee of up to $500.',
        ] },

        { type: 'h2', text: 'FR-44 vs SR-22: the key differences' },
        { type: 'ul', items: [
          '**Limits:** an SR-22 certifies at least **10/20/10** (s. 324.021(7)); an FR-44 certifies **100/300/50**.',
          '**Trigger:** the FR-44 is for DUI convictions after October 1, 2007. FLHSMV says people convicted on or before that date still need SR-22-level proof. The SR-22 covers other cases, such as some crashes without required insurance — see [license suspended for no insurance](/en/blog/florida-license-suspended-no-insurance).',
          '**Overlap:** you don’t need both. FLHSMV’s manual says an FR-44 covers both sets of limits.',
          '**Duration:** both must stay in force continuously for three years under FLHSMV’s procedures.',
        ] },
        { type: 'p', text: 'More detail: our [SR-22 in Florida guide](/en/blog/sr22-florida-guia) and the [SR-22 and FR-44 filings page](/en/sr22-insurance-florida-city).' },

        { type: 'h2', text: 'Why the higher limits matter beyond paperwork' },
        { type: 'p', text: 'Bodily injury liability pays for injuries you cause to other people. A serious crash can produce claims well beyond 10/20 limits, and if a claim exceeds your policy, you can be sued personally for the difference. Some households add an [umbrella policy](/en/blog/umbrella-insurance-explained-florida) on top of auto liability. Ask a licensed agent what fits your situation.' },

        { type: 'h2', text: 'Before you reinstate: a short checklist' },
        { type: 'ol', items: [
          'Keep the court disposition and every FLHSMV letter; note the reinstatement date.',
          'Complete or enroll in the DUI program. FLHSMV requires it for a hardship license and for reinstatement.',
          'Get a policy with at least 100/300/50 (or a $350,000 single limit) and confirm that the FR-44 reached FLHSMV.',
          'Set up automatic payments or reminders so the policy never lapses during the three years.',
          'If you change cars or policies, call your agent first: per FLHSMV’s manual, a new policy number requires a new filing.',
          'Mark the end date: three years from reinstatement, with no new DUI or felony traffic conviction.',
        ] },
        { type: 'callout', title: 'Please note', text: 'This is general insurance information, not legal advice. DUI cases depend on specific facts; talk to an attorney about your case and to a licensed agent about coverage.' },

        { type: 'h2', text: 'Need an FR-44 filing?' },
        { type: 'p', text: 'M&K Agency helps drivers in Florida City, Homestead and across Miami-Dade with FR-44 and SR-22 filings in English, Spanish and Russian. Call [(305) 859-3953](' + TEL + '), [request a quote](/en/quote), or visit us at 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. See also our [car insurance page](/en/car-insurance-florida-city).' },
        { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you change your coverage.' },
      ],
      faq: [
        { q: 'Is an FR-44 the same as an SR-22?', a: 'No. Both are certificates your insurer files with FLHSMV, but an SR-22 certifies at least 10/20/10, while an FR-44 certifies 100/300/50 and applies after a DUI conviction (after October 1, 2007).' },
        { q: 'Do I need an FR-44 right after a DUI arrest?', a: 'The FR-44 rule in s. 324.023 is tied to a finding of guilt or a guilty or no contest plea. At the arrest, the administrative suspension under s. 322.2615 applies. FLHSMV asks for the FR-44 at reinstatement after a conviction.' },
        { q: 'How long do I have to keep an FR-44?', a: 'FLHSMV says three years from the date your driving privilege is reinstated. The coverage must stay continuous; if it is cancelled, the insurer notifies FLHSMV.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 324.023 (2026): financial responsibility after DUI (100/300/50, 3 years)', url: U.s324023 },
        { label: 'Florida Statutes s. 324.021(7) (2026): proof of financial responsibility (10/20/10)', url: U.s324021 },
        { label: 'Florida Statutes s. 316.193 (2026): driving under the influence; penalties', url: U.s316193 },
        { label: 'Florida Statutes s. 322.2615 (2026): administrative suspension; review within 10 days', url: U.s3222615 },
        { label: 'Florida Statutes s. 322.28 (2026): revocation periods after DUI', url: U.s32228 },
        { label: 'FLHSMV: Florida Insurance Requirements (PIP/PDL, BIL, SR22, penalties)', url: U.ins },
        { label: 'FLHSMV: DUI FAQs (FR-44 at reinstatement, 3 years)', url: U.duiFaq },
        { label: 'FLHSMV: Florida DUI and Administrative Suspension Laws', url: U.duiLaws },
        { label: 'FLHSMV: Financial Responsibility procedures manual (SR22/FR44 filing)', url: U.manual },
      ],
    },
    es: {
      title: 'Responsabilidad por lesiones corporales y FR-44 en Florida: qué significa un DUI en las fiestas para su seguro',
      metaTitle: 'FR-44 vs. SR-22 en Florida: seguro tras un DUI | M&K Agency',
      description: 'El FR-44 en Florida tras un DUI: límites 100/300/50 de la s. 324.023, en qué se diferencia del SR-22, quién lo presenta, cuánto dura y qué pasa si caduca.',
      ogAlt: 'Ilustración plana de un auto en una carretera con palmeras junto a un escudo y un documento con una marca de verificación',
      excerpt: 'Una condena por DUI en Florida trae el FR-44: prueba de límites 100/300/50 durante tres años. En qué se diferencia del SR-22, quién lo presenta y qué revisar antes de recuperar la licencia.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'Fiestas de la oficina, Acción de Gracias, Fin de Año: si una de esas noches termina con un arresto por DUI en Florida, el caso penal es solo parte del problema. Una condena también cambia su **seguro de auto**: antes de volver a manejar legalmente, Florida exige demostrar límites mucho más altos de **responsabilidad por lesiones corporales** con un formulario llamado **FR-44**.' },
        { type: 'p', text: 'Esta guía actualizada explica cómo funciona el FR-44 según la **sección 324.023 de los Estatutos de Florida**, en qué se diferencia del SR-22 y qué revisar antes de restablecer su licencia. Las sanciones que mencionamos salen de los estatutos y de las páginas de FLHSMV tal como estaban el 19 de noviembre de 2026.' },

        { type: 'h2', text: 'Qué es la responsabilidad por lesiones corporales y cuándo la exige Florida' },
        { type: 'p', text: 'FLHSMV define la **responsabilidad por lesiones corporales (BIL)** como la cobertura que paga las lesiones o la muerte de otras personas. Para registrar un vehículo de cuatro ruedas o más, a la mayoría de los conductores solo se les exige **$10,000 de Protección contra Lesiones Personales (PIP)** y **$10,000 de responsabilidad por daños a la propiedad (PDL)**. Por eso muchos manejan con poca o ninguna cobertura BIL. Repase lo básico en [requisitos mínimos de seguro de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements).' },
        { type: 'p', text: 'En algunos casos de responsabilidad financiera, FLHSMV pide un **SR-22**. Después de una condena por DUI, lo que se exige es el **FR-44**, con límites diez veces más altos.' },

        { type: 'h2', text: 'Después del arresto: dos procesos distintos' },
        { type: 'ul', items: [
          '**Suspensión administrativa (en el momento del arresto).** Según la s. 322.2615, si usted se niega a la prueba de aliento, sangre u orina, o su nivel de alcohol es de 0.08 o más, el oficial le retira la licencia y le entrega un permiso temporal de 10 días. La primera suspensión por 0.08 dura 6 meses; la primera negativa, 1 año. Tiene **10 días** para pedir una revisión ante FLHSMV.',
          '**Caso penal (condena).** Si lo condenan bajo la s. 316.193, el tribunal revoca su licencia. En una primera condena sin muerte, la s. 322.28 fija una revocación de 180 días como mínimo y 1 año como máximo. FLHSMV indica un mínimo de tres años si en la primera infracción hubo lesiones corporales.',
        ] },
        { type: 'p', text: 'Para una primera condena, la s. 316.193 también establece una multa de $500 a $1,000 (de $1,000 a $2,000 si el nivel fue de 0.15 o más o había un menor en el vehículo), hasta 6 meses de cárcel (hasta 9 meses en esos casos), libertad condicional con un curso de un programa DUI y 10 días de incautación o inmovilización de un vehículo. Las sanciones aumentan con cada condena adicional. Para el caso penal, consulte con un abogado.' },

        { type: 'h2', text: 'Qué exige el FR-44' },
        { type: 'p', text: 'La sección 324.023 se aplica a quien sea declarado culpable de DUI después del 1 de octubre de 2007, o se haya declarado culpable o no contest, sin importar si hubo adjudicación. Debe demostrar capacidad de responder por daños de al menos:' },
        { type: 'ul', items: [
          '**$100,000** por lesiones corporales a una persona en un choque',
          '**$300,000** por lesiones corporales a dos o más personas en un choque',
          '**$50,000** por daños a la propiedad en un choque',
        ] },
        { type: 'p', text: 'FLHSMV también acepta un **límite único combinado de $350,000**, y el estatuto permite un certificado de depósito de al menos $350,000 en lugar de una póliza. Según las preguntas frecuentes de FLHSMV sobre DUI, el FR-44 se pide **al restablecer la licencia, sea una licencia por dificultad (hardship) o una licencia completa**, y debe mantenerse **tres años desde la fecha en que se restablece su privilegio de manejar**. El estatuto también marca un final: pasados tres años desde el restablecimiento sin otra condena por DUI ni por un delito grave de tránsito, la s. 324.023 deja de aplicarse.' },

        { type: 'h2', text: 'Quién presenta el FR-44 y cómo' },
        { type: 'ol', items: [
          'Usted contrata una póliza de auto con límites de al menos 100/300/50. El FR-44 no es otro tipo de seguro: es un certificado que demuestra que la póliza existe.',
          'La aseguradora presenta el FR-44 ante FLHSMV de forma electrónica. El manual de procedimientos de FLHSMV indica que debe presentarse dentro de los 15 días hábiles siguientes a su emisión.',
          'Para FLHSMV, el requisito va ligado a **la persona**, no a un vehículo. Si no tiene auto propio, pregunte por una [póliza de no propietario](/es/blog/non-owner-sr22-florida).',
          'Si la póliza se cancela, la aseguradora lo notifica a FLHSMV con un formulario de cancelación (**FR-46**). FLHSMV advierte que no mantener el seguro exigido puede llevar a la suspensión de la licencia y del registro, además de un cargo de restablecimiento de hasta $500.',
        ] },

        { type: 'h2', text: 'FR-44 vs. SR-22: las diferencias clave' },
        { type: 'ul', items: [
          '**Límites:** el SR-22 certifica al menos **10/20/10** (s. 324.021(7)); el FR-44 certifica **100/300/50**.',
          '**Motivo:** el FR-44 corresponde a condenas por DUI posteriores al 1 de octubre de 2007. Según FLHSMV, quienes fueron condenados en esa fecha o antes siguen necesitando la prueba al nivel del SR-22. El SR-22 se usa en otros casos, como ciertos choques sin el seguro exigido; vea [licencia suspendida por no tener seguro](/es/blog/florida-license-suspended-no-insurance).',
          '**No se duplican:** no necesita los dos. El manual de FLHSMV dice que el FR-44 cubre ambos niveles de límites.',
          '**Duración:** ambos deben mantenerse sin interrupción durante tres años, según los procedimientos de FLHSMV.',
        ] },
        { type: 'p', text: 'Más detalles en nuestra [guía del SR-22 en Florida](/es/blog/sr22-florida-guia) y en la página de [trámites SR-22 y FR-44](/es/sr22-insurance-florida-city).' },

        { type: 'h2', text: 'Por qué importan los límites más altos' },
        { type: 'p', text: 'La cobertura BIL paga las lesiones que usted causa a otras personas. Un choque grave puede generar reclamos muy superiores a 10/20, y lo que supere su póliza pueden reclamárselo personalmente. Algunas familias suman una [póliza paraguas (umbrella)](/es/blog/umbrella-insurance-explained-florida) por encima de la responsabilidad del auto. Consúltelo con un agente con licencia.' },

        { type: 'h2', text: 'Antes de restablecer la licencia: lista rápida' },
        { type: 'ol', items: [
          'Guarde la resolución del tribunal y las cartas de FLHSMV.',
          'Complete o inscríbase en el programa DUI. FLHSMV lo exige para la licencia por dificultad y para el restablecimiento.',
          'Contrate una póliza de al menos 100/300/50 (o un límite único de $350,000) y confirme que el FR-44 llegó a FLHSMV.',
          'Active el pago automático para que la póliza no caduque.',
          'Si cambia de auto o de póliza, llame antes a su agente: según el manual de FLHSMV, un nuevo número de póliza requiere una nueva presentación.',
          'Marque la fecha final: tres años desde el restablecimiento, sin nuevas condenas por DUI ni delitos graves de tránsito.',
        ] },
        { type: 'callout', title: 'Importante', text: 'Esta es información general sobre seguros, no asesoría legal. Cada caso de DUI depende de los hechos; consulte a un abogado sobre su caso y a un agente con licencia sobre su cobertura.' },

        { type: 'h2', text: '¿Necesita presentar un FR-44?' },
        { type: 'p', text: 'En M&K Agency ayudamos a conductores de Florida City, Homestead y todo Miami-Dade con trámites FR-44 y SR-22, en español, inglés y ruso. Llame al [(305) 859-3953](' + TEL + '), [pida una cotización](/es/quote) o visítenos en 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Vea también nuestra [página de seguro de auto](/es/car-insurance-florida-city).' },
        { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza. Hable con un agente con licencia antes de cambiar su cobertura.' },
      ],
      faq: [
        { q: '¿El FR-44 es lo mismo que el SR-22?', a: 'No. Ambos son certificados que la aseguradora presenta ante FLHSMV, pero el SR-22 certifica al menos 10/20/10 y el FR-44 certifica 100/300/50 y se exige tras una condena por DUI (posterior al 1 de octubre de 2007).' },
        { q: '¿Necesito el FR-44 justo después del arresto?', a: 'La regla del FR-44 en la s. 324.023 depende de una declaración de culpabilidad o de una declaración de culpable o no contest. En el arresto se aplica la suspensión administrativa de la s. 322.2615. FLHSMV pide el FR-44 al restablecer la licencia después de una condena.' },
        { q: '¿Cuánto tiempo debo mantener el FR-44?', a: 'Según FLHSMV, tres años desde la fecha en que se restablece su privilegio de manejar. La cobertura debe ser continua; si se cancela, la aseguradora avisa a FLHSMV.' },
      ],
      sources: [
        { label: 'Estatutos de Florida s. 324.023 (2026): responsabilidad financiera tras un DUI (100/300/50, 3 años)', url: U.s324023 },
        { label: 'Estatutos de Florida s. 324.021(7) (2026): prueba de responsabilidad financiera (10/20/10)', url: U.s324021 },
        { label: 'Estatutos de Florida s. 316.193 (2026): manejar bajo la influencia; sanciones', url: U.s316193 },
        { label: 'Estatutos de Florida s. 322.2615 (2026): suspensión administrativa; revisión en 10 días', url: U.s3222615 },
        { label: 'Estatutos de Florida s. 322.28 (2026): períodos de revocación tras un DUI', url: U.s32228 },
        { label: 'FLHSMV: Florida Insurance Requirements (PIP/PDL, BIL, SR22, sanciones)', url: U.ins },
        { label: 'FLHSMV: DUI FAQs (FR-44 al restablecer la licencia, 3 años)', url: U.duiFaq },
        { label: 'FLHSMV: Florida DUI and Administrative Suspension Laws', url: U.duiLaws },
        { label: 'FLHSMV: manual de procedimientos de responsabilidad financiera (SR22/FR44)', url: U.manual },
      ],
    },
    ru: {
      title: 'Ответственность за вред здоровью и FR-44 во Флориде: чем праздничный DUI грозит вашей страховке',
      metaTitle: 'FR-44 и SR-22 во Флориде: страховка после DUI | M&K Agency',
      description: 'FR-44 во Флориде после DUI: лимиты 100/300/50 по s. 324.023, чем он отличается от SR-22, кто подаёт сертификат, сколько его держать и что будет при перерыве.',
      ogAlt: 'Плоская иллюстрация: машина на дороге с пальмами рядом со щитом и документом с галочкой',
      excerpt: 'После осуждения за DUI во Флориде нужен FR-44 — подтверждение лимитов 100/300/50 на три года. Чем он отличается от SR-22, кто его подаёт и что проверить перед восстановлением прав.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Конец года — это корпоративы, ужин на День благодарения и новогодняя ночь. Если такой вечер во Флориде заканчивается арестом за DUI (вождение в состоянии опьянения), уголовное дело — только часть проблемы. Обвинительный приговор меняет и вашу **автостраховку**: чтобы снова законно сесть за руль, штат потребует подтвердить гораздо более высокие лимиты **ответственности за вред здоровью** — через форму **FR-44**.' },
        { type: 'p', text: 'В этой обновлённой статье разбираем, что это за покрытие, как работает FR-44 по **статье 324.023 законов Флориды**, чем он отличается от SR-22 и что проверить перед восстановлением прав. Все санкции ниже взяты из текстов законов и страниц FLHSMV в редакции на 19 ноября 2026 года.' },

        { type: 'h2', text: 'Что такое ответственность за вред здоровью и когда Флорида её требует' },
        { type: 'p', text: 'FLHSMV определяет **bodily injury liability (BIL)** как покрытие, которое оплачивает травмы или гибель других людей. Чтобы зарегистрировать машину с четырьмя и более колёсами, большинству водителей достаточно **$10,000 PIP** (страхование от личных травм) и **$10,000 PDL** (ответственность за ущерб чужому имуществу). Поэтому у многих BIL в полисе минимальный или его нет вовсе. Основы — в статье о [минимальной автостраховке во Флориде](/ru/blog/florida-minimum-car-insurance-requirements).' },
        { type: 'p', text: 'В некоторых ситуациях всё меняется. По ряду дел о финансовой ответственности FLHSMV требует **SR-22**. А после осуждения за DUI нужен **FR-44** — с лимитами в десять раз выше.' },

        { type: 'h2', text: 'После ареста: два отдельных процесса' },
        { type: 'ul', items: [
          '**Административная приостановка (сразу при аресте).** По s. 322.2615, если вы отказались от теста дыхания, крови или мочи либо уровень алкоголя 0.08 или выше, офицер забирает права и выдаёт временное разрешение на 10 дней. Первая приостановка за 0.08 длится 6 месяцев, за первый отказ от теста — 1 год. На запрос пересмотра в FLHSMV даётся **10 дней**.',
          '**Уголовное дело (осуждение).** При осуждении по s. 316.193 суд лишает вас прав. За первое осуждение без гибели людей s. 322.28 предусматривает лишение минимум на 180 дней и максимум на 1 год. Если при первом нарушении пострадали люди, FLHSMV указывает минимум три года.',
        ] },
        { type: 'p', text: 'Кроме того, за первое осуждение s. 316.193 предусматривает штраф от $500 до $1,000 (от $1,000 до $2,000, если уровень алкоголя 0.15 и выше или в машине был несовершеннолетний), до 6 месяцев заключения (до 9 месяцев в этих случаях), пробацию с курсом DUI-программы и 10 дней ареста или блокировки автомобиля. При повторных осуждениях наказания строже. По уголовному делу консультируйтесь с адвокатом.' },

        { type: 'h2', text: 'Что требует FR-44' },
        { type: 'p', text: 'Статья 324.023 распространяется на всех, кого признали виновным в DUI после 1 октября 2007 года или кто признал вину либо заявил no contest, — независимо от того, вынесен ли формальный приговор. Нужно подтвердить способность возместить ущерб минимум:' },
        { type: 'ul', items: [
          '**$100,000** — травмы одного человека в ДТП',
          '**$300,000** — травмы двух и более человек в ДТП',
          '**$50,000** — ущерб имуществу в ДТП',
        ] },
        { type: 'p', text: 'FLHSMV также принимает **единый комбинированный лимит $350,000**, а закон допускает вместо полиса депозитный сертификат минимум на $350,000. Согласно FAQ FLHSMV по DUI, FR-44 требуется **при восстановлении прав — и ограниченных (hardship, для работы), и полных**, и держать его нужно **три года с даты восстановления права на вождение**. У требования есть и конец: если за три года после восстановления не было нового DUI или тяжкого дорожного преступления, s. 324.023 к вам больше не применяется.' },

        { type: 'h2', text: 'Кто подаёт FR-44 и как это происходит' },
        { type: 'ol', items: [
          'Вы оформляете автополис с лимитами не ниже 100/300/50. FR-44 — не отдельный вид страховки, а сертификат, подтверждающий, что такой полис есть.',
          'Страховая компания подаёт FR-44 в FLHSMV электронно. По процедурному руководству FLHSMV это нужно сделать в течение 15 рабочих дней после выдачи.',
          'FLHSMV привязывает требование к **человеку**, а не к конкретной машине. Если своей машины нет, спросите про [полис для водителя без автомобиля](/ru/blog/non-owner-sr22-florida).',
          'Если полис отменён, страховщик сообщает об этом в FLHSMV формой отмены (**FR-46**). FLHSMV предупреждает: без обязательной страховки могут приостановить права и регистрацию, а за восстановление взять сбор до $500.',
        ] },

        { type: 'h2', text: 'FR-44 и SR-22: главные различия' },
        { type: 'ul', items: [
          '**Лимиты:** SR-22 подтверждает минимум **10/20/10** (s. 324.021(7)), FR-44 — **100/300/50**.',
          '**Основание:** FR-44 — для осуждений за DUI после 1 октября 2007 года. По данным FLHSMV, тем, кого осудили до этой даты включительно, по-прежнему нужно подтверждение на уровне SR-22. SR-22 применяется и в других случаях — например, после некоторых ДТП без обязательной страховки; см. статью о [приостановке прав без страховки](/ru/blog/florida-license-suspended-no-insurance).',
          '**Два сразу не нужно:** по руководству FLHSMV, FR-44 покрывает оба уровня лимитов.',
          '**Срок:** по процедурам FLHSMV оба сертификата нужно поддерживать без перерыва три года.',
        ] },
        { type: 'p', text: 'Подробнее — в нашем [гиде по SR-22 во Флориде](/ru/blog/sr22-florida-guia) и на странице [оформления SR-22 и FR-44](/ru/sr22-insurance-florida-city).' },

        { type: 'h2', text: 'Почему высокие лимиты важны не только для бумаг' },
        { type: 'p', text: 'BIL оплачивает травмы, которые вы причинили другим людям. Серьёзное ДТП может привести к претензиям намного выше 10/20, а если сумма превышает лимит полиса, разницу могут взыскать с вас лично через суд. Некоторые семьи добавляют поверх автостраховки [зонтичный полис (umbrella)](/ru/blog/umbrella-insurance-explained-florida). Что подходит именно вам, обсудите с лицензированным агентом.' },

        { type: 'h2', text: 'Перед восстановлением прав: короткий чек-лист' },
        { type: 'ol', items: [
          'Сохраните решение суда и все письма FLHSMV; запишите дату восстановления.',
          'Пройдите DUI-программу или запишитесь на неё. FLHSMV требует этого и для hardship-прав, и для восстановления.',
          'Оформите полис не ниже 100/300/50 (или с единым лимитом $350,000) и убедитесь, что FR-44 дошёл до FLHSMV.',
          'Включите автоплатёж или напоминания, чтобы полис не прервался за эти три года.',
          'Меняете машину или полис — сначала позвоните агенту: по руководству FLHSMV новый номер полиса требует новой подачи.',
          'Отметьте дату окончания: три года после восстановления без нового DUI и тяжких дорожных преступлений.',
        ] },
        { type: 'callout', title: 'Важно', text: 'Это общая информация о страховании, а не юридическая консультация. Каждое дело о DUI зависит от обстоятельств: по делу обращайтесь к адвокату, по покрытию — к лицензированному агенту.' },

        { type: 'h2', text: 'Нужно оформить FR-44?' },
        { type: 'p', text: 'M&K Agency помогает водителям Florida City, Homestead и всего Майами-Дейд с FR-44 и SR-22 — на русском, английском и испанском. Звоните по номеру [(305) 859-3953](' + TEL + '), [оставьте заявку](/ru/quote) или приходите: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Мы говорим по-русски — [о нас](/ru/russian-speaking-insurance-agent-miami). См. также страницу об [автостраховании](/ru/car-insurance-florida-city).' },
        { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений конкретного полиса. Перед изменением страховки поговорите с лицензированным агентом.' },
      ],
      faq: [
        { q: 'FR-44 и SR-22 — это одно и то же?', a: 'Нет. Оба — сертификаты, которые страховщик подаёт в FLHSMV, но SR-22 подтверждает минимум 10/20/10, а FR-44 — 100/300/50 и требуется после осуждения за DUI (после 1 октября 2007 года).' },
        { q: 'Нужен ли FR-44 сразу после ареста?', a: 'Требование FR-44 по s. 324.023 возникает при признании виновным, признании вины или заявлении no contest. При аресте действует административная приостановка по s. 322.2615. FLHSMV требует FR-44 при восстановлении прав после осуждения.' },
        { q: 'Сколько нужно держать FR-44?', a: 'По данным FLHSMV — три года с даты восстановления права на вождение. Покрытие должно быть непрерывным; при отмене полиса страховщик уведомляет FLHSMV.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 324.023 (2026): финансовая ответственность после DUI (100/300/50, 3 года)', url: U.s324023 },
        { label: 'Florida Statutes s. 324.021(7) (2026): подтверждение финансовой ответственности (10/20/10)', url: U.s324021 },
        { label: 'Florida Statutes s. 316.193 (2026): DUI; наказания', url: U.s316193 },
        { label: 'Florida Statutes s. 322.2615 (2026): административная приостановка; пересмотр в течение 10 дней', url: U.s3222615 },
        { label: 'Florida Statutes s. 322.28 (2026): сроки лишения прав после DUI', url: U.s32228 },
        { label: 'FLHSMV: Florida Insurance Requirements (PIP/PDL, BIL, SR22, санкции)', url: U.ins },
        { label: 'FLHSMV: DUI FAQs (FR-44 при восстановлении прав, 3 года)', url: U.duiFaq },
        { label: 'FLHSMV: Florida DUI and Administrative Suspension Laws', url: U.duiLaws },
        { label: 'FLHSMV: процедурное руководство по финансовой ответственности (SR22/FR44)', url: U.manual },
      ],
    },
  },
};
