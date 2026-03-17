"use client";

import { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const sendEmail = () => {
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      "Hello Alaaeldeen,\n\nI saw your portfolio and would like to contact you.\n\nBest regards,"
    );

    window.location.href = `mailto:allouah30@icloud.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="text-center py-24">

      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold"
      >
        Open Contact
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

            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

            <p className="text-gray-400 mb-6">
              If you'd like to collaborate, discuss a project, or just say hello,
              feel free to email me directly.
            </p>

            <p className="text-blue-400 mb-6 font-medium">
              allouah30@icloud.com
            </p>

            <button
              onClick={sendEmail}
              className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
            >
              Send Email
            </button>

          </div>

        </div>
      )}

    </section>
  );
}