import React from 'react';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900 dark:text-white">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-emerald-800/70 dark:text-emerald-100/60 max-w-3xl mx-auto">
              {t('about.hero.desc')}
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white dark:bg-emerald-950/30 p-8 rounded-2xl shadow-lg border border-primary/10">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-icons text-primary text-3xl">target</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-white">{t('about.mission.title')}</h2>
              <p className="text-lg text-emerald-800/70 dark:text-emerald-100/60 leading-relaxed">
                {t('about.mission.desc')}
              </p>
            </div>
            
            <div className="bg-white dark:bg-emerald-950/30 p-8 rounded-2xl shadow-lg border border-primary/10">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-icons text-primary text-3xl">visibility</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-white">{t('about.vision.title')}</h2>
              <p className="text-lg text-emerald-800/70 dark:text-emerald-100/60 leading-relaxed">
                {t('about.vision.desc')}
              </p>
            </div>
          </div>

          {/* What is Vermicompost Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-emerald-900 dark:text-white">
              {t('about.whatIs.title')}
            </h2>
            <div className="bg-white dark:bg-emerald-950/30 p-8 md:p-12 rounded-2xl shadow-lg border border-primary/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-emerald-800/70 dark:text-emerald-100/60 mb-6 leading-relaxed">
                    {t('about.whatIs.p1')}
                  </p>
                  <p className="text-lg text-emerald-800/70 dark:text-emerald-100/60 leading-relaxed">
                    {t('about.whatIs.p2')}
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Vermicompost close-up"
                    className="relative z-10 rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Why Vermicompost is Important */}
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-emerald-900 dark:text-white">
              {t('about.whyInSoil.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'nutrition',
                  title: t('about.whyInSoil.item1.title'),
                  description: t('about.whyInSoil.item1.desc')
                },
                {
                  icon: 'landscape',
                  title: t('about.whyInSoil.item2.title'),
                  description: t('about.whyInSoil.item2.desc')
                },
                {
                  icon: 'psychology',
                  title: t('about.whyInSoil.item3.title'),
                  description: t('about.whyInSoil.item3.desc')
                },
                {
                  icon: 'water_drop',
                  title: t('about.whyInSoil.item4.title'),
                  description: t('about.whyInSoil.item4.desc')
                },
                {
                  icon: 'eco',
                  title: t('about.whyInSoil.item5.title'),
                  description: t('about.whyInSoil.item5.desc')
                },
                {
                  icon: 'check_circle',
                  title: t('about.whyInSoil.item6.title'),
                  description: t('about.whyInSoil.item6.desc')
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-emerald-950/30 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <span className="material-icons text-primary group-hover:text-white text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-emerald-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-emerald-800/60 dark:text-emerald-100/40 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Samson Orgo Fertilizer */}
          <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 dark:from-primary/5 dark:to-emerald-500/5 rounded-2xl p-8 md:p-12 mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-emerald-900 dark:text-white">
                  {t('about.samson.title')}
                </h2>
                <p
  className="text-lg text-red dark:text-emerald-100/60 mb-4 leading-relaxed"
  dangerouslySetInnerHTML={{ __html: t('about.samson.p1') }}
/>
                <p className="text-lg text-emerald-800/70 dark:text-emerald-100/60 leading-relaxed">
                  {t('about.samson.p2')}
                </p>
              </div>
              
              <div className="lg:w-1/3 flex flex-col items-center">
                <div className="text-center bg-white dark:bg-emerald-950/50 p-6 rounded-2xl shadow-lg">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons text-white text-3xl">verified</span>
                  </div>
                  <p className="font-bold text-lg mb-1">{t('about.cert.title')}</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-300">{t('specs.cert.inst')}</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-300">{t('specs.cert.loc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              <span className="material-icons">home</span>
              {t('about.cta')}
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;