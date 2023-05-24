import React, { useState } from "react";
import { useTheme } from "../theme";

const DatePicker = (props) => {
  const {
    label = "Select a date:",
    onChange,
    value = "",
    ariaProps = {
      "aria-label": "select a date",
      role: "textbox",
    },
    style = {},
  } = props;
  const theme = useTheme();
  const mergedStyle = { ...theme.datePicker, ...style };
  const [selectedDate, setSelectedDate] = useState(value);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div {...props} style={mergedStyle.container}>
      <label
        htmlFor="date-picker-input"
        style={mergedStyle.label}
        id="date-picker-label"
        name="date-picker-label"
      >
        {label}
      </label>
      <input
        type="date"
        id="date-picker-input"
        name="date-picker-input"
        style={mergedStyle.input}
        value={selectedDate}
        onChange={handleDateChange}
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

export default DatePicker;
