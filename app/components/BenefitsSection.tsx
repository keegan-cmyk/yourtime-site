'use client';

import React, { useState, useEffect, useRef } from 'react';

const BenefitsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const benefits = [
    {
      id: 1,
      icon: '⏰',
      title: 'Reclaim Your Time',
      description:
        'AI handles follow-ups, scheduling, intake, reminders, and admin work so your day is no longer controlled by notifications and busywork.',
    },
    {
      id: 2,
      icon: '📈',
      title: 'Scale Without Hiring',
      description:
        'Handle more leads, more conversations, and more demand without adding staff, training costs, or management overhead.',
    },
    {
      id: 3,
      icon: '💬',
      title: 'Instant Lead Response — 24/7',
      description:
        'Every inbound lead gets an immediate, professional response across SMS, web chat, social, or email — without sounding robotic.',
    },
    {
      id: 4,
      icon: '🧲',
      title: 'Automated Lead Generation',
      description:
        'We build systems that scrape and capture leads from social media, websites, directories, and forms — then route them instantly into your workflows.',
    },
    {
      id: 5,
      icon: '📣',
      title: 'Ad Creation + Auto Posting',
      description:
        'AI-assisted ad creation, captions, creatives, and scheduled posting across platforms — all tied directly into your lead pipeline.',
    },
    {
      id: 6,
      icon: '⚙️',
      title: 'Custom Automation, Built Around You',
      description:
        'If it can be automated, we can build it — from internal workflows to full customer journeys. No templates. No one-size-fits-all systems.',
    },
  ];

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-28 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-black to-blue-900/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-sm text-gray-400">
              What Actually Changes
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Here’s What AI Changes in Your Business
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            This isn’t about chasing tools or trends. It’s about building
            intelligent systems that remove friction, capture demand, and
            operate for you — automatically.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="group h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="text-5xl mb-4">{benefit.icon}</div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest CTA */}
        <div className="text-center py-16 px-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-4">
            If It Can Be Automated, We Can Build It
          </h3>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            From lead generation and ad workflows to internal operations and
            follow-ups — we design AI systems around how your business actually
            runs.
          </p>

          <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Talk Through Your Use Case
          </button>

          <p className="text-sm text-gray-500 mt-4">
            No pressure. No hype. Just practical automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
