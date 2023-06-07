import React from "react";
import { useTheme } from "../theme";

const RadioButton = (props) => {
  const {
    label = "",
    checked = false,
    id = "",
    ariaProps = {
      role: "radiobuttom",
    },
    style = {},
  } = props;

  const theme = useTheme();
  const mergedStyle = theme.radioButton;

  const checkmark_MergedStyle = {
    ...mergedStyle.checkmark,
    ...style.checkmark,
  };
  const checkmark_checked_MergedStyle = {
    ...mergedStyle.checkmark_checked,
    ...style.checkmark_checked,
  };

  return (
    <label
      {...props}
      style={{ ...mergedStyle.container, ...style.container }}
      htmlFor={id}
      {...ariaProps}
    >
      {label}
      <input
        style={{ ...mergedStyle.input, ...style.input }}
        type="radio"
        id={id}
        checked={checked}
      />
      <span
        style={{
          ...mergedStyle.checkmark,
          ...style.checkmark,
          backgroundColor: checked
            ? checkmark_checked_MergedStyle.backgroundColor
            : checkmark_MergedStyle.backgroundColor,
        }}
      ></span>
    </label>
  );
};

export default RadioButton;
