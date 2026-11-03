import type { NewsEdition, NewsSource } from '../types';

// Edition for Tuesday, Nov. 3, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const OIR_EXCESS: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-11-02',
  url: 'https://floir.gov/newsroom/archives/item-details/2026/11/02/commissioner-mike-yaworsky-secures--46-million-in-excess-profits-from-auto-insurer',
  title: 'Commissioner Mike Yaworsky Secures $46 Million in Excess Profits from Auto Insurer',
};

const FED_REG_FIRM: NewsSource = {
  name: 'Federal Register / FEMA',
  date: '2026-10-14',
  url: 'https://www.federalregister.gov/documents/2026/10/14/2026-20917/final-flood-hazard-determinations',
  title: 'Final Flood Hazard Determinations (91 FR 65238)',
};

const NWS_MFL_CFW: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-03',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=CFW&format=CI&version=1&glossary=0',
  title: 'Coastal Hazard Message, NWS Miami, 2:20 a.m. EST Tue Nov 3, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-03',
  url: 'https://forecast.weather.gov/product.php?format=CI&glossary=0&issuedby=MFL&product=AFD&site=NWS&version=1',
  title: 'Area Forecast Discussion, NWS Miami, 7:21 a.m. EST Tue Nov 3, 2026',
};

const MDC_KING: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-10-13',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

const CITIZENS_CAL: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-03-26',
  url: 'https://www.citizensfla.com/documents/20702/107636/2026+Personal+Lines+Calendar_Agent.pdf/bcfde5f2-5171-a05a-e6b6-3e22be318012',
  title: '2026 Personal Lines Depopulation Calendar (updated 03.26.2026)',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-03',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Tue Nov 3, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const OIR = [OIR_EXCESS];
const FIRM = [FED_REG_FIRM];
const WX = [NWS_MFL_CFW, NWS_MFL_AFD, MDC_KING];
const CIT = [CITIZENS_CAL];
const BOX = [NHC_TWO, FEMA_REAUTH];

export const edition: NewsEdition = {
  slug: '2026-11-03-auto-excess-profits-firms-flood',
  datePublished: '2026-11-03',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 3, 2026: an auto insurer must return about $46 million in excess profits, Miami-Dade flood maps take effect in February 2027, and coastal flooding risk continues Tuesday',
      metaTitle: 'Insurance News Nov. 3, 2026: Excess Profits, FIRMs, Flood | M&K',
      description:
        'OIR secures a statutory excess-profits refund from an auto insurer, FEMA sets Feb. 19, 2027 for new Miami-Dade flood maps, and today’s coastal flood and rain update.',
      ogAlt:
        'A car next to a stack of refund envelopes, a flood-zone map beside a house, and rain over coastal water with a tide gauge',
      intro:
        'Four updates for South Florida drivers, homeowners and small-business owners on Election Day Tuesday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'State regulator secures more than $46 million in excess profits that an auto insurer must return to Florida policyholders',
          summary:
            'On Nov. 2 the Florida Office of Insurance Regulation said Commissioner Mike Yaworsky secured **more than $46 million** in excess profits that an auto insurer must return to eligible policyholders **within 60 days**. The refund covers calendar and accident years **2023, 2024 and 2025**. Under Florida law (F.S. § 627.066), an insurer must return excess profits when underwriting gains for the three most recent calendar-accident years exceed the anticipated underwriting profit plus five percent of earned premiums for those years. The Office said it expects more auto excess-profit announcements and is reminding other auto insurers of the same statutory duty. The company will also try to locate policyholders whose checks are returned and will handle unclaimed funds under Chapter 717.',
          why: 'If you receive a refund check, keep it with your policy records and confirm the company has your current mailing address. A statutory excess-profits refund is not a rate change by itself; compare your declarations page at renewal and ask us to review your [car insurance](/en/car-insurance-florida-city).',
          sources: OIR,
        },
        {
          headline:
            'New FEMA flood maps for Miami-Dade County, Florida City and Homestead take effect Feb. 19, 2027',
          summary:
            'FEMA’s Final Flood Hazard Determinations notice in the Federal Register on **Oct. 14, 2026** (91 FR 65238, docket FEMA-B-2166) sets **February 19, 2027** as the effective date for new Flood Insurance Rate Maps (FIRMs) and, where applicable, the Flood Insurance Study for **Miami-Dade County and its incorporated areas**, including Florida City and Homestead. Until that date, the maps now in force remain official. The notice covers possible changes to Base Flood Elevations, Special Flood Hazard Area boundaries or zone designations, and regulatory floodways. Revised panels will be available at local map repositories and through FEMA’s Map Service Center (msc.fema.gov) by the effective date.',
          why: 'A zone change can affect whether a lender requires flood insurance and how a property is rated. NFIP coverage generally has a **30-day waiting period**, so check your address on the current and preliminary panels well before February and see our [flood insurance page](/en/flood-insurance-homestead-fl) and [king-tide flood guide](/en/blog/king-tides-flood-insurance-miami-dade).',
          sources: FIRM,
        },
        {
          headline:
            'Update: The Flood Watch has ended, but a Coastal Flood Advisory runs until 7 p.m. Tuesday and more heavy rain is possible today',
          summary:
            'As of Tuesday morning, NWS Miami’s active coastal product is a **Coastal Flood Advisory until 7 p.m. EST Tuesday** for coastal Miami-Dade, Broward and Palm Beach, with minor to moderate tidal flooding near high tide, large breaking waves up to about 6 feet, and a **high rip current risk** (through Wednesday morning for Miami-Dade/Broward and through Wednesday evening for Palm Beach). The earlier Flood Watch is no longer listed among active watches and warnings. The 7:21 a.m. Area Forecast Discussion still warns of another round of heavy showers and storms from late morning through evening, with the east-coast metro areas that saw significant impacts Monday again most vulnerable and isolated totals near **5 inches** possible where storms stall or train. Astronomical tides will climb again ahead of the **Nov. 9 new moon**; Miami-Dade lists the next king-tide window as **Nov. 6–9**.',
          why: 'Turn around at flooded roads: water damage to a car is usually a comprehensive claim ([comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida)). Rising water into a home or business is generally a separate [flood policy](/en/flood-insurance-homestead-fl) claim; take dated photos before cleanup and keep our [claim checklist](/en/blog/hurricane-claim-checklist-florida) handy.',
          sources: WX,
        },
        {
          headline:
            'Update: Citizens policyholders in the Nov. 17 takeout round have until Thursday, Nov. 5 to register a choice',
          summary:
            'Under Citizens’ 2026 Personal Lines Depopulation Calendar, the **choice deadline is Thursday, Nov. 5** for the **Nov. 17** assumption round. Policyholders who received takeout offers need to register a decision by that date. If no choice is registered, Citizens assigns the policy to a selecting takeout company (or to the company with the lowest estimated premium when more than one selected the policy). Packets typically include coverage worksheets and estimated premiums. The next calendar round after that has letters around Oct. 28 and a **Dec. 4** choice deadline for a Dec. 15 assumption.',
          why: 'Compare coverage limits, deductibles and exclusions—not only the estimated premium—before you accept or stay. We can walk through an offer with you using our [Citizens local-agent guide](/en/blog/citizens-property-insurance-local-agent) and, in English, the [take-out offer checklist](/en/blog/citizens-takeout-offer).',
          sources: CIT,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Hurricane Center’s 7 a.m. Tuesday outlook expects a low to form a few hundred miles south of Bermuda over the next day or so, with a low chance of subtropical development late this week (10% in 48 hours, 30% in seven days) as the system drifts and then moves generally eastward—no Florida watches or warnings. The National Flood Insurance Program remains authorized only through 11:59 p.m. on Dec. 11, 2026.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros de Florida, 3 de noviembre de 2026: una aseguradora de auto debe devolver unos $46 millones en ganancias en exceso, los mapas de inundación de Miami-Dade entran en vigor en febrero de 2027 y el riesgo de inundación costera sigue el martes',
      metaTitle: 'Noticias de seguros 3/11/2026: ganancias en exceso, FIRMs, inundación | M&K',
      description:
        'La OIR asegura una devolución legal de ganancias en exceso de una aseguradora de auto, FEMA fija el 19 de febrero de 2027 para los nuevos mapas de Miami-Dade y el aviso costero de hoy.',
      ogAlt:
        'Un carro junto a un montón de sobres de devolución, un mapa de zonas de inundación junto a una casa y lluvia sobre agua costera con un medidor de marea',
      intro:
        'Cuatro novedades para conductores, propietarios de vivienda y dueños de pequeños negocios en el sur de Florida, el martes del Día de las Elecciones. Cada una está resumida con nuestras propias palabras y enlazada a su fuente original.',
      items: [
        {
          headline:
            'El regulador estatal asegura más de $46 millones en ganancias en exceso que una aseguradora de auto debe devolver a los asegurados de Florida',
          summary:
            'El 2 de noviembre, la Oficina de Regulación de Seguros de Florida (OIR) indicó que el comisionado Mike Yaworsky aseguró **más de $46 millones** en ganancias en exceso que una aseguradora de auto debe devolver a los asegurados elegibles **en un plazo de 60 días**. La devolución cubre los años calendario y de accidentes **2023, 2024 y 2025**. Según la ley de Florida (F.S. § 627.066), una aseguradora debe devolver las ganancias en exceso cuando las ganancias de suscripción de los tres años calendario-accidente más recientes superan la ganancia de suscripción anticipada más el cinco por ciento de las primas devengadas de esos años. La Oficina anticipa más anuncios de este tipo para el ramo de auto y recuerda a otras aseguradoras la misma obligación. La compañía también intentará localizar a quienes les devuelvan el cheque y tramitará los fondos no reclamados conforme al Capítulo 717.',
          why: 'Si recibe un cheque de devolución, guárdelo con los registros de su póliza y confirme que la compañía tiene su dirección actual. Una devolución de ganancias en exceso por ley no es, por sí sola, un cambio de tarifa; compare su página de declaraciones en la renovación y pídanos revisar su [seguro de auto](/es/car-insurance-florida-city).',
          sources: OIR,
        },
        {
          headline:
            'Los nuevos mapas de inundación de FEMA para el condado de Miami-Dade, Florida City y Homestead entran en vigor el 19 de febrero de 2027',
          summary:
            'El aviso de Determinaciones Finales de Riesgo de Inundación de FEMA en el Federal Register del **14 de octubre de 2026** (91 FR 65238, docket FEMA-B-2166) fija el **19 de febrero de 2027** como fecha de vigencia de los nuevos Flood Insurance Rate Maps (FIRMs) y, cuando corresponda, del Flood Insurance Study para el **condado de Miami-Dade y sus áreas incorporadas**, incluidos Florida City y Homestead. Hasta esa fecha siguen vigentes los mapas actuales. El aviso contempla posibles cambios en elevaciones de inundación base, límites o designaciones de zonas de riesgo especial y cauces regulados. Los paneles revisados estarán en los repositorios locales de mapas y en el Map Service Center de FEMA (msc.fema.gov) para la fecha de vigencia.',
          why: 'Un cambio de zona puede afectar si el acreedor exige seguro de inundación y cómo se clasifica la propiedad. La cobertura del NFIP suele tener un **periodo de espera de 30 días**, así que revise su dirección en los paneles actuales y preliminares mucho antes de febrero y consulte nuestra [página de inundación](/es/flood-insurance-homestead-fl) y la [guía de mareas reales](/es/blog/king-tides-flood-insurance-miami-dade).',
          sources: FIRM,
        },
        {
          headline:
            'Actualización: terminó la vigilancia por inundaciones, pero el aviso por inundación costera sigue hasta las 7 p.m. del martes y hoy puede haber más lluvia fuerte',
          summary:
            'El martes por la mañana, el producto costero activo del NWS Miami es un **aviso por inundación costera (Coastal Flood Advisory) hasta las 7 p.m. EST del martes** para la costa de Miami-Dade, Broward y Palm Beach, con inundación mareal menor a moderada cerca de la marea alta, olas rompientes de hasta unos 6 pies y **alto riesgo de corrientes de resaca** (hasta el miércoles en la mañana en Miami-Dade/Broward y hasta el miércoles en la noche en Palm Beach). La vigilancia por inundaciones (Flood Watch) anterior ya no figura entre los avisos activos. El Area Forecast Discussion de las 7:21 a.m. advierte otra ronda de chubascos y tormentas fuertes desde media mañana hasta la noche; las zonas metropolitanas de la costa este que tuvieron impactos importantes el lunes vuelven a ser las más vulnerables, con totales aislados cercanos a **5 pulgadas** si las tormentas se estancan. Las mareas astronómicas subirán de nuevo antes de la **luna nueva del 9 de noviembre**; Miami-Dade indica la próxima ventana de mareas reales del **6 al 9 de noviembre**.',
          why: 'Si la calle está inundada, dé la vuelta: el daño por agua a un carro suele ser un reclamo de comprehensive ([comprehensive o collision](/es/blog/comprehensive-vs-collision-florida)). El agua que sube en una casa o negocio suele ser un reclamo de una [póliza de inundación](/es/flood-insurance-homestead-fl) aparte; tome fotos con fecha antes de limpiar y tenga a mano nuestra [lista para reclamos](/es/blog/hurricane-claim-checklist-florida).',
          sources: WX,
        },
        {
          headline:
            'Actualización: los asegurados de Citizens en la ronda de traspaso del 17 de noviembre tienen hasta el jueves 5 de noviembre para registrar su decisión',
          summary:
            'Según el calendario de depopulation de líneas personales de Citizens para 2026, la **fecha límite para elegir es el jueves 5 de noviembre** en la ronda de asunción del **17 de noviembre**. Quienes recibieron ofertas de traspaso (takeout) deben registrar su decisión para esa fecha. Si no lo hacen, Citizens asigna la póliza a una compañía de traspaso que la seleccionó (o a la de prima estimada más baja si varias la eligieron). Los paquetes suelen incluir hojas de cobertura y primas estimadas. La siguiente ronda del calendario tiene cartas alrededor del 28 de octubre y fecha límite de elección el **4 de diciembre** para una asunción el 15 de diciembre.',
          why: 'Compare límites, deducibles y exclusiones—no solo la prima estimada—antes de aceptar o quedarse. Podemos revisar una oferta con usted usando nuestra [guía del agente local de Citizens](/es/blog/citizens-property-insurance-local-agent).',
          sources: CIT,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'La perspectiva de las 7 a.m. del martes del Centro Nacional de Huracanes espera que se forme una baja a unos cientos de millas al sur de Bermudas en el próximo día aproximadamente, con baja probabilidad de desarrollo subtropical a finales de semana (10% en 48 horas, 30% en siete días) mientras el sistema deriva y luego se mueve en general hacia el este—sin vigilancias ni avisos para Florida. El Programa Nacional de Seguro contra Inundaciones sigue autorizado solo hasta las 11:59 p.m. del 11 de diciembre de 2026.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 3 ноября 2026: автостраховщик должен вернуть около $46 млн избыточной прибыли, карты наводнений Майами-Дейд вступают в силу в феврале 2027 года, во вторник сохраняется риск прибрежного подтопления',
      metaTitle: 'Страховые новости 3.11.2026: избыточная прибыль, FIRM, паводки | M&K',
      description:
        'OIR добилась обязательного возврата избыточной прибыли автостраховщиком, FEMA назначила 19 февраля 2027 для новых карт Майами-Дейд, и обновление по прибрежному паводку на сегодня.',
      ogAlt:
        'Машина рядом со стопкой конвертов с возвратом, карта зон наводнения рядом с домом и дождь над прибрежной водой с уровнемером прилива',
      intro:
        'Четыре новости для водителей, владельцев жилья и малого бизнеса на юге Флориды во вторник, в день выборов. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Регулятор штата добился возврата более $46 млн избыточной прибыли, которую автостраховщик обязан вернуть клиентам во Флориде',
          summary:
            '2 ноября Управление по регулированию страхования Флориды (OIR) сообщило, что комиссар Майк Яворски добился возврата **более $46 млн** избыточной прибыли: автостраховщик должен вернуть её подходящим страхователям **в течение 60 дней**. Возврат охватывает календарные и аварийные годы **2023, 2024 и 2025**. По закону Флориды (F.S. § 627.066) страховщик обязан вернуть избыточную прибыль, если андеррайтинговая прибыль за три последних календарно-аварийных года превышает ожидаемую андеррайтинговую прибыль плюс пять процентов заработанных премий за эти годы. Управление ожидает новые такие объявления по авто и напоминает другим автостраховщикам о той же обязанности. Компания также попытается найти клиентов, чьи чеки вернутся, и оформит невостребованные средства по главе 717.',
          why: 'Если вы получите чек на возврат, сохраните его с документами по полису и убедитесь, что у компании актуальный почтовый адрес. Возврат избыточной прибыли по закону сам по себе не меняет тариф; на продлении сверьте страницу деклараций и попросите нас проверить вашу [автостраховку](/ru/car-insurance-florida-city).',
          sources: OIR,
        },
        {
          headline:
            'Новые карты наводнений FEMA для округа Майами-Дейд, Флорида-Сити и Хомстеда вступают в силу 19 февраля 2027 года',
          summary:
            'Уведомление FEMA о окончательных определениях риска наводнения в Federal Register от **14 октября 2026 года** (91 FR 65238, docket FEMA-B-2166) назначает **19 февраля 2027 года** датой вступления в силу новых Flood Insurance Rate Maps (FIRMs) и, где применимо, Flood Insurance Study для **округа Майами-Дейд и входящих в него городов**, включая Флорида-Сити и Хомстед. До этой даты официальными остаются действующие сейчас карты. В уведомлении речь может идти об изменениях базовых отметок наводнения, границ или обозначений зон особого риска и регулируемых русел. Обновлённые панели будут в местных хранилищах карт и в Map Service Center FEMA (msc.fema.gov) к дате вступления в силу.',
          why: 'Смена зоны может повлиять на то, потребует ли кредитор страховку от наводнения, и на класс риска объекта. У покрытия NFIP обычно есть **ожидание 30 дней**, поэтому заранее сверьте адрес по текущим и предварительным панелям и посмотрите нашу [страницу о страховании от наводнения](/ru/flood-insurance-homestead-fl) и [гайд о королевских приливах](/ru/blog/king-tides-flood-insurance-miami-dade).',
          sources: FIRM,
        },
        {
          headline:
            'Обновление: Flood Watch снят, но Coastal Flood Advisory действует до 19:00 вторника, а сегодня снова возможны сильные дожди',
          summary:
            'Утром во вторник активный прибрежный продукт NWS Miami — **Coastal Flood Advisory до 19:00 EST вторника** для побережья Майами-Дейд, Бровард и Палм-Бич: слабое и умеренное подтопление у высокой воды, волны в зоне прибоя до примерно 6 футов и **высокий риск обратных течений** (до утра среды в Майами-Дейд/Бровард и до вечера среды в Палм-Бич). Прежний Flood Watch больше не числится среди действующих предупреждений. В Area Forecast Discussion в 7:21 утра снова ждут полосы сильных ливней и гроз со позднего утра до вечера; восточные пригороды, которые сильнее всего затронуло в понедельник, снова наиболее уязвимы, а при «застрявших» грозах возможны изолированные суммы около **5 дюймов**. Астрономические приливы снова поднимутся перед **новолунием 9 ноября**; Майами-Дейд указывает следующее окно королевских приливов **6–9 ноября**.',
          why: 'Не въезжайте на затопленную дорогу: ущерб машине от воды обычно идёт по comprehensive ([comprehensive и collision](/ru/blog/comprehensive-vs-collision-florida)). Поднявшуюся воду в доме или помещении бизнеса обычно покрывает отдельный [полис от наводнения](/ru/flood-insurance-homestead-fl); сделайте фото с датой до уборки и держите под рукой наш [чек-лист для претензии](/ru/blog/hurricane-claim-checklist-florida).',
          sources: WX,
        },
        {
          headline:
            'Обновление: клиенты Citizens в раунде передачи полисов 17 ноября должны зарегистрировать выбор до четверга, 5 ноября',
          summary:
            'По календарю depopulation личных линий Citizens на 2026 год **срок выбора — четверг, 5 ноября** для раунда принятия полисов **17 ноября**. Получившие предложения takeout должны зарегистрировать решение к этой дате. Если выбор не сделан, Citizens передаёт полис выбранной takeout-компании (или компании с самой низкой оценочной премией, если полис выбрали несколько). В пакетах обычно есть листы сравнения покрытия и оценочные премии. Следующий раунд календаря — письма около 28 октября и срок выбора **4 декабря** для принятия 15 декабря.',
          why: 'Сравнивайте лимиты, франшизы и исключения — не только оценочную премию — прежде чем соглашаться или оставаться. Мы можем разобрать предложение вместе с вами по нашему [гайду местного агента Citizens](/ru/blog/citizens-property-insurance-local-agent).',
          sources: CIT,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Прогноз Национального центра по ураганам на 7:00 вторника: в ближайшие сутки может образоваться область низкого давления в нескольких сотнях миль южнее Бермуд, с низкой вероятностью субтропического развития к концу недели (10% за 48 часов, 30% за семь дней), пока система дрейфует и затем уходит в целом на восток — без предупреждений для Флориды. Национальная программа страхования от наводнений (NFIP) продлена только до 23:59 11 декабря 2026 года.',
        },
      ],
      extraSources: BOX,
    },
  },
};
