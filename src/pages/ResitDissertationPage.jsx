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
  { label: 'Resit Dissertation' },
];

const RESIT_SERVICES = [
  { title: 'Complete Dissertation Rework', desc: 'We completely rewrite your dissertation from scratch based on supervisor feedback, examiner comments, and rubric guidelines to ensure it meets all university requirements.' },
  { title: 'Chapter-wise Revision', desc: 'We revise specific chapters of your dissertation based on detailed supervisor feedback, ensuring each section meets the expected academic standard.' },
  { title: 'Methodology Improvement', desc: 'We strengthen your research methodology by addressing gaps in research design, data collection, and analysis approach as highlighted in examiner comments.' },
  { title: 'Literature Review Enhancement', desc: 'We update and enhance your literature review with more recent, relevant sources and a stronger critical analysis framework.' },
  { title: 'Data Analysis Correction', desc: 'We re-analyze your data using appropriate statistical tools and present findings in a clear, well-interpreted format aligned with your research questions.' },
  { title: 'Structural & Language Editing', desc: 'We improve the overall structure, flow, academic language, and presentation of your dissertation to meet the highest standards.' },
];

const FAQS = [
  { q: 'What is a resit dissertation?', a: 'A resit dissertation is when a student is required to resubmit their dissertation after failing or receiving low marks. This usually happens when the work doesn\'t meet the required academic standard, and students are given a chance to improve and resubmit within a specified timeframe.' },
  { q: 'How do you handle resit dissertations?', a: 'We carefully review the examiner\'s feedback and supervisor comments, then develop a comprehensive rework plan. We address all identified weaknesses while maintaining the original research direction. Every change is documented so you can discuss them confidently with your supervisor.' },
  { q: 'Can you improve my dissertation based on specific supervisor comments?', a: 'Yes, that is exactly what we specialize in. Please share all feedback documents, examiner reports, and supervisor comments along with your original dissertation. We will systematically address every point raised and provide a detailed response document.' },
  { q: 'How quickly can you turn around a resit dissertation?', a: 'The timeline depends on the extent of changes required and your deadline. We have completed urgent resit dissertations within 48-72 hours for minor revisions. For major rewrites, we typically need 1-2 weeks. Please contact us immediately with your deadline to discuss feasibility.' },
  { q: 'Do you provide a chapter-by-chapter delivery for resit dissertations?', a: 'Yes, we offer chapter-by-chapter delivery so you can review each section as it is completed. This ensures you maintain full control over the work and can provide feedback at every stage before final submission.' },
  { q: 'Is the resit dissertation kept confidential?', a: 'Absolutely. All our services are 100% confidential. Your personal details, project work, and copyrights are fully protected. All documents are accessed only by writers who have signed NDA agreements with Tutors India.' },
];

export default function ResitDissertationPage() {
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
              <div className="inline-block bg-primary/20 border border-primary/40 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3">
                Exclusive Resit Support
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading leading-tight mb-4">
                Masters Resit Dissertation Writing Services
              </h1>
              <p className="text-gray-200 mb-3 leading-relaxed">
                Exclusive support to completely rework your dissertation based on the supervisor comments and examiner feedback. Tutors India is a legitimate dissertation service supporting clients in completing their resit UK dissertation.
              </p>
              <p className="text-xl font-bold text-accent mb-4">Don't Give Up – We Can Help You Pass!</p>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Resitting a dissertation with perfection is not an easy task. Even excellent students need to resit their dissertations for various inevitable reasons. We provide complete support to rework your dissertation following supervisor remarks and rubric guidelines.
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

      {/* ── WHY RESIT ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title">Why Students Need Resit Dissertation Help</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Resitting a PhD or Masters dissertation with perfection is not an easy task. Even excellent students need to resit their dissertations for various inevitable reasons. Common reasons include inadequate literature review, poor methodology, insufficient data analysis, weak critical thinking, or presentation issues.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Tutors India, we understand the pressure and anxiety of having to resubmit a dissertation. Our expert team carefully analyzes all examiner comments and supervisor feedback, then systematically addresses every weakness to transform your dissertation into a pass-worthy piece of research.
              </p>
              <div className="space-y-3">
                {[
                  'Carefully review all examiner comments and supervisor feedback',
                  'Systematically address every identified weakness',
                  'Follow rubric guidelines strictly throughout the rework',
                  'Maintain chapter-by-chapter delivery for your review',
                  'Provide detailed revision notes explaining all changes',
                  'Offer free tutoring to help you defend your work',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-secondary mb-4">Common Reasons for Resit</h3>
              <div className="space-y-3">
                {[
                  { reason: 'Inadequate Literature Review', color: 'border-red-300 bg-red-50' },
                  { reason: 'Poor Research Methodology', color: 'border-orange-300 bg-orange-50' },
                  { reason: 'Insufficient Data Analysis', color: 'border-yellow-300 bg-yellow-50' },
                  { reason: 'Weak Critical Thinking', color: 'border-blue-300 bg-blue-50' },
                  { reason: 'Poor Academic Language', color: 'border-purple-300 bg-purple-50' },
                  { reason: 'Structural Issues', color: 'border-green-300 bg-green-50' },
                ].map((item) => (
                  <div key={item.reason} className={`border rounded-lg px-4 py-3 text-sm font-medium text-gray-700 ${item.color}`}>
                    {item.reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Resit Dissertation Services</h2>
          <p className="section-subtitle text-center">Comprehensive rework support to help you pass your dissertation</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESIT_SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary transition-all">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-secondary mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">What Services Do We Offer Under Resit Dissertation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            {[
              { name: 'Basic', badge: 'bg-gray-500', desc: 'Addressing major issues flagged by examiner. Developed based on the relevant sources, with evidence of an attempt to provide critical evaluation.' },
              { name: 'Advanced', badge: 'bg-primary', desc: 'Comprehensive rework with wide range of sources, a clear identification of research gap in the literature along with aim and research questions.' },
              { name: 'Premium', badge: 'bg-secondary', desc: 'Complete dissertation rework with seminal research, throughout engagement using latest resources. A solid gap would be identified and justified thoroughly with excellent critical analysis.' },
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

      {/* ── CHAPTER DELIVERY ── */}
      <section className="py-12 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-bold font-heading mb-3">Chapter by Chapter Delivery Process</h2>
          <p className="text-gray-200 mb-6">
            This ensures that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure as we ensure client satisfaction at every stage of the work.
          </p>
          <Link to="#" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-colors">Order Now</Link>
        </div>
      </section>

      {/* ── SUBJECTS ── */}
      <SubjectsList title="Your Resit Dissertation is Written by Your Choice of Subject Matter Expertise" />

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
          <div className="text-center mt-8">
            <Link to="#" className="btn-outline">View More FAQs</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSlider />

      {/* ── CTA ── */}
      <CTASection title="Don't Give Up on Your Dissertation" subtitle="Get expert resit dissertation support from UK & US qualified researchers. We'll help you pass!" primaryLabel="Order Now" />
    </MainLayout>
  );
}
