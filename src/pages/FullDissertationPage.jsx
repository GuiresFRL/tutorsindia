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
  { label: 'Full Dissertation' },
];

const PRICING_TIERS = [
  { name: 'Basic', color: 'bg-gray-50 border-gray-200', desc: 'Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.' },
  { name: 'Advanced', color: 'bg-primary/5 border-primary/30', desc: 'Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.' },
  { name: 'Premium', color: 'bg-secondary/5 border-secondary/30', desc: 'Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable).' },
];

const CHAPTERS = [
  { title: 'Abstract', desc: 'We write abstract for your master\'s dissertation which would approximately contain 250 to 350 words. We complete the abstract after the full dissertation has been written that includes a brief summary of introduction or background, objectives, boundaries, methodology, the results of the dissertation research, main conclusion and recommendations.' },
  { title: 'Acknowledgement', desc: 'A brief statement that ensures the following – we ensure to comment about family and friends at a minimum level while more concentration will be given on those who have given direct assistance. It also includes a declaration to show the work complies with University regulation on plagiarism and a statement of the word count.' },
  { title: 'Table of Content', desc: 'The section will list the chapter headings, appendices, references along with the page numbers. Apart, there would be a separate list for lists of figures, tables, and abbreviations. We use Microsoft Word to create lists using the indexing and style functions.' },
  { title: 'Full Dissertation Title', desc: 'A precise Title as approved by the University. The title would convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, population you target and geographical location.' },
  { title: 'Introduction to the Topic', desc: 'A Brief description of the topic, research questions, and research objectives. The section would provide necessary background information and provides readers with some sense of overall research including general territory, broad foundation, the general scope, overview of the sections and should engage the readers.' },
  { title: 'Aim and Objectives / Hypotheses', desc: 'A description what research want to achieve from carrying out this research. The section includes a clear statement of the research objectives, questions that researcher seeks to answer or the hypothesis. The section also includes original contributions of your study.' },
  { title: 'Literature Review', desc: 'This should provide some insights on: (a) studies conducted previously in your research field, (b) familiarity with major themes, (c) theories scholars use to analyse their primary sources, (d) gaps identified in the literature, (e) further investigations intended, and (f) best methodologies.' },
  { title: 'Research Methodology', desc: 'The section is essential to the good dissertation. This section includes the overall methodological approach, Research design, strategy, qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, & statistical analysis.' },
  { title: 'Results / Findings / Data Analysis', desc: 'The chapter presents the findings of the study in the form of tables & figures along with the interpretation. Depending on the choice of research methodology, the page will have detailed quantitative models, hypothesis testing, or a qualitative analysis dealing with content or textual or case study description.' },
  { title: 'Discussion, Summary & Conclusion', desc: 'In this chapter, we introduce three section viz., discussion, summary, and conclusion. The discussion chapter compares and contrasts the findings of previously published authors in line with the research questions. We develop analytics and critical thinking concerning theoretical arguments grounded in the literature review.' },
];

const FAQS = [
  { q: 'How long does a full dissertation take to write?', a: 'The timeline depends on the word count and complexity of your topic. A typical Masters dissertation of 10,000–15,000 words can take 4–8 weeks. We work with your deadline and deliver chapter by chapter to ensure quality.' },
  { q: 'What is the word count for a Masters dissertation?', a: 'A Master\'s dissertation typically ranges from 7,000 to 20,000 words and usually should not exceed 15,000 words, excluding footnotes, references, and appendices. However, this can vary by university and programme.' },
  { q: 'Do you provide primary data collection?', a: 'Yes, Tutors India has exclusive custom data collection services to gather useful information in various domains. We collect primary data at an additional cost through telephone interviews, market surveys, focus group discussion sessions, and questionnaires.' },
  { q: 'What referencing style do you follow?', a: 'We comply 100% with all university-based, specific referencing guidelines including Harvard, APA, Chicago, Vancouver, Turabian etc. Our team of copyeditors exclusively work for university-specific referencing systems.' },
  { q: 'Is your service confidential?', a: 'Yes, we offer 100% confidentiality. All your projects are given unique reference codes, documents are accessed only by writers who signed NDA with Tutors India, and your financial information is protected by 128-bit secure socket layer (SSL) encryption.' },
];

export default function FullDissertationPage() {
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
                The US and the UK Master's Complete Dissertation Writing Service
              </h1>
              <p className="text-gray-200 mb-3 leading-relaxed">
                Are you looking for an expert writer of your specific subject for your Master's or postgraduate dissertation writing completely from Abstract writing to Conclusion and Recommendation section with the quality expected?
              </p>
              <p className="text-xl font-bold text-accent mb-6">Then You've Certainly Reached the Right Place!</p>
              <div className="flex flex-wrap gap-3">
                <Link to="#" className="btn-primary rounded-full">Place an Order</Link>
                <a href="https://www.tutorsindia.com/wp-content/uploads/2020/10/TI-Dissertation-Writing-Service.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-6 py-2.5 rounded-full transition-colors text-sm">
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

      {/* ── OVERVIEW ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Full Professional Master's Dissertation Writing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Writing a full Master's or postgraduate dissertation is a challenging task for students pursuing higher studies. A dissertation in UK and US universities is an extended piece of academic writing and must be written and formatted according to university guidelines. A Master's dissertation typically ranges from 7,000 to 20,000 words and usually should not exceed 15,000 words, excluding footnotes, references, and appendices.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Tutors India, our full dissertation writing services and thesis writing services are delivered in line with the style, structure, and formatting standards required by universities in the UK, Australia, and the US. We support students at every stage, from choosing suitable dissertation topics to completing each section including topic selection, research proposal writing, introduction, literature review, research methodology, presentation and discussion of findings, research ethics, citations, references, and appendices.
            </p>
            <h3 className="text-xl font-bold font-heading text-secondary mb-3 mt-6">Dissertation Type & Choice of Research Methodology</h3>
            <p className="text-gray-600 leading-relaxed">
              We provide support for both dissertation by research and dissertation by translation/commentary. Our writers are proficient in handling qualitative methodologies (e.g., interview guide design, semi-structured interviews, focus groups, observation, case studies), quantitative approaches (e.g., surveys), as well as triangulation or mixed-method research designs.
            </p>
            <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong className="text-primary">Our Dissertation writing</strong> demonstrates the ability to communicate complex ideas critically, concisely, and clearly. Our professional dissertation writers have completed around <strong>8000 Masters Dissertations</strong> successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Dissertation Writing Full is Simply Easy & Straightforward</h2>
          <p className="text-center text-gray-600 mb-10">Our thesis and dissertation writing help guarantees that your dissertation is confidential. Just send us your dissertation topic along with the deadline.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-heading font-bold text-xl text-secondary mb-6">What Services Do We Offer Under Full Dissertation?</h3>
              <div className="space-y-4">
                {PRICING_TIERS.map((tier) => (
                  <div key={tier.name} className={`border-2 rounded-xl p-5 ${tier.color}`}>
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${tier.name === 'Premium' ? 'bg-secondary' : 'bg-primary'}`}>
                        {tier.name[0]}
                      </span>
                      {tier.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{tier.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="#" className="btn-primary mt-6 inline-block">Order Now</Link>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-secondary mb-6">How Does It Work?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                After the order is confirmed, we allocate the special team to scrutinize the work regarding necessary availability requirements. Once the process is done, in case there are any queries, we ensure to ask during the initial stage of your work and send you the outline proposed.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Once the outline along with the chapterization plan is approved, we will dispatch the work in chapters, and update you on the progress of your work. Our exclusive coordinators would get in touch with you to clarify any queries.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                You can also pay in installments and work will be started as soon as we receive the payments. We deliver your work as per the schedule fixed and agreed or even before the schedule.
              </p>
              <div className="mt-6 bg-accent/10 border border-accent/30 rounded-xl p-4">
                <h4 className="font-bold text-accent-dark text-sm mb-2">Our Deliverables Include (Free):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Executive summary / Abstract', 'Free articles used for writing', 'SPSS data sheet and output', 'Questionnaire or semi-structured interview questions', 'Reflective log or diary', 'Free tutoring for work carried out'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISSERTATION STRUCTURE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">A Full Dissertation Features</h2>
          <p className="text-center text-gray-600 mb-10">We follow according to the specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities. Our full dissertation structure would consist of:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CHAPTERS.map((ch, i) => (
              <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary transition-colors">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1 text-sm">{ch.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{ch.desc}</p>
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
          <h2 className="section-title text-center mb-10">Why Choose Tutors India for Full Dissertation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡️', title: 'A Complete Secure & Confidential Service', desc: '100% confidentiality of client\'s personal details, payment details, project works, and copyrights of research works.' },
              { icon: '📚', title: 'Fully Referenced', desc: 'Our dissertation work is fully referenced with latest articles and textbooks. We refer only peer-reviewed sources from Web of Science, ProQuest, Google Scholar.' },
              { icon: '🏆', title: 'Our Guarantees', desc: '(1) Unlimited Revision (2) On-time delivery (3) 24/7 Support (4) Three-level quality check (5) Confidentiality (6) Plagiarism free work – less than 5%' },
              { icon: '👨‍🔬', title: 'Experienced Writers', desc: 'Our writers have experience in research methodology, industry experience, and educational degrees from international and top-ranked universities from US, and the UK.' },
            ].map((g) => (
              <div key={g.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary transition-all">
                <div className="text-3xl mb-3">{g.icon}</div>
                <h3 className="font-heading font-bold text-secondary mb-2 text-sm">{g.title}</h3>
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
          <div className="text-center mt-8">
            <Link to="#" className="btn-outline">View More FAQs</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSlider />

      {/* ── CTA ── */}
      <CTASection title="Place Your Order Today" subtitle="Invest in your career by availing complete dissertation writing help from the UK & US qualified researchers" primaryLabel="Order Now" />
    </MainLayout>
  );
}
