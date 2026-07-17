import { buildAlternates } from '@/lib/seo';

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Contact Us | Call, Text, Visit, or Request a Callback | M&K Agency',
    description:
      'Call, text, or visit M&K Agency in Florida City — or request a callback and a licensed Florida agent calls you back in minutes. English · Español · По-русски.',
  },
  es: {
    title: 'Contáctenos | Llame, Envíe un Texto o Solicite una Llamada | M&K Agency',
    description:
      'Llame, envíe un texto o visite M&K Agency en Florida City — o solicite una llamada y un agente licenciado le devuelve la llamada en minutos. Hablamos español.',
  },
  ru: {
    title: 'Свяжитесь с нами | Звонок, SMS или обратный звонок | M&K Agency',
    description:
      'Позвоните, напишите SMS или приезжайте в M&K Agency (Florida City) — или закажите обратный звонок, и лицензированный агент перезвонит за несколько минут. Говорим по-русски.',
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const m = META[params.lang] ?? META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates(params.lang, '/quote'),
  };
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
