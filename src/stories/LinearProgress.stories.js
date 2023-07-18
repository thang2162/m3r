import React from "react";

import { LinearProgress } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/LinearProgress",
  component: LinearProgress,
  argTypes: {
    value: { control: "number" },
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
  render: ({ value, style, ariaProps }) => (
    <LinearProgress
      style={style}
      ariaProps={ariaProps}
      value={value}
    />
  ),
};

Primary.args = {
  value: 25,
  style: {},
  ariaProps: {
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
  },
};
