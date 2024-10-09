import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import "./List.css";
import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";

const List = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.table
        className="list-box"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <tr className="list-container">
          <td className="list-img">
            <img src={coin?.image} alt="" width="50px" />
          </td>

          <td className="namelist">
            <p className="list-tittle">
              {coin?.symbol}
              <p className="list-subtittle">{coin?.name}</p>
            </p>
          </td>

          {coin.price_change_percentage_24h > 0 ? (
            <div className="list">
              <div className="list-percentage">
                {coin?.price_change_percentage_24h}
              </div>

              <div className="list-graph">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          ) : (
            <div className="list">
              <div className="list-percentage  list-red">
                {coin?.price_change_percentage_24h}
              </div>

              <div className="list-graph lgraph-red">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          )}

          {/* <td className="list-chip">
            <div className="list-percentage">
              {coin?.price_change_percentage_24h}
            </div>

            <div className="list-graph">
              <TrendingUpRoundedIcon />
            </div>
          </td> */}

          <td>
            <p
              className={
                coin.price_change_percentage_24h > 0
                  ? "list-price"
                  : "list-red-price"
              }
            >
              {"$" + coin?.current_price}
            </p>
          </td>

          <td>
            <p className="list-name">{"$" + coin?.total_volume}</p>
          </td>
          <td>
            <p className="list-name">{"$" + coin?.market_cap}</p>
          </td>
        </tr>
      </motion.table>
    </Link>
  );
};

export default List;
