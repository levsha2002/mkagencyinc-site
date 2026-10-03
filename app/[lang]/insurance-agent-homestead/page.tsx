import GuidePage, { guideMetadata } from '@/components/guides/GuidePage';

// Local agent hub / guide. Content: content/pages/guides/insurance-agent-homestead.ts (see index.ts).
export const revalidate = 86400;

const PATH = '/insurance-agent-homestead';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  return guideMetadata(PATH, params.lang);
}

export default function Page({ params }: { params: { lang: string } }) {
  return <GuidePage path={PATH} lang={params.lang} />;
}
