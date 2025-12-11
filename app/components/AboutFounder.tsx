export default function AboutFounder() {
  return (
    <section
      id="founder"
      className="py-28 px-6 bg-black text-center border-t border-gray-800"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-10">
        About the Founder
      </h2>

      <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-8 text-lg">
        <p>
          Your Time was created from real experience — long nights, overloaded
          calendars, and the frustration of watching talented entrepreneurs stay
          stuck doing repetitive tasks instead of building the life and business
          they were meant for.
        </p>

        <p>
          For years, I watched business owners lose revenue simply because they
          weren’t adapting fast enough. The world is changing, and the people
          who fall behind usually aren’t lacking skill — they’re lacking time,
          systems, and leverage.
        </p>

        <p>
          I built Your Time with a simple mission: help people get their time
          back. Help them focus on what feels meaningful and inspiring. Help
          them spend more moments with the people they love. Because your job is
          not supposed to consume your entire life — it’s supposed to support
          it.
        </p>

        <div className="flex justify-center mt-8 mb-6 relative">
          <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-40 rounded-2xl" />
          <img
            src="/founder.png"
            alt="Founder of Your Time"
            className="relative rounded-2xl shadow-2xl border border-gray-700 max-w-xs"
          />
        </div>

        <p>
          AI, when used correctly, is not a replacement for people — it’s
          a tool that gives us back the most valuable asset we have: time.
          Time to grow. Time to rest. Time to create. Time to live with clarity,
          purpose, and energy instead of constant overwhelm.
        </p>

        <p>
          Your Time exists to help people step into a new level of freedom —
          where your business moves forward, even when you’re not working.
        </p>
      </div>
    </section>
  );
}
