import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import StatsSection from '../components/StatsSection';
import GuaranteesSection from '../components/GuaranteesSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import OrderProcess from '../components/OrderProcess';
import CTASection from '../components/CTASection';
import { LOGO_URL } from '../utils/constants';

const MASTER_SERVICES = [
  { title: 'Masters Dissertation Writing Services', desc: 'Learn about our features of Master\'s dissertation support help students', href: '/our-services/masters-dissertation-writing-services', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png' },
  { title: 'Masters Dissertation Topic Selection Help', desc: 'You want to identify dissertation topic that is unique and not been done elsewhere?', href: '#', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png' },
  { title: 'Masters Full Dissertation Writing Help', desc: 'Our Full Dissertation Writing Services at Tutors India are handled by experts from the UK & the US', href: '/our-services/masters-dissertation-writing-services/full-dissertation', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png' },
  { title: 'Masters Part Dissertation Writing Help', desc: 'A part-dissertation writing service from Tutors India is simply easy and straightforward.', href: '/our-services/masters-dissertation-writing-services/dissertation-part', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png' },
  { title: 'Masters Specific Dissertation Writing Services', desc: 'We handle business plan, meta-analysis, systematic review, library-based dissertation', href: '/our-services/masters-dissertation-writing-services/specific-dissertation', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png' },
  { title: 'Masters Resit Dissertation Writing Services', desc: 'Exclusive support to completely rework your dissertation based on the supervisor comments', href: '/our-services/masters-dissertation-writing-services/resit-dissertation', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png' },
  { title: 'Masters Dissertation Statistical Services', desc: 'We provide support for qualitative and quantitative data analysis for your Master\'s dissertation', href: '/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png' },
  { title: 'Masters Poster Presentation Services', desc: 'Tutors India offers full assistance to developing your poster presentation that stands apart.', href: '#', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png' },
];

const SAMPLE_WORKS = [
  { label: 'Introductions', href: '#' },
  { label: 'Literature Review', href: '#' },
  { label: 'Research Proposal', href: '#' },
  { label: 'Full dissertation', href: '#' },
  { label: 'Manuscript Writing', href: '#' },
  { label: 'Coding & Algorithm', href: '#' },
  { label: 'Assignment Writing', href: '#' },
];

const SERVICE_TABS = [
  { label: 'Master Dissertation', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png' },
  { label: 'PhD Dissertation', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/PhD-Dissertation.png' },
  { label: 'Coursework Writing', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Coursework-Writing.png' },
  { label: 'Publication Support', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Publication-Support.png' },
  { label: 'Development', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Development.png' },
  { label: 'Editing Services', icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Editing-Services.png' },
];

export default function HomePage() {
  return (
    <MainLayout>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-blue-400 blur-2xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-primary/20 border border-primary/40 text-primary-light px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Trusted Since 2001 · Registered in UK & US
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold font-heading leading-tight mb-4">
                Masters/MBA Dissertation Writing and Editing Services
              </h1>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Trusted <strong className="text-white">Academic Writing & Editing Services</strong> guaranteed by the best in the Industry. Our team of writers & statisticians are guided by a high quality QC team from Harvard & Alabama.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/our-services/masters-dissertation-writing-services" className="btn-primary text-base px-8 py-3 rounded-full shadow-lg">
                  Explore Services
                </Link>
                <Link to="#" className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-3 rounded-full transition-colors">
                  View Our Process
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                {['100% Plagiarism Free', 'On-Time Delivery', 'Unlimited Revisions', '24/7 Support'].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 text-gray-200">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero form */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <h2 className="font-heading font-bold text-xl mb-4 text-white">Get a Free Consultation</h2>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                {[
                  { placeholder: 'Your Full Name', type: 'text' },
                  { placeholder: 'Email Address', type: 'email' },
                  { placeholder: 'Phone / WhatsApp', type: 'tel' },
                ].map(({ placeholder, type }) => (
                  <input
                    key={placeholder}
                    type={type}
                    placeholder={placeholder}
                    className="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                  />
                ))}
                <select className="w-full bg-white/20 border border-white/30 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60">
                  <option value="" className="text-gray-800">-- Select Service --</option>
                  <option className="text-gray-800">Masters Dissertation</option>
                  <option className="text-gray-800">PhD Dissertation</option>
                  <option className="text-gray-800">Statistical Analysis</option>
                  <option className="text-gray-800">Coursework</option>
                  <option className="text-gray-800">Editing</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Describe your requirements..."
                  className="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 resize-none"
                />
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors text-base">
                  Get Free Quote
                </button>
              </form>
              <p className="text-xs text-gray-300 text-center mt-2">Response within 30 minutes · 100% Confidential</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TUTORS INDIA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="section-title mt-1">Why Tutors India?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A Genuine Company with presence across the World including the US, UK. Tutors India is a pioneer in providing complete academic guidance and services for the past 25 years.
              </p>
              <ul className="space-y-3">
                {[
                  'Our team of writers & Statisticians are guided by high quality QC team from Harvard & Alabama',
                  'Highest quality work in the industry',
                  'Registered Company based in Sheffield (U.K), Dallas (U.S)',
                  'We guarantee your work and care deeply about academic success',
                  'Our team of researchers and writers care about your success',
                  'Our experts have guided more than 3000 DBA Candidates and 10,000 Masters Students',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
                <Link to="#" className="btn-primary">About Us</Link>
                <Link to="#" className="btn-outline">Contact Us</Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary to-blue-900 rounded-2xl p-8 text-white text-center">
                <img src={LOGO_URL} alt="Tutors India" className="h-16 mx-auto mb-6 brightness-0 invert" />
                <h3 className="text-xl font-bold mb-4">Get Your Master's or DBA Research from your Academic Tutor with Unlimited Support!</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  At Tutors India, we offer high quality writing and data analysis services that have extremely benefited research scholars, students, professionals & entrepreneurs across the globe.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[['25+', 'Years'], ['2L+', 'Clients'], ['2000+', 'Experts'], ['50+', 'Countries']].map(([v, l]) => (
                    <div key={l} className="bg-white/10 rounded-xl p-3">
                      <div className="text-2xl font-bold text-accent">{v}</div>
                      <div className="text-xs text-gray-300">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES TABS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Offerings</span>
            <h2 className="section-title mt-1">Our Services Assures Your Success</h2>
            <p className="section-subtitle">Our Writing, Editing, Statistics, Designing, Coding & Programming Services</p>
          </div>

          {/* Tab icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {SERVICE_TABS.map((tab) => (
              <div key={tab.label} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all cursor-pointer w-28 text-center">
                <img src={tab.icon} alt={tab.label} className="w-10 h-10 object-contain" loading="lazy" />
                <span className="text-xs font-semibold text-gray-700">{tab.label}</span>
              </div>
            ))}
          </div>

          {/* Master services grid */}
          <h3 className="text-xl font-bold font-heading text-secondary mb-6 text-center">Master Dissertation to Editing Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MASTER_SERVICES.map((s) => (
              <Link key={s.title} to={s.href} className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary transition-all">
                <h4 className="font-bold text-sm text-gray-800 group-hover:text-primary transition-colors mb-2">{s.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-2 text-primary text-xs font-semibold group-hover:translate-x-1 transition-transform">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── ABOUT / DR NANCY ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Tutors India</span>
              <h2 className="section-title mt-1">Leading Provider of Academic Support</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Studying UK / US degree let it be Master's or DBA can be extremely challenging and stressful for students across the world. Especially, it's stressful for scholars/students when they lack proper guidance while asking for external help. For this reason, Tutors India, a most trusted brand offers hassle-free academic writing services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tutors India is a pioneer in providing complete academic guidance and services for the past 15 years. Our team of expertise have guided more than 3000 DBA Candidates and 10,000 Masters Students around the globe.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 bg-gray-50 py-3 pr-4 rounded-r-lg">
                "We are driven by Trust, Quality & Perfection. We highly value our client's time and credentials on every instance."
                <footer className="mt-2 text-sm font-semibold text-secondary not-italic">— Dr. Nancy, Chief Technical Officer, Tutors India</footer>
              </blockquote>
              <Link to="#" className="btn-primary mt-6 inline-block">Find More About Tutors India</Link>
            </div>

            {/* Guarantees mini */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⏰', title: 'On-Time Delivery', desc: 'Guaranteed delivery within your deadline' },
                { icon: '🔄', title: 'Unlimited Revisions', desc: 'Free unlimited revisions as per commitment' },
                { icon: '📋', title: '100% Originality', desc: '95-100% plagiarism-free guarantee' },
                { icon: '👨‍🎓', title: 'Expert Writers', desc: 'PhD holders from top UK & US universities' },
              ].map((g) => (
                <div key={g.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-primary transition-colors">
                  <div className="text-3xl mb-2">{g.icon}</div>
                  <h3 className="font-bold text-sm text-secondary mb-1">{g.title}</h3>
                  <p className="text-xs text-gray-500">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ── */}
      <GuaranteesSection />

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSlider />

      {/* ── SAMPLE WORKS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Sample Work</h2>
            <p className="text-gray-600">View our exclusive sample works written by subject matter experts</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SAMPLE_WORKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-2 px-5 py-3 border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary rounded-full font-medium text-sm transition-all"
              >
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                {s.label}
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="#" className="btn-primary">View All Sample Works</Link>
          </div>
        </div>
      </section>

      {/* ── ORDER PROCESS ── */}
      <OrderProcess />

      {/* ── INSIGHTS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">TUTORS INDIA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: 'https://www.tutorsindia.com/wp-content/uploads/2024/08/Storyboard.webp', title: 'Storyboard', desc: 'Get to know how we handle our Clients' },
              { img: 'https://www.tutorsindia.com/wp-content/uploads/2024/08/Brochure.webp', title: 'Brochure', desc: 'Trust, Quality and Customer Care' },
              { img: 'https://www.tutorsindia.com/wp-content/uploads/2024/08/Dissertation-Journey.webp', title: 'Dissertation Journey', desc: 'Get to know how we handle our Clients' },
              { img: 'https://www.tutorsindia.com/wp-content/uploads/2024/08/essay-journey.webp', title: 'Essay Journey', desc: 'Get to know how we handle our Clients' },
            ].map((item) => (
              <Link key={item.title} to="#" className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-gray-300 text-xs">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Ready to Start Your Dissertation?"
        subtitle="Get expert academic writing help from UK & US qualified researchers. 100% confidential, plagiarism-free, on-time delivery."
        primaryLabel="Order Now"
        secondaryLabel="Contact Us"
        secondaryHref="#"
      />
    </MainLayout>
  );
}
