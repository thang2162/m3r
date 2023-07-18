import React, { useRef } from "react";
import { FAB, Snackbar } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Snackbar",
  component: Snackbar,
  argTypes: {
    text: { control: "text" },
    timeout: { control: "number" },
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
  render: ({ text, timeout, style, ariaProps }) => {
    const sbRef = useRef(null);
    return (
      <>
        <FAB icon="power_settings_new" onClick={() => sbRef.current.show()} />
        <Snackbar
          ref={sbRef}
          text={text}
          style={style}
          ariaProps={ariaProps}
          timeout={timeout}
        />
      </>
    );
  },
};

Primary.args = {
  text: "This is a snackbar!",
  timeout: 3000,
  style: {},
  ariaProps: {
    "aria-label": "snackbar",
    role: "alert",
  },
};
