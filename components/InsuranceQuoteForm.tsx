'use client';

import { useState } from 'react';
import { type InsuranceProduct, isBusinessProduct, VEHICLE_BUSINESS_SLUGS } from '@/lib/insurance-products';
import { trackConversion, newTransactionId } from '@/lib/analytics';
import { getAttribution } from '@/lib/attribution';
import { getDict } from '@/lib/dictionaries';
import { consentPayload } from '@/lib/consent';
import Honeypot from '@/components/Honeypot';
import ConsentCheckbox from '@/components/ConsentCheckbox';

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
  const t = getDict(lang).quoteForm;
  const business = isBusinessProduct(product);
  const askVehicles = VEHICLE_BUSINESS_SLUGS.has(product.slug);
  const askVin = product.requiresVIN && !business;
  const askDrivers = product.requiresDrivers && !business;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [vehicles, setVehicles] = useState('');
  const [vin, setVin] = useState('');
  const [drivers, setDrivers] = useState('');
  const [comments, setComments] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err' | 'consent'>('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hpEl = (e.currentTarget as HTMLFormElement).elements.namedItem('company') as HTMLInputElement;
    const company = hpEl ? hpEl.value : '';
    if (!consent) {
      setStatus('consent');
      return;
    }
    setStatus('sending');
    const transactionId = newTransactionId('quote');
    try {
      const res = await fetch('/api/insurance-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company,
          name,
          phone,
          email,
          address,
          business_name: business ? businessName : '',
          business_type: business ? businessType : '',
          vehicles: askVehicles ? vehicles : '',
          vin: askVin ? vin : '',
          drivers: askDrivers ? drivers : '',
          comments,
          product_slug: product.slug,
          product_title: product.title,
          lang,
          transaction_id: transactionId,
          ...consentPayload(lang),
          attribution: getAttribution(),
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) {
        // Success-only: same "Submit lead form" conversion action as
        // LeadForm.tsx and /quote.
        if (typeof window !== 'undefined' && window.gtag) {
          trackConversion(
            'quote_submit',
            { insurance_type: product.title, product_slug: product.slug, lang },
            { transactionId, email, phone },
          );
          window.gtag('event', 'generate_lead', {
            currency: 'USD',
            value: 1,
            insurance_type: product.title,
            transaction_id: transactionId,
          });
        }
      }
    } catch {
      setStatus('err');
    }
  };

  if (status === 'ok') {
    return (
      <div className="card" id="quote" data-lead-form>
        <p className="status-ok" aria-live="polite">{t.ok}</p>
      </div>
    );
  }

  const id = (s: string) => `iq-${s}`;

  return (
    <div className="card" id="quote" data-lead-form>
      <h2>{t.title.replace('{product}', product.title.toLowerCase())}</h2>
      <p className="sub">{t.sub}</p>
      <form onSubmit={submit}>
        <Honeypot />
        <div className="grid2">
          <div className="field">
            <label htmlFor={id('name')}>{t.name}</label>
            <input id={id('name')} name="name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor={id('phone')}>{t.phone}</label>
            <input
              id={id('phone')}
              name="phone"
              required
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {business && (
          <div className="grid2">
            <div className="field">
              <label htmlFor={id('bname')}>{t.businessName}</label>
              <input id={id('bname')} name="business_name" autoComplete="organization" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor={id('btype')}>{t.businessType}</label>
              <input id={id('btype')} name="business_type" placeholder={t.businessTypePh} value={businessType} onChange={(e) => setBusinessType(e.target.value)} />
            </div>
          </div>
        )}

        <div className={askVehicles ? 'grid2' : undefined}>
          <div className="field">
            <label htmlFor={id('email')}>{t.email}</label>
            <input id={id('email')} name="email" type="email" inputMode="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {askVehicles && (
            <div className="field">
              <label htmlFor={id('vehicles')}>{t.vehicles}</label>
              <input id={id('vehicles')} name="vehicles" type="number" inputMode="numeric" min={1} value={vehicles} onChange={(e) => setVehicles(e.target.value)} />
            </div>
          )}
        </div>

        {!business && (
          <div className="field">
            <label htmlFor={id('address')}>{t.address}</label>
            <input id={id('address')} name="address" autoComplete="street-address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        )}

        {(askVin || askDrivers) && (
          <div className="grid2">
            {askVin && (
              <div className="field">
                <label htmlFor={id('vin')}>{t.vin}</label>
                <input id={id('vin')} name="vin" autoCapitalize="characters" maxLength={17} value={vin} onChange={(e) => setVin(e.target.value)} placeholder={t.vinPh} />
              </div>
            )}
            {askDrivers && (
              <div className="field">
                <label htmlFor={id('drivers')}>{t.drivers}</label>
                <input id={id('drivers')} name="drivers" type="number" inputMode="numeric" min={1} value={drivers} onChange={(e) => setDrivers(e.target.value)} />
              </div>
            )}
          </div>
        )}

        <div className="field">
          <label htmlFor={id('comments')}>{t.comments}</label>
          <textarea
            id={id('comments')}
            name="comments"
            rows={2}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder={business ? t.commentsPhCommercial : t.commentsPh}
          />
        </div>

        <ConsentCheckbox
          id={id('consent')}
          lang={lang}
          checked={consent}
          onChange={(v) => {
            setConsent(v);
            if (v && status === 'consent') setStatus('');
          }}
        />

        <button type="submit" className="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.sending : t.submit}
        </button>
        {status === 'consent' && <p className="status-err" aria-live="polite">{t.consentNeeded}</p>}
        {status === 'err' && <p className="status-err" aria-live="polite">{t.err}</p>}
        <p className="privacy">{t.privacy}</p>
      </form>
    </div>
  );
}
