import React, {
  FunctionComponent,
  useState,
  useEffect,
} from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { GlobalContext } from "./Helpers/contexts.ts";
import Navbar from "./Components/navbar.tsx";
import Favorites from "./Containers/Favorites.tsx";
import Search from "./Containers/Search.tsx";
import { readAllBooks } from "./Services/booksService.ts";

const App: FunctionComponent = () => {
  const {
    loginWithRedirect,
    isLoading,
    isAuthenticated,
    user,
    getAccessTokenSilently,
  } = useAuth0();
  const [bookList, setBookList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user)) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, user, loginWithRedirect]);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "http://localhost:8080",
          },
        });
        setAccessToken(token);
      } catch (err) {
        console.error(err.message);
        return;
      }
    })();
  }, [getAccessTokenSilently, !accessToken]);

  useEffect(() => {
    accessToken &&
      (async () => {
        const books = await readAllBooks(accessToken);
        console.log(books);
        setBookList(books);
      })();
  }, [accessToken, !bookList]);

  return (
    <>
      <Navbar />
      <GlobalContext.Provider
        value={{
          favoritesList,
          bookList,
          accessToken,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Favorites
                setBookList={setBookList}
                setFavoritesList={setFavoritesList}
              />
            }
          />
          <Route
            path="search"
            element={<Search setFavoritesList={setFavoritesList} />}
          />
        </Routes>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
