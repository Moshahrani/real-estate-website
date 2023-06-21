import "../css/Steps.css";
import Office1 from "../media/office1.jpg";
import Office2 from "../media/office2.jpg";
import Office3 from "../media/office3.jpg";

const Steps = () => {
  return (
    <div className="step-container">
    <div className="item">
        <img src={Office1} alt="Description 1" />
        <p>We evaluate your home thoroughly and create a custom sales strategy to maximize its value and attract qualified buyers.</p>
    </div>
    <div className="item">
        <img src={Office2} alt="Description 2" />
        <p>Our team excels in effective negotiation, working diligently to secure competitive offers that maximize your financial gain and guarantee a successful outcome in the sale of your property.</p>
    </div>
    <div className="item">
        <img src={Office3} alt="Description 3" />
        <p>Our meticulous team handles all closing formalities with attention to detail, ensuring a seamless transaction from start to finish.</p>
    </div>
</div>
  );
};

export default Steps;
