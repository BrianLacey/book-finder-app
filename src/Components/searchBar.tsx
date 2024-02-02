import React, { FunctionComponent } from "react";

const SearchBar: FunctionComponent<{
  searchValue: string;
  updateSearchValue: (e) => void;
  filterBySearch: (e) => void;
  clearSearchValue: () => void;
}> = ({ searchValue, updateSearchValue, filterBySearch, clearSearchValue }) => {
  return (
    <div className="flex py-5">
      <input
        type="text"
        className="flex px-3"
        placeholder="Search..."
        onChange={updateSearchValue}
        value={searchValue}
      />
      <button type="button" className="flex px-3" onClick={filterBySearch}>
        Submit
      </button>
      <button type="button" className="flex px-3" onClick={clearSearchValue}>
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
