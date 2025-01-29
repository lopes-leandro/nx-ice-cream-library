import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/lib/components/**/*.mdx", "../src/lib/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  // webpackFinal: async (config) => {

  //   if (!config.module) return config;

  //   config.module.rules?.push({
  //     test: /\.(scss|sass|css)$/,
  //     use: [
  //       "style-loader",
  //       "css-loader",
  //       {
  //         loader: "sass-loader",
  //         options: {
  //           implementation: require("sass"),
  //           sourceMap: true
  //         }
  //       }],
  //   });

  //   return config;
  // },

};
export default config;
