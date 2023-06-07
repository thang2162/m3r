import React, { useState } from "react";
import { useTheme } from "../theme";

const Checkbox = (props) => {
  const {
    initialValue = false,
    onChange,
    ariaProps = {
      tabIndex: "0",
      role: "checkbox",
    },
    style = {},
  } = props;

  const theme = useTheme();
  const mergedStyle = theme.checkbox;

  const [isChecked, setIsChecked] = useState(initialValue);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

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
      style={{ ...mergedStyle.container, ...style.containers }}
      {...ariaProps}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ ...mergedStyle.input, ...style.input }}
        aria-checked={isChecked}
        {...ariaProps}
      />
      <span
        style={{
          ...mergedStyle.checkmark,
          ...style.checkmark,
          backgroundColor: isChecked
            ? checkmark_checked_MergedStyle.backgroundColor
            : checkmark_MergedStyle.backgroundColor,
        }}
      >
        <span
          style={{
            ...mergedStyle.checkmarkAfter,
            ...style.checkmarkAfter,
            display: isChecked ? "block" : "none",
          }}
        />
      </span>
    </label>
  );
};

export default Checkbox;
