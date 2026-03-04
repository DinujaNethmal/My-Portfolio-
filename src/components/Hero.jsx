import React from 'react';
import profilePhoto from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-darkGray to-dark text-white pt-20" id="home">
      <div className="container mx-auto px-6 py-12">
        {/* test for tailwind */}
        <p className="text-red-500 font-bold">If you see this in red, Tailwind is working</p>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo Section */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-96 h-96 rounded-2xl overflow-hidden border-4 border-primary/50 shadow-2xl hover:shadow-primary/50 transition duration-500 hover:scale-105">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <p className="text-primary font-semibold text-lg mb-2 tracking-widest uppercase">Welcome to my portfolio</p>
            <h1 className="text-7xl md:text-8xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Dinuja Nethmal</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8 font-light leading-relaxed">
              Full‑stack developer crafting beautiful, responsive web applications with modern technologies.
            </p>
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 px-10 rounded-lg shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105 text-lg"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
