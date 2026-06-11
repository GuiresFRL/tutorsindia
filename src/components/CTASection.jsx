import { Link } from 'react-router-dom';

export default function CTASection({
  title = 'Place Your Order Today',
  subtitle = 'Invest in your career by availing expert academic writing help from the UK & US qualified researchers',
  primaryLabel = 'Order Now',
  primaryHref = '#',
  secondaryLabel = null,
  secondaryHref = '#',
  dark = true,
}) {
  return (
    <section className={`py-14 ${dark ? 'bg-secondary' : 'bg-primary'}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">{title}</h2>
        <p className="text-gray-200 mb-8 text-base md:text-lg">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryHref}
            className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-full transition-colors text-lg shadow-lg"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link
              to={secondaryHref}
              className="bg-white text-secondary hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-colors text-lg shadow-lg"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
