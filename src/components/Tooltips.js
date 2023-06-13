import React, { useState } from "react";
import { useTheme } from "../theme";

const Tooltips = (props) => {
  const { text = "", style = {}, ariaProps = {}, children } = props;

  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const theme = useTheme();

  const mergedStyle = theme.tooltips;

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      {...props}
      style={{ ...mergedStyle.container, ...style.container }}
      {...ariaProps}
    >
      <div
        style={{ ...mergedStyle.child, ...style.child }}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-describedby="tooltip"
      >
        {children}
      </div>
      {isTooltipVisible && (
        <div
          style={{
            ...mergedStyle.tooltip,
            ...style.tooltip,
            opacity: isTooltipVisible ? 1 : 0,
          }}
          id="tooltip"
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltips;
