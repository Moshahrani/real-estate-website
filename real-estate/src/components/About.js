import "../css/About.css";
import Bio3 from "../media/Bio3.png";

const About = () => {

  return (
      <div className="about-page">
        <div className="about-container">
        <div className="bio-image-container" >
            <img className="bio-image" src={Bio3} alt="profilePic" />
          </div>
          <div className="bio-container" >
            <div className="bio-content">
              <p>
                Shafiq Shahrani is a well-known real estate advisor in the San
                Francisco Bay Area, renowned for his exceptional knowledge of
                the market and his tireless work ethic. Born and raised in the
                East Bay, Shafiq began his career in the real estate industry
                soon after his college career at San Jose State University. Over
                the years, Shafiq has earned a reputation as a trusted advisor
                to buyers and sellers alike, thanks to his unmatched level of
                expertise and his commitment to providing personalized service
                to each of his clients. He has a deep understanding of the local
                market, with a keen eye for finding hidden gems and uncovering
                untapped opportunities for his clients.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
