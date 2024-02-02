import React, { FunctionComponent, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "@auth0/auth0-spa-js";
import { GlobalContext } from "./Helpers/contexts.ts";
import Navbar from "./Components/navbar.tsx";
import Favorites from "./Containers/Favorites.tsx";
import Search from "./Containers/Search.tsx";
import { readAllBooks } from "./Services/booksService.ts";
import { IbookList, IfavoritesList } from "./Helpers/interfaces.ts";

const App: FunctionComponent<{
  loginWithRedirect: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | undefined;
  getAccessTokenSilently: () => string;
}> = () => {
  const {
    loginWithRedirect,
    isLoading,
    isAuthenticated,
    user,
    getAccessTokenSilently,
  } = useAuth0();
  const [bookList, setBookList] = useState<IbookList[]>([]);
  const [favoritesList, setFavoritesList] = useState<IfavoritesList[]>([]);
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user)) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, user, loginWithRedirect]);

  useEffect(() => {
    (async () => {
      try {
        const token: string = await getAccessTokenSilently({
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
        const books: IbookList[] = await readAllBooks(accessToken);
        console.log(books);
        setBookList(books);
      })();
  }, [accessToken, !bookList]);

  return (
    <>
      <Navbar />
      <div className="pt-24 p-6 text-orange-800">
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
              element={<Favorites setFavoritesList={setFavoritesList} />}
            />
            <Route
              path="search"
              element={<Search setFavoritesList={setFavoritesList} />}
            />
          </Routes>
        </GlobalContext.Provider>
      </div>
    </>
  );
};

export default App;
