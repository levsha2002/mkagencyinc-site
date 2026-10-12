import type { NewsEdition, NewsSource } from '../types';

// Edition for Monday, Oct. 12, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const DFS_HUB: NewsSource = {
  name: 'Florida Department of Financial Services',
  date: '2026-10-11',
  url: 'https://myfloridacfo.com/news/pressreleases/press-release-details/2026/10/11/chief-financial-officer-blaise-ingoglia-opens-first-insurance-assistance-hub-following-hurricane-isaias',
  title: 'CFO Blaise Ingoglia Opens First Insurance Assistance Hub Following Hurricane Isaias',
};

const FDEM_ISAIAS: NewsSource = {
  name: 'Florida Division of Emergency Management',
  date: '2026-10-12',
  url: 'https://www.floridadisaster.org/disaster-updates/hurricane-isaias/',
  title: 'Hurricane Isaias — Insurance Assistance Hub locations',
};

const WJHG_HUB: NewsSource = {
  name: 'WJHG NewsChannel 7',
  date: '2026-10-11',
  url: 'https://www.wjhg.com/2026/10/11/insurance-assistance-hub-opens-destin-after-hurricane-isaias/',
  title: 'Insurance assistance hub opens in Destin after Hurricane Isaias',
};

const NHC_ADV15: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-10',
  url: 'https://www.nhc.noaa.gov/archive/2026/al09/al092026.public.015.shtml',
  title: 'Post-Tropical Cyclone Isaias Advisory Number 15',
};

const FS_627_4025: NewsSource = {
  name: 'The Florida Senate (Florida Statutes)',
  date: '2026-10-12',
  url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.4025',
  title: 'Section 627.4025, Florida Statutes: Residential coverage and hurricane coverage defined',
};

const MIAMI_DADE_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const SFWMD_TIDES: NewsSource = {
  name: 'South Florida Water Management District',
  date: '2026-08-04',
  url: 'https://www.sfwmd.gov/news-events/news/2026-king-tide-season-forecast',
  title: '2026 King Tide Season Forecast',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-10-12',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Atlantic Tropical Weather Outlook, 8 a.m. EDT Mon Oct 12, 2026',
};

export const edition: NewsEdition = {
  slug: '2026-10-12-dfs-hub-deductible-closes-king-tides',
  datePublished: '2026-10-12',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 12, 2026: Destin insurance hub opens, the hurricane-deductible window closes Tuesday, and South Florida’s next king tides approach',
      metaTitle: 'Insurance News Oct. 12, 2026: Destin Hub | M&K Agency',
      description:
        'Today: DFS opens an Isaias insurance assistance hub in Destin, Florida’s hurricane-deductible period ends early Tuesday, and Miami-Dade king tides return Oct. 24–30.',
      ogAlt: 'A Florida recovery desk, a policy deductible page and coastal high-tide water',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners as Panhandle recovery from Hurricane Isaias continues and the next coastal flood window nears. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline: 'State opens first Isaias insurance assistance hub in Destin',
          summary:
            'Chief Financial Officer Blaise Ingoglia opened the first Insurance Assistance Hub for Hurricane Isaias on Sunday, Oct. 11, in Destin — about 36 hours after landfall, which DFS called the fastest such hub after a Florida hurricane landfall. The hub is at Destin Parks & Recreation Morgan Sports Center, 4200 Indian Bayou Trail, Destin, with hours 9 a.m. to 4 p.m. CDT; DFS said it would be open again Monday, Oct. 12, and for several days, with insurer representatives and Division of Consumer Services staff on site to help with storm-damage claims. If you cannot visit, call 1-877-693-5236 (1-877-MY-FL-CFO). DFS also reminded residents about contractor and claims scams and pointed to the fraud hotline 1-800-378-0445 and FraudFreeFlorida.com.',
          why: 'Panhandle policyholders can get in-person help filing or following up on a claim. South Florida readers with family or rental property in the impact area can share the address and helpline; verify any contractor’s license before you sign.',
          sources: [DFS_HUB, FDEM_ISAIAS, WJHG_HUB],
        },
        {
          headline: 'Update: Isaias hurricane-deductible period ends early Tuesday',
          summary:
            'NHC Advisory 15 at 4 a.m. CDT on Oct. 10 reported Post-Tropical Cyclone Isaias and said there were no watches or warnings left in effect after the last storm-surge and tropical-storm warnings for Florida were discontinued. Under section 627.4025, Florida Statutes, the “hurricane” period for residential policies begins when a hurricane warning is issued for any part of Florida and ends 72 hours after the last hurricane watch or hurricane warning for any part of Florida ends. Counting from that Oct. 10 morning advisory, the Isaias hurricane-deductible window closes early Tuesday, Oct. 13 (about 4 a.m. CDT / 5 a.m. ET).',
          why: 'Damage tied to Isaias still falls under the hurricane deductible on your declarations page. A separate weather event after the window closes usually uses your regular deductible — check the policy wording with your agent if you are unsure.',
          sources: [NHC_ADV15, FS_627_4025],
        },
        {
          headline: 'Next Miami-Dade king tides: Oct. 24–30, with the year’s highest peak near Oct. 27',
          summary:
            'Miami-Dade County’s king-tide calendar lists Oct. 24–30 as the next coastal window after the Oct. 7–13 period, and marks it among the season’s highest predicted tides. The South Florida Water Management District’s 2026 forecast puts the annual maximum predicted peak for the east coast on Oct. 27. County guidance is unchanged: move cars to higher ground when you can, do not drive through floodwater, and rinse vehicles after saltwater contact. King-tide flooding can hit roads and low-lying blocks even without a named storm.',
          why: 'Comprehensive auto and homeowners policies often treat flood differently from wind or rain entering through a storm-damaged opening. If your driveway or street floods in prior king tides, review flood coverage before late October.',
          sources: [MIAMI_DADE_TIDES, SFWMD_TIDES],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Tropics check',
          text: 'NHC’s Monday 8 a.m. EDT outlook shows only a disorganized low a few hundred miles west of the Cabo Verde Islands, with a low 20% chance of forming over both the next 48 hours and the next 7 days. No Florida threat. Separately, OIR’s public catastrophe-reporting page still listed no aggregate Isaias claim totals as of this morning; DFS had said the mandatory insurer data call would start today, with results posted as they come in.',
        },
      ],
      extraSources: [NHC_TWO],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 12 de octubre de 2026: abre el centro de ayuda en Destin, el periodo del deducible por huracán termina el martes y se acercan las próximas king tides',
      metaTitle: 'Noticias de seguros, 12 oct. 2026: centro en Destin | M&K',
      description:
        'Hoy: el DFS abre un centro de asistencia por Isaías en Destin, el periodo del deducible por huracán termina temprano el martes y las king tides en Miami-Dade vuelven del 24 al 30 de octubre.',
      ogAlt: 'Un mostrador de recuperación, una página de deducible y marea alta en la costa',
      intro:
        'Tres novedades para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida, mientras sigue la recuperación en el Panhandle tras el huracán Isaías y se acerca la próxima ventana de inundación costera. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline: 'El estado abre el primer centro de asistencia de seguros por Isaías en Destin',
          summary:
            'El director financiero Blaise Ingoglia inauguró el domingo 11 de octubre el primer Insurance Assistance Hub por el huracán Isaías en Destin, unas 36 horas después del azote — el DFS lo describió como el más rápido tras un huracán que tocó tierra en Florida. El centro está en Destin Parks & Recreation Morgan Sports Center, 4200 Indian Bayou Trail, Destin, de 9 a.m. a 4 p.m. hora del Centro; el DFS indicó que abriría de nuevo el lunes 12 de octubre y varios días más, con representantes de aseguradoras y personal de Consumer Services para ayudar con reclamos por daños. Si no puede ir, llame al 1-877-693-5236 (1-877-MY-FL-CFO). El DFS también recordó las estafas de contratistas y reclamos, y apuntó a la línea contra el fraude 1-800-378-0445 y FraudFreeFlorida.com.',
          why: 'Los asegurados del Panhandle pueden recibir ayuda presencial para presentar o dar seguimiento a un reclamo. Quien tenga familia o una propiedad de alquiler en la zona afectada puede compartir la dirección y la línea de ayuda; verifique la licencia de cualquier contratista antes de firmar.',
          sources: [DFS_HUB, FDEM_ISAIAS, WJHG_HUB],
        },
        {
          headline: 'Actualización: el periodo del deducible por huracán de Isaías termina temprano el martes',
          summary:
            'El aviso 15 del NHC a las 4 a.m. hora del Centro del 10 de octubre reportó a Isaías como ciclón postropical y indicó que ya no había vigilancias ni avisos en vigor tras cancelar los últimos de marejada y de tormenta tropical para Florida. Según la sección 627.4025 de los Estatutos de Florida, el periodo de “huracán” en las pólizas residenciales comienza cuando se emite un aviso de huracán para cualquier parte de Florida y termina 72 horas después de que finalice la última vigilancia o aviso de huracán para cualquier parte del estado. Contando desde ese aviso de la mañana del 10 de octubre, la ventana del deducible por huracán de Isaías cierra temprano el martes 13 de octubre (cerca de las 4 a.m. hora del Centro / 5 a.m. hora del Este).',
          why: 'Los daños vinculados a Isaías siguen bajo el deducible por huracán de su página de declaraciones. Un evento meteorológico distinto después de esa ventana suele usar su deducible regular: consulte la póliza con su agente si tiene dudas.',
          sources: [NHC_ADV15, FS_627_4025],
        },
        {
          headline: 'Próximas king tides en Miami-Dade: 24–30 de octubre, con el pico anual cerca del 27',
          summary:
            'El calendario de king tides del condado de Miami-Dade marca el 24–30 de octubre como la siguiente ventana costera tras el periodo del 7–13 de octubre, y la incluye entre las mareas más altas previstas de la temporada. El pronóstico 2026 del South Florida Water Management District sitúa el pico máximo anual previsto en la costa este el 27 de octubre. Las recomendaciones del condado no cambian: mueva el auto a terreno más alto si puede, no conduzca por agua de inundación y enjuague el vehículo tras el agua salada. La inundación por king tide puede afectar calles y manzanas bajas aunque no haya tormenta con nombre.',
          why: 'Las pólizas de auto y de hogar suelen tratar la inundación de forma distinta al viento o a la lluvia que entra por una abertura causada por la tormenta. Si su entrada o calle se inunda en king tides anteriores, revise la cobertura de inundación antes de finales de octubre.',
          sources: [MIAMI_DADE_TIDES, SFWMD_TIDES],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Chequeo del trópico',
          text: 'El pronóstico del NHC del lunes a las 8 a.m. hora del Este muestra solo una baja desorganizada a unos cientos de millas al oeste de las islas de Cabo Verde, con una probabilidad baja del 20% de formarse tanto en las próximas 48 horas como en los próximos 7 días. Sin amenaza para Florida. Por separado, la página pública de reportes de catástrofe de la OIR aún no listaba totales agregados de reclamos por Isaías esta mañana; el DFS había dicho que la solicitud obligatoria de datos a las aseguradoras empezaría hoy, con resultados publicados a medida que lleguen.',
        },
      ],
      extraSources: [NHC_TWO],
    },
    ru: {
      title:
        'Страховые новости Флориды, 12 октября 2026: в Дестине открылся страховой хаб, ураганный период франшизы заканчивается во вторник, впереди следующие king tides',
      metaTitle: 'Страховые новости 12 окт. 2026: хаб в Дестине | M&K',
      description:
        'Сегодня: DFS открыл хаб помощи по «Исайасу» в Дестине, ураганный период франшизы заканчивается рано утром во вторник, а king tides в Майами-Дейд снова с 24 по 30 октября.',
      ogAlt: 'Стойка восстановления, страница франшизы полиса и высокая вода у берега',
      intro:
        'Три новости для владельцев жилья, водителей и малого бизнеса в Южной Флориде: на Panhandle идёт восстановление после урагана «Исайас», а впереди следующее окно прибрежных подтоплений. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline: 'Штат открыл первый страховой хаб помощи по «Исайасу» в Дестине',
          summary:
            'Финансовый директор штата Блейз Инголья в воскресенье, 11 октября, открыл в Дестине первый Insurance Assistance Hub по урагану «Исайас» — примерно через 36 часов после выхода на сушу; DFS назвал это самым быстрым таким хабом после урагана, вышедшего на берег Флориды. Адрес: Destin Parks & Recreation Morgan Sports Center, 4200 Indian Bayou Trail, Destin; часы 9:00–16:00 по центральному времени. DFS сообщил, что хаб снова откроется в понедельник, 12 октября, и проработает несколько дней: на месте представители страховщиков и сотрудники Division of Consumer Services помогают с заявлениями по ущербу от шторма. Если приехать нельзя, звоните 1-877-693-5236 (1-877-MY-FL-CFO). DFS также напомнил о мошенниках с ремонтом и убытками и указал на горячую линию 1-800-378-0445 и FraudFreeFlorida.com.',
          why: 'Жители Panhandle могут получить очную помощь с подачей или сопровождением заявления. Если у вас есть родственники или арендное жильё в зоне удара, передайте адрес и телефон горячей линии; перед подписью договора проверьте лицензию подрядчика.',
          sources: [DFS_HUB, FDEM_ISAIAS, WJHG_HUB],
        },
        {
          headline: 'Обновление: ураганный период франшизы по «Исайасу» заканчивается рано утром во вторник',
          summary:
            'В advisory № 15 NHC в 4:00 по центральному времени 10 октября «Исайас» уже был посттропическим циклоном, и для Флориды не осталось действующих watch/warning после снятия последних предупреждений о нагоне и тропическом шторме. По статье 627.4025 Законов Флориды «ураганный» период для жилых полисов начинается с hurricane warning для любой части штата и заканчивается через 72 часа после снятия последнего hurricane watch или hurricane warning для любой части Флориды. Отсчитывая от того утреннего advisory 10 октября, окно ураганной франшизы по «Исайасу» закрывается рано утром во вторник, 13 октября (около 4:00 CDT / 5:00 ET).',
          why: 'Ущерб, связанный с «Исайасом», по-прежнему идёт под ураганную франшизу с страницы деклараций. Отдельное погодное событие после закрытия окна обычно считается по обычной франшизе — уточните формулировки полиса у агента, если не уверены.',
          sources: [NHC_ADV15, FS_627_4025],
        },
        {
          headline: 'Следующие king tides в Майами-Дейд: 24–30 октября, годовой пик около 27-го',
          summary:
            'Календарь king tides округа Майами-Дейд указывает 24–30 октября как следующее прибрежное окно после периода 7–13 октября и относит его к самым высоким прогнозируемым приливам сезона. Прогноз South Florida Water Management District на 2026 год ставит годовой максимум на восточном побережье на 27 октября. Советы округа прежние: по возможности переставьте машину выше, не ездите по воде и сполосните авто после солёной воды. Подтопление от king tide может затронуть улицы и низины даже без именного шторма.',
          why: 'Авто- и домовладельческие полисы часто по-разному относятся к наводнению и к ветру или дождю, попавшему через проём от шторма. Если ваш подъезд или улица уже заливало в прошлые king tides, до конца октября проверьте покрытие от наводнения.',
          sources: [MIAMI_DADE_TIDES, SFWMD_TIDES],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Тропики',
          text: 'Утренний обзор NHC в понедельник в 8:00 ET показывает лишь неорганизованную ложбину в нескольких сотнях миль к западу от островов Кабо-Верде: низкая вероятность развития 20% и на 48 часов, и на 7 дней. Угрозы Флориде нет. Отдельно: на публичной странице catastrophe reporting OIR этим утром ещё не было сводных цифр по убыткам от «Исайаса»; DFS ранее сообщал, что обязательный data call страховщикам начинается сегодня, а результаты будут выкладывать по мере поступления.',
        },
      ],
      extraSources: [NHC_TWO],
    },
  },
};
