export default function DemoSection() {
  return (
    <section id="demo" className="py-24 px-6 bg-black text-center">
      <h2 className="text-4xl font-bold mb-6">See Your Time in Action</h2>

      <p className="text-gray-300 max-w-2xl mx-auto mb-10">
        Watch how Your Time automates tasks, responds to customers, and runs your business while you sleep.
      </p>

      <div className="flex justify-center">
        <img
          src="/feature-1.png"
          alt="Demo Feature"
          className="rounded-xl shadow-lg max-w-2xl"
        />
      </div>

      <div className="mt-8">
        <a href="#contact" className="text-primary underline">
          Book a consultation to see what’s possible →
        </a>
      </div>
    </section>
  );
}
