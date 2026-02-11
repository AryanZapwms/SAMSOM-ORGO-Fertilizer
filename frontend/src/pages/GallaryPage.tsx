import React from 'react';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import { useLanguage } from '../contexts/LanguageContext';

const GalleryPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900 dark:text-white">
              {t('gallery.pageTitle', 'Gallery')}
            </h1>
            <p className="text-xl text-emerald-800/70 dark:text-emerald-100/60 max-w-3xl mx-auto">
              {t('gallery.pageSubtitle', 'Visual stories of growth, sustainability, and success with our organic fertilizer')}
            </p>
          </div>

          {/* Stats or Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { number: '50+', label: t('gallery.stats.images', 'Images') },
              { number: '20+', label: t('gallery.stats.videos', 'Videos') },
              { number: '100%', label: t('gallery.stats.organic', 'Organic') },
              { number: '24/7', label: t('gallery.stats.access', 'Access') }
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-emerald-950/30 p-6 rounded-2xl text-center border border-primary/10">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-emerald-700 dark:text-emerald-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Gallery Component */}
          <div className="mb-16">
            <Gallery />
          </div>

          {/* Additional Info Section */}
          {/* <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 dark:from-primary/5 dark:to-emerald-500/5 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-emerald-900 dark:text-white">
                  {t('gallery.info.title', 'Share Your Green Journey')}
                </h2>
                <p className="text-lg text-emerald-800/70 dark:text-emerald-100/60 mb-4 leading-relaxed">
                  {t('gallery.info.description', 'Our gallery is a community space where farmers and gardeners share their success stories. Join thousands of growers who have transformed their crops with Samson Orgo.')}
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a 
                    href="/about" 
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all"
                  >
                    <span className="material-icons">info</span>
                    {t('gallery.info.learnMore', 'Learn More About Us')}
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-emerald-700 dark:text-emerald-300 px-6 py-3 rounded-lg font-bold border border-primary/20 hover:bg-emerald-50 dark:hover:bg-gray-700 transition-all"
                  >
                    <span className="material-icons">contact_mail</span>
                    {t('gallery.info.contact', 'Contact for Media')}
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Community garden"
                  className="relative z-10 rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 px-8 py-4 rounded-lg font-bold border border-primary/20 hover:bg-emerald-100 dark:hover:bg-emerald-950/50 transition-all"
            >
              <span className="material-icons">home</span>
              {t('nav.home', 'Back to Home')}
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;