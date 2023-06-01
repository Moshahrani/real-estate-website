import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import personal1 from "../media/personal1.jpg";
import "../css/Carousel.css";
import house3 from "../media/house3.jpeg";
import house2 from "../media/house2.jpeg";
import interior from "../media/interior1.jpeg";
import house4 from "../media/house4.jpeg";
import house5 from "../media/house5.jpeg";
import house6 from "../media/house6.jpeg";
import house7 from "../media/house7.webp";
// import Image1 from './path-to-image1.jpg';
// import Image2 from './path-to-image2.jpg';
// import Image3 from './path-to-image3.jpg';

const CustomCarousel = () => {
  return (
    <div className="image-modal-container">
      <img src={personal1} alt="" className="side-image" />
      <div className="modal-content">
    <Carousel className="custom-carousel">
    <Carousel.Item className="custom-carousel-item">
        <img
          className="d-block w-100 custom-carousel-img"
          src={house7}
          alt="house image"
        />
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item">
        <img
          className="d-block w-100 custom-carousel-img"
          src={house3}
          alt="house image "
        />
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item">
        <img
          className="d-block w-100 custom-carousel-img"
          src={house4}
          alt="house image"
        />
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item">
        <img
          className="d-block w-100 custom-carousel-img"
          src={house5}
          alt="house image"
        />
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item">
        <img
          className="d-block w-100 custom-carousel-img"
          src={house6}
          alt="house image"
        />
      </Carousel.Item>
      
    </Carousel>
  </div>
</div>
  );
};

export default CustomCarousel;
