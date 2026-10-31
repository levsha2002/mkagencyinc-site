import type { NewsEdition, NewsSource } from '../types';

// Edition for Saturday, Oct. 31, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-31',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 3:35 a.m. EDT Sat Oct 31, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-31',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 7:29 a.m. EDT Sat Oct 31, 2026',
};

const IJ_INDICTMENT: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-10-29',
  url: 'https://www.insurancejournal.com/news/southeast/2026/10/29/890770.htm',
  title: 'Florida Men Charged With Creating Sham Insurance Now Face Federal Indictment',
};

const MDFR_CLOCKS: NewsSource = {
  name: 'Miami-Dade Fire Rescue',
  date: '2026-10-30',
  url: 'https://www.miamidade.gov/global/release.page?Mduid_release=rel1793361322315761',
  title: 'This Weekend: Turn Back the Clocks, Turn Up Fire Safety',
};

const FLHSMV_PED: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-10-01',
  url: 'https://www.flhsmv.gov/2026/10/01/flhsmv-celebrates-national-pedestrian-safety-month/',
  title: 'FLHSMV Celebrates National Pedestrian Safety Month',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-31',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8 a.m. EDT Sat Oct 31, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

export const edition: NewsEdition = {
  slug: '2026-10-31-flood-risk-sham-insurer-indictment-smoke-alarms',
  datePublished: '2026-10-31',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 31, 2026: the coastal flood advisory runs through Sunday as the flash-flood risk rises, a fake-insurance case moves to federal court, and Miami-Dade Fire Rescue asks you to check your alarms when the clocks fall back',
      metaTitle: 'Insurance News Oct. 31, 2026: Flood Risk, Fake Insurer, Alarms | M&K',
      description:
        'Coastal flood advisory extended to Sunday with a higher flash-flood risk, a federal indictment in a fake-insurance case, and smoke alarm checks as clocks fall back.',
      ogAlt:
        'A storm cloud with lightning over a red car in street floodwater, an insurance certificate crossed out in red next to a magnifying glass, and a house with a ceiling smoke alarm under a clock with a backward arrow',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Halloween weekend. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'Update: The coastal flood advisory now runs through Sunday, and forecasters raise the flash-flood risk for Sunday night',
          summary:
            'The National Weather Service in Miami extended the Coastal Flood Advisory for moderate flooding at high tide in coastal Miami-Dade, Broward and Palm Beach until **7 p.m. Sunday**, with a high rip current risk through Monday morning and a High Surf Advisory for Broward and Palm Beach beaches, where breaking waves of 5 to 8 feet are expected. Saturday’s forecast discussion puts much of the East Coast under a **Level 2 of 4** risk of isolated flash flooding from Sunday afternoon into Monday morning, up from Level 1 on Friday. Forecasters say most areas could see up to about 1.5 to 2 inches in a reasonable worst case, but where a band of storms stalls, 3 to 5 inches could fall in one to three hours.',
          why: 'Never drive into water of unknown depth: flood damage to a car is a comprehensive claim, not collision ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). If water gets into your home, take photos before you clean up; water that rises from flooded streets is usually a matter for a separate [flood policy](/en/flood-insurance-homestead-fl), which generally takes 30 days to start.',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD],
        },
        {
          headline: 'Update: Two Destin men accused of selling fake insurance are now indicted on federal charges',
          summary:
            'A federal grand jury in Pensacola has indicted two Destin men on fraud and money laundering charges over companies that were never licensed to sell property and casualty insurance in Florida, Insurance Journal reported on **Oct. 29**. Prosecutors allege the men collected more than $651,000 in premiums from individuals and businesses over about two years, issued falsified certificates of insurance and kept the money. The two had already been arrested on state charges this summer after an investigation by the Florida Department of Financial Services and the IRS, and state regulators ordered the companies to stop operating in September. Both pleaded not guilty on Oct. 16, and trial is set for Dec. 14; the charges are allegations, not findings of guilt.',
          why: 'A certificate of insurance is only paper unless the policy behind it is real. Before you pay for a policy or rely on a subcontractor’s certificate, confirm that the agent holds a Florida license (DFS licensee search) and that the company is authorized by the Office of Insurance Regulation; our guide to [certificates of insurance for contractors](/en/blog/certificate-of-insurance-contractors-florida) explains what to check.',
          sources: [IJ_INDICTMENT],
        },
        {
          headline: 'Clocks fall back at 2 a.m. Sunday: Miami-Dade Fire Rescue asks residents to test smoke and carbon monoxide alarms',
          summary:
            'Ahead of the switch back to standard time at **2 a.m. Sunday, Nov. 1**, Miami-Dade Fire Rescue issued a reminder on **Oct. 30** to test smoke alarms and carbon monoxide detectors and replace their batteries. The department advises replacing smoke alarms older than 10 years and CO detectors older than five, checking for damaged electrical cords, cleaning dryer vents and heating systems, keeping a fire extinguisher handy and getting rid of expired chemicals, paint and propane tanks. Citing national fire data, it notes that more than half of home fire deaths happen in homes with no working smoke alarm.',
          why: 'Working alarms protect your family first. It’s also a good weekend to update a home inventory (a quick video of every room and your receipts) and make sure your dwelling and personal property limits still fit your home, because that’s what a fire claim is measured against; we can go over it in a [homeowners insurance review](/en/homeowners-insurance-florida-city).',
          sources: [MDFR_CLOCKS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This weekend',
          text: 'Tonight is Halloween: Florida’s Department of Highway Safety and Motor Vehicles asks drivers to slow down and watch for children in neighborhoods, driveways and crosswalks, and starting Sunday it gets dark an hour earlier in the evening. A driver who fails to yield to a pedestrian legally in a crosswalk faces at least a $164 citation and three points on their license. The National Hurricane Center does not expect any tropical cyclone to form in the next seven days (8 a.m. Saturday outlook). The National Flood Insurance Program remains authorized only through 11:59 p.m. on Dec. 11, 2026; in a lapse, existing policies stay in force and valid claims are paid, but FEMA would stop selling and renewing policies.',
        },
      ],
      extraSources: [FLHSMV_PED, NHC_TWO, FEMA_REAUTH],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 31 de octubre de 2026: el aviso por inundación costera sigue hasta el domingo y sube el riesgo de inundaciones repentinas, un caso de seguros falsos pasa a la corte federal y los bomberos de Miami-Dade piden revisar las alarmas al atrasar el reloj',
      metaTitle: 'Noticias de seguros 31/10/2026: inundación, seguro falso, alarmas | M&K',
      description:
        'Aviso por inundación costera hasta el domingo y mayor riesgo de inundaciones repentinas, acusación federal en un caso de seguros falsos y revisión de alarmas de humo.',
      ogAlt:
        'Una nube de tormenta con un rayo sobre un carro rojo en una calle inundada, un certificado de seguro tachado en rojo junto a una lupa y una casa con una alarma de humo en el techo bajo un reloj con una flecha hacia atrás',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida este fin de semana de Halloween. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline: 'Actualización: el aviso por inundación costera se extiende hasta el domingo y los meteorólogos elevan el riesgo de inundaciones repentinas para el domingo en la noche',
          summary:
            'El Servicio Nacional de Meteorología (NWS) en Miami extendió hasta las **7 p.m. del domingo** el aviso por inundación costera moderada en marea alta (Coastal Flood Advisory) en la costa de Miami-Dade, Broward y Palm Beach, con riesgo alto de corrientes de resaca hasta el lunes en la mañana y un aviso de oleaje alto para las playas de Broward y Palm Beach, donde se esperan olas de 5 a 8 pies. La discusión del pronóstico de este sábado coloca gran parte de la costa este en un riesgo **nivel 2 de 4** de inundaciones repentinas aisladas desde el domingo en la tarde hasta el lunes en la mañana, frente al nivel 1 del viernes. Según los meteorólogos, en el peor escenario razonable la mayoría de las zonas recibiría alrededor de 1.5 a 2 pulgadas, pero donde se estacione una banda de tormentas podrían caer de 3 a 5 pulgadas en una a tres horas.',
          why: 'Nunca entre con el carro en agua de profundidad desconocida: el daño por inundación en un vehículo es un reclamo de la cobertura comprensiva, no de colisión ([comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida)). Si entra agua en su casa, tome fotos antes de limpiar; el agua que sube desde calles inundadas por lo general corresponde a una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, que normalmente tarda 30 días en empezar.',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD],
        },
        {
          headline: 'Actualización: dos hombres de Destin acusados de vender seguros falsos enfrentan ahora cargos federales',
          summary:
            'Un gran jurado federal en Pensacola acusó formalmente a dos hombres de Destin de fraude y lavado de dinero por compañías que nunca tuvieron licencia para vender seguros de propiedad y accidentes en Florida, informó Insurance Journal el **29 de octubre**. Según la acusación, cobraron más de $651,000 en primas a personas y negocios durante unos dos años, entregaron certificados de seguro falsificados y se quedaron con el dinero. Ambos ya habían sido arrestados por cargos estatales este verano tras una investigación del Departamento de Servicios Financieros de Florida (DFS) y el IRS, y en septiembre los reguladores estatales ordenaron a las compañías cesar sus operaciones. Los dos se declararon no culpables el 16 de octubre y el juicio está fijado para el 14 de diciembre; los cargos son acusaciones, no una condena.',
          why: 'Un certificado de seguro no vale nada si no hay una póliza real detrás. Antes de pagar una póliza o aceptar el certificado de un subcontratista, confirme que el agente tiene licencia en Florida (búsqueda de licencias del DFS) y que la compañía está autorizada por la Oficina de Regulación de Seguros; nuestra guía sobre [certificados de seguro para contratistas](/es/blog/certificate-of-insurance-contractors-florida) explica qué revisar.',
          sources: [IJ_INDICTMENT],
        },
        {
          headline: 'El reloj se atrasa a las 2 a.m. del domingo: los bomberos de Miami-Dade piden probar las alarmas de humo y de monóxido de carbono',
          summary:
            'Antes de que termine el horario de verano a las **2 a.m. del domingo 1 de noviembre**, Miami-Dade Fire Rescue publicó el **30 de octubre** un recordatorio para probar las alarmas de humo y los detectores de monóxido de carbono (CO) y cambiarles las baterías. El departamento recomienda reemplazar las alarmas de humo de más de 10 años y los detectores de CO de más de cinco, revisar cables eléctricos dañados, limpiar los ductos de la secadora y los sistemas de calefacción, tener un extintor a mano y deshacerse de químicos, pintura y tanques de propano vencidos. Con base en datos nacionales sobre incendios, señala que más de la mitad de las muertes por incendio en el hogar ocurren en viviendas sin una alarma de humo que funcione.',
          why: 'Lo primero es proteger a su familia con alarmas que funcionen. También es buen fin de semana para actualizar el inventario de su casa (un video rápido de cada cuarto y sus recibos) y confirmar que los límites de la vivienda y de sus pertenencias siguen de acuerdo con su casa, porque con eso se mide un reclamo por incendio; podemos revisarlo en una [revisión de su seguro de vivienda](/es/homeowners-insurance-florida-city).',
          sources: [MDFR_CLOCKS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Este fin de semana',
          text: 'Esta noche es Halloween: el Departamento de Seguridad Vial y Vehículos Motorizados de Florida pide a los conductores reducir la velocidad y estar atentos a los niños en vecindarios, entradas de garaje y cruces peatonales, y desde el domingo oscurece una hora más temprano por la tarde. El conductor que no cede el paso a un peatón que cruza correctamente por el paso peatonal se expone a una multa mínima de $164 y tres puntos en su licencia. El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en los próximos siete días (pronóstico de las 8 a.m. del sábado). El Programa Nacional de Seguro contra Inundaciones (NFIP) sigue autorizado solo hasta las 11:59 p.m. del 11 de diciembre de 2026; si vence, las pólizas existentes siguen vigentes y los reclamos válidos se pagan, pero FEMA dejaría de vender y renovar pólizas.',
        },
      ],
      extraSources: [FLHSMV_PED, NHC_TWO, FEMA_REAUTH],
    },
    ru: {
      title:
        'Страховые новости Флориды, 31 октября 2026: предупреждение о прибрежном подтоплении продлено до воскресенья, а риск внезапных паводков вырос, дело о фальшивых страховках дошло до федерального суда, а пожарные Майами-Дейд просят проверить датчики дыма при переводе часов',
      metaTitle: 'Страховые новости 31.10.2026: паводки, фальшивая страховка | M&K',
      description:
        'Предупреждение о подтоплении побережья до воскресенья и выше риск паводков, федеральное обвинение по делу о фальшивых страховках и проверка датчиков дыма при переводе часов.',
      ogAlt:
        'Грозовая туча с молнией над красной машиной в затопленной улице, перечёркнутый красным страховой сертификат рядом с лупой и дом с датчиком дыма на потолке под часами со стрелкой назад',
      intro:
        'Три новости для владельцев жилья, водителей и малого бизнеса Южной Флориды в эти выходные на Хэллоуин. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: 'Обновление: предупреждение о прибрежном подтоплении продлено до воскресенья, а синоптики повысили риск внезапных паводков в ночь на понедельник',
          summary:
            'Национальная метеослужба (NWS) в Майами продлила рекомендацию (Coastal Flood Advisory) из-за умеренного подтопления во время прилива на побережье Майами-Дейд, Броварда и Палм-Бич до **19:00 воскресенья**; высокий риск обратных течений (rip currents) сохраняется до утра понедельника, а на пляжах Броварда и Палм-Бич действует предупреждение о сильном прибое с волнами 5–8 футов. В субботнем прогнозе большая часть восточного побережья отнесена к риску отдельных внезапных паводков **уровня 2 из 4** с вечера воскресенья до утра понедельника — в пятницу был уровень 1. По оценке синоптиков, при разумно худшем сценарии в большинстве районов выпадет около 1,5–2 дюймов, но там, где задержится полоса гроз, за один-три часа может пролиться 3–5 дюймов.',
          why: 'Никогда не въезжайте в воду неизвестной глубины: ущерб машине от наводнения — это претензия по comprehensive, а не по collision ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Если вода попала в дом, сфотографируйте всё до уборки; вода, которая поднимается с затопленных улиц, как правило, относится к отдельному [полису от наводнения](/ru/flood-insurance-homestead-fl), который обычно начинает действовать через 30 дней.',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD],
        },
        {
          headline: 'Обновление: двум жителям Дестина, которых обвиняют в продаже фальшивых страховок, предъявлены федеральные обвинения',
          summary:
            'Федеральное большое жюри в Пенсаколе предъявило двум мужчинам из Дестина обвинения в мошенничестве и отмывании денег по делу о компаниях, у которых никогда не было лицензии на страхование имущества и ответственности во Флориде, сообщил Insurance Journal **29 октября**. По версии обвинения, примерно за два года они собрали с частных лиц и бизнеса более $651 000 страховых взносов, выдавали поддельные страховые сертификаты и оставляли деньги себе. Летом обоих уже арестовали по обвинениям штата после расследования Департамента финансовых услуг Флориды (DFS) и IRS, а в сентябре регулятор штата приказал компаниям прекратить работу. 16 октября оба заявили о своей невиновности, суд назначен на 14 декабря; обвинения — это пока не доказанная вина.',
          why: 'Страховой сертификат ничего не стоит, если за ним нет настоящего полиса. Прежде чем платить за полис или принимать сертификат от субподрядчика, убедитесь, что у агента есть лицензия Флориды (поиск по базе лицензий DFS), а компания имеет разрешение Управления по регулированию страхования; что именно проверять, рассказано в нашем гиде по [страховым сертификатам для подрядчиков](/ru/blog/certificate-of-insurance-contractors-florida).',
          sources: [IJ_INDICTMENT],
        },
        {
          headline: 'В 2:00 воскресенья часы переводят назад: пожарные Майами-Дейд просят проверить датчики дыма и угарного газа',
          summary:
            'Перед окончанием летнего времени в **2:00 воскресенья, 1 ноября**, пожарно-спасательная служба Майами-Дейд (Miami-Dade Fire Rescue) **30 октября** напомнила жителям проверить датчики дыма и угарного газа (CO) и заменить в них батарейки. Служба советует менять датчики дыма старше 10 лет и датчики CO старше пяти лет, проверить повреждённые электрические шнуры, почистить вентиляцию сушильной машины и систему отопления, держать огнетушитель под рукой и избавиться от просроченной бытовой химии, краски и баллонов с пропаном. Ссылаясь на общенациональную статистику, служба отмечает, что больше половины смертей при пожарах в жилье происходит в домах без работающего датчика дыма.',
          why: 'Исправные датчики прежде всего защищают семью. Эти выходные — также хороший повод обновить опись имущества (короткое видео каждой комнаты и чеки) и проверить, что лимиты на сам дом и на личное имущество по-прежнему соответствуют вашему жилью: именно по ним рассчитывается выплата при пожаре. Мы можем помочь с этим в рамках [проверки страховки жилья](/ru/homeowners-insurance-florida-city).',
          sources: [MDFR_CLOCKS],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'В эти выходные',
          text: 'Сегодня вечером Хэллоуин: Департамент безопасности дорожного движения и автотранспорта Флориды просит водителей снижать скорость и следить за детьми в жилых кварталах, у подъездных дорожек и на пешеходных переходах, а с воскресенья по вечерам темнеет на час раньше. Водителю, который не уступил дорогу пешеходу на переходе, грозит штраф не меньше $164 и три штрафных балла. Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней (прогноз на 8:00 субботы). Национальная программа страхования от наводнений (NFIP) действует только до 23:59 11 декабря 2026 года; если её не продлят, действующие полисы сохранятся и обоснованные претензии будут оплачиваться, но FEMA перестанет продавать и продлевать полисы.',
        },
      ],
      extraSources: [FLHSMV_PED, NHC_TWO, FEMA_REAUTH],
    },
  },
};
