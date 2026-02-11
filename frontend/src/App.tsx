import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext'; // Import LanguageProvider
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import Testimonial from './components/Testimonial';
import TargetAudience from './components/TargetAudience';
import TechnicalSpecs from './components/TechnicalSpecs';

import Footer from './components/Footer';
import BenefitsPage from './pages/BenefitsPage';
import TechnicalPage from './pages/TechnicalPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FloatingButtons from './components/FloatingButtons';
import GalleryPage from './pages/GallaryPage';

function HomePage() {
  return (
    <>
      <Hero />
      <TargetAudience />
      <Benefits />
      <ProductShowcase />
      <TechnicalSpecs />
      <Testimonial />
      {/* <ContactForm /> */}
      <Footer /> {/* Footer moved here for homepage */}
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/specifications" element={<TechnicalPage />} />
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
          
          <FloatingButtons 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode} 
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;