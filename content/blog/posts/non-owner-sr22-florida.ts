import type { BlogPost } from '../types';

// Facts re-checked 2026-10-21 (ET) against (raw copies in /workspace/nonowner/):
// - FLHSMV Florida Insurance Requirements (flhsmv.gov/insurance/): SR22 definition; PIP/PDL ($10,000 each) on every
//   Florida-registered vehicle with continuous coverage
// - FLHSMV FR100 page (crash with injuries): if you or your vehicle were uninsured: releases/payment agreement or security
//   deposit AND an SR22 maintained for three years from the original suspension date; $15 reinstatement fee if suspended
// - FLHSMV FR200 page (no-proof-of-insurance citation for your vehicle): six-month non-cancellable PIP SR-22, kept two
//   years from reinstatement
// - Florida Statutes (2026 text) s. 324.021(3),(7),(8); s. 324.023 (100/300/50 after DUI under s. 316.193 after
//   Oct 1, 2007; min. 3 years; exemption after 3 years without a new DUI/felony traffic conviction from reinstatement);
//   s. 324.031(1)-(3); s. 324.151(1)(a)-(b) (operator's policy; U.S. and Canada territorial limits)
// - FLHSMV FTP procedure manual (updated July 20, 2017): SR22/FR44 filed electronically within 15 working days; SR22
//   10/20/10, FR44 100/300/50; one FR44 covers both; maintained continuously 3 years from the original suspension date;
//   renewal re-reported only on policy-number change or lapse; SR26/FR46 within 15 days of cancellation
// - FLHSMV Quick Reference Guide for Verification Requests (Sept 12, 2020): FR1 crash sanctions can be split into owner
//   and operator sanctions; operator-only verification is not VIN-specific; FR4 sanctions are person-specific;
//   FR2 citation sanctions are VIN-specific
// No private insurers named. No rate figures or promotional claims.
const SOURCES_EN = [
  { label: 'FLHSMV: Florida Insurance Requirements (SR22 definition; PIP/PDL on registered vehicles)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'FLHSMV: FR100 letter — crash with injuries (SR22 for three years; releases or security deposit)', url: 'https://www.flhsmv.gov/insurance/received-a-letter/fr100/' },
  { label: 'FLHSMV: FR200 letter — no proof of insurance citation (six-month PIP SR-22, two years)', url: 'https://www.flhsmv.gov/insurance/received-a-letter/fr200/' },
  { label: 'Florida Statutes s. 324.021 (2026): operator; proof of financial responsibility 10/20/10; motor vehicle liability policy', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Florida Statutes s. 324.023 (2026): financial responsibility after DUI; 100/300/50; minimum 3 years', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Florida Statutes s. 324.031 (2026): manner of proving financial responsibility', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Florida Statutes s. 324.151 (2026): owner’s and operator’s motor vehicle liability policies', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.151' },
  { label: 'FLHSMV: FTP Procedures Manual — SR22/FR44 and SR26/FR46 filings', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Quick Reference Guide for Verification Requests (FR sanction types)', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

const SOURCES_ES = [
  { label: 'FLHSMV: Florida Insurance Requirements (definición de SR22; PIP/PDL en vehículos registrados)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'FLHSMV: carta FR100 — choque con lesionados (SR22 por tres años; releases o depósito; en inglés)', url: 'https://www.flhsmv.gov/insurance/received-a-letter/fr100/' },
  { label: 'FLHSMV: carta FR200 — multa por no mostrar prueba de seguro (SR-22 de PIP por seis meses, dos años; en inglés)', url: 'https://www.flhsmv.gov/insurance/received-a-letter/fr200/' },
  { label: 'Estatutos de Florida s. 324.021 (2026): conductor (operator); prueba de responsabilidad financiera 10/20/10; póliza de responsabilidad', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Estatutos de Florida s. 324.023 (2026): responsabilidad financiera después de un DUI; 100/300/50; mínimo 3 años', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Estatutos de Florida s. 324.031 (2026): formas de demostrar la responsabilidad financiera', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Estatutos de Florida s. 324.151 (2026): póliza del dueño y póliza del conductor (operator’s policy)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.151' },
  { label: 'FLHSMV: FTP Procedures Manual — presentaciones SR22/FR44 y SR26/FR46 (en inglés)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Quick Reference Guide for Verification Requests — tipos de sanción FR (en inglés)', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

const SOURCES_RU = [
  { label: 'FLHSMV: Florida Insurance Requirements (определение SR22; PIP/PDL на зарегистрированные авто)', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'FLHSMV: письмо FR100 — ДТП с пострадавшими (SR22 на три года; releases или депозит; на английском)', url: 'https://www.flhsmv.gov/insurance/received-a-letter/fr100/' },
  { label: 'FLHSMV: письмо FR200 — штраф за отсутствие доказательства страховки (SR-22 с PIP на шесть месяцев, два года; на английском)', url: 'https://www.flhsmv.gov/insurance/received-a-letter/fr200/' },
  { label: 'Florida Statutes s. 324.021 (2026): operator; proof of financial responsibility 10/20/10; полис ответственности', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.021' },
  { label: 'Florida Statutes s. 324.023 (2026): финансовая ответственность после DUI; 100/300/50; минимум 3 года', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.023' },
  { label: 'Florida Statutes s. 324.031 (2026): способы подтверждения финансовой ответственности', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.031' },
  { label: 'Florida Statutes s. 324.151 (2026): полис владельца и полис оператора (operator’s policy)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.151' },
  { label: 'FLHSMV: FTP Procedures Manual — подача SR22/FR44 и SR26/FR46 (на английском)', url: 'https://www.flhsmv.gov/pdf/frmanual/ftp-procedure-manual.pdf' },
  { label: 'FLHSMV: Quick Reference Guide for Verification Requests — типы санкций FR (на английском)', url: 'https://www.flhsmv.gov/pdf/frmanual/reference-verification-requests.pdf' },
];

export const post: BlogPost = {
  slug: 'non-owner-sr22-florida',
  datePublished: '2026-10-02',
  dateModified: '2026-10-21',
  translations: {
    en: {
      title: 'Non-Owner SR-22 in Florida: When You Need It and What It Covers',
      metaTitle: 'Non-Owner SR-22 Florida: SR-22 Without a Car | M&K Agency',
      description: 'Need an SR-22 in Florida but don’t own a car? How an operator’s (non-owner) policy works, which FLHSMV letters it fits, limits, and filing time.',
      ogAlt: 'Car keys floating between two parked cars',
      excerpt: 'FLHSMV wants an SR-22, but you don’t own a car. An operator’s (non-owner) liability policy is often the answer. Here is when it fits, when it doesn’t, and how long the filing stays.',
      category: 'Auto insurance',
      body: [
        { type: 'p', text: 'Your letter from the Florida Department of Highway Safety and Motor Vehicles (**FLHSMV**) says you need an **SR-22**, but you **don’t own a car**. Maybe you sold it after a suspension, or you drive a relative’s or a work vehicle. The requirement still applies. The usual way to meet it is an **operator’s (non-owner) liability policy** with an SR-22 filed on top of it.' },
        { type: 'p', text: 'This guide covers what that policy is, which FLHSMV cases it fits (and which it doesn’t), the limits it must carry and how long you keep it. For the basics of SR-22 itself, start with our [SR-22 in Florida guide](/en/blog/sr22-florida-guia).' },

        { type: 'h2', text: 'SR-22 is a filing, not a policy' },
        { type: 'p', text: 'FLHSMV defines an **SR22** as an insurance filing that certifies **bodily injury liability (BIL)** and **property damage liability (PDL)** to meet the reinstatement rules of the Financial Responsibility Law. You buy a liability policy, and your **insurer** sends the certificate to the state. Under FLHSMV’s procedures manual, SR-22s are filed electronically within **15 working days** of issuance. If coverage is canceled, the insurer files a cancellation notice (**SR-26**) within **15 days**.' },

        { type: 'h2', text: 'Owner’s policy vs. operator’s policy' },
        { type: 'p', text: 'Florida law describes two kinds of liability policy that can serve as proof of financial responsibility:' },
        { type: 'ul', items: [
          '**Owner’s policy, s. 324.151(1)(a):** lists specific vehicles and covers the owner, plus people driving those vehicles with permission (except a named driver excluded under s. 627.747).',
          '**Operator’s policy, s. 324.151(1)(b):** covers the named person’s liability when he or she uses **any motor vehicle not owned by him or her**, with the same limits and territory (the United States and Canada) as an owner’s policy.',
        ] },
        { type: 'p', text: 'Chapter 324 defines an “operator” as anyone in actual physical control of a motor vehicle (s. 324.021(3)), and s. 324.021(8) accepts an **owner’s or operator’s** policy as proof. The operator’s policy is what people call **non-owner insurance**. The certificate on top of it is the same SR-22.' },

        { type: 'h2', text: 'When a non-owner SR-22 fits, and when it doesn’t' },
        { type: 'p', text: 'FLHSMV ties some sanctions to a **person** and others to a **vehicle**. Its verification guide says that after an injury crash, the owner and the driver can get separate FR1 sanctions, and an operator-only check doesn’t need a VIN. Conviction-based FR4 sanctions are also person-specific. These are the cases where an operator’s policy can work if you have no car.' },
        { type: 'p', text: 'Read the whole letter, though. For an **FR100** (crash with injuries) where you or your vehicle had no insurance, FLHSMV asks for an SR22 kept **three years from the original suspension date**, **plus** signed releases, a payment agreement or a security deposit. If you’re already suspended, there is also a **$15** reinstatement fee. The SR-22 alone doesn’t close that case.' },
        { type: 'p', text: 'A non-owner policy is **not** the answer when the problem is a car you own. Every Florida-registered vehicle must carry continuous **PIP and PDL** of at least **$10,000** each. An **FR200** letter (convicted of not showing proof of insurance for your vehicle) asks for a **six-month, non-cancellable PIP SR-22** kept **two years** from reinstatement. That is coverage on the vehicle. If your license is suspended for a lapse, see [license suspended for no insurance](/en/blog/florida-license-suspended-no-insurance).' },

        { type: 'h2', text: 'The limits: 10/20/10 or FR-44 100/300/50' },
        { type: 'p', text: 'An SR-22 certifies at least **$10,000** per person and **$20,000** per crash for bodily injury, plus **$10,000** for property damage (s. 324.021(7)). Those are liability limits; they are not the PIP/PDL minimum explained in our [Florida minimum car insurance guide](/en/blog/florida-minimum-car-insurance-requirements).' },
        { type: 'p', text: 'After a DUI conviction or plea under s. 316.193 after October 1, 2007, s. **324.023** requires **$100,000 / $300,000 / $50,000** for at least **3 years**, filed as an **FR-44**. One FR-44 covers both levels. An operator’s policy can carry those limits too. The statute also says the higher-limit rule stops applying once you go 3 years from reinstatement without another DUI or felony traffic conviction. More on these limits in [bodily injury liability and FR-44](/en/blog/bodily-injury-liability-fr44-florida).' },

        { type: 'h2', text: 'What an operator’s policy covers, and what it doesn’t' },
        { type: 'ul', items: [
          '**Covers:** your liability for injuries and property damage you cause to others while driving a car you don’t own, up to the certified limits.',
          '**Doesn’t cover:** damage to the borrowed car itself. Collision and comprehensive attach to a specific vehicle.',
          '**Doesn’t replace:** PIP and PDL on any vehicle registered in your name.',
          '**Doesn’t reinstate you:** you can’t legally drive until FLHSMV reinstates your license.',
        ] },
        { type: 'p', text: 'Exclusions and who in your household may be covered depend on the policy language and underwriting. Ask before you rely on it.' },

        { type: 'h2', text: 'How long you keep it, and what a lapse does' },
        { type: 'p', text: 'FLHSMV’s manual says SR-22 and FR-44 certificates must be kept **continuously for 3 years from the original suspension date** of the case (the FR200 path above is two years). Renewals aren’t re-reported unless the **policy number changes** or there was a lapse. So if you switch insurers or buy a car, make sure the new policy files a new certificate before the old one ends. A gap triggers an SR-26 and can bring a new suspension.' },

        { type: 'h2', text: 'Steps to get it filed' },
        { type: 'ol', items: [
          '**Read your letter:** SR-22 or FR-44, the sanction number, and any releases, deposit or fees.',
          '**Confirm ownership:** if a vehicle is registered in your name, it needs its own PIP/PDL coverage.',
          '**Get an operator’s policy** with the limits your case requires.',
          '**Have the insurer file** the certificate electronically with FLHSMV, then pay any reinstatement fee.',
          '**Keep coverage continuous** for the full period and save your filing confirmation.',
        ] },

        { type: 'h2', text: 'Local help in Florida City and Homestead' },
        { type: 'p', text: 'At M&K Agency we handle [SR-22 and FR-44 filings](/en/sr22-insurance-florida-city), including operator’s (non-owner) policies for drivers without a car. Bring your FLHSMV letter and a licensed agent will check the certificate type and set up the filing. [Request a quote](/en/quote) or call [(305) 859-3953](tel:+13058593953). Office: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034.' },
        { type: 'p', text: 'Coverage depends on each policy’s terms, limits and exclusions, and on your exact FLHSMV case. Talk with a licensed agent before changing coverage. This is general information, not legal advice.' },
      ],
      faq: [
        { q: 'I don’t own a car. Do I still need the SR-22?', a: 'Yes, if your FLHSMV letter requires one. Not owning a vehicle doesn’t cancel the requirement. An operator’s policy under s. 324.151(1)(b) lets an insurer certify your liability limits while you drive cars you don’t own.' },
        { q: 'Is a non-owner SR-22 different from a regular SR-22?', a: 'The certificate is the same. Only the policy underneath changes: an owner’s policy lists your vehicles, while an operator’s policy follows you as a driver of vehicles you don’t own.' },
        { q: 'Is the SR-22 enough to clear an injury-crash suspension?', a: 'Not always. For an FR100 case where you or the vehicle were uninsured, FLHSMV also asks for signed releases, a payment agreement or a security deposit, plus a $15 reinstatement fee if you are already suspended.' },
        { q: 'What happens if I buy a car while I have a non-owner SR-22?', a: 'A Florida-registered car needs PIP and PDL. You’ll usually move to an owner’s policy with the required liability limits. A new policy number means a new filing, so start the new coverage before the old one ends to avoid a gap.' },
        { q: 'How long must I keep the filing?', a: 'FLHSMV’s manual says SR-22 and FR-44 must be kept continuously for 3 years from the original suspension date. An FR200 letter (PIP SR-22) says two years from reinstatement. Follow the period on your own letter.' },
        { q: 'What if my letter says FR-44?', a: 'After certain DUI cases, s. 324.023 requires 100/300/50 limits for at least 3 years, filed as an FR-44. An operator’s policy can carry those limits if you don’t own a car, and one FR-44 covers both levels.' },
      ],
      sources: SOURCES_EN,
    },

    es: {
      title: '¿Necesito SR-22 si no tengo carro? El SR-22 de no propietario en Florida',
      metaTitle: 'SR-22 sin carro en Florida (no propietario) | M&K Agency',
      description: '¿Le piden SR-22 y no tiene carro? Cómo funciona la póliza del conductor (non-owner) en Florida, en qué cartas del FLHSMV encaja, límites y plazos.',
      ogAlt: 'Llaves de carro flotando entre dos carros estacionados',
      excerpt: 'El FLHSMV le pide un SR-22, pero usted no tiene carro. Muchas veces la solución es una póliza del conductor (non-owner). Le explicamos cuándo sirve, cuándo no y por cuánto tiempo hay que mantenerla.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: '**“Me piden un SR-22, pero no tengo carro.”** Lo oímos a menudo en la oficina. Quizás vendió el carro después de una suspensión, o maneja el de un familiar o el del trabajo. El requisito del Departamento de Seguridad en las Carreteras y Vehículos Motorizados (**FLHSMV**) sigue en pie. Lo habitual es cumplirlo con una **póliza de responsabilidad del conductor** (*operator’s policy* o “non-owner”) y el SR-22 presentado sobre esa póliza.' },
        { type: 'p', text: 'Aquí verá cuándo encaja esa póliza, qué límites debe tener y cuánto tiempo mantenerla. Para lo básico del SR-22, lea primero nuestra guía [¿Qué es el SR-22 en Florida?](/es/blog/sr22-florida-guia).' },

        { type: 'h2', text: 'El SR-22 es un certificado, no una póliza' },
        { type: 'p', text: 'El FLHSMV define el **SR22** como una presentación del seguro que certifica la **responsabilidad por lesiones (BIL)** y **por daños a la propiedad (PDL)** para cumplir con la reinstalación bajo la Ley de Responsabilidad Financiera. Usted contrata la póliza y la **aseguradora** envía el certificado al estado. Según el manual de procedimientos del FLHSMV, el SR-22 se presenta en forma electrónica dentro de **15 días hábiles** desde su emisión. Si la póliza se cancela, la aseguradora envía un aviso de cancelación (**SR-26**) dentro de **15 días**.' },

        { type: 'h2', text: 'Póliza del dueño y póliza del conductor' },
        { type: 'p', text: 'La ley de Florida describe dos tipos de póliza de responsabilidad que sirven como prueba:' },
        { type: 'ul', items: [
          '**Póliza del dueño, sección 324.151(1)(a):** describe vehículos concretos y cubre al dueño y a quienes los manejan con su permiso (salvo un conductor excluido por nombre según la sección 627.747).',
          '**Póliza del conductor, sección 324.151(1)(b):** cubre la responsabilidad de la persona nombrada cuando usa **cualquier vehículo que no sea suyo**, con los mismos límites y el mismo territorio (Estados Unidos y Canadá) que la del dueño.',
        ] },
        { type: 'p', text: 'El Capítulo 324 llama “operator” a toda persona que tiene el control físico de un vehículo (sección 324.021(3)), y la sección 324.021(8) acepta como prueba una póliza **del dueño o del conductor**. Esa póliza del conductor es lo que todos llaman **seguro de no propietario**. El certificado encima es el mismo SR-22.' },

        { type: 'h2', text: 'Cuándo sirve el SR-22 de no propietario y cuándo no' },
        { type: 'p', text: 'El FLHSMV vincula algunas sanciones a la **persona** y otras al **vehículo**. Su guía de verificación explica que, después de un choque con lesionados, el dueño y el conductor pueden recibir sanciones FR1 separadas, y la verificación del conductor no exige el VIN. Las sanciones FR4 por condenas también son personales. Ahí la póliza del conductor puede servir.' },
        { type: 'p', text: 'Pero lea la carta completa. En una **FR100** (choque con lesionados) en la que usted o el vehículo no tenían seguro, el FLHSMV pide un SR22 mantenido **tres años desde la fecha original de la suspensión**, **además de** releases firmados, un acuerdo de pago o un depósito de seguridad. Si ya está suspendido, se suma un cargo de reinstalación de **$15**. El SR-22 por sí solo no cierra ese caso.' },
        { type: 'p', text: 'La póliza de no propietario **no sirve** cuando el problema es un carro suyo. Todo vehículo registrado en Florida debe tener **PIP y PDL** continuos de al menos **$10,000** cada uno. La carta **FR200** (condena por no mostrar prueba de seguro de su vehículo) pide un **SR-22 de PIP por seis meses, no cancelable**, mantenido **dos años** desde la reinstalación. Eso es cobertura del vehículo. Si le suspendieron la licencia por falta de seguro, vea [licencia suspendida por no tener seguro](/es/blog/florida-license-suspended-no-insurance).' },

        { type: 'h2', text: 'Los límites: 10/20/10 o FR-44 de 100/300/50' },
        { type: 'p', text: 'El SR-22 certifica al menos **$10,000** por persona y **$20,000** por choque por lesiones, y **$10,000** por daños a la propiedad (sección 324.021(7)). Son límites de responsabilidad, no el mínimo de PIP/PDL que explicamos en [el seguro mínimo de auto en Florida](/es/blog/florida-minimum-car-insurance-requirements).' },
        { type: 'p', text: 'Si lo condenaron, o se declaró culpable, por DUI bajo la sección 316.193 después del 1 de octubre de 2007, la sección **324.023** exige **$100,000 / $300,000 / $50,000** durante al menos **3 años**, con un **FR-44**. Un solo FR-44 cubre ambos niveles, y la póliza del conductor también puede llevar esos límites. La ley añade que esa exigencia deja de aplicar si pasan 3 años desde la reinstalación sin otra condena por DUI o delito grave de tránsito. Más detalles en [responsabilidad por lesiones y FR-44](/es/blog/bodily-injury-liability-fr44-florida).' },

        { type: 'h2', text: 'Qué cubre la póliza del conductor y qué no' },
        { type: 'ul', items: [
          '**Cubre:** su responsabilidad por lesiones y daños que cause a otros al manejar un carro ajeno, hasta los límites certificados.',
          '**No cubre:** los daños del carro prestado. Choque (collision) e integral (comprehensive) van ligados a un vehículo concreto.',
          '**No reemplaza:** el PIP y el PDL de un vehículo registrado a su nombre.',
          '**No le devuelve la licencia:** no puede manejar legalmente hasta que el FLHSMV lo reinstale.',
        ] },
        { type: 'p', text: 'Las exclusiones y quién de su hogar queda cubierto dependen del texto de la póliza y de la suscripción.' },

        { type: 'h2', text: 'Cuánto tiempo mantenerlo y qué pasa si se interrumpe' },
        { type: 'p', text: 'El manual del FLHSMV indica que el SR-22 y el FR-44 deben mantenerse **de forma continua durante 3 años desde la fecha original de la suspensión** (en la vía FR200 son dos años). Las renovaciones no se vuelven a reportar salvo que **cambie el número de póliza** o haya habido una interrupción. Si cambia de aseguradora o compra carro, la nueva póliza debe presentar su certificado antes de que termine la anterior. Un hueco genera un SR-26 y puede traer otra suspensión.' },

        { type: 'h2', text: 'Pasos para tramitarlo' },
        { type: 'ol', items: [
          '**Lea su carta:** SR-22 o FR-44, número de sanción, y si pide releases, depósito o cargos.',
          '**Confirme si tiene vehículos registrados:** cada uno necesita su propio PIP/PDL.',
          '**Contrate una póliza del conductor** con los límites que exige su caso.',
          '**Pida a la aseguradora que presente** el certificado ante el FLHSMV y pague el cargo de reinstalación, si aplica.',
          '**Mantenga la cobertura sin interrupciones** todo el período y guarde la confirmación.',
        ] },

        { type: 'h2', text: 'Ayuda en Florida City y Homestead' },
        { type: 'p', text: 'En M&K Agency tramitamos [SR-22 y FR-44](/es/sr22-insurance-florida-city), incluida la póliza del conductor para quien no tiene carro. Traiga su carta del FLHSMV y un agente con licencia revisará el tipo de certificado y preparará la presentación, en español. [Solicite una cotización](/es/quote) o llame al [(305) 859-3953](tel:+13058593953). Oficina: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034.' },
        { type: 'p', text: 'La cobertura depende de las condiciones, los límites y las exclusiones de cada póliza, y de su caso ante el FLHSMV. Hable con un agente con licencia antes de cambiar su cobertura. Esto es información general, no asesoría legal.' },
      ],
      faq: [
        { q: '¿Necesito SR-22 si no tengo carro?', a: 'Sí, si su carta del FLHSMV lo exige. No tener vehículo no anula el requisito. Con una póliza del conductor (sección 324.151(1)(b)), la aseguradora certifica sus límites mientras usted maneja carros que no son suyos.' },
        { q: '¿En qué se diferencia del SR-22 normal?', a: 'El certificado es el mismo. Cambia la póliza de fondo: la del dueño describe sus vehículos; la del conductor lo acompaña a usted cuando maneja vehículos ajenos.' },
        { q: '¿Basta el SR-22 para cerrar una suspensión por choque con lesionados?', a: 'No siempre. En un caso FR100 sin seguro, el FLHSMV también pide releases firmados, un acuerdo de pago o un depósito de seguridad, y $15 de reinstalación si ya está suspendido.' },
        { q: '¿Y si compro un carro mientras tengo el SR-22 de no propietario?', a: 'Un carro registrado en Florida necesita PIP y PDL, así que normalmente pasará a una póliza del dueño con los límites requeridos. Un número de póliza nuevo implica una nueva presentación, sin huecos.' },
        { q: '¿Cuánto tiempo debo mantenerlo?', a: 'Según el manual del FLHSMV, 3 años continuos desde la fecha original de la suspensión. La carta FR200 (SR-22 de PIP) habla de dos años desde la reinstalación. Guíese por su propia carta.' },
        { q: '¿Y si mi carta dice FR-44?', a: 'Después de ciertos casos de DUI, la sección 324.023 exige límites de 100/300/50 durante al menos 3 años, con un FR-44. La póliza del conductor puede llevar esos límites si no tiene carro, y un FR-44 cubre ambos niveles.' },
      ],
      sources: SOURCES_ES,
    },

    ru: {
      title: 'Non-owner SR-22 во Флориде: когда нужен и что покрывает',
      metaTitle: 'Non-owner SR-22 во Флориде: SR-22 без машины | M&K Agency',
      description: 'FLHSMV требует SR-22, а своей машины нет? Как работает полис оператора (non-owner) во Флориде, когда он подходит, какие лимиты и сроки.',
      ogAlt: 'Ключи от машины парят между двумя припаркованными автомобилями',
      excerpt: 'FLHSMV требует SR-22, а машины у вас нет. Часто выход — полис оператора (non-owner). Разбираем, когда он подходит, когда нет и сколько его держать.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'В письме от Департамента безопасности дорожного движения и автотранспорта Флориды (**FLHSMV**) сказано, что нужен **SR-22**, а **своей машины нет**. Может быть, вы продали её после приостановки прав или ездите на машине родственника или на рабочей. Требование всё равно действует. Обычно его закрывают **полисом ответственности оператора** (operator’s policy, или non-owner), на который страховая подаёт SR-22.' },
        { type: 'p', text: 'Ниже — что это за полис, в каких делах FLHSMV он подходит и в каких нет, какие лимиты нужны и сколько его держать. Основы SR-22 — в нашем гиде [«SR-22 во Флориде»](/ru/blog/sr22-florida-guia).' },

        { type: 'h2', text: 'SR-22 — это сертификат, а не полис' },
        { type: 'p', text: 'FLHSMV определяет **SR22** как страховую подачу, которая подтверждает **ответственность за телесные повреждения (BIL)** и **за ущерб имуществу (PDL)** для восстановления прав по Закону о финансовой ответственности. Вы оформляете полис, а **страховая** отправляет сертификат в штат. По процедурному руководству FLHSMV SR-22 подают электронно в течение **15 рабочих дней** после выдачи. Если полис отменён, страховая в течение **15 дней** подаёт уведомление об отмене (**SR-26**).' },

        { type: 'h2', text: 'Полис владельца и полис оператора' },
        { type: 'p', text: 'Закон Флориды описывает два вида полиса ответственности, которые принимаются как доказательство:' },
        { type: 'ul', items: [
          '**Полис владельца, s. 324.151(1)(a):** в нём перечислены конкретные машины; он покрывает владельца и тех, кто ездит на них с его разрешения (кроме водителя, исключённого поимённо по s. 627.747).',
          '**Полис оператора, s. 324.151(1)(b):** покрывает ответственность названного человека, когда он управляет **любым автомобилем, которым не владеет**, с теми же лимитами и той же территорией (США и Канада), что и полис владельца.',
        ] },
        { type: 'p', text: 'Глава 324 называет «operator» любого, кто фактически управляет машиной (s. 324.021(3)), а s. 324.021(8) принимает как доказательство полис **владельца или оператора**. Полис оператора и есть то, что называют **non-owner**. Сертификат поверх него — тот же SR-22.' },

        { type: 'h2', text: 'Когда non-owner SR-22 подходит, а когда нет' },
        { type: 'p', text: 'Одни санкции FLHSMV привязаны к **человеку**, другие — к **машине**. В руководстве по проверкам сказано: после ДТП с пострадавшими владелец и водитель могут получить отдельные санкции FR1, и для проверки водителя VIN не нужен. Санкции FR4 по приговорам тоже персональные. В таких делах, если машины нет, полис оператора может подойти.' },
        { type: 'p', text: 'Но читайте письмо целиком. По делу **FR100** (ДТП с пострадавшими), если у вас или у машины не было страховки, FLHSMV требует SR22 на **три года с исходной даты приостановки** **и вдобавок** подписанные releases, соглашение о выплатах или депозит. Если права уже приостановлены, нужен ещё сбор за восстановление **$15**. Один SR-22 такое дело не закрывает.' },
        { type: 'p', text: 'Non-owner **не решает** проблему, если она связана с вашей машиной. Каждый автомобиль с регистрацией Флориды должен иметь непрерывные **PIP и PDL** не менее **$10,000** каждого. Письмо **FR200** (осуждение за то, что не предъявили доказательство страховки на свою машину) требует **SR-22 с PIP на шесть месяцев без права отмены** на **два года** после восстановления. Это страховка на машину. Если права приостановлены из‑за отсутствия страховки, читайте [как восстановить права](/ru/blog/florida-license-suspended-no-insurance).' },

        { type: 'h2', text: 'Лимиты: 10/20/10 или FR-44 100/300/50' },
        { type: 'p', text: 'SR-22 подтверждает минимум **$10,000** на человека и **$20,000** на ДТП по телесным повреждениям плюс **$10,000** по имуществу (s. 324.021(7)). Это лимиты ответственности, а не минимум PIP/PDL из статьи [о минимальной автостраховке во Флориде](/ru/blog/florida-minimum-car-insurance-requirements).' },
        { type: 'p', text: 'После осуждения или признания вины по DUI (s. 316.193) после 1 октября 2007 года s. **324.023** требует **$100,000 / $300,000 / $50,000** минимум **3 года** — это сертификат **FR-44**. Один FR-44 закрывает оба уровня, и полис оператора тоже может нести такие лимиты. По закону это требование перестаёт действовать, если 3 года после восстановления прав не было нового приговора за DUI или тяжкое дорожное преступление. Подробнее — в статье [о BI liability и FR-44](/ru/blog/bodily-injury-liability-fr44-florida).' },

        { type: 'h2', text: 'Что покрывает полис оператора, а что нет' },
        { type: 'ul', items: [
          '**Покрывает:** вашу ответственность за травмы и ущерб, причинённые другим, когда вы за рулём чужой машины, в пределах лимитов.',
          '**Не покрывает:** повреждения самой чужой машины. Collision и comprehensive привязаны к конкретному авто.',
          '**Не заменяет:** PIP и PDL на машину, зарегистрированную на вас.',
          '**Не восстанавливает права:** ездить законно можно только после восстановления в FLHSMV.',
        ] },
        { type: 'p', text: 'Исключения и то, кто из членов семьи покрыт, зависят от текста полиса и андеррайтинга. Уточняйте заранее.' },

        { type: 'h2', text: 'Сколько держать и чем грозит перерыв' },
        { type: 'p', text: 'По руководству FLHSMV SR-22 и FR-44 нужно держать **непрерывно 3 года с исходной даты приостановки** по делу (в варианте FR200 — два года). Продление заново не подаётся, если не меняется **номер полиса** и не было перерыва. Поэтому при смене страховой или покупке машины новый полис должен подать свой сертификат до окончания старого. «Дыра» в покрытии означает SR-26 и может привести к новой приостановке.' },

        { type: 'h2', text: 'Как оформить: по шагам' },
        { type: 'ol', items: [
          '**Прочитайте письмо:** SR-22 или FR-44, номер санкции, нужны ли releases, депозит или сборы.',
          '**Проверьте, есть ли на вас зарегистрированные машины:** каждой нужен свой PIP/PDL.',
          '**Оформите полис оператора** с лимитами вашего дела.',
          '**Попросите страховую подать** сертификат в FLHSMV и оплатите сбор за восстановление, если он есть.',
          '**Держите покрытие без перерывов** весь срок и сохраните подтверждение подачи.',
        ] },

        { type: 'h2', text: 'Помощь в Florida City и Homestead' },
        { type: 'p', text: 'В M&K Agency мы оформляем [SR-22 и FR-44](/ru/sr22-insurance-florida-city), в том числе полис оператора для тех, у кого нет машины. Принесите письмо FLHSMV — лицензированный агент проверит тип сертификата и организует подачу. Говорим по-русски. [Запросите расчёт](/ru/quote) или позвоните: [(305) 859-3953](tel:+13058593953). Офис: 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034.' },
        { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений полиса и от вашего дела в FLHSMV. Перед изменением страховки поговорите с лицензированным агентом. Это общая информация, не юридическая консультация.' },
      ],
      faq: [
        { q: 'Машины нет. SR-22 всё равно нужен?', a: 'Да, если его требует письмо FLHSMV. Отсутствие машины требование не отменяет. По полису оператора (s. 324.151(1)(b)) страховая подтверждает ваши лимиты, пока вы ездите на чужих машинах.' },
        { q: 'Чем non-owner SR-22 отличается от обычного?', a: 'Сертификат тот же. Меняется полис под ним: полис владельца перечисляет ваши машины, а полис оператора привязан к вам как к водителю чужих машин.' },
        { q: 'Хватит ли SR-22, чтобы закрыть приостановку после ДТП с пострадавшими?', a: 'Не всегда. По делу FR100 без страховки FLHSMV требует ещё подписанные releases, соглашение о выплатах или депозит, а если права уже приостановлены — сбор $15.' },
        { q: 'Что если я куплю машину, пока действует non-owner SR-22?', a: 'Машине с регистрацией Флориды нужны PIP и PDL, поэтому обычно переходят на полис владельца с нужными лимитами. Новый номер полиса — новая подача, так что новое покрытие должно начаться до окончания старого.' },
        { q: 'Сколько нужно держать подачу?', a: 'По руководству FLHSMV — 3 года непрерывно с исходной даты приостановки. В письме FR200 (SR-22 с PIP) указано два года после восстановления. Ориентируйтесь на своё письмо.' },
        { q: 'Что если в письме указан FR-44?', a: 'После определённых дел о DUI s. 324.023 требует лимиты 100/300/50 минимум 3 года, сертификат FR-44. Полис оператора может нести такие лимиты, если машины нет, а один FR-44 закрывает оба уровня.' },
      ],
      sources: SOURCES_RU,
    },
  },
};
