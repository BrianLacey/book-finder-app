import React, { FunctionComponent, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { readAllBooks } from "../Services/booksService.ts";

const Home: FunctionComponent = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [bookList, setBookList] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // const { getAccessTokenSilently } = useAuth0();
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: "http://localhost:8080",
            scope: "read:books",
          },
        });
        setToken(accessToken);
        const books = await readAllBooks(accessToken);
        console.log(books);
        setBookList(books);
        return;
      } catch (err) {
        console.error(err.message);
        return;
      }
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const books = await readAllBooks(token);
  //     console.log(books);
  //     setBookList(books);
  //   })();
  // }, [token]);

  return (
    <>
      "I am the Home page."
      {bookList}
    </>
  );
};

export default Home;
