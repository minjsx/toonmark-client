module.exports = {
  stories: ['../src/**/*.stories.(js|ts|mdx|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs',
    'themeprovider-storybook/register',
  ],
  webpackFinal: async (config) => {
    // do mutation to the config
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
