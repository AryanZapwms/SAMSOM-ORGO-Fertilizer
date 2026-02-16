import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { to: "/benefits", label: t('nav.benefits') },
    { to: "/about", label: t('nav.ourStory') },
    { to: "/gallery", label: t('nav.gallery') },
    { to: "/specifications", label: t('nav.specifications') },
    { to: "/contact", label: t('nav.contact') }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full dark:text-white bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <img 
            src={logo} 
            alt="SAMSON ORGO Plants Logo" 
            className="h-22 w-auto" 
            style={{ maxWidth: '150px' }}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 ">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="font-semibold text-sm hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-icons text-emerald-900 dark:text-white text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-primary/10 animate-slideDown">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col gap-1">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="py-3 px-4 font-semibold text-emerald-900 dark:text-white hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 flex items-center gap-3"
                  onClick={closeMobileMenu}
                >
                  <span className="material-icons text-primary text-lg">
                    {index === 0 ? 'spa' : 
                     index === 1 ? 'history_edu' : 
                     index === 2 ? 'science' : 
                     'contact_mail'}
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-emerald-200 dark:border-emerald-800/30 flex justify-center">
              <div className="flex items-center gap-4">
                <span className="text-sm text-emerald-800/60 dark:text-emerald-100/40">
                  {t('language.current')}
                </span>
                <span className="font-semibold text-primary">
                  {t('language.code') === 'mr' ? 'मराठी' : 'English'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;