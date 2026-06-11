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
  { label: 'Dissertation Part' },
];

const CHAPTERS = [
  { title: 'Only Abstract Writing', desc: 'We write abstract for your master\'s dissertation which would approximately contain 250 to 350 words. The abstract includes a brief summary of introduction or background, objectives, boundaries, methodology, the results of the dissertation research, main conclusion, and recommendations.' },
  { title: 'Only Acknowledgement Writing', desc: 'A brief statement that ensures: comment about family and friends at a minimum level while more concentration will be given on those who have given direct assistance. Includes evidence at your findings and a declaration to show the work complies with University regulation on plagiarism.' },
  { title: 'Only Table of Content', desc: 'The section will list the chapter headings, appendices, references along with the page numbers. There would be a separate list for lists of figures, tables, and abbreviations. We use Microsoft Word to create lists using the indexing and style functions.' },
  { title: 'Full Dissertation Title', desc: 'A precise Title as approved by the University. The title would convey the ideas of your investigation, orient your readers to the topic, indicate the type of study you will conduct, population you target and geographical location.' },
  { title: 'Only Dissertation Introduction Chapter Writing – I', desc: 'A Brief description of the topic, research questions, and research objectives. The section would provide necessary background information and provides readers with some sense of overall research including general territory, broad foundation (existing literature), the general scope, and overview of the sections.' },
  { title: 'Aim and Overall Objective / Hypotheses Section – II', desc: 'A description of what research wants to achieve from carrying out this research. The section includes a clear statement of the research objectives, questions that researcher seeks to answer or the hypothesis, and includes original contributions of your study.' },
  { title: 'Literature, Context, Background Section – III', desc: 'This should provide insights on: (a) studies conducted previously in your research field, (b) familiarity with major themes, (c) the range of theories scholars use, (d) gaps identified in the literature, (e) further investigations intended, and (f) best methodologies.' },
  { title: 'Research Methodology Chapter – IV', desc: 'The section is essential to the good dissertation. This section includes the overall methodological approach, Research design, strategy, qualitative or quantitative, research philosophy, target area, population, sample size, primary or secondary data collection, ethical consideration, pilot study, validity, reliability, & statistical analysis.' },
  { title: 'Results / Findings / Data Analysis – V', desc: 'The chapter presents the findings of the study in the form of tables & figures along with the interpretation. Depending on the choice of research methodology, the page will have detailed quantitative models, hypothesis testing, showing some basic descriptive statistics or a qualitative analysis.' },
  { title: 'Discussion, Summary & Conclusion – VI', desc: 'In this chapter, we introduce three sections viz., discussion, summary, and conclusion. The discussion chapter compares and contrasts the findings of previously published authors in line with the research questions, developing analytics and critical thinking grounded in the literature review.' },
  { title: 'Dissertation References / Citation Compliance', desc: 'We compile 100% compliant citations and reference lists for all standard formats (Harvard, APA, Chicago, Vancouver, Turabian etc.) following university-specific guidelines.' },
];

const FAQS = [
  { q: 'Can you write only one chapter of my dissertation?', a: 'Yes, absolutely. Tutors India offers complete flexibility. We can write any single chapter of your dissertation – be it the introduction, literature review, methodology, findings, discussion, or conclusion. Just let us know which chapter you need help with.' },
  { q: 'How do you ensure quality for a partial dissertation?', a: 'We follow the same rigorous quality control process for part dissertations as for full dissertations. Our three-level quality check includes Technical QC, Editor QC, and final check against your requirements, ensuring perfect quality for every chapter.' },
  { q: 'Do you provide the references used for the chapter?', a: 'Yes, we provide all references sourced for your dissertation chapter in the form of PDFs. This allows you to verify the authenticity of the sources used and ensure academic integrity.' },
  { q: 'What information do I need to provide for a part dissertation?', a: 'You need to share your dissertation topic, the specific chapter(s) you need, your university guidelines, word count, deadline, and any existing chapters or outlines you have. The more information you provide, the better we can tailor the work to your needs.' },
  { q: 'Can you follow my university\'s specific formatting guidelines?', a: 'Yes, we follow university-specific guidelines for all UK, US, and Australian universities. We also adhere to specific referencing styles like Harvard, APA, Chicago, and more as required by your institution.' },
];

export default function DissertationPartPage() {
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
                The US and the UK Master's Part / Chapter-wise Dissertation Writing Service
              </h1>
              <p className="text-gray-200 mb-3 leading-relaxed">
                If you are looking to avail our services only to write part of your master's dissertation such as only introduction chapter, literature review, methodology or materials and methods, findings or only interpretation of your statistical analysis or conclusion or only discussion chapter?
              </p>
              <p className="text-xl font-bold text-accent mb-6">Then You've Certainly Reached the Right Place!</p>
              <div className="flex flex-wrap gap-3">
                <Link to="#" className="btn-primary rounded-full">Place an Order</Link>
                <a href="https://www.tutorsindia.com/wp-content/uploads/2020/10/TI-DISSERTATION-PART.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-6 py-2.5 rounded-full transition-colors text-sm">
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
            <h2 className="section-title">Custom Master's Dissertation Chapter Writing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Writing a dissertation is a daunting task as students need to produce an original piece of research work on a topic of special interest. However, writing a dissertation requires a range of planning and research skills as it demands a specific writing style as per the university requirement.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Tutors India, we can write starting from abstract or executive summary writing services, introduction chapter, literature review, theoretical framework chapter, hypotheses development, help with questionnaire development, research questions and objectives development, data analysis help, discussions, conclusions, recommendations, interview transcript analysis, ethical form filling, appendices, and any other help you may require with your dissertation.
            </p>
            <h3 className="text-xl font-bold font-heading text-secondary mt-6 mb-3">Dissertation Chapter is Written with Utmost Care</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Part custom Dissertation writing services and thesis writing services at Tutors India are handled and written by the style, design, and format of an ideal dissertation required by the UK, Australia, and the US universities. We assist you to complete your part dissertation — a topic selection, research proposal writing, reflection journals for your dissertation, the introduction, the literature review, research methodology, presenting and discussing findings, research ethics, citations and referencing, and references along with the Appendices.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="text-sm text-gray-600">
                Our professional dissertation writers have completed around <strong className="text-primary">8000 Masters Dissertations</strong> successfully. If you are unsure of what to do, avail our full or complete thesis writing services now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTERS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">A Part Dissertation Features</h2>
          <p className="text-center text-gray-600 mb-10">We follow according to the specific university guidelines across the United States, United Kingdom, Australia, and other Asian Universities. Our part dissertation structure would consist of:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CHAPTERS.map((ch, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary shadow-sm transition-colors">
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

      {/* ── PRICING ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">What Services Do We Offer Under Specific Type of Dissertation?</h2>
          <p className="text-center text-gray-600 mb-10">We write complete master's dissertation from the introduction to recommendations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Basic', badge: 'bg-gray-500', desc: 'Developed based on the relevant sources, a reasonable attempt at finding an area that warrant research & evidence of an attempt to provide critical evaluation but mainly descriptive.' },
              { name: 'Advanced', badge: 'bg-primary', desc: 'Wide range of sources, a clear identification of research gap in the literature along with aim and research questions.' },
              { name: 'Premium', badge: 'bg-secondary', desc: 'Refers to a wide range of seminal research with throughout engagement using latest resources. A solid gap would be identified based on the current literature & justified thoroughly & Excellent critical analysis would be shown (upgradable).' },
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

      {/* ── DELIVERABLES ── */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Our Deliverables</h2>
          <p className="text-gray-600 mb-8">Full Dissertation writing services from Tutors India research writing services is simply easy and straightforward. You will get the reply within 30 minutes.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Executive summary / Abstract', 'Free articles used for writing', 'SPSS data sheet and output', 'Questionnaire / Interview questions', 'Reflective log or diary', 'Free Tutoring for work carried out'].map((item) => (
              <div key={item} className="bg-white rounded-lg p-3 text-sm text-gray-700 flex items-center gap-2 border border-gray-100">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ── */}
      <SubjectsList />

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center mb-10">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSlider />

      {/* ── CTA ── */}
      <CTASection title="Place Your Order Today" subtitle="Get expert dissertation chapter writing help from UK & US qualified researchers" primaryLabel="Order Now" />
    </MainLayout>
  );
}
