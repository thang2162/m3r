import React, { useState } from "react";
import { useTheme } from "../theme";

const SegmentedButton = (props) => {
  const {
    onClick,
    style = {},
    ariaProps = {
      role: "segmented-button",
      "aria-label": "Segmented Button",
    },
    children,
  } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const theme = useTheme();
  const mergedStyle = theme.segmentedButton;

  const mergedActiveButtonStyle = {
    ...mergedStyle.buttonActive,
    ...style.buttonActive,
  };
  const mergedInactiveButtonStyle = {
    ...mergedStyle.buttonInactive,
    ...style.buttonInactive,
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    onClick(index);
  };

  return (
    <div
      style={{
        ...mergedStyle.container,
        ...style.container,
      }}
    >
      {React.Children.map(children, (child, index) => (
        <button
          style={{
            ...mergedStyle.button,
            ...style.button,
            backgroundColor:
              index === activeIndex
                ? mergedActiveButtonStyle.backgroundColor
                : mergedInactiveButtonStyle.backgroundColor,
            color:
              index === activeIndex
                ? mergedActiveButtonStyle.color
                : mergedInactiveButtonStyle.color,
          }}
          onClick={() => handleClick(index)}
          aria-pressed={index === activeIndex}
          role="button"
          tabIndex={index === activeIndex ? "0" : "-1"}
        >
          {child}
        </button>
      ))}
    </div>
  );
};

export default SegmentedButton;
