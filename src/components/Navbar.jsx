import React, { useState } from 'react';

const links = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-dark/95 backdrop-blur-md shadow-2xl z-50 border-b border-slate/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition cursor-pointer">
          Dinuja
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-primary transition duration-300 font-medium text-sm uppercase tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition text-sm"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1 relative z-50"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark/98 border-t border-slate/20">
          <ul className="flex flex-col space-y-4 px-6 py-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-primary transition duration-300 font-medium text-sm uppercase tracking-wide block"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:your.email@example.com"
                className="w-full text-center px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transition text-sm"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
