import { useEffect, useState } from "react";

interface HeaderProps {
  companyName?: string;
}

export default function Header({
  companyName = "PT. Nawasena Kreasi Teknologi",
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-primary-900/95 backdrop-blur-sm text-white transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgba(19,36,71,0.2)] bg-primary-900/98" : "shadow-none"
      }`}
    >
      {/* Hairline bottom border when scrolled */}
      <div className={`absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary-700 to-transparent transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`} />
      
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="text-base font-semibold tracking-tight hover:text-secondary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded"
        >
          {companyName}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-white/90 hover:text-secondary-400 transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-secondary-400 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-secondary-400 px-5 py-2.5 text-sm font-semibold text-primary-900 transition-colors hover:bg-secondary-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
          >
            Let’s Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-secondary-400 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs transform bg-primary-900 text-white p-6 shadow-xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 rounded-md p-2 text-white/90 hover:text-secondary-400 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="mt-10 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-secondary-400"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="mt-6 rounded-full bg-secondary-400 px-5 py-2.5 text-center text-sm font-semibold text-primary-900 hover:bg-secondary-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Let’s Talk
          </a>
        </div>

        {/* Hairline separator */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      </div>
    </header>
  );
}
