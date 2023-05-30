import React, { useState } from "react";
import { useTheme } from "../theme";

const TimePicker = (props) => {
  const {
    label = "Select a time:",
    onChange,
    value = "",
    ariaProps = {
      "aria-label": "select a time",
      role: "textbox",
    },
    style = {},
  } = props;
  const theme = useTheme();
  const mergedStyle = theme.timePicker;
  const [selectedTime, setSelectedTime] = useState(value);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div {...props} style={{ ...mergedStyle.container, ...style.container }}>
      <label
        htmlFor="time-picker-input"
        style={{ ...mergedStyle.label, ...style.label }}
        id="time-picker-label"
        name="time-picker-label"
      >
        {label}
      </label>
      <input
        type="time"
        id="time-picker-input"
        name="time-picker-input"
        style={{ ...mergedStyle.input, ...style.input }}
        value={selectedTime}
        onChange={handleTimeChange}
        onFocusIn={(e) =>
          (e.target.style = {
            ...mergedStyle.input,
            ...mergedStyle.input_focused,
          })
        }
        onFocusOut={(e) => (e.target.style = mergedStyle.input)}
        {...ariaProps}
      />
    </div>
  );
};

export default TimePicker;
