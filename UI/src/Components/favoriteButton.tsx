import React, { FunctionComponent } from "react";

const FavoriteButton = ({ handleClick, text }) => {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default FavoriteButton;
