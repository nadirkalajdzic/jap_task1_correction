import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";
import "./Header.css";

function Header() {
  const history = useHistory();
  const [session, setSession] = useState(
    JSON.parse(localStorage.getItem("session"))
  );

  const routeToHome = () => history.push("/");
  const routeToLogin = () => history.push("/login");
  const routeToRegister = () => history.push("/register");
  const logout = () => {
    localStorage.clear();
    setSession(null);
  };

  return (
    <div className="page-header">
      <div className="header-logo" onClick={routeToHome}>
        Moviesapp
      </div>
      <div className="header-login-or-register">
        {session == null && (
          <>
            <CustomButton onClick={routeToLogin} label="LOGIN" />
            <div className="bold">OR</div>
            <CustomButton onClick={routeToRegister} label="REGISTER" />
          </>
        )}
        {session != null && (
          <>
            <div style={{ fontWeight: 500 }}>User: {session.name}</div>
            <CustomButton onClick={logout} label="LOGOUT" />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
