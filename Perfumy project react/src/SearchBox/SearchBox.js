import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <>
      <div className="searchBar">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <i className="fa fa-search" />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Search your fragrance.."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
