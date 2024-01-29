import React from "react";
import "./Filters.css";
import FiltersNames from "./FiltersNames";

const Filters = () => {
  return (
    <>
      <div className="filters-container">
        <ul className="filters-ul">
          {FiltersNames.map((item) => (
            <li className="filter-items">{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Filters;
