import { useState } from "react";
import Section from "../layout/Section";
import SectionTitle from "./SectionTitle";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      setStatus("sending");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" maxWidth="max-w-4xl">
      <SectionTitle title="Contact" />

      <form
        className="mt-10 flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-4 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blueglow transition"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-4 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blueglow transition"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="p-4 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blueglow transition"
          required
        />

        {/* Honeypot field — hidden from real users */}
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 self-start bg-blueglow-dark hover:bg-blueglow-light text-white font-semibold py-3 px-6 rounded shadow-md transition-all duration-300 hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400">
            Message sent successfully. I'll get back to you soon!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      {/* <div className="mt-12 flex justify-center gap-6">
        <a
          href="https://www.facebook.com/andrew.thompson.58726"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <FaFacebookF size={24} />
        </a> */}

        {/* <a
          href="https://www.instagram.com/sinner25aved/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <FaInstagram size={24} />
        </a> */}

        {/* <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <FaTwitter size={24} />
        </a> */}

        <a
          href="https://www.linkedin.com/in/andrew-thompson-442477aa"
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
    </Section>
  );
};

export default Contact;