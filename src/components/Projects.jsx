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
  {
    title: 'Save Sync – Personal Finance Tracking App',
    description: 'Led the development of a personal finance app enabling users to track expenses, monitor spending trends, and set budgets. Integrated features like categorized logging, visual summaries, and budget alerts for an intuitive experience. ',
    tags: ['Kotlin', 'Android SDK', 'Room Database', 'Material Design', 'MPAndroidChart'],
    url: 'https://github.com/DinujaNethmal/Save-Sync',
    gradient: 'from-green-600 to-lime-600',
  },
  {
    title: 'PawTracker – Appointment Management Module',
    description: 'Developed the appointment management feature for a pet wellness web app. Enabled users to book, view, edit, delete appointments, and download appointment details as PDFs. On the admin side, implemented appointment review functionality with approve/reject actions, PDF generation, and real-time notification dispatch to users. ',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'MERN Stack'],
    url: 'https://github.com/DinujaNethmal/PawTracker',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Vehicle inspection company management system',
    description: 'Developed a vehicle inspection management web application to streamline the process of recording, managing, and reviewing vehicle inspection details. Implemented features allowing staff to register vehicles, schedule inspections, update inspection results, and maintain inspection records. The system also includes a user-friendly interface for customers to view their vehicle inspection history and receive notifications about upcoming inspections.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'MERN Stack'],
    url: 'https://github.com/DinujaNethmal/Vehicle-inspection-company-.git',
    gradient: 'from-pink-600 to-cyan-600',
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
