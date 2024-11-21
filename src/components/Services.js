import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto my-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">My Services</h1>
        <p className="mt-2 text-lg text-gray-600">I offer a wide range of video editing services.</p>
      </header>

      <section className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Video Editing</h3>
            <p className="mt-2 text-gray-600">I provide professional video editing services for various formats.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Motion Graphics</h3>
            <p className="mt-2 text-gray-600">Create stunning motion graphics for promotional content.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">VFX & Animation</h3>
            <p className="mt-2 text-gray-600">Add visual effects and animation to enhance your video.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
