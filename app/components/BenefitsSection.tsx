export default function BenefitsSection() {
  return (
    <section className="w-full max-w-5xl py-24 px-6 text-center">
      <h2 className="text-4xl font-bold">More time. More sales. More freedom.</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Save 15–20 hours weekly</h3>
          <p className="text-gray-400 mt-2">Let AI handle all your repetitive computer work.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Respond 10× faster</h3>
          <p className="text-gray-400 mt-2">Instant AI replies = more appointments and more sales.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Eliminate admin work</h3>
          <p className="text-gray-400 mt-2">Focus on quoting, selling, and customer relationships.</p>
        </div>
      </div>
    </section>
  );
}
