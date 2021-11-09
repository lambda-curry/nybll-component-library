const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport/register',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: null
      }
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: true }
        }
      }
    },
    '@storybook/addon-controls'
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true // type-check stories during Storybook build
  },
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    // config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env')
    ];

    config.module.rules[0].use[0].options.plugins = [
      // // use @babel/plugin-proposal-class-properties for class arrow functions
      // require.resolve('@babel/plugin-proposal-class-properties'),
      // // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      // require.resolve('babel-plugin-remove-graphql-queries'),
      [
        require.resolve('babel-plugin-named-asset-import'),
        {
          loaderMap: {
            svg: {
              ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]'
            }
          }
        }
      ]
    ];

    // Add SASS support
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      include: [path.resolve(__dirname, '../src'), __dirname]
    });

    // Ignore .mjs files https://github.com/treshugart/react-shade/issues/8
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      use: []
    });

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
            plugins: [
              require.resolve('babel-plugin-react-require'),
              require.resolve('@babel/plugin-proposal-class-properties'),
              // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
              // require.resolve('babel-plugin-remove-graphql-queries'),
              require.resolve('babel-plugin-react-docgen')
            ]
          }
        },
        require.resolve('react-docgen-typescript-loader')
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
