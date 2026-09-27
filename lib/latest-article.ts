// Newest article in a language, for the home page "Today's article" block.
// Reads the same registries the Site Articles bot publishes into
// (content/news/index.ts for daily news editions, content/blog/index.ts for
// guides), so a new edition shows up on the home page with the deploy that
// publishes it, and the block disappears if a language has nothing yet.
import { editionsForLang } from '@/lib/news';
import { postsForLang } from '@/lib/blog';

export interface LatestArticle {
  kind: 'news' | 'blog';
  href: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
}

function clip(text: string, max = 190): string {
  const plain = text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[(.+?)\]\([^)]+\)/g, '$1').trim();
  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s—-]+$/, '')}…`;
}

export function latestArticle(lang: string): LatestArticle | null {
  const news = editionsForLang(lang)[0];
  const blog = postsForLang(lang)[0];
  const candidates: LatestArticle[] = [];
  if (news) {
    candidates.push({
      kind: 'news',
      href: `/${lang}/news/${news.edition.slug}`,
      title: news.t.title,
      excerpt: clip(news.t.excerpt ?? news.t.description),
      date: news.edition.datePublished,
    });
  }
  if (blog) {
    candidates.push({
      kind: 'blog',
      href: `/${lang}/blog/${blog.post.slug}`,
      title: blog.t.title,
      excerpt: clip(blog.t.excerpt ?? blog.t.description),
      date: blog.post.datePublished,
    });
  }
  if (!candidates.length) return null;
  // Newest date wins; on the same day the daily news edition goes first.
  candidates.sort((a, b) => (a.date === b.date ? (a.kind === 'news' ? -1 : 1) : a.date < b.date ? 1 : -1));
  return candidates[0];
}
