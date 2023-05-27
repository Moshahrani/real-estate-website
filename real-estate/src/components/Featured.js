import "../css/Featured.css";
import SF from "../media/SF2.jpg";

const Featured = () => {
  return (
    <div className="feature-container">
      <div className="featuredText">
        <div className="featuredFirst"> Featured </div>
        <div className="featuredSecond">Communities</div>
      </div>
      <div className="city-grid">
        <div className="city-item">
          <div className="image-container">
            <img src={SF} alt="City 1" />
            <h2>San Francisco</h2>
          </div>
          <div className="description">
            <p>
              San Francisco, a picturesque city in Northern California, is
              encompassed by the Pacific Ocean and San Francisco Bay. It comprises
              a variety of neighborhoods, each possessing its own distinct
              character. San Francisco attracts a multicultural population from
              around the world, enticed by its thriving industries, vibrant
              culinary and cultural scene, and breathtaking landscapes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
