'use client';

import { useState } from 'react';
import { getDict } from '@/lib/dictionaries';
import { trackConversion, newTransactionId } from '@/lib/analytics';
import { getAttribution } from '@/lib/attribution';
import { consentPayload } from '@/lib/consent';
import Honeypot from '@/components/Honeypot';
import ConsentCheckbox from '@/components/ConsentCheckbox';

export type LeadType = 'Auto' | 'Home' | 'Commercial' | 'Life';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// defaultType: the product the page is about (the homeowners page used to
// open with "Auto" preselected).
export default function LeadForm({ lang, defaultType = 'Auto' }: { lang: string; defaultType?: LeadType }) {
  const t = getDict(lang).form;
  const empty = { insurance_type: defaultType as string, zip_code: '', name: '', phone: '', email: '', message: '' };
  const [formData, setFormData] = useState(empty);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hpEl = (e.currentTarget as HTMLFormElement).elements.namedItem('company') as HTMLInputElement;
    const company = hpEl ? hpEl.value : '';
    setStatus('sending');
    const transactionId = newTransactionId('lead');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          lang,
          company,
          transaction_id: transactionId,
          ...consentPayload(lang),
          attribution: getAttribution(),
        }),
      });
      if (res.ok) {
        setStatus('ok');
        // Fires on every successful form submit.
        if (typeof window !== 'undefined' && window.gtag) {
          // 1) Google Ads conversion — this is what makes the submission
          // count as a "Conversion" (with cost-per-lead reporting) in
          // Google Ads, tied to the "Submit lead form" action created in
          // Conversions -> Summary.
          trackConversion(
            'callback_request',
            { insurance_type: formData.insurance_type, lang },
            { transactionId, email: formData.email, phone: formData.phone },
          );
          // 2) Generic GA4-style signal, kept for broader analytics/event
          // history (not required for Google Ads conversion counting).
          window.gtag('event', 'generate_lead', {
            currency: 'USD',
            value: 1,
            insurance_type: formData.insurance_type,
            transaction_id: transactionId,
          });
        }
        setFormData(empty);
        setConsent(false);
      } else setStatus('err');
    } catch { setStatus('err'); }
  };

  return (
    <div className="card" id="quote" data-lead-form>
      <h2>{t.title}</h2>
      <p className="sub">{t.sub}</p>
      <form onSubmit={handleSubmit}>
        <Honeypot />
        <div className="field">
          <label htmlFor="lead-insurance-type">{t.need}</label>
          <select id="lead-insurance-type" value={formData.insurance_type}
            onChange={(e) => setFormData({ ...formData, insurance_type: e.target.value })}>
            <option value="Auto">{t.auto}</option>
            <option value="Home">{t.home}</option>
            <option value="Commercial">{t.commercial}</option>
            <option value="Life">{t.life}</option>
          </select>
        </div>
        <div className="grid2">
          <div className="field">
            <label htmlFor="lead-zip">{t.zip}</label>
            <input id="lead-zip" name="zip" type="text" inputMode="numeric" autoComplete="postal-code" maxLength={5} required placeholder="33034" value={formData.zip_code}
              onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="lead-name">{t.name}</label>
            <input id="lead-name" name="name" type="text" autoComplete="name" required value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
        </div>
        <div className="grid2">
          <div className="field">
            <label htmlFor="lead-phone">{t.phone}</label>
            <input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="lead-email">{t.email}</label>
            <input id="lead-email" name="email" type="email" inputMode="email" autoComplete="email" value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="lead-message">{t.message}</label>
          <textarea id="lead-message" rows={3} placeholder={t.msgPh} value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        </div>
        <ConsentCheckbox id="lead-consent" lang={lang} checked={consent} onChange={setConsent} />
        <button type="submit" className="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.sending : t.submit}
        </button>
        {status === 'ok' && <p className="status-ok">{t.ok}</p>}
        {status === 'err' && <p className="status-err">{t.err}</p>}
        <p className="privacy">🔒 {t.privacy}</p>
      </form>
    </div>
  );
}
