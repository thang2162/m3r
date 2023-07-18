import React from "react";
import { useTheme } from "../theme";

const CircularLoader = (props) => {
  const {
    ariaProps = {
      role: "alert",
      "aria-busy": "true",
      "aria-label": "Loading",
    },
    style = {},
  } = props;

  const theme = useTheme();
  const mergedStyle = theme.circularLoader;

  return (
    <div
      {...props}
      style={{ ...mergedStyle.container, ...style.container }}
      {...ariaProps}
    >
      <style>
        {`@keyframes spin {
            to { transform: rotate(360deg); }
          }`}
      </style>
      <div style={{ ...mergedStyle.spinner, ...style.spinner }}></div>
    </div>
  );
};

export default CircularLoader;
