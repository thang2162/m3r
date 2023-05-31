import React, { useState } from "react";
import { useTheme } from "../theme";

const Switch = (props) => {
  const {
    initialValue = false,
    onChange,
    ariaProps = {
      role: "switch",
    },
    style = {},
  } = props;

  const theme = useTheme();
  const mergedStyle = theme.switch;

  const [checked, setChecked] = useState(initialValue);

  const handleToggle = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  const mergedSliderStyle = { ...mergedStyle.slider, ...style.slider };
  const mergedSliderCheckedStyle = {
    ...mergedStyle.slider_checked,
    ...style.slider_checked,
  };

  const mergedSliderAnimationStyleBefore = {
    ...mergedStyle.sliderAnimation_before,
    ...style.sliderAnimation_before,
  };
  const mergedSliderAnimationStyleAfter = {
    ...mergedStyle.sliderAnimation_after,
    ...style.sliderAnimation_after,
  };

  return (
    <label
      {...props}
      style={{
        ...mergedStyle.container,
        ...style.container,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
        aria-checked={checked}
        style={{
          ...mergedStyle.input,
          ...style.input,
        }}
        {...ariaProps}
      />
      <span
        style={{
          ...mergedSliderStyle,
          backgroundColor: checked
            ? mergedSliderCheckedStyle.backgroundColor
            : mergedSliderStyle.backgroundColor,
        }}
      >
        <span
          style={{
            ...mergedStyle.slider_before,
            ...style.slider_before,
            transform: checked
              ? mergedSliderAnimationStyleAfter.transform
              : mergedSliderAnimationStyleBefore.transform,
          }}
        />
      </span>
    </label>
  );
};

export default Switch;
