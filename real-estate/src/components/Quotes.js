import React, { useEffect, useState } from "react";
import { salesApproaches } from "../sales";
import "../css/Quotes.css";

const Quotes = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [animationPaused, setAnimationPaused] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setAnimationPaused(true); // Pause the animation
        setTimeout(() => {
          setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % salesApproaches.length);
          setAnimationPaused(false); // Resume the animation
        }, 500); // Wait for 500ms before changing the quote and resuming the animation
      }, 7000);
  
      return () => clearInterval(interval);
    }, [salesApproaches]);
  
    return (
      <div className="quote-container">
        <div className={`quote ${animationPaused ? "paused" : ""}`}>{salesApproaches[currentQuoteIndex]}</div>
      </div>
    );
  };
  
  export default Quotes;
