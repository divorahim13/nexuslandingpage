import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const fontSize = 14;
    // Ensure we have enough columns even after resize
    let columns = Math.ceil(width / fontSize);
    let drops: number[] = new Array(columns).fill(1);

    const chars = "0123456789"; 

    const draw = () => {
      // Re-calculate columns if width changed significantly to avoid gaps
      if (Math.ceil(width / fontSize) !== columns) {
         columns = Math.ceil(width / fontSize);
         const newDrops = new Array(columns).fill(1);
         // Preserve existing drops positions where possible
         for (let i = 0; i < Math.min(drops.length, newDrops.length); i++) {
             newDrops[i] = drops[i];
         }
         drops = newDrops;
      }

      // Trail effect: translucent black rectangle
      ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#D4FF00"; // Acid Green
      ctx.font = `${fontSize}px 'Space Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Randomize opacity slightly for depth
        const alpha = Math.random() * 0.5 + 0.25; 
        ctx.globalAlpha = alpha;
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top randomly after it clears screen
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
      ctx.globalAlpha = 1.0;
    };

    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixBackground;