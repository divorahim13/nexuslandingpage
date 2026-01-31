import React, { useState, useRef, useLayoutEffect } from 'react';

const services = [
  {
    id: "01",
    title: "Hyper-Scale Infrastructure",
    desc: "Bare-metal orchestration designed for massive throughput. We bypass virtualization overhead to deliver raw compute power directly to your application logic.",
    details: "Automated scaling groups, custom kernel optimization, and edge-cached delivery networks.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    tags: ["Kubernetes", "Edge Computing", "Rust"]
  },
  {
    id: "02",
    title: "Cognitive Security",
    desc: "Predictive threat modeling using generative adversarial networks. Our systems don't just block attacks; they study them to immunize the entire network in real-time.",
    details: "Real-time packet inspection, anomaly detection AI, and zero-trust architecture enforcement.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    tags: ["Zero Trust", "AI Sentinel", "Encryption"]
  },
  {
    id: "03",
    title: "Synthetic Intelligence",
    desc: "Custom LLM deployment and fine-tuning on your proprietary data. Create autonomous agents that handle 80% of your operational workflow without human intervention.",
    details: "RAG pipelines, vector database integration, and autonomous agent swarms.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tags: ["LLM Ops", "Vector DB", "Automation"]
  },
  {
    id: "04",
    title: "Quantum-Safe Crypto",
    desc: "Future-proofing your data assets against Q-Day. Implementation of lattice-based cryptography standards to ensure your secrets remain secret in the post-silicon era.",
    details: "NIST-approved algorithms, key encapsulation mechanisms, and hybrid signature schemes.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    tags: ["Post-Quantum", "Lattice", "Security"]
  }
];

const Services: React.FC = () => {
  const [active, setActive] = useState<string | null>("01");
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Sequential Scaling Animation
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        scale: 0.8, // Start smaller for more dramatic scale-up
        duration: 0.8,
        stagger: 0.2, // Increased stagger for clearer sequential effect
        ease: "back.out(1.2)" // Slight bounce for modern feel
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="modules" ref={containerRef} className="py-32 bg-background relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-24 border-b border-white/10 pb-8">
          <div>
            <span className="text-acid font-mono text-xs tracking-widest block mb-2">[002_CAPABILITIES]</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">System Modules</h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-gray-500">
            SELECT MODULE TO EXPAND_
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((s) => (
            <div 
              key={s.id} 
              className={`service-card group border-b border-white/10 last:border-0 transition-colors cursor-pointer relative overflow-hidden ${active === s.id ? 'bg-white/5' : 'hover:bg-white/5'}`}
              onMouseEnter={() => setActive(s.id)}
              onClick={() => setActive(active === s.id ? null : s.id)}
            >
              {/* Active Indicator Line */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-acid transition-all duration-300 ${active === s.id ? 'opacity-100' : 'opacity-0'}`}></div>

              <div className="py-8 md:py-12 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8 z-10 relative">
                <div className="flex items-start md:items-center gap-8 md:gap-16">
                  <span className={`font-mono text-xl transition-colors ${active === s.id ? 'text-acid' : 'text-gray-600'}`}>
                    /{s.id}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className={`transition-opacity duration-300 ${active === s.id ? 'text-white' : 'text-gray-600'}`}>
                      {s.icon}
                    </div>
                    <h3 className={`text-xl md:text-4xl font-bold uppercase transition-all ${active === s.id ? 'text-white' : 'text-gray-400'}`}>
                      {s.title}
                    </h3>
                  </div>
                </div>
                
                <div className="md:hidden">
                   <p className="text-gray-500 text-sm line-clamp-2">{s.desc}</p>
                </div>
              </div>
              
              {/* Desktop Expand Content */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-black/20 ${active === s.id ? 'max-h-[500px] opacity-100 pb-12' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 md:pl-48 pr-8 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">Description</h4>
                    <p className="text-lg text-gray-300 font-light mb-6">
                      {s.desc}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">Technical Specs</h4>
                    <p className="text-sm text-gray-400 font-mono mb-6">
                      {s.details}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {s.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 border border-white/20 rounded-none text-[10px] font-mono text-acid uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;