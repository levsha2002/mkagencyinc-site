import type { NewsEdition, NewsSource } from '../types';

// Edition for Monday, Oct. 19, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const FLHSMV_NOTICE: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-10-16',
  url: 'https://content.govdelivery.com/accounts/FLHSMV/bulletins/42f4dc7',
  title: 'Public Notice Regarding September Security Incident',
};

const FLHSMV_BREACH_FAQ: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-10-19',
  url: 'https://www.flhsmv.gov/data-breach/',
  title: 'September Security Incident: FAQ',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-19',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Atlantic Tropical Weather Outlook, 8 a.m. EDT Mon Oct 19, 2026',
};

const NWS_MFL_SRF: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-19',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=SRF&format=CI&version=1&glossary=0',
  title: 'Surf Zone Forecast, NWS Miami, 3:31 a.m. EDT Mon Oct 19, 2026',
};

const NAPT_SBSW: NewsSource = {
  name: 'National Association for Pupil Transportation',
  date: '2026-10-19',
  url: 'https://www.napt.org/content.asp?contentid=145',
  title: 'National School Bus Safety Week, Oct. 19–23, 2026',
};

const FLHSMV_SCHOOL_BUS: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-10-19',
  url: 'https://www.flhsmv.gov/safety-center/child-safety/school-bus-safety/',
  title: 'School Bus Safety',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (Agent)',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-19',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'National Council on Compensation Insurance Public Rate Hearing 2026',
};

const FEMA_DECLARATIONS: NewsSource = {
  name: 'Federal Emergency Management Agency',
  date: '2026-10-19',
  url: 'https://www.fema.gov/disaster/declarations',
  title: 'Disasters and Other Declarations',
};

const OIR_CAT: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-19',
  url: 'https://www.floir.gov/tools-and-data/catastrophe-reporting',
  title: 'Catastrophe Reporting',
};

const MIAMI_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const CRS_NFIP: NewsSource = {
  name: 'Congressional Research Service (IN10835)',
  date: '2026-09-11',
  url: 'https://www.congress.gov/crs_external_products/IN/PDF/IN10835/IN10835.62.pdf',
  title: 'What Happens If the National Flood Insurance Program (NFIP) Lapses?',
};

export const edition: NewsEdition = {
  slug: '2026-10-19-flhsmv-breach-coastal-low-school-bus',
  datePublished: '2026-10-19',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 19, 2026: Driver-data breach letters are in the mail, the coastal low’s odds rise, and School Bus Safety Week',
      metaTitle: 'Insurance News Oct. 19, 2026: FLHSMV Breach, Coastal Low | M&K',
      description:
        'FLHSMV is mailing data-breach letters to drivers, NHC raises the coastal low’s odds to 40% with rip currents through Thursday, and school-bus stop rules.',
      ogAlt:
        'An envelope with a shield and padlock, a beach warning flag over rough waves, and a yellow school bus with its stop arm out',
      intro:
        'Three updates for South Florida drivers, homeowners and small-business owners to start the week. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'FLHSMV is mailing data-breach letters this week to drivers whose records may have been exposed',
          summary:
            'In an Oct. 16 public notice, the Florida Department of Highway Safety and Motor Vehicles said a malicious actor used compromised credentials to get into certain department records on Sept. 4, 2026; the information potentially affected includes driver license and motor vehicle data, document images and other personal information. The department’s FAQ says the credentials belonged to an employee of a local Florida law enforcement agency who stored them improperly on an electronic device, that the breach was contained, and that there is no evidence so far that anyone’s information has been misused. Letters are going out this week to current driver license and ID card holders who may be affected, and the department is offering them one year of identity and credit monitoring plus identity-theft insurance; the letter explains how to enroll. People who no longer hold a Florida license or ID, or who once had a vehicle titled in Florida, may not get a letter and can contact the department at customerinquiry@flhsmv.gov.',
          why: 'Watch your mailbox for a letter from FLHSMV and enroll only through the instructions in that letter or on flhsmv.gov/data-breach. Be wary of calls, texts or emails that claim to be about the breach and ask for your license number or other personal details, and review your bank statements and credit reports for anything you don’t recognize.',
          sources: [FLHSMV_NOTICE, FLHSMV_BREACH_FAQ],
        },
        {
          headline:
            'Update: NHC raises the coastal low’s odds to 40%, and high rip-current risk stays on South Florida beaches through Thursday',
          summary:
            'The storm-force, non-tropical low we mentioned on Sunday has formed a few hundred miles off the Southeast U.S. coast, and the National Hurricane Center’s 8 a.m. Monday outlook raised its seven-day chance of development to 40% (from 30% on Sunday), still near 0% over 48 hours. NHC says the low could briefly take on some subtropical characteristics in the middle to latter part of the week if it stays over the Gulf Stream and separates from the front, before moving northeast away from the U.S. later in the week; either way, it expects high winds, coastal flooding and dangerous surf along parts of the East Coast over the next few days. Closer to home, the National Weather Service in Miami keeps a high rip-current risk on the Atlantic beaches of Palm Beach, Broward and Miami-Dade through Thursday evening, with a high-surf advisory for Palm Beach until 8 a.m. Wednesday (surf of 7 to 9 feet) and for Broward from 2 p.m. Monday to 8 p.m. Tuesday.',
          why: 'Swim only near lifeguards and stay out of the water when red flags are up. If coastal flooding reaches your home, business or car, take photos before you clean up; flood damage to a home is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), not a standard homeowners policy.',
          sources: [NHC_TWO, NWS_MFL_SRF],
        },
        {
          headline:
            'National School Bus Safety Week, Oct. 19–23: when Florida drivers must stop, and the penalties for passing a stopped bus',
          summary:
            'National School Bus Safety Week runs Oct. 19–23 this year under the theme “Safe Rides, Everyday Heroes,” according to the National Association for Pupil Transportation. Florida’s highway safety department reminds drivers that when a school bus stops with its red lights flashing and its STOP arm out, traffic in both directions must stop on a two-lane road and on a highway divided only by a paved median, and stay stopped until the children are clear and the arm is pulled back; only drivers on the opposite side of a raised barrier or an unpaved median at least 5 feet wide may keep going, slowly. Since Jan. 1, 2021, the penalties for illegally passing a stopped bus have been doubled: it is a moving violation with four points on your license, a required driver improvement course and a minimum fine of $265, or $465 if you pass on the side where children get on and off. If the violation causes serious injury or death, the penalties under the Cameron Mayhew Act include a $1,500 fine, six points and a license suspension of at least one year.',
          why: 'Painted lines are not a barrier: if you are not sure, stop. A school-bus citation goes on your driving record as a moving violation, so it is worth one extra minute of patience. Questions about how your record affects your [car insurance](/en/car-insurance-florida-city)? Ask us.',
          sources: [FLHSMV_SCHOOL_BUS, NAPT_SBSW],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Coming up',
          text: 'Tuesday, Oct. 20: Citizens’ next personal-lines assumption date, and the deadline to prefile expert testimony for OIR’s Oct. 27 workers’ compensation rate hearing. FEMA: as of Monday morning, Florida’s Isaias record was still emergency declaration EM-3655-FL only; the state’s Oct. 16 major-disaster request is pending. OIR’s public catastrophe-reporting page still showed no statewide Isaias claim totals. Miami-Dade king tides: Oct. 24–30. The National Flood Insurance Program’s current authority runs through Dec. 11, 2026.',
        },
      ],
      extraSources: [CITIZENS_CAL, OIR_NCCI, FEMA_DECLARATIONS, OIR_CAT, MIAMI_KING, CRS_NFIP],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 19 de octubre de 2026: llegan las cartas por la filtración de datos de conductores, sube la probabilidad de la baja costera y Semana de Seguridad del Autobús Escolar',
      metaTitle: 'Noticias de seguros, 19 oct. 2026: filtración FLHSMV | M&K',
      description:
        'El FLHSMV envía cartas por la filtración de datos, la baja costera sube al 40 % con corrientes de resaca hasta el jueves y reglas del autobús escolar.',
      ogAlt:
        'Un sobre con un escudo y un candado, una bandera de advertencia sobre olas fuertes y un autobús escolar amarillo con el brazo de PARE extendido',
      intro:
        'Tres novedades para conductores, propietarios y dueños de pequeños negocios en el sur de la Florida para empezar la semana. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'El FLHSMV envía esta semana cartas a los conductores cuyos datos pudieron quedar expuestos',
          summary:
            'En un aviso público del 16 de octubre, el Departamento de Seguridad en Carreteras y Vehículos Motorizados de Florida (FLHSMV) informó que un actor malicioso usó credenciales comprometidas para entrar a ciertos registros del departamento el 4 de septiembre de 2026; la información posiblemente afectada incluye datos de licencias de conducir y de vehículos, imágenes de documentos y otros datos personales. Según las preguntas frecuentes del departamento, las credenciales eran de un empleado de una agencia policial local de Florida que las guardó de forma indebida en un dispositivo electrónico; la filtración ya fue contenida y hasta ahora no hay pruebas de que se hayan usado indebidamente los datos de nadie. Esta semana salen las cartas para los titulares actuales de licencia o tarjeta de identificación que puedan estar afectados, y el departamento les ofrece un año de monitoreo de identidad y de crédito, además de un seguro contra el robo de identidad; la carta explica cómo inscribirse. Quienes ya no tienen licencia o identificación de Florida, o que alguna vez tuvieron un vehículo con título en Florida, quizá no reciban carta y pueden escribir a customerinquiry@flhsmv.gov.',
          why: 'Esté pendiente de su buzón por una carta del FLHSMV e inscríbase solo siguiendo las instrucciones de esa carta o de flhsmv.gov/data-breach. Desconfíe de llamadas, mensajes de texto o correos que digan ser sobre la filtración y le pidan su número de licencia u otros datos personales, y revise sus estados de cuenta y su reporte de crédito por si aparece algo que no reconoce.',
          sources: [FLHSMV_NOTICE, FLHSMV_BREACH_FAQ],
        },
        {
          headline:
            'Actualización: el NHC sube al 40 % la probabilidad de la baja costera, y el riesgo alto de corrientes de resaca sigue en las playas del sur de la Florida hasta el jueves',
          summary:
            'La baja no tropical con vientos de tormenta que mencionamos el domingo ya se formó a unos cientos de millas de la costa sureste de EE. UU., y el pronóstico del Centro Nacional de Huracanes (NHC) de las 8 a.m. del lunes elevó su probabilidad de desarrollo en siete días al 40 % (desde 30 % el domingo), todavía cerca de 0 % en 48 horas. Según el NHC, la baja podría adquirir brevemente algunas características subtropicales entre mediados y finales de semana si se mantiene sobre la corriente del Golfo y se separa del frente, antes de alejarse hacia el noreste más adelante en la semana; en cualquier caso, prevé vientos fuertes, inundación costera y oleaje peligroso en partes de la costa este durante los próximos días. Más cerca de casa, el Servicio Nacional de Meteorología en Miami mantiene el riesgo alto de corrientes de resaca en las playas atlánticas de Palm Beach, Broward y Miami-Dade hasta la noche del jueves, con aviso de oleaje alto para Palm Beach hasta las 8 a.m. del miércoles (olas de 7 a 9 pies) y para Broward desde las 2 p.m. del lunes hasta las 8 p.m. del martes.',
          why: 'Báñese solo cerca de salvavidas y no entre al agua cuando haya banderas rojas. Si la inundación costera llega a su casa, negocio o auto, tome fotos antes de limpiar; el daño por inundación a una vivienda solo lo cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, no la póliza de hogar estándar.',
          sources: [NHC_TWO, NWS_MFL_SRF],
        },
        {
          headline:
            'Semana Nacional de Seguridad del Autobús Escolar, del 19 al 23 de octubre: cuándo hay que detenerse en Florida y las multas por rebasar un autobús detenido',
          summary:
            'La Semana Nacional de Seguridad del Autobús Escolar va del 19 al 23 de octubre este año con el lema “Safe Rides, Everyday Heroes”, según la Asociación Nacional de Transporte Escolar (NAPT). El FLHSMV recuerda que, cuando un autobús escolar se detiene con las luces rojas intermitentes y el brazo de PARE extendido, el tráfico en ambos sentidos debe detenerse en una vía de dos carriles y en una carretera dividida solo por una mediana pavimentada, y esperar hasta que los niños estén fuera de la vía y el brazo se retire; solo los conductores del lado opuesto de una barrera elevada o de una mediana sin pavimentar de al menos 5 pies de ancho pueden seguir, con precaución. Desde el 1 de enero de 2021, las sanciones por rebasar ilegalmente un autobús detenido son el doble: es una infracción de tránsito con cuatro puntos en la licencia, un curso obligatorio de mejoramiento para conductores y una multa mínima de $265, o de $465 si lo rebasa por el lado donde suben y bajan los niños. Si la infracción causa lesiones graves o la muerte, la Ley Cameron Mayhew prevé, entre otras sanciones, una multa de $1,500, seis puntos y la suspensión de la licencia por al menos un año.',
          why: 'Las líneas pintadas no son una barrera: si tiene dudas, deténgase. Una multa por rebasar un autobús escolar queda en su historial de manejo como infracción de tránsito, así que vale la pena un minuto más de paciencia. ¿Preguntas sobre cómo su historial afecta su [seguro de auto](/es/car-insurance-florida-city)? Consúltenos.',
          sources: [FLHSMV_SCHOOL_BUS, NAPT_SBSW],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Lo que viene',
          text: 'Martes 20 de octubre: próxima fecha de asunción de pólizas personales de Citizens, y plazo para presentar por adelantado el testimonio de expertos para la audiencia de tarifas de compensación laboral (workers’ comp) de la OIR del 27 de octubre. FEMA: esta mañana del lunes, el registro de Isaías en Florida seguía siendo solo la declaración de emergencia EM-3655-FL; la solicitud estatal de desastre mayor del 16 de octubre está pendiente. La página pública de reportes de catástrofes de la OIR todavía no mostraba totales estatales de reclamos por Isaías. Mareas altas (king tides) en Miami-Dade: 24 al 30 de octubre. La autorización vigente del Programa Nacional de Seguro contra Inundaciones (NFIP) llega hasta el 11 de diciembre de 2026.',
        },
      ],
      extraSources: [CITIZENS_CAL, OIR_NCCI, FEMA_DECLARATIONS, OIR_CAT, MIAMI_KING, CRS_NFIP],
    },
    ru: {
      title:
        'Страховые новости Флориды, 19 октября 2026: письма об утечке данных водителей уже в пути, шансы прибрежного циклона растут, неделя безопасности школьных автобусов',
      metaTitle: 'Страховые новости 19.10.2026: утечка FLHSMV, циклон | M&K Agency',
      description:
        'FLHSMV рассылает письма об утечке данных водителей, шанс прибрежного циклона — 40%, rip currents до четверга и правила у школьного автобуса.',
      ogAlt:
        'Конверт со щитом и замком, предупреждающий флаг над высокими волнами и жёлтый школьный автобус с выдвинутым знаком STOP',
      intro:
        'Три новости для водителей, домовладельцев и владельцев малого бизнеса в Южной Флориде в начале недели. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'FLHSMV на этой неделе рассылает письма водителям, чьи данные могли попасть к злоумышленникам',
          summary:
            'В публичном уведомлении от 16 октября Департамент безопасности дорожного движения и автотранспорта Флориды (FLHSMV) сообщил, что 4 сентября 2026 года злоумышленник с помощью скомпрометированных учётных данных получил доступ к части записей ведомства; под угрозой могли оказаться данные водительских удостоверений и транспортных средств, сканы документов и другая личная информация. Как сказано в FAQ департамента, учётные данные принадлежали сотруднику одного из местных правоохранительных органов Флориды, который неправильно хранил их на электронном устройстве; утечку уже остановили, и пока нет признаков того, что чьи-то данные были использованы во вред. На этой неделе письма получат нынешние владельцы прав или ID-карт, которых могла затронуть утечка; департамент предлагает им на один год мониторинг личных данных и кредитной истории, а также страховку от кражи личности — как подключиться, написано в письме. Тем, у кого больше нет флоридских прав или ID, или кто раньше регистрировал машину с титулом во Флориде, письмо может не прийти — им стоит написать на customerinquiry@flhsmv.gov.',
          why: 'Следите за почтой: письмо придёт от FLHSMV, и подключать мониторинг стоит только по инструкции из этого письма или со страницы flhsmv.gov/data-breach. Не доверяйте звонкам, SMS и письмам «по поводу утечки», в которых просят номер прав или другие личные данные, и проверяйте банковские выписки и кредитный отчёт на незнакомые операции.',
          sources: [FLHSMV_NOTICE, FLHSMV_BREACH_FAQ],
        },
        {
          headline:
            'Обновление: NHC повысил шанс развития прибрежного циклона до 40%, высокий риск rip currents на пляжах Южной Флориды сохраняется до четверга',
          summary:
            'Нетропический циклон со штормовым ветром, о котором мы писали в воскресенье, сформировался в нескольких сотнях миль от юго-восточного побережья США, и в утреннем обзоре Национального центра ураганов (8:00 в понедельник) шанс его развития за семь дней повышен до 40% (в воскресенье было 30%), за 48 часов — по-прежнему почти 0%. По оценке NHC, если циклон останется над Гольфстримом и оторвётся от фронта, в середине или конце недели он может ненадолго приобрести некоторые субтропические черты, а затем уйти на северо-восток, прочь от США; в любом случае в ближайшие дни на части Восточного побережья ожидаются сильный ветер, прибрежное подтопление и опасный прибой. У нас Национальная метеослужба в Майами сохраняет высокий риск rip currents (обратных течений) на атлантических пляжах Palm Beach, Broward и Miami-Dade до вечера четверга; предупреждение о высоком прибое действует в Palm Beach до 8:00 среды (волны 7–9 футов) и в Broward с 14:00 понедельника до 20:00 вторника.',
          why: 'Купайтесь только рядом со спасателями и не заходите в воду при красных флагах. Если прибрежное подтопление дойдёт до дома, офиса или машины, сфотографируйте всё до уборки; ущерб дому от наводнения покрывает только отдельный полис от наводнения, а не стандартная страховка дома.',
          sources: [NHC_TWO, NWS_MFL_SRF],
        },
        {
          headline:
            'Неделя безопасности школьных автобусов 19–23 октября: когда во Флориде обязательно останавливаться и чем грозит обгон стоящего автобуса',
          summary:
            'Национальная неделя безопасности школьных автобусов (National School Bus Safety Week) в этом году проходит 19–23 октября под девизом «Safe Rides, Everyday Heroes», сообщает Национальная ассоциация школьных перевозок (NAPT). FLHSMV напоминает: если школьный автобус остановился с мигающими красными огнями и выдвинутым знаком STOP, на двухполосной дороге и на шоссе, разделённом только асфальтированной разделительной полосой, должны остановиться машины в обоих направлениях и стоять, пока дети не уйдут с дороги и знак не уберут; ехать дальше, сбавив скорость, могут только водители по другую сторону приподнятого ограждения или неасфальтированной разделительной полосы шириной не менее 5 футов. С 1 января 2021 года наказание за незаконный обгон стоящего автобуса удвоено: это нарушение правил движения, четыре штрафных балла, обязательный курс Driver Improvement и штраф не менее $265, а при объезде со стороны, где дети входят и выходят, — не менее $465. Если нарушение привело к тяжёлым травмам или гибели человека, закон Cameron Mayhew Act предусматривает, среди прочего, штраф $1,500, шесть баллов и лишение прав минимум на год.',
          why: 'Разметка — не ограждение: если сомневаетесь, остановитесь. Штраф за обгон школьного автобуса попадает в вашу водительскую историю как нарушение правил движения, так что лишняя минута терпения того стоит. Хотите понять, как история вождения влияет на [автостраховку](/ru/car-insurance-florida-city)? Спросите нас.',
          sources: [FLHSMV_SCHOOL_BUS, NAPT_SBSW],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Что впереди',
          text: 'Вторник, 20 октября: очередная дата assumption личных полисов Citizens, а также крайний срок предварительной подачи экспертных показаний к слушанию OIR по тарифам workers’ comp 27 октября. FEMA: на утро понедельника по «Исайасу» во Флориде по-прежнему действует только чрезвычайная декларация EM-3655-FL; запрос штата о major disaster от 16 октября ещё рассматривается. На публичной странице catastrophe reporting OIR сводных цифр по «Исайасу» по штату всё ещё нет. King tides в Miami-Dade: 24–30 октября. Текущие полномочия Национальной программы страхования от наводнений (NFIP) действуют до 11 декабря 2026 года.',
        },
      ],
      extraSources: [CITIZENS_CAL, OIR_NCCI, FEMA_DECLARATIONS, OIR_CAT, MIAMI_KING, CRS_NFIP],
    },
  },
};
