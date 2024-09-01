import React from "react";
import "./Dropdown.css";
const Dropdown = () => {
  return (
    <div className="dropdown-section">
      <div className="dropdown-content">
        <select className="select">
          <option value="bitcoin">bitcoin</option>
          <option value="saab">Ethereum</option>
          <option value="fiat">30 Days</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
