import { useState } from "react";
import Section from "../layout/Section";
import SectionTitle from "./SectionTitle";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";

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
    <Section id="contact" maxWidth="max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionTitle eyebrow="Contact" title="Let's build something dependable" description="I'm interested in junior backend and full-stack opportunities where I can contribute, keep learning, and help a team solve real problems." align="left" />
          <div className="flex flex-wrap gap-3">
            <a href="mailto:aj.thompson8888@gmail.com" className="button-secondary"><FiMail aria-hidden="true" /> Email</a>
            <a href="/Andrew_Thompson_Resume.pdf" target="_blank" rel="noreferrer" className="button-secondary"><FiDownload aria-hidden="true" /> Résumé</a>
          </div>
          <div className="mt-6 flex gap-5">
            <a href="https://www.linkedin.com/in/andrew-thompson-dev" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedinIn aria-hidden="true" /> LinkedIn</a>
            <a href="https://github.com/Ajthompson88" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub aria-hidden="true" /> GitHub</a>
          </div>
        </div>

        <form className="surface-card flex flex-col gap-5 p-7 sm:p-8" onSubmit={handleSubmit}>
          <h3 className="font-display text-xl font-semibold text-white">Send a message</h3>
          <label className="form-label" htmlFor="contact-name">
            Name<input id="contact-name" type="text" name="name" placeholder="Your Name" className="form-field" required />
          </label>

          <label className="form-label" htmlFor="contact-email">
            Email<input id="contact-email" type="email" name="email" placeholder="Your Email" className="form-field" required />
          </label>

          <label className="form-label" htmlFor="contact-message">
            Message<textarea id="contact-message" name="message" placeholder="Your Message" rows="5" className="form-field min-h-36 resize-y" required />
          </label>

          <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

          <button type="submit" disabled={status === "sending"} className="button-primary mt-1 self-start disabled:cursor-not-allowed disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="text-green-400">Message sent successfully. I'll get back to you soon!</p>}

          {status === "error" && <p className="text-red-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </Section>
  );
};

export default Contact;
