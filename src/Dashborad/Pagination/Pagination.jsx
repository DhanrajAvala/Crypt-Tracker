import React from "react";
import Pagination from "@mui/material/Pagination";
import "./Pagination.css";

export default function PaginationComponent({ page, handlePageChange, count }) {
  return (
    <div className="pagination-component">
      <Pagination
        count={count}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </div>
  );
}
