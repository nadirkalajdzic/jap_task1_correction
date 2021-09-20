import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

function AuthCustomButton({
  disabled,
  onClick,
  label,
  type,
  classNameAuth,
  link,
}) {
  return (
    <div className={classNameAuth != null ? classNameAuth : ""}>
      <CustomButton
        disabled={disabled}
        onClick={onClick}
        label={label}
        type={type}
      />
      <div className="auth-page-link-to">
        <Link to={link}>Not registered yet? Register now.</Link>
      </div>
    </div>
  );
}

export default AuthCustomButton;
