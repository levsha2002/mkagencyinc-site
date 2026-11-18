import type { NewsEdition, NewsSource } from '../types';

// Edition for Wednesday, Nov. 18, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const NWS_MFL_PNS: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-18',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=PNS&format=txt&version=1&glossary=0',
  title: 'Public Information Statement: preliminary 24-hour rainfall totals, 8:27 a.m. EST Wed Nov 18, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-18',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 6:20 a.m. EST Wed Nov 18, 2026',
};

const CBS_FLOOD: NewsSource = {
  name: 'CBS News Miami',
  date: '2026-11-18',
  url: 'https://www.cbsnews.com/miami/news/south-florida-flooding-broward-miami-dade-roads-closed-november-2026/',
  title: 'Roof collapses at Hollywood synagogue due to heavy rain; flooding forces officials to close Broward schools Wednesday',
};

const SENATE_BOYD: NewsSource = {
  name: 'The Florida Senate',
  date: '2026-11-17',
  url: 'https://www.flsenate.gov/PublishedContent/Offices/President/11_17_26_Senator_Jim_Boyd_Elected_Senate_President.pdf',
  title: 'Senator Jim Boyd Unanimously Elected Senate President (PDF)',
};

const CBS_LEG: NewsSource = {
  name: 'CBS News Miami / News Service of Florida',
  date: '2026-11-17',
  url: 'https://www.cbsnews.com/miami/news/florida-legislature-organizational-session-garrison-boyd-affordability-ai-amendment-3/',
  title: 'Florida Legislature opens new term: House Speaker Sam Garrison and Senate President Jim Boyd',
};

const MDC_TOWING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-11-17',
  url: 'https://www.miamidade.gov/govaction/matter.asp?file=true&matter=261990&yearFolder=Y2026',
  title: 'File 261990: Ordinance relating to non-consent towing, recovery, storage and immobilization (agenda item 4K, Nov. 17, 2026)',
};

const MDC_FLOODMAPS: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-11-17',
  url: 'https://www.miamidade.gov/govaction/matter.asp?file=true&matter=261940&yearFolder=Y2026',
  title: 'File 261940: Ordinance related to floodplain regulations (agenda item 4A, first reading Nov. 17, 2026)',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-18',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Wed Nov 18, 2026',
};

const WX = [NWS_MFL_PNS, NWS_MFL_AFD, CBS_FLOOD];
const LEG = [SENATE_BOYD, CBS_LEG];
const TOW = [MDC_TOWING];
const BOX = [MDC_FLOODMAPS, FEMA_REAUTH, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-18-flash-flooding-legislature-organizes-towing-rules',
  datePublished: '2026-11-18',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 18, 2026: up to a foot of rain floods parts of Broward and northeast Miami-Dade with more possible through Thursday, the Legislature starts its new term, and Miami-Dade weighs changes to towing rules',
      metaTitle: 'Insurance News Nov. 18, 2026: Flash Flooding, Legislature, Towing | M&K',
      description:
        'NWS Miami reports over 12 inches of rain near Plantation as the Flood Watch continues, new legislative leaders take office, and Miami-Dade files an ordinance on non-consent towing charges.',
      ogAlt:
        'A car and a house in floodwater under a heavy rain cloud, a capitol dome with a gavel, and a tow truck with a parking sign',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Wednesday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: overnight flash flooding drops up to 12 inches of rain in parts of Broward and over 5 inches in northeast Miami-Dade, and the Flood Watch runs through Thursday evening',
          summary:
            'NWS Miami’s preliminary 24-hour totals at 8 a.m. Wednesday show **12.16 inches south of Plantation** and more than **10 inches near Hollywood and Lauderhill**; in Miami-Dade, the highest report was **5.30 inches near Carol City**, while far south Miami-Dade saw about 2 inches. CBS News Miami reports that hundreds of drivers were stranded in floodwater, Broward County Public Schools closed for the day, and part of a synagogue roof collapsed in Hollywood with no injuries reported. Forecasters say flash flooding is ongoing in parts of Southeast Florida, the **Flood Watch remains in effect through Thursday evening**, and another 2 to 4 inches is expected in most areas, with a heavy-rain chance lingering into Friday before drier air arrives this weekend.',
          why: 'If water got into your home or car, take dated photos and videos before cleanup, keep damaged items and receipts, and report the claim promptly. Homeowners policies generally exclude flood, which is covered by a separate flood policy (NFIP policies usually start after a 30-day waiting period), and flood damage to a car is covered only with comprehensive coverage; do not try to start a car that sat in deep water. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida), [flood insurance](/en/flood-insurance-homestead-fl) and [buying a used car after floods](/en/blog/flood-damaged-used-car-florida).',
          sources: WX,
        },
        {
          headline:
            'New: Florida Legislature organizes for 2026–2028 with Jim Boyd as Senate President, Sam Garrison as House Speaker and Miami’s Ana Maria Rodriguez as Senate President Pro Tempore',
          summary:
            'At Tuesday’s Organization Session, senators unanimously elected **Jim Boyd** (R-Bradenton) Senate President and **Ana Maria Rodriguez** (R-Miami) President Pro Tempore, and the House unanimously elected **Sam Garrison** (R-Fleming Island) Speaker. In his speech, Boyd said property insurance still drives up the cost of housing and promised to keep looking for more choices for homeowners; he also noted that, under Amendment 3, the homestead exemption rises from **$50,000 to $150,000 on Jan. 1** and to $250,000 in 2028. Garrison called Amendment 3 “the biggest fiscal challenge” the state has faced in a generation. The 2027 Regular Session convenes **March 2, 2027**.',
          why: 'New insurance and property-tax bills will be filed ahead of the March session, so rules for home and auto coverage could change again in 2027; we will follow them here. The homestead exemption affects your property tax bill, not your insurance premium, but if both are paid through your mortgage escrow, your monthly payment can change after the lender’s annual review. See [what changes in January 2027](/en/blog/florida-insurance-changes-january-2027) and our [year-end renewal checklist](/en/blog/year-end-homeowners-renewal-checklist-florida).',
          sources: LEG,
        },
        {
          headline:
            'New: Miami-Dade ordinance would change the rules for towing cars from private property without the owner’s consent',
          summary:
            'An ordinance sponsored by Commission Chairman Anthony Rodriguez (File 261990) was on the Nov. 17 commission agenda for first reading. It would extend the county’s **automatic annual inflation adjustment** of maximum towing rates, which already applies to police-directed tows, to **non-consent tows from private property**, allow a **dolly fee** on private-property tows, let the commission authorize **temporary fuel surcharges**, and let towers pass **credit card processing charges** on to the vehicle owner. Property owners could also sign tow requests electronically. The county record lists a public hearing before the Intergovernmental and Economic Impact Committee, tentatively on **Feb. 3, 2027**; if adopted, it would take effect 10 days after enactment unless vetoed.',
          why: 'Nothing changes yet, and the county’s maximum rates for non-consent tows still apply. Read parking signs in plazas and apartment lots, ask for an itemized receipt if your car is towed, and check whether your auto policy includes optional towing and labor (roadside) coverage and what it pays for. See [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida) and [car insurance in Florida City](/en/car-insurance-florida-city).',
          sources: TOW,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'Miami-Dade’s floodplain ordinance adopting FEMA’s new flood maps (File 261940, effective maps Feb. 19, 2027) is now listed for a committee public hearing, tentatively Feb. 2, 2027; the final action on the sidewalk delivery-robot ordinance (File 261932) is not yet posted in the county record. The National Flood Insurance Program is authorized through **11:59 p.m. Dec. 11, 2026**, 23 days from today. National Hurricane Center, 7 a.m. Wednesday: a non-tropical low may form near the northern Bahamas this weekend, with a low (20%) chance of subtropical development over 7 days.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 18 de noviembre de 2026: hasta un pie de lluvia inunda partes de Broward y el noreste de Miami-Dade, con más lluvia posible hasta el jueves; la Legislatura inicia su nuevo período y Miami-Dade estudia cambios en las reglas de remolque',
      metaTitle: 'Noticias 18 nov. 2026: inundaciones, Legislatura, remolques | M&K',
      description:
        'NWS Miami reporta más de 12 pulgadas de lluvia cerca de Plantation mientras sigue la vigilancia de inundaciones, asumen los nuevos líderes legislativos y Miami-Dade presenta una ordenanza sobre cargos de remolque sin consentimiento.',
      ogAlt:
        'Un auto y una casa en agua de inundación bajo una nube de lluvia intensa, la cúpula de un capitolio con un mazo, y una grúa con una señal de estacionamiento',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este miércoles. Cada noticia está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: inundaciones repentinas durante la noche dejan hasta 12 pulgadas de lluvia en partes de Broward y más de 5 en el noreste de Miami-Dade; la vigilancia de inundaciones sigue hasta el jueves por la noche',
          summary:
            'Los totales preliminares de 24 horas de NWS Miami a las 8 a. m. del miércoles muestran **12,16 pulgadas al sur de Plantation** y más de **10 pulgadas cerca de Hollywood y Lauderhill**; en Miami-Dade, el registro más alto fue de **5,30 pulgadas cerca de Carol City**, mientras que en el extremo sur del condado cayeron unas 2 pulgadas. CBS News Miami informa que cientos de conductores quedaron atrapados en el agua, las escuelas públicas de Broward cerraron por el día y parte del techo de una sinagoga se derrumbó en Hollywood, sin heridos reportados. Los meteorólogos indican que hay inundaciones repentinas en curso en partes del sureste de Florida, que la **vigilancia de inundaciones sigue vigente hasta el jueves por la noche** y que se esperan otras 2 a 4 pulgadas en la mayoría de las zonas, con posibilidad de lluvia fuerte todavía el viernes antes de que llegue aire más seco este fin de semana.',
          why: 'Si entró agua en su casa o en su auto, tome fotos y videos con fecha antes de limpiar, guarde los objetos dañados y los recibos, y reporte el reclamo cuanto antes. Las pólizas de vivienda por lo general excluyen las inundaciones, que se cubren con una póliza de inundación aparte (las del NFIP suelen empezar tras un período de espera de 30 días), y los daños por inundación a un auto solo se cubren con cobertura amplia (comprehensive); no intente encender un auto que estuvo en agua profunda. Vea [comprehensive vs. collision](/es/blog/comprehensive-vs-collision-florida), [seguro contra inundaciones](/es/flood-insurance-homestead-fl) y [comprar un auto usado después de inundaciones](/es/blog/flood-damaged-used-car-florida).',
          sources: WX,
        },
        {
          headline:
            'Nuevo: la Legislatura de Florida se organiza para 2026–2028 con Jim Boyd como presidente del Senado, Sam Garrison como presidente de la Cámara y Ana María Rodríguez, de Miami, como presidenta pro tempore del Senado',
          summary:
            'En la sesión de organización del martes, los senadores eligieron por unanimidad a **Jim Boyd** (R-Bradenton) como presidente del Senado y a **Ana María Rodríguez** (R-Miami) como presidenta pro tempore, y la Cámara eligió por unanimidad a **Sam Garrison** (R-Fleming Island) como presidente. En su discurso, Boyd dijo que el seguro de propiedad sigue encareciendo la vivienda y prometió seguir buscando más opciones para los propietarios; también recordó que, por la Enmienda 3, la exención de homestead sube de **$50,000 a $150,000 el 1 de enero** y a $250,000 en 2028. Garrison calificó la Enmienda 3 como “el mayor desafío fiscal” del estado en una generación. La Sesión Ordinaria de 2027 comienza el **2 de marzo de 2027**.',
          why: 'Antes de la sesión de marzo se presentarán nuevos proyectos sobre seguros e impuestos a la propiedad, así que las reglas de los seguros de vivienda y de auto podrían cambiar otra vez en 2027; los seguiremos aquí. La exención de homestead afecta su factura de impuestos a la propiedad, no la prima de su seguro, pero si ambos se pagan a través del escrow de su hipoteca, su pago mensual puede cambiar después de la revisión anual del prestamista. Vea [qué cambia en enero de 2027](/es/blog/florida-insurance-changes-january-2027) y nuestra [lista de renovación de fin de año](/es/blog/year-end-homeowners-renewal-checklist-florida).',
          sources: LEG,
        },
        {
          headline:
            'Nuevo: una ordenanza de Miami-Dade cambiaría las reglas para remolcar autos de propiedades privadas sin el consentimiento del dueño',
          summary:
            'Una ordenanza patrocinada por el presidente de la Comisión, Anthony Rodríguez (expediente 261990), estaba en la agenda de la Comisión del 17 de noviembre para primera lectura. Extendería el **ajuste anual automático por inflación** de las tarifas máximas de remolque, que ya se aplica a los remolques ordenados por la policía, a los **remolques sin consentimiento desde propiedades privadas**; permitiría cobrar un **cargo por plataforma rodante (dolly)** en esos remolques; autorizaría a la Comisión a aprobar **recargos temporales por combustible**, y dejaría que las empresas de remolque trasladen al dueño del vehículo los **cargos por pago con tarjeta de crédito**. Los dueños de propiedades también podrían firmar las solicitudes de remolque de forma electrónica. El registro del condado indica una audiencia pública ante el Comité de Impacto Intergubernamental y Económico, tentativamente el **3 de febrero de 2027**; si se aprueba, entraría en vigor 10 días después de su promulgación, salvo veto.',
          why: 'Por ahora no cambia nada y siguen vigentes las tarifas máximas del condado para remolques sin consentimiento. Lea los letreros de estacionamiento en plazas y complejos de apartamentos, pida un recibo detallado si le remolcan el auto y revise si su póliza de auto incluye la cobertura opcional de remolque y asistencia en carretera, y qué paga. Vea [comprehensive vs. collision](/es/blog/comprehensive-vs-collision-florida) y [seguro de carro en Florida City](/es/seguro-de-carro-florida-city).',
          sources: TOW,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'La ordenanza de Miami-Dade que adopta los nuevos mapas de inundación de FEMA (expediente 261940; los mapas entran en vigor el 19 de febrero de 2027) figura ahora para una audiencia pública en comité, tentativamente el 2 de febrero de 2027; la decisión final sobre la ordenanza de robots de reparto en las aceras (expediente 261932) todavía no aparece en el registro del condado. El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p. m. del 11 de diciembre de 2026**, dentro de 23 días. Centro Nacional de Huracanes, 7 a. m. del miércoles: podría formarse una baja no tropical cerca del norte de las Bahamas este fin de semana, con baja probabilidad (20 %) de desarrollo subtropical en 7 días.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Новости страхования во Флориде, 18 ноября 2026 г.: до фута осадков затопило часть Бровард и северо-восток Майами-Дейд, дожди возможны до четверга; Законодательное собрание начало новый срок, а Майами-Дейд рассматривает изменения правил эвакуации машин',
      metaTitle: 'Новости 18 нояб. 2026: наводнения, Законодательное собрание, эвакуаторы | M&K',
      description:
        'NWS Miami сообщает о более чем 12 дюймах осадков у Плантейшена, режим Flood Watch продолжается; к работе приступили новые лидеры Законодательного собрания, а в Майами-Дейд внесён проект о платах за эвакуацию машин без согласия владельца.',
      ogAlt:
        'Машина и дом в воде под тяжёлой дождевой тучей, купол капитолия с судейским молотком и эвакуатор у знака парковки',
      intro:
        'Три новости для владельцев жилья, водителей и владельцев малого бизнеса на юге Флориды в эту среду. Каждая изложена нашими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: ночные внезапные наводнения — до 12 дюймов осадков в части Бровард и более 5 дюймов на северо-востоке Майами-Дейд; Flood Watch действует до вечера четверга',
          summary:
            'По предварительным данным NWS Miami за 24 часа на 8:00 среды, **к югу от Плантейшена выпало 12,16 дюйма**, а у **Голливуда и Лодерхилла — более 10 дюймов**; в Майами-Дейд максимум — **5,30 дюйма у Кэрол-Сити**, на крайнем юге округа — около 2 дюймов. По данным CBS News Miami, сотни водителей застряли в воде, государственные школы Бровард в среду закрыты, а в Голливуде частично обрушилась крыша синагоги, пострадавших нет. Синоптики сообщают, что внезапные наводнения в части Юго-Восточной Флориды продолжаются, **Flood Watch действует до вечера четверга**, в большинстве районов ожидается ещё 2–4 дюйма, а сильный дождь возможен и в пятницу, прежде чем на выходных придёт более сухой воздух.',
          why: 'Если вода попала в дом или машину, до уборки сделайте фото и видео с датой, сохраните повреждённые вещи и чеки и как можно скорее заявите убыток. Полисы на дом, как правило, не покрывают наводнение — для этого нужен отдельный полис (полисы NFIP обычно вступают в силу после 30-дневного ожидания), а ущерб машине от воды покрывается только при наличии comprehensive; не пытайтесь заводить машину, которая стояла в глубокой воде. См. [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida), [страхование от наводнения](/ru/flood-insurance-homestead-fl) и [покупка подержанной машины после наводнений](/ru/blog/flood-damaged-used-car-florida).',
          sources: WX,
        },
        {
          headline:
            'Новое: Законодательное собрание Флориды сформировало руководство на 2026–2028 гг.: Джим Бойд — председатель Сената, Сэм Гаррисон — спикер Палаты, Ана Мария Родригес из Майами — председатель Сената pro tempore',
          summary:
            'На организационной сессии во вторник сенаторы единогласно избрали **Джима Бойда** (республиканец, Брейдентон) председателем Сената, а **Ану Марию Родригес** (республиканка, Майами) — председателем pro tempore; Палата представителей единогласно избрала спикером **Сэма Гаррисона** (республиканец, Флеминг-Айленд). В своей речи Бойд сказал, что страхование имущества по-прежнему удорожает жильё, и пообещал и дальше добиваться большего выбора для домовладельцев; он также напомнил, что по Поправке 3 льгота homestead вырастет **с $50 000 до $150 000 с 1 января**, а в 2028 году — до $250 000. Гаррисон назвал Поправку 3 «крупнейшим бюджетным вызовом» для штата за целое поколение. Очередная сессия 2027 года открывается **2 марта 2027 г.**',
          why: 'К мартовской сессии внесут новые законопроекты о страховании и налоге на недвижимость, так что правила страхования жилья и машин в 2027 году могут снова измениться — мы будем за этим следить. Льгота homestead влияет на налог на недвижимость, а не на страховую премию, но если и налог, и страховка оплачиваются через эскроу ипотеки, ежемесячный платёж может измениться после ежегодного пересчёта у кредитора. См. [что меняется в январе 2027 года](/ru/blog/florida-insurance-changes-january-2027) и наш [чек-лист продления в конце года](/ru/blog/year-end-homeowners-renewal-checklist-florida).',
          sources: LEG,
        },
        {
          headline:
            'Новое: проект постановления Майами-Дейд изменит правила эвакуации машин с частной территории без согласия владельца',
          summary:
            'Проект постановления председателя комиссии Энтони Родригеса (дело 261990) был включён в повестку заседания комиссии 17 ноября для первого чтения. Он распространит **ежегодную автоматическую индексацию на инфляцию** предельных тарифов на эвакуацию, которая уже действует для эвакуации по распоряжению полиции, на **эвакуацию с частной территории без согласия владельца**, разрешит брать **плату за подкатную тележку (dolly)** при такой эвакуации, позволит комиссии вводить **временные топливные надбавки** и разрешит эвакуаторам перекладывать на владельца машины **комиссию за оплату кредитной картой**. Владельцы территории также смогут подписывать заявки на эвакуацию электронно. В реестре округа указано публичное слушание в Комитете по межправительственному и экономическому влиянию, предварительно **3 февраля 2027 г.**; в случае принятия постановление вступит в силу через 10 дней, если мэр не наложит вето.',
          why: 'Пока ничего не меняется, и действуют предельные тарифы округа на эвакуацию без согласия владельца. Читайте знаки парковки у торговых центров и жилых комплексов, требуйте подробный чек, если машину эвакуировали, и проверьте, есть ли в вашем автополисе дополнительное покрытие буксировки и помощи на дороге (towing and labor) и что оно оплачивает. См. [comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida) и [автострахование во Флорида-Сити](/ru/car-insurance-florida-city).',
          sources: TOW,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Постановление Майами-Дейд о принятии новых карт зон затопления FEMA (дело 261940; карты вступают в силу 19 февраля 2027 г.) теперь назначено на публичное слушание в комитете, предварительно 2 февраля 2027 г.; окончательное решение по правилам для роботов-доставщиков на тротуарах (дело 261932) в реестре округа пока не опубликовано. Национальная программа страхования от наводнений (NFIP) действует **до 23:59 11 декабря 2026 г.**, через 23 дня. Национальный центр ураганов, 7:00 среды: на выходных у северных Багам может сформироваться нетропическая депрессия, вероятность субтропического развития за 7 дней низкая (20%).',
        },
      ],
      extraSources: BOX,
    },
  },
};
