export default function AboutFounder() {
  return (
    <section className="relative py-32 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Founder Image */}
        <div className="flex justify-center">
          <div className="w-[320px] h-[420px] rounded-3xl overflow-hidden border border-white/10">
            <img
              src="/founder.png"
              alt="Founder of Your Time"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Founder Copy */}
        <div className="max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-8 text-white">
            About the Founder
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Your Time didn’t come from a business plan or a trend cycle. It came
            from paying attention to how much energy gets wasted on things that
            shouldn’t need constant human effort. I’m not interested in selling
            productivity or pushing tools — I care about leverage. When systems
            are built properly, your business stops demanding all of you just to
            stay afloat, and starts supporting the life you’re trying to build.
          </p>

          <div className="mt-10 inline-block px-4 py-2 rounded-full border border-white/15 text-sm text-gray-400">
            Founder of Your Time
          </div>
        </div>
      </div>
    </section>
  );
}
