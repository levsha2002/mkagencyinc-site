import type { BlogPost } from '../types';

// Refresh 2026-11-14 (content plan 2026-11, row 2026-11-14): refocused on stacked vs. unstacked UM.
// Facts checked 2026-11-14 (ET) against official sources (raw copies in /workspace/umrefresh/; notes in
// /workspace/articles/uninsured-motorist-coverage-florida_sources.md):
// - s. 627.727 (2026): (1) UM required in policies with BI liability unless a named insured rejects in writing
//   (OIR-approved form, bold heading, conclusive presumption for all insureds, carries to renewals unless a
//   written request, annual notice with the premium notice; over and above PIP etc., no duplication);
//   (2) limits not less than BI unless lower selected; (3)(b) underinsured = uninsured; (6)(a) written notice
//   of a proposed settlement by certified/registered mail to UIM insurers, 30 days; (7) pain and suffering only
//   for injuries described in s. 627.737(2); (8)(a)-(e) the non-stacking option, OIR-approved form, presumed
//   acceptance for all insureds, carries to renewals until the named insured asks to delete the limitations.
// - s. 627.737(2) (2026): threshold injuries. s. 627.736(1) (2026): PIP 80%, $10,000, 14 days, $2,500.
// - DFS Personal Automobile Insurance Overview (stacked by default; 3 x 50/100 = 150/300; lump sum) and
//   DFS Automobile Insurance Toolkit (two decisions; only the stacked form responds in an owned vehicle without UM).
// - FLHSMV insurance page (PIP + PDL, $10,000 each, before registering a vehicle with at least four wheels).
// Deliberately generic: no private insurer is named. No statistics, no prices.
const S = {
  s627727: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.727.html',
  s627737: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.737.html',
  s627736: 'https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.736.html',
  flhsmv: 'https://www.flhsmv.gov/insurance/',
  dfs: 'https://myfloridacfo.com/division/consumers/understanding-insurance/personal-automobile-insurance-overview',
  toolkit: 'https://www.myfloridacfo.com/docs-sf/consumer-services-libraries/consumerservices-documents/understanding-coverage/consumer-guides/english---automobile-insurance-toolkit.pdf',
};

export const post: BlogPost = {
  slug: 'uninsured-motorist-coverage-florida',
  datePublished: '2026-09-26',
  dateModified: '2026-11-14',
  translations: {
    en: {
      title: 'Uninsured Motorist Coverage in Florida: Stacked vs. Unstacked UM, Explained',
      metaTitle: 'Stacked vs. Unstacked UM Coverage in Florida | M&K Agency',
      description: 'Stacked vs. unstacked uninsured motorist coverage in Florida: what UM/UIM pays, how each option works in five common situations and how to check your policy.',
      ogAlt: 'Illustration of three cars on a Florida road, each under a small blue shield, linked by a dotted arc to a larger layered shield with a check mark',
      excerpt: 'Florida UM coverage is stacked unless you accept the unstacked option in writing. Here is what that choice changes for your household, situation by situation.',
      category: 'Auto insurance',
      body: [
        { type: 'p', text: 'If a driver with no insurance, or not enough, injures you in a crash, the coverage that usually responds is on **your own policy**: **Uninsured Motorist coverage (UM, often shown as UM/UIM)**. When you buy it in Florida, you make two decisions, as the Florida Department of Financial Services (DFS) puts it: the **limits**, and whether the coverage is **stacked** or **unstacked** (also called non-stacked).' },
        { type: 'p', text: 'Here is what UM pays, what stacking means under Florida law, and how each option works in real situations.' },

        { type: 'h2', text: 'What UM/UIM coverage pays' },
        { type: 'ul', items: [
          '**Uninsured motorist (UM)** coverage pays for bodily injury, including death, caused by an at-fault driver who has **no bodily injury liability coverage**. It protects you and the other people insured under your policy.',
          '**Underinsured motorist (UIM)** situations are included: Florida law treats a driver whose bodily injury limits are **lower than your damages** as "uninsured" for this coverage.',
          'UM sits **on top of** PIP and other benefits. By law it doesn’t duplicate them; it covers the difference between those benefits and your damages, up to your UM limit.',
          'UM can include **pain and suffering**, but only when the injury meets Florida’s serious-injury threshold: significant and permanent loss of an important bodily function, a permanent injury, significant and permanent scarring or disfigurement, or death.',
          'UM is **injury coverage, not car coverage**. Repairs to your car are a collision coverage question.',
        ] },

        { type: 'h2', text: 'Why UM matters so much in Florida' },
        { type: 'p', text: 'To register a car in Florida you only need **Personal Injury Protection (PIP)** and **Property Damage Liability (PDL)**, at least $10,000 each. Bodily injury liability, the coverage that pays for injuries a driver causes to others, is **not part of that requirement** (see our [Florida minimum car insurance guide](/en/blog/florida-minimum-car-insurance-requirements)).' },
        { type: 'p', text: 'Your PIP helps, but it pays **80% of reasonable, medically necessary expenses up to $10,000**, only if you get initial care **within 14 days**, and medical benefits are limited to **$2,500** if a provider determines you did not have an emergency medical condition. After a serious injury, UM is the coverage designed to fill the gap.' },

        { type: 'h2', text: 'Your UM limits and the written-form rules' },
        { type: 'p', text: 'If your policy includes bodily injury liability, Florida law requires UM **at limits equal to your bodily injury limits**, unless a named insured **rejects it or picks lower limits in writing** on a form approved by the Florida Office of Insurance Regulation (OIR). Limits are written as two numbers: 50/100 means $50,000 per person and $100,000 per accident.' },
        { type: 'p', text: 'A named insured’s signature on that form is **conclusively presumed** to be an informed choice **for everyone** on the policy, and the choice carries over to renewals until you ask for UM or higher limits **in writing**. Your insurer must remind you of your UM options **at least once a year**, with your premium notice.' },

        { type: 'h2', text: 'Stacked vs. unstacked: the basic difference' },
        { type: 'ul', items: [
          '**Stacked UM is the default.** DFS explains that Florida law requires insurers to add together, or "stack," UM unless you choose otherwise in writing. DFS’s example: three vehicles, each with UM limits of 50/100, give you a total of **$150,000 per person and $300,000 per accident**.',
          '**Unstacked (non-stacked) UM is an option**, not a requirement. Insurers **may** offer it, in policy language approved by OIR, and you accept it by signing a form that explains the limitations and says it is an alternative to coverage without them.',
          'Once a named insured signs, the acceptance is presumed to be informed **on behalf of all insureds**, and it **applies to every renewal or replacement policy** until the named insured asks to delete the limitations.',
        ] },

        { type: 'h2', text: 'How unstacked UM works in five common situations' },
        { type: 'p', text: 'Section 627.727(8) of the Florida Statutes spells out what the unstacked option changes. In plain words:' },
        { type: 'ol', items: [
          '**You insure two or more vehicles.** The UM limits for those vehicles are **not added together** for one accident. With stacked UM, they are.',
          '**You are hurt while riding in one of your own insured cars.** The UM available is the coverage **on that car**.',
          '**You are hurt in a car that isn’t owned by you or a family member who lives with you** (for example, a friend’s car). You can use the **highest UM limit on any one** of your vehicles, as excess over the UM on the car you were in.',
          '**You are hurt while in a vehicle you or a live-in family member own, but did not buy UM for.** Unstacked UM **does not apply** to you or those family members. DFS points out that in this situation only the stacked form would respond.',
          '**You are hit as a pedestrian or otherwise not in a vehicle.** You may choose **any one** UM limit from a vehicle on a policy where you are a named insured or a household resident.',
        ] },
        { type: 'callout', title: 'Even with one car', text: 'Situation 4 is why stacking can matter for one-car households too. If anyone in the home owns another vehicle with no UM, ask your agent how each option would respond before you sign. As DFS notes, policy provisions vary by company.' },

        { type: 'h2', text: 'How to check your declarations page' },
        { type: 'ol', items: [
          'Open your **current** declarations page (the "dec page") from your policy documents or online account.',
          'Find the line labeled **Uninsured Motorist**, **UM**, **UM/UIM** or **Uninsured/Underinsured Motorist Bodily Injury**.',
          'Look for **stacked** or **non-stacked** (sometimes "unstacked") next to it, and check every vehicle.',
          'Compare the UM limits with your **bodily injury limits**. Lower UM means a lower limit was selected in writing.',
          'No UM line, or "rejected"? You most likely don’t have UM. Adding it, raising it or removing the unstacked limitation starts with a **written request**.',
        ] },

        { type: 'h2', text: 'If an uninsured driver hits you' },
        { type: 'p', text: 'Get safe, call 911 and get medical care right away (PIP’s 14-day rule applies). Our guide on [what to do after a car accident in Miami-Dade](/en/auto-insurance-after-accident-miami-dade) walks through the report and next steps, and you can keep your card handy with [electronic proof of insurance](/en/blog/electronic-proof-of-insurance-florida). If the other driver has some coverage and you plan to settle with their insurer, Florida law requires **written notice of the proposed settlement**, by certified or registered mail, to your UIM insurer first; it then has 30 days to respond. Talk to your agent or an attorney before you sign a release.' },
        { type: 'callout', title: 'Please note', text: 'This is general insurance information, not legal advice. For injury claims or lawsuits, talk to an attorney.' },

        { type: 'h2', text: 'Want a second look at your UM?' },
        { type: 'p', text: 'Book a [5-minute coverage check](/en/coverage-check#auto) and a licensed agent will go over your UM limits and whether they are stacked, in English, Spanish or Russian. You can also read about [car insurance in Florida City](/en/car-insurance-florida-city), [request a quote](/en/quote) or call M&K Agency at [(305) 859-3953](tel:+13058593953).' },
        { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you change your coverage.' },
      ],
      faq: [
        { q: 'Is UM coverage stacked by default in Florida?', a: 'Yes. Florida law requires stacked UM unless you accept the unstacked (non-stacked) option in writing on a form approved by the Office of Insurance Regulation. Not every insurer offers the unstacked option.' },
        { q: 'Does stacking matter if I have only one car?', a: 'It can. Unstacked UM does not apply if you or a family member living with you is hurt while in a vehicle you own that has no UM. In that case, only stacked UM would respond.' },
        { q: 'Can I switch from unstacked back to stacked?', a: 'Yes. An unstacked choice carries over to renewals until the named insured asks to delete those limitations. Ask your agent to make the change in writing.' },
        { q: 'Is uninsured motorist coverage required in Florida?', a: 'Not for registration. Florida requires PIP and property damage liability. But if your policy includes bodily injury liability, UM must be included at the same limits unless a named insured rejects it or chooses lower limits in writing.' },
      ],
      sources: [
        { label: 'Florida Statutes s. 627.727 (2026): uninsured and underinsured motorist coverage, written rejection, non-stacking option', url: S.s627727 },
        { label: 'Florida Statutes s. 627.737 (2026): tort threshold for pain and suffering', url: S.s627737 },
        { label: 'Florida Statutes s. 627.736 (2026): required personal injury protection (PIP) benefits', url: S.s627736 },
        { label: 'FLHSMV: Florida Insurance Requirements', url: S.flhsmv },
        { label: 'Florida Department of Financial Services: Personal Automobile Insurance Overview (stacked/non-stacked UM)', url: S.dfs },
        { label: 'Florida Department of Financial Services: Automobile Insurance Toolkit (PDF)', url: S.toolkit },
      ],
    },

    es: {
      title: 'Cobertura de motorista sin seguro en Florida: UM acumulable (stacked) o no acumulable (unstacked)',
      metaTitle: 'UM acumulable o no acumulable en Florida | M&K Agency',
      description: 'UM acumulable o no acumulable en Florida: qué paga la cobertura de motorista sin seguro, cómo responde cada opción en cinco casos y cómo revisar su póliza.',
      ogAlt: 'Ilustración de tres carros en una carretera de Florida, cada uno bajo un pequeño escudo azul, unidos por un arco punteado a un escudo grande en capas con una marca de verificación',
      excerpt: 'En Florida la UM es acumulable, a menos que usted acepte por escrito la opción no acumulable. Le explicamos qué cambia esa decisión para su familia, caso por caso.',
      category: 'Seguro de auto',
      body: [
        { type: 'p', text: 'Si un conductor sin seguro, o con muy poco seguro, lo lesiona en un choque, la cobertura que normalmente responde está en **su propia póliza**: la **cobertura de motorista sin seguro (UM, que suele aparecer como UM/UIM)**. Según el Departamento de Servicios Financieros de Florida (DFS), al comprarla usted toma dos decisiones: los **límites** y si la cobertura será **acumulable (stacked)** o **no acumulable (unstacked o non-stacked)**.' },
        { type: 'p', text: 'Le explicamos qué paga la UM, qué significa "acumular" según la ley de Florida y cómo funciona cada opción en situaciones reales.' },

        { type: 'h2', text: 'Qué paga la cobertura UM/UIM' },
        { type: 'ul', items: [
          'La **UM** paga lesiones corporales, incluida la muerte, causadas por un conductor culpable que **no tiene seguro de responsabilidad por lesiones corporales**. Lo protege a usted y a los demás asegurados de su póliza.',
          'También cubre al conductor con **seguro insuficiente (UIM)**: la ley de Florida considera "sin seguro" al conductor cuyos límites de lesiones **no alcanzan para cubrir sus daños**.',
          'La UM va **por encima** del PIP y de otros beneficios. Por ley no los duplica: cubre la diferencia entre esos beneficios y sus daños, hasta su límite de UM.',
          'La UM puede incluir **dolor y sufrimiento**, pero solo si la lesión supera el umbral de lesión grave de Florida: pérdida importante y permanente de una función corporal, lesión permanente, cicatrices o desfiguración importantes y permanentes, o muerte.',
          'La UM **cubre lesiones, no su carro**; eso le toca a la cobertura de choque (collision).',
        ] },

        { type: 'h2', text: 'Por qué la UM pesa tanto en Florida' },
        { type: 'p', text: 'Para registrar un carro en Florida solo se exigen el **PIP (protección contra lesiones personales)** y el **PDL (responsabilidad por daños a la propiedad)**, con un mínimo de $10,000 cada uno. El seguro de lesiones corporales a terceros **no forma parte de ese requisito** (vea nuestra [guía del seguro mínimo en Florida](/es/blog/florida-minimum-car-insurance-requirements)).' },
        { type: 'p', text: 'El PIP paga el **80% de los gastos médicos razonables y necesarios hasta $10,000**, solo si recibe atención inicial **dentro de los 14 días**, y apenas **$2,500** si un proveedor determina que no hubo una condición médica de emergencia. La UM está pensada para cubrir lo que falta.' },

        { type: 'h2', text: 'Sus límites de UM y las reglas del formulario por escrito' },
        { type: 'p', text: 'Si su póliza tiene responsabilidad por lesiones corporales, la ley exige la UM **con los mismos límites**, a menos que un asegurado nombrado **la rechace o elija límites más bajos por escrito**, en un formulario aprobado por la Oficina de Regulación de Seguros de Florida (OIR). Los límites se escriben con dos números: 50/100 quiere decir $50,000 por persona y $100,000 por accidente.' },
        { type: 'p', text: 'Si el asegurado nombrado firma ese formulario, la ley **presume de forma definitiva** que fue una decisión informada **para todos** los asegurados, y esa decisión pasa a las renovaciones hasta que usted pida la UM o límites más altos **por escrito**. Su aseguradora debe recordarle sus opciones de UM **al menos una vez al año**, junto con el aviso de prima.' },

        { type: 'h2', text: 'Acumulable o no acumulable: la diferencia básica' },
        { type: 'ul', items: [
          '**La UM acumulable es la opción predeterminada.** El DFS explica que la ley de Florida obliga a las aseguradoras a sumar ("acumular") la UM, salvo que usted elija otra cosa por escrito. Su ejemplo: tres vehículos con límites de UM de 50/100 cada uno dan un total de **$150,000 por persona y $300,000 por accidente**.',
          '**La UM no acumulable es una opción**, no una obligación. Las aseguradoras **pueden** ofrecerla con una redacción aprobada por la OIR, y usted la acepta firmando un formulario que explica sus limitaciones.',
          'Esa firma se presume informada **en nombre de todos los asegurados** y **se aplica a cada renovación**, hasta que el asegurado nombrado pida eliminar las limitaciones.',
        ] },

        { type: 'h2', text: 'Cómo funciona la UM no acumulable en cinco casos comunes' },
        { type: 'p', text: 'Esto es lo que cambia, según la sección 627.727(8) de los Estatutos de Florida:' },
        { type: 'ol', items: [
          '**Tiene dos o más vehículos asegurados.** Los límites de UM de esos vehículos **no se suman** para un mismo accidente. Con la UM acumulable, sí.',
          '**Se lesiona mientras va en uno de sus carros asegurados.** La UM disponible es la **de ese carro**.',
          '**Se lesiona en un carro que no es suyo ni de un familiar que vive con usted** (por ejemplo, el carro de un amigo). Puede usar el **límite de UM más alto de uno** de sus vehículos, en exceso de la UM del carro en el que iba.',
          '**Se lesiona en un vehículo suyo o de un familiar que vive con usted, pero que no tiene UM.** La UM no acumulable **no aplica** a usted ni a esos familiares. Según el DFS, ahí solo respondería la acumulable.',
          '**Lo atropellan como peatón o no va en ningún vehículo.** Puede elegir **uno** de los límites de UM de un vehículo de una póliza donde usted sea asegurado nombrado o residente del hogar.',
        ] },
        { type: 'callout', title: 'Aunque tenga un solo carro', text: 'Por el caso 4, acumular puede importar aunque tenga un solo carro asegurado. Si alguien del hogar tiene otro vehículo sin UM, pregúntele a su agente cómo respondería cada opción antes de firmar. Como advierte el DFS, las condiciones de las pólizas varían según la compañía.' },

        { type: 'h2', text: 'Cómo revisar su página de declaraciones' },
        { type: 'ol', items: [
          'Abra su página de declaraciones **vigente** ("dec page").',
          'Busque la línea **Uninsured Motorist**, **UM**, **UM/UIM** o **Uninsured/Underinsured Motorist Bodily Injury**.',
          'Fíjese si al lado dice **stacked** (acumulable) o **non-stacked** / "unstacked" (no acumulable), y revise cada vehículo.',
          'Compare los límites de UM con sus **límites de lesiones corporales**. Si la UM es más baja, en algún momento se eligió por escrito un límite menor.',
          '¿No aparece la UM o dice "rejected"? Lo más probable es que no la tenga. Para agregarla, subirla o quitar la limitación, haga una **solicitud por escrito**.',
        ] },

        { type: 'h2', text: 'Si lo choca un conductor sin seguro' },
        { type: 'p', text: 'Póngase a salvo, llame al 911 y busque atención médica enseguida (rige la regla de 14 días del PIP). Vea [qué hacer después de un choque en Miami-Dade](/es/auto-insurance-after-accident-miami-dade) y lleve su [prueba electrónica de seguro](/es/blog/electronic-proof-of-insurance-florida). Si piensa llegar a un acuerdo con la aseguradora del otro conductor, la ley exige enviar antes un **aviso por escrito del acuerdo propuesto**, por correo certificado o registrado, a su aseguradora de UIM, que tiene 30 días para responder. Antes de firmar una liberación (release), consulte a su agente o a un abogado.' },
        { type: 'callout', title: 'Importante', text: 'Esto es información general sobre seguros, no asesoría legal. Para reclamos por lesiones, consulte con un abogado.' },

        { type: 'h2', text: '¿Quiere que revisemos su UM?' },
        { type: 'p', text: 'Reserve una [revisión de cobertura de 5 minutos](/es/coverage-check#auto): un agente licenciado repasará sus límites de UM y si son acumulables, en español, inglés o ruso. Lea también sobre el [seguro de auto en Florida City](/es/car-insurance-florida-city), [pedir una cotización](/es/quote) o llamar a M&K Agency al [(305) 859-3953](tel:+13058593953).' },
        { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza. Hable con un agente licenciado antes de cambiar su cobertura.' },
      ],
      faq: [
        { q: '¿En Florida la UM es acumulable de manera predeterminada?', a: 'Sí. La ley de Florida exige la UM acumulable, salvo que usted acepte por escrito la opción no acumulable en un formulario aprobado por la Oficina de Regulación de Seguros. No todas las aseguradoras ofrecen la opción no acumulable.' },
        { q: '¿Importa acumular si tengo un solo carro?', a: 'Puede importar. La UM no acumulable no aplica si usted o un familiar que vive con usted se lesiona en un vehículo de su propiedad que no tiene UM. En ese caso solo respondería la UM acumulable.' },
        { q: '¿Puedo volver de no acumulable a acumulable?', a: 'Sí. La opción no acumulable se mantiene en las renovaciones hasta que el asegurado nombrado pida eliminar esas limitaciones. Haga el cambio por escrito.' },
        { q: '¿Es obligatoria la cobertura de motorista sin seguro en Florida?', a: 'No para registrar el carro, que solo exige PIP y PDL. Pero si su póliza incluye responsabilidad por lesiones corporales, la UM debe incluirse con los mismos límites, a menos que un asegurado nombrado la rechace o elija límites más bajos por escrito.' },
      ],
      sources: [
        { label: 'Estatutos de Florida, sección 627.727 (2026): motorista sin seguro o con seguro insuficiente, rechazo por escrito, opción no acumulable (en inglés)', url: S.s627727 },
        { label: 'Estatutos de Florida, sección 627.737 (2026): umbral para reclamar dolor y sufrimiento (en inglés)', url: S.s627737 },
        { label: 'Estatutos de Florida, sección 627.736 (2026): beneficios obligatorios de PIP (en inglés)', url: S.s627736 },
        { label: 'FLHSMV: requisitos de seguro en Florida', url: S.flhsmv },
        { label: 'Departamento de Servicios Financieros de Florida: resumen del seguro de auto personal, UM acumulable y no acumulable (en inglés)', url: S.dfs },
        { label: 'Departamento de Servicios Financieros de Florida: Automobile Insurance Toolkit (PDF, en inglés)', url: S.toolkit },
      ],
    },

    ru: {
      title: 'Страховка UM во Флориде: stacked или unstacked — в чём разница',
      metaTitle: 'UM во Флориде: stacked или unstacked | M&K Agency',
      description: 'Stacked или unstacked UM во Флориде: что оплачивает страховка от незастрахованных водителей, как работает каждый вариант в пяти ситуациях и как проверить полис.',
      ogAlt: 'Иллюстрация: три машины на дороге во Флориде, над каждой маленький синий щит, пунктирная дуга ведёт к большому многослойному щиту с галочкой',
      excerpt: 'Во Флориде UM по умолчанию суммируется (stacked), если вы письменно не выбрали вариант unstacked. Разбираем, что меняет этот выбор для вашей семьи, ситуация за ситуацией.',
      category: 'Автострахование',
      body: [
        { type: 'p', text: 'Если вас травмировал в аварии водитель без страховки или с недостаточной страховкой, платить обычно будет **ваш собственный полис**, а точнее — **страховка от незастрахованных водителей (Uninsured Motorist, UM, в полисе часто UM/UIM)**. Как объясняет Департамент финансовых услуг Флориды (DFS), покупая UM, вы принимаете два решения: какие будут **лимиты** и будет ли покрытие **суммируемым (stacked)** или **несуммируемым (unstacked, non-stacked)**.' },
        { type: 'p', text: 'Рассказываем, что оплачивает UM, что значит «суммирование» по закону Флориды и как каждый вариант работает в жизненных ситуациях.' },

        { type: 'h2', text: 'Что оплачивает UM/UIM' },
        { type: 'ul', items: [
          '**UM** оплачивает травмы, в том числе гибель, которые причинил виновный водитель **без страховки ответственности за травмы других людей** (bodily injury liability). Покрытие защищает вас и других застрахованных по вашему полису.',
          'Сюда же входит **недостаточная страховка (UIM)**: закон Флориды считает «незастрахованным» водителя, у которого лимиты по травмам **меньше вашего ущерба**.',
          'UM действует **поверх** PIP и других выплат. По закону оно их не дублирует, а покрывает разницу между ними и вашим ущербом в пределах лимита UM. DFS отмечает, что выплата обычно производится одной суммой, когда понятен объём лечения.',
          'UM может включать **компенсацию боли и страданий** (pain and suffering), но только если травма достигает порога серьёзной травмы по закону Флориды: значительная и необратимая потеря важной функции организма, необратимая травма, значительные и необратимые рубцы или обезображивание либо гибель.',
          'UM — это **покрытие травм, а не машины**. Ремонт автомобиля — вопрос страховки collision.',
        ] },

        { type: 'h2', text: 'Почему UM так важна во Флориде' },
        { type: 'p', text: 'Чтобы зарегистрировать машину во Флориде, нужны только **PIP** (страхование от травм) и **PDL** (ответственность за ущерб чужому имуществу), минимум по $10,000. Страховка ответственности за травмы других людей **в это требование не входит** (подробнее — в нашей [статье о минимальной автостраховке](/ru/blog/florida-minimum-car-insurance-requirements)). Значит, у водителя, который в вас врезался, может не оказаться ничего на оплату ваших травм.' },
        { type: 'p', text: 'PIP помогает, но оплачивает **80% разумных и необходимых медицинских расходов, не больше $10,000**, только если первичную помощь вы получили **в течение 14 дней**, а если врач решит, что неотложного состояния не было, медицинские выплаты ограничены **$2,500**. После серьёзной травмы этот пробел и закрывает UM.' },

        { type: 'h2', text: 'Лимиты UM и правила письменного выбора' },
        { type: 'p', text: 'Если в полисе есть страховка ответственности за травмы, закон требует включить UM **с такими же лимитами**, если только named insured (застрахованный, указанный в полисе) **не откажется от неё или не выберет более низкие лимиты письменно** на форме, утверждённой Управлением по регулированию страхования Флориды (OIR). Лимиты записываются двумя числами: 50/100 — это $50,000 на человека и $100,000 на аварию.' },
        { type: 'p', text: 'Подпись named insured на такой форме **безусловно считается** осознанным решением **за всех** застрахованных, и это решение переходит на продления, пока вы **письменно** не попросите включить UM или повысить лимиты. Страховая компания обязана **не реже раза в год** напоминать о вариантах UM вместе с уведомлением о взносе.' },

        { type: 'h2', text: 'Stacked и unstacked: главное отличие' },
        { type: 'ul', items: [
          '**Stacked UM — вариант по умолчанию.** DFS поясняет: закон Флориды требует, чтобы страховые компании складывали («стекали») лимиты UM, если вы письменно не выбрали иное. Пример DFS: три машины с лимитом UM 50/100 у каждой дают в сумме **$150,000 на человека и $300,000 на аварию**.',
          '**Unstacked (non-stacked) UM — это опция**, а не обязанность. Страховые компании **могут** её предлагать в формулировках, утверждённых OIR, а вы соглашаетесь, подписывая форму, где описаны ограничения и сказано, что это альтернатива покрытию без них.',
          'После подписи named insured согласие считается осознанным **от имени всех застрахованных** и **действует при каждом продлении или замене полиса**, пока named insured не попросит снять эти ограничения.',
        ] },

        { type: 'h2', text: 'Как работает unstacked UM в пяти типичных ситуациях' },
        { type: 'p', text: 'Статья 627.727(8) Законов Флориды подробно описывает, что меняет вариант unstacked. Простыми словами:' },
        { type: 'ol', items: [
          '**У вас застраховано две машины или больше.** Лимиты UM этих машин **не складываются** в одной аварии. При stacked — складываются.',
          '**Вы пострадали в одной из своих застрахованных машин.** Доступно покрытие UM **именно этой машины**.',
          '**Вы пострадали в машине, которая не принадлежит ни вам, ни члену семьи, живущему с вами** (например, в машине друга). Можно использовать **самый высокий лимит UM любой одной** из ваших машин — сверх UM той машины, в которой вы ехали.',
          '**Вы пострадали в машине, которая принадлежит вам или живущему с вами родственнику, но не застрахована по UM.** Unstacked UM в этом случае **не действует** ни для вас, ни для этих родственников. DFS отмечает, что здесь сработал бы только stacked.',
          '**Вас сбили как пешехода или вы не находились в машине.** Можно выбрать **один** лимит UM любой машины по полису, где вы named insured или живущий в доме член семьи.',
        ] },
        { type: 'callout', title: 'Даже если машина одна', text: 'Ситуация 4 объясняет, почему суммирование может быть важно и для семьи с одной застрахованной машиной. Если у кого-то в доме есть другая машина без UM, спросите агента, как сработает каждый вариант, до того как подписывать форму. Как напоминает DFS, условия полисов у разных компаний различаются.' },

        { type: 'h2', text: 'Как проверить страницу деклараций' },
        { type: 'ol', items: [
          'Откройте **действующую** страницу деклараций (declarations page, «dec page») в документах полиса или в личном кабинете.',
          'Найдите строку **Uninsured Motorist**, **UM**, **UM/UIM** или **Uninsured/Underinsured Motorist Bodily Injury**.',
          'Посмотрите, написано ли рядом **stacked** или **non-stacked** (иногда «unstacked»), и проверьте каждую машину.',
          'Сравните лимиты UM с **лимитами ответственности за травмы**. Если UM ниже, значит, когда-то письменно выбрали пониженный лимит.',
          'Строки UM нет или написано «rejected»? Скорее всего, UM у вас нет. Чтобы добавить её, повысить лимиты или снять ограничение unstacked, начните с **письменной просьбы**.',
        ] },

        { type: 'h2', text: 'Если в вас врезался водитель без страховки' },
        { type: 'p', text: 'Позаботьтесь о безопасности, звоните 911 и сразу обращайтесь за медицинской помощью (действует правило 14 дней для PIP). В нашем гиде [что делать после ДТП в Miami-Dade](/ru/auto-insurance-after-accident-miami-dade) описаны протокол и дальнейшие шаги, а страховую карточку можно держать в телефоне — см. [электронное подтверждение страховки](/ru/blog/electronic-proof-of-insurance-florida). Если у виновника есть хоть какая-то страховка и вы собираетесь заключить соглашение с его страховой компанией, закон Флориды требует сначала отправить вашей страховой компании по UIM **письменное уведомление о предлагаемом соглашении** заказным письмом (certified или registered mail); у неё есть 30 дней на ответ. Прежде чем подписывать отказ от претензий (release), поговорите с агентом или адвокатом.' },
        { type: 'callout', title: 'Обратите внимание', text: 'Это общая информация о страховании, а не юридическая консультация. По вопросам исков о травмах обратитесь к адвокату.' },

        { type: 'h2', text: 'Хотите, чтобы мы посмотрели вашу UM?' },
        { type: 'p', text: 'Запишитесь на [5-минутную проверку страховки](/ru/coverage-check#auto): лицензированный агент разберёт с вами лимиты UM и то, суммируются ли они, — на русском, английском или испанском. Можно также почитать об [автостраховании во Florida City](/ru/car-insurance-florida-city), [оставить заявку](/ru/quote) или позвонить в M&K Agency по телефону [(305) 859-3953](tel:+13058593953).' },
        { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений конкретного полиса. Прежде чем менять страховку, посоветуйтесь с лицензированным агентом.' },
      ],
      faq: [
        { q: 'UM во Флориде по умолчанию stacked?', a: 'Да. Закон Флориды требует суммируемую UM, если вы письменно не согласились на вариант unstacked (non-stacked) на форме, утверждённой Управлением по регулированию страхования. Не все страховые компании предлагают unstacked.' },
        { q: 'Важно ли суммирование, если у меня одна машина?', a: 'Может быть важно. Unstacked UM не действует, если вы или живущий с вами член семьи пострадали в принадлежащей вам машине без UM. В такой ситуации сработала бы только stacked UM.' },
        { q: 'Можно ли вернуться с unstacked на stacked?', a: 'Да. Выбор unstacked сохраняется при продлениях, пока named insured не попросит снять эти ограничения. Попросите агента оформить изменение письменно.' },
        { q: 'Обязательна ли во Флориде страховка от незастрахованных водителей?', a: 'Для регистрации машины — нет. Флорида требует PIP и ответственность за ущерб чужому имуществу. Но если в полисе есть страховка ответственности за травмы, UM должна быть включена с теми же лимитами, если named insured письменно не отказался от неё или не выбрал более низкие лимиты.' },
      ],
      sources: [
        { label: 'Законы Флориды, ст. 627.727 (2026): UM/UIM, письменный отказ, вариант non-stacked (на английском)', url: S.s627727 },
        { label: 'Законы Флориды, ст. 627.737 (2026): порог для компенсации боли и страданий (на английском)', url: S.s627737 },
        { label: 'Законы Флориды, ст. 627.736 (2026): обязательные выплаты PIP (на английском)', url: S.s627736 },
        { label: 'FLHSMV: требования к автостраховке во Флориде (на английском)', url: S.flhsmv },
        { label: 'Департамент финансовых услуг Флориды: обзор личного автострахования, stacked и non-stacked UM (на английском)', url: S.dfs },
        { label: 'Департамент финансовых услуг Флориды: Automobile Insurance Toolkit (PDF, на английском)', url: S.toolkit },
      ],
    },
  },
};
