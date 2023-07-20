import React from "react";

import { SegmentedButton } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/SegmentedButton",
  component: SegmentedButton,
  // parameters: {
  //   controls: { exclude: ["sb"] },
  // },
  argTypes: {
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
  render: ({ style, ariaProps, onClick }) => (
    <SegmentedButton style={style} ariaProps={ariaProps} onClick={onClick}>
      <span>Button 1</span>
      <span>Button 2</span>
      <span>Button 3</span>
    </SegmentedButton>
  ),
};

Primary.args = {
  style: {},
  ariaProps: {
    role: "segmented-button",
    "aria-label": "Bottom App Bar",
  },
};
