import type { BlogPost } from '../types';
import { srcList } from '../../pages/rec/sources';

// Facts checked 2026-10-03: s. 327.54 F.S. (2026) (livery definition and owner-lending
// exception; pre-ride instruction; written agreement; boating ID check; no rentals under 18;
// livery insurance $500,000/$1 million and renter coverage offer + signed acknowledgment);
// s. 327.39 (life jackets, lanyard, night ban, age 14, owner may not permit under 14);
// s. 327.395 + FWC ID page (born on/after Jan 1, 1988; 10 hp or more; temporary certificate
// 90 days; exemptions); FWC 2025 BASR summary (PWC share of accidents).
const KEYS = ['s327_54', 's327_39', 's327_395', 'fwcId', 'fwc2025'] as const;

export const post: BlogPost = {
  slug: 'jet-ski-rental-guest-drivers-florida',
  datePublished: '2026-10-03',
  translations: {
    en: {
      title: 'Renting or Lending a Jet Ski in Florida: What Renters, Owners and Guest Drivers Should Know',
      metaTitle: 'Jet Ski Rentals and Guest Drivers in Florida | M&K Agency',
      description: 'Florida jet ski rental rules, the boating ID, age limits and what happens when you lend your PWC to a friend. Plain-language guide with links to the law.',
      ogAlt: 'Jet ski speeding across blue water with a palm-lined shore',
      excerpt: 'Florida law sets rules for rental shops, renters and owners who hand the key to a friend. Here is what each one should check before the ride.',
      category: 'Boat and PWC insurance',
      body: [
        { type: 'p', text: 'A jet ski weekend in Florida usually involves more than one driver: a rental for the visiting cousins, or your own PWC passed around the sandbar. Florida law treats those situations differently, and the difference matters if somebody gets hurt.' },
        { type: 'h2', text: 'If you rent a jet ski' },
        { type: 'p', text: 'A business that advertises and rents vessels without a licensed captain is a **livery**, and it has to follow [s. 327.54](https://www.flsenate.gov/Laws/Statutes/2026/327.54). Among other things, a livery:' },
        { type: 'ul', items: [
          'may not rent a motorized vessel to anyone **under 18**;',
          'must give **pre-ride instruction** (how the craft handles, right-of-way, local hazards, emergencies) and have you sign a statement about it;',
          'must have a **written agreement** with your name, address, date of birth, number of people aboard and return time;',
          'must check that you have the **boating safety documents** the law requires, if they apply to you;',
          'must carry its own insurance of at least **$500,000 per person and $1 million per event**, and either insure the renter the same way or **offer the renter coverage**.',
        ] },
        { type: 'p', text: 'If you decline the renter coverage, the law requires you to sign an acknowledgment that you **may not have other insurance** for damage or injuries you cause and **may be personally liable**. Read it before you sign. Then ask your agent whether any of your own policies would respond while you operate a rented PWC.' },
        { type: 'h2', text: 'The boating safety ID' },
        { type: 'p', text: 'Anyone **born on or after January 1, 1988** who operates a vessel with a motor of 10 horsepower or more must carry photo ID and a **Florida boating safety education ID card** or another accepted document ([s. 327.395](https://www.flsenate.gov/Laws/Statutes/2026/327.395)). A temporary certificate from an approved exam is valid for 90 days, which is how many visitors comply ([FWC](https://myfwc.com/boating/safety-education/id/)). There are a few exemptions, for example when an adult card holder 18 or older is aboard and responsible for the operation.' },
        { type: 'h2', text: 'If you lend your own jet ski' },
        { type: 'p', text: 'An owner who lends a PWC to someone **he or she knows** is not a livery under the statute, so none of the rental insurance rules apply. That also means **no rental policy stands between your guest and an injury claim**. The questions move to your own coverage.' },
        { type: 'ul', items: [
          'Florida makes it unlawful for an owner to **knowingly let anyone under 14** operate a PWC ([s. 327.39](https://www.flsenate.gov/Laws/Statutes/2026/327.39)).',
          'Everyone aboard must wear a **non-inflatable, Coast Guard-approved life jacket**, the operator must attach the **kill-switch lanyard**, and no one may ride from half an hour after sunset to half an hour before sunrise.',
          'If your guest was born on or after January 1, 1988, he or she needs the **boating ID** too.',
          'Ask your agent whether your policy covers **other operators you allow**, **injuries to passengers**, and damage your guest causes to another boat or a dock.',
        ] },
        { type: 'callout', title: 'Own a jet ski?', text: 'See our [Florida jet ski insurance guide](/en/jet-ski-insurance-florida) for the coverage questions that matter when friends and family take turns.' },
        { type: 'h2', text: 'Why it matters' },
        { type: 'p', text: 'In 2025, personal watercraft were **17% of registered vessels** in Florida but were involved in **23% of reportable boating accidents** ([FWC](https://myfwc.com/media/xekdzj1h/2025-basr-introduction.pdf)). Most of those were collisions. A short safety talk and a quick look at your policy before the keys change hands go a long way.' },
        { type: 'p', text: 'Coverage depends on each policy. Talk with a licensed agent about yours.' },
      ],
      faq: [
        { q: 'How old do you have to be to rent a jet ski in Florida?', a: 'A livery may not knowingly rent a motorized vessel, including a jet ski, to anyone under 18 (s. 327.54, Florida Statutes). Separately, no one under 14 may operate a personal watercraft at all.' },
        { q: 'Do I need a boating license to ride a jet ski in Florida?', a: 'If you were born on or after January 1, 1988, you need photo ID and a Florida boating safety education ID card or another accepted document, such as a temporary certificate valid for 90 days. There are some exemptions.' },
        { q: 'Does the rental company’s insurance cover me?', a: 'A livery must carry its own coverage and either insure renters or offer them coverage of at least $500,000 per person and $1 million per event. If you decline, you sign a statement that you may be personally liable. Ask before you ride.' },
        { q: 'Is my friend covered if I lend him my jet ski?', a: 'It depends on your policy. Lending to someone you know is not a rental under Florida law, so the rental insurance rules do not apply. Check whether your policy covers other operators you allow.' },
      ],
      sources: srcList('en', [...KEYS]),
    },
    es: {
      title: 'Alquilar o prestar un jet ski en Florida: lo que deben saber quienes alquilan, los dueños y los invitados',
      metaTitle: 'Alquiler de jet ski y conductores invitados en Florida | M&K',
      description: 'Las reglas de Florida para alquilar jet ski, la tarjeta de navegación, los límites de edad y qué pasa cuando le presta su moto acuática a un amigo.',
      ogAlt: 'Moto acuática a velocidad sobre el agua azul, con costa de palmeras',
      excerpt: 'La ley de Florida pone reglas a los negocios de alquiler, a quienes alquilan y a los dueños que le dan la llave a un amigo. Qué revisar antes de salir.',
      category: 'Seguro de botes y motos acuáticas',
      body: [
        { type: 'p', text: 'Un fin de semana de jet ski en Florida casi nunca tiene un solo conductor: se alquila uno para los primos que vienen de visita, o el suyo pasa de mano en mano en el banco de arena. La ley de Florida trata esas situaciones de forma distinta, y la diferencia pesa si alguien sale lesionado.' },
        { type: 'h2', text: 'Si usted alquila un jet ski' },
        { type: 'p', text: 'Un negocio que anuncia y alquila embarcaciones sin capitán licenciado es un **livery** (negocio de alquiler) y tiene que cumplir la [s. 327.54](https://www.flsenate.gov/Laws/Statutes/2026/327.54). Entre otras cosas, ese negocio:' },
        { type: 'ul', items: [
          'no puede alquilarle una embarcación con motor a **menores de 18 años**;',
          'debe dar una **instrucción antes de salir** (cómo responde la moto, derecho de paso, peligros del lugar, emergencias) y pedirle que firme una constancia;',
          'debe tener un **contrato escrito** con su nombre, dirección, fecha de nacimiento, número de personas a bordo y hora de regreso;',
          'debe comprobar que usted tiene los **documentos de seguridad náutica** que exige la ley, si le aplican;',
          'debe tener su propio seguro de al menos **$500,000 por persona y $1 millón por evento**, y además asegurar al cliente de la misma forma u **ofrecerle una cobertura**.',
        ] },
        { type: 'p', text: 'Si usted rechaza esa cobertura, la ley exige que firme una declaración de que **puede no tener otro seguro** para los daños o lesiones que cause y que **puede responder con lo suyo**. Léala antes de firmar. Y pregúntele a su agente si alguna de sus pólizas respondería mientras maneja una moto acuática alquilada.' },
        { type: 'h2', text: 'La tarjeta de seguridad náutica' },
        { type: 'p', text: 'Toda persona **nacida el 1 de enero de 1988 o después** que maneje una embarcación con motor de 10 caballos o más debe llevar identificación con foto y la **tarjeta de educación en seguridad náutica de Florida** u otro documento aceptado ([s. 327.395](https://www.flsenate.gov/Laws/Statutes/2026/327.395)). El certificado temporal de un examen aprobado vale 90 días, y así cumplen muchos visitantes ([FWC](https://myfwc.com/boating/safety-education/id/)). Hay algunas excepciones, por ejemplo cuando va a bordo un adulto de 18 años o más con tarjeta, responsable de la operación.' },
        { type: 'h2', text: 'Si usted presta su propio jet ski' },
        { type: 'p', text: 'El dueño que le presta su moto acuática a **alguien que conoce** no es un negocio de alquiler según la ley, así que las reglas de seguro del alquiler no aplican. Eso también significa que **no hay una póliza de alquiler entre su invitado y un reclamo por lesiones**. Las preguntas pasan a su propia cobertura.' },
        { type: 'ul', items: [
          'En Florida es ilegal que el dueño **permita a sabiendas que un menor de 14 años** maneje una moto acuática ([s. 327.39](https://www.flsenate.gov/Laws/Statutes/2026/327.39)).',
          'Todos a bordo deben usar **chaleco salvavidas no inflable aprobado por la Guardia Costera**, quien maneja debe llevar sujeto el **cordón de apagado**, y nadie puede salir desde media hora después de la puesta del sol hasta media hora antes del amanecer.',
          'Si su invitado nació el 1 de enero de 1988 o después, también necesita la **tarjeta de navegación**.',
          'Pregúntele a su agente si su póliza cubre a **otros conductores que usted autoriza**, las **lesiones de los pasajeros** y los daños que su invitado cause a otro bote o a un muelle.',
        ] },
        { type: 'callout', title: '¿Tiene jet ski?', text: 'Vea nuestra [guía de seguro de jet ski en Florida](/es/jet-ski-insurance-florida) con las preguntas de cobertura que importan cuando la familia y los amigos se turnan.' },
        { type: 'h2', text: 'Por qué importa' },
        { type: 'p', text: 'En 2025, las motos acuáticas eran el **17% de las embarcaciones registradas** en Florida, pero estuvieron en el **23% de los accidentes náuticos reportables** ([FWC](https://myfwc.com/media/xekdzj1h/2025-basr-introduction.pdf)). La mayoría fueron choques. Una charla corta de seguridad y una mirada rápida a su póliza antes de entregar la llave ayudan mucho.' },
        { type: 'p', text: 'La cobertura depende de cada póliza. Hable con un agente licenciado sobre la suya.' },
      ],
      faq: [
        { q: '¿Qué edad hay que tener para alquilar un jet ski en Florida?', a: 'Un negocio de alquiler no puede alquilar a sabiendas una embarcación con motor, incluido un jet ski, a menores de 18 años (s. 327.54 de los Estatutos de Florida). Aparte, ningún menor de 14 años puede manejar una moto acuática.' },
        { q: '¿Necesito licencia para manejar un jet ski en Florida?', a: 'Si nació el 1 de enero de 1988 o después, necesita identificación con foto y la tarjeta de educación en seguridad náutica de Florida u otro documento aceptado, como un certificado temporal que vale 90 días. Hay algunas excepciones.' },
        { q: '¿El seguro del negocio de alquiler me cubre?', a: 'El negocio debe tener su propio seguro y asegurar al cliente u ofrecerle una cobertura de al menos $500,000 por persona y $1 millón por evento. Si la rechaza, firma una declaración de que puede responder personalmente. Pregunte antes de salir.' },
        { q: '¿Mi amigo está cubierto si le presto mi jet ski?', a: 'Depende de su póliza. Prestarlo a alguien que conoce no es un alquiler según la ley de Florida, así que no aplican las reglas del seguro de alquiler. Revise si su póliza cubre a otros conductores que usted autoriza.' },
      ],
      sources: srcList('es', [...KEYS]),
    },
    ru: {
      title: 'Прокат и «дай покататься»: что нужно знать о гидроциклах во Флориде арендаторам, владельцам и гостям',
      metaTitle: 'Прокат гидроциклов и чужие водители во Флориде | M&K',
      description: 'Правила проката гидроциклов во Флориде, удостоверение о безопасности на воде, возрастные ограничения и что будет, если дать гидроцикл другу.',
      ogAlt: 'Гидроцикл мчится по синей воде, на берегу — пальмы',
      excerpt: 'Закон Флориды устанавливает правила для прокатов, арендаторов и владельцев, которые дают ключ другу. Что проверить до поездки.',
      category: 'Страхование лодок и гидроциклов',
      body: [
        { type: 'p', text: 'Выходные на гидроцикле во Флориде редко обходятся одним водителем: то берут напрокат для приехавших родственников, то свой гидроцикл переходит из рук в руки на отмели. Закон Флориды смотрит на эти ситуации по-разному, и разница становится важной, если кто-то пострадал.' },
        { type: 'h2', text: 'Если вы берёте гидроцикл напрокат' },
        { type: 'p', text: 'Бизнес, который рекламирует и сдаёт суда без лицензированного капитана, по закону — **livery** (прокат), и он обязан соблюдать [ст. 327.54](https://www.flsenate.gov/Laws/Statutes/2026/327.54). В частности, прокат:' },
        { type: 'ul', items: [
          'не может сдавать моторное судно человеку **младше 18 лет**;',
          'обязан провести **инструктаж перед выходом** (управление, право прохода, местные опасности, действия в экстренной ситуации) и взять с вас подписанное подтверждение;',
          'должен заключить с вами **письменный договор** с именем, адресом, датой рождения, числом людей на борту и временем возврата;',
          'обязан проверить, есть ли у вас **документы о безопасности на воде**, если они вам нужны;',
          'должен иметь собственную страховку минимум на **$500 000 на человека и $1 млн на происшествие** и либо застраховать арендатора так же, либо **предложить ему покрытие**.',
        ] },
        { type: 'p', text: 'Если вы отказываетесь от этого покрытия, закон требует подписать заявление, что у вас **может не быть другой страховки** на причинённый ущерб и травмы и что вы **можете отвечать лично**. Прочитайте его до подписи. И спросите агента, сработает ли какой-то из ваших полисов, пока вы управляете арендованным гидроциклом.' },
        { type: 'h2', text: 'Удостоверение о безопасности на воде' },
        { type: 'p', text: 'Каждый, кто **родился 1 января 1988 года или позже** и управляет судном с мотором от 10 л. с., должен иметь при себе документ с фото и **флоридское удостоверение об обучении безопасности на воде** или другой принятый документ ([ст. 327.395](https://www.flsenate.gov/Laws/Statutes/2026/327.395)). Временный сертификат после одобренного экзамена действует 90 дней — так поступают многие приезжие ([FWC](https://myfwc.com/boating/safety-education/id/)). Есть несколько исключений, например если на борту взрослый от 18 лет с удостоверением, который отвечает за управление.' },
        { type: 'h2', text: 'Если вы даёте свой гидроцикл' },
        { type: 'p', text: 'Владелец, который даёт гидроцикл **знакомому человеку**, по закону не считается прокатом, поэтому правила о страховке проката не применяются. Но это значит и то, что **между вашим гостем и иском за травму нет никакого полиса проката**. Все вопросы переходят к вашему собственному покрытию.' },
        { type: 'ul', items: [
          'Во Флориде владельцу запрещено **сознательно допускать к управлению гидроциклом лиц младше 14 лет** ([ст. 327.39](https://www.flsenate.gov/Laws/Statutes/2026/327.39)).',
          'Все на борту обязаны быть в **ненадувных спасжилетах, одобренных Береговой охраной**, водитель — пристегнуть **шнур аварийной остановки**, и кататься нельзя с получаса после заката до получаса до рассвета.',
          'Если гость родился 1 января 1988 года или позже, **удостоверение** нужно и ему.',
          'Спросите агента, покрывает ли полис **других водителей, которых вы допускаете**, **травмы пассажиров** и ущерб, который гость причинит чужой лодке или причалу.',
        ] },
        { type: 'callout', title: 'У вас есть гидроцикл?', text: 'Читайте наш [гид по страховке гидроцикла во Флориде](/ru/jet-ski-insurance-florida) — вопросы о покрытии, которые важны, когда родные и друзья катаются по очереди.' },
        { type: 'h2', text: 'Почему это важно' },
        { type: 'p', text: 'В 2025 году гидроциклы составляли **17% зарегистрированных судов** во Флориде, но участвовали в **23% происшествий на воде**, о которых нужно сообщать ([FWC](https://myfwc.com/media/xekdzj1h/2025-basr-introduction.pdf)). Большинство из них — столкновения. Короткий инструктаж и быстрый взгляд в полис до передачи ключа — это уже немало.' },
        { type: 'p', text: 'Покрытие зависит от конкретного полиса. Обсудите свой с лицензированным агентом.' },
      ],
      faq: [
        { q: 'С какого возраста можно взять гидроцикл напрокат во Флориде?', a: 'Прокат не может сознательно сдавать моторное судно, в том числе гидроцикл, человеку младше 18 лет (ст. 327.54 Законов Флориды). Кроме того, лицам младше 14 лет управлять гидроциклом нельзя вообще.' },
        { q: 'Нужны ли права, чтобы ездить на гидроцикле во Флориде?', a: 'Если вы родились 1 января 1988 года или позже, нужны документ с фото и флоридское удостоверение об обучении безопасности на воде или другой принятый документ, например временный сертификат на 90 дней. Есть несколько исключений.' },
        { q: 'Покрывает ли меня страховка проката?', a: 'Прокат обязан иметь свою страховку и либо застраховать арендатора, либо предложить ему покрытие минимум $500 000 на человека и $1 млн на происшествие. Если вы откажетесь, вы подписываете, что можете отвечать лично. Уточните до выхода на воду.' },
        { q: 'Покрыт ли друг, если я дам ему свой гидроцикл?', a: 'Зависит от вашего полиса. Передача знакомому — не прокат по закону Флориды, поэтому правила о страховке проката не действуют. Проверьте, покрывает ли полис других водителей, которых вы допускаете.' },
      ],
      sources: srcList('ru', [...KEYS]),
    },
  },
};
