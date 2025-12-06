import React, { useState } from "react";
import { motion } from "framer-motion";
import { validateEmail, validateNotEmpty } from "../utils/validators";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [err, setErr] = useState("");

  function update(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");

    if (!validateNotEmpty(form.name)) return setErr("Name is required");
    if (!validateEmail(form.email)) return setErr("Valid email required");
    if (!validateNotEmpty(form.message)) return setErr("Message is required");

    setStatus("sending");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErr(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErr("Server error. Try again later.");
    }
  }

  return (
    <section id="contact" className="w-full flex justify-center py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl p-12 rounded-3xl neumorphic-card"
      >
        <h2 className="text-4xl font-extrabold text-center mb-4 text-brand-blue">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-14 text-lg">
          We'd love to hear from you — feel free to reach out anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 w-full max-w-xl mx-auto"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-2 neumorphic-input">
            <label className="font-semibold text-brand-blue text-lg">
              Full Name *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Enter your full name"
              className="input-field"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 neumorphic-input">
            <label className="font-semibold text-brand-blue text-lg">
              Email *
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="Enter your email"
              className="input-field"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 neumorphic-input">
            <label className="font-semibold text-brand-blue text-lg">
              Message *
            </label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Write your message..."
              className="input-field h-40 resize-none"
            ></textarea>
          </div>

          {/* Error */}
          {err && (
            <div className="text-red-600 text-center text-lg">{err}</div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="neumorphic-btn py-4 rounded-2xl font-bold text-brand-blue text-xl"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message Sent ✓"
              : "Send Message"}
          </button>

          {status === "success" && (
            <div className="text-green-600 text-center text-lg mt-2">
              Message sent successfully!
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
}
