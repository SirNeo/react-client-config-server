var webpackMerge = require('webpack-merge'),
    path = require('path'),
    commonConfig = require('./base.webpack.config.js');

module.exports = webpackMerge(commonConfig, {
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[chunkhash].[name].js',
    }
});