import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TargetAudience: React.FC = () => {
  const { t } = useLanguage();
  
  const uses = [
    { name: t('target.veg'), icon: 'grass' },
    { name: t('target.fruits'), icon: 'apple' },
    { name: t('target.flowers'), icon: 'local_florist' },
    { name: t('target.lawns'), icon: 'yard' },
    { name: t('target.nurseries'), icon: 'nature' },
    { name: t('target.pots'), icon: 'potted_plant' }
  ];
  
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-extrabold mb-8 text-emerald-900 dark:text-white">
          {t('target.title')}
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {uses.map((use, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-emerald-950 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 group-hover:bg-primary/10">
                <span className="material-icons text-4xl text-primary">{use.icon}</span>
              </div>
              <span className="font-bold text-lg text-emerald-900 dark:text-white group-hover:text-primary transition-colors">
                {use.name}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-lg text-emerald-800/70 dark:text-emerald-100/60 max-w-3xl mx-auto">
          {t('target.description')}
        </p>
      </div>
    </section>
  );
};

export default TargetAudience;