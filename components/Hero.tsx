import React, { useLayoutEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const gsap = window.gsap;
    const TextPlugin = window.TextPlugin;
    
    // Safety check for TextPlugin
    if (TextPlugin) {
      gsap.registerPlugin(TextPlugin);
    }
    
    const ctx = gsap.context(() => {
      // Glitch Reveal
      if (TextPlugin) {
        gsap.to(".scramble-text", {
          duration: 2.5,
          text: {
            value: "ARCHITECTING THE POST-DIGITAL ERA",
            delimiter: ""
          },
          ease: "none",
          delay: 0.5
        });
      } else {
        // Fallback if plugin fails to load
        gsap.to(".scramble-text", { opacity: 1, duration: 0.5, delay: 0.5 });
      }

      // Infinite Marquee
      gsap.to(".marquee-inner", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear"
      });

      // Staggered Lines
      gsap.from(".hero-line", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.15,
        duration: 1.4,
        ease: "power4.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-0 overflow-hidden border-b border-white/10"
    >
      {/* Grid Background - kept for texture, but transparent base */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-10 pointer-events-none"></div>
      
      {/* Top Meta Data */}
      <div className="px-6 md:px-12 flex justify-between items-start font-mono text-xs text-gray-500 uppercase tracking-widest z-10">
        <div>
          <p>Lat: 35.6895° N</p>
          <p>Lng: 139.6917° E</p>
        </div>
        <div className="text-right">
          <p>System Status: <span className="text-acid animate-pulse">OPTIMAL</span></p>
          <p>V.3.0.1_BETA</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-12 z-10">
        <div className="mb-8 overflow-hidden">
          <p className="scramble-text font-mono text-acid mb-4 text-sm md:text-base min-h-[1.5em]">INITIALIZING...</p>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter text-white mix-blend-difference mb-12">
          <div className="overflow-hidden"><span className="hero-line block">BEYOND</span></div>
          <div className="overflow-hidden"><span className="hero-line block text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>THE</span></div>
          <div className="overflow-hidden"><span className="hero-line block">ALGORITHM</span></div>
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-end justify-between max-w-6xl mt-12">
          <p className="text-gray-400 max-w-md font-mono text-sm leading-relaxed text-justify">
            [SYS_MSG]: Nexus provides high-frequency infrastructure for entities demanding absolute precision. We don't build websites; we construct digital fortresses.
          </p>
          
          <button className="group relative px-8 py-6 bg-acid text-black font-bold font-mono text-sm uppercase tracking-wider overflow-hidden hover:bg-white transition-colors">
            <span className="relative z-10 flex items-center gap-2">
              Start Simulation
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </button>
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="relative w-full border-t border-white/10 bg-surface py-4 overflow-hidden mt-20 z-10">
        <div className="marquee-inner whitespace-nowrap flex gap-8 font-mono text-xs text-gray-500 uppercase">
          {Array(4).fill(null).map((_, i) => (
             <span key={i} className="flex gap-8">
               <span>/// SYSTEM ONLINE</span>
               <span className="text-acid">/// READY FOR INPUT</span>
               <span>/// AWAITING COMMAND</span>
               <span className="text-white">/// NEXUS_CORE</span>
             </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;