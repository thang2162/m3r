import React from "react";
import { Button } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    onClick: { action: 'clicked' },
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
  render: ({ label, style, onClick, ariaProps }) => (
    <Button label={label} style={style} ariaProps={ariaProps} onClick={onClick} />
  ),
};

Primary.args = {
  label: "Click Me!",
  style: {},
  ariaProps: {
    role: "button",
    tabIndex: 0,
  },
};
