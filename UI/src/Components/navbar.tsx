import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./logoutButton.tsx";

const Navbar: FunctionComponent = () => {
  return (
    <nav className="fixed top-0 w-screen flex flex-row px-3 py-4 bg-orange-800 text-white">
      <button type="button" className="p-3">
        <Link to="/">Favorites</Link>
      </button>
      <button type="button" className="p-3">
        <Link to="search">Search</Link>
      </button>
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
