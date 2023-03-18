import cococounty from "./cococounty.jpeg";
import "./Home.css";

const Home = () => {
    const overlayStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        minHeight: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 1,
      };
  
    const contentStyles = {
      position: "relative",
      zIndex: 2,
    };

    return (
      <div className="opening-statement" style={{ position: "relative" }}>
        <div style={overlayStyles}></div>
        <div style={contentStyles}>
          <h1 className="statement">Who you work with matters!</h1>
          <h2 className="mission-statement">
            Our clients know they are getting a personalized service based on our
            local expertise, industry knowledge and expert team.
          </h2>
        </div>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${cococounty})`,
            // backgroundSize: "cover",
            // position: "absolute",
            // width: "100%",
            // height: "100%",
            zIndex: 1,
          }}
        ></div>
      </div>
    );
  };
  
  export default Home;
  