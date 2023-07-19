import React from "react";
import { useTheme } from "../theme";

const LinearProgress = (props) => {
  const {
    value = 0,
    ariaProps = {
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
    },
    style = {},
  } = props;

  const theme = useTheme();
  const mergedStyle = theme.linearProgress;

  return (
    <div
      {...props}
      style={{ ...mergedStyle.container, ...style.container }}
      aria-valuenow={value}
      {...ariaProps}
    >
      <div
        style={{ ...mergedStyle.bar, ...style.bar, width: `${value}%` }}
      ></div>
    </div>
  );
};

export default LinearProgress;
