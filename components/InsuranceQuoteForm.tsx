'use client';

import { useState } from 'react';
import type { InsuranceProduct } from '@/lib/insurance-products';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function InsuranceQuoteForm({
  product,
  lang,
}: {
  product: InsuranceProduct;
  lang: string;
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [vin, setVin] = useState('');
  const [drivers, setDrivers] = useState('');
  const [comments, setComments] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/insurance-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          address,
          vin: product.requiresVIN ? vin : '',
          drivers: product.requiresDrivers ? drivers : '',
          comments,
          product_slug: product.slug,
          product_title: product.title,
          lang,
          consent: true,
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) {
        // Fires on every successful callback request from an insurance-type
        // landing page (/insurance/auto, /insurance/home, etc). Same Google
        // Ads conversion action as LeadForm.tsx and the /quote page, so all
        // lead-capture forms roll up into one "Submit lead form" conversion.
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18321801016/-1BtCL2Fj9EcELj-waBE',
          });
          window.gtag('event', 'generate_lead', {
            currency: 'USD',
            value: 1,
            insurance_type: product.title,
          });
        }
        setName('');
        setPhone('');
        setAddress('');
        setVin('');
        setDrivers('');
        setComments('');
        setConsent(false);
      }
    } catch {
      setStatus('err');
    }
  };

  if (status === 'ok') {
    return (
      <div className="card">
        <p className="status-ok">
          Thank you! A licensed agent will contact you shortly about {product.title.toLowerCase()}.
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Talk to a licensed agent about {product.title.toLowerCase()}</h2>
      <p className="sub">Takes about a minute. A real, licensed agent calls you back fast.</p>
      <form onSubmit={submit}>
        <div className="grid2">
          <div className="field">
            <label>Full name</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="field">
            <label>Phone</label>
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>

        <div className="field">
          <label>Address</label>
          <input required value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        {(product.requiresVIN || product.requiresDrivers) && (
          <div className="grid2">
            {product.requiresVIN && (
              <div className="field">
                <label>VIN number (optional)</label>
                <input value={vin} onChange={(e) => setVin(e.target.value)} placeholder="17-character VIN" />
              </div>
            )}
            {product.requiresDrivers && (
              <div className="field">
                <label>Number of drivers</label>
                <input
                  type="number"
                  min={1}
                  value={drivers}
                  onChange={(e) => setDrivers(e.target.value)}
                />
              </div>
            )}
          </div>
        )}

        <div className="field">
          <label>Coverages you're interested in (additional comments)</label>
          <textarea
            rows={3}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="e.g. full coverage, specific limits, current carrier, anything else we should know"
          />
        </div>

        <div className="consent">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I agree that M&amp;K Agency may contact me by phone, text, or automated/AI calls at
            the number provided about insurance, even if it is on a Do-Not-Call list. Consent is
            not a condition of purchase.
          </span>
        </div>

        <button type="submit" className="submit" disabled={status === 'sending' || !consent}>
          {status === 'sending' ? 'Sending...' : 'Request my callback →'}
        </button>
        {status === 'err' && (
          <p className="status-err">Something went wrong. Please call us at (305) 859-3953.</p>
        )}
        <p className="privacy">Your info stays private. No spam, ever.</p>
      </form>
    </div>
  );
}
