import React from "react";
import links from "../../links/links";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

function AuthCustomButton({ disabled, onClick, label }) {
  return (
    <div className="auth-page-button">
      <CustomButton disabled={disabled} onClick={onClick} label={label} />
      <div className="auth-page-link-to">
        <Link to={links.register.url}>Not registered yet? Register now.</Link>
      </div>
    </div>
  );
}

export default AuthCustomButton;
