import React from "react";

import { Tooltips } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Tooltips",
  component: Tooltips,
  argTypes: {
    text: { control: "text" },
    child: { control: "object" },
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
  render: ({ text, child, style, ariaProps }) => (
    <Tooltips text={text} style={style} ariaProps={ariaProps}>
      {child}
    </Tooltips>
  ),
};

Primary.args = {
  text: "Tooltip text",
  child: <button style={{ padding: "10px 20px" }}>Hover me</button>,
  style: {},
  ariaProps: {},
};
