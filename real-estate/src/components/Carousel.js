import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import personal1 from "../media/personal1.jpg";
import "../css/Carousel.css";
import house3 from "../media/house3.jpeg";
import house4 from "../media/house4.jpeg";
import house1 from "../media/house1.jpeg";
import house6 from "../media/house6.jpeg";
import house2 from "../media/house2.jpeg";
import house8 from "../media/house8-2.jpeg";
import house9 from "../media/house9.jpeg";
import backyard from "../media/backyard.jpg";

const carouselBackground = {
  backgroundColor: "#333",
  // backgroundImage: `url(${backyardFence})`
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  height: '50%'
};

const CustomCarousel = () => {
  return (
    <div style={carouselBackground}>
      <div className="image-carousel-container">
        <img src={personal1} alt="" className="side-image" />
        <div className="carousel-content">
          <Carousel className="custom-carousel">
            <Carousel.Item className="custom-carousel-item">
              <img
                className="d-block w-100 custom-carousel-img"
                src={house6}
                alt="house image"
              />
            </Carousel.Item>
            <Carousel.Item className="custom-carousel-item">
              <img
                className="d-block w-100 custom-carousel-img"
                src={house2}
                alt="house image"
              />
            </Carousel.Item>
            {/* <Carousel.Item className="custom-carousel-item">
              <img
                className="d-block w-100 custom-carousel-img"
                src={house9}
                alt="house image "
              />
            </Carousel.Item> */}
            <Carousel.Item className="custom-carousel-item">
              <img
                className="d-block w-100 custom-carousel-img"
                src={house4}
                alt="house image"
              />
            </Carousel.Item>
            <Carousel.Item className="custom-carousel-item">
              <img
                className="custom-carousel-img"
                src={house3}
                alt="house image"
              />
            </Carousel.Item>
            {/* <Carousel.Item className="custom-carousel-item">
              <img
                className="d-block w-100 custom-carousel-img"
                src={house8}
                alt="house image"
              />
            </Carousel.Item> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
