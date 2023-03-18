import React from "react";
import "./Three.css";

const ThreeBoxes = () => {
  return (
    <div className="grid-container">
      <div className="box">
        <h2>Box 1</h2>
        <p>Text below Box 1</p>
      </div>
      <div className="box">
        <h2>Box 2</h2>
        <p>Text below Box 2</p>
      </div>
      <div className="box">
        <h2>Box 3</h2>
        <p>Text below Box 3</p>
      </div>
    </div>
  );
};

export default ThreeBoxes;
