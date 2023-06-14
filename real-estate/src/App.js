import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
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
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
        </Routes>
        {/* <div className="d-none d-lg-block"></div> */}
        <SocialLinks />
      </div>
    </Router>
  );
};

export default App;
