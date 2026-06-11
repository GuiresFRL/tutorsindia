import { ORDER_STEPS } from '../utils/constants';

export default function OrderProcess() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Order Process</h2>
          <p className="section-subtitle">Have a look at what makes us the best in the business</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORDER_STEPS.map((s) => (
            <div key={s.step} className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                {s.step}
              </div>
              <h3 className="font-heading font-bold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
