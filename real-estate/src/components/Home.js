import React, { useEffect, useRef } from "react";
// import cococounty from "../media/cococounty.jpeg";
import "../css/Home.css";
import Featured from "./Featured";
import Associations from "./Associations";
// import personal1 from "../media/personal1.jpg";
import CustomCarousel from "./Carousel";
import AboutMe from "./AboutMe";
import Steps from "./Steps";
import BayBridge from "../media/BayBridge.mp4";

const Home = () => {
  const videoRef = useRef();
  // video should autoplay across all devices and screen sizes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const contentStyles = {
    position: "relative",
    zIndex: 2,
  };

  const styles = {
    position: "relative",
    overflow: "hidden",
    height: "90vh",
  };

  const videoStyles = {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
  };

  return (
    <div>
      <div style={styles}>
        <video
          ref={videoRef}
          src={BayBridge}
          autoPlay="autoplay"
          playsInLine="playsinline"
          loop="true"
          muted="true"
          style={videoStyles}
        />
          {/* <source src={BayBridge} type="video/mp4" />
        </video> */}
        <div className="opening-statement" style={{ position: "relative" }}>
          {/* <div style={overlayStyles}></div> */}
          <div style={contentStyles}>
            <h1 className="statement">Who you work with matters!</h1>
            <h2 className="mission-statement">
              Our clients know they are getting a personalized service based on
              our local expertise, industry knowledge and expert team.
            </h2>
          </div>
        </div>
      </div>
      <div className="whitespace-container">
        <div className="whitespace-border">
          <div className="whitespace-text"></div>
        </div>
      </div>
      <CustomCarousel />
      <AboutMe />
      <div className="border-line"></div>
      <Steps />
      <div className="border-line"></div>
      <Featured />
      <Associations />
    </div>
  );
};

export default Home;