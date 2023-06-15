import React, { useRef } from "react";
import { FAB, Drawer } from "..";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Drawer",
  component: Drawer,
  argTypes: {
    children: { control: "object" },
    side: {
      control: 'radio',
      options: ['left', 'right'],
    },
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
  render: ({ width, style, side, children, ariaProps }) => {
    const bsRef = useRef(null);
    return (
      <>
        <FAB icon="right_panel_open" onClick={() => bsRef.current.toggle()} />
        <Drawer
          ref={bsRef}
          side={side}
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
      <p>This is an example of a Material Design 3 Drawer.</p>
      <p>Click outside to dismiss.</p>
    </>
  ),
  width: "300px",
  side: 'right',
  style: {},
  ariaProps: {
    tabIndex: 0,
    "aria-controls": "Drawer",
  },
};
