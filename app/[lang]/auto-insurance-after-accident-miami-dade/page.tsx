import GuidePage, { guideMetadata } from '@/components/guides/GuidePage';

// Local agent hub / guide. Content: content/pages/guides/auto-insurance-after-accident-miami-dade.ts (see index.ts).
export const revalidate = 86400;

const PATH = '/auto-insurance-after-accident-miami-dade';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return guideMetadata(PATH, params.lang);
}

export default function Page({ params }: { params: { lang: string } }) {
  return <GuidePage path={PATH} lang={params.lang} />;
}
