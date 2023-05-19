import React from "react";

import { Badge } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    child: { control: "object" },
    content: { control: "number" },
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
  render: ({ child, style, content, ariaProps }) => (
    <Badge content={content} style={style} ariaProps={ariaProps}>
      {child}
    </Badge>
  ),
};

Primary.args = {
  child: <h1>Test</h1>,
  content: 3,
  style: { content: { backgroundColor: "yellow" } },
  ariaProps: {
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true",
  },
};
