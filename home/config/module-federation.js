const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'home',
    filename: 'remoteEntry.js',
    remotes: {
      shell: 'shell@http://localhost:3002/client/remoteEntry.js',
    },
    exposes: {
      './App': './src/bootstrap',
    },
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      'react-dom': {
        singleton: true,
        requiredVersion: deps['react-dom'],
      },
    },
  }),
  server: [
    new UniversalFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      isServer: true,
      remotes: {
        shell: 'shell@http://localhost:3002/server/remoteEntry.js',
      },
      exposes: {
        './App': './src/bootstrap',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
};
