import React, { FunctionComponent } from "react";
import FavoriteButton from "./favoriteButton.tsx";

const BookCard:FunctionComponent = ({ item, handleClick, text }) => {
  const { title, authors, image_url } = item;
  return (
    <>
      <p>{title}</p>
      <p>{authors}</p>
      <img src={image_url} alt={title} />
      <FavoriteButton handleClick={handleClick} text={text} />
    </>
  );
};

export default BookCard;
