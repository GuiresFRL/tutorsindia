import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import TestimonialsSlider from '../components/TestimonialsSlider'
import CTASection from '../components/CTASection'
import FAQAccordion from '../components/FAQAccordion'
import ContactForm from '../components/ContactForm'
import GuaranteesSection from '../components/GuaranteesSection'

const chapters = [
  { num: 'Chapter 1', title: 'Introduction', desc: 'We develop the introduction chapter based on background and problem statement, and develop aims and objectives along with delimitations set. We ensure this chapter clearly sets out the research question and justifies the study.' },
  { num: 'Chapter 2', title: 'Literature Review', desc: 'Our experts synthesize existing research, identify gaps, and position your work within the academic discourse. We use the latest peer-reviewed articles and academic sources for a comprehensive review.' },
  { num: 'Chapter 3', title: 'Research Methodology', desc: 'We write a detailed methodology chapter covering research design, data collection methods, sample, ethical considerations, and data analysis approach — tailored to your discipline.' },
  { num: 'Chapter 4', title: 'Data Analysis & Findings', desc: 'We handle both quantitative (SPSS, R, STATA) and qualitative (NVivo, thematic analysis) data analysis, presenting findings clearly with tables, graphs and narrative interpretation.' },
  { num: 'Chapter 5', title: 'Discussion', desc: 'We link findings back to the literature review and research objectives, providing academic discussion that demonstrates critical thinking and understanding of the subject matter.' },
  { num: 'Chapter 6', title: 'Conclusion & Recommendations', desc: 'A comprehensive conclusion summarizing findings, implications, limitations of the study, and recommendations for future research — written to meet your university\'s rubric.' },
]

const whyFull = [
  { icon: '🏆', title: 'End-to-End Excellence', desc: 'Complete dissertation from topic selection to final submission with consistent quality throughout every chapter.' },
  { icon: '🔬', title: 'Research Expertise', desc: 'Our experts are trained researchers who understand the nuances of academic research across all disciplines.' },
  { icon: '📊', title: 'Data Analysis Included', desc: 'Statistical and qualitative data analysis is included as part of our full dissertation service.' },
  { icon: '✅', title: 'University Specific', desc: 'Every dissertation is tailored to your specific university guidelines, formatting requirements and rubric.' },
  { icon: '⏰', title: 'Milestone Planning', desc: 'We plan your entire dissertation with milestones, keeping you informed at every stage.' },
  { icon: '♾️', title: 'Free Revisions', desc: 'Unlimited revisions until you are 100% satisfied with the work delivered.' },
]

const faqs = [
  { q: 'What does your Full Dissertation service include?', a: 'Our Full Dissertation service covers all chapters: Introduction, Literature Review, Research Methodology, Data Analysis & Findings, Discussion, and Conclusion & Recommendations. It also includes plagiarism report, references, and appendices.' },
  { q: 'What word count can you handle for a full dissertation?', a: 'We have experience handling Master\'s dissertations ranging from 8,000 to 30,000 words. The word count is maintained exactly as per your university regulations.' },
  { q: 'How do you ensure the dissertation is unique?', a: 'Every dissertation is written from scratch by subject matter experts. We conduct original research and scan all work through Turnitin. We also justify uniqueness of the research approach and findings.' },
  { q: 'Can I see the work chapter by chapter?', a: 'Yes, absolutely. We always check with you before proceeding to the next chapter. You can review and provide feedback at each stage before we continue.' },
  { q: 'Do you provide the data and SPSS outputs?', a: 'Yes, we provide all supplementary materials including SPSS/STATA/R outputs, questionnaires, interview transcripts and other appendix materials at no extra cost.' },
  { q: 'What universities have you written dissertations for?', a: 'We have written dissertations for students from all major UK universities including Manchester, Birmingham, Leeds, Edinburgh, Nottingham, Liverpool, Sheffield, and many more, as well as US and Australian universities.' },
]

export default function FullDissertation() {
  return (
    <>
      <Helmet>
        <title>Masters Full Dissertation Writing Help UK | Complete Dissertation Service - Tutors India</title>
        <meta name="description" content="Our Full Dissertation Writing Services at Tutors India are handled by experts from the UK & US. Get complete chapter-by-chapter dissertation support with data analysis." />
      </Helmet>

      <Breadcrumb crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Our Services', href: '/our-services' },
        { label: 'Masters Dissertation', href: '/our-services/masters-dissertation-writing-services' },
        { label: 'Full Dissertation' },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-gold text-sm font-semibold">Masters Full Dissertation Writing Help</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Masters Full Dissertation Writing Service
                <span className="text-gold"> by UK & US Experts</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Our Full Dissertation Writing Services at Tutors India are handled by experts from the UK & the US. We develop the introduction chapter based on background and problem statement, and develop aims and objectives along with the delimitations set.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/order-now" className="btn-primary">Get Your Full Dissertation</Link>
                <Link to="/contact-us" className="btn-outline-white">Free Consultation</Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: '10,000+', l: 'Students Helped' },
                  { v: '100%', l: 'Plagiarism Free' },
                  { v: '24/7', l: 'Expert Support' },
                ].map((s) => (
                  <div key={s.l} className="text-center p-3 bg-white/10 rounded-xl">
                    <p className="text-xl font-bold text-gold">{s.v}</p>
                    <p className="text-xs text-gray-300">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ContactForm title="Get a Free Quote for Full Dissertation" subtitle="Tell us your requirements and we'll respond in 30 minutes." />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Complete Dissertation Chapter by Chapter</h2>
            <p className="section-subtitle mx-auto text-gray-600 mt-3">
              We cover every chapter of your Master's dissertation with the highest academic standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((ch) => (
              <div key={ch.num} className="card border-l-4 border-gold">
                <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">{ch.num}</div>
                <h3 className="font-bold text-navy text-lg mb-3">{ch.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose full dissertation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Our Full Dissertation Service?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFull.map((w) => (
              <div key={w.title} className="card text-center">
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="font-bold text-navy mb-2">{w.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Our Full Dissertation Process</h2>
            <p className="text-gray-300">Transparent, milestone-based delivery so you always know where your dissertation stands</p>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gold/30 z-0" />
            {[
              { step: '01', title: 'Submit Requirements', desc: 'Share your dissertation brief, university guidelines, and deadline.' },
              { step: '02', title: 'Expert Matching', desc: 'We assign a subject matter expert matching your field and university.' },
              { step: '03', title: 'Chapter-by-Chapter', desc: 'Work delivered chapter by chapter with your approval at each stage.' },
              { step: '04', title: 'Review & Revise', desc: 'Unlimited revisions until you\'re fully satisfied with every chapter.' },
              { step: '05', title: 'Final Delivery', desc: 'Plagiarism-checked, formatted, and ready to submit dissertation.' },
            ].map((p) => (
              <div key={p.step} className="flex-1 text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-gold text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-gray-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional free services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Get These at Free of Costs</h2>
            <p className="section-subtitle mx-auto text-gray-600 mt-3">We share these resources with your dissertation at no extra charge</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: 'Reference PDFs', desc: 'All references sourced for your dissertation shared as PDFs.' },
              { icon: '📋', title: 'Questionnaire / Interview Guide', desc: 'Primary research instruments developed for your study.' },
              { icon: '📊', title: 'Research Output (without data)', desc: 'Primary research output without raw data at free of costs.' },
              { icon: '📎', title: 'Appendices', desc: 'All supplementary materials: questionnaires, consent forms, raw SPSS/SAS outputs.' },
              { icon: '🔍', title: 'Plagiarism Report', desc: 'Full Turnitin or WriteCheck plagiarism scan report.' },
              { icon: '📝', title: 'Formatting', desc: 'Formatted as per your university\'s specific guidelines and referencing style.' },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl">
                <div className="text-3xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-navy text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-gray-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GuaranteesSection />
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

      {/* Related services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6">Related Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Dissertation Part', href: '/our-services/masters-dissertation-writing-services/dissertation-part' },
              { label: 'Specific Dissertation', href: '/our-services/masters-dissertation-writing-services/specific-dissertation' },
              { label: 'Resit Dissertation', href: '/our-services/masters-dissertation-writing-services/resit-dissertation' },
              { label: 'Statistical Analysis', href: '/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis' },
              { label: 'Masters Dissertation', href: '/our-services/masters-dissertation-writing-services' },
            ].map((s) => (
              <Link key={s.label} to={s.href} className="card text-center text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-all duration-200">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Your Full Dissertation Written?"
        subtitle="Our UK & US expert writers are ready to help you achieve the grade you deserve."
        primaryLabel="Order Full Dissertation"
        primaryHref="/order-now"
        secondaryLabel="Contact Us"
        secondaryHref="/contact-us"
      />
    </>
  )
}
