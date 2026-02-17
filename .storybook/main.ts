import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "staticDirs": ["public"],
  "addons": ["@storybook/addon-docs"],
  "framework": "@storybook/angular",
  "docs": {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
    docsMode: false,
  },

};


export default config;
