import React, { useState } from "react";
import "./Search.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { delay, motion } from "framer-motion";

const Search = ({ searchInput, onSearchChange }) => {
  return (
    <div>
      <motion.div
        className="search"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SearchRoundedIcon />
        <input
          type="search"
          placeholder="search"
          value={searchInput}
          onChange={(e) => onSearchChange(e)}
        />
      </motion.div>
    </div>
  );
};

export default Search;
