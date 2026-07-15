'use client';

import { useState } from 'react';
import { getDict } from '@/lib/dictionaries';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function LeadForm({ lang }: { lang: string }) {
  const t = getDict(lang).form;
  const [formData, setFormData] = useState({
    insurance_type: 'Auto', zip_code: '', name: '', phone: '', email: '', message: '',
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, consent_text: t.consent, lang }),
      });
      if (res.ok) {
        setStatus('ok');
        // Fires on every successful form submit.
        if (typeof window !== 'undefined' && window.gtag) {
          // 1) Google Ads conversion — this is what makes the submission
          // count as a "Conversion" (with cost-per-lead reporting) in
          // Google Ads, tied to the "Submit lead form" action created in
          // Conversions -> Summary.
          window.gtag('event', 'conversion', {
            send_to: 'AW-18321801016/-1BtCL2Fj9EcELj-waBE',
          });
          // 2) Generic GA4-style signal, kept for broader analytics/event
          // history (not required for Google Ads conversion counting).
          window.gtag('event', 'generate_lead', {
            currency: 'USD',
            value: 1,
            insurance_type: formData.insurance_type,
          });
        }
        setFormData({ insurance_type: 'Auto', zip_code: '', name: '', phone: '', email: '', message: '' });
        setConsent(false);
      } else setStatus('err');
    } catch { setStatus('err'); }
  };

  return (
    <div className="card" id="quote">
      <h2>{t.title}</h2>
      <p className="sub">{t.sub}</p>
      <form onSubmit={handleSubmit}>
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
            <input id="lead-zip" type="text" required placeholder="33196" value={formData.zip_code}
              onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="lead-name">{t.name}</label>
            <input id="lead-name" type="text" required value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
        </div>
        <div className="grid2">
          <div className="field">
            <label htmlFor="lead-phone">{t.phone}</label>
            <input id="lead-phone" type="tel" required value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="lead-email">{t.email}</label>
            <input id="lead-email" type="email" required value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="lead-message">{t.message}</label>
          <textarea id="lead-message" rows={3} placeholder={t.msgPh} value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        </div>
        <label className="consent">
          <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>{t.consent}</span>
        </label>
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
