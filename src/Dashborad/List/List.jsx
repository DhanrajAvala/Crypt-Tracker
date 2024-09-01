import React from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import "./List.css";
import { delay, motion } from "framer-motion";

const List = ({ coin }) => {
  return (
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

        <div className="list-chip">
          <td className="list-percentage">
            {coin?.price_change_percentage_24h}
          </td>

          <td className="list-graph">
            <TrendingUpRoundedIcon />
          </td>
        </div>

        <td>
          <p className="list-price">{"$" + coin?.current_price}</p>
        </td>

        <td>
          <p className="list-name">{"$" + coin?.total_volume}</p>
        </td>
        <td>
          <p className="list-name">{"$" + coin?.market_cap}</p>
        </td>
      </tr>
    </motion.table>
  );
};

export default List;
