import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useTheme } from "../theme";

const Snackbar = forwardRef(function Snackbar(props, ref) {
  const {
    timeout = 3000,
    text = "",
    ariaProps = {
      "aria-label": "snackbar",
      role: "alert",
    },
    style = {},
  } = props;

  const theme = useTheme();
  const mergedStyle = theme.snackbar;

  const [isVisible, setIsVisible] = useState(false);

  const showSnackbar = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, timeout);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        show: showSnackbar,
      };
    },
    []
  );

  return (
    <div
      {...props}
      style={{
        ...mergedStyle.container,
        ...style.container,
        opacity: isVisible ? "1" : "0",
      }}
      {...ariaProps}
    >
      <span style={{ ...mergedStyle.text, ...style.text }}>{text}</span>
    </div>
  );
});

export default Snackbar;
