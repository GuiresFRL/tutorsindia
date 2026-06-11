import { SUBJECTS } from '../utils/constants';

export default function SubjectsList({ title = 'Experienced Writers Across All Subjects' }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-center mb-2">{title}</h2>
        <p className="text-center text-gray-600 mb-8">
          We have a team of 2000+ experts across subjects & countries (including the USA, UK, Australia, Canada, New Zealand, Germany, France, Russia & Ukraine)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {SUBJECTS.map((s) => (
            <div key={s} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
