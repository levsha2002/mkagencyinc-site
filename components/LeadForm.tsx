'use client';

import { useState } from 'react';
import { getDict } from '@/lib/dictionaries';

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
          <label>{t.need}</label>
          <select value={formData.insurance_type}
            onChange={(e) => setFormData({ ...formData, insurance_type: e.target.value })}>
            <option value="Auto">{t.auto}</option>
            <option value="Home">{t.home}</option>
            <option value="Commercial">{t.commercial}</option>
            <option value="Life">{t.life}</option>
          </select>
        </div>
        <div className="grid2">
          <div className="field">
            <label>{t.zip}</label>
            <input type="text" required placeholder="33196" value={formData.zip_code}
              onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })} />
          </div>
          <div className="field">
            <label>{t.name}</label>
            <input type="text" required value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
        </div>
        <div className="grid2">
          <div className="field">
            <label>{t.phone}</label>
            <input type="tel" required value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          </div>
          <div className="field">
            <label>{t.email}</label>
            <input type="email" required value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
        </div>
        <div className="field">
          <label>{t.message}</label>
          <textarea rows={3} placeholder={t.msgPh} value={formData.message}
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
