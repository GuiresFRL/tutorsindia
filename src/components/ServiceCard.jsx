import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, href, icon }) {
  return (
    <Link
      to={href}
      className="group block bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary transition-all duration-200"
    >
      {icon && (
        <div className="w-14 h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
          <img src={icon} alt="" className="w-8 h-8 object-contain" loading="lazy" />
        </div>
      )}
      <h3 className="font-heading font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <span className="inline-block mt-3 text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
        Learn more →
      </span>
    </Link>
  );
}
