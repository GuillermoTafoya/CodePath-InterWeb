import React, { useState } from "react";
import defaultImg from "../assets/img.png";
import "./clicker.css"

function Clicker() {

  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <img src={defaultImg} className="samosa center" onClick={handleClick} />
    </div>
  );
}

export default Clicker;