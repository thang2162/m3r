import React from "react";

import { CircularLoader } from "..";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/CircularLoader",
  component: CircularLoader,
  argTypes: {
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
  render: ({ style, ariaProps }) => (
    <CircularLoader style={style} ariaProps={ariaProps} />
  ),
};

Primary.args = {
  style: { content: { backgroundColor: "yellow" } },
  ariaProps: {
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true",
  },
};
