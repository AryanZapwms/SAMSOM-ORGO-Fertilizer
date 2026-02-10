import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FloatingButtonsProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ darkMode, toggleDarkMode }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all group relative"
        aria-label={`Change language to ${language === 'en' ? 'Marathi' : 'English'}`}
        title={language === 'en' ? 'मराठी मध्ये बदला' : 'Switch to English'}
      >
        <span className="text-sm font-bold">
          {language === 'en' ? 'मर' : 'EN'}
        </span>
      </button>
      
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="w-12 h-12 bg-emerald-800 dark:bg-emerald-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
        aria-label="Toggle dark mode"
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <span className="material-icons">
          {darkMode ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;