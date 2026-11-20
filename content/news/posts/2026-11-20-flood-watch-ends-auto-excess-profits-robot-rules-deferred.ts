import type { NewsEdition, NewsSource } from '../types';

// Edition for Friday, Nov. 20, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_PNS: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-19',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=PNS&format=txt&version=1&glossary=0',
  title: 'Public Information Statement: 72-hour rainfall totals ending 5 p.m. EST Thu Nov 19, 2026',
};

const NWS_MFL_FFA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-20',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=FFA&format=txt&version=1&glossary=0',
  title: 'Flood Watch, 6:40 a.m. EST Fri Nov 20, 2026: Flood Watch will expire at 7 a.m.',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-20',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:43 a.m. EST Fri Nov 20, 2026',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-20',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Fri Nov 20, 2026',
};

const OIR_EXCESS: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-11-19',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/11/19/commissioner-mike-yaworsky-secures-over--122.6-million-in-excess-profits-from-auto-insurers',
  title: 'Commissioner Mike Yaworsky Secures Over $122.6 Million in Excess Profits from Auto Insurers',
};

const MDC_ROBOTS: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-11-17',
  url: 'https://www.miamidade.gov/govaction/matter.asp?matter=261932&file=true&yearFolder=Y2026',
  title: 'File 261932: Ordinance relating to personal delivery devices and mobile carriers (status: Deferred; agenda item 7C, Nov. 17, 2026)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const MAST_LETTER: NewsSource = {
  name: 'U.S. Rep. Brian Mast',
  date: '2026-11-17',
  url: 'https://mast.house.gov/2026/11/17/mast-leads-florida-delegation-urging-president-to-approve-disaster-declaration-after-historic-flooding/',
  title: 'Mast leads Florida delegation urging President to approve disaster declaration after historic flooding',
};

const WX = [NWS_MFL_PNS, NWS_MFL_FFA, NWS_MFL_AFD, NHC_TWO];
const BOX = [FEMA_REAUTH, MAST_LETTER];

export const edition: NewsEdition = {
  slug: '2026-11-20-flood-watch-ends-auto-excess-profits-robot-rules-deferred',
  datePublished: '2026-11-20',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 20, 2026: the Flood Watch ends after three-day rain totals top 17 inches in Broward, the state orders three auto insurers to return $122.6 million in excess profits, and Miami-Dade’s delivery-robot rules are deferred',
      metaTitle: 'Insurance News Nov. 20, 2026: Rain Ends, Auto Refunds, Robots | M&K',
      description:
        'The Flood Watch ends as NWS Miami posts three-day rain totals, OIR orders $122.6 million in auto excess-profit refunds, and Miami-Dade defers its delivery-robot rules.',
      ogAlt:
        'A sun breaking through a cloud over a house with drying puddles, a car next to an envelope with a check-mark letter, and a sidewalk delivery robot beside a pause sign and a calendar',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Friday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: the Flood Watch is over, three-day rain totals reached 17.59 inches in Broward and 9.86 inches in Miami-Dade, and the low behind the rain is moving north',
          summary:
            'NWS Miami let the Flood Watch for Miami-Dade, Broward and Palm Beach expire at **7 a.m. Friday**, saying the flash-flooding threat has ended. Its preliminary 72-hour totals through 5 p.m. Thursday show **17.59 inches southeast of Plantation** and 17.41 inches north of Dania Beach; in Miami-Dade, 9.86 inches near Aventura, 9.26 inches east of Princeton and **6.81 inches southeast of Florida City**. At 7 a.m., the National Hurricane Center placed a broad low near the coast of central Florida, moving north or north-northeast, with a 30% chance of becoming subtropical or tropical in 48 hours and 50% in seven days; locally, forecasters expect mostly dry weather into early next week, while a high rip current risk lasts through this evening at Broward and Miami-Dade beaches and through Saturday in Palm Beach.',
          why: 'The dry weekend is the time to document damage with dated photos, dry out wet areas quickly to limit mold, and report claims promptly: homeowners policies generally exclude flood, which needs a separate flood policy, and a flooded car is covered only with comprehensive. A new flood policy usually has a 30-day waiting period, so it will not be in force for next week’s king tides (Nov. 23–26). See our [claim checklist](/en/blog/hurricane-claim-checklist-florida), [flood insurance](/en/flood-insurance-homestead-fl) and [king tides and flood insurance](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: WX,
        },
        {
          headline:
            'New: Florida’s insurance regulator orders three auto insurers to return more than $122.6 million in excess profits to policyholders',
          summary:
            'On Thursday, Nov. 19, the Office of Insurance Regulation announced final orders requiring three auto insurers to return a combined **$122.6 million-plus** in excess profits for the 2023, 2024 and 2025 calendar-accident years, as refund checks or renewal credits processed **within 60 days**. Florida law requires a return when an insurer’s combined underwriting gains for the three most recent years exceed its anticipated underwriting profit plus 5% of earned premiums. OIR says this brings excess-profit refunds announced this year to more than $168 million, and that refunds the companies cannot deliver will be handled as unclaimed property under Chapter 717, Florida Statutes.',
          why: 'If a refund check or credit from your auto insurer arrives in the next two months, it may be tied to these orders; the OIR release links each order and names the companies. Keep your mailing address current with your insurer so a check is not returned. A refund does not change your coverage, so it is also a good moment to review your liability limits and comprehensive and collision. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida) and [car insurance in Florida City](/en/car-insurance-florida-city).',
          sources: [OIR_EXCESS],
        },
        {
          headline:
            'Update: Miami-Dade’s sidewalk delivery-robot ordinance is now listed as “Deferred” after the Nov. 17 commission meeting',
          summary:
            'The county’s legislative record for File 261932, which was on the Nov. 17 commission agenda for a final vote (item 7C), now shows its status as **Deferred**, with no final action and no new hearing date posted. As we reported on Nov. 14, the proposal would require permits for sidewalk delivery devices, set speed limits such as 8 mph on sidewalks, and require operators to carry general liability coverage of at least $100,000 and file a certificate of insurance every year. The ordinance would take effect 10 days after enactment unless vetoed by the mayor.',
          why: 'Until the commission takes a final vote, none of these county rules, including the insurance and 24-hour incident-reporting requirements, are in effect. If your business works with a delivery-device operator, ask for its certificate of insurance anyway, and if a device damages your car or property, photograph it and report it to your insurer. See [certificates of insurance](/en/blog/certificate-of-insurance-contractors-florida).',
          sources: [MDC_ROBOTS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program (NFIP) is authorized **through 11:59 p.m. on Dec. 11, 2026**, 21 days from today; FEMA’s reauthorization page shows no change. The governor’s request for a federal disaster declaration covers nine counties flooded Oct. 31–Nov. 3 (not Miami-Dade or Broward) and was still pending; on Nov. 17, 29 members of Florida’s congressional delegation urged the president to approve it. Hurricane season officially ends Nov. 30.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 20 de noviembre de 2026: termina la vigilancia de inundaciones tras lluvias de más de 17 pulgadas en tres días en Broward, el estado ordena a tres aseguradoras de auto devolver $122.6 millones en ganancias excesivas y Miami-Dade aplaza las reglas para robots de reparto',
      metaTitle: 'Noticias de seguros 20 nov. 2026: lluvia, reembolsos de auto, robots | M&K',
      description:
        'Termina la vigilancia de inundaciones con lluvias récord en tres días, la OIR ordena reembolsos de auto por $122.6 millones y Miami-Dade aplaza las reglas de robots.',
      ogAlt:
        'Un sol que asoma detrás de una nube sobre una casa con charcos secándose, un auto junto a un sobre con una carta con marca de verificación y un robot de reparto en la acera junto a una señal de pausa y un calendario',
      intro:
        'Tres actualizaciones para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este viernes. Cada noticia está resumida con nuestras propias palabras, con enlace a la fuente original.',
      items: [
        {
          headline:
            'Actualización: terminó la vigilancia de inundaciones; la lluvia de tres días llegó a 17.59 pulgadas en Broward y 9.86 en Miami-Dade, y la baja presión se aleja hacia el norte',
          summary:
            'El NWS de Miami dejó expirar la vigilancia de inundaciones para Miami-Dade, Broward y Palm Beach a las **7 a.m. del viernes**, al indicar que terminó la amenaza de inundaciones repentinas. Sus totales preliminares de 72 horas hasta las 5 p.m. del jueves muestran **17.59 pulgadas al sureste de Plantation** y 17.41 al norte de Dania Beach; en Miami-Dade, 9.86 pulgadas cerca de Aventura, 9.26 al este de Princeton y **6.81 al sureste de Florida City**. A las 7 a.m., el Centro Nacional de Huracanes ubicó una amplia zona de baja presión cerca de la costa del centro de Florida, en movimiento hacia el norte o norte-noreste, con 30% de probabilidad de volverse subtropical o tropical en 48 horas y 50% en siete días; aquí se espera tiempo mayormente seco hasta comienzos de la próxima semana, aunque el riesgo alto de corrientes de resaca sigue hasta esta noche en las playas de Broward y Miami-Dade y hasta el sábado en Palm Beach.',
          why: 'El fin de semana seco es el momento para documentar daños con fotos fechadas, secar rápido las áreas mojadas para limitar el moho y reportar los reclamos sin demora: las pólizas de vivienda por lo general excluyen la inundación, que requiere una póliza aparte, y un auto inundado solo está cubierto con cobertura integral (comprehensive). Una póliza de inundación nueva suele tener un período de espera de 30 días, así que no estará vigente para las mareas reales de la próxima semana (23 al 26 de noviembre). Vea nuestra [lista para reclamos](/es/blog/hurricane-claim-checklist-florida), [seguro de inundación](/es/flood-insurance-homestead-fl) y [mareas reales y seguro de inundación](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: WX,
        },
        {
          headline:
            'Nuevo: el regulador de seguros de Florida ordena a tres aseguradoras de auto devolver más de $122.6 millones en ganancias excesivas a sus asegurados',
          summary:
            'El jueves 19 de noviembre, la Oficina de Regulación de Seguros (OIR) anunció órdenes finales que obligan a tres aseguradoras de auto a devolver en conjunto **más de $122.6 millones** en ganancias excesivas de los años calendario-accidente 2023, 2024 y 2025, mediante cheques de reembolso o créditos en la renovación que se procesarán **dentro de 60 días**. La ley de Florida exige la devolución cuando las ganancias de suscripción combinadas de los tres años más recientes superan la ganancia de suscripción prevista más el 5% de las primas devengadas. Según la OIR, con esto los reembolsos por ganancias excesivas anunciados este año superan los $168 millones, y los que las compañías no logren entregar se tratarán como bienes no reclamados según el Capítulo 717 de los Estatutos de Florida.',
          why: 'Si en los próximos dos meses le llega un cheque o un crédito de su aseguradora de auto, puede estar relacionado con estas órdenes; el comunicado de la OIR enlaza cada orden y nombra a las compañías. Mantenga su dirección postal al día con su aseguradora para que el cheque no sea devuelto. Un reembolso no cambia su cobertura, así que también es buen momento para revisar sus límites de responsabilidad civil y las coberturas integral y de choque. Vea [integral vs. choque](/es/blog/comprehensive-vs-collision-florida) y [seguro de carro en Florida City](/es/seguro-de-carro-florida-city).',
          sources: [OIR_EXCESS],
        },
        {
          headline:
            'Actualización: la ordenanza de Miami-Dade sobre robots de reparto en las aceras aparece ahora como “Deferred” (aplazada) tras la sesión de la comisión del 17 de noviembre',
          summary:
            'El registro legislativo del condado para el expediente 261932, que estaba en la agenda de la comisión del 17 de noviembre para la votación final (punto 7C), muestra ahora el estado **Deferred** (aplazado), sin acción final y sin nueva fecha de audiencia publicada. Como informamos el 14 de noviembre, la propuesta exigiría permisos para los dispositivos de reparto en las aceras, fijaría límites de velocidad como 8 mph en las aceras y obligaría a los operadores a tener un seguro de responsabilidad civil general de al menos $100,000 y a presentar cada año un certificado de seguro. La ordenanza entraría en vigor 10 días después de aprobada, salvo veto de la alcaldía.',
          why: 'Hasta que la comisión vote de forma definitiva, ninguna de estas reglas del condado está vigente, incluidos los requisitos de seguro y de reportar incidentes en 24 horas. Si su negocio trabaja con un operador de dispositivos de reparto, pídale de todos modos su certificado de seguro, y si un dispositivo daña su auto o su propiedad, tome fotos y repórtelo a su aseguradora. Vea [certificados de seguro](/es/blog/certificate-of-insurance-contractors-florida).',
          sources: [MDC_ROBOTS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p.m. del 11 de diciembre de 2026**, dentro de 21 días; la página de FEMA sobre la reautorización no muestra cambios. La solicitud del gobernador de una declaración federal de desastre abarca nueve condados inundados del 31 de octubre al 3 de noviembre (no incluye Miami-Dade ni Broward) y seguía pendiente; el 17 de noviembre, 29 miembros de la delegación de Florida en el Congreso pidieron al presidente que la apruebe. La temporada de huracanes termina oficialmente el 30 de noviembre.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 20 ноября 2026 г.: предупреждение о наводнениях снято после того, как за три дня в Броварде выпало более 17 дюймов дождя, штат обязал три автостраховые компании вернуть $122,6 млн сверхприбыли, а Майами-Дейд отложил правила для роботов-доставщиков',
      metaTitle: 'Страховые новости 20.11.2026: дожди, возвраты по автополисам, роботы | M&K',
      description:
        'Предупреждение о наводнениях снято, NWS Miami подвёл итоги трёхдневных дождей, OIR обязал вернуть $122,6 млн по автополисам, а Майами-Дейд отложил правила для роботов.',
      ogAlt:
        'Солнце выглядывает из-за тучи над домом с подсыхающими лужами, автомобиль рядом с конвертом и письмом с галочкой, робот-доставщик на тротуаре рядом со знаком паузы и календарём',
      intro:
        'Три обновления для домовладельцев, водителей и владельцев малого бизнеса Южной Флориды в эту пятницу. Каждая новость изложена своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: предупреждение о наводнениях снято, за три дня выпало до 17,59 дюйма дождя в Броварде и 9,86 дюйма в Майами-Дейде, а принёсшая дожди депрессия уходит на север',
          summary:
            'NWS Miami завершила действие предупреждения о возможных наводнениях (Flood Watch) для Майами-Дейда, Броварда и Палм-Бич в **7 утра в пятницу**, сообщив, что угроза внезапных наводнений миновала. По предварительным 72-часовым данным на 17:00 четверга, **17,59 дюйма выпало к юго-востоку от Плантейшна** и 17,41 — к северу от Дании-Бич; в Майами-Дейде — 9,86 дюйма у Авентуры, 9,26 к востоку от Принстона и **6,81 к юго-востоку от Флорида-Сити**. В 7 утра Национальный центр ураганов (NHC) отметил обширную область низкого давления у побережья центральной Флориды, которая смещается на север или северо-северо-восток; вероятность её превращения в субтропический или тропический циклон — 30% за 48 часов и 50% за семь дней. У нас до начала следующей недели ожидается в основном сухая погода, но высокий риск разрывных течений сохраняется до вечера пятницы на пляжах Броварда и Майами-Дейда и до субботы — в Палм-Бич.',
          why: 'Сухие выходные — время сфотографировать повреждения с датой, быстро просушить мокрые помещения, чтобы не допустить плесени, и без промедления заявить убытки: стандартный полис на дом обычно не покрывает наводнение — для этого нужен отдельный полис, а затопленный автомобиль покрывается только при наличии comprehensive. У нового полиса от наводнений обычно есть 30-дневный период ожидания, поэтому к королевским приливам на следующей неделе (23–26 ноября) он ещё не начнёт действовать. См. наш [чек-лист по страховому случаю](/ru/blog/hurricane-claim-checklist-florida), [страхование от наводнений](/ru/flood-insurance-homestead-fl) и [королевские приливы и страховка от наводнений](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: WX,
        },
        {
          headline:
            'Новое: страховой регулятор Флориды обязал три автостраховые компании вернуть клиентам более $122,6 млн сверхприбыли',
          summary:
            'В четверг, 19 ноября, Управление по регулированию страхования (OIR) объявило об окончательных распоряжениях, по которым три автостраховые компании вместе вернут **более $122,6 млн** сверхприбыли за 2023, 2024 и 2025 календарно-страховые годы — чеками или зачётом при продлении полиса **в течение 60 дней**. Закон Флориды требует возврата, если совокупная андеррайтинговая прибыль страховщика за три последних года превышает плановую прибыль плюс 5% заработанных премий. По данным OIR, с учётом этих распоряжений объявленные в этом году возвраты сверхприбыли превысили $168 млн, а суммы, которые компаниям не удастся вручить, будут оформлены как невостребованное имущество по главе 717 законов Флориды.',
          why: 'Если в ближайшие два месяца вам придёт чек или зачёт от вашей автостраховой компании, он может быть связан с этими распоряжениями; в сообщении OIR есть ссылки на каждое распоряжение и названия компаний. Держите почтовый адрес у страховщика актуальным, чтобы чек не вернулся отправителю. Возврат денег не меняет ваше покрытие, так что это хороший повод проверить лимиты ответственности, comprehensive и collision. См. [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida) и [автострахование во Флорида-Сити](/ru/car-insurance-florida-city).',
          sources: [OIR_EXCESS],
        },
        {
          headline:
            'Обновление: постановление Майами-Дейда о роботах-доставщиках на тротуарах после заседания комиссии 17 ноября значится как «Deferred» (отложено)',
          summary:
            'В законодательном реестре округа дело 261932, которое стояло в повестке комиссии 17 ноября на окончательное голосование (пункт 7C), теперь имеет статус **Deferred** (отложено): итогового решения нет, новая дата слушаний не опубликована. Как мы писали 14 ноября, проект требует разрешений для тротуарных устройств доставки, вводит ограничения скорости (например, 8 миль/ч на тротуарах) и обязывает операторов иметь страхование общей гражданской ответственности не менее $100 000 и ежегодно подавать сертификат страхования. Постановление вступит в силу через 10 дней после принятия, если мэр не наложит вето.',
          why: 'Пока комиссия не проголосует окончательно, ни одно из этих правил округа не действует, включая требования о страховке и об уведомлении об инцидентах в течение 24 часов. Если ваш бизнес работает с оператором роботов-доставщиков, всё равно запросите у него сертификат страхования, а если устройство повредит вашу машину или имущество, сфотографируйте повреждения и сообщите страховщику. См. [сертификаты страхования](/ru/blog/certificate-of-insurance-contractors-florida).',
          sources: [MDC_ROBOTS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) действует **до 23:59 11 декабря 2026 г.**, то есть ещё 21 день; на странице FEMA о продлении программы изменений нет. Запрос губернатора о федеральном объявлении бедствия охватывает девять округов, затопленных 31 октября – 3 ноября (Майами-Дейд и Бровард в него не входят), и пока не одобрен; 17 ноября 29 членов делегации Флориды в Конгрессе призвали президента его утвердить. Сезон ураганов официально заканчивается 30 ноября.',
        },
      ],
      extraSources: BOX,
    },
  },
};
