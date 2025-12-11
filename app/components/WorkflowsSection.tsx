export default function WorkflowsSection() {
  const workflows = [
    { title: "AI Lead Qualification", text: "Instant..." },
    { title: "AI Appointment Setter", text: "Auto..." },
    { title: "Missed Call Text Agent", text: "If you..." },
    { title: "Lead Scraper", text: "Pull..." },
    { title: "Review Request System", text: "Auto..." },
    { title: "Content Creator", text: "Generate..." },
  ];

  return (
    <section
      id="workflows"
      className="py-28 px-6 bg-black text-center border-t border-gray-800 reveal-section"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
        Ready-to-Use Automations
      </h2>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-14">
        Launch powerful automations instantly or request a custom workflow
        designed specifically for your business.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-10">
        {workflows.map((flow, i) => (
          <div
            key={i}
            className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 shadow-xl shadow-black/40 hover:border-primary transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{flow.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{flow.text}</p>
          </div>
        ))}
      </div>

      {/* FUNNY TAGLINE #11 */}
      <p className="text-primary/80 text-lg font-medium">
        Work less. Earn more. Feel like a wizard.
      </p>
    </section>
  );
}
