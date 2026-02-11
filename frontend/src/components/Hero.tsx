import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about'); 
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <header className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-90 dark:opacity-40"
          alt="Lush green indoor plants in a modern sunlit room"
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/40 to-transparent dark:from-background-dark dark:via-background-dark/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-bold text-xs tracking-wider uppercase mb-6">
            {t('hero.tagline')}
          </span>
          
          <h1 className="text-6xl md:text-7xl font-extrabold text-emerald-950 dark:text-white leading-[1.1] mb-6">
            {t('hero.title')} <br />
            <span className="text-primary">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="text-lg text-emerald-800/80 dark:text-emerald-100/60 mb-10 leading-relaxed max-w-lg">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button onClick={handleLearnMore} className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-extrabold text-lg transition-all shadow-xl shadow-primary/30 flex items-center gap-2">
              {t('hero.learnMore')} <span className="material-icons">arrow_forward</span>
            </button>
            <button onClick={handleContactUs} className="bg-emerald-950/5 dark:bg-white/10 hover:bg-primary/10 border border-emerald-950/10 dark:border-white/10 px-10 py-4 rounded-xl font-extrabold text-lg transition-all backdrop-blur-sm">
              {t('hero.contactUs')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;