import "../css/Steps.css";
import Step1 from "../media/Step1.png";
import Step2 from "../media/Step2.png";
import Step3 from "../media/Step3.png";

const Steps = () => {
  return (
    <div className="step-container">
    <div className="item">
        <img src={Step1} alt="Description 1" />
        <p>I'll evaluate your property and craft a custom sales strategy.</p>
    </div>
    <div className="item">
        <img src={Step2} alt="Description 2" />
        <p>I'll negotiate effectively to secure competitive offers.</p>
    </div>
    <div className="item">
        <img src={Step3} alt="Description 3" />
        <p>I'll manage all closing formalities for a smooth transaction.</p>
    </div>
</div>
  );
};

export default Steps;
