import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
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
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
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
    <section id="contact" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">{t('contact.title')}</h2>
          <p className="text-emerald-800/60 dark:text-emerald-100/40 text-lg">
            {t('contact.desc')}
          </p>
        </div>

        <div className="bg-white dark:bg-emerald-950/30 p-8 md:p-12 rounded-2xl shadow-xl">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
              {t('contact.success')}
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg">
              {t('contact.error')}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('contact.placeholderName')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('contact.placeholderEmail')}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="subject">
                {t('contact.subject')}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t('contact.subjects.select')}</option>
                <option value="product-inquiry">{t('contact.subjects.product')}</option>
                <option value="wholesale">{t('contact.subjects.wholesale')}</option>
                <option value="support">{t('contact.subjects.support')}</option>
                <option value="other">{t('contact.subjects.other')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder={t('contact.placeholderMessage')}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-emerald-950/30 rounded-xl">
            <span className="material-icons text-primary text-3xl mb-4">email</span>
            <h4 className="font-bold text-lg mb-2">{t('contact.info.emailTitle')}</h4>
            <p className="text-emerald-800/60 dark:text-emerald-100/40">hello@nourishplants.com</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-emerald-950/30 rounded-xl">
            <span className="material-icons text-primary text-3xl mb-4">phone</span>
            <h4 className="font-bold text-lg mb-2">{t('contact.info.callTitle')}</h4>
            <p className="text-emerald-800/60 dark:text-emerald-100/40">+1 (555) 234-GROW</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-emerald-950/30 rounded-xl">
            <span className="material-icons text-primary text-3xl mb-4">location_on</span>
            <h4 className="font-bold text-lg mb-2">{t('contact.info.visitTitle')}</h4>
            <p className="text-emerald-800/60 dark:text-emerald-100/40">123 Organic Lane, Greenfield, CA 90210</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;