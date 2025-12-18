"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-black text-center border-t border-gray-800"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
        Book a Consultation
      </h2>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-14">
        Answer a few questions so we can map out the highest-impact automations
        for your business and send you a tailored plan. No sales pressure — just
        clarity and direction.
      </p>

      <div className="max-w-3xl mx-auto bg-gray-900/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-800">
        <form onSubmit={handleSubmit} className="space-y-10 text-left">
          {/* BASIC INFO */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              Your Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
              />

              <input
                name="phone"
                placeholder="Phone"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
              />

              <input
                name="businessType"
                placeholder="Business Type"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* BUSINESS DETAILS */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              Business Details
            </h3>

            <input
              name="location"
              placeholder="City / State / Province"
              className="w-full mb-4 rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
            />

            <input
              name="website"
              placeholder="Website URL"
              className="w-full mb-4 rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
            />

            <input
              name="socials"
              placeholder="Social accounts"
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
            />
          </div>

          {/* QUESTIONS */}
          <div className="space-y-6">
            <textarea
              name="topTasks"
              rows={3}
              placeholder="Top 3 repetitive tasks you want to eliminate"
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
            />

            <textarea
              name="bottlenecks"
              rows={3}
              placeholder="What slows your business down most?"
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
            />

            <input
              name="weeklyHours"
              placeholder="Hours spent on admin weekly"
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
            />

            <input
              name="implementationStyle"
              placeholder="Preferred implementation style"
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
            />

            <textarea
              name="futureVision"
              rows={3}
              placeholder="What would change if AI ran parts of your business?"
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
            />

            <input
              name="startTimeline"
              placeholder="How soon would you like to begin?"
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full mt-6 rounded-lg bg-purple-500 text-black font-semibold py-3 text-lg disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit Your Answers"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm mt-4 text-center">
              Thank you — your information has been sent.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm mt-4 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
