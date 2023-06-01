import React from "react";

import { TopAppBar } from "..";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/TopAppBar",
  component: TopAppBar,
  argTypes: {
    children: { control: "object" },
    menuButtonIcon: { control: "text" },
    menuButtonIconType: {
      control: "select",
      options: ["", "sharp", "outlined", "round"],
    },
    title: { control: "text" },
    onClick: { action: "clicked" },
    advanced: { control: "boolean" },
    style: { control: "object", if: { arg: "advanced" } },
    ariaProps: { control: "object", if: { arg: "advanced" } },
    hiddenAccessilbityLabel: { control: "text", if: { arg: "advanced" } },
  },
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: ({
    children,
    style,
    ariaProps,
    onClick,
    menuButtonIcon,
    menuButtonIconType,
    title,
    hiddenAccessilbityLabel,
  }) => (
    <TopAppBar
      style={style}
      title={title}
      hiddenAccessilbityLabel={hiddenAccessilbityLabel}
      ariaProps={ariaProps}
      onClick={onClick}
      menuButtonIcon={menuButtonIcon}
      menuButtonIconType={menuButtonIconType}
    >
      {children}
    </TopAppBar>
  ),
};

Primary.args = {
  title: "App Title",
  menuButtonIcon: "menu",
  menuButtonIconType: "",
  children: (
    <>
      <button>Button 1</button>
      &nbsp;
      <button>Button 2</button>
    </>
  ),
  style: {},
  ariaProps: {
    role: "navigation",
    "aria-label": "Bottom App Bar",
  },
  hiddenAccessilbityLabel: "Menu",
};
