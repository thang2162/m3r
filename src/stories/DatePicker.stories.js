import React from "react";
import { DatePicker } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/DatePicker",
  component: DatePicker,
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    advanced: { control: "boolean" },
    style: { control: "object", if: { arg: "advanced" } },
  },
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: ({ label, style, value, onChange, ariaProps }) => (
    <DatePicker
      label={label}
      style={style}
      value={value}
      ariaProps={ariaProps}
      onChange={onChange}
    />
  ),
};

Primary.args = {
  label: "Select a date:",
  value: "2023-05-01",
  style: {},
  ariaProps: {
    "aria-label": "Select a date",
    role: "textbox",
  },
};
