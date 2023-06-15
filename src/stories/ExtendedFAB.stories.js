import React from "react";
import { ExtendedFAB } from "../";
import "./assets/fill.css";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/ExtendedFAB",
  component: ExtendedFAB,
  argTypes: {
    label: { control: "text" },
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
  render: ({ label, icon, iconType, style, onClick, ariaProps }) => (
    <ExtendedFAB
      label={label}
      icon={icon}
      iconType={iconType}
      style={style}
      ariaProps={ariaProps}
      onClick={onClick}
    />
  ),
};

Primary.args = {
  label: "Add Item",
  icon: "add",
  iconType: "",
  style: {},
  ariaProps: {
    "aria-label": "Extended FAB Button",
  },
};
