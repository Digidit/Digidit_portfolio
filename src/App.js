import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './index.css'; // TailwindCSS and custom styles
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar /> {/* This will render the Navbar component on every page */}
        <div className="pt-16"> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
