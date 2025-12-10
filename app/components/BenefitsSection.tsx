export default function BenefitsSection() {
  return (
    <section className="py-24 px-6 bg-black">
      <h2 className="text-center text-4xl font-bold mb-12">Why Businesses Choose Your Time</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="text-center bg-gray-900 p-6 rounded-xl shadow-lg">
          <img src="/feature-2.png" alt="Save Time" className="rounded-lg mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Save 20+ Hours Weekly</h3>
          <p className="text-gray-300">Automate repetitive tasks that drain your energy and time.</p>
        </div>

        {/* Card 2 */}
        <div className="text-center bg-gray-900 p-6 rounded-xl shadow-lg">
          <img src="/feature-3.png" alt="Scale Fast" className="rounded-lg mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Scale Without Hiring</h3>
          <p className="text-gray-300">Your AI assistants handle customer conversations, tasks, and workflows 24/7.</p>
        </div>

        {/* Card 3 */}
        <div className="text-center bg-gray-900 p-6 rounded-xl shadow-lg">
          <img src="/feature-1.png" alt="Increase Revenue" className="rounded-lg mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Increase Your Revenue</h3>
          <p className="text-gray-300">Convert more leads, answer faster, and eliminate human delay.</p>
        </div>

      </div>
    </section>
  );
}
