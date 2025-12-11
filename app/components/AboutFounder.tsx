export default function AboutFounder() {
  return (
    <section className="py-24 px-6 bg-black text-center">
      <h2 className="text-4xl font-bold mb-6">About the Founder</h2>

      <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-6 text-lg">
        <p>
          Your Time was created with one mission: to help business owners reclaim the hours they lose
          every day to repetitive tasks, scattered tools, and slow manual processes.
        </p>

        <div className="flex justify-center mt-10">
          <img
            src="/founder.png"
            alt="Founder"
            className="rounded-xl shadow-xl max-w-xs"
          />
        </div>

        <p>
          Built with faith, discipline, and a passion for empowering people — Your Time is a platform
          designed to free you from busywork so you can focus on the work God actually called you to do.
        </p>
      </div>
    </section>
  );
}
