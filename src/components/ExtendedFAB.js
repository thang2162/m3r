import React, { useState } from "react";
import { useTheme } from "../theme";
import "../icons.css";
import { setIconType } from "../utility";

const ExtendedFAB = (props) => {
  const {
    label,
    icon,
    iconType,
    onClick,
    style = {},
    ariaProps = {
      "aria-label": "Extended FAB Button",
    },
  } = props;
  const [hover, setHover] = useState(false);
  const theme = useTheme();
  const mergedStyle = theme.extendedFab;
  const formattedStyle = setIconType(theme, iconType);

  return (
    <button
      {...props}
      style={{
        ...mergedStyle.container,
        ...style.container,
        backgroundColor: hover
          ? mergedStyle.hover.backgroundColor
          : mergedStyle.container.backgroundColor,
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setHover(false);
      }}
      {...ariaProps}
    >
      <span
        className={formattedStyle.className}
        style={{
          ...formattedStyle.style.icon,
          ...mergedStyle.icon,
          ...style.icon,
          backgroundColor: hover
            ? mergedStyle.hover.backgroundColor
            : mergedStyle.container.backgroundColor,
        }}
      >
        {icon}
      </span>
      <span
        style={{
          ...mergedStyle.label,
          ...style.label,
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default ExtendedFAB;
