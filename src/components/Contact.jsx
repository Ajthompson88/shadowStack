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
  return (
    <Section
      id="contact"
      gradient="from-gray-900 to-black"
      maxWidth="max-w-4xl"
    >
      <SectionTitle title="Contact" />

      <form
        className="mt-10 flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This form doesn't do anything... yet! ");
        }}
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
        <button
          type="submit"
          className="mt-2 self-start bg-blueglow-dark hover:bg-blueglow-light text-white font-semibold py-3 px-6 rounded shadow-md transition-all duration-300 hover:shadow-purple-500/50"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 flex justify-center gap-6">
        <a
          href="https://www.facebook.com/andrew.thompson.58726"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://www.instagram.com/aj.thompson8888/"
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
