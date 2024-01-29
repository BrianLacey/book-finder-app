import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Login: FunctionComponent = () => {
  return (
    <>
      "I am the Login page."
      <Link to="favorites">Favorites</Link>
    </>
  );
};

export default Login;
