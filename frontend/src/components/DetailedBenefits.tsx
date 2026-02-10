import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const DetailedBenefits: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t('detailed.fertility.title'),
      description: t('detailed.fertility.desc'),
      icon: "nutrition",
      stats: "NPK + Micronutrients"
    },
    {
      title: t('detailed.structure.title'),
      description: t('detailed.structure.desc'),
      icon: "landscape",
      stats: "Better Aeration"
    },
    {
      title: t('detailed.microbial.title'),
      description: t('detailed.microbial.desc'),
      icon: "psychology",
      stats: "Healthier Soil Ecosystem"
    },
    {
      title: t('detailed.moisture.title'),
      description: t('detailed.moisture.desc'),
      icon: "water_drop",
      stats: "40% Less Watering"
    },
    {
      title: t('detailed.healthy.title'),
      description: t('detailed.healthy.desc'),
      icon: "trending_up",
      stats: "Stronger Growth"
    },
    {
      title: t('detailed.pollution.title'),
      description: t('detailed.pollution.desc'),
      icon: "eco",
      stats: "100% Chemical-Free"
    },
    {
      title: t('detailed.sustainable.title'),
      description: t('detailed.sustainable.desc'),
      icon: "recycling",
      stats: "Zero Waste Process"
    },
    {
      title: t('detailed.universal.title'),
      description: t('detailed.universal.desc'),
      icon: "check_circle",
      stats: "All Plants & Crops"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-emerald-900 dark:text-white">
            {t('detailed.title')}
          </h2>
          <p className="text-lg text-emerald-800/60 dark:text-emerald-100/40 max-w-3xl mx-auto">
            {t('detailed.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-emerald-950/30 p-6 border border-emerald-100 dark:border-emerald-800/30 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-icons text-primary group-hover:text-white text-2xl">
                    {benefit.icon}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-emerald-900 dark:text-white">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-emerald-800/60 dark:text-emerald-100/40 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="pt-4 border-t border-emerald-100 dark:border-emerald-800/30">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    {benefit.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-emerald-500/10 dark:from-primary/5 dark:to-emerald-500/5">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-white">
                {t('detailed.cta.title')}
              </h3>
              <p className="text-emerald-800/70 dark:text-emerald-100/60 mb-4">
                {t('detailed.cta.desc1')}
              </p>
              <p className="text-emerald-800/70 dark:text-emerald-100/60">
                {t('detailed.cta.desc2')}
              </p>
            </div>
            
            <div className="lg:w-1/3 flex flex-col items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons text-white text-3xl">star</span>
                </div>
                <p className="font-bold text-lg">{t('detailed.premium')}</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-300">{t('detailed.lab')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedBenefits;