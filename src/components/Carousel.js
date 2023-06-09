import React, { useState } from "react";
import { useTheme } from "../theme";
import { Icon } from "./";
import { generateUUID } from "../utility";

const Carousel = (props) => {
  const {
    style = {},
    ariaProps = {
      role: "region",
      "aria-label": "Image Carousel",
    },
    rightIcon = "arrow_forward",
    leftIcon = "arrow_back",
    children,
    sb = false,
  } = props;
  const theme = useTheme();
  const childrenElements = sb === true ? children.props.children : children;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === childrenElements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? childrenElements.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      {...props}
      style={{ ...theme.carousel.container, ...style.container }}
      {...ariaProps}
    >
      <div
        style={{
          ...theme.carousel.slides,
          ...style.slides,
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {childrenElements.map((child, index) => (
          <div
            key={generateUUID()}
            style={{
              ...theme.carousel.slide,
              ...style.slide,
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        style={{ ...theme.carousel.button, ...style.button, left: "1rem" }}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <Icon icon={leftIcon} />
      </button>
      <button
        style={{ ...theme.carousel.button, ...style.button, right: "1rem" }}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <Icon icon={rightIcon} />
      </button>
    </div>
  );
};

export default Carousel;
