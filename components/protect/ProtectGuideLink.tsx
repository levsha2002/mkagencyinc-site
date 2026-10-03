import Link from 'next/link';
import { PROTECT_PATH, topicPath, type TopicSlug } from '@/content/pages/protect/types-paths';

type Lang = 'en' | 'es' | 'ru';

const TEXT: Record<Lang, { kicker: string } & Record<TopicSlug | 'hub', string>> = {
  en: {
    kicker: 'Plain-language guide',
    hub: 'Protect your paycheck, your home and your family',
    'car-insurance': 'Hit by a driver with no insurance? Who pays your bills',
    'home-insurance': 'If someone gets hurt at your home: pools, dogs and falls',
    'life-insurance': 'If your paycheck stopped tomorrow, how long would your family be OK?',
    'umbrella-insurance': "Umbrella & wealth protection: real Florida verdicts vs. policy limits",
  },
  es: {
    kicker: 'Guía en palabras simples',
    hub: 'Proteja su sueldo, su casa y su familia',
    'car-insurance': '¿Lo chocó alguien sin seguro? Quién paga sus cuentas',
    'home-insurance': 'Si alguien se lesiona en su casa: piscinas, perros y caídas',
    'life-insurance': 'Si su sueldo se detuviera mañana, ¿cuánto tiempo estaría bien su familia?',
    'umbrella-insurance': 'Umbrella y patrimonio: veredictos reales en Florida vs. límites de póliza',
  },
  ru: {
    kicker: 'Гид простыми словами',
    hub: 'Защитите свой доход, дом и семью',
    'car-insurance': 'В вас врезался водитель без страховки? Кто оплатит счета',
    'home-insurance': 'Если кто-то пострадал у вас дома: бассейн, собака, падения',
    'life-insurance': 'Если завтра ваша зарплата пропадёт, сколько продержится семья?',
    'umbrella-insurance': 'Umbrella и защита капитала: реальные решения судов и лимиты полисов',
  },
};

/** Small callout linking an existing page to the /protect learning section. */
export default function ProtectGuideLink({ lang, topic, style }: { lang: string; topic?: TopicSlug; style?: React.CSSProperties }) {
  const l: Lang = lang === 'es' || lang === 'ru' ? lang : 'en';
  const t = TEXT[l];
  const href = `/${l}${topic ? topicPath(topic) : PROTECT_PATH}`;
  return (
    <p
      style={{
        maxWidth: '46rem', margin: '18px auto 0', background: '#fff', border: '1px solid #dfe8f6',
        borderLeft: '4px solid var(--gold)', borderRadius: 12, padding: '12px 16px', lineHeight: 1.5, ...style,
      }}
    >
      <span aria-hidden>🛡️ </span>
      <strong style={{ color: 'var(--navy)' }}>{t.kicker}:</strong>{' '}
      <Link href={href} style={{ color: 'var(--blue)', fontWeight: 700, textDecoration: 'underline' }}>
        {topic ? t[topic] : t.hub} →
      </Link>
    </p>
  );
}
