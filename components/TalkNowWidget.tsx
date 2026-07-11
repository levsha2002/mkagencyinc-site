'use client';
import { useState } from 'react';

export default function TalkNowWidget({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState<'call' | 'text'>('call');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  const closeAndReset = () => {
    setOpen(false);
    // Reset only if the last attempt succeeded or failed — keeps in-progress
    // typed data if user accidentally closes mid-fill.
    if (status === 'ok' || status === 'err') {
      setStatus('');
      setName('');
      setPhone('');
      setConsent(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return; // extra guard alongside `required` on the checkbox
    setStatus('sending');
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          lang,
          urgent: true,
          contact_method: method, // 'call' or 'text'
          consent: true,
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) {
        setName('');
        setPhone('');
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
                  ? 'Got it! An agent will call you in a few minutes.'
                  : "Got it! We'll text you shortly."}
              </p>
            ) : (
              <form onSubmit={submit}>
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

                <label className="talk-now-consent">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <span>
                    By sharing your number, you agree M&amp;K Agency may call or text you
                    about insurance, including with automated technology. Consent isn&apos;t
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
