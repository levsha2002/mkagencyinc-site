'use client';
import { useState } from 'react';
import { team } from '@/lib/team-data';
import { trackConversion, newTransactionId } from '@/lib/analytics';
import { getAttribution } from '@/lib/attribution';
import { getDict } from '@/lib/dictionaries';
import { consentPayload } from '@/lib/consent';
import Honeypot from '@/components/Honeypot';
import ConsentCheckbox from '@/components/ConsentCheckbox';
import { useLeadFormInView } from '@/components/useLeadFormInView';

const AGENT_OPTIONS = team.filter((m) => m.slug !== 'mikhail-kozlov');

// Desktop-only floating button (hidden on phones in globals.css, where the
// sticky Call/Text bar and the chat's callback tab cover the same need and
// a fourth floating element used to cover the forms).
export default function TalkNowWidget({ lang }: { lang: string }) {
  const t = getDict(lang).talkNow;
  const hideForForm = useLeadFormInView();
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState<'call' | 'text'>('call');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [agentName, setAgentName] = useState(''); // '' = no preference, defaults to 'agent'
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  const closeAndReset = () => {
    setOpen(false);
    if (status === 'ok' || status === 'err') {
      setStatus('');
      setName('');
      setPhone('');
      setAgentName('');
      setConsent(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hpEl = (e.currentTarget as HTMLFormElement).elements.namedItem('company') as HTMLInputElement;
    const company = hpEl ? hpEl.value : '';
    if (!consent) return;
    setStatus('sending');
    const transactionId = newTransactionId('talknow');
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company,
          name,
          phone,
          lang,
          urgent: true,
          contact_method: method,
          agent_name: agentName || 'agent',
          transaction_id: transactionId,
          ...consentPayload(lang),
          attribution: getAttribution(),
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) {
        trackConversion('talknow_lead', { contact_method: method, lang }, { transactionId, phone });
        setName('');
        setPhone('');
        setAgentName('');
        setConsent(false);
      }
    } catch {
      setStatus('err');
    }
  };

  return (
    <div className={`talk-now${hideForForm && !open ? ' form-in-view' : ''}`}>
      <button type="button" className="talk-now-fab" onClick={() => setOpen(true)}>
        {t.fab}
      </button>

      {open && (
        <div className="talk-now-overlay" onClick={closeAndReset}>
          <div
            className="talk-now-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="talk-now-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="talk-now-close" onClick={closeAndReset} aria-label={t.close}>
              ✕
            </button>

            <h3 id="talk-now-title">{t.title}</h3>
            <p className="talk-now-sub">{t.sub}</p>

            <div className="talk-now-toggle">
              <button type="button" className={method === 'call' ? 'on' : ''} onClick={() => setMethod('call')}>
                {t.callMe}
              </button>
              <button type="button" className={method === 'text' ? 'on' : ''} onClick={() => setMethod('text')}>
                {t.textMe}
              </button>
            </div>

            {status === 'ok' ? (
              <p className="talk-now-ok" aria-live="polite">
                {method === 'call' ? t.okCall : t.okText}
              </p>
            ) : (
              <form onSubmit={submit}>
                <Honeypot />
                <label>
                  {t.name}
                  <input
                    required
                    autoComplete="name"
                    placeholder={t.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  {t.phone}
                  <input
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={t.phone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label>
                  {t.agent}
                  <select value={agentName} onChange={(e) => setAgentName(e.target.value)}>
                    <option value="">{t.agentAny}</option>
                    {AGENT_OPTIONS.map((a) => (
                      <option key={a.slug} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </label>

                <ConsentCheckbox
                  id="talk-now-consent"
                  lang={lang}
                  className="talk-now-consent"
                  checked={consent}
                  onChange={setConsent}
                />

                <button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? t.sending : method === 'call' ? t.requestCall : t.requestText}
                </button>
                {status === 'err' && (
                  <p className="talk-now-err" aria-live="polite">
                    {t.err}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
