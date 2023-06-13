import React from "react";
import ContactForm from "./ContactForm";
import "../css/Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-form-contact-route">
            <ContactForm />
            </div>
            <div className="map-container">

            </div>
        </div>
    )
}

export default Contact;