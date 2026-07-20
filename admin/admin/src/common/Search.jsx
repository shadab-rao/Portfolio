import React, { useState, useEffect } from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  const [localValue, setLocalValue] = useState(searchTerm || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(localValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [localValue, setSearchTerm]);

  const handleClear = () => {
    setLocalValue("");
    setSearchTerm("");
  };

  return (
    <div className="searchh_box position-relative">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        style={{
          paddingRight: "35px", // 👈 add padding so text doesn't overlap the button
        }}
      />

      {localValue ? (
        <button
          type="button"
          onClick={handleClear}
          className="position-absolute"
          style={{
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-times" />
        </button>
      ) : (
        <button
          type="button"
          className="position-absolute"
          style={{
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "default",
          }}
        >
          <i className="fas fa-search" />
        </button>
      )}
    </div>
  );
};

export default Search;
