import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header/Header";
import Search from "../Search/Search";
import TabComponent from "../../Dashborad/Tabs/Tab";
import axios from "axios";
import PaginationComponent from "../Pagination/Pagination";

const Dashboard = () => {
  const [allcoins, setAllCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      })
      .then((response) => {
        setAllCoins(response.data);
        setPaginatedCoins(response.data.slice(0, itemsPerPage));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
    setPage(1); // Reset to first page on search
  };

  // Filter coins based on search input
  const filteredCoins = allcoins.filter(
    (item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Determine which coins to display
  const displayCoins = searchInput ? filteredCoins : allcoins;

  // Update paginatedCoins when page or displayCoins changes
  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedCoins(displayCoins.slice(startIndex, endIndex));
  }, [page, displayCoins]);

  return (
    <>
      <Header />
      <Search searchInput={searchInput} onSearchChange={onSearchChange} />
      <TabComponent allcoins={paginatedCoins} />
      <PaginationComponent
        page={page}
        handlePageChange={handlePageChange}
        count={Math.ceil(displayCoins.length / itemsPerPage)}
      />
    </>
  );
};

export default Dashboard;
