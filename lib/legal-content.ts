export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = {
  title: string;
  effectiveDateLabel: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: Record<'en' | 'es' | 'ru', LegalDoc> = {
  en: {
    title: 'Privacy Policy',
    effectiveDateLabel: 'Effective Date: July 2026 · Last updated: September 2026',
    intro:
      'M&K Agency Inc. ("M&K Agency," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit mkagencyinc.com (the "Site") or otherwise interact with us, including by phone, text message, or in person at our office.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'When you request a quote, contact us, use our AI chat assistant, or otherwise communicate with us, we may collect your name, phone number, email address, and mailing/property address; insurance-related information such as vehicle identification numbers (VIN), number of drivers, property details, and desired coverage types; and any other information you choose to include in a message, comment, or form field.',
          'When you visit the Site, we and our service providers may automatically collect certain technical information, such as your IP address, browser type, device type, pages visited, and the date and time of your visit, using standard web technologies such as cookies and similar tracking tools.',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        body: [
          'We use the information we collect to provide insurance quotes and respond to your inquiries; contact you by phone, text message, or email about insurance products and services; operate, maintain, and improve the Site and our services; comply with legal and regulatory obligations; and communicate with insurance carriers on your behalf to obtain quotes or bind coverage, where you have requested that we do so.',
        ],
      },
      {
        heading: '3. Consent to Communications (TCPA)',
        body: [
          'By submitting your phone number through our Site, you agree that M&K Agency may contact you by phone call, text message, or email at the number provided regarding insurance products and services, even if that number is registered on a state or federal Do-Not-Call list. Consent to receive such communications is not a condition of purchasing any product or service. You may reply "STOP" to any text message at any time to opt out of further text communications, or contact us using the information below.',
        ],
      },
      {
        heading: '4. Cookies and Tracking Technologies',
        body: [
          'We may use cookies, web beacons, and similar technologies to recognize your browser, remember your preferences, and understand how visitors use the Site. You can typically set your browser to refuse cookies or alert you when cookies are being sent, though some parts of the Site may not function properly without them.',
          'Advertising and measurement (Google Ads). We advertise with Google Ads and use the Google tag on the Site to measure which ads lead to calls, texts and form requests (conversion tracking) and to show our ads to people who have visited the Site (remarketing). When you submit a form, the email address and phone number you entered may be shared with Google in hashed (one-way encoded) form to match the request to an ad click ("enhanced conversions"). We also store the ad-click identifier from the page address (such as gclid) with your request. Google\u2019s use of this data is described at https://policies.google.com/technologies/partner-sites. You can turn off personalized ads at https://adssettings.google.com, or block cookies in your browser.',
        ],
      },
      {
        heading: '5. How We Share Your Information',
        body: [
          "We do not sell your personal information. We may share your information with insurance carriers and underwriters, in order to obtain quotes or bind coverage you have requested; service providers who perform functions on our behalf, such as email delivery, data hosting, customer communications platforms, and website analytics; regulators or other parties when required by law, subpoena, or other legal process; and a successor entity in the event of a merger, acquisition, or sale of some or all of our assets.",
        ],
      },
      {
        heading: 'AI Chat Assistant and Third-Party Processing',
        body: [
          'Our Site offers an AI chat assistant. When you use it, the content of your conversation — including any name, phone number, or other details you choose to type into it — is transmitted to a third-party artificial-intelligence provider that generates the assistant\u2019s replies on our behalf. That provider processes the conversation solely to produce a response for us and is not permitted to use it to contact you.',
          'A copy of each conversation is also sent to our agency by email so a licensed agent can follow up. If we enable a customer-communications platform to receive leads, conversation summaries may be transmitted to that platform as well.',
          'The assistant is not a licensed agent and cannot quote prices, confirm coverage, or bind a policy. If you would prefer not to have a conversation processed this way, please call us at (305) 859-3953 or use the callback form instead.',
        ],
      },
      {
        heading: 'How Long We Keep Your Information',
        body: [
          'We retain quote requests, callback requests, and chat transcripts for up to twenty-four (24) months from your last interaction with us, after which they are deleted or anonymized. Records we are required to keep for insurance regulatory, tax, or legal purposes — including records of your consent to be contacted — are retained for the period required by Florida law, which is generally five (5) years. You may ask us to delete your information sooner by contacting us using the details below, subject to those obligations.',
        ],
      },
      {
        heading: '6. Data Security',
        body: [
          'We use reasonable administrative, technical, and physical safeguards designed to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        heading: '7. Your Choices',
        body: [
          'You may opt out of text messages at any time by replying "STOP"; ask to review, correct, or request deletion of the personal information we hold about you, subject to our legal and business record-keeping obligations, by contacting us using the information below; and decline to provide certain information, though this may limit our ability to provide you with a quote or service.',
        ],
      },
      {
        heading: "8. Children's Privacy",
        body: [
          'The Site is not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.',
        ],
      },
      {
        heading: '9. Contact Us',
        body: [
          'M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Phone: (305) 859-3953',
        ],
      },
      {
        heading: '10. Changes to This Policy',
        body: [
          'We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Effective Date" and will be effective as soon as it is posted on the Site.',
        ],
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    effectiveDateLabel: 'Fecha de vigencia: julio de 2026 · Última actualización: septiembre de 2026',
    intro:
      'M&K Agency Inc. ("M&K Agency", "nosotros" o "nuestro") respeta su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita mkagencyinc.com (el "Sitio") o interactúa con nosotros de otra manera, incluso por teléfono, mensaje de texto o en persona en nuestra oficina.',
    sections: [
      {
        heading: '1. Información que Recopilamos',
        body: [
          'Cuando solicita una cotización, nos contacta, usa nuestro asistente de chat con IA, o se comunica con nosotros de otra manera, podemos recopilar su nombre, número de teléfono, correo electrónico y dirección postal/de la propiedad; información relacionada con seguros, como VIN, número de conductores, detalles de la propiedad y tipos de cobertura deseados; y cualquier otra información que decida incluir en un mensaje, comentario o campo del formulario.',
          'Cuando visita el Sitio, podemos recopilar automáticamente información técnica como su dirección IP, tipo de navegador, tipo de dispositivo, páginas visitadas y la fecha y hora de su visita, mediante cookies y herramientas similares.',
        ],
      },
      {
        heading: '2. Cómo Usamos su Información',
        body: [
          'Usamos la información para proporcionar cotizaciones de seguros y responder a sus consultas; contactarlo sobre productos y servicios de seguros; operar y mejorar el Sitio; cumplir con obligaciones legales; y comunicarnos con aseguradoras en su nombre cuando usted lo haya solicitado.',
        ],
      },
      {
        heading: '3. Consentimiento para Comunicaciones (TCPA)',
        body: [
          'Al enviar su número de teléfono a través de nuestro Sitio, usted acepta que M&K Agency puede contactarlo por llamada, mensaje de texto o correo electrónico sobre seguros, incluso si ese número está en una lista de No Llamar. El consentimiento no es una condición de compra. Puede responder "STOP" en cualquier momento para dejar de recibir mensajes de texto.',
        ],
      },
      {
        heading: '4. Cookies y Tecnologías de Seguimiento',
        body: [
          'Podemos usar cookies y tecnologías similares para reconocer su navegador y entender cómo se usa el Sitio. Puede configurar su navegador para rechazar cookies, aunque algunas partes del Sitio pueden no funcionar correctamente.',
          'Publicidad y medición (Google Ads). Anunciamos con Google Ads y usamos la etiqueta de Google en el Sitio para medir qué anuncios generan llamadas, textos y solicitudes por formulario (seguimiento de conversiones) y para mostrar nuestros anuncios a personas que han visitado el Sitio (remarketing). Cuando usted envía un formulario, el correo electrónico y el número de teléfono que escribió pueden compartirse con Google en forma cifrada (hash, codificación de una sola vía) para relacionar la solicitud con un clic en un anuncio ("conversiones mejoradas"). También guardamos con su solicitud el identificador del clic en el anuncio que aparece en la dirección de la página (como gclid). El uso que Google hace de estos datos se describe en https://policies.google.com/technologies/partner-sites. Puede desactivar los anuncios personalizados en https://adssettings.google.com o bloquear las cookies en su navegador.',
        ],
      },
      {
        heading: '5. Cómo Compartimos su Información',
        body: [
          'No vendemos su información personal. Podemos compartirla con aseguradoras para obtener cotizaciones o cobertura; proveedores de servicios que trabajan en nuestro nombre; reguladores cuando lo exija la ley; y una entidad sucesora en caso de fusión o venta de activos.',
        ],
      },
      {
        heading: 'Asistente de Chat con IA y Procesamiento por Terceros',
        body: [
          'Nuestro Sitio ofrece un asistente de chat con inteligencia artificial. Cuando usted lo usa, el contenido de su conversación — incluido cualquier nombre, número de teléfono u otros datos que decida escribir — se transmite a un proveedor externo de inteligencia artificial que genera las respuestas del asistente en nuestro nombre. Ese proveedor procesa la conversación únicamente para producir una respuesta para nosotros y no está autorizado a usarla para contactarlo.',
          'Una copia de cada conversación también se envía por correo electrónico a nuestra agencia para que un agente licenciado pueda dar seguimiento. Si habilitamos una plataforma de comunicaciones con clientes para recibir prospectos, los resúmenes de conversación también pueden transmitirse a esa plataforma.',
          'El asistente no es un agente licenciado y no puede cotizar precios, confirmar cobertura ni emitir una póliza. Si prefiere que su conversación no se procese de esta manera, llámenos al (305) 859-3953 o use el formulario de devolución de llamada.',
        ],
      },
      {
        heading: 'Cuánto Tiempo Conservamos su Información',
        body: [
          'Conservamos las solicitudes de cotización, las solicitudes de llamada y las transcripciones de chat hasta veinticuatro (24) meses desde su última interacción con nosotros, tras lo cual se eliminan o se anonimizan. Los registros que debemos conservar por motivos regulatorios de seguros, fiscales o legales — incluidos los registros de su consentimiento para ser contactado — se conservan durante el período exigido por la ley de Florida, que generalmente es de cinco (5) años. Puede pedirnos que eliminemos su información antes, sujeto a esas obligaciones.',
        ],
      },
      {
        heading: '6. Seguridad de los Datos',
        body: [
          'Utilizamos medidas de seguridad razonables para proteger su información, aunque ningún método de transmisión por internet es completamente seguro.',
        ],
      },
      {
        heading: '7. Sus Opciones',
        body: [
          'Puede optar por no recibir mensajes de texto respondiendo "STOP"; solicitar revisar, corregir o eliminar su información; o decidir no proporcionar cierta información, aunque esto puede limitar nuestro servicio.',
        ],
      },
      {
        heading: '8. Privacidad de los Menores',
        body: [
          'El Sitio no está dirigido a menores de 18 años. No recopilamos conscientemente información de menores.',
        ],
      },
      {
        heading: '9. Contáctenos',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Teléfono: (305) 859-3953'],
      },
      {
        heading: '10. Cambios a esta Política',
        body: [
          'Podemos actualizar esta Política periódicamente. La versión actualizada entrará en vigor al publicarse en el Sitio.',
        ],
      },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности',
    effectiveDateLabel: 'Дата вступления в силу: июль 2026',
    intro:
      'M&K Agency Inc. («M&K Agency», «мы», «нас» или «наш») уважает вашу конфиденциальность. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем вашу информацию, когда вы посещаете mkagencyinc.com («Сайт») или иным образом взаимодействуете с нами, включая по телефону, SMS или лично в офисе.',
    sections: [
      {
        heading: '1. Информация, которую мы собираем',
        body: [
          'Когда вы запрашиваете расчёт стоимости или связываетесь с нами, мы можем собирать имя, телефон, email, адрес; данные, связанные со страхованием (VIN, число водителей, детали недвижимости); и любую другую информацию, указанную в форме.',
          'При посещении Сайта мы можем автоматически собирать техническую информацию — IP-адрес, тип браузера, посещённые страницы — через cookie-файлы и аналогичные инструменты.',
        ],
      },
      {
        heading: '2. Как мы используем вашу информацию',
        body: [
          'Мы используем информацию для предоставления расчётов стоимости, связи с вами по вопросам страхования, работы и улучшения Сайта, соблюдения юридических обязательств, а также взаимодействия со страховыми компаниями от вашего имени.',
        ],
      },
      {
        heading: '3. Согласие на коммуникации (TCPA)',
        body: [
          'Указывая номер телефона на Сайте, вы соглашаетесь, что M&K Agency может связываться с вами по телефону, SMS или электронной почте, даже если номер в списке «Не звонить». Согласие не является условием покупки. Ответьте «STOP», чтобы отказаться от SMS.',
        ],
      },
      {
        heading: '4. Файлы cookie',
        body: [
          'Мы можем использовать cookie-файлы, чтобы понимать, как посетители используют Сайт. Вы можете настроить браузер на отклонение cookie.',
          'Реклама и аналитика (Google Ads). Мы размещаем рекламу в Google Ads и используем тег Google на Сайте, чтобы измерять, какие объявления приводят к звонкам, SMS и заявкам через формы (отслеживание конверсий), и показывать нашу рекламу людям, которые уже посещали Сайт (ремаркетинг). Когда вы отправляете форму, указанные вами email и номер телефона могут передаваться Google в захешированном (необратимо закодированном) виде, чтобы сопоставить заявку с кликом по объявлению («расширенные конверсии»). Мы также сохраняем вместе с заявкой идентификатор клика по объявлению из адреса страницы (например, gclid). Как Google использует эти данные, описано на https://policies.google.com/technologies/partner-sites. Отключить персонализированную рекламу можно на https://adssettings.google.com или заблокировав cookie в браузере.',
        ],
      },
      {
        heading: '5. Как мы делимся вашей информацией',
        body: [
          'Мы не продаём личную информацию. Мы можем передавать её страховым компаниям для получения расчётов, поставщикам услуг, регуляторам по требованию закона, а также правопреемнику при продаже бизнеса.',
        ],
      },
      {
        heading: 'ИИ-ассистент и обработка третьими сторонами',
        body: [
          'На Сайте работает чат-ассистент с искусственным интеллектом. Когда вы им пользуетесь, содержание вашей переписки — включая имя, номер телефона и любые другие данные, которые вы решите написать, — передаётся стороннему поставщику услуг искусственного интеллекта, который формирует ответы ассистента от нашего имени. Этот поставщик обрабатывает переписку исключительно для подготовки ответа для нас и не вправе использовать её, чтобы связаться с вами.',
          'Копия каждой переписки также отправляется в агентство по электронной почте, чтобы лицензированный агент мог связаться с вами. Если мы подключим платформу для работы с обращениями клиентов, краткие сводки переписки могут передаваться и в неё.',
          'Ассистент не является лицензированным агентом и не может назвать цену, подтвердить покрытие или оформить полис. Если вы предпочитаете, чтобы ваш разговор не обрабатывался таким образом, позвоните нам по номеру (305) 859-3953 или воспользуйтесь формой обратного звонка.',
        ],
      },
      {
        heading: 'Сколько мы храним вашу информацию',
        body: [
          'Заявки на расчёт, заявки на обратный звонок и транскрипты чата мы храним до двадцати четырёх (24) месяцев с момента вашего последнего обращения, после чего удаляем или обезличиваем. Записи, которые мы обязаны хранить по требованиям страхового регулирования, налогового или иного законодательства — включая записи о вашем согласии на связь, — хранятся в течение срока, установленного законом Флориды, как правило пять (5) лет. Вы можете попросить нас удалить информацию раньше, с учётом этих обязательств.',
        ],
      },
      {
        heading: '6. Безопасность данных',
        body: ['Мы применяем разумные меры безопасности, хотя ни один метод передачи данных не является абсолютно безопасным.'],
      },
      {
        heading: '7. Ваш выбор',
        body: [
          'Вы можете отказаться от SMS, ответив «STOP»; запросить просмотр или удаление своих данных; отказаться предоставлять информацию (это может ограничить наши услуги).',
        ],
      },
      {
        heading: '8. Конфиденциальность несовершеннолетних',
        body: ['Сайт не предназначен для лиц младше 18 лет.'],
      },
      {
        heading: '9. Свяжитесь с нами',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Телефон: (305) 859-3953'],
      },
      {
        heading: '10. Изменения в этой Политике',
        body: ['Мы можем периодически обновлять данную Политику. Обновления вступают в силу после публикации на Сайте.'],
      },
    ],
  },
};

export const termsOfService: Record<'en' | 'es' | 'ru', LegalDoc> = {
  en: {
    title: 'Terms of Service',
    effectiveDateLabel: 'Effective Date: July 2026',
    intro:
      'Please read these Terms of Service ("Terms") carefully before using mkagencyinc.com (the "Site"), operated by M&K Agency Inc. By accessing or using the Site, you agree to be bound by these Terms.',
    sections: [
      {
        heading: '1. About Our Services',
        body: [
          'M&K Agency Inc. is a family-owned insurance agency licensed in the State of Florida. We help customers review coverage options and obtain insurance quotes through a licensed agent. The Site does not itself provide insurance coverage, and no coverage exists until a policy is formally issued by a carrier.',
        ],
      },
      {
        heading: '2. No Guarantee of Coverage, Price, or Eligibility',
        body: [
          'Any quote or coverage example shown on the Site is for informational purposes only and is not a binding offer of insurance. Final eligibility, terms, and premiums are determined solely by the applicable carrier following underwriting review.',
        ],
      },
      {
        heading: '3. AI Chat Assistant',
        body: [
          'The Site may include an AI-assisted chat feature intended to answer general questions and help route requests to a licensed agent. Responses are for general informational purposes only, do not constitute professional advice, and do not create an agent-client relationship. Coverage decisions must be confirmed with a licensed agent.',
        ],
      },
      {
        heading: '4. Communications Consent',
        body: [
          'By submitting your contact information, you consent to be contacted by M&K Agency by phone, text, or email regarding insurance products and services, as described in our Privacy Policy.',
        ],
      },
      {
        heading: '5. Accuracy of Information You Provide',
        body: [
          'You agree to provide accurate, current, and complete information. Providing false or misleading information may result in denial of coverage, cancellation of a policy, or denial of a claim by the applicable carrier.',
        ],
      },
      {
        heading: '6. Intellectual Property',
        body: [
          'All content on the Site is the property of M&K Agency Inc. or its licensors and is protected by applicable intellectual property laws.',
        ],
      },
      {
        heading: '7. Third-Party Links and Carriers',
        body: [
          'We do not control and are not responsible for the content, policies, or practices of any third-party carrier or service provider referenced on the Site.',
        ],
      },
      {
        heading: '8. Limitation of Liability',
        body: [
          'To the fullest extent permitted by law, M&K Agency Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Site.',
        ],
      },
      {
        heading: '9. Governing Law',
        body: [
          'These Terms are governed by the laws of the State of Florida. Any disputes shall be resolved in the state or federal courts located in Miami-Dade County, Florida.',
        ],
      },
      {
        heading: '10. Changes to These Terms',
        body: ['We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance.'],
      },
      {
        heading: '11. Contact Us',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Phone: (305) 859-3953'],
      },
    ],
  },
  es: {
    title: 'Términos de Servicio',
    effectiveDateLabel: 'Fecha de vigencia: julio de 2026',
    intro:
      'Lea cuidadosamente estos Términos de Servicio antes de usar mkagencyinc.com, operado por M&K Agency Inc. Al usar el Sitio, usted acepta estos Términos.',
    sections: [
      {
        heading: '1. Sobre Nuestros Servicios',
        body: [
          'M&K Agency Inc. es una agencia de seguros familiar con licencia en Florida. Ayudamos a revisar opciones de cobertura y obtener cotizaciones a través de un agente licenciado. El Sitio no proporciona cobertura por sí mismo.',
        ],
      },
      {
        heading: '2. Sin Garantía de Cobertura, Precio o Elegibilidad',
        body: ['Cualquier cotización mostrada es solo informativa y no es una oferta vinculante. La aseguradora determina la elegibilidad final.'],
      },
      {
        heading: '3. Asistente de Chat con IA',
        body: ['Las respuestas del asistente de IA son solo informativas y no constituyen asesoría profesional ni crean relación agente-cliente.'],
      },
      {
        heading: '4. Consentimiento para Comunicaciones',
        body: ['Al enviar su información de contacto, usted consiente ser contactado por M&K Agency sobre seguros, según nuestra Política de Privacidad.'],
      },
      {
        heading: '5. Exactitud de la Información',
        body: ['Proporcionar información falsa puede resultar en denegación de cobertura o de un reclamo.'],
      },
      {
        heading: '6. Propiedad Intelectual',
        body: ['Todo el contenido del Sitio es propiedad de M&K Agency Inc. o sus licenciantes.'],
      },
      {
        heading: '7. Enlaces de Terceros',
        body: ['No controlamos ni somos responsables de terceros referenciados en el Sitio.'],
      },
      {
        heading: '8. Limitación de Responsabilidad',
        body: ['M&K Agency Inc. no será responsable de daños indirectos o consecuentes derivados del uso del Sitio.'],
      },
      {
        heading: '9. Ley Aplicable',
        body: ['Estos Términos se rigen por las leyes de Florida. Disputas resueltas en tribunales del Condado de Miami-Dade.'],
      },
      {
        heading: '10. Cambios a estos Términos',
        body: ['El uso continuado del Sitio tras cambios constituye aceptación.'],
      },
      {
        heading: '11. Contáctenos',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Teléfono: (305) 859-3953'],
      },
    ],
  },
  ru: {
    title: 'Условия использования',
    effectiveDateLabel: 'Дата вступления в силу: июль 2026',
    intro:
      'Пожалуйста, ознакомьтесь с Условиями использования перед использованием mkagencyinc.com, управляемого M&K Agency Inc. Используя Сайт, вы соглашаетесь с настоящими Условиями.',
    sections: [
      {
        heading: '1. О наших услугах',
        body: ['M&K Agency Inc. — семейное страховое агентство, лицензированное во Флориде. Сайт сам по себе не предоставляет покрытие.'],
      },
      {
        heading: '2. Отсутствие гарантии покрытия или цены',
        body: ['Любой расчёт стоимости на Сайте носит информационный характер. Итоговые условия определяет страховая компания.'],
      },
      {
        heading: '3. ИИ-чат-ассистент',
        body: ['Ответы ИИ-ассистента носят общий информационный характер и не создают отношений агент-клиент.'],
      },
      {
        heading: '4. Согласие на коммуникации',
        body: ['Отправляя контактные данные, вы соглашаетесь на связь с M&K Agency по вопросам страхования согласно нашей Политике конфиденциальности.'],
      },
      {
        heading: '5. Точность предоставляемой информации',
        body: ['Предоставление ложной информации может привести к отказу в покрытии или выплате.'],
      },
      {
        heading: '6. Интеллектуальная собственность',
        body: ['Весь контент Сайта — собственность M&K Agency Inc. или её лицензиаров.'],
      },
      {
        heading: '7. Ссылки на третьих лиц',
        body: ['Мы не несём ответственности за сторонние компании, упомянутые на Сайте.'],
      },
      {
        heading: '8. Ограничение ответственности',
        body: ['M&K Agency Inc. не несёт ответственности за косвенные убытки, связанные с использованием Сайта.'],
      },
      {
        heading: '9. Применимое право',
        body: ['Настоящие Условия регулируются законодательством Флориды. Споры рассматриваются в судах округа Майами-Дейд.'],
      },
      {
        heading: '10. Изменения настоящих Условий',
        body: ['Продолжение использования Сайта после публикации изменений означает их принятие.'],
      },
      {
        heading: '11. Свяжитесь с нами',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Телефон: (305) 859-3953'],
      },
    ],
  },
};

// Rules for the /[lang]/referral page: Refer a Friend, Referral Partners and the
// community directory (coming soon). Plain words on purpose.
// COMPLIANCE: no reward/thank-you is offered or promised (Florida anti-rebating);
// partners: no fees, gifts or payments in either direction (RESPA). Never name a
// carrier brand or former staff here; no prices, stats or reviews.
export const referralRules: Record<'en' | 'es' | 'ru', LegalDoc> = {
  en: {
    title: 'Referrals & Partners: Program Rules',
    effectiveDateLabel: 'Effective Date: July 2026 · Last updated: September 2026',
    intro:
      'These rules cover the three parts of our Referrals & Partners page: Refer a Friend, for anyone who wants to introduce a friend or family member to M&K Agency Inc.; Referral Partners, for local businesses; and our community business directory, which is coming soon. None of these is a contest, sweepstakes or promotion, and no money, prize, gift or other thing of value is offered to anyone.',
    sections: [
      {
        heading: '1. Anyone Can Refer',
        body: [
          'Anyone can refer a friend or family member to us. You do not need to be our client, and you do not need to buy anything.',
        ],
      },
      {
        heading: '2. No Purchase Needed, Nothing for Buying a Policy',
        body: [
          'No purchase is required, for you or for the person you refer. Nothing is offered or given to anyone for buying a policy, and a referral never changes the price or terms of any policy.',
        ],
      },
      {
        heading: '3. No Reward or Thank-You',
        body: [
          'We do not offer a reward, gift, gift card, credit, donation or thank-you of any kind for a referral. Please refer people only because you think we can help them.',
        ],
      },
      {
        heading: '4. Get Your Friend\u2019s Permission First',
        body: [
          'Only refer someone who has told you it is OK to share their name and phone number with us and for us to contact them. By sending a referral, you confirm that you have that permission.',
          'Our first contact with a referred person is a call made by a person on our team, not an automated call or text. On that call we explain how we got their number and confirm they agree to hear from us. If they say no, we will not contact them again about that referral.',
        ],
      },
      {
        heading: '5. How We Use Referral Information',
        body: [
          'We use the details in a referral only to contact that person about insurance and to follow up with you about the referral. We never sell referral contacts, and we do not give them to other businesses for their marketing. Our Privacy Policy applies to everything you send us.',
        ],
      },
      {
        heading: '6. Referral Partners: Who Can Join',
        body: [
          'Local businesses such as realtors, car dealers, contractors, accountants and property managers can ask to become a referral partner. Partners do not need to be our clients or buy anything from us. A person on our team calls every business before a partnership starts.',
        ],
      },
      {
        heading: '7. Partners: No Fees, Gifts or Payments in Either Direction',
        body: [
          'No referral fees, gifts or payments of any kind are offered, paid, requested or accepted, in either direction. We do not pay partners for sending us clients, and partners do not pay us or give us anything of value. No one is required to refer anyone. This applies to every partner, including realtors, lenders, title companies and other real estate professionals.',
          'Being a partner does not earn a directory listing, a better position in the directory, or any other benefit.',
        ],
      },
      {
        heading: '8. We May Decline or End a Partnership',
        body: [
          'We may decline a partnership request, or end a partnership at any time, for any reason. A partner can end the partnership at any time by telling us.',
        ],
      },
      {
        heading: '9. Community Directory (Coming Soon)',
        body: [
          'The directory of local businesses is not live yet. Anyone can recommend a business using the form on the Referrals & Partners page. When the directory opens, a business will be listed free of charge, and only after a person on our team calls the owner to confirm that the business is real, currently operating, and agrees to be listed.',
          'That phone check is not an endorsement or a guarantee of quality, pricing, licensing or insurance. Anyone who hires a listed business does so at their own discretion. Listings are never paid for, never tied to buying insurance, and never ranked by who sends us clients. We do not list insurance agencies, insurance agents or insurance companies. We may decline or remove any listing, and an owner can ask us to remove theirs at any time.',
        ],
      },
      {
        heading: '10. Removing Your Information',
        body: [
          'Whether you are a referrer, a referred friend, a partner or a recommended business, you can ask us to remove your information by calling (305) 859-3953 or visiting our office. You can also reply STOP to any text from us to stop texts. We will delete your information, except records the law requires us to keep, such as records of consent to be contacted, as described in our Privacy Policy.',
        ],
      },
      {
        heading: '11. Contact',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Phone: (305) 859-3953'],
      },
      {
        heading: '12. Changes to These Rules',
        body: ['We may update these rules at any time. The most current version will always be available on this page.'],
      },
    ],
  },
  es: {
    title: 'Recomendaciones y socios: reglas del programa',
    effectiveDateLabel: 'Fecha de vigencia: julio de 2026 · Última actualización: septiembre de 2026',
    intro:
      'Estas reglas cubren las tres partes de nuestra página de Recomendaciones y socios: Recomiende a un amigo, para cualquier persona que quiera presentarnos a un amigo o familiar; Socios de referidos, para negocios locales; y nuestro directorio comunitario de negocios, que estará disponible próximamente. Nada de esto es un concurso, sorteo o promoción, y no se ofrece dinero, premios, regalos ni ninguna otra cosa de valor a nadie.',
    sections: [
      {
        heading: '1. Cualquier persona puede recomendar',
        body: [
          'Cualquier persona puede recomendarnos a un amigo o familiar. No necesita ser nuestro cliente ni comprar nada.',
        ],
      },
      {
        heading: '2. No se requiere compra y no se da nada por comprar una póliza',
        body: [
          'No se requiere ninguna compra, ni de usted ni de la persona que recomienda. No se ofrece ni se da nada a nadie por comprar una póliza, y una recomendación nunca cambia el precio ni las condiciones de ninguna póliza.',
        ],
      },
      {
        heading: '3. Sin recompensa ni agradecimiento material',
        body: [
          'No ofrecemos recompensas, regalos, tarjetas de regalo, créditos, donaciones ni agradecimientos de ningún tipo por una recomendación. Por favor, recomiende a alguien solo porque cree que podemos ayudarle.',
        ],
      },
      {
        heading: '4. Primero, el permiso de su amigo',
        body: [
          'Recomiende solo a alguien que le haya dicho que puede compartir su nombre y teléfono con nosotros y que podemos contactarle. Al enviar una recomendación, usted confirma que tiene ese permiso.',
          'Nuestro primer contacto con la persona recomendada es una llamada hecha por una persona de nuestro equipo, no una llamada o texto automatizado. En esa llamada explicamos cómo obtuvimos su número y confirmamos que acepta que le contactemos. Si dice que no, no volveremos a contactarle por esa recomendación.',
        ],
      },
      {
        heading: '5. Cómo usamos la información de una recomendación',
        body: [
          'Usamos los datos de una recomendación solo para contactar a esa persona sobre seguros y para darle seguimiento a usted sobre la recomendación. Nunca vendemos los contactos recomendados ni los entregamos a otros negocios para su publicidad. Nuestra Política de Privacidad se aplica a todo lo que nos envía.',
        ],
      },
      {
        heading: '6. Socios de referidos: quién puede participar',
        body: [
          'Negocios locales como agentes inmobiliarios, concesionarios de autos, contratistas, contadores y administradores de propiedades pueden solicitar ser socios de referidos. Los socios no necesitan ser nuestros clientes ni comprarnos nada. Una persona de nuestro equipo llama a cada negocio antes de iniciar una alianza.',
        ],
      },
      {
        heading: '7. Socios: sin comisiones, regalos ni pagos en ninguna dirección',
        body: [
          'No se ofrecen, pagan, piden ni aceptan comisiones por recomendación, regalos ni pagos de ningún tipo, en ninguna dirección. No pagamos a los socios por enviarnos clientes, y los socios no nos pagan ni nos dan nada de valor. Nadie está obligado a recomendar a nadie. Esto aplica a todos los socios, incluidos agentes inmobiliarios, prestamistas, compañías de títulos y otros profesionales de bienes raíces.',
          'Ser socio no da derecho a aparecer en el directorio, a una mejor posición en él ni a ningún otro beneficio.',
        ],
      },
      {
        heading: '8. Podemos rechazar o terminar una alianza',
        body: [
          'Podemos rechazar una solicitud de alianza, o terminar una alianza en cualquier momento, por cualquier motivo. Un socio puede terminar la alianza en cualquier momento avisándonos.',
        ],
      },
      {
        heading: '9. Directorio comunitario (próximamente)',
        body: [
          'El directorio de negocios locales todavía no está disponible. Cualquier persona puede recomendar un negocio con el formulario de la página de Recomendaciones y socios. Cuando el directorio se abra, un negocio aparecerá gratis y solo después de que una persona de nuestro equipo llame al propietario para confirmar que el negocio es real, que está operando y que acepta aparecer.',
          'Esa verificación telefónica no es un respaldo ni una garantía de calidad, precios, licencias o seguros. Quien contrate a un negocio del directorio lo hace bajo su propio criterio. Los listados nunca se pagan, nunca dependen de comprar un seguro y nunca se ordenan según quién nos envía clientes. No incluimos agencias de seguros, agentes de seguros ni compañías de seguros. Podemos rechazar o eliminar cualquier listado, y un propietario puede pedirnos que eliminemos el suyo en cualquier momento.',
        ],
      },
      {
        heading: '10. Cómo eliminar su información',
        body: [
          'Ya sea que usted haya recomendado a alguien, haya sido recomendado, sea socio o un negocio recomendado, puede pedirnos que eliminemos su información llamando al (305) 859-3953 o visitando nuestra oficina. También puede responder STOP a cualquier texto nuestro para dejar de recibir textos. Eliminaremos su información, excepto los registros que la ley nos exige conservar, como los registros de consentimiento para ser contactado, según se describe en nuestra Política de Privacidad.',
        ],
      },
      {
        heading: '11. Contacto',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Teléfono: (305) 859-3953'],
      },
      {
        heading: '12. Cambios a estas reglas',
        body: ['Podemos actualizar estas reglas en cualquier momento. La versión más actual siempre estará disponible en esta página.'],
      },
    ],
  },
  ru: {
    title: 'Рекомендации и партнёры: правила программы',
    effectiveDateLabel: 'Дата вступления в силу: июль 2026 · Последнее обновление: сентябрь 2026',
    intro:
      'Эти правила относятся к трём частям нашей страницы «Рекомендации и партнёры»: «Порекомендуйте друга» — для всех, кто хочет познакомить с M&K Agency Inc. друга или родственника; «Партнёры» — для местного бизнеса; и каталог местных компаний, который скоро появится. Ничто из этого не является конкурсом, розыгрышем или рекламной акцией, и никому не предлагаются деньги, призы, подарки или что-либо иное, имеющее ценность.',
    sections: [
      {
        heading: '1. Рекомендовать может любой',
        body: [
          'Порекомендовать нам друга или родственника может любой человек. Для этого не нужно быть нашим клиентом и ничего не нужно покупать.',
        ],
      },
      {
        heading: '2. Покупка не требуется, за покупку полиса ничего не даётся',
        body: [
          'Покупка не требуется ни от вас, ни от человека, которого вы рекомендуете. Никому ничего не предлагается и не даётся за покупку полиса, и рекомендация никогда не меняет цену или условия какого-либо полиса.',
        ],
      },
      {
        heading: '3. Без вознаграждений и подарков',
        body: [
          'Мы не предлагаем за рекомендацию никаких вознаграждений, подарков, подарочных карт, бонусов, пожертвований или иной благодарности. Пожалуйста, рекомендуйте нас только потому, что считаете, что мы можем помочь.',
        ],
      },
      {
        heading: '4. Сначала получите согласие друга',
        body: [
          'Рекомендуйте только тех, кто разрешил вам передать нам своё имя и номер телефона и согласился, чтобы мы с ним связались. Отправляя рекомендацию, вы подтверждаете, что такое разрешение у вас есть.',
          'Первый контакт с рекомендованным человеком — это звонок сотрудника нашей команды, а не автоматический звонок или SMS. Во время этого звонка мы объясняем, откуда у нас его номер, и уточняем, согласен ли он на общение с нами. Если он откажется, мы больше не будем связываться с ним по этой рекомендации.',
        ],
      },
      {
        heading: '5. Как мы используем данные из рекомендаций',
        body: [
          'Мы используем данные из рекомендации только для того, чтобы связаться с этим человеком по вопросам страхования и сообщить вам о ходе рекомендации. Мы никогда не продаём контакты из рекомендаций и не передаём их другим компаниям для рекламы. На всё, что вы нам отправляете, распространяется наша Политика конфиденциальности.',
        ],
      },
      {
        heading: '6. Партнёры: кто может участвовать',
        body: [
          'Стать партнёром могут местные компании: риелторы, автодилеры, подрядчики, бухгалтеры, управляющие недвижимостью и другие. Партнёрам не нужно быть нашими клиентами или что-либо у нас покупать. Прежде чем начать партнёрство, сотрудник нашей команды звонит в каждую компанию.',
        ],
      },
      {
        heading: '7. Партнёры: никаких вознаграждений, подарков или выплат ни в одну сторону',
        body: [
          'Никакие вознаграждения за рекомендации, подарки или выплаты любого рода не предлагаются, не выплачиваются, не запрашиваются и не принимаются — ни в одну, ни в другую сторону. Мы не платим партнёрам за клиентов, а партнёры не платят нам и не дают нам ничего ценного. Никто не обязан никого рекомендовать. Это относится ко всем партнёрам, включая риелторов, кредиторов, титульные компании и других специалистов по недвижимости.',
          'Статус партнёра не даёт права на размещение в каталоге, более высокое место в нём или какие-либо иные преимущества.',
        ],
      },
      {
        heading: '8. Мы можем отказать в партнёрстве или прекратить его',
        body: [
          'Мы можем отклонить заявку на партнёрство или прекратить партнёрство в любое время по любой причине. Партнёр может прекратить партнёрство в любое время, сообщив нам об этом.',
        ],
      },
      {
        heading: '9. Каталог местных компаний (скоро)',
        body: [
          'Каталог местных компаний пока не запущен. Предложить компанию может любой через форму на странице «Рекомендации и партнёры». Когда каталог откроется, компания будет размещаться бесплатно и только после того, как сотрудник нашей команды позвонит владельцу и подтвердит, что компания существует, работает и согласна на размещение.',
          'Такая проверка по телефону не является одобрением или гарантией качества, цен, лицензий или страховки. Тот, кто обращается к компании из каталога, делает это на своё усмотрение. Размещение никогда не оплачивается, никогда не зависит от покупки страховки и никогда не упорядочивается по тому, кто присылает нам клиентов. Мы не размещаем страховые агентства, страховых агентов и страховые компании. Мы можем отказать в размещении или удалить любую запись, а владелец может в любое время попросить удалить свою.',
        ],
      },
      {
        heading: '10. Как удалить ваши данные',
        body: [
          'Кем бы вы ни были — тем, кто рекомендовал, тем, кого рекомендовали, партнёром или предложенной компанией, — вы можете попросить удалить ваши данные, позвонив по номеру (305) 859-3953 или посетив наш офис. Также можно ответить STOP на любое наше SMS, чтобы больше не получать сообщения. Мы удалим ваши данные, за исключением записей, которые закон обязывает нас хранить, например записей о согласии на связь, как описано в нашей Политике конфиденциальности.',
        ],
      },
      {
        heading: '11. Контакты',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Телефон: (305) 859-3953'],
      },
      {
        heading: '12. Изменения правил',
        body: ['Мы можем обновлять эти правила в любое время. Актуальная версия всегда доступна на этой странице.'],
      },
    ],
  },
};

export const disclosures: Record<'en' | 'es' | 'ru', LegalDoc> = {
  en: {
    title: 'Insurance Disclosures',
    effectiveDateLabel: 'Effective date: July 25, 2026',
    intro:
      'This page provides licensing information and required insurance disclosures for M&K Agency Inc. It is provided for transparency and consumer protection.',
    sections: [
      {
        heading: 'Licensing',
        body: [
          'M&K Agency Inc is a licensed insurance agency in the State of Florida. Florida Agency License #L109526, Agency NPN #19586268. Agent in Charge: Mikhail Kozlov, Florida License #W639521, NPN #17798891.',
          'Office: 33550 South Dixie Highway, Ste 102, Florida City, FL 33034. Phone: (305) 859-3953.',
          'License status can be verified through the Florida Department of Financial Services licensee search at licenseesearch.fldfs.com.',
        ],
      },
      {
        heading: 'Carrier Relationships',
        body: [
          'Insurance products are offered through insurance carriers with which the agency and its agents hold appointments. All trademarks and brand names belong to their respective owners. This website is operated by M&K Agency Inc and is not the official website of any insurance carrier.',
        ],
      },
      {
        heading: 'No Coverage Bound',
        body: [
          'Nothing on this website binds, changes, or extends insurance coverage. Coverage cannot be bound, amended, or cancelled through this website, by email, by text message, or by voicemail. No coverage is in effect until confirmed in writing by the insurance company.',
        ],
      },
      {
        heading: 'Quotes Are Estimates',
        body: [
          'Premium quotes and rate information are estimates only, based on the information you provide. Final rates and eligibility are determined by the insurance company after underwriting review and are subject to its terms, conditions, and availability. Discounts are subject to eligibility requirements and may vary.',
        ],
      },
      {
        heading: 'AI Chat Assistant',
        body: [
          'The “Nick AI” feature is an AI-assisted tool intended to answer general questions and route requests to a licensed agent. Its responses are for general informational purposes only, do not constitute insurance, legal, or financial advice, and do not bind coverage or create an agent-client relationship. Coverage questions must be confirmed with a licensed agent.',
        ],
      },
      {
        heading: 'Communications, Calls, and Text Messages',
        body: [
          'By submitting a form with your consent, you authorize us to contact you by phone, text message (SMS), and email regarding your inquiry. Consent is not a condition of purchase. Message frequency varies; message and data rates may apply. Reply STOP to cancel text messages or HELP for help. See our Privacy Policy for details.',
        ],
      },
      {
        heading: 'Translations',
        body: [
          'This website is offered in English, Spanish, and Russian. Translations are provided for convenience only. In the event of any conflict or discrepancy, the English-language version controls. Insurance policies and related documents are issued in English.',
        ],
      },
      {
        heading: 'Contact',
        body: ['Questions about these disclosures: mikhailkozlov@allstate.com or (305) 859-3953.'],
      },
    ],
  },
  es: {
    title: 'Divulgaciones de Seguros',
    effectiveDateLabel: 'Fecha de vigencia: 25 de julio de 2026',
    intro:
      'Esta página proporciona información de licencias y las divulgaciones de seguros requeridas para M&K Agency Inc. Se ofrece por transparencia y protección al consumidor.',
    sections: [
      {
        heading: 'Licencias',
        body: [
          'M&K Agency Inc es una agencia de seguros con licencia en el Estado de Florida. Licencia de Agencia de Florida #L109526, NPN de la Agencia #19586268. Agente a Cargo: Mikhail Kozlov, Licencia de Florida #W639521, NPN #17798891.',
          'Oficina: 33550 South Dixie Highway, Ste 102, Florida City, FL 33034. Teléfono: (305) 859-3953.',
          'El estado de la licencia puede verificarse en el buscador del Departamento de Servicios Financieros de Florida: licenseesearch.fldfs.com.',
        ],
      },
      {
        heading: 'Relaciones con Aseguradoras',
        body: [
          'Los productos de seguros se ofrecen a través de aseguradoras con las que la agencia y sus agentes tienen nombramientos. Todas las marcas pertenecen a sus respectivos dueños. Este sitio web es operado por M&K Agency Inc y no es el sitio oficial de ninguna aseguradora.',
        ],
      },
      {
        heading: 'No Se Vincula Cobertura',
        body: [
          'Nada en este sitio web vincula, modifica ni extiende cobertura de seguro. La cobertura no puede vincularse, modificarse ni cancelarse a través de este sitio, por correo electrónico, mensaje de texto o buzón de voz. Ninguna cobertura está vigente hasta que la aseguradora la confirme por escrito.',
        ],
      },
      {
        heading: 'Las Cotizaciones Son Estimaciones',
        body: [
          'Las cotizaciones son solo estimaciones, basadas en la información que usted proporciona. Las tarifas finales y la elegibilidad las determina la aseguradora tras la revisión de suscripción y están sujetas a sus términos, condiciones y disponibilidad. Los descuentos están sujetos a requisitos de elegibilidad.',
        ],
      },
      {
        heading: 'Asistente de Chat con IA',
        body: [
          'La función “Nick AI” es una herramienta asistida por IA para responder preguntas generales y dirigir solicitudes a un agente con licencia. Sus respuestas son solo informativas, no constituyen asesoramiento de seguros, legal ni financiero, y no vinculan cobertura. Las decisiones de cobertura deben confirmarse con un agente con licencia.',
        ],
      },
      {
        heading: 'Comunicaciones, Llamadas y Mensajes de Texto',
        body: [
          'Al enviar un formulario con su consentimiento, usted nos autoriza a contactarlo por teléfono, mensaje de texto (SMS) y correo electrónico sobre su consulta. El consentimiento no es una condición de compra. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar o HELP para ayuda. Consulte nuestra Política de Privacidad.',
        ],
      },
      {
        heading: 'Traducciones',
        body: [
          'Este sitio se ofrece en inglés, español y ruso. Las traducciones son solo por conveniencia. En caso de conflicto o discrepancia, prevalece la versión en inglés. Las pólizas y documentos relacionados se emiten en inglés.',
        ],
      },
      {
        heading: 'Contacto',
        body: ['Preguntas sobre estas divulgaciones: mikhailkozlov@allstate.com o (305) 859-3953.'],
      },
    ],
  },
  ru: {
    title: 'Раскрытие информации',
    effectiveDateLabel: 'Дата вступления в силу: 25 июля 2026 г.',
    intro:
      'На этой странице приведена информация о лицензиях и обязательные страховые раскрытия M&K Agency Inc.',
    sections: [
      {
        heading: 'Лицензии',
        body: [
          'M&K Agency Inc — лицензированное страховое агентство штата Флорида. Лицензия агентства #L109526, NPN агентства #19586268. Главный агент: Mikhail Kozlov, лицензия #W639521, NPN #17798891.',
          'Офис: 33550 South Dixie Highway, Ste 102, Florida City, FL 33034. Телефон: (305) 859-3953.',
          'Статус лицензии можно проверить на сайте Департамента финансовых услуг Флориды: licenseesearch.fldfs.com.',
        ],
      },
      {
        heading: 'Отношения со страховыми компаниями',
        body: [
          'Страховые продукты предлагаются через страховые компании, в которых агентство и его агенты имеют назначения (appointments). Все товарные знаки принадлежат их владельцам. Этот сайт управляется M&K Agency Inc и не является официальным сайтом какой-либо страховой компании.',
        ],
      },
      {
        heading: 'Покрытие не оформляется через сайт',
        body: [
          'Ничто на этом сайте не оформляет, не изменяет и не продлевает страховое покрытие. Покрытие нельзя оформить, изменить или отменить через сайт, по email, SMS или голосовой почте. Покрытие вступает в силу только после письменного подтверждения страховой компании.',
        ],
      },
      {
        heading: 'Расчёты — только оценка',
        body: [
          'Расчёты стоимости — это оценки, основанные на предоставленной вами информации. Окончательные тарифы определяет страховая компания после андеррайтинга. Скидки зависят от условий и могут различаться.',
        ],
      },
      {
        heading: 'AI-чат',
        body: [
          'Функция «Nick AI» — инструмент на базе ИИ для ответов на общие вопросы и передачи запросов лицензированному агенту. Его ответы носят информационный характер, не являются консультацией и не оформляют покрытие. Вопросы покрытия подтверждайте у лицензированного агента.',
        ],
      },
      {
        heading: 'Звонки и сообщения',
        body: [
          'Отправляя форму с согласием, вы разрешаете связываться с вами по телефону, SMS и email по вашему запросу. Согласие не является условием покупки. Ответьте STOP, чтобы отказаться от SMS. Подробности — в Политике конфиденциальности.',
        ],
      },
      {
        heading: 'Переводы',
        body: [
          'Сайт доступен на английском, испанском и русском языках. Переводы предоставлены для удобства. При расхождениях преимущественную силу имеет английская версия. Страховые полисы оформляются на английском языке.',
        ],
      },
      {
        heading: 'Контакт',
        body: ['Вопросы по раскрытиям: mikhailkozlov@allstate.com или (305) 859-3953.'],
      },
    ],
  },
};
