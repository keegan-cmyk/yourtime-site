export default function BenefitsSection() {
  const benefits = [
    {
      title: "Save 20+ Hours Every Week",
      text: "Automate the work that drains your time — follow-ups, scheduling, qualification, reminders, and admin — so you can operate at your highest level.",
      img: "/benefit-1.png",
    },
    {
      title: "Scale Without Hiring More Staff",
      text: "Your Time acts as an always-on AI workforce, handling conversations and workflows instantly — creating capacity without increasing payroll.",
      img: "/benefit-2.png",
    },
    {
      title: "Increase Your Revenue Automatically",
      text: "Never miss a lead again. Respond instantly, stay top of mind, and close more opportunities with AI that follows up with perfect consistency.",
      img: "/benefit-3.png",
    },
    {
      title: "Total Clarity & Control",
      text: "Centralize communication, workflows, tasks, and automations so your business runs with precision — and you always know what’s happening.",
      img: "/benefit-4.png",
    },
    {
      title: "Freedom to Focus on What Matters",
      text: "Spend more time building, creating, growing, or being with the people you love. Automate the busywork and reclaim your life.",
      img: "/benefit-5.png",
    },
    {
      title: "One System That Runs Everything",
      text: "Your Time connects your tools, data, and processes into one seamless operating system — so your business continues moving even when you’re offline.",
      img: "/benefit-6.png",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-28 px-6 bg-black border-t border-gray-800"
    >
      <h2 className="text-center text-4xl sm:text-5xl font-semibold mb-14">
        Why Businesses Choose Your Time
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="yt-card-lift p-8 rounded-2xl bg-gray-900/60 border border-gray-800"
          >
            <img
              src={benefit.img}
              alt={benefit.title}
              className="w-12 h-12 mb-5 opacity-90"
            />

            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>

            <p className="text-gray-400 leading-relaxed">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

