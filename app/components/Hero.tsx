export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Subtle glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 lg:pt-36 lg:pb-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left column – copy */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400">
            YOUR TIME · AI WORKFORCE
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Get your time back
            <span className="block text-primary">
              with an AI workforce that never sleeps.
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Your Time connects your tools, conversations, and workflows into one
            intelligent system — so leads are followed up, tasks get done, and
            your business moves forward even when you log off.
          </p>

          {/* Key proof strip */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start text-sm mt-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Save 20+ hours per week</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Run follow-up 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Built for real businesses</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-black font-semibold text-base shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-shadow"
            >
              Watch the 60-second demo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-600 text-gray-100 text-base hover:border-primary hover:text-primary transition-colors"
            >
              Book a consultation
            </a>
          </div>

          {/* Micro reassurance */}
          <p className="text-xs text-gray-500 mt-4">
            No templates. No gimmicks. We design automations around how your
            business actually runs.
          </p>
        </div>

        {/* Right column – visual */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/40 via-transparent to-emerald-300/30 blur-2xl opacity-60" />
            <div className="relative rounded-3xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-2xl overflow-hidden">
              <img
                src="/hero-main.png"
                alt="Your Time AI Workforce"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
