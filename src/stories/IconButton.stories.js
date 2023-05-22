import React from "react";
import { IconButton } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    icon: { control: "text" },
    iconType: {
      control: "select",
      options: ["", "regular", "sharp", "outlined", "round"],
    },
    onClick: { action: "clicked" },
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
  render: ({ icon, iconType, style, onClick, ariaProps }) => (
    <IconButton
      icon={icon}
      iconType={iconType}
      style={style}
      ariaProps={ariaProps}
      onClick={onClick}
    />
  ),
};

Primary.args = {
  icon: "home",
  iconType: "",
  style: {},
  ariaProps: {
    role: "button",
    tabIndex: 0,
  },
};
