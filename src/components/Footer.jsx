export default function Footer() {
    return (
      <footer className="border-t border-white/10 bg-noir-950 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Andrew Thompson. Built with care and verified before shipping.
      </footer>
    );
  }
