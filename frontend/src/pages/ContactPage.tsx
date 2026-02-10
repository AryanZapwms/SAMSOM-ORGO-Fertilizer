import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Use environment variable for API URL if available, fallback to localhost for dev
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900 dark:text-white">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-emerald-800/70 dark:text-emerald-100/60 max-w-3xl mx-auto">
              {t('contact.hero.desc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-emerald-950/30 p-8 rounded-2xl shadow-lg border border-primary/10 h-full">
                <h2 className="text-2xl font-bold mb-8 text-emerald-900 dark:text-white">
                  {t('contact.info.title')}
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-icons text-primary">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-emerald-900 dark:text-white">{t('contact.info.location.title')}</h3>
                      <p className="text-emerald-800/70 dark:text-emerald-100/60 leading-relaxed">
                        {t('contact.info.location.address')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-icons text-primary">phone</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-emerald-900 dark:text-white">{t('contact.info.phone.title')}</h3>
                      <p className="text-emerald-800/70 dark:text-emerald-100/60">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-icons text-primary">email</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-emerald-900 dark:text-white">{t('contact.info.email.title')}</h3>
                      <p className="text-emerald-800/70 dark:text-emerald-100/60">
                        hello@nourishplants.com<br />
                        sales@nourishplants.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="material-icons text-primary">schedule</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-emerald-900 dark:text-white">{t('contact.info.hours.title')}</h3>
                      <p className="text-emerald-800/70 dark:text-emerald-100/60">
                        {t('contact.info.hours.week')}<br />
                        {t('contact.info.hours.sat')}<br />
                        {t('contact.info.hours.sun')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12 pt-8 border-t border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="font-bold text-lg mb-4 text-emerald-900 dark:text-white">{t('contact.info.social')}</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: 'facebook', label: 'Facebook' },
                      { icon: 'instagram', label: 'Instagram' },
                      { icon: 'twitter', label: 'Twitter' },
                      { icon: 'linkedin', label: 'LinkedIn' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#!"
                        className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                        aria-label={social.label}
                      >
                        <span className="material-icons text-lg">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-emerald-950/30 p-8 rounded-2xl shadow-lg border border-primary/10">
                <h2 className="text-2xl font-bold mb-8 text-emerald-900 dark:text-white">
                  {t('contact.form.title')}
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
                    {t('contact.form.success')}
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg">
                    {t('contact.form.error')}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-emerald-900 dark:text-emerald-100" htmlFor="name">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-emerald-900 dark:text-white"
                        placeholder={t('contact.form.placeholderName')}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-emerald-900 dark:text-emerald-100" htmlFor="email">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-emerald-900 dark:text-white"
                        placeholder={t('contact.form.placeholderEmail')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-emerald-900 dark:text-emerald-100" htmlFor="phone">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-emerald-900 dark:text-white"
                        placeholder={t('contact.form.placeholderPhone')}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-emerald-900 dark:text-emerald-100" htmlFor="subject">
                        {t('contact.form.subject')}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-emerald-900 dark:text-white"
                      >
                        <option value="">{t('contact.form.subjects.select')}</option>
                        <option value="product-inquiry">{t('contact.form.subjects.product')}</option>
                        <option value="wholesale">{t('contact.form.subjects.wholesale')}</option>
                        <option value="technical-support">{t('contact.form.subjects.support')}</option>
                        <option value="partnership">{t('contact.form.subjects.partnership')}</option>
                        <option value="feedback">{t('contact.form.subjects.feedback')}</option>
                        <option value="other">{t('contact.form.subjects.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-emerald-900 dark:text-emerald-100" htmlFor="message">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-emerald-900 dark:text-white resize-none"
                      placeholder={t('contact.form.placeholderMessage')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="material-icons animate-spin">refresh</span>
                        {t('contact.form.sending')}
                      </span>
                    ) : (
                      t('contact.form.send')
                    )}
                  </button>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 bg-white dark:bg-emerald-950/30 p-8 rounded-2xl shadow-lg border border-primary/10">
                <h2 className="text-2xl font-bold mb-6 text-emerald-900 dark:text-white">
                  {t('contact.faq.title')}
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      question: t('contact.faq.q1'),
                      answer: t('contact.faq.a1')
                    },
                    {
                      question: t('contact.faq.q2'),
                      answer: t('contact.faq.a2')
                    },
                    {
                      question: t('contact.faq.q3'),
                      answer: t('contact.faq.a3')
                    },
                    {
                      question: t('contact.faq.q4'),
                      answer: t('contact.faq.a4')
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-emerald-200 dark:border-emerald-800/30 pb-4 last:border-0">
                      <h3 className="font-bold text-lg mb-2 text-emerald-900 dark:text-white">{faq.question}</h3>
                      <p className="text-emerald-800/70 dark:text-emerald-100/60 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;