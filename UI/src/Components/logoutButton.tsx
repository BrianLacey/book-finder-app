import React, { FunctionComponent } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton: FunctionComponent = () => {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      className="p-3"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      logout
    </button>
  );
};

export default LogoutButton;
