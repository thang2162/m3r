import React from "react";
import { AutoComplete } from "../";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/AutoComplete",
  component: AutoComplete,
  argTypes: {
    initialValue: { control: "text" },
    autoComplete: {
      options: [false, true],
      control: { type: "radio" },
      if: { arg: "advanced" },
    },
    placeholder: { control: "text" },
    dropdownOptions: { control: "object" },
    onChange: { action: "changed" },
    advanced: { control: "boolean" },
    style: { control: "object", if: { arg: "advanced" } },
    hiddenLabel: { control: "text", if: { arg: "advanced" } },
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
    initialValue,
    dropdownOptions,
    placeholder,
    hiddenLabel,
    style,
    onChange,
    ariaProps,
  }) => (
    <AutoComplete
      initialValue={initialValue}
      hiddenLabel={hiddenLabel}
      dropdownOptions={dropdownOptions}
      placeholder={placeholder}
      style={style}
      ariaProps={ariaProps}
      onChange={onChange}
    />
  ),
};

Primary.args = {
  initialValue: "",
  placeholder: "Enter or Select an Option.",
  hiddenLabel: "Search",
  dropdownOptions: ["Red", "Green", "Blue"],
  autoComplete: false,
  style: {},
  ariaProps: {
    role: "button",
    tabIndex: 0,
  },
};
