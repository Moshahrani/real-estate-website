import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import ContactForm from "./ContactForm";
import axios from "axios";
import "../css/HouseList.css";

const HouseList = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = (house) => {
    setSelectedHouse(house.address);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const [houseData, setHouseData] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  useEffect(() => {
    const fetchHouseData = async () => {
      const options = {
        method: "GET",
        url: process.env.REACT_APP_ZILLOW_URL,
        params: {
          location: "Walnut Creek , ca",
          page: "1",
          home_type: "Houses",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_ZILLOW_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_ZILLOW_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        console.log("success");
        setHouseData(response.data.props);
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    };

    fetchHouseData();
  }, []);

  return (
    <div className="grid-container">
      {houseData &&
        houseData.map((house) => (
          <div key={house.zpid} className="grid-item">
            <img
              src={house.imgSrc}
              alt={house.address}
              className="grid-image"
            />
            <p className="priceTag">
              {" "}
              {"$"}
              {Number(house.price).toLocaleString()}
            </p>
            <p>{house.address}</p>
            <div className="listing-info">
              <p>
                <span className="first-word">Bedrooms:</span> {house.bedrooms}
              </p>
              <div className="divider"></div>
              <p>
                <span className="first-word">Bathrooms:</span> {house.bathrooms}
              </p>
              <div className="divider"></div>
              <p>
                <span className="first-word">Living Area:</span>{" "}
                {house.livingArea}
              </p>
            </div>
            <Button size="sm" onClick={() => handleModalShow(house)}>
              Contact
            </Button>

            <Modal show={showModal} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Contact Information</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ContactForm selectedHouse={selectedHouse} handleModalClose={handleModalClose} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
    </div>
  );
};

export default HouseList;
