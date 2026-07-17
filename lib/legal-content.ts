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
    effectiveDateLabel: 'Effective Date: July 2026',
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
          'We use the information we collect to provide insurance quotes and respond to your inquiries; contact you by phone, text message, email, or automated/AI-assisted communications about insurance products and services; operate, maintain, and improve the Site and our services; comply with legal and regulatory obligations; and communicate with insurance carriers on your behalf to obtain quotes or bind coverage, where you have requested that we do so.',
        ],
      },
      {
        heading: '3. Consent to Communications (TCPA)',
        body: [
          'By submitting your phone number through our Site, you agree that M&K Agency may contact you by phone call, text message, or automated/AI-assisted communications at the number provided regarding insurance products and services, even if that number is registered on a state or federal Do-Not-Call list. Consent to receive such communications is not a condition of purchasing any product or service. You may reply "STOP" to any text message at any time to opt out of further text communications, or contact us using the information below.',
        ],
      },
      {
        heading: '4. Cookies and Tracking Technologies',
        body: [
          'We may use cookies, web beacons, and similar technologies to recognize your browser, remember your preferences, and understand how visitors use the Site. You can typically set your browser to refuse cookies or alert you when cookies are being sent, though some parts of the Site may not function properly without them.',
        ],
      },
      {
        heading: '5. How We Share Your Information',
        body: [
          "We do not sell your personal information. We may share your information with insurance carriers and underwriters, in order to obtain quotes or bind coverage you have requested; service providers who perform functions on our behalf, such as email delivery, data hosting, customer communications platforms, and website analytics; regulators or other parties when required by law, subpoena, or other legal process; and a successor entity in the event of a merger, acquisition, or sale of some or all of our assets.",
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
    effectiveDateLabel: 'Fecha de vigencia: julio de 2026',
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
          'Al enviar su número de teléfono a través de nuestro Sitio, usted acepta que M&K Agency puede contactarlo por llamada, mensaje de texto o comunicaciones automatizadas/asistidas por IA sobre seguros, incluso si ese número está en una lista de No Llamar. El consentimiento no es una condición de compra. Puede responder "STOP" en cualquier momento para dejar de recibir mensajes de texto.',
        ],
      },
      {
        heading: '4. Cookies y Tecnologías de Seguimiento',
        body: [
          'Podemos usar cookies y tecnologías similares para reconocer su navegador y entender cómo se usa el Sitio. Puede configurar su navegador para rechazar cookies, aunque algunas partes del Sitio pueden no funcionar correctamente.',
        ],
      },
      {
        heading: '5. Cómo Compartimos su Información',
        body: [
          'No vendemos su información personal. Podemos compartirla con aseguradoras para obtener cotizaciones o cobertura; proveedores de servicios que trabajan en nuestro nombre; reguladores cuando lo exija la ley; y una entidad sucesora en caso de fusión o venta de activos.',
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
          'Указывая номер телефона на Сайте, вы соглашаетесь, что M&K Agency может связываться с вами по телефону, SMS или автоматизированным/ИИ-звонкам, даже если номер в списке «Не звонить». Согласие не является условием покупки. Ответьте «STOP», чтобы отказаться от SMS.',
        ],
      },
      {
        heading: '4. Файлы cookie',
        body: [
          'Мы можем использовать cookie-файлы, чтобы понимать, как посетители используют Сайт. Вы можете настроить браузер на отклонение cookie.',
        ],
      },
      {
        heading: '5. Как мы делимся вашей информацией',
        body: [
          'Мы не продаём личную информацию. Мы можем передавать её страховым компаниям для получения расчётов, поставщикам услуг, регуляторам по требованию закона, а также правопреемнику при продаже бизнеса.',
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
          'M&K Agency Inc. is an independent insurance agency licensed in the State of Florida. We help customers compare and obtain insurance quotes from multiple carriers. The Site does not itself provide insurance coverage, and no coverage exists until a policy is formally issued by a carrier.',
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
          'By submitting your contact information, you consent to be contacted by M&K Agency by phone, text, email, or automated/AI-assisted communications regarding insurance products and services, as described in our Privacy Policy.',
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
          'M&K Agency Inc. es una agencia de seguros independiente con licencia en Florida. Ayudamos a comparar cotizaciones de múltiples aseguradoras. El Sitio no proporciona cobertura por sí mismo.',
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
        body: ['M&K Agency Inc. — независимое страховое агентство, лицензированное во Флориде. Сайт сам по себе не предоставляет покрытие.'],
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

export const referralRules: Record<'en' | 'es' | 'ru', LegalDoc> = {
  en: {
    title: 'Referral Program — Official Rules',
    effectiveDateLabel: 'Effective Date: July 2026',
    intro:
      'The "We Care About Our Community" Referral Program is a free directory of local Florida businesses recommended by M&K Agency Inc. and the community. It is a goodwill and community-visibility feature of our website. It is not a contest, sweepstakes, lottery, or promotion, and no money, prize, or thing of value is awarded to any participant, referrer, or business.',
    sections: [
      {
        heading: '1. How a Business Gets Listed',
        body: [
          'Anyone may submit a local business for consideration using the "Recommend a local business" form. Submission requires: business name, address, category, owner first and last name, phone number, email address, and a short description.',
          'No business is added to the public map automatically. Before any listing goes live, a member of the M&K Agency team personally contacts the business owner by phone to confirm the business is real, currently operating, and that the owner consents to being listed. We call this step "Verified by M&K Agency."',
        ],
      },
      {
        heading: '2. What "Verified by M&K Agency" Means — and What It Does Not Mean',
        body: [
          'The badge means only that a member of our team spoke with the business owner and confirmed the business exists and is operating. It is not an endorsement, guarantee, or warranty of quality, safety, pricing, licensing, or legality; not a statement that the business is a client of M&K Agency or any insurance carrier; and not a representation that we verified the business\u2019s insurance coverage or professional credentials.',
          'Anyone who chooses to do business with a listed company does so at their own discretion and risk. M&K Agency is not a party to, and accepts no liability for, any transaction, dispute, injury, or loss arising from dealings with a listed business.',
        ],
      },
      {
        heading: '3. No Payment, No Kickback, No Rebate',
        body: [
          'Being listed is free. M&K Agency does not charge businesses to be listed and does not accept payment or any other thing of value in exchange for a listing. Listing is never conditioned on purchasing insurance from M&K Agency, and requesting or purchasing a quote is never required to submit or view a business recommendation.',
        ],
      },
      {
        heading: '4. No Prize, No Voting, No Purchase Necessary',
        body: [
          'There is currently no prize, drawing, sweepstakes, cash award, or donation tied to this program. If M&K Agency introduces any prize or donation component in the future, separate official rules will be published before that component launches, and no purchase or insurance quote will ever be required to participate.',
        ],
      },
      {
        heading: '5. What Cannot Be Listed',
        body: [
          'To avoid any appearance of endorsement, referral fee arrangements, or conflict of interest, M&K Agency does not list insurance agencies, insurance agents, insurance carriers, or other financial/insurance-adjacent businesses in this directory.',
        ],
      },
      {
        heading: '6. Removal of a Listing',
        body: [
          'M&K Agency may remove any listing at any time, for any reason. A business owner may request removal of their own listing at any time by contacting us.',
        ],
      },
      {
        heading: '7. No Guarantee of Placement or Timing',
        body: [
          'Submitting a recommendation does not guarantee a business will be listed, or establish any review timeline. We review submissions as staff time allows.',
        ],
      },
      {
        heading: '8. Contact',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Phone: (305) 859-3953'],
      },
      {
        heading: '9. Changes to These Rules',
        body: ['We may update these rules at any time. The most current version will always be available on this page.'],
      },
    ],
  },
  es: {
    title: 'Programa de Referidos — Reglas Oficiales',
    effectiveDateLabel: 'Fecha de vigencia: julio de 2026',
    intro:
      'El Programa de Referidos "We Care About Our Community" es un directorio gratuito de negocios locales de Florida recomendados por M&K Agency Inc. y la comunidad. No es un concurso, sorteo o lotería, y no se otorga dinero ni premios a ningún participante o negocio.',
    sections: [
      {
        heading: '1. Cómo un Negocio Aparece Listado',
        body: [
          'Cualquier persona puede enviar un negocio local usando el formulario "Recomendar un negocio local". Se requiere: nombre, dirección, categoría, nombre del propietario, teléfono, correo electrónico y una breve descripción.',
          'Ningún negocio se agrega automáticamente. Antes de publicar un listado, nuestro equipo contacta personalmente al propietario por teléfono para confirmar que el negocio es real y consiente ser listado ("Verificado por M&K Agency").',
        ],
      },
      {
        heading: '2. Qué Significa "Verificado por M&K Agency" — y Qué No Significa',
        body: [
          'Significa solo que hablamos con el propietario y confirmamos que el negocio existe. No es un respaldo de calidad, precios o legalidad; no significa que sea cliente de M&K Agency; no confirma su cobertura de seguro o licencias.',
          'Cualquier persona que haga negocios con una empresa listada lo hace bajo su propio riesgo. M&K Agency no acepta responsabilidad por transacciones con negocios listados.',
        ],
      },
      {
        heading: '3. Sin Pago, Sin Comisión, Sin Descuento',
        body: ['Ser listado es gratis. Nunca se requiere comprar un seguro para ser listado o para enviar/ver una recomendación.'],
      },
      {
        heading: '4. Sin Premio, Sin Votación, Sin Compra Necesaria',
        body: ['Actualmente no hay premio ni sorteo vinculado a este programa. Si eso cambia, se publicarán reglas oficiales separadas antes del lanzamiento.'],
      },
      {
        heading: '5. Qué No Puede Ser Listado',
        body: ['Para evitar conflictos de interés, no incluimos agencias de seguros, agentes o aseguradoras en este directorio.'],
      },
      {
        heading: '6. Eliminación de un Listado',
        body: ['Podemos eliminar cualquier listado en cualquier momento. Un propietario puede solicitar la eliminación de su propio listado.'],
      },
      {
        heading: '7. Sin Garantía de Publicación o Tiempo',
        body: ['Enviar una recomendación no garantiza que será listada ni establece un plazo de revisión.'],
      },
      {
        heading: '8. Contacto',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Teléfono: (305) 859-3953'],
      },
      {
        heading: '9. Cambios a Estas Reglas',
        body: ['La versión más actual siempre estará disponible en esta página.'],
      },
    ],
  },
  ru: {
    title: 'Программа рекомендаций — официальные правила',
    effectiveDateLabel: 'Дата вступления в силу: июль 2026',
    intro:
      'Программа рекомендаций «We Care About Our Community» — бесплатный каталог местных флоридских компаний, рекомендованных M&K Agency Inc. и сообществом. Это не конкурс и не лотерея — участникам не выплачиваются деньги или призы.',
    sections: [
      {
        heading: '1. Как компания попадает в список',
        body: [
          'Любой может предложить местную компанию через форму «Рекомендовать местную компанию»: название, адрес, категория, имя владельца, телефон, email и краткое описание.',
          'Ни одна компания не добавляется автоматически. Перед публикацией сотрудник M&K Agency лично звонит владельцу, чтобы подтвердить бизнес и получить согласие («Проверено M&K Agency»).',
        ],
      },
      {
        heading: '2. Что означает «Проверено M&K Agency» — и чего не означает',
        body: [
          'Означает только, что мы поговорили с владельцем и подтвердили существование бизнеса. Не является гарантией качества, цен или законности; не означает, что бизнес — клиент M&K Agency; не подтверждает страхование или лицензии бизнеса.',
          'Любой, кто ведёт дела с компанией из списка, делает это на свой риск. M&K Agency не несёт ответственности за такие сделки.',
        ],
      },
      {
        heading: '3. Без оплаты, без откатов, без скидок',
        body: ['Размещение бесплатно. Покупка страховки никогда не требуется для листинга или отправки рекомендации.'],
      },
      {
        heading: '4. Без призов, без голосования, покупка не требуется',
        body: ['В настоящее время призов или розыгрышей нет. Если это изменится, будут опубликованы отдельные официальные правила до запуска.'],
      },
      {
        heading: '5. Что не может быть добавлено в список',
        body: ['Во избежание конфликта интересов мы не размещаем страховые агентства, агентов или страховые компании в этом каталоге.'],
      },
      {
        heading: '6. Удаление листинга',
        body: ['Мы можем удалить любой листинг в любое время. Владелец может запросить удаление своего листинга.'],
      },
      {
        heading: '7. Отсутствие гарантии размещения или сроков',
        body: ['Отправка рекомендации не гарантирует размещение и не устанавливает сроков рассмотрения.'],
      },
      {
        heading: '8. Контакты',
        body: ['M&K Agency Inc. — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 — Телефон: (305) 859-3953'],
      },
      {
        heading: '9. Изменения настоящих правил',
        body: ['Актуальная версия всегда доступна на этой странице.'],
      },
    ],
  },
};
