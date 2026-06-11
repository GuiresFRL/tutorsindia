import { useState } from 'react';
import { TESTIMONIALS } from '../utils/constants';

export default function TestimonialsSlider({ items }) {
  const testimonials = items || TESTIMONIALS;
  const [current, setCurrent] = useState(0);
  const perPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

  const total = Math.ceil(testimonials.length / perPage);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = testimonials.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        <p className="section-subtitle text-center">Trusted by 2,00,000+ scholars, students & entrepreneurs worldwide since 2001</p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((t) => (
              <div key={t.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                    <div className="flex text-yellow-400 text-xs">
                      {'★★★★★'}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed italic flex-1">
                  "{t.text}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
