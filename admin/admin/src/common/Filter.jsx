import React from "react";
import { useLocation } from "react-router-dom";

const Filter = ({ filters, setFilters }) => {
  const today = new Date().toISOString().split("T")[0];
  const location = useLocation();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev) => ({ ...prev, [id]: value }));
  };

  const handleReset = () => {
    setFilters({
      startDate: "",
      endDate: "",
      sortBy: 1, // reset to default sort
    });
  };

  const handleApply = (e) => {
    e.preventDefault();
    // API call or parent side useEffect will handle it
  };

  return (
    <div className="dropdown filterdropdown">
      <button
        className="btn btn-secondary"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-filter" />
      </button>
      <div className="dropdown-menu p-3" style={{ minWidth: "250px" }}>
        <form className="form-design row mx-0" onSubmit={handleApply}>
          <div className="col-12 form-group mb-2">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              className="form-control"
              value={filters?.startDate}
              max={filters?.endDate || ""}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 form-group mb-3">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              className="form-control"
              value={filters?.endDate}
              min={filters?.startDate || today}
              onChange={handleChange}
            />
          </div>

          {/* ✅ Only show Sort By if pathname includes "category" */}
          {location.pathname.includes("category") && (
            <div className="col-12 form-group mb-3">
              <label htmlFor="sortBy">Sort By</label>
              <select
                id="sortBy"
                className="form-select"
                value={filters?.sortBy || 1}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    sortBy: Number(e.target.value),
                    page: 1,
                  }))
                }
              >
                <option value={1}>Name (A → Z)</option>
                <option value={2}>Name (Z → A)</option>
                <option value={3}>Date (Oldest First)</option>
                <option value={4}>Date (Newest First)</option>
              </select>
            </div>
          )}

          <div className="col-12 d-flex justify-content-between">
            <button
              type="button"
              className="comman_btn d-inline-flex w-auto mx-auto px-5"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
