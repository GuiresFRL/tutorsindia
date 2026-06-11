import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb" className="bg-gray-100 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
              {item.href && i < items.length - 1 ? (
                <Link to={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
              ) : (
                <span className={i === items.length - 1 ? 'text-primary font-medium' : ''}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
