import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import Home from "./components/Home";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import city from ".//media/city.jpg";
import SocialLinks from "./components/SocialLinks";
import MoreInfo from "./components/MoreInfo";
import Houses from "./components/Houses";
import HouseList from "./components/HouseList";
import ScrollToTop from './components/ScrollTop';
// import "./App.css";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <CustomNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                {/* <Contact /> */}
              </>
            }
          />
          <Route
            path="/houses"
            element={
              <HouseList>
                {(houseData) => <Houses houseData={houseData} />}
              </HouseList>
            }
          />
          {/* <Route
            path="/moreInfo"
            element={
              <>
                <MoreInfo />
              </>
            }
          /> */}
          <Route
            path="/about"
            element={
              <>
                <About />
                {/* <Contact /> */}
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactForm />
                <Contact />
              </>
            }
          />
        </Routes>
        <div className="d-none d-lg-block"></div>
        <SocialLinks />
      </div>
    </Router>
  );
};

export default App;
