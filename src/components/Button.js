import React from "react";
import { useTheme } from "../theme";

const Button = ({
  label,
  onClick,
  ariaProps = {
    role: "button",
    tabIndex: 0,
  },
  style = {},
  children,
}) => {
  const theme = useTheme();
  const mergedStyle = { ...theme.button, ...style };

  return (
    <button
      {...ariaProps}
      style={{ ...mergedStyle.container, ...style.container }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = mergedStyle.hover.backgroundColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = mergedStyle.container.backgroundColor;
      }}
      onMouseDown={(e) => {
        e.target.style.backgroundColor = mergedStyle.active.backgroundColor;
      }}
      onMouseUp={(e) => {
        e.target.style.backgroundColor = mergedStyle.hover.backgroundColor;
      }}
      onClick={onClick}
    >
      {children || label}
    </button>
  );
};

export default Button;
