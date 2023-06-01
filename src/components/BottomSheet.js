import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useTheme } from "../theme";
import { useOutsideClick } from "../utility";

const BottomSheet = forwardRef((props, ref) => {
  const {
    height = "70vh",
    ariaProps = {
      tabIndex: 0,
      "aria-controls": "bottomSheet",
    },
    style = {},
    children,
  } = props;
  const theme = useTheme();
  const mergedStyle = theme.bottomSheet;

  const [isOpen, setIsOpen] = useState(false);
  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, handleClickOutside);

  useImperativeHandle(
    ref,
    () => {
      return {
        toggle: toggleBottomSheet,
      };
    },
    []
  );

  return (
    <div ref={wrapperRef} aria-expanded={isOpen} {...ariaProps}>
      <aside
        id="bottomSheet"
        style={{
          ...mergedStyle.container,
          ...style.container,
          height: isOpen ? height : 0,
        }}
      >
        <div style={{ ...mergedStyle.content, ...style.content }}>
          {children}
        </div>
      </aside>
    </div>
  );
});

export default BottomSheet;
