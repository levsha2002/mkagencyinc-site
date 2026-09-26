import Link from 'next/link';
import Image from 'next/image';
import { PHONE_DISPLAY, PHONE_TEL, getDict } from '@/lib/dictionaries';
import { team } from '@/lib/team-data';
import { referralBusinesses } from '@/lib/referral-businesses';
import { pageMetadata } from '@/lib/seo';
import { pickLang, type Lang } from '@/lib/referral-program';
import BusinessDirectory from '@/components/BusinessDirectory';
import ReferralMap from '@/components/ReferralMap';
import ReferralForm from '@/components/ReferralForm';
import HowItWorks from '@/components/referral/HowItWorks';
import ShareBar from '@/components/referral/ShareBar';
import { ReferFriendForm, PartnerForm } from '@/components/referral/ReferralForms';

// /[lang]/referral: "Two Doors" (door 1: refer a friend, door 2: become a
// referral partner). Both forms post to /api/referral-lead (same pipeline as
// the quote form, tagged source 'referral' / 'partner').
//
// COMPLIANCE (see also lib/referral-program.ts):
// - No reward, gift or thank-you of any kind is offered on this page (Florida
//   anti-rebating). Partners: "No referral fees, gifts or payments of any
//   kind" (RESPA). No prices, savings, percentages, reviews or ratings.
// - Carrier brands and former staff must never appear in this copy.
// - The community directory below only renders real, phone-verified entries
//   from lib/referral-businesses.ts; while it is empty an honest "coming soon"
//   note is shown instead.

const C: Record<Lang, any> = {
  en: {
    metaTitle: 'Refer a Friend or Become a Referral Partner | M&K Agency, Florida City',
    metaDesc:
      'Refer a friend to a licensed insurance agent in Florida City, or partner with us as a local business. English, Spanish and Russian. Call (305) 859-3953.',
    pill: '🤝 Referrals & partners',
    h1a: 'Share the agency',
    h1b: 'your neighbors already call.',
    sub: "Whether you're a client, a friend of the agency or a local business, one short form connects someone with a licensed agent in Florida City, in English, Spanish or Russian.",
    asideTitle: 'Prefer to call?',
    asideHours: 'Mon–Fri 9am–6pm ET',
    asideAddr: '33550 S Dixie Hwy, Suite 102, Florida City, FL 33034',
    door1: {
      who: 'For clients & neighbors',
      title: 'Refer a friend or family member',
      text: 'Tell us who to call, or share this page on Facebook, WhatsApp or by text. They get a no-obligation coverage review with a licensed agent, in the language they prefer.',
      cta: 'Refer someone →',
      alt: 'A family at home',
    },
    door2: {
      who: 'For local businesses',
      title: 'Become a referral partner',
      text: 'Realtors, car dealers, contractors, accountants and property managers: give your clients a local, licensed agent who answers the phone. No referral fees, gifts or payments of any kind.',
      cta: 'Partner with us →',
      alt: "A street of local shops",
    },
    howKicker: 'How it works',
    howTitle: 'Three steps, either way',
    tabs: ["I'm referring a friend", "I'm a business"],
    friendSteps: [
      { h: 'Tell us who', p: "Use the short form below, or share this page. Only refer people who said it's OK for us to contact them." },
      { h: 'A licensed agent reaches out', p: 'We call at a reasonable time and help in English, Spanish or Russian, with home, auto, business or life coverage questions.' },
      { h: 'No pressure', p: 'The review comes with no obligation. Your friend decides what, if anything, to do next, and can ask us to stop contacting them at any time.' },
    ],
    partnerSteps: [
      { h: 'Send the short form', p: 'Tell us about your business and the languages you serve. It takes about a minute.' },
      { h: 'We get to know you', p: 'Someone from our team calls to introduce ourselves and confirm your business details.' },
      { h: 'Your clients get a local agent', p: 'When a client of yours needs insurance, send them our way. No referral fees, gifts or payments of any kind.' },
    ],
    share: {
      title: 'Share this page in one tap',
      sub: 'Scan the code at our office, or post the link in your community group.',
      text: 'Text',
      copy: 'Copy link',
      copied: 'Link copied',
      qrAlt: 'QR code for this page',
      shareText: 'M&K Agency: local, licensed insurance agents in Florida City (English, Español, Русский).',
    },
    teamKicker: 'Who your friends will talk to',
    teamTitle: 'Real people, right here in Florida City',
    teamSub: '33550 S Dixie Hwy, Suite 102 · Mon–Fri 9am–6pm ET',
    roleOwner: 'Owner & Founder',
    roleLead: 'Licensed agent · Team lead',
    roleAgent: 'Licensed agent',
    refer: {
      kicker: 'Door 1',
      title: 'Refer a friend',
      sub: "About a minute. Only refer people who said it's OK for us to contact them.",
      yourName: 'Your name',
      yourContact: 'Your phone or email',
      friendName: "Friend's name",
      friendPhone: "Friend's phone",
      friendLang: 'Language they prefer',
      privacy: 'See our Privacy Policy',
      rules: 'Program rules',
      submit: 'Send referral →',
      sending: 'Sending...',
      ok: 'Thank you! We received your referral. A licensed agent will reach out to your friend during office hours (Mon–Fri 9am–6pm ET).',
      again: 'Refer someone else',
      err: `Something went wrong. Please call us at ${PHONE_DISPLAY}.`,
      required: 'Please fill this in.',
      badPhone: 'Please enter a 10-digit US phone number.',
      badContact: 'Please enter a 10-digit US phone number or an email address.',
      needConsent: 'Please confirm your friend agreed to be contacted.',
    },
    partner: {
      kicker: 'Door 2',
      title: 'Become a referral partner',
      sub: 'For local businesses. We call every business before setting up a partnership.',
      noFees: 'No referral fees, gifts or payments of any kind.',
      businessName: 'Business name',
      businessType: 'Type of business',
      choose: 'Choose one',
      types: {
        realtor: 'Realtor',
        car_dealer: 'Car dealer',
        contractor: 'Contractor',
        accountant: 'Accountant / tax preparer',
        property_manager: 'Property manager',
        other: 'Other',
      },
      yourName: 'Your name',
      phone: 'Phone',
      email: 'Email (optional)',
      langs: 'Languages you serve',
      privacy: 'See our Privacy Policy',
      rules: 'Program rules',
      submit: 'Apply to partner →',
      sending: 'Sending...',
      ok: 'Thank you! Someone from our team will call you during office hours (Mon–Fri 9am–6pm ET) to introduce ourselves.',
      err: `Something went wrong. Please call us at ${PHONE_DISPLAY}.`,
      required: 'Please fill this in.',
      badPhone: 'Please enter a 10-digit US phone number.',
      badEmail: 'Please check the email address.',
      needConsent: 'Please check the box to agree to be contacted.',
    },
    rulesKicker: 'Program rules in plain words',
    rulesTitle: 'Simple and fair',
    rules: [
      { h: 'No purchase required', p: 'Not for you, and not for your friend.' },
      { h: 'Consent first', p: 'We only contact people who agreed to hear from us, and we stop when asked.' },
      { h: 'No fees to partners', p: 'No referral fees, gifts or payments of any kind. Partnerships are about good service.' },
      { h: 'Your information stays private', p: 'We use it to follow up on your request. We do not sell it.' },
    ],
    rulesLink: 'Read the full program rules →',
    dirTitle: 'Local businesses our clients recommend',
    dirEmpty: 'Local partner directory coming soon. Businesses appear here only after our team confirms each one by phone.',
    dirSuggest: 'Recommend a local business for the directory',
  },
  es: {
    metaTitle: 'Recomiende a un amigo o sea socio de referidos | M&K Agency, Florida City',
    metaDesc:
      'Recomiende a un amigo a un agente de seguros licenciado en Florida City, o asóciese con nosotros como negocio local. Inglés, español y ruso. (305) 859-3953.',
    pill: '🤝 Recomendaciones y socios',
    h1a: 'Comparta la agencia',
    h1b: 'a la que sus vecinos ya llaman.',
    sub: 'Ya sea cliente, amigo de la agencia o un negocio local, un formulario corto pone a alguien en contacto con un agente licenciado en Florida City, en inglés, español o ruso.',
    asideTitle: '¿Prefiere llamar?',
    asideHours: 'Lun–vie, 9am–6pm ET',
    asideAddr: '33550 S Dixie Hwy, Suite 102, Florida City, FL 33034',
    door1: {
      who: 'Para clientes y vecinos',
      title: 'Recomiende a un amigo o familiar',
      text: 'Díganos a quién llamar, o comparta esta página por Facebook, WhatsApp o mensaje de texto. Recibirá una revisión de su cobertura sin compromiso con un agente licenciado, en el idioma que prefiera.',
      cta: 'Recomendar a alguien →',
      alt: 'Una familia en casa',
    },
    door2: {
      who: 'Para negocios locales',
      title: 'Sea socio de referidos',
      text: 'Agentes inmobiliarios, concesionarios de autos, contratistas, contadores y administradores de propiedades: ofrezca a sus clientes un agente local y licenciado que contesta el teléfono. Sin comisiones por recomendación, regalos ni pagos de ningún tipo.',
      cta: 'Asociarse con nosotros →',
      alt: "Una calle de negocios locales",
    },
    howKicker: 'Cómo funciona',
    howTitle: 'Tres pasos, en ambos casos',
    tabs: ['Recomiendo a un amigo', 'Soy un negocio'],
    friendSteps: [
      { h: 'Díganos a quién', p: 'Use el formulario corto de abajo o comparta esta página. Recomiende solo a personas que aceptaron que las contactemos.' },
      { h: 'Un agente licenciado se comunica', p: 'Llamamos a una hora razonable y ayudamos en inglés, español o ruso con preguntas sobre seguros de casa, auto, negocio o vida.' },
      { h: 'Sin presión', p: 'La revisión es sin compromiso. Su amigo decide qué hacer después, si es que quiere hacer algo, y puede pedirnos que dejemos de contactarle en cualquier momento.' },
    ],
    partnerSteps: [
      { h: 'Envíe el formulario corto', p: 'Cuéntenos sobre su negocio y los idiomas en que atiende. Toma alrededor de un minuto.' },
      { h: 'Nos conocemos', p: 'Una persona de nuestro equipo le llama para presentarse y confirmar los datos de su negocio.' },
      { h: 'Sus clientes tienen un agente local', p: 'Cuando un cliente suyo necesite seguro, envíelo con nosotros. Sin comisiones por recomendación, regalos ni pagos de ningún tipo.' },
    ],
    share: {
      title: 'Comparta esta página con un toque',
      sub: 'Escanee el código en nuestra oficina o publique el enlace en su grupo comunitario.',
      text: 'Texto',
      copy: 'Copiar enlace',
      copied: 'Enlace copiado',
      qrAlt: 'Código QR de esta página',
      shareText: 'M&K Agency: agentes de seguros locales y licenciados en Florida City (English, Español, Русский).',
    },
    teamKicker: 'Con quién hablarán sus amigos',
    teamTitle: 'Personas reales, aquí mismo en Florida City',
    teamSub: '33550 S Dixie Hwy, Suite 102 · Lun–vie, 9am–6pm ET',
    roleOwner: 'Dueño y fundador',
    roleLead: 'Agente con licencia · Líder de equipo',
    roleAgent: 'Agente con licencia',
    refer: {
      kicker: 'Puerta 1',
      title: 'Recomiende a un amigo',
      sub: 'Toma alrededor de un minuto. Recomiende solo a personas que aceptaron que las contactemos.',
      yourName: 'Su nombre',
      yourContact: 'Su teléfono o correo',
      friendName: 'Nombre de su amigo',
      friendPhone: 'Teléfono de su amigo',
      friendLang: 'Idioma que prefiere',
      privacy: 'Consulte nuestra Política de Privacidad',
      rules: 'Reglas del programa',
      submit: 'Enviar recomendación →',
      sending: 'Enviando...',
      ok: '¡Gracias! Recibimos su recomendación. Un agente licenciado se comunicará con su amigo en horario de oficina (lun–vie, 9am–6pm ET).',
      again: 'Recomendar a otra persona',
      err: `Algo salió mal. Llámenos al ${PHONE_DISPLAY}.`,
      required: 'Complete este campo.',
      badPhone: 'Ingrese un número de teléfono de EE. UU. de 10 dígitos.',
      badContact: 'Ingrese un teléfono de EE. UU. de 10 dígitos o un correo electrónico.',
      needConsent: 'Confirme que su amigo aceptó que lo contactemos.',
    },
    partner: {
      kicker: 'Puerta 2',
      title: 'Sea socio de referidos',
      sub: 'Para negocios locales. Llamamos a cada negocio antes de iniciar una alianza.',
      noFees: 'Sin comisiones por recomendación, regalos ni pagos de ningún tipo.',
      businessName: 'Nombre del negocio',
      businessType: 'Tipo de negocio',
      choose: 'Elija uno',
      types: {
        realtor: 'Agente inmobiliario',
        car_dealer: 'Concesionario de autos',
        contractor: 'Contratista',
        accountant: 'Contador / preparador de impuestos',
        property_manager: 'Administrador de propiedades',
        other: 'Otro',
      },
      yourName: 'Su nombre',
      phone: 'Teléfono',
      email: 'Correo electrónico (opcional)',
      langs: 'Idiomas en que atiende',
      privacy: 'Consulte nuestra Política de Privacidad',
      rules: 'Reglas del programa',
      submit: 'Solicitar alianza →',
      sending: 'Enviando...',
      ok: '¡Gracias! Una persona de nuestro equipo le llamará en horario de oficina (lun–vie, 9am–6pm ET) para presentarse.',
      err: `Algo salió mal. Llámenos al ${PHONE_DISPLAY}.`,
      required: 'Complete este campo.',
      badPhone: 'Ingrese un número de teléfono de EE. UU. de 10 dígitos.',
      badEmail: 'Revise el correo electrónico.',
      needConsent: 'Marque la casilla para aceptar que lo contactemos.',
    },
    rulesKicker: 'Reglas del programa en palabras sencillas',
    rulesTitle: 'Simple y justo',
    rules: [
      { h: 'No se requiere compra', p: 'Ni para usted ni para su amigo.' },
      { h: 'Primero el consentimiento', p: 'Solo contactamos a personas que aceptaron, y dejamos de hacerlo cuando nos lo piden.' },
      { h: 'Sin pagos a socios', p: 'Sin comisiones por recomendación, regalos ni pagos de ningún tipo. Las alianzas se tratan de buen servicio.' },
      { h: 'Su información es privada', p: 'La usamos para dar seguimiento a su solicitud. No la vendemos.' },
    ],
    rulesLink: 'Lea las reglas completas del programa →',
    dirTitle: 'Negocios locales que nuestros clientes recomiendan',
    dirEmpty: 'Directorio de negocios locales: próximamente. Los negocios aparecen aquí solo después de que nuestro equipo confirma cada uno por teléfono.',
    dirSuggest: 'Recomiende un negocio local para el directorio',
  },
  ru: {
    metaTitle: 'Порекомендуйте друга или станьте партнёром | M&K Agency, Florida City',
    metaDesc:
      'Порекомендуйте другу лицензированного страхового агента во Florida City или станьте нашим партнёром как местный бизнес. English, Español, по-русски. (305) 859-3953.',
    pill: '🤝 Рекомендации и партнёры',
    h1a: 'Поделитесь агентством,',
    h1b: 'которому уже звонят ваши соседи.',
    sub: 'Вы клиент, друг агентства или местный бизнес — одна короткая форма, и с человеком свяжется лицензированный агент из Florida City на английском, испанском или русском.',
    asideTitle: 'Удобнее позвонить?',
    asideHours: 'Пн–пт, 9:00–18:00 ET',
    asideAddr: '33550 S Dixie Hwy, Suite 102, Florida City, FL 33034',
    door1: {
      who: 'Для клиентов и соседей',
      title: 'Порекомендуйте друга или родственника',
      text: 'Скажите, кому позвонить, или поделитесь этой страницей в Facebook, WhatsApp или по SMS. С ним без обязательств обсудит страховку лицензированный агент — на удобном ему языке.',
      cta: 'Порекомендовать →',
      alt: 'Семья дома',
    },
    door2: {
      who: 'Для местного бизнеса',
      title: 'Станьте партнёром',
      text: 'Риелторы, автодилеры, подрядчики, бухгалтеры и управляющие недвижимостью: дайте своим клиентам местного лицензированного агента, который отвечает на звонки. Никаких вознаграждений за рекомендации, подарков или выплат любого рода.',
      cta: 'Стать партнёром →',
      alt: "Улица с местными магазинами",
    },
    howKicker: 'Как это работает',
    howTitle: 'Три шага в любом случае',
    tabs: ['Я рекомендую друга', 'Я представляю бизнес'],
    friendSteps: [
      { h: 'Скажите, кому позвонить', p: 'Заполните короткую форму ниже или поделитесь этой страницей. Рекомендуйте только тех, кто согласился, чтобы мы с ними связались.' },
      { h: 'Лицензированный агент свяжется', p: 'Мы позвоним в удобное время и поможем на английском, испанском или русском с вопросами о страховании дома, авто, бизнеса или жизни.' },
      { h: 'Без давления', p: 'Консультация ни к чему не обязывает. Ваш знакомый сам решает, что делать дальше, и может в любой момент попросить больше с ним не связываться.' },
    ],
    partnerSteps: [
      { h: 'Отправьте короткую форму', p: 'Расскажите о своём бизнесе и языках, на которых вы работаете. Это займёт около минуты.' },
      { h: 'Мы знакомимся', p: 'Человек из нашей команды позвонит, чтобы представиться и уточнить данные вашего бизнеса.' },
      { h: 'У ваших клиентов есть местный агент', p: 'Когда вашему клиенту понадобится страховка, направьте его к нам. Никаких вознаграждений за рекомендации, подарков или выплат любого рода.' },
    ],
    share: {
      title: 'Поделитесь страницей в одно касание',
      sub: 'Отсканируйте код в нашем офисе или опубликуйте ссылку в группе вашего сообщества.',
      text: 'SMS',
      copy: 'Копировать ссылку',
      copied: 'Ссылка скопирована',
      qrAlt: 'QR-код этой страницы',
      shareText: 'M&K Agency — местные лицензированные страховые агенты во Florida City (English, Español, Русский).',
    },
    teamKicker: 'С кем будут говорить ваши друзья',
    teamTitle: 'Настоящие люди, здесь, во Florida City',
    teamSub: '33550 S Dixie Hwy, Suite 102 · Пн–пт, 9:00–18:00 ET',
    roleOwner: 'Владелец и основатель',
    roleLead: 'Лицензированный агент · Руководитель группы',
    roleAgent: 'Лицензированный агент',
    refer: {
      kicker: 'Дверь 1',
      title: 'Порекомендуйте друга',
      sub: 'Около минуты. Рекомендуйте только тех, кто согласился, чтобы мы с ними связались.',
      yourName: 'Ваше имя',
      yourContact: 'Ваш телефон или email',
      friendName: 'Имя друга',
      friendPhone: 'Телефон друга',
      friendLang: 'Удобный ему язык',
      privacy: 'См. нашу Политику конфиденциальности',
      rules: 'Правила программы',
      submit: 'Отправить рекомендацию →',
      sending: 'Отправка...',
      ok: 'Спасибо! Мы получили вашу рекомендацию. Лицензированный агент свяжется с вашим знакомым в рабочее время (пн–пт, 9:00–18:00 ET).',
      again: 'Порекомендовать ещё кого-то',
      err: `Что-то пошло не так. Позвоните нам: ${PHONE_DISPLAY}.`,
      required: 'Заполните это поле.',
      badPhone: 'Введите 10-значный номер телефона США.',
      badContact: 'Введите 10-значный номер телефона США или адрес email.',
      needConsent: 'Подтвердите, что ваш знакомый согласился на звонок.',
    },
    partner: {
      kicker: 'Дверь 2',
      title: 'Станьте партнёром',
      sub: 'Для местного бизнеса. Прежде чем начать партнёрство, мы звоним в каждую компанию.',
      noFees: 'Никаких вознаграждений за рекомендации, подарков или выплат любого рода.',
      businessName: 'Название компании',
      businessType: 'Вид деятельности',
      choose: 'Выберите',
      types: {
        realtor: 'Риелтор',
        car_dealer: 'Автодилер',
        contractor: 'Подрядчик',
        accountant: 'Бухгалтер / налоговый консультант',
        property_manager: 'Управляющий недвижимостью',
        other: 'Другое',
      },
      yourName: 'Ваше имя',
      phone: 'Телефон',
      email: 'Email (необязательно)',
      langs: 'Языки, на которых вы работаете',
      privacy: 'См. нашу Политику конфиденциальности',
      rules: 'Правила программы',
      submit: 'Отправить заявку →',
      sending: 'Отправка...',
      ok: 'Спасибо! Человек из нашей команды позвонит вам в рабочее время (пн–пт, 9:00–18:00 ET), чтобы познакомиться.',
      err: `Что-то пошло не так. Позвоните нам: ${PHONE_DISPLAY}.`,
      required: 'Заполните это поле.',
      badPhone: 'Введите 10-значный номер телефона США.',
      badEmail: 'Проверьте адрес email.',
      needConsent: 'Отметьте согласие на связь с вами.',
    },
    rulesKicker: 'Правила программы простыми словами',
    rulesTitle: 'Просто и честно',
    rules: [
      { h: 'Покупка не требуется', p: 'Ни от вас, ни от вашего знакомого.' },
      { h: 'Сначала согласие', p: 'Мы связываемся только с теми, кто согласился, и прекращаем по первой просьбе.' },
      { h: 'Никаких выплат партнёрам', p: 'Никаких вознаграждений за рекомендации, подарков или выплат любого рода. Партнёрство — ради хорошего сервиса.' },
      { h: 'Ваши данные не передаются', p: 'Мы используем их только для ответа на ваш запрос и не продаём их.' },
    ],
    rulesLink: 'Полные правила программы →',
    dirTitle: 'Местный бизнес, который рекомендуют наши клиенты',
    dirEmpty: 'Каталог местных партнёров скоро появится. Компании попадают сюда только после того, как наша команда подтвердит каждую по телефону.',
    dirSuggest: 'Предложить местную компанию для каталога',
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const c = C[pickLang(params.lang)];
  return pageMetadata({
    lang: params.lang,
    path: '/referral',
    title: c.metaTitle,
    description: c.metaDesc,
  });
}

export default function ReferralPage({ params }: { params: { lang: string } }) {
  const l = pickLang(params.lang);
  const c = C[l];
  const dict = getDict(l).referral;
  const hasListings = referralBusinesses.length > 0;
  const role = (slug: string) =>
    slug === 'mikhail-kozlov' ? c.roleOwner : slug === 'carolina-silva' ? c.roleLead : c.roleAgent;

  return (
    <main className="ref-page">
      {/* ===== Hero + the two doors ===== */}
      <section className="ref-hero">
        <div className="container">
          <div className="ref-hero-top">
            <div>
              <span className="badge gold">{c.pill}</span>
              <h1>
                {c.h1a} <span className="ref-u">{c.h1b}</span>
              </h1>
              <p className="ref-sub">{c.sub}</p>
            </div>
            <div className="ref-aside">
              <p className="ref-aside-title">{c.asideTitle}</p>
              <a className="ref-aside-phone" href={`tel:${PHONE_TEL}`}>📞 {PHONE_DISPLAY}</a>
              <p>{c.asideHours}</p>
              <p>{c.asideAddr}</p>
            </div>
          </div>

          <div className="ref-doors">
            <div className="ref-door">
              <Image src="/images/Family_at_home.jpg" alt={c.door1.alt} width={600} height={600} sizes="(max-width: 700px) 100vw, 260px" />
              <div className="b">
                <span className="who">{c.door1.who}</span>
                <h2>{c.door1.title}</h2>
                <p>{c.door1.text}</p>
                <a className="cta" href="#refer">{c.door1.cta}</a>
              </div>
            </div>
            <div className="ref-door navy">
              <Image src="/images/cat-commercial.jpg" alt={c.door2.alt} width={600} height={600} sizes="(max-width: 700px) 100vw, 260px" />
              <div className="b">
                <span className="who">{c.door2.who}</span>
                <h2>{c.door2.title}</h2>
                <p>{c.door2.text}</p>
                <a className="cta ref-cta-gold" href="#partner">{c.door2.cta}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="section ref-how">
        <div className="container">
          <p className="kicker">{c.howKicker}</p>
          <h2>{c.howTitle}</h2>
          <HowItWorks tabs={c.tabs} friend={c.friendSteps} partner={c.partnerSteps} />
        </div>
      </section>

      {/* ===== Share bar ===== */}
      <section className="container">
        <ShareBar lang={l} t={c.share} />
      </section>

      {/* ===== Team ===== */}
      <section className="section">
        <div className="container">
          <p className="kicker">{c.teamKicker}</p>
          <h2>{c.teamTitle}</h2>
          <p className="ref-center-muted">{c.teamSub}</p>
          <div className="ref-team">
            {team.map((m) => (
              <div className="ref-tm" key={m.slug}>
                <Image src={m.photo} alt={m.name} width={216} height={216} />
                <b>{m.name}</b>
                <span>{role(m.slug)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== The two forms ===== */}
      <section className="section ref-forms-section">
        <div className="container ref-forms">
          <ReferFriendForm lang={l} t={c.refer} />
          <PartnerForm lang={l} t={c.partner} />
        </div>
      </section>

      {/* ===== Rules + community directory ===== */}
      <section className="section">
        <div className="container">
          <p className="kicker">{c.rulesKicker}</p>
          <h2>{c.rulesTitle}</h2>
          <div className="ref-rules">
            {c.rules.map((r: { h: string; p: string }) => (
              <div className="ref-rule" key={r.h}>
                <b>{r.h}</b>
                {r.p}
              </div>
            ))}
          </div>
          <p className="ref-rules-link">
            <Link href={`/${l}/referral/rules`}>{c.rulesLink}</Link>
          </p>

          <div className="ref-dir">
            {!hasListings && <h2>{c.dirTitle}</h2>}
            {hasListings ? (
              <>
                <BusinessDirectory lang={l} />
                <div style={{ marginTop: 24 }}>
                  <ReferralMap searchPlaceholder={dict.searchPlaceholder} />
                </div>
              </>
            ) : (
              <div className="ref-empty">{c.dirEmpty}</div>
            )}
            <details className="ref-suggest">
              <summary>{c.dirSuggest}</summary>
              <div style={{ marginTop: 16 }}>
                <ReferralForm t={dict} />
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
