import React from "react";

import { TabView, Tab } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Tabs",
  component: TabView,
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
    <TabView style={style} ariaProps={ariaProps}>
      <Tab label="Home">
        <h1>Home</h1>
      </Tab>
      <Tab label="About">
        <h1>About</h1>
      </Tab>
      <Tab label="Contact">
        <h1>Contact</h1>
      </Tab>
    </TabView>
  ),
};

Primary.args = {
  style: {},
  ariaProps: {
    role: "tablist",
  },
};
