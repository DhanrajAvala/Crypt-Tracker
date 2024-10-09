import React from "react";
import "./Main.css";
import Button from "../Button/Button";
import ShareBtn from "../../common/Button/ShareBtn/ShareBtn";
import phone1 from "../../../assets/phone 1.svg";
import gradient1 from "../../../assets/gradient 1.svg";
import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="main">
      <div className="left-component">
        <motion.span
          className="tittle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track <br /> Crypto
        </motion.span>

        <motion.h1
          className="sub-tittle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>

        <motion.p
          className="main-paragraph"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>

        <motion.div
          className="main-button"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link to="/dashboard">
            <Button className="dashboard-btn" text="Dashboard" />
          </Link>

          <ShareBtn />
        </motion.div>
      </div>

      <div className="right-component">
        <div className="phone-container">
          <motion.img
            src={phone1}
            className="iphone"
            initial={{ y: -15 }}
            animate={{ y: 15 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
          <img src={gradient1} className="gradient" />
        </div>
      </div>
    </div>
  );
};

export default Main;
