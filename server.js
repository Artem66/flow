const Hapi = require('hapi');
const Inert = require('inert');
const dotenv = require('dotenv');

dotenv.load();

const PORT = process.env.PORT || 5000;

var server = new Hapi.Server();

server.connection({ port: PORT });

// Hapi Plugins
const hapiPlugins = [Inert];

if (process.env.NODE_ENV === 'development') {
    const Webpack = require('webpack');
    const WebpackPlugin = require('hapi-webpack-plugin');

    const devConfig = require('./webpack.config.development');
    const compiler = new Webpack(devConfig);

    hapiPlugins.push({
        register: WebpackPlugin,
        options: {
            compiler,
            assets: devConfig.assets
        }
    });
}

server.register(hapiPlugins, (error) => {
    if (error) throw error;

    server.route([{
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        }
    }]);

    return server.start((err) => {
        if (err) throw err;
        console.log('Server running at:', server.info.uri);
    });
});