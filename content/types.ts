// Shared content model for long-form pages (blog articles and data-driven
// service pages). Pure data, no JSX, so an automated writer can produce it.
//
// Inline markup allowed inside any text string:
//   [link text](/en/quote)        internal link (starts with "/")
//   [link text](https://...)      external link (opens in a new tab)
//   **bold text**
export type Lang = 'en' | 'es' | 'ru';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; title?: string; text: string };

export interface Faq {
  q: string;
  a: string; // plain text (also used in FAQPage JSON-LD); inline markup is stripped there
}

export interface Source {
  label: string;
  url: string;
}
