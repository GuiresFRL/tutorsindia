import { useState } from 'react';

export default function ContactForm({ title = 'Get a Free Quote', compact = false }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', service: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600">Your enquiry has been submitted. We'll get back to you within 30 minutes.</p>
      </div>
    );
  }

  const Field = ({ name, label, type = 'text', required = false }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors[name] ? 'border-red-400' : 'border-gray-300'}`}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {title && <h3 className="text-xl font-bold text-secondary mb-6 font-heading">{title}</h3>}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
          <Field name="name" label="Full Name" required />
          <Field name="email" label="Email Address" type="email" required />
          <Field name="phone" label="Phone Number" type="tel" />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">-- Select Service --</option>
              <option>Masters Dissertation (Full)</option>
              <option>Masters Dissertation (Part)</option>
              <option>Specific Dissertation</option>
              <option>Resit Dissertation</option>
              <option>Dissertation Statistical Analysis</option>
              <option>PhD Dissertation</option>
              <option>Coursework Writing</option>
              <option>Editing Services</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject / Topic
          </label>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message / Requirements<span className="text-primary ml-1">*</span>
          </label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="btn-primary w-full text-center py-3">
          Submit Enquiry
        </button>
        <p className="text-xs text-gray-500 text-center">We respond within 30 minutes during working hours. 100% confidential.</p>
      </form>
    </div>
  );
}
