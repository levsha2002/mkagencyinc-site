/* =================== CONFIG — EDIT THESE =================== */
const PHONE_DISPLAY = "(305) 859-3953";
const PHONE_TEL     = "+13058593953";
// Chat = click-to-text (SMS) to your Hearsay-enabled office line (PHONE_TEL above)
const WEBHOOK_URL   = "PASTE_YOUR_ZAPIER_OR_MAKE_WEBHOOK_URL_HERE";
const VIDEO_EMBED   = "";                           // e.g. "https://www.youtube.com/embed/XXXX"
/* ========================================================== */

const T={
 en:{
  ribbon:"In God We Trust · We build our future together",
  navCall:"Call 24/7 · (305) 859-3953",
  eyebrow:"Home · Auto · Commercial — Serving all of Florida",
  h1a:"Accidents happen.",h1b:"Don't gamble with your financial success.",
  sub:"M&K Agency protects your home, your car, and your business across all of Florida. Bilingual, real people who answer — and we're here when you need us most.",
  heroBtn:"Get my free quote →",heroReassure:"30 seconds · No spam",
  rbName:"Mikhail Kozlov",rbText:"Rated 5.0 on Google & Yelp · 334+ reviews",
  qTitle:"Get my free quote",qSub:"Takes 30 seconds. A real agent calls you back fast.",
  lLine:"What do you need?",optHome:"Home insurance",optAuto:"Auto insurance",optComm:"Commercial / business",optBundle:"Bundle & save",
  lZip:"ZIP code",lName:"Full name",phName:"Carmen Vega",lPhone:"Phone",lEmail:"Email",phEmail:"you@email.com",
  consent:"I agree that M&K Agency may contact me by phone, text, or automated/AI calls at the number provided about insurance, even if it is on a Do-Not-Call list. Consent is not a condition of purchase. Message/data rates may apply.",
  submit:"See my quote →",formFoot:"🔒 Your info stays private. No spam, ever.",
  thxTitle:"You're all set! 🎉",thxSub:"Mikhail's team will call you shortly. Want to text us now? Chat directly to us.",thxWa:"Chat directly to us",
  strip:"We compare 15+ A-rated Florida carriers for home, auto & commercial — so you don't have to.",
  pKick:"What we protect",pHead:"One trusted agency for everything you've built",
  p1h:"Home",p1p:"Florida homes need coverage that holds up when storms hit. We find protection that actually pays when it counts.",p1l:"Protect my home →",
  p2h:"Auto",p2p:"The right auto coverage at an honest price — explained clearly, with no surprises when you need to file.",p2l:"Cover my car →",
  p3h:"Commercial",p3p:"From liability to property, we protect the business you've built — so one bad day doesn't undo years of work.",p3l:"Protect my business →",
  accKick:"Be ready, not sorry",accHead:"Accidents happen. We're here to protect you.",
  accSub:"A hurricane, a crash, a flood — one bad day shouldn't cost you everything you've built. Be covered before it happens, and supported after.",
  accHurr:"Hurricane & storm damage",accHurrSlot:"📸 Drop a real storm-damage photo here (free: Unsplash \"hurricane damage florida\")",
  accAcc:"Auto accidents",accAccSlot:"📸 Drop a real fender-bender photo here (free: Pexels \"minor car accident\")",
  accBtn:"Get protected today →",
  s1:"families & businesses protected",s2:"average callback time",s3:"A-rated carriers compared",s4:"5-star reviews",
  gRev:"Google Reviews",yRev:"Verified reviews",totRev:"happy neighbors served",
  vKick:"Watch · 60 seconds",vHead:"When something happens, we're already with you.",vSub:"Meet Mikhail and the team who'll be on the phone when it counts.",
  vTag:"Meet Mikhail",vTitle:"\"When the storm hit, M&K had my claim moving the same day.\"",vBy:"A real story from a Florida family",
  fmKick:"If it ever happens",fmHead:"When something goes wrong — call us first",fmSub:"A crash, a storm, a break-in. Stay calm. We walk you through every step, live, in your language.",
  st1h:"Make sure everyone's safe",st1p:"People first. Get to safety, check on everyone, and don't worry about the rest yet.",
  st2h:"Call M&K first",st2p:"One number, a real person — English or Spanish. We guide you live so you don't have to think.",
  st3h:"Capture the details",st3p:"Photos of the damage and the key information. We tell you exactly what to grab.",
  st4h:"We handle the claim",st4p:"We open it, manage it, and follow it to the end. You're never left figuring it out alone.",
  near:"We're always nearby — call us 24/7.",
  agKick:"Meet your agent",agHead:"Hi, I'm Mikhail Kozlov.",agBadge:"Mikhail Kozlov · Serving all of Florida",
  agBody:"For years, my family and I have protected families and businesses across all of Florida. I built M&K on a simple belief: insurance is about people, not policies. When you call, you reach me and my team — real people who answer, in English or Spanish.",
  agMotto:"In God We Trust · We build our future together",agBtn:"📞 Talk to Mikhail · (305) 859-3953",agChat:"💬 Chat directly to us",agSig:"— Mikhail Kozlov, Founder",
  whyKick:"Why M&K",whyHead:"Help that goes beyond the policy",
  w1t:"We compare for you",w1p:"Many A-rated carriers, one conversation. We find the coverage that fits — at the best honest price.",
  w2t:"We speak your language",w2p:"English or español — a real local agent who explains everything clearly, no jargon, no rush.",
  w3t:"We've got your back",w3p:"Before, during, and after a claim. You'll never wonder what to do — you'll just call us.",
  revKick:"Neighbors trust us",revHead:"Real people, real help",
  rev1:"\"When a pipe burst, Mikhail's team had my claim moving the same day. They treat you like family.\"",rev1w:"Tampa, FL · Homeowners",
  rev2:"\"Switched my shop's commercial policy and saved real money — and finally understood what I'm covered for.\"",rev2w:"Orlando, FL · Business owner",
  rev3:"\"They explained everything in Spanish and bundled my home and auto. Honest, patient people.\"",rev3w:"Miami, FL",
  ctaHead:"Don't play with your future. Let's protect it — together.",ctaSub:"Get your free quote or call Mikhail's team 24/7.",
  ctaBtn1:"Get my free quote",ctaBtn2:"📞 Call (305) 859-3953",
  footMotto:"We build our future together",addr:"33550 S Dixie Hwy, Ste 102 · Florida City, FL 33034",
  fContact:"Contact",fCall:"Call 24/7: (305) 859-3953",fEmail:"Email us",fLinks:"Company",fPriv:"Privacy Policy",fTerms:"Terms",
  legal:"M&K Agency Inc. is a licensed independent insurance agency serving Florida. We are not an insurance carrier; we help you compare and place home, auto, and commercial coverage with the insurance companies we represent. Coverage and rates are subject to underwriting approval. © 2026 M&K Agency Inc. All rights reserved.",
  mbCall:"📞 Call 24/7",mbWa:"Text us",
  vmTitle:"Your video goes here 🎬",vmSub:"Paste your YouTube or Vimeo link in the config to play it here. Meanwhile, we're one call away.",vmCall:"📞 Call us"
 },
 es:{
  ribbon:"In God We Trust · Construimos nuestro futuro juntos",
  navCall:"Llame 24/7 · (305) 859-3953",
  eyebrow:"Hogar · Auto · Comercial — Servimos a toda Florida",
  h1a:"Los accidentes pasan.",h1b:"No juegue con su éxito financiero.",
  sub:"M&K Agency protege su hogar, su auto y su negocio en toda Florida. Bilingüe, gente real que contesta — y estamos aquí cuando más nos necesita.",
  heroBtn:"Quiero mi cotización →",heroReassure:"30 segundos · Sin spam",
  rbName:"Mikhail Kozlov",rbText:"Calificado 5.0 en Google y Yelp · más de 334 reseñas",
  qTitle:"Mi cotización gratis",qSub:"Toma 30 segundos. Un agente real le devuelve la llamada rápido.",
  lLine:"¿Qué necesita?",optHome:"Seguro de hogar",optAuto:"Seguro de auto",optComm:"Comercial / negocio",optBundle:"Combinar y ahorrar",
  lZip:"Código postal",lName:"Nombre completo",phName:"Carmen Vega",lPhone:"Teléfono",lEmail:"Correo",phEmail:"usted@correo.com",
  consent:"Acepto que M&K Agency me contacte por teléfono, texto o llamadas automáticas/IA al número que proporciono sobre seguros, aunque esté en una lista de No Llamar. El consentimiento no es condición de compra. Pueden aplicar tarifas de mensajes/datos.",
  submit:"Ver mi cotización →",formFoot:"🔒 Su información es privada. Nunca enviamos spam.",
  thxTitle:"¡Listo! 🎉",thxSub:"El equipo de Mikhail le llamará pronto. ¿Quiere escribirnos ahora? Chatee directamente con nosotros.",thxWa:"Chatee directamente",
  strip:"Comparamos más de 15 aseguradoras A-rated de Florida para hogar, auto y comercial — para que usted no tenga que hacerlo.",
  pKick:"Lo que protegemos",pHead:"Una agencia de confianza para todo lo que ha construido",
  p1h:"Hogar",p1p:"Las casas de Florida necesitan cobertura que resista las tormentas. Buscamos protección que de verdad responde cuando importa.",p1l:"Proteger mi hogar →",
  p2h:"Auto",p2p:"La cobertura de auto correcta a un precio honesto — explicada con claridad, sin sorpresas al reclamar.",p2l:"Cubrir mi auto →",
  p3h:"Comercial",p3p:"De responsabilidad a propiedad, protegemos el negocio que ha construido — para que un mal día no borre años de trabajo.",p3l:"Proteger mi negocio →",
  accKick:"Prevenido, no arrepentido",accHead:"Los accidentes pasan. Estamos aquí para protegerlo.",
  accSub:"Un huracán, un choque, una inundación — un mal día no debería costarle todo lo que ha construido. Esté cubierto antes de que pase, y apoyado después.",
  accHurr:"Daños por huracán y tormenta",accHurrSlot:"📸 Ponga aquí una foto real de daños por tormenta (gratis: Unsplash \"hurricane damage florida\")",
  accAcc:"Accidentes de auto",accAccSlot:"📸 Ponga aquí una foto real de un choque leve (gratis: Pexels \"minor car accident\")",
  accBtn:"Protéjase hoy →",
  s1:"familias y negocios protegidos",s2:"tiempo promedio de respuesta",s3:"aseguradoras A-rated comparadas",s4:"reseñas de 5 estrellas",
  gRev:"Reseñas de Google",yRev:"Reseñas verificadas",totRev:"vecinos felices atendidos",
  vKick:"Vea · 60 segundos",vHead:"Cuando algo pasa, ya estamos con usted.",vSub:"Conozca a Mikhail y al equipo que estará al teléfono cuando cuenta.",
  vTag:"Conozca a Mikhail",vTitle:"\"Cuando llegó la tormenta, M&K movió mi reclamo el mismo día.\"",vBy:"Una historia real de una familia de Florida",
  fmKick:"Si alguna vez pasa",fmHead:"Cuando algo sale mal — llámenos primero",fmSub:"Un choque, una tormenta, un robo. Mantenga la calma. Le guiamos en cada paso, en vivo, en su idioma.",
  st1h:"Asegúrese de que todos estén bien",st1p:"Primero las personas. Póngase a salvo, revise a todos, y no se preocupe por lo demás todavía.",
  st2h:"Llame a M&K primero",st2p:"Un número, una persona real — inglés o español. Le guiamos en vivo para que no tenga que pensar.",
  st3h:"Capture los detalles",st3p:"Fotos de los daños y la información clave. Le decimos exactamente qué tomar.",
  st4h:"Gestionamos el reclamo",st4p:"Lo abrimos, lo gestionamos y lo seguimos hasta el final. Nunca se queda resolviéndolo solo.",
  near:"Siempre estamos cerca — llámenos 24/7.",
  agKick:"Conozca a su agente",agHead:"Hola, soy Mikhail Kozlov.",agBadge:"Mikhail Kozlov · Servimos a toda Florida",
  agBody:"Durante años, mi familia y yo hemos protegido a familias y negocios en toda Florida. Construí M&K sobre una idea simple: el seguro se trata de personas, no de pólizas. Cuando llama, nos encuentra a mí y a mi equipo — gente real que contesta, en inglés o español.",
  agMotto:"In God We Trust · Construimos nuestro futuro juntos",agBtn:"📞 Hable con Mikhail · (305) 859-3953",agChat:"💬 Chatee con nosotros",agSig:"— Mikhail Kozlov, Fundador",
  whyKick:"Por qué M&K",whyHead:"Ayuda que va más allá de la póliza",
  w1t:"Comparamos por usted",w1p:"Muchas aseguradoras A-rated, una conversación. Encontramos la cobertura ideal — al mejor precio honesto.",
  w2t:"Hablamos su idioma",w2p:"Español o inglés — un agente local real que le explica todo claro, sin tecnicismos, sin prisa.",
  w3t:"Lo respaldamos",w3p:"Antes, durante y después de un reclamo. Nunca se preguntará qué hacer — solo nos llama.",
  revKick:"Sus vecinos confían en nosotros",revHead:"Gente real, ayuda real",
  rev1:"\"Cuando se reventó una tubería, el equipo de Mikhail movió mi reclamo el mismo día. Lo tratan como familia.\"",rev1w:"Tampa, FL · Propietarios",
  rev2:"\"Cambié la póliza comercial de mi tienda y ahorré dinero de verdad — y por fin entiendo qué cubre.\"",rev2w:"Orlando, FL · Dueño de negocio",
  rev3:"\"Me explicaron todo en español y combinaron mi hogar y auto. Gente honesta y paciente.\"",rev3w:"Miami, FL",
  ctaHead:"No juegue con su futuro. Protejámoslo — juntos.",ctaSub:"Obtenga su cotización gratis o llame al equipo de Mikhail 24/7.",
  ctaBtn1:"Quiero mi cotización",ctaBtn2:"📞 Llamar (305) 859-3953",
  footMotto:"Construimos nuestro futuro juntos",addr:"33550 S Dixie Hwy, Ste 102 · Florida City, FL 33034",
  fContact:"Contacto",fCall:"Llame 24/7: (305) 859-3953",fEmail:"Escríbanos",fLinks:"Compañía",fPriv:"Política de Privacidad",fTerms:"Términos",
  legal:"M&K Agency Inc. es una agencia de seguros independiente con licencia en Florida. No somos una aseguradora; le ayudamos a comparar y colocar cobertura de hogar, auto y comercial con las compañías que representamos. La cobertura y las tarifas están sujetas a aprobación. © 2026 M&K Agency Inc. Todos los derechos reservados.",
  mbCall:"📞 Llamar 24/7",mbWa:"Escríbanos",
  vmTitle:"Aquí va su video 🎬",vmSub:"Pegue su enlace de YouTube o Vimeo en la configuración para reproducirlo aquí. Mientras, estamos a una llamada.",vmCall:"📞 Llámenos"
 },
 ru:{"ribbon": "In God We Trust · Мы строим будущее вместе", "navCall": "Звоните 24/7 · (305) 859-3953", "eyebrow": "Дом · Авто · Бизнес — Обслуживаем всю Флориду", "h1a": "Несчастья случаются.", "h1b": "Не рискуйте своим финансовым благополучием.", "sub": "M&K Agency защищает ваш дом, машину и бизнес по всей Флориде. Говорим по-русски, по-английски и по-испански — и мы рядом, когда нужнее всего.", "heroBtn": "Бесплатный расчёт →", "heroReassure": "30 секунд · Без спама", "rbName": "Mikhail Kozlov", "rbText": "Рейтинг 5.0 на Google и Yelp · 334+ отзывов", "qTitle": "Бесплатный расчёт", "qSub": "Займёт 30 секунд. Живой агент быстро перезвонит.", "lLine": "Что вам нужно?", "optHome": "Страховка дома", "optAuto": "Страховка авто", "optComm": "Бизнес / коммерческая", "optBundle": "Пакет и скидка", "lZip": "Индекс (ZIP)", "lName": "Имя и фамилия", "phName": "Анна Иванова", "lPhone": "Телефон", "lEmail": "Эл. почта", "phEmail": "vy@email.com", "consent": "Я согласен(на), что M&K Agency может связываться со мной по телефону, SMS или автоматическими/ИИ-звонками по указанному номеру по вопросам страхования, даже если он в списке «Не звонить». Согласие не является условием покупки. Могут применяться тарифы на сообщения/данные.", "submit": "Узнать цену →", "formFoot": "🔒 Ваши данные конфиденциальны. Никакого спама.", "thxTitle": "Готово! 🎉", "thxSub": "Команда Михаила скоро перезвонит. Хотите написать сейчас? Напишите нам напрямую.", "thxWa": "Написать напрямую", "strip": "Сравниваем 15+ надёжных страховых компаний Флориды по дому, авто и бизнесу — за вас.", "pKick": "Что мы защищаем", "pHead": "Одно надёжное агентство для всего, что вы построили", "p1h": "Дом", "p1p": "Дому во Флориде нужна защита, которая выдержит ураган. Находим покрытие, которое реально работает, когда нужно.", "p1l": "Защитить дом →", "p2h": "Авто", "p2p": "Правильное авто-покрытие по честной цене — понятно объясняем, без сюрпризов при выплате.", "p2l": "Застраховать авто →", "p3h": "Бизнес", "p3p": "От ответственности до имущества — защищаем дело, которое вы построили, чтобы один плохой день не перечеркнул годы труда.", "p3l": "Защитить бизнес →", "accKick": "Лучше предусмотреть", "accHead": "Несчастья случаются. Мы здесь, чтобы вас защитить.", "accSub": "Ураган, авария, потоп — один плохой день не должен стоить вам всего, что вы построили. Будьте защищены заранее и с поддержкой после.", "accHurr": "Ущерб от урагана и шторма", "accHurrSlot": "📸 Вставьте сюда реальное фото последствий шторма (бесплатно: Unsplash «hurricane damage florida»)", "accAcc": "Автоаварии", "accAccSlot": "📸 Вставьте сюда реальное фото лёгкого ДТП (бесплатно: Pexels «minor car accident»)", "accBtn": "Защититься сегодня →", "s1": "семей и бизнесов защищено", "s2": "среднее время перезвона", "s3": "надёжных компаний сравниваем", "s4": "отзывов на 5 звёзд", "gRev": "Отзывы Google", "yRev": "Проверенные отзывы", "totRev": "довольных соседей", "vKick": "Видео · 60 секунд", "vHead": "Когда что-то случилось — мы уже рядом.", "vSub": "Познакомьтесь с Михаилом и командой, которая ответит, когда это важно.", "vTag": "Знакомьтесь — Михаил", "vTitle": "«Когда пришёл шторм, M&K запустили мой иск в тот же день.»", "vBy": "Реальная история семьи из Флориды", "fmKick": "Если это случится", "fmHead": "Когда что-то пошло не так — сначала звоните нам", "fmSub": "Авария, шторм, взлом. Сохраняйте спокойствие. Мы проведём вас по каждому шагу вживую, на вашем языке.", "st1h": "Убедитесь, что все в безопасности", "st1p": "Сначала люди. Отойдите в безопасное место, проверьте всех, остальное — потом.", "st2h": "Сначала звоните M&K", "st2p": "Один номер, живой человек — по-русски, по-английски или по-испански. Ведём вас вживую, чтобы вам не пришлось думать.", "st3h": "Зафиксируйте детали", "st3p": "Фото повреждений и ключевая информация. Подскажем, что именно снять.", "st4h": "Мы ведём иск", "st4p": "Открываем, ведём и доводим до конца. Вы никогда не остаётесь с этим один на один.", "near": "Мы всегда рядом — звоните 24/7.", "agKick": "Ваш агент", "agHead": "Здравствуйте, я Михаил Козлов.", "agBadge": "Mikhail Kozlov · Обслуживаем всю Флориду", "agBody": "Уже много лет мы с семьёй защищаем семьи и бизнесы по всей Флориде. Я построил M&K на простом убеждении: страхование — это про людей, а не про полисы. Когда вы звоните, вы попадаете на меня и мою команду — живые люди, которые отвечают, по-русски, по-английски или по-испански.", "agMotto": "In God We Trust · Мы строим будущее вместе", "agBtn": "📞 Поговорить с Михаилом · (305) 859-3953", "agChat": "💬 Напишите нам напрямую", "agSig": "— Михаил Козлов, основатель", "whyKick": "Почему M&K", "whyHead": "Помощь, которая больше, чем полис", "w1t": "Сравниваем за вас", "w1p": "Много надёжных компаний — одна беседа. Находим покрытие, которое подходит, по лучшей честной цене.", "w2t": "Говорим на вашем языке", "w2p": "Русский, английский или испанский — живой местный агент всё объяснит понятно, без жаргона и спешки.", "w3t": "Мы на вашей стороне", "w3p": "До, во время и после иска. Вам не придётся гадать, что делать — просто звоните нам.", "revKick": "Соседи нам доверяют", "revHead": "Живые люди, реальная помощь", "rev1": "«Когда прорвало трубу, команда Михаила запустила мой иск в тот же день. К вам относятся как к семье.»", "rev1w": "Tampa, FL · Домовладельцы", "rev2": "«Перевёл коммерческий полис магазина и реально сэкономил — и наконец понял, что у меня покрыто.»", "rev2w": "Orlando, FL · Владелец бизнеса", "rev3": "«Всё объяснили по-испански и объединили дом и авто. Честные, терпеливые люди.»", "rev3w": "Miami, FL", "ctaHead": "Не играйте со своим будущим. Давайте защитим его — вместе.", "ctaSub": "Получите бесплатный расчёт или звоните команде Михаила 24/7.", "ctaBtn1": "Бесплатный расчёт", "ctaBtn2": "📞 (305) 859-3953", "footMotto": "Мы строим будущее вместе", "addr": "33550 S Dixie Hwy, Ste 102 · Florida City, FL 33034", "fContact": "Контакты", "fCall": "Звоните 24/7: (305) 859-3953", "fEmail": "Напишите нам", "fLinks": "Компания", "fPriv": "Политика конфиденциальности", "fTerms": "Условия", "legal": "M&K Agency Inc. — лицензированное независимое страховое агентство во Флориде. Мы не страховая компания; мы помогаем сравнить и оформить страхование дома, авто и бизнеса в представляемых нами компаниях. Покрытие и тарифы зависят от андеррайтинга. © 2026 M&K Agency Inc. Все права защищены.", "mbCall": "📞 Звонить 24/7", "mbWa": "Напишите", "vmTitle": "Здесь будет ваше видео 🎬", "vmSub": "Вставьте ссылку YouTube или Vimeo в настройки, чтобы видео играло здесь. А пока — мы на расстоянии одного звонка.", "vmCall": "📞 Звоните нам"}
};

let lang="en";
function setLang(l){lang=l;document.documentElement.lang=l;
  document.getElementById("enBtn").classList.toggle("on",l==="en");
  document.getElementById("esBtn").classList.toggle("on",l==="es");
  document.getElementById("ruBtn").classList.toggle("on",l==="ru");
  document.querySelectorAll("[data-i]").forEach(el=>{const k=el.getAttribute("data-i");if(T[l][k]!==undefined)el.textContent=T[l][k];});
  document.querySelectorAll("[data-ph]").forEach(el=>{const k=el.getAttribute("data-ph");if(T[l][k]!==undefined)el.placeholder=T[l][k];});
}
function wireLinks(){document.querySelectorAll('a[href^="tel:"]').forEach(a=>a.href="tel:"+PHONE_TEL);
  const chatUrl="sms:"+PHONE_TEL;
  ["waThanks","waMobile"].forEach(id=>{const e=document.getElementById(id);if(e)e.href=chatUrl;});}
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{threshold:.15});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
let counted=false;function runCounters(){if(counted)return;counted=true;document.querySelectorAll("[data-count]").forEach(el=>{const target=+el.getAttribute("data-count"),pre=el.getAttribute("data-prefix")||"",suf=el.getAttribute("data-suffix")||"";let cur=0;const step=Math.max(1,Math.round(target/45));const t=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(t);}el.innerHTML=pre+cur+suf;},22);});}
const statsIO=new IntersectionObserver((e)=>{if(e[0].isIntersecting)runCounters();},{threshold:.4});statsIO.observe(document.getElementById("statsBar"));
const modal=document.getElementById("videoModal");
function openVideo(){if(VIDEO_EMBED){document.getElementById("videoEmpty").style.display="none";if(!modal.querySelector("iframe")){const f=document.createElement("iframe");f.src=VIDEO_EMBED+"?autoplay=1";f.allow="autoplay; encrypted-media";f.allowFullscreen=true;modal.querySelector(".box").appendChild(f);}}modal.classList.add("show");}
function closeVideo(){modal.classList.remove("show");const f=modal.querySelector("iframe");if(f)f.src=f.src;}
document.getElementById("videoTrigger").addEventListener("click",openVideo);
document.getElementById("videoTrigger").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" ")openVideo();});
modal.addEventListener("click",e=>{if(e.target===modal)closeVideo();});
function getUTMs(){const p=new URLSearchParams(location.search);return{utm_source:p.get("utm_source")||"",utm_medium:p.get("utm_medium")||"",utm_campaign:p.get("utm_campaign")||"",referrer:document.referrer||"direct",page:location.href};}
document.getElementById("quoteForm").addEventListener("submit",async function(e){
  e.preventDefault();const form=e.target;if(!form.checkValidity()){form.reportValidity();return;}
  const btn=document.getElementById("submitBtn");btn.disabled=true;btn.textContent=lang==="es"?"Enviando…":"Sending…";
  const data=Object.fromEntries(new FormData(form).entries());
  const payload={...data,consent:form.consent.checked,consent_timestamp:new Date().toISOString(),language:lang,...getUTMs()};
  try{if(WEBHOOK_URL&&!WEBHOOK_URL.startsWith("PASTE_")){await fetch(WEBHOOK_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});}else{console.log("Lead (no webhook):",payload);await new Promise(r=>setTimeout(r,500));}
    document.getElementById("formView").style.display="none";document.getElementById("thanksView").classList.add("show");
  }catch(err){btn.disabled=false;setLang(lang);alert(lang==="es"?"Hubo un problema. Llámenos al "+PHONE_DISPLAY:"Something went wrong. Please call us at "+PHONE_DISPLAY);}
});
wireLinks();setLang("en");
