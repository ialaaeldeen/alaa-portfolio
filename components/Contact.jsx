"use client";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <form
        action="https://formspree.io/f/mbdzkoqo"
        method="POST"
        className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-lg font-semibold"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}