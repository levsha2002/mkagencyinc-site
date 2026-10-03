import HubPageView, { hubMetadata } from '@/components/protect/HubPageView';

// Protection learning hub: tabs for Car, Home, Life, Umbrella & wealth.
// Content: content/pages/protect/hub.ts.
export function generateMetadata({ params }: { params: { lang: string } }) {
  return hubMetadata(params.lang);
}

export default function Page({ params }: { params: { lang: string } }) {
  return <HubPageView lang={params.lang} />;
}
