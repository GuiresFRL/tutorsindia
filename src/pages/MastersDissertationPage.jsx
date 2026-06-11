import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/Breadcrumb';
import TestimonialsSlider from '../components/TestimonialsSlider';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import SubjectsList from '../components/SubjectsList';
import OrderProcess from '../components/OrderProcess';

const BREADCRUMBS = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '#' },
  { label: 'Masters Dissertation Writing Services' },
];

const SERVICES = [
  { title: 'Dissertation Topic Selection', desc: 'At Tutors India, we offer thought-provoking suggestions for UK master\'s dissertation topics and titles.', href: '#' },
  { title: 'Dissertation Proposal', desc: 'We develop the UK master\'s dissertation Proposal based on client\'s experience in the industry, interest area, and gap in the subject area.', href: '#' },
  { title: 'UK Dissertation Full', desc: 'We develop the introduction chapter based on the background and problem statement and also develop aims and objectives along with the delimitations set.', href: '/our-services/masters-dissertation-writing-services/full-dissertation' },
  { title: 'UK Dissertation Part', desc: 'We not only provide support for writing full dissertation writing services, but our service also extends support for writing UK part-dissertation writing.', href: '/our-services/masters-dissertation-writing-services/dissertation-part' },
  { title: 'Resit Dissertation', desc: 'Tutors India is a legitimate dissertation service and supports our clients who required help in completing their resit UK dissertation.', href: '/our-services/masters-dissertation-writing-services/resit-dissertation' },
  { title: 'Exclusive Dissertation', desc: 'Our exclusive UK dissertation writing and tutoring services are also extended to our clients pursuing higher studies.', href: '/our-services/masters-dissertation-writing-services/specific-dissertation' },
  { title: 'Dissertation Statistical Analysis', desc: 'Tutors India also provides UK dissertation statistical analysis including interpretation help using SPSS, MATLAB, STATA, Minitab, E-Views, SAS, etc.', href: '/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis' },
  { title: 'CV Writing Services', desc: 'We also provide exclusive UK dissertation proofreading services where we proofread for grammar, contextual spelling, punctuations, sentence structure.', href: '#' },
];

const FEATURES = [
  { title: 'Plagiarism Free Work', icon: '🛡️', desc: 'Our experts scan all works against online sources using software similar to Turnitin or WriteCheck to ensure completely plagiarism-free output.' },
  { title: 'Uniqueness', icon: '💡', desc: 'Every work is unique as we, as research assistance providers, know how to write a high-quality and unique research thesis / dissertation.' },
  { title: 'Fully Referenced', icon: '📚', desc: 'Our Masters dissertation projects are fully referenced with latest peer-reviewed research articles, textbooks, and online sources using Harvard, APA, Chicago etc.' },
  { title: '100% Requirement Match', icon: '✅', desc: 'We match your requirement 100% since our experts understand the topic and analyze the feasibility before even working on the dissertation.' },
  { title: 'On Time Delivery', icon: '⏰', desc: 'Our work is delivered on specified time as per the commitment. We acknowledge all your emails within 30 minutes of working hours.' },
  { title: 'Word Count Committed', icon: '📝', desc: 'We ensure that your dissertation is meeting the exact word count as per your university regulations. We handle dissertations ranging from 8,000 – 30,000 words.' },
  { title: 'Quality Assurance', icon: '🏆', desc: 'We have stringent quality check and quality assurance process in every stage of your masters dissertation so that the final output is devoid of errors.' },
  { title: 'Unlimited Revisions', icon: '🔄', desc: 'We provide unlimited revisions as per the initial commitment which is completely free of cost even after the project is completed.' },
  { title: 'Affordable', icon: '💰', desc: 'We strive to provide the masters dissertation writing services with world-class quality at affordable rates, student-friendly and exclusively in your currency.' },
];

const TESTIMONIALS_CUSTOM = [
  {
    id: 1,
    name: 'C S, Sheffield, UK',
    text: 'I used to use another service, but I usually received poorly written papers and overpaid for it. I made my decision after discovering your service and receiving a superb dissertation from you. Thank you very much.',
    avatar: 'https://www.tutorsindia.com/wp-content/uploads/2018/12/user-profile-146x146-1-85x85.png',
  },
  {
    id: 2,
    name: 'Ishani',
    text: 'My friend recommended that I use your service just when I was about to give up on my dissertation. Because I was trapped and didn\'t know what to do, the suggestion came at a good moment. I\'m now a PhD holder, and I\'m overjoyed about it. Thank you for your help.',
    avatar: 'https://www.tutorsindia.com/wp-content/uploads/2021/09/Sahana.jpg',
  },
  {
    id: 3,
    name: 'Ryan',
    text: 'Great service for non-native English writing authors! Tutors India\'s dissertation writing service helps me to formulate my ideas in more clear and straight forward way and to eliminate common grammatical errors. I am satisfied with the overall experience. Thanks a lot.',
    avatar: 'https://www.tutorsindia.com/wp-content/uploads/2021/10/Testimonial21.jpg',
  },
];

export default function MastersDissertationPage() {
  return (
    <MainLayout>
      <Breadcrumb items={BREADCRUMBS} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-secondary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex gap-3 mb-4 text-sm">
                {['Facebook', 'Twitter', 'Reddit', 'LinkedIn'].map((s) => (
                  <a key={s} href="#" className="bg-white/10 hover:bg-primary px-3 py-1 rounded-full text-xs font-semibold transition-colors">{s}</a>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading leading-tight mb-4">
                Are you looking for UK Master's and MBA Dissertation Writing or Tutoring Help?
              </h1>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Looking for plagiarism free but at the same time some novelty/innovation in research or wanted to conduct your research using latest technologies / trends?
              </p>
              <p className="text-xl font-bold text-accent mb-6">Then You've Certainly Reached the Right place!</p>
              <p className="text-sm text-gray-300 mb-2 font-semibold">We make difference in terms of deadline and overall grade</p>
              <div className="flex flex-wrap gap-3">
                <Link to="#" className="btn-primary rounded-full">Place an Order</Link>
                <a href="https://www.tutorsindia.com/wp-content/uploads/2021/11/Master-Dissertation.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-6 py-2.5 rounded-full transition-colors text-sm">
                  Download Brochure
                </a>
              </div>
            </div>
            <div>
              <ContactForm title="Get a Free Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TUTORS INDIA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-title">Why Tutors India for Master's Dissertation Writing Services?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The US & UK writers at Tutors India aim at inculcating knowledge within students and build a great confidence to submit their dissertation successfully.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'UK Master\'s Dissertation – Helps to complete your degree successfully',
                  'We just not provide writing assistance but also Tutoring',
                  'Skilled and talented professional UK writers',
                  'Team of experts: at least Master\'s degree holders, also PhD from UK, US, Australia',
                  'Writers trained at Harvard School, Oxford, London School of Business',
                  'Unique approach helped hundreds of scholars complete their dissertation globally',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="#" className="btn-primary">About Us</Link>
            </div>
            <div>
              <img
                src="https://www.tutorsindia.com/wp-content/uploads/2016/07/A-Dissertation-Writing-Service-features-that-helps.jpg"
                alt="Dissertation Writing Service Features"
                className="rounded-xl shadow-lg w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-2">Our UK Dissertation Services</h2>
          <p className="section-subtitle text-center">Assistance for Tutoring and Writing Services exclusively for the UK and Australian Universities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                to={s.href}
                className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary transition-all"
              >
                <h3 className="font-bold text-sm text-gray-800 group-hover:text-primary transition-colors mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-3 text-primary text-xs font-semibold group-hover:translate-x-1 transition-transform">Learn more →</span>
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 italic text-center max-w-3xl mx-auto">
            <strong>Note:</strong> All our writing, editing, coding, algorithm, software programming & statistics services are provided by our qualified expertise who are scrutinized in terms of their qualification in the specific subject, research experience, and capability to write for the higher education system in the US, UK and Australia.
          </p>
        </div>
      </section>

      {/* ── RESEARCH CHOICE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title">Your Choice of Primary or Secondary Research</h2>
              <p className="text-gray-600 leading-relaxed">
                Choice of data collection depends on the research design (quantitative or qualitative design). Tutors India helps in survey tool validation and also online and face to face data collection process. We help you to conduct surveys including in person Interviews: Formal to informal; structured to unstructured; focus group discussion, observations, self-administered questionnaire, diaries, citizen report cards, Delphi techniques, expert judgment, online surveys, secondary sources such as journals, newspaper articles, annual reports, government sources such as census, budgets, policies, procedures, etc.
              </p>
            </div>
            <div>
              <img
                src="https://www.tutorsindia.com/wp-content/uploads/2024/08/Your-Choice-of-Primary-or-Secondary-Research.webp"
                alt="Primary or Secondary Research"
                className="rounded-xl shadow-lg w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://www.tutorsindia.com/wp-content/uploads/2016/07/Development-of-Questionnaire-or-Interview-questions.jpg"
                alt="Quantitative or Qualitative Methodologies"
                className="rounded-xl shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title">Your Choice of Quantitative or Qualitative or Triangulation Methodologies</h2>
              <p className="text-gray-600 leading-relaxed">
                We are completely aware that there are a way and difference in the methodology section being written for management and health care or economics. As every discipline has its structure of methodologies and therefore, 'Tutors India' provide consultation and writing services for your research methodology using our subject matter expertise. We offer a wide range of dissertation research methodology writing services, either being qualitative methods or quantitative research methods or a combination of both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Master's Dissertation Writing Service Features</h2>
          <p className="section-subtitle text-center">Get some of our Service features at Free of Costs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary transition-all">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-heading font-bold text-secondary mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ── */}
      <SubjectsList title="Your Dissertation is Written by Your Choice of Subject Matter Expertise" />

      {/* ── ADDITIONAL FEATURES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-2">Our Additional Features</h2>
          <p className="text-center text-gray-600 mb-10">As well as your order, you will also get the following</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Authenticated References', desc: 'All our research writing, editing, and rewriting services are fully referenced and cited academically using style (Harvard, Chicago, MLA, APA) guide provided by the university.' },
              { title: 'Plagiarism Free', desc: 'We ensure that the document is less than 5 or 0 percent of plagiarism. We correct all errors and infelicities in grammar, syntax, and usage. We re-read the original article, summarize, digest and explain through our own words.' },
              { title: 'Unlimited Revision Support with Quality Check & Assurance', desc: 'We provide unlimited revisions absolutely free of cost as per the commitment made by us since we, as researchers, understand that every researcher has their own perception. We welcome participatory research.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSlider items={TESTIMONIALS_CUSTOM} />

      {/* ── ORDER PROCESS ── */}
      <OrderProcess />

      {/* ── CTA ── */}
      <CTASection title="Place Your Order Today" subtitle="Invest in your career by availing expert dissertation writing help from the UK & US qualified researchers" primaryLabel="Order Now" />
    </MainLayout>
  );
}
