'use client';

import React, { useState, useEffect, useRef } from 'react';

/* =========================
   TYPES
========================= */
type Metrics = {
  qualified?: number;
  booked?: number;
  responded?: number;
  conversion?: number;
  showRate?: number;
  value?: number;
  resolutionTime?: number;
  satisfaction?: number;
};

type Message = {
  time: string;
  actor: 'ai' | 'prospect' | 'customer';
  message: string;
  workflow?: {
    title: string;
    icon: string;
    color: string;
  };
};

type WorkflowEvent = {
  title: string;
  icon: string;
  color: string;
  timestamp: number;
};

/* =========================
   COMPONENT
========================= */
export default function FuturisticDemo() {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [metrics, setMetrics] = useState<Metrics>({});
  const [activeWorkflows, setActiveWorkflows] = useState<WorkflowEvent[]>([]);
  const [particles, setParticles] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /* =========================
     SCENARIOS
  ========================= */
  const scenarios = [
    {
      title: 'Lead Qualification',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      timeline: [
        {
          time: '00:00',
          actor: 'prospect',
          message: "I'm interested in learning more about your enterprise solutions.",
          workflow: { title: 'Lead Captured', icon: '📊', color: 'blue' },
        },
        {
          time: '00:02',
          actor: 'ai',
          message:
            'Thank you for your interest. To ensure I connect you with the right specialist, may I ask about your current team size and primary use case?',
          workflow: { title: 'AI Engagement Initiated', icon: '🤖', color: 'purple' },
        },
        {
          time: '00:45',
          actor: 'prospect',
          message: "We're a team of 50+ looking to automate our sales workflows.",
        },
        {
          time: '00:47',
          actor: 'ai',
          message:
            "Based on your requirements, you're an excellent fit for our Enterprise tier. Would you like to schedule a consultation?",
          workflow: { title: 'Lead Qualified', icon: '🔥', color: 'red' },
        },
        {
          time: '01:14',
          actor: 'ai',
          message:
            "I've scheduled a call for Thursday at 2 PM EST. Calendar invite sent.",
          workflow: { title: 'Meeting Scheduled', icon: '✅', color: 'green' },
        },
      ],
      outcome: { qualified: 1, conversion: 87, value: 15000 },
    },
    {
      title: 'Appointment Scheduling',
      icon: '📅',
      color: 'from-purple-500 to-pink-500',
      timeline: [
        {
          time: '00:00',
          actor: 'prospect',
          message: 'I need to book a product demonstration.',
          workflow: { title: 'Scheduling Request', icon: '📊', color: 'blue' },
        },
        {
          time: '00:31',
          actor: 'ai',
          message:
            'Confirmed. Wednesday, January 15 at 3:30 PM EST. Calendar invite sent.',
          workflow: { title: 'Appointment Confirmed', icon: '✅', color: 'green' },
        },
      ],
      outcome: { booked: 1, showRate: 94, satisfaction: 4.8 },
    },
    {
      title: 'Customer Support',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500',
      timeline: [
        {
          time: '00:00',
          actor: 'customer',
          message: "I'm having trouble with the Salesforce integration.",
          workflow: { title: 'Support Ticket Created', icon: '📊', color: 'blue' },
        },
        {
          time: '00:36',
          actor: 'ai',
          message:
            "Issue identified and resolved. Sync restored within minutes.",
          workflow: { title: 'Resolution Applied', icon: '🔧', color: 'orange' },
        },
      ],
      outcome: { responded: 1, resolutionTime: 4, satisfaction: 4.9 },
    },
  ];

  /* =========================
     PARTICLES
  ========================= */
  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     PLAY SCENARIO
  ========================= */
  const playScenario = () => {
    setIsPlaying(true);
    setMessages([]);
    setActiveWorkflows([]);
    setMetrics({});

    const scenario = scenarios[selectedScenario];

    scenario.timeline.forEach((step, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, step]);

        if (step.workflow) {
          setActiveWorkflows(prev => [
            ...prev,
            { ...step.workflow, timestamp: Date.now() },
          ]);
        }

        if (index === scenario.timeline.length - 1) {
          setTimeout(() => {
            setMetrics(scenario.outcome);
            setIsPlaying(false);
          }, 500);
        }
      }, index * 2000);
    });
  };

  useEffect(() => {
    playScenario();
  }, [selectedScenario]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="relative bg-black py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-6xl font-bold mb-12 text-center">
          Watch Intelligence In Motion
        </h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {scenarios.map((s, i) => (
            <button
              key={i}
              onClick={() => setSelectedScenario(i)}
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                selectedScenario === i
                  ? 'bg-purple-600'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {s.icon} {s.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-2xl h-[400px] overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className="mb-4">
                <div className="text-xs text-purple-400">{m.time}</div>
                <div className="text-sm">{m.message}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="space-y-4">
            {metrics.qualified !== undefined && (
              <div>Qualified: {metrics.qualified}</div>
            )}
            {metrics.booked !== undefined && (
              <div>Booked: {metrics.booked}</div>
            )}
            {metrics.responded !== undefined && (
              <div>Responded: {metrics.responded}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
