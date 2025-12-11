export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Cinematic Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[900px] rounded-full bg-primary/20 blur-[180px] opacity-40" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-pulse-slow absolute top-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full blur-sm" />
        <div className="animate-pulse-slower absolute top-2/3 right-1/4 w-3 h-3 bg-emerald-300/40 rounded-full blur-sm" />
        <div className="animate-pulse-slow absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-white/30 rounded-full blur-[2px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT SIDE — TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-400">
            YOUR TIME · AI WORKFORCE
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1]">
            Automate Everything.
            <span className="block text-primary">
              Get your time back.
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Your Time connects your tools, conversations, and workflows into one
            intelligent system — so leads are followed up, tasks get done,
            and your business moves forward even when you log off.
          </p>

          <p className="text-primary/90 font-medium text-lg">
            Built with AI. Designed for freedom.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            <a
              href="#demo"
              className="px-8 py-4 rounded-full bg-primary text-black font-semibold text-base shadow-[0_0_25px_rgba(0,200,150,0.45)] hover:shadow-[0_0_40px_rgba(0,200,150,0.6)] transition-shadow"
            >
              Watch the 60-second demo
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-gray-700 text-gray-100 font-semibold hover:border-primary hover:text-primary transition"
            >
              Book a consultation
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — CINEMATIC HERO IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xl">
            {/* Outer Glow */}
            <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-[80px] opacity-40" />

            {/* Inner Card */}
            <div className="relative rounded-3xl bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-800 shadow-2xl overflow-hidden backdrop-blur-sm">
              <img
                src="/hero-main.png"
                alt="Your Time AI Workforce"
                className="w-full h-full object-cover scale-[1.02] hover:scale-[1.05] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
