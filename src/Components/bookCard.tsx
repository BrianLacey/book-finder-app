import React, { FunctionComponent } from "react";

const BookCard = ({ title, authors, image_url }) => {
  return (
    <>
      <p>{title}</p>
      <p>{authors}</p>
      <img src={image_url} alt={title} />
    </>
  );
};

export default BookCard;
