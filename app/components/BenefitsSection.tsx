import React, { useState, useEffect, useRef } from 'react';

const BenefitsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [stats, setStats] = useState({ hours: 0, revenue: 0, clients: 0 });
  const sectionRef = useRef(null);

  const benefits = [
    {
      id: 1,
      icon: '⏰',
      title: 'Get Your Evenings Back',
      description: 'Stop working until midnight on follow-ups. Our AI handles the repetitive stuff so you can have dinner with your family, hit the gym, or actually relax for once.',
      realStory: 'Sarah, a real estate agent, now leaves work at 5 PM instead of 9 PM. She doesn\'t miss her kids\' bedtime anymore.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: '📈',
      title: 'Grow Without the Growing Pains',
      description: 'Remember when doubling your leads meant scrambling to hire, train, and hope they work out? Not anymore. Scale instantly without the stress.',
      realStory: 'Marcus handles 3x more clients than last year with the same team size. No hiring headaches, no training costs.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: '💰',
      title: 'Stop Losing Money to Slow Responses',
      description: 'That lead who texted at 11 PM? They hired your competitor who responded in 2 minutes. Never lose a deal to response time again.',
      realStory: 'David\'s conversion rate jumped 40% just from responding instantly, 24/7. Same service, faster replies.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      icon: '🎯',
      title: 'Actually Know What\'s Happening',
      description: 'No more wondering "did we follow up with that person?" or "where did this lead come from?" Everything is tracked, visible, and clear.',
      realStory: 'Jessica finally has clarity. She knows exactly which marketing works, which leads are hot, and where to focus.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      icon: '😌',
      title: 'Sleep Without Checking Your Phone',
      description: 'Stop waking up at 2 AM wondering if you missed something important. The AI doesn\'t sleep, so you actually can.',
      realStory: 'Tom turned off phone notifications for the first time in 5 years. Nothing fell apart. Everything got better.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      id: 6,
      icon: '🚀',
      title: 'Build the Business You Actually Want',
      description: 'You started this to have freedom, not to be a slave to your inbox. Get back to the part of your business you love.',
      realStory: 'Lisa spends her mornings on strategy and creative work now instead of email. Her business grew, her stress didn\'t.',
      gradient: 'from-pink-500 to-purple-500',
    },
  ];

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 100);
            });
            animateStats();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const targets = { hours: 127, revenue: 847, clients: 450 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    let current = { hours: 0, revenue: 0, clients: 0 };

    const timer = setInterval(() => {
      current = {
        hours: Math.min(current.hours + targets.hours / steps, targets.hours),
        revenue: Math.min(current.revenue + targets.revenue / steps, targets.revenue),
        clients: Math.min(current.clients + targets.clients / steps, targets.clients),
      };
      setStats(current);
      
      if (current.hours >= targets.hours) clearInterval(timer);
    }, increment);
  };

  return (
    <div ref={sectionRef} className="relative bg-black py-24 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-black to-blue-900/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-sm text-gray-400">What Actually Changes</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Here's What Happens to Your Life
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            We could talk about "productivity gains" and "operational efficiency." But let's be honest about what this really means for you as a human being.
          </p>
        </div>

        {/* Real Stats */}
        <div className="grid grid-cols-3 gap-8 mb-20 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {Math.floor(stats.hours)}
            </div>
            <div className="text-sm text-gray-400">hours back per month</div>
            <div className="text-xs text-gray-500 mt-1">(that's 3 full work weeks)</div>
          </div>
          
          <div className="text-center border-l border-r border-white/10">
            <div className="text-4xl font-bold text-white mb-2">
              {Math.floor(stats.clients)}+
            </div>
            <div className="text-sm text-gray-400">businesses transformed</div>
            <div className="text-xs text-gray-500 mt-1">(and counting daily)</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">
              ${Math.floor(stats.revenue)}K
            </div>
            <div className="text-sm text-gray-400">average annual impact</div>
            <div className="text-xs text-gray-500 mt-1">(real money, real businesses)</div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`transition-all duration-700 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="group h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all">
                
                {/* Icon */}
                <div className="text-5xl mb-4">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  {benefit.description}
                </p>

                {/* Real Story */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💬</div>
                    <p className="text-sm text-gray-400 italic leading-relaxed">
                      "{benefit.realStory}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest CTA */}
        <div className="text-center py-16 px-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-4">
            You Didn't Start a Business to Be Chained to Your Phone
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            You wanted freedom, impact, and a life you actually enjoy. Let's get you back to that. No fluff, no false promises—just real tools that give you your time back.
          </p>
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Let's Talk About Your Situation
          </button>
          <p className="text-sm text-gray-500 mt-4">
            30-minute call, zero pressure, actual solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
