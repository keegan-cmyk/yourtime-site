export default function WorkflowsSection() {
  const workflows = [
    {
      title: "AI Lead Qualification",
      text: "Instantly respond to new leads, ask intelligent questions, and hand off only the highest-intent prospects.",
    },
    {
      title: "AI Appointment Setter",
      text: "Automatically schedule, confirm, and follow up on appointments across your calendar tools.",
    },
    {
      title: "Missed Call Text Agent",
      text: "If you miss a call, AI replies instantly, gathers context, and keeps the conversation moving.",
    },
    {
      title: "Lead Scraper",
      text: "Pull leads from Google Maps, websites, or directories and feed them directly into your CRM.",
    },
    {
      title: "Review Request System",
      text: "Automate personalized review follow-ups to increase social proof and boost ranking.",
    },
    {
      title: "Content Creator",
      text: "Generate daily posts, scripts, captions, and ideas tailored to your brand and audience.",
    },
  ];

  return (
    <section
      id="workflows"
      className="py-28 px-6 bg-black text-center border-t border-gray-800"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
        Ready-to-Use Automations
      </h2>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-14">
        Launch powerful automations instantly or request a custom workflow
        designed specifically for your business.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
