import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';

// Function to fetch house data from the RapidAPI Zillow endpoint
export const fetchHouseData = async () => {
    const options = {
      method: 'GET',
      url: process.env.ZILLOW_URL,
      params: { zpid: process.env.ZIP_ID },
      headers: {
        'X-RapidAPI-Key': process.env.ZILLOW_API_KEY,
        'X-RapidAPI-Host': process.env.ZILLOW_HOST,
      },
    };
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error('Error fetching house data:', error);
      throw error;
    }
  };