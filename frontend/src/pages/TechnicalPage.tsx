import React from 'react';

import TechnicalSpecs from '../components/TechnicalSpecs';
import Footer from '../components/Footer';

const TechnicalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900 dark:text-white">
              Technical Specifications
            </h1>
            <p className="text-xl text-emerald-800/70 dark:text-emerald-100/60 max-w-3xl mx-auto">
              Detailed analysis of our vermicompost parameters, quality standards, and scientific certification.
            </p>
          </div>
          <TechnicalSpecs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechnicalPage;