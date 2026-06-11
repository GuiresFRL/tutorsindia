const STATS = [
  { value: '2,00,000+', label: 'Scholars & Students Served' },
  { value: '25+', label: 'Years of Experience' },
  { value: '2000+', label: 'Expert Writers Worldwide' },
  { value: '10,000+', label: 'Masters Students Guided' },
  { value: '3000+', label: 'DBA Candidates Guided' },
  { value: '95-100%', label: 'Plagiarism Free Guarantee' },
];

export default function StatsSection() {
  return (
    <section className="py-14 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
            Academic Research Company — Trusted by 2,00,000+
          </h2>
          <p className="text-gray-300">Scholars, Students & Entrepreneurs across the world Since 2001</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label} className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{s.value}</div>
              <div className="text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
