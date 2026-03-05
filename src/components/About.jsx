import React from 'react';

export default function About() {
  const skills = ['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Web Design'];

  return (
    <section className="py-32 bg-gradient-to-br from-dark via-blue-950/20 to-dark text-white" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl">
          <div>
            <p className="text-xl text-gray-300 leading-relaxed mb-6 font-light">
            I am a results-driven UI/UX Designer and Mobile App Developer with a deep love for creating elegant, user-friendly digital applications. Currently pursuing my BSc (Hons) in IT at SLIIT, I thrive on solving complex problems and bridging the gap between beautiful design and powerful code.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
            As a passionate software developer with a strong foundation in computer science and years of hands-on experience, I am dedicated to delivering exceptional digital experiences. My expertise spans Full-Stack development with React, Node.js, and modern web technologies, and I am constantly learning and pushing boundaries to create high-impact mobile solutions and scalable architectures that feel amazing to use. 
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-8 text-primary">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30 text-center font-medium hover:border-primary/60 transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
