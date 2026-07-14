import { redirect } from 'next/navigation';

export default function ServicesRedirect({ params }: { params: { lang: string } }) {
  redirect(`/${params.lang}/insurance`);
}
