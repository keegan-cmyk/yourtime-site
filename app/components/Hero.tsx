'use client';
import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.speedX + 100) % 100,
        y: (p.y + p.speedY + 100) % 100,
      })));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 50%)`,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
        {/* Bible Verse */}
        <div className="mb-16 text-center">
          <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <p className="text-lg text-gray-300 italic mb-2">
              "Whatever you do, work at it with all your heart, as working for the Lord"
            </p>
            <p className="text-sm text-purple-400 font-medium">— Colossians 3:23</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 z-10">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-purple-300 text-sm font-medium">AI Workforce Platform</span>
              </div>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient">
                While You Sleep,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Your Business Grows
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              An intelligent AI workforce that qualifies leads, books appointments, follows up with customers, and executes workflows—operating 24/7 while you focus on what matters.
            </p>
            
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all">
                Book Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Always Active</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">8K+</div>
                <div className="text-sm text-gray-400">Automations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">∞</div>
                <div className="text-sm text-gray-400">Scalability</div>
              </div>
            </div>
          </div>

          {/* Right side - AI Image */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            
            {/* Image container */}
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/ai-hero.png" 
                alt="AI Workforce Visualization" 
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay for brand consistency */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/30" />
              
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Glowing orb effect behind image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse -z-10" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
