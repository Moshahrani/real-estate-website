import cococounty from "../media/cococounty.jpeg";
import "../css/Home.css";
import Associations from "./Associations";
import personal1 from "../media/personal1.jpg";

const Home = () => {
  const styles = {
    backgroundImage: `url(${cococounty})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    //   backgroundRepeat: "no-repeat",
    // height: "100vh",
    // position: "absolute",
    // width: "100%",
    // height: "100%",
    zIndex: 1,
  };

  const personal = {
    backgroundImage: `url(${personal1})`,
     height: "800px",
     maxWidth: "600px"
  };
  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    // backgroundColor: "rgba(0, 0, 0, 0.25)",
    zIndex: 1,
  };

  const contentStyles = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <div >
      <div style={styles}>
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
      <div style={personal}></div>
      <Associations />
    </div>
  );
};

export default Home;
