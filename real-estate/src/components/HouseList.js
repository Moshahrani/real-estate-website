import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/HouseList.css";

const HouseList = () => {
  const [houseData, setHouseData] = useState([]);

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
          </div>
        ))}
    </div>
  );
};

export default HouseList;
