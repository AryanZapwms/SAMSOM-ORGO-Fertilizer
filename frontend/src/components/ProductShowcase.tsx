import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductShowcase: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              className="relative z-10 rounded-3xl shadow-2xl transform lg:-rotate-3"
              alt="Rich dark organic potting soil and a small spade"
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
          
          <div className="lg:w-1/2 dark:text-white">
            <h2 className="text-4xl font-extrabold mb-6">
              {t('product.secret')} <br />
              <span className="text-primary">{t('product.microbes')}</span>
            </h2>
            
            <p className="text-lg text-emerald-800/70 dark:text-emerald-100/60 mb-8">
              {t('product.descMain')}
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary">check_circle</span>
                <span className="font-semibold">{t('product.bullet1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary">check_circle</span>
                <span className="font-semibold">{t('product.bullet2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary">check_circle</span>
                <span className="font-semibold">{t('product.bullet3')}</span>
              </li>
            </ul>
            
            <button className="bg-emerald-950 dark:bg-white text-white dark:text-emerald-950 px-8 py-3 rounded-lg font-bold hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all">
              {t('product.viewRange')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;