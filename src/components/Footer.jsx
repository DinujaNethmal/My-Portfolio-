import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-slate/20 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Dinuja Nethmal Gamage</span>. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">Crafted with <span className="text-accent">♥</span> using React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
