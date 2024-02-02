import React, { FunctionComponent } from "react";
import FavoriteButton from "./favoriteButton.tsx";
import { IfavoritesList } from "../Helpers/interfaces";

const BookCard: FunctionComponent<{
  item: IfavoritesList;
  handleClick: (e) => void;
  text: string;
}> = ({ item, handleClick, text }) => {
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
