import React from "react";
import { Icon } from "../";
import "./assets/fill.css";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    icon: { control: "text" },
    iconType: {
      control: "select",
      options: ["", "sharp", "outlined", "round"],
    },
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
  render: ({ icon, iconType, style, ariaProps }) => (
    <Icon icon={icon} iconType={iconType} style={style} ariaProps={ariaProps} />
  ),
};

Primary.args = {
  icon: "new_releases",
  iconType: "",
  style: {
    color: "green",
    animation: "fill 2s infinite",
    fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
  },
  ariaProps: {
    "aria-label": "icon",
  },
};
