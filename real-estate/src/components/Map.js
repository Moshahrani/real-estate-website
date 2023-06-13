import React from 'react';
import "../css/Map.css"

const GoogleMapsEmbed = () => {
  return (
    <iframe
     className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.4783155468162!2d-122.06013092454131!3d37.895881205175165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808561c22c88961b%3A0x8f324e2dbd34b2e1!2s1212%20Broadway%20Plaza%202100%2045%2C%20Walnut%20Creek%2C%20CA%2094596!5e0!3m2!1sen!2sus!4v1686674669415!5m2!1sen!2sus"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMapsEmbed;
