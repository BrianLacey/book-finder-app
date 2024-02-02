import React, { FunctionComponent, useContext } from "react";
import { GlobalContext } from "../Helpers/contexts.ts";
import BookCard from "../Components/bookCard.tsx";
import { removeFromFavorites } from "../Helpers/favoritesHandlers.ts";
import { IfavoritesList } from "../Helpers/interfaces.ts";

const Favorites: FunctionComponent<{
  setFavoritesList: React.Dispatch<React.SetStateAction<IfavoritesList[]>>;
}> = ({ setFavoritesList }) => {
  const { favoritesList } = useContext(GlobalContext);

  const renderFavorites: React.JSX.Element[] = favoritesList.map((item) => {
    return (
      <div
        className="flex flex-col flex-grow flex-shrink basis-96 pb-10 place-items-center"
        key={item.title}
      >
        <BookCard
          item={item}
          handleClick={(e) =>
            removeFromFavorites(e, item, favoritesList, setFavoritesList)
          }
          text="Remove from Favorites"
        />
      </div>
    );
  });

  return (
    <>
      <h1 className="flex justify-center text-7xl font-bold pb-16">
        Favorites
      </h1>
      <div className="flex flex-wrap">
        {favoritesList.length > 0 && renderFavorites}
      </div>
    </>
  );
};

export default Favorites;
