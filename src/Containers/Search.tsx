import React, { FunctionComponent, useContext, useState } from "react";
import { GlobalContext } from "../Helpers/contexts.ts";
import SearchBar from "../Components/searchBar.tsx";
import BookCard from "../Components/bookCard.tsx";
import {
  addToFavorites,
  removeFromFavorites,
} from "../Helpers/favoritesHandlers.ts";

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

  const alreadyFavorited = (item) => {
    const { title } = item;
    const flattenedList =
      favoritesList.length > 0
        ? favoritesList.map((current) => current.title)
        : [];
    if (flattenedList.length > 0 && flattenedList.includes(title)) {
      return {
        handleClick: (e) =>
          removeFromFavorites(e, item, favoritesList, setFavoritesList),
        text: "Remove from  Favorites",
      };
    } else {
      return {
        handleClick: (e) =>
          addToFavorites(e, item, favoritesList, setFavoritesList),
        text: "Add to Favorites",
      };
    }
  };

  const renderBooks = () => {
    let toRender = filteredList.length < 1 ? bookList : filteredList;
    return toRender.map((item) => {
      return (
        <div
          className="flex flex-col flex-grow flex-shrink basis-96 pb-10 place-items-center"
          key={item.title}
        >
          <BookCard item={item} {...alreadyFavorited(item)} />
        </div>
      );
    });
  };

  return (
    <>
      <h1 className="flex justify-center text-7xl font-bold">Search</h1>
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
