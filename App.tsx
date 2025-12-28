import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Villain from './components/Villain';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Authority from './components/Authority';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  // Smooth scroll behavior for the whole app
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-dark-graphite min-h-screen text-off-white overflow-x-hidden selection:bg-emerald-900 selection:text-white">
      <main>
        <Hero />
        <Villain />
        <Services />
        <BeforeAfter />
        <Authority />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;