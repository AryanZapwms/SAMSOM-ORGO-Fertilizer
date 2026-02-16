import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: 'spa',
      title: t('benefits.organic.title'),
      description: t('benefits.organic.desc')
    },
    {
      icon: 'science',
      title: t('benefits.soil.title'),
      description: t('benefits.soil.desc')
    },
    {
      icon: 'pets',
      title: t('benefits.chemical.title'),
      description: t('benefits.chemical.desc')
    },
    {
      icon: 'trending_up',
      title: t('benefits.growth.title'),
      description: t('benefits.growth.desc')
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-emerald-950/20 relative dark:text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold mb-4">{t('benefits.title')}</h2>
          <p className="text-emerald-800/60 dark:text-emerald-100/40 text-lg">
            {t('benefits.description')}
          </p>
          <Link 
            to="/benefits" 
            className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:gap-3 transition-all"
          >
            {t('benefits.viewAll')} <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background-light dark:bg-background-dark p-8 rounded-xl border border-primary/10 hover:border-primary/40 transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-white text-3xl">
                  {benefit.icon}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-sm text-emerald-800/60 dark:text-emerald-100/40 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 organic-blob -z-0"></div>
    </section>
  );
};

export default Benefits;