import React from "react";
import calculator from "../assets/calculator.jpeg";

function Header() {
  return (
    <div>
      <img src={calculator} alt="calculaterImage" />
      <h2>Investment calculator</h2>
    </div>
  );
}

export default Header;
