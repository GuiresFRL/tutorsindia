import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/Breadcrumb';
import TestimonialsSlider from '../components/TestimonialsSlider';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import SubjectsList from '../components/SubjectsList';
import FAQAccordion from '../components/FAQAccordion';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '#' },
  { label: 'Masters Dissertation Writing Services', href: '/our-services/masters-dissertation-writing-services' },
  { label: 'Specific Dissertation' },
];

const SPECIFIC_TYPES = [
  { title: 'Business Plan Dissertation', desc: 'We write comprehensive business plan dissertations that include market analysis, financial projections, operational plans, and strategic frameworks to meet your university requirements.' },
  { title: 'Meta-Analysis', desc: 'Our experts conduct rigorous meta-analysis dissertations, systematically reviewing and statistically combining results from multiple studies to draw comprehensive conclusions.' },
  { title: 'Systematic Review', desc: 'We provide thorough systematic review dissertations that follow PRISMA guidelines, identifying, evaluating, and synthesizing all available evidence on your research question.' },
  { title: 'Library-Based Dissertation', desc: 'Our writers develop high-quality library-based (secondary research) dissertations using peer-reviewed journals, textbooks, and credible sources to analyze existing knowledge.' },
  { title: 'Case Study Dissertation', desc: 'We write detailed case study dissertations examining specific organizations, phenomena, or events in depth using multiple sources of evidence and robust analytical frameworks.' },
  { title: 'Action Research Dissertation', desc: 'Our experts support action research dissertations that involve systematic inquiry and reflective practice, combining research with practical problem-solving in your field.' },
];

const FAQS = [
  { q: 'What types of specific dissertations do you cover?', a: 'We handle a broad range of specific dissertation types including business plan dissertations, meta-analysis, systematic review, library-based dissertations, case study dissertations, action research, and more. Contact us to discuss your specific requirements.' },
  { q: 'Can you handle a systematic review following PRISMA guidelines?', a: 'Yes, our experts are well-versed in conducting systematic reviews following PRISMA guidelines. We identify, select, appraise, and synthesize all available evidence on a research question following established protocols.' },
  { q: 'What is the difference between a systematic review and a literature review?', a: 'A literature review broadly surveys existing literature on a topic, while a systematic review follows a rigorous, pre-defined protocol to identify, select, and critically appraise all relevant studies. Systematic reviews are more structured, reproducible, and comprehensive.' },
  { q: 'Do you provide a business plan dissertation with financial projections?', a: 'Yes, we provide comprehensive business plan dissertations including market analysis, SWOT analysis, financial projections, operational plans, and strategic frameworks tailored to your university requirements and industry.' },
  { q: 'How do I place an order for a specific dissertation type?', a: 'Simply fill out our enquiry form or contact us via email or WhatsApp with your specific requirements, dissertation type, word count, deadline, and university guidelines. We\'ll respond within 30 minutes with a customized proposal.' },
];

export default function SpecificDissertationPage() {
  return (
    <MainLayout>
      <Breadcrumb items={BREADCRUMBS} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-secondary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex gap-3 mb-4">
                {['Facebook', 'Twitter', 'Reddit', 'LinkedIn'].map((s) => (
                  <a key={s} href="#" className="bg-white/10 hover:bg-primary px-3 py-1 rounded-full text-xs font-semibold transition-colors">{s}</a>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading leading-tight mb-4">
                Masters Specific Dissertation Writing Services
              </h1>
              <p className="text-gray-200 mb-3 leading-relaxed">
                We handle business plan, meta-analysis, systematic review, library-based dissertation and many other specific types of Master's dissertations with expert precision and academic rigour.
              </p>
              <p className="text-xl font-bold text-accent mb-4">Exclusive Dissertation Writing & Tutoring Services</p>
              <p className="text-gray-300 mb-6 text-sm">
                Our exclusive UK dissertation writing and tutoring services are extended to our clients who are pursuing their career in higher studies. We understand that specific dissertation types require specialized knowledge and approach.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="#" className="btn-primary rounded-full">Place an Order</Link>
                <Link to="#" className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-6 py-2.5 rounded-full transition-colors text-sm">Ask an Expert</Link>
              </div>
            </div>
            <div>
              <ContactForm title="Get a Free Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">What is a Specific Dissertation?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A specific dissertation refers to specialized types of research work that go beyond the standard dissertation format. These include business plans, meta-analyses, systematic reviews, library-based research, case studies, and other niche academic projects that require unique methodologies and expertise.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Tutors India, our exclusive UK dissertation writing and tutoring services cater to clients pursuing various specialized academic paths. Our team consists of subject matter experts with deep knowledge in their respective fields who can handle even the most complex and specific dissertation requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                { label: '8000+', desc: 'Dissertations Completed' },
                { label: '2000+', desc: 'Expert Writers' },
                { label: '100%', desc: 'Plagiarism Free Guarantee' },
              ].map((s) => (
                <div key={s.label} className="text-center bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <div className="text-3xl font-extrabold text-primary mb-1">{s.label}</div>
                  <div className="text-sm text-gray-600">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TYPES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Types of Specific Dissertations We Handle</h2>
          <p className="section-subtitle text-center">We offer specialized support across all types of specific dissertation requirements</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIFIC_TYPES.map((type) => (
              <div key={type.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary transition-all">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-secondary mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">What Services Do We Offer Under Specific Dissertation?</h2>
          <p className="text-center text-gray-600 mb-10">We write complete master's dissertation from the introduction to recommendations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Basic', badge: 'bg-gray-500', desc: 'Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.' },
              { name: 'Advanced', badge: 'bg-primary', desc: 'Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.' },
              { name: 'Premium', badge: 'bg-secondary', desc: 'Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown.' },
            ].map((tier) => (
              <div key={tier.name} className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className={`${tier.badge} text-white text-center py-4`}>
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{tier.desc}</p>
                  <Link to="#" className="btn-primary mt-4 w-full text-center block text-sm">Order Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ── */}
      <SubjectsList />

      {/* ── GUARANTEES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Our Guarantees for Specific Dissertation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🔒', title: 'Confidential Service', desc: '100% confidentiality — all projects given unique reference codes, documents accessed only by NDA-signed writers.' },
              { icon: '📖', title: 'Fully Referenced', desc: 'Our work is fully referenced with latest articles from Web of Science, ProQuest, Google Scholar, and Business Source Complete.' },
              { icon: '🛡️', title: 'Plagiarism Free', desc: 'We ensure less than 5% plagiarism and deliver with Turnitin-equivalent plagiarism certificate.' },
              { icon: '🔄', title: 'Unlimited Revisions', desc: 'Unlimited revisions for the work being committed at zero additional cost, even after project completion.' },
            ].map((g) => (
              <div key={g.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-primary transition-colors">
                <div className="text-2xl mb-3">{g.icon}</div>
                <h3 className="font-bold text-secondary text-sm mb-2">{g.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSlider />

      {/* ── CTA ── */}
      <CTASection title="Order Your Specific Dissertation Today" subtitle="Get specialized academic writing support from UK & US qualified researchers" primaryLabel="Order Now" />
    </MainLayout>
  );
}
