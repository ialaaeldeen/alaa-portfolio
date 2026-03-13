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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong.");
    }
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
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

          <div className="bg-gray-900 p-8 rounded-xl w-full max-w-lg">

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 float-right"
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
                className="w-full bg-blue-600 p-3 rounded-lg font-semibold"
              >
                Send Message
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