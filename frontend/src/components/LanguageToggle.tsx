import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-24 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all z-50 group"
      aria-label={`Change language to ${language === 'en' ? 'Marathi' : 'English'}`}
      title={`Change to ${language === 'en' ? 'Marathi' : 'English'}`}
    >
      <span className="text-sm font-bold">
        {language === 'en' ? 'मर' : 'EN'}
      </span>
      
      {/* Tooltip */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-emerald-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {language === 'en' ? 'मराठी मध्ये बदला' : 'Switch to English'}
      </div>
    </button>
  );
};

export default LanguageToggle;