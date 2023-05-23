import React from "react";
import { useTheme } from "../theme";
import { generateUUID, getFirstOrLastListStyle } from "../utility";

const BottomAppBar = (
  {
    style = {},
    ariaProps = {
      role: "navigation",
      "aria-label": "Bottom App Bar",
    },
    children,
    sb = false,
  },
  remainingProps
) => {
  const theme = useTheme();
  const childrenElements = sb === true ? children.props.children : children;
  return (
    <footer
      style={{ ...theme.bottomAppBar.container, ...style.container }}
      {...ariaProps}
      {...remainingProps}
    >
      <nav>
        <ul style={{ ...theme.bottomAppBar.list, ...style.container }}>
          {childrenElements.map((child, index) => (
            <li
              key={generateUUID()}
              style={getFirstOrLastListStyle(
                index,
                childrenElements.length,
                theme.bottomAppBar
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
