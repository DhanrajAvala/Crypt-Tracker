import { Container } from "@mui/material";
import React from "react";
import "./Grid.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Grid = ({ coin }) => {
  return (
    <>
      <Link to={`/coin/${coin.id}`}>
        <motion.div
          className={`grid-box   ${
            coin.price_change_percentage_24h < 0 && "grid-box-red"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="grid">
            <div className="grid-img">
              <img src={coin?.image} alt="" width="50px" />
            </div>
            <p className="grid-tittle">
              {coin?.symbol}
              <p className="grid-subtittle">{coin?.name}</p>
            </p>
          </div>

          {coin.price_change_percentage_24h > 0 ? (
            <div className="chip">
              <div className="grid-percentage">
                {coin?.price_change_percentage_24h}
              </div>

              <div className="grid-graph">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          ) : (
            <div className="chip">
              <div className="grid-percentage  chip-red">
                {coin?.price_change_percentage_24h}
              </div>

              <div className="grid-graph graph-red">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          )}

          <p
            className={
              coin.price_change_percentage_24h > 0 ? "grid-price" : "red-price"
            }
          >
            {"$" + coin?.current_price}
          </p>

          <div className="grid-name">
            <p className="name">{"Total Volume : $" + coin?.total_volume}</p>
            <p className="name">{"Market Cap : $" + coin?.market_cap}</p>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default Grid;
