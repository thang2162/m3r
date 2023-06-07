import React, { useState } from "react";
import { RadioButton } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label1: { control: "text" },
    label2: { control: "text" },
    id1: { control: "text" },
    id2: { control: "text" },
    checked1: { control: "boolean" },
    checked2: { control: "boolean" },
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
  render: ({
    label1,
    label2,
    checked1,
    checked2,
    id1,
    id2,
    style,
    ariaProps,
  }) => {
    const [selected, setSelected] = useState(0);
    return (
      <>
        <RadioButton
          label={label1}
          id={id1}
          checked={!checked1 && !checked2 ? selected === 1 : checked1}
          style={style}
          onClick={() => setSelected(1)}
          ariaProps={ariaProps}
        />
        <RadioButton
          label={label2}
          id={id2}
          checked={!checked1 && !checked2 ? selected === 2 : checked2}
          style={style}
          onClick={() => setSelected(2)}
          ariaProps={ariaProps}
        />
      </>
    );
  },
};

Primary.args = {
  label1: "Option 1",
  label2: "Option 2",
  id1: "Option_1",
  id2: "Option_2",
  checked1: false,
  checked2: false,
  style: {},
  ariaProps: {
    tabIndex: "0",
    role: "checkbox",
  },
};
