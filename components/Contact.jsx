"use client";

import { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message.");
      }

    } catch (error) {
      console.error("Contact error:", error);
      setStatus("❌ Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="text-center py-24">

      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold"
      >
        Open Contact Form
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-gray-900 p-8 rounded-xl w-full max-w-lg relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 p-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center text-gray-400">{status}</p>
              )}

            </form>
          </div>

        </div>
      )}

    </section>
  );
}