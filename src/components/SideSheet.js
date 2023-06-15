import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useTheme } from "../theme";
import { useOutsideClick } from "../utility";

const SideSheet = forwardRef((props, ref) => {
  const {
    width = "300px",
    side = "right",
    ariaProps = {
      tabIndex: 0,
      "aria-controls": "sideSheet",
    },
    style = {},
    children,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const mergedStyle = theme.sideSheet;

  const toggleSideSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const getRenderSide = () => {
    if (side === "right") {
      return { right: isOpen ? "0px" : `-${width}` };
    } else {
      return { left: isOpen ? "0px" : `-${width}` };
    }
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, handleClickOutside);

  useImperativeHandle(
    ref,
    () => {
      return {
        toggle: toggleSideSheet,
      };
    },
    []
  );

  return (
    <div {...props} ref={wrapperRef} aria-expanded={isOpen} {...ariaProps}>
      <aside
        id="sideSheet"
        style={{
          ...mergedStyle.container,
          ...style.container,
          ...getRenderSide(),
        }}
      >
        <div style={{ ...mergedStyle.content, ...style.content }}>
          {children}
        </div>
      </aside>
    </div>
  );
});

export default SideSheet;
