import React from "react";
import { useTheme } from "../theme";
import "../icons.css";
import { setIconType } from "../utility";

const Icon = ({
  icon,
  iconType,
  style = {},
  ariaProps = {
    "aria-label": "icon",
  },
  remainingProps
}) => {
  const theme = useTheme();
  const formattedStyle = setIconType(theme, iconType);

  return (
    <span
      className={formattedStyle.className}
      style={{ ...formattedStyle.style.icon, ...style }}
      {...ariaProps}
      {...remainingProps}
    >
      {icon}
    </span>
  );
};

export default Icon;
