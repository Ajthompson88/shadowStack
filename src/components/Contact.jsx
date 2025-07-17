// src/components/Contact.jsx
import React from "react";
import SectionTitle from "./SectionTitle";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact" />
      </div>

        <form
          className="mt-10 flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("This form doesn't do anything... yet! 😅");
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-4 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-4 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />
          <button
            type="submit"
            className="mt-2 self-start bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded shadow-md transition-all duration-300 hover:shadow-purple-500/50"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaLinkedinIn size={24} />
          </a>
        <a
          href="https://github.com/Ajthompson88"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
