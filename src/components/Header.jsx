// src/components/Header.jsx
const sections = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Background", href: "#background" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-noir-950/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#top" className="group flex items-center gap-3" aria-label="Andrew Thompson, home">
        <span className="grid h-9 w-9 place-items-center rounded-lg border border-blueglow/40 bg-blueglow/10 text-sm font-bold text-blueglow">
          AT
        </span>
        <span className="font-display text-sm font-semibold tracking-wide text-white sm:text-base">
          Andrew Thompson
        </span>
      </a>

      <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex" aria-label="Primary navigation">
        {sections.map((section) => (
          <a key={section.href} href={section.href} className="transition-colors hover:text-white">
            {section.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="button-secondary hidden sm:inline-flex">
        Let&apos;s talk
      </a>
      <a href="#work" className="text-sm font-semibold text-blueglow sm:hidden">
        View work
      </a>
    </div>
  </header>
);
export default Header;

