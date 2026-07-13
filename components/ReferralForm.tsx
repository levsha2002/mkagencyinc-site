'use client';

import { useState, useRef } from 'react';

const MAX_IMAGE_MB = 2;

type ReferralFormText = {
  formTitle: string;
  formSub: string;
  labelBusinessName: string;
  labelCategory: string;
  labelCategoryPh: string;
  labelAddress: string;
  labelZip: string;
  labelWebsite: string;
  labelOwnerFirst: string;
  labelOwnerLast: string;
  labelPhone: string;
  labelEmail: string;
  labelDescription: string;
  labelCardImage: string;
  submit: string;
  sending: string;
  successMessage: string;
  errorMessage: string;
  imageTooLarge: string;
};

export default function ReferralForm({ t }: { t: ReferralFormText }) {
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [website, setWebsite] = useState('');
  const [ownerFirstName, setOwnerFirstName] = useState('');
  const [ownerLastName, setOwnerLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [cardImage, setCardImage] = useState<string>('');
  const [cardImageName, setCardImageName] = useState('');
  const [imageError, setImageError] = useState('');
  const [status, setStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    setImageError('');
    if (!file) return;
    if (file.size > MAX_IMAGE_MB * 1024 * 1024) {
      setImageError(t.imageTooLarge);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCardImage(reader.result as string);
      setCardImageName(file.name);
    };
    reader.readAsDataURL(file);
  };

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
          zip,
          website,
          owner_first_name: ownerFirstName,
          owner_last_name: ownerLastName,
          phone,
          email,
          description,
          card_image: cardImage,
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
      if (res.ok) {
        setBusinessName('');
        setCategory('');
        setAddress('');
        setZip('');
        setWebsite('');
        setOwnerFirstName('');
        setOwnerLastName('');
        setPhone('');
        setEmail('');
        setDescription('');
        setCardImage('');
        setCardImageName('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    } catch {
      setStatus('err');
    }
  };

  if (status === 'ok') {
    return (
      <div className="card">
        <p className="status-ok">{t.successMessage}</p>
      </div>
    );
  }

  return (
    <div className="card" id="recommend">
      <h2>{t.formTitle}</h2>
      <p className="sub">{t.formSub}</p>
      <form onSubmit={submit}>
        <div className="field">
          <label>{t.labelBusinessName}</label>
          <input required value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
        </div>

        <div className="grid2">
          <div className="field">
            <label>{t.labelCategory}</label>
            <input
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder={t.labelCategoryPh}
            />
          </div>
          <div className="field">
            <label>{t.labelAddress}</label>
            <input required value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>

        <div className="grid2">
          <div className="field">
            <label>{t.labelZip}</label>
            <input required inputMode="numeric" maxLength={5} value={zip} onChange={(e) => setZip(e.target.value)} />
          </div>
          <div className="field">
            <label>{t.labelWebsite}</label>
            <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://..." />
          </div>
        </div>

        <div className="grid2">
          <div className="field">
            <label>{t.labelOwnerFirst}</label>
            <input required value={ownerFirstName} onChange={(e) => setOwnerFirstName(e.target.value)} />
          </div>
          <div className="field">
            <label>{t.labelOwnerLast}</label>
            <input required value={ownerLastName} onChange={(e) => setOwnerLastName(e.target.value)} />
          </div>
        </div>

        <div className="grid2">
          <div className="field">
            <label>{t.labelPhone}</label>
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="field">
            <label>{t.labelEmail}</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <div className="field">
          <label>{t.labelDescription}</label>
          <textarea required rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="field">
          <label>{t.labelCardImage}</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          {cardImageName && (
            <p style={{ fontSize: '.8rem', color: 'var(--muted)', marginTop: 6 }}>
              {cardImageName}
            </p>
          )}
          {imageError && <p className="status-err" style={{ marginTop: 6 }}>{imageError}</p>}
        </div>

        <button type="submit" className="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.sending : t.submit}
        </button>
        {status === 'err' && <p className="status-err">{t.errorMessage}</p>}
      </form>
    </div>
  );
}
