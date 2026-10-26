import type { NewsEdition, NewsSource } from '../types';

// Edition for Monday, Oct. 26, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-26',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=mfl&wwa=all',
  title: 'Coastal Hazard Message and Wind Advisory, NWS Miami, 1:18–1:20 a.m. EDT Mon Oct 26, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-26',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 6:51 a.m. EDT Mon Oct 26, 2026',
};

const NWS_KEY: NewsSource = {
  name: 'National Weather Service Key West',
  date: '2026-10-26',
  url: 'https://www.weather.gov/wwamap/wwatxtget.php?cwa=key&wwa=all',
  title: 'Coastal Flood Warning, Monroe Upper Keys, 4:02 a.m. EDT Mon Oct 26, 2026',
};

const WSVN: NewsSource = {
  name: 'WSVN 7News',
  date: '2026-10-25',
  url: 'https://wsvn.com/news/local/miami-dade/king-tides-flood-south-florida-as-worse-is-expected-through-monday/',
  title: 'King tides flood South Florida streets as worse conditions are expected through Monday',
};

const MDC_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const CBS12: NewsSource = {
  name: 'CBS12 News',
  date: '2026-10-25',
  url: 'https://cbs12.com/news/local/road-ranger-killed-hit-at-crash-scene-on-i-95-near-lantana-road-october-25-2026',
  title: 'Road Ranger killed, hit at crash scene on I-95 near Lantana Road',
};

const FLHSMV_MOVE: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-10-26',
  url: 'https://www.flhsmv.gov/safety-center/driving-safety/move-over/',
  title: 'Move Over, Florida!',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-26',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8 a.m. EDT Mon Oct 26, 2026',
};

const OIR_CRF: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-23',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/23/notice-to-industry-hurricane-isaias-catastrophe-reporting',
  title: 'Notice to Industry: Hurricane Isaias Catastrophe Reporting',
};

const OIR_NCCI: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-20',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/20/media-advisory-national-council-on-compensation-insurance-public-rate-hearing',
  title: 'Media Advisory: National Council on Compensation Insurance Public Rate Hearing',
};

export const edition: NewsEdition = {
  slug: '2026-10-26-flood-warning-extended-wind-advisory-move-over',
  datePublished: '2026-10-26',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 26, 2026: The Coastal Flood Warning is extended through Wednesday, a Wind Advisory for Miami-Dade, Broward and Palm Beach, and a deadly I-95 crash that puts the Move Over law in focus',
      metaTitle: 'Insurance News Oct. 26, 2026: Flood Warning, Wind | M&K',
      description:
        'Coastal Flood Warning extended to Wednesday, a Wind Advisory through Tuesday for Miami-Dade, Broward and Palm Beach, and Florida’s Move Over law.',
      ogAlt:
        'A house and a car in rising water under a cloudy sky, a palm tree bending in strong wind with a trash bin and leaves blowing, and a highway with traffic cones and a roadside service truck with flashing lights',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: the Coastal Flood Warning now runs through Wednesday evening, after king tides flooded streets over the weekend',
          summary:
            'The National Weather Service in Miami has extended the **Coastal Flood Warning** for coastal Miami-Dade and Broward until 8 p.m. Wednesday, Oct. 28 (on Sunday it was set to end Tuesday evening), and coastal Palm Beach, previously under an advisory, is now under the same warning. Forecasters expect major coastal flooding around each high tide over the next couple of days, with numerous roads possibly closed and low-lying homes, businesses and some critical infrastructure under water, and moderate flooding may linger through the end of the week. Over the weekend, high tides already left standing water on streets in Miami, Miami Beach, Fort Lauderdale and Hollywood, WSVN 7News reported. In the Upper Keys, the warning for major saltwater flooding now runs until 5 a.m. Tuesday.',
          why: 'Keep cars parked on higher ground around high tide and never drive through water of unknown depth: salt-water damage to a car falls under comprehensive coverage ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Flood damage to a home is covered only by a separate [flood policy](/en/flood-insurance-homestead-fl), and a new NFIP policy usually takes 30 days to start, so it can’t help with this week’s tides; Miami-Dade County lists the next king tides for Nov. 6–9 and Nov. 23–26. Take dated photos of any damage, and see our [king tides guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD, WSVN, NWS_KEY, MDC_KING],
        },
        {
          headline: 'Wind Advisory for metro and coastal Miami-Dade, Broward and Palm Beach through Tuesday evening',
          summary:
            'A **Wind Advisory** is in effect from 11 a.m. Monday to 8 p.m. Tuesday for metro and coastal Miami-Dade, Broward and Palm Beach, with northeast winds of 20 to 25 mph and frequent gusts up to 40 mph. The Weather Service warns that unsecured objects will be blown around, tree limbs could come down and a few power outages are possible, and that driving can be difficult, especially in high-profile vehicles. Offshore, a Gale Warning covers the Atlantic waters until Wednesday morning, with seas of 10 to 14 feet, and the high risk of rip currents at Atlantic beaches continues through Wednesday evening.',
          why: 'Bring in or tie down patio furniture, bins, signs and anything stored outside, park away from trees when you can, and drive vans and box trucks with extra care. Wind damage to a home is usually a homeowners claim, subject to your deductible, while a branch falling on a parked car is generally a comprehensive claim; take photos before you clean up. If you’re not sure what your policies cover, [ask us to review them](/en/quote).',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD],
        },
        {
          headline: 'Road Ranger killed at an I-95 crash scene in Palm Beach County: a reminder of Florida’s Move Over law',
          summary:
            'A 23-year-old Road Ranger, a civilian roadside-assistance worker, was killed around 2 a.m. Sunday, Oct. 25, when a car drove into a lane closure on northbound I-95 near Lantana Road, where troopers were working an earlier crash, the Florida Highway Patrol told CBS12 News. The car then hit a marked FHP cruiser that had its emergency lights on; the driver was treated for injuries, and FHP is investigating. Florida’s Move Over law requires drivers to move over a lane for stopped emergency, service, utility and disabled vehicles, or to slow to 20 mph below the posted limit when moving over isn’t safe (5 mph when the limit is 20 mph or less). The law now also covers any vehicle stopped on the roadside with hazard lights, flares or emergency signs, and FLHSMV counted 205 crashes and more than 17,500 citations for failing to move over in 2024.',
          why: 'When you see flashing lights, cones or a car with hazards on the shoulder, change lanes early or slow down well below the limit. According to FLHSMV, a violation brings a fine, fees and points on your driving record, and violations and at-fault crashes can affect your auto insurance at renewal. Questions about your auto coverage? [Contact us](/en/quote).',
          sources: [CBS12, FLHSMV_MOVE],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Also this week',
          text: 'The National Hurricane Center does not expect any tropical cyclone to form in the next seven days (8 a.m. Monday outlook). On Tuesday, Oct. 27, property insurers must file their next Hurricane Isaias claims report with the Office of Insurance Regulation by noon ET, and at 10 a.m. ET the office holds its virtual public hearing on the workers’ comp rate filing from the National Council on Compensation Insurance (NCCI); written comments are accepted through 5 p.m. ET on Nov. 10 at ratehearings@floir.gov, subject “NCCI”.',
        },
      ],
      extraSources: [NHC_TWO, OIR_CRF, OIR_NCCI],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 26 de octubre de 2026: se extiende hasta el miércoles la advertencia por inundación costera, aviso de viento en Miami-Dade, Broward y Palm Beach, y un choque mortal en la I-95 recuerda la ley Move Over',
      metaTitle: 'Noticias de seguros 26/10/2026: inundación y viento | M&K',
      description:
        'Advertencia por inundación costera extendida al miércoles, aviso de viento hasta el martes en Miami-Dade, Broward y Palm Beach, y la ley Move Over.',
      ogAlt:
        'Una casa y un carro en agua que sube bajo un cielo nublado, una palma doblada por el viento con un bote de basura y hojas volando, y una autopista con conos y una grúa de servicio con luces intermitentes',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada noticia está resumida con nuestras propias palabras, con un enlace a la fuente original.',
      items: [
        {
          headline:
            'Actualización: la advertencia por inundación costera sigue hasta el miércoles por la noche, tras un fin de semana de calles inundadas por las mareas reales',
          summary:
            'El Servicio Nacional de Meteorología (NWS) en Miami extendió la **advertencia por inundación costera (Coastal Flood Warning)** para la costa de Miami-Dade y Broward hasta las 8 p.m. del miércoles 28 de octubre (el domingo estaba previsto que terminara el martes por la noche), y la costa de Palm Beach, que antes estaba bajo un aviso, ahora está bajo la misma advertencia. Los meteorólogos esperan inundaciones costeras importantes en cada marea alta durante los próximos días: muchas calles podrían cerrarse y viviendas, negocios y parte de la infraestructura crítica en zonas bajas quedarían bajo el agua, y las inundaciones moderadas podrían seguir hasta el fin de semana. Durante el sábado y el domingo, las mareas altas ya dejaron agua estancada en calles de Miami, Miami Beach, Fort Lauderdale y Hollywood, según WSVN 7News. En los Cayos Superiores, la advertencia por inundación importante con agua salada sigue vigente hasta las 5 a.m. del martes.',
          why: 'Deje el carro estacionado en un lugar alto durante la marea alta y nunca maneje por agua de profundidad desconocida: el daño por agua salada en un carro lo cubre la cobertura comprensiva ([comprensivo vs. colisión](/es/blog/comprehensive-vs-collision-florida)). El daño por inundación en la casa solo lo cubre una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, y una póliza nueva del NFIP normalmente entra en vigor a los 30 días, así que no sirve para las mareas de esta semana; el Condado Miami-Dade anuncia las próximas mareas reales del 6 al 9 y del 23 al 26 de noviembre. Tome fotos con fecha de cualquier daño y consulte nuestra [guía sobre las mareas reales](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD, WSVN, NWS_KEY, MDC_KING],
        },
        {
          headline: 'Aviso de viento para las zonas urbanas y costeras de Miami-Dade, Broward y Palm Beach hasta el martes por la noche',
          summary:
            'Rige un **aviso de viento (Wind Advisory)** desde las 11 a.m. del lunes hasta las 8 p.m. del martes para las zonas urbanas y costeras de Miami-Dade, Broward y Palm Beach, con vientos del noreste de 20 a 25 mph y ráfagas frecuentes de hasta 40 mph. El Servicio Meteorológico advierte que los objetos sueltos saldrán volando, que podrían caer ramas de árboles y que son posibles algunos apagones, y que manejar puede ser difícil, sobre todo en vehículos altos. Mar adentro, rige una advertencia de vendaval (Gale Warning) en aguas del Atlántico hasta el miércoles por la mañana, con olas de 10 a 14 pies, y el riesgo alto de corrientes de resaca en las playas del Atlántico sigue hasta el miércoles por la noche.',
          why: 'Guarde o amarre los muebles del patio, los botes de basura, los letreros y todo lo que tenga afuera, estacione lejos de los árboles cuando pueda y maneje camionetas y camiones de caja con más cuidado. El daño por viento en la casa normalmente se reclama al seguro de vivienda, sujeto a su deducible, y una rama que cae sobre un carro estacionado suele ser un reclamo de cobertura comprensiva; tome fotos antes de limpiar. Si no está seguro de lo que cubren sus pólizas, [pídanos que las revisemos](/es/quote).',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD],
        },
        {
          headline: 'Muere un Road Ranger en la escena de un choque en la I-95 en el condado Palm Beach: un recordatorio de la ley Move Over',
          summary:
            'Un Road Ranger de 23 años, trabajador civil de asistencia en carretera, murió hacia las 2 a.m. del domingo 25 de octubre cuando un carro entró en un cierre de carril en la I-95 en dirección norte, cerca de Lantana Road, donde los agentes atendían un choque anterior, según dijo la Patrulla de Carreteras de Florida (FHP) a CBS12 News. Después, el carro chocó contra una patrulla identificada de la FHP que tenía las luces de emergencia encendidas; quien manejaba recibió atención por sus lesiones y la FHP investiga. La ley Move Over de Florida obliga a cambiarse de carril ante vehículos de emergencia, de servicio, de servicios públicos o averiados que estén detenidos, o a reducir la velocidad a 20 mph por debajo del límite cuando no sea seguro cambiarse (a 5 mph si el límite es de 20 mph o menos). La ley ahora también protege a cualquier vehículo detenido al costado de la vía con luces intermitentes, bengalas o señales de emergencia, y el FLHSMV contó en 2024 205 choques y más de 17,500 multas por no cambiarse de carril.',
          why: 'Cuando vea luces intermitentes, conos o un carro con las luces de emergencia en el paseo, cámbiese de carril con tiempo o baje bastante la velocidad. Según el FLHSMV, una infracción trae multa, cargos y puntos en su récord de manejo, y las infracciones y los choques en los que usted tiene la culpa pueden afectar su seguro de auto en la renovación. ¿Dudas sobre su cobertura de auto? [Contáctenos](/es/quote).',
          sources: [CBS12, FLHSMV_MOVE],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'También esta semana',
          text: 'El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en los próximos siete días (perspectiva de las 8 a.m. del lunes). El martes 27 de octubre, las aseguradoras de propiedad deben presentar a la Oficina de Regulación de Seguros (OIR) su informe de reclamos del huracán Isaías antes del mediodía (hora del Este), y a las 10 a.m. la OIR celebra la audiencia pública virtual sobre la solicitud de tarifas de compensación laboral (workers’ comp) del National Council on Compensation Insurance (NCCI); se aceptan comentarios por escrito hasta las 5 p.m. (hora del Este) del 10 de noviembre en ratehearings@floir.gov, con el asunto “NCCI”.',
        },
      ],
      extraSources: [NHC_TWO, OIR_CRF, OIR_NCCI],
    },
    ru: {
      title:
        'Страховые новости Флориды, 26 октября 2026: предупреждение о прибрежном подтоплении продлено до среды, рекомендация по ветру в Miami-Dade, Broward и Palm Beach и смертельная авария на I-95 — напоминание о законе Move Over',
      metaTitle: 'Страховые новости 26.10.2026: подтопление и ветер | M&K',
      description:
        'Предупреждение о подтоплении продлено до среды, рекомендация по ветру до вторника в Miami-Dade, Broward и Palm Beach и закон Move Over.',
      ogAlt:
        'Дом и машина в поднимающейся воде под облачным небом, пальма, согнутая сильным ветром, с летящими листьями и мусорным баком, и шоссе с конусами и машиной дорожной помощи с мигалками',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: предупреждение о прибрежном подтоплении продлено до вечера среды — в выходные king tides уже затопили улицы',
          summary:
            'Национальная метеослужба (NWS) в Майами продлила **предупреждение о прибрежном подтоплении (Coastal Flood Warning)** для побережья Miami-Dade и Broward до 20:00 среды, 28 октября (в воскресенье оно должно было закончиться вечером вторника), а на побережье Palm Beach, где раньше действовала лишь рекомендация (advisory), теперь тоже введено это предупреждение. В ближайшие дни синоптики ждут сильного подтопления в каждый прилив: многие дороги могут закрыть, дома, предприятия и часть важной инфраструктуры в низинах окажутся под водой, а умеренное подтопление может держаться до конца недели. По данным WSVN 7News, в выходные приливы уже оставили воду на улицах Майами, Miami Beach, Fort Lauderdale и Hollywood. В Верхних Кис предупреждение о сильном подтоплении солёной водой теперь действует до 5:00 вторника.',
          why: 'Во время прилива держите машину на возвышенном месте и никогда не въезжайте в воду неизвестной глубины: ущерб машине от солёной воды покрывает comprehensive ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Ущерб дому от наводнения покрывает только отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl), а новый полис NFIP обычно вступает в силу через 30 дней, так что от приливов этой недели он не защитит; следующие king tides округ Miami-Dade ожидает 6–9 и 23–26 ноября. Фотографируйте любые повреждения с датой и загляните в наш [материал о king tides](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD, WSVN, NWS_KEY, MDC_KING],
        },
        {
          headline: 'Рекомендация по ветру для городских и прибрежных районов Miami-Dade, Broward и Palm Beach — до вечера вторника',
          summary:
            'С 11:00 понедельника до 20:00 вторника в городских и прибрежных районах Miami-Dade, Broward и Palm Beach действует **рекомендация по ветру (Wind Advisory)**: северо-восточный ветер 20–25 миль/ч с частыми порывами до 40 миль/ч. Метеослужба предупреждает, что незакреплённые предметы будет уносить ветром, могут падать ветки деревьев и возможны отдельные отключения электричества, а вести машину будет трудно, особенно высокий автомобиль. В открытом море, в атлантических водах, до утра среды действует штормовое предупреждение (Gale Warning) с волнами 10–14 футов, а высокий риск обратных течений (rip currents) на атлантических пляжах сохранится до вечера среды.',
          why: 'Уберите или закрепите садовую мебель, мусорные баки, вывески и всё, что хранится на улице, по возможности не паркуйтесь под деревьями, а на фургонах и грузовиках-коробках езжайте особенно осторожно. Ущерб дому от ветра обычно заявляется по страховке дома с учётом франшизы, а ветка, упавшая на припаркованную машину, — как правило, случай для comprehensive; сфотографируйте повреждения до уборки. Если не уверены, что покрывают ваши полисы, — [мы поможем их проверить](/ru/quote).',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD],
        },
        {
          headline: 'На месте аварии на I-95 в округе Palm Beach погиб сотрудник Road Rangers — напоминание о законе Move Over',
          summary:
            'Около 2:00 в воскресенье, 25 октября, на северном направлении I-95 у Lantana Road погиб 23-летний сотрудник Road Rangers — гражданской службы помощи на дорогах: машина въехала в перекрытую полосу, где патруль разбирал предыдущую аварию, сообщил CBS12 News дорожный патруль Флориды (FHP). Затем машина врезалась в патрульный автомобиль FHP с включёнными проблесковыми маячками; водителю оказали помощь, FHP ведёт расследование. Закон Флориды Move Over требует перестраиваться на соседнюю полосу при виде остановившихся экстренных, сервисных, коммунальных и сломанных машин, а если перестроиться небезопасно — снижать скорость на 20 миль/ч ниже установленного ограничения (до 5 миль/ч, если ограничение 20 миль/ч или меньше). Теперь закон распространяется и на любую машину, стоящую у обочины с аварийкой, сигнальными факелами или знаками аварийной остановки; по данным FLHSMV, в 2024 году из-за того, что водители не перестроились, произошло 205 аварий и было выписано более 17 500 штрафов.',
          why: 'Увидев мигалки, конусы или машину с аварийкой на обочине, перестраивайтесь заранее или заметно сбавляйте скорость. По данным FLHSMV, за нарушение полагаются штраф, сборы и штрафные баллы в водительской истории, а нарушения и аварии по вашей вине могут повлиять на автостраховку при продлении. Есть вопросы по автостраховке? [Напишите нам](/ru/quote).',
          sources: [CBS12, FLHSMV_MOVE],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Также на этой неделе',
          text: 'Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней (прогноз на 8:00 понедельника). Во вторник, 27 октября, страховщики имущества должны до 12:00 по восточному времени сдать в Управление по регулированию страхования (OIR) отчёт о претензиях по урагану Isaias, а в 10:00 OIR проведёт виртуальные публичные слушания по заявке National Council on Compensation Insurance (NCCI) на тарифы workers’ comp; письменные комментарии принимаются до 17:00 по восточному времени 10 ноября на ratehearings@floir.gov с темой письма «NCCI».',
        },
      ],
      extraSources: [NHC_TWO, OIR_CRF, OIR_NCCI],
    },
  },
};
