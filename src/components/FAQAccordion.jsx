import { useState } from 'react';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-800 text-sm md:text-base pr-4">{item.q}</span>
            <svg
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-4 pb-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
              <p className="pt-3">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
