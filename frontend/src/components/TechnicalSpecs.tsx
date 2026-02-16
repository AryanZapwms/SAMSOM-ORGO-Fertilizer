import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TechnicalSpecs: React.FC = () => {
  const { t } = useLanguage();

  const parameters = [
    {
      category: t('specs.physical'),
      icon: "straighten",
      items: [
        { name: "Moisture Content", value: "Optimal levels maintained" },
        { name: "Bulk Density", value: "Light & porous" },
        { name: "Porosity", value: "High aeration capacity" },
        { name: "Texture", value: "Fine, crumbly structure" },
        { name: "Color", value: "Dark brown to black" }
      ]
    },
    {
      category: t('specs.chemical'),
      icon: "science",
      items: [
        { name: "pH Level", value: "6.5 - 7.5 (Neutral)" },
        { name: "Organic Carbon", value: "12% - 18%" },
        { name: "Nitrogen (N)", value: "1.0% - 2.0%" },
        { name: "Phosphorus (P)", value: "0.5% - 1.5%" },
        { name: "Potassium (K)", value: "0.5% - 1.2%" },
        { name: "C:N Ratio", value: "15:1 to 20:1" }
      ]
    },
    {
      category: t('specs.biological'),
      icon: "biotech",
      items: [
        { name: "Beneficial Microbes", value: "High population" },
        { name: "Enzymes", value: "Nutrient mineralization" },
        { name: "Growth Regulators", value: "Auxins, Cytokinins" }
      ]
    }
  ];

  const micronutrients = [
    "Calcium (Ca)", "Magnesium (Mg)", "Sulphur (S)", 
    "Iron (Fe)", "Zinc (Zn)", "Copper (Cu)", 
    "Manganese (Mn)", "Boron (B)"
  ];

  return (
    <section id="specifications" className="py-24 bg-white dark:bg-emerald-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-emerald-900 dark:text-white">
            {t('specs.title')}
          </h2>
          <p className="text-lg text-emerald-800/60 dark:text-emerald-100/40 max-w-3xl mx-auto">
            {t('specs.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {parameters.map((param, index) => (
            <div 
              key={index}
              className="bg-background-light dark:bg-background-dark/40 p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-icons text-primary group-hover:text-white text-2xl">
                    {param.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 dark:text-white">
                  {param.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {param.items.map((item, idx) => (
                  <div key={idx} className="pb-3 border-b border-emerald-100 dark:border-emerald-800/30 last:border-0">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-emerald-800 dark:text-emerald-200">
                        {item.name}
                      </span>
                      <span className="font-bold text-primary">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-white">
              {t('specs.micro.title')}
            </h3>
            <p className="text-emerald-800/60 dark:text-emerald-100/40">
              {t('specs.micro.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {micronutrients.map((nutrient, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-emerald-950/50 p-4 rounded-xl text-center hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              >
                <span className="font-semibold text-emerald-900 dark:text-white">
                  {nutrient}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Section */}
        <div className="mt-16 pt-16 border-t border-emerald-200 dark:border-emerald-800/30 dark:text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-white">
                {t('specs.cert.title')}
              </h3>
              <p className="text-emerald-800/60 dark:text-emerald-100/40 mb-6 max-w-2xl">
                {t('specs.cert.desc')}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-primary">verified</span>
                  <span className="font-semibold">{t('specs.cert1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-primary">verified</span>
                  <span className="font-semibold">{t('specs.cert2')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-primary">verified</span>
                  <span className="font-semibold">{t('specs.cert3')}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 p-6 border-4 border-primary/20">
                <span className="material-icons text-5xl text-primary">verified_user</span>
              </div>
              <div>
                <p className="font-bold text-lg">{t('specs.cert.organic')}</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-300">{t('specs.cert.inst')}</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-300">{t('specs.cert.loc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;