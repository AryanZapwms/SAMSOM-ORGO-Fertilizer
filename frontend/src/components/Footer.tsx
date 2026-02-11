import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-emerald-100/80 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-icons text-primary text-3xl">eco</span>
              <span className="text-xl font-extrabold tracking-tight text-white uppercase">
                SAMSON ORGO
              </span>
            </div>
            
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              {t('footer.description')}
            </p>
            
            <div className="flex gap-4">
              <a 
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" 
                href="#"
              >
                <span className="material-icons text-white">camera_alt</span>
              </a>
              <a 
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" 
                href="#"
              >
                <span className="material-icons text-white">facebook</span>
              </a>
              <a 
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" 
                href="#"
              >
                <span className="material-icons text-white">mail</span>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">{t('footer.quickLinks')}</h5>
            <ul className="space-y-4 text-sm">
              <li><Link className="hover:text-primary transition-colors" to="/">{t('footer.shopAll')}</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">{t('footer.wholesale')}</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">{t('footer.careGuide')}</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/">{t('footer.subscription')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary text-sm">email</span>
                <span>hello@SAMSON ORGOplants.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary text-sm">phone</span>
                <span>+1 (555) 234-GROW</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary text-sm">location_on</span>
                <span>123 Organic Lane, <br />Greenfield, CA 90210</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">{t('footer.newsletter')}</h5>
            <p className="text-xs mb-4">{t('footer.newsletterText')}</p>
            <div className="relative">
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-primary text-sm" 
                placeholder={t('footer.emailPlaceholder')} 
                type="email"
              />
              <button className="absolute right-2 top-2 bg-primary text-white p-1 rounded hover:bg-primary/80 transition-all">
                <span className="material-icons">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">{t('footer.privacy')}</a>
            <a className="hover:text-white transition-colors" href="#">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;