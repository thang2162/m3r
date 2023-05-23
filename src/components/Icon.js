import React from "react";
import { useTheme } from "../theme";
import "../icons.css";
import { setIconType } from "../utility";

const Icon = (props) => {
  const {
    icon,
    iconType,
    style = {},
    ariaProps = {
      "aria-label": "icon",
    },
  } = props;
  const theme = useTheme();
  const formattedStyle = setIconType(theme, iconType);

  return (
    <span
      {...props}
      className={formattedStyle.className}
      style={{ ...formattedStyle.style.icon, ...style }}
      {...ariaProps}
    >
      {icon}
    </span>
  );
};

export default Icon;
