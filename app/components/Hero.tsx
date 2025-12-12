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

  const automationNodes = [
    { id: 1, label: 'Lead Capture', x: 20, y: 30, icon: '📨', color: 'from-blue-500 to-cyan-500' },
    { id: 2, label: 'AI Qualification', x: 50, y: 20, icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 3, label: 'Auto-Response', x: 80, y: 30, icon: '💬', color: 'from-green-500 to-emerald-500' },
    { id: 4, label: 'Calendar Booking', x: 65, y: 60, icon: '📅', color: 'from-orange-500 to-red-500' },
    { id: 5, label: 'CRM Sync', x: 35, y: 70, icon: '🔄', color: 'from-indigo-500 to-blue-500' },
  ];

  const [activeNode, setActiveNode] = useState(0);
  const [flowingData, setFlowingData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % automationNodes.length);
      
      const from = automationNodes[activeNode];
      const to = automationNodes[(activeNode + 1) % automationNodes.length];
      
      setFlowingData(prev => [...prev, {
        id: Date.now(),
        fromX: from.x,
        fromY: from.y,
        toX: to.x,
        toY: to.y,
        progress: 0,
      }]);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeNode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowingData(prev => 
        prev
          .map(d => ({ ...d, progress: d.progress + 2 }))
          .filter(d => d.progress <= 100)
      );
    }, 20);
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

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10">Watch the Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
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

          {/* Right side - Automation visualization */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl backdrop-blur-3xl" />
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              {automationNodes.map((from, i) => {
                const to = automationNodes[(i + 1) % automationNodes.length];
                return (
                  <line
                    key={i}
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke="rgba(139, 92, 246, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                );
              })}
              
              {/* Flowing data animation */}
              {flowingData.map(data => {
                const x = data.fromX + (data.toX - data.fromX) * (data.progress / 100);
                const y = data.fromY + (data.toY - data.fromY) * (data.progress / 100);
                return (
                  <circle
                    key={data.id}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="4"
                    fill="url(#pulse-gradient)"
                    opacity={1 - data.progress / 100}
                  >
                    <animate
                      attributeName="r"
                      values="4;6;4"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })}
              
              <defs>
                <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Automation nodes */}
            {automationNodes.map((node, i) => (
              <div
                key={node.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  activeNode === i ? 'scale-110' : 'scale-100'
                }`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div className={`relative group cursor-pointer`}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${node.color} flex items-center justify-center text-3xl shadow-2xl ${
                    activeNode === i ? 'shadow-purple-500/50 ring-4 ring-purple-400/50' : ''
                  }`}>
                    {node.icon}
                  </div>
                  
                  {activeNode === i && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 animate-ping" />
                  )}
                  
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10">
                      <span className="text-xs font-medium text-white">{node.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Glowing orb effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
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
