import React, { useRef } from "react";
import { FAB, SideSheet } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/SideSheet",
  component: SideSheet,
  argTypes: {
    children: { control: "object" },
    width: { control: "text" },
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
  render: ({ width, style, children, ariaProps }) => {
    const bsRef = useRef(null);
    return (
      <>
        <FAB icon="right_panel_open" onClick={() => bsRef.current.toggle()} />
        <SideSheet
          ref={bsRef}
          width={width}
          style={style}
          ariaProps={ariaProps}
          children={children}
        />
      </>
    );
  },
};

Primary.args = {
  children: (
    <>
      <h2>Side Sheet Content</h2>
      <p>This is an example of a Material Design 3 Side Sheet.</p>
      <p>Click outside to dismiss.</p>
    </>
  ),
  width: "300px",
  style: {},
  ariaProps: {
    tabIndex: 0,
    "aria-controls": "sideSheet",
  },
};
