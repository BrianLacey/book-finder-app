import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Containers/Login.tsx";
import Favorites from "./Containers/Favorites.tsx";
import Search from "./Containers/Search.tsx";

const App: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="favorites" Component={Favorites} />
        <Route path="search" Component={Search} />
      </Routes>
    </>
  );
};

export default App;
