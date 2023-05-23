import React from "react";
import { useTheme } from "../theme";
import "../icons.css";
import { setIconType } from "../utility";

const IconButton = (
  {
    icon,
    iconType,
    onClick,
    style = {},
    ariaProps = {
      role: "button",
      tabIndex: 0,
    },
  },
  remainingProps
) => {
  const theme = useTheme();
  const formattedStyle = setIconType(theme.iconButton, iconType);
  const mergedStyle = formattedStyle.style;

  return (
    <button
      style={{ ...mergedStyle.container, ...style.container }}
      onClick={onClick}
      {...ariaProps}
      {...remainingProps}
    >
      <i
        className={formattedStyle.className}
        style={{ ...mergedStyle.icon, ...style.icon }}
      >
        {icon}
      </i>
    </button>
  );
};

export default IconButton;
