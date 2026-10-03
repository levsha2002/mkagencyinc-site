import type { TopicPage } from './types';

// Car tab: uninsured/underinsured motorist (UM) coverage in plain language.
// Numbers: Fla. Stat. 627.736 (PIP), 627.727 (UM, incl. (7) pain-and-suffering
// threshold), FLHSMV, IRC via III, SSA EN-05-10029, NHTSA DOT HS 813 403.
// Cases: public court opinions only; no carrier names, no private names.
export const car: TopicPage = {
  slug: 'car-insurance',
  leadSource: 'learn-car',
  leadType: 'Auto',
  published: '2026-10-03',
  modified: '2026-10-03',
  t: {
    en: {
      metaTitle: 'Uninsured Motorist Coverage in Florida, in Plain Words | M&K Agency',
      metaDesc:
        'What happens if a driver with no injury coverage hits you in Florida? Real cases, simple pictures and how UM coverage on your own policy protects your paycheck.',
      tab: 'Car insurance',
      kicker: 'Car insurance · Uninsured motorist (UM)',
      h1: 'If a driver with no insurance hits you, who pays your bills?',
      sub: "In Florida, drivers don't have to carry insurance for the injuries they cause. Here is what that can mean for your paycheck, your health and your family, and the coverage on your own policy that can step in.",
      heroFigure: 'car-shortfall',
      keyTitle: 'The short version',
      key: [
        "Florida's minimum car insurance is $10,000 of PIP and $10,000 of property damage. It does **not** require insurance for injuries you cause to other people.",
        'About **1 in 5** Florida drivers had no insurance at all in 2023 (20.6%), one of the highest rates in the country.',
        'Your own PIP pays up to **$10,000 in total**: 80% of medical bills and 60% of lost pay, all from the same pot.',
        '**Uninsured motorist coverage (UM)** is on your own policy. If the other driver has no insurance or too little, it can pay your medical bills, your lost pay and, for serious injuries, pain and suffering, up to your limit.',
      ],
      sections: [
        {
          id: 'story',
          h2: 'A story: hit at a red light, out of work for six months',
          blocks: [
            { type: 'p', text: 'Numbers are easier to understand as a story. Here is a common kind of Florida crash.' },
          ],
          stories: [
            {
              title: 'Example (made up to explain the idea)',
              steps: [
                'Ana is 38. She works as a home health aide and earns about $4,000 a month.',
                'She is stopped at a red light when another driver hits her from behind. He only has the Florida minimum insurance.',
                "Ana hurts her back and needs surgery. She can't lift patients for six months.",
                'Her medical bills reach about $48,000. She loses about $24,000 in pay.',
                "Her own PIP pays up to $10,000. The other driver's insurance pays $0 for her injuries, because the minimum doesn't include that coverage.",
                "That leaves about $62,000 unpaid, plus months of pain, bad sleep and not being able to pick up her little boy.",
              ],
              ending:
                "**Without UM**, Ana's family has to carry that gap. **With UM** on her own policy, for example a $100,000 limit, her own insurance can pay what the other driver should have paid, up to that limit.",
            },
            {
              title: 'Example: the other driver had insurance, just not enough',
              steps: [
                'Luis is a roofer. A driver runs a stop sign and hits his truck.',
                "Luis breaks his wrist and his shoulder. He can't climb a ladder for four months.",
                'His medical bills and lost pay add up to about $55,000.',
                'The other driver has $10,000 of bodily injury coverage. That is all his insurance pays.',
              ],
              ending:
                'UM also works when the other driver is **underinsured**, which means their coverage is too small. After PIP and the other driver\'s $10,000, Luis\'s UM can help with the rest, up to his limit.',
            },
          ],
        },
        {
          id: 'paycheck',
          h2: 'When the paycheck stops',
          figure: 'paycheck-timeline',
          blocks: [
            { type: 'p', text: "For most families, the biggest loss after a bad crash is not the car. It's the paycheck. Rent and groceries don't wait until you heal." },
            { type: 'p', text: "PIP helps, but only a little. By Florida law it pays 60% of the income you lose and 80% of your medical bills, and both come out of the same $10,000. If a doctor doesn't find an emergency medical condition, the limit can drop to $2,500. You also have to get care within 14 days of the crash." },
            { type: 'p', text: 'What about Social Security disability? It pays only if your condition is expected to last at least a year or to end in death. There is generally a 5-month waiting period, and a decision usually takes 6 to 8 months. A broken leg that heals in eight months would not qualify.' },
            { type: 'callout', title: 'Good to know', text: 'Social Security says a 20-year-old worker has a **1 in 4** chance of becoming disabled before full retirement age.' },
          ],
        },
        {
          id: 'losses',
          h2: 'Two kinds of losses: with a receipt and without one',
          figure: 'two-kinds-of-losses',
          blocks: [
            { type: 'p', text: "Some losses come with a bill: the hospital, the therapy, the paychecks you missed, and the money you would have earned later if you can't go back to the same work." },
            { type: 'p', text: "Other losses don't come with a receipt, but they are just as real: pain, sleepless nights, not being able to hold your kids, or missing the job, the church and the sports you love." },
            { type: 'p', text: 'UM can help with both. Under Florida law, pain and suffering is paid only for serious injuries, such as a permanent injury, serious scarring or a death.' },
            { type: 'p', text: 'These losses are huge across the country too. In 2019, U.S. crashes cost about $340 billion in money losses such as medical care and lost work, according to NHTSA. When the government also counted pain and lost quality of life, the total was nearly $1.4 trillion.' },
          ],
        },
        {
          id: 'hit-and-run',
          h2: 'What if the driver drives away?',
          blocks: [
            { type: 'p', text: 'Florida had 97,519 hit-and-run crashes in 2024, according to the state highway safety department. Most damaged only property. The rest involved people who were hurt or killed.' },
            { type: 'p', text: "In many policies, a hit-and-run driver who is never found is treated like an uninsured driver, so UM can apply. Report the crash to the police right away, and check your policy for the exact rules." },
          ],
        },
      ],
      casesTitle: 'Real Florida cases: what serious injuries can cost',
      casesIntro:
        'These come from public court records. We share them to show how big real losses can be, not to suggest that anyone should sue. Every case is different.',
      cases: [
        {
          title: 'Permanent injuries from an underinsured driver',
          where: 'Broward County · Florida Fourth District Court of Appeal, 2020',
          happened:
            "A driver was hit by an underinsured driver and was left with permanent injuries. The other driver's insurance was not enough, so he made a claim on the UM coverage of his own policies. The only question for the jury was how much the crash had cost him.",
          decided:
            "The jury set his losses at $810,000 in lost earnings, $369,629 in medical expenses and $400,000 for pain and suffering: $1,579,629 in total. The appeals court kept the jury's numbers. The final amount was lower because money he had already received from other insurance was subtracted.",
          shows: 'Lost earnings were the biggest part, more than half of the total. A serious injury is first of all a paycheck problem.',
          source: 'case4dca2020',
        },
        {
          title: 'A $10,000 policy and a life-changing crash',
          where: 'Hillsborough County · Florida Supreme Court, 2004 (crash in 1990)',
          happened:
            'A driver who had been drinking crossed the center line and hit a car carrying a mother and her young daughter. The mother died. The daughter was badly hurt, with more than $30,000 in medical bills, and her father missed a lot of work. The car that caused the crash was insured for only $10,000 per person and $20,000 per crash.',
          decided:
            "Juries later set the damages at $911,400 for the mother's death and $500,000 for the daughter's injuries, about $1.4 million in total. That is about 70 times the $20,000 of coverage.",
          shows:
            "Low limits pay only a small part of a serious crash. For the family that is hit, UM on their own policy is what can help fill the gap. For the driver at fault, the rest can become a personal debt (see [Umbrella & wealth protection](/en/protect/umbrella-insurance)).",
          source: 'caseSc012846',
        },
      ],
      statsTitle: 'The numbers behind it',
      stats: [
        { value: '20.6%', text: 'of Florida drivers were uninsured in 2023, about 1 in 5. The U.S. rate was 15.4%.', source: 'iiiUninsured' },
        { value: '$0', text: 'of bodily injury coverage is required for most Florida drivers. The minimum is $10,000 PIP and $10,000 property damage.', source: 'flhsmvInsurance' },
        { value: '$10,000', text: 'is the most PIP pays in total. Medical bills (80%) and lost income (60%) share that one limit.', source: 'statPip' },
        { value: '97,519', text: 'hit-and-run crashes happened in Florida in 2024.', source: 'flhsmvHitRun' },
        { value: '1 in 4', text: 'is the chance a 20-year-old worker becomes disabled before full retirement age, says Social Security.', source: 'ssaDisability' },
        { value: '$340 billion', text: 'was the money cost of U.S. crashes in 2019. Counting pain and lost quality of life: nearly $1.4 trillion.', source: 'nhtsaCost' },
      ],
      checklistTitle: 'Check your own policy in 2 minutes',
      checklist: [
        'Find the first page of your policy (the declarations page). Look for the words **Uninsured Motorist** or **UM**.',
        "If UM isn't listed, or it says rejected, you don't have it. In Florida it can only be turned down in writing.",
        'Look at the numbers. For example, 50/100 means up to $50,000 per person and $100,000 per crash.',
        'Look for **stacked** or **non-stacked**. With more than one car, stacked UM adds up the limit for each car.',
        'Compare UM with your bodily injury limits. In Florida, UM matches them unless someone chose lower limits.',
        'No bodily injury coverage on your policy? Then you most likely have no UM either. Ask us.',
        "Not sure? Send us a photo of that first page. We'll go over it with you in English, Spanish or Russian.",
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/en/protect/umbrella-insurance', label: 'When you are the driver at fault', text: 'Your liability limit may be much smaller than a jury verdict. See how an umbrella policy protects your savings and future pay.' },
        { href: '/en/protect/life-insurance', label: "Protect your family's income", text: "What happens to the mortgage and the kids' plans if your paycheck stops for good." },
        { href: '/en/blog/uninsured-motorist-coverage-florida', label: 'UM in Florida: more details', text: 'Stacked vs. non-stacked, limits and how to add UM to your policy.' },
        { href: '/en/car-insurance-florida-city', label: 'Car insurance with a personal agent', text: 'A local agent who picks up the phone and helps you at claim time.' },
      ],
      faq: [
        { q: 'What is uninsured motorist coverage, in plain words?', a: 'It is coverage on your own car policy that protects you, not the other driver. If someone hits you and has no insurance, or not enough, UM can pay your medical bills, your lost pay and, for serious injuries, pain and suffering. It pays up to the limit you chose.' },
        { q: 'Is UM required in Florida?', a: "No. But if your policy has bodily injury liability, Florida law says UM comes with it unless it is turned down in writing. It's worth checking whether a rejection form was signed when your policy started." },
        { q: "Doesn't my health insurance cover this?", a: "Health insurance can help with medical bills. It doesn't replace your paycheck or pay for pain and suffering, and you may still owe deductibles and copays. UM is meant for the losses the other driver should have paid." },
        { q: 'Does UM pay to fix my car?', a: 'No. UM is for injuries to people. Damage to your car is usually paid by collision coverage on your own policy.' },
        { q: 'What is the difference between stacked and non-stacked UM?', a: 'If you have more than one car, stacked UM lets you add the UM limit of each car together. Non-stacked gives you the limit of one car. In Florida, UM is stacked unless you choose non-stacked in writing.' },
        { q: 'Does UM pay right away, like PIP?', a: 'Usually not. PIP pays bills as they come in. UM is usually paid as one lump sum once the full extent of your treatment is known. That is one more reason to plan for the months in between.' },
        { q: 'What if it was a hit-and-run?', a: 'Many policies treat a hit-and-run driver who is never found as an uninsured driver, so UM can apply. Report the crash to the police right away and check your policy for the exact rules.' },
      ],
      ctaTitle: "Do you have UM? Let's check together.",
      ctaText:
        "Send us your policy and we'll check your coverage. A licensed agent will explain what you have in plain words. We call back within 1 hour during business hours.",
      disclaimer:
        'This page is general information, not legal advice and not policy language. What is covered depends on your policy, its limits and its exclusions. Stories marked "Example" are made up to explain the idea. "Real case" items come from public court records linked below, and every case is different. No one can promise how a claim will turn out.',
      sources: ['flhsmvInsurance', 'iiiUninsured', 'statPip', 'statUm', 'dfsAuto', 'dfsToolkit', 'ssaDisability', 'nhtsaCost', 'flhsmvHitRun', 'case4dca2020', 'caseSc012846'],
    },
    es: {
      metaTitle: 'Conductores sin seguro (UM) en Florida, explicado fácil | M&K Agency',
      metaDesc:
        '¿Qué pasa si lo choca alguien sin seguro para lesiones en Florida? Casos reales, dibujos sencillos y cómo el UM de su propia póliza protege su sueldo.',
      tab: 'Seguro de auto',
      kicker: 'Seguro de auto · Conductor sin seguro (UM)',
      h1: 'Si lo choca alguien sin seguro, ¿quién paga sus cuentas?',
      sub: 'En Florida, los conductores no están obligados a tener seguro para las lesiones que causan. Aquí le explicamos qué puede significar eso para su sueldo, su salud y su familia, y qué cobertura de su propia póliza puede responder por usted.',
      heroFigure: 'car-shortfall',
      keyTitle: 'En pocas palabras',
      key: [
        'El seguro mínimo de auto en Florida es de $10,000 de PIP y $10,000 de daños a la propiedad. **No** exige seguro para las lesiones que usted le cause a otras personas.',
        'Cerca de **1 de cada 5** conductores en Florida no tenía ningún seguro en 2023 (20.6%), una de las tasas más altas del país.',
        'Su propio PIP paga como máximo **$10,000 en total**: el 80% de las facturas médicas y el 60% del sueldo perdido, todo del mismo dinero.',
        'La **cobertura de conductor sin seguro (UM)** está en su propia póliza. Si el otro conductor no tiene seguro o tiene muy poco, puede pagar sus gastos médicos, su sueldo perdido y, en lesiones graves, el dolor y sufrimiento, hasta su límite.',
      ],
      sections: [
        {
          id: 'story',
          h2: 'Una historia: chocada en un semáforo, seis meses sin trabajar',
          blocks: [{ type: 'p', text: 'Los números se entienden mejor con una historia. Este es un tipo de choque muy común en Florida.' }],
          stories: [
            {
              title: 'Ejemplo (inventado para explicar la idea)',
              steps: [
                'Ana tiene 38 años. Trabaja como asistente de salud en el hogar y gana unos $4,000 al mes.',
                'Está parada en un semáforo en rojo cuando otro conductor la choca por detrás. Él solo tiene el seguro mínimo de Florida.',
                'Ana se lastima la espalda y necesita cirugía. Durante seis meses no puede levantar a sus pacientes.',
                'Sus facturas médicas llegan a unos $48,000. Pierde unos $24,000 de sueldo.',
                'Su propio PIP paga hasta $10,000. El seguro del otro conductor paga $0 por sus lesiones, porque el mínimo no incluye esa cobertura.',
                'Quedan unos $62,000 sin pagar, además de meses de dolor, de dormir mal y de no poder cargar a su hijo pequeño.',
              ],
              ending:
                '**Sin UM**, la familia de Ana tiene que cargar con ese hueco. **Con UM** en su propia póliza, por ejemplo con un límite de $100,000, su propio seguro puede pagar lo que debió pagar el otro conductor, hasta ese límite.',
            },
            {
              title: 'Ejemplo: el otro conductor tenía seguro, pero no alcanzaba',
              steps: [
                'Luis es techador. Un conductor se pasa un pare y choca su camioneta.',
                'Luis se fractura la muñeca y el hombro. No puede subir una escalera durante cuatro meses.',
                'Sus gastos médicos y el sueldo perdido suman unos $55,000.',
                'El otro conductor tiene $10,000 de cobertura por lesiones. Eso es todo lo que paga su seguro.',
              ],
              ending:
                'El UM también sirve cuando el otro conductor tiene **seguro insuficiente**, es decir, una cobertura demasiado pequeña. Después del PIP y de los $10,000 del otro conductor, el UM de Luis puede ayudar con el resto, hasta su límite.',
            },
          ],
        },
        {
          id: 'paycheck',
          h2: 'Cuando el sueldo se detiene',
          figure: 'paycheck-timeline',
          blocks: [
            { type: 'p', text: 'Para la mayoría de las familias, la pérdida más grande después de un choque grave no es el carro. Es el sueldo. La renta y la comida no esperan a que usted se recupere.' },
            { type: 'p', text: 'El PIP ayuda, pero poco. Por ley en Florida paga el 60% del ingreso que usted pierde y el 80% de sus gastos médicos, y las dos cosas salen de los mismos $10,000. Si un médico no encuentra una condición médica de emergencia, el límite puede bajar a $2,500. Además, tiene que recibir atención dentro de los 14 días después del choque.' },
            { type: 'p', text: '¿Y el Seguro Social por incapacidad? Solo paga si se espera que su condición dure al menos un año o termine en muerte. Por lo general hay un periodo de espera de 5 meses, y la decisión suele tardar de 6 a 8 meses. Una pierna fracturada que sana en ocho meses no calificaría.' },
            { type: 'callout', title: 'Bueno saber', text: 'El Seguro Social dice que un trabajador de 20 años tiene **1 probabilidad entre 4** de quedar incapacitado antes de la edad plena de jubilación.' },
          ],
        },
        {
          id: 'losses',
          h2: 'Dos tipos de pérdidas: con recibo y sin recibo',
          figure: 'two-kinds-of-losses',
          blocks: [
            { type: 'p', text: 'Algunas pérdidas llegan con factura: el hospital, la terapia, los sueldos que no cobró y el dinero que habría ganado más adelante si no puede volver al mismo trabajo.' },
            { type: 'p', text: 'Otras pérdidas no traen recibo, pero son igual de reales: el dolor, las noches sin dormir, no poder abrazar a sus hijos o perderse el trabajo, la iglesia y los deportes que usted quiere.' },
            { type: 'p', text: 'El UM puede ayudar con las dos. Según la ley de Florida, el dolor y sufrimiento se paga solo en lesiones graves, como una lesión permanente, una cicatriz seria o una muerte.' },
            { type: 'p', text: 'Estas pérdidas son enormes en todo el país. En 2019, los choques en EE. UU. costaron unos $340 mil millones en pérdidas de dinero, como atención médica y trabajo perdido, según la NHTSA. Al contar también el dolor y la calidad de vida perdida, el total llegó a casi $1.4 billones.' },
          ],
        },
        {
          id: 'hit-and-run',
          h2: '¿Y si el conductor se da a la fuga?',
          blocks: [
            { type: 'p', text: 'En 2024 hubo 97,519 choques con fuga en Florida, según el departamento estatal de seguridad vial. La mayoría solo dañó propiedad. El resto dejó personas heridas o muertas.' },
            { type: 'p', text: 'En muchas pólizas, un conductor que huye y nunca aparece se trata como un conductor sin seguro, así que el UM puede aplicar. Reporte el choque a la policía de inmediato y revise las reglas exactas de su póliza.' },
          ],
        },
      ],
      casesTitle: 'Casos reales en Florida: lo que puede costar una lesión grave',
      casesIntro:
        'Estos casos vienen de registros públicos de los tribunales. Los compartimos para mostrar lo grandes que pueden ser las pérdidas reales, no para sugerir que alguien demande. Cada caso es diferente.',
      cases: [
        {
          title: 'Lesiones permanentes por un conductor con seguro insuficiente',
          where: 'Condado de Broward · Cuarto Tribunal de Apelaciones de Florida, 2020',
          happened:
            'Un conductor fue chocado por otro con seguro insuficiente y quedó con lesiones permanentes. El seguro del otro conductor no alcanzaba, así que él presentó un reclamo al UM de sus propias pólizas. Lo único que el jurado tenía que decidir era cuánto le había costado el choque.',
          decided:
            'El jurado fijó sus pérdidas en $810,000 por ingresos perdidos, $369,629 por gastos médicos y $400,000 por dolor y sufrimiento: $1,579,629 en total. El tribunal de apelaciones mantuvo las cifras del jurado. El monto final fue menor porque se restó el dinero que él ya había recibido de otros seguros.',
          shows: 'Los ingresos perdidos fueron la parte más grande, más de la mitad del total. Una lesión grave es, antes que nada, un problema de sueldo.',
          source: 'case4dca2020',
        },
        {
          title: 'Una póliza de $10,000 y un choque que cambió una familia',
          where: 'Condado de Hillsborough · Corte Suprema de Florida, 2004 (choque en 1990)',
          happened:
            'Un conductor que había estado bebiendo cruzó la línea central y chocó un carro en el que iban una madre y su hija pequeña. La madre murió. La niña quedó gravemente herida, con más de $30,000 en facturas médicas, y su padre faltó mucho al trabajo. El carro que causó el choque tenía un seguro de solo $10,000 por persona y $20,000 por accidente.',
          decided:
            'Más tarde, los jurados fijaron los daños en $911,400 por la muerte de la madre y $500,000 por las lesiones de la niña, cerca de $1.4 millones en total. Eso es unas 70 veces los $20,000 de cobertura.',
          shows:
            'Los límites bajos pagan solo una pequeña parte de un choque grave. Para la familia afectada, el UM de su propia póliza es lo que puede ayudar a cubrir el hueco. Para el conductor culpable, el resto puede convertirse en una deuda personal (vea [Umbrella y protección del patrimonio](/es/protect/umbrella-insurance)).',
          source: 'caseSc012846',
        },
      ],
      statsTitle: 'Los números detrás',
      stats: [
        { value: '20.6%', text: 'de los conductores en Florida no tenía seguro en 2023, cerca de 1 de cada 5. La tasa nacional fue 15.4%.', source: 'iiiUninsured' },
        { value: '$0', text: 'de cobertura por lesiones a otros exige Florida a la mayoría de los conductores. El mínimo es $10,000 de PIP y $10,000 de daños a la propiedad.', source: 'flhsmvInsurance' },
        { value: '$10,000', text: 'es lo máximo que paga el PIP en total. Los gastos médicos (80%) y el ingreso perdido (60%) comparten ese límite.', source: 'statPip' },
        { value: '97,519', text: 'choques con fuga hubo en Florida en 2024.', source: 'flhsmvHitRun' },
        { value: '1 de 4', text: 'es la probabilidad de que un trabajador de 20 años quede incapacitado antes de la jubilación plena, según el Seguro Social.', source: 'ssaDisability' },
        { value: '$340 mil millones', text: 'costaron en dinero los choques en EE. UU. en 2019. Con el dolor y la calidad de vida perdida: casi $1.4 billones.', source: 'nhtsaCost' },
      ],
      checklistTitle: 'Revise su póliza en 2 minutos',
      checklist: [
        'Busque la primera página de su póliza (la página de declaraciones). Busque las palabras **Uninsured Motorist** o **UM**.',
        'Si no aparece el UM, o dice "rejected" (rechazado), usted no lo tiene. En Florida solo se puede rechazar por escrito.',
        'Mire los números. Por ejemplo, 50/100 quiere decir hasta $50,000 por persona y $100,000 por accidente.',
        'Busque si dice **stacked** (acumulado) o **non-stacked**. Con más de un carro, el UM acumulado suma el límite de cada carro.',
        'Compare el UM con sus límites de lesiones a otros (bodily injury). En Florida son iguales, a menos que alguien haya escogido límites más bajos.',
        '¿Su póliza no tiene cobertura de lesiones a otros? Entonces lo más probable es que tampoco tenga UM. Pregúntenos.',
        '¿No está seguro? Mándenos una foto de esa primera página. La revisamos con usted en español, inglés o ruso.',
      ],
      relatedTitle: 'Siga leyendo',
      related: [
        { href: '/es/protect/umbrella-insurance', label: 'Cuando usted es el culpable', text: 'Su límite de responsabilidad puede ser mucho menor que un veredicto. Vea cómo una póliza umbrella protege sus ahorros y su sueldo futuro.' },
        { href: '/es/protect/life-insurance', label: 'Proteja el ingreso de su familia', text: 'Qué pasa con la hipoteca y los planes de sus hijos si su sueldo se detiene para siempre.' },
        { href: '/es/blog/uninsured-motorist-coverage-florida', label: 'UM en Florida: más detalles', text: 'Acumulado o no acumulado, límites y cómo agregar el UM a su póliza.' },
        { href: '/es/car-insurance-florida-city', label: 'Seguro de auto con un agente personal', text: 'Un agente local que contesta el teléfono y le ayuda cuando tiene un reclamo.' },
      ],
      faq: [
        { q: '¿Qué es la cobertura de conductor sin seguro, en palabras simples?', a: 'Es una cobertura de su propia póliza de auto que lo protege a usted, no al otro conductor. Si alguien lo choca y no tiene seguro, o no tiene suficiente, el UM puede pagar sus gastos médicos, su sueldo perdido y, en lesiones graves, el dolor y sufrimiento. Paga hasta el límite que usted escogió.' },
        { q: '¿El UM es obligatorio en Florida?', a: 'No. Pero si su póliza tiene responsabilidad por lesiones a otros (bodily injury), la ley de Florida dice que el UM viene incluido a menos que se rechace por escrito. Vale la pena revisar si se firmó un formulario de rechazo cuando empezó su póliza.' },
        { q: '¿No me cubre esto mi seguro médico?', a: 'El seguro médico puede ayudar con las facturas médicas. No reemplaza su sueldo ni paga el dolor y sufrimiento, y usted todavía puede deber deducibles y copagos. El UM es para las pérdidas que debió pagar el otro conductor.' },
        { q: '¿El UM paga el arreglo de mi carro?', a: 'No. El UM es para lesiones a personas. Los daños a su carro normalmente los paga la cobertura de choque (collision) de su propia póliza.' },
        { q: '¿Cuál es la diferencia entre UM acumulado y no acumulado?', a: 'Si tiene más de un carro, el UM acumulado (stacked) le permite sumar el límite de UM de cada carro. El no acumulado le da el límite de un solo carro. En Florida, el UM es acumulado a menos que usted escoja el no acumulado por escrito.' },
        { q: '¿El UM paga de inmediato, como el PIP?', a: 'Normalmente no. El PIP paga las facturas a medida que llegan. El UM normalmente se paga en una sola suma cuando ya se sabe todo el tratamiento que usted necesitó. Es una razón más para planear esos meses de espera.' },
        { q: '¿Y si fue un choque con fuga?', a: 'Muchas pólizas tratan al conductor que huye y nunca aparece como un conductor sin seguro, así que el UM puede aplicar. Reporte el choque a la policía de inmediato y revise las reglas exactas de su póliza.' },
      ],
      ctaTitle: '¿Tiene UM? Revisémoslo juntos.',
      ctaText:
        'Envíenos su póliza y revisamos su cobertura. Un agente licenciado le explica en palabras simples lo que tiene. Le devolvemos la llamada en menos de 1 hora en horario de oficina.',
      disclaimer:
        'Esta página es información general, no asesoría legal ni lenguaje de póliza. Lo que se cubre depende de su póliza, sus límites y sus exclusiones. Las historias marcadas como "Ejemplo" son inventadas para explicar la idea. Los "casos reales" vienen de registros públicos de los tribunales enlazados abajo, y cada caso es diferente. Nadie puede prometer cómo terminará un reclamo.',
      sources: ['flhsmvInsurance', 'iiiUninsured', 'statPip', 'statUm', 'dfsAuto', 'dfsToolkit', 'ssaDisability', 'nhtsaCost', 'flhsmvHitRun', 'case4dca2020', 'caseSc012846'],
    },
    ru: {
      metaTitle: 'Страховка от незастрахованных водителей (UM) во Флориде | M&K Agency',
      metaDesc:
        'Что будет, если в вас врежется водитель без страховки травм? Реальные дела, простые схемы и как покрытие UM в вашем полисе защищает вашу зарплату.',
      tab: 'Автострахование',
      kicker: 'Автострахование · Незастрахованный водитель (UM)',
      h1: 'Если в вас врезался водитель без страховки, кто оплатит ваши счета?',
      sub: 'Во Флориде водители не обязаны страховать травмы, которые причиняют другим. Рассказываем простыми словами, что это значит для вашей зарплаты, здоровья и семьи, и какое покрытие в вашем собственном полисе может вас выручить.',
      heroFigure: 'car-shortfall',
      keyTitle: 'Коротко',
      key: [
        'Минимальная автостраховка во Флориде — это $10 000 PIP и $10 000 на ущерб чужому имуществу. Страховать травмы, которые вы причините другим людям, закон **не** требует.',
        'Примерно **каждый пятый** водитель во Флориде в 2023 году ездил вообще без страховки (20,6%) — один из самых высоких показателей в стране.',
        'Ваш собственный PIP платит максимум **$10 000 на всё**: 80% счетов за лечение и 60% потерянного дохода из одного и того же лимита.',
        '**Покрытие от незастрахованных водителей (UM)** — часть вашего собственного полиса. Если у виновника нет страховки или её мало, UM может оплатить лечение, потерянную зарплату, а при серьёзных травмах — и боль и страдания, в пределах вашего лимита.',
      ],
      sections: [
        {
          id: 'story',
          h2: 'История: удар на красном, полгода без работы',
          blocks: [{ type: 'p', text: 'Цифры проще понять на живом примере. Вот очень типичная для Флориды авария.' }],
          stories: [
            {
              title: 'Пример (придуман, чтобы объяснить идею)',
              steps: [
                'Ане 38 лет. Она работает сиделкой на дому и получает около $4000 в месяц.',
                'Она стоит на красном, и в неё сзади врезается другая машина. У водителя только минимальная страховка, которую требует Флорида.',
                'Аня травмирует спину, ей нужна операция. Полгода она не может поднимать пациентов.',
                'Счета за лечение доходят примерно до $48 000. Зарплаты она теряет около $24 000.',
                'Её собственный PIP платит максимум $10 000. Страховка виновника за её травмы не платит ничего: в минимальный полис такое покрытие не входит.',
                'Остаётся около $62 000 неоплаченных расходов — и ещё месяцы боли, бессонных ночей, когда нельзя даже взять на руки маленького сына.',
              ],
              ending:
                '**Без UM** эту дыру закрывает семья Ани. **С UM** в её собственном полисе, например с лимитом $100 000, её страховая может заплатить то, что должен был заплатить виновник, в пределах этого лимита.',
            },
            {
              title: 'Пример: страховка у виновника была, но маленькая',
              steps: [
                'Луис — кровельщик. Водитель проезжает знак «Стоп» и врезается в его пикап.',
                'У Луиса перелом запястья и травма плеча. Четыре месяца он не может залезть на лестницу.',
                'Лечение и потерянный заработок — примерно $55 000.',
                'У виновника есть страховка травм других людей на $10 000. Больше его страховая не заплатит.',
              ],
              ending:
                'UM работает и тогда, когда у виновника **недостаточная страховка** — слишком маленький лимит. После PIP и $10 000 от страховки виновника UM Луиса может покрыть остальное в пределах его лимита.',
            },
          ],
        },
        {
          id: 'paycheck',
          h2: 'Когда зарплата прекращается',
          figure: 'paycheck-timeline',
          blocks: [
            { type: 'p', text: 'Для большинства семей самая большая потеря после серьёзной аварии — не машина, а зарплата. Аренда и продукты не ждут, пока вы поправитесь.' },
            { type: 'p', text: 'PIP помогает, но совсем немного. По закону Флориды он платит 60% потерянного дохода и 80% счетов за лечение — и всё это из одних и тех же $10 000. Если врач не найдёт «неотложного медицинского состояния», лимит может упасть до $2500. И обратиться за помощью нужно в течение 14 дней после аварии.' },
            { type: 'p', text: 'А пособие по инвалидности от Social Security? Его платят, только если ожидается, что состояние продлится не меньше года или приведёт к смерти. Обычно есть период ожидания 5 месяцев, а само решение принимают в среднем 6–8 месяцев. Перелом ноги, который заживёт за восемь месяцев, под эти правила не подходит.' },
            { type: 'callout', title: 'Полезно знать', text: 'По данным Social Security, у 20-летнего работника **1 шанс из 4** стать нетрудоспособным до полного пенсионного возраста.' },
          ],
        },
        {
          id: 'losses',
          h2: 'Два вида потерь: с чеком и без чека',
          figure: 'two-kinds-of-losses',
          blocks: [
            { type: 'p', text: 'У части потерь есть счёт: больница, реабилитация, пропущенные зарплаты и деньги, которые вы заработали бы потом, если не сможете вернуться к прежней работе.' },
            { type: 'p', text: 'У других потерь чека нет, но они не менее настоящие: боль, бессонные ночи, невозможность обнять детей, потерянная любимая работа, церковь, спорт.' },
            { type: 'p', text: 'UM может помочь и с теми, и с другими. По закону Флориды боль и страдания оплачиваются только при серьёзных травмах: например, при постоянной травме, сильных шрамах или гибели.' },
            { type: 'p', text: 'В масштабах страны эти потери огромны. По данным NHTSA, в 2019 году ДТП в США обошлись примерно в $340 млрд прямых денежных потерь — лечение, потерянная работа и другое. Если добавить боль и потерянное качество жизни, сумма составила почти $1,4 трлн.' },
          ],
        },
        {
          id: 'hit-and-run',
          h2: 'А если виновник уехал с места аварии?',
          blocks: [
            { type: 'p', text: 'По данным дорожного ведомства штата (FLHSMV), в 2024 году во Флориде было 97 519 аварий, с места которых водитель скрылся. В большинстве пострадало только имущество, в остальных — люди были ранены или погибли.' },
            { type: 'p', text: 'Во многих полисах водитель, который скрылся и так и не был найден, считается незастрахованным, и тогда может сработать UM. Сразу сообщите об аварии в полицию и проверьте точные условия своего полиса.' },
          ],
        },
      ],
      casesTitle: 'Реальные дела во Флориде: во что обходятся серьёзные травмы',
      casesIntro:
        'Это открытые судебные документы. Мы приводим их, чтобы показать реальный масштаб потерь, а не чтобы призвать кого-то судиться. Каждое дело индивидуально.',
      cases: [
        {
          title: 'Постоянные травмы по вине водителя с недостаточной страховкой',
          where: 'Округ Бровард · Апелляционный суд 4-го округа Флориды, 2020',
          happened:
            'В водителя врезался человек с недостаточной страховкой, и пострадавший получил постоянные травмы. Страховки виновника не хватило, и он подал претензию по покрытию UM своих собственных полисов. Присяжным нужно было решить только одно: во что ему обошлась авария.',
          decided:
            'Присяжные оценили его потери в $810 000 потерянного заработка, $369 629 расходов на лечение и $400 000 за боль и страдания — всего $1 579 629. Апелляционный суд оставил эти цифры в силе. Итоговая сумма оказалась меньше, потому что из неё вычли деньги, уже полученные от других страховок.',
          shows: 'Самая большая часть — потерянный заработок, больше половины всей суммы. Серьёзная травма — это прежде всего проблема с доходом.',
          source: 'case4dca2020',
        },
        {
          title: 'Полис на $10 000 и авария, изменившая жизнь семьи',
          where: 'Округ Хилсборо · Верховный суд Флориды, 2004 (авария в 1990 году)',
          happened:
            'Водитель, который перед этим выпивал, выехал на встречную полосу и врезался в машину, где ехали мама с маленькой дочерью. Мама погибла. Девочка получила тяжёлые травмы, счета за лечение превысили $30 000, а её отец много пропускал работу. Машина виновника была застрахована всего на $10 000 на человека и $20 000 на аварию.',
          decided:
            'Позже присяжные оценили ущерб в $911 400 за гибель матери и $500 000 за травмы девочки — около $1,4 млн в сумме. Это примерно в 70 раз больше, чем $20 000 страховки.',
          shows:
            'Низкие лимиты покрывают лишь малую часть серьёзной аварии. Для пострадавшей семьи закрыть дыру может помочь UM в их собственном полисе. А для виновника остаток может стать личным долгом (см. [Umbrella и защита капитала](/ru/protect/umbrella-insurance)).',
          source: 'caseSc012846',
        },
      ],
      statsTitle: 'Цифры, на которых всё основано',
      stats: [
        { value: '20,6%', text: 'водителей во Флориде ездили без страховки в 2023 году — примерно каждый пятый. В среднем по США — 15,4%.', source: 'iiiUninsured' },
        { value: '$0', text: 'страховки травм других людей требуют от большинства водителей Флориды. Минимум — $10 000 PIP и $10 000 на ущерб имуществу.', source: 'flhsmvInsurance' },
        { value: '$10 000', text: '— максимум, который PIP платит на всё. Лечение (80%) и потерянный доход (60%) делят один лимит.', source: 'statPip' },
        { value: '97 519', text: 'аварий во Флориде в 2024 году, с места которых водитель скрылся.', source: 'flhsmvHitRun' },
        { value: '1 из 4', text: '— шанс 20-летнего работника стать нетрудоспособным до полного пенсионного возраста (данные Social Security).', source: 'ssaDisability' },
        { value: '$340 млрд', text: '— денежные потери от ДТП в США в 2019 году. С учётом боли и потерянного качества жизни — почти $1,4 трлн.', source: 'nhtsaCost' },
      ],
      checklistTitle: 'Проверьте свой полис за 2 минуты',
      checklist: [
        'Найдите первую страницу полиса (declarations page). Ищите слова **Uninsured Motorist** или **UM**.',
        'Если UM нет или написано rejected («отказ»), значит, у вас этого покрытия нет. Во Флориде от него можно отказаться только письменно.',
        'Посмотрите на цифры. Например, 50/100 означает до $50 000 на человека и до $100 000 на аварию.',
        'Найдите пометку **stacked** или **non-stacked**. Если машин несколько, stacked UM складывает лимиты по каждой машине.',
        'Сравните UM с лимитами bodily injury (травмы других людей). Во Флориде они совпадают, если никто не выбирал лимиты ниже.',
        'В полисе вообще нет bodily injury? Тогда, скорее всего, нет и UM. Спросите нас.',
        'Сомневаетесь? Пришлите фото первой страницы — разберём вместе, по-русски, по-английски или по-испански.',
      ],
      relatedTitle: 'Читайте также',
      related: [
        { href: '/ru/protect/umbrella-insurance', label: 'Если виноваты вы', text: 'Ваш лимит ответственности может быть намного меньше решения присяжных. Как полис umbrella защищает сбережения и будущий доход.' },
        { href: '/ru/protect/life-insurance', label: 'Защитите доход семьи', text: 'Что будет с ипотекой и планами детей, если ваша зарплата пропадёт навсегда.' },
        { href: '/ru/blog/uninsured-motorist-coverage-florida', label: 'UM во Флориде: подробнее', text: 'Stacked и non-stacked, лимиты и как добавить UM в полис.' },
        { href: '/ru/car-insurance-florida-city', label: 'Автостраховка с личным агентом', text: 'Местный агент, который берёт трубку и помогает при страховом случае.' },
      ],
      faq: [
        { q: 'Что такое покрытие от незастрахованных водителей, если простыми словами?', a: 'Это часть вашего собственного автополиса, которая защищает вас, а не другого водителя. Если в вас врезался человек без страховки или с маленькой страховкой, UM может оплатить лечение, потерянную зарплату, а при серьёзных травмах — боль и страдания. Платит в пределах выбранного вами лимита.' },
        { q: 'UM во Флориде обязателен?', a: 'Нет. Но если в вашем полисе есть ответственность за травмы других (bodily injury), по закону Флориды UM включается автоматически, если от него не отказались письменно. Стоит проверить, не подписывали ли вы такой отказ при оформлении полиса.' },
        { q: 'Разве это не покрывает моя медицинская страховка?', a: 'Медстраховка может помочь со счетами врачей. Но она не заменит зарплату и не оплатит боль и страдания, а франшизы и доплаты всё равно останутся на вас. UM предназначен как раз для потерь, которые должен был оплатить виновник.' },
        { q: 'UM оплатит ремонт моей машины?', a: 'Нет. UM — это покрытие травм людей. Ремонт вашей машины обычно оплачивает collision в вашем собственном полисе.' },
        { q: 'Чем stacked UM отличается от non-stacked?', a: 'Если у вас несколько машин, stacked UM позволяет сложить лимиты UM по каждой машине. Non-stacked даёт лимит только одной машины. Во Флориде UM по умолчанию stacked, если вы письменно не выбрали non-stacked.' },
        { q: 'UM платит сразу, как PIP?', a: 'Обычно нет. PIP оплачивает счета по мере поступления. UM обычно выплачивают одной суммой, когда уже понятен весь объём лечения. Это ещё одна причина заранее подумать, на что жить эти месяцы.' },
        { q: 'А если виновник скрылся?', a: 'Во многих полисах водитель, который скрылся и не был найден, считается незастрахованным, так что UM может сработать. Сразу сообщите об аварии в полицию и проверьте точные условия своего полиса.' },
      ],
      ctaTitle: 'Есть ли у вас UM? Давайте проверим вместе.',
      ctaText:
        'Пришлите полис — проверим покрытие. Лицензированный агент простыми словами объяснит, что у вас есть. В рабочее время перезваниваем в течение часа.',
      disclaimer:
        'Эта страница — общая информация, а не юридическая консультация и не текст полиса. Что покрывается, зависит от вашего полиса, его лимитов и исключений. Истории с пометкой «Пример» придуманы, чтобы объяснить идею. «Реальные дела» взяты из открытых судебных документов по ссылкам ниже, и каждое дело индивидуально. Никто не может обещать, чем закончится страховой случай.',
      sources: ['flhsmvInsurance', 'iiiUninsured', 'statPip', 'statUm', 'dfsAuto', 'dfsToolkit', 'ssaDisability', 'nhtsaCost', 'flhsmvHitRun', 'case4dca2020', 'caseSc012846'],
    },
  },
};
