import React from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React frontend and Node.js backend.',
    tags: ['React', 'Node.js', 'MongoDB'],
    url: '#',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Task Management App',
    description: 'Collaborate and manage tasks with real-time updates and beautiful UI.',
    tags: ['React', 'Firebase', 'Tailwind'],
    url: '#',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather data with interactive maps and forecasts.',
    tags: ['JavaScript', 'API', 'Tailwind'],
    url: '#',
    gradient: 'from-orange-600 to-red-600',
  },
];

export default function Projects() {
  return (
    <section className="py-32 bg-gradient-to-br from-darkGray to-dark text-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          Here are some of my recent works showcasing my skills and creativity.
        </p>
        
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="group relative bg-dark/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-0 group-hover:opacity-10 transition duration-500`}></div>
              
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition">{proj.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{proj.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 text-sm bg-slate-700/40 text-gray-100 rounded-full border border-slate-600/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={proj.url}
                  className="inline-block mt-6 text-primary font-semibold hover:text-secondary transition text-lg"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
