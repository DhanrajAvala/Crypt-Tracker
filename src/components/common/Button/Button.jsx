import React from "react";
import "./Button.css";

const Button = ({ className, text }) => {
  return (
    <div>
      <a href="">
        <button className={`link ${className}`}>{text}</button>
      </a>
    </div>
  );
};

export default Button;
