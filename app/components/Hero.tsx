export default function Hero() {
  return (
    <section
      className="relative w-full text-center py-32 px-6 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/hero-1.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Your work—done automatically. <br />
        <span className="text-primary">Save your time and scale your business.</span>
      </h1>

      <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
        Your Time is the all-in-one AI automation platform that replaces repetitive computer work
        with intelligent assistants that run your business 24/7.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
        <a href="#demo" className="px-8 py-4 bg-primary text-black rounded-lg text-lg font-semibold">
          Watch Demo
        </a>
        <a href="#contact" className="px-8 py-4 border border-gray-500 text-lg rounded-lg">
          Book Consultation
        </a>
      </div>

      <div className="mt-6">
        <a href="#contact" className="text-gray-300 underline">
          Ask what’s possible for your business →
        </a>
      </div>
    </section>
  );
}

