import React, { useState } from "react";
import { Input } from "@material-ui/core";
import {
  invalidStyleObj,
  validStyleObj,
} from "../GeneralStyles/validationStyles";

function CustomInput({
  label,
  errorMessage,
  placeholder,
  type,
  value,
  setValue,
  validate,
}) {
  const onChange = (e) => {
    setValue(e.target.value);
    validate(e.target.value)
      ? setStyle(validStyleObj)
      : setStyle(invalidStyleObj);
  };
  const [style, setStyle] = useState({});

  return (
    <div className="auth-page-input">
      <div className="auth-page-single-input-label">
        {style === invalidStyleObj ? errorMessage : label}
      </div>
      <div className="auth-page-single-input-input">
        <Input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          className="auth-form-input"
          style={style}
        />
      </div>
    </div>
  );
}

export default CustomInput;
