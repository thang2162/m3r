import React from "react";
import { FAB } from "../";
import './assets/fill.css'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/FAB",
  component: FAB,
  argTypes: {
    icon: { control: "text" },
    iconType: {
      control: "select",
      options: ["", "sharp", "outlined", "round"],
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
    <FAB
      icon={icon}
      iconType={iconType}
      style={style}
      ariaProps={ariaProps}
      onClick={onClick}
    />
  ),
};

Primary.args = {
  icon: "add",
  iconType: "",
  style: {
    container: {
      "animation": "fill 2s",
      fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48",
    },
  },
  ariaProps: {
    role: "button",
    tabIndex: 0,
  },
};
