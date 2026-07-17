import { redirect } from 'next/navigation';

// The Contact page has been merged into the "Contact Us" page (/quote),
// which now has call/text/visit plus the guided callback form.
// Redirect keeps any old links and bookmarks working.
export default function ContactRedirect({ params }: { params: { lang: string } }) {
  redirect(`/${params.lang}/quote`);
}
