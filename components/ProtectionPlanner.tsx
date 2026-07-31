'use client';

import { useState } from 'react';
import { trackConversion } from '@/lib/analytics';
import Honeypot from '@/components/Honeypot';

// Guided protection conversation.
//
// COMPLIANCE SHAPE — read before changing anything here.
//
// This tool deliberately does NOT recommend products, quote prices, or tell a
// visitor what coverage they need. Doing any of that from a web page would be
// personalised insurance advice, which only a licensed agent may give.
//
// What it does instead: it reflects the visitor's own answers back as a map of
// which protection areas they have already addressed and which they have not,
// and turns each gap into a QUESTION to raise with a licensed agent. The
// visitor arrives at the call already aware of the gap, which is both lawful
// and more effective than a page that pretends to advise.
//
// Rules that must hold for every string in this file:
//   - no dollar figures, premiums, rates or percentages
//   - no "you need", "you should buy", "we recommend"
//   - no claim that anything is or would be covered, approved or eligible
//   - no carrier named other than Allstate
//   - every outcome routes to a licensed agent

type Lang = 'en' | 'es' | 'ru';
type Answers = Record<string, string>;

type Question = {
  id: string;
  q: string;
  help?: string;
  options: { value: string; label: string }[];
};

type Area = {
  id: string;
  title: string;
  /** Shown when the answers suggest this area is already addressed. */
  covered: string;
  /** Shown as an open question when the answers suggest a gap. Never an instruction. */
  gap: string;
  /** Returns true when the answers indicate a gap worth discussing. */
  isGap: (a: Answers) => boolean;
};

const T: Record<Lang, {
  kicker: string;
  title: string;
  sub: string;
  start: string;
  back: string;
  next: string;
  of: string;
  resultKicker: string;
  resultTitle: string;
  resultLead: string;
  strongTitle: string;
  gapTitle: string;
  noGaps: string;
  disclaimer: string;
  formTitle: string;
  formSub: string;
  name: string;
  phone: string;
  consent: string;
  submit: string;
  sending: string;
  ok: string;
  err: string;
  restart: string;
  questions: Question[];
  areas: Area[];
}> = {
  en: {
    kicker: 'Protection check',
    title: 'What is already protected, and what is still open?',
    sub: 'Six short questions. No prices, no sign-up, no obligation — at the end you get a plain map of your situation and the questions worth raising with a licensed agent.',
    start: 'Start the check →',
    back: '← Back',
    next: 'Continue →',
    of: 'of',
    resultKicker: 'Your protection map',
    resultTitle: 'Here is what your answers show',
    resultLead: 'This is a reflection of what you told us — not advice, and not a quote. A licensed agent can go through any of it with you.',
    strongTitle: 'Already addressed',
    gapTitle: 'Worth a conversation',
    noGaps: 'Based on what you told us, nothing here stands out as an obvious gap. A licensed agent can still review the details with you — most gaps live in the limits, not in whether a policy exists.',
    disclaimer: 'This is an educational tool, not a formal needs analysis, not a recommendation and not a quote. It does not confirm that anything is or would be covered. Coverage, eligibility and pricing are determined by the insurance company, and only a licensed agent can advise on your specific situation.',
    formTitle: 'Talk it through with a licensed agent',
    formSub: 'We will call you back. No obligation, and nothing is sold on the first call.',
    name: 'Your name',
    phone: 'Your phone',
    consent: 'I agree that M&K Agency may contact me by phone, text, or email at the number provided about insurance, even if it is on a Do-Not-Call list. Consent is not a condition of purchase.',
    submit: 'Have an agent call me →',
    sending: 'Sending…',
    ok: 'Got it — a licensed agent will call you shortly.',
    err: 'Something went wrong. Please call us at (305) 859-3953.',
    restart: 'Start over',
    questions: [
      {
        id: 'depends',
        q: 'Does anyone depend on your income?',
        help: 'A partner, children, parents — anyone whose day-to-day would change if your income stopped.',
        options: [
          { value: 'yes_kids', label: 'Yes — children at home' },
          { value: 'yes_partner', label: 'Yes — a partner or family member' },
          { value: 'no', label: 'No one depends on my income' },
        ],
      },
      {
        id: 'life',
        q: 'Do you currently have life insurance?',
        options: [
          { value: 'own', label: 'Yes, a policy I bought myself' },
          { value: 'work', label: 'Only through work' },
          { value: 'none', label: 'No' },
        ],
      },
      {
        id: 'home',
        q: 'Where do you live?',
        options: [
          { value: 'own_mortgage', label: 'I own, with a mortgage' },
          { value: 'own_free', label: 'I own, no mortgage' },
          { value: 'condo', label: 'I own a condo' },
          { value: 'rent', label: 'I rent' },
        ],
      },
      {
        id: 'auto',
        q: 'When did you last look at your auto coverage limits?',
        help: 'Not the price — the limits. Most Florida drivers carry the state minimum without realising it.',
        options: [
          { value: 'recent', label: 'Within the last year' },
          { value: 'old', label: 'More than a year ago' },
          { value: 'never', label: 'I have never looked' },
          { value: 'nocar', label: 'I do not drive' },
        ],
      },
      {
        id: 'business',
        q: 'Do you own a business or work for yourself?',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        id: 'savings',
        q: 'If something went wrong tomorrow, how long could your savings carry the household?',
        options: [
          { value: 'lt3', label: 'Less than three months' },
          { value: '3to12', label: 'Three months to a year' },
          { value: 'gt12', label: 'More than a year' },
          { value: 'unsure', label: 'I am not sure' },
        ],
      },
    ],
    areas: [
      {
        id: 'income',
        title: 'Income protection',
        covered: 'You have life coverage in place and people who depend on you — the foundation is there.',
        gap: 'People depend on your income, and you told us there is no personal life policy behind it. Worth asking an agent: what would actually reach your family, and how quickly?',
        isGap: (a) => a.depends !== 'no' && a.life !== 'own',
      },
      {
        id: 'worklife',
        title: 'Coverage that follows you',
        covered: 'Your life coverage is not tied to a single employer.',
        gap: 'Coverage through work usually ends when the job does, and it rarely moves with you. Worth asking: what happens to that cover if you change employer?',
        isGap: (a) => a.life === 'work',
      },
      {
        id: 'mortgage',
        title: 'The mortgage behind the home',
        covered: 'No mortgage sits behind your home, which removes one large fixed obligation.',
        gap: 'There is a mortgage on the home and people who depend on your income. Worth asking: what would carry the payments if your income stopped?',
        isGap: (a) => a.home === 'own_mortgage' && a.depends !== 'no',
      },
      {
        id: 'property',
        title: 'The property itself',
        covered: 'You told us you rent, so the building is not your exposure — though your belongings and liability still are.',
        gap: 'Florida property carries risks most of the country does not — wind, flood, and the inspection requirements that come with older homes. Worth asking: what does your current policy exclude?',
        isGap: (a) => a.home === 'own_mortgage' || a.home === 'own_free' || a.home === 'condo',
      },
      {
        id: 'auto',
        title: 'Auto limits',
        covered: 'You have looked at your auto limits recently.',
        gap: 'Limits that have not been reviewed in over a year often no longer match what you are driving or what you now have to lose. Worth asking: what are my current limits, and what sits above them?',
        isGap: (a) => a.auto === 'old' || a.auto === 'never',
      },
      {
        id: 'business',
        title: 'Business exposure',
        covered: '',
        gap: 'Working for yourself puts personal and business exposure close together. Worth asking: where does my personal policy stop and my business exposure begin?',
        isGap: (a) => a.business === 'yes',
      },
      {
        id: 'buffer',
        title: 'The gap before insurance pays',
        covered: 'You have a savings buffer that could absorb a delay or a deductible.',
        gap: 'A thin buffer is what turns an inconvenience into a crisis, because deductibles and delays land before any claim pays. Worth asking: what would I have to cover myself before a claim reaches me?',
        isGap: (a) => a.savings === 'lt3' || a.savings === 'unsure',
      },
    ],
  },

  es: {
    kicker: 'Revisión de protección',
    title: '¿Qué ya está protegido y qué sigue abierto?',
    sub: 'Seis preguntas cortas. Sin precios, sin registro, sin compromiso — al final recibe un mapa claro de su situación y las preguntas que vale la pena hacerle a un agente licenciado.',
    start: 'Comenzar la revisión →',
    back: '← Atrás',
    next: 'Continuar →',
    of: 'de',
    resultKicker: 'Su mapa de protección',
    resultTitle: 'Esto es lo que muestran sus respuestas',
    resultLead: 'Esto refleja lo que usted nos dijo — no es asesoría ni una cotización. Un agente licenciado puede repasarlo con usted.',
    strongTitle: 'Ya considerado',
    gapTitle: 'Vale la pena conversarlo',
    noGaps: 'Según lo que nos contó, nada aquí destaca como un vacío evidente. Aun así, un agente licenciado puede revisar los detalles con usted — la mayoría de los vacíos están en los límites, no en si existe una póliza.',
    disclaimer: 'Esta es una herramienta educativa; no es un análisis formal de necesidades, ni una recomendación, ni una cotización. No confirma que algo esté o estaría cubierto. La cobertura, la elegibilidad y el precio los determina la compañía de seguros, y solo un agente licenciado puede asesorarlo sobre su situación específica.',
    formTitle: 'Converse con un agente licenciado',
    formSub: 'Le devolvemos la llamada. Sin compromiso, y no se vende nada en la primera llamada.',
    name: 'Su nombre',
    phone: 'Su teléfono',
    consent: 'Acepto que M&K Agency me contacte por teléfono, mensaje de texto o correo electrónico al número proporcionado sobre seguros, incluso si está en una lista de No Llamar. El consentimiento no es condición de compra.',
    submit: 'Que me llame un agente →',
    sending: 'Enviando…',
    ok: 'Listo — un agente licenciado le llamará en breve.',
    err: 'Algo salió mal. Llámenos al (305) 859-3953.',
    restart: 'Empezar de nuevo',
    questions: [
      {
        id: 'depends',
        q: '¿Alguien depende de sus ingresos?',
        help: 'Pareja, hijos, padres — cualquier persona cuyo día a día cambiaría si sus ingresos se detuvieran.',
        options: [
          { value: 'yes_kids', label: 'Sí — hijos en casa' },
          { value: 'yes_partner', label: 'Sí — pareja o familiar' },
          { value: 'no', label: 'Nadie depende de mis ingresos' },
        ],
      },
      {
        id: 'life',
        q: '¿Tiene actualmente seguro de vida?',
        options: [
          { value: 'own', label: 'Sí, una póliza que compré yo' },
          { value: 'work', label: 'Solo a través del trabajo' },
          { value: 'none', label: 'No' },
        ],
      },
      {
        id: 'home',
        q: '¿Dónde vive?',
        options: [
          { value: 'own_mortgage', label: 'Casa propia, con hipoteca' },
          { value: 'own_free', label: 'Casa propia, sin hipoteca' },
          { value: 'condo', label: 'Tengo un condominio' },
          { value: 'rent', label: 'Alquilo' },
        ],
      },
      {
        id: 'auto',
        q: '¿Cuándo revisó por última vez los límites de su seguro de auto?',
        help: 'No el precio — los límites. La mayoría de los conductores en Florida llevan el mínimo estatal sin saberlo.',
        options: [
          { value: 'recent', label: 'En el último año' },
          { value: 'old', label: 'Hace más de un año' },
          { value: 'never', label: 'Nunca los he revisado' },
          { value: 'nocar', label: 'No manejo' },
        ],
      },
      {
        id: 'business',
        q: '¿Tiene un negocio o trabaja por su cuenta?',
        options: [
          { value: 'yes', label: 'Sí' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        id: 'savings',
        q: 'Si algo pasara mañana, ¿cuánto tiempo podrían sus ahorros sostener el hogar?',
        options: [
          { value: 'lt3', label: 'Menos de tres meses' },
          { value: '3to12', label: 'De tres meses a un año' },
          { value: 'gt12', label: 'Más de un año' },
          { value: 'unsure', label: 'No estoy seguro' },
        ],
      },
    ],
    areas: [
      {
        id: 'income',
        title: 'Protección del ingreso',
        covered: 'Tiene cobertura de vida y personas que dependen de usted — la base está puesta.',
        gap: 'Hay personas que dependen de su ingreso y usted nos dijo que no hay una póliza de vida personal detrás. Vale la pena preguntarle a un agente: ¿qué llegaría realmente a su familia, y con qué rapidez?',
        isGap: (a) => a.depends !== 'no' && a.life !== 'own',
      },
      {
        id: 'worklife',
        title: 'Cobertura que lo acompaña',
        covered: 'Su cobertura de vida no depende de un solo empleador.',
        gap: 'La cobertura por el trabajo normalmente termina cuando termina el empleo y rara vez se traslada con usted. Vale la pena preguntar: ¿qué pasa con esa cobertura si cambia de empleo?',
        isGap: (a) => a.life === 'work',
      },
      {
        id: 'mortgage',
        title: 'La hipoteca detrás de la casa',
        covered: 'No hay hipoteca detrás de su casa, lo que elimina una obligación fija grande.',
        gap: 'Hay una hipoteca sobre la casa y personas que dependen de su ingreso. Vale la pena preguntar: ¿qué sostendría los pagos si su ingreso se detuviera?',
        isGap: (a) => a.home === 'own_mortgage' && a.depends !== 'no',
      },
      {
        id: 'property',
        title: 'La propiedad en sí',
        covered: 'Usted alquila, así que el edificio no es su exposición — aunque sus pertenencias y su responsabilidad civil sí lo son.',
        gap: 'La propiedad en Florida conlleva riesgos que gran parte del país no tiene — viento, inundación y los requisitos de inspección en casas más antiguas. Vale la pena preguntar: ¿qué excluye mi póliza actual?',
        isGap: (a) => a.home === 'own_mortgage' || a.home === 'own_free' || a.home === 'condo',
      },
      {
        id: 'auto',
        title: 'Límites del auto',
        covered: 'Ha revisado sus límites de auto recientemente.',
        gap: 'Los límites que no se revisan en más de un año a menudo ya no corresponden a lo que maneja ni a lo que tiene que perder. Vale la pena preguntar: ¿cuáles son mis límites actuales y qué queda por encima de ellos?',
        isGap: (a) => a.auto === 'old' || a.auto === 'never',
      },
      {
        id: 'business',
        title: 'Exposición del negocio',
        covered: '',
        gap: 'Trabajar por cuenta propia acerca mucho la exposición personal y la del negocio. Vale la pena preguntar: ¿dónde termina mi póliza personal y dónde empieza la exposición del negocio?',
        isGap: (a) => a.business === 'yes',
      },
      {
        id: 'buffer',
        title: 'El intervalo antes de que el seguro pague',
        covered: 'Tiene un colchón de ahorros que podría absorber una demora o un deducible.',
        gap: 'Un colchón delgado es lo que convierte un inconveniente en una crisis, porque los deducibles y las demoras llegan antes que cualquier pago. Vale la pena preguntar: ¿qué tendría que cubrir yo mismo antes de que un reclamo llegue?',
        isGap: (a) => a.savings === 'lt3' || a.savings === 'unsure',
      },
    ],
  },

  ru: {
    kicker: 'Проверка защиты',
    title: 'Что уже защищено, а что остаётся открытым?',
    sub: 'Шесть коротких вопросов. Без цен, без регистрации, без обязательств — в конце вы получите понятную картину своей ситуации и вопросы, которые стоит задать лицензированному агенту.',
    start: 'Начать проверку →',
    back: '← Назад',
    next: 'Дальше →',
    of: 'из',
    resultKicker: 'Ваша карта защиты',
    resultTitle: 'Вот что показывают ваши ответы',
    resultLead: 'Это отражение того, что вы сами рассказали, — не совет и не расчёт стоимости. Лицензированный агент может разобрать с вами любой пункт.',
    strongTitle: 'Уже закрыто',
    gapTitle: 'Стоит обсудить',
    noGaps: 'Судя по вашим ответам, очевидных пробелов не видно. Но лицензированному агенту всё равно есть что проверить — чаще всего пробел не в наличии полиса, а в его лимитах.',
    disclaimer: 'Это образовательный инструмент: не формальный анализ потребностей, не рекомендация и не расчёт стоимости. Он не подтверждает, что что-либо покрывается или будет покрыто. Покрытие, право на него и цену определяет страховая компания, а консультировать по вашей конкретной ситуации может только лицензированный агент.',
    formTitle: 'Обсудить с лицензированным агентом',
    formSub: 'Мы перезвоним. Без обязательств, и на первом звонке ничего не продаётся.',
    name: 'Ваше имя',
    phone: 'Ваш телефон',
    consent: 'Я согласен(на), что M&K Agency может связаться со мной по телефону, SMS или электронной почте по указанному номеру по вопросам страхования, даже если номер находится в списке «Не звонить». Согласие не является условием покупки.',
    submit: 'Пусть агент перезвонит →',
    sending: 'Отправка…',
    ok: 'Готово — лицензированный агент скоро позвонит.',
    err: 'Что-то пошло не так. Позвоните нам: (305) 859-3953.',
    restart: 'Начать заново',
    questions: [
      {
        id: 'depends',
        q: 'Зависит ли кто-то от вашего дохода?',
        help: 'Супруг, дети, родители — любой, чья повседневная жизнь изменится, если ваш доход прекратится.',
        options: [
          { value: 'yes_kids', label: 'Да — дети' },
          { value: 'yes_partner', label: 'Да — супруг или близкий родственник' },
          { value: 'no', label: 'От моего дохода никто не зависит' },
        ],
      },
      {
        id: 'life',
        q: 'Есть ли у вас страхование жизни сейчас?',
        options: [
          { value: 'own', label: 'Да, полис, который я оформил сам' },
          { value: 'work', label: 'Только через работодателя' },
          { value: 'none', label: 'Нет' },
        ],
      },
      {
        id: 'home',
        q: 'Где вы живёте?',
        options: [
          { value: 'own_mortgage', label: 'Свой дом, в ипотеке' },
          { value: 'own_free', label: 'Свой дом, без ипотеки' },
          { value: 'condo', label: 'Своя квартира (кондо)' },
          { value: 'rent', label: 'Снимаю' },
        ],
      },
      {
        id: 'auto',
        q: 'Когда вы в последний раз смотрели лимиты автостраховки?',
        help: 'Не цену, а именно лимиты. Большинство водителей Флориды ездят с минимумом штата, не зная об этом.',
        options: [
          { value: 'recent', label: 'В течение последнего года' },
          { value: 'old', label: 'Больше года назад' },
          { value: 'never', label: 'Никогда не смотрел' },
          { value: 'nocar', label: 'Я не вожу' },
        ],
      },
      {
        id: 'business',
        q: 'У вас есть свой бизнес или вы работаете на себя?',
        options: [
          { value: 'yes', label: 'Да' },
          { value: 'no', label: 'Нет' },
        ],
      },
      {
        id: 'savings',
        q: 'Если завтра что-то случится, сколько ваши накопления продержат семью?',
        options: [
          { value: 'lt3', label: 'Меньше трёх месяцев' },
          { value: '3to12', label: 'От трёх месяцев до года' },
          { value: 'gt12', label: 'Больше года' },
          { value: 'unsure', label: 'Не уверен' },
        ],
      },
    ],
    areas: [
      {
        id: 'income',
        title: 'Защита дохода',
        covered: 'У вас есть страхование жизни и есть те, кто от вас зависит — фундамент заложен.',
        gap: 'От вашего дохода зависят люди, а личного полиса страхования жизни за этим нет. Стоит спросить агента: что реально получит семья и как быстро?',
        isGap: (a) => a.depends !== 'no' && a.life !== 'own',
      },
      {
        id: 'worklife',
        title: 'Покрытие, которое остаётся с вами',
        covered: 'Ваше страхование жизни не привязано к одному работодателю.',
        gap: 'Покрытие через работу обычно заканчивается вместе с работой и редко переходит с вами. Стоит спросить: что будет с этим покрытием при смене работодателя?',
        isGap: (a) => a.life === 'work',
      },
      {
        id: 'mortgage',
        title: 'Ипотека за домом',
        covered: 'За домом нет ипотеки — одним крупным фиксированным обязательством меньше.',
        gap: 'На доме есть ипотека, и от вашего дохода зависят люди. Стоит спросить: чем будут покрываться платежи, если доход прекратится?',
        isGap: (a) => a.home === 'own_mortgage' && a.depends !== 'no',
      },
      {
        id: 'property',
        title: 'Сама недвижимость',
        covered: 'Вы снимаете, так что здание — не ваша зона риска, но вещи и ответственность всё равно ваши.',
        gap: 'Недвижимость во Флориде несёт риски, которых нет у большей части страны: ветер, наводнение и требования по инспекциям для домов старше двадцати лет. Стоит спросить: что именно исключает мой нынешний полис?',
        isGap: (a) => a.home === 'own_mortgage' || a.home === 'own_free' || a.home === 'condo',
      },
      {
        id: 'auto',
        title: 'Лимиты по авто',
        covered: 'Вы недавно смотрели свои лимиты по автостраховке.',
        gap: 'Лимиты, которые не пересматривались больше года, часто уже не соответствуют ни машине, ни тому, что вам есть терять. Стоит спросить: какие у меня сейчас лимиты и что находится выше них?',
        isGap: (a) => a.auto === 'old' || a.auto === 'never',
      },
      {
        id: 'business',
        title: 'Риски бизнеса',
        covered: '',
        gap: 'Работа на себя ставит личные и деловые риски вплотную друг к другу. Стоит спросить: где заканчивается мой личный полис и начинается ответственность бизнеса?',
        isGap: (a) => a.business === 'yes',
      },
      {
        id: 'buffer',
        title: 'Промежуток до выплаты',
        covered: 'У вас есть запас накоплений, который выдержит задержку или франшизу.',
        gap: 'Именно тонкий запас превращает неприятность в кризис: франшиза и задержка выплаты наступают раньше, чем приходят деньги по claim. Стоит спросить: что мне придётся закрыть самому до того, как выплата дойдёт?',
        isGap: (a) => a.savings === 'lt3' || a.savings === 'unsure',
      },
    ],
  },
};

export default function ProtectionPlanner({ lang = 'en' }: { lang?: string }) {
  const L: Lang = lang === 'es' || lang === 'ru' ? lang : 'en';
  const t = T[L];

  const [step, setStep] = useState(-1); // -1 = intro, 0..n-1 = questions, n = result
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  const total = t.questions.length;
  const done = step >= total;

  const choose = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    // Small deliberate pause so the selection registers visually before moving on.
    setTimeout(() => setStep((s) => s + 1), 180);
  };

  const gaps = t.areas.filter((a) => a.isGap(answers));
  const strengths = t.areas.filter((a) => !a.isGap(answers) && a.covered);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hpEl = (e.currentTarget as HTMLFormElement).elements.namedItem('company') as HTMLInputElement;
    const company = hpEl ? hpEl.value : '';
    if (!consent) return;
    setStatus('sending');
    try {
      const summary = gaps.map((g) => g.title).join('; ') || 'no obvious gaps';
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company,
          name,
          phone,
          lang: L,
          consent: true,
          contact_method: 'call',
          agent_name: 'agent',
          // Gives the agent the visitor's own answers so the call starts informed.
          message: `Protection check — areas to discuss: ${summary}. Answers: ${JSON.stringify(answers)}`,
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) {
        trackConversion('callback_request', { insurance_type: 'protection_check', lang: L });
        setName('');
        setPhone('');
        setConsent(false);
      }
    } catch {
      setStatus('err');
    }
  };

  const card: React.CSSProperties = {
    background: '#fff',
    border: '1px solid #e6ecf5',
    borderRadius: 18,
    padding: '26px 24px',
    boxShadow: '0 10px 30px rgba(8,42,89,.06)',
  };

  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      {/* ---------- intro ---------- */}
      {step === -1 && (
        <div style={card}>
          <p className="kicker" style={{ color: 'var(--blue)', fontWeight: 700, fontSize: '.85rem' }}>
            {t.kicker}
          </p>
          <h2 style={{ textAlign: 'left', margin: '8px 0 12px' }}>{t.title}</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: 22 }}>{t.sub}</p>
          <button type="button" className="submit" onClick={() => setStep(0)}>
            {t.start}
          </button>
        </div>
      )}

      {/* ---------- questions ---------- */}
      {step >= 0 && step < total && (
        <div style={card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <div style={{ flex: 1, height: 6, background: '#eef2f7', borderRadius: 99 }}>
              <div
                style={{
                  width: `${(step / total) * 100}%`,
                  height: '100%',
                  background: 'var(--gold, #d9a441)',
                  borderRadius: 99,
                  transition: 'width .25s ease',
                }}
              />
            </div>
            <span style={{ color: 'var(--muted)', fontSize: '.82rem', whiteSpace: 'nowrap' }}>
              {step + 1} {t.of} {total}
            </span>
          </div>

          <h3 style={{ color: 'var(--navy)', fontSize: '1.28rem', marginBottom: 6 }}>
            {t.questions[step].q}
          </h3>
          {t.questions[step].help && (
            <p style={{ color: 'var(--muted)', fontSize: '.92rem', marginBottom: 16 }}>
              {t.questions[step].help}
            </p>
          )}

          <div style={{ display: 'grid', gap: 10, marginTop: 14 }}>
            {t.questions[step].options.map((o) => {
              const active = answers[t.questions[step].id] === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => choose(t.questions[step].id, o.value)}
                  style={{
                    textAlign: 'left',
                    padding: '14px 16px',
                    borderRadius: 12,
                    border: active ? '2px solid var(--navy)' : '1px solid #dfe6f0',
                    background: active ? '#f2f7ff' : '#fff',
                    color: 'var(--navy)',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'border-color .15s, background .15s',
                  }}
                >
                  {o.label}
                </button>
              );
            })}
          </div>

          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              style={{
                marginTop: 18,
                background: 'none',
                border: 'none',
                color: 'var(--muted)',
                cursor: 'pointer',
                fontSize: '.92rem',
              }}
            >
              {t.back}
            </button>
          )}
        </div>
      )}

      {/* ---------- result ---------- */}
      {done && (
        <div style={{ display: 'grid', gap: 16 }}>
          <div style={card}>
            <p style={{ color: 'var(--blue)', fontWeight: 700, fontSize: '.85rem' }}>{t.resultKicker}</p>
            <h2 style={{ textAlign: 'left', margin: '8px 0 10px' }}>{t.resultTitle}</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{t.resultLead}</p>

            {gaps.length > 0 ? (
              <div style={{ marginTop: 22 }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.05rem', marginBottom: 12 }}>{t.gapTitle}</h3>
                <div style={{ display: 'grid', gap: 12 }}>
                  {gaps.map((g) => (
                    <div
                      key={g.id}
                      style={{
                        background: '#fff8e6',
                        border: '1px solid #f0dca0',
                        borderRadius: 12,
                        padding: '14px 16px',
                      }}
                    >
                      <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{g.title}</p>
                      <p style={{ color: '#6b5a2a', fontSize: '.94rem', margin: 0, lineHeight: 1.55 }}>{g.gap}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p style={{ marginTop: 20, color: 'var(--muted)', lineHeight: 1.6 }}>{t.noGaps}</p>
            )}

            {strengths.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.05rem', marginBottom: 12 }}>{t.strongTitle}</h3>
                <div style={{ display: 'grid', gap: 10 }}>
                  {strengths.map((s) => (
                    <div
                      key={s.id}
                      style={{
                        background: '#f4f9f4',
                        border: '1px solid #d8e8d8',
                        borderRadius: 12,
                        padding: '12px 16px',
                      }}
                    >
                      <p style={{ fontWeight: 700, color: '#2c5c33', marginBottom: 3, fontSize: '.95rem' }}>
                        {s.title}
                      </p>
                      <p style={{ color: '#456b4a', fontSize: '.92rem', margin: 0, lineHeight: 1.55 }}>{s.covered}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="privacy" style={{ marginTop: 24, fontSize: '.82rem', lineHeight: 1.55 }}>
              {t.disclaimer}
            </p>
          </div>

          {/* ---------- lead capture ---------- */}
          <div style={card}>
            {status === 'ok' ? (
              <p style={{ color: '#2c5c33', fontWeight: 600 }} aria-live="polite">
                {t.ok}
              </p>
            ) : (
              <>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.15rem', marginBottom: 4 }}>{t.formTitle}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '.94rem', marginBottom: 16 }}>{t.formSub}</p>
                <form onSubmit={submit}>
                  <Honeypot />
                  <div style={{ display: 'grid', gap: 10 }}>
                    <input
                      required
                      placeholder={t.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid #dfe6f0' }}
                    />
                    <input
                      required
                      type="tel"
                      placeholder={t.phone}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid #dfe6f0' }}
                    />
                  </div>
                  <label className="consent" style={{ display: 'flex', gap: 8, marginTop: 14, alignItems: 'flex-start' }}>
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <span style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>{t.consent}</span>
                  </label>
                  <button
                    type="submit"
                    className="submit"
                    disabled={status === 'sending' || !consent}
                    style={{ marginTop: 14 }}
                  >
                    {status === 'sending' ? t.sending : t.submit}
                  </button>
                  {status === 'err' && (
                    <p className="status-err" aria-live="polite">
                      {t.err}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setStep(-1);
              setStatus('');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--muted)',
              cursor: 'pointer',
              fontSize: '.9rem',
            }}
          >
            {t.restart}
          </button>
        </div>
      )}
    </div>
  );
}
