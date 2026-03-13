"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    try {

      await emailjs.sendForm(
        "service_x6043yj",
        "template_ewhq7k8",
        form.current,
        "hsxgnfeB3U2jCbS82"
      );

      alert("✅ Message sent successfully!");
      form.current.reset();

    } catch (error) {

      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
      >

        {/* Name */}
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        {/* Email */}
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        {/* Message */}
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />

        {/* Hidden reply-to field (important for EmailJS) */}
        <input type="hidden" name="reply_to" />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

    </section>
  );
}