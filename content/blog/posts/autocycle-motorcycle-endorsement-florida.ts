import type { BlogPost } from '../types';
import { srcList } from '../../pages/rec/sources';

// Facts checked 2026-10-03: s. 316.003(2) and (47) F.S. (2026) (autocycle definition;
// motorcycle includes autocycle); s. 322.03(5) + FLHSMV motorcycle/autocycle page (no
// endorsement for autocycles); FLHSMV endorsement page (two- or three-wheel motorcycle over
// 50 cc needs endorsement; BRC, 3-Wheel BRC, Sidecar/Trike programs; no one under 16 may
// operate two- or three-wheel motor vehicles listed there); s. 316.211(3)(a) (enclosed cab);
// s. 627.732 and FLHSMV insurance page (PIP/PDL for 4+ wheels). No insurer named, no prices.
const KEYS = ['s316_003', 's322_03', 'flhsmvMotoTypes', 'flhsmvEndorse', 's316_211', 's627_732', 'flhsmvInsurance'] as const;

export const post: BlogPost = {
  slug: 'autocycle-motorcycle-endorsement-florida',
  datePublished: '2026-10-03',
  translations: {
    en: {
      title: 'Slingshot, Trike or Autocycle? Florida’s License, Helmet and Insurance Rules for Three-Wheelers',
      metaTitle: 'Autocycle and Trike Rules in Florida | M&K Agency',
      description: 'Do you need a motorcycle endorsement for a Slingshot or a trike in Florida? How the law tells an autocycle from a trike, plus the helmet and PIP questions.',
      excerpt: 'Two three-wheelers can look alike and follow different rules. The difference is the seat and the steering. Here is how Florida sorts them out.',
      category: 'Motorcycle insurance',
      body: [
        { type: 'p', text: 'Three-wheelers come in two very different shapes: the car-like kind with two wheels in front, a steering wheel and side-by-side seats, and the motorcycle-like **trike** you straddle and steer with handlebars. Florida treats both as motorcycles, but only one of them is an **autocycle**, and that decides whether you need an endorsement.' },
        { type: 'h2', text: 'How Florida defines an autocycle' },
        { type: 'p', text: 'Under [s. 316.003](https://www.flsenate.gov/Laws/Statutes/2026/316.003), an autocycle is a three-wheeled motorcycle with:' },
        { type: 'ul', items: [
          '**two wheels in front and one in back**;',
          'a **roll cage or roll hoops** and a **seat belt for each occupant**;',
          'brakes that meet federal standard 122 and a **steering mechanism**;',
          '**seating you do not straddle**;',
          'and it is built to the federal motorcycle safety standards by a manufacturer registered with NHTSA.',
        ] },
        { type: 'p', text: 'The same statute says the word “motorcycle” **includes an autocycle**. So an autocycle is a motorcycle that gets one special license rule.' },
        { type: 'h2', text: 'The license question' },
        { type: 'h3', text: 'Autocycle: driver license, no endorsement' },
        { type: 'p', text: 'Florida law says a person **may operate an autocycle without a motorcycle endorsement** ([s. 322.03](https://www.flsenate.gov/Laws/Statutes/2026/322.03)). You still need a valid driver license ([FLHSMV](https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/motorcycle-motor-scooter-moped-and-motorized-scooter/)).' },
        { type: 'h3', text: 'Trike or other three-wheeler: endorsement required' },
        { type: 'p', text: 'To operate any **two- or three-wheel motorcycle over 50 cc** that is not an autocycle, you need a **motorcycle endorsement** or a motorcycle-only license. FLHSMV lists a **3-Wheel Basic RiderCourse** and a **Sidecar/Trike Education Program** among the courses that lead to it, and says no one under 16 may legally operate a motorcycle on Florida roads ([FLHSMV](https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/)).' },
        { type: 'callout', title: 'Before you buy', text: 'If a three-wheeler has handlebars or a seat you sit astride, plan on the endorsement. If it has a steering wheel and real seats, check that it meets every part of the autocycle definition.' },
        { type: 'h2', text: 'Helmets' },
        { type: 'p', text: 'Florida’s helmet and eye-protection law applies to motorcycles, and it does not apply to people **riding within an enclosed cab** ([s. 316.211](https://www.flsenate.gov/Laws/Statutes/2026/316.211)). Many autocycles have an open cockpit, so read the statute before you ride without a helmet; adults 21 or older who ride without one need at least $10,000 in medical benefits coverage.' },
        { type: 'h2', text: 'Insurance: no PIP on three wheels' },
        { type: 'p', text: 'Florida’s PIP and property damage requirement for registration applies to vehicles with **at least four wheels** ([FLHSMV](https://www.flhsmv.gov/insurance/), [s. 627.732](https://www.flsenate.gov/Laws/Statutes/2026/627.732)). That means the PIP on your car policy does not protect you in a three-wheeler. Medical payments, uninsured motorist and liability coverage are the questions to ask, and coverage depends on the policy.' },
        { type: 'callout', title: 'Own a Slingshot or another autocycle?', text: 'See our [Slingshot and autocycle insurance guide](/en/slingshot-autocycle-insurance-florida) for the coverage gaps on three wheels.' },
      ],
      faq: [
        { q: 'Do I need a motorcycle license to drive a Slingshot in Florida?', a: 'Not if the vehicle meets Florida’s definition of an autocycle: s. 322.03 lets you operate an autocycle without a motorcycle endorsement. You still need a valid driver license.' },
        { q: 'Do I need an endorsement for a trike?', a: 'Yes, if it is not an autocycle. A three-wheel motorcycle over 50 cc that you straddle and steer with handlebars requires a motorcycle endorsement or a motorcycle-only license. FLHSMV lists a 3-Wheel Basic RiderCourse for riders who want to qualify on three wheels.' },
        { q: 'Is an autocycle a motorcycle in Florida?', a: 'Yes. Florida’s definition of motorcycle includes autocycles. The main difference in the law is that an autocycle does not require a motorcycle endorsement.' },
        { q: 'Does car PIP cover me in an autocycle?', a: 'No. Florida’s PIP law is written for vehicles with four or more wheels. Ask your agent about medical payments and uninsured motorist coverage for the autocycle.' },
      ],
      sources: srcList('en', [...KEYS]),
    },
    es: {
      title: '¿Slingshot, trimoto o autociclo? Las reglas de licencia, casco y seguro para vehículos de tres ruedas en Florida',
      metaTitle: 'Reglas de autociclos y trimotos en Florida | M&K Agency',
      description: '¿Necesita endoso de motocicleta para un Slingshot o una trimoto en Florida? Cómo distingue la ley un autociclo de una trimoto, y las preguntas de casco y PIP.',
      excerpt: 'Dos vehículos de tres ruedas pueden parecerse y seguir reglas distintas. La diferencia está en el asiento y la dirección. Así los clasifica Florida.',
      category: 'Seguro de motocicleta',
      body: [
        { type: 'p', text: 'Los vehículos de tres ruedas vienen en dos formas muy distintas: el tipo carro, con dos ruedas adelante, volante y asientos lado a lado, y la **trimoto**, en la que se va a horcajadas y se dirige con manubrio. Florida trata a los dos como motocicletas, pero solo uno es un **autociclo**, y eso decide si necesita endoso.' },
        { type: 'h2', text: 'Cómo define Florida el autociclo' },
        { type: 'p', text: 'Según la [s. 316.003](https://www.flsenate.gov/Laws/Statutes/2026/316.003), un autociclo es una motocicleta de tres ruedas con:' },
        { type: 'ul', items: [
          '**dos ruedas adelante y una atrás**;',
          '**jaula o arcos antivuelco** y **cinturón para cada ocupante**;',
          'frenos que cumplen la norma federal 122 y **sistema de dirección**;',
          '**asientos en los que no se va a horcajadas**;',
          'y fabricada según las normas federales de seguridad para motocicletas por un fabricante registrado ante la NHTSA.',
        ] },
        { type: 'p', text: 'La misma ley dice que la palabra “motocicleta” **incluye el autociclo**. O sea, un autociclo es una motocicleta con una regla especial de licencia.' },
        { type: 'h2', text: 'La licencia' },
        { type: 'h3', text: 'Autociclo: licencia de conducir, sin endoso' },
        { type: 'p', text: 'La ley de Florida dice que se **puede manejar un autociclo sin endoso de motocicleta** ([s. 322.03](https://www.flsenate.gov/Laws/Statutes/2026/322.03)). Igual necesita licencia de conducir vigente ([FLHSMV](https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/motorcycle-motor-scooter-moped-and-motorized-scooter/)).' },
        { type: 'h3', text: 'Trimoto u otro vehículo de tres ruedas: con endoso' },
        { type: 'p', text: 'Para manejar cualquier **motocicleta de dos o tres ruedas de más de 50 cc** que no sea autociclo, necesita **endoso de motocicleta** o una licencia solo de motocicleta. El FLHSMV incluye un **curso básico para tres ruedas (3-Wheel Basic RiderCourse)** y un **programa para sidecar y trimoto** entre los cursos que llevan al endoso, y dice que ningún menor de 16 años puede manejar legalmente una motocicleta en las vías de Florida ([FLHSMV](https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/)).' },
        { type: 'callout', title: 'Antes de comprar', text: 'Si el vehículo de tres ruedas tiene manubrio o un asiento a horcajadas, cuente con el endoso. Si tiene volante y asientos de verdad, compruebe que cumpla cada parte de la definición de autociclo.' },
        { type: 'h2', text: 'El casco' },
        { type: 'p', text: 'La ley de casco y protección para los ojos de Florida aplica a las motocicletas y no aplica a quienes **van dentro de una cabina cerrada** ([s. 316.211](https://www.flsenate.gov/Laws/Statutes/2026/316.211)). Muchos autociclos son descapotados, así que lea la ley antes de salir sin casco; un adulto de 21 años o más que vaya sin casco necesita al menos $10,000 de cobertura en beneficios médicos.' },
        { type: 'h2', text: 'Seguro: en tres ruedas no hay PIP' },
        { type: 'p', text: 'El requisito de PIP y daños a la propiedad para el registro aplica a vehículos de **al menos cuatro ruedas** ([FLHSMV](https://www.flhsmv.gov/insurance/), [s. 627.732](https://www.flsenate.gov/Laws/Statutes/2026/627.732)). Es decir, el PIP de su póliza de carro no lo protege en un vehículo de tres ruedas. Las preguntas que conviene hacer son sobre pagos médicos, conductor sin seguro y responsabilidad civil, y la cobertura depende de la póliza.' },
        { type: 'callout', title: '¿Tiene un Slingshot u otro autociclo?', text: 'Vea nuestra [guía de seguro para Slingshot y autociclos](/es/slingshot-autocycle-insurance-florida) con los huecos de cobertura en tres ruedas.' },
      ],
      faq: [
        { q: '¿Necesito licencia de moto para manejar un Slingshot en Florida?', a: 'No, si el vehículo cumple la definición de autociclo de Florida: la s. 322.03 permite manejar un autociclo sin endoso de motocicleta. Igual necesita licencia de conducir vigente.' },
        { q: '¿Necesito endoso para una trimoto?', a: 'Sí, si no es un autociclo. Una motocicleta de tres ruedas de más de 50 cc en la que se va a horcajadas y se dirige con manubrio requiere endoso de motocicleta o licencia solo de moto. El FLHSMV ofrece un curso básico para tres ruedas.' },
        { q: '¿Un autociclo es una motocicleta en Florida?', a: 'Sí. La definición de motocicleta de Florida incluye los autociclos. La diferencia principal en la ley es que el autociclo no requiere endoso de motocicleta.' },
        { q: '¿El PIP de mi carro me cubre en un autociclo?', a: 'No. La ley de PIP de Florida está escrita para vehículos de cuatro ruedas o más. Pregúntele a su agente por los pagos médicos y la cobertura de conductor sin seguro para el autociclo.' },
      ],
      sources: srcList('es', [...KEYS]),
    },
    ru: {
      title: 'Slingshot, трайк или автоцикл? Правила Флориды о правах, шлемах и страховке для трёхколёсников',
      metaTitle: 'Автоциклы и трайки во Флориде: правила | M&K Agency',
      description: 'Нужна ли мотоциклетная отметка для Slingshot или трайка во Флориде? Чем по закону автоцикл отличается от трайка и что со шлемом и PIP.',
      excerpt: 'Два трёхколёсника могут быть похожи, но подчиняться разным правилам. Всё решают сиденье и руль. Вот как их различает Флорида.',
      category: 'Страхование мотоциклов',
      body: [
        { type: 'p', text: 'Трёхколёсники бывают двух совсем разных видов: «автомобильные» — два колеса спереди, руль-баранка и сиденья рядом — и мотоциклетные **трайки**, на которых сидят верхом и рулят мотоциклетным рулём. Флорида считает мотоциклами оба, но **автоцикл** — только первый, и от этого зависит, нужна ли отметка в правах.' },
        { type: 'h2', text: 'Что во Флориде называется автоциклом' },
        { type: 'p', text: 'По [ст. 316.003](https://www.flsenate.gov/Laws/Statutes/2026/316.003) автоцикл — это трёхколёсный мотоцикл, у которого:' },
        { type: 'ul', items: [
          '**два колеса спереди и одно сзади**;',
          '**каркас или дуги безопасности** и **ремень для каждого человека**;',
          'тормоза по федеральному стандарту 122 и **рулевое управление**;',
          '**сиденья, на которых не сидят верхом**;',
          'и он построен по федеральным стандартам безопасности мотоциклов производителем, зарегистрированным в NHTSA.',
        ] },
        { type: 'p', text: 'Та же статья говорит, что понятие «мотоцикл» **включает автоцикл**. То есть автоцикл — это мотоцикл с одним особым правилом о правах.' },
        { type: 'h2', text: 'Вопрос о правах' },
        { type: 'h3', text: 'Автоцикл: права нужны, отметка — нет' },
        { type: 'p', text: 'Закон Флориды разрешает **управлять автоциклом без мотоциклетной отметки** ([ст. 322.03](https://www.flsenate.gov/Laws/Statutes/2026/322.03)). Действующие водительские права при этом нужны ([FLHSMV](https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/motorcycle-motor-scooter-moped-and-motorized-scooter/)).' },
        { type: 'h3', text: 'Трайк и другие трёхколёсники: нужна отметка' },
        { type: 'p', text: 'Чтобы управлять любым **двух- или трёхколёсным мотоциклом больше 50 куб. см**, который не является автоциклом, нужна **мотоциклетная отметка** или права только на мотоцикл. Среди курсов, которые к ней ведут, FLHSMV называет **базовый курс для трёхколёсных мотоциклов (3-Wheel Basic RiderCourse)** и **программу для мотоциклов с коляской и трайков**; там же сказано, что никто младше 16 лет не может законно управлять мотоциклом на дорогах Флориды ([FLHSMV](https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/)).' },
        { type: 'callout', title: 'Перед покупкой', text: 'Если у трёхколёсника мотоциклетный руль или седло, на котором сидят верхом, рассчитывайте на отметку в правах. Если руль-баранка и нормальные сиденья — проверьте, что машина подходит под каждый пункт определения автоцикла.' },
        { type: 'h2', text: 'Шлем' },
        { type: 'p', text: 'Закон Флориды о шлемах и защите глаз распространяется на мотоциклы и не применяется к тем, кто **едет в закрытой кабине** ([ст. 316.211](https://www.flsenate.gov/Laws/Statutes/2026/316.211)). У многих автоциклов открытый кокпит, поэтому прочитайте статью, прежде чем ехать без шлема; взрослым от 21 года без шлема нужно медицинское покрытие минимум на $10 000.' },
        { type: 'h2', text: 'Страховка: на трёх колёсах PIP нет' },
        { type: 'p', text: 'Требование PIP и ответственности за ущерб имуществу при регистрации относится к машинам **минимум с четырьмя колёсами** ([FLHSMV](https://www.flhsmv.gov/insurance/), [ст. 627.732](https://www.flsenate.gov/Laws/Statutes/2026/627.732)). Значит, PIP из полиса на машину не защищает вас в трёхколёснике. Спрашивайте о медицинских расходах, покрытии UM и ответственности; покрытие зависит от полиса.' },
        { type: 'callout', title: 'У вас Slingshot или другой автоцикл?', text: 'Читайте наш [гид по страховке Slingshot и автоциклов](/ru/slingshot-autocycle-insurance-florida) — о дырах в покрытии на трёх колёсах.' },
      ],
      faq: [
        { q: 'Нужна ли мотоциклетная отметка, чтобы водить Slingshot во Флориде?', a: 'Нет, если машина подходит под определение автоцикла во Флориде: ст. 322.03 разрешает управлять автоциклом без мотоциклетной отметки. Действующие права нужны.' },
        { q: 'Нужна ли отметка для трайка?', a: 'Да, если это не автоцикл. Для трёхколёсного мотоцикла больше 50 куб. см, на котором сидят верхом и рулят мотоциклетным рулём, нужна мотоциклетная отметка или права только на мотоцикл. У FLHSMV есть базовый курс для трёхколёсных мотоциклов.' },
        { q: 'Автоцикл во Флориде — это мотоцикл?', a: 'Да. Определение мотоцикла во Флориде включает автоциклы. Главное отличие в законе — для автоцикла не нужна мотоциклетная отметка.' },
        { q: 'Покрывает ли PIP от машины поездки на автоцикле?', a: 'Нет. Закон Флориды о PIP написан для машин с четырьмя и более колёсами. Спросите агента о медицинских расходах и покрытии UM для автоцикла.' },
      ],
      sources: srcList('ru', [...KEYS]),
    },
  },
};
