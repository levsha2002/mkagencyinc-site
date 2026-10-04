import type { BlogPost } from '../types';

// Facts checked 2026-10-02 against:
// - FLHSMV Florida Insurance Requirements (flhsmv.gov/insurance/) — SR22 definition; PIP/PDL for registered vehicles
// - Florida Statutes s. 324.021(7)–(8) (2026) — proof of financial responsibility 10/20/10; owner's or operator's liability policy
// - Florida Statutes s. 324.023 (2026) — DUI higher limits 100/300/50; minimum 3 years
// - Florida Statutes s. 324.031 (2026) — manner of proving financial responsibility
// - Florida Statutes s. 324.151(1)(a)–(b) (2026) — owner's vs operator's motor vehicle liability policy
// - FLHSMV FR procedure manuals (SR22/FR44 electronic filing; continuous 3-year maintenance; file within 15 working days)
// No private insurers named. No rate figures or promotional claims.
const SOURCES_EN = [
  { label: 'FLHSMV: Florida Insurance Requirements (SR22 definition; PIP/PDL for registered vehicles)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'Florida Statutes s. 324.021 (2026): definitions; proof of financial responsibility 10/20/10; motor vehicle liability policy', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Florida Statutes s. 324.023 (2026): financial responsibility after DUI; 100/300/50; minimum 3 years', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Florida Statutes s. 324.031 (2026): manner of proving financial responsibility', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Florida Statutes s. 324.151 (2026): owner’s vs operator’s motor vehicle liability policies', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.151' },
  { label: 'FLHSMV: Procedures Manual — SR22/FR44 certification (limits and continuous maintenance)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Verification criteria for financial responsibility sanctions', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

// ES version added 2026-10-04 (ET). Re-checked the same day: s. 324.021(7) 10/20/10, s. 324.023 100/300/50 (DUI after
// Oct 1, 2007), s. 324.151(1)(a)–(b) owner's vs operator's policy (2026 texts), and the FLHSMV SR22 definition.
const SOURCES_ES = [
  { label: 'FLHSMV: Florida Insurance Requirements (definición de SR22; PIP/PDL para vehículos registrados)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'Estatutos de Florida, sección 324.021 (2026): definiciones; prueba de responsabilidad financiera 10/20/10; póliza de responsabilidad', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Estatutos de Florida, sección 324.023 (2026): responsabilidad financiera después de un DUI; 100/300/50; mínimo 3 años', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Estatutos de Florida, sección 324.031 (2026): formas de probar la responsabilidad financiera', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Estatutos de Florida, sección 324.151 (2026): póliza del dueño y póliza del conductor (operator’s policy)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.151' },
  { label: 'FLHSMV: Procedures Manual — certificación SR22/FR44 (límites y mantenimiento continuo; en inglés)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Verification criteria for financial responsibility sanctions (en inglés)', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

const SOURCES_RU = [
  { label: 'FLHSMV: Florida Insurance Requirements (определение SR22; PIP/PDL для зарегистрированных авто)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'Florida Statutes s. 324.021 (2026): определения; proof of financial responsibility 10/20/10; полис ответственности', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Florida Statutes s. 324.023 (2026): финансовая ответственность после DUI; 100/300/50; минимум 3 года', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Florida Statutes s. 324.031 (2026): способы подтверждения финансовой ответственности', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Florida Statutes s. 324.151 (2026): полис владельца и полис оператора (operator’s policy)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.151' },
  { label: 'FLHSMV: Procedures Manual — сертификация SR22/FR44 (лимиты и непрерывное поддержание)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Verification criteria for financial responsibility sanctions', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

export const post: BlogPost = {
  slug: 'non-owner-sr22-florida',
  datePublished: '2026-10-02',
  translations: {
    en: {
      title: 'Non-Owner SR-22 in Florida: When You Need It and What It Covers',
      metaTitle: 'Non-Owner SR-22 Florida: When You Need It | M&K Agency',
      description: 'Non-owner SR-22 in Florida: what it covers, when FLHSMV may require it, how it differs from an owner policy, and how filing works.',
      excerpt: 'If Florida requires an SR-22 and you do not own a car, an operator’s (non-owner) liability policy may be the path to the filing. Here is how it differs from a regular SR-22, what it covers, and how to get it filed.',
      category: 'Auto insurance',
      body: [
        { type: 'p', text: 'If the Florida Department of Highway Safety and Motor Vehicles (**FLHSMV**) says you need an **SR-22**, but you do **not own a vehicle**, you are in a common situation. Drivers who borrow cars, use a family vehicle, or no longer have a car after a suspension often still must prove financial responsibility to reinstate. In many cases the path is a **non-owner** (operator’s) liability policy with an SR-22 filing — not a separate “special” product.' },
        { type: 'p', text: 'Based on FLHSMV materials and Chapter 324, this guide covers what a non-owner SR-22 is, how it differs from a regular (owner) SR-22, when Florida may require it, what an operator’s policy covers and does not cover, how FR-44 fits after certain DUI cases, and how filing works.' },

        { type: 'h2', text: 'SR-22 is a filing — not a type of insurance' },
        { type: 'p', text: 'On its insurance-requirements page, FLHSMV defines an **SR22** as an insurance filing that **certifies bodily injury liability (BIL) and property damage liability (PDL)** for reinstatement under Florida’s Financial Responsibility Law. You still need a liability policy that meets your case limits; the SR-22 is the certificate your insurer sends to the state.' },
        { type: 'ul', items: [
          'You generally **do not file** the SR-22 yourself — your **insurer** does (usually electronically with FLHSMV).',
          'The certificate shows you carry the liability coverage the state requires for your case.',
          'If the policy is canceled or coverage lapses while the certificate is active, the insurer typically notifies the department, which can suspend your privilege again.',
        ] },
        { type: 'callout', title: 'Important', text: 'A non-owner SR-22 is still an SR-22 certificate on an operator’s liability policy. It is not a license to drive while suspended, and it does not replace PIP and PDL on a vehicle you own and register in Florida. This is general information, not legal advice — confirm your requirement with FLHSMV or your reinstatement letter.' },

        { type: 'h2', text: 'Non-owner vs regular SR-22: the policy underneath' },
        { type: 'p', text: 'The certificate name is the same (**SR-22**). What changes is the **liability policy** underneath:' },
        { type: 'ul', items: [
          '**Owner’s policy (regular SR-22 path):** s. **324.151(1)(a)** — lists the covered vehicles and insures the named owner (and, with limited exceptions, permissive users) for liability from ownership, maintenance, or use of those vehicles.',
          '**Operator’s policy (non-owner path):** s. **324.151(1)(b)** — insures the named person for liability from use of **any motor vehicle not owned by him or her**, with the same territorial and liability limits as an owner’s policy under the chapter.',
        ] },
        { type: 'p', text: 'In everyday language, that operator’s policy is **non-owner** liability insurance. Florida’s definition of a “motor vehicle liability policy” in s. **324.021(8)** already contemplates an **owner’s or operator’s** policy as proof under s. 324.031. When FLHSMV requires an SR-22 and you do not own a car, the underlying coverage is often an operator’s policy that can certify the required limits.' },
        { type: 'p', text: 'If you **do** own a Florida-registered vehicle, a non-owner policy is **not** a substitute for covering that vehicle. FLHSMV requires continuous **PIP** and **PDL** (at least $10,000 of each) on registered vehicles. Ask your agent which structure matches your ownership situation and the certificate on your notice.' },

        { type: 'h2', text: 'When Florida may require an SR-22 (and when non-owner fits)' },
        { type: 'p', text: 'In practice, FLHSMV asks for an SR-22 or FR-44 when a driver **cannot show** the required liability coverage was in force on the date of the event (for example, a reportable crash, certain convictions, or financial-responsibility suspensions).' },
        { type: 'p', text: 'A **non-owner** path fits when your letter asks for an **SR-22** (or FR-44 — see below) and you **do not own** a vehicle for an owner’s policy, but still must prove liability coverage as an **operator**. Common triggers include reportable crashes without the limits in s. 324.021(7), insurance-related suspensions, and certain traffic convictions. Your **FLHSMV letter** is the clearest guide to certificate type and other reinstatement steps.' },

        { type: 'h2', text: 'What the SR-22 certifies: 10/20/10 limits' },
        { type: 'p', text: 'Florida’s “proof of financial responsibility” in s. **324.021(7)** is the ability to respond in damages for at least **$10,000** for bodily injury or death of one person, **$20,000** for two or more persons in one crash (subject to the per-person limit), and **$10,000** for property damage to others — the familiar **10/20/10**. FLHSMV procedure materials state that an **SR22** certifies BIL/PDL of at least those amounts. An operator’s (non-owner) policy used for the filing must meet those limits; the certificate does not lower the statutory floor.' },

        { type: 'h2', text: 'What a non-owner policy typically covers — and what it does not' },
        { type: 'p', text: 'Under s. **324.151(1)(b)**, an operator’s liability policy is about **your liability to others** when you use a vehicle you do not own. In plain terms:' },
        { type: 'ul', items: [
          '**It can cover** liability for bodily injury and property damage you cause while driving a **non-owned** vehicle, up to the limits that support your SR-22 (or FR-44) filing.',
          '**It is not** collision or comprehensive on someone else’s car — those coverages attach to a vehicle.',
          '**It does not replace** the PIP and PDL Florida requires on a vehicle **you** own and register.',
          '**It does not authorize driving** if your license is still suspended; reinstatement and the filing are separate steps.',
        ] },
        { type: 'p', text: 'Terms, exclusions, and whether an insurer will issue an operator’s policy for your household depend on underwriting and the policy language. Talk with a licensed Florida agent before you rely on any structure.' },

        { type: 'h2', text: 'FR-44: when higher limits apply instead' },
        { type: 'p', text: 'Not every letter is a standard SR-22. After certain **DUI** cases under s. 316.193 **after October 1, 2007**, s. **324.023** requires an owner or operator (regardless of adjudication of guilt) who was found guilty or pleaded guilty or nolo contendere to maintain **$100,000 / $300,000 / $50,000** for a **minimum of 3 years**. FLHSMV documents that with an **FR44**. An FR-44 also meets the lower SR-22 level for the same case. If you do not own a vehicle, an operator’s policy can still apply, but limits must match FR-44 — use the certificate type on your notice.' },

        { type: 'h2', text: 'How long you must keep the filing' },
        { type: 'p', text: 'For FR-44 after a DUI under s. 324.023, higher limits are required for at least **3 years**. FLHSMV procedure materials also say **SR22/FR44** must be maintained **continuously for 3 years** from the original suspension date of the financial-responsibility case. A lapse can trigger an SR-26/FR-46 cancellation report and new license problems.' },
        { type: 'p', text: 'Keep **uninterrupted** liability coverage for the period on your FLHSMV notice. If you change insurers, confirm the new company files on time with no gap between policies.' },

        { type: 'h2', text: 'How to get a non-owner SR-22 filed in Florida' },
        { type: 'ol', items: [
          '**Read your FLHSMV letter.** Confirm SR-22 vs FR-44, note any case number, and list other reinstatement steps (fees, courses, and so on).',
          '**Confirm you need a non-owner structure.** If you own a Florida-registered vehicle, you generally need coverage on that vehicle — not an operator-only substitute.',
          '**Obtain a liability policy** that meets your case limits (at least 10/20/10 for many SR-22 cases; 100/300/50 for FR-44) and that the insurer will use for the filing.',
          '**Ask the insurer to file** with FLHSMV. Procedure materials say insurers file SR22/FR44 electronically; SR22 filings are expected within **15 working days** of issuance.',
          '**Maintain continuous coverage** for the required period — no mid-requirement gap without a seamless replacement filing.',
          '**Keep your documents** (policy, declarations, filing confirmation) if the department requests verification.',
        ] },
        { type: 'p', text: 'Section **324.031** also allows other proof methods (certain deposits or department self-insurance certificates), but for most private drivers the path is a qualifying liability policy plus the insurer’s certificate filing.' },

        { type: 'h2', text: 'Local help in Florida City and Homestead' },
        { type: 'p', text: 'At [M&K Agency we help with SR-22 and FR-44 filings](/en/sr22-insurance-florida-city), including **operator’s (non-owner) liability** when you do not own a car. A licensed agent reviews your FLHSMV letter, confirms SR-22 vs FR-44, and coordinates the policy and electronic filing.' },
        { type: 'p', text: 'You can also [request a quote](/en/quote) or call **(305) 859-3953**. Office: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Hours: Monday–Friday 9–6; Saturday by appointment. We serve Florida City, Homestead, and southern Miami-Dade.' },
        { type: 'p', text: 'Coverage depends on each policy’s terms, limits, and exclusions, and on your exact FLHSMV case. Speak with a licensed agent before changing coverage. This page is general information, not legal advice.' },
      ],
      faq: [
        { q: 'What is a non-owner SR-22 in Florida?', a: 'It is an SR-22 certificate — the same FLHSMV filing that certifies BIL and PDL for financial responsibility — supported by an operator’s liability policy under s. 324.151(1)(b) when you do not own the vehicles you drive. The SR-22 is still a certificate, not a separate type of insurance.' },
        { q: 'How is a non-owner SR-22 different from a regular SR-22?', a: 'The certificate is the same. The difference is the underlying policy: an owner’s policy lists specific vehicles (s. 324.151(1)(a)); an operator’s (non-owner) policy covers the named person’s liability while using vehicles he or she does not own (s. 324.151(1)(b)). Both can support the liability limits an SR-22 certifies when the insurer files with FLHSMV.' },
        { q: 'What limits does an SR-22 require?', a: 'Proof of financial responsibility under s. 324.021(7) is 10/20/10: $10,000 per person, $20,000 per crash for bodily injury, and $10,000 for property damage. FLHSMV procedures state that an SR22 certifies at least those BIL/PDL limits. Certain DUI cases require FR-44 at 100/300/50 instead (s. 324.023).' },
        { q: 'Does non-owner insurance cover the car I borrow?', a: 'An operator’s liability policy under s. 324.151(1)(b) addresses your liability to others when you use a non-owned vehicle. It is not the same as collision or comprehensive on the borrowed car. Policy details vary — confirm coverages with a licensed agent and the policy language.' },
        { q: 'Can I file the SR-22 myself?', a: 'In the usual process, no. Your insurer files the SR-22 or FR-44 with FLHSMV, generally electronically. Your role is to obtain a qualifying liability policy and ask the insurer or agent to complete the filing, then keep coverage continuous for the period your notice requires.' },
        { q: 'What if my letter says FR-44 instead of SR-22?', a: 'After certain DUI cases under s. 316.193 after October 1, 2007, s. 324.023 requires higher limits of 100/300/50 for at least three years. FLHSMV documents that with an FR-44. An operator’s policy can still be relevant if you do not own a vehicle, but the liability limits must meet the FR-44 amounts. An FR-44 covers the lower SR-22 limit level for the same case.' },
      ],
      sources: SOURCES_EN,
    },

    es: {
      title: '¿Necesito SR-22 si no tengo carro? El SR-22 de no propietario en Florida',
      metaTitle: 'SR-22 sin carro en Florida (no propietario) | M&K Agency',
      description: '¿Le piden SR-22 y no tiene carro? Qué es el SR-22 de no propietario en Florida, qué cubre la póliza del conductor, 10/20/10, FR-44 y cómo se presenta.',
      excerpt: 'Si el FLHSMV le pide un SR-22 y usted no tiene carro, lo habitual es una póliza de responsabilidad del conductor (non-owner) con la presentación del SR-22. Le explicamos en qué se diferencia, qué cubre y cómo se tramita.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'Es una de las preguntas que más escuchamos en la oficina: **“Me piden un SR-22, pero no tengo carro. ¿Qué hago?”** Pasa mucho. Hay quien maneja el carro de un familiar, quien pide prestado un vehículo o quien se quedó sin carro después de una suspensión. Aun así, el Departamento de Seguridad en las Carreteras y Vehículos Motorizados de Florida (**FLHSMV**) puede exigirle que demuestre responsabilidad financiera para recuperar su licencia. En muchos casos la solución es una póliza de responsabilidad **de no propietario** (póliza del conductor u *operator’s policy*) con la presentación del SR-22, no un producto “especial” aparte.' },
        { type: 'p', text: 'Con base en los materiales del FLHSMV y el Capítulo 324 de los Estatutos de Florida, esta guía explica qué es el SR-22 de no propietario, en qué se diferencia del SR-22 normal (de dueño), cuándo puede pedirlo Florida, qué cubre y qué no cubre la póliza del conductor, dónde entra el **FR-44** después de ciertos casos de DUI y cómo se presenta. Si quiere la explicación general del SR-22, lea también nuestra guía [¿Qué es el SR-22 en Florida?](/es/blog/sr22-florida-guia).' },

        { type: 'h2', text: 'El SR-22 es una presentación, no un tipo de seguro' },
        { type: 'p', text: 'En su página de requisitos de seguro, el FLHSMV define el **SR22** como una presentación (filing) del seguro que **certifica la responsabilidad por lesiones corporales (BIL) y por daños a la propiedad (PDL)** para cumplir con la reinstalación bajo la Ley de Responsabilidad Financiera de Florida. Usted sigue necesitando una póliza de responsabilidad con los límites que exige su caso; el SR-22 es el certificado que su aseguradora envía al estado.' },
        { type: 'ul', items: [
          'Normalmente **usted no presenta** el SR-22: lo presenta su **aseguradora**, por lo general de forma electrónica ante el FLHSMV.',
          'El certificado demuestra que usted tiene la cobertura de responsabilidad que el estado exige en su caso.',
          'Si la póliza se cancela o la cobertura se interrumpe mientras el certificado está activo, la aseguradora suele avisar al departamento, y este puede volver a suspender su licencia.',
        ] },
        { type: 'callout', title: 'Importante', text: 'El SR-22 de no propietario sigue siendo un certificado SR-22, solo que sobre una póliza de responsabilidad del conductor. No le permite manejar mientras su licencia esté suspendida y no reemplaza el PIP y el PDL de un vehículo que usted sea dueño y tenga registrado en Florida. Esto es información general, no asesoría legal; confirme su requisito con el FLHSMV o con su carta de reinstalación.' },

        { type: 'h2', text: 'SR-22 de no propietario vs. SR-22 normal: la póliza de fondo' },
        { type: 'p', text: 'El certificado se llama igual (**SR-22**). Lo que cambia es la **póliza de responsabilidad** que lo respalda:' },
        { type: 'ul', items: [
          '**Póliza del dueño (SR-22 normal):** sección **324.151(1)(a)**. Describe los vehículos cubiertos y asegura al dueño nombrado (y, con pocas excepciones, a quienes manejan con su permiso) por la responsabilidad que surge de ser dueño, mantener o usar esos vehículos.',
          '**Póliza del conductor (no propietario):** sección **324.151(1)(b)**. Asegura a la persona nombrada por la responsabilidad que surge del uso de **cualquier vehículo que no sea suyo**, con los mismos límites territoriales y de responsabilidad que una póliza de dueño bajo ese capítulo.',
        ] },
        { type: 'p', text: 'En el lenguaje de todos los días, esa póliza del conductor es el seguro de responsabilidad **non-owner**. La definición de “póliza de responsabilidad de vehículo motorizado” de la sección **324.021(8)** ya contempla una póliza **del dueño o del conductor** como prueba bajo la sección 324.031. Cuando el FLHSMV exige un SR-22 y usted no tiene carro, la cobertura de fondo suele ser una póliza del conductor que pueda certificar los límites requeridos.' },
        { type: 'p', text: 'Si usted **sí** es dueño de un vehículo registrado en Florida, una póliza de no propietario **no sustituye** la cobertura de ese vehículo. El FLHSMV exige **PIP** y **PDL** continuos (al menos $10,000 de cada uno) en los vehículos registrados. Pregúntele a su agente qué estructura corresponde a su situación y al certificado que aparece en su aviso.' },

        { type: 'h2', text: '¿Cuándo puede Florida pedirle un SR-22 (y cuándo encaja el de no propietario)?' },
        { type: 'p', text: 'En la práctica, el FLHSMV pide un SR-22 o un FR-44 cuando el conductor **no puede demostrar** que tenía en vigor la cobertura de responsabilidad requerida en la fecha del hecho; por ejemplo, después de un choque que debía reportarse, de ciertas condenas o de suspensiones por responsabilidad financiera.' },
        { type: 'p', text: 'La vía de **no propietario** encaja cuando su carta pide un **SR-22** (o un FR-44, vea más abajo), usted **no es dueño** de un vehículo para una póliza de dueño, pero igual tiene que demostrar cobertura de responsabilidad como **conductor**. Los motivos más comunes son choques reportables sin los límites de la sección 324.021(7), suspensiones relacionadas con el seguro y ciertas infracciones de tránsito. Su **carta del FLHSMV** es la mejor guía sobre el tipo de certificado y los demás pasos para recuperar la licencia.' },

        { type: 'h2', text: 'Qué certifica el SR-22: límites 10/20/10' },
        { type: 'p', text: 'La “prueba de responsabilidad financiera” de la sección **324.021(7)** es la capacidad de responder por daños de al menos **$10,000** por lesiones o muerte de una persona, **$20,000** por dos o más personas en un mismo choque (sujeto al límite por persona) y **$10,000** por daños a la propiedad de otros: el conocido **10/20/10**. Los manuales de procedimiento del FLHSMV indican que un **SR22** certifica BIL/PDL por al menos esos montos. La póliza del conductor que se use para la presentación tiene que cumplir esos límites; el certificado no baja el mínimo que fija la ley.' },

        { type: 'h2', text: 'Qué suele cubrir una póliza de no propietario y qué no' },
        { type: 'p', text: 'Según la sección **324.151(1)(b)**, la póliza de responsabilidad del conductor trata de **su responsabilidad frente a terceros** cuando usted usa un vehículo que no es suyo. En palabras sencillas:' },
        { type: 'ul', items: [
          '**Puede cubrir** la responsabilidad por lesiones y daños a la propiedad que usted cause al manejar un vehículo **ajeno**, hasta los límites que respaldan su SR-22 (o FR-44).',
          '**No es** cobertura de choque (collision) ni integral (comprehensive) del carro prestado: esas coberturas van ligadas a un vehículo.',
          '**No reemplaza** el PIP y el PDL que Florida exige en un vehículo que **usted** tenga y registre.',
          '**No lo autoriza a manejar** si su licencia sigue suspendida; la reinstalación y la presentación son pasos distintos.',
        ] },
        { type: 'p', text: 'Las condiciones, las exclusiones y si una aseguradora emite o no una póliza del conductor para su hogar dependen de la suscripción (underwriting) y del texto de la póliza. Hable con un agente con licencia en Florida antes de contar con cualquier estructura.' },

        { type: 'h2', text: 'FR-44: cuando se exigen límites más altos' },
        { type: 'p', text: 'No todas las cartas piden un SR-22 normal. Después de ciertos casos de **DUI** bajo la sección 316.193 **posteriores al 1 de octubre de 2007**, la sección **324.023** exige que el dueño o conductor que fue declarado culpable, o que se declaró culpable o *nolo contendere* (haya o no adjudicación de culpabilidad), mantenga **$100,000 / $300,000 / $50,000** durante un **mínimo de 3 años**. El FLHSMV lo documenta con un **FR44**. Un FR-44 también cumple el nivel más bajo del SR-22 en el mismo caso. Si usted no tiene carro, la póliza del conductor puede seguir siendo la vía, pero con los límites del FR-44; guíese por el tipo de certificado que indica su aviso.' },

        { type: 'h2', text: '¿Por cuánto tiempo debo mantener la presentación?' },
        { type: 'p', text: 'Para el FR-44 después de un DUI bajo la sección 324.023, los límites más altos se exigen durante al menos **3 años**. Los manuales de procedimiento del FLHSMV también indican que el **SR22/FR44** debe mantenerse **de forma continua durante 3 años** desde la fecha original de la suspensión del caso de responsabilidad financiera. Una interrupción puede generar un aviso de cancelación SR-26/FR-46 y nuevos problemas con la licencia.' },
        { type: 'p', text: 'Mantenga la cobertura de responsabilidad **sin interrupciones** durante el período que indica su aviso del FLHSMV. Si cambia de aseguradora, confirme que la nueva compañía presente el certificado a tiempo y que no quede ningún hueco entre pólizas.' },

        { type: 'h2', text: 'Cómo tramitar un SR-22 de no propietario en Florida' },
        { type: 'ol', items: [
          '**Lea su carta del FLHSMV.** Confirme si es SR-22 o FR-44, anote el número de caso si lo tiene y apunte los demás pasos para recuperar la licencia (cargos, cursos, etc.).',
          '**Confirme que necesita la vía de no propietario.** Si es dueño de un vehículo registrado en Florida, por lo general necesita cobertura para ese vehículo, no un sustituto solo para conductor.',
          '**Consiga una póliza de responsabilidad** que cumpla los límites de su caso (al menos 10/20/10 en muchos casos de SR-22; 100/300/50 para el FR-44) y que la aseguradora vaya a usar para la presentación.',
          '**Pida a la aseguradora que presente el certificado** ante el FLHSMV. Según los manuales, las aseguradoras presentan el SR22/FR44 de forma electrónica, y el SR22 debe presentarse dentro de los **15 días hábiles** siguientes a su emisión.',
          '**Mantenga la cobertura continua** durante el período requerido, sin huecos a mitad del requisito salvo que haya una presentación de reemplazo sin interrupción.',
          '**Guarde sus documentos** (póliza, página de declaraciones, confirmación de la presentación) por si el departamento pide verificación.',
        ] },
        { type: 'p', text: 'La sección **324.031** también permite otras formas de prueba (ciertos depósitos o certificados de autoseguro del departamento), pero para la mayoría de los conductores particulares la vía es una póliza de responsabilidad que califique más el certificado que presenta la aseguradora.' },

        { type: 'h2', text: 'Ayuda local en Florida City y Homestead' },
        { type: 'p', text: 'En [M&K Agency le ayudamos con el SR-22 y el FR-44](/es/sr22-insurance-florida-city), incluida la **póliza del conductor (no propietario)** cuando usted no tiene carro. Un agente con licencia revisa su carta del FLHSMV, confirma si es SR-22 o FR-44 y coordina la póliza y la presentación electrónica. Le atendemos en español.' },
        { type: 'p', text: 'También puede [solicitar una cotización](/es/quote) o llamar al **(305) 859-3953**. Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Horario: lunes a viernes de 9 a 6; sábados con cita. Atendemos Florida City, Homestead y el sur de Miami-Dade.' },
        { type: 'p', text: 'La cobertura depende de las condiciones, los límites y las exclusiones de cada póliza, y de su caso exacto ante el FLHSMV. Hable con un agente con licencia antes de cambiar su cobertura. Esta página es información general, no asesoría legal.' },
      ],
      faq: [
        { q: '¿Necesito SR-22 si no tengo carro?', a: 'Si el FLHSMV le exige un SR-22, el requisito sigue en pie aunque usted no tenga carro. En ese caso se suele usar una póliza de responsabilidad del conductor (no propietario) bajo la sección 324.151(1)(b), y la aseguradora presenta el SR-22 sobre esa póliza. Confirme el tipo de certificado en su carta.' },
        { q: '¿En qué se diferencia el SR-22 de no propietario del SR-22 normal?', a: 'El certificado es el mismo. Cambia la póliza de fondo: la póliza del dueño describe vehículos concretos (sección 324.151(1)(a)); la del conductor cubre la responsabilidad de la persona nombrada cuando usa vehículos que no son suyos (sección 324.151(1)(b)). Ambas pueden respaldar los límites que certifica el SR-22 cuando la aseguradora lo presenta ante el FLHSMV.' },
        { q: '¿Qué límites exige el SR-22?', a: 'La prueba de responsabilidad financiera de la sección 324.021(7) es 10/20/10: $10,000 por persona y $20,000 por choque por lesiones, y $10,000 por daños a la propiedad. Los procedimientos del FLHSMV indican que el SR22 certifica al menos esos límites de BIL/PDL. Ciertos casos de DUI exigen en cambio un FR-44 con 100/300/50 (sección 324.023).' },
        { q: '¿La póliza de no propietario cubre el carro que me prestan?', a: 'La póliza del conductor de la sección 324.151(1)(b) cubre su responsabilidad frente a terceros cuando usa un vehículo ajeno. No equivale a cobertura de choque o integral del carro prestado. Los detalles varían según la póliza; confírmelos con un agente con licencia y con el texto de la póliza.' },
        { q: '¿Puedo presentar el SR-22 yo mismo?', a: 'En el proceso habitual, no. Su aseguradora presenta el SR-22 o el FR-44 ante el FLHSMV, por lo general de forma electrónica. A usted le toca conseguir una póliza de responsabilidad que califique, pedir que se haga la presentación y mantener la cobertura continua durante el período que exige su aviso.' },
        { q: '¿Y si mi carta dice FR-44 en lugar de SR-22?', a: 'Después de ciertos casos de DUI bajo la sección 316.193 posteriores al 1 de octubre de 2007, la sección 324.023 exige límites más altos de 100/300/50 durante al menos tres años. El FLHSMV lo documenta con un FR-44. La póliza del conductor puede servir si usted no tiene carro, pero los límites deben cumplir los montos del FR-44. Un FR-44 cubre también el nivel más bajo del SR-22 en el mismo caso.' },
      ],
      sources: SOURCES_ES,
    },
    ru: {
      title: 'Non-owner SR-22 во Флориде: когда нужен и что покрывает',
      metaTitle: 'Non-owner SR-22 во Флориде: когда нужен | M&K Agency',
      description: 'Что такое non-owner SR-22 во Флориде: чем полис оператора отличается от обычного SR-22, когда его может потребовать FLHSMV, что покрывает и как подают сертификат.',
      excerpt: 'Если Флорида требует SR-22, а своего автомобиля нет, часто оформляют полис оператора (non-owner) и подачу сертификата. Разбираем отличия от обычного SR-22, покрытие и порядок подачи.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Если Департамент безопасности дорожного движения и автотранспорта Флориды (**FLHSMV**) сообщил, что вам нужен **SR-22**, а **своего автомобиля нет**, вы не одиноки. Так бывает у тех, кто ездит на чужой или семейной машине либо остался без авто после приостановки прав — но штат всё равно требует доказать финансовую ответственность. На практике путь часто такой: полис **оператора (non-owner)** плюс подача SR-22. Это не отдельный «особый» вид страховки.' },
        { type: 'p', text: 'По материалам FLHSMV и главе 324 Florida Statutes разбираем, что такое non-owner SR-22, чем он отличается от обычного (owner) SR-22, когда Флорида может потребовать подачу, что покрывает полис оператора, как сюда вписывается **FR-44** после определённых DUI и как подают сертификат. Материал полезен русскоязычным водителям Южной Флориды — Florida City, Homestead и юг Miami-Dade.' },

        { type: 'h2', text: 'SR-22 — это подача, а не вид страховки' },
        { type: 'p', text: 'На странице требований к страховке FLHSMV определяет **SR22** как страховую подачу (insurance filing), которая **подтверждает покрытие ответственности за телесные повреждения (BIL) и за ущерб имуществу (PDL)** для восстановления прав по Закону Флориды о финансовой ответственности. Вам по-прежнему нужен полис ответственности с лимитами вашего дела; SR-22 — это сертификат, который страховая отправляет в штат.' },
        { type: 'ul', items: [
          'Вы обычно **не подаёте** SR-22 сами — это делает **страховая компания** (как правило, электронно в FLHSMV).',
          'Сертификат показывает, что у вас есть (и будет поддерживаться) покрытие ответственности, которое штат требует по делу о финансовой ответственности.',
          'Если полис отменят или в покрытии будет перерыв, пока сертификат активен, страховая обычно уведомляет департамент — и права снова могут приостановить.',
        ] },
        { type: 'callout', title: 'Важно', text: 'Non-owner SR-22 — это тот же сертификат SR-22, привязанный к полису ответственности оператора. Он не даёт права ездить при приостановленной лицензии и не заменяет обязательные PIP и PDL на автомобиль, который вы сами владеете и регистрируете во Флориде. Это общая информация, не юридическая консультация — уточняйте требование в FLHSMV или по письму о восстановлении.' },

        { type: 'h2', text: 'Non-owner и обычный SR-22: в чём разница' },
        { type: 'p', text: 'Название сертификата одно и то же (**SR-22**). Меняется **тип полиса ответственности**, на котором держится подача:' },
        { type: 'ul', items: [
          '**Полис владельца (обычный путь SR-22):** в s. **324.151(1)(a)** описан owner’s liability policy — в нём перечислены конкретные автомобили, и застрахована ответственность владельца (и, с оговорками, permissive users) за владение, содержание и использование этих машин.',
          '**Полис оператора (путь non-owner):** в s. **324.151(1)(b)** описан **operator’s** motor vehicle liability policy. Он страхует названного человека от ответственности за ущерб из‑за использования им **любого автомобиля, которым он не владеет**, с теми же территориальными рамками и теми же лимитами ответственности, что у полиса владельца по этой главе.',
        ] },
        { type: 'p', text: 'В быту такой полис называют **non-owner**. Определение «motor vehicle liability policy» в s. **324.021(8)** уже допускает полис **владельца или оператора** как доказательство по s. 324.031. Если FLHSMV требует SR-22, а своего авто нет, базовым покрытием часто становится полис оператора с нужными лимитами.' },
        { type: 'p', text: 'Если у вас **есть** авто с регистрацией Флориды, non-owner **не заменяет** страховку на него. FLHSMV требует непрерывные **PIP** и **PDL** (минимум по $10,000 каждого) на зарегистрированные машины. Спросите агента, какая структура подходит вашему владению и типу сертификата в уведомлении. Общий гид — в статье [«Что такое SR-22 во Флориде»](/ru/blog/sr22-florida-guia); ниже — вариант без собственного авто.' },

        { type: 'h2', text: 'Когда Флорида может потребовать SR-22 (и когда уместен non-owner)' },
        { type: 'p', text: 'Глава 324 описывает ситуации, когда нужно доказать финансовую ответственность. На практике FLHSMV запрашивает SR-22 или FR-44, если водитель **не может подтвердить**, что на дату события у него было нужное покрытие (например, отчётное ДТП, определённые приговоры или приостановки по финансовой ответственности).' },
        { type: 'p', text: 'Путь **non-owner** особенно актуален, когда в письме указан **SR-22** (или FR-44 — см. ниже) и у вас **нет** авто для полиса владельца, но нужно доказать ответственность как **оператор**. Типичные поводы: отчётные ДТП без лимитов s. 324.021(7), страховые приостановки и определённые приговоры по ПДД. Ориентир — **письмо FLHSMV**: тип сертификата и остальные шаги восстановления.' },

        { type: 'h2', text: 'Какие лимиты подтверждает SR-22: 10/20/10' },
        { type: 'p', text: '«Доказательство финансовой ответственности» по s. **324.021(7)** — это способность отвечать за ущерб не менее чем на:' },
        { type: 'ul', items: [
          '**$10,000** за телесные повреждения или смерть **одного человека** в одном ДТП;',
          '**$20,000** за телесные повреждения или смерть **двух и более человек** в одном ДТП (с учётом лимита на человека); и',
          '**$10,000** за ущерб **имуществу** третьих лиц в одном ДТП.',
        ] },
        { type: 'p', text: 'Это **10/20/10**. Процедурные материалы FLHSMV указывают, что **SR22** подтверждает лимиты BIL/PDL не ниже 10/20/10. Полис оператора (non-owner) для такой подачи должен закрывать эти лимиты ответственности по вашему делу — сертификат не снижает установленный законом минимум.' },

        { type: 'h2', text: 'Что обычно покрывает non-owner — и чего не покрывает' },
        { type: 'p', text: 'По s. **324.151(1)(b)** полис оператора касается **вашей ответственности перед другими**, когда вы управляете чужим авто. На практике:' },
        { type: 'ul', items: [
          '**Может покрывать** ответственность за телесные повреждения и ущерб имуществу при управлении **чужим** авто, в пределах лимитов для SR-22 (или FR-44).',
          '**Не является** collision/comprehensive на чужую машину — такие покрытия привязаны к конкретному авто.',
          '**Не заменяет** обязательные PIP и PDL на автомобиль, которым **вы** владеете и регистрируете во Флориде.',
          '**Не даёт права ездить**, если лицензия ещё приостановлена: восстановление прав и подача — разные шаги.',
        ] },
        { type: 'p', text: 'Условия, исключения и готовность страховой выдать полис оператора зависят от андеррайтинга и текста полиса. Перед выбором структуры поговорите с лицензированным агентом во Флориде.' },

        { type: 'h2', text: 'FR-44: когда нужны более высокие лимиты' },
        { type: 'p', text: 'Не считайте, что в каждом письме о финансовой ответственности стоит обычный SR-22. После определённых дел о **DUI** Флорида требует более высокие лимиты, которые оформляют сертификатом **FR-44**.' },
        { type: 'p', text: 'По s. **324.023**, владелец или оператор, признанный виновным или признавший вину / nolo contendere по DUI по s. 316.193 **после 1 октября 2007 года** (независимо от adjudication of guilt), должен поддерживать **$100,000 / $300,000 / $50,000** минимум **3 года**. В процедурах FLHSMV это сертификат **FR44**. FR-44 закрывает и более низкий уровень SR-22 по тому же делу — оба не нужны.' },
        { type: 'p', text: 'Если в уведомлении указан FR-44, а своего авто нет, полис оператора может оставаться актуальным, но **лимиты** должны соответствовать FR-44. Сверяйтесь с типом сертификата в письме FLHSMV.' },

        { type: 'h2', text: 'Сколько нужно держать подачу' },
        { type: 'p', text: 'Для FR-44 после DUI по s. 324.023 повышенные лимиты нужны не менее **3 лет**. Процедуры FLHSMV также говорят, что **SR22/FR44** нужно **непрерывно поддерживать 3 года** с исходной даты приостановки по делу. Перерыв может дать отчёт об отмене (SR-26/FR-46) и новые проблемы с правами.' },
        { type: 'p', text: 'Держите **непрерывное** покрытие весь срок из письма FLHSMV. При смене страховой убедитесь, что новая компания вовремя подала сертификат без «дыры» между полисами.' },

        { type: 'h2', text: 'Как оформить non-owner SR-22 во Флориде' },
        { type: 'ol', items: [
          '**Прочитайте письмо FLHSMV.** Уточните, нужен SR-22 или FR-44, номер дела (если есть) и другие шаги восстановления (сборы, курсы и т.п.).',
          '**Убедитесь, что вам действительно нужен non-owner.** Если у вас есть авто с регистрацией Флориды, обычно нужна страховка именно на него — а не только полис оператора «вместо» владельца.',
          '**Оформите полис ответственности** с лимитами вашего дела (часто не ниже 10/20/10 для SR-22; 100/300/50 при FR-44), по которому страховая готова подать SR-22 или FR-44.',
          '**Попросите страховую подать сертификат** в FLHSMV. По процедурам департамента SR22/FR44 подают электронно; для SR22 указан срок в пределах **15 рабочих дней** с даты выдачи.',
          '**Держите покрытие без перерывов** весь требуемый срок. Не отменяйте полис посередине требования без бесшовной замены и новой подачи.',
          '**Сохраняйте документы** (полис, declarations и подтверждение электронной подачи) на случай проверки департаментом.',
        ] },
        { type: 'p', text: 'Статья **324.031** допускает и другие способы доказательства (депозиты или самострахование департамента), но для большинства частных водителей путь — подходящий полис ответственности плюс сертификат от страховой.' },

        { type: 'h2', text: 'Помощь рядом — Florida City и Homestead' },
        { type: 'p', text: 'В [M&K Agency мы помогаем с подачей SR-22 и FR-44](/ru/sr22-insurance-florida-city), в том числе когда нужен **полис оператора (non-owner)**. Лицензированный агент разберёт письмо FLHSMV, подтвердит SR-22 или FR-44 и организует полис и электронную подачу.' },
        { type: 'p', text: 'Также можно почитать [общий гид по SR-22 во Флориде](/ru/blog/sr22-florida-guia), [запросить расчёт](/ru/quote) или позвонить по **(305) 859-3953**. Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034. Часы: пн–пт 9–6; суббота по записи. Общаемся на русском, испанском и английском.' },
        { type: 'p', text: 'Покрытие зависит от условий полиса и точных требований вашего дела в FLHSMV. Перед изменением страховки поговорите с лицензированным агентом. Эта страница — общая информация, не юридическая консультация.' },
      ],
      faq: [
        { q: 'Что такое non-owner SR-22 во Флориде?', a: 'Это сертификат SR-22 — та же подача в FLHSMV, подтверждающая BIL и PDL для финансовой ответственности, — на базе полиса ответственности оператора по s. 324.151(1)(b), когда вы не владеете автомобилями, которыми управляете. SR-22 по-прежнему сертификат, а не отдельный вид страховки.' },
        { q: 'Чем non-owner SR-22 отличается от обычного SR-22?', a: 'Сертификат тот же. Разница в базовом полисе: полис владельца перечисляет конкретные авто (s. 324.151(1)(a)); полис оператора (non-owner) покрывает ответственность названного человека при использовании чужих авто (s. 324.151(1)(b)). Оба могут поддерживать лимиты, которые подтверждает SR-22, когда страховая подаёт сертификат в FLHSMV.' },
        { q: 'Какие лимиты нужны для SR-22?', a: 'Proof of financial responsibility по s. 324.021(7) — это 10/20/10: $10,000 на человека, $20,000 на ДТП по телесным повреждениям и $10,000 по имуществу. Процедуры FLHSMV указывают, что SR22 подтверждает как минимум эти лимиты BIL/PDL. После определённых DUI вместо этого нужен FR-44 с 100/300/50 (s. 324.023).' },
        { q: 'Покрывает ли non-owner чужой автомобиль, на котором я езжу?', a: 'Полис ответственности оператора по s. 324.151(1)(b) касается вашей ответственности перед другими при управлении чужим авто. Это не то же самое, что collision или comprehensive на заимствованную машину. Детали зависят от полиса — уточняйте у лицензированного агента и по тексту полиса.' },
        { q: 'Могу ли я сам подать SR-22?', a: 'В обычном порядке — нет. SR-22 или FR-44 подаёт страховая в FLHSMV, как правило электронно. Ваша задача — оформить подходящий полис ответственности, попросить страховую или агента завершить подачу и держать покрытие непрерывно весь срок из уведомления.' },
        { q: 'Что если в письме указан FR-44, а не SR-22?', a: 'После определённых дел о DUI по s. 316.193 после 1 октября 2007 года s. 324.023 требует более высокие лимиты 100/300/50 минимум на три года. FLHSMV оформляет это сертификатом FR-44. Полис оператора может оставаться актуальным, если своего авто нет, но лимиты ответственности должны соответствовать FR-44. FR-44 закрывает и более низкий уровень лимитов SR-22 по тому же делу.' },
      ],
      sources: SOURCES_RU,
    },
  },
};
