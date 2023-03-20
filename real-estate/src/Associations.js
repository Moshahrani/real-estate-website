import { Image } from "react-bootstrap";
import "./Associations.css";
import Nar from "./Nar.png";
import Ccar from "./Ccar.png";
import Car from "./Car.png";

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
