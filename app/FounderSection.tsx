import Image from "next/image";

export default function AboutFounder() {
  return (
    <section className="relative py-28 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Founder Image */}
        <div className="flex justify-center">
          <div className="relative w-[320px] h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <Image
              src="/founder.png"
              alt="Founder of Your Time"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Founder Copy */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Built by an Operator — Not a Consultant
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Your Time was built from firsthand experience operating sales,
            automation, and systems inside real businesses — not theory,
            templates, or hype.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Every automation we build is designed to remove friction, reclaim
            time, and create leverage where it actually matters.
          </p>
        </div>
      </div>
    </section>
  );
}
