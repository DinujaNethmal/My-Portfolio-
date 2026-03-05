import React from 'react';

const CONTACT_INFO = {
  email: 'dinujanethmal119@gmail.com',
  phone: '+94 710834641',
  location: 'Colombo, Sri Lanka',
  linkedin: 'https://www.linkedin.com/in/dinuja-nethmal-gamage-364152269/',
  github: 'https://github.com/DinujaNethmal',
  portfolio: 'https://dinujanethmal.com',
  // Put your resume PDF in: My-Portfolio-/public/Dinuja-Nethmal-Resume.pdf
  // Vite will serve it at /Dinuja-Nethmal-Resume.pdf
  resume: '/Dinuja-Nethmal-Resume.pdf',
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-dark via-emerald-900/20 to-dark text-white"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? Reach
            out and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          {/* Contact card with details */}
          <div className="bg-darkGray/70 border border-emerald-500/30 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-success to-primary text-xl">
                ✉️
              </span>
              Contact Information
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-success/80 hover:bg-slate-900 transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-success/20 text-success text-xl">
                  @
                </span>
                <div className="text-left">
                  <p className="text-sm uppercase tracking-wide text-gray-400">
                    Email
                  </p>
                  <p className="font-medium break-all">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary text-xl">
                  📞
                </span>
                <div className="text-left">
                  <p className="text-sm uppercase tracking-wide text-gray-400">
                    Phone
                  </p>
                  <p className="font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-700/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary text-xl">
                  📍
                </span>
                <div className="text-left">
                  <p className="text-sm uppercase tracking-wide text-gray-400">
                    Location
                  </p>
                  <p className="font-medium">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links & social logos */}
          <div className="space-y-6">
            <div className="bg-darkGray/70 border border-emerald-500/30 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3 text-sm md:text-base">
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900/70 transition"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-sky-600/20 text-sky-400 text-lg font-bold">
                    in
                  </span>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900/70 transition"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-700/60 text-white text-lg font-bold">
                    {/* GitHub logo substitute */}
                    &#123;GH&#125;
                  </span>
                  <span className="font-medium">GitHub</span>
                </a>

                <a
                  href={CONTACT_INFO.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900/70 transition"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold">
                    🌐
                  </span>
                  <span className="font-medium">Portfolio</span>
                </a>

                <a
                  href={CONTACT_INFO.resume}
                  download
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-900/70 transition"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 text-lg font-bold">
                    📄
                  </span>
                  <span className="font-medium">Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons centered under grid */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition text-base md:text-lg w-full sm:w-auto"
          >
            <span>Send me an email</span>
          </a>
          <a
            href={CONTACT_INFO.resume}
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition text-base md:text-lg w-full sm:w-auto"
          >
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
