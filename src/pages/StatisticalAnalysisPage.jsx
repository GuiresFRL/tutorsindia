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
  { label: 'Dissertation Statistical Analysis' },
];

const STAT_FEATURES = [
  { title: 'Data Compiling and Recoding', desc: 'Creating data entry format in excel, exporting data into SPSS or any software, labelling, checking for normality, missing data, data entry errors, outliers checking using appropriate analysis.' },
  { title: 'Statistical Data Analysis Help', desc: 'Usual format starts with descriptive statistics (mean, standard deviation, minimum, maximum, range, standard error of mean, confidence interval) of socio-demographic variables and followed by reliability of the composite scores.' },
  { title: 'Interpretation of Statistical Output', desc: 'At Tutors India, we interpret the data that are relevant to the thesis and make sure you completely understand the output. Our statisticians make complex statistical concepts easy to understand.' },
  { title: 'Presentation of Tables and Figures', desc: 'Presentation of statistical output follows the journal format and applies appropriate interpretation not only based on numbers (quantitative expression) but also qualitatively including commenting your research methodology strength and limitations.' },
  { title: 'Qualitative Dissertation Analysis Help', desc: 'We assist in analysing your textual data using NVIVO software and also through Thematic analysis approach — content analysis, relational analysis, semantic network analysis, and summative content analysis.' },
  { title: 'Express Statistical & Text Analysis Service', desc: 'Find the solution within 4-6 hours\' quick turnaround solution. We have expertise in handling software like SPSS, SPSS AMOS, SAS, SYSTAT, R, STATA, Epi-Info, E-Views, Excel, etc.' },
  { title: 'Chapter by Chapter Delivery', desc: 'This is to ensure that clients have full control over the delivery and can look at the drafts of different sections. Unlike other companies, we do not charge any costs for such structure.' },
  { title: 'Statistics Homework & Assignment Help', desc: 'Our statistician guides you in solving your statistical homework problems, Statistics coursework, Statistics class work, Mathematics conference paper, Statistical questions, and answers.' },
];

const SOFTWARES = ['SPSS', 'SPSS AMOS', 'SAS', 'STATA', 'R', 'E-Views', 'Minitab', 'MATLAB', 'NVivo', 'Atlas-ti', 'MAXQDA', 'Excel', 'Epi-Info', 'SYSTAT'];

const PRICING_TABLE = [
  { level: 'Basic', desc: 'Only Statistical Analysis based on the raw data shared. We analyse the data using appropriate statistical tools and just paste the output and write the basic interpretation without any discussion against the literature review.' },
  { level: 'Advanced', desc: 'We analyse the given data using appropriate statistical tools and format the tables according to the manuscript style with logical sense. We write the interpretation of the statistics conducted along with the discussion by comparing and contrasting the previous studies.' },
  { level: 'Premium', desc: 'In addition to the advanced features, we also undertake data collection services under premium. We also check for reliability and validity for quantitative while rigor and trustworthiness including peer debriefing and support, member checking, negative case analysis and auditing for qualitative textual analysis.' },
];

const FAQS = [
  { q: 'What do I need to provide for the initial Dissertation Statistics consultation?', a: 'Tutors India experts will ask you to provide adequate information about your research study during the initial consultation. You should share your research topic, objectives, questionnaire or interview guide, raw data, and the analysis you expect. Without your research study information, it is very difficult for the statisticians to make decisions on the statistical analyses.' },
  { q: 'What are the statistical software tools used by Tutors India Statisticians?', a: 'Our well-experienced statisticians are capable of SPSS, STATA, SAS, R, E-views, SPSS AMOS, Minitab, MATLAB, NVivo, Atlas-ti, MAXQDA, and many more. We choose the most appropriate tool for your specific research design and analysis requirements.' },
  { q: 'How long have you been providing dissertation statistics services?', a: 'Since 2001, Tutors India has been a trusted mentor for master\'s students offering various dissertation writing and statistics support. We have a team of senior statisticians with 10+ years of experience who oversee all projects from the UK, US, and other countries.' },
  { q: 'What are the qualifications of your statisticians?', a: 'We have senior statisticians with 10+ years of experience who hold PhD and Master\'s qualifications. They have the ability to handle complex projects involving cluster analysis, structural equation modeling, multilevel modeling, and advanced qualitative analyses.' },
  { q: 'Can I get tutoring for dissertation statistics?', a: 'Yes, you are welcome to get Dissertation Statistics Tutoring apart from writing. We offer sessions to help you understand the statistical processes so you can speak confidently with your program supervisors and examiners about your data analysis.' },
  { q: 'On which areas do you provide dissertation statistics services?', a: 'We accept orders from a wide range of subjects including Business Management, Finance, Operation Management, Supply Chain, Human Resource Management, Psychology, History, Geography, Engineering, Healthcare, Economics, Computer Science, Epidemiology, Nursing, Medical, Public Health, Life Science, and Nutrition.' },
];

const TESTIMONIALS_CUSTOM = [
  {
    id: 1,
    name: 'Sara',
    text: 'I am a postgraduate student looked out for a source that could help me in writing dissertation in statistics. I was low and lacked confidence in writing. Then, I surfed through Google for sites providing dissertation writing services and found Tutors India for writing my dissertation. After lots of hard work they made a progress and completed my dissertation. The complete work was beyond my expectation. Thank you!',
    avatar: 'https://www.tutorsindia.com/wp-content/uploads/2021/10/Testiomonial4.jpg',
  },
];

export default function StatisticalAnalysisPage() {
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
                The UK Master's Dissertation Textual (Qualitative) & Statistical (Quantitative) Analysis Help
              </h1>
              <p className="text-gray-200 mb-3 leading-relaxed">
                Are you not familiar with statistical & content analysis tools? You have data but does not know how to recode it? Do you have a problem in analysing your hypothesis? Could not able to detect what is dependent and independent variables?
              </p>
              <p className="text-xl font-bold text-accent mb-4">Then You've Certainly Reached the Right Place!</p>
              <p className="text-gray-300 mb-6 text-sm">Tutors India, a hub for dissertation qualitative and quantitative analysis Services</p>
              <div className="flex flex-wrap gap-3">
                <Link to="#" className="btn-primary rounded-full">Place an Order</Link>
                <a href="https://www.tutorsindia.com/wp-content/uploads/2020/11/TI-STATISTICAL-SERVICES.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-6 py-2.5 rounded-full transition-colors text-sm">
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
            <h2 className="section-title">Your Dissertation Textual & Statistical Analysis Are Done by Qualified and Experienced Statisticians</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We provide support for all your dissertation analysis. We have a team of expertise who can handle both qualitative or textual and quantitative or statistical analysis for your Master's or postgraduate dissertation. Thereby you can understand statistics more easily.
            </p>
            <h3 className="text-xl font-bold font-heading text-secondary mb-3 mt-6">At Tutors India, We Assist for Statistics, Biostatistics & Qualitative Analysis</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dissertation statistical data analysis is the most important step in any dissertation or thesis. Students require help in explaining their work through statistical data analysis and displaying results. We have expert statisticians who improve the quality of data with the design of experiments and survey sampling and provide the complete statistical data analysis help. We offer our services to a number of fields such as business, psychology, economics and management.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tutors India is equipped with a team of experienced statisticians who can provide support in Statistical data analysis. Different tools like SPSS, SAS, Excel, R, STATA, Minitab, are used. Our team of qualitative experts are familiar with the grounded theory method and sampling for qualitative (intensity, deviant case sampling, stratified purposeful sampling, snowball or chain sampling, maximum variation sampling, convenience and criterion sampling).
            </p>

            {/* Software badges */}
            <h3 className="font-heading font-bold text-secondary mb-3">Statistical Software We Use</h3>
            <div className="flex flex-wrap gap-2">
              {SOFTWARES.map((s) => (
                <span key={s} className="bg-secondary text-white text-xs font-semibold px-3 py-1.5 rounded-full">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">UK Dissertation Statistical & Textual Analytics Services Are Simply Easy & Straightforward</h2>
          <p className="text-center text-gray-600 mb-10">Our statistical and textual analytics services help guarantees that your dissertation is confidential. Just send us your dissertation topic analysis and/or research plan, questionnaire, raw data and objectives along with the deadline.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_TABLE.map((tier, i) => (
              <div key={tier.level} className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border-2 ${i === 2 ? 'border-secondary' : i === 1 ? 'border-primary' : 'border-gray-200'}`}>
                <div className={`text-center py-5 text-white font-bold text-xl ${i === 2 ? 'bg-secondary' : i === 1 ? 'bg-primary' : 'bg-gray-500'}`}>
                  {tier.level}
                </div>
                <div className="bg-white p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{tier.desc}</p>
                  <div className="mt-6 space-y-2">
                    {(i >= 0 ? ['Statistical Analysis', 'Basic Interpretation'] : []).concat(
                      i >= 1 ? ['Formatted Tables', 'Literature Discussion'] : []
                    ).concat(
                      i >= 2 ? ['Data Collection', 'Reliability & Validity Check'] : []
                    ).map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feat}
                      </div>
                    ))}
                  </div>
                  <Link to="#" className={`mt-6 w-full text-center block font-bold px-6 py-3 rounded-lg transition-colors text-sm ${i === 1 ? 'bg-primary hover:bg-primary-dark text-white' : i === 2 ? 'bg-secondary hover:bg-secondary-dark text-white' : 'bg-gray-500 hover:bg-gray-600 text-white'}`}>
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">How Does Statistical Consultation Work?</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            We are completely aware that the dissertation comes with a very tight deadline, and our team ensures to deliver the work on time along with the detailed report.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {[
                { step: '01', title: 'Send Your Requirements', desc: 'Share your dissertation topic analysis, research plan, questionnaire or interview guide, raw data, and objectives along with the deadline.' },
                { step: '02', title: 'Order Confirmed', desc: 'After the order is confirmed, we allocate a special team to scrutinize the work regarding necessary availability requirements.' },
                { step: '03', title: 'Analysis Plan Approved', desc: 'We send you an outline of the proposed dissertation analysis plan. Once approved, we will dispatch the work and update you on progress.' },
                { step: '04', title: 'Work Delivered', desc: 'We deliver your work as per the schedule fixed and agreed or even before the schedule. You can pay in installments.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 text-sm">{s.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Offers */}
            <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-xl text-secondary mb-4">Free Offers Along with Your Statistical Analysis Help</h3>
              <p className="text-gray-600 text-sm mb-4">We deliver more than your expectation:</p>
              <ul className="space-y-2">
                {[
                  'Abstract or Executive Summary',
                  'Graphs & Tables (redrawn)',
                  'Statistical analysis or textual analysis of data',
                  'SPSS / other software screenshots',
                  'Free Tutoring for the work carried out',
                  'SPSS output in Appendix',
                  'Speak confidently with program supervisors',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="#" className="btn-primary mt-6 w-full text-center block">Order Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">A Dissertation Qualitative (Textual) and Quantitative (Statistical) Analysis Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {STAT_FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary transition-all">
                <h3 className="font-bold text-secondary text-sm mb-2">{f.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Why Choose Tutors India for Statistical Analysis</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Qualified researchers, research methodology expertise, well experienced Statisticians capable of handling SPSS, SAS, R, E-Views, STATA and many more, Questionnaire development expertise, unlimited revision, only peer-reviewed articles, Statistics Tutoring and clarification, Tables and Interpretation with proper formatting for print-ready analysis, plagiarism report, 24/7 support, timely Support, 100% match with the requirement and on time delivery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🔬', title: 'Expert Statisticians', desc: 'Senior statisticians with 10+ years experience from UK & US universities holding PhD and Master\'s qualifications.' },
              { icon: '🛡️', title: 'Secure & Confidential', desc: '100% confidentiality with unique reference codes, NDA-signed writers, and 128-bit SSL encryption for payment.' },
              { icon: '📚', title: 'Fully Referenced', desc: 'Refer only peer-reviewed sources including Web of Science, ProQuest, Google Scholar, and Business Source Complete.' },
              { icon: '⏰', title: 'On Time Delivery', desc: 'Delivery of minor changes within 24 working hours and significant changes within 48 working hours.' },
            ].map((g) => (
              <div key={g.title} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{g.icon}</div>
                <h3 className="font-bold text-secondary mb-2 text-sm">{g.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
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
      <TestimonialsSlider items={TESTIMONIALS_CUSTOM} />

      {/* ── CTA ── */}
      <CTASection
        title="Order Now — Statistical Analysis Help"
        subtitle="Invest in your career by availing statistical analysis help from UK & US qualified researchers"
        primaryLabel="Order Now"
      />
    </MainLayout>
  );
}
