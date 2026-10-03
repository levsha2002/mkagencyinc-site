import TopicPageView, { topicMetadata } from '@/components/protect/TopicPageView';
import { TOPIC_SLUGS } from '@/content/pages/protect';

// One deep page per protection topic: /[lang]/protect/<car|home|life|umbrella>-insurance.
// Content: content/pages/protect/<topic>.ts.
export const dynamicParams = false;

export function generateStaticParams() {
  return TOPIC_SLUGS.map((topic) => ({ topic }));
}

export function generateMetadata({ params }: { params: { lang: string; topic: string } }) {
  return topicMetadata(params.lang, params.topic);
}

export default function Page({ params }: { params: { lang: string; topic: string } }) {
  return <TopicPageView lang={params.lang} slug={params.topic} />;
}
