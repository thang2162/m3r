import React, { useState, useRef, useReducer, useEffect } from "react";
import { useTheme } from "../theme";
import { generateUUID, useKeyPress } from "../utility";

const AutoComplete = (props) => {
  const {
    initialValue = "",
    placeholder = "Type something...",
    autoComplete = false,
    dropdownOptions = [],
    onChange,
    style = {},
    hiddenLabel = "Search", //Accessiblty Enhancement
    ariaProps = {
      role: "combobox",
    },
  } = props;
  const theme = useTheme();
  const mergedStyle = theme.autoComplete;

  const [value, setValue] = useState(initialValue);
  const [options, setOptions] = useState(dropdownOptions);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    // Replace this with your own logic to fetch options based on the input value
    const fetchedOptions = dropdownOptions.filter((x) =>
      x.toLowerCase().includes(inputValue)
    );

    setOptions(fetchedOptions);
    onChange(inputValue);

    setIsOpen(true);
  };

  const handleOptionClick = (option) => {
    setValue(option);
    setIsOpen(false);
    onChange(option);
    inputRef.current.focus();
  };

  const onFocusIn = (event) => {
    event.preventDefault();
    if (!isOpen && options.length > 0) {
      setIsOpen(true);
    }
  };

  const onFocusOut = (event) => {
    event.preventDefault();
    if (isOpen && options.length > 0) {
      setIsOpen(false);
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "arrowUp":
        return {
          selectedIndex:
            state.selectedIndex !== 0
              ? state.selectedIndex - 1
              : dropdownOptions.length - 1,
        };
      case "arrowDown":
        return {
          selectedIndex:
            state.selectedIndex !== dropdownOptions.length - 1
              ? state.selectedIndex + 1
              : 0,
        };
      case "select":
        return { selectedIndex: action.payload };
      default:
        throw new Error();
    }
  };

  const initialState = { selectedIndex: 0 };

  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const [state, dispatch] = useReducer(reducer, initialState);

  const mergedOptionStyle = { ...mergedStyle.option, ...style.option };
  const mergedOptionHoverStyle = {
    ...mergedStyle.option_hover,
    ...style.option_hover,
  };

  useEffect(() => {
    if (arrowUpPressed) {
      dispatch({ type: "arrowUp" });
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      dispatch({ type: "arrowDown" });
    }
  }, [arrowDownPressed]);

  return (
    <section
      {...props}
      style={{ ...mergedStyle.container, ...style.container }}
      {...ariaProps}
    >
      <label
        htmlFor="autocomplete-input"
        style={{ ...mergedStyle.visuallyHidden, ...style.visuallyHidden }}
      >
        {hiddenLabel}
      </label>
      <input
        autoComplete={autoComplete ? "on" : "off"}
        style={{ ...mergedStyle.input, ...style.input }}
        type="text"
        id="autocomplete-input"
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        aria-labelledby="autocomplete-input"
        aria-expanded={isOpen}
        aria-controls="autocomplete-options"
        onFocus={onFocusIn}
        onBlur={onFocusOut}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleOptionClick(dropdownOptions[state.selectedIndex]);
          }
        }}
      />
      {isOpen && (
        <ul
          style={{ ...mergedStyle.options, ...style.options }}
          id="autocomplete-options"
          role="listbox"
        >
          {options.map((option, index) => (
            <li
              onMouseDown={() => {
                handleOptionClick(option);
              }}
              key={generateUUID()}
              style={{
                ...mergedStyle.option,
                ...style.option,
                backgroundColor:
                  index === state.selectedIndex
                    ? mergedOptionHoverStyle.backgroundColor
                    : mergedOptionStyle.backgroundColor,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor =
                  mergedOptionHoverStyle.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor =
                  mergedOptionStyle.backgroundColor;
              }}
              role="option"
              aria-selected={value === option}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleOptionClick(option);
                }
              }}
              tabIndex={0}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AutoComplete;
