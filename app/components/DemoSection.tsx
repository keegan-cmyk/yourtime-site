'use client';
import React, { useState, useEffect, useRef } from 'react';

const FuturisticDemo = () => {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [messages, setMessages] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [metrics, setMetrics] = useState({ qualified: 0, booked: 0, responded: 0 });
  const [activeWorkflows, setActiveWorkflows] = useState([]);
  const [particles, setParticles] = useState([]);
  const messagesEndRef = useRef(null);

  const scenarios = [
    {
      title: 'Lead Qualification',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      timeline: [
        { 
          time: '00:00', 
          actor: 'prospect', 
          message: 'I\'m interested in learning more about your enterprise solutions.',
          workflow: { title: 'Lead Captured', icon: '📊', color: 'blue' }
        },
        { 
          time: '00:02', 
          actor: 'ai', 
          message: 'Thank you for your interest. To ensure I connect you with the right specialist, may I ask about your current team size and primary use case?',
          workflow: { title: 'AI Engagement Initiated', icon: '🤖', color: 'purple' }
        },
        { 
          time: '00:45', 
          actor: 'prospect', 
          message: 'We\'re a team of 50+ looking to automate our sales workflows.'
        },
        { 
          time: '00:47', 
          actor: 'ai', 
          message: 'Based on your requirements, you\'re an excellent fit for our Enterprise tier. I\'ve identified key features that align with your needs. Would you like to schedule a consultation?',
          workflow: { title: 'Lead Qualified - Enterprise Tier', icon: '🔥', color: 'red' }
        },
        { 
          time: '01:12', 
          actor: 'prospect', 
          message: 'Yes, that would be helpful.'
        },
        { 
          time: '01:14', 
          actor: 'ai', 
          message: 'I\'ve scheduled a call for Thursday at 2 PM EST with our Enterprise team. Calendar invite and briefing sent.',
          workflow: { title: 'Meeting Scheduled', icon: '✅', color: 'green' }
        },
      ],
      outcome: { qualified: 1, conversion: 87, value: 15000 }
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
          workflow: { title: 'Scheduling Request', icon: '📊', color: 'blue' }
        },
        { 
          time: '00:03', 
          actor: 'ai', 
          message: 'I\'m checking availability across our demo team. Do you prefer morning or afternoon sessions?',
          workflow: { title: 'Calendar Analysis', icon: '🔍', color: 'purple' }
        },
        { 
          time: '00:28', 
          actor: 'prospect', 
          message: 'Afternoon works better for our team.'
        },
        { 
          time: '00:31', 
          actor: 'ai', 
          message: 'I have availability Tuesday at 2:00 PM, Wednesday at 3:30 PM, or Thursday at 1:00 PM EST. Which suits your schedule?',
          workflow: { title: 'Optimal Slots Identified', icon: '🎯', color: 'cyan' }
        },
        { 
          time: '00:55', 
          actor: 'prospect', 
          message: 'Wednesday at 3:30 PM works perfectly.'
        },
        { 
          time: '00:58', 
          actor: 'ai', 
          message: 'Confirmed. Wednesday, January 15 at 3:30 PM EST. Calendar invite sent with video link and prep materials.',
          workflow: { title: 'Appointment Confirmed', icon: '✅', color: 'green' }
        },
      ],
      outcome: { booked: 1, showRate: 94, satisfaction: 4.8 }
    },
    {
      title: 'Customer Support',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500',
      timeline: [
        { 
          time: '00:00', 
          actor: 'customer', 
          message: 'I\'m having trouble with the Salesforce integration.',
          workflow: { title: 'Support Ticket Created', icon: '📊', color: 'blue' }
        },
        { 
          time: '00:04', 
          actor: 'ai', 
          message: 'I\'ll help you resolve this. Are you seeing an authentication error or data sync issue?',
          workflow: { title: 'Issue Diagnosis', icon: '🔍', color: 'purple' }
        },
        { 
          time: '00:32', 
          actor: 'customer', 
          message: 'Data isn\'t syncing from the last 2 hours.'
        },
        { 
          time: '00:36', 
          actor: 'ai', 
          message: 'I\'ve identified the issue. Temporary API rate limit. I\'ve queued the missing data for sync - completing within 10 minutes. Also increased your rate limit.',
          workflow: { title: 'Resolution Applied', icon: '🔧', color: 'orange' }
        },
        { 
          time: '01:15', 
          actor: 'ai', 
          message: 'I\'ll check back in 15 minutes to confirm everything is syncing properly. Anything else I can help with?',
          workflow: { title: 'Follow-up Scheduled', icon: '✅', color: 'green' }
        },
      ],
      outcome: { responded: 1, resolutionTime: 4, satisfaction: 4.9 }
    }
  ];

  // Particle system
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
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.speedX + 100) % 100,
        y: (p.y + p.speedY + 100) % 100,
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const playScenario = () => {
    setIsPlaying(true);
    setMessages([]);
    setActiveWorkflows([]);
    setMetrics({ qualified: 0, booked: 0, responded: 0 });

    const scenario = scenarios[selectedScenario];
    
    scenario.timeline.forEach((step, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, step]);
        
        if (step.workflow) {
          setActiveWorkflows(prev => [...prev, { ...step.workflow, timestamp: Date.now() }]);
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

  const getWorkflowColor = (color) => {
    const colors = {
      blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
      purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
      cyan: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
      red: 'from-red-500/20 to-orange-500/20 border-red-500/30',
      orange: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
      green: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="relative bg-black py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-blue-900/10" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, boxShadow: '0 0 10px rgba(168, 85, 247, 0.3)' }}
          />
        ))}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.5) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm mb-8">
            <div className="relative">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute" />
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
            </div>
            <span className="text-purple-300 text-sm font-semibold tracking-wide">LIVE SYSTEM DEMONSTRATION</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Watch Intelligence
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              In Motion
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-time visualization of autonomous AI workflows. Every action you see happens without human intervention.
          </p>
        </div>

        {/* Scenario Selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {scenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setSelectedScenario(index)}
              className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-300 overflow-hidden ${
                selectedScenario === index ? 'scale-105' : 'scale-100 hover:scale-105'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${scenario.color} opacity-${selectedScenario === index ? '100' : '20'} group-hover:opacity-100 transition-opacity`} />
              <div className="relative flex items-center gap-3">
                <span className="text-2xl">{scenario.icon}</span>
                <span className={selectedScenario === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}>
                  {scenario.title}
                </span>
                {selectedScenario === index && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Conversation Panel */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              
              {/* Header */}
              <div className="p-6 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                        🤖
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">AI Workforce</div>
                      <div className="text-sm text-green-400 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Operational • Avg response: 1.3s
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={playScenario}
                    disabled={isPlaying}
                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all disabled:opacity-50"
                  >
                    {isPlaying ? 'Playing...' : '🔄 Replay'}
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-transparent to-black/20">
                {messages.map((msg, index) => (
                  <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Timestamp */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-purple-400">{msg.time}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
                    </div>
                    
                    {/* Message */}
                    <div className={`flex ${msg.actor === 'ai' ? 'justify-start' : 'justify-end'}`}>
                      <div
                        className={`relative max-w-[85%] px-6 py-4 rounded-2xl backdrop-blur-sm ${
                          msg.actor === 'ai'
                            ? 'bg-gradient-to-br from-white/10 to-white/5 text-gray-100 rounded-bl-md border border-white/10'
                            : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-md shadow-lg shadow-blue-500/30'
                        }`}
                      >
                        <div className="text-xs font-medium mb-2 opacity-70 uppercase tracking-wider">
                          {msg.actor === 'ai' ? 'AI Agent' : msg.actor === 'customer' ? 'Customer' : 'Prospect'}
                        </div>
                        <div className="leading-relaxed">{msg.message}</div>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          {/* Metrics & Workflow Panel */}
          <div className="space-y-6">
            {/* Real-Time Metrics */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl">
                    📊
                  </div>
                  <div>
                    <div className="font-bold text-white">Live Metrics</div>
                    <div className="text-xs text-gray-400">Current Scenario</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {scenarios[selectedScenario].outcome.qualified !== undefined && (
                    <div className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                      <div className="text-sm text-gray-400 mb-1">Qualified Leads</div>
                      <div className="text-3xl font-bold text-white">{metrics.qualified}</div>
                      <div className="text-xs text-blue-400 mt-1">Conversion: {scenarios[selectedScenario].outcome.conversion}%</div>
                    </div>
                  )}
                  
                  {scenarios[selectedScenario].outcome.booked !== undefined && (
                    <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                      <div className="text-sm text-gray-400 mb-1">Meetings Booked</div>
                      <div className="text-3xl font-bold text-white">{metrics.booked}</div>
                      <div className="text-xs text-purple-400 mt-1">Show Rate: {scenarios[selectedScenario].outcome.showRate}%</div>
                    </div>
                  )}
                  
                  {scenarios[selectedScenario].outcome.responded !== undefined && (
                    <div className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                      <div className="text-sm text-gray-400 mb-1">Tickets Resolved</div>
                      <div className="text-3xl font-bold text-white">{metrics.responded}</div>
                      <div className="text-xs text-green-400 mt-1">Resolution: {scenarios[selectedScenario].outcome.resolutionTime} min</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Workflow Events */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                    ⚡
                  </div>
                  <div>
                    <div className="font-bold text-white">Automation Pipeline</div>
                    <div className="text-xs text-gray-400">System Events</div>
                  </div>
                </div>

                <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2">
                  {activeWorkflows.map((workflow, index) => (
                    <div
                      key={index}
                      className={`p-4 bg-gradient-to-br ${getWorkflowColor(workflow.color)} rounded-xl border backdrop-blur-sm animate-slideInLeft`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{workflow.icon}</div>
                        <div className="flex-1">
                          <div className="font-bold text-white mb-1">{workflow.title}</div>
                          <div className="text-xs text-gray-500">
                            {new Date(workflow.timestamp).toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {activeWorkflows.length === 0 && (
                    <div className="text-center text-gray-500 py-12">
                      <div className="text-4xl mb-3">⚙️</div>
                      <div className="text-sm">Workflow events will appear here...</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-3xl border border-white/10 p-6 shadow-2xl">
                <div className="font-bold text-white mb-4">System Status</div>
                <div className="space-y-3">
                  {['AI Engine', 'CRM Sync', 'Calendar API', 'Email Engine'].map((system, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-gray-300">{system}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-green-400">Operational</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
            <div className="bg-black px-12 py-8 rounded-xl">
              <p className="text-gray-300 mb-6 text-lg">
                This is one conversation. Imagine this running simultaneously for every lead, 24/7/365.
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
                Experience It in Your Business →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out backwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out backwards;
        }
      `}</style>
    </div>
  );
};

export default FuturisticDemo;
