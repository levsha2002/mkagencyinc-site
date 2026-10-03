// Path helpers without content imports (safe for light-weight components).
export type TopicSlug = 'car-insurance' | 'home-insurance' | 'life-insurance' | 'umbrella-insurance';
export const PROTECT_PATH = '/protect';
export const topicPath = (slug: TopicSlug) => `${PROTECT_PATH}/${slug}`;
