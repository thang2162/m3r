import React from "react";
import { useTheme } from "../theme";
import { IconButton } from "./";

const TopAppBar = (props) => {
  const {
    menuButtonIcon = "menu",
    menuButtonIconType,
    menuButtonStyle = { icon: { color: "#fff" } },
    hiddenAccessilbityLabel = "Menu", //Accessiblty Enhancement
    title = "App Title",
    onClick,
    style = {},
    ariaProps = {
      "aria-label": "Menu",
      "aria-haspopup": "true",
      "aria-expanded": "false",
    },
    children,
  } = props;

  const theme = useTheme();
  const mergedStyle = theme.topAppBar;

  return (
    <header style={{ ...mergedStyle.container, ...style.container }}>
      <div style={{ ...mergedStyle.leading, ...style.leading }}>
        <IconButton
          icon={menuButtonIcon}
          iconType={menuButtonIconType}
          style={menuButtonStyle}
          onClick={onClick}
          {...ariaProps}
        />
        <span style={{ display: "none" }}>{hiddenAccessilbityLabel}</span>
      </div>
      <div style={{ ...mergedStyle.title, ...style.title }}>{title}</div>
      <div style={{ ...mergedStyle.actions, ...style.actions }}>{children}</div>
    </header>
  );
};

export default TopAppBar;
