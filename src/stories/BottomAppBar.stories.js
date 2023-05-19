import React from "react";

import { BottomAppBar } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/BottomAppBar",
  component: BottomAppBar,
  parameters: {
    controls: { exclude: ["sb"] },
  },
  argTypes: {
    children: { control: "object" },
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
  render: ({ children, style, ariaProps }) => (
    <BottomAppBar style={style} ariaProps={ariaProps} sb={true}>
      {children}
    </BottomAppBar>
  ),
};

Primary.args = {
  children: (
    <>
      <button>Home</button>
      <button>About</button>
      <button>Contact</button>
    </>
  ),
  style: {},
  ariaProps: {
    role: "navigation",
    "aria-label": "Bottom App Bar",
  },
};
