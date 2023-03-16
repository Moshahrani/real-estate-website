import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import Home from './Home';
import About from './About';
import city from "./city.jpg";

const App = () => {
  return (
    <Router>
      <div>
        <CustomNavbar background={city} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;