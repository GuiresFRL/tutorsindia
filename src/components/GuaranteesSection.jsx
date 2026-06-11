import { GUARANTEES } from '../utils/constants';

export default function GuaranteesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Unbeatable Guarantees</h2>
          <p className="section-subtitle">What We promise, we deliver exactly the same</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEES.map((g, i) => (
            <div key={i} className="text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary transition-all duration-200 group">
              <div className="text-4xl mb-4">{g.icon}</div>
              <h3 className="font-heading font-bold text-lg text-secondary mb-3 group-hover:text-primary transition-colors">
                {g.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
