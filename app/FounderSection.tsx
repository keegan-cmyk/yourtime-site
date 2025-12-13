export default function FounderSection() {
  return (
    <section
      id="founder"
      className="relative py-32 px-6 bg-black border-t border-gray-800 overflow-hidden"
    >
      {/* Ambient background texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06] bg-cover bg-center blur-3xl"
        style={{ backgroundImage: "url('/hero-main.png')" }}
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Founder Image */}
        <div className="relative flex justify-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/70">
            <img
              src="/founder.png"
              alt="Founder of Your Time"
              className="w-full max-w-md object-cover"
            />
          </div>

          {/* subtle glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-purple-500/10 blur-3xl" />
        </div>

        {/* Founder Copy */}
        <div className="text-left">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Built From Experience — Not Theory
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Your Time was created from real experience — long nights, overloaded calendars,
            and the frustration of watching talented entrepreneurs stay stuck doing repetitive
            tasks instead of building the life and business they were meant for.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            For years, I watched business owners lose revenue simply because they weren’t
            adapting fast enough. The world is changing, and the people who fall behind
            usually aren’t lacking skill — they’re lacking time, systems, and leverage.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            I built Your Time with a simple mission: help people get their time back.
            Help them focus on what feels meaningful and inspiring. Help them spend more
            moments with the people they love. Because your job is not supposed to consume
            your entire life — it’s supposed to support it.
          </p>

          {/* Bible Verse — LOCKED */}
          <div className="border-l-2 border-gray-700 pl-6 mt-10">
            <p className="text-gray-400 italic text-base leading-relaxed">
              “Commit to the Lord whatever you do, and He will establish your plans.”
            </p>
            <p className="text-gray-500 text-sm mt-2">
              — Proverbs 16:3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
