import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto my-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <p className="mt-2 text-lg text-gray-600">Learn more about my work and skills.</p>
      </header>

      <section className="mt-10">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            src="/suraj.jpg"
            alt="Your image"
            className="w-48 h-48 rounded-full border-4 border-gray-300"
          />
          <div className="ml-0 lg:ml-8 mt-6 lg:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800">Hi, I'm Suraj!</h2>
            <p className="mt-2 text-gray-600">I am a passionate video editor with over 5 years of experience working on various multimedia projects.</p>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Skills</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Adobe Premiere Pro</li>
              <li>After Effects</li>
              <li>Final Cut Pro</li>
              <li>Motion Graphics</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
