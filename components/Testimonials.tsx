import React, { useLayoutEffect, useRef } from 'react';

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Existing Card Animation
      gsap.to(".feed-item", {
        x: -20,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      });

      // 2. Parallax Background Animation
      // Move the background vertically as the user scrolls past the section
      gsap.fromTo(bgRef.current, 
        { y: "-10%" }, 
        {
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1 // Smooths the parallax effect
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="logs" ref={containerRef} className="relative py-24 bg-surface border-b border-white/10 overflow-hidden">
      {/* Parallax Background Layer */}
      <div 
        ref={bgRef}
        className="absolute left-0 top-[-20%] w-full h-[140%] opacity-[0.05] pointer-events-none z-0"
        style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <span className="text-acid font-mono text-xs tracking-widest block mb-12">[004_TRANSMISSIONS]</span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          
          <div className="feed-item opacity-0 bg-background p-12 hover:bg-white/5 transition-colors group flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-xs text-gray-500">INCOMING_SIGNAL_2042</span>
              </div>
              <span className="font-mono text-xs text-acid">VERIFIED</span>
            </div>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 flex-grow">
              "We decommissioned our entire IT department after integrating Nexus. The automation isn't just effective; it's terrifyingly efficient."
            </p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
              <div className="w-10 h-10 bg-gray-800 grayscale overflow-hidden">
                <img src="https://picsum.photos/100/100?random=50" alt="Avatar" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-sm">Marcus V.</p>
                <p className="font-mono text-xs text-gray-500">CTO, BLK_OPS DYNAMICS</p>
              </div>
            </div>
          </div>

          <div className="feed-item opacity-0 bg-background p-12 hover:bg-white/5 transition-colors group flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-xs text-gray-500">INCOMING_SIGNAL_2044</span>
              </div>
              <span className="font-mono text-xs text-acid">VERIFIED</span>
            </div>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 flex-grow">
              "Traditional agencies sell you a website. Nexus sells you digital dominance. Our conversion rates didn't grow; they mutated."
            </p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
              <div className="w-10 h-10 bg-gray-800 grayscale overflow-hidden">
                <img src="https://picsum.photos/100/100?random=51" alt="Avatar" />
              </div>
              <div>
                <p className="font-bold text-white uppercase text-sm">Sarah L.</p>
                <p className="font-mono text-xs text-gray-500">DIR, VECTOR SYSTEMS</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
