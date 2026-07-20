import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function getPaginationRange(current, total) {
  const delta = 2; // show 2 pages before/after
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

export function Paginate({ currentPage, totalPages, handlePageChange, count, pageSize }) {
  const pageRange = getPaginationRange(currentPage, totalPages);

  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      <span className="mb-2 mb-md-0">
        Showing {(count > 0 && (currentPage - 1) * pageSize + 1) || 0} to{" "}
        {currentPage * pageSize < count ? currentPage * pageSize : count || 0} of{" "}
        {count || 0} entries
      </span>

      <nav aria-label="Pagination">
        <ul className="pagination mb-0 gap-2 align-items-center">
          {/* Previous */}
          <li className={`page-item me-3 ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link bg-transparent border-0 text-dark d-flex align-items-center"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaAngleLeft className="me-1" />
              Previous
            </button>
          </li>

        
          {pageRange.map((page, idx) => (
            <li
              key={idx}
              className={`page-item ${currentPage === page ? "active" : ""} ${
                page === "..." ? "disabled" : ""
              }`}
            >
              <button
                className={`page-link fw-semibold ${
                  page === "..."
                    ? "bg-transparent text-dark"
                    : currentPage === page
                    ? "bg-dark text-white"
                    : "bg-light text-dark"
                }`}
                style={{
                  borderRadius: "8px",
                  minWidth: "35px",
                  height: "35px",
                  padding: "6px 10px",
                  border: "none",
                }}
                onClick={() => page !== "..." && handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}

          {/* Next */}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link bg-transparent border-0 text-dark d-flex align-items-center"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              {/* <FaAngleRight className="ms-1" /> */}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
