import type { BlogPost } from '../types';
import { srcList } from '../../pages/rec/sources';

// Facts checked 2026-10-03: NHC climatology (season June 1 - November 30); s. 327.59 F.S.
// (2026) (marinas may not require removal after a watch/warning; may secure the vessel and
// charge a reasonable fee after a watch; contract notice lets marina move a vessel the owner
// fails to remove promptly); FWC hurricane prep page (trailer it far from tidal waters,
// double lines, chafe, batteries, never stay aboard); s. 823.11 (derelict vessels; 45 days
// after a hurricane); s. 327.301 (accident reports). No insurer named, no prices.
const KEYS = ['nhcClimo', 'fwcStorm', 's327_59', 's823_11', 's327_301'] as const;

export const post: BlogPost = {
  slug: 'hurricane-plan-for-your-boat-florida',
  datePublished: '2026-10-03',
  translations: {
    en: {
      title: 'A Hurricane Plan for Your Boat in Florida: Before the Season, at the Watch, After the Storm',
      metaTitle: 'Hurricane Plan for Your Boat in Florida | M&K Agency',
      description: 'A step-by-step hurricane plan for Florida boat owners: marina rules, haul-out or tie-down, what to photograph, and your duties if the boat sinks.',
      excerpt: 'Most storm damage to boats is decided before the storm: where the boat goes, who moves it and what the policy says. A three-stage plan for Florida owners.',
      category: 'Boat and PWC insurance',
      body: [
        { type: 'p', text: 'The Atlantic hurricane season runs from **June 1 to November 30** ([National Hurricane Center](https://www.nhc.noaa.gov/climo/)). For a boat owner in Florida, the plan has three stages: what you do before the season, what you do when a watch is issued, and what you do after the storm.' },
        { type: 'h2', text: '1. Before the season (May)' },
        { type: 'ol', items: [
          '**Decide where the boat goes.** FWC’s first advice is to put the boat on a trailer and move it as far from tidal waters as you can ([FWC](https://myfwc.com/boating/safety-education/hurricane/)). If that is not possible, know which slip, lift or mooring it will ride the storm on.',
          '**Read your marina or storage contract.** Look for the hurricane clause, who may move the boat and what fees apply.',
          '**Read your policy.** Find the named storm or hurricane deductible, whether the policy helps with hauling out or moving the boat, and whether it includes wreck removal.',
          '**Take photos and a list** of the boat, the engine hours, electronics and gear. Store them off the boat.',
          '**Line up help.** If you travel in summer, name someone who can carry out the plan.',
        ] },
        { type: 'h2', text: '2. When a watch is issued' },
        { type: 'p', text: 'Florida law does not let marinas require owners to remove boats after a hurricane watch or warning, so that people’s safety comes first. But after a tropical storm or hurricane watch, the marina may take reasonable steps to secure your boat and **charge a reasonable fee**, and if your contract contains the notice the law describes, it may **move the boat** if you do not remove it promptly ([s. 327.59](https://www.flsenate.gov/Laws/Statutes/2026/327.59)).' },
        { type: 'ul', items: [
          'If the boat stays in the water: **double the lines**, add spring lines, tie them **high on the pilings** to allow for surge, and protect them from chafe.',
          'Keep the **batteries charged** for the bilge pumps, and remove canvas, electronics and anything that can blow away.',
          '**Never stay aboard** during the storm. No boat is worth a life.',
        ] },
        { type: 'callout', title: 'Own a boat in Florida?', text: 'See our [Florida boat insurance guide](/en/boat-insurance-florida): liability on the water, storm coverage, towing and the questions to ask.' },
        { type: 'h2', text: '3. After the storm' },
        { type: 'p', text: 'Check the boat only when officials say it is safe. Photograph everything before you move or repair anything, and call your agent to report the claim.' },
        { type: 'p', text: 'If the boat sank or was blown ashore, Florida generally does not allow a derelict vessel to stay on state waters. If it became derelict because of a hurricane, the owner is not penalized if he or she documents what happened and **removes or repairs it within 45 days after the hurricane has passed** ([s. 823.11](https://www.flsenate.gov/Laws/Statutes/2026/823.11)). Raising a sunken boat is costly work, which is why wreck removal coverage matters.' },
        { type: 'p', text: 'If the boat was involved in an accident with injuries or other damage, a written report may also be required ([s. 327.301](https://www.flsenate.gov/Laws/Statutes/2026/327.301)).' },
        { type: 'p', text: 'Coverage, deductibles and exclusions depend on each policy. A licensed agent can go through yours with you before the next season.' },
      ],
      faq: [
        { q: 'When is hurricane season in Florida?', a: 'The Atlantic hurricane season runs from June 1 to November 30, according to the National Hurricane Center.' },
        { q: 'Can my marina make me remove my boat before a hurricane?', a: 'Florida law does not let a marina require removal after a hurricane watch or warning. After a watch, the marina may take reasonable steps to secure your boat and charge a reasonable fee, and with the right notice in your contract it may move the boat if you do not remove it promptly.' },
        { q: 'What happens if my boat sinks in a hurricane?', a: 'The owner is responsible for removing it. If it became derelict because of a hurricane, Florida gives the owner 45 days after the storm has passed to remove or repair it, as long as the owner documents what happened.' },
        { q: 'Does boat insurance pay to haul out my boat before a storm?', a: 'Some policies help with part of the cost of hauling out or moving a boat before a named storm, and many have special storm deductibles. It depends on the policy, so check before the season starts.' },
      ],
      sources: srcList('en', [...KEYS]),
    },
    es: {
      title: 'Plan de huracán para su bote en Florida: antes de la temporada, con la vigilancia y después de la tormenta',
      metaTitle: 'Plan de huracán para su bote en Florida | M&K Agency',
      description: 'Plan paso a paso para dueños de botes en Florida: reglas de la marina, sacarlo del agua o amarrarlo, qué fotografiar y qué hacer si el bote se hunde.',
      excerpt: 'Casi todo el daño que un huracán le hace a un bote se decide antes: adónde va, quién lo mueve y qué dice la póliza. Un plan en tres etapas.',
      category: 'Seguro de botes y motos acuáticas',
      body: [
        { type: 'p', text: 'La temporada de huracanes del Atlántico va del **1 de junio al 30 de noviembre** ([Centro Nacional de Huracanes](https://www.nhc.noaa.gov/climo/)). Para el dueño de un bote en Florida, el plan tiene tres etapas: lo que hace antes de la temporada, lo que hace cuando emiten una vigilancia y lo que hace después de la tormenta.' },
        { type: 'h2', text: '1. Antes de la temporada (mayo)' },
        { type: 'ol', items: [
          '**Decida adónde va el bote.** El primer consejo de la FWC es subirlo al tráiler y llevarlo lo más lejos posible de las aguas con marea ([FWC](https://myfwc.com/boating/safety-education/hurricane/)). Si no se puede, sepa en qué muelle, elevador o fondeo va a pasar la tormenta.',
          '**Lea el contrato de la marina o del depósito.** Busque la cláusula de huracanes, quién puede mover el bote y qué cargos aplican.',
          '**Lea su póliza.** Ubique el deducible de tormenta con nombre o de huracán, si la póliza ayuda a sacar o mover el bote y si incluye el retiro de restos.',
          '**Tome fotos y haga una lista** del bote, las horas del motor, la electrónica y el equipo. Guárdelas fuera del bote.',
          '**Consiga ayuda.** Si viaja en verano, deje a alguien encargado de cumplir el plan.',
        ] },
        { type: 'h2', text: '2. Cuando emiten una vigilancia' },
        { type: 'p', text: 'La ley de Florida no permite que una marina obligue a sacar los botes después de una vigilancia o un aviso de huracán, para que la seguridad de las personas vaya primero. Pero después de una vigilancia de tormenta tropical o de huracán, la marina puede tomar medidas razonables para asegurar su bote y **cobrarle un cargo razonable**, y si su contrato tiene el aviso que describe la ley, puede **mover el bote** si usted no lo saca a tiempo ([s. 327.59](https://www.flsenate.gov/Laws/Statutes/2026/327.59)).' },
        { type: 'ul', items: [
          'Si el bote se queda en el agua: **duplique los cabos**, agregue cabos de resorte, amárrelos **alto en los pilotes** por la marejada y protéjalos del roce.',
          'Mantenga **cargadas las baterías** de las bombas de achique y quite lonas, electrónica y todo lo que el viento se pueda llevar.',
          '**Nunca se quede a bordo** durante la tormenta. Ningún bote vale una vida.',
        ] },
        { type: 'callout', title: '¿Tiene bote en Florida?', text: 'Vea nuestra [guía de seguro de bote en Florida](/es/boat-insurance-florida): responsabilidad civil en el agua, cobertura de tormentas, remolque y las preguntas que conviene hacer.' },
        { type: 'h2', text: '3. Después de la tormenta' },
        { type: 'p', text: 'Revise el bote solo cuando las autoridades digan que es seguro. Fotografíe todo antes de mover o reparar nada, y llame a su agente para reportar el reclamo.' },
        { type: 'p', text: 'Si el bote se hundió o quedó varado, en general Florida no permite que una embarcación abandonada o naufragada se quede en aguas del estado. Si quedó así por un huracán, al dueño no lo sancionan si documenta lo que pasó y **lo retira o lo repara dentro de los 45 días después de que pasó el huracán** ([s. 823.11](https://www.flsenate.gov/Laws/Statutes/2026/823.11)). Reflotar un bote hundido es un trabajo costoso; por eso importa la cobertura de retiro de restos.' },
        { type: 'p', text: 'Si el bote tuvo un accidente con lesionados u otros daños, también puede hacer falta un reporte escrito ([s. 327.301](https://www.flsenate.gov/Laws/Statutes/2026/327.301)).' },
        { type: 'p', text: 'La cobertura, los deducibles y las exclusiones dependen de cada póliza. Un agente licenciado puede revisar la suya con usted antes de la próxima temporada.' },
      ],
      faq: [
        { q: '¿Cuándo es la temporada de huracanes en Florida?', a: 'La temporada de huracanes del Atlántico va del 1 de junio al 30 de noviembre, según el Centro Nacional de Huracanes.' },
        { q: '¿La marina me puede obligar a sacar el bote antes de un huracán?', a: 'La ley de Florida no permite que una marina exija sacarlo después de una vigilancia o un aviso de huracán. Después de una vigilancia, la marina puede tomar medidas razonables para asegurar su bote y cobrar un cargo razonable, y con el aviso correcto en el contrato puede moverlo si usted no lo saca a tiempo.' },
        { q: '¿Qué pasa si mi bote se hunde en un huracán?', a: 'El dueño es responsable de sacarlo. Si quedó abandonado o naufragado por un huracán, Florida le da 45 días después de que pasó la tormenta para retirarlo o repararlo, siempre que documente lo que pasó.' },
        { q: '¿El seguro de bote paga por sacarlo del agua antes de una tormenta?', a: 'Algunas pólizas ayudan con parte del costo de sacar o mover el bote antes de una tormenta con nombre, y muchas tienen deducibles especiales de tormenta. Depende de la póliza; revísela antes de que empiece la temporada.' },
      ],
      sources: srcList('es', [...KEYS]),
    },
    ru: {
      title: 'План на ураган для вашей лодки во Флориде: до сезона, при штормовом предупреждении и после шторма',
      metaTitle: 'План на ураган для лодки во Флориде | M&K Agency',
      description: 'Пошаговый план для владельцев лодок во Флориде: правила марины, подъём на берег или швартовка, что сфотографировать и что делать, если лодка затонула.',
      excerpt: 'Почти весь ущерб, который ураган нанесёт лодке, решается заранее: куда она встанет, кто её перегонит и что написано в полисе. План из трёх этапов.',
      category: 'Страхование лодок и гидроциклов',
      body: [
        { type: 'p', text: 'Сезон ураганов в Атлантике длится **с 1 июня по 30 ноября** ([Национальный центр по ураганам](https://www.nhc.noaa.gov/climo/)). У владельца лодки во Флориде план состоит из трёх этапов: что сделать до сезона, что делать после объявления штормового предупреждения (watch) и что делать после шторма.' },
        { type: 'h2', text: '1. До сезона (май)' },
        { type: 'ol', items: [
          '**Решите, где будет стоять лодка.** Первый совет FWC — поставить лодку на прицеп и увезти как можно дальше от приливных вод ([FWC](https://myfwc.com/boating/safety-education/hurricane/)). Если это невозможно, заранее знайте, на каком месте, лифте или мёртвом якоре она будет пережидать шторм.',
          '**Прочитайте договор с мариной или стоянкой.** Найдите пункт об ураганах: кто может перегнать лодку и какие сборы предусмотрены.',
          '**Прочитайте полис.** Найдите франшизу на именованный шторм или ураган, помогает ли полис с подъёмом или перегоном лодки и есть ли покрытие удаления затонувшего судна.',
          '**Сделайте фото и опись** лодки, моточасов, электроники и снаряжения. Храните их не на лодке.',
          '**Договоритесь о помощи.** Если летом уезжаете, назначьте человека, который выполнит план.',
        ] },
        { type: 'h2', text: '2. Когда объявлен watch' },
        { type: 'p', text: 'Закон Флориды не разрешает маринам требовать, чтобы владельцы убирали лодки после объявления hurricane watch или warning: безопасность людей важнее. Но после объявления watch по тропическому шторму или урагану марина может принять разумные меры, чтобы закрепить лодку, и **взять разумную плату**, а если в договоре есть уведомление, описанное в законе, — **переставить лодку**, если вы не увели её вовремя ([ст. 327.59](https://www.flsenate.gov/Laws/Statutes/2026/327.59)).' },
        { type: 'ul', items: [
          'Если лодка остаётся на воде: **удвойте швартовы**, добавьте шпринги, крепите их **высоко на сваях** с запасом на нагон воды и защитите от перетирания.',
          'Держите **заряженными аккумуляторы** трюмных помп, снимите тент, электронику и всё, что может унести ветром.',
          '**Никогда не оставайтесь на борту** во время шторма. Ни одна лодка не стоит жизни.',
        ] },
        { type: 'callout', title: 'У вас лодка во Флориде?', text: 'Читайте наш [гид по страховке лодки во Флориде](/ru/boat-insurance-florida): ответственность на воде, покрытие штормов, буксировка и вопросы к полису.' },
        { type: 'h2', text: '3. После шторма' },
        { type: 'p', text: 'Осматривайте лодку только тогда, когда власти скажут, что это безопасно. Сфотографируйте всё до того, как что-то двигать или чинить, и позвоните агенту, чтобы заявить убыток.' },
        { type: 'p', text: 'Если лодка затонула или её выбросило на берег, Флорида, как правило, не разрешает оставлять брошенное судно в водах штата. Если судно стало таким из-за урагана, владельца не наказывают, если он задокументирует произошедшее и **уберёт или отремонтирует судно в течение 45 дней после прохождения урагана** ([ст. 823.11](https://www.flsenate.gov/Laws/Statutes/2026/823.11)). Поднять затонувшую лодку — дорогая работа, поэтому покрытие удаления судна так важно.' },
        { type: 'p', text: 'Если лодка попала в происшествие с пострадавшими или другим ущербом, может понадобиться и письменный отчёт ([ст. 327.301](https://www.flsenate.gov/Laws/Statutes/2026/327.301)).' },
        { type: 'p', text: 'Покрытие, франшизы и исключения зависят от конкретного полиса. Лицензированный агент разберёт ваш вместе с вами до следующего сезона.' },
      ],
      faq: [
        { q: 'Когда во Флориде сезон ураганов?', a: 'По данным Национального центра по ураганам, сезон ураганов в Атлантике длится с 1 июня по 30 ноября.' },
        { q: 'Может ли марина заставить меня убрать лодку перед ураганом?', a: 'Закон Флориды не разрешает марине требовать этого после объявления hurricane watch или warning. После watch марина может разумно закрепить лодку и взять разумную плату, а при нужном уведомлении в договоре — переставить лодку, если вы не убрали её вовремя.' },
        { q: 'Что будет, если лодка затонет во время урагана?', a: 'Убрать её обязан владелец. Если судно стало брошенным из-за урагана, у владельца есть 45 дней после прохождения шторма, чтобы убрать или отремонтировать его, при условии что он задокументировал произошедшее.' },
        { q: 'Оплачивает ли страховка лодки подъём на берег перед штормом?', a: 'Некоторые полисы помогают с частью расходов на подъём или перегон лодки перед именованным штормом, а у многих есть особая франшиза на шторм. Это зависит от полиса — проверьте до начала сезона.' },
      ],
      sources: srcList('ru', [...KEYS]),
    },
  },
};
