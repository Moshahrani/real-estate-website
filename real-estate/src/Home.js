import cococounty from "./cococounty.jpeg";

const Home = () => {
    return (
        <div className="opening-statement">
        <h1 className="statement">Who you work with matters!</h1>
        {/* <p>This is a paragraph of introductory text.</p> */}
        <h2 className="mission-statement">
          Our clients know they are getting a personalized service based on our local expertise, industry knowledge and expert team.
        </h2>
          <div
          className="background-image"
          style={{ backgroundImage: `url(${cococounty})`,
          backgroundSize: "cover", }}
        ></div>
      </div>
    
    )
};

export default Home;