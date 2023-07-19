import React from "react";
import { useTheme } from "../theme";
import { generateUUID, getFirstOrLastListStyle } from "../utility";

const BottomAppBar = (props) => {
  const {
    style = {},
    ariaProps = {
      role: "navigation",
      "aria-label": "Bottom App Bar",
    },
    children,
    // sb = false,
  } = props;
  const theme = useTheme();
  const mergedStyle = theme.bottomAppBar;
  return (
    <footer
      {...props}
      style={{ ...mergedStyle.container, ...style.container }}
      {...ariaProps}
    >
      <nav>
        <ul style={{ ...mergedStyle.list, ...style.container }}>
          {children.map((child, index) => (
            <li
              key={generateUUID()}
              style={getFirstOrLastListStyle(
                index,
                children.length,
                mergedStyle
              )}
            >
              {child}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default BottomAppBar;
