const path = require('path');

const webpackConfig = {
    resolve: {
        extensions: ['', '.js'],
        alias: {
            vendor: 'node_modules'
        }
    },
    entry: [
        path.resolve(__dirname, './app')
    ],
    assets: {
        quiet: true,
        publicPath: '/build/'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = webpackConfig;
