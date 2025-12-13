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
  actor: string; // intentionally relaxed for demo data
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

export default function DemoSection() {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [metrics, setMetrics] = useState<Metrics>({});
  const [activeWorkflows, setActiveWorkflows] = useState<WorkflowEvent[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /* =========================
     SCENARIOS
  ========================= */

  const scenarios = [
    {
      title: 'Lead Qualification',
      icon: '🎯',
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
            'Thanks for reaching out. Can you tell me your team size and main goal?',
          workflow: { title: 'AI Engaged', icon: '🤖', color: 'purple' },
        },
        {
          time: '00:45',
          actor: 'prospect',
          message: "We're a 50+ person team looking to automate sales.",
        },
        {
          time: '01:14',
          actor: 'ai',
          message: 'Great fit. I’ve booked a consultation for Thursday.',
          workflow: { title: 'Meeting Booked', icon: '✅', color: 'green' },
        },
      ],
      outcome: { qualified: 1, conversion: 87, value: 15000 },
    },
    {
      title: 'Appointment Booking',
      icon: '📅',
      timeline: [
        {
          time: '00:00',
          actor: 'prospect',
          message: 'Can I book a demo?',
          workflow: { title: 'Booking Request', icon: '📊', color: 'blue' },
        },
        {
          time: '00:31',
          actor: 'ai',
          message: 'Confirmed for Wednesday at 3:30 PM.',
          workflow: { title: 'Appointment Confirmed', icon: '✅', color: 'green' },
        },
      ],
      outcome: { booked: 1, showRate: 94, satisfaction: 4.8 },
    },
    {
      title: 'Customer Support',
      icon: '⚡',
      timeline: [
        {
          time: '00:00',
          actor: 'customer',
          message: "Our CRM sync isn't working.",
          workflow: { title: 'Support Ticket', icon: '📊', color: 'blue' },
        },
        {
          time: '00:36',
          actor: 'ai',
          message: 'Issue fixed. Sync restored.',
          workflow: { title: 'Resolved', icon: '🔧', color: 'orange' },
        },
      ],
      outcome: { responded: 1, resolutionTime: 4, satisfaction: 4.9 },
    },
  ];

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
    <section className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-5xl font-bold mb-10 text-center">
          Watch AI Work in Real Time
        </h2>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
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

          <div className="space-y-3">
            {metrics.qualified !== undefined && (
              <div>Qualified Leads: {metrics.qualified}</div>
            )}
            {metrics.booked !== undefined && (
              <div>Booked Appointments: {metrics.booked}</div>
            )}
            {metrics.responded !== undefined && (
              <div>Responses Sent: {metrics.responded}</div>
            )}
            {metrics.conversion !== undefined && (
              <div>Conversion Rate: {metrics.conversion}%</div>
            )}
            {metrics.showRate !== undefined && (
              <div>Show Rate: {metrics.showRate}%</div>
            )}
            {metrics.resolutionTime !== undefined && (
              <div>Resolution Time: {metrics.resolutionTime} min</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
