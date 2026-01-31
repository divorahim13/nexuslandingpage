import React, { useLayoutEffect, useRef } from 'react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Pinning Logic (Desktop Only)
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: ".about-pin",
            scrub: true
          });
        }
      });

      // 2. Entrance Animation: Slide in from opposite sides
      // Left Side (Title/Visuals)
      gsap.from(".about-left-anim", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1, // Added stagger for the new element
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });

      // Right Side (Intro Text)
      gsap.from(".about-right-anim", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });

      // 3. Staggered Reveal for scrolling content in right column
      const items = gsap.utils.toArray(".reveal-item");
      items.forEach((item: any) => {
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const techStack = [
    { name: 'RUST', type: 'CORE' },
    { name: 'WEBASSEMBLY', type: 'COMPILER' },
    { name: 'THREE.JS', type: 'RENDERER' },
    { name: 'KUBERNETES', type: 'ORCHESTRATION' },
    { name: 'TAILWIND', type: 'STYLE_ENGINE' },
    { name: 'GSAP', type: 'MOTION_LIB' },
    { name: 'NEXT.JS', type: 'FRAMEWORK' },
    { name: 'POSTGRES', type: 'DATA_STORE' }
  ];

  return (
    <section id="intel" ref={containerRef} className="relative min-h-screen md:min-h-[180vh] bg-background border-b border-white/10 overflow-hidden">
      <div className="h-full flex flex-col md:flex-row">
        
        {/* Left Column - Pinned on Desktop - Slides from Left */}
        <div className="about-pin w-full md:w-1/3 md:h-screen p-8 md:p-12 border-r border-white/10 flex flex-col justify-between bg-background z-20 relative">
          <div className="about-left-anim">
            <span className="text-acid font-mono text-xs tracking-widest block mb-4">[001_MANIFESTO]</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
              THE<br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>ANOMALY</span><br/>
              IN THE<br/>
              CODE
            </h2>
          </div>

          {/* NEW SECTION: System Monitor Widget to fill space */}
          <div className="hidden md:flex flex-col justify-center flex-grow about-left-anim py-12 opacity-80">
            <div className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm relative overflow-hidden group hover:border-acid/30 transition-colors duration-500">
               <div className="flex justify-between items-center mb-6 font-mono text-[10px] tracking-widest text-gray-400">
                  <span>SYS_MONITOR_V.1.0</span>
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-acid rounded-full animate-pulse"></span>
                  </div>
               </div>
               
               <div className="space-y-4 font-mono text-xs">
                  <div>
                     <div className="flex justify-between mb-1">
                        <span className="text-gray-500">CPU_THROUGHPUT</span>
                        <span className="text-acid">12.4%</span>
                     </div>
                     <div className="w-full bg-gray-800 h-0.5">
                        <div className="bg-acid h-full w-[12%] shadow-[0_0_5px_#D4FF00]"></div>
                     </div>
                  </div>
                  
                  <div>
                     <div className="flex justify-between mb-1">
                        <span className="text-gray-500">MEMORY_ALLOC</span>
                        <span className="text-acid">48.2%</span>
                     </div>
                     <div className="w-full bg-gray-800 h-0.5">
                        <div className="bg-acid h-full w-[48%] shadow-[0_0_5px_#D4FF00]"></div>
                     </div>
                  </div>

                  <div>
                     <div className="flex justify-between mb-1">
                        <span className="text-gray-500">NETWORK_UP</span>
                        <span className="text-acid">99.9%</span>
                     </div>
                     <div className="w-full bg-gray-800 h-0.5">
                        <div className="bg-acid h-full w-[99%] shadow-[0_0_5px_#D4FF00]"></div>
                     </div>
                  </div>
               </div>

               <div className="mt-8 pt-4 border-t border-white/10 text-[10px] font-mono text-gray-500 leading-relaxed uppercase">
                  <span className="text-acid">&gt;</span> Optimizing routes...<br/>
                  <span className="text-acid">&gt;</span> Encrypting packets...<br/>
                  <span className="text-acid">&gt;</span> Uplink established.
               </div>
            </div>
          </div>
          
          <div className="hidden md:block about-left-anim">
            <div className="w-full h-px bg-white/10 mb-4"></div>
            <div className="flex justify-between font-mono text-xs text-gray-500">
              <span>EST. 2024</span>
              <span>SECURE_SECTOR_7G</span>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="content-col w-full md:w-2/3 bg-surface">
          <div className="p-8 md:p-24 space-y-20 max-w-4xl mx-auto">
            
            {/* Intro Text - Slides from Right */}
            <div className="about-right-anim">
              <div className="border-l-2 border-acid pl-6 md:pl-8 py-2">
                <p className="text-lg md:text-2xl leading-relaxed font-mono text-gray-300 mb-8">
                  The modern web is a graveyard of bloat. Tracking pixels, heavy frameworks, and inefficient renders. 
                  <span className="block mt-4 text-acid font-bold text-xs bg-white/5 w-fit px-3 py-1">ERROR: BLOAT_DETECTED</span>
                </p>
                <p className="text-lg md:text-2xl leading-relaxed font-mono text-gray-500">
                  Nexus is the purge. We architect high-performance digital fortresses that prioritize raw speed and impregnable security over decorative fluff.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="reveal-item grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10">
              <div>
                <span className="block text-4xl font-bold text-white mb-2 font-display">0.02s</span>
                <span className="font-mono text-xs text-gray-500">LATENCY</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-2 font-display">100%</span>
                <span className="font-mono text-xs text-gray-500">ENCRYPTION</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-2 font-display">50+</span>
                <span className="font-mono text-xs text-gray-500">ENTERPRISE NODES</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-2 font-display">24/7</span>
                <span className="font-mono text-xs text-gray-500">OVERSIGHT</span>
              </div>
            </div>

            {/* Core Protocols List */}
            <div className="reveal-item">
              <h3 className="text-white font-mono text-sm uppercase tracking-widest mb-8 border-l-2 border-acid pl-4">Core Protocols</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <span className="font-mono text-acid opacity-50 group-hover:opacity-100">01</span>
                  <div>
                    <strong className="block text-white text-lg mb-1 group-hover:translate-x-2 transition-transform">Eliminate Redundancy</strong>
                    <p className="text-gray-500 text-sm">Every line of code must justify its existence. If it doesn't compute, it's deleted.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="font-mono text-acid opacity-50 group-hover:opacity-100">02</span>
                  <div>
                    <strong className="block text-white text-lg mb-1 group-hover:translate-x-2 transition-transform">User Sovereignty</strong>
                    <p className="text-gray-500 text-sm">We build interfaces that empower the user, not entrap them in dark patterns.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="font-mono text-acid opacity-50 group-hover:opacity-100">03</span>
                  <div>
                    <strong className="block text-white text-lg mb-1 group-hover:translate-x-2 transition-transform">Radical Transparency</strong>
                    <p className="text-gray-500 text-sm">Open source foundations. Verified security audits. No black boxes.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="reveal-item">
              <div className="flex items-center justify-between mb-8 border-l-2 border-acid pl-4">
                <h3 className="text-white font-mono text-sm uppercase tracking-widest">Infrastructure Stack</h3>
                <span className="text-[10px] font-mono text-gray-600 hidden md:inline-block">SYS_CONFIG_V3.1</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/10">
                {techStack.map((tech, index) => (
                  <div 
                    key={tech.name} 
                    className="group relative border-r border-b border-white/10 p-4 hover:bg-white/5 transition-colors cursor-crosshair min-h-[100px] flex flex-col justify-between"
                  >
                    {/* Hover Corner */}
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-acid opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] text-gray-600 font-mono group-hover:text-acid transition-colors">
                        LIB_0{index + 1}
                      </span>
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full group-hover:bg-acid transition-colors"></div>
                    </div>
                    
                    <div>
                      <span className="block font-mono text-sm font-bold text-white mb-1">{tech.name}</span>
                      <span className="block text-[9px] text-gray-500 font-mono tracking-widest">{tech.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;