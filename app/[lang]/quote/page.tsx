'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function QuotePage() {
  const [form, setForm] = useState({
    insurance_type: 'Auto',
    zip_code: '',
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  });
  const [source, setSource] = useState('qr');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  // Read ?src= from the QR link (e.g. ?src=card, ?src=flyer) for lead tracking
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search).get('src');
      if (p) setSource(p);
    } catch {}
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      setStatus('err');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: `qr-${source}` }),
      });
      setStatus(res.ok ? 'ok' : 'err');
    } catch {
      setStatus('err');
    }
  };

  if (status === 'ok') {
    return (
      <main className="min-h-screen bg-[#082a59] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-[#1d6fe0] flex items-center justify-center mx-auto mb-6 text-3xl">
            ✓
          </div>
          <h1 className="text-3xl font-bold">You&apos;re all set!</h1>
          <p className="mt-4 text-blue-100 text-lg">
            Thanks — our team will call you back shortly. Need us now?
          </p>
          <a
            href="tel:3052478877"
            className="inline-block mt-6 bg-white text-[#082a59] font-semibold px-7 py-3 rounded-2xl"
          >
            📞 Call (305) 247-8877
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#082a59] text-white">
        <div className="max-w-lg mx-auto px-5 py-5 flex items-center gap-3">
          <Image
            src="/images/mikhail-avatar.jpg"
            alt="Mikhail Kozlov"
            width={44}
            height={44}
            className="rounded-full ring-2 ring-white/30"
          />
          <div className="leading-tight">
            <div className="font-bold">M&amp;K Agency</div>
            <div className="text-xs text-blue-200">Home · Auto · Commercial · Florida</div>
          </div>
          <a href="tel:3052478877" className="ml-auto text-sm font-semibold bg-white/10 px-3 py-2 rounded-xl">
            📞 Call
          </a>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-lg mx-auto px-5 py-8">
        <h1 className="text-3xl font-bold text-[#082a59]">Get your free quote</h1>
        <p className="mt-2 text-gray-600">
          Takes 30 seconds. A real, local agent calls you back — in English, Spanish, or Russian.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4 bg-white p-6 rounded-3xl shadow-sm">
          <div>
            <label className="block text-sm font-medium mb-1.5">What do you need?</label>
            <select
              value={form.insurance_type}
              onChange={(e) => setForm({ ...form, insurance_type: e.target.value })}
              className="w-full p-3.5 border rounded-xl bg-white"
            >
              <option value="Auto">Auto insurance</option>
              <option value="Home">Home / Condo / Renters</option>
              <option value="Commercial">Commercial / Business</option>
              <option value="Life">Life insurance</option>
              <option value="Bundle">Bundle &amp; save</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1.5">ZIP code</label>
              <input
                inputMode="numeric"
                maxLength={5}
                value={form.zip_code}
                onChange={(e) => setForm({ ...form, zip_code: e.target.value })}
                className="w-full p-3.5 border rounded-xl"
                placeholder="33034"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Full name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3.5 border rounded-xl"
                placeholder="Your name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-3.5 border rounded-xl"
              placeholder="(305) 555-0123"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3.5 border rounded-xl"
              placeholder="you@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Message (optional)</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3.5 border rounded-xl h-20"
              placeholder="Anything we should know?"
            />
          </div>

          {/* TCPA consent — required before we collect the phone number */}
          <label className="flex gap-3 items-start text-xs text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-0.5 h-4 w-4 flex-shrink-0"
              required
            />
            <span>
              I agree that M&amp;K Agency may contact me by phone, text, or automated/AI calls at the
              number provided about insurance, even if it is on a Do-Not-Call list. Consent is not a
              condition of purchase. Message/data rates may apply.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-[#1d6fe0] hover:bg-[#1a63c9] disabled:opacity-60 text-white py-4 text-lg font-semibold rounded-2xl transition"
          >
            {status === 'sending' ? 'Sending…' : 'See my quote →'}
          </button>

          {status === 'err' && (
            <p className="text-center text-red-600 text-sm font-medium">
              {form.consent
                ? 'Something went wrong — please try again or call (305) 247-8877.'
                : 'Please check the consent box so we can contact you.'}
            </p>
          )}

          <p className="text-center text-xs text-gray-400">🔒 Your info stays private. No spam, ever.</p>
        </form>

        <p className="mt-6 text-[11px] leading-relaxed text-gray-400 text-center">
          M&amp;K Agency Inc. is a licensed independent insurance agency serving Florida. We are not an
          insurance carrier; we help you compare and place home, auto, and commercial coverage.
          Coverage and rates are subject to underwriting approval.
        </p>
      </div>
    </main>
  );
}

