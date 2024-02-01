export const addToFavorites = (e, current, favoritesList, setFavoritesList) => {
  e.preventDefault();
  const updatedFavoritesList = favoritesList.concat([current]);
  setFavoritesList(updatedFavoritesList);
};

export const removeFromFavorites = (
  e,
  current,
  favoritesList,
  setFavoritesList
) => {
  e.preventDefault();
  const updatedFavoritesList = favoritesList.filter((item) => {
    const { title } = item;
    if (current.title !== title) {
      return item;
    }
  });
  setFavoritesList(updatedFavoritesList);
};
