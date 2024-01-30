import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./logoutButton.tsx";

const Navbar: FunctionComponent = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="favorites">Favorites</Link>
      <Link to="search">Search</Link>
      <LogoutButton />
    </nav>
  );
};

export default Navbar;