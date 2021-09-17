import React from "react";
import { Button } from "@material-ui/core";
import useButtonStyle from "../Header/ButtonStyle";

function CustomButton({ label, onClick, startIcon, style, variant, disabled }) {
  const classes = useButtonStyle();

  return (
    <Button
      className={classes.button}
      onClick={onClick}
      style={style}
      variant={variant}
      startIcon={startIcon}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
