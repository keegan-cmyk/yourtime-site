export default function BenefitsSection() {
  const benefits = [
    {
      title: "Save 20+ Hours Weekly",
      text: "Stop drowning in repetitive tasks. Your Time handles the work that steals your focus, energy, and freedom — so you can finally operate at your full potential.",
      img: "/benefit-1.png",
    },
    {
      title: "Scale Without Hiring",
      text: "Grow without adding payroll stress. Your AI workforce runs conversations, tasks, and workflows 24/7 — creating capacity without increasing overhead.",
      img: "/benefit-2.png",
    },
    {
      title: "Increase Your Revenue",
      text: "Convert more leads in less time. Respond instantly, follow up consistently, and eliminate the human delay that costs you money every single day.",
      img: "/benefit-3.png",
    },
    {
      title: "Clarity & Control Over Your Business",
      text: "Your Time centralizes communication, tasks, workflows, and automations so your business finally runs with precision.",
      img: "/benefit-4.png",
    },
    {
      title: "Freedom To Do What You Love",
      text: "Get your life back. Whether you want more time with family, more time to build, or more time for yourself — Your Time gives it back.",
      img: "/benefit-5.png",
    },
    {
      title: "Automate Your Entire Workflow",
      text: "Go beyond single tasks. Your Time connects your tools, messages, and processes into one automated system so your business runs smoothly even when you’re offline.",
      img: "/benefit-6.png",
    },
  ];

  return (
    <section id="benefits" className="py-24 px-6 bg-black">
      <h2 className="text-center text-4xl font-bold mb-12">
        Why Businesses Choose Your Time
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="text-center bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center"
          >
            <img
              src={b.img}
              alt={b.title}
              className="rounded-lg mb-4 w-full max-h-60 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">{b.title}</h3>
            <p className="text-gray-300">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
