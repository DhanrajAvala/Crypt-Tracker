import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Compare from "./Dashborad/Compare/Compare";
import Dashboard from "./Dashborad/Dashboard/Dashboard";
import LandinPage from "./pages/LandingPage/LandinPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./Dashborad/DetailsPage/DetailsPage";
import ComparePage from "./pages/ComparePage/ComparePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandinPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/compare" element={<ComparePage />} /> */}
          <Route path="/coin/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
