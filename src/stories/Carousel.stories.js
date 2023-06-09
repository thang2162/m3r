import React from "react";
import "./assets/fill.css";

import { Carousel } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    controls: { exclude: ["sb"] },
  },
  argTypes: {
    children: { control: "object" },
    rightIcon: { control: "text" },
    leftIcon: { control: "text" },
    iconType: {
      control: "select",
      options: ["", "sharp", "outlined", "round"],
    },
    advanced: { control: "boolean" },
    style: { control: "object", if: { arg: "advanced" } },
    iconStyle: { control: "object", if: { arg: "advanced" } },
    ariaProps: { control: "object", if: { arg: "advanced" } },
  },
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: ({
    rightIcon,
    leftIcon,
    iconStyle,
    iconType,
    children,
    style,
    ariaProps,
  }) => (
    <Carousel
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconType={iconType}
      iconStyle={iconStyle}
      style={style}
      ariaProps={ariaProps}
      sb={true}
    >
      {children}
    </Carousel>
  ),
};

Primary.args = {
  children: (
    <>
      <img
        src="https://placehold.co/600x400?text=Slide+1"
        alt="Slide 1"
        style={{ width: "100%", height: 400 }}
      />
      <img
        src="https://placehold.co/600x400?text=Slide+2"
        alt="Slide 2"
        style={{ width: "100%", height: 400 }}
      />
      <img
        src="https://placehold.co/600x400?text=Slide+3"
        alt="Slide 3"
        style={{ width: "100%", height: 400 }}
      />
    </>
  ),
  rightIcon: "arrow_circle_right",
  leftIcon: "arrow_circle_left",
  iconType: "",
  iconStyle: {
    color: "red",
    animation: "fill 2s infinite",
    fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
  },
  style: {},
  ariaProps: {
    role: "region",
    "aria-label": "Image Carousel",
  },
};
