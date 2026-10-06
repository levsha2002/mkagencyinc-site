import type { NewsEdition, NewsSource } from '../types';

// Edition for Tuesday, Oct. 6, 2026 (ET). Facts checked against linked sources.
// Items also logged in /workspace/articles/news_log.md.

const CITIZENS_FORMS: NewsSource = {
  name: 'Citizens Property Insurance Corporation',
  date: '2026-10-01',
  url: 'https://www.citizensfla.com/-/20261001-2026-form-changes-1',
  title: 'Personal Lines: 2026 Form Changes',
};

const OIR_WC_HEARING: NewsSource = {
  name: 'Florida Office of Insurance Regulation',
  date: '2026-10-06',
  url: 'https://floir.gov/events/national-council-on-compensation-insurance-public-rate-hearing-2026',
  title: 'National Council on Compensation Insurance 2026 Public Rate Hearing',
};

const NCCI_FL: NewsSource = {
  name: 'NCCI',
  date: '2026-08-21',
  url: 'https://www.ncci.com/Articles/Documents/II_StateAdvisoryForumState_FL_2026.pdf',
  title: 'Summary of the Florida Workers Compensation Rate Filing Recommendation Effective January 1, 2027',
};

const DCA5_FIGA: NewsSource = {
  name: 'Florida Fifth District Court of Appeal',
  date: '2026-10-02',
  url: 'https://flcourts-media.flcourts.gov/content/download/2496126/opinion/Opinion_2025-0464.pdf',
  title: 'Opinion, Case No. 5D2025-0464',
};

const PNJ_AGENT: NewsSource = {
  name: 'Pensacola News Journal',
  date: '2026-10-01',
  url: 'https://www.pnj.com/story/news/crime/2026/10/01/pensacola-insurance-agent-daniel-raney-guilty-of-fraud/92036232007/',
  title: 'Insurance agent pleads guilty to fraud',
};

const IJ_AGENT: NewsSource = {
  name: 'Insurance Journal',
  date: '2026-10-02',
  url: 'https://www.insurancejournal.com/news/southeast/2026/10/02/887787.htm',
  title: 'Florida Insurance Agent Pleads Guilty in $300,000 Premium Finance Scheme',
};

const FLHSMV_DL: NewsSource = {
  name: 'Florida Department of Highway Safety and Motor Vehicles',
  date: '2026-09-29',
  url: 'https://www.flhsmv.gov/2026/09/29/florida-launches-newly-designed-driver-licenses-and-identification-cards/',
  title: 'Florida Launches Newly Designed Driver Licenses and Identification Cards',
};

const NHC: NewsSource = {
  name: 'National Hurricane Center: Atlantic Tropical Weather Outlook',
  date: '2026-10-06',
  url: 'https://www.nhc.noaa.gov/text/MIATWOAT.shtml',
  title: 'Tropical Weather Outlook, 8:00 AM EDT Tue Oct 6 2026',
};

const MIAMI_DADE_TIDES: NewsSource = {
  name: 'Miami-Dade County',
  date: '2026-08-07',
  url: 'https://www.miamidade.gov/global/news-item.page?Mduid_news=news1506958000324763',
  title: 'Prepare for King Tides in coastal and low-lying areas',
};

export const edition: NewsEdition = {
  slug: '2026-10-06-citizens-forms-comp-hearing-claims',
  datePublished: '2026-10-06',
  translations: {
    en: {
      title:
        'Florida insurance news, Oct. 6, 2026: Citizens policy-form changes, workers’ comp hearing date, a contents-claim ruling',
      metaTitle: 'Insurance News Oct. 6, 2026: Citizens, Workers’ Comp | M&K Agency',
      description:
        'Today: Citizens policy forms change Dec. 1, OIR sets an Oct. 27 workers’ comp rate hearing, a court ruling on contents claims, and a premium-fraud plea.',
      ogAlt: 'Policy papers with a pen, a gavel and a hard hat on a light blue background',
      intro:
        'Five updates from the last few days for South Florida homeowners, drivers and small-business owners. Each item is summarized in our own words, with a link to the original source.',
      items: [
        {
          headline:
            'Citizens rewrites its homeowners policy forms for new and renewal policies starting Dec. 1',
          summary:
            'In an Oct. 1 bulletin, Citizens said the Office of Insurance Regulation approved new editions of its personal-lines forms for new and renewal business on or after **Dec. 1, 2026**. If the two appraisers on a claim can’t agree on the amount of loss, either the policyholder or Citizens may now ask the Division of Administrative Hearings (DOAH) to arbitrate. A home rented to guests more than three times a year for stays shorter than 30 days (or one calendar month, whichever is less), or held out to the public as a regular rental, now counts as a “business” under the HO-3, HO-4, HO-6 and HO-8 forms, and their liability section excludes it. Policyholders who must carry flood insurance may be asked to sign a form letting Citizens see their flood policy, and must return it within 14 days; not doing so, or letting required flood coverage lapse, may cost them coverage for a wind loss.',
          why: 'If you rent your home out short-term or are subject to the [Citizens flood requirement](/en/blog/citizens-flood-insurance-requirement-2027), read your December renewal packet closely and keep your flood policy in force. A licensed agent can go over your [homeowners coverage](/en/homeowners-insurance-florida-city) with you.',
          sources: [CITIZENS_FORMS],
        },
        {
          headline:
            'State sets an Oct. 27 public hearing on the proposed 2027 workers’ comp rate change',
          summary:
            'The Office of Insurance Regulation will hold a virtual public hearing at **10 a.m. ET on Tuesday, Oct. 27** on the rate filing NCCI made for workers’ compensation insurers on Aug. 21. The filing asks for an overall average decrease of 7.4% in voluntary-market rates for new and renewal policies starting Jan. 1, 2027. NCCI credits mainly a decline in lost-time claim frequency, and says the figure includes a +0.6% effect from updated medical fee schedules. Expert testimony must be prefiled by Oct. 20, and the public can email comments to ratehearings@floir.com until 5 p.m. ET on Nov. 10. The final rate level is up to OIR.',
          why: 'This is a statewide average that OIR may change. What a business actually pays also depends on its class codes, payroll and claims history. Before your next renewal, check that your workers are classified correctly (see [helper: employee or 1099?](/en/blog/helper-employee-or-1099-florida-workers-comp)) and look over your [business coverage](/en/commercial-insurance-florida-city).',
          sources: [OIR_WC_HEARING, NCCI_FL],
        },
        {
          headline:
            'Appeals court: a homeowner’s own testimony, photos and receipts can support a contents claim',
          summary:
            'On Oct. 2, Florida’s Fifth District Court of Appeal revived the personal-property part of a 2018 New Smyrna Beach house-fire claim against the Florida Insurance Guaranty Association (FIGA), which took over after the original insurer went insolvent. The trial judge had thrown out the contents claim because there was no professional inventory. The appeals court disagreed: the owner’s testimony, photos, receipts and an itemized list already in evidence were enough for a jury to decide. It also held that FIGA’s $500,000 statutory cap limits what can be collected after a verdict, not the evidence of damage a homeowner may present. The case goes back to the trial court.',
          why: 'Keeping a dated inventory of your belongings, with photos, videos and receipts stored away from your home, makes any contents claim much easier to prove. Our [hurricane claim timeline](/en/blog/hurricane-claim-timeline-florida) covers the steps after a loss.',
          sources: [DCA5_FIGA],
        },
        {
          headline:
            'Pensacola agent pleads guilty after financing premiums for coverage that was never bought',
          summary:
            'A 41-year-old Pensacola insurance agent pleaded guilty Oct. 1 to organized fraud, misappropriation of insurance funds and using a communications device to commit a felony, the Pensacola News Journal reported. Investigators with the Department of Financial Services’ Bureau of Insurance Fraud say he signed premium finance agreements totaling about $318,000 for two companies he owned without buying the insurance. Insurance Journal reported that he is also accused of diverting about $38,600 that a real local business paid for a general-liability audit. His licenses have been suspended. A plea deal caps his prison term at seven years, and sentencing is set for Nov. 10.',
          why: 'Make sure you receive the policy and declarations page from the insurance company itself, pay only by the methods your policy documents list, and check any agent’s license with the [DFS licensee search](https://licenseesearch.fldfs.com/).',
          sources: [PNJ_AGENT, IJ_AGENT],
        },
        {
          headline:
            'Florida starts issuing a redesigned driver license; current cards stay valid',
          summary:
            'Since Sept. 30, FLHSMV service centers have issued a new design of the Florida driver license and ID card, and online orders through MyDMVPortal are expected by early November. The new card adds the state seal as a security feature, and commercial licenses and learner’s permits for non-domiciled holders carry a “Temporary Non-Domiciled” marking. You don’t need to replace your current license or ID; it stays valid until it expires.',
          why: 'You don’t need to rush to a service center. The state says current cards stay valid, so be wary of any message telling you to replace yours now and use only flhsmv.gov. Getting a new license doesn’t change your [auto policy](/en/car-insurance-florida-city).',
          sources: [FLHSMV_DL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Tropics and tides (Tuesday, Oct. 6, 8 a.m. EDT)',
          text: 'The [National Hurricane Center](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) expects a tropical depression to form within a day or so from a low over the southwestern Gulf of America (**90%** in 48 hours). The system should turn north or northeast toward the northern Gulf Coast by the end of the week, and NHC says interests from the **Florida Panhandle to Louisiana** should watch it closely. Here at home, Miami-Dade’s next king-tide window runs **Oct. 7–13** (starting Wednesday), then Oct. 24–30. Park on higher ground and rinse your car with fresh water if you drive through salt water. If you plan coverage changes, start now rather than waiting for a watch or warning.',
        },
      ],
      extraSources: [NHC, MIAMI_DADE_TIDES],
    },
    es: {
      title:
        'Noticias de seguros en Florida, 6 de octubre de 2026: cambios en las pólizas de Citizens, audiencia de compensación laboral y un fallo sobre reclamos de contenido',
      metaTitle: 'Noticias de seguros, 6 oct. 2026: Citizens y compensación | M&K',
      description:
        'Hoy: Citizens cambia sus pólizas el 1 de dic., la OIR fija audiencia de compensación laboral el 27 de oct., un fallo sobre contenido y un fraude de primas.',
      ogAlt: 'Documentos de póliza con un bolígrafo, un mazo de juez y un casco de obra sobre fondo celeste',
      intro:
        'Cinco novedades de los últimos días para propietarios, conductores y dueños de pequeños negocios en el sur de la Florida. Cada una está resumida con nuestras propias palabras y enlaza a la fuente original.',
      items: [
        {
          headline:
            'Citizens renueva los formularios de sus pólizas de vivienda a partir del 1 de diciembre',
          summary:
            'En un boletín del 1 de octubre, Citizens informó que la Oficina de Regulación de Seguros (OIR) aprobó nuevas ediciones de sus formularios de líneas personales para pólizas nuevas y renovaciones desde el **1 de diciembre de 2026**. Si los dos tasadores de un reclamo no se ponen de acuerdo sobre el monto de la pérdida, ahora tanto el asegurado como Citizens pueden pedir un arbitraje ante la División de Audiencias Administrativas (DOAH). La vivienda que se alquila a huéspedes más de tres veces al año por estadías de menos de 30 días (o de un mes calendario, lo que sea menor), o que se ofrece al público como alquiler habitual, pasa a considerarse un “negocio” en los formularios HO-3, HO-4, HO-6 y HO-8, y la sección de responsabilidad civil lo excluye. A quienes están obligados a tener seguro de inundación se les puede pedir que firmen una autorización para que Citizens consulte su póliza de inundación, y deben devolverla en 14 días; si no lo hacen, o si dejan vencer la cobertura de inundación exigida, pueden quedarse sin cobertura ante un daño por viento.',
          why: 'Si alquila su casa por temporadas cortas o le aplica el [requisito de inundación de Citizens](/es/blog/citizens-flood-insurance-requirement-2027), lea con atención el paquete de renovación de diciembre y mantenga vigente su póliza de inundación. Un agente con licencia puede revisar con usted su [seguro de vivienda](/es/homeowners-insurance-florida-city).',
          sources: [CITIZENS_FORMS],
        },
        {
          headline:
            'El estado fija para el 27 de octubre la audiencia pública sobre las tarifas de compensación laboral de 2027',
          summary:
            'La Oficina de Regulación de Seguros celebrará una audiencia pública virtual el **martes 27 de octubre a las 10 a.m. (hora del Este)** sobre la solicitud de tarifas que NCCI presentó el 21 de agosto en nombre de las aseguradoras de compensación laboral (workers’ comp). La solicitud plantea una reducción promedio general del 7,4% en las tarifas del mercado voluntario para pólizas nuevas y renovaciones desde el 1 de enero de 2027. NCCI la atribuye sobre todo a la baja en la frecuencia de reclamos con tiempo perdido, e indica que la cifra ya incluye un efecto de +0,6% por la actualización de los baremos médicos. El testimonio de peritos debe presentarse por escrito antes del 20 de octubre, y el público puede enviar comentarios a ratehearings@floir.com hasta las 5 p.m. del 10 de noviembre. La decisión final sobre la tarifa corresponde a la OIR.',
          why: 'Es un promedio estatal que la OIR puede modificar, y lo que paga cada negocio depende además de sus códigos de clasificación, su nómina y su historial de reclamos. Antes de renovar, confirme que sus trabajadores estén bien clasificados (vea [¿ayudante empleado o 1099?](/es/blog/helper-employee-or-1099-florida-workers-comp)) y revise su [seguro comercial](/es/commercial-insurance-florida-city).',
          sources: [OIR_WC_HEARING, NCCI_FL],
        },
        {
          headline:
            'Tribunal de apelaciones: el testimonio, las fotos y los recibos del propietario pueden respaldar un reclamo por contenido',
          summary:
            'El 2 de octubre, el Tribunal de Apelaciones del Quinto Distrito de Florida revivió la parte de bienes personales de un reclamo por un incendio de 2018 en una casa de New Smyrna Beach contra la Florida Insurance Guaranty Association (FIGA), que asumió el caso cuando la aseguradora original quebró. El juez de primera instancia había descartado el reclamo por contenido porque no existía un inventario profesional. El tribunal opinó lo contrario: el testimonio del dueño, sus fotos, sus recibos y una lista detallada ya admitida como prueba bastaban para que decidiera un jurado. También aclaró que el tope legal de $500,000 de FIGA limita lo que se puede cobrar después del veredicto, pero no las pruebas de daño que el propietario puede presentar. El caso vuelve al tribunal de primera instancia.',
          why: 'Tener un inventario fechado de sus pertenencias, con fotos, videos y recibos guardados fuera de la casa, hace mucho más fácil probar un reclamo por contenido. Nuestra [guía de plazos de reclamos por huracán](/es/blog/hurricane-claim-timeline-florida) explica los pasos después de una pérdida.',
          sources: [DCA5_FIGA],
        },
        {
          headline:
            'Un agente de Pensacola se declara culpable de financiar primas de seguros que nunca compró',
          summary:
            'Un agente de seguros de Pensacola, de 41 años, se declaró culpable el 1 de octubre de fraude organizado, apropiación indebida de fondos de seguros y uso de un dispositivo de comunicación para cometer un delito grave, según el Pensacola News Journal. Investigadores de la Oficina de Fraude de Seguros del Departamento de Servicios Financieros (DFS) sostienen que firmó contratos de financiamiento de primas por unos $318,000 para dos empresas suyas sin llegar a comprar los seguros. Insurance Journal informó que además se le acusa de desviar unos $38,600 que un negocio local real pagó por una auditoría de responsabilidad civil general. Sus licencias están suspendidas. El acuerdo con la fiscalía limita su condena a un máximo de siete años de prisión, y la sentencia está prevista para el 10 de noviembre.',
          why: 'Asegúrese de recibir la póliza y la página de declaraciones directamente de la aseguradora, pague solo por los medios que indican los documentos de su póliza y verifique la licencia de cualquier agente en el [buscador de licencias del DFS](https://licenseesearch.fldfs.com/).',
          sources: [PNJ_AGENT, IJ_AGENT],
        },
        {
          headline:
            'Florida comienza a emitir la licencia de conducir con nuevo diseño; las actuales siguen vigentes',
          summary:
            'Desde el 30 de septiembre, las oficinas de servicio del FLHSMV emiten la licencia de conducir y la identificación de Florida con un nuevo diseño, y se espera que los pedidos en línea por MyDMVPortal estén disponibles a principios de noviembre. La nueva tarjeta suma el sello del estado como elemento de seguridad, y las licencias comerciales y permisos de aprendiz de titulares sin domicilio en el estado llevan la marca “Temporary Non-Domiciled”. No hace falta reemplazar la licencia o identificación que ya tiene: sigue siendo válida hasta su vencimiento.',
          why: 'No tiene que correr a una oficina. El estado aclara que las tarjetas actuales siguen vigentes, así que desconfíe de cualquier mensaje que le pida cambiar la suya ya y use solo flhsmv.gov. Sacar una licencia nueva no cambia su [póliza de auto](/es/car-insurance-florida-city).',
          sources: [FLHSMV_DL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Trópicos y mareas (martes 6 de octubre, 8 a.m. hora del Este)',
          text: 'El [Centro Nacional de Huracanes](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) prevé que en un día o algo más se forme una depresión tropical a partir de una baja presión en el suroeste del Golfo de América (**90%** en 48 horas). Se espera que gire al norte o noreste hacia la costa norte del Golfo a finales de semana, y el NHC pide a quienes estén **del Panhandle de Florida a Luisiana** que la sigan de cerca. Aquí, la próxima ventana de mareas reales (king tides) de Miami-Dade va del **7 al 13 de octubre** (empieza el miércoles) y luego del 24 al 30. Estacione en zonas altas y enjuague el auto con agua dulce si pasa por agua salada. Si piensa hacer cambios en su cobertura, hágalos ahora y no espere a que haya una vigilancia o un aviso.',
        },
      ],
      extraSources: [NHC, MIAMI_DADE_TIDES],
    },
    ru: {
      title:
        'Новости страхования во Флориде, 6 октября 2026: новые формы полисов Citizens, слушания по workers’ comp и решение суда по имуществу',
      metaTitle: 'Новости страхования, 6 окт. 2026: Citizens, workers’ comp | M&K',
      description:
        'Сегодня: Citizens меняет формы полисов с 1 декабря, OIR назначил слушания по workers’ comp на 27 октября, решение суда по имуществу и дело о мошенничестве.',
      ogAlt: 'Страховые документы с ручкой, судейский молоток и строительная каска на светло-голубом фоне',
      intro:
        'Пять новостей последних дней для домовладельцев, водителей и владельцев малого бизнеса в Южной Флориде. Каждая пересказана своими словами, со ссылкой на первоисточник.',
      items: [
        {
          headline:
            'Citizens обновляет формы полисов на жильё: новые правила с 1 декабря',
          summary:
            'В бюллетене от 1 октября Citizens сообщил, что регулятор (OIR) утвердил новые редакции форм личных полисов для новых договоров и продлений с **1 декабря 2026**. Если два оценщика по страховому случаю не сходятся в сумме ущерба, теперь и владелец полиса, и Citizens могут передать спор на арбитраж в Division of Administrative Hearings (DOAH). Жильё, которое сдаётся гостям чаще трёх раз в год на срок меньше 30 дней (или календарного месяца, смотря что короче) либо открыто предлагается как регулярная аренда, теперь считается «бизнесом» по формам HO-3, HO-4, HO-6 и HO-8, и раздел об ответственности его исключает. Тех, кто обязан иметь flood-страховку, могут попросить подписать разрешение, чтобы Citizens мог проверить их flood-полис, и вернуть его в течение 14 дней. Если этого не сделать или допустить перерыв в обязательном flood-покрытии, можно остаться без покрытия ущерба от ветра.',
          why: 'Если вы сдаёте жильё посуточно или на вас распространяется [требование Citizens по flood](/ru/blog/citizens-flood-insurance-requirement-2027), внимательно прочитайте пакет документов при декабрьском продлении и не допускайте перерыва во flood-полисе. Лицензированный агент поможет разобраться в вашей [страховке жилья](/ru/homeowners-insurance-florida-city).',
          sources: [CITIZENS_FORMS],
        },
        {
          headline:
            'Штат назначил на 27 октября публичные слушания по тарифам workers’ comp на 2027 год',
          summary:
            'Office of Insurance Regulation проведёт виртуальные публичные слушания **во вторник, 27 октября, в 10:00 по восточному времени** по тарифной заявке, которую NCCI подал 21 августа от имени страховщиков workers’ compensation. Заявка предлагает среднее общее снижение тарифов добровольного рынка на 7,4% для новых полисов и продлений с 1 января 2027. NCCI объясняет это прежде всего снижением частоты случаев с потерей рабочего времени и указывает, что в эту цифру уже входит эффект +0,6% от обновления медицинских тарифных сеток. Письменные показания экспертов нужно подать до 20 октября, а комментарии от публики принимаются по адресу ratehearings@floir.com до 17:00 10 ноября. Окончательный уровень тарифов утверждает OIR.',
          why: 'Это средняя цифра по штату, и OIR может её изменить. Сколько платит конкретный бизнес, зависит ещё и от кодов классификации, фонда зарплаты и истории убытков. Перед продлением проверьте, правильно ли оформлены ваши работники (см. [помощник: сотрудник или 1099?](/ru/blog/helper-employee-or-1099-florida-workers-comp)), и пересмотрите [страхование бизнеса](/ru/commercial-insurance-florida-city).',
          sources: [OIR_WC_HEARING, NCCI_FL],
        },
        {
          headline:
            'Апелляционный суд: показания, фото и чеки самого владельца могут подтвердить ущерб имуществу',
          summary:
            '2 октября Апелляционный суд Пятого округа Флориды вернул в дело требование о возмещении личного имущества после пожара 2018 года в доме в Нью-Смирна-Бич. Иск рассматривался против Florida Insurance Guaranty Association (FIGA), которая заменила обанкротившегося страховщика. Суд первой инстанции отклонил эту часть иска, потому что не было профессиональной описи. Апелляционный суд с этим не согласился: показаний владельца, его фотографий, чеков и подробного списка, уже принятого как доказательство, достаточно, чтобы вопрос решали присяжные. Суд также разъяснил, что законный лимит FIGA в $500 000 ограничивает сумму к выплате после вердикта, но не доказательства ущерба, которые может представить владелец. Дело возвращено в суд первой инстанции.',
          why: 'Опись вещей с датой, фото, видео и чеками, которая хранится не дома, сильно упрощает доказательство ущерба имуществу. О шагах после убытка рассказано в нашей [статье о сроках урегулирования после урагана](/ru/blog/hurricane-claim-timeline-florida).',
          sources: [DCA5_FIGA],
        },
        {
          headline:
            'Агент из Пенсаколы признал вину: финансировал премии по страховкам, которые так и не купил',
          summary:
            'Как сообщает Pensacola News Journal, 1 октября 41-летний страховой агент из Пенсаколы признал себя виновным в организованном мошенничестве, растрате страховых средств и использовании средства связи для совершения тяжкого преступления. По данным следователей Bureau of Insurance Fraud при Department of Financial Services (DFS), он оформил договоры финансирования премий примерно на $318 000 на две свои компании, но страховку так и не купил. По сообщению Insurance Journal, его также обвиняют в присвоении около $38 600, которые реальный местный бизнес заплатил за аудит полиса общей ответственности. Его лицензии приостановлены. Сделка со следствием ограничивает срок заключения семью годами, приговор ожидается 10 ноября.',
          why: 'Добивайтесь, чтобы полис и declarations page пришли напрямую от страховой компании, платите только теми способами, что указаны в документах полиса, и проверяйте лицензию агента через [поиск лицензий DFS](https://licenseesearch.fldfs.com/).',
          sources: [PNJ_AGENT, IJ_AGENT],
        },
        {
          headline:
            'Флорида начала выдавать права нового образца; действующие остаются в силе',
          summary:
            'С 30 сентября сервисные центры FLHSMV выдают водительские права и ID-карты Флориды нового дизайна, а онлайн-заказ через MyDMVPortal должен заработать к началу ноября. В новой карте появилось изображение печати штата как элемент защиты, а на коммерческих правах и ученических разрешениях владельцев без постоянного места жительства во Флориде ставится отметка «Temporary Non-Domiciled». Менять действующие права или ID не нужно: они действуют до окончания срока.',
          why: 'Спешить в сервисный центр не нужно. Штат подтверждает, что нынешние карты действуют, так что относитесь с подозрением к сообщениям о срочной замене и пользуйтесь только flhsmv.gov. Новые права ничего не меняют в вашем [автополисе](/ru/car-insurance-florida-city).',
          sources: [FLHSMV_DL],
        },
      ],
      extra: [
        {
          type: 'callout',
          title: 'Тропики и приливы (вторник, 6 октября, 8:00 EDT)',
          text: '[Национальный центр ураганов](https://www.nhc.noaa.gov/text/MIATWOAT.shtml) ожидает, что примерно в течение суток из области низкого давления на юго-западе Мексиканского залива сформируется тропическая депрессия (**90%** за 48 часов). К концу недели система, вероятно, повернёт на север или северо-восток к северному побережью залива, и NHC советует жителям **от Панхэндла Флориды до Луизианы** внимательно следить за ней. У нас в Майами-Дейд следующее окно king tides — **7–13 октября** (начинается завтра, в среду), затем 24–30 октября. Ставьте машину повыше и промывайте её пресной водой, если проехали по солёной. Если планируете менять страховку, займитесь этим сейчас, а не когда объявят watch или warning.',
        },
      ],
      extraSources: [NHC, MIAMI_DADE_TIDES],
    },
  },
};
