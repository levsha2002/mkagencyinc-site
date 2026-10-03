import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import SendPolicyCta from '@/components/SendPolicyCta';
import { PHONE_TEL } from '@/lib/dictionaries';
import type { Lang } from '@/content/pages/protect';
import { PROTECT_UI } from './ui';
import s from './Protect.module.css';

/** Closing CTA on every protection page: call, "send us your policy" (link to
 *  the coverage-check page + WhatsApp/text), and the standard lead form. */
export default function ProtectFinalCta({ lang, title, text, leadType, source }: {
  lang: Lang; title: string; text: string; leadType: 'Auto' | 'Home' | 'Commercial' | 'Life'; source: string;
}) {
  const ui = PROTECT_UI[lang];
  return (
    <section className={s.final} aria-labelledby="protect-cta">
      <div className="container hero-grid">
        <div className={s.finalText}>
          <h2 id="protect-cta">{title}</h2>
          <p>{text}</p>
          <div className={s.finalBtns}>
            <a className="cta" href={`tel:${PHONE_TEL}`}>📞 {ui.call}</a>
            <a className={`cta ${s.ctaAlt}`} href="#quote">{ui.cta}</a>
          </div>
          <Link className={s.ccLink} href={`/${lang}/coverage-check`}>{ui.ccLink}</Link>
          <SendPolicyCta lang={lang} placement="final" />
          <p className={s.small}>{ui.hours}</p>
        </div>
        <LeadForm lang={lang} defaultType={leadType} source={source} />
      </div>
    </section>
  );
}
