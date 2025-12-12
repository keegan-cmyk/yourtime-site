export default function WorkflowsSection() {
  const workflows = [
    {
      title: "AI Lead Qualification",
      text: "Instantly qualify inbound leads via SMS, chat, or voice. Route hot prospects, disqualify tire-kickers, and sync clean data directly into your CRM."
    },
    {
      title: "AI Appointment Setter",
      text: "Automatically book calls, demos, or consultations on your calendar 24/7 — with confirmations, reminders, and rescheduling handled for you."
    },
    {
      title: "Missed Call Text Agent",
      text: "Every missed call triggers an immediate AI-powered text conversation so opportunities never slip through the cracks."
    },
    {
      title: "Lead Scraper",
      text: "Pull targeted leads from maps, directories, websites, or databases and push them into automated outreach workflows."
    },
    {
      title: "Review Request System",
      text: "Automatically request reviews after jobs or purchases, follow up intelligently, and boost your online reputation on autopilot."
    },
    {
      title: "Content Creator",
      text: "Generate social posts, emails, follow-ups, ads, and internal content automatically — tailored to your brand voice."
    }
  ];

  return (
    <section
      id="workflows"
      className="relative py-28 px-6 bg-black text-center border-t border-gray-800 reveal-section overflow-hidden"
    >
      {/* Ambient background texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08] bg-cover bg-center blur-2xl"
        style={{ backgroundImage: "url('/benefit-3.png')" }}
      />

      <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
        Ready-to-Use Automations
      </h2>

      <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
        Launch powerful automations instantly or request a custom workflow designed specifically for your business.
      </p>

      <p className="text-gray-400 text-base max-w-3xl mx-auto mb-14">
        We maintain an internal library of <span className="text-white font-medium">8,000+ proven automations</span> — and we custom-build anything you can imagine.
        <br className="hidden sm:block" />
        <span className="text-white font-medium">
          If you can think of it and explain it, we can automate it.
          If we can’t — you don’t pay.
        </span>
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-10">
        {workflows.map((flow, i) => (
          <div
            key={i}
            className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 shadow-xl shadow-black/40 hover:border-primary transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{flow.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {flow.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
