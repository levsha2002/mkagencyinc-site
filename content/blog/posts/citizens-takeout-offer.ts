import type { BlogPost } from '../types';

// Facts checked 2026-09-26 against citizensfla.com/depoppl, /depopulation,
// the Citizens "Policyholder Choice" article, floir.gov take-out companies page,
// s. 627.351(6)(c)5. and (6)(ii) F.S. and s. 627.701(3) F.S. (2026).
// Deliberately generic: no private insurer is named.
export const post: BlogPost = {
  slug: 'citizens-takeout-offer',
  datePublished: '2026-09-26',
  translations: {
    en: {
      title: 'Got a Citizens Take-Out Offer? How to Compare It Before You Accept',
      metaTitle: 'Citizens Take-Out Offer? How to Compare It | M&K Agency',
      description: 'Got a Citizens take-out letter? How the 20% rule works, what happens if you miss the deadline, and a checklist to compare the offer with your Citizens policy.',
      ogAlt: 'Suburban Florida home with an open mailbox and an envelope at the front door',
      excerpt: 'A take-out letter from Citizens comes with a deadline, and doing nothing is a decision. Here is how the 20% rule works and what to compare before you accept.',
      category: 'Homeowners insurance',
      body: [
        { type: 'p', text: 'Citizens Property Insurance Corporation is Florida’s state-created insurer, meant to be the insurer of last resort. Florida law requires it to move policies back to the private market through its **Depopulation Program**, and insurers approved by the Florida Office of Insurance Regulation (OIR) can ask to "take out" Citizens policies. If one or more of them picked yours, you will get a Depopulation Packet from Citizens.' },
        { type: 'p', text: 'Don’t file it away. The packet has a deadline, and if you do nothing, Citizens decides for you. Here is how the process works and how to compare an offer with your current policy before you choose.' },

        { type: 'h2', text: 'Which letter did you get?' },
        { type: 'p', text: 'Citizens sends one of two kinds of letters, and the difference matters:' },
        { type: 'ul', items: [
          '**Policyholder Choice Offer:** your policy was selected by one or more private insurers, and you are still **eligible to stay** with Citizens if you want to.',
          '**Policyholder Depopulation Offer:** at least one offer makes you **ineligible to stay**. You can choose among the offers (or find other private coverage with your agent), but remaining with Citizens is not an option.',
        ] },
        { type: 'p', text: 'Either way, the packet lists every available offer with its estimated renewal premium next to the estimated renewal premium for your Citizens policy, and it includes coverage worksheets for each one. Those worksheets are the most useful pages in the envelope.' },

        { type: 'h2', text: 'The 20% rule, in plain English' },
        { type: 'p', text: 'For a primary residence, Florida law says that if a take-out offer’s estimated premium is **not more than 20% higher** than Citizens’ estimated renewal premium for comparable coverage, the home is **no longer eligible** for Citizens. If every offer comes in more than 20% higher, you may stay with Citizens, but only if you actively register that choice.' },
        { type: 'p', text: 'The rule comes back at renewal. After a private insurer assumes your policy, it sends you a renewal offer before the term ends. If that renewal premium is within 20% of Citizens’ premium for comparable coverage, you cannot go back to Citizens, even if you turn the renewal down. Rules for homes that are not a primary residence differ in some details, so ask your agent if the property is a second home or a rental.' },

        { type: 'h2', text: 'Deadlines and what happens if you do nothing' },
        { type: 'ul', items: [
          '**Register a choice by the date on your Offer Form.** You can do it online with your policy number and the registration code on the form, or your agent can submit it for you.',
          '**Silence is a choice.** If no choice is registered by the deadline, Citizens assigns your policy to the private insurer that offered the lowest estimated premium, whether or not you were eligible to stay.',
          '**Assumptions are final.** There is no longer a 30-day window to return to Citizens after an assumption.',
          '**Your current term doesn’t change.** If your policy is assumed, your existing premium and coverage stay the same until the current term expires.',
          '**Staying isn’t permanent.** If you opt to remain with Citizens, you may receive more offers later, and you must respond to each one to keep your Citizens policy.',
        ] },

        { type: 'h2', text: 'What to compare, line by line' },
        { type: 'p', text: 'The estimated premium is only one line. Use the coverage worksheets to compare these items side by side:' },
        { type: 'ol', items: [
          '**Dwelling limit (Coverage A).** Is it enough to rebuild your home at today’s construction costs, and does it match what your Citizens policy has now?',
          '**Hurricane deductible.** Florida law requires insurers to offer hurricane deductibles of $500 and 2%, 5% and 10% of the dwelling limit, with some exceptions for higher-value homes. Turn the percentage into dollars: on a $300,000 dwelling limit, a 2% hurricane deductible is $6,000 and a 5% deductible is $15,000 out of your pocket before the policy pays for a hurricane claim.',
          '**All-other-perils deductible** for things like fire, theft or a burst pipe.',
          '**Roof settlement.** Is roof damage paid at replacement cost, actual cash value, or on a schedule based on the roof’s age?',
          '**Water damage.** Look for limits or exclusions on non-weather water damage and on mold.',
          '**Personal property.** Replacement cost or actual cash value, and the limit.',
          '**Loss of use.** How much is available for a hotel or rental if you can’t live at home after a covered loss?',
          '**Liability and medical payments** limits.',
          '**Ordinance or law** coverage, which pays toward bringing a damaged home up to current building code.',
          '**Other structures and screened enclosures,** plus sinkhole versus catastrophic ground cover collapse coverage.',
          '**Endorsements you have today.** Make sure nothing you rely on quietly disappears in the new policy.',
        ] },
        { type: 'callout', title: 'Remember: these are estimates', text: 'Premiums in the packet are estimated renewal premiums. The final premium, and the exact coverage, are set when the policy is issued or renewed.' },

        { type: 'h2', text: 'Look beyond the premium' },
        { type: 'ul', items: [
          '**Check the company.** OIR keeps a public [take-out companies page](https://floir.gov/property-casualty/take-out-companies) listing each approved insurer, its approval date, assumption dates and consent order. OIR says it provides this so policyholders can review financial status and coverage details before deciding.',
          '**Assessment risk.** Citizens explains that its policyholders can be required to pay an assessment if Citizens runs short of money to pay claims after a major hurricane or series of storms, and that private-market policyholders can be subject to a much lower assessment.',
          '**Flood insurance.** Citizens requires flood insurance on its personal residential policies with wind coverage, fully phased in for policies effective on or after January 1, 2027 ([here is what that means](/en/blog/citizens-flood-insurance-requirement-2027)). Citizens notes that private insurers are not required to demand flood insurance for eligibility, so compare the Citizens premium plus a flood policy against the private offer. Don’t drop flood coverage just because a new policy doesn’t require it. In South Miami-Dade, [flood coverage](/en/flood-insurance-homestead-fl) is worth keeping.',
        ] },

        { type: 'h2', text: 'Questions to ask before you accept' },
        { type: 'ol', items: [
          'What is my exact deadline, and am I eligible to stay with Citizens?',
          'Which coverages are broader, narrower or missing compared with my Citizens policy?',
          'What is my hurricane deductible in dollars, not just as a percentage?',
          'How is my roof covered, given its age and material?',
          'If I switch, who needs the new declarations page? If your premium is paid through a mortgage escrow account, let your lender know.',
        ] },

        { type: 'h2', text: 'How M&K Agency can help' },
        { type: 'p', text: 'Bring your Depopulation Packet and your current declarations page to our office at 33550 S Dixie Hwy, Suite 102, Florida City, or call (305) 859-3953. A licensed agent will go through the coverage worksheets with you in English, Spanish or Russian and explain the trade-offs in dollars, before your deadline. We are open Monday through Friday, 9 to 6, and Saturdays by appointment. You can also review your [homeowners insurance options](/en/homeowners-insurance-florida-city) or [request a quote](/en/quote).' },
        { type: 'p', text: 'Coverage depends on the terms, limits and exclusions of each policy. Talk with a licensed agent before you accept or decline an offer.' },
      ],
      faq: [
        { q: 'Can I say no to a Citizens take-out offer?', a: 'Only if you are eligible to stay, meaning every offer’s estimated premium is more than 20% above Citizens’ estimated renewal premium for comparable coverage. Even then you must register your choice by the deadline; otherwise your policy goes to the lowest-premium offer.' },
        { q: 'Can I return to Citizens after my policy is assumed?', a: 'Not right away. The old 30-day post-assumption return period no longer exists. At the new insurer’s renewal, the 20% rule is applied again.' },
        { q: 'Does my premium change the day my policy is assumed?', a: 'No. Citizens says your current premium and coverage stay the same until your policy term expires; the new insurer then offers a renewal.' },
      ],
      sources: [
        { label: 'Citizens Property Insurance Corporation: Personal Lines Depopulation Program', url: 'https://www.citizensfla.com/depoppl' },
        { label: 'Citizens: Depopulation overview (assessments, coverage worksheets)', url: 'https://www.citizensfla.com/depopulation' },
        { label: 'Citizens: Making the Most of Depopulation with Policyholder Choice', url: 'https://www.citizensfla.com/-/making-the-most-of-depopulation-with-policyholder-choice' },
        { label: 'Citizens: New Flood Requirements Begin January 1', url: 'https://www.citizensfla.com/-/new-flood-requirements-begin-january-1' },
        { label: 'Florida Office of Insurance Regulation: Take-Out Companies', url: 'https://floir.gov/property-casualty/take-out-companies' },
        { label: 'Florida Statutes s. 627.351 (2026), paragraphs (6)(c)5. and (6)(ii)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.351' },
        { label: 'Florida Statutes s. 627.701 (2026), hurricane deductible options', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.701' },
      ],
    },
    es: {
      title: '¿Recibió una oferta de take-out de Citizens? Cómo compararla antes de aceptar',
      metaTitle: 'Oferta de take-out de Citizens: cómo compararla | M&K Agency',
      description: '¿Le llegó una carta de take-out de Citizens? La regla del 20%, qué pasa si no responde a tiempo y cómo comparar la oferta con su póliza actual.',
      ogAlt: 'Casa suburbana de Florida con un buzón abierto y un sobre en la puerta principal',
      excerpt: 'Una carta de take-out de Citizens tiene una fecha límite, y no hacer nada también es una decisión. Así funciona la regla del 20% y qué comparar antes de aceptar.',
      category: 'Seguro de casa',
      body: [
        { type: 'p', text: 'Citizens Property Insurance Corporation es la aseguradora creada por el estado de Florida, pensada como la aseguradora de último recurso. La ley de Florida le exige devolver pólizas al mercado privado mediante su **Programa de Despoblación** (Depopulation Program), y las aseguradoras aprobadas por la Oficina de Regulación de Seguros de Florida (OIR) pueden pedir "retirar" (take out) pólizas de Citizens. Si una o más eligieron la suya, recibirá un Paquete de Despoblación de Citizens.' },
        { type: 'p', text: 'No lo archive. El paquete tiene una fecha límite, y si no hace nada, Citizens decide por usted. Así funciona el proceso y cómo comparar una oferta con su póliza actual antes de elegir.' },

        { type: 'h2', text: '¿Qué carta recibió?' },
        { type: 'p', text: 'Citizens envía uno de dos tipos de cartas, y la diferencia importa:' },
        { type: 'ul', items: [
          '**Oferta de Elección del Asegurado (Policyholder Choice Offer):** su póliza fue seleccionada por una o más aseguradoras privadas, y usted aún es **elegible para quedarse** en Citizens si lo desea.',
          '**Oferta de Despoblación del Asegurado (Policyholder Depopulation Offer):** al menos una oferta hace que usted **no sea elegible para quedarse**. Puede elegir entre las ofertas (o buscar otra cobertura privada con su agente), pero quedarse en Citizens no es una opción.',
        ] },
        { type: 'p', text: 'En ambos casos, el paquete enumera cada oferta disponible con su prima estimada de renovación junto a la prima estimada de renovación de su póliza de Citizens, e incluye hojas de comparación de cobertura de cada una. Esas hojas son las páginas más útiles del sobre.' },

        { type: 'h2', text: 'La regla del 20%, en lenguaje simple' },
        { type: 'p', text: 'Para una residencia principal, la ley de Florida dice que si la prima estimada de una oferta de take-out **no supera en más del 20%** la prima estimada de renovación de Citizens por una cobertura comparable, la vivienda **ya no es elegible** para Citizens. Si todas las ofertas superan ese 20%, puede quedarse en Citizens, pero solo si registra activamente esa elección.' },
        { type: 'p', text: 'La regla vuelve a aplicarse en la renovación. Después de que una aseguradora privada asuma su póliza, le enviará una oferta de renovación antes de que termine el plazo. Si esa prima de renovación está dentro del 20% de la prima de Citizens por una cobertura comparable, no podrá volver a Citizens, aunque rechace la renovación. Las reglas para viviendas que no son residencia principal difieren en algunos detalles; pregunte a su agente si la propiedad es una segunda vivienda o un alquiler.' },

        { type: 'h2', text: 'Fechas límite y qué pasa si no hace nada' },
        { type: 'ul', items: [
          '**Registre una elección antes de la fecha indicada en su formulario de oferta.** Puede hacerlo en línea con su número de póliza y el código de registro del formulario, o su agente puede enviarla por usted.',
          '**El silencio es una elección.** Si no se registra ninguna elección antes de la fecha límite, Citizens asigna su póliza a la aseguradora privada que ofreció la prima estimada más baja, fuera o no elegible para quedarse.',
          '**Las asunciones son definitivas.** Ya no existe el plazo de 30 días para volver a Citizens después de una asunción.',
          '**Su plazo actual no cambia.** Si su póliza es asumida, su prima y cobertura actuales se mantienen hasta que expire el plazo vigente.',
          '**Quedarse no es permanente.** Si opta por permanecer en Citizens, puede recibir más ofertas después, y debe responder a cada una para conservar su póliza de Citizens.',
        ] },

        { type: 'h2', text: 'Qué comparar, línea por línea' },
        { type: 'p', text: 'La prima estimada es solo una línea. Use las hojas de comparación de cobertura para contrastar estos puntos lado a lado:' },
        { type: 'ol', items: [
          '**Límite de la vivienda (Cobertura A).** ¿Alcanza para reconstruir su casa a los costos de construcción de hoy, y coincide con lo que tiene ahora su póliza de Citizens?',
          '**Deducible por huracán.** La ley de Florida exige que las aseguradoras ofrezcan deducibles por huracán de $500 y de 2%, 5% y 10% del límite de la vivienda, con algunas excepciones para viviendas de alto valor. Convierta el porcentaje a dólares: con un límite de vivienda de $300,000, un deducible del 2% son $6,000 y uno del 5% son $15,000 de su bolsillo antes de que la póliza pague un reclamo por huracán.',
          '**Deducible por otros riesgos** para cosas como incendio, robo o una tubería rota.',
          '**Liquidación del techo.** ¿El daño al techo se paga a costo de reemplazo, valor en efectivo actual, o según una tabla basada en la edad del techo?',
          '**Daños por agua.** Busque límites o exclusiones para daños por agua no relacionados con el clima y para moho.',
          '**Propiedad personal.** Costo de reemplazo o valor en efectivo actual, y el límite.',
          '**Pérdida de uso.** ¿Cuánto hay disponible para hotel o alquiler si no puede vivir en casa después de una pérdida cubierta?',
          'Límites de **responsabilidad civil y pagos médicos**.',
          'Cobertura de **ordenanzas o ley**, que paga para adecuar una casa dañada al código de construcción vigente.',
          '**Otras estructuras y cerramientos de malla (screened enclosures),** además de la cobertura de sumideros (sinkhole) frente a colapso catastrófico de la cobertura del suelo.',
          '**Endosos que tiene hoy.** Asegúrese de que nada de lo que usa desaparezca silenciosamente en la nueva póliza.',
        ] },
        { type: 'callout', title: 'Recuerde: son estimados', text: 'Las primas del paquete son primas estimadas de renovación. La prima final y la cobertura exacta se fijan cuando la póliza se emite o se renueva.' },

        { type: 'h2', text: 'Mire más allá de la prima' },
        { type: 'ul', items: [
          '**Verifique la compañía.** La OIR mantiene una [página pública de compañías de take-out](https://floir.gov/property-casualty/take-out-companies) con cada aseguradora aprobada, su fecha de aprobación, fechas de asunción y orden de consentimiento. La OIR indica que la ofrece para que los asegurados puedan revisar el estado financiero y los detalles de cobertura antes de decidir.',
          '**Riesgo de recargos (assessments).** Citizens explica que sus asegurados pueden tener que pagar un recargo si Citizens se queda sin dinero para pagar reclamos después de un huracán mayor o una serie de tormentas, y que los asegurados del mercado privado pueden estar sujetos a un recargo mucho menor.',
          '**Seguro de inundación.** Citizens exige seguro de inundación en sus pólizas residenciales personales con cobertura de viento, con entrada total en vigor para pólizas efectivas a partir del 1 de enero de 2027 ([esto es lo que significa](/es/blog/citizens-flood-insurance-requirement-2027)). Citizens señala que las aseguradoras privadas no están obligadas a exigir seguro de inundación para la elegibilidad, así que compare la prima de Citizens más una póliza de inundación contra la oferta privada. No cancele la cobertura de inundación solo porque una póliza nueva no la exige. En el sur de Miami-Dade, vale la pena mantener la [cobertura de inundación](/es/flood-insurance-homestead-fl).',
        ] },

        { type: 'h2', text: 'Preguntas para hacer antes de aceptar' },
        { type: 'ol', items: [
          '¿Cuál es mi fecha límite exacta, y soy elegible para quedarme en Citizens?',
          '¿Qué coberturas son más amplias, más limitadas o faltan en comparación con mi póliza de Citizens?',
          '¿Cuál es mi deducible por huracán en dólares, no solo como porcentaje?',
          '¿Cómo está cubierto mi techo, dada su edad y material?',
          'Si cambia, ¿quién necesita la nueva página de declaraciones? Si su prima se paga mediante una cuenta escrow de su hipoteca, avise a su prestamista.',
        ] },

        { type: 'h2', text: 'Cómo puede ayudar M&K Agency' },
        { type: 'p', text: 'Traiga su Paquete de Despoblación y su página de declaraciones actual a nuestra oficina en 33550 S Dixie Hwy, Suite 102, Florida City, o llame al (305) 859-3953. Un agente licenciado revisará con usted las hojas de cobertura en inglés, español o ruso y le explicará las diferencias en dólares, antes de su fecha límite. Abrimos de lunes a viernes, de 9 a 6, y los sábados con cita. También puede revisar sus [opciones de seguro de vivienda](/es/homeowners-insurance-florida-city) o [pedir una cotización](/es/quote).' },
        { type: 'p', text: 'La cobertura depende de los términos, límites y exclusiones de cada póliza. Hable con un agente licenciado antes de aceptar o rechazar una oferta.' },
      ],
      faq: [
        { q: '¿Puedo decir que no a una oferta de take-out de Citizens?', a: 'Solo si es elegible para quedarse, es decir, si la prima estimada de cada oferta supera en más del 20% la prima estimada de renovación de Citizens por una cobertura comparable. Aun así debe registrar su elección antes de la fecha límite; de lo contrario su póliza va a la oferta de prima más baja.' },
        { q: '¿Puedo volver a Citizens después de que mi póliza sea asumida?', a: 'No de inmediato. El antiguo período de retorno de 30 días después de la asunción ya no existe. En la renovación con la nueva aseguradora, la regla del 20% se aplica de nuevo.' },
        { q: '¿Cambia mi prima el día en que mi póliza es asumida?', a: 'No. Citizens indica que su prima y cobertura actuales se mantienen hasta que expire el plazo de su póliza; luego la nueva aseguradora ofrece una renovación.' },
      ],
      sources: [
        { label: 'Citizens Property Insurance Corporation: Programa de Despoblación de Líneas Personales', url: 'https://www.citizensfla.com/depoppl' },
        { label: 'Citizens: resumen de despoblación (recargos, hojas de cobertura)', url: 'https://www.citizensfla.com/depopulation' },
        { label: 'Citizens: Cómo aprovechar la despoblación con Policyholder Choice', url: 'https://www.citizensfla.com/-/making-the-most-of-depopulation-with-policyholder-choice' },
        { label: 'Citizens: Nuevos requisitos de inundación desde el 1 de enero', url: 'https://www.citizensfla.com/-/new-flood-requirements-begin-january-1' },
        { label: 'Oficina de Regulación de Seguros de Florida: compañías de take-out', url: 'https://floir.gov/property-casualty/take-out-companies' },
        { label: 'Estatutos de Florida s. 627.351 (2026), apartados (6)(c)5. y (6)(ii)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.351' },
        { label: 'Estatutos de Florida s. 627.701 (2026), opciones de deducible por huracán', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.701' },
      ],
    },
    ru: {
      title: 'Получили предложение take-out от Citizens? Как сравнить его до принятия',
      metaTitle: 'Предложение take-out от Citizens: как сравнить | M&K Agency',
      description: 'Получили письмо о take-out от Citizens? Как работает правило 20%, что будет, если пропустить срок, и чек-лист сравнения предложения с вашим полисом Citizens.',
      ogAlt: 'Пригородный дом во Флориде с открытым почтовым ящиком и конвертом у входной двери',
      excerpt: 'У письма Citizens о take-out есть дедлайн, и бездействие — тоже решение. Вот как работает правило 20% и что сравнить перед принятием предложения.',
      category: 'Страхование дома',
      body: [
        { type: 'p', text: 'Citizens Property Insurance Corporation — страховщик, созданный штатом Флорида как страховщик последней инстанции. Закон Флориды обязывает его возвращать полисы на частный рынок через **Программу депопуляции** (Depopulation Program), а страховщики, одобренные Управлением страхового регулирования Флориды (OIR), могут запрашивать «вывод» (take out) полисов Citizens. Если один или несколько из них выбрали ваш полис, вы получите от Citizens пакет депопуляции (Depopulation Packet).' },
        { type: 'p', text: 'Не откладывайте его в сторону. У пакета есть дедлайн, и если вы ничего не сделаете, Citizens решит за вас. Вот как устроен процесс и как сравнить предложение с вашим текущим полисом до выбора.' },

        { type: 'h2', text: 'Какое письмо вы получили?' },
        { type: 'p', text: 'Citizens присылает письма двух видов, и разница важна:' },
        { type: 'ul', items: [
          '**Policyholder Choice Offer:** ваш полис выбрал один или несколько частных страховщиков, и вы по-прежнему **имеете право остаться** в Citizens, если хотите.',
          '**Policyholder Depopulation Offer:** как минимум одно предложение делает вас **не имеющим права остаться**. Вы можете выбрать среди предложений (или найти другое частное покрытие через своего агента), но остаться в Citizens нельзя.',
        ] },
        { type: 'p', text: 'В любом случае в пакете перечислены все доступные предложения с их оценочной премией продления рядом с оценочной премией продления вашего полиса Citizens, а также таблицы сравнения покрытий по каждому предложению. Эти таблицы — самые полезные страницы в конверте.' },

        { type: 'h2', text: 'Правило 20% простыми словами' },
        { type: 'p', text: 'Для основного жилья закон Флориды гласит: если оценочная премия предложения take-out **не более чем на 20% выше** оценочной премии продления Citizens за сравнимое покрытие, дом **больше не имеет права** оставаться в Citizens. Если все предложения выше более чем на 20%, остаться в Citizens можно, но только если вы активно зарегистрируете этот выбор.' },
        { type: 'p', text: 'Правило возвращается при продлении. После того как частный страховщик примет ваш полис, он пришлёт предложение продления до окончания срока. Если премия продления в пределах 20% от премии Citizens за сравнимое покрытие, вернуться в Citizens нельзя, даже если вы откажетесь от продления. Для жилья, не являющегося основным, правила в некоторых деталях отличаются — спросите агента, если это второй дом или объект аренды.' },

        { type: 'h2', text: 'Сроки и что будет, если ничего не делать' },
        { type: 'ul', items: [
          '**Зарегистрируйте выбор до даты на вашем бланке предложения.** Это можно сделать онлайн по номеру полиса и регистрационному коду из бланка, или ваш агент может отправить выбор за вас.',
          '**Молчание — это выбор.** Если выбор не зарегистрирован к дедлайну, Citizens назначает ваш полис частному страховщику, предложившему самую низкую оценочную премию, — независимо от того, имели ли вы право остаться.',
          '**Переход окончателен.** 30-дневного окна для возврата в Citizens после перехода больше не существует.',
          '**Текущий срок не меняется.** Если полис переходит, ваши текущие премия и покрытие сохраняются до конца действующего срока.',
          '**Остаться — не навсегда.** Если вы решите остаться в Citizens, позже могут прийти новые предложения, и на каждое нужно отвечать, чтобы сохранить полис Citizens.',
        ] },

        { type: 'h2', text: 'Что сравнивать, строка за строкой' },
        { type: 'p', text: 'Оценочная премия — только одна строка. Сравнивайте по таблицам покрытий следующие пункты рядом друг с другом:' },
        { type: 'ol', items: [
          '**Лимит жилья (Coverage A).** Хватит ли его, чтобы отстроить дом по сегодняшним ценам строительства, и совпадает ли он с тем, что сейчас в вашем полисе Citizens?',
          '**Франшиза по урагану (hurricane deductible).** Закон Флориды обязывает страховщиков предлагать франшизы по урагану $500 и 2%, 5% и 10% от лимита жилья, с некоторыми исключениями для дорогих домов. Переведите процент в доллары: при лимите жилья $300,000 франшиза 2% — это $6,000, а 5% — $15,000 из вашего кармана до выплат по ураганному ущербу.',
          '**Франшиза по прочим рискам** — пожар, кража, прорванная труба.',
          '**Расчёт по крыше.** Ущерб крыше оплачивается по восстановительной стоимости, по фактической стоимости с учётом износа или по шкале в зависимости от возраста крыши?',
          '**Ущерб от воды.** Ищите лимиты или исключения по воде не от погоды и по плесени.',
          '**Личное имущество.** Восстановительная или фактическая стоимость, и лимит.',
          '**Потеря использования (loss of use).** Сколько доступно на отель или аренду, если после покрытого ущерба жить дома нельзя?',
          'Лимиты **ответственности и медицинских выплат**.',
          'Покрытие **«постановление или закон» (ordinance or law)** — доплата за приведение повреждённого дома к текущим строительным нормам.',
          '**Прочие строения и сетчатые веранды (screened enclosures),** а также покрытие провалов грунта (sinkhole) против катастрофического обрушения покрытия грунта.',
          '**Дополнения (endorsements), которые у вас есть сейчас.** Убедитесь, что ничего из того, на что вы полагаетесь, тихо не исчезнет в новом полисе.',
        ] },
        { type: 'callout', title: 'Помните: это оценки', text: 'Премии в пакете — оценочные премии продления. Итоговая премия и точное покрытие определяются при выпуске или продлении полиса.' },

        { type: 'h2', text: 'Смотрите дальше премии' },
        { type: 'ul', items: [
          '**Проверьте компанию.** OIR ведёт публичную [страницу компаний take-out](https://floir.gov/property-casualty/take-out-companies) со списком одобренных страховщиков, датами одобрения, датами переходов и приказами о согласии. OIR поясняет, что публикует её, чтобы страхователи могли проверить финансовое состояние и детали покрытия до решения.',
          '**Риск доначислений (assessments).** Citizens объясняет: его страхователи могут быть обязаны заплатить доначисление, если Citizens не хватит денег на выплаты после крупного урагана или серии штормов, а страхователи частного рынка могут подлежать гораздо меньшему доначислению.',
          '**Страхование от наводнения.** Citizens требует страхование от наводнения по своим личным жилищным полисам с покрытием ветра, с полным вводом для полисов, действующих с 1 января 2027 года ([что это значит](/ru/blog/citizens-flood-insurance-requirement-2027)). Citizens отмечает, что частные страховщики не обязаны требовать страхование от наводнения для допуска, поэтому сравнивайте премию Citizens плюс полис от наводнения с частным предложением. Не бросайте покрытие от наводнения только потому, что новый полис его не требует. В южном Miami-Dade [покрытие от наводнения](/ru/flood-insurance-homestead-fl) стоит сохранить.',
        ] },

        { type: 'h2', text: 'Вопросы, которые стоит задать до принятия' },
        { type: 'ol', items: [
          'Какой у меня точный дедлайн и имею ли я право остаться в Citizens?',
          'Какие покрытия шире, уже или отсутствуют по сравнению с моим полисом Citizens?',
          'Какая у меня франшиза по урагану в долларах, а не только в процентах?',
          'Как покрыта моя крыша с учётом её возраста и материала?',
          'Если я перейду, кому нужна новая страница деклараций? Если премия платится через эскроу-счёт ипотеки, предупредите кредитора.',
        ] },

        { type: 'h2', text: 'Как M&K Agency может помочь' },
        { type: 'p', text: 'Принесите ваш пакет депопуляции и текущую страницу деклараций в наш офис: 33550 S Dixie Hwy, Suite 102, Florida City, или позвоните (305) 859-3953. Лицензированный агент пройдёт с вами таблицы покрытий на английском, испанском или русском и объяснит компромиссы в долларах — до вашего дедлайна. Мы открыты с понедельника по пятницу с 9 до 6, по субботам — по предварительной записи. Также можно посмотреть ваши [варианты страхования жилья](/ru/homeowners-insurance-florida-city) или [запросить расчёт](/ru/quote).' },
        { type: 'p', text: 'Покрытие зависит от условий, лимитов и исключений каждого полиса. Поговорите с лицензированным агентом, прежде чем принимать предложение или отказываться от него.' },
      ],
      faq: [
        { q: 'Можно ли отказаться от предложения take-out от Citizens?', a: 'Только если вы имеете право остаться, то есть оценочная премия каждого предложения более чем на 20% выше оценочной премии продления Citizens за сравнимое покрытие. Даже в этом случае выбор нужно зарегистрировать до дедлайна; иначе полис уйдёт предложению с самой низкой премией.' },
        { q: 'Можно ли вернуться в Citizens после перехода полиса?', a: 'Не сразу. Старого 30-дневного периода возврата после перехода больше нет. При продлении у нового страховщика правило 20% применяется снова.' },
        { q: 'Меняется ли премия в день перехода полиса?', a: 'Нет. Citizens говорит, что текущие премия и покрытие сохраняются до конца срока полиса; затем новый страховщик предлагает продление.' },
      ],
      sources: [
        { label: 'Citizens Property Insurance Corporation: программа депопуляции личных линий', url: 'https://www.citizensfla.com/depoppl' },
        { label: 'Citizens: обзор депопуляции (доначисления, таблицы покрытий)', url: 'https://www.citizensfla.com/depopulation' },
        { label: 'Citizens: как использовать депопуляцию с Policyholder Choice', url: 'https://www.citizensfla.com/-/making-the-most-of-depopulation-with-policyholder-choice' },
        { label: 'Citizens: новые требования по наводнению с 1 января', url: 'https://www.citizensfla.com/-/new-flood-requirements-begin-january-1' },
        { label: 'Управление страхового регулирования Флориды: компании take-out', url: 'https://floir.gov/property-casualty/take-out-companies' },
        { label: 'Статуты Флориды, s. 627.351 (2026), пункты (6)(c)5. и (6)(ii)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.351' },
        { label: 'Статуты Флориды, s. 627.701 (2026), варианты франшизы по урагану', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.701' },
      ],
    },
  },
};
