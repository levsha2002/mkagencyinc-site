import type { BlogPost } from '../types';

// Facts checked 2026-09-26 against ss. 627.727, 627.736, 627.733, 324.022, 316.027,
// 316.062 and 316.065 F.S. (2026, flsenate.gov), SB 488 (2026) / ch. 2026-39
// (enrolled text: s. 316.065(1) report threshold $500 -> $2,000, effective Oct 1, 2026),
// Crash-report threshold re-checked 2026-10-04: s. 316.065(1) (2026) now reads $2,000 (s. 7, ch. 2026-39), in effect since Oct 1, 2026.
// FLHSMV insurance requirements and traffic crash report pages, and the Florida DFS
// Personal Automobile Insurance Overview and Automobile Insurance Toolkit.
// Deliberately generic: no private insurer is named. No statistics, no prices.
const SOURCES_EN = [
  { label: 'Florida Statutes s. 627.727 (2026): uninsured and underinsured motorist coverage, written rejection, non-stacking option', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.727' },
  { label: 'Florida Statutes s. 627.736 (2026): required personal injury protection (PIP) benefits', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.736' },
  { label: 'Florida Statutes s. 627.733 (2026): required security (PIP)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.733' },
  { label: 'Florida Statutes s. 324.022 (2026): financial responsibility for property damage', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.022' },
  { label: 'Florida Statutes s. 316.065 (2026): crashes; reports', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.065' },
  { label: 'Florida Statutes s. 316.062 (2026): duty to give information and render aid', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.062' },
  { label: 'Florida Statutes s. 316.027 (2026): crash involving death or personal injuries', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.027' },
  { label: 'Florida Senate: SB 488 (2026), Chapter 2026-39, in effect since October 1, 2026', url: 'https://www.flsenate.gov/Session/Bill/2026/488' },
  { label: 'FLHSMV: Florida Insurance Requirements', url: 'https://www.flhsmv.gov/insurance/' },
  { label: 'FLHSMV: Traffic Crash Reports', url: 'https://www.flhsmv.gov/traffic-crash-reports/' },
  { label: 'Florida Department of Financial Services: Personal Automobile Insurance Overview', url: 'https://myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview' },
  { label: 'Florida Department of Financial Services: Automobile Insurance Toolkit (PDF)', url: 'https://www.myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---automobile-insurance-toolkit.pdf' },
];

export const post: BlogPost = {
  slug: 'uninsured-motorist-coverage-florida',
  datePublished: '2026-09-26',
  dateModified: '2026-10-04',
  translations: {
    en: {
      title: 'Uninsured Motorist Coverage in Florida: What UM/UIM Covers and How to Check Yours',
      metaTitle: 'Uninsured Motorist Coverage in Florida (UM/UIM) | M&K Agency',
      description: 'Uninsured motorist coverage in Florida explained: what UM/UIM pays, stacked vs non-stacked, how to see if you declined it, and what to do after a crash.',
      ogAlt: 'Two cars on a Florida road, one with a large protective shield above it',
      excerpt: 'Most Florida drivers are not required to carry bodily injury liability. If one of them injures you, UM/UIM coverage on your own policy is what can pay. Here is how it works and how to check whether you have it.',
      category: 'Auto insurance',
      body: [
        { type: 'p', text: 'If a driver with no insurance, or not enough insurance, injures you in a crash, who pays for everything your own PIP doesn’t? In Florida the answer is often **your own policy**, but only if it includes **Uninsured Motorist coverage (UM, also called UM/UIM)**. Many drivers aren’t sure whether they have it, or whether they turned it down years ago.' },
        { type: 'p', text: 'Here is what the coverage does, why it matters so much in Florida, and how to check your own policy in a few minutes.' },

        { type: 'h2', text: 'What UM and UIM coverage are' },
        { type: 'ul', items: [
          '**Uninsured motorist (UM)** coverage pays you for bodily injury, including death, caused by an at-fault driver who has **no bodily injury liability coverage**. It protects you and the other people insured under your policy.',
          '**Underinsured motorist (UIM)** coverage applies when the at-fault driver has bodily injury liability coverage, but **the limits are lower than your damages**. Florida law treats that driver as "uninsured" for this coverage, so in Florida both situations are handled by the same coverage, usually labeled UM or UM/UIM.',
          'The Florida Department of Financial Services (DFS) explains that UM lets you collect from your own insurer what you could have collected from the at-fault driver if that driver had enough insurance. It can pay for **medical expenses beyond PIP, lost wages, pain and suffering and other expenses**, and it is normally paid in a lump sum once the extent of treatment is known.',
          'UM sits **on top of** PIP and other benefits. By law it doesn’t duplicate them; it covers the difference between those benefits and your damages, up to your UM limit.',
          'UM in Florida is **injury coverage, not car coverage**. Damage to your vehicle is a separate question: collision coverage, if you carry it, pays to repair your car regardless of fault.',
        ] },

        { type: 'h2', text: 'Why UM matters so much in Florida' },
        { type: 'p', text: 'To register a car in Florida, you must show proof of just two coverages: **Personal Injury Protection (PIP)** and **Property Damage Liability (PDL)**, with a minimum of $10,000 each. **Bodily injury liability**, the coverage that pays for injuries a driver causes to other people, is **not required for most drivers**. That means the driver who hits you may have no coverage at all for your injuries, or only low limits.' },
        { type: 'p', text: 'Your own PIP helps, but it has firm limits:' },
        { type: 'ul', items: [
          'PIP pays **80% of reasonable, medically necessary medical expenses**, no matter who caused the crash, up to **$10,000** (a limit shared with PIP’s disability benefits, which pay 60% of lost income).',
          'You must get **initial care within 14 days** of the crash for PIP to pay medical benefits.',
          'If a treating provider determines you **did not have an emergency medical condition**, PIP medical benefits are limited to **$2,500**.',
        ] },
        { type: 'p', text: 'After a serious injury, PIP can run out quickly. DFS points out that health insurance usually has deductibles and copayments, normally doesn’t cover a stay in a convalescent center, and doesn’t replace lost income, help at home or modifications such as a wheelchair ramp. When the at-fault driver has little or no bodily injury coverage, UM is the coverage designed to fill that gap.' },

        { type: 'callout', title: 'In plain words, with pictures', text: 'See our [car insurance protection guide](/en/protect/car-insurance): what a crash with an uninsured driver can do to your paycheck, with real Florida court cases.' },

        { type: 'h2', text: 'How much UM coverage you have by default' },
        { type: 'p', text: 'When your auto policy includes bodily injury liability, Florida law requires the insurer to include UM **at limits equal to your bodily injury liability limits**, unless a named insured **rejects UM or chooses lower limits in writing**. Limits are written as two numbers: 50/100, for example, means $50,000 per person and $100,000 per accident.' },
        { type: 'p', text: 'This requirement is tied to bodily injury liability. If your policy carries only the state minimums (PIP and PDL), the law does not require the insurer to include UM, so ask your agent what your options are.' },

        { type: 'h2', text: 'Stacked vs. non-stacked UM' },
        { type: 'p', text: 'When you buy UM in Florida, you make two decisions: the **limits**, and whether the coverage is **stacked** or **non-stacked**.' },
        { type: 'ul', items: [
          '**Stacked UM** is what Florida law provides unless you choose otherwise in writing. DFS gives this example: with three vehicles that each carry UM limits of 50/100, the limits are added together, for a total of $150,000 per person and $300,000 per accident.',
          '**Non-stacked UM** is an option insurers may offer on a state-approved form. If you accept it, limits for multiple vehicles are **not added together**, and if you are hurt while riding in a vehicle, the UM available is generally the coverage on that vehicle.',
          '**An important difference even with one car:** non-stacked UM generally **does not apply** if you or a family member living with you is injured while in a vehicle you own that isn’t insured for UM. DFS notes that in that situation only the stacked form would respond.',
          'If you accept non-stacked coverage, that choice **carries over to your renewals** until you ask to remove the limitation.',
        ] },
        { type: 'p', text: 'Not every insurer offers non-stacked UM, and policy wording differs, so ask your agent to explain how each option would work for your household.' },

        { type: 'h2', text: 'You may have declined UM without realizing it' },
        { type: 'p', text: 'UM can be rejected, or lower limits chosen, **only in writing on a form approved by the Florida Office of Insurance Regulation**. By law, the heading of that form must say, in bold type: "You are electing not to purchase certain valuable coverage which protects you and your family or you are purchasing uninsured motorist limits less than your bodily injury liability limits when you sign this form. Please read carefully."' },
        { type: 'p', text: 'It’s easy to sign that form along with the rest of the application paperwork and forget about it. Three rules make that signature matter for years:' },
        { type: 'ul', items: [
          'When a named insured signs, the law **presumes an informed, knowing rejection on behalf of everyone** on the policy, including family members covered by the policy.',
          'The rejection or lower limit **carries over to renewals and replacement policies** with the same bodily injury limits, unless you ask for UM or higher limits **in writing**.',
          'Your insurer must remind you of your UM options **at least once a year**, in a notice attached to your premium notice. If you’ve been skipping that page, it’s worth reading.',
        ] },

        { type: 'h2', text: 'How to check your declarations page' },
        { type: 'p', text: 'Your declarations page (the "dec page") is the summary of your policy: vehicles, drivers, coverages and limits. Here is how to check it:' },
        { type: 'ol', items: [
          'Find your **current** declarations page in your policy documents or your insurer’s online account or app.',
          'Look for a line labeled **Uninsured Motorist**, **UM**, **UM/UIM** or **Uninsured/Underinsured Motorist Bodily Injury**.',
          '**Compare the UM limits with your bodily injury liability limits.** If UM is lower, lower limits were selected in writing at some point.',
          'Look for the words **stacked** or **non-stacked** (sometimes "unstacked") next to UM, and check every vehicle listed.',
          'If there is **no UM line**, or it says rejected or none, you most likely don’t have UM.',
          'Not sure? Ask your agent for your dec page and a copy of any UM selection or rejection form on file. Remember that adding UM or raising your limits requires a **written request**.',
        ] },

        { type: 'h2', text: 'What to do if an uninsured driver hits you' },
        { type: 'ol', items: [
          '**Get safe and call 911.** Check for injuries, move out of traffic only if it’s safe, and stay at the scene. Florida law requires drivers in a crash with injuries to stop and remain there.',
          '**Report the crash to law enforcement.** Florida law requires you to notify police immediately after a crash with injury, death, or apparent property damage of at least **$2,000** (s. 316.065, as amended by SB 488; the threshold was $500 before October 1, 2026). Hit-and-run and DUI crashes must be reported too. DFS recommends contacting law enforcement whenever you can, even when the damage looks minor.',
          '**Exchange information.** Drivers must give each other their name, address and vehicle registration number, and show their license on request. Ask for the other driver’s insurance information, and note it if they say they have none.',
          '**Take photos** of the vehicles, license plates, the scene, road conditions and any visible injuries.',
          '**Get witness information:** names, addresses and phone numbers.',
          '**Get the police report details.** Write down the officer’s name and the report number, and ask for the Driver Exchange of Information form. Crash reports can take up to 10 days to become available from the FLHSMV Florida Crash Portal.',
          '**Get medical care right away.** Don’t wait: PIP pays medical benefits only if you receive initial care within 14 days.',
          '**Call your insurance company and your agent** as soon as you can. DFS warns that an insurer may deny a claim that isn’t reported in a timely manner.',
          '**Before you sign any settlement or release** with the at-fault driver’s insurer, talk to your agent or attorney. If you have an underinsured motorist claim, Florida law requires written notice of the proposed settlement to your UIM insurer first.',
        ] },
        { type: 'callout', title: 'Please note', text: 'This is general insurance information, not legal advice. For injury claims or lawsuits, talk to an attorney.' },

        { type: 'h2', text: 'Not sure if you have UM? Get a free coverage check' },
        { type: 'p', text: 'Our [Free 5-Minute Coverage Check](/en/coverage-check#auto) is the quickest way to find out. A licensed agent reviews your auto policy with you, including whether you have UM, your limits, and whether it’s stacked, and shows you the gaps. Free, no obligation, in English, Spanish or Russian.' },
        { type: 'p', text: 'You can also visit M&K Agency at 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034, call (305) 859-3953, read more about [auto insurance in Florida City](/en/car-insurance-florida-city) or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you change your coverage.' },
      ],
      faq: [
        { q: 'Is uninsured motorist coverage required in Florida?', a: 'No. Florida requires PIP and property damage liability. But if your policy includes bodily injury liability, the insurer must include UM at the same limits unless a named insured rejects it or chooses lower limits in writing on a state-approved form.' },
        { q: 'What is the difference between UM and UIM?', a: 'UM applies when the at-fault driver has no bodily injury liability coverage. UIM applies when that driver’s limits are lower than your damages. In Florida both are handled by the same coverage, usually labeled UM or UM/UIM.' },
        { q: 'Does UM pay to fix my car?', a: 'No. In Florida, UM covers bodily injury, including death. Damage to your car is handled by collision coverage, if you carry it.' },
        { q: 'I rejected UM years ago. Can I add it now?', a: 'You can ask for it. Under Florida law, a rejection carries over to your renewals until you request UM, or higher UM limits, in writing. Talk with your agent about the limits and the stacked or non-stacked option.' },
      ],
      sources: SOURCES_EN,
    },

    es: {
      title: 'Cobertura de motorista sin seguro en Florida (UM/UIM): qué cubre y cómo saber si la tiene',
      metaTitle: 'Cobertura de motorista sin seguro en Florida | M&K Agency',
      description: 'Cobertura de motorista sin seguro (UM/UIM) en Florida: qué paga, acumulable o no, cómo saber si la rechazó y qué hacer si lo choca un conductor sin seguro.',
      ogAlt: 'Dos carros en una carretera de Florida, uno con un gran escudo protector encima',
      excerpt: 'En Florida, la mayoría de los conductores no está obligada a tener seguro de responsabilidad por lesiones corporales. Si uno de ellos lo lesiona, la cobertura UM/UIM de su propia póliza es la que puede pagar. Le explicamos cómo funciona y cómo revisar si la tiene.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'Si un conductor sin seguro, o con muy poco seguro, lo lesiona en un choque, ¿quién paga lo que su PIP no cubre? En Florida, muchas veces la respuesta es **su propia póliza**, siempre que incluya la **cobertura de motorista sin seguro (UM o UM/UIM)**, que mucha gente conoce como seguro contra conductores sin seguro. El problema es que muchos conductores no saben si la tienen, o si la rechazaron hace años.' },
        { type: 'p', text: 'Aquí le explicamos qué hace esta cobertura, por qué es tan importante en Florida y cómo revisar su póliza en pocos minutos.' },

        { type: 'h2', text: 'Qué son las coberturas UM y UIM' },
        { type: 'ul', items: [
          'La cobertura de **motorista sin seguro (UM)** le paga por lesiones corporales, incluida la muerte, causadas por un conductor culpable que **no tiene seguro de responsabilidad por lesiones corporales**. Lo protege a usted y a las demás personas aseguradas en su póliza.',
          'La cobertura de **motorista con seguro insuficiente (UIM)** entra cuando el conductor culpable sí tiene ese seguro, pero **sus límites no alcanzan para cubrir sus daños**. La ley de Florida trata a ese conductor como "sin seguro" para esta cobertura, así que en Florida los dos casos se cubren con la misma cobertura, que suele aparecer como UM o UM/UIM.',
          'El Departamento de Servicios Financieros de Florida (DFS) explica que la UM le permite cobrarle a su propia aseguradora lo que habría podido cobrarle al conductor culpable si este hubiera tenido suficiente seguro. Puede pagar **gastos médicos que superan el PIP, salarios perdidos, dolor y sufrimiento y otros gastos**, y normalmente se paga en una sola suma cuando ya se sabe el alcance del tratamiento.',
          'La UM se suma **por encima** del PIP y de otros beneficios. Por ley no los duplica: cubre la diferencia entre esos beneficios y sus daños, hasta el límite de su UM.',
          'En Florida, la UM **cubre lesiones, no su carro**. Los daños a su vehículo son otro tema: la cobertura de choque (collision), si la tiene, paga la reparación sin importar quién tuvo la culpa.',
        ] },

        { type: 'h2', text: 'Por qué la UM es tan importante en Florida' },
        { type: 'p', text: 'Para registrar un carro en Florida solo hay que demostrar dos coberturas: **Protección contra Lesiones Personales (PIP)** y **responsabilidad por daños a la propiedad (PDL)**, con un mínimo de $10,000 cada una. El **seguro de responsabilidad por lesiones corporales**, el que paga las lesiones que un conductor les causa a otras personas, **no es obligatorio para la mayoría de los conductores**. Es decir, el conductor que lo choque puede no tener ninguna cobertura para sus lesiones, o tener límites muy bajos.' },
        { type: 'p', text: 'Su PIP ayuda, pero tiene límites claros:' },
        { type: 'ul', items: [
          'El PIP paga el **80% de los gastos médicos razonables y necesarios**, sin importar quién causó el choque, hasta **$10,000** (un límite que comparte con los beneficios por incapacidad del PIP, que pagan el 60% del ingreso perdido).',
          'Para que el PIP pague los gastos médicos, debe recibir la **atención inicial dentro de los 14 días** siguientes al choque.',
          'Si un proveedor médico determina que usted **no tuvo una condición médica de emergencia**, los beneficios médicos del PIP se limitan a **$2,500**.',
        ] },
        { type: 'p', text: 'Después de una lesión grave, el PIP se puede agotar pronto. El DFS recuerda que el seguro de salud suele tener deducibles y copagos, normalmente no cubre la estadía en un centro de convalecencia y no reemplaza el ingreso perdido, la ayuda en la casa ni adaptaciones como una rampa para silla de ruedas. Cuando el conductor culpable tiene poca o ninguna cobertura de lesiones corporales, la UM es la cobertura pensada para llenar ese vacío.' },

        { type: 'callout', title: 'En palabras simples y con dibujos', text: 'Vea nuestra [guía de protección del seguro de auto](/es/protect/car-insurance): lo que un choque con un conductor sin seguro puede hacerle a su sueldo, con casos reales de tribunales de Florida.' },

        { type: 'h2', text: 'Cuánta cobertura UM tiene de manera predeterminada' },
        { type: 'p', text: 'Si su póliza de auto incluye responsabilidad por lesiones corporales, la ley de Florida exige que la aseguradora incluya la UM **con los mismos límites que esa responsabilidad**, a menos que un asegurado nombrado **la rechace o elija límites más bajos por escrito**. Los límites se escriben con dos números: 50/100, por ejemplo, significa $50,000 por persona y $100,000 por accidente.' },
        { type: 'p', text: 'Esta regla depende de la responsabilidad por lesiones corporales. Si su póliza tiene solo los mínimos del estado (PIP y PDL), la ley no obliga a la aseguradora a incluir la UM; pregúntele a su agente qué opciones tiene.' },

        { type: 'h2', text: 'UM acumulable (stacked) o no acumulable (non-stacked)' },
        { type: 'p', text: 'Al comprar UM en Florida, usted toma dos decisiones: los **límites** y si la cobertura será **acumulable** o **no acumulable**.' },
        { type: 'ul', items: [
          'La **UM acumulable (stacked)** es la que da la ley de Florida, a menos que usted elija otra cosa por escrito. El DFS pone este ejemplo: con tres vehículos que tienen límites de UM de 50/100 cada uno, los límites se suman y el total llega a $150,000 por persona y $300,000 por accidente.',
          'La **UM no acumulable (non-stacked)** es una opción que las aseguradoras pueden ofrecer en un formulario aprobado por el estado. Si la acepta, los límites de varios vehículos **no se suman**, y si usted se lesiona mientras va en un vehículo, por lo general la UM disponible es la de ese vehículo.',
          '**Una diferencia importante aunque tenga un solo carro:** la UM no acumulable, por lo general, **no aplica** si usted o un familiar que vive con usted se lesiona mientras va en un vehículo de su propiedad que no tiene UM. El DFS señala que en ese caso solo respondería la cobertura acumulable.',
          'Si acepta la cobertura no acumulable, esa decisión **se mantiene en sus renovaciones** hasta que usted pida quitar la limitación.',
        ] },
        { type: 'p', text: 'No todas las aseguradoras ofrecen UM no acumulable y la redacción de las pólizas varía. Pídale a su agente que le explique cómo funcionaría cada opción en su caso.' },

        { type: 'h2', text: 'Es posible que haya rechazado la UM sin darse cuenta' },
        { type: 'p', text: 'La UM solo se puede rechazar, o bajar sus límites, **por escrito y en un formulario aprobado por la Oficina de Regulación de Seguros de Florida (OIR)**. Por ley, el encabezado de ese formulario debe advertir en letra negrita, en inglés, que al firmarlo usted está eligiendo no comprar una cobertura valiosa que lo protege a usted y a su familia, o que está comprando límites de UM más bajos que su responsabilidad por lesiones corporales, y que debe leerlo con cuidado.' },
        { type: 'p', text: 'Es fácil firmar ese formulario junto con el resto de los papeles de la solicitud y olvidarse. Tres reglas hacen que esa firma pese durante años:' },
        { type: 'ul', items: [
          'Cuando la firma un asegurado nombrado, la ley **presume un rechazo informado y consciente en nombre de todos** los asegurados de la póliza, incluidos los familiares cubiertos por la póliza.',
          'El rechazo o los límites más bajos **pasan a las renovaciones y a las pólizas de reemplazo** con los mismos límites de lesiones corporales, a menos que usted pida la UM o límites más altos **por escrito**.',
          'Su aseguradora debe recordarle sus opciones de UM **por lo menos una vez al año**, en un aviso que viene junto con el aviso de prima. Si nunca lo lee, vale la pena hacerlo.',
        ] },

        { type: 'h2', text: 'Cómo revisar su página de declaraciones' },
        { type: 'p', text: 'La página de declaraciones (declarations page o "dec page") es el resumen de su póliza: vehículos, conductores, coberturas y límites. Así puede revisarla:' },
        { type: 'ol', items: [
          'Busque la página de declaraciones **vigente** en los documentos de su póliza o en la cuenta en línea o la app de su aseguradora.',
          'Busque una línea que diga **Uninsured Motorist**, **UM**, **UM/UIM** o **Uninsured/Underinsured Motorist Bodily Injury**.',
          '**Compare los límites de UM con sus límites de responsabilidad por lesiones corporales.** Si la UM es más baja, en algún momento se eligieron límites menores por escrito.',
          'Fíjese si junto a la UM dice **stacked** (acumulable) o **non-stacked** / "unstacked" (no acumulable), y revise cada vehículo.',
          'Si **no aparece ninguna línea de UM**, o dice rechazada (rejected) o ninguna (none), lo más probable es que no la tenga.',
          '¿Tiene dudas? Pídale a su agente la página de declaraciones y una copia de cualquier formulario de selección o rechazo de UM que esté en el expediente. Recuerde que para agregar UM o subir los límites se necesita una **solicitud por escrito**.',
        ] },

        { type: 'h2', text: 'Qué hacer si lo choca un conductor sin seguro' },
        { type: 'ol', items: [
          '**Póngase a salvo y llame al 911.** Revise si hay heridos, salga del tráfico solo si es seguro y quédese en el lugar. La ley de Florida exige que los conductores involucrados en un choque con heridos se detengan y permanezcan allí.',
          '**Reporte el choque a la policía.** La ley de Florida exige avisar de inmediato a la policía cuando hay heridos, muertos o daños aparentes a la propiedad de al menos **$2,000** (sección 316.065, modificada por la ley SB 488; hasta el 1 de octubre de 2026 el monto era de $500). Los choques con fuga (hit-and-run) y los de conductores bajo los efectos del alcohol (DUI) también se deben reportar. El DFS recomienda llamar a la policía siempre que pueda, aunque el daño parezca menor.',
          '**Intercambie información.** Los conductores deben darse su nombre, dirección y número de registro del vehículo, y mostrar la licencia si se la piden. Pida los datos del seguro del otro conductor y anote si le dice que no tiene.',
          '**Tome fotos** de los vehículos, las placas, el lugar, el estado de la vía y cualquier lesión visible.',
          '**Consiga los datos de los testigos:** nombres, direcciones y teléfonos.',
          '**Anote los datos del reporte policial.** Apunte el nombre del agente y el número del reporte, y pida el formulario de intercambio de información entre conductores (Driver Exchange of Information). Los reportes de choque pueden tardar hasta 10 días en estar disponibles en el Florida Crash Portal del FLHSMV.',
          '**Busque atención médica enseguida.** No espere: el PIP solo paga beneficios médicos si recibe la atención inicial dentro de los 14 días.',
          '**Llame a su aseguradora y a su agente** lo antes posible. El DFS advierte que la aseguradora puede negar un reclamo que no se reporte a tiempo.',
          '**Antes de firmar un acuerdo o una liberación (release)** con la aseguradora del conductor culpable, hable con su agente o con un abogado. Si tiene un reclamo por motorista con seguro insuficiente, la ley de Florida exige primero enviar aviso por escrito del acuerdo propuesto a su aseguradora de UIM.',
        ] },
        { type: 'callout', title: 'Importante', text: 'Esta es información general sobre seguros, no asesoría legal. Para reclamos por lesiones o demandas, consulte con un abogado.' },

        { type: 'h2', text: '¿No sabe si tiene UM? Pida una revisión gratis de su cobertura' },
        { type: 'p', text: 'Nuestra [revisión gratis de su cobertura en 5 minutos](/es/coverage-check#auto) es la forma más rápida de saberlo. Un agente licenciado revisa con usted su póliza de auto, incluido si tiene UM, cuáles son sus límites y si es acumulable, y le muestra los huecos. Gratis, sin compromiso y en español, inglés o ruso.' },
        { type: 'p', text: 'También puede visitar M&K Agency en 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034, llamar al (305) 859-3953, leer más sobre el [seguro de auto en Florida City](/es/car-insurance-florida-city) o [pedir una cotización](/es/quote).' },
        { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza. Hable con un agente licenciado antes de cambiar su cobertura.' },
      ],
      faq: [
        { q: '¿Es obligatoria la cobertura de motorista sin seguro en Florida?', a: 'No. Florida exige PIP y responsabilidad por daños a la propiedad. Pero si su póliza incluye responsabilidad por lesiones corporales, la aseguradora debe incluir la UM con los mismos límites, a menos que un asegurado nombrado la rechace o elija límites más bajos por escrito en un formulario aprobado por el estado.' },
        { q: '¿Cuál es la diferencia entre UM y UIM?', a: 'La UM aplica cuando el conductor culpable no tiene seguro de responsabilidad por lesiones corporales. La UIM aplica cuando sus límites no alcanzan para cubrir sus daños. En Florida ambas se cubren con la misma cobertura, que suele aparecer como UM o UM/UIM.' },
        { q: '¿La UM paga la reparación de mi carro?', a: 'No. En Florida, la UM cubre lesiones corporales, incluida la muerte. Los daños a su carro los cubre la cobertura de choque (collision), si la tiene.' },
        { q: 'Rechacé la UM hace años. ¿La puedo agregar ahora?', a: 'Puede pedirla. Según la ley de Florida, el rechazo se mantiene en sus renovaciones hasta que usted solicite la UM, o límites más altos, por escrito. Hable con su agente sobre los límites y la opción acumulable o no acumulable.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 627.727 (2026): cobertura de motorista sin seguro o con seguro insuficiente, rechazo por escrito, opción no acumulable', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.727' },
        { label: 'Estatutos de Florida, sección 627.736 (2026): beneficios obligatorios de PIP', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.736' },
        { label: 'Estatutos de Florida, sección 627.733 (2026): seguro obligatorio (PIP)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.733' },
        { label: 'Estatutos de Florida, sección 324.022 (2026): responsabilidad financiera por daños a la propiedad', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.022' },
        { label: 'Estatutos de Florida, sección 316.065 (2026): choques y reportes', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.065' },
        { label: 'Estatutos de Florida, sección 316.062 (2026): deber de dar información y prestar ayuda', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.062' },
        { label: 'Estatutos de Florida, sección 316.027 (2026): choques con muertos o heridos', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.027' },
        { label: 'Senado de Florida: SB 488 (2026), Capítulo 2026-39, vigente desde el 1 de octubre de 2026', url: 'https://www.flsenate.gov/Session/Bill/2026/488' },
        { label: 'FLHSMV: requisitos de seguro en Florida (en inglés)', url: 'https://www.flhsmv.gov/insurance/' },
        { label: 'FLHSMV: reportes de choques de tránsito (en inglés)', url: 'https://www.flhsmv.gov/traffic-crash-reports/' },
        { label: 'Departamento de Servicios Financieros de Florida: resumen del seguro de auto personal (en inglés)', url: 'https://myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview' },
        { label: 'Departamento de Servicios Financieros de Florida: guía del seguro de auto, Automobile Insurance Toolkit (PDF, en inglés)', url: 'https://www.myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---automobile-insurance-toolkit.pdf' },
      ],
    },

    ru: {
      title: 'Страховка от незастрахованных водителей во Флориде (UM/UIM): что она покрывает и как проверить свой полис',
      metaTitle: 'Страховка от незастрахованных водителей во Флориде | M&K Agency',
      description: 'Страховка от незастрахованных водителей (UM/UIM) во Флориде: что она оплачивает, stacked или non-stacked, как проверить свой полис и что делать после ДТП.',
      ogAlt: 'Две машины на дороге Флориды, над одной — большой защитный щит',
      excerpt: 'Во Флориде большинство водителей не обязаны страховать ответственность за травмы других людей. Если такой водитель вас травмирует, платить может покрытие UM/UIM в вашем собственном полисе. Объясняем, как оно работает и как проверить, есть ли оно у вас.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Если вас травмировал в аварии водитель без страховки или с недостаточной страховкой, кто оплатит то, что не покрывает ваш PIP? Во Флориде часто ответ такой: **ваш собственный полис**, но только если в нём есть **страховка от незастрахованных водителей (Uninsured Motorist, UM или UM/UIM)**. Многие водители не знают, есть ли она у них, и не отказались ли они от неё несколько лет назад.' },
        { type: 'p', text: 'Рассказываем, что даёт это покрытие, почему оно так важно именно во Флориде и как за несколько минут проверить свой полис.' },

        { type: 'h2', text: 'Что такое UM и UIM' },
        { type: 'ul', items: [
          '**UM (uninsured motorist)** оплачивает травмы, в том числе гибель, которые причинил виновный водитель, **у которого нет страховки ответственности за травмы других людей** (bodily injury liability). Покрытие защищает вас и других людей, застрахованных по вашему полису.',
          '**UIM (underinsured motorist)** срабатывает, когда у виновника такая страховка есть, но **её лимитов не хватает, чтобы покрыть ваш ущерб**. Закон Флориды для этого покрытия считает такого водителя «незастрахованным», поэтому во Флориде оба случая покрывает одно и то же покрытие. В полисе оно обычно называется UM или UM/UIM.',
          'Департамент финансовых услуг Флориды (DFS) объясняет: UM позволяет получить от вашей же страховой компании то, что вы могли бы получить с виновника, будь у него достаточная страховка. Покрытие может оплатить **медицинские расходы сверх PIP, потерянный заработок, моральный вред (pain and suffering) и другие расходы**. Обычно выплата производится одной суммой, когда уже понятен объём лечения.',
          'UM действует **поверх** PIP и других выплат. По закону оно их не дублирует, а покрывает разницу между этими выплатами и вашим ущербом, в пределах лимита UM.',
          'UM во Флориде — это **покрытие травм, а не машины**. Повреждения автомобиля — отдельный вопрос: их оплачивает collision (страховка от столкновений), если она у вас есть, независимо от того, кто виноват.',
        ] },

        { type: 'h2', text: 'Почему UM так важна во Флориде' },
        { type: 'p', text: 'Чтобы зарегистрировать машину во Флориде, достаточно подтвердить всего два покрытия: **PIP (Personal Injury Protection, страхование от травм)** и **PDL (ответственность за ущерб чужому имуществу)**, минимум по $10,000 каждое. **Страховка ответственности за травмы других людей** (bodily injury liability) **для большинства водителей не обязательна**. Значит, у водителя, который в вас врежется, может вообще не быть покрытия ваших травм или могут быть очень низкие лимиты.' },
        { type: 'p', text: 'Ваш PIP помогает, но у него жёсткие рамки:' },
        { type: 'ul', items: [
          'PIP оплачивает **80% разумных и необходимых медицинских расходов**, независимо от того, кто виноват в аварии, но не больше **$10,000** (этот лимит общий с выплатами PIP по нетрудоспособности, которые возмещают 60% потерянного дохода).',
          'Чтобы PIP оплатил лечение, **первичную медицинскую помощь нужно получить в течение 14 дней** после аварии.',
          'Если врач решит, что у вас **не было неотложного медицинского состояния** (emergency medical condition), медицинские выплаты PIP ограничены суммой **$2,500**.',
        ] },
        { type: 'p', text: 'После серьёзной травмы PIP может закончиться очень быстро. DFS напоминает, что у медицинской страховки обычно есть франшизы и доплаты, она, как правило, не оплачивает пребывание в реабилитационном центре и не возмещает потерянный заработок, помощь по дому или переоборудование, например пандус для инвалидной коляски. Когда у виновника мало или совсем нет страховки ответственности за травмы, именно UM закрывает этот пробел.' },

        { type: 'callout', title: 'Простыми словами и в картинках', text: 'Смотрите наш [гид по автострахованию](/ru/protect/car-insurance): что авария с незастрахованным водителем может сделать с вашей зарплатой — с реальными делами из судов Флориды.' },

        { type: 'h2', text: 'Какой лимит UM вы получаете по умолчанию' },
        { type: 'p', text: 'Если в вашем автополисе есть страховка ответственности за травмы других людей, закон Флориды требует включить в него UM **с такими же лимитами**, если только застрахованный, указанный в полисе (named insured), **не откажется от UM или не выберет более низкие лимиты письменно**. Лимиты записываются двумя числами: например, 50/100 означает $50,000 на человека и $100,000 на одну аварию.' },
        { type: 'p', text: 'Это требование привязано к страховке ответственности за травмы. Если в полисе только минимум, требуемый штатом (PIP и PDL), закон не обязывает страховую компанию включать UM. Уточните у своего агента, какие у вас есть варианты.' },

        { type: 'h2', text: 'Stacked и non-stacked: суммируемое и несуммируемое покрытие UM' },
        { type: 'p', text: 'Покупая UM во Флориде, вы принимаете два решения: какие будут **лимиты** и будет ли покрытие **суммируемым (stacked)** или **несуммируемым (non-stacked)**.' },
        { type: 'ul', items: [
          '**Stacked UM** закон Флориды предоставляет по умолчанию, если вы письменно не выбрали иное. DFS приводит такой пример: если у вас три машины и у каждой лимит UM 50/100, лимиты складываются, и в сумме получается $150,000 на человека и $300,000 на аварию.',
          '**Non-stacked UM** — вариант, который страховые компании могут предложить на форме, утверждённой штатом. Если вы его принимаете, лимиты по нескольким машинам **не складываются**, а если вы пострадали, находясь в машине, то, как правило, доступно покрытие UM именно этой машины.',
          '**Важная разница даже при одной машине:** non-stacked UM, как правило, **не действует**, если вы или член семьи, живущий с вами, пострадали в машине, которая принадлежит вам, но не застрахована по UM. DFS отмечает, что в такой ситуации сработает только stacked.',
          'Если вы согласились на non-stacked, этот выбор **сохраняется при продлении полиса**, пока вы сами не попросите снять ограничение.',
        ] },
        { type: 'p', text: 'Не все страховые компании предлагают non-stacked UM, а формулировки полисов различаются. Попросите агента объяснить, как каждый вариант будет работать именно для вашей семьи.' },

        { type: 'h2', text: 'Возможно, вы отказались от UM и не заметили этого' },
        { type: 'p', text: 'Отказаться от UM или выбрать более низкие лимиты можно **только письменно, на форме, утверждённой Управлением по регулированию страхования Флориды (OIR)**. По закону в заголовке этой формы жирным шрифтом (на английском) должно быть предупреждение: подписывая её, вы отказываетесь от ценного покрытия, которое защищает вас и вашу семью, или выбираете лимиты UM ниже лимитов страховки ответственности за травмы, поэтому форму нужно внимательно прочитать.' },
        { type: 'p', text: 'Такую форму легко подписать вместе с остальными бумагами при оформлении полиса и забыть о ней. Из-за трёх правил эта подпись действует годами:' },
        { type: 'ul', items: [
          'Если форму подписал named insured, закон **считает отказ осознанным и сделанным от имени всех**, кто застрахован по полису, включая членов семьи, застрахованных по этому полису.',
          'Отказ или пониженный лимит **переходят на продления и новые полисы** с теми же лимитами ответственности за травмы, пока вы **письменно** не попросите включить UM или повысить лимиты.',
          'Страховая компания обязана **не реже раза в год** напоминать вам о вариантах UM в уведомлении, которое прикладывается к счёту за страховку. Если вы обычно пропускаете эту страницу, её стоит прочитать.',
        ] },

        { type: 'h2', text: 'Как проверить страницу деклараций' },
        { type: 'p', text: 'Страница деклараций (declarations page, или «dec page») — это краткая сводка полиса: машины, водители, покрытия и лимиты. Вот как её проверить:' },
        { type: 'ol', items: [
          'Найдите **действующую** страницу деклараций в документах полиса, в личном кабинете или приложении страховой компании.',
          'Найдите строку **Uninsured Motorist**, **UM**, **UM/UIM** или **Uninsured/Underinsured Motorist Bodily Injury**.',
          '**Сравните лимиты UM с лимитами страховки ответственности за травмы (bodily injury liability).** Если лимит UM ниже, значит, когда-то письменно были выбраны пониженные лимиты.',
          'Посмотрите, указано ли рядом с UM **stacked** или **non-stacked** (иногда «unstacked»), и проверьте каждую машину в списке.',
          'Если **строки UM нет** или там написано rejected (отказ) или none, скорее всего, покрытия UM у вас нет.',
          'Сомневаетесь? Попросите у агента страницу деклараций и копию формы выбора или отказа от UM, если она есть в деле. И помните: чтобы добавить UM или повысить лимиты, нужна **письменная просьба**.',
        ] },

        { type: 'h2', text: 'Что делать, если в вас врезался водитель без страховки' },
        { type: 'ol', items: [
          '**Позаботьтесь о безопасности и звоните 911.** Проверьте, нет ли пострадавших, уходите с проезжей части, только если это безопасно, и оставайтесь на месте. Закон Флориды требует, чтобы водители, попавшие в аварию с пострадавшими, остановились и оставались на месте.',
          '**Сообщите об аварии в полицию.** По закону Флориды полицию нужно уведомить немедленно, если в аварии есть пострадавшие или погибшие либо видимый ущерб имуществу составляет не менее **$2,000** (ст. 316.065 в редакции закона SB 488; до 1 октября 2026 года порог был $500). О наездах с побегом с места (hit-and-run) и авариях с нетрезвым водителем (DUI) тоже нужно сообщать. DFS советует вызывать полицию всегда, когда есть возможность, даже если повреждения кажутся мелкими.',
          '**Обменяйтесь данными.** Водители обязаны сообщить друг другу имя, адрес и регистрационный номер машины, а по просьбе показать водительские права. Попросите данные страховки другого водителя и запишите, если он говорит, что её нет.',
          '**Сфотографируйте** машины, номерные знаки, место аварии, состояние дороги и видимые травмы.',
          '**Запишите данные свидетелей:** имена, адреса и телефоны.',
          '**Запишите данные полицейского протокола.** Имя офицера и номер протокола, и попросите форму обмена информацией между водителями (Driver Exchange of Information). Протокол ДТП может появиться на портале FLHSMV Florida Crash Portal в течение 10 дней.',
          '**Сразу обратитесь за медицинской помощью.** Не откладывайте: PIP оплачивает лечение, только если первичная помощь получена в течение 14 дней.',
          '**Позвоните в страховую компанию и своему агенту** как можно скорее. DFS предупреждает, что страховая может отказать в выплате, если о случае сообщили не вовремя.',
          '**Прежде чем подписывать соглашение или отказ от претензий (release)** со страховой компанией виновника, поговорите с агентом или адвокатом. Если у вас претензия по UIM, закон Флориды требует сначала письменно уведомить вашу страховую компанию по UIM о предлагаемом соглашении.',
        ] },
        { type: 'callout', title: 'Обратите внимание', text: 'Это общая информация о страховании, а не юридическая консультация. По вопросам исков о травмах и судебных разбирательств обратитесь к адвокату.' },

        { type: 'h2', text: 'Не уверены, есть ли у вас UM? Закажите бесплатную проверку страховки' },
        { type: 'p', text: 'Наша [бесплатная проверка страховки за 5 минут](/ru/coverage-check#auto) — самый быстрый способ это выяснить. Лицензированный агент вместе с вами просмотрит ваш автополис: есть ли в нём UM, какие лимиты, stacked или non-stacked, и покажет пробелы. Бесплатно, без обязательств, на русском, английском или испанском.' },
        { type: 'p', text: 'Вы также можете прийти в M&K Agency по адресу 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034, позвонить по телефону (305) 859-3953, почитать об [автостраховании во Florida City](/ru/car-insurance-florida-city) или [запросить расчёт стоимости](/ru/quote).' },
        { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений конкретного полиса. Прежде чем менять страховку, посоветуйтесь с лицензированным агентом.' },
      ],
      faq: [
        { q: 'Обязательна ли во Флориде страховка от незастрахованных водителей?', a: 'Нет. Флорида требует PIP и страховку ответственности за ущерб чужому имуществу. Но если в вашем полисе есть страховка ответственности за травмы других людей, страховая компания обязана включить UM с теми же лимитами, если только named insured не откажется от неё или не выберет более низкие лимиты письменно на форме, утверждённой штатом.' },
        { q: 'Чем UM отличается от UIM?', a: 'UM срабатывает, когда у виновника нет страховки ответственности за травмы других людей. UIM — когда её лимитов не хватает, чтобы покрыть ваш ущерб. Во Флориде оба случая покрывает одно покрытие, которое обычно называется UM или UM/UIM.' },
        { q: 'Оплатит ли UM ремонт моей машины?', a: 'Нет. Во Флориде UM покрывает травмы, в том числе гибель. Ремонт машины оплачивает collision (страховка от столкновений), если она у вас есть.' },
        { q: 'Я отказался от UM несколько лет назад. Можно ли добавить её сейчас?', a: 'Вы можете об этом попросить. По закону Флориды отказ переходит на все продления полиса, пока вы письменно не попросите включить UM или повысить её лимиты. Обсудите с агентом лимиты и выбор между stacked и non-stacked.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 627.727 (2026): покрытие UM/UIM, письменный отказ, вариант non-stacked (на английском)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.727' },
        { label: 'Законы Флориды, ст. 627.736 (2026): обязательные выплаты PIP (на английском)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.736' },
        { label: 'Законы Флориды, ст. 627.733 (2026): обязательное страхование PIP (на английском)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.733' },
        { label: 'Законы Флориды, ст. 324.022 (2026): ответственность за ущерб имуществу (на английском)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/324.022' },
        { label: 'Законы Флориды, ст. 316.065 (2026): аварии и сообщения о них (на английском)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.065' },
        { label: 'Законы Флориды, ст. 316.062 (2026): обязанность предоставить информацию и оказать помощь (на английском)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.062' },
        { label: 'Законы Флориды, ст. 316.027 (2026): аварии с погибшими или пострадавшими (на английском)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/316.027' },
        { label: 'Сенат Флориды: закон SB 488 (2026), глава 2026-39, действует с 1 октября 2026 года (на английском)', url: 'https://www.flsenate.gov/Session/Bill/2026/488' },
        { label: 'FLHSMV: требования к автостраховке во Флориде (на английском)', url: 'https://www.flhsmv.gov/insurance/' },
        { label: 'FLHSMV: протоколы ДТП (на английском)', url: 'https://www.flhsmv.gov/traffic-crash-reports/' },
        { label: 'Департамент финансовых услуг Флориды: обзор личного автострахования (на английском)', url: 'https://myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview' },
        { label: 'Департамент финансовых услуг Флориды: Automobile Insurance Toolkit (PDF, на английском)', url: 'https://www.myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---automobile-insurance-toolkit.pdf' },
      ],
    },
  },
};
