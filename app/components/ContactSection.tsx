export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-5xl py-24 px-6 text-center">
      <h2 className="text-4xl font-bold">Ask what’s possible for your business</h2>

      <form
        action="/api/contact"
        method="POST"
        className="mt-10 grid gap-6 max-w-xl mx-auto text-left"
      >
        <input name="name" placeholder="Your Name" className="p-4 bg-gray-900 rounded-lg" required />
        <input name="email" placeholder="Your Email" className="p-4 bg-gray-900 rounded-lg" required />
        <textarea name="message" placeholder="What do you want to automate?" className="p-4 bg-gray-900 rounded-lg" required></textarea>

        <button className="px-8 py-4 bg-primary text-black rounded-lg font-semibold">
          Send Message
        </button>
      </form>
    </section>
  );
}
