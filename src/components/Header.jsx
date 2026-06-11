import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PHONE_UK, PHONE_IN, EMAIL, LOGO_URL, NAV_MENU, WHATSAPP } from '../utils/constants';

function DropdownMenu({ items }) {
  return (
    <ul className="absolute left-0 top-full bg-white shadow-xl border-t-2 border-primary min-w-[220px] z-50 py-1">
      {items.map((item, i) => (
        <li key={i} className="group relative">
          <Link
            to={item.href}
            className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-150 whitespace-nowrap"
          >
            {item.label}
            {item.children && item.children.length > 0 && (
              <svg className="w-3 h-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </Link>
          {item.children && item.children.length > 0 && (
            <ul className="absolute left-full top-0 bg-white shadow-xl border-t-2 border-primary min-w-[220px] z-50 py-1 hidden group-hover:block">
              {item.children.map((child, j) => (
                <li key={j}>
                  <Link
                    to={child.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-150 whitespace-nowrap"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const toggleMobile = (label) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-secondary text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a href={`tel:${PHONE_UK.replace(/\s/g,'')}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE_UK}
            </a>
            <a href={`tel:${PHONE_IN.replace(/\s/g,'')}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE_IN}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {EMAIL}
            </a>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-0.5 rounded-full text-xs font-medium transition-colors"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={LOGO_URL} alt="Tutors India" className="h-10 md:h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_MENU.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.children && item.children.length > 0 && (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && item.children.length > 0 && (
                  <div className="absolute left-0 top-full hidden group-hover:block">
                    <DropdownMenu items={item.children} />
                  </div>
                )}
              </div>
            ))}
            <Link to="#" className="ml-2 btn-primary text-sm py-2 px-4">
              Order Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-screen overflow-y-auto">
          {NAV_MENU.map((item) => (
            <div key={item.label} className="border-b border-gray-100">
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer"
                onClick={() => item.children ? toggleMobile(item.label) : null}
              >
                <Link to={item.href} className="text-sm font-medium text-gray-700 hover:text-primary" onClick={e => item.children && e.preventDefault()}>
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${mobileExpanded[item.label] ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>
              {mobileExpanded[item.label] && item.children && (
                <div className="bg-gray-50 pl-4">
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      to={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary border-b border-gray-100"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <Link to="#" className="btn-primary w-full text-center block">Order Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
