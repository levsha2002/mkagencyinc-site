import type { TopicPage } from './types';

// Life tab: income replacement, mortgage, kids' education.
// Figures: LIMRA/Life Happens 2026 Insurance Barometer facts PDF; SSA EN-05-10029.
export const life: TopicPage = {
  slug: 'life-insurance',
  leadSource: 'learn-life',
  leadType: 'Life',
  published: '2026-10-03',
  modified: '2026-10-03',
  t: {
    en: {
      metaTitle: "Life Insurance in Florida: Protect Your Family's Income | M&K Agency",
      metaDesc:
        "If your paycheck stopped tomorrow, how long would your family be OK? A plain guide to replacing income, paying the mortgage and funding your kids' education.",
      tab: 'Life insurance',
      kicker: 'Life insurance · Income for your family',
      h1: 'If your paycheck stopped tomorrow, how long would your family be OK?',
      sub: "Life insurance is not really about dying. It's about the people who count on your paycheck: the mortgage, the groceries, the kids' school. Here is how it works, in plain words.",
      heroFigure: 'family-paycheck',
      keyTitle: 'The short version',
      key: [
        'Nearly half of U.S. adults (**47%**) say they would have trouble paying living expenses within **6 months** if the main earner died.',
        'Only **29%** say they would stay financially secure for more than 2 years.',
        'About **92 million** adults (38%) say they need life insurance or need more of it.',
        'Nearly half of people who own life insurance (**47%**) have it through work. Check what happens to it if you change jobs.',
        'Life insurance pays your family money when you die, so the paycheck you leave behind can keep paying the bills.',
      ],
      sections: [
        {
          id: 'story',
          h2: 'A story: one family, one paycheck',
          figure: 'family-paycheck',
          blocks: [{ type: 'p', text: 'This is the kind of family we talk to every week.' }],
          stories: [
            {
              title: 'Example (made up to explain the idea)',
              steps: [
                'Mark is 41 and earns about $60,000 a year. His wife Lisa works part time and takes care of their kids, ages 4 and 9.',
                'They pay $1,900 a month for the mortgage, plus a car payment. They have a little in savings.',
                "One night Mark has a heart attack. He doesn't survive.",
                "His paycheck stops. The mortgage, the groceries, the daycare and the light bill don't.",
                'Mark only had life insurance through work: about one year of his pay. After the funeral and a few months of bills, most of it is gone.',
              ],
              ending:
                "With a personal policy of, for example, $750,000, Lisa could pay off the rest of the house (about $250,000), replace Mark's income for about seven years and still set aside $80,000 for the kids' education. That is the difference between a hard year and a hard life.",
            },
          ],
        },
        {
          id: 'income',
          h2: 'Your biggest asset is your paycheck',
          figure: 'future-paychecks',
          blocks: [
            { type: 'p', text: 'Most people insure their car and their house. But for a working family, the most valuable thing is often the paycheck. $50,000 a year for 25 more years is $1.25 million.' },
            { type: 'p', text: 'When we help a family choose an amount, we look at four things:' },
            {
              type: 'ul',
              items: [
                '**Income:** how many years your family would need your paycheck.',
                "**The home:** what's left on the mortgage, or how many years of rent.",
                '**The kids:** childcare now, and trade school or college later.',
                '**Debts and final costs:** the car payment, credit cards and the funeral.',
              ],
            },
            { type: 'callout', title: 'Why people buy it', text: "In the 2026 study by LIMRA and Life Happens, the top reasons people gave for owning life insurance included covering burial and final expenses (57%), replacing a wage earner's lost income (27%) and paying off the mortgage (21%)." },
          ],
        },
        {
          id: 'mortgage',
          h2: 'Keeping the family in the home',
          blocks: [
            { type: 'p', text: "For many families, the home is where the kids' school, friends and church are. If the main paycheck stops, the mortgage can be the first bill to fall behind." },
            { type: 'p', text: 'Life insurance can pay off the mortgage or cover the payments for years, so nobody has to move at the worst possible time.' },
          ],
        },
        {
          id: 'education',
          h2: "The kids' future",
          blocks: [
            { type: 'p', text: 'Life insurance can put money aside for daycare now and for trade school or college later. You decide who receives the money, and you can name more than one person.' },
            { type: 'p', text: 'If your kids are young, ask us how to set up the beneficiary the right way, so the money can actually be used for them.' },
          ],
        },
        {
          id: 'work',
          h2: 'Is coverage through work enough?',
          blocks: [
            { type: 'p', text: 'Coverage through work is a good start. But it is usually tied to the job. If you change jobs, get laid off or retire, it may end.' },
            { type: 'p', text: 'The amount is also often small compared with what a family needs, for example one or two years of pay. A personal policy stays with you, wherever you work.' },
          ],
        },
        {
          id: 'disability',
          h2: "What if you live, but can't work?",
          blocks: [
            { type: 'p', text: 'Life insurance pays when someone dies. But a long illness or injury can also stop a paycheck. Social Security says a 20-year-old worker has a 1 in 4 chance of becoming disabled before full retirement age.' },
            { type: 'p', text: 'Social Security disability is only for conditions expected to last at least a year, and it generally starts after a 5-month wait. Some life policies have extra options (called riders) that can help if you become seriously ill. Ask us what is available for you.' },
          ],
        },
      ],
      statsTitle: 'The numbers behind it',
      stats: [
        { value: '47%', text: 'of U.S. adults say they would have trouble paying living expenses within 6 months of the main earner\'s death.', source: 'limra2026' },
        { value: '29%', text: 'say they would remain financially secure for more than 2 years if a main earner died.', source: 'limra2026' },
        { value: '92 million', text: 'adults (38%) say they need life insurance or need more coverage.', source: 'limra2026' },
        { value: '47%', text: 'of people who own life insurance have coverage through their workplace.', source: 'limra2026' },
        { value: '54%', text: 'say their family would rely on life insurance if a main earner died unexpectedly.', source: 'limra2026' },
        { value: '1 in 4', text: 'is the chance a 20-year-old worker becomes disabled before full retirement age, says Social Security.', source: 'ssaDisability' },
      ],
      checklistTitle: 'Five questions to ask yourself',
      checklist: [
        'If my paycheck stopped today, how many months could my family pay the bills?',
        'How much is left on the mortgage?',
        'How many years until my youngest child finishes school?',
        'Is my only life insurance through work? What happens if I leave that job?',
        'Who is the beneficiary on my policy, and is it up to date?',
        "Not sure? Send us your policy, or your work benefits page, and we'll check your coverage.",
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/en/protect/umbrella-insurance', label: 'Umbrella & wealth protection', text: 'Protect your savings and your future from a lawsuit, too.' },
        { href: '/en/protect/car-insurance', label: 'When a crash stops the paycheck', text: 'How uninsured motorist coverage helps if a driver with no insurance hits you.' },
        { href: '/en/life-insurance-florida', label: 'Life insurance with a personal agent', text: 'Term and permanent life, explained by a licensed agent who speaks your language.' },
        { href: '/en/protection-check', label: 'Free protection check and mortgage calculator', text: 'Answer a few questions and see where your family may have gaps.' },
      ],
      faq: [
        { q: 'How much life insurance do I need?', a: "There's no single number. Start with how many years your family would need your income, add what's left on the mortgage and other debts, then add future costs like your kids' education. We can do the math with you in a few minutes." },
        { q: 'What is the difference between term and permanent life insurance?', a: 'Term life covers you for a set number of years, for example 20 or 30, often while the kids are growing up and the mortgage is being paid. Permanent life insurance, such as whole life, is meant to last your whole life and can build cash value.' },
        { q: 'Does a stay-at-home parent need life insurance?', a: 'Often, yes. If a stay-at-home parent dies, the family may suddenly need to pay for childcare, rides to school and help at home. Life insurance can help pay for that.' },
        { q: 'Is my coverage through work enough?', a: 'It is a good start, but it is usually tied to the job and the amount is often small. Check how much you have and what happens if you leave the job.' },
        { q: 'Can I get life insurance if I have health problems?', a: 'Often yes, but it depends on the person and the policy. Some policies ask health questions or need a medical exam, and others ask fewer questions. We will help you look at the options.' },
        { q: 'Who gets the money?', a: 'The people you name as beneficiaries. The money usually goes to them directly. If your kids are minors, ask us how to name them the right way.' },
      ],
      ctaTitle: "How long would your family be OK? Let's find out.",
      ctaText:
        "Send us your policy and we'll check your coverage, including coverage through work. A licensed agent will walk you through it in plain words. We call back within 1 hour during business hours.",
      disclaimer:
        'This page is general information, not legal, tax or financial advice, and not policy language. What a policy pays depends on its terms, and approval depends on the insurer. Stories marked "Example" are made up to explain the idea. Statistics come from the public sources linked below.',
      sources: ['limra2026', 'ssaDisability'],
    },
    es: {
      metaTitle: 'Seguro de vida en Florida: proteja el ingreso familiar | M&K Agency',
      metaDesc:
        'Si su sueldo se detuviera mañana, ¿cuánto tiempo estaría bien su familia? Guía sencilla para reemplazar ingresos, pagar la hipoteca y los estudios de sus hijos.',
      tab: 'Seguro de vida',
      kicker: 'Seguro de vida · Ingresos para su familia',
      h1: 'Si su sueldo se detuviera mañana, ¿cuánto tiempo estaría bien su familia?',
      sub: 'El seguro de vida no se trata de morir. Se trata de las personas que dependen de su sueldo: la hipoteca, la comida, la escuela de los niños. Aquí le explicamos cómo funciona, en palabras simples.',
      heroFigure: 'family-paycheck',
      keyTitle: 'En pocas palabras',
      key: [
        'Casi la mitad de los adultos en EE. UU. (**47%**) dice que tendría problemas para pagar sus gastos en menos de **6 meses** si muriera quien más gana en la casa.',
        'Solo el **29%** dice que seguiría estable económicamente por más de 2 años.',
        'Unos **92 millones** de adultos (38%) dicen que necesitan seguro de vida o necesitan más.',
        'Casi la mitad de quienes tienen seguro de vida (**47%**) lo tienen por el trabajo. Revise qué pasa con ese seguro si cambia de empleo.',
        'El seguro de vida le paga dinero a su familia cuando usted fallece, para que el sueldo que deja siga pagando las cuentas.',
      ],
      sections: [
        {
          id: 'story',
          h2: 'Una historia: una familia, un sueldo',
          figure: 'family-paycheck',
          blocks: [{ type: 'p', text: 'Así son muchas de las familias con las que hablamos cada semana.' }],
          stories: [
            {
              title: 'Ejemplo (inventado para explicar la idea)',
              steps: [
                'Carlos tiene 41 años y gana unos $60,000 al año. Su esposa María trabaja medio tiempo y cuida a sus hijos de 4 y 9 años.',
                'Pagan $1,900 al mes de hipoteca, más el pago del carro. Tienen algunos ahorros.',
                'Una noche, Carlos sufre un ataque al corazón y no sobrevive.',
                'Su sueldo se detiene. La hipoteca, la comida, la guardería y la luz no.',
                'Carlos solo tenía seguro de vida por el trabajo: cerca de un año de su sueldo. Después del funeral y de unos meses de cuentas, casi no queda nada.',
              ],
              ending:
                'Con una póliza personal de, por ejemplo, $750,000, María podría terminar de pagar la casa (unos $250,000), reemplazar el sueldo de Carlos por unos siete años y todavía guardar $80,000 para los estudios de los niños. Esa es la diferencia entre un año difícil y una vida difícil.',
            },
          ],
        },
        {
          id: 'income',
          h2: 'Su bien más valioso es su sueldo',
          figure: 'future-paychecks',
          blocks: [
            { type: 'p', text: 'Casi todos aseguran el carro y la casa. Pero para una familia trabajadora, lo más valioso muchas veces es el sueldo. $50,000 al año durante 25 años más son $1.25 millones.' },
            { type: 'p', text: 'Cuando ayudamos a una familia a escoger un monto, miramos cuatro cosas:' },
            {
              type: 'ul',
              items: [
                '**El ingreso:** cuántos años su familia necesitaría su sueldo.',
                '**La casa:** lo que falta de la hipoteca, o cuántos años de renta.',
                '**Los hijos:** el cuidado de los niños hoy, y una escuela técnica o la universidad mañana.',
                '**Deudas y gastos finales:** el pago del carro, las tarjetas y el funeral.',
              ],
            },
            { type: 'callout', title: 'Por qué la gente lo compra', text: 'En el estudio de 2026 de LIMRA y Life Happens, entre las razones principales para tener seguro de vida están cubrir el entierro y los gastos finales (57%), reemplazar el ingreso perdido de quien trabaja (27%) y terminar de pagar la hipoteca (21%).' },
          ],
        },
        {
          id: 'mortgage',
          h2: 'Que la familia se quede en su casa',
          blocks: [
            { type: 'p', text: 'Para muchas familias, la casa es donde están la escuela, los amigos y la iglesia de los niños. Si el sueldo principal se detiene, la hipoteca puede ser la primera cuenta que se atrasa.' },
            { type: 'p', text: 'El seguro de vida puede pagar la hipoteca completa o cubrir los pagos por años, para que nadie tenga que mudarse en el peor momento.' },
          ],
        },
        {
          id: 'education',
          h2: 'El futuro de los hijos',
          blocks: [
            { type: 'p', text: 'El seguro de vida puede guardar dinero para la guardería hoy y para una escuela técnica o la universidad mañana. Usted decide quién recibe el dinero y puede nombrar a más de una persona.' },
            { type: 'p', text: 'Si sus hijos son pequeños, pregúntenos cómo nombrar al beneficiario de la forma correcta, para que el dinero de verdad se pueda usar para ellos.' },
          ],
        },
        {
          id: 'work',
          h2: '¿Alcanza con el seguro del trabajo?',
          blocks: [
            { type: 'p', text: 'El seguro del trabajo es un buen comienzo. Pero normalmente depende del empleo. Si cambia de trabajo, lo despiden o se jubila, puede terminar.' },
            { type: 'p', text: 'Además, el monto muchas veces es pequeño comparado con lo que necesita una familia, por ejemplo uno o dos años de sueldo. Una póliza personal se queda con usted, trabaje donde trabaje.' },
          ],
        },
        {
          id: 'disability',
          h2: '¿Y si vive, pero no puede trabajar?',
          blocks: [
            { type: 'p', text: 'El seguro de vida paga cuando alguien fallece. Pero una enfermedad o lesión larga también puede detener el sueldo. El Seguro Social dice que un trabajador de 20 años tiene 1 probabilidad entre 4 de quedar incapacitado antes de la edad plena de jubilación.' },
            { type: 'p', text: 'El Seguro Social por incapacidad es solo para condiciones que se espera duren al menos un año, y por lo general empieza después de 5 meses de espera. Algunas pólizas de vida tienen opciones extra (llamadas riders) que pueden ayudar si usted se enferma gravemente. Pregúntenos qué hay disponible para usted.' },
          ],
        },
      ],
      statsTitle: 'Los números detrás',
      stats: [
        { value: '47%', text: 'de los adultos en EE. UU. dice que tendría problemas para pagar sus gastos en menos de 6 meses si muriera quien más gana.', source: 'limra2026' },
        { value: '29%', text: 'dice que seguiría estable económicamente por más de 2 años si muriera quien más gana.', source: 'limra2026' },
        { value: '92 millones', text: 'de adultos (38%) dicen que necesitan seguro de vida o más cobertura.', source: 'limra2026' },
        { value: '47%', text: 'de quienes tienen seguro de vida lo tienen por su trabajo.', source: 'limra2026' },
        { value: '54%', text: 'dice que su familia dependería del seguro de vida si quien más gana muriera de repente.', source: 'limra2026' },
        { value: '1 de 4', text: 'es la probabilidad de que un trabajador de 20 años quede incapacitado antes de la jubilación plena, según el Seguro Social.', source: 'ssaDisability' },
      ],
      checklistTitle: 'Cinco preguntas para hacerse',
      checklist: [
        'Si mi sueldo se detuviera hoy, ¿cuántos meses podría mi familia pagar las cuentas?',
        '¿Cuánto falta por pagar de la hipoteca?',
        '¿Cuántos años faltan para que mi hijo menor termine la escuela?',
        '¿Mi único seguro de vida es el del trabajo? ¿Qué pasa si dejo ese empleo?',
        '¿Quién es el beneficiario de mi póliza y está al día?',
        '¿No está seguro? Envíenos su póliza, o la página de beneficios de su trabajo, y revisamos su cobertura.',
      ],
      relatedTitle: 'Siga leyendo',
      related: [
        { href: '/es/protect/umbrella-insurance', label: 'Umbrella y protección del patrimonio', text: 'Proteja también sus ahorros y su futuro de una demanda.' },
        { href: '/es/protect/car-insurance', label: 'Cuando un choque detiene el sueldo', text: 'Cómo ayuda la cobertura de conductor sin seguro si lo choca alguien sin seguro.' },
        { href: '/es/life-insurance-florida', label: 'Seguro de vida con un agente personal', text: 'Vida a término y permanente, explicado por un agente licenciado que habla su idioma.' },
        { href: '/es/protection-check', label: 'Revisión de protección y calculadora de hipoteca', text: 'Conteste unas preguntas y vea dónde su familia puede tener huecos.' },
      ],
      faq: [
        { q: '¿Cuánto seguro de vida necesito?', a: 'No hay un solo número. Empiece por cuántos años su familia necesitaría su sueldo, sume lo que falta de la hipoteca y otras deudas, y luego los gastos futuros, como los estudios de sus hijos. Podemos hacer la cuenta con usted en unos minutos.' },
        { q: '¿Cuál es la diferencia entre el seguro de vida a término y el permanente?', a: 'El seguro a término lo cubre por un número fijo de años, por ejemplo 20 o 30, muchas veces mientras los hijos crecen y se paga la hipoteca. El permanente, como el whole life, está pensado para toda la vida y puede acumular valor en efectivo.' },
        { q: '¿Una mamá o un papá que se queda en casa necesita seguro de vida?', a: 'Muchas veces, sí. Si fallece quien cuida la casa y a los niños, la familia de repente puede tener que pagar guardería, transporte a la escuela y ayuda en casa. El seguro de vida puede ayudar a pagarlo.' },
        { q: '¿Alcanza con el seguro del trabajo?', a: 'Es un buen comienzo, pero normalmente depende del empleo y el monto suele ser pequeño. Revise cuánto tiene y qué pasa si deja ese trabajo.' },
        { q: '¿Puedo conseguir seguro de vida si tengo problemas de salud?', a: 'Muchas veces sí, pero depende de la persona y de la póliza. Algunas pólizas hacen preguntas de salud o piden un examen médico, y otras hacen menos preguntas. Le ayudamos a ver las opciones.' },
        { q: '¿Quién recibe el dinero?', a: 'Las personas que usted nombre como beneficiarios. Normalmente el dinero les llega directamente. Si sus hijos son menores de edad, pregúntenos cómo nombrarlos de la forma correcta.' },
      ],
      ctaTitle: '¿Cuánto tiempo estaría bien su familia? Averigüémoslo.',
      ctaText:
        'Envíenos su póliza y revisamos su cobertura, incluido el seguro del trabajo. Un agente licenciado se la explica en palabras simples. Le devolvemos la llamada en menos de 1 hora en horario de oficina.',
      disclaimer:
        'Esta página es información general, no asesoría legal, fiscal ni financiera, ni lenguaje de póliza. Lo que paga una póliza depende de sus términos, y la aprobación depende de la aseguradora. Las historias marcadas como "Ejemplo" son inventadas para explicar la idea. Las estadísticas vienen de las fuentes públicas enlazadas abajo.',
      sources: ['limra2026', 'ssaDisability'],
    },
    ru: {
      metaTitle: 'Страхование жизни во Флориде: защитите доход семьи | M&K Agency',
      metaDesc:
        'Если завтра ваша зарплата пропадёт, сколько продержится семья? Простой гид: как заменить доход, закрыть ипотеку и оплатить учёбу детей. Данные 2026 года.',
      tab: 'Страхование жизни',
      kicker: 'Страхование жизни · Доход для семьи',
      h1: 'Если завтра ваша зарплата пропадёт, сколько продержится семья?',
      sub: 'Страхование жизни — это не про смерть. Это про тех, кто живёт на вашу зарплату: ипотека, продукты, школа детей. Объясняем простыми словами, как это работает.',
      heroFigure: 'family-paycheck',
      keyTitle: 'Коротко',
      key: [
        'Почти половина взрослых в США (**47%**) говорят, что уже через **6 месяцев** с трудом оплачивали бы расходы, если бы умер главный кормилец.',
        'Только **29%** уверены, что сохранили бы финансовую стабильность дольше 2 лет.',
        'Около **92 миллионов** взрослых (38%) говорят, что им нужна страховка жизни или нужна бо́льшая сумма.',
        'Почти у половины тех, у кого есть страховка жизни (**47%**), она оформлена через работу. Проверьте, что с ней будет, если вы смените работу.',
        'Страхование жизни выплачивает деньги семье, если вас не станет, — чтобы ваш доход продолжал оплачивать счета.',
      ],
      sections: [
        {
          id: 'story',
          h2: 'История: одна семья, одна зарплата',
          figure: 'family-paycheck',
          blocks: [{ type: 'p', text: 'Именно с такими семьями мы разговариваем каждую неделю.' }],
          stories: [
            {
              title: 'Пример (придуман, чтобы объяснить идею)',
              steps: [
                'Андрею 41 год, он зарабатывает около $60 000 в год. Его жена Ольга работает неполный день и занимается детьми — им 4 и 9 лет.',
                'Ипотека — $1900 в месяц, плюс платёж за машину. Сбережений немного.',
                'Однажды ночью у Андрея случается инфаркт. Спасти его не удаётся.',
                'Зарплата больше не приходит. А ипотека, продукты, садик и счёт за свет — приходят.',
                'Страховка жизни у Андрея была только через работу: примерно его годовой доход. После похорон и нескольких месяцев счетов почти ничего не осталось.',
              ],
              ending:
                'С личным полисом, например на $750 000, Ольга могла бы выплатить остаток ипотеки (около $250 000), заменить доход Андрея примерно на семь лет и ещё отложить $80 000 на учёбу детей. В этом разница между одним тяжёлым годом и тяжёлой жизнью.',
            },
          ],
        },
        {
          id: 'income',
          h2: 'Ваш главный капитал — это ваша зарплата',
          figure: 'future-paychecks',
          blocks: [
            { type: 'p', text: 'Машину и дом страхуют почти все. Но для работающей семьи самое ценное — это часто зарплата. $50 000 в год ещё 25 лет — это $1,25 млн.' },
            { type: 'p', text: 'Когда мы помогаем семье выбрать сумму, мы смотрим на четыре вещи:' },
            {
              type: 'ul',
              items: [
                '**Доход:** сколько лет семье нужна была бы ваша зарплата.',
                '**Дом:** сколько осталось по ипотеке или сколько лет аренды.',
                '**Дети:** няня или садик сейчас, колледж или университет потом.',
                '**Долги и последние расходы:** машина, кредитные карты, похороны.',
              ],
            },
            { type: 'callout', title: 'Зачем люди её покупают', text: 'В исследовании LIMRA и Life Happens за 2026 год среди главных причин иметь страховку жизни — оплатить похороны и последние расходы (57%), заменить потерянный доход кормильца (27%) и закрыть ипотеку (21%).' },
          ],
        },
        {
          id: 'mortgage',
          h2: 'Чтобы семья осталась в своём доме',
          blocks: [
            { type: 'p', text: 'Для многих семей дом — это школа детей, их друзья, их церковь. Если главная зарплата пропадает, ипотека часто становится первым счётом, который перестают платить вовремя.' },
            { type: 'p', text: 'Страхование жизни может полностью закрыть ипотеку или покрывать платежи годами, чтобы никому не пришлось переезжать в самый тяжёлый момент.' },
          ],
        },
        {
          id: 'education',
          h2: 'Будущее детей',
          blocks: [
            { type: 'p', text: 'Страховка жизни может оставить деньги на садик сейчас и на колледж или университет потом. Вы сами решаете, кто получит деньги, и можете указать несколько человек.' },
            { type: 'p', text: 'Если дети маленькие, спросите нас, как правильно указать получателя (beneficiary), чтобы деньги действительно можно было потратить на них.' },
          ],
        },
        {
          id: 'work',
          h2: 'Хватит ли страховки от работы?',
          blocks: [
            { type: 'p', text: 'Страховка через работу — хорошее начало. Но обычно она привязана к месту работы. Если вы смените работу, вас сократят или вы уйдёте на пенсию, она может закончиться.' },
            { type: 'p', text: 'К тому же сумма часто небольшая по сравнению с тем, что нужно семье, — например, доход за год-два. Личный полис остаётся с вами, где бы вы ни работали.' },
          ],
        },
        {
          id: 'disability',
          h2: 'А если вы живы, но не можете работать?',
          blocks: [
            { type: 'p', text: 'Страхование жизни платит, когда человека не стало. Но долгая болезнь или травма тоже может остановить зарплату. По данным Social Security, у 20-летнего работника 1 шанс из 4 стать нетрудоспособным до полного пенсионного возраста.' },
            { type: 'p', text: 'Пособие Social Security по инвалидности дают только при состоянии, которое продлится не меньше года, и обычно после 5 месяцев ожидания. В некоторых полисах страхования жизни есть дополнительные опции (riders), которые могут помочь при тяжёлой болезни. Спросите нас, что доступно именно вам.' },
          ],
        },
      ],
      statsTitle: 'Цифры, на которых всё основано',
      stats: [
        { value: '47%', text: 'взрослых в США говорят, что уже через 6 месяцев с трудом оплачивали бы расходы, если бы умер главный кормилец.', source: 'limra2026' },
        { value: '29%', text: 'уверены, что сохранили бы финансовую стабильность дольше 2 лет после смерти кормильца.', source: 'limra2026' },
        { value: '92 млн', text: 'взрослых (38%) говорят, что им нужна страховка жизни или бо́льшее покрытие.', source: 'limra2026' },
        { value: '47%', text: 'владельцев страховки жизни получили её через работу.', source: 'limra2026' },
        { value: '54%', text: 'говорят, что их семья рассчитывала бы на страховку жизни, если бы кормилец внезапно умер.', source: 'limra2026' },
        { value: '1 из 4', text: '— шанс 20-летнего работника стать нетрудоспособным до полного пенсионного возраста (данные Social Security).', source: 'ssaDisability' },
      ],
      checklistTitle: 'Пять вопросов к себе',
      checklist: [
        'Если моя зарплата пропадёт сегодня, сколько месяцев семья сможет платить по счетам?',
        'Сколько осталось выплатить по ипотеке?',
        'Сколько лет до того, как младший ребёнок закончит учёбу?',
        'Моя единственная страховка жизни — от работы? Что с ней будет, если я уйду?',
        'Кто указан получателем в моём полисе и актуально ли это?',
        'Сомневаетесь? Пришлите полис или страницу с льготами от работы — проверим покрытие.',
      ],
      relatedTitle: 'Читайте также',
      related: [
        { href: '/ru/protect/umbrella-insurance', label: 'Umbrella и защита капитала', text: 'Защитите сбережения и будущее ещё и от судебного иска.' },
        { href: '/ru/protect/car-insurance', label: 'Когда авария останавливает зарплату', text: 'Как помогает UM, если в вас врезался водитель без страховки.' },
        { href: '/ru/life-insurance-florida', label: 'Страхование жизни с личным агентом', text: 'Срочное и пожизненное страхование — объяснит лицензированный агент на вашем языке.' },
        { href: '/ru/protection-check', label: 'Проверка защиты и ипотечный калькулятор', text: 'Ответьте на несколько вопросов и посмотрите, где у семьи могут быть пробелы.' },
      ],
      faq: [
        { q: 'Какая сумма страховки жизни мне нужна?', a: 'Единой цифры нет. Начните с того, сколько лет семье нужен был бы ваш доход, добавьте остаток ипотеки и других долгов, а потом будущие расходы — например, учёбу детей. Мы можем посчитать вместе с вами за несколько минут.' },
        { q: 'Чем срочное страхование жизни отличается от пожизненного?', a: 'Срочное (term) действует определённое число лет, например 20 или 30, — часто пока растут дети и выплачивается ипотека. Пожизненное (например, whole life) рассчитано на всю жизнь и может накапливать денежную стоимость.' },
        { q: 'Нужна ли страховка жизни родителю, который сидит дома с детьми?', a: 'Часто да. Если не станет того, кто ведёт дом и смотрит за детьми, семье вдруг придётся платить за няню, дорогу в школу и помощь по дому. Страховка жизни может помочь это оплатить.' },
        { q: 'Хватит ли страховки от работы?', a: 'Это хорошее начало, но обычно она привязана к работе, а сумма часто небольшая. Проверьте, сколько у вас есть и что будет, если вы уйдёте с этой работы.' },
        { q: 'Можно ли оформить страховку жизни, если есть проблемы со здоровьем?', a: 'Часто да, но всё зависит от человека и полиса. В одних полисах задают вопросы о здоровье или просят пройти медосмотр, в других вопросов меньше. Поможем разобраться в вариантах.' },
        { q: 'Кто получит деньги?', a: 'Те, кого вы укажете получателями (beneficiaries). Обычно деньги выплачивают им напрямую. Если дети несовершеннолетние, спросите нас, как правильно их указать.' },
      ],
      ctaTitle: 'Сколько продержится ваша семья? Давайте посчитаем.',
      ctaText:
        'Пришлите полис — проверим покрытие, включая страховку от работы. Лицензированный агент всё объяснит простыми словами. В рабочее время перезваниваем в течение часа.',
      disclaimer:
        'Эта страница — общая информация, а не юридическая, налоговая или финансовая консультация и не текст полиса. Что платит полис, зависит от его условий, а одобрение — от страховой компании. Истории с пометкой «Пример» придуманы, чтобы объяснить идею. Статистика взята из открытых источников по ссылкам ниже.',
      sources: ['limra2026', 'ssaDisability'],
    },
  },
};
