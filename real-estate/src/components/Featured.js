import React, { useState, useRef, useEffect } from "react";
import "../css/Featured.css";
// import SF from "../media/SF2.jpg";
// import SV from "../media/SV.jpg";
// import TV from "../media/TV.png";
// import EB from "../media/EB.jpg";
import SF2 from "../media/SF2sized.jpg";
import SV2 from "../media/SVsized.jpg";
import TV2 from "../media/TVsized.png";
import EB2 from "../media/EBsized.jpg";

// animation for city Items to transition into viewport while scrolling into view
const CityItem = ({ imgSrc, alt, city, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`city-item ${isVisible ? "slide-in" : ""}`}>
      <div className="image-container">
        <div className="background"></div>
        <img src={imgSrc} alt={alt} />
        <h2>{city}</h2>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <div>
      <div className="feature-container">
        <div className="featuredText">
          <div className="featuredFirst"> Featured </div>
          <div className="featuredSecond">Communities</div>
        </div>
      </div>
      <div className="city-grid">
        <CityItem
          imgSrc={SF2}
          alt="City 1"
          city="San Francisco"
          description="San Francisco, a picturesque city in Northern California, is
          encompassed by the Pacific Ocean and San Francisco Bay. It
          comprises a variety of neighborhoods, each possessing its own
          distinct character. San Francisco attracts a multicultural
          population from around the world, enticed by its thriving
          industries, vibrant culinary and cultural scene, and breathtaking
          landscapes."
        />
        <CityItem
          imgSrc={SV2}
          alt="City 2"
          city="Silicon Valley"
          description="  Silicon Valley, located in the southern region of California's San
          Francisco Bay Area, is a hotspot for technology start-ups,
          international tech firms, and tech-centric institutions. It is a
          magnet for the brightest talents in the tech industry and serves
          as a dynamic center for venture capital and innovative incubators
          that are driving global change. The real estate market in Silicon
          Valley is thriving and evolving at a rapid pace, mirroring the
          swift progress of the tech companies it houses.
"
        />
        <CityItem
          imgSrc={TV2}
          alt="City 3"
          city="Tri-Valley"
          description="
          The Tri-Valley, located in the eastern part of the San Francisco
                      Bay Area, lies between Oakland and San Francisco. It encompasses
                      several cities such as San Ramon, Danville, Alamo, Blackhawk,
                      Pleasanton, Livermore, Dublin, and Diablo. The region is renowned
                      for its pleasant Mediterranean climate, picturesque vineyards,
                      abundant parks and recreational facilities, and upscale dining
                      options. With a population of approximately 360,000, the
                      Tri-Valley is home to many long-established families. It offers
                      more affordable and secluded living options compared to the
                      bustling cities of San Francisco and San Jose, with smaller,
                      close-knit communities and schools.
        
        "
        />
        <CityItem
          imgSrc={EB2}
          alt="City 4"
          city="East Bay"
          description="
          The East Bay comprises various neighborhoods located in Alameda
                        and Contra Costa Counties, offering stunning vistas of the Bay
                        Area. Unwind in one of the numerous unique residences nestled
                        among the forested hills of Oakland. Alternatively, explore the
                        dynamic city of Walnut Creek, known for its acclaimed dining
                        establishments, premier shopping destinations, bustling theater
                        district, and top-notch educational institutions. Regardless of
                        which city you find yourself in within the East Bay, rest assured
                        that there is a wealth of activities and destinations suitable for
                        individuals of all ages.
          "
        />
      </div>
    </div>
  );
};

export default Featured;

{
  /* <div className="city-item-reverse">
          <div className="description-reverse">
            <h2>New York City</h2>
            <p>
              New York City, the bustling metropolis of the United States, is
              known for its iconic skyline, diverse neighborhoods, and vibrant
              culture. The city offers a wide range of attractions, from
              world-class museums and theaters to renowned restaurants and
              shopping destinations. Visitors and residents alike are drawn to
              the energy and dynamism that New York City has to offer.
            </p>
          </div>
          <div className="image-container-reverse">
            <div className="background-reverse"></div>
            <img src="" alt="City 2" />
          </div>
        </div>
</div> */
}
