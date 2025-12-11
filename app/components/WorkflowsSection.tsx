export default function WorkflowsSection() {
  return (
    <section
      id="workflows"
      className="w-full max-w-5xl py-24 px-6 text-center"
    >
      <h2 className="text-4xl font-bold">Launch Automations Instantly</h2>

      <p className="text-gray-300 mt-4">
        Choose from ready-to-use workflows or request a custom automation.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
        {[
          "AI Lead Qualification",
          "AI Appointment Setter",
          "Missed Call Text Agent",
          "Lead Scraper",
          "Review Request System",
          "Content Creator",
        ].map((title, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
