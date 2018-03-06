var webpackMerge = require('webpack-merge'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    commonConfig = require('./base.webpack.config.js');

module.exports = webpackMerge.strategy({
  entry: 'prepend',
})(commonConfig, {
  mode: 'development',
  // Debug ES6 code
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  devServer: {
    port: 3000,
  },
  plugins: [

  ],
});