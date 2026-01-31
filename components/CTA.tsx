import React, { useRef } from 'react';

const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Inline noise SVG for production stability
  const noiseBg = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")";

  return (
    <section ref={containerRef} className="relative py-48 bg-acid flex flex-col items-center justify-center overflow-hidden cursor-pointer group transition-colors hover:bg-white">
      {/* Background Noise on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
        style={{ backgroundImage: noiseBg }}
      ></div>

      <div className="relative z-10 text-center px-6 mix-blend-multiply">
        <p className="font-mono text-sm uppercase tracking-[0.3em] mb-4 text-black font-bold">Initiate Protocol</p>
        <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-black uppercase scale-100 group-hover:scale-105 transition-transform duration-500 ease-out">
          LET'S<br/>BUILD
        </h2>
        
        <div className="mt-12">
            <button className="px-8 py-4 bg-black text-white font-mono uppercase text-sm hover:bg-transparent hover:text-black border border-black transition-all">
                Contact_Sales.exe
            </button>
        </div>
      </div>
      
      {/* Marquee at bottom */}
      <div className="absolute bottom-4 left-0 w-full overflow-hidden">
        <div className="text-black font-mono text-[10px] uppercase whitespace-nowrap flex justify-between px-4">
          <span>Available for New Contracts [Q4 2024]</span>
          <span>Secure Connection</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;