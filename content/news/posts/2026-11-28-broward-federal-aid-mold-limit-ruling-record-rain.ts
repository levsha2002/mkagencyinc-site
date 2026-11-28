import type { NewsEdition, NewsSource } from '../types';

// Edition for Saturday, Nov. 28, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const FEMA_4957_RELEASE: NewsSource = {
  name: 'FEMA',
  date: '2026-11-27',
  url: 'https://www.fema.gov/press-release/20261127/president-donald-j-trump-approves-major-disaster-declaration-florida',
  title: 'President Donald J. Trump Approves Major Disaster Declaration for Florida (release HQ-26-181)',
};

const FEMA_4957_PAGE: NewsSource = {
  name: 'FEMA',
  date: '2026-11-26',
  url: 'https://www.fema.gov/disaster/4957',
  title: 'Florida Severe Storms and Flooding (DR-4957): incident period and declaration date',
};

const OPENFEMA_4957: NewsSource = {
  name: 'FEMA (OpenFEMA declarations data)',
  date: '2026-11-28',
  url: 'https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$filter=disasterNumber%20eq%204957',
  title: 'Disaster Declarations Summaries, DR-4957: designated counties and last day to apply for individual assistance',
};

const DCA3_OPINION: NewsSource = {
  name: 'Florida Third District Court of Appeal',
  date: '2026-11-25',
  url: 'https://flcourts-media.flcourts.gov/content/download/2498670/opinion/Opinion_2025-1166.pdf',
  title: 'Opinion in case No. 3D25-1166 (appeal from Miami-Dade County Court), filed Nov. 25, 2026',
};

const NWS_RER_MIA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-26',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MIA&product=RER&format=txt&version=1&glossary=0',
  title: 'Record Event Report: record daily rainfall set at Miami (Nov. 25)',
};

const NWS_RER_FLL: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-26',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=FLL&product=RER&format=txt&version=1&glossary=0',
  title: 'Record Event Report: record daily rainfall set at Fort Lauderdale (Nov. 25)',
};

const NWS_CLI_FLL: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-28',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=FLL&product=CLI&format=txt&version=1&glossary=0',
  title: 'Fort Lauderdale Climate Summary for Nov. 27, 2026',
};

const NWS_CLI_MIA: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-28',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MIA&product=CLI&format=txt&version=1&glossary=0',
  title: 'Miami Climate Summary for Nov. 27, 2026',
};

const NWS_MFL_AFD: NewsSource = {
  name: 'National Weather Service Miami',
  date: '2026-11-28',
  url: 'https://forecast.weather.gov/product.php?site=MFL&issuedby=MFL&product=AFD&format=txt&version=1&glossary=0',
  title: 'Area Forecast Discussion, NWS Miami, 5:56 a.m. EST Sat Nov 28, 2026',
};

const FEMA_REAUTH: NewsSource = {
  name: 'FEMA',
  date: '2026-09-28',
  url: 'https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization',
  title: 'Congressional Reauthorization for the National Flood Insurance Program',
};

const NHC_TWO: NewsSource = {
  name: 'National Hurricane Center',
  date: '2026-11-28',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 7 a.m. EST Sat Nov 28, 2026',
};

const AID = [FEMA_4957_RELEASE, FEMA_4957_PAGE, OPENFEMA_4957];
const COURT = [DCA3_OPINION];
const RAIN = [NWS_RER_MIA, NWS_RER_FLL, NWS_CLI_FLL, NWS_CLI_MIA, NWS_MFL_AFD];
const BOX = [FEMA_REAUTH, NHC_TWO];

export const edition: NewsEdition = {
  slug: '2026-11-28-broward-federal-aid-mold-limit-ruling-record-rain',
  datePublished: '2026-11-28',
  translations: {
    en: {
      title:
        'Florida insurance news, Nov. 28, 2026: Broward households can now apply for federal flood aid, a Miami appeals court rules mold coverage can’t raise a water damage cap, and Miami and Fort Lauderdale set rainfall records',
      metaTitle: 'Insurance News Nov. 28, 2026: Broward Aid, Mold Ruling | M&K',
      description:
        'FEMA opens individual aid to Broward for the mid-November floods, a Third DCA ruling on mold and water damage limits, and record rain at Miami and Fort Lauderdale.',
      ogAlt:
        'A columned government building with a house and a document with a green check, a gavel above a dripping air-conditioning unit, and a rain cloud over a full rain gauge next to a palm',
      intro:
        'Three updates for South Florida homeowners, drivers and small-business owners this Saturday. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Update: a second federal disaster declaration opens FEMA individual assistance to Broward for the flooding that began Nov. 16',
          summary:
            'FEMA announced on **Nov. 27** that the President approved a **second major disaster declaration for Florida (DR-4957)**, dated **Nov. 26**, for severe storms and flooding **from Nov. 16 and continuing**. **Individual assistance is open in Broward and Brevard counties** and can include grants for temporary housing and home repairs, loans for uninsured property losses and other help. Local governments and certain nonprofits in Brevard, Broward, Flagler, Indian River, Orange, Putnam, Seminole and Volusia can get federal help with emergency protective measures, limited to direct federal assistance. **Miami-Dade is not on the list for now**; FEMA says more areas may be added if damage assessments warrant it, and FEMA’s declaration data shows **Jan. 25, 2027** as the last day to apply under DR-4957.',
          why: 'FEMA says to **file with your insurance company first**, then apply at DisasterAssistance.gov, in the FEMA app or at 1-800-621-3362, because FEMA can’t pay for losses your insurance already covers. Keep your claim number, the adjuster’s letters and any denial or settlement letter, since FEMA may ask for them. See [the storm claim checklist](/en/blog/hurricane-claim-checklist-florida), [homeowners insurance in Broward County](/en/homeowners-insurance-broward-county-fl) and [flood insurance in Homestead](/en/flood-insurance-homestead-fl).',
          sources: AID,
        },
        {
          headline:
            'New: Miami appeals court says extra mold coverage can’t raise the cap on a limited water damage endorsement',
          summary:
            'On **Nov. 25** the **Third District Court of Appeal**, which hears appeals from Miami-Dade, reversed a county court judgment that had given a homeowner an **extra $10,000 for mold**. The homeowner had a **limited water damage endorsement** covering water leaking from an air-conditioning system, with a **$10,000 limit** that the insurer had already paid, and the policy also offered up to $10,000 of additional mold coverage; both provisions said they do not increase the limit for the damaged property. “The policy’s plain language controls,” the court wrote, and it added that the **coverage checklist** that comes with a policy is for information only and can’t change the policy’s terms. The opinion is not final until any timely motion for rehearing is decided.',
          why: 'Many South Florida homeowners policies carry a limited water damage endorsement, so check your declarations page and endorsements for the water damage cap and how mold is handled. Don’t rely on the one-page checklist alone. Fix AC drain and appliance leaks quickly, and report water damage promptly. See [burst pipes and home insurance](/en/blog/burst-pipes-cold-weather-florida-insurance), [water backup vs. flood](/en/blog/water-backup-vs-flood-insurance-florida) and [homeowners insurance in Miami-Dade County](/en/homeowners-insurance-miami-dade-county-fl).',
          sources: COURT,
        },
        {
          headline:
            'Update: Wednesday’s rain set daily records at Miami and Fort Lauderdale, and more showers are due from Sunday',
          summary:
            'NWS Miami says Wednesday, **Nov. 25**, set daily rainfall records at **Miami (4.54 inches, old record 2.37 inches from 2009)** and **Fort Lauderdale (3.15 inches, old record 3.12 inches from 1922)**. Through Nov. 27, Fort Lauderdale has logged **19.07 inches this month**, against a normal of 3.38 inches for the date, and Miami **15.11 inches**, against 3.25 inches. After a dry Saturday, scattered showers and a few storms are possible along the East Coast **Sunday afternoon and evening**, Monday looks like scattered showers, and **Tuesday has the best chance of more widespread rain with periods of moderate to heavy rain**; a front should lower rain chances by mid to late week. The rip current risk stays elevated today at Palm Beach and Collier beaches.',
          why: 'After this much rain the ground is soaked and water drains slowly, so check walls, ceilings, floors and AC closets for slow leaks or mold, and photograph anything new with the date. Damage from rising water is covered only by a flood policy, and a new flood policy usually has a 30-day wait; a car damaged by flooding needs comprehensive coverage. See [flood insurance in Homestead](/en/flood-insurance-homestead-fl), [water backup vs. flood](/en/blog/water-backup-vs-flood-insurance-florida) and [comprehensive vs. collision](/en/blog/comprehensive-vs-collision-florida).',
          sources: RAIN,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'This week',
          text: 'The National Flood Insurance Program is authorized **through 11:59 p.m. on Dec. 11** (13 days left; FEMA’s reauthorization page has not changed since Sept. 28), and a new NFIP policy usually starts after a 30-day wait. The National Hurricane Center expects no tropical cyclones in the next seven days, and the Atlantic hurricane season officially ends Monday, Nov. 30.',
        },
      ],
      extraSources: BOX,
    },
    es: {
      title:
        'Noticias de seguros en Florida, 28 de noviembre de 2026: los hogares de Broward ya pueden pedir ayuda federal por las inundaciones, un tribunal de apelaciones de Miami decide que la cobertura de moho no amplía el tope por daños de agua, y Miami y Fort Lauderdale marcan récords de lluvia',
      metaTitle: 'Noticias de seguros 28 nov. 2026: ayuda en Broward y moho | M&K',
      description:
        'FEMA abre la ayuda individual a Broward por las inundaciones de mediados de noviembre, un fallo sobre moho y topes por daños de agua, y lluvia récord en Miami y Fort Lauderdale.',
      ogAlt:
        'Un edificio de gobierno con columnas junto a una casa y un documento con una marca verde, un mazo sobre un aire acondicionado que gotea, y una nube de lluvia sobre un pluviómetro lleno junto a una palma',
      intro:
        'Tres novedades para propietarios de vivienda, conductores y dueños de pequeños negocios del sur de Florida este sábado. Cada noticia está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Actualización: una segunda declaración federal de desastre abre la asistencia individual de FEMA en Broward por las inundaciones que empezaron el 16 de noviembre',
          summary:
            'FEMA anunció el **27 de noviembre** que el Presidente aprobó una **segunda declaración de desastre mayor para Florida (DR-4957)**, con fecha del **26 de noviembre**, por tormentas fuertes e inundaciones **desde el 16 de noviembre y en curso**. **La asistencia individual está disponible en los condados de Broward y Brevard** y puede incluir subvenciones para vivienda temporal y reparaciones del hogar, préstamos para pérdidas de propiedad sin seguro y otras ayudas. Los gobiernos locales y ciertas organizaciones sin fines de lucro de Brevard, Broward, Flagler, Indian River, Orange, Putnam, Seminole y Volusia pueden recibir apoyo federal para medidas de protección de emergencia, limitado a asistencia federal directa. **Por ahora Miami-Dade no está en la lista**; FEMA dice que se pueden añadir más zonas si las evaluaciones de daños lo justifican, y sus datos de la declaración fijan el **25 de enero de 2027** como último día para solicitar bajo la DR-4957.',
          why: 'FEMA pide **presentar primero el reclamo a su compañía de seguros** y luego solicitar en DisasterAssistance.gov, en la app de FEMA o al 1-800-621-3362, porque FEMA no puede pagar pérdidas que su seguro ya cubre. Guarde el número de reclamo, las cartas del ajustador y cualquier carta de denegación o de pago, ya que FEMA puede pedirlas. Vea [la lista para reclamos por tormenta](/es/blog/hurricane-claim-checklist-florida), [seguro de vivienda en el condado de Broward](/es/homeowners-insurance-broward-county-fl) y [seguro de inundación en Homestead](/es/flood-insurance-homestead-fl).',
          sources: AID,
        },
        {
          headline:
            'Nuevo: un tribunal de apelaciones de Miami dice que la cobertura adicional de moho no puede subir el tope de un endoso limitado por daños de agua',
          summary:
            'El **25 de noviembre**, el **Tribunal de Apelaciones del Tercer Distrito**, que revisa casos de Miami-Dade, revocó una sentencia de un tribunal del condado que le había dado a un propietario **$10,000 adicionales por moho**. El propietario tenía un **endoso limitado por daños de agua** que cubría filtraciones del aire acondicionado, con un **límite de $10,000** que la aseguradora ya había pagado, y la póliza ofrecía además hasta $10,000 de cobertura adicional de moho; ambas cláusulas decían que no aumentan el límite aplicable a la propiedad dañada. Según el tribunal, manda el texto claro de la póliza, y la **lista de verificación de coberturas** que acompaña a la póliza es solo informativa y no puede cambiar sus términos. La decisión no es firme hasta que se resuelva cualquier moción de reconsideración presentada a tiempo.',
          why: 'Muchas pólizas de vivienda del sur de Florida incluyen un endoso limitado por daños de agua, así que revise en su página de declaraciones y en los endosos cuál es el tope por agua y cómo se trata el moho. No se guíe solo por la lista de una página. Repare rápido las fugas del drenaje del aire acondicionado y de los electrodomésticos, y reporte los daños por agua sin demora. Vea [tuberías rotas y seguro de vivienda](/es/blog/burst-pipes-cold-weather-florida-insurance), [retroceso de agua vs. inundación](/es/blog/water-backup-vs-flood-insurance-florida) y [seguro de vivienda en el condado de Miami-Dade](/es/homeowners-insurance-miami-dade-county-fl).',
          sources: COURT,
        },
        {
          headline:
            'Actualización: la lluvia del miércoles marcó récords diarios en Miami y Fort Lauderdale, y vuelven los aguaceros desde el domingo',
          summary:
            'El Servicio Meteorológico Nacional en Miami informa que el miércoles **25 de noviembre** se batieron récords diarios de lluvia en **Miami (4.54 pulgadas; el récord anterior era de 2.37, de 2009)** y en **Fort Lauderdale (3.15 pulgadas; el anterior era de 3.12, de 1922)**. Hasta el 27 de noviembre, Fort Lauderdale acumula **19.07 pulgadas en el mes**, frente a 3.38 normales para esa fecha, y Miami **15.11 pulgadas**, frente a 3.25. Tras un sábado seco, el **domingo por la tarde y noche** podría haber aguaceros dispersos y algunas tormentas en la costa este, el lunes se esperan aguaceros dispersos y **el martes es el día con más probabilidad de lluvia más extendida, con ratos de lluvia moderada a fuerte**; un frente debería bajar las probabilidades hacia mediados o finales de la semana. Hoy sigue elevado el riesgo de corrientes de resaca en las playas de Palm Beach y Collier.',
          why: 'Con tanta lluvia el suelo está saturado y el agua drena despacio, así que revise paredes, techos, pisos y el clóset del aire acondicionado en busca de filtraciones lentas o moho, y fotografíe cualquier daño nuevo con la fecha. El daño por agua que sube desde afuera solo lo cubre una póliza de inundación, que suele tener 30 días de espera si es nueva; un auto dañado por inundación necesita cobertura comprensiva. Vea [seguro de inundación en Homestead](/es/flood-insurance-homestead-fl), [retroceso de agua vs. inundación](/es/blog/water-backup-vs-flood-insurance-florida) y [comprensivo vs. colisión](/es/blog/comprehensive-vs-collision-florida).',
          sources: RAIN,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Esta semana',
          text: 'El Programa Nacional de Seguro contra Inundaciones (NFIP) está autorizado **hasta las 11:59 p.m. del 11 de diciembre** (faltan 13 días; la página de FEMA sobre la reautorización no cambia desde el 28 de septiembre), y una póliza nueva del NFIP suele empezar después de 30 días de espera. El Centro Nacional de Huracanes no prevé ciclones tropicales en los próximos siete días, y la temporada de huracanes del Atlántico termina oficialmente el lunes 30 de noviembre.',
        },
      ],
      extraSources: BOX,
    },
    ru: {
      title:
        'Страховые новости Флориды, 28 ноября 2026 года: жители Броварда могут подать заявку на федеральную помощь после наводнения, апелляционный суд Майами решил, что покрытие плесени не увеличивает лимит по ущербу от воды, а в Майами и Форт-Лодердейле — рекорды осадков',
      metaTitle: 'Страховые новости 28.11.2026: помощь Броварду, плесень | M&K',
      description:
        'FEMA открыла индивидуальную помощь в Броварде после наводнения в середине ноября, решение суда о плесени и лимитах по воде и рекордные дожди в Майами и Форт-Лодердейле.',
      ogAlt:
        'Здание с колоннами рядом с домом и документом с зелёной галочкой, судейский молоток над протекающим кондиционером и дождевое облако над полным дождемером рядом с пальмой',
      intro:
        'Три новости для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде в эту субботу. Каждая новость пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Обновление: вторая федеральная декларация о бедствии открывает индивидуальную помощь FEMA в Броварде после наводнения, начавшегося 16 ноября',
          summary:
            '**27 ноября** FEMA сообщило, что президент утвердил **вторую декларацию о крупном бедствии во Флориде (DR-4957)** от **26 ноября** — из-за сильных гроз и наводнения, **начавшихся 16 ноября и продолжающихся**. **Индивидуальная помощь доступна в округах Бровард и Бревард**: это могут быть гранты на временное жильё и ремонт дома, займы на незастрахованные потери имущества и другие программы. Местные власти и некоторые некоммерческие организации в округах Бревард, Бровард, Флаглер, Индиан-Ривер, Ориндж, Патнам, Семинол и Волуша могут получить федеральную помощь на экстренные защитные меры, но только в форме прямой федеральной помощи. **Майами-Дейд пока в список не вошёл**; FEMA допускает, что другие районы добавят, если это подтвердит оценка ущерба, а по данным FEMA последний день подачи заявок по DR-4957 — **25 января 2027 года**.',
          why: 'FEMA просит **сначала подать претензию в свою страховую компанию**, а потом обращаться на DisasterAssistance.gov, через приложение FEMA или по телефону 1-800-621-3362: FEMA не оплачивает убытки, которые уже покрывает страховка. Сохраните номер претензии, письма аджастера и письмо об отказе или выплате — FEMA может их запросить. См. [чек-лист по страховым претензиям после шторма](/ru/blog/hurricane-claim-checklist-florida), [страхование дома в округе Бровард](/ru/homeowners-insurance-broward-county-fl) и [страхование от наводнения в Хомстеде](/ru/flood-insurance-homestead-fl).',
          sources: AID,
        },
        {
          headline:
            'Новое: апелляционный суд Майами решил, что дополнительное покрытие плесени не поднимает лимит по ограниченному эндорсменту на ущерб от воды',
          summary:
            '**25 ноября** **Апелляционный суд Третьего округа**, который рассматривает дела из Майами-Дейда, отменил решение окружного суда, присудившего домовладельцу **дополнительные $10,000 за плесень**. У домовладельца был **ограниченный эндорсмент на ущерб от воды** с покрытием протечек из кондиционера и **лимитом $10,000**, который страховщик уже выплатил, а в полисе было ещё до $10,000 дополнительного покрытия плесени; в обоих пунктах сказано, что они не увеличивают лимит для повреждённого имущества. Суд указал, что решает ясный текст полиса, а **памятка о покрытии (coverage checklist)**, которую выдают вместе с полисом, носит лишь информационный характер и не меняет его условий. Решение не вступит в силу окончательно, пока не рассмотрят поданные в срок ходатайства о пересмотре.',
          why: 'Во многих полисах на дом в Южной Флориде есть ограниченный эндорсмент на ущерб от воды, поэтому посмотрите в декларационной странице и эндорсментах, какой лимит по воде и как покрывается плесень. Не полагайтесь только на одностраничную памятку. Быстро устраняйте протечки дренажа кондиционера и бытовой техники и сразу сообщайте об ущербе от воды. См. [прорыв труб и страховка дома](/ru/blog/burst-pipes-cold-weather-florida-insurance), [обратный поток канализации и наводнение](/ru/blog/water-backup-vs-flood-insurance-florida) и [страхование дома в округе Майами-Дейд](/ru/homeowners-insurance-miami-dade-county-fl).',
          sources: COURT,
        },
        {
          headline:
            'Обновление: ливень в среду побил суточные рекорды в Майами и Форт-Лодердейле, а с воскресенья снова ожидаются дожди',
          summary:
            'По данным Национальной метеослужбы в Майами, в среду, **25 ноября**, суточные рекорды осадков установлены в **Майами (4,54 дюйма, около 115 мм; прежний рекорд — 2,37 дюйма в 2009 году)** и в **Форт-Лодердейле (3,15 дюйма, около 80 мм; прежний — 3,12 дюйма в 1922 году)**. С 1 по 27 ноября в Форт-Лодердейле выпало **19,07 дюйма** при норме 3,38 дюйма на эту дату, в Майами — **15,11 дюйма** при норме 3,25. После сухой субботы **в воскресенье днём и вечером** на восточном побережье возможны местами ливни и отдельные грозы, в понедельник — местами ливни, а **во вторник наиболее вероятен более обширный дождь, временами умеренный и сильный**; к середине или концу недели фронт должен снизить вероятность осадков. Сегодня на пляжах Палм-Бич и Коллиера сохраняется повышенный риск отбойных течений.',
          why: 'После таких дождей земля перенасыщена и вода уходит медленно, поэтому осмотрите стены, потолки, полы и шкаф с кондиционером на предмет медленных протечек и плесени и сфотографируйте любой новый ущерб с датой. Ущерб от поднявшейся воды покрывает только полис от наводнения, а у нового полиса обычно 30 дней ожидания; машине, пострадавшей от воды, нужно покрытие comprehensive. См. [страхование от наводнения в Хомстеде](/ru/flood-insurance-homestead-fl), [обратный поток канализации и наводнение](/ru/blog/water-backup-vs-flood-insurance-florida) и [comprehensive или collision](/ru/blog/comprehensive-vs-collision-florida).',
          sources: RAIN,
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'На этой неделе',
          text: 'Национальная программа страхования от наводнений (NFIP) действует **до 23:59 11 декабря** (осталось 13 дней; страница FEMA о продлении не менялась с 28 сентября), а новый полис NFIP обычно начинает действовать после 30 дней ожидания. Национальный центр по ураганам не ожидает тропических циклонов в ближайшие семь дней, а сезон ураганов в Атлантике официально заканчивается в понедельник, 30 ноября.',
        },
      ],
      extraSources: BOX,
    },
  },
};
