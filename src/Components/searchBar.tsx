import React, { FunctionComponent } from "react";

const SearchBar: FunctionComponent = ({
  searchValue,
  updateSearchValue,
  filterBySearch,
  clearSearchValue,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={updateSearchValue}
        value={searchValue}
      />
      <button type="button" onClick={filterBySearch}>
        Submit
      </button>
      <button type="button" onClick={clearSearchValue}>
        Clear
      </button>
    </>
  );
};

export default SearchBar;
