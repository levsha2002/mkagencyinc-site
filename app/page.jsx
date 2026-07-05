'use client';

import { useState, useEffect } from 'react';

const heroSlides = [
  {
    image: 'https://picsum.photos/id/1015/2000/1200',
    title: 'Accidents happen.',
    subtitle: "Don't gamble with your financial success.",
    button: 'Get my free quote'
  },
  {
    image: 'https://picsum.photos/id/160/2000/1200',
    title: 'Protect your home in Florida.',
    subtitle: 'From hurricanes to everyday risks — we have you covered.',
    button: 'Get home insurance quote'
  },
  {
    image: 'https://picsum.photos/id/201/2000/1200',
    title: 'Business protection that works.',
    subtitle: 'Commercial insurance for South Florida businesses.',
    button: 'Protect my business'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={slide.image} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">{slide.title}</h1>
          <p className="text-2xl mb-10">{slide.subtitle}</p>
          <button className="bg-white text-blue-900 px-10 py-5 rounded-full text-xl font-semibold hover:bg-yellow-400 transition">
            {slide.button}
          </button>
        </div>
      </div>

      {/* Rest of the site */}
      <div className="p-10 text-center">
        <h2>Site is ready for customization</h2>
        <p>Next steps: Neon DB + full quote form</p>
      </div>
    </div>
  );
}
