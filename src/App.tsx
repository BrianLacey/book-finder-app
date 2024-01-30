import React, { FunctionComponent, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Components/navbar.tsx";
import Home from "./Containers/Home.tsx";
import Favorites from "./Containers/Favorites.tsx";
import Search from "./Containers/Search.tsx";

const App: FunctionComponent = () => {
  const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user)) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, user, loginWithRedirect]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
