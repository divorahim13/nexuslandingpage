import React, { useLayoutEffect, useRef } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  
  // Inline noise SVG
  const noiseBg = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E\")";

  useLayoutEffect(() => {
    // Lock scroll during boot
    document.body.style.overflow = 'hidden';
    
    const gsap = window.gsap;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Unlock scroll and unmount
          document.body.style.overflow = '';
          onComplete();
        }
      });

      const counter = { val: 0 };
      
      tl.to(counter, {
        val: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.innerText = Math.floor(counter.val).toString().padStart(3, '0') + '%';
          }
        }
      })
      .to(barRef.current, {
        scaleX: 1,
        duration: 2.2,
        ease: "power2.inOut"
      }, "<")
      .to(".preloader-msg", {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 0.5
      }, "-=1.8") // Overlap slightly with progress
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.2
      });

    }, containerRef);

    return () => {
        ctx.revert();
        document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white">
      <div className="w-80 md:w-96 relative z-10">
        <div className="flex justify-between items-end mb-2 font-mono text-xs text-acid">
          <span className="animate-pulse">SYSTEM_BOOT_SEQUENCE</span>
          <span ref={percentRef}>000%</span>
        </div>
        
        <div className="w-full h-1 bg-gray-900 overflow-hidden mb-6">
          <div ref={barRef} className="h-full bg-acid w-full origin-left scale-x-0"></div>
        </div>

        <div className="flex flex-col gap-1 font-mono text-[10px] text-gray-500 uppercase h-16">
           <span className="preloader-msg opacity-0 translate-y-2 block">Loading core modules...</span>
           <span className="preloader-msg opacity-0 translate-y-2 block">Establishing secure uplink...</span>
           <span className="preloader-msg opacity-0 translate-y-2 block text-acid">Access Granted.</span>
        </div>
      </div>
      
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: noiseBg }}
      ></div>
    </div>
  );
};

export default Preloader;