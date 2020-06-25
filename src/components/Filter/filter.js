import React from "react";

const Filter = ({ value, handleChange }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Search</span>
      </div>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="Search by name"
      />
    </div>
  );
};

export default Filter;
