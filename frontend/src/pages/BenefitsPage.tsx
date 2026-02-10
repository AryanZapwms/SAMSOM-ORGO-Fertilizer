import React from 'react';
import Navbar from '../components/Navbar';
import DetailedBenefits from '../components/DetailedBenefits';
import Footer from '../components/Footer';

const BenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
     
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-900 dark:text-white">
              Complete Benefits of Vermicompost
            </h1>
            <p className="text-xl text-emerald-800/70 dark:text-emerald-100/60 max-w-3xl mx-auto">
              Discover how our organic vermicompost transforms your soil and boosts plant health beyond conventional fertilizers.
            </p>
          </div>
          <DetailedBenefits />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BenefitsPage;