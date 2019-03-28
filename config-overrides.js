const {
  override,
  addWebpackAlias,
  fixBabelImports,
  overrideDevServer,
  watchAll,
} = require("customize-cra");
const path = require("path");
const webpack = require('webpack');


const addWebpackPlugin = (provider, ...options) => config => {
  const ProviderPlugin = new webpack[provider](...options)

  config.plugins.push(ProviderPlugin)

  return config
}

module.exports = {
  webpack: override(
    fixBabelImports("babel-plugin-import", {
      libraryName: "antd-mobile",
      style: 'css'
    }),
    addWebpackAlias({
      "@common": path.join(__dirname, "src/common"),
      "@utils": path.join(__dirname, "src/utils"),
      "@runtime": path.join(__dirname, "src/runtime"),
      "@api": path.join(__dirname, "src/api"),
    }),
    addWebpackPlugin('ProvidePlugin', {
      Api: ['@api', 'default'],
    }),
  ),
  devServer: overrideDevServer(
    watchAll()
  )
};
