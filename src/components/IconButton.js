import React from "react";
import { useTheme } from "../theme";
import "../icons.css";
import { setIconType } from "../utility";

const IconButton = ({
  icon,
  iconType,
  onClick,
  style = {},
  ariaProps = {
    role: "button",
    tabIndex: 0,
  },
}) => {
  const theme = useTheme();
  const mergedStyle = setIconType({ ...theme.iconButton, ...style }, iconType);

  return (
    <button
      style={{ ...mergedStyle.container, ...style.container }}
      onClick={onClick}
      {...ariaProps}
    >
      <i
        className="material-icons"
        style={{ ...mergedStyle.icon, ...style.icon }}
      >
        {icon}
      </i>
    </button>
  );
};

export default IconButton;
