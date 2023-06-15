import React from "react";
import { useTheme } from "../theme";
import "../icons.css";
import { setIconType } from "../utility";

const FAB = (props) => {
  const {
    icon,
    iconType,
    onClick,
    style = {},
    ariaProps = {
      "aria-label": "FAB Button"
    },
  } = props;
  const theme = useTheme();
  const mergedStyle = theme.fab;
  const formattedStyle = setIconType(theme, iconType);

  return (
    <button
      {...props}
      style={{ ...mergedStyle.container, ...style.container }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = mergedStyle.hover.backgroundColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = mergedStyle.container.backgroundColor;
      }}
      {...ariaProps}
    >
      <span
        className={formattedStyle.className}
        style={{
          ...formattedStyle.style.icon,
          ...mergedStyle.icon,
          ...style.icon,
        }}
      >
        {icon}
      </span>
    </button>
  );
};

export default FAB;
