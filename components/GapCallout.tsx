import Link from 'next/link';

// Small "Buying a new car? Ask about gap insurance" link box shown on the auto
// insurance pages (car-insurance-florida-city and the personal-auto product
// pages). Links to /[lang]/gap-insurance.
const COPY = {
  en: { p: '🚗 Financing or leasing a new car? Ask about adding gap coverage to your auto policy. It can cover the difference between the car’s value and what you still owe if it’s totaled or stolen.', a: 'Learn about gap insurance →' },
  es: { p: '🚗 ¿Financia o arrienda un carro nuevo? Pregunte por agregar la cobertura GAP a su póliza de auto. Puede cubrir la diferencia entre el valor del carro y lo que aún debe si es pérdida total o se lo roban.', a: 'Conozca el seguro GAP →' },
  ru: { p: '🚗 Берёте новую машину в кредит или лизинг? Спросите о добавлении GAP-покрытия к вашему автополису. Оно может покрыть разницу между стоимостью машины и остатком долга, если машина полностью уничтожена или угнана.', a: 'Подробнее о GAP-страховке →' },
};

export default function GapCallout({ lang }: { lang: string }) {
  const l = lang === 'es' || lang === 'ru' ? lang : 'en';
  const c = COPY[l];
  return (
    <div className="gap-callout">
      <p>{c.p}</p>
      <Link href={`/${l}/gap-insurance`}>{c.a}</Link>
    </div>
  );
}
