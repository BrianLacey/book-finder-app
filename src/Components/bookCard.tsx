import React, { FunctionComponent } from "react";
import FavoriteButton from "./favoriteButton.tsx";

const BookCard = ({ item, handleClick, text }) => {
  return (
    <>
      <p>{item.title}</p>
      <p>{item.authors}</p>
      <img src={item.image_url} alt={item.title} />
      <FavoriteButton
        handleClick={handleClick}
        text={text}
      />
    </>
  );
};

export default BookCard;
