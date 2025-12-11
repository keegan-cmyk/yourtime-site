export default function AboutFounder() {
  return (
    <section
      id="founder"
      className="py-24 px-6 bg-black text-center border-t border-gray-800"
    >
      <h2 className="text-4xl font-bold mb-6">About the Founder</h2>

      <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6 text-lg">
        <p>
          Your Time was built from real experience — long nights, overloaded
          calendars, and the frustration of watching talented entrepreneurs stay
          stuck because they were buried in repetitive work instead of building
          the life and business they were meant for.
        </p>

        <p>
          For years, I watched business owners lose revenue simply because they
          weren’t adapting. The world is changing fast, and the people who
          hesitate often fall behind — not because they’re not capable, but
          because they lack systems, automation, and leverage.
        </p>

        <p>
          I’ve committed myself to helping people get their time back — to focus
          on the things that make them feel alive, inspired, and fulfilled. To
          help them spend more meaningful time with their families. Because your
          job is not meant to be your life.
        </p>

        <div className="flex justify-center mt-8 mb-4">
          <img
            src="/founder.png"
            alt="Founder of Your Time"
            className="rounded-xl shadow-xl max-w-xs border border-gray-700"
          />
        </div>

        <p>
          When used correctly, AI is a tool that gives us time, freedom, and
          energy back — so we can live with purpose, build with clarity, and
          grow without burning out in the process.
        </p>
      </div>
    </section>
  );
}
