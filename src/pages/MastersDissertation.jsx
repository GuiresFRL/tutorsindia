import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import TestimonialsSlider from '../components/TestimonialsSlider'
import GuaranteesSection from '../components/GuaranteesSection'
import CTASection from '../components/CTASection'
import FAQAccordion from '../components/FAQAccordion'
import ContactForm from '../components/ContactForm'
import ServiceCard from '../components/ServiceCard'

const subServices = [
  { title: 'Dissertation Topic Selection', desc: 'Thought-provoking dissertation topics from three principal sources tailored to your interest area.', href: '/our-services/masters-dissertation-writing-services/dissertation-topic', icon: '🔍' },
  { title: 'Dissertation Proposal', desc: 'UK Master\'s dissertation Proposal developed based on client\'s experience, interest area, and gap in subject.', href: '#', icon: '📝' },
  { title: 'UK Dissertation (Full)', desc: 'Full dissertation developing introduction, background, problem statement, aims and objectives with delimitations.', href: '/our-services/masters-dissertation-writing-services/full-dissertation', icon: '📚' },
  { title: 'UK Dissertation (Part)', desc: 'Part-dissertation and chapter writing services with the same quality as full dissertation.', href: '/our-services/masters-dissertation-writing-services/dissertation-part', icon: '📄' },
  { title: 'Resit Dissertation', desc: 'Legitimate dissertation service helping clients complete resit UK dissertation following supervisor remarks and rubric.', href: '/our-services/masters-dissertation-writing-services/resit-dissertation', icon: '🔄' },
  { title: 'Exclusive Dissertation', desc: 'Extended writing and tutoring services for clients pursuing higher studies careers.', href: '/our-services/masters-dissertation-writing-services/specific-dissertation', icon: '⭐' },
  { title: 'Dissertation Statistical Analysis', desc: 'UK dissertation statistical analysis using SPSS, MATLAB, STATA, Minitab, E-Views, SAS, etc.', href: '/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis', icon: '📊' },
  { title: 'CV Writing Services', desc: 'Exclusive UK dissertation proofreading services and professional CV writing.', href: '#', icon: '📋' },
]

const features = [
  { title: 'Plagiarism Free Work', icon: '🔍', desc: 'Our work is completely plagiarism free. We scan works against online sources like Turnitin to ensure 95-100% plagiarism-free output.' },
  { title: 'Uniqueness', icon: '✨', desc: 'Every work is unique as our research assistance providers know how to write high-quality and unique research thesis/dissertation.' },
  { title: 'Fully Referenced', icon: '📚', desc: 'Masters dissertation projects are fully referenced with latest peer-reviewed research articles, textbooks, online sources, and more.' },
  { title: '100% Requirement Match', icon: '✅', desc: 'We match your requirement 100% as our experts understand the topic and analyze the feasibility before working on the dissertation.' },
  { title: 'On Time Delivery', icon: '⏰', desc: 'Work is delivered on specified time as per commitment. Minor changes within 24 hours and significant changes within 48 working hours.' },
  { title: 'Word Count Committed', icon: '📏', desc: 'We ensure the dissertation meets the exact word count as per university regulations, from 8,000 to 30,000 words.' },
  { title: 'Quality Assurance', icon: '🏆', desc: 'Stringent quality check in every stage so the final output is devoid of errors, checked for subject matter, language, and formatting.' },
  { title: 'Unlimited Revisions', icon: '♾️', desc: 'We provide unlimited revisions as per initial commitment, completely free of cost, even after the project is completed.' },
  { title: 'Affordable', icon: '💰', desc: 'World-class quality at affordable rates. Our rates are nominal, student-friendly and exclusively in your currency.' },
]

const orderProcess = [
  { step: 1, title: 'Fill the Form', desc: 'Fill out the enquiry form with your information in a comprehensive manner.' },
  { step: 2, title: 'Reference Number', desc: 'You receive a reference number to track the status of your paper anytime.' },
  { step: 3, title: 'Acknowledgment', desc: 'Once you have paid, you receive an acknowledgement and writing begins.' },
  { step: 4, title: 'Writer Identified', desc: 'We identify a writer with passion for research matching your subject.' },
  { step: 5, title: 'Edit & Proofread', desc: 'Once the writer completes, we proofread the document thoroughly.' },
  { step: 6, title: 'Plagiarism Check', desc: 'Checked through anti-plagiarism software before delivery.' },
  { step: 7, title: 'Free Appendices', desc: 'Additional reference materials shared via Google Drive or Dropbox.' },
  { step: 8, title: 'Download Your Order', desc: 'Download through our CRM. Additional copy mailed to you.' },
]

const faqs = [
  { q: 'What types of Master\'s dissertation writing services do you offer?', a: 'We offer a comprehensive range of services including dissertation topic selection, research proposal, full dissertation writing, part dissertation, resit dissertation, specific dissertation types (systematic review, meta-analysis, etc.), statistical analysis, poster presentation, and CV writing.' },
  { q: 'Are your writers qualified to handle my subject area?', a: 'Yes, our team consists of 2000+ expert writers from 50+ countries, all holding minimum Master\'s degrees with many PhD holders from prestigious UK, US, and Australian universities. We match you with a subject matter expert for your specific field.' },
  { q: 'Is the dissertation work 100% plagiarism free?', a: 'Absolutely. All our work is scanned through Turnitin and similar plagiarism detection software. We guarantee 95-100% plagiarism-free content with complete plagiarism reports provided upon request.' },
  { q: 'How long does it take to complete a dissertation?', a: 'The timeline depends on the complexity and word count. We can handle urgent orders. For a full 15,000-word dissertation, typically 3-4 weeks. We always discuss and commit to a deadline before starting.' },
  { q: 'Do you offer unlimited revisions?', a: 'Yes, we offer unlimited revisions as per the initial commitment at no extra cost. We believe in delivering exactly what you need and will revise until you are completely satisfied.' },
  { q: 'Can I communicate directly with my writer?', a: 'Yes, at Tutors India we offer both writing assistance and tutoring. Your writer guides you at every stage, explaining how the dissertation was approached and the keyword strategies used.' },
  { q: 'What is the cost of your Master\'s dissertation writing service?', a: 'Our rates are student-friendly and based on your specific requirements, word count, deadline, and subject area. Contact us for a free quote and we will provide a detailed breakdown within 30 minutes.' },
]

const subjects = [
  'Arts & Humanities', 'Biological Sciences', 'Business & Management Studies',
  'Marketing & Communication', 'Engineering & Technology', 'Natural Sciences & Mathematics',
  'Biological & Life Science', 'Economics & Administration', 'Humanities & Social Science',
  'Law', 'Medicine & Health', 'Education & Training',
  'Journalism & Media', 'Agriculture & Forestry', 'Computer Science & IT',
  'Hospitality, Leisure & Sports',
]

export default function MastersDissertation() {
  return (
    <>
      <Helmet>
        <title>Masters Dissertation Writing Services | MBA Thesis Writing Help UK - Tutors India</title>
        <meta name="description" content="UK Master's and MBA dissertation writing services by Tutors India. Expert writers from UK/US universities. Plagiarism free, on-time delivery, unlimited revisions." />
      </Helmet>

      <Breadcrumb crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Our Services', href: '/our-services' },
        { label: 'Masters Dissertation Writing Services' },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-gold text-sm font-semibold">Post Graduate / Master's Dissertation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Are you looking for UK Master's and MBA Dissertation
                <span className="text-gold"> Writing or Tutoring Help?</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Looking for plagiarism free but at the same time novelty/innovation in research? Wanted to conduct your research using latest technologies and trends?
              </p>
              <p className="text-gray-300 mb-8">
                <strong className="text-white">We make a difference</strong> in terms of deadline and overall grade.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/order-now" className="btn-primary">Place an Order</Link>
                <a href="#" className="btn-outline-white">Download Brochure</a>
              </div>
              <div className="mt-8 flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm text-gray-300">Trusted Since 2001</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm text-gray-300">2000+ Expert Writers</span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm title="Request a Free Quote" subtitle="Our team will respond within 30 minutes." />
            </div>
          </div>
        </div>
      </section>

      {/* Why Tutors India */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-2">Why Tutors India for Master's Dissertation Writing Services?</h2>
              <p className="text-gold font-semibold text-sm mb-6">The US & UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully.</p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-navy">
                  <h3 className="font-bold text-navy mb-2">A Trusted Dissertation Writing Service</h3>
                  <p className="text-sm text-gray-600">Skilled and talented professional UK writers assist you 24/7 and provide evidence that we deliver exactly what you expect. Our team holds at least a Master's degree, with many PhD holders from prestigious UK, US, and Australian universities.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-gold">
                  <h3 className="font-bold text-navy mb-2">We Just Don't Write — We Tutor</h3>
                  <p className="text-sm text-gray-600">At Tutors India, we offer both tutoring and writing services. We tutor you at every stage, explaining how we proceeded with the dissertation along with the keyword strategy used.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-green-500">
                  <h3 className="font-bold text-navy mb-2">In-house UK/US PhD Experts</h3>
                  <p className="text-sm text-gray-600">Our in-house internal committee includes UK and US based PhD holders, postdoctoral fellows and MD holding PhDs. Some trained at Harvard, Oxford, London School of Business, and the University of Birmingham.</p>
                </div>
              </div>
              <Link to="/about-us" className="btn-primary mt-6 inline-flex">About Us</Link>
            </div>
            <div>
              <img
                src="https://www.tutorsindia.com/wp-content/uploads/2016/07/A-Dissertation-Writing-Service-features-that-helps.jpg"
                alt="Dissertation Writing Service Features"
                className="rounded-2xl shadow-card w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Our UK Dissertation Services</h2>
            <p className="section-subtitle mx-auto text-gray-600 mt-3">Comprehensive support from topic to final submission</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <strong>Note:</strong> All our writing, editing, coding, algorithm, software programming & statistics services are provided by our qualified expertise scrutinized in terms of their qualification in the specific subject, research experience, and capability to write for the higher education system in the US, UK, and Australia.
          </p>
        </div>
      </section>

      {/* Research methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="section-title mb-4">Your Choice of Primary or Secondary Research</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Choice of data collection depends on the research design (quantitative or qualitative design). Tutors India helps in survey tool validation and online and face-to-face data collection process.</p>
              <p className="text-gray-600 leading-relaxed">We help you conduct surveys including in-person interviews (formal to informal, structured to unstructured), focus group discussion, observations, self-administered questionnaire, online surveys, and secondary sources.</p>
            </div>
            <img
              src="https://www.tutorsindia.com/wp-content/uploads/2024/08/Your-Choice-of-Primary-or-Secondary-Research.webp"
              alt="Primary or Secondary Research"
              className="rounded-2xl shadow-card w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://www.tutorsindia.com/wp-content/uploads/2016/07/Development-of-Questionnaire-or-Interview-questions.jpg"
              alt="Questionnaire Development"
              className="rounded-2xl shadow-card w-full object-cover order-2 lg:order-1"
              loading="lazy"
            />
            <div className="order-1 lg:order-2">
              <h2 className="section-title mb-4">Your Choice of Quantitative, Qualitative or Triangulation Methodologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We are aware of the differences in methodology sections across management, healthcare, and economics. We provide consultation and writing services for your research methodology using subject matter expertise.</p>
              <p className="text-gray-600 leading-relaxed">We offer wide-ranging dissertation research methodology writing services, whether qualitative, quantitative, or a combination of both. Our writers are well experienced in handling any methodology across disciplines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Master's Dissertation Service Features</h2>
            <p className="section-subtitle mx-auto text-gray-600 mt-3">Everything you need for dissertation excellence</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-navy text-base mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Your Dissertation is Written by Your Choice of Subject Matter Expertise</h2>
            <p className="text-gold font-semibold">We have a team of 2000+ expertise across subjects & countries</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {subjects.map((s) => (
              <span key={s} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-gold hover:text-white transition-colors cursor-default">
                {s}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/our-sample-works" className="btn-primary">View Our Exclusive Sample Works</Link>
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Order Process</h2>
            <p className="section-subtitle mx-auto text-gray-600 mt-3">Have a look at what makes us the best in the business</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderProcess.map((step) => (
              <div key={step.step} className="card text-center relative">
                <div className="w-10 h-10 rounded-full bg-navy text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-navy text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/order-now" className="btn-primary">Place Your Order Today</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Invest in Your Career"
        subtitle="Place your order today and let our expert writers guide you to dissertation success."
        primaryLabel="Order Now"
        primaryHref="/order-now"
        secondaryLabel="Contact Us"
        secondaryHref="/contact-us"
      />
    </>
  )
}
