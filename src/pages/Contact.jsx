import React from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-20 p-6 min-h-screen bg-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>

      <div className="space-y-4 text-gray-700 text-lg">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-600" />
          <span>Email: <a href="mailto:stackvil@gmail.com" className="text-blue-600 hover:underline">stackvil@gmail.com</a></span>
        </div>

        <div className="flex items-center gap-3">
          <FaPhone className="text-blue-600" />
          <span>Phone: <a href="tel:+918919079058" className="text-blue-600 hover:underline">8919079058</a></span>
        </div>

        <div className="flex items-center gap-3">
          <FaInstagram className="text-pink-600" />
          <span>
            Instagram: <a href="https://instagram.com/stackvil_solutions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@stackvil_solutions</a>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaTwitter className="text-blue-500" />
          <span>
            Twitter: <a href="https://twitter.com/stackvil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@stackvilsolution</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
