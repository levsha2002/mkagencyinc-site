import ProtectionPlanner from '@/components/ProtectionPlanner';
import { buildAlternates } from '@/lib/seo';

const META: Record<string, { title: string; desc: string }> = {
  en: {
    title: 'Free Protection Check | M&K Agency, Florida',
    desc: 'Six short questions, no prices and no sign-up. See which parts of your family and property are already protected and which are worth a conversation with a licensed agent.',
  },
  es: {
    title: 'Revisión de Protección Gratis | M&K Agency, Florida',
    desc: 'Seis preguntas cortas, sin precios y sin registro. Vea qué partes de su familia y su propiedad ya están protegidas y cuáles vale la pena conversar con un agente licenciado.',
  },
  ru: {
    title: 'Бесплатная проверка защиты | M&K Agency, Флорида',
    desc: 'Шесть коротких вопросов, без цен и без регистрации. Посмотрите, что у вашей семьи и имущества уже защищено, а что стоит обсудить с лицензированным агентом.',
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const m = META[params.lang] || META.en;
  return {
    title: m.title,
    description: m.desc,
    alternates: buildAlternates(params.lang, '/protection-check'),
  };
}

export default function ProtectionCheckPage({ params }: { params: { lang: string } }) {
  return (
    <main>
      <section className="section">
        <div className="container">
          <ProtectionPlanner lang={params.lang} />
        </div>
      </section>
    </main>
  );
}
