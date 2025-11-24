// src/components/Header.jsx
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Logo />
        <h1 className="text-2xl font-bold text-white tracking-wider"></h1>
      </div>
      <nav className="hidden md:flex gap-6 text-gray-300 font-medium">
        {/* Future nav links */}
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
