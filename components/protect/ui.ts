import { PHONE_DISPLAY } from '@/lib/dictionaries';
import type { Lang } from '@/content/pages/protect';

export const PROTECT_UI: Record<Lang, {
  home: string; guide: string; overview: string; tabsAria: string; updated: string; langLine: string;
  cta: string; call: string; ccLink: string; example: string; realCase: string;
  happened: string; decided: string; shows: string; source: string; readSource: string;
  faqTitle: string; checked: string; hours: string; tabIcons: Record<string, string>;
}> = {
  en: {
    home: 'Home', guide: 'Protection guide', overview: 'Overview', tabsAria: 'Protection topics', updated: 'Updated',
    langLine: 'English · Español · По-русски', cta: 'Have an agent call me', call: `Call ${PHONE_DISPLAY}`,
    ccLink: "Send us your policy and we'll check your coverage →", example: 'Example', realCase: 'Real case',
    happened: 'What happened', decided: 'What was decided', shows: 'What it shows', source: 'Source', readSource: 'Read the court record',
    faqTitle: 'Frequently asked questions', checked: 'Facts on this page were checked against these sources on October 3, 2026.',
    hours: 'M&K Agency · 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 · Mon–Fri 9–6, Saturday by appointment · Florida license #L109526',
    tabIcons: { overview: '🛡️', 'car-insurance': '🚗', 'home-insurance': '🏠', 'life-insurance': '❤️', 'umbrella-insurance': '☂️' },
  },
  es: {
    home: 'Inicio', guide: 'Guía de protección', overview: 'Resumen', tabsAria: 'Temas de protección', updated: 'Actualizado',
    langLine: 'English · Español · По-русски', cta: 'Que un agente me llame', call: `Llame al ${PHONE_DISPLAY}`,
    ccLink: 'Envíenos su póliza y revisamos su cobertura →', example: 'Ejemplo', realCase: 'Caso real',
    happened: 'Qué pasó', decided: 'Qué se decidió', shows: 'Qué nos enseña', source: 'Fuente', readSource: 'Ver el documento del tribunal',
    faqTitle: 'Preguntas frecuentes', checked: 'Los datos de esta página se verificaron con estas fuentes el 3 de octubre de 2026.',
    hours: 'M&K Agency · 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 · Lunes a viernes 9–6, sábados con cita · Licencia de Florida #L109526',
    tabIcons: { overview: '🛡️', 'car-insurance': '🚗', 'home-insurance': '🏠', 'life-insurance': '❤️', 'umbrella-insurance': '☂️' },
  },
  ru: {
    home: 'Главная', guide: 'Гид по защите', overview: 'Обзор', tabsAria: 'Темы гида по защите', updated: 'Обновлено',
    langLine: 'English · Español · По-русски', cta: 'Пусть агент мне перезвонит', call: `Звоните ${PHONE_DISPLAY}`,
    ccLink: 'Пришлите полис — проверим покрытие →', example: 'Пример', realCase: 'Реальное дело',
    happened: 'Что произошло', decided: 'Что решили', shows: 'Что это показывает', source: 'Источник', readSource: 'Открыть судебный документ',
    faqTitle: 'Частые вопросы', checked: 'Факты на этой странице сверены с этими источниками 3 октября 2026 года.',
    hours: 'M&K Agency · 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034 · Пн–Пт 9–6, в субботу по записи · Лицензия Флориды #L109526',
    tabIcons: { overview: '🛡️', 'car-insurance': '🚗', 'home-insurance': '🏠', 'life-insurance': '❤️', 'umbrella-insurance': '☂️' },
  },
};
