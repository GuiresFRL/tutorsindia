import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import TestimonialsSlider from '../components/TestimonialsSlider'
import GuaranteesSection from '../components/GuaranteesSection'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import ContactForm from '../components/ContactForm'
import ServiceCard from '../components/ServiceCard'

const serviceTabs = [
  {
    id: 'masters',
    label: 'Master Dissertation',
    icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Master-Dissertation.png',
    services: [
      { title: 'Masters Dissertation Writing Services', desc: 'Learn about our features of Master\'s dissertation support that help students succeed.', href: '/our-services/masters-dissertation-writing-services', icon: '🎓' },
      { title: 'Masters Dissertation Topic Selection Help', desc: 'Identify a unique dissertation topic that has not been done elsewhere.', href: '/our-services/masters-dissertation-writing-services/dissertation-topic', icon: '🔍' },
      { title: 'Masters Dissertation Proposal Writing', desc: 'Custom master\'s dissertation proposal writing services tailored to your needs.', href: '/our-services/masters-dissertation-writing-services/dissertation-proposal', icon: '📝' },
      { title: 'Masters Full Dissertation Writing Help', desc: 'Full Dissertation Writing Services at Tutors India handled by experts from the UK & US.', href: '/our-services/masters-dissertation-writing-services/full-dissertation', icon: '📚' },
      { title: 'Masters Part Dissertation Writing Help', desc: 'A part-dissertation writing service from Tutors India is simple and straightforward.', href: '/our-services/masters-dissertation-writing-services/dissertation-part', icon: '📄' },
      { title: 'Masters Specific Dissertation Services', desc: 'We handle business plan, meta-analysis, systematic review, library-based dissertation.', href: '/our-services/masters-dissertation-writing-services/specific-dissertation', icon: '🎯' },
      { title: 'Masters Resit Dissertation Services', desc: 'Exclusive support to completely rework your dissertation based on supervisor comments.', href: '/our-services/masters-dissertation-writing-services/resit-dissertation', icon: '🔄' },
      { title: 'Masters Dissertation Statistical Services', desc: 'Support for qualitative and quantitative data analysis for your Master\'s dissertation.', href: '/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis', icon: '📊' },
    ],
  },
  {
    id: 'phd',
    label: 'PhD Dissertation',
    icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/PhD-Dissertation.png',
    services: [
      { title: 'PhD Coursework', desc: 'Expert team familiar with various courseworks relevant to PhD research.', href: '#', icon: '📖' },
      { title: 'PhD Dissertation Topic', desc: 'Tutors India UK/US dissertation topic provides a convincing rationale for critical decisions.', href: '#', icon: '🔍' },
      { title: 'PhD Research Proposal', desc: 'PhD dissertation proposals written with perfection based on University guidelines.', href: '#', icon: '📝' },
      { title: 'PhD Full Dissertation', desc: 'Doctoral dissertation writing representing the cumulative educational experience.', href: '#', icon: '📚' },
      { title: 'PhD Dissertation Part', desc: 'Written by the style, design, and format of an ideal dissertation required by UK universities.', href: '#', icon: '📄' },
      { title: 'PhD Dissertation Rework', desc: 'Resitting a PhD dissertation with perfection for inevitable reasons.', href: '#', icon: '🔄' },
      { title: 'PhD Synopsis', desc: 'PhD synopsis written with perfection based on University guidelines and specifications.', href: '#', icon: '📋' },
      { title: 'PhD Viva Voce', desc: 'The final representation of your research degree that defines your thesis documentation.', href: '#', icon: '🎤' },
    ],
  },
  {
    id: 'coursework',
    label: 'Coursework Writing',
    icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Coursework-Writing.png',
    services: [
      { title: 'Coursework Writing Service', desc: 'Simple and easy, where you will get a reply within 30 minutes.', href: '#', icon: '✏️' },
      { title: 'Essay Writing', desc: 'Critical thinking-based essays following Rubric guidelines.', href: '#', icon: '📝' },
      { title: 'Annotated Bibliography', desc: 'Pioneer in handling different types of annotated bibliography.', href: '#', icon: '📚' },
      { title: 'Reflective Report', desc: 'Experts write critical and deeper reflections using various learning theories.', href: '#', icon: '🪞' },
      { title: 'Case Report Writing', desc: 'Full management, legal, medical and clinical case report services.', href: '#', icon: '📊' },
      { title: 'Assignment Writing', desc: 'Tutors work seriously with your assignments and assist in all stages.', href: '#', icon: '📋' },
      { title: 'Literature Review', desc: 'Make your dissertation literature review hassle-free.', href: '#', icon: '📖' },
      { title: 'Research Methodology', desc: 'Writers with theoretical and practical skills on respective elements.', href: '#', icon: '🔬' },
    ],
  },
  {
    id: 'publication',
    label: 'Publication Support',
    icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Publication-Support.png',
    services: [
      { title: 'Manuscript Development', desc: 'Rewrite your manuscript based on the reviewer\'s comments with convincing rationale.', href: '#', icon: '📄' },
      { title: 'Conference Paper', desc: 'Effective seminar presentation for academic students.', href: '#', icon: '🎤' },
      { title: 'Textbook Writing', desc: 'Writing the ideal textbook recommended for students.', href: '#', icon: '📚' },
      { title: 'Medical Writing', desc: 'Scientific medical manuscript writing for medical students and researchers.', href: '#', icon: '🏥' },
      { title: 'Biostatistics Services', desc: 'Statistical techniques addressing problems in health fields.', href: '#', icon: '📊' },
      { title: 'Statistical Services', desc: 'In-depth knowledge and domain expertise across a broad spectrum of industries.', href: '#', icon: '📈' },
      { title: 'Engineering Research', desc: 'Help refocus and prepare significant progress on your engineering thesis.', href: '#', icon: '⚙️' },
      { title: 'Computer Science & IT', desc: 'Foundation from a wide variety of disciplines including computer engineering.', href: '#', icon: '💻' },
    ],
  },
  {
    id: 'development',
    label: 'Development',
    icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Development.png',
    services: [
      { title: 'Coding and Algorithm', desc: 'Skilled expertise offering algorithm development service to scholars worldwide.', href: '#', icon: '💻' },
      { title: 'Software Programming', desc: 'Precise programming with unambiguous instructions.', href: '#', icon: '⚙️' },
      { title: 'Software Development', desc: 'Broad range of custom software development in various domains.', href: '#', icon: '🖥️' },
      { title: 'Big Data Analytics', desc: 'Predictive analytics, regression, and advanced models.', href: '#', icon: '📊' },
      { title: 'Animation Services', desc: '3D Modelling, architectural design, interior design, and landscape.', href: '#', icon: '🎨' },
      { title: 'Graphic Design Services', desc: 'Professional illustration work for your thesis.', href: '#', icon: '🖌️' },
      { title: 'Web Solutions', desc: 'Web design courses and online solutions.', href: '#', icon: '🌐' },
      { title: 'E-learning Development', desc: 'Technology supported learning and teaching content.', href: '#', icon: '📱' },
    ],
  },
  {
    id: 'editing',
    label: 'Editing Services',
    icon: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Editing-Services.png',
    services: [
      { title: 'Language Editing', desc: 'Essential editing for academics, copywriting, and research.', href: '#', icon: '✍️' },
      { title: 'Technical Editing', desc: 'Improving grammar, punctuation, spelling, and sentence structure.', href: '#', icon: '🔧' },
      { title: 'Plagiarism Report', desc: 'Ensuring original and authentic content.', href: '#', icon: '🔍' },
      { title: 'Transcription Services', desc: 'Critical element in qualitative research.', href: '#', icon: '🎙️' },
      { title: 'Language Translation', desc: 'Professional translation from original to desired language.', href: '#', icon: '🌍' },
      { title: 'Citation Compliance', desc: 'Dedicated experts for Harvard, APA, MLA, Vancouver, and Chicago.', href: '#', icon: '📚' },
      { title: 'Formatting Service', desc: 'Meets your journal\'s and dissertation requirements.', href: '#', icon: '📐' },
      { title: 'Scientific Editing', desc: 'Communicating scientific information clearly to target audience.', href: '#', icon: '🔬' },
    ],
  },
]

const sampleWorks = [
  { label: 'Introductions', href: 'https://www.tutorsindia.com/wp-content/uploads/2022/11/Teachers-attitudes-Beliefs-and-teaching-quality-on-student-outcomes.pdf' },
  { label: 'Literature Review', href: 'https://www.tutorsindia.com/wp-content/uploads/2022/11/Link-Between-Tourist-destination-choices-and-social-media-Influence.pdf' },
  { label: 'Research Proposal', href: '#' },
  { label: 'Full Dissertation', href: 'https://www.tutorsindia.com/wp-content/uploads/2019/03/Anterior-Cruciate-Ligament-Anatomy-Symptoms-And-Reconstruction.pdf' },
  { label: 'Manuscript Writing', href: '#' },
  { label: 'Coding & Algorithm', href: '#' },
  { label: 'Assignment Writing', href: '#' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('masters')
  const activeService = serviceTabs.find((t) => t.id === activeTab)

  return (
    <>
      <Helmet>
        <title>Tutors India - Best Dissertation Writing Services for UK, UAE, Australia</title>
        <meta name="description" content="Tutors India offers trusted academic writing & editing services including Masters & PhD dissertation, coursework, publication support for UK, UAE, Australia." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy to-navy-light text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.tutorsindia.com/wp-content/uploads/2024/08/Tutorss_logo-india-1.webp')] bg-no-repeat bg-right-bottom opacity-5 bg-contain" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-gold text-sm font-semibold">Trusted Since 2001</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Masters/MBA Dissertation
                <span className="text-gold"> Writing & Editing</span> Services
              </h1>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Trusted <strong className="text-white">Academic Writing & Editing Services</strong> guaranteed by the best in the Industry
              </p>
              <div className="flex items-center gap-3 mb-8">
                <img src="https://www.tutorsindia.com/wp-content/uploads/2024/08/Tutorss_logo-india-1.webp" alt="Tutors India" className="h-8 brightness-200" />
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/our-services/masters-dissertation-writing-services" className="btn-primary">
                  View Our Services
                </Link>
                <Link to="/contact-us" className="btn-outline-white">
                  Contact Us
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap gap-6">
                {[
                  { label: '2,00,000+', sub: 'Happy Clients' },
                  { label: '25+ Years', sub: 'Experience' },
                  { label: '2000+', sub: 'Expert Writers' },
                ].map((b) => (
                  <div key={b.label} className="text-center">
                    <p className="text-2xl font-bold text-gold">{b.label}</p>
                    <p className="text-xs text-gray-400">{b.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form in hero */}
            <div className="lg:flex justify-end">
              <div className="w-full max-w-md">
                <ContactForm
                  title="Get a Free Quote"
                  subtitle="Response guaranteed within 30 minutes."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tutors India */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Why Tutors India?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A Genuine Company with presence across the World including the US, UK. Our team of writers & Statisticians are guided by high quality QC team from Harvard & Alabama.
              </p>
              <ul className="space-y-3">
                {[
                  'Highest quality work in the industry',
                  'Registered Company based in Sheffield (U.K), Dallas (U.S)',
                  'We guarantee your work and care about academic success',
                  'Our team of researchers care about your success',
                  'Over 2000+ expert writers across 50+ countries',
                  'Available 24/7 for support and queries',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about-us" className="btn-primary mt-8 inline-flex">About Us</Link>
            </div>
            <div className="bg-gradient-to-br from-navy/5 to-gold/5 rounded-2xl p-8">
              <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-6">
                "We completely understand and experience the pain and stress that students undergo during their degree process. We ensure to follow standard operating procedure in all processes that we handle."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold">N</div>
                <div>
                  <p className="font-bold text-navy">Dr. Nancy</p>
                  <p className="text-sm text-gray-500">Chief Technical Officer, Tutors India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Our Services Assure Your Success</h2>
            <p className="section-subtitle mx-auto text-gray-600 mt-3">
              Our Writing, Editing, Statistics, Designing, Coding & Programming Services
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
                  activeTab === tab.id
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-navy hover:text-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activeService?.services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-4xl mx-auto">
            <strong>Note:</strong> All our writing, editing, coding, algorithm, software programming & statistics services are provided by our qualified expertise who are scrutinized in terms of their qualification in the specific subject, research experience, capability to write for the higher education system in the US, UK and Australia, and native language speakers of respective countries.
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* About section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">Find More About Tutors India</h2>
              <p className="text-sm text-gold font-semibold mb-4 uppercase tracking-wide">Who Are We? Where Are We? Why We Do It?</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Studying a UK/US degree, let it be Master's or DBA, can be extremely challenging and stressful for students across the world. Especially, it's stressful for scholars/students when they lack proper guidance. Tutors India, a most trusted brand, offers hassle-free academic writing services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tutors India is a pioneer in providing complete academic guidance and services for the past 25 years. Our team of expertise have guided more than 3000 DBA Candidates and 10,000 Masters Students around the globe.
              </p>
              <Link to="/about-us" className="btn-primary">About Tutors India</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Storyboard', desc: 'Get to know how we handle our Clients', href: '#', emoji: '🎬' },
                { title: 'Brochure', desc: 'Trust, Quality and Customer Care', href: '#', emoji: '📖' },
                { title: 'Dissertation Journey', desc: 'Get to know how we handle our Clients', href: '#', emoji: '🎓' },
                { title: 'Essay Journey', desc: 'Get to know how we handle our Clients', href: '#', emoji: '✍️' },
              ].map((item) => (
                <a key={item.title} href={item.href} className="card text-center hover:bg-navy group transition-colors duration-200">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-bold text-navy group-hover:text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-gray-200">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <GuaranteesSection />

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Sample Work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Sample Work</h2>
            <p className="section-subtitle mx-auto text-gray-600 mt-3">Browse through our sample works to see the quality we deliver</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sampleWorks.map((w) => (
              <a
                key={w.label}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border-2 border-navy text-navy rounded-full text-sm font-semibold hover:bg-navy hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {w.label}
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/our-sample-works" className="btn-primary">View All Sample Works</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Get Your Master's or DBA Research from Your Academic Tutor"
        subtitle="At Tutors India, we offer high quality writing and data analysis services that have extremely benefited research scholars, students, professionals & entrepreneurs across the globe."
        primaryLabel="Contact Us Today"
        primaryHref="/contact-us"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}
