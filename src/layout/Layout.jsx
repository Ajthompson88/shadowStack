// src/layout/Layout.jsx
export default function Layout({ children }) {
    return (
      <div className="min-h-screen bg-black text-white font-sans tracking-wide">
        {/* Future Navbar would go here */}
        <main className="overflow-x-hidden">{children}</main>
        {/* Footer will already be part of children */}
      </div>
    );
  }
  