// In your Home.js component
import React from 'react';
import NavBar from './Navbar';

const Home = () => {
  
  return (
    <section className="hero bg-cover bg-center py-32  text-center" style={{ backgroundImage: 'url(https://example.com/hero-image.jpg)' }}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to DIGIDIT</h1>
        <p className="text-lg mb-8">I am a passionate video editor with skills in creating stunning videos. Explore my work and learn more about what I can offer.</p>
        <a 
  href="#about" 
  className="bg-gray-700 text-white py-2 px-4 rounded-lg text-xl hover:bg-gray-800 hover:text-white"
>
  Learn More
</a>
 </div>
    </section>
  );
};

export default Home;
