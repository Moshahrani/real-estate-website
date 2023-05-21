import { Image } from "react-bootstrap";
import "../css/Associations.css";
import Nar from "../media/Nar.png";
import Ccar from "../media/Ccar.png";
import Car from "../media/Car.png";

const Associations = () => {
  return (
    <div className="footer">
      <Image src={Nar} className="footer-image" />
      <Image src={Ccar} className="footer-image" />
      <Image src={Car} className="footer-image" />
    </div>
  );
};

export default Associations;
