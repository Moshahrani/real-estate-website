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
          <img src={SF} alt="City 1" />
          <h3>San Francisco</h3>
          <p>city description</p>
        </div>
      </div>
      {/* <div className="sanfran">San Francisco</div>
      <div className="silicon">Silicon Valley</div>
      <div className="eastBay">East Bay</div>
      <div className="triValley">Tri-Valley</div> */}
    </div>
  );
};

export default Featured;
