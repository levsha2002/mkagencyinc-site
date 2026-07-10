'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    insurance_type: 'Auto',
    zip_code: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Thank you! We will contact you shortly.');
        setFormData({
          insurance_type: 'Auto',
          zip_code: '',
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('Something went wrong. Please try again or call us directly.');
      }
    } catch (err) {
      setStatus('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#082a59] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <span className="inline-block text-sm tracking-wide text-blue-200 mb-4">
            Home · Auto · Commercial — Florida City, FL
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Accidents happen.{' '}
            <span className="text-[#E0A93B]">Don&apos;t gamble with your future.</span>
          </h1>
          <p className="mt-5 text-blue-100 text-lg max-w-xl">
            M&amp;K Agency protects your home, your car, and your business. Local,
            bilingual, real people who answer — in English, Spanish, or Russian.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="bg-[#1d6fe0] hover:bg-[#1a63c9] text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              Get my free quote →
            </a>
            <a
              href="tel:3052478877"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              📞 (305) 247-8877
            </a>
          </div>

          {/* small avatar review badge */}
          <div className="mt-10 flex items-center gap-3">
            <Image
              src="/images/mikhail-avatar.jpg"
              alt="Mikhail Kozlov"
              width={56}
              height={56}
              className="rounded-full ring-2 ring-white/30"
            />
            <div className="text-sm">
              <div className="text-[#E0A93B]">★★★★★ Mikhail Kozlov</div>
              <div className="text-blue-200">Rated 5.0 on Google &amp; Yelp · 334+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET MIKHAIL */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-[320px_1fr] gap-10 md:gap-14 items-center">
          <div className="justify-self-center md:justify-self-start">
            <Image
              src="/images/mikhail.jpg"
              alt="Mikhail Kozlov, Founder of M&K Agency"
              width={700}
              height={875}
              priority
              className="rounded-3xl shadow-xl w-[280px] md:w-[320px] h-auto"
            />
          </div>
          <div>
            <span className="text-[#1d6fe0] font-semibold text-sm">Meet your agent</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#082a59]">
              Hi, I&apos;m Mikhail Kozlov.
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              For years, my family and I have protected families and businesses across
              Florida. I built M&amp;K on a simple belief: insurance is about people, not
              policies. When you call, you reach me and my team — real people who answer,
              in English, Spanish, or Russian.
            </p>
            <div className="mt-6 text-[#082a59] font-medium">
              ✦ In God We Trust · We build our future together
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:3052478877"
                className="bg-[#082a59] hover:bg-[#0a325f] text-white px-6 py-3 rounded-2xl font-semibold transition"
              >
                📞 Talk to Mikhail · (305) 247-8877
              </a>
              <a
                href="sms:3052478877"
                className="border-2 border-[#082a59] text-[#082a59] hover:bg-gray-50 px-6 py-3 rounded-2xl font-semibold transition"
              >
                💬 Text us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div id="quote" className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Get My Free Quote</h2>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-3xl">
            <div>
              <label className="block text-sm font-medium mb-2">What do you need?</label>
              <select
                value={formData.insurance_type}
                onChange={(e) => setFormData({ ...formData, insurance_type: e.target.value })}
                className="w-full p-4 border rounded-xl"
              >
                <option value="Auto">Auto Insurance</option>
                <option value="Home">Home / Condo</option>
                <option value="Commercial">Commercial</option>
                <option value="Life">Life Insurance</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">ZIP Code</label>
                <input
                  type="text"
                  value={formData.zip_code}
                  onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}
                  className="w-full p-4 border rounded-xl"
                  placeholder="33196"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 border rounded-xl"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-4 border rounded-xl"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 border rounded-xl"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message (optional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 border rounded-xl h-24"
                placeholder="Additional details..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-xl font-semibold rounded-2xl transition"
            >
              See My Quote →
            </button>

            {status && (
              <p
                className={`text-center font-medium ${
                  status.includes('Thank you') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
