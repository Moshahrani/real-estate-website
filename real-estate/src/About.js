import "./About.css";
import Bio1 from "./Bio1.png";
import city from "./city.jpg";

const About = () => {
    const styles = {
      backgroundImage: `url(${city})`,
      backgroundSize: "cover",
    //   backgroundPosition: "center",
      height: "100vh",
    };
  
    return (
      <div style={styles}>
        <div className="container" >
          <div className="pic" >
            <img className="image" src={Bio1} alt="profilePic" />
          </div>
          <div className="bio">
            {/* <h2>Shafiq Shahrani</h2> */}
            <p>
            Shafiq Shahrani is a well-known real estate advisor in the San Francisco Bay Area, renowned for his exceptional knowledge of the market and his tireless work ethic. Born and raised in the East Bay, Shafiq began his career in the real estate industry soon after his college career at San Jose State University. 
Over the years, Shafiq has earned a reputation as a trusted advisor to buyers and sellers alike, thanks to his unmatched level of expertise and his commitment to providing personalized service to each of his clients. He has a deep understanding of the local market, with a keen eye for finding hidden gems and uncovering untapped opportunities for his clients.
{/* Throughout his career, Shafiq has been recognized for his outstanding sales performance, earning numerous accolades and awards for his achievements. He is widely respected within the industry, both for his skills as a negotiator and for his unwavering dedication to achieving the best possible outcome for his clients.
Shafiq's success is rooted in his passion for real estate, which is evident in every aspect of his work. He takes the time to listen carefully to his clients' needs and goals, and works tirelessly to ensure that they are met. His attention to detail, strong work ethic, and unwavering commitment to his clients have made him a top-performing agent in the Bay Area.
Outside of work, Shafiq enjoys spending time with his family, exploring the great outdoors, and giving back to his community. He is an active member of several local charities and organizations, and is committed to making a positive impact in the lives of those around him.
In short, Shafiq Shahrani is a highly skilled, knowledgeable, and dedicated real estate agent who is deeply committed to his clients' success. Whether you are buying or selling a home in the Bay Area, you can trust Shafiq to provide the expertise, guidance, and support you need to achieve your goals. */}
            </p>
          </div>
        </div>
        </div>
      );
    };
    
export default About;

    
    
    
    
    