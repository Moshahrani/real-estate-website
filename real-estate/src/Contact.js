import { FaUser, FaPhone, FaEnvelope, FaIdCard, FaMapMarkerAlt } from 'react-icons/fa';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact-container">
    <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <FaUser /> <div>Shafiq Shahrani</div>
          </div>
          <div className="form-group">
            <FaPhone /> <div>9254052719</div>
          </div>
          <div className="form-group">
            <FaEnvelope /> <div>shahranihomes@gmail.com</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <FaIdCard /> <div>DRE #02192359</div>
          </div>
          <div className="form-group">
            <FaMapMarkerAlt/> <div>2890 N Main Street,<br></br> Walnut Creek, CA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;