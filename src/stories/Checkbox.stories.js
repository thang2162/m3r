import React from "react";
import { Checkbox } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    initialValue: { control: "boolean" },
    onChange: { action: "changed" },
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
  render: ({ initialValue, style, onChange, ariaProps }) => (
    <Checkbox
      initialValue={initialValue}
      style={style}
      ariaProps={ariaProps}
      onChange={onChange}
    />
  ),
};

Primary.args = {
  initialValue: false,
  style: {},
  ariaProps: {
    tabIndex: "0",
      role: "checkbox",
  },
};
