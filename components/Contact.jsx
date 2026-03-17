"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const sendEmail = () => {
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      "Hello Alaaeldeen,\n\nI saw your portfolio and would like to connect with you.\n\nBest regards,"
    );

    window.location.href = `mailto:allouah30@outlook.com?subject=${subject}&body=${body}`;
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Alaaeldeen, I saw your portfolio and would like to connect with you."
    );

    window.open(`https://wa.me/249908842528?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="text-center py-24">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold"
      >
        Contact Me
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

            <h3 className="text-2xl font-bold mb-6">
              Choose How to Contact Me
            </h3>

            <p className="text-gray-400 mb-8">
              You can reach me through email or WhatsApp.
            </p>

            <div className="space-y-4">

              <button
                onClick={sendEmail}
                className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
              >
                📧 Send Email
              </button>

              <button
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg font-semibold flex items-center justify-center gap-3"
              >
                <FaWhatsapp size={22} />
                WhatsApp
              </button>

            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>Email: allouah30@outlook.com</p>
              <p>WhatsApp: +249 908 842 528</p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}