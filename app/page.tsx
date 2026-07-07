'use client';

/**
 * ГЛАВНАЯ СТРАНИЦА САЙТА M&K Agency
 * ------------------------------------------------------------
 * Это ЕДИНСТВЕННЫЙ файл, который определяет, что видно на mkagencyinc.com.
 * Раньше здесь была "заглушка" (только крутящаяся картинка) — весь остальной
 * контент (форма, отзывы, статистика) жил в отдельном неиспользуемом файле
 * cont/siteBody.js, который никогда не подключался к этой странице.
 *
 * Как редактировать текст:
 *   Весь текст сайта лежит в объекте T ниже — отдельно для en / es / ru.
 *   Найди нужную строку (например T.ru.h1a) и поменяй текст.
 *
 * Как поменять картинки в шапке (крутятся каждые 20 секунд):
 *   Смотри HERO_SLIDES ниже. Каждая картинка — это файл в /public/images/.
 *   Как их сделать через встроенный /studio — см. INSTRUCTIONS_RU.md.
 */

import { useState, useEffect, useRef } from 'react';

/* ============================================================
   1) КАРТИНКИ В ШАПКЕ — меняются каждые 20 секунд
   ============================================================ */
const HERO_SLIDES = [
  { file: '/images/hero-hurricane.jpg', tagKey: 'tagHurricane' },
  { file: '/images/hero-fraud.jpg', tagKey: 'tagFraud' },
  { file: '/images/hero-underinsured.jpg', tagKey: 'tagUnderinsured' },
  { file: '/images/hero-family.jpg', tagKey: 'tagFamily' },
];
const SLIDE_INTERVAL_MS = 20000; // 20 секунд, как просил Михаил

/* ============================================================
   2) ВЕСЬ ТЕКСТ САЙТА — EN / ES / RU
   ============================================================ */
const T = {
  en: {
    navCall: 'Call 24/7 · (305) 859-3953',
    eyebrow: 'Home · Auto · Commercial — Serving all of Florida',
    h1a: 'Accidents happen.',
    h1b: "Don't gamble with your financial success.",
    sub: "M&K Agency protects your home, your car, and your business across all of Florida. Bilingual, real people who answer — and we're here when you need us most.",
    heroBtn: 'Get my free quote →',
    heroReassure: '30 seconds · No spam',
    rbName: 'Mikhail Kozlov',
    rbText: 'Rated 5.0 on Google & Yelp · 334+ reviews',
    tagHurricane: '🌀 Hurricane season is here',
    tagFraud: '⚠️ Storm-chaser contractors are targeting FL homeowners',
    tagUnderinsured: '📉 Average claim: $42K. Average coverage limit: $25K.',
    tagFamily: "❤️ We're here when you need us most",
    qTitle: 'Get my free quote',
    qSub: 'Takes 30 seconds. A real agent calls you back fast.',
    lLine: 'What do you need?',
    optHome: 'Home insurance', optAuto: 'Auto insurance', optComm: 'Commercial / business', optBundle: 'Bundle & save',
    lZip: 'ZIP code', lName: 'Full name', phName: 'Carmen Vega', lPhone: 'Phone', lEmail: 'Email', phEmail: 'you@email.com',
    consent: 'I agree that M&K Agency may contact me by phone, text, or automated/AI calls at the number provided about insurance, even if it is on a Do-Not-Call list. Consent is not a condition of purchase.',
    submit: 'See my quote →', sending: 'Sending…',
    formFoot: 'Your info stays private. No spam, ever.',
    thxTitle: "You're all set! 🎉",
    thxSub: "Mikhail's team will call you shortly.",
    errMsg: 'Something went wrong. Please call us at (305) 859-3953.',
    strip: "We compare 15+ A-rated Florida carriers for home, auto & commercial — so you don't have to.",
    pKick: 'What we protect', pHead: "One trusted agency for everything you've built",
    p1h: 'Home', p1p: 'Florida homes need coverage that holds up when storms hit.',
    p2h: 'Auto', p2p: 'The right auto coverage at an honest price — explained clearly.',
    p3h: 'Commercial', p3p: 'From liability to property, we protect the business you built.',
    s1: 'families & businesses protected', s2: 'average callback time', s3: 'A-rated carriers compared', s4: '5-star reviews',
    fmKick: 'If it ever happens', fmHead: 'When something goes wrong — call us first',
    fmSub: 'A crash, a storm, a break-in. Stay calm. We walk you through every step.',
    st1h: "Make sure everyone's safe", st1p: 'People first. Get to safety, check on everyone.',
    st2h: 'Call M&K first', st2p: 'One number, a real person — English, Spanish, or Russian.',
    st3h: 'Capture the details', st3p: 'Photos of the damage and the key information.',
    st4h: 'We handle the claim', st4p: "We open it, manage it, and follow it to the end.",
    near: "We're always nearby — call us 24/7.",
    agKick: 'Meet your agent', agHead: "Hi, I'm Mikhail Kozlov.", agBadge: 'Mikhail Kozlov · Serving all of Florida',
    agBody: 'For years, my family and I have protected families and businesses across all of Florida. Insurance is about people, not policies.',
    agBtn: '📞 Talk to Mikhail', agChat: '💬 Text us', agSig: '— Mikhail Kozlov, Founder',
    whyKick: 'Why M&K', whyHead: 'Help that goes beyond the policy',
    w1t: 'We compare for you', w1p: 'Many A-rated carriers, one conversation.',
    w2t: 'We speak your language', w2p: 'English, Spanish, or Russian — no jargon, no rush.',
    w3t: "We've got your back", w3p: "Before, during, and after a claim.",
    revKick: 'Neighbors trust us', revHead: 'Real people, real help',
    rev1: '"When a pipe burst, Mikhail\'s team had my claim moving the same day."', rev1w: 'Tampa, FL · Homeowners',
    rev2: '"Switched my shop\'s commercial policy and saved real money."', rev2w: 'Orlando, FL · Business owner',
    rev3: '"They bundled my home and auto. Honest, patient people."', rev3w: 'Miami, FL',
    ctaHead: "Don't play with your future. Let's protect it — together.", ctaSub: "Get your free quote or call Mikhail's team 24/7.",
    ctaBtn1: 'Get my free quote', ctaBtn2: '📞 Call (305) 859-3953',
    addr: '33550 S Dixie Hwy, Ste 102 · Florida City, FL 33034',
    legal: 'M&K Agency Inc. is a licensed independent insurance agency serving Florida. Not an insurance carrier. Coverage subject to underwriting approval. © 2026 M&K Agency Inc.',
    chatFab: 'Chat with Sam', callbackFab: 'Request a callback',
    chatTitle: 'Sam · M&K Agency', tabChat: 'Chat', tabCallback: 'Request callback',
    chatGreeting: "Hi! I'm Sam, M&K Agency's assistant. What kind of insurance are you looking for — home, auto, or business?",
    chatPlaceholder: 'Type a message…', chatThinking: 'Sam is typing…',
    cbName: 'Full name', cbPhone: 'Phone number', cbTime: 'Best time to call', cbTimeOpts: ['ASAP', 'Morning', 'Afternoon', 'Evening'],
    cbSubmit: 'Request callback', cbSending: 'Sending…',
    cbOk: "Got it! Mikhail's team will call you at the time you picked.",
  },
  es: {
    navCall: 'Llame 24/7 · (305) 859-3953',
    eyebrow: 'Hogar · Auto · Comercial — Servimos a toda Florida',
    h1a: 'Los accidentes pasan.', h1b: 'No juegue con su éxito financiero.',
    sub: 'M&K Agency protege su hogar, su auto y su negocio en toda Florida. Gente real que contesta — estamos aquí cuando más nos necesita.',
    heroBtn: 'Quiero mi cotización →', heroReassure: '30 segundos · Sin spam',
    rbName: 'Mikhail Kozlov', rbText: 'Calificado 5.0 en Google y Yelp · 334+ reseñas',
    tagHurricane: '🌀 Llegó la temporada de huracanes', tagFraud: '⚠️ Contratistas oportunistas están apuntando a dueños de casa en FL',
    tagUnderinsured: '📉 Reclamo promedio: $42K. Límite de cobertura promedio: $25K.', tagFamily: '❤️ Estamos aquí cuando más nos necesita',
    qTitle: 'Mi cotización gratis', qSub: 'Toma 30 segundos. Un agente real le llama rápido.',
    lLine: '¿Qué necesita?', optHome: 'Seguro de hogar', optAuto: 'Seguro de auto', optComm: 'Comercial / negocio', optBundle: 'Combinar y ahorrar',
    lZip: 'Código postal', lName: 'Nombre completo', phName: 'Carmen Vega', lPhone: 'Teléfono', lEmail: 'Correo', phEmail: 'usted@correo.com',
    consent: 'Acepto que M&K Agency me contacte por teléfono, texto o llamadas automáticas/IA sobre seguros, aunque esté en una lista de No Llamar.',
    submit: 'Ver mi cotización →', sending: 'Enviando…',
    formFoot: 'Su información es privada. Nunca enviamos spam.',
    thxTitle: '¡Listo! 🎉', thxSub: 'El equipo de Mikhail le llamará pronto.',
    errMsg: 'Algo salió mal. Llámenos al (305) 859-3953.',
    strip: 'Comparamos 15+ aseguradoras de Florida para hogar, auto y comercial — para que usted no tenga que hacerlo.',
    pKick: 'Lo que protegemos', pHead: 'Una agencia de confianza para todo lo que ha construido',
    p1h: 'Hogar', p1p: 'Las casas de Florida necesitan cobertura que resista tormentas.',
    p2h: 'Auto', p2p: 'La cobertura correcta a un precio honesto.',
    p3h: 'Comercial', p3p: 'Protegemos el negocio que ha construido.',
    s1: 'familias y negocios protegidos', s2: 'tiempo promedio de respuesta', s3: 'aseguradoras comparadas', s4: 'reseñas de 5 estrellas',
    fmKick: 'Si alguna vez pasa', fmHead: 'Cuando algo sale mal — llámenos primero',
    fmSub: 'Un choque, una tormenta, un robo. Le guiamos en cada paso.',
    st1h: 'Asegúrese de que todos estén bien', st1p: 'Primero las personas.',
    st2h: 'Llame a M&K primero', st2p: 'Un número, una persona real — inglés, español o ruso.',
    st3h: 'Capture los detalles', st3p: 'Fotos de los daños y la información clave.',
    st4h: 'Gestionamos el reclamo', st4p: 'Lo abrimos, lo gestionamos y lo seguimos hasta el final.',
    near: 'Siempre estamos cerca — llámenos 24/7.',
    agKick: 'Conozca a su agente', agHead: 'Hola, soy Mikhail Kozlov.', agBadge: 'Mikhail Kozlov · Servimos a toda Florida',
    agBody: 'Durante años, mi familia y yo hemos protegido a familias y negocios en toda Florida.',
    agBtn: '📞 Hable con Mikhail', agChat: '💬 Escríbanos', agSig: '— Mikhail Kozlov, Fundador',
    whyKick: 'Por qué M&K', whyHead: 'Ayuda que va más allá de la póliza',
    w1t: 'Comparamos por usted', w1p: 'Muchas aseguradoras, una conversación.',
    w2t: 'Hablamos su idioma', w2p: 'Inglés, español o ruso — sin tecnicismos.',
    w3t: 'Lo respaldamos', w3p: 'Antes, durante y después de un reclamo.',
    revKick: 'Sus vecinos confían en nosotros', revHead: 'Gente real, ayuda real',
    rev1: '"Cuando se reventó una tubería, el equipo de Mikhail movió mi reclamo el mismo día."', rev1w: 'Tampa, FL · Propietarios',
    rev2: '"Cambié mi póliza comercial y ahorré dinero de verdad."', rev2w: 'Orlando, FL · Dueño de negocio',
    rev3: '"Combinaron mi hogar y auto. Gente honesta y paciente."', rev3w: 'Miami, FL',
    ctaHead: 'No juegue con su futuro. Protejámoslo — juntos.', ctaSub: 'Obtenga su cotización o llame al equipo de Mikhail 24/7.',
    ctaBtn1: 'Quiero mi cotización', ctaBtn2: '📞 Llamar (305) 859-3953',
    addr: '33550 S Dixie Hwy, Ste 102 · Florida City, FL 33034',
    legal: 'M&K Agency Inc. es una agencia de seguros independiente con licencia en Florida. © 2026 M&K Agency Inc.',
    chatFab: 'Chatear con Sam', callbackFab: 'Pedir que le llamen',
    chatTitle: 'Sam · M&K Agency', tabChat: 'Chat', tabCallback: 'Pedir llamada',
    chatGreeting: '¡Hola! Soy Sam, asistente de M&K Agency. ¿Qué tipo de seguro busca — hogar, auto o negocio?',
    chatPlaceholder: 'Escriba un mensaje…', chatThinking: 'Sam está escribiendo…',
    cbName: 'Nombre completo', cbPhone: 'Teléfono', cbTime: 'Mejor horario para llamar', cbTimeOpts: ['Lo antes posible', 'Mañana', 'Tarde', 'Noche'],
    cbSubmit: 'Pedir llamada', cbSending: 'Enviando…',
    cbOk: '¡Listo! El equipo de Mikhail le llamará en el horario elegido.',
  },
  ru: {
    navCall: 'Звоните 24/7 · (305) 859-3953',
    eyebrow: 'Дом · Авто · Бизнес — Обслуживаем всю Флориду',
    h1a: 'Несчастья случаются.', h1b: 'Не рискуйте своим финансовым благополучием.',
    sub: 'M&K Agency защищает ваш дом, машину и бизнес по всей Флориде. Говорим по-русски, по-английски и по-испански — и мы рядом, когда нужнее всего.',
    heroBtn: 'Бесплатный расчёт →', heroReassure: '30 секунд · Без спама',
    rbName: 'Mikhail Kozlov', rbText: 'Рейтинг 5.0 на Google и Yelp · 334+ отзывов',
    tagHurricane: '🌀 Сезон ураганов уже начался', tagFraud: '⚠️ Мошенники-подрядчики охотятся на владельцев домов после шторма',
    tagUnderinsured: '📉 Средний claim — $42K. Средний лимит полиса — $25K.', tagFamily: '❤️ Мы рядом, когда это важнее всего',
    qTitle: 'Бесплатный расчёт', qSub: 'Займёт 30 секунд. Живой агент быстро перезвонит.',
    lLine: 'Что вам нужно?', optHome: 'Страховка дома', optAuto: 'Страховка авто', optComm: 'Бизнес / коммерческая', optBundle: 'Пакет и скидка',
    lZip: 'Индекс (ZIP)', lName: 'Имя и фамилия', phName: 'Анна Иванова', lPhone: 'Телефон', lEmail: 'Эл. почта', phEmail: 'vy@email.com',
    consent: 'Я согласен(на), что M&K Agency может связываться со мной по телефону, SMS или автоматическими/ИИ-звонками по вопросам страхования, даже если номер в списке «Не звонить».',
    submit: 'Узнать цену →', sending: 'Отправка…',
    formFoot: 'Ваши данные конфиденциальны. Никакого спама.',
    thxTitle: 'Готово! 🎉', thxSub: 'Команда Михаила скоро перезвонит.',
    errMsg: 'Что-то пошло не так. Позвоните нам: (305) 859-3953.',
    strip: 'Сравниваем 15+ надёжных страховых компаний Флориды по дому, авто и бизнесу — за вас.',
    pKick: 'Что мы защищаем', pHead: 'Одно надёжное агентство для всего, что вы построили',
    p1h: 'Дом', p1p: 'Дому во Флориде нужна защита, которая выдержит ураган.',
    p2h: 'Авто', p2p: 'Правильное покрытие по честной цене.',
    p3h: 'Бизнес', p3p: 'Защищаем дело, которое вы построили.',
    s1: 'семей и бизнесов защищено', s2: 'среднее время перезвона', s3: 'надёжных компаний сравниваем', s4: 'отзывов на 5 звёзд',
    fmKick: 'Если это случится', fmHead: 'Когда что-то пошло не так — сначала звоните нам',
    fmSub: 'Авария, шторм, взлом. Мы проведём вас по каждому шагу.',
    st1h: 'Убедитесь, что все в безопасности', st1p: 'Сначала люди.',
    st2h: 'Сначала звоните M&K', st2p: 'Один номер, живой человек — по-русски, по-английски или по-испански.',
    st3h: 'Зафиксируйте детали', st3p: 'Фото повреждений и ключевая информация.',
    st4h: 'Мы ведём иск', st4p: 'Открываем, ведём и доводим до конца.',
    near: 'Мы всегда рядом — звоните 24/7.',
    agKick: 'Ваш агент', agHead: 'Здравствуйте, я Михаил Козлов.', agBadge: 'Mikhail Kozlov · Обслуживаем всю Флориду',
    agBody: 'Уже много лет мы с семьёй защищаем семьи и бизнесы по всей Флориде.',
    agBtn: '📞 Поговорить с Михаилом', agChat: '💬 Напишите нам', agSig: '— Михаил Козлов, основатель',
    whyKick: 'Почему M&K', whyHead: 'Помощь, которая больше, чем полис',
    w1t: 'Сравниваем за вас', w1p: 'Много надёжных компаний — одна беседа.',
    w2t: 'Говорим на вашем языке', w2p: 'Русский, английский или испанский — без спешки.',
    w3t: 'Мы на вашей стороне', w3p: 'До, во время и после иска.',
    revKick: 'Соседи нам доверяют', revHead: 'Живые люди, реальная помощь',
    rev1: '«Когда прорвало трубу, команда Михаила запустила мой иск в тот же день.»', rev1w: 'Tampa, FL · Домовладельцы',
    rev2: '«Перевёл коммерческий полис магазина и реально сэкономил.»', rev2w: 'Orlando, FL · Владелец бизнеса',
    rev3: '«Объединили дом и авто. Честные, терпеливые люди.»', rev3w: 'Miami, FL',
    ctaHead: 'Не играйте со своим будущим. Давайте защитим его — вместе.', ctaSub: 'Получите расчёт или звоните команде Михаила 24/7.',
    ctaBtn1: 'Бесплатный расчёт', ctaBtn2: '📞 (305) 859-3953',
    addr: '33550 S Dixie Hwy, Ste 102 · Florida City, FL 33034',
    legal: 'M&K Agency Inc. — лицензированное независимое страховое агентство во Флориде. © 2026 M&K Agency Inc.',
    chatFab: 'Чат с Sam', callbackFab: 'Заказать звонок',
    chatTitle: 'Sam · M&K Agency', tabChat: 'Чат', tabCallback: 'Заказать звонок',
    chatGreeting: 'Привет! Я Sam, ассистент M&K Agency. Какой тип страховки вас интересует — дом, авто или бизнес?',
    chatPlaceholder: 'Напишите сообщение…', chatThinking: 'Sam печатает…',
    cbName: 'Имя и фамилия', cbPhone: 'Телефон', cbTime: 'Удобное время звонка', cbTimeOpts: ['Как можно скорее', 'Утро', 'День', 'Вечер'],
    cbSubmit: 'Заказать звонок', cbSending: 'Отправка…',
    cbOk: 'Готово! Команда Михаила позвонит вам в выбранное время.',
  },
};

const PHONE_TEL = '+13058593953';
const PHONE_DISPLAY = '(305) 859-3953';

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = T[lang];

  /* ---------- Rotating hero photo (every 20s) ---------- */
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  /* ---------- Quote form -> /api/lead ---------- */
  const [form, setForm] = useState({ line: 'home', zip: '', name: '', phone: '', email: '', consent: false });
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | done | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  async function submitQuote(e) {
    e.preventDefault();
    if (!form.consent) return;
    setFormStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          insurance_type: form.line,
          zip_code: form.zip,
          message: `Language: ${lang} · Consent: yes`,
        }),
      });
      setFormStatus(res.ok ? 'done' : 'error');
    } catch {
      setFormStatus('error');
    }
  }

  /* ---------- Stats counter animation ---------- */
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCounted(true); },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Counter = ({ target, prefix = '', suffix = '' }) => {
    const [n, setN] = useState(counted ? target : 0);
    useEffect(() => {
      if (!counted) return;
      let cur = 0;
      const step = Math.max(1, Math.round(target / 45));
      const id = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(id); }
        setN(cur);
      }, 22);
      return () => clearInterval(id);
    }, [counted]);
    return <>{prefix}{n}{suffix}</>;
  };

  return (
    <div>
      {/* ================= RIBBON + NAV ================= */}
      <div className="ribbon"><span className="star">✦</span> In God We Trust · We build our future together <span className="star">✦</span></div>
      <header className="nav">
        <div className="wrap nav-in">
          <div className="logo"><span className="mark">M&K</span> M&amp;K Agency</div>
          <div className="nav-actions">
            <div className="lang" role="group" aria-label="Language">
              <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
              <button className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')}>ES</button>
              <button className={lang === 'ru' ? 'on' : ''} onClick={() => setLang('ru')}>RU</button>
            </div>
            <a className="nav-call" href={`tel:${PHONE_TEL}`}>📞 <span className="lbl">{t.navCall}</span></a>
          </div>
        </div>
      </header>

      {/* ================= HERO (rotating threat photo) ================= */}
      <section className="hero has-photo">
        <div className="hero-photo-wrap">
          {HERO_SLIDES.map((s, i) => (
            <img key={s.file} src={s.file} alt="" className={i === slide ? 'on' : ''} />
          ))}
        </div>
        <div className="wrap hero-grid">
          <div className="rv in">
            <span className="threat-tag">{t[HERO_SLIDES[slide].tagKey]}</span>
            <span className="eyebrow"><span className="dot"></span>{t.eyebrow}</span>
            <h1>{t.h1a} <span className="hl">{t.h1b}</span></h1>
            <p className="sub">{t.sub}</p>
            <div className="hero-cta">
              <a className="btn btn-blue" href="#quoteCard">{t.heroBtn}</a>
              <span className="reassure">✓ {t.heroReassure}</span>
            </div>
            <div className="reviewbadge">
              <img src="/images/mikhail-avatar.jpg" alt="Mikhail Kozlov" />
              <div>
                <div className="rb-stars">★★★★★ <span className="rb-n">{t.rbName}</span></div>
                <div className="rb-t">{t.rbText}</div>
              </div>
            </div>
          </div>

          {/* ---- Quote card ---- */}
          <div className="quote-card" id="quoteCard">
            {formStatus === 'done' ? (
              <div className="thanks show">
                <div className="check">✓</div>
                <h2>{t.thxTitle}</h2>
                <p>{t.thxSub}</p>
                <a className="btn btn-blue" href={`sms:${PHONE_TEL}`}>{t.agChat}</a>
              </div>
            ) : (
              <div>
                <h2>{t.qTitle}</h2>
                <p className="qsub">{t.qSub}</p>
                <form onSubmit={submitQuote}>
                  <div className="field full">
                    <label>{t.lLine}</label>
                    <select value={form.line} onChange={set('line')}>
                      <option value="home">{t.optHome}</option>
                      <option value="auto">{t.optAuto}</option>
                      <option value="commercial">{t.optComm}</option>
                      <option value="bundle">{t.optBundle}</option>
                    </select>
                  </div>
                  <div className="qrow">
                    <div className="field"><label>{t.lZip}</label><input required value={form.zip} onChange={set('zip')} placeholder="33034" /></div>
                    <div className="field"><label>{t.lName}</label><input required value={form.name} onChange={set('name')} placeholder={t.phName} /></div>
                  </div>
                  <div className="qrow">
                    <div className="field"><label>{t.lPhone}</label><input required type="tel" value={form.phone} onChange={set('phone')} placeholder="(305) 555-0123" /></div>
                    <div className="field"><label>{t.lEmail}</label><input type="email" value={form.email} onChange={set('email')} placeholder={t.phEmail} /></div>
                  </div>
                  <label className="consent">
                    <input type="checkbox" checked={form.consent} onChange={set('consent')} required />
                    <span>{t.consent}</span>
                  </label>
                  <button className="btn btn-blue submit-q" type="submit" disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? t.sending : t.submit}
                  </button>
                  {formStatus === 'error' && <p style={{ color: '#c0392b', textAlign: 'center', marginTop: '.6rem', fontSize: '.85rem' }}>{t.errMsg}</p>}
                  <p className="form-foot">🔒 {t.formFoot}</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="strip" style={{ padding: 0 }}>
        <div className="wrap strip-in"><span className="g">✦</span> {t.strip}</div>
      </section>

      {/* ================= PILLARS ================= */}
      <section>
        <div className="wrap">
          <div className="sec-head rv in"><span className="kick">{t.pKick}</span><h2>{t.pHead}</h2></div>
          <div className="pillars">
            <div className="pillar rv in"><div className="ic">🏠</div><h3>{t.p1h}</h3><p>{t.p1p}</p><a className="lk" href="#quoteCard">{t.p1h} →</a></div>
            <div className="pillar rv in"><div className="ic">🚗</div><h3>{t.p2h}</h3><p>{t.p2p}</p><a className="lk" href="#quoteCard">{t.p2h} →</a></div>
            <div className="pillar rv in"><div className="ic">🏢</div><h3>{t.p3h}</h3><p>{t.p3p}</p><a className="lk" href="#quoteCard">{t.p3h} →</a></div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats strip" style={{ padding: 0, borderTop: 0 }} ref={statsRef}>
        <div className="wrap stats-in">
          <div className="stat"><div className="n"><Counter target={500} suffix="+" /></div><div className="l">{t.s1}</div></div>
          <div className="stat"><div className="n"><Counter prefix="<" target={60} suffix="s" /></div><div className="l">{t.s2}</div></div>
          <div className="stat"><div className="n"><Counter target={15} suffix="+" /></div><div className="l">{t.s3}</div></div>
          <div className="stat"><div className="n"><Counter target={334} suffix="+" /></div><div className="l">{t.s4}</div></div>
        </div>
      </section>

      {/* ================= FIRST MINUTES ================= */}
      <section className="first">
        <div className="wrap">
          <div className="sec-head rv in"><span className="kick">{t.fmKick}</span><h2>{t.fmHead}</h2><p>{t.fmSub}</p></div>
          <div className="tl">
            <div className="step rv in"><div className="num">1</div><h3>{t.st1h}</h3><p>{t.st1p}</p></div>
            <div className="step rv in"><div className="num">2</div><h3>{t.st2h}</h3><p>{t.st2p}</p></div>
            <div className="step rv in"><div className="num">3</div><h3>{t.st3h}</h3><p>{t.st3p}</p></div>
            <div className="step rv in"><div className="num">4</div><h3>{t.st4h}</h3><p>{t.st4p}</p></div>
          </div>
          <p className="near">{t.near} <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></p>
        </div>
      </section>

      {/* ================= AGENT ================= */}
      <section className="agent">
        <div className="wrap agent-grid">
          <div className="agent-photo rv in">
            <img src="/images/mikhail.jpg" alt="Mikhail Kozlov" />
            <div className="badge"><span className="g">★★★★★</span> {t.agBadge}</div>
          </div>
          <div className="agent-copy rv in">
            <span className="kick">{t.agKick}</span>
            <h2>{t.agHead}</h2>
            <p>{t.agBody}</p>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              <a className="btn btn-navy" href={`tel:${PHONE_TEL}`}>{t.agBtn} · {PHONE_DISPLAY}</a>
              <a className="btn btn-white" href={`sms:${PHONE_TEL}`}>{t.agChat}</a>
            </div>
            <div className="sig">{t.agSig}</div>
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section>
        <div className="wrap">
          <div className="sec-head rv in"><span className="kick">{t.whyKick}</span><h2>{t.whyHead}</h2></div>
          <div className="cards3">
            <div className="card rv in"><div className="ic" style={{ background: 'var(--blue)' }}>🔍</div><h3>{t.w1t}</h3><p>{t.w1p}</p></div>
            <div className="card rv in"><div className="ic" style={{ background: 'var(--gold)' }}>🗣️</div><h3>{t.w2t}</h3><p>{t.w2p}</p></div>
            <div className="card rv in"><div className="ic" style={{ background: 'var(--navy)' }}>🛡️</div><h3>{t.w3t}</h3><p>{t.w3p}</p></div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="reviews">
        <div className="wrap">
          <div className="sec-head rv in"><span className="kick">{t.revKick}</span><h2>{t.revHead}</h2></div>
          <div className="rgrid">
            <div className="review rv in"><div className="stars">★★★★★</div><p>{t.rev1}</p><div className="who">Robert &amp; Carmen V. <span>{t.rev1w}</span></div></div>
            <div className="review rv in"><div className="stars">★★★★★</div><p>{t.rev2}</p><div className="who">Esteban M. <span>{t.rev2w}</span></div></div>
            <div className="review rv in"><div className="stars">★★★★★</div><p>{t.rev3}</p><div className="who">Gloria S. <span>{t.rev3w}</span></div></div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="wrap rv in">
          <h2>{t.ctaHead}</h2>
          <p>{t.ctaSub}</p>
          <div className="btn-row">
            <a className="btn btn-white" href="#quoteCard">{t.ctaBtn1}</a>
            <a className="btn btn-navy" href={`tel:${PHONE_TEL}`}>{t.ctaBtn2}</a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-col">
              <div className="logo" style={{ color: '#fff', marginBottom: '.6rem' }}><span className="mark">M&K</span> M&amp;K Agency Inc.</div>
              <div>{t.addr}</div>
            </div>
            <div className="foot-col">
              <h4>Contact</h4>
              <div><a href={`tel:${PHONE_TEL}`}>{t.navCall}</a></div>
              <div><a href="mailto:mkagency2020@hotmail.com">Email us</a></div>
            </div>
          </div>
          <p className="legal">{t.legal}</p>
        </div>
      </footer>

      <nav className="mobilebar">
        <a className="btn btn-blue" href={`tel:${PHONE_TEL}`}>📞 {t.navCall}</a>
        <a className="btn btn-white" href={`sms:${PHONE_TEL}`}>{t.agChat}</a>
      </nav>

      {/* ================= AI CHAT + CALLBACK WIDGET (no Ricochet needed) ================= */}
      <ChatAndCallbackWidget t={t} lang={lang} />
    </div>
  );
}

/* ============================================================
   ПЛАВАЮЩИЙ ВИДЖЕТ: AI-чат (через xAI/Grok) + "Заказать звонок"
   Ни то, ни другое НЕ требует Ricochet — оба пишут прямо в Neon
   и присылают тебе email через Resend (та же система, что форма).
   ============================================================ */
function ChatAndCallbackWidget({ t, lang }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('chat'); // 'chat' | 'callback'

  const [messages, setMessages] = useState([{ role: 'assistant', content: t.chatGreeting }]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);

  async function sendChat() {
    if (!input.trim()) return;
    const next = [...messages, { role: 'user', content: input }];
    setMessages(next);
    setInput('');
    setThinking(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next, lang }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply || t.errMsg }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: t.errMsg }]);
    } finally {
      setThinking(false);
    }
  }

  const [cb, setCb] = useState({ name: '', phone: '', time: t.cbTimeOpts[0] });
  const [cbStatus, setCbStatus] = useState('idle');
  async function sendCallback(e) {
    e.preventDefault();
    setCbStatus('sending');
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cb),
      });
      setCbStatus(res.ok ? 'done' : 'error');
    } catch {
      setCbStatus('error');
    }
  }

  return (
    <div className="mk-fab-group">
      {open && (
        <div className="mk-panel">
          <div className="mk-panel-head">
            <span>{t.chatTitle}</span>
            <button onClick={() => setOpen(false)} aria-label="Close">×</button>
          </div>
          <div className="mk-panel-tabs">
            <button className={tab === 'chat' ? 'active' : ''} onClick={() => setTab('chat')}>{t.tabChat}</button>
            <button className={tab === 'callback' ? 'active' : ''} onClick={() => setTab('callback')}>{t.tabCallback}</button>
          </div>

          {tab === 'chat' ? (
            <>
              <div className="mk-msgs">
                {messages.map((m, i) => (
                  <div key={i} className={`mk-msg ${m.role === 'user' ? 'me' : 'bot'}`}>{m.content}</div>
                ))}
                {thinking && <div className="mk-msg bot">{t.chatThinking}</div>}
              </div>
              <div className="mk-input-row">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                  placeholder={t.chatPlaceholder}
                />
                <button onClick={sendChat}>→</button>
              </div>
            </>
          ) : cbStatus === 'done' ? (
            <div className="mk-callback-ok">✅ {t.cbOk}</div>
          ) : (
            <form className="mk-callback-form" onSubmit={sendCallback}>
              <input required placeholder={t.cbName} value={cb.name} onChange={(e) => setCb({ ...cb, name: e.target.value })} />
              <input required type="tel" placeholder={t.cbPhone} value={cb.phone} onChange={(e) => setCb({ ...cb, phone: e.target.value })} />
              <select value={cb.time} onChange={(e) => setCb({ ...cb, time: e.target.value })}>
                {t.cbTimeOpts.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <button type="submit" disabled={cbStatus === 'sending'}>{cbStatus === 'sending' ? t.cbSending : t.cbSubmit}</button>
              {cbStatus === 'error' && <p style={{ color: '#c0392b', fontSize: '.8rem' }}>{t.errMsg}</p>}
            </form>
          )}
        </div>
      )}

      {!open && (
        <>
          <button className="mk-fab" onClick={() => { setOpen(true); setTab('chat'); }}>💬 {t.chatFab}</button>
          <button className="mk-fab secondary" onClick={() => { setOpen(true); setTab('callback'); }}>📞 {t.callbackFab}</button>
        </>
      )}
    </div>
  );
}
