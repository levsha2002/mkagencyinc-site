'use client';

import { useState } from 'react';
import Honeypot from '@/components/Honeypot';
import { getAttribution, type Attribution } from '@/lib/attribution';
import { newTransactionId } from '@/lib/analytics';
import {
  LANGS,
  PARTNER_TYPES,
  PARTNER_CONSENT,
  PARTNER_CONSENT_VERSION,
  REFERRAL_CONSENT,
  REFERRAL_CONSENT_VERSION,
  consentFullText,
  isEmail,
  isPhoneOrEmail,
  normalizeUsPhone,
  pickLang,
  type Lang,
} from '@/lib/referral-program';

// The two forms on /[lang]/referral. Both post to /api/referral-lead, which
// stores the lead in the same Neon `leads` table as the quote form (source
// 'referral' or 'partner') and sends the usual email + Telegram alert.
//
// No Google Ads conversion is fired here on purpose: a referral or partner
// inquiry is not a quote request, and counting it would skew bidding. Only a
// plain analytics event is sent.

const LANG_SELF: Record<Lang, string> = { en: 'English', es: 'Español', ru: 'Русский' };

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/** Stored ad/UTM attribution, topped up with utm_* / click ids on the current URL. */
function currentAttribution(): Attribution {
  const a: Attribution = { ...getAttribution() };
  try {
    const q = new URLSearchParams(window.location.search);
    let hit = false;
    const out: Record<string, string> = {};
    ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((k) => {
      const v = q.get(k);
      if (v) {
        out[k] = v.slice(0, 200);
        hit = true;
      }
    });
    if (hit) return { ...out, landing_page: window.location.pathname.slice(0, 200), ts: Date.now() } as Attribution;
  } catch {}
  return a;
}

function basePayload(kind: 'referral' | 'partner', lang: Lang, form: HTMLFormElement) {
  const hp = form.elements.namedItem('company') as HTMLInputElement | null;
  return {
    kind,
    lang,
    company: hp ? hp.value : '',
    transaction_id: newTransactionId(kind),
    consent: true,
    consent_text: consentFullText(kind, lang),
    consent_text_version: kind === 'referral' ? REFERRAL_CONSENT_VERSION : PARTNER_CONSENT_VERSION,
    consent_user_agent: navigator.userAgent.slice(0, 500),
    page_url: window.location.href.slice(0, 500),
    attribution: currentAttribution(),
  };
}

async function post(payload: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch('/api/referral-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function track(kind: 'referral' | 'partner', lang: Lang) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', kind === 'referral' ? 'referral_submit' : 'partner_inquiry_submit', { lang });
  }
}

function Consent({ id, text, privacy, lang, checked, onChange }: {
  id: string; text: string; privacy: string; lang: Lang; checked: boolean; onChange: (v: boolean) => void;
}) {
  return (
    <label className="consent" htmlFor={id}>
      <input id={id} type="checkbox" required checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>
        {text}{' '}
        <a href={`/${lang}/privacy`} target="_blank" rel="noopener" style={{ textDecoration: 'underline' }}>
          {privacy}
        </a>
        .
      </span>
    </label>
  );
}

export function ReferFriendForm({ lang: rawLang, t }: { lang: string; t: any }) {
  const lang = pickLang(rawLang);
  const empty = { referrer_name: '', referrer_contact: '', friend_name: '', friend_phone: '', friend_lang: lang as Lang };
  const [f, setF] = useState(empty);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!f.referrer_name.trim()) e.referrer_name = t.required;
    if (!isPhoneOrEmail(f.referrer_contact)) e.referrer_contact = t.badContact;
    if (!f.friend_name.trim()) e.friend_name = t.required;
    if (!normalizeUsPhone(f.friend_phone)) e.friend_phone = t.badPhone;
    if (!consent) e.consent = t.needConsent;
    return e;
  };

  const submit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('sending');
    const ok = await post({ ...basePayload('referral', lang, ev.currentTarget), ...f });
    if (ok) {
      track('referral', lang);
      setF(empty);
      setConsent(false);
      setStatus('ok');
    } else setStatus('err');
  };

  if (status === 'ok') {
    return (
      <div className="card ref-form" id="refer">
        <p className="kicker ref-kicker-left">{t.kicker}</p>
        <h2>{t.title}</h2>
        <p className="status-ok" role="status">{t.ok}</p>
        <button type="button" className="ref-link-btn" onClick={() => setStatus('')}>{t.again}</button>
      </div>
    );
  }

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });
  const err = (k: string) => (errors[k] ? <p className="ref-err" id={`rf-${k}-err`} role="alert">{errors[k]}</p> : null);

  return (
    <div className="card ref-form" id="refer">
      <p className="kicker ref-kicker-left">{t.kicker}</p>
      <h2>{t.title}</h2>
      <p className="sub">{t.sub}</p>
      <form onSubmit={submit} noValidate>
        <Honeypot />
        <div className="grid2">
          <div className="field">
            <label htmlFor="rf-referrer-name">{t.yourName}</label>
            <input id="rf-referrer-name" autoComplete="name" required value={f.referrer_name} onChange={set('referrer_name')}
              aria-invalid={!!errors.referrer_name} aria-describedby={errors.referrer_name ? 'rf-referrer_name-err' : undefined} />
            {err('referrer_name')}
          </div>
          <div className="field">
            <label htmlFor="rf-referrer-contact">{t.yourContact}</label>
            <input id="rf-referrer-contact" autoComplete="tel" required value={f.referrer_contact} onChange={set('referrer_contact')}
              aria-invalid={!!errors.referrer_contact} aria-describedby={errors.referrer_contact ? 'rf-referrer_contact-err' : undefined} />
            {err('referrer_contact')}
          </div>
        </div>
        <div className="grid2">
          <div className="field">
            <label htmlFor="rf-friend-name">{t.friendName}</label>
            <input id="rf-friend-name" autoComplete="off" required value={f.friend_name} onChange={set('friend_name')}
              aria-invalid={!!errors.friend_name} aria-describedby={errors.friend_name ? 'rf-friend_name-err' : undefined} />
            {err('friend_name')}
          </div>
          <div className="field">
            <label htmlFor="rf-friend-phone">{t.friendPhone}</label>
            <input id="rf-friend-phone" type="tel" inputMode="tel" autoComplete="off" required placeholder="(305) 000-0000"
              value={f.friend_phone} onChange={set('friend_phone')}
              aria-invalid={!!errors.friend_phone} aria-describedby={errors.friend_phone ? 'rf-friend_phone-err' : undefined} />
            {err('friend_phone')}
          </div>
        </div>
        <fieldset className="field ref-fieldset">
          <legend>{t.friendLang}</legend>
          <div className="ref-pills">
            {LANGS.map((l) => (
              <label key={l} className={`ref-pill${f.friend_lang === l ? ' on' : ''}`}>
                <input type="radio" name="friend_lang" value={l} checked={f.friend_lang === l}
                  onChange={() => setF({ ...f, friend_lang: l })} />
                {LANG_SELF[l]}
              </label>
            ))}
          </div>
        </fieldset>
        <Consent id="rf-consent" text={REFERRAL_CONSENT[lang]} privacy={t.privacy} lang={lang} checked={consent} onChange={setConsent} />
        {err('consent')}
        <button type="submit" className="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.sending : t.submit}
        </button>
        {status === 'err' && <p className="status-err" role="alert">{t.err}</p>}
      </form>
    </div>
  );
}

export function PartnerForm({ lang: rawLang, t }: { lang: string; t: any }) {
  const lang = pickLang(rawLang);
  const empty = { business_name: '', business_type: '', name: '', phone: '', email: '', languages: [] as Lang[] };
  const [f, setF] = useState(empty);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!f.business_name.trim()) e.business_name = t.required;
    if (!f.business_type) e.business_type = t.required;
    if (!f.name.trim()) e.name = t.required;
    if (!normalizeUsPhone(f.phone)) e.phone = t.badPhone;
    if (f.email.trim() && !isEmail(f.email)) e.email = t.badEmail;
    if (!consent) e.consent = t.needConsent;
    return e;
  };

  const submit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('sending');
    const ok = await post({ ...basePayload('partner', lang, ev.currentTarget), ...f });
    if (ok) {
      track('partner', lang);
      setF(empty);
      setConsent(false);
      setStatus('ok');
    } else setStatus('err');
  };

  if (status === 'ok') {
    return (
      <div className="card ref-form" id="partner">
        <p className="kicker ref-kicker-left">{t.kicker}</p>
        <h2>{t.title}</h2>
        <p className="status-ok" role="status">{t.ok}</p>
      </div>
    );
  }

  const set = (k: 'business_name' | 'name' | 'phone' | 'email') => (e: React.ChangeEvent<HTMLInputElement>) =>
    setF({ ...f, [k]: e.target.value });
  const toggleLang = (l: Lang) =>
    setF({ ...f, languages: f.languages.includes(l) ? f.languages.filter((x) => x !== l) : [...f.languages, l] });
  const err = (k: string) => (errors[k] ? <p className="ref-err" id={`pf-${k}-err`} role="alert">{errors[k]}</p> : null);

  return (
    <div className="card ref-form" id="partner">
      <p className="kicker ref-kicker-left">{t.kicker}</p>
      <h2>{t.title}</h2>
      <p className="sub">{t.sub}</p>
      <p className="ref-nofees">{t.noFees}</p>
      <form onSubmit={submit} noValidate>
        <Honeypot />
        <div className="grid2">
          <div className="field">
            <label htmlFor="pf-business">{t.businessName}</label>
            <input id="pf-business" autoComplete="organization" required value={f.business_name} onChange={set('business_name')}
              aria-invalid={!!errors.business_name} aria-describedby={errors.business_name ? 'pf-business_name-err' : undefined} />
            {err('business_name')}
          </div>
          <div className="field">
            <label htmlFor="pf-type">{t.businessType}</label>
            <select id="pf-type" required value={f.business_type} onChange={(e) => setF({ ...f, business_type: e.target.value })}
              aria-invalid={!!errors.business_type} aria-describedby={errors.business_type ? 'pf-business_type-err' : undefined}>
              <option value="">{t.choose}</option>
              {PARTNER_TYPES.map((k) => (
                <option key={k} value={k}>{t.types[k]}</option>
              ))}
            </select>
            {err('business_type')}
          </div>
        </div>
        <div className="grid2">
          <div className="field">
            <label htmlFor="pf-name">{t.yourName}</label>
            <input id="pf-name" autoComplete="name" required value={f.name} onChange={set('name')}
              aria-invalid={!!errors.name} aria-describedby={errors.name ? 'pf-name-err' : undefined} />
            {err('name')}
          </div>
          <div className="field">
            <label htmlFor="pf-phone">{t.phone}</label>
            <input id="pf-phone" type="tel" inputMode="tel" autoComplete="tel" required value={f.phone} onChange={set('phone')}
              aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'pf-phone-err' : undefined} />
            {err('phone')}
          </div>
        </div>
        <div className="field">
          <label htmlFor="pf-email">{t.email}</label>
          <input id="pf-email" type="email" inputMode="email" autoComplete="email" value={f.email} onChange={set('email')}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? 'pf-email-err' : undefined} />
          {err('email')}
        </div>
        <fieldset className="field ref-fieldset">
          <legend>{t.langs}</legend>
          <div className="ref-pills">
            {LANGS.map((l) => (
              <label key={l} className={`ref-pill${f.languages.includes(l) ? ' on' : ''}`}>
                <input type="checkbox" value={l} checked={f.languages.includes(l)} onChange={() => toggleLang(l)} />
                {LANG_SELF[l]}
              </label>
            ))}
          </div>
        </fieldset>
        <Consent id="pf-consent" text={PARTNER_CONSENT[lang]} privacy={t.privacy} lang={lang} checked={consent} onChange={setConsent} />
        {err('consent')}
        <button type="submit" className="submit ref-submit-gold" disabled={status === 'sending'}>
          {status === 'sending' ? t.sending : t.submit}
        </button>
        {status === 'err' && <p className="status-err" role="alert">{t.err}</p>}
      </form>
    </div>
  );
}
