export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <h2 className="text-center text-4xl font-bold mb-6">Book a Consultation</h2>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
        Tell us about your business and we’ll show you exactly what Your Time can automate for you.
      </p>

      {/* Testimonial Image */}
      <div className="flex justify-center mb-10">
        <img
          src="/testimonial-1.png"
          alt="Client Testimonial"
          className="rounded-xl shadow-lg max-w-xl"
        />
      </div>

      <form className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg">
        <input className="w-full mb-4 p-3 bg-black border border-gray-700 rounded" placeholder="Your Name" />
        <input className="w-full mb-4 p-3 bg-black border border-gray-700 rounded" placeholder="Email" />
        <textarea className="w-full mb-4 p-3 bg-black border border-gray-700 rounded" placeholder="What do you want to automate?"></textarea>

        <button className="w-full py-4 bg-primary text-black rounded-lg font-semibold">
          Submit
        </button>
      </form>
    </section>
  );
}
