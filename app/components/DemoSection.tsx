export default function DemoSection() {
  return (
    <section
      id="demo"
      className="py-28 px-6 bg-black text-center border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
          Experience Your Time in Action
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          See how an AI workforce operates inside a real business — qualifying
          leads, automating follow-ups, booking appointments, sending reminders,
          and running workflows while you sleep.
        </p>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-black/50 mx-auto">
          <video
            src="/demo.mp4"
            controls
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-black font-semibold text-lg shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-shadow"
          >
            Book a consultation →
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          60-second overview · No filler · See real workflow examples
        </p>
      </div>
    </section>
  );
}
