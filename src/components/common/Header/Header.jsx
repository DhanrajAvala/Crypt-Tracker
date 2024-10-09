import React, { useState, useEffect } from "react";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle between dark and light mode when `isDarkMode` changes
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span className="logo-span">.</span>
      </h1>

      <div className="links">
        <label className="switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
          <span className="slider"></span>
        </label>

        <Link to="/">
          <p className="link-item">Home</p>
        </Link>

        {/* <Link to="/compare">
          <p className="link">Compare</p>
        </Link> */}

        <Link to="/dashboard">
          <Button text="Dashboard" />
        </Link>
      </div>

      <div className="container">
        <input className="label-check" id="label-check" type="checkbox" />
        <label htmlFor="label-check" className="hamburger-label">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </label>
      </div>
    </div>
  );
};

export default Header;
