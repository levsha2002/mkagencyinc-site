import GuidePage, { guideMetadata } from '@/components/guides/GuidePage';

// Local agent hub / guide. Content: content/pages/guides/florida-home-insurance-wind-deductible.ts (see index.ts).
export const revalidate = 86400;

const PATH = '/florida-home-insurance-wind-deductible';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return guideMetadata(PATH, params.lang);
}

export default function Page({ params }: { params: { lang: string } }) {
  return <GuidePage path={PATH} lang={params.lang} />;
}
