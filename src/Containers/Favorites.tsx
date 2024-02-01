import React, { FunctionComponent, useEffect, useContext } from "react";
import { GlobalContext } from "../Helpers/contexts.ts";

const Favorites: FunctionComponent = ({ setBookList, setFavoritesList }) => {
  const { accessToken, favoritesList } = useContext(GlobalContext);

  const renderFavorites = favoritesList.map((current) => {
    return (
      <>
        <p>{current.title}</p>
        <p>{current.authors}</p>
        <img src={current.image_url} alt={current.title} />
      </>
    );
  });

  return (
    <>
      <h1 className='flex justify-center text-7xl font-bold'>Favorites</h1>
      {favoritesList.length > 0 && renderFavorites}
    </>
  );
};

export default Favorites;
