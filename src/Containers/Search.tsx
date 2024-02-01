import React, { FunctionComponent, useContext, useState } from "react";
import { GlobalContext } from "../Helpers/contexts.ts";
import SearchBar from "../Components/searchBar.tsx";

const Search: FunctionComponent = ({ setFavoritesList }) => {
  const { bookList, favoritesList } = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const updateSearchValue = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchValue(value);
    if (searchValue && !value) {
      setFilteredList([]);
    }
  };
  const filterBySearch = (e) => {
    e.preventDefault();
    const filtered = bookList.filter((current) => {
      const { title, authors } = current;
      const lowerCaseSearch = searchValue.toLowerCase();
      if (
        title.toLowerCase().includes(lowerCaseSearch) ||
        authors.toLowerCase().includes(lowerCaseSearch)
      ) {
        return current;
      }
    });
    setFilteredList(filtered);
  };
  const clearSearchValue = () => {
    setSearchValue("");
    setFilteredList([]);
  };

  const renderBooks = () => {
    let toRender = filteredList.length < 1 ? bookList : filteredList;
    return toRender.map((current) => {
      return (
        <div className="flex flex-col flex-grow flex-shrink basis-96 place-items-center">
          <p>{current.title}</p>
          <p>{current.authors}</p>
          <img src={current.image_url} alt={current.title} />
        </div>
      );
    });
  };

  return (
    <>
    <h1 className='flex justify-center text-7xl font-bold'>Search</h1>
      <SearchBar
        searchValue={searchValue}
        updateSearchValue={updateSearchValue}
        filterBySearch={filterBySearch}
        clearSearchValue={clearSearchValue}
      />
      <div className="flex flex-wrap">
        {bookList.length > 0 && renderBooks()}
      </div>
    </>
  );
};

export default Search;
