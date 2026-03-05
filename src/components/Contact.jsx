import React from 'react';

export default function Contact() {
  return (
    <section className="py-32 bg-gradient-to-br from-dark via-green-950/10 to-dark text-white" id="contact">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        
        <p className="text-2xl text-gray-300 mb-12 font-light leading-relaxed">
          I'm always open to new projects and opportunities. Feel free to reach out and let's create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="dinujanethmal119@GMAIL.COM"
            className="px-12 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105 text-lg"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/dinuja-nethmal-gamage-364152269/"
            className="px-12 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition text-lg"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
