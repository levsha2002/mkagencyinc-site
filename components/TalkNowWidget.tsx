'use client';
import { useState } from 'react';
import { team } from '@/lib/team-data';
import { trackConversion } from '@/lib/analytics';
import Honeypot from '@/components/Honeypot';

const AGENT_OPTIONS = team.filter((m) => m.slug !== 'mikhail-kozlov');

export default function TalkNowWidget({ lang }: { lang: string }) {
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
          consent: true,
          agent_name: agentName || 'agent',
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) {
        trackConversion('talknow_lead', { contact_method: method, lang });
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
    <div className="talk-now">
      <button type="button" className="talk-now-fab" onClick={() => setOpen(true)}>
        📲 Talk to Agent Now
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
            <button type="button" className="talk-now-close" onClick={closeAndReset}>
              ✕
            </button>

            <h3 id="talk-now-title">Want to start saving now — or review your current coverage?</h3>
            <p className="talk-now-sub">Request a callback from our best agent.</p>

            <div className="talk-now-toggle">
              <button
                type="button"
                className={method === 'call' ? 'on' : ''}
                onClick={() => setMethod('call')}
              >
                📞 Call me now
              </button>
              <button
                type="button"
                className={method === 'text' ? 'on' : ''}
                onClick={() => setMethod('text')}
              >
                💬 Text me now
              </button>
            </div>

            {status === 'ok' ? (
              <p className="talk-now-ok" aria-live="polite">
                {method === 'call'
                  ? 'Got it! An agent will call you back during office hours — Mon–Fri, 9am–6pm ET.'
                  : "Got it! We'll text you back during office hours — Mon–Fri, 9am–6pm ET."}
              </p>
            ) : (
              <form onSubmit={submit}>
        <Honeypot />
                <label>
                  Your name
                  <input
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  Your phone number
                  <input
                    required
                    type="tel"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label>
                  Prefer a specific agent? (optional)
                  <select value={agentName} onChange={(e) => setAgentName(e.target.value)}>
                    <option value="">No preference — any available agent</option>
                    {AGENT_OPTIONS.map((a) => (
                      <option key={a.slug} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="talk-now-consent">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <span>
                    By sharing your number, you agree M&amp;K Agency may call, text, or
                    email you about insurance. Consent isn&apos;t
                    required to purchase. Reply STOP anytime.
                  </span>
                </label>

                <button type="submit" disabled={status === 'sending' || !consent}>
                  {status === 'sending'
                    ? 'Sending...'
                    : method === 'call'
                    ? 'Request a call →'
                    : 'Request a text →'}
                </button>
                {status === 'err' && (
                  <p className="talk-now-err" aria-live="polite">
                    Something went wrong. Please try again or call us directly.
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
