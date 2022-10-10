const tsconfigPaths = require("vite-tsconfig-paths");

module.exports = {
  stories: [
    "../src/common/components/**/*.stories.mdx",
    "../src/common/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },
  viteFinal: async (config) => {
    config.plugins.push(tsconfigPaths.default());

    return config;
  }
}