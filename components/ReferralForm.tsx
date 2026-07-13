'use client';

import { useState } from 'react';

export default function ReferralForm() {
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [ownerFirstName, setOwnerFirstName] = useState('');
  const [ownerLastName, setOwnerLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/referral-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: businessName,
          category,
          address,
          owner_first_name: ownerFirstName,
          owner_last_name: ownerLastName,
          phone,
          email,
          description,
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) {
        setBusinessName('');
        setCategory('');
        setAddress('');
        setOwnerFirstName('');
        setOwnerLastName('');
        setPhone('');
        setEmail('');
        setDescription('');
      }
    } catch {
      setStatus('err');
    }
  };

  if (status === 'ok') {
    return (
      <div className="card">
        <p className="status-ok">
          Thank you! Our team will reach out to the business owner to verify the details
          before adding it to the map.
        </p>
      </div>
    );
  }

  return (
    <div className="card" id="recommend">
      <h2>Recommend a local business</h2>
      <p className="sub">
        Know a Florida business your neighbors should hear about? Tell us — our team
        personally calls every business owner to verify before it goes on the map.
      </p>
      <form onSubmit={submit}>
        <div className="field">
          <label>Business name</label>
          <input required value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
        </div>

        <div className="grid2">
          <div className="field">
            <label>Category</label>
            <input
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Realtor, Contractor, Restaurant"
            />
          </div>
          <div className="field">
            <label>Business address</label>
            <input required value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>

        <div className="grid2">
          <div className="field">
            <label>Owner first name</label>
            <input required value={ownerFirstName} onChange={(e) => setOwnerFirstName(e.target.value)} />
          </div>
          <div className="field">
            <label>Owner last name</label>
            <input required value={ownerLastName} onChange={(e) => setOwnerLastName(e.target.value)} />
          </div>
        </div>

        <div className="grid2">
          <div className="field">
            <label>Phone number</label>
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="field">
            <label>Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <div className="field">
          <label>Short description of the business/service</label>
          <textarea
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Submit for review →'}
        </button>
        {status === 'err' && (
          <p className="status-err">Something went wrong. Please call us at (305) 247-8877.</p>
        )}
      </form>
    </div>
  );
}
