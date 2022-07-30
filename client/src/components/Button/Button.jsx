import React from "react";
// Styles
import { Btn } from "./Button.styles";

const Button = ({
  type = "button",
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  primary,
  error
}) => {
  return <Btn onClick={onClick} primary={primary || ''} error={error || ''} >{children}</Btn>;
};

export default Button;
