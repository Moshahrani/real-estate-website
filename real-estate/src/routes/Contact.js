import React from "react";
import ContactForm from "../components/ContactForm";
import GoogleMapsEmbed from "../components/Map";
import "../css/Contact.css";

const Contact = () => {
  const addressStyle = {
    display: "none",
  };

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <ContactForm style={addressStyle} />
      </div>
      <div className="map-container">
        <GoogleMapsEmbed />
      </div>
    </div>
  );
};

export default Contact;
