/** @type { import('@storybook/react').Preview } */

const { jsxDecorator } = require("@styled/storybook-addon-jsx");

const preview = {
  decorators: [jsxDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
