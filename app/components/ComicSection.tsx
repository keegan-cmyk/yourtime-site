export default function ComicSection() {
  return (
    <section className="py-24 px-6 bg-black text-center" id="comic">
      <h2 className="text-4xl font-bold mb-4">
        How Your Time Transforms Your Business
      </h2>

      <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
        A simple, powerful visual that shows exactly how Your Time reduces overwhelm and automates your daily workload.
      </p>

      <div className="flex justify-center">
        <img
          src="/comic.png"
          alt="Your Time Automation Comic"
          className="rounded-xl shadow-xl max-w-5xl w-full"
        />
      </div>
    </section>
  );
}
