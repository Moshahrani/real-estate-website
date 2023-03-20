import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import Home from './Home';
import About from './About';
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import city from "./city.jpg";
import SocialLinks from "./SocialLinks";
import MoreInfo from "./MoreInfo";
import Houses from "./Houses";
// import Associations from "./Associations";

const App = () => {
  
  return (
    <Router>
      <div>
        <CustomNavbar background={city} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/moreInfo" element={<MoreInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
         <div className="d-none d-lg-block">
          <Contact />
        </div>
        {/* <Associations /> */}
        <SocialLinks />
      </div>
    </Router>
  );
};

export default App;