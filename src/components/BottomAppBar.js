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
    sb = false,
  } = props;
  const theme = useTheme();
  const childrenElements = sb === true ? children.props.children : children;
  return (
    <footer
      {...props}
      style={{ ...theme.bottomAppBar.container, ...style.container }}
      {...ariaProps}
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
