var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '../src'),
    entry: {
        app: './index.js',
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'constants' : path.resolve(__dirname, '../src/utils/constants'),
        }                    
    },
    module: {
        rules: [
            // Transpilate ES6 code
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            // Load html in /dist
            { test: /\.html$/, loader: 'html-loader' }
        ],
    },
    plugins: [
        // Generate index.html in /dist
        new HtmlWebpackPlugin({
            filename: 'index.html', // Name of file in ./dist/
            template: 'index.html', // Name of template in ./src
            hash: true,
        }),
        // Set the constants.js as global
        new webpack.ProvidePlugin({
            'constants': 'constants'
        }),
    ],
};