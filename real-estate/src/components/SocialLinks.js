import { FaFacebookF, FaInstagram, FaLinkedinIn, FaIdCard } from "react-icons/fa";
import '../css/SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-container">
      <a href="https://www.facebook.com/profile.php?id=100090302367422"><FaFacebookF /></a>
      <a href="https://www.instagram.com/shahrani.realtor/"><FaInstagram /></a>
      {/* <a href="https://twitter.com"><FaTwitter /></a> */}
      <a href="https://www.linkedin.com/in/shafiq-shahrani"><FaLinkedinIn /></a>
       <a className="license-number">DRE #02192359</a>
       {/* <FaIdCard /> */}
    </div>
  );
};

export default SocialLinks;