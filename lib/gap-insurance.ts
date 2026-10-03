// /[lang]/gap-insurance: landing page for new-car buyers (EN/ES/RU).
// All visible copy lives here. Uses the coverage-check design system and the
// same short lead form (components/CoverageCheckForm) with source
// 'gap-insurance', Auto preselected and the note "Gap insurance".
//
// COMPLIANCE: no carrier brands, no price / "cheap" claims, no guarantees.
// GAP is presented only as an add-on (endorsement) to the client's auto policy:
// never compare it with dealer or lender/bank GAP products, never comment on
// them, and never suggest canceling them or asking a lender for a refund.
// The dollar example is clearly labeled as a hypothetical illustration.
// Imported by the page (server); WhatsAppLink uses lib/gap-insurance-shared.

import { CC, type CcFormCopy, type Lang } from '@/lib/coverage-check';

export { GAP_PATH, GAP_SOURCE, GAP_NOTE, GAP_WA_TEXT } from '@/lib/gap-insurance-shared';
import { GAP_WA_TEXT } from '@/lib/gap-insurance-shared';

type Faq = { q: string; a: string };
type Who = { icon: string; h: string; p: string };

export type GapCopy = {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  h1: string;
  sub: string;
  cta: string;
  callPrefix: string;
  waHero: string;
  micro: string;
  heroAlt: string;
  whatH2: string;
  whatP: string[];
  exLabel: string;
  exH3: string;
  exRows: { k: string; v: string; gap?: boolean }[];
  exP: string;
  exNote: string;
  whoH2: string;
  who: Who[];
  noH2: string;
  noIntro: string;
  no: string[];
  noNote: string;
  faqH2: string;
  faq: Faq[];
  formH2: string;
  formSub: string;
  form: CcFormCopy;
};

const EN: GapCopy = {
  metaTitle: 'Gap Insurance: Add-On to Your Auto Policy | M&K Agency',
  metaDesc:
    'Add gap coverage to your auto policy. It can pay the difference between the car\'s actual cash value and your loan or lease balance after a total loss.',
  badge: 'For new-car buyers',
  h1: 'New car? Protect yourself from the gap.',
  sub: "A new car loses value fast, while your loan or lease balance goes down slowly. If the car is totaled or stolen, your auto insurance pays what the car is worth, not what you owe. Gap coverage, added to your auto policy, can cover the difference, so you don't keep paying for a car you no longer have.",
  cta: 'Request a gap coverage quote',
  callPrefix: 'Call',
  waHero: 'Message us on WhatsApp',
  micro: 'Free, no-obligation quote from a licensed Florida agent. English, Spanish, Russian.',
  heroAlt: 'Cars on a Florida highway at sunset',
  whatH2: 'What is gap insurance?',
  whatP: [
    "Gap insurance is an add-on (endorsement) to your auto policy. If the car is totaled or stolen and not recovered, it pays the difference between the car's actual cash value (what it was worth right before the loss) and what you still owe on your loan or lease.",
    "To add it, your auto policy needs to carry comprehensive and collision coverage on the car. After a covered total loss, your policy pays the car's actual cash value first, and the gap coverage helps pay the balance that's left on your loan or lease. Coverage availability and terms depend on the policy.",
  ],
  exLabel: 'Example',
  exH3: 'How the gap can happen',
  exRows: [
    { k: 'You still owe on your loan', v: '$32,000' },
    { k: 'Actual cash value of the car after a total loss', v: '$26,000' },
    { k: 'The gap still left on your loan', v: '$6,000', gap: true },
  ],
  exP: "Without gap coverage, that $6,000 would come out of your pocket, even though the car is gone. Gap insurance is designed to pay that difference. Depending on the policy, your auto deductible may not be included.",
  exNote: 'Illustrative example only. The numbers are hypothetical; your loan, car value and coverage will be different.',
  whoH2: 'Who should think about gap insurance?',
  who: [
    { icon: '💵', h: 'Little or no down payment', p: 'If you put down less than about 20%, you may owe more than the car is worth for a good part of the loan.' },
    { icon: '📅', h: 'Loans of 60 months or longer', p: 'Longer loans pay down the balance slowly, so the gap can last for years.' },
    { icon: '📝', h: 'Leases', p: 'You are usually responsible for the lease balance if the car is totaled. Gap coverage on your auto policy can help with that difference; we\'ll tell you if it can be added for your car.' },
    { icon: '📉', h: 'Cars that lose value fast', p: 'Some models depreciate faster than others, especially in the first couple of years.' },
    { icon: '🔁', h: 'A balance rolled over from your last car', p: 'If you added what you owed on your old car to the new loan, you start out owing more than the car is worth.' },
  ],
  noH2: "What gap insurance doesn't cover",
  noIntro: 'Gap coverage is only for the difference after a total loss or theft. It usually does not pay for:',
  no: [
    "Repairs when the car isn't a total loss (that's your collision or comprehensive coverage)",
    'Mechanical breakdowns, maintenance or warranty repairs',
    'Missed or late loan payments, late fees or other charges',
    'Extended warranties and other add-ons rolled into your loan (often excluded)',
    'Your auto deductible (in many policies)',
    "Injuries or damage to other people or their property (that's your liability coverage)",
  ],
  noNote: "Coverage availability, terms and limits depend on the policy. We'll go over what yours includes before you decide.",
  faqH2: 'Gap insurance questions',
  faq: [
    {
      q: 'Can I add gap coverage after I already bought the car?',
      a: "Often, yes, as long as the car carries comprehensive and collision coverage on your auto policy. There are usually limits, such as how new the car is and whether you are the original owner. Availability and terms depend on the policy, so it's best to call us soon after you buy.",
    },
    {
      q: 'Can I add gap coverage if I lease my car?',
      a: "In many cases, yes. With a lease you are usually responsible for the balance if the car is totaled, and a leased car often starts out worth less than what you owe. Gap coverage added to your auto policy is designed for that difference. We'll tell you whether it can be added for your car and on what terms.",
    },
    {
      q: 'What do I need to add gap coverage to my auto policy?',
      a: "Your auto policy needs comprehensive and collision coverage on the car, and gap coverage is meant for cars with a loan or lease. We'll also ask for the VIN and your loan or lease details. Coverage availability and terms depend on the policy, and we'll tell you whether it can be added.",
    },
    {
      q: 'How fast can you add gap coverage to my policy?',
      a: "In many cases we can take care of it the same day once we have your VIN and your loan or lease details. It depends on the car and the policy, and we'll tell you right away whether it can be added.",
    },
    {
      q: 'Do you help with the claim if my car is totaled or stolen?',
      a: "Yes. Call us first. We'll help you open the claim, gather what's needed (like the payoff statement from your lender and the settlement from your auto insurance) and follow the gap part of the claim with you until it's done.",
    },
  ],
  formH2: 'Request a quote to add gap coverage to your auto policy',
  formSub: "Leave your name and number. A licensed agent will call you back and explain your options in plain language.",
  form: {
    ...CC.en.form,
    policy: 'Type of insurance',
    waText: GAP_WA_TEXT.en,
    noteLabel: 'Gap insurance',
  },
};

const ES: GapCopy = {
  metaTitle: 'Seguro GAP: adicional a su póliza de auto | M&K Agency',
  metaDesc:
    'Agregue la cobertura GAP a su póliza de auto. Puede pagar la diferencia entre el valor real del carro y el saldo de su préstamo o lease tras una pérdida total.',
  badge: 'Para quienes compran carro nuevo',
  h1: '¿Carro nuevo? Protéjase de la diferencia.',
  sub: 'Un carro nuevo pierde valor rápido, mientras que el saldo de su préstamo o arrendamiento baja despacio. Si el carro es pérdida total o se lo roban, su seguro de auto paga lo que vale el carro, no lo que usted debe. La cobertura GAP, agregada a su póliza de auto, puede cubrir esa diferencia, para que no siga pagando por un carro que ya no tiene.',
  cta: 'Solicite una cotización GAP',
  callPrefix: 'Llame al',
  waHero: 'Escríbanos por WhatsApp',
  micro: 'Cotización gratis y sin compromiso con un agente con licencia en Florida. Inglés, español y ruso.',
  heroAlt: 'Carros en una autopista de Florida al atardecer',
  whatH2: '¿Qué es el seguro GAP?',
  whatP: [
    'El seguro GAP (gap insurance) es un adicional (endoso) de su póliza de auto. Si el carro es declarado pérdida total o se lo roban y no aparece, paga la diferencia entre el valor real en efectivo del carro (lo que valía justo antes de la pérdida) y lo que usted todavía debe de su préstamo o arrendamiento.',
    'Para agregarlo, su póliza de auto debe incluir las coberturas de choque (collision) y comprensiva (comprehensive) para ese carro. Tras una pérdida total cubierta, su póliza paga primero el valor real en efectivo del carro, y la cobertura GAP ayuda a pagar el saldo que queda del préstamo o arrendamiento. La disponibilidad y los términos de la cobertura dependen de la póliza.',
  ],
  exLabel: 'Ejemplo',
  exH3: 'Cómo puede surgir la diferencia',
  exRows: [
    { k: 'Lo que todavía debe del préstamo', v: '$32,000' },
    { k: 'Valor real en efectivo del carro tras la pérdida total', v: '$26,000' },
    { k: 'La diferencia que todavía quedaría en su préstamo', v: '$6,000', gap: true },
  ],
  exP: 'Sin cobertura GAP, esos $6,000 saldrían de su bolsillo, aunque ya no tenga el carro. El seguro GAP está diseñado para pagar esa diferencia. Según la póliza, es posible que no incluya su deducible del seguro de auto.',
  exNote: 'Ejemplo solo ilustrativo. Las cifras son hipotéticas; su préstamo, el valor de su carro y su cobertura serán diferentes.',
  whoH2: '¿A quién le conviene el seguro GAP?',
  who: [
    { icon: '💵', h: 'Poco o ningún pago inicial', p: 'Si dio menos de un 20% de entrada, puede deber más de lo que vale el carro durante buena parte del préstamo.' },
    { icon: '📅', h: 'Préstamos de 60 meses o más', p: 'En préstamos largos el saldo baja despacio, así que la diferencia puede durar años.' },
    { icon: '📝', h: 'Arrendamientos (lease)', p: 'Por lo general, usted responde por el saldo del arrendamiento si el carro es pérdida total. La cobertura GAP en su póliza de auto puede ayudar con esa diferencia; le diremos si se puede agregar para su carro.' },
    { icon: '📉', h: 'Carros que pierden valor rápido', p: 'Algunos modelos se deprecian más rápido que otros, sobre todo en los primeros años.' },
    { icon: '🔁', h: 'Saldo pasado de su carro anterior', p: 'Si sumó al préstamo nuevo lo que debía del carro anterior, empieza debiendo más de lo que vale el carro.' },
  ],
  noH2: 'Lo que el seguro GAP no cubre',
  noIntro: 'La cobertura GAP es solo para la diferencia después de una pérdida total o un robo. Por lo general no paga:',
  no: [
    'Reparaciones cuando el carro no es pérdida total (eso lo cubren las coberturas de choque o comprensiva)',
    'Fallas mecánicas, mantenimiento o reparaciones de garantía',
    'Pagos del préstamo atrasados o no hechos, recargos por mora u otros cargos',
    'Garantías extendidas y otros extras sumados al préstamo (a menudo excluidos)',
    'Su deducible del seguro de auto (en muchas pólizas)',
    'Lesiones o daños a otras personas o a su propiedad (eso lo cubre su responsabilidad civil)',
  ],
  noNote: 'La disponibilidad, los términos y los límites dependen de la póliza. Revisaremos con usted qué incluye la suya antes de que decida.',
  faqH2: 'Preguntas sobre el seguro GAP',
  faq: [
    {
      q: '¿Puedo agregar la cobertura GAP después de comprar el carro?',
      a: 'Muchas veces, sí, siempre que el carro tenga las coberturas de choque y comprensiva en su póliza de auto. Suele haber límites, como qué tan nuevo es el carro y si usted es el primer dueño. La disponibilidad y los términos dependen de la póliza, así que lo mejor es llamarnos poco después de comprarlo.',
    },
    {
      q: '¿Puedo agregar la cobertura GAP si tengo el carro en arrendamiento (lease)?',
      a: 'En muchos casos, sí. Con un arrendamiento, usted suele responder por el saldo si el carro es pérdida total, y al principio un carro arrendado a menudo vale menos de lo que usted debe. La cobertura GAP agregada a su póliza de auto está pensada para esa diferencia. Le diremos si se puede agregar para su carro y en qué términos.',
    },
    {
      q: '¿Qué necesito para agregar la cobertura GAP a mi póliza de auto?',
      a: 'Su póliza de auto debe tener las coberturas de choque (collision) y comprensiva (comprehensive) para ese carro, y la cobertura GAP está pensada para carros con préstamo o arrendamiento. También le pediremos el VIN y los datos de su préstamo o arrendamiento. La disponibilidad y los términos dependen de la póliza, y le diremos si se puede agregar.',
    },
    {
      q: '¿Qué tan rápido pueden agregar la cobertura GAP a mi póliza?',
      a: 'En muchos casos podemos hacerlo el mismo día, una vez que tengamos el VIN y los datos de su préstamo o arrendamiento. Depende del carro y de la póliza, y le diremos enseguida si se puede agregar.',
    },
    {
      q: '¿Me ayudan con el reclamo si mi carro es pérdida total o me lo roban?',
      a: 'Sí. Llámenos primero. Le ayudamos a abrir el reclamo, a reunir lo necesario (como el estado de saldo de su prestamista y la liquidación de su seguro de auto) y damos seguimiento a la parte GAP del reclamo con usted hasta que se resuelva.',
    },
  ],
  formH2: 'Solicite una cotización para agregar la cobertura GAP a su póliza de auto',
  formSub: 'Déjenos su nombre y teléfono. Un agente con licencia le devolverá la llamada y le explicará sus opciones con palabras claras.',
  form: {
    ...CC.es.form,
    policy: 'Tipo de seguro',
    waText: GAP_WA_TEXT.es,
    noteLabel: 'Seguro GAP',
  },
};

const RU: GapCopy = {
  metaTitle: 'GAP-страховка: дополнение к автополису | M&K Agency',
  metaDesc:
    'Добавьте GAP-покрытие к автополису. Оно может покрыть разницу между рыночной стоимостью машины и остатком кредита или лизинга при полной гибели.',
  badge: 'Для покупателей новых машин',
  h1: 'Новая машина? Защитите себя от разницы.',
  sub: 'Новая машина быстро теряет в цене, а долг по кредиту или лизингу уменьшается медленно. Если машина полностью уничтожена (total loss) или угнана, автостраховка выплачивает её рыночную стоимость, а не сумму вашего долга. GAP-покрытие, добавленное к вашему автополису, может покрыть эту разницу, чтобы вам не пришлось платить за машину, которой уже нет.',
  cta: 'Запросить расчёт GAP',
  callPrefix: 'Позвоните',
  waHero: 'Написать в WhatsApp',
  micro: 'Бесплатный расчёт без обязательств от лицензированного агента во Флориде. Английский, испанский, русский.',
  heroAlt: 'Машины на шоссе во Флориде на закате',
  whatH2: 'Что такое GAP-страховка?',
  whatP: [
    'GAP-страховка (gap insurance) — это дополнение (endorsement) к вашему автополису. Если машина признана полностью уничтоженной или угнана и не найдена, она выплачивает разницу между фактической рыночной стоимостью машины (actual cash value, то есть сколько она стоила прямо перед страховым случаем) и тем, что вы ещё должны по кредиту или лизингу.',
    'Чтобы его добавить, в вашем автополисе на эту машину должны быть покрытия comprehensive и collision. При страховом случае с полной гибелью полис сначала выплачивает рыночную стоимость машины, а GAP-покрытие помогает погасить остаток долга по кредиту или лизингу. Доступность покрытия и условия зависят от полиса.',
  ],
  exLabel: 'Пример',
  exH3: 'Откуда берётся разница',
  exRows: [
    { k: 'Остаток долга по кредиту', v: '$32,000' },
    { k: 'Рыночная стоимость машины после полной гибели', v: '$26,000' },
    { k: 'Разница, которая остаётся по кредиту', v: '$6,000', gap: true },
  ],
  exP: 'Без GAP-покрытия эти $6,000 пришлось бы платить из своего кармана, хотя машины уже нет. GAP-страховка создана как раз для того, чтобы покрыть эту разницу. В зависимости от полиса франшиза по автостраховке может не входить в выплату.',
  exNote: 'Пример приведён только для иллюстрации. Цифры условные; ваш кредит, стоимость машины и покрытие будут другими.',
  whoH2: 'Кому стоит подумать о GAP-страховке?',
  who: [
    { icon: '💵', h: 'Маленький первый взнос или без него', p: 'Если вы внесли меньше примерно 20%, большую часть срока кредита вы можете быть должны больше, чем стоит машина.' },
    { icon: '📅', h: 'Кредит на 60 месяцев и дольше', p: 'По длинному кредиту долг уменьшается медленно, и разница может сохраняться годами.' },
    { icon: '📝', h: 'Лизинг', p: 'Если машина полностью уничтожена, остаток по лизингу обычно на вас. GAP-покрытие в вашем автополисе может помочь с этой разницей; мы скажем, можно ли добавить его для вашей машины.' },
    { icon: '📉', h: 'Машины, которые быстро теряют в цене', p: 'Некоторые модели теряют в цене быстрее других, особенно в первые пару лет.' },
    { icon: '🔁', h: 'Долг за предыдущую машину', p: 'Если остаток долга за старую машину добавили в новый кредит, вы с самого начала должны больше, чем стоит машина.' },
  ],
  noH2: 'Что GAP-страховка не покрывает',
  noIntro: 'GAP-покрытие касается только разницы после полной гибели или угона. Обычно оно не оплачивает:',
  no: [
    'Ремонт, если машина не признана полностью уничтоженной (это покрытия collision или comprehensive)',
    'Механические поломки, обслуживание и гарантийный ремонт',
    'Пропущенные или просроченные платежи по кредиту, штрафы и другие сборы',
    'Продлённые гарантии и другие допуслуги, включённые в кредит (часто исключаются)',
    'Франшизу по автостраховке (во многих полисах)',
    'Травмы или ущерб другим людям и их имуществу (это покрытие ответственности, liability)',
  ],
  noNote: 'Доступность покрытия, условия и лимиты зависят от полиса. Мы разберём с вами, что входит в ваш, прежде чем вы примете решение.',
  faqH2: 'Вопросы о GAP-страховке',
  faq: [
    {
      q: 'Можно ли добавить GAP-покрытие, если машина уже куплена?',
      a: 'Часто да, если машина застрахована по вашему автополису с покрытиями comprehensive и collision. Обычно есть ограничения: например, насколько новая машина и являетесь ли вы её первым владельцем. Доступность и условия зависят от полиса, поэтому лучше позвонить нам вскоре после покупки.',
    },
    {
      q: 'Можно ли добавить GAP-покрытие, если машина в лизинге?',
      a: 'Во многих случаях да. При лизинге остаток по договору в случае полной гибели машины обычно на вас, а в начале срока машина часто стоит меньше, чем вы должны. GAP-покрытие, добавленное к автополису, рассчитано как раз на эту разницу. Мы скажем, можно ли добавить его для вашей машины и на каких условиях.',
    },
    {
      q: 'Что нужно, чтобы добавить GAP-покрытие к автополису?',
      a: 'В вашем автополисе на эту машину должны быть покрытия comprehensive и collision, а само GAP-покрытие рассчитано на машины в кредите или лизинге. Мы также попросим VIN и данные кредита или лизинга. Доступность покрытия и условия зависят от полиса, и мы сразу скажем, можно ли его добавить.',
    },
    {
      q: 'Как быстро вы можете добавить GAP-покрытие к полису?',
      a: 'Во многих случаях в тот же день, как только у нас будут VIN и данные вашего кредита или лизинга. Это зависит от машины и полиса, и мы сразу скажем, можно ли его добавить.',
    },
    {
      q: 'Вы поможете с выплатой, если машину разбили или угнали?',
      a: 'Да. Сначала позвоните нам. Мы поможем открыть страховой случай, собрать нужные документы (например, справку об остатке долга от банка и расчёт выплаты от автостраховщика) и будем вести GAP-часть выплаты вместе с вами до конца.',
    },
  ],
  formH2: 'Запросите расчёт: GAP-покрытие к вашему автополису',
  formSub: 'Оставьте имя и телефон. Лицензированный агент перезвонит вам и простыми словами объяснит варианты.',
  form: {
    ...CC.ru.form,
    policy: 'Вид страховки',
    waText: GAP_WA_TEXT.ru,
    noteLabel: 'GAP-страховка',
  },
};

export const GAP: Record<Lang, GapCopy> = { en: EN, es: ES, ru: RU };
