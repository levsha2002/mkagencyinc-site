import type { NewsEdition, NewsSource } from '../types';

// Edition for Friday, Oct. 30, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const FDEM_IA_RELEASE: NewsSource = {
  name: 'Florida Division of Emergency Management (FEMA release)',
  date: '2026-10-29',
  url: 'https://www.floridadisaster.org/news-media/news/20261029-icymi-president-donald-j.-trump-amends-major-disaster-declaration-for-florida-authorizing-additional-federal-assistance',
  title: 'ICYMI: President Donald J. Trump Amends Major Disaster Declaration for Florida, Authorizing Additional Federal Assistance',
};

const FDEM_ISAIAS: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-10-29',
  url: 'https://www.floridadisaster.org/disaster-updates/hurricane-isaias/',
  title: 'Hurricane Isaias disaster updates',
};

const OIR_HOME_RATES: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-29',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/10/29/commissioner-mike-yaworsky-and-chief-financial-officer-blaise-ingoglia-highlight-major-rate-decreases-for-homeowners-effective-this-month',
  title: 'Commissioner and CFO highlight homeowners rate decreases effective this month',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-30',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 3:19 a.m. EDT Fri Oct 30, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-10-30',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 7:44 a.m. EDT Fri Oct 30, 2026',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-30',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8 a.m. EDT Fri Oct 30, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

export const edition: NewsEdition = {
  slug: '2026-10-30-isaias-individual-aid-home-rate-decreases-weekend-rain',
  datePublished: '2026-10-30',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 30, 2026: FEMA opens household aid in eight Panhandle counties after Hurricane Isaias, the state reports October home insurance rate decreases, and the coastal flood advisory runs into a rainy weekend',
      metaTitle: 'Insurance News Oct. 30, 2026: Isaias Aid, Home Rates, Rain | M&K',
      description:
        'FEMA household aid approved for eight counties after Isaias, OIR reports October homeowners rate decreases, and a coastal flood advisory plus heavy rain this weekend.',
      ogAlt:
        'A house with a blue tarp on the roof next to a government building with a heart shield, a house with a downward arrow on a document, and a rain cloud over a coastal street with shallow water and a car',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'Update: FEMA approves Individual Assistance for households in eight Panhandle counties hit by Hurricane Isaias',
          summary:
            'On **Oct. 29**, FEMA announced that the President amended Florida’s major disaster declaration for Hurricane Isaias to add help for individuals and families in Bay, Escambia, Gulf, Holmes, Okaloosa, Santa Rosa, Walton and Washington counties. Until now the declaration covered only Public Assistance, which repays local governments for debris removal and public repairs. Individual Assistance can include grants for temporary housing and home repairs, low-interest loans for uninsured property losses and other recovery programs, and FEMA says more areas may be added later if damage assessments support it. No South Florida county is on the list.',
          why: 'FEMA asks storm survivors to file with their insurance company first and then apply at DisasterAssistance.gov, by phone at 1-800-621-3362 or in the FEMA app, because federal aid can’t pay for losses insurance already covers. If you have family or property in the Panhandle, keep every settlement or denial letter; our [hurricane claim checklist](/en/blog/hurricane-claim-checklist-florida) shows what to document.',
          sources: [FDEM_IA_RELEASE, FDEM_ISAIAS],
        },
        {
          headline: 'State says more than 824,000 Florida homeowners get rate decreases on new policies and renewals this month',
          summary:
            'Florida’s Office of Insurance Regulation and the state’s Chief Financial Officer said on **Oct. 29** that a batch of homeowners rate filings that took effect in October brings rate decreases for more than 824,300 policyholders, with the largest at 12.1%, applied when a policy is written or renewed. OIR says it has more decrease requests pending that would take effect in November, December and January for about 450,000 more Floridians. According to the agency, 48 companies have filed for rate decreases and 53 have asked for no change since January 2024.',
          why: 'A filed rate change is an average across a company’s policies, so your own renewal can still move up or down with your home’s value, coverage limits, deductible or roof age. Read the renewal notice line by line, compare it with last year’s declarations page, and if something changed you don’t understand, ask for a [homeowners insurance review](/en/homeowners-insurance-florida-city).',
          sources: [OIR_HOME_RATES],
        },
        {
          headline: 'Update: The coastal flood advisory for Miami-Dade and Broward is extended through Saturday, with heavy rain likely Sunday and Monday',
          summary:
            'The National Weather Service in Miami extended the Coastal Flood Advisory for moderate flooding in coastal Miami-Dade and Broward until **8 p.m. Saturday**, warning of water in lots, parks and roads, and added a High Rip Current Risk from Friday evening through Sunday evening. Friday’s forecast discussion expects rain to increase on Saturday and peak Sunday and Monday as a disturbance crosses Florida, with a general 1 to 3 inches and locally more, and the East Coast metro is under a Level 1 of 4 risk of flash flooding on both days. Forecasters note the heaviest totals depend on the system’s final track.',
          why: 'Don’t drive through water of unknown depth; flood damage to a car is a comprehensive claim, not collision ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Rainwater that rises into a home from flooded streets is generally a matter for a separate [flood policy](/en/flood-insurance-homestead-fl), which usually takes 30 days to start, so check what you have before the next storm.',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Also this week',
          text: 'The National Hurricane Center does not expect any tropical cyclone to form in the next seven days (8 a.m. Friday outlook). The National Flood Insurance Program remains authorized only through 11:59 p.m. on Dec. 11, 2026; if Congress lets it lapse, existing policies stay in force and valid claims are still paid, but FEMA would stop selling and renewing policies.',
        },
      ],
      extraSources: [NHC_TWO, FEMA_REAUTH],
    },
    es: {
      title:
        'Noticias de seguros de Florida, 30 de octubre de 2026: FEMA abre la ayuda para hogares en ocho condados del Panhandle tras el huracán Isaias, el estado informa rebajas de tarifas de seguro de vivienda en octubre y el aviso por inundación costera llega a un fin de semana lluvioso',
      metaTitle: 'Noticias de seguros 30/10/2026: ayuda Isaias, tarifas, lluvia | M&K',
      description:
        'FEMA aprueba ayuda para hogares en ocho condados tras Isaias, la OIR informa rebajas de tarifas de vivienda en octubre y se esperan inundación costera y lluvias fuertes.',
      ogAlt:
        'Una casa con una lona azul en el techo junto a un edificio de gobierno con un escudo con un corazón, una casa con una flecha hacia abajo sobre un documento y una nube de lluvia sobre una calle costera con poca agua y un carro',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios en el sur de Florida. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline: 'Actualización: FEMA aprueba la Asistencia Individual para los hogares de ocho condados del Panhandle afectados por el huracán Isaias',
          summary:
            'El **29 de octubre**, FEMA anunció que el Presidente amplió la declaración de desastre mayor de Florida por el huracán Isaias para incluir ayuda a personas y familias en los condados Bay, Escambia, Gulf, Holmes, Okaloosa, Santa Rosa, Walton y Washington. Hasta ahora la declaración solo cubría la Asistencia Pública, que reembolsa a los gobiernos locales la recogida de escombros y las reparaciones públicas. La Asistencia Individual puede incluir subvenciones para vivienda temporal y reparaciones del hogar, préstamos a bajo interés para pérdidas no aseguradas y otros programas de recuperación, y FEMA indica que se podrían añadir más zonas si las evaluaciones de daños lo justifican. Ningún condado del sur de Florida está en la lista.',
          why: 'FEMA pide a los afectados que primero presenten el reclamo a su aseguradora y luego soliciten en DisasterAssistance.gov, por teléfono al 1-800-621-3362 o en la app de FEMA, porque la ayuda federal no puede pagar pérdidas que ya cubre el seguro. Si tiene familia o propiedades en el Panhandle, guarde cada carta de pago o de negación; nuestra [lista para reclamos por huracán](/es/blog/hurricane-claim-checklist-florida) explica qué documentar.',
          sources: [FDEM_IA_RELEASE, FDEM_ISAIAS],
        },
        {
          headline: 'El estado dice que más de 824,000 propietarios en Florida reciben rebajas de tarifa en pólizas nuevas y renovaciones este mes',
          summary:
            'La Oficina de Regulación de Seguros de Florida (OIR) y el Director Financiero del estado informaron el **29 de octubre** que un grupo de solicitudes de tarifas de seguro de vivienda que entraron en vigor en octubre trae rebajas para más de 824,300 asegurados, la mayor de un 12.1%, que se aplican al emitir o renovar la póliza. La OIR dice que tiene más solicitudes de rebaja pendientes que entrarían en vigor en noviembre, diciembre y enero para unos 450,000 floridanos más. Según la agencia, desde enero de 2024 hay 48 compañías que han pedido bajar sus tarifas y 53 que han pedido no cambiarlas.',
          why: 'Un cambio de tarifa aprobado es un promedio entre todas las pólizas de una compañía, así que su renovación puede subir o bajar según el valor de su casa, los límites de cobertura, el deducible o la edad del techo. Lea el aviso de renovación línea por línea, compárelo con la página de declaraciones del año pasado y, si algo cambió y no lo entiende, pida una [revisión de su seguro de vivienda](/es/homeowners-insurance-florida-city).',
          sources: [OIR_HOME_RATES],
        },
        {
          headline: 'Actualización: el aviso por inundación costera en Miami-Dade y Broward se extiende hasta el sábado, con lluvias fuertes probables el domingo y el lunes',
          summary:
            'El Servicio Nacional de Meteorología (NWS) en Miami extendió hasta las **8 p.m. del sábado** el aviso por inundación costera moderada (Coastal Flood Advisory) en la costa de Miami-Dade y Broward, con agua en estacionamientos, parques y calles, y añadió un riesgo alto de corrientes de resaca desde el viernes en la noche hasta el domingo en la noche. La discusión del pronóstico de este viernes prevé que la lluvia aumente el sábado y llegue a su punto máximo el domingo y el lunes, cuando una perturbación cruce Florida, con entre 1 y 3 pulgadas en general y más en algunos puntos; el área metropolitana de la costa este tiene un riesgo nivel 1 de 4 de inundaciones repentinas ambos días. Los meteorólogos señalan que los mayores acumulados dependen de la trayectoria final del sistema.',
          why: 'No maneje por agua de profundidad desconocida; el daño por inundación en un carro es un reclamo de la cobertura comprensiva, no de colisión ([comprensiva vs. colisión](/es/blog/comprehensive-vs-collision-florida)). El agua de lluvia que entra en la casa desde calles inundadas por lo general corresponde a una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte, que normalmente tarda 30 días en empezar, así que revise lo que tiene antes de la próxima tormenta.',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'También esta semana',
          text: 'El Centro Nacional de Huracanes no prevé que se forme ningún ciclón tropical en los próximos siete días (pronóstico de las 8 a.m. del viernes). El Programa Nacional de Seguro contra Inundaciones (NFIP) sigue autorizado solo hasta las 11:59 p.m. del 11 de diciembre de 2026; si el Congreso lo deja vencer, las pólizas existentes siguen vigentes y los reclamos válidos se siguen pagando, pero FEMA dejaría de vender y renovar pólizas.',
        },
      ],
      extraSources: [NHC_TWO, FEMA_REAUTH],
    },
    ru: {
      title:
        'Страховые новости Флориды, 30 октября 2026: FEMA открыла помощь семьям в восьми округах Панхендла после урагана Isaias, штат сообщил о снижении тарифов на страховку жилья в октябре, а предупреждение о прибрежном подтоплении продлено на дождливые выходные',
      metaTitle: 'Страховые новости 30.10.2026: помощь после Isaias, тарифы | M&K',
      description:
        'FEMA одобрила помощь семьям в восьми округах после Isaias, OIR сообщила о снижении тарифов на страховку жилья, а на выходных — подтопление побережья и сильные дожди.',
      ogAlt:
        'Дом с синим брезентом на крыше рядом с государственным зданием со щитом и сердцем, дом со стрелкой вниз на документе и дождевая туча над прибрежной улицей с неглубокой водой и машиной',
      intro:
        'Три новости для владельцев жилья, водителей и малого бизнеса Южной Флориды. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: 'Обновление: FEMA одобрила индивидуальную помощь (Individual Assistance) семьям в восьми округах Панхендла, пострадавших от урагана Isaias',
          summary:
            '**29 октября** FEMA объявила, что президент дополнил декларацию о крупном стихийном бедствии во Флориде из-за урагана Isaias: теперь помощь доступна жителям и семьям округов Bay, Escambia, Gulf, Holmes, Okaloosa, Santa Rosa, Walton и Washington. До этого декларация включала только Public Assistance — компенсацию местным властям за вывоз мусора и ремонт общественных объектов. Индивидуальная помощь может включать гранты на временное жильё и ремонт дома, кредиты под низкий процент на незастрахованные убытки и другие программы восстановления; FEMA добавляет, что позже список могут расширить, если это подтвердит оценка ущерба. Округов Южной Флориды в списке нет.',
          why: 'FEMA просит пострадавших сначала подать претензию в свою страховую компанию, а затем обращаться на DisasterAssistance.gov, по телефону 1-800-621-3362 или через приложение FEMA: федеральная помощь не оплачивает то, что уже покрывает страховка. Если у вас родные или недвижимость в Панхендле, сохраняйте каждое письмо о выплате или отказе; что именно документировать, подскажет наш [чек-лист для претензии после урагана](/ru/blog/hurricane-claim-checklist-florida).',
          sources: [FDEM_IA_RELEASE, FDEM_ISAIAS],
        },
        {
          headline: 'Штат: более 824 000 владельцев жилья во Флориде получают сниженные тарифы на новые полисы и продления в этом месяце',
          summary:
            'Управление по регулированию страхования Флориды (OIR) и финансовый директор штата **29 октября** сообщили, что вступившие в силу в октябре заявки на тарифы по страховке жилья означают снижение для более чем 824 300 клиентов — максимум на 12,1% — при оформлении нового полиса или продлении. По словам OIR, на рассмотрении есть и другие заявки на снижение, которые вступят в силу в ноябре, декабре и январе ещё примерно для 450 000 жителей Флориды. По данным ведомства, с января 2024 года 48 компаний подали заявки на снижение тарифов, а 53 попросили оставить их без изменений.',
          why: 'Утверждённое изменение тарифа — это среднее по всем полисам компании, поэтому ваше продление всё равно может стать дороже или дешевле в зависимости от стоимости дома, лимитов покрытия, франшизы или возраста крыши. Внимательно прочитайте уведомление о продлении, сравните его с прошлогодней страницей деклараций (declarations page), а если что-то изменилось и непонятно почему, попросите [проверить вашу страховку жилья](/ru/homeowners-insurance-florida-city).',
          sources: [OIR_HOME_RATES],
        },
        {
          headline: 'Обновление: предупреждение о прибрежном подтоплении в Майами-Дейд и Броварде продлено до субботы, а в воскресенье и понедельник вероятны сильные дожди',
          summary:
            'Национальная метеослужба (NWS) в Майами продлила рекомендацию (Coastal Flood Advisory) из-за умеренного подтопления на побережье Майами-Дейд и Броварда до **20:00 субботы** — вода возможна на парковках, в парках и на дорогах, — а также объявила высокий риск обратных течений (rip currents) с вечера пятницы до вечера воскресенья. В пятничном прогнозе синоптики ожидают, что дожди усилятся в субботу и достигнут пика в воскресенье и понедельник, когда над Флоридой пройдёт атмосферное возмущение: в целом 1–3 дюйма осадков, местами больше, а для городов восточного побережья в оба дня объявлен риск внезапных паводков уровня 1 из 4. Сколько выпадет в итоге, зависит от того, по какой траектории пройдёт система.',
          why: 'Не въезжайте в воду неизвестной глубины: ущерб машине от наводнения — это претензия по comprehensive, а не по collision ([comprehensive и collision: в чём разница](/ru/blog/comprehensive-vs-collision-florida)). Дождевая вода, которая заходит в дом с затопленных улиц, как правило, относится к отдельному [полису от наводнения](/ru/flood-insurance-homestead-fl), который обычно начинает действовать через 30 дней, так что проверьте свою защиту до следующего шторма.',
          sources: [NWS_MFL_CFW, NWS_MFL_AFD],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Также на этой неделе',
          text: 'Национальный центр по ураганам не ожидает образования тропических циклонов в ближайшие семь дней (прогноз на 8:00 пятницы). Национальная программа страхования от наводнений (NFIP) по-прежнему действует только до 23:59 11 декабря 2026 года; если Конгресс не продлит её, действующие полисы сохранятся и обоснованные претензии будут оплачиваться, но FEMA перестанет продавать и продлевать полисы.',
        },
      ],
      extraSources: [NHC_TWO, FEMA_REAUTH],
    },
  },
};
