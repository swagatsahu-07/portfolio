import React, { useState } from "react";
import emailjs from "emailjs-com";
import resume from '../assets/Swagat_Resume.pdf'


const HireMeModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          e.target.reset();

          // optional: auto close modal after 2.5s
          setTimeout(() => {
            setSuccess(false);
            onClose();
          }, 2500);
        },
        () => {
          setLoading(false);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[420px] rounded-2xl bg-[#0a0a0a] border border-white/20 p-6 text-gray-200">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Let’s Work Together</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Resume Actions */}
        <div className="flex gap-3 mb-6">
          <a
            href={resume}
            target="_blank"
            className="flex-1 text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            View Resume
          </a>

          <a
            href={resume}
            download
            className="flex-1 text-center py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            Download
          </a>
        </div>

        <div className="border-t border-white/10 mb-4" />

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="mb-4 text-center text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg py-2">
            ✅ Message sent successfully
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={sendEmail} className="space-y-3">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 outline-none"
            disabled={loading}
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 outline-none"
            disabled={loading}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 outline-none resize-none"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg transition ${
              loading
                ? "bg-white/10 cursor-not-allowed"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;
