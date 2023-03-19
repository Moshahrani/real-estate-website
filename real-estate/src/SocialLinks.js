import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-container">
      <a href="https://www.facebook.com"><FaFacebookF /></a>
      <a href="https://www.instagram.com"><FaInstagram /></a>
      {/* <a href="https://twitter.com"><FaTwitter /></a> */}
      <a href="https://www.linkedin.com/in/shafiq-shahrani"><FaLinkedinIn /></a>
    </div>
  );
};

export default SocialLinks;