export default function AboutFounder() {
  return (
    <section
      id="founder"
      className="py-24 px-6 bg-black text-center border-t border-gray-800"
    >
      <h2 className="text-4xl font-bold mb-6">About the Founder</h2>

      <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6 text-lg">
        <p>
          Your Time was built from real experience — long nights, overloaded
          calendars, and the frustration of watching talented entrepreneurs stay
          stuck because they were buried in repetitive work instead of building
          the life and business they were meant for.
        </p>

        <p>
          For years, I watched business owners lose time, momentum, and
          opportunity because they simply didn&apos;t have systems. No
          automation. No leverage. Just willpower and chaos.
        </p>

        <p>
          After overcoming my own battles with overwhelm, discipline, and
          starting over, I committed to helping people break free from busywork
          and reclaim the time God gave them — so they can focus on what truly
          matters.
        </p>

        <div className="flex justify-center mt-8 mb-4">
          <img
            src="/founder.png"
            alt="Founder of Your Time"
            className="rounded-xl shadow-xl max-w-xs border border-gray-700"
          />
        </div>

        <p>
          Your Time is my mission: to give business owners clarity, structure,
          and freedom so they can grow with confidence and finally step into
          their calling — without burning out in the process.
        </p>
      </div>
    </section>
  );
}
