import React from "react";
import { useTheme } from "../theme";

const Badge = (
  {
    content,
    style = {},
    ariaProps = {
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
    },
    children,
  },
  remainingProps
) => {
  const theme = useTheme();
  return (
    <div
      style={{ ...theme.badge.container, ...style.container }}
      {...remainingProps}
    >
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
