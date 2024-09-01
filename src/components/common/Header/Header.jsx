import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span className="logo-span">.</span>
      </h1>

      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>

        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>

        <Link to="/dashboard">
          <Button text="Dashboard" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
