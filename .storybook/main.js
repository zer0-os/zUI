module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "storybook-addon-sass-postcss",
    // {
    //   name: "storybook-addon-sass-postcss",
    //   options: {
    //     sassLoaderOptions: {
    //       implementation: require("sass"),
    //     },
    //   },
    // },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  features: {
    postcss: false,
  },
};
