import React from "react";

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
    advanced: { control: "boolean" },
    style: { control: "object", if: { arg: "advanced" } },
    ariaProps: { control: "object", if: { arg: "advanced" } },
  },
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: ({ rightIcon, leftIcon, children, style, ariaProps }) => (
    <Carousel
      leftIcon={leftIcon}
      rightIcon={rightIcon}
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
  rightIcon: "arrow_forward",
  leftIcon: "arrow_back",
  style: {},
  ariaProps: {
    role: "region",
    "aria-label": "Image Carousel",
  },
};
