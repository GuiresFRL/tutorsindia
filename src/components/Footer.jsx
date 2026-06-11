import { Link } from 'react-router-dom';
import { PHONE_UK, PHONE_IN, EMAIL } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4 border-b border-primary pb-2">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['Masters Dissertation', '/our-services/masters-dissertation-writing-services'],
                ['PhD / DBA Dissertation', '#'],
                ['Coursework Writing', '#'],
                ['Development', '#'],
                ['Publication Support', '#'],
                ['Editing', '#'],
                ['All Services', '#'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="hover:text-primary transition-colors flex items-center gap-1">
                    <span className="text-primary">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Tools */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4 border-b border-primary pb-2">Useful Tools</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['Referencing', '#'],
                ['Dissertation Index', '#'],
                ['Library', '#'],
                ['Help Guide', '#'],
                ['Coursework – Assignment', '#'],
                ['Customer Centre', '#'],
                ['Testimonials', '#'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="hover:text-primary transition-colors flex items-center gap-1">
                    <span className="text-primary">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4 border-b border-primary pb-2">About Us</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['Our Writers', '#'],
                ['Our Quality Procedures', '#'],
                ['Blog', '#'],
                ['Guarantees', '#'],
                ['Our Process', '#'],
                ['FAQ', '#'],
                ['Insights', '#'],
                ['Contact Us', '#'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="hover:text-primary transition-colors flex items-center gap-1">
                    <span className="text-primary">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4 border-b border-primary pb-2">Address</h3>
            <div className="text-sm space-y-4">
              <div>
                <p className="font-semibold text-white mb-1">India</p>
                <p>10, Kutty Street,</p>
                <p>Nungambakkam,</p>
                <p>Chennai – 600034</p>
                <a href={`tel:${PHONE_IN.replace(/\s/g,'')}`} className="text-primary hover:text-primary-light mt-1 block">
                  {PHONE_IN}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">UK</p>
                <p>10 Park Place,</p>
                <p>Manchester M4 4EY</p>
                <a href={`tel:${PHONE_UK.replace(/[^0-9+]/g,'')}`} className="text-primary hover:text-primary-light mt-1 block">
                  {PHONE_UK}
                </a>
              </div>
              <a href={`mailto:${EMAIL}`} className="text-primary hover:text-primary-light block">{EMAIL}</a>

              {/* Social */}
              <div className="flex gap-3 mt-4">
                {[
                  { href: 'https://www.facebook.com/TutorsIndiaGlobalAcademia/', label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { href: 'https://twitter.com/TutorsIndia', label: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { href: 'https://www.instagram.com/tutors_india/', label: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
                  { href: 'https://www.linkedin.com/company/20377562/', label: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                ].map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Tutors India. All Rights Reserved</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
