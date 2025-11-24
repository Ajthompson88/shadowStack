// src/components/Header.jsx
import Logo from "./Logo";

const sections = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => (
  <header className="w-full py-4 px-6 flex items-center justify-between bg-black/80 backdrop-blur-md sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <Logo />
    </div>

    {/* Mobile selector */}
    <div className="md:hidden">
      <label className="sr-only" htmlFor="nav-select">Navigate to section</label>
      <select
        id="nav-select"
        className="bg-black/70 border border-white/20 rounded px-3 py-2 text-sm"
        onChange={(e) => {
          if (e.target.value) {
            document.querySelector(e.target.value)?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <option value="">Navigate…</option>
        {sections.map((section) => (
          <option key={section.href} value={section.href}>{section.label}</option>
        ))}
      </select>
    </div>

    {/* Desktop nav */}
    <nav className="hidden md:flex gap-6 text-gray-300 font-medium">
      {sections.map((section) => (
        <a key={section.href} href={section.href} className="hover:text-white transition-colors">
          {section.label}
        </a>
      ))}
    </nav>
  </header>
);
export default Header;


