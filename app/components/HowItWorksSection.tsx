export default function HowItWorksSection() {
  const steps = [
    {
      title: "1. Discovery Call",
      text: "We learn how your business operates, uncover bottlenecks, and identify where AI automation can save the most time and drive the biggest impact.",
    },
    {
      title: "2. Automation Blueprint",
      text: "We map out a personalized workflow system built around your tools, your leads, and your customer journey — no generic templates.",
    },
    {
      title: "3. Build & Deployment",
      text: "We configure your AI workforce — qualification, follow-up, appointment setting, reminders, workflow execution — all running 24/7.",
    },
    {
      title: "4. Optimization & Scaling",
      text: "We refine, expand, and enhance your automations as your business grows, creating a scalable system that adapts to your evolution.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-28 px-6 bg-black text-center border-t border-gray-800"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
        How It Works
      </h2>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-14">
        A simple four-step framework designed to remove overwhelm and install a
        powerful AI system inside your business.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/40 text-primary font-semibold text-lg">
              {i + 1}
            </div>

            <h3 className="text-xl font-semibold">{step.title}</h3>

            <p className="text-gray-300 text-base leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
