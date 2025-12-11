"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

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
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Phone</label>
                <input
                  name="phone"
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Business Type
                </label>
                <input
                  name="businessType"
                  placeholder="e.g. roofing, coaching, real estate, agency"
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              Business Details
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  City / State or Province
                </label>
                <input
                  name="location"
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Website URL (if you have one)
                </label>
                <input
                  name="website"
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-gray-400 mb-1">
                Social accounts (Instagram, TikTok, Facebook, etc.)
              </label>
              <input
                name="socials"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
              />
            </div>
          </div>

          {/* QUESTIONS */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              Tell Us About Your Needs
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  What are the top 3 repetitive tasks you wish you could eliminate?
                </label>
                <textarea
                  name="topTasks"
                  rows={3}
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  What slows your business down the most?
                </label>
                <textarea
                  name="bottlenecks"
                  rows={3}
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Hours spent on admin/computer work weekly
                  </label>
                  <input
                    name="weeklyHours"
                    className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Preferred implementation style
                  </label>
                  <input
                    name="implementationStyle"
                    placeholder="Done-for-you / Guided / Not sure"
                    className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  What would change for you if AI ran parts of your business 24/7?
                </label>
                <textarea
                  name="futureVision"
                  rows={3}
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  How soon would you like to begin?
                </label>
                <input
                  name="startTimeline"
                  placeholder="Immediately / This month / This quarter / Just exploring"
                  className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:border-primary outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full mt-2 rounded-lg bg-primary text-black font-semibold py-3 text-lg shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-shadow disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Submit Your Answers"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm mt-3 text-center">
                Thank you — your tailored automation plan is on its way.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm mt-3 text-center">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
