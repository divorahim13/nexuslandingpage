import React, { useLayoutEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Aegis Banking Core',
    category: 'FinTech Security',
    image: 'https://picsum.photos/seed/nexus1/800/600', // Placeholder
    description: 'A fortress-level ledger system for high-frequency trading firms. Zero-latency transaction signing with quantum-resistant encryption protocols.',
    tags: ['Rust', 'Wasm', 'Hyperledger', 'HSM'],
    link: '#',
  },
  {
    id: 2,
    title: 'Neural Net Logistics',
    category: 'AI Orchestration',
    image: 'https://picsum.photos/seed/nexus2/800/600', // Placeholder
    description: 'Autonomous supply chain routing utilizing predictive swarm intelligence to optimize global shipping lanes in real-time.',
    tags: ['Python', 'TensorFlow', 'Kubernetes', 'Go'],
    link: '#',
  },
  {
    id: 3,
    title: 'URBANSPACE REAL ESTATE',
    category: 'FULL STACK_SYSTEMS',
    // Changed to a reliable Unsplash URL for Architecture/Real Estate
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', 
    description: 'A high-fidelity property listing matrix with advanced filtration logic, geospatial map integration, and a secure CMS module for agents to upload asset specifications.',
    tags: ['React', 'Node.js', 'Mapbox GL', 'MongoDB'],
    link: '#',
  }
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" ref={containerRef} className="py-32 bg-background border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-acid font-mono text-xs tracking-widest block mb-4">[003_CASE_FILES]</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-6">Executed Contracts</h2>
          <div className="w-24 h-1 bg-acid"></div>
        </div>

        {/* Added items-stretch to grid to ensure all cards are same height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            // Added flex flex-col h-full to make card fill height
            <div key={project.id} className="project-card group relative bg-surface border border-white/10 overflow-hidden hover:border-acid/50 transition-colors duration-500 flex flex-col h-full">
              {/* Image Container with Glitch Effect on Hover - flex-shrink-0 to prevent shrinking */}
              <div className="relative h-64 overflow-hidden bg-gray-900 flex-shrink-0">
                <div className="absolute inset-0 bg-acid/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback if image fails
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x600/111/333?text=RESTRICTED_ASSET_${project.id}`;
                  }}
                />
                {/* Tech overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent z-20">
                   <div className="flex flex-wrap gap-2">
                     {project.tags.map(tag => (
                       <span key={tag} className="text-[10px] font-mono bg-black/50 border border-white/20 text-acid px-2 py-1 backdrop-blur-sm">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              </div>

              {/* Content - flex-grow ensures this section fills remaining space */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-gray-500 block mb-1">{project.category.toUpperCase()}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-acid transition-colors">{project.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-gray-600">v.{project.id}.0</span>
                </div>
                
                {/* flex-grow on paragraph pushes the button down */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <a href={project.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-acid transition-colors group/link">
                    <span>View Protocol</span>
                    <svg className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
