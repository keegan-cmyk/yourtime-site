"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      businessType: formData.get("businessType"),
      location: formData.get("location"),
      website: formData.get("website"),
      socials: formData.get("socials"),
      topTasks: formData.get("topTasks"),
      bottlenecks: formData.get("bottlenecks"),
      weeklyHours: formData.get("weeklyHours"),
      futureVision: formData.get("futureVision"),
      aiChange: formData.get("aiChange"),
      implementationStyle: formData.get("implementationStyle"),
      startTimeline: formData.get("startTimeline"),
    };

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
      className="py-24 px-6 bg-black border-t border-gray-800"
    >
      <h2 className="text-4xl font-bold text-center mb-4">Book a Consultation</h2>
      <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto">
        Answer a few quick questions so we can map out the highest-impact
        automations for your business and build a package tailored to your real
        needs.
      </p>

      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Your Name</label>
              <input
                name="name"
                required
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Phone</label>
              <input
                name="phone"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Business Type</label>
              <input
                name="businessType"
                placeholder="e.g. roofing, coaching, real estate, agency"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Location & Online Presence */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                City / State or Province
              </label>
              <input
                name="location"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Website URL (if you have one)
              </label>
              <input
                name="website"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Social accounts (Instagram, TikTok, Facebook, etc.)
            </label>
            <input
              name="socials"
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          {/* NEPQ Questions */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              What are the top 3 repetitive tasks you wish you could eliminate?
            </label>
            <textarea
              name="topTasks"
              rows={3}
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              What slows your business down the most right now?
            </label>
            <textarea
              name="bottlenecks"
              rows={3}
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Roughly how many hours per week are you doing admin/computer work?
              </label>
              <input
                name="weeklyHours"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Are you looking for done-for-you automation or guided setup?
              </label>
              <input
                name="implementationStyle"
                placeholder="Done-for-you / Guided / Not sure"
                className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              If you had an AI workforce running your business 24/7, what would change for you in the next 6–12 months?
            </label>
            <textarea
              name="futureVision"
              rows={3}
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              How soon would you like to start automating parts of your business?
            </label>
            <input
              name="startTimeline"
              placeholder="Immediately / This month / This quarter / Just exploring"
              className="w-full rounded-lg bg-black border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full mt-4 rounded-lg bg-primary text-black font-semibold py-3 text-lg disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit Your Answers"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm mt-3">
              Thank you — we'll review your answers and follow up with a tailored automation plan.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
