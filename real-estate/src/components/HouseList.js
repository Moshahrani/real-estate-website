import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HouseList = () => {
  const [houseData, setHouseData] = useState([]);

  useEffect(() => {
    const fetchHouseData = async () => {
      const options = {
        method: 'GET',
        url: process.env.REACT_APP_ZILLOW_URL,
    params: {
        location: 'Walnut Creek , ca',
        page: '1',
        home_type: 'Houses'
      },
      headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_ZILLOW_API_KEY,
              'X-RapidAPI-Host': process.env.REACT_APP_ZILLOW_HOST,
            },
    };

      try {
        const response = await axios.request(options);
        console.log("success")
        setHouseData(response.data.props);
      } catch (error) {
        console.error('Error fetching house data:', error);
      }
    };

    fetchHouseData();
  }, []);

  return (
    <div>
       {houseData && houseData.map((house) => (
        <div key={house.zpid}>
          <h2>{house.address}</h2>
          <p>Price: {house.price}</p>
          <p>Bedrooms: {house.bedrooms}</p>
          <p>Bathrooms: {house.bathrooms}</p>
          <p>Living Area: {house.livingArea}</p>
          <img src={house.imgSrc} alt={house.address} />
        </div>
      ))}
    </div>
  );
};

export default HouseList;
