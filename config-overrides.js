const { override, disableEsLint, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  // disable eslint in webpack
  disableEsLint(),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
  }),
);
