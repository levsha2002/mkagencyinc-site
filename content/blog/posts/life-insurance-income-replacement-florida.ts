import type { BlogPost } from '../types';
import { srcList } from '../../pages/rec/sources';

// Facts checked 2026-10-03: LIMRA/Life Happens 2026 Insurance Barometer facts sheet (47%
// trouble within 6 months; 29% secure > 2 years; 54% family would rely on life insurance;
// 47% of owners covered through work; nearly a quarter don't know how much/what type);
// s. 222.13 F.S. (2026) (named beneficiary vs estate); s. 627.4555 (64+, secondary addressee,
// 21 days). The worked example uses illustrative household numbers only (no insurance prices).
const KEYS = ['limra2026', 's222_13', 's627_4555'] as const;

export const post: BlogPost = {
  slug: 'life-insurance-income-replacement-florida',
  datePublished: '2026-10-03',
  translations: {
    en: {
      title: 'How Much Life Insurance Do You Need? An Income-Replacement Worksheet for Florida Families',
      metaTitle: 'How Much Life Insurance Do You Need? | M&K Agency',
      description: 'A plain-language worksheet to estimate how much life insurance your family needs to replace your income, plus the Florida beneficiary rules worth knowing.',
      ogAlt: 'Florida home sheltered under a giant navy-blue umbrella',
      excerpt: 'Nearly half of Americans say their household would struggle within six months of losing the main earner. Here is a simple way to size the gap.',
      category: 'Life insurance',
      body: [
        { type: 'p', text: 'In the 2026 Insurance Barometer study by LIMRA and Life Happens, **47% of adults** said they would have trouble paying living expenses **within six months** of their primary wage earner’s death, and only **29%** said they would stay financially secure for more than two years ([LIMRA](https://www.limra.com/siteassets/newsroom/liam/2026/facts-about-life-insurance.pdf)). More than half (**54%**) said their family would rely on life insurance. Yet nearly a quarter of Americans say they haven’t bought life insurance because they don’t know how much they need or what type to buy.' },
        { type: 'p', text: 'This worksheet is a starting point. It takes about ten minutes.' },
        { type: 'h2', text: 'Step 1: The income your family would lose' },
        { type: 'p', text: 'Write down your yearly take-home pay and the number of years your family would need it: until the youngest child finishes school, or until your spouse reaches retirement. Multiply the two.' },
        { type: 'h2', text: 'Step 2: The big bills that would not stop' },
        { type: 'ul', items: [
          'The **mortgage** balance, or several years of **rent**.',
          'Other **debts**: car payments, credit cards, medical bills.',
          '**Childcare** and **college** you want to cover.',
          '**Final expenses**.',
        ] },
        { type: 'h2', text: 'Step 3: What you already have' },
        { type: 'p', text: 'Subtract existing life insurance, including coverage **through work**. Nearly half of people with life insurance have it through their job (LIMRA), and that coverage may end or change when you leave. Subtract money and investments your family could use.' },
        { type: 'callout', title: 'An example, not a recommendation', text: 'A parent takes home $55,000 a year and wants to cover 12 years: $660,000. Add a $200,000 mortgage balance and $40,000 for college and final expenses: $900,000. Subtract $110,000 of coverage through work and $30,000 set aside. The gap is about $760,000. Your own numbers will be different.' },
        { type: 'h2', text: 'Step 4: Don’t forget the parent at home' },
        { type: 'p', text: 'A stay-at-home parent has no paycheck, but replacing childcare, driving and running the household costs real money. Many families size a policy for that parent too.' },
        { type: 'h2', text: 'Florida rules worth knowing' },
        { type: 'ul', items: [
          'When a Florida resident dies, life insurance paid to a **named beneficiary** goes to that person and is generally protected from the insured’s creditors; if it is payable to the **estate**, it becomes part of the estate ([s. 222.13](https://www.flsenate.gov/Laws/Statutes/2026/222.13)). Keep beneficiaries current.',
          'For a policyholder **64 or older** whose policy has been in force at least a year, a **secondary person** can be named to receive notice, and the insurer must mail notice at least **21 days before a lapse** for nonpayment ([s. 627.4555](https://www.flsenate.gov/Laws/Statutes/2026/627.4555)).',
        ] },
        { type: 'callout', title: 'Do the math with us', text: 'Use the calculator on our [Florida life insurance page](/en/life-insurance-florida), then talk to a licensed agent about the amount and type that fit your family.' },
        { type: 'p', text: 'This is general information. Coverage, terms and eligibility depend on the policy and underwriting.' },
      ],
      faq: [
        { q: 'How much life insurance do I need?', a: 'A common way to estimate it: the years of income your family would need, plus the mortgage, debts, childcare, college and final expenses, minus the coverage and assets you already have. The result is a starting point to review with an agent.' },
        { q: 'Is life insurance through work enough?', a: 'Often not. It is usually a set amount, and it may end or change if you leave the job. Nearly half of people with life insurance have it through work, according to LIMRA.' },
        { q: 'Does a stay-at-home parent need life insurance?', a: 'Many families think so, because replacing childcare and the work of running a home costs money even though there is no paycheck to replace.' },
        { q: 'Who should I name as beneficiary?', a: 'Name a primary and a backup beneficiary and keep them current after marriage, divorce or a birth. In Florida, proceeds paid to a named beneficiary are generally protected from the insured’s creditors, while proceeds payable to the estate become part of the estate.' },
      ],
      sources: srcList('en', [...KEYS]),
    },
    es: {
      title: '¿Cuánto seguro de vida necesita? Una hoja de cálculo para reemplazar su ingreso en Florida',
      metaTitle: '¿Cuánto seguro de vida necesita? | M&K Agency',
      description: 'Hoja sencilla para calcular cuánto seguro de vida necesita su familia para reemplazar su ingreso, y las reglas de beneficiarios de Florida.',
      ogAlt: 'Casa en Florida protegida bajo un gran paraguas azul marino',
      excerpt: 'Casi la mitad de los estadounidenses dice que en su casa tendrían problemas antes de seis meses si muriera quien más aporta. Así se calcula el hueco.',
      category: 'Seguro de vida',
      body: [
        { type: 'p', text: 'En el estudio Insurance Barometer 2026 de LIMRA y Life Happens, el **47% de los adultos** dijo que tendría problemas para pagar sus gastos **antes de seis meses** si muriera quien más aporta en la casa, y solo el **29%** dijo que seguiría estable más de dos años ([LIMRA](https://www.limra.com/siteassets/newsroom/liam/2026/facts-about-life-insurance.pdf)). Más de la mitad (**54%**) dijo que su familia contaría con el seguro de vida. Aun así, casi una cuarta parte de los estadounidenses dice que no lo ha comprado porque no sabe cuánto necesita ni qué tipo elegir.' },
        { type: 'p', text: 'Esta hoja es un punto de partida. Toma unos diez minutos.' },
        { type: 'h2', text: 'Paso 1: El ingreso que perdería su familia' },
        { type: 'p', text: 'Anote su sueldo neto anual y cuántos años lo necesitaría su familia: hasta que el menor termine la escuela, o hasta que su pareja se retire. Multiplique las dos cifras.' },
        { type: 'h2', text: 'Paso 2: Las cuentas grandes que no se detendrían' },
        { type: 'ul', items: [
          'El saldo de la **hipoteca**, o varios años de **renta**.',
          'Otras **deudas**: el carro, las tarjetas, cuentas médicas.',
          'El **cuidado de los niños** y la **universidad** que quiera cubrir.',
          'Los **gastos finales**.',
        ] },
        { type: 'h2', text: 'Paso 3: Lo que ya tiene' },
        { type: 'p', text: 'Reste el seguro de vida que ya tiene, incluido el **del trabajo**. Casi la mitad de quienes tienen seguro de vida lo tienen por el empleo (LIMRA), y esa cobertura puede terminar o cambiar si se va. Reste también el dinero e inversiones que su familia podría usar.' },
        { type: 'callout', title: 'Un ejemplo, no una recomendación', text: 'Un padre gana $55,000 netos al año y quiere cubrir 12 años: $660,000. Sume $200,000 de saldo de hipoteca y $40,000 para la universidad y los gastos finales: $900,000. Reste $110,000 de cobertura del trabajo y $30,000 guardados. El hueco es de unos $760,000. Sus cifras serán otras.' },
        { type: 'h2', text: 'Paso 4: No se olvide de quien cuida la casa' },
        { type: 'p', text: 'El padre o la madre que se queda en casa no tiene sueldo, pero reemplazar el cuidado de los niños, los traslados y todo el trabajo del hogar cuesta dinero de verdad. Muchas familias calculan una póliza también para esa persona.' },
        { type: 'h2', text: 'Reglas de Florida que conviene saber' },
        { type: 'ul', items: [
          'Cuando muere un residente de Florida, el seguro de vida pagadero a un **beneficiario nombrado** es para esa persona y en general queda protegido de los acreedores del asegurado; si se paga a la **sucesión**, pasa a formar parte de ella ([s. 222.13](https://www.flsenate.gov/Laws/Statutes/2026/222.13)). Mantenga sus beneficiarios al día.',
          'Si el dueño de la póliza tiene **64 años o más** y la póliza lleva al menos un año vigente, se puede nombrar a una **segunda persona** para recibir avisos, y la aseguradora debe enviar aviso por correo al menos **21 días antes de que caduque** por falta de pago ([s. 627.4555](https://www.flsenate.gov/Laws/Statutes/2026/627.4555)).',
        ] },
        { type: 'callout', title: 'Hagamos las cuentas juntos', text: 'Use la calculadora de nuestra [página de seguro de vida en Florida](/es/life-insurance-florida) y luego hable con un agente licenciado sobre el monto y el tipo que le convienen a su familia.' },
        { type: 'p', text: 'Esta es información general. La cobertura, las condiciones y la elegibilidad dependen de la póliza y de la evaluación de la aseguradora.' },
      ],
      faq: [
        { q: '¿Cuánto seguro de vida necesito?', a: 'Una forma común de calcularlo: los años de ingreso que su familia necesitaría, más la hipoteca, las deudas, el cuidado de los niños, la universidad y los gastos finales, menos la cobertura y los bienes que ya tiene. El resultado es un punto de partida para revisar con un agente.' },
        { q: '¿Basta con el seguro de vida del trabajo?', a: 'Muchas veces no. Suele ser un monto fijo y puede terminar o cambiar si deja el empleo. Según LIMRA, casi la mitad de quienes tienen seguro de vida lo tienen por el trabajo.' },
        { q: '¿El padre o la madre que se queda en casa necesita seguro de vida?', a: 'Muchas familias piensan que sí, porque reemplazar el cuidado de los niños y el trabajo del hogar cuesta dinero aunque no haya un sueldo que reemplazar.' },
        { q: '¿A quién debo nombrar como beneficiario?', a: 'Nombre un beneficiario principal y uno de respaldo, y actualícelos después de un matrimonio, un divorcio o un nacimiento. En Florida, lo que se paga a un beneficiario nombrado en general queda protegido de los acreedores del asegurado; lo que se paga a la sucesión pasa a formar parte de ella.' },
      ],
      sources: srcList('es', [...KEYS]),
    },
    ru: {
      title: 'Сколько страховки жизни вам нужно? Расчёт замены дохода для семьи во Флориде',
      metaTitle: 'Сколько страховки жизни нужно семье | M&K Agency',
      description: 'Простой расчёт: сколько страховки жизни нужно, чтобы заменить ваш доход для семьи, и правила Флориды о выгодоприобретателях, которые стоит знать.',
      ogAlt: 'Дом во Флориде под огромным тёмно-синим зонтом',
      excerpt: 'Почти половина американцев говорит, что их семья не справится уже через полгода после смерти главного кормильца. Вот как оценить эту дыру.',
      category: 'Страхование жизни',
      body: [
        { type: 'p', text: 'В исследовании Insurance Barometer 2026 от LIMRA и Life Happens **47% взрослых** сказали, что им было бы трудно оплачивать расходы **уже в течение полугода** после смерти главного кормильца, и только **29%** — что семья продержится дольше двух лет ([LIMRA](https://www.limra.com/siteassets/newsroom/liam/2026/facts-about-life-insurance.pdf)). Больше половины (**54%**) сказали, что семья будет рассчитывать на страховку жизни. И всё же почти четверть американцев говорят, что не оформили её, потому что не знают, сколько нужно и какой тип выбрать.' },
        { type: 'p', text: 'Этот расчёт — отправная точка. Он займёт минут десять.' },
        { type: 'h2', text: 'Шаг 1. Доход, который потеряет семья' },
        { type: 'p', text: 'Запишите свой годовой доход «на руки» и сколько лет он понадобится семье: пока младший не окончит школу или пока супруг(а) не выйдет на пенсию. Перемножьте.' },
        { type: 'h2', text: 'Шаг 2. Крупные платежи, которые не остановятся' },
        { type: 'ul', items: [
          'Остаток **ипотеки** или несколько лет **аренды**.',
          'Другие **долги**: машина, кредитные карты, медицинские счета.',
          '**Присмотр за детьми** и **колледж**, которые вы хотите покрыть.',
          '**Расходы на похороны**.',
        ] },
        { type: 'h2', text: 'Шаг 3. Что уже есть' },
        { type: 'p', text: 'Вычтите имеющуюся страховку жизни, включая полис **от работы**. Почти половина застрахованных получают страховку через работу (LIMRA), и при увольнении она может закончиться или измениться. Вычтите и сбережения и вложения, которыми сможет воспользоваться семья.' },
        { type: 'callout', title: 'Пример, а не рекомендация', text: 'Родитель получает «на руки» $55 000 в год и хочет покрыть 12 лет: $660 000. Плюс остаток ипотеки $200 000 и $40 000 на колледж и похороны: $900 000. Минус $110 000 страховки от работы и $30 000 отложенных денег. Дыра — около $760 000. Ваши цифры будут другими.' },
        { type: 'h2', text: 'Шаг 4. Не забудьте о том, кто ведёт дом' },
        { type: 'p', text: 'У родителя, который сидит дома с детьми, нет зарплаты, но заменить присмотр за детьми, поездки и всю домашнюю работу стоит реальных денег. Многие семьи страхуют и его.' },
        { type: 'h2', text: 'Правила Флориды, которые стоит знать' },
        { type: 'ul', items: [
          'Когда умирает житель Флориды, страховка жизни, выплачиваемая **указанному выгодоприобретателю**, достаётся ему и, как правило, защищена от требований по долгам застрахованного; если выплата идёт в **наследственную массу**, деньги становятся её частью ([ст. 222.13](https://www.flsenate.gov/Laws/Statutes/2026/222.13)). Следите, чтобы выгодоприобретатели были актуальны.',
          'Если владельцу полиса **64 года или больше** и полис действует не меньше года, можно указать **второго человека** для уведомлений, и страховая обязана отправить письмо не позднее чем за **21 день до прекращения полиса** за неуплату ([ст. 627.4555](https://www.flsenate.gov/Laws/Statutes/2026/627.4555)).',
        ] },
        { type: 'callout', title: 'Посчитаем вместе', text: 'Воспользуйтесь калькулятором на нашей [странице о страховании жизни во Флориде](/ru/life-insurance-florida), а затем обсудите с лицензированным агентом сумму и тип полиса для вашей семьи.' },
        { type: 'p', text: 'Это общая информация. Покрытие, условия и возможность оформления зависят от полиса и андеррайтинга.' },
      ],
      faq: [
        { q: 'Сколько страховки жизни мне нужно?', a: 'Распространённый способ: годы дохода, которые понадобятся семье, плюс ипотека, долги, присмотр за детьми, колледж и похороны, минус уже имеющиеся покрытие и активы. Итог — отправная точка для разговора с агентом.' },
        { q: 'Хватит ли страховки от работы?', a: 'Часто нет. Обычно это фиксированная сумма, и при увольнении она может закончиться или измениться. По данным LIMRA, почти половина застрахованных получают страховку через работу.' },
        { q: 'Нужна ли страховка жизни родителю, который сидит дома?', a: 'Многие семьи считают, что да: заменить присмотр за детьми и домашнюю работу стоит денег, даже если зарплаты нет.' },
        { q: 'Кого указать выгодоприобретателем?', a: 'Укажите основного и запасного выгодоприобретателя и обновляйте их после свадьбы, развода или рождения ребёнка. Во Флориде выплата указанному выгодоприобретателю, как правило, защищена от требований по долгам застрахованного, а выплата в наследственную массу становится её частью.' },
      ],
      sources: srcList('ru', [...KEYS]),
    },
  },
};
