const path = require('path');

module.exports = ({ config, mode }) => {
  config.resolve = {
    alias: {
      ['react-use-validated-input']: path.resolve(__dirname, '../src/')
    },
    extensions: [...config.resolve.extensions, '.ts', '.tsx']
  };

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]]
    }
  });
  return config;
};
