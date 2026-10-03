'use client';

import { useEffect, useRef, useState } from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/dictionaries';
import { GOOGLE_ADS_ID, newTransactionId, trackConversion } from '@/lib/analytics';
import { getAttribution } from '@/lib/attribution';
import { consentPayload } from '@/lib/consent';
import Honeypot from '@/components/Honeypot';
import ConsentCheckbox from '@/components/ConsentCheckbox';
import WhatsAppLink, { WhatsAppIcon } from '@/components/WhatsAppLink';
import {
  CC,
  CC_POLICIES,
  CC_SOURCE,
  LANG_SELF,
  pickLang,
  type CcFormCopy,
  type CcPolicy,
  type Lang,
} from '@/lib/coverage-check';

// "Free Coverage Check" short form (/[lang]/coverage-check). Posts to
// /api/callback, the endpoint behind the site's other short callback forms
// (Talk to Agent Now, chat callback, protection check), so the lead lands in
// the `callbacks` table and triggers the usual email + Telegram alert. The
// honeypot and the per-IP rate limit are enforced by that route. Consent is
// the site's standard required checkbox (lib/consent.ts text + version),
// checked here and again server-side.
//
// Tracking on a successful submit, same as the site's other lead forms
// (LeadForm / quote page): trackConversion('callback_request') → GA event
// `callback_request` + Google Ads "Submit lead form" conversion, plus the
// `generate_lead` event, plus `coverage_check_lead` for reporting this page
// on its own. tel: clicks are tracked site-wide by phoneClickTrackingScript.
//
// Shared by the landing pages: /coverage-check (defaults) and /gap-insurance
// (copy, source 'gap-insurance', event 'gap_insurance_lead', Auto preselected,
// note 'Gap insurance'). See the props below.

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const LANGS: Lang[] = ['en', 'es', 'ru'];
const CC_HASH_POLICY: Record<string, CcPolicy> = { '#condo': 'Condo (HO-6)', '#home': 'Home' };

export default function CoverageCheckForm({
  lang: rawLang,
  copy,
  source = CC_SOURCE,
  leadEvent = 'coverage_check_lead',
  defaultPolicy = '',
  hashPolicy = CC_HASH_POLICY,
  note,
}: {
  lang: string;
  /** Form strings; default: the coverage-check copy for this language. */
  copy?: CcFormCopy;
  /** `source` sent to /api/callback (email subject / Telegram type). */
  source?: string;
  /** Page-specific reporting event fired after a successful submit. */
  leadEvent?: string;
  defaultPolicy?: CcPolicy | '';
  /** URL hash → policy preselected on arrival. */
  hashPolicy?: Record<string, CcPolicy>;
  /** Fixed request label shown on the form and sent with the lead (whitelisted server-side). */
  note?: string;
}) {
  const lang = pickLang(rawLang);
  const t = copy || CC[lang].form;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [prefLang, setPrefLang] = useState<Lang>(lang);
  const [policy, setPolicy] = useState<CcPolicy | ''>(defaultPolicy);
  const [consent, setConsent] = useState(false);
  const [phoneErr, setPhoneErr] = useState('');
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');
  const okRef = useRef<HTMLDivElement>(null);

  // Visitors landing on a gap card anchor get that policy preselected
  // (#condo from the Condo / HO-6 ads, #home for the hurricane-deductible card).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const preset = hashPolicy[window.location.hash];
    if (preset) setPolicy(preset);
  }, [hashPolicy]);

  useEffect(() => {
    if (status === 'ok' && okRef.current) okRef.current.focus();
  }, [status]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;
    const digits = phone.replace(/\D/g, '');
    if (!(digits.length === 10 || (digits.length === 11 && digits.startsWith('1')))) {
      setPhoneErr(t.badPhone);
      return;
    }
    setPhoneErr('');
    const hp = e.currentTarget.elements.namedItem('company') as HTMLInputElement | null;
    const transactionId = newTransactionId('coverage');
    const policyValue = policy || 'Other';
    setStatus('sending');
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: hp ? hp.value : '',
          name: name.trim(),
          phone: phone.trim(),
          lang,
          preferred_lang: prefLang,
          policy_type: policyValue,
          source,
          ...(note ? { note } : {}),
          contact_method: 'call',
          agent_name: 'agent',
          message: `${note || 'Coverage check'}: ${policyValue}. Call in ${LANG_SELF[prefLang]}.`,
          transaction_id: transactionId,
          ...consentPayload(lang),
          attribution: getAttribution(),
        }),
      });
      if (!res.ok) {
        setStatus('err');
        return;
      }
      setStatus('ok');
      if (window.gtag) {
        const params = { insurance_type: policyValue, lang, preferred_lang: prefLang, source };
        // 1) Same Google Ads conversion + GA event as the other lead forms.
        trackConversion('callback_request', params, { transactionId, phone });
        // 2) Same generic lead event as LeadForm / quote page.
        window.gtag('event', 'generate_lead', {
          send_to: GOOGLE_ADS_ID,
          currency: 'USD',
          value: 1,
          insurance_type: policyValue,
          transaction_id: transactionId,
        });
        // 3) Page-specific event for reporting (not an Ads conversion action).
        window.gtag('event', leadEvent, { ...params, transaction_id: transactionId, send_to: GOOGLE_ADS_ID });
      }
      setName('');
      setPhone('');
      setConsent(false);
    } catch {
      setStatus('err');
    }
  };

  if (status === 'ok') {
    return (
      <div className="card cc-form cc-ok" data-lead-form ref={okRef} tabIndex={-1} role="status" aria-live="polite">
        <div className="cc-ok-check" aria-hidden="true">✓</div>
        <h3>{t.okH}</h3>
        <p>{t.okP}</p>
        <a href={`tel:${PHONE_TEL}`} className="cta cc-call">📞 {PHONE_DISPLAY}</a>
      </div>
    );
  }

  return (
    <form className="card cc-form" onSubmit={submit} data-lead-form>
      <Honeypot />
      {note && t.noteLabel && (
        <p className="cc-note"><span aria-hidden="true">🚗</span> {t.noteLabel}</p>
      )}
      <div className="field">
        <label htmlFor="cc-name">{t.name}</label>
        <input id="cc-name" name="name" type="text" autoComplete="name" required maxLength={120}
          value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="cc-phone">{t.phone}</label>
        <input id="cc-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={25}
          placeholder="(305) 555-0123" aria-invalid={phoneErr ? true : undefined} aria-describedby={phoneErr ? 'cc-phone-err' : undefined}
          value={phone} onChange={(e) => { setPhone(e.target.value); if (phoneErr) setPhoneErr(''); }} />
        {phoneErr && <p id="cc-phone-err" className="cc-field-err">{phoneErr}</p>}
      </div>
      <fieldset className="field cc-fieldset">
        <legend>{t.lang}</legend>
        <div className="cc-pills">
          {LANGS.map((l) => (
            <label key={l} className={`cc-pill${prefLang === l ? ' on' : ''}`} lang={l}>
              <input type="radio" name="preferred_lang" value={l} checked={prefLang === l} onChange={() => setPrefLang(l)} />
              {LANG_SELF[l]}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="cc-policy">{t.policy}</label>
        <select id="cc-policy" name="policy_type" required value={policy} onChange={(e) => setPolicy(e.target.value as CcPolicy)}>
          <option value="" disabled>{t.choose}</option>
          {CC_POLICIES.map((p) => (
            <option key={p} value={p}>{t.policies[p]}</option>
          ))}
        </select>
      </div>
      <ConsentCheckbox id="cc-consent" lang={lang} checked={consent} onChange={setConsent} />
      <button type="submit" className="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t.sending : t.submit}
      </button>
      {status === 'err' && (
        <p className="status-err" role="alert">
          {t.err} <a href={`tel:${PHONE_TEL}`} style={{ textDecoration: 'underline' }}>{PHONE_DISPLAY}</a>
        </p>
      )}
      <p className="cc-talk">
        {t.talkBefore}
        <a href={`tel:${PHONE_TEL}`} className="cc-talk-phone">{PHONE_DISPLAY}</a>
        {t.talkMid}
        <WhatsAppLink lang={lang} placement={source} text={t.waText} className="wa-link cc-talk-wa" iconSize={15}>
          <WhatsAppIcon size={15} />
          {t.talkWa}
        </WhatsAppLink>
        {t.talkAfter}
      </p>
    </form>
  );
}
