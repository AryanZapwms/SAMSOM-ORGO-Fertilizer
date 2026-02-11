import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonial: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-primary/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-2">{t('testimonial.title')}</h2>
          <div className="flex justify-center gap-1 text-primary">
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background-light dark:bg-background-dark p-12 rounded-2xl shadow-xl relative">
            <span className="material-icons absolute top-8 left-8 text-primary/20 text-6xl">
              format_quote
            </span>
            
            <div className="relative z-10 text-center">
              <p className="text-2xl font-medium italic mb-8 leading-relaxed">
                {t('testimonial.quote')}
              </p>
              
              <div className="flex flex-col items-center">
                {/* <div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-cover"
                    alt="Portrait of a smiling young woman"
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  />
                </div> */}
                
                <h4 className="font-bold text-lg">{t('testimonial.author')}</h4>
                <p className="text-sm text-emerald-800/40 dark:text-emerald-100/40">
                  {t('testimonial.role')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-primary/20"></div>
            <div className="w-3 h-3 rounded-full bg-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;