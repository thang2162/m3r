import React from "react";
import { useTheme } from "../theme";

const Badge = (props) => {
  const {
    content,
    style = {},
    ariaProps = {
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
    },
    children,
  } = props;
  const theme = useTheme();
  return (
    <div  {...props} style={{ ...theme.badge.container, ...style.container }}>
      {children}
      {content && (
        <div
          style={{ ...theme.badge.content, ...style.content }}
          {...ariaProps}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Badge;
