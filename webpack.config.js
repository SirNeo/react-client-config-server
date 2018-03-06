var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    commonConfig = require('./config/base.webpack.config.js'),
    devConfig = require('./config/dev.webpack.config.js'),
    webpackMerge = require('webpack-merge'),
    client = require("cloud-config-client");

// load the environment variables from .env
require('dotenv').load();

module.exports = () => {
    return new Promise((resolve, reject) => {        
        client.load({
            endpoint: process.env.CONFIG_SERVER,
            application: "config-react"
        }).then((config) => {
            console.log(`[SUCCESS] The config server ${process.env.CONFIG_SERVER} is up!. Retrieving config...`);
            var configuration = config['_properties'];
            
            resolve(
                webpackMerge.strategy({
                    entry: 'prepend',
                })(commonConfig, {
                    mode: eval(configuration.MODE) || 'development',
                    // Debug ES6 code
                    devtool: (eval(configuration.MODE) == 'development')?'inline-source-map':'',
                    output: {
                        path: path.join(__dirname, eval(configuration.OUTPUT) || './dist' ),
                        filename: '[name].js',
                    },                    
                    devServer: {
                        port: configuration.PORT
                    },
                    plugins: [
                        new webpack.DefinePlugin({
                            config: configuration
                        })
                    ],
                })
            );
            
        }).catch((error) => {
            console.error(`[WARNING] The Config Server ${process.env.CONFIG_SERVER} is down. Webpack takes the default configuration for development`);
            resolve(devConfig);            
        });
    });
}
