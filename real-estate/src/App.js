import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import Home from './Home';
import About from './About';
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import city from "./city.jpg";
import SocialLinks from "./SocialLinks";

const App = () => {
  
  return (
    <Router>
      <div>
        <CustomNavbar background={city} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Contact />
        <SocialLinks />
      </div>
    </Router>
  );
};

export default App;