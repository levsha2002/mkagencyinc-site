import { getDict } from '@/lib/dictionaries';
import LifeGallery from '@/components/LifeGallery';
import { pageMetadata } from '@/lib/seo';
import ProtectGuideLink from '@/components/protect/ProtectGuideLink';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).life;
  return pageMetadata({
    lang: params.lang,
    path: '/life',
    title: t.metaTitle,
    description: t.metaDesc,
  });
}

export default function LifePage({ params }: { params: { lang: string } }) {
  const t = getDict(params.lang).life;

  return (
    <main>
      <section className="life-hero">
        <div className="container">
          <h1>
            {t.h1}{' '}
            <br />
            <span className="accent">{t.tagline}</span>
          </h1>
          <p>{t.sub}</p>
          <ProtectGuideLink lang={params.lang} topic="life-insurance" style={{ marginLeft: 0 }} />
        </div>
      </section>

      <LifeGallery />
    </main>
  );
}
