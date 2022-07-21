const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    '@storybook/addon-essentials'
  ],
  core: {
    builder: 'webpack5'
  },
  typescript: {
    check: true
  },
  webpackFinal: async config => {
    // Remove the existing css rule (fixes imports from modules)
    config.module.rules = config.module.rules.filter(rule => rule.test.toString() !== '/\\.css$/');

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    });

    config.module.rules.push({
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    });

    config.plugins = [...(config.plugins || []), new TsconfigPathsPlugin()];

    return config;
  }
};
