import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Tab.css";
import Grid from "../Grid/Grid";
import List from "../List/List";
import { delay, motion } from "framer-motion";

export default function TabComponent({ allcoins }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <motion.div
      className="tabs"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="1" className="tab1" />
          <Tab label="List" value="2" className="tab1" />
        </TabList>

        <TabPanel value="1">
          <div className="grid_list">
            {allcoins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="list_list">
            {allcoins.map((coin, i) => {
              return <List coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
      </TabContext>
    </motion.div>
  );
}
