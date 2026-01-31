import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import MatrixBackground from './components/MatrixBackground';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-acid selection:text-black relative">
      {/* Matrix Background - Global */}
      <MatrixBackground />

      {/* Boot Sequence Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* Scanline Effect Global */}
      <div className="scanline"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="text-lg font-black italic tracking-tighter font-display flex items-center gap-2">
            <span className="w-3 h-3 bg-acid block"></span>
            NEXUS_
        </div>
        <div className="hidden md:flex gap-6 text-xs font-mono text-gray-400">
           <a href="#intel" className="hover:text-acid transition-colors">[01] INTEL</a>
           <a href="#modules" className="hover:text-acid transition-colors">[02] MODULES</a>
           <a href="#works" className="hover:text-acid transition-colors">[03] WORKS</a>
           <a href="#logs" className="hover:text-acid transition-colors">[04] LOGS</a>
        </div>
        <button className="px-4 py-2 bg-white/5 border border-white/20 text-white text-[10px] font-mono uppercase hover:bg-white hover:text-black transition-colors">
          Initialize
        </button>
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
