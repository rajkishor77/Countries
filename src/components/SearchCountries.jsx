import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchCountries({searchText, setSearchText}) {
  return (
    <div className="search-box">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for a country..."
      />
      <FaSearch className="search-icon" />
    </div>
  );
}

export default SearchCountries;
